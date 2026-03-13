import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function BlogPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">Offlo 블로그</h1>
                <p className="footer-page-subtitle">디지털 웰니스와 생산성 향상을 위한 최신 소식과 팁을 만나보세요.</p>
            </motion.div>

            <motion.div 
                className="footer-card-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {[
                    { title: "도파민 중독에서 벗어나는 5가지 방법", date: "2026. 03. 10", desc: "무의식적인 스크롤링이 뇌에 미치는 영향과 이를 끊어내는 실천 가이드." },
                    { title: "오플로 개발 다이어리 #1", date: "2026. 02. 28", desc: "AI 기반 스크린타임 분석 기능을 기획하고 개발하게 된 배경 스토리를 공개합니다." },
                    { title: "디지털 디톡스가 수면에 미치는 놀라운 효과", date: "2026. 02. 15", desc: "오플로 사용자를 대상으로 한 4주간의 테스트 결과, 수면의 질이 42% 향상되었습니다." },
                ].map((post, i) => (
                    <div className="footer-card" key={i}>
                        <div style={{ fontSize: '0.85rem', color: '#D97757', fontWeight: 600, marginBottom: '8px' }}>{post.date}</div>
                        <h2 className="footer-card-title">{post.title}</h2>
                        <p className="footer-card-desc">{post.desc}</p>
                        <span className="footer-card-action">글 읽기 →</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
