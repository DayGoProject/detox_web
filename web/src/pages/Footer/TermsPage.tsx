import React from 'react';
import { motion } from 'framer-motion';
import './FooterPages.css';

export default function TermsPage() {
    return (
        <div className="footer-page">
            <motion.div 
                className="footer-page-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="footer-page-title">이용 약관</h1>
                <p className="footer-page-subtitle">시행일자: 2026. 03. 13.</p>
            </motion.div>

            <motion.div 
                className="legal-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h2>제 1 조 (목적)</h2>
                <p>본 약관은 Offlo(이하 "회사")가 제공하는 디지털 디톡스 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                
                <h2>제 2 조 (용어의 정의)</h2>
                <ul>
                    <li>1. "서비스"란 구현되는 단말기와 상관없이 회원이 이용할 수 있는 Offlo 웹 및 확장 프로그램을 의미합니다.</li>
                    <li>2. "회원"이란 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                    <li>3. "스크린 타임 데이터"란 회원이 서비스에 자발적으로 업로드하는 스마트폰 이용 통계 캡처 이미지를 말합니다.</li>
                </ul>

                <h2>제 3 조 (서비스의 제공 등)</h2>
                <p>회사는 다음과 같은 서비스를 제공합니다.</p>
                <ul>
                    <li>1. AI 기반 스마트폰 스크린 타임 분석 및 피드백 제공</li>
                    <li>2. 목표 설정 및 게이미피케이션(식물 키우기) 요소 제공</li>
                    <li>3. PC 브라우저용 사이트 차단 기능 제공</li>
                </ul>

                <h2>제 4 조 (서비스의 변경 및 중단)</h2>
                <p>회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다. 서비스의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등을 통고합니다.</p>
            </motion.div>
        </div>
    );
}
