import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function PartnersPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">파트너십 제휴</h1>
                <p className="footer-page-subtitle">오플로와 함께 디지털 웰니스 문화를 만들어갈 파트너를 환영합니다.</p>
            </motion.div>

            <motion.div 
                className="footer-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <form onSubmit={(e) => { e.preventDefault(); alert("파트너십 제안이 전송되었습니다."); }}>
                    <div className="form-group">
                        <label className="form-label">회사/소속명</label>
                        <input className="form-input" type="text" placeholder="예: 구글 코리아" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">담당자 메일</label>
                        <input className="form-input" type="email" placeholder="example@domain.com" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">제휴 카테고리</label>
                        <select className="form-input" required>
                            <option value="">선택해주세요</option>
                            <option value="b2b">기업/학교 B2B 도입문의</option>
                            <option value="marketing">공동 마케팅/캠페인</option>
                            <option value="tech">기술 제휴 (API 연동 등)</option>
                            <option value="other">기타</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">제안 내용</label>
                        <textarea className="form-textarea" placeholder="오플로와 함께 어떤 시너지를 낼 수 있을지 자유롭게 적어주세요." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">제안서 제출하기</button>
                </form>
            </motion.div>
        </div>
    );
}
