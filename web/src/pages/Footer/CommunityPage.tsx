import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function CommunityPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">Offlo 커뮤니티</h1>
                <p className="footer-page-subtitle">디지털 디톡스를 실천하는 사람들과 서로의 팁을 공유하세요.</p>
            </motion.div>

            <motion.div 
                className="legal-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ textAlign: 'center', padding: '60px 40px' }}
            >
                <div style={{ fontSize: '4rem', marginBottom: '24px' }}>💬</div>
                <h2 style={{ marginTop: 0 }}>오픈 채팅방 참여하기</h2>
                <p style={{ margin: '0 auto 32px', maxWidth: '400px' }}>
                    스마트폰 사용 시간을 줄이고 싶은 사람들의 모임입니다. 매일 아침 자신의 스크린 타임을 공유하고 동기부여를 얻어가세요!
                </p>
                <a href="#" className="submit-btn" style={{ display: 'inline-block', width: 'auto', padding: '14px 40px', textDecoration: 'none' }}>
                    카카오톡 오픈채팅 입장
                </a>
            </motion.div>
        </div>
    );
}
