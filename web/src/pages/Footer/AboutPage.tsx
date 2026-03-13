import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function AboutPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">Offlo 소개</h1>
                <p className="footer-page-subtitle">우리는 기술이 인간을 지배하는 것이 아니라 돕는 세상을 만듭니다.</p>
            </motion.div>

            <motion.div 
                className="legal-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ textAlign: 'center', padding: '60px 40px' }}
            >
                <h2>Our Mission</h2>
                <p style={{ fontSize: '1.2rem', color: '#1c1916', fontWeight: 500, margin: '24px 0 48px' }}>
                    "디지털 기기와의 건강한 공존(Digital Wellness)을 통해<br/>사람들이 온전한 자신만의 흐름(Flow)을 되찾도록 돕는다."
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', textAlign: 'left', marginTop: '48px' }}>
                    <div>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌱</div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>성장 (Growth)</h3>
                        <p style={{ fontSize: '0.95rem' }}>통제와 억압이 아닌 식물을 키우는 긍정적인 경험으로 작은 성공을 쌓아갑니다.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🤖</div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>AI 기술 (Technology)</h3>
                        <p style={{ fontSize: '0.95rem' }}>복잡한 연동 없이 스크린 타임 캡처만으로 사용자의 패턴을 스마트하게 분석합니다.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🤝</div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>연결 (Connection)</h3>
                        <p style={{ fontSize: '0.95rem' }}>오프라인에서의 진짜 삶과 소중한 사람들과의 연결을 회복하기 위해 노력합니다.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
