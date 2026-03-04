/* ============================================================
   animations.js — 스크롤 기반 reveal 애니메이션 & 패럴랙스
   ============================================================ */

// ── 요소 페이드인 (Intersection Observer) ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => revealObserver.observe(el));

// ── 프로그레스 바 애니메이션 ──
const progressFill = document.querySelector('.progress-fill');
if (progressFill) {
    const progressObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = progressFill.style.width;
                    progressFill.style.width = '0';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            progressFill.style.width = width;
                        });
                    });
                    progressObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );
    progressObserver.observe(progressFill);
}

// ── 히어로 미묘한 패럴랙스 ──
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
    if (!hero) return;
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
    }
}, { passive: true });

// ── 부드러운 앵커 스크롤 ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
