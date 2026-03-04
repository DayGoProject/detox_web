/* ============================================================
   nav.js — 네비게이션 스크롤 효과 & 햄버거 메뉴
   ============================================================ */

const nav = document.getElementById('nav');

// 스크롤 시 Nav 배경 강화
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

// 모바일 햄버거 메뉴 토글
const hamburger = document.getElementById('nav-hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-open');
    });
}
