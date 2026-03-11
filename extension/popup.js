// ─── Offlo Extension — Popup Script (Firebase Auth + Firestore 동기화) ─────────

// ── Firebase 설정 (Firestore 보안 규칙으로 보호됨) ───────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyCISf3zbLdO3PBlZhOlA36YvGSx541Tz9A",
    authDomain: "offlo-app.firebaseapp.com",
    projectId: "offlo-app",
    storageBucket: "offlo-app.firebasestorage.app",
    messagingSenderId: "876416485211",
    appId: "1:876416485211:web:889e97fb3ac9a04c353c7e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

const KEYS = { RULES: 'offlo_rules', STREAK: 'offlo_streak' };

// ── 화면 전환 ────────────────────────────────────────────────────────────────
function showLogin() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('main-screen').classList.add('hidden');
}

function showMain() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
}

// ── Firestore 경로 ────────────────────────────────────────────────────────────
function rulesRef(uid) {
    return db.collection('users').doc(uid).collection('extensionRules');
}

// ── Firestore → chrome.storage.local 동기화 ──────────────────────────────────
async function syncFromFirestore(uid) {
    try {
        const snapshot = await rulesRef(uid).get();
        const rules = snapshot.docs.map(doc => doc.data());
        await chrome.storage.local.set({ [KEYS.RULES]: rules });
        return rules;
    } catch (e) {
        console.error('Firestore sync error:', e);
        const d = await chrome.storage.local.get(KEYS.RULES);
        return d[KEYS.RULES] || [];
    }
}

// ── Firestore에 규칙 전체 저장 ────────────────────────────────────────────────
async function saveRulesToFirestore(uid, rules) {
    try {
        const batch = db.batch();
        // 기존 문서 삭제
        const existing = await rulesRef(uid).get();
        existing.docs.forEach(doc => batch.delete(doc.ref));
        // 새 규칙 추가
        rules.forEach((rule, i) => {
            const ref = rulesRef(uid).doc(`rule_${i}`);
            batch.set(ref, rule);
        });
        await batch.commit();
    } catch (e) {
        console.error('Firestore save error:', e);
    }
}

// ── 유틸 ─────────────────────────────────────────────────────────────────────
function fmtMs(ms) {
    if (ms <= 0) return '차단 해제됨';
    const s = Math.floor(ms / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${h}시간 ${m}분 ${sec}초 남음`;
    if (m > 0) return `${m}분 ${sec}초 남음`;
    return `${sec}초 남음`;
}

function fmtLimit(min) {
    const h = Math.floor(min / 60), m = min % 60;
    if (h > 0 && m > 0) return `${h}시간 ${m}분`;
    if (h > 0) return `${h}시간`;
    return `${m}분`;
}

async function loadData() {
    const d = await chrome.storage.local.get([KEYS.RULES, KEYS.STREAK]);
    return {
        rules: d[KEYS.RULES] || [],
        streak: d[KEYS.STREAK] || { count: 0, lastDate: '' },
    };
}

// ── 렌더링 ────────────────────────────────────────────────────────────────────
async function render() {
    const { rules, streak } = await loadData();
    const now = Date.now();

    // 스트릭 배지
    const badge = document.getElementById('streak-badge');
    const scnt = document.getElementById('streak-count');
    if (streak.count > 0) { badge.classList.remove('hidden'); scnt.textContent = streak.count; }
    else badge.classList.add('hidden');

    // 요약
    const summary = document.getElementById('today-summary');
    const activeCount = rules.filter(r => r.blockUntil && now < r.blockUntil).length;
    if (rules.length === 0) {
        summary.textContent = '사이트를 추가해 차단하세요';
    } else {
        summary.textContent = `${activeCount}개 차단 중 / 총 ${rules.length}개`;
    }

    renderStats(rules, now);
    renderRules(rules, now);
}

function isBlocked(rule, now) {
    return rule.blockUntil && now < rule.blockUntil;
}

function renderStats(rules, now) {
    const el = document.getElementById('stats-list');
    if (rules.length === 0) {
        el.innerHTML = '<div class="empty-state">아직 등록된 사이트가 없어요</div>';
        return;
    }
    el.innerHTML = rules.map(rule => {
        const blocked = isBlocked(rule, now);
        const remaining = blocked ? rule.blockUntil - now : 0;
        const total = rule.limitMinutes * 60000;
        const pct = blocked ? Math.round(((total - remaining) / total) * 100) : 100;
        const cls = blocked ? 'over' : 'ok';
        return `
      <div class="stat-item ${blocked ? 'blocked' : 'achieved'}">
        <div class="stat-top">
          <span class="stat-domain">${rule.domain}</span>
          <span class="stat-badge ${cls}">${blocked ? '차단 중' : '해제됨'}</span>
        </div>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill ${cls}" style="width:${pct}%"></div>
        </div>
        <div class="stat-time">
          <span>${blocked ? fmtMs(remaining) : '✅ 차단 해제됨'}</span>
          <span>제한 ${fmtLimit(rule.limitMinutes)}</span>
        </div>
      </div>`;
    }).join('');
}

function renderRules(rules, now) {
    const list = document.getElementById('rules-list');
    if (rules.length === 0) {
        list.innerHTML = '<div class="empty-state">추가된 목록이 없어요</div>';
        return;
    }
    list.innerHTML = rules.map((rule, idx) => {
        const blocked = isBlocked(rule, now);
        return `
      <li class="rule-item">
        <div class="rule-info">
          <span class="rule-domain">${rule.domain}</span>
          <span class="rule-limit">${blocked ? '🚫 차단 중' : '✅ 해제됨'} · ${fmtLimit(rule.limitMinutes)} 설정</span>
        </div>
        <button class="btn-delete" data-idx="${idx}" title="삭제">✕</button>
      </li>`;
    }).join('');

    list.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', async () => {
            const uid = auth.currentUser?.uid;
            if (!uid) return;
            const idx = parseInt(btn.dataset.idx);
            const d = await chrome.storage.local.get(KEYS.RULES);
            const rs = d[KEYS.RULES] || [];
            rs.splice(idx, 1);
            await chrome.storage.local.set({ [KEYS.RULES]: rs });
            await saveRulesToFirestore(uid, rs);
            render();
        });
    });
}

// ── 사이트 추가 ───────────────────────────────────────────────────────────────
document.getElementById('add-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const domainInput = document.getElementById('domain-input');
    const limitInput = document.getElementById('limit-input');
    const errorEl = document.getElementById('form-error');

    const domain = domainInput.value.trim().toLowerCase()
        .replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
    const limitMinutes = parseInt(limitInput.value);

    function showError(msg) {
        errorEl.textContent = msg;
        errorEl.classList.remove('hidden');
    }

    if (!domain || !/^[a-z0-9.-]+\.[a-z]{2,}$/.test(domain)) return showError('올바른 도메인을 입력하세요');
    if (!limitMinutes || limitMinutes < 1 || limitMinutes > 1440) return showError('1~1440분을 입력하세요');

    const d = await chrome.storage.local.get(KEYS.RULES);
    const rs = d[KEYS.RULES] || [];
    if (rs.some(r => r.domain === domain)) return showError('이미 등록된 사이트입니다');

    rs.push({ domain, limitMinutes, blockUntil: Date.now() + limitMinutes * 60 * 1000 });
    await chrome.storage.local.set({ [KEYS.RULES]: rs });
    await saveRulesToFirestore(uid, rs);

    domainInput.value = '';
    limitInput.value = '';
    errorEl.classList.add('hidden');
    render();
});

document.getElementById('open-offlo-btn').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://offlo-app.web.app/garden' });
});

// ── 로그인 ────────────────────────────────────────────────────────────────────
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;
    const errorEl = document.getElementById('login-error');
    const loginBtn = document.getElementById('login-btn');

    errorEl.classList.add('hidden');
    loginBtn.disabled = true;
    loginBtn.textContent = '로그인 중...';

    try {
        await auth.signInWithEmailAndPassword(email, password);
        // onAuthStateChanged가 화면 전환 처리
    } catch (err) {
        loginBtn.disabled = false;
        loginBtn.textContent = '로그인';
        let msg = '로그인에 실패했습니다.';
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
            msg = '이메일 또는 비밀번호가 올바르지 않습니다.';
        } else if (err.code === 'auth/too-many-requests') {
            msg = '너무 많은 시도가 있었습니다. 잠시 후 다시 시도하세요.';
        } else if (err.code === 'auth/network-request-failed') {
            msg = '네트워크 연결을 확인해 주세요.';
        }
        errorEl.textContent = msg;
        errorEl.classList.remove('hidden');
    }
});

// ── 로그아웃 ──────────────────────────────────────────────────────────────────
document.getElementById('logout-btn').addEventListener('click', async () => {
    // 보안: 로그아웃 시 로컬 규칙 데이터 삭제
    await chrome.storage.local.remove([KEYS.RULES, KEYS.STREAK]);
    await auth.signOut();
});

// ── 인증 상태 감지 ────────────────────────────────────────────────────────────
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // 로그인 → Firestore에서 동기화 후 메인 화면
        await syncFromFirestore(user.uid);
        showMain();
        render();
        setInterval(render, 1000);
    } else {
        // 미로그인 → 로그인 화면
        showLogin();
    }
});
