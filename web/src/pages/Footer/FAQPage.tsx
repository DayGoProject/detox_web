import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FooterPages.css';

const faqs = [
    { q: "확장 프로그램은 크롬에서만 호환되나요?", a: "현재 구글 크롬 웨어스토어에 등록되어 있으며, 네이버 웨일, 마이크로소프트 엣지 등 크로미움(Chromium) 기반 브라우저에서는 모두 설치하고 사용할 수 있습니다." },
    { q: "스마트폰 사용 시간 이미지는 어떻게 올리나요?", a: "아이폰(iOS)은 설정 > 스크린 타임 화면을, 안드로이드는 설정 > 디지털 웰빙 화면을 캡처한 뒤, Offlo 웹사이트 메인 화면이나 대시보드의 '스크린 타임 올리기' 버튼을 눌러 사진을 첨부하시면 됩니다." },
    { q: "오플로에서 내 데이터를 볼 수 있나요?", a: "업로드된 스크린 타임 이미지는 오직 AI 분석을 위해서만 일회성으로 전송되며 별도로 저장되지 않습니다. 분석된 결과 텍스트만 닉네임과 함께 저장되어 서비스 제공에 사용됩니다." },
    { q: "정원의 식물은 어떻게 키우나요?", a: "PC 확장 프로그램에서 차단 제한을 설정하고 목표를 달성할 때마다 보상(물방울)이 주어집니다. 대시보드의 '나의 정원'에서 식물에게 물을 주면 식물이 다음 레벨로 성장합니다." }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">자주 묻는 질문</h1>
                <p className="footer-page-subtitle">서비스 이용 중 궁금한 점이 있으신가요?</p>
            </motion.div>

            <motion.div 
                className="faq-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {faqs.map((faq, i) => (
                    <div 
                        key={i} 
                        className="faq-item" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        <div className="faq-q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Q. {faq.q}</span>
                            <span>{openIndex === i ? '−' : '+'}</span>
                        </div>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="faq-a" style={{ paddingTop: '16px', borderTop: '1px solid #f0f0f0', marginTop: '16px' }}>
                                        A. {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
