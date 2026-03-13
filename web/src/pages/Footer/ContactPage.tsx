import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function ContactPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">고객 문의</h1>
                <p className="footer-page-subtitle">서비스 이용 중 불편한 점이나 제안하고 싶으신 점을 남겨주세요.</p>
            </motion.div>

            <motion.div 
                className="footer-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <form onSubmit={(e) => { e.preventDefault(); alert("문의가 접수되었습니다. 가입하신 이메일로 답변을 보내드립니다."); }}>
                    <div className="form-group">
                        <label className="form-label">답변 받을 이메일</label>
                        <input className="form-input" type="email" placeholder="example@domain.com" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">문의 유형</label>
                        <select className="form-input" required>
                            <option value="">선택해주세요</option>
                            <option value="account">계정 및 로그인 문제</option>
                            <option value="extension">확장 프로그램 작동 오류</option>
                            <option value="billing">결제 및 환불</option>
                            <option value="feature">기능 제안</option>
                            <option value="other">기타</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">문의 내용</label>
                        <textarea className="form-textarea" placeholder="상세한 내용을 적어주시면 더 빠르고 정확한 답변이 가능합니다." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn" style={{ background: '#1c1916' }}>문의 접수하기</button>
                </form>
            </motion.div>
        </div>
    );
}
