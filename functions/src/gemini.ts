import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

// Initialize the Gemini API client
// Note: You must set the GEMINI_API_KEY environment variable in your functions config.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Safety settings to comply with Google's Terms of Service.
// These thresholds block any content that could be flagged as harmful
// and help prevent account suspension due to TOS violations.
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export async function analyzeImageWithGemini(mimeType: string, imageBuffer: Buffer) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
    }

    // Choose the model with safety settings applied
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        safetySettings,
    });

    // SYSTEM context clarifies the purpose to reduce PII-related flags:
    // - Instructs the model to ONLY parse app usage statistics (numerical data)
    // - Explicitly forbids reading notifications, names, phone numbers, and faces
    const prompt = `
[SYSTEM CONTEXT - Privacy Protection]
This image is a smartphone "Screen Time" statistics screenshot voluntarily submitted by the user to analyze their own digital habits.
Your ONLY task is to extract app usage time data (app name + minutes used) visible in the statistics section.

STRICT PRIVACY RULES - You MUST follow these:
- DO NOT read, extract, or process any notification content (messages, contacts, emails)
- DO NOT identify or describe any faces or people visible in the background or wallpaper
- DO NOT process any phone numbers, names, or personal identifiers
- DO NOT extract any financial, health, or sensitive app data beyond app names and usage minutes
- IGNORE everything except the screen time statistics chart/list itself

[TASK]
You are a Screen Time Analysis AI. Extract the following data from the statistics portion of the image and respond ONLY in the specified JSON format. Do not output any other text.

1. totalMinutes: Total usage time shown on screen (convert to minutes. e.g. 3h 10m → 190)
2. apps: App usage statistics shown (top 3–5 apps only)
   - name: App name (e.g. Instagram, YouTube, Safari)
   - minutes: Usage time in minutes
3. advice: A short, friendly detox tip based on the usage (1 sentence, approx. 50 characters in Korean)

Output JSON format ONLY:
{
  "totalMinutes": 190,
  "apps": [
    { "name": "Instagram", "minutes": 110 },
    { "name": "YouTube", "minutes": 45 },
    { "name": "Safari", "minutes": 20 }
  ],
  "advice": "인스타그램 사용 시간이 길어요. 내일은 조금 더 줄여보는 건 어떨까요?"
}
`;

    const imageParts = [
        {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType,
            },
        },
    ];

    try {
        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;

        // Check if the response was blocked by safety filters
        const candidate = response.candidates?.[0];
        if (!candidate || candidate.finishReason === 'SAFETY') {
            throw new Error("Image was blocked by safety filters. Please ensure the screenshot only shows screen time statistics.");
        }

        const text = response.text();

        // Remove markdown formatting if the model wraps the JSON response in ```json ... ```
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/```\n([\s\S]*?)\n```/);
        const jsonString = jsonMatch ? jsonMatch[1] : text;

        return JSON.parse(jsonString.trim());
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
}
