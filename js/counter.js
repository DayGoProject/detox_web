/* ============================================================
   counter.js — Stats 섹션 숫자 카운터 애니메이션
   ============================================================ */

/**
 * 숫자를 0에서 target까지 부드럽게 올립니다.
 * @param {HTMLElement} el      - 숫자를 표시할 요소
 * @param {string|number} target - 목표 숫자 (정수 또는 소수)
 * @param {number} duration     - 애니메이션 시간(ms), 기본 1800ms
 */
function animateCounter(el, target, duration = 1800) {
    const start = performance.now();
    const isDecimal = String(target).includes('.');
    const parsed = parseFloat(target);

    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * parsed;
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = isDecimal ? parsed.toFixed(1) : parsed;
    };
    requestAnimationFrame(update);
}

// Stats 섹션이 뷰포트에 진입하면 카운터 시작
const statNumbers = document.querySelectorAll('.stat-number');
const statsSection = document.getElementById('stats');
let countersStarted = false;

if (statsSection) {
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    statNumbers.forEach(el => animateCounter(el, el.dataset.target));
                }
            });
        },
        { threshold: 0.4 }
    );
    statsObserver.observe(statsSection);
}
