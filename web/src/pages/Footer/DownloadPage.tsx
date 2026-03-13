import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function DownloadPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">Offlo 다운로드</h1>
                <p className="footer-page-subtitle">지금 바로 오플로를 시작하고 디지털 중독에서 벗어나세요.</p>
            </motion.div>

            <motion.div 
                className="footer-card-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="footer-card">
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💻</div>
                    <h2 className="footer-card-title">PC 확장 프로그램</h2>
                    <p className="footer-card-desc">Chrome, Edge 등 Chromium 기반 브라우저에서 동작하며 사이트 차단 기능을 제공합니다.</p>
                    <a href="https://github.com/DayGoProject/Offlo" target="_blank" rel="noreferrer" className="submit-btn" style={{ textAlign: 'center', textDecoration: 'none' }}>
                        GitHub에서 다운로드
                    </a>
                </div>

                <div className="footer-card" style={{ opacity: 0.7 }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📱</div>
                    <h2 className="footer-card-title">모바일 앱 (준비 중)</h2>
                    <p className="footer-card-desc">iOS와 Android에서 스크린 타임 연동 및 모바일 디톡스 기능이 제공될 예정입니다.</p>
                    <button className="submit-btn" style={{ background: '#ccc', cursor: 'not-allowed' }}>
                        출시 알림 받기
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
