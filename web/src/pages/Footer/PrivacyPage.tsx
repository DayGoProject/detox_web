import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function PrivacyPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">개인정보처리방침</h1>
                <p className="footer-page-subtitle">시행일자: 2026. 03. 13.</p>
            </motion.div>

            <motion.div 
                className="legal-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h2>1. 개인정보의 수집 및 이용 목적</h2>
                <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 개인정보보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <ul>
                    <li>- 홈페이지 회원가입 및 관리 (본인 식별 인증, 회원자격 유지)</li>
                    <li>- 서비스 제공 (스크린 타임 분석 결과, 개인화된 웰니스 팁 제공)</li>
                </ul>
                
                <h2>2. 수집하는 개인정보의 항목</h2>
                <ul>
                    <li>- 필수항목: 이메일 주소, 비밀번호, 닉네임</li>
                    <li>- 선택항목: 스크린 타임 캡처 이미지 (분석 목적으로만 일회성 사용 후 즉시 폐기)</li>
                </ul>

                <h2>3. 개인정보의 보유 및 이용기간</h2>
                <p>회사는 법령에 따른 개인정보 보유, 이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.</p>
                <ul>
                    <li>- 회원 가입 및 관리 : 회원 탈퇴시까지</li>
                </ul>

                <h2>4. 정보주체의 권리, 의무 및 그 행사방법</h2>
                <p>이용자는 개인정보주체로서 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.</p>
            </motion.div>
        </div>
    );
}
