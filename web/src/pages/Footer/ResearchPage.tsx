import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function ResearchPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">연구 자료</h1>
                <p className="footer-page-subtitle">Offlo 팀이 연구하고 분석한 디지털 웰빙 인사이트 리포트입니다.</p>
            </motion.div>

            <motion.div 
                className="footer-card-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {[
                    { title: "2025 스마트폰 과의존 실태조사 분석", type: "PDF 리포트", pages: "42p" },
                    { title: "스크린타임이 업무 몰입도에 미치는 영향", type: "백서 (Whitepaper)", pages: "18p" },
                    { title: "Z세대의 소셜 미디어 피로도와 극복 사례", type: "케이스 스터디", pages: "24p" },
                ].map((post, i) => (
                    <div className="footer-card" key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <span style={{ fontSize: '0.85rem', color: '#D97757', fontWeight: 600 }}>{post.type}</span>
                            <span style={{ fontSize: '0.85rem', color: '#888' }}>{post.pages}</span>
                        </div>
                        <h2 className="footer-card-title">{post.title}</h2>
                        <p className="footer-card-desc" style={{ flexGrow: 1 }}></p>
                        <button className="submit-btn" style={{ background: '#f5f5f5', color: '#1c1916', marginTop: 'auto' }}>
                            다운로드 (준비 중)
                        </button>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
