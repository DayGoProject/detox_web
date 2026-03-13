import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function CookiesPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">쿠키 정책</h1>
                <p className="footer-page-subtitle">시행일자: 2026. 03. 13.</p>
            </motion.div>

            <motion.div 
                className="legal-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h2>1. 쿠키란 무엇인가요?</h2>
                <p>쿠키는 웹사이트를 방문할 때 귀하의 컴퓨터 또는 모바일 기기에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 귀하의 행동 및 기본 설정을 기억하여 개인화된 경험을 제공하도록 돕습니다.</p>
                
                <h2>2. 쿠키 사용 목적</h2>
                <p>Offlo(이하 "회사")는 다음과 같은 목적으로 쿠키를 사용합니다:</p>
                <ul>
                    <li><strong>필수 쿠키:</strong> 서비스의 핵심 기능을 작동시키기 위해 반드시 필요합니다 (예: 로그인 세션 유지, 보안).</li>
                    <li><strong>분석 쿠키:</strong> 이용자들이 웹사이트를 어떻게 사용하는지 이해하고 성능을 개선하기 위해 익명화된 데이터를 수집합니다 (예: Google Analytics).</li>
                    <li><strong>기능성 쿠키:</strong> 사용자의 언어 설정이나 이전 방문 옵션을 기억하여 편의를 제공합니다.</li>
                </ul>

                <h2>3. 쿠키 관리는 어떻게 하나요?</h2>
                <p>대부분의 웹 브라우저는 쿠키를 허용하도록 기본 설정되어 있습니다. 귀하는 브라우저 설정을 변경하여 <strong>쿠키 사용을 거부하거나 삭제</strong>할 수 있습니다. 단, 필수 쿠키를 비활성화할 경우 서비스의 일부 기능이 제대로 동작하지 않을 수 있습니다.</p>

                <h2>4. 문의</h2>
                <p>쿠키 정책에 대해 궁금한 점이 있으시다면 고객센터를 통해 문의해주세요.</p>
            </motion.div>
        </div>
    );
}
