/* ============================================================
   announcement.js — 공지 배너 닫기 기능
   ============================================================ */

const announcementBar = document.getElementById('announcement-bar');
const closeBtn = document.getElementById('announcement-close');

if (closeBtn && announcementBar) {
    closeBtn.addEventListener('click', () => {
        announcementBar.style.maxHeight = announcementBar.scrollHeight + 'px';
        requestAnimationFrame(() => {
            announcementBar.style.transition = 'max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease';
            announcementBar.style.maxHeight = '0';
            announcementBar.style.opacity = '0';
            announcementBar.style.padding = '0';
            announcementBar.style.overflow = 'hidden';
        });
    });
}
