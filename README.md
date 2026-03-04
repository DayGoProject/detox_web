# 🌿 DetoxDay — 디지털 중독에서 자유롭게

> 스마트폰 사용 습관을 분석하고, 나만을 위한 디톡스 플랜을 제공하는 디지털 웰니스 플랫폼

<br />

## 📖 프로젝트 소개

**DetoxDay**는 현대인의 디지털 과의존 문제를 해결하기 위해 만들어진 웹 랜딩 페이지 프로젝트입니다.

Typeform의 홈페이지 UI/UX 구조와 Toss의 타이포그래피 감성을 참고하여, 깔끔하고 현대적인 디자인으로 제작되었습니다. 단 3가지 색상만을 사용해 브랜드 아이덴티티를 일관되게 유지하는 것을 목표로 설계되었습니다.

<br />

## ✨ 주요 특징

| 항목 | 내용 |
|---|---|
| 🎨 **미니멀 컬러 시스템** | `#D97757` (테라코타) · `#1C1916` (웜 다크) · `#FAF8F4` (오프화이트) |
| 🔤 **프리미엄 타이포그래피** | Playfair Display (세리프 헤딩) + Pretendard (한글 본문) |
| 🎞️ **부드러운 애니메이션** | 스크롤 기반 페이드인, 숫자 카운터, 프로그레스 바 |
| 📱 **반응형 레이아웃** | 데스크탑 · 태블릿 · 모바일 완벽 지원 |
| ⚡ **순수 HTML/CSS/JS** | 별도 프레임워크 없이 가볍고 빠르게 동작 |

<br />

## 🗂️ 페이지 구성

```
📢 Announcement Bar  — 상단 공지 배너 (클릭 시 닫기 가능)
🧭 Navigation        — 스크롤 감지 sticky 네비게이션
🦸 Hero Section      — 메인 히어로 + 스크린타임 데모 카드
📊 Stats Section     — 실사용 효과 통계 (카운터 애니메이션)
🔍 Feature Section 1 — 데이터 분석 기능 소개 (텍스트 좌 / 카드 우)
🎯 Feature Section 2 — 맞춤 챌린지 기능 소개 (카드 좌 / 텍스트 우)
🚀 CTA Banner        — 전환 유도 배너
🦶 Footer            — 4컬럼 링크 그리드
```

<br />

## 🛠️ 기술 스택

- **HTML5** — 시맨틱 마크업
- **CSS3** — CSS Custom Properties (디자인 토큰), Flexbox, Grid
- **Vanilla JS** — Intersection Observer API, 카운터 애니메이션, 스크롤 이벤트
- **Google Fonts** — Playfair Display, Pretendard

<br />

## 🚀 로컬 실행 방법

별도의 빌드 과정 없이 바로 실행할 수 있습니다.

### 방법 1 — `npx serve` 사용 (권장)

```bash
npx serve -l 3000 .
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 방법 2 — Python HTTP 서버

```bash
# Python 3
python -m http.server 3000
```

### 방법 3 — VS Code Live Server

VS Code의 **Live Server** 확장 프로그램으로 `index.html`을 바로 열기

<br />

## 📁 파일 구조

```
detox_web/
├── index.html   # 전체 페이지 마크업
├── style.css    # 디자인 시스템 & 섹션별 스타일
├── main.js      # 인터랙션 & 애니메이션 스크립트
└── README.md
```

<br />

## 🎨 디자인 레퍼런스

- **레이아웃 · 구조**: [Typeform](https://typeform.com) 홈페이지
- **타이포그래피 · 감성**: [Toss](https://toss.im) 웹사이트

<br />

## 📄 라이선스

개인 학습 및 포트폴리오 목적으로 제작된 프로젝트입니다.

---

<div align="center">
  Made with 🧡 by DetoxDay Team
</div>
