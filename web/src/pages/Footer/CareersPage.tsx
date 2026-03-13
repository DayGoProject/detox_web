import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function CareersPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">채용 공고</h1>
                <p className="footer-page-subtitle">Offlo와 함께 현대인의 스마트폰 과의존 문제를 해결할 인재를 찾습니다.</p>
            </motion.div>

            <motion.div 
                className="footer-card-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {[
                    { role: "Frontend Developer", type: "Full-Time", desc: "React/Next.js를 활용하여 사용자가 사랑하는 프로덕트의 UI/UX를 개발합니다." },
                    { role: "Product Designer", type: "Full-Time", desc: "오플로 프로덕트 전반의 시각적인 퀄리티와 게이미피케이션 경험을 고도화합니다." },
                    { role: "Data Scientist (AI)", type: "Contract", desc: "스크린타임 패턴을 분석하고 개인화된 디톡스 추천 알고리즘을 설계합니다." },
                ].map((job, i) => (
                    <div className="footer-card" key={i}>
                        <div style={{ fontSize: '0.85rem', color: '#D97757', fontWeight: 600, marginBottom: '8px' }}>{job.type}</div>
                        <h2 className="footer-card-title">{job.role}</h2>
                        <p className="footer-card-desc">{job.desc}</p>
                        <span className="footer-card-action">지원하기 →</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
