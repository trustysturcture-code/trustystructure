/* 건축시공기술사 암기마스터 — app.js
 * 데이터: window.Q (data/*.js) — 각 문항 스키마는 data/README 참조
 * 인라인 표기: [[핵심단어]] → 형광/빈칸,  {{수치}} → 적색수치/빈칸
 */
(function () {
  'use strict';
  // ---------- 문항 세트: week(이번주 109–180) / dw(디테일원 용어250) ----------
  const SETS = { week: '이번주 용어 109–180', dw: '디테일원 용어 250' };
  let SET = 'week'; try { SET = localStorage.getItem('amg_set') || 'week'; } catch (e) {}
  try { const qs = new URLSearchParams(location.search).get('set'); if (qs) SET = qs; } catch (e) {}
  if (!SETS[SET] || (SET === 'dw' && !window.DW)) SET = 'week';
  const WEEK = (window.Q || []).slice();
  WEEK.forEach(x => { if (!x.img || !x.img.length) x.img = (window.IMGS || {})[x.no] || []; });
  function buildDW() {
    const W = window.DW || {}, D = window.D1 || {}, out = [], d1 = {};
    Object.keys(W).map(Number).sort((a, b) => a - b).forEach(no => {
      const w = W[no];
      if (w.ref) { // 이번주 72문항과 같은 용어 → 기존 답안 재사용
        const q = WEEK.find(x => x.no === w.ref); if (!q) return;
        out.push(Object.assign({}, q, { no, title: w.title || q.title, ref: w.ref, src: (q.src || '') + ' · 이번주 No.' + w.ref + ' 재사용' }));
        if (D[w.ref]) d1[no] = D[w.ref];
        return;
      }
      const ww = w.www || { what: w.wwh[0], why: w.wwh[1], how: w.wwh[2] };
      out.push({ no, cat: w.cat, type: '용어', title: w.title, key: w.key || [], www: ww,
        // 디테일 답안(det.secs)이 있으면 사용, fig: 'MAIN' 은 요약 도해(svg)로 치환
        secs: w.det && w.det.secs ? w.det.secs.map(u => u.fig ? Object.assign({}, u, { fig: (Array.isArray(u.fig) ? u.fig : [u.fig]).map(f => f === 'MAIN' ? { svg: w.svg, cap: '[도해] ' + (w.figT || '') } : f) }) : u)
          : [{ h: '정의', def: w.def }, { h: w.figT || '원리 및 도해', fig: { svg: w.svg, cap: '[도해] ' + (w.figT || '') } }]
            .concat((w.subs || []).map(u => ({ h: u.h, ul: u.pts }))),
        effect: w.effect || w.msg, mnemo: w.mnemo, src: w.src, img: [] });
      d1[no] = w;
    });
    window.D1 = d1; return out;
  }
  const Q = (SET === 'dw' ? buildDW() : WEEK).sort((a, b) => a.no - b.no);
  const $ = (s, el = document) => el.querySelector(s);
  // 온라인(공유 링크) 모드: 인쇄창·확인창·로컬 PDF 링크가 막힌 환경 → 해당 기능 숨김
  const ONLINE = !!window.AMG_ONLINE;
  const WEB = !!window.AMG_WEB; // GitHub Pages 웹판(자동 업데이트)
  if (ONLINE || WEB) document.documentElement.classList.add('online');
  // ---------- 버전·업데이트 ----------
  const APP_VERSION = window.AMG_VERSION || 'dev', UPDATE_URL = window.AMG_UPDATE_URL || '';
  function updateBanner(html) {
    const b = document.createElement('div'); b.className = 'upd'; b.innerHTML = html + ' <button class="btn" onclick="this.parentNode.remove()">닫기</button>';
    document.body.prepend(b);
  }
  // 웹판: 서비스워커 등록 → 인터넷 연결 시 항상 최신 파일, 끊기면 저장본으로 실행
  if (WEB && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
    fetch('version.json', { cache: 'no-store' }).then(r => r.json()).then(v => {
      let seen = null; try { seen = localStorage.getItem('amg_ver'); localStorage.setItem('amg_ver', v.version); } catch (e) {}
      let rl = null; try { rl = sessionStorage.getItem('amg_rl'); } catch (e) {}
      if (v.version !== APP_VERSION && rl !== v.version) { try { sessionStorage.setItem('amg_rl', v.version); } catch (e) {} location.reload(); }
      else if (seen && seen !== v.version) updateBanner(`✅ 새 버전으로 업데이트되었습니다 (v${esc0(v.version)}) ${esc0(v.note || '')}`);
    }).catch(() => {});
  }
  // 단일 파일판(북노트 등): 인터넷이 되면 새 버전 확인 → 알림
  if (window.AMG_OFFLINE && UPDATE_URL) {
    fetch(UPDATE_URL + 'version.json', { cache: 'no-store' }).then(r => r.json()).then(v => {
      if (v.version !== APP_VERSION) updateBanner(`🔔 새 버전 v${esc0(v.version)} 이 있습니다. ${esc0(v.note || '')} <a class="btn p" href="${UPDATE_URL}">온라인 최신판 열기</a>`);
    }).catch(() => {});
  }
  function esc0(t) { return String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]); }
  const main = $('#main');
  const LS = {
    // 학습기록은 세트별로 따로 저장 (테마·세트 선택은 공용)
    key(k) { return SET === 'week' || k === 'amg_theme' || k === 'amg_eink' ? k : k + '_' + SET; },
    get(k, d) { try { return JSON.parse(localStorage.getItem(this.key(k))) ?? d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(this.key(k), JSON.stringify(v)); } catch (e) {} }
  };
  let srs = LS.get('amg_srs', {});
  let exam = LS.get('amg_exam', {});
  let state = { tab: LS.get('amg_tab', 'simple'), cur: LS.get('amg_cur', Q[0] ? Q[0].no : 0), cat: '전체', q: '', czLv: 1 };
  if (!Q.find(x => x.no === state.cur) && Q[0]) state.cur = Q[0].no;

  // shared svg defs (arrow marker)
  document.body.insertAdjacentHTML('afterbegin',
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 z" style="fill:var(--svg-ink)"/></marker>' +
    '<marker id="arrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0,0 L10,5 L0,10 z" style="fill:var(--red)"/></marker>' +
    '<pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
    '<line x1="0" y1="0" x2="0" y2="6" style="stroke:var(--svg-ink);stroke-width:.8"/></pattern>' +
    '</defs></svg>');

  // ---------- helpers ----------
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  function fmt(s, mode) {
    // mode: 'read' | 'cz1' (keywords hidden) | 'cz2' (keywords+numbers hidden)
    let t = esc(s);
    t = t.replace(/\[\[(.+?)\]\]/g, (m, k) => mode === 'cz1' || mode === 'cz2'
      ? `<span class="cz" title="클릭하여 확인">${k}</span>` : `<mark class="k">${k}</mark>`);
    t = t.replace(/\{\{(.+?)\}\}/g, (m, k) => mode === 'cz2'
      ? `<span class="cz" title="클릭하여 확인">${k}</span>` : `<span class="num">${k}</span>`);
    t = t.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    return t;
  }
  const plain = s => String(s || '').replace(/\[\[|\]\]|\{\{|\}\}|\*\*/g, '');
  const arr = v => v == null ? [] : Array.isArray(v) ? v : [v];
  const lvOf = no => (srs[no] && srs[no].box) || 0;
  const cats = ['전체', ...Array.from(new Set(Q.map(x => x.cat)))];

  // ---------- sidebar ----------
  function renderChips() {
    $('#catChips').innerHTML = cats.map(c => `<button class="${c === state.cat ? 'on' : ''}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
  }
  function filtered() {
    const q = state.q.trim().toLowerCase();
    return Q.filter(x => (state.cat === '전체' || x.cat === state.cat) &&
      (!q || (x.no + ' ' + x.title + ' ' + arr(x.key).join(' ')).toLowerCase().includes(q)));
  }
  function markList() {
    const on = document.querySelector('#list .li.on'); if (on) on.classList.remove('on');
    const li = document.querySelector('#list .li[data-no="' + state.cur + '"]');
    if (!li) return renderList();
    li.classList.add('on');
    const r = li.getBoundingClientRect(), p = $('#list').getBoundingClientRect();
    if (r.top < p.top || r.bottom > p.bottom) li.scrollIntoView({ block: 'nearest' });
  }
  function renderList() {
    let html = '', last = '';
    filtered().forEach(x => {
      if (x.cat !== last) { html += `<div class="grp">${esc(x.cat)}</div>`; last = x.cat; }
      html += `<div class="li ${x.no === state.cur ? 'on' : ''}" data-no="${x.no}"><span class="n">${x.no}</span><span>${esc(x.title)}</span><span class="dot lv${lvOf(x.no)}"></span></div>`;
    });
    $('#list').innerHTML = html || '<div class="grp">검색 결과 없음</div>';
  }

  // ---------- answer renderer ----------
  function renderSec(s, i, mode) {
    let h = `<div class="sec" data-i="${i}"><h3><span class="hn">${i + 1}</span>${esc(s.h)}</h3>`;
    if (s.def) h += `<div class="def">${fmt(s.def, mode)}</div>`;
    if (s.p) h += `<p style="margin:4px 0">${fmt(s.p, mode)}</p>`;
    if (s.flow) h += `<div class="flow">${arr(s.flow).map(f => `<span>${fmt(f, mode)}</span>`).join('<i>→</i>')}</div>`;
    if (s.ul) h += `<ul>${arr(s.ul).map(li => `<li>${fmt(li, mode)}</li>`).join('')}</ul>`;
    arr(s.fig).forEach(f => { h += `<figure>${f.svg}${f.cap ? `<figcaption>${fmt(f.cap, 'read')}</figcaption>` : ''}</figure>`; });
    arr(s.tbl).forEach(t => {
      h += `<table class="t">${t.head ? `<tr>${t.head.map(c => `<th>${fmt(c, 'read')}</th>`).join('')}</tr>` : ''}` +
        t.rows.map(r => `<tr>${r.map((c, j) => j === 0 && !t.head ? `<th>${fmt(c, mode)}</th>` : `<td>${fmt(c, mode)}</td>`).join('')}</tr>`).join('') + '</table>';
    });
    if (s.ul2) h += `<ul>${arr(s.ul2).map(li => `<li>${fmt(li, mode)}</li>`).join('')}</ul>`;
    return h + '</div>';
  }
  function sheet(x, mode) {
    const w = x.www || {};
    let h = `<article class="sheet"><div class="qhead"><div class="meta"><span class="tag">No.${x.no}</span><span class="tag c">${esc(x.cat)}</span><span class="tag t">${esc(x.type || '용어')}</span>${x.freq ? `<span class="tag s">${esc(x.freq)}</span>` : ''}</div>` +
      `<h2>${esc(x.title)}</h2><div class="keys">${arr(x.key).map(k => `<span class="key">${esc(k)}</span>`).join('')}</div></div>`;
    if (x.www) h += `<div class="www"><div class="w1"><b>WHAT · 무엇</b>${fmt(w.what || '', mode)}</div><div class="w2"><b>WHY · 왜</b>${fmt(w.why || '', mode)}</div><div class="w3"><b>HOW · 어떻게</b>${fmt(w.how || '', mode)}</div></div>`;
    h += '<div class="body">' + arr(x.secs).map((s, i) => renderSec(s, i, mode)).join('');
    if (x.effect) h += `<div class="effect"><b>효과·목적 ▶</b> ${fmt(x.effect, mode)}</div>`;
    if (x.mnemo) h += `<div class="mnemo"><b>암기코드 ▶</b> ${fmt(x.mnemo, 'read')}</div>`;
    if (x.src) h += `<div class="src">출처·참고: ${esc(x.src)}</div>`;
    if (x.img && x.img.length) h += `<details class="orig"><summary>📷 원본 합격자 답안 이미지 보기 (${x.img.length}쪽)</summary>${x.img.map(f => `<img loading="lazy" src="${(window.IMGDATA || {})[f] || 'img/' + f}" alt="원본 답안 ${x.no}">`).join('')}</details>`;
    return h + '</div></article>';
  }
  // ---------- 디테일원 도해 답안지 (그림 하나로 정의·원리·대제목·수치를 모두 설명) ----------
  function d1sheet(x, hide) {
    const d = (window.D1 || {})[x.no];
    if (!d) return `<article class="d1"><div class="d1top">No.${x.no} ${esc(x.title)} — 디테일원 도해 답안 준비 중</div></article>`;
    const W = ['WHAT', 'WHY', 'HOW'];
    return `<article class="d1 ${hide ? 'hide' : ''}">
      <div class="d1top">“그림으로 기억하고, Detail로 완성한다.”</div>
      <div class="d1r q"><span class="c0">문 제</span><span class="c1">${x.no}</span><span class="c2"><b>${esc(x.title)}</b></span><span class="c3">${esc(d.tag || '')}</span></div>
      <div class="d1r"><span class="c0">1</span><span class="c1h">정 의</span><span class="c2 dd">${fmt(d.def, 'read')}</span></div>
      <div class="d1r"><span class="c0"></span><span class="c1h">W W H</span><span class="wwh">${arr(d.wwh).map((t, i) => `<i class="w${i}"><small>${W[i]}</small>${fmt(t, 'read')}</i>`).join('')}</span></div>
      <div class="d1r"><span class="c0">2</span><span class="c2 figt">${esc(d.figT || '원리 및 도해')}</span></div>
      <div class="d1fig"><ol class="subs">${arr(d.subs).map((s, i) => `<li class="k${i + 3}"><b>${i + 3}. ${esc(s.h)}</b>${arr(s.pts).map(p => `<span>${fmt(p, 'read')}</span>`).join('')}</li>`).join('')}</ol>
        <div class="svgw" title="클릭: 그림 라벨 보이기/가리기">${d.svg}</div></div>
      <div class="d1r msg"><span class="c0"></span><span class="c2">→ ${fmt(d.msg || '', 'read')}</span></div>
      <div class="d1r"><span class="c0">3</span><span class="c1h">연관용어</span><span class="c2 rel">${arr(d.rel).map(esc).join(' · ')}</span></div>
      <div class="d1bot">“Detail의 차이가 합격을 만듭니다.”</div></article>`;
  }
  let d1Hide = LS.get('amg_d1hide', false), d1Timer = null, d1Left = 10;
  function d1View() {
    const x = cur(); if (!x) return;
    main.innerHTML = `<div class="cz-bar"><b>디테일원 도해답안</b>
      <button class="btn ${d1Hide ? 'p' : ''}" id="d1Hide">${d1Hide ? '🙈 가림 ON (클릭해서 확인)' : '👁 전체 보기'}</button>
      <button class="btn ${d1Timer ? 'p' : ''}" id="d1Blink">${d1Timer ? '⏸ 깜박이 ' + d1Left + '초' : '▶ 10초 깜박이'}</button>
      <span style="flex:1"></span><a class="btn" href="#d1">${ONLINE ? '📄 디테일원 전체보기' : '🖨 디테일원 전체 인쇄본'}</a></div>` + d1sheet(x, d1Hide) + navBtns();
  }
  function d1Blink() {
    if (d1Timer) { clearInterval(d1Timer); d1Timer = null; return d1View(); }
    d1Left = 10;
    d1Timer = setInterval(() => {
      if (state.tab !== 'd1') { clearInterval(d1Timer); d1Timer = null; return; }
      d1Left--;
      if (d1Left <= 0) {
        const list = filtered(), i = list.findIndex(x => x.no === state.cur);
        const n = list[i + 1] || list[0]; state.cur = n.no; LS.set('amg_cur', state.cur); renderList(); d1Left = 10;
      }
      d1View();
    }, 1000);
    d1View();
  }
  // ---------- 기술사 답안지 축척 요약본 (A4 1면 22행, 용어 1문항 = 1면) ----------
  // 행 배분: 문제1 / 정의2 / WWH1 / 그림제목1 / 도해9 / 대제목3·4·5 각2 / 효과1 / 연관용어·끝1 = 22행
  function ansSheet(x, hide) {
    const d = (window.D1 || {})[x.no]; if (!d) return '';
    const L = (n, cls, num, inner) => `<div class="al ${cls}" style="--n:${n}"><div class="an">${num}</div><div class="ab fit">${inner}</div></div>`;
    const T = t => `<span class="tx">${t}</span>`;
    const S = arr(d.subs), W = ['What', 'Why', 'How'];
    return `<div class="ansz"><article class="asheet ${hide ? 'hide' : ''}"><div class="ahd"><span>국가기술자격 기술사 답안지 · 1면 22행 축척</span><span>No.${x.no} · ${esc(x.cat)}</span></div><div class="rule">` +
      L(1, 'q', '', `<b>문제 ${x.no}.</b> <b>${esc(x.title)}</b><span class="tg">${esc(d.tag || '')}</span>`) +
      L(2, 'df', '1', `<b>정의</b> ${T(fmt(d.def, 'read'))}`) +
      L(1, 'w', '', arr(d.wwh).map((t, i) => `<span class="wc w${i}"><b>${W[i]}</b> ${T(fmt(t, 'read'))}</span>`).join('')) +
      L(1, 'h', '2', `<b>${esc(d.figT || '원리 및 도해')}</b>`) +
      `<div class="al fg" style="--n:9"><div class="an"></div><div class="ab sv">${d.svg}</div></div>` +
      S.map((u, i) => L(2, 'k k' + (i + 3), String(i + 3), `<b>${esc(u.h)}</b> ${T(arr(u.pts).map(p => fmt(p, 'read')).join(' · '))}`)).join('') +
      L(1, 'm', '', `<b>효과</b> ${T(fmt(d.msg || x.effect || '', 'read'))}`) +
      L(1, 'r', '', `<b>연관용어</b> ${T(arr(d.rel).map(esc).join(' · '))}<span class="end">“끝”</span>`) +
      '</div></article></div>';
  }
  // 칸(행 수) 안에 글자가 다 들어가도록 글자 크기·줄간격 자동 축소
  function fitAns(root) {
    (root || document).querySelectorAll('.asheet .fit').forEach(el => {
      el.style.fontSize = ''; el.style.lineHeight = '';
      for (const fs of [15, 14, 13, 12, 11.5]) { el.style.fontSize = fs + 'px'; if (el.scrollHeight <= el.clientHeight + 1) return; }
      el.style.lineHeight = 'calc(var(--p) / 2)';
      for (const fs of [12, 11, 10.5, 10, 9.5, 9]) { el.style.fontSize = fs + 'px'; if (el.scrollHeight <= el.clientHeight + 1) return; }
      el.classList.add('over');
    });
  }
  // 화면 폭에 맞춰 A4 답안지 전체를 비율 축소 (인쇄는 실제 크기)
  function zoomAns() {
    document.querySelectorAll('.ansz').forEach(z => {
      const p = z.parentElement, cs = getComputedStyle(p), a = z.firstElementChild;
      const w = p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 2;
      const k = Math.min(1, w / a.offsetWidth); z.style.zoom = k;
    });
  }
  window.addEventListener('resize', () => { if (document.querySelector('.ansz')) zoomAns(); });
  window.addEventListener('beforeprint', () => document.querySelectorAll('.ansz').forEach(z => z.style.zoom = 1));
  window.addEventListener('afterprint', zoomAns);
  let ansHide = LS.get('amg_anshide', false);
  // ---------- 그림 확대 보기 (탭하면 전체 화면, ＋/－·두 손가락 확대) ----------
  function openViewer(svg, title) {
    const ov = document.createElement('div'); ov.className = 'viewer';
    ov.innerHTML = '<div class="vbar"><b>' + esc(title || '그림 확대') + '</b><span style="flex:1"></span><button class="btn" data-vz="-">－ 축소</button><button class="btn" data-vz="+">＋ 확대</button><button class="btn p" data-vz="x">✕ 닫기</button></div><div class="vbody"><div class="vin"></div></div>';
    const vin = ov.querySelector('.vin'); vin.appendChild(svg.cloneNode(true));
    let w = Math.max(innerWidth - 32, 720); const apply = () => { vin.style.width = w + 'px'; }; apply();
    ov.addEventListener('click', e => { const z = e.target.dataset && e.target.dataset.vz; if (!z) return; e.stopPropagation(); if (z === 'x') ov.remove(); else { w = Math.max(360, Math.min(4200, w * (z === '+' ? 1.35 : 1 / 1.35))); apply(); } });
    document.body.appendChild(ov);
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { const v = document.querySelector('.viewer'); if (v) v.remove(); } });

  // ---------- ✍ 필기 연습 (펜 = 쓰기, 손가락 = 스크롤, 펜 지우개 버튼 = 지우기, 자동 저장) ----------
  const PEN = { color: '#111111', size: LS.get('amg_pensize', 1), tool: 'pen', bg: LS.get('amg_penbg', 'sheet'), over: false, split: LS.get('amg_pensplit', true), ref: LS.get('amg_penref', 'sum') };
  const PEN_W = [1.3, 2.0, 3.0];
  const idb = (() => {
    let db = null;
    const op = () => db ? Promise.resolve(db) : new Promise((res, rej) => { const r = indexedDB.open('amg_pen', 1); r.onupgradeneeded = () => r.result.createObjectStore('ink'); r.onsuccess = () => res(db = r.result); r.onerror = () => rej(r.error); });
    return {
      get: k => op().then(d => new Promise(res => { const q = d.transaction('ink').objectStore('ink').get(k); q.onsuccess = () => res(q.result || null); q.onerror = () => res(null); })).catch(() => null),
      set: (k, v) => op().then(d => new Promise(res => { const tx = d.transaction('ink', 'readwrite'); tx.objectStore('ink').put(v, k); tx.oncomplete = res; tx.onerror = res; })).catch(() => {})
    };
  })();
  function emptySheet(x) {
    let h = '<div class="ansz penz"><div class="penpage' + (PEN.bg === 'blank' && !PEN.over ? ' blank' : '') + (PEN.over ? ' over' : '') + '">';
    if (PEN.over) h += ansSheet(x, false).replace(/^<div class="ansz">/, '').replace(/<\/div>$/, '');
    else if (PEN.bg === 'sheet') h += '<article class="asheet"><div class="ahd"><span>필기 연습 · 답안지 1면 22행</span><span>No.' + x.no + '</span></div><div class="rule"><div class="al q" style="--n:1"><div class="an"></div><div class="ab"><b>문제 ' + x.no + '. ' + esc(x.title) + '</b></div></div>' +
      '<div class="al" style="--n:1"><div class="an"></div><div class="ab"></div></div>'.repeat(21) + '</div></article>';
    return h + '<canvas id="penc"></canvas></div></div>';
  }
  function penBtn(k, label) { return '<button class="btn" data-pen="' + k + '">' + label + '</button>'; }
  function penView() {
    const x = cur(); if (!x) return;
    main.innerHTML = '<div class="cz-bar penbar"><b>✍ 필기</b>' +
      penBtn('k', '● 검정') + penBtn('r', '<span style="color:#c0392b">●</span> 빨강') + penBtn('b', '<span style="color:#1f5fa8">●</span> 파랑') +
      penBtn('w', '굵기') + penBtn('e', '⌫ 지우개') + penBtn('u', '↶ 되돌리기') + penBtn('c', '🗑 전체 지우기') +
      penBtn('v', PEN.split ? '👀 보며 쓰기 ON' : '👀 보며 쓰기') + penBtn('o', '모범답안 겹쳐보기') + penBtn('g', PEN.bg === 'sheet' ? '배경: 답안지' : '배경: 백지') +
      penBtn('t', penTimer ? '⏹ 시험 종료' : '⏱ 10분 실전') + penBtn('s', '✅ 채점') +
      '<span class="pentime" id="penTime">' + (penTimer ? '' : '') + '</span>' +
      '<span class="kbd-hint">펜으로 쓰기 · 손가락으로 스크롤 · 펜 지우개 지원 · 자동 저장</span></div><div id="penGrade"></div>' +
      (PEN.split && !penTimer ? '<div class="pensplit"><div class="penref"><div class="penrefbar"><button class="btn ' + (PEN.ref === 'sum' ? 'p' : '') + '" data-pen="rs">📄 요약</button><button class="btn ' + (PEN.ref === 'det' ? 'p' : '') + '" data-pen="rd">📚 디테일</button></div>' + (PEN.ref === 'det' ? sheet(x, 'read') : simpleCard(x)) + '</div><div class="penarea">' + emptySheet(x) + '</div></div>' : emptySheet(x)) + navBtns();
    fitAns(main); zoomAns(); refreshPenBar(); setupPen(x);
  }
  let penStrokes = [], penRedraw = null;
  async function setupPen(x) {
    const cv = $('#penc'); if (!cv) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = Math.round(794 * dpr), H = Math.round(1123 * dpr); // A4 @96dpi
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d', { desynchronized: true }) || cv.getContext('2d'); // 저지연 캔버스
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const key = SET + ':' + x.no;
    const seg = (a, b, st) => {
      ctx.globalCompositeOperation = st.er ? 'destination-out' : 'source-over';
      ctx.strokeStyle = st.c; ctx.lineWidth = st.er ? 18 * dpr : PEN_W[st.s] * dpr * (0.6 + (b[2] || 0.5) * 0.9); // 필압 반영
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    };
    const redraw = () => { ctx.clearRect(0, 0, W, H); for (const st of penStrokes) { const p = st.p; if (p.length === 1) seg(p[0], p[0], st); for (let i = 1; i < p.length; i++) seg(p[i - 1], p[i], st); } };
    let saveT = null;
    const save = () => { clearTimeout(saveT); saveT = setTimeout(() => idb.set(key, JSON.stringify(penStrokes)), 600); };
    penRedraw = () => { redraw(); save(); };
    penStrokes = [];
    try { const v = await idb.get(key); if (v) penStrokes = JSON.parse(v); } catch (e) { penStrokes = []; }
    redraw();
    const pt = e => { const r = cv.getBoundingClientRect(); return [Math.round((e.clientX - r.left) * W / r.width * 10) / 10, Math.round((e.clientY - r.top) * H / r.height * 10) / 10, Math.round((e.pressure || 0.5) * 100) / 100]; };
    let cur0 = null, penDown = false, fy = null;
    cv.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') { if (!penDown) fy = e.clientY; return; } // 손가락 = 스크롤, 펜 쓰는 중 손바닥은 무시
      e.preventDefault(); penDown = true; try { cv.setPointerCapture(e.pointerId); } catch (er) {}
      const er = PEN.tool === 'erase' || e.button === 5 || (e.buttons & 32) === 32;
      cur0 = { c: PEN.color, s: PEN.size, er, p: [pt(e)] }; penStrokes.push(cur0); seg(cur0.p[0], cur0.p[0], cur0);
    });
    cv.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') { if (fy !== null && !penDown) { window.scrollBy(0, fy - e.clientY); fy = e.clientY; } return; }
      if (!cur0) return; e.preventDefault();
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
      for (const ev of (evs.length ? evs : [e])) { const q = pt(ev), p = cur0.p[cur0.p.length - 1]; if (Math.abs(q[0] - p[0]) + Math.abs(q[1] - p[1]) < 0.8) continue; cur0.p.push(q); seg(p, q, cur0); }
    });
    const end = e => { if (e.pointerType === 'touch') { fy = null; return; } if (cur0) { cur0 = null; save(); } penDown = false; };
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
    cv.addEventListener('contextmenu', e => e.preventDefault());
  }
  // ---------- 필기 실전: 10분 타이머 → 대제목·핵심단어 자기채점 → 시험기록(취약문항)에 반영 ----------
  let penTimer = null, penEnd = 0, penTimerNo = null;
  function penTick() {
    const el = document.getElementById('penTime'); const left = Math.max(0, penEnd - Date.now());
    if (el) { const m = Math.floor(left / 60000), sec = Math.floor(left / 1000) % 60; el.textContent = '⏱ ' + m + ':' + String(sec).padStart(2, '0'); el.classList.toggle('warn', left < 120000); }
    if (left <= 0) { clearInterval(penTimer); penTimer = null; if (state.tab === 'pen') { penView(); penGrade(); } }
  }
  function penGrade() {
    const x = cur(); if (!x) return; const box = document.getElementById('penGrade'); if (!box) return;
    if (box.innerHTML) { box.innerHTML = ''; return; }
    const d = (window.D1 || {})[x.no] || {};
    const heads = arr(x.secs).map(u => u.h).filter(Boolean);
    const items = [].concat(heads.map(h => ['대제목', h]), arr(x.key).map(k => ['핵심단어', k]), d.wwh ? [['WWH', 'What·Why·How 3요소']] : [], [['도해', '도해 1개 이상 + 지시선']]);
    box.innerHTML = '<div class="panel pgrade"><h3 style="margin:0 0 6px">✅ 자기채점 — 쓴 답안에 들어간 항목을 체크하세요 (모범답안 겹쳐보기로 비교)</h3><div class="pgl">' +
      items.map((it, i) => '<label><input type="checkbox" data-pg="' + i + '"> <small>' + it[0] + '</small> ' + esc(plain(it[1])) + '</label>').join('') +
      '</div><p style="margin:8px 0 0"><b id="pgScore">0점</b> <button class="btn p" id="pgSave">기록 저장</button> <span class="kbd-hint">80점 이상 = 합격권 · 저장하면 진도/취약문항에 반영</span></p></div>';
    const upd = () => { const c = box.querySelectorAll('[data-pg]'), n = [...c].filter(i => i.checked).length; box.querySelector('#pgScore').textContent = Math.round(n / c.length * 100) + '점 (' + n + '/' + c.length + ')'; };
    box.addEventListener('change', upd);
    box.querySelector('#pgSave').addEventListener('click', () => {
      const c = box.querySelectorAll('[data-pg]'), sc = Math.round([...c].filter(i => i.checked).length / c.length * 100);
      const e = exam[x.no] || { best: 0, n: 0 }; e.last = sc; e.best = Math.max(e.best || 0, sc); e.n = (e.n || 0) + 1; e.pen = (e.pen || 0) + 1; e.at = Date.now(); exam[x.no] = e; LS.set('amg_exam', exam);
      box.innerHTML = '<div class="panel">저장됨: ' + sc + '점 (최고 ' + e.best + '점). ' + (sc >= 80 ? '합격권입니다 👍' : '부족한 대제목·핵심단어를 모범답안으로 다시 확인하세요.') + '</div>';
      renderList();
    });
  }
  function penAction(a) {
    if (a === 't') {
      if (penTimer) { clearInterval(penTimer); penTimer = null; penView(); return penGrade(); }
      penEnd = Date.now() + 10 * 60000; penTimerNo = state.cur; PEN.over = false; penView(); penTimer = setInterval(penTick, 1000); return penTick();
    }
    if (a === 's') return penGrade();
    if (a === 'k' || a === 'r' || a === 'b') { PEN.tool = 'pen'; PEN.color = { k: '#111111', r: '#c0392b', b: '#1f5fa8' }[a]; }
    else if (a === 'e') PEN.tool = PEN.tool === 'erase' ? 'pen' : 'erase';
    else if (a === 'w') { PEN.size = (PEN.size + 1) % 3; LS.set('amg_pensize', PEN.size); }
    else if (a === 'u') { penStrokes.pop(); if (penRedraw) penRedraw(); }
    else if (a === 'c') {
      const b = document.querySelector('[data-pen="c"]');
      if (!b.dataset.armed) { b.dataset.armed = '1'; b.textContent = '⚠ 한 번 더 누르면 모두 지움'; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = '🗑 전체 지우기'; } }, 3000); return; }
      penStrokes = []; if (penRedraw) penRedraw(); delete b.dataset.armed; b.textContent = '🗑 전체 지우기';
    }
    else if (a === 'o') { PEN.over = !PEN.over; return penView(); }
    else if (a === 'v') { PEN.split = !PEN.split; LS.set('amg_pensplit', PEN.split); return penView(); }
    else if (a === 'rs' || a === 'rd') { PEN.ref = a === 'rs' ? 'sum' : 'det'; LS.set('amg_penref', PEN.ref); const r = document.querySelector('.penref'); if (r) { const x = cur(); r.innerHTML = '<div class="penrefbar"><button class="btn ' + (PEN.ref === 'sum' ? 'p' : '') + '" data-pen="rs">📄 요약</button><button class="btn ' + (PEN.ref === 'det' ? 'p' : '') + '" data-pen="rd">📚 디테일</button></div>' + (PEN.ref === 'det' ? sheet(x, 'read') : simpleCard(x)); } return; }
    else if (a === 'g') { PEN.bg = PEN.bg === 'sheet' ? 'blank' : 'sheet'; LS.set('amg_penbg', PEN.bg); return penView(); }
    refreshPenBar();
  }
  function refreshPenBar() { // 캔버스는 그대로, 버튼 상태만 갱신
    const map = { k: PEN.tool === 'pen' && PEN.color === '#111111', r: PEN.tool === 'pen' && PEN.color === '#c0392b', b: PEN.tool === 'pen' && PEN.color === '#1f5fa8', e: PEN.tool === 'erase', o: PEN.over };
    document.querySelectorAll('[data-pen]').forEach(b => { const k = b.dataset.pen; if (k in map) b.classList.toggle('p', map[k]); if (k === 'w') b.textContent = '굵기: ' + ['가늘게', '보통', '굵게'][PEN.size]; });
  }
  function ansView() {
    const x = cur(); if (!x) return;
    main.innerHTML = `<div class="cz-bar"><b>답안지 요약</b>
      <button class="btn ${ansHide ? 'p' : ''}" id="ansHide">${ansHide ? '🙈 대제목만 (클릭해서 확인)' : '👁 전체 보기'}</button>
      <span style="flex:1"></span><a class="btn" href="#sheet">${ONLINE ? '📄 답안지 72면 전체보기' : '🖨 답안지 72면 인쇄본'}</a></div>` + ansSheet(x, ansHide) + navBtns();
    fitAns(main); zoomAns();
  }
  // ---------- 요약 카드: 정의·WWH·핵심그림·3·4·5 대제목 키워드·암기코드 (한 화면 복습) ----------
  let readMode = LS.get('amg_readmode', 'det');
  function sumCard(x) {
    const d = (window.D1 || {})[x.no] || {}, W = ['What', 'Why', 'How'];
    const def = d.def || (arr(x.secs).find(u => u.def) || {}).def || '';
    return `<article class="sheet sumv"><div class="qhead"><div class="meta"><span class="tag">No.${x.no}</span><span class="tag c">${esc(x.cat)}</span>${d.tag ? `<span class="tag t">${esc(d.tag)}</span>` : ''}</div><h2>${esc(x.title)}</h2><div class="keys">${arr(x.key).map(k => `<span class="key">${esc(k)}</span>`).join('')}</div></div>
      <div class="body"><div class="def">${fmt(def, 'read')}</div>
      ${d.wwh ? `<div class="wwh3">${d.wwh.map((t, i) => `<span class="w${i}"><b>${W[i]}</b> ${fmt(t, 'read')}</span>`).join('')}</div>` : ''}
      ${d.svg ? `<figure>${d.svg}<figcaption>[도해] ${esc(d.figT || '')}</figcaption></figure>` : ''}
      <ol class="subs3">${arr(d.subs).map((u, i) => `<li class="k${i + 3}"><b>${i + 3}. ${esc(u.h)}</b> ${arr(u.pts).map(p => fmt(p, 'read')).join(' · ')}</li>`).join('')}</ol>
      ${d.msg ? `<div class="effect"><b>효과·목적 ▶</b> ${fmt(d.msg, 'read')}</div>` : ''}
      ${x.mnemo ? `<div class="mnemo"><b>암기코드 ▶</b> ${fmt(x.mnemo, 'read')}</div>` : ''}
      ${d.rel ? `<div class="src">연관용어: ${arr(d.rel).map(esc).join(' · ')}</div>` : ''}</div></article>`;
  }
  // ---------- 📄 요약 카드: 한 줄 정의 + 따라 그리기 쉬운 그림 + 흐름 + 대제목 3개 + 암기코드 ----------
  function spOf(x) {
    const S = window.SP || { w: {}, d: {} };
    if (SET === 'dw') return (x.ref && S.w && S.w[x.ref]) || (S.d && S.d[x.no]) || null;
    return (S.w && S.w[x.no]) || null;
  }
  // 합격답안 섹션에서 대제목과 핵심단어([[ ]])·수치({{ }})를 뽑는다
  function ansHeads(x) {
    const txt = u => {
      const out = [];
      ['def', 'p'].forEach(k => u[k] && out.push(u[k]));
      [].concat(u.flow || [], u.ul || [], u.ul2 || []).forEach(t => out.push(t));
      arr(u.tbl).forEach(t => { (t.head || []).forEach(c => out.push(c)); (t.rows || []).forEach(r => r.forEach(c => out.push(c))); });
      return out.map(String);
    };
    const clean = h => String(h || '').replace(/^\s*\d+[.)]\s*/, '').trim();
    return arr(x.secs).filter(u => u.h).map(u => {
      const t = txt(u), k = [], seen = new Set();
      const add = v => { v = v.trim(); if (v && !seen.has(v) && v.length <= 22) { seen.add(v); k.push(v); } };
      t.forEach(line => { for (const m of line.matchAll(/\[\[(.+?)\]\]/g)) add('[[' + m[1] + ']]'); });
      t.forEach(line => { for (const m of line.matchAll(/\{\{(.+?)\}\}/g)) add('{{' + m[1] + '}}'); });
      if (k.length < 2) {
        [].concat(u.ul || [], u.flow || []).forEach(li => { const p = plain(li).split(/[:：(—–\-→,·]/)[0].trim(); if (p.length >= 2 && p.length <= 16) add(p); });
        arr(u.tbl).forEach(tb => (tb.rows || []).forEach(r => { const c = plain(r[0] || '').trim(); if (c.length >= 2 && c.length <= 12) add(c); }));
      }
      return { h: clean(u.h), k: k.slice(0, 4) };
    });
  }
  function simpleCard(x) {
    const sp = spOf(x), d = (window.D1 || {})[x.no] || {};
    const one = sp ? sp.one : (d.def || (arr(x.secs).find(u => u.def) || {}).def || '');
    const svg = sp ? sp.svg : d.svg;
    const flow = sp ? sp.flow : ((arr(x.secs).find(u => u.flow) || {}).flow || []);
    const heads = sp ? sp.heads : arr(d.subs).map(u => ({ h: u.h, k: arr(u.pts).slice(0, 3) }));
    const code = sp ? sp.code : x.mnemo;
    const wwh = (sp && sp.wwh) || d.wwh || (x.www ? [x.www.what, x.www.why, x.www.how] : null);
    const ah = ansHeads(x);
    return '<article class="spv' + (sp ? '' : ' auto') + '">' +
      '<div class="sphead"><span class="spno">' + x.no + '</span><h2>' + esc(x.title) + '</h2></div>' +
      (arr(x.key).length ? '<div class="spkey"><b>핵심키워드</b>' + arr(x.key).map(k => '<span>' + esc(plain(k)) + '</span>').join('') + '</div>' : '') +
      '<p class="one">' + fmt(one, 'read') + '</p>' +
      (wwh ? '<div class="spwwh">' + ['What', 'Why', 'How'].map((t, i) => '<div class="w' + i + '"><b>' + t + '</b><span>' + fmt(wwh[i] || '', 'read') + '</span></div>').join('') + '</div>' : '') +
      (svg ? '<div class="spfig">' + svg + '</div>' : '') +
      (sp && sp.read ? '<p class="spread">👁 ' + fmt(sp.read, 'read') + '</p>' : '') +
      (flow && flow.length ? '<div class="spflow">' + flow.map(f => '<span>' + fmt(f, 'read') + '</span>').join('<i>→</i>') + '</div>' : '') +
      (ah.length ? '<div class="spah"><div class="spahT">📋 합격답안 대제목</div><ol>' + ah.map(u => '<li><b>' + esc(u.h) + '</b>' + (u.k.length ? '<span>' + u.k.map(k => fmt(k, 'read')).join(' · ') + '</span>' : '') + '</li>').join('') + '</ol></div>'
        : '<div class="spheads">' + heads.map((u, i) => '<div class="k' + (i + 3) + '"><b>' + (i + 3) + '. ' + esc(u.h) + '</b><ul>' + arr(u.k).map(k => '<li>' + fmt(k, 'read') + '</li>').join('') + '</ul></div>').join('') + '</div>') +
      (arr(d.rel).length ? '<div class="sprel"><b>🔗 연관용어</b> ' + arr(d.rel).map(r => '<span>' + esc(plain(r)) + '</span>').join('') + '</div>' : '') +
      (code ? '<div class="spcode">💡 ' + fmt(code, 'read') + '</div>' : '') +
      '<div class="spmore"><button class="btn" data-gotab="read">📚 디테일 답안 보기</button><button class="btn" data-gotab="pen">✍ 이 문항 써보기</button></div>' +
      '</article>';
  }
  function simpleView() { const x = cur(); if (!x) return; main.innerHTML = simpleCard(x) + navBtns(); }
  // ---------- ⋯ 더보기: 나머지 학습 도구 ----------
  function moreView() {
    const T = [['d1', '🖼 디테일원', '책 양식 도해 답안 (정의·WWH·그림·연관용어)'], ['ans', '📝 답안지', '실제 답안지(22행) 크기 요약'], ['cloze', '🧠 빈칸암기', '핵심단어·수치 가리고 떠올리기'],
      ['exam', '⏱ 모의시험(타자)', '10분 타이머 + 키워드 채점'], ['sum', '📋 요약표', '전 문항 한 장 요약'], ['rule', '📐 작성원칙', '답안 기본 틀'], ['lib', '📂 자료실', '원본 PDF (PC 전용)']];
    main.innerHTML = '<div class="panel"><h2>⋯ 더보기</h2><div class="moregrid">' + T.filter(t => !(t[0] === 'lib' && (ONLINE || WEB))).map(t => '<button class="morebtn" data-gotab="' + t[0] + '"><b>' + t[1] + '</b><span>' + t[2] + '</span></button>').join('') + '</div></div>';
  }
  function navBtns() {
    const list = filtered(); const i = list.findIndex(x => x.no === state.cur);
    const p = list[i - 1], n = list[i + 1];
    return `<div class="nav2"><button class="btn" data-go="${p ? p.no : ''}" ${p ? '' : 'disabled'}>◀ ${p ? p.no + ' ' + esc(p.title).slice(0, 14) : ''}</button>` +
      (ONLINE ? '' : `<button class="btn" onclick="window.print()">🖨 인쇄</button>`) +
      `<button class="btn p" data-go="${n ? n.no : ''}" ${n ? '' : 'disabled'}>${n ? n.no + ' ' + esc(n.title).slice(0, 14) : ''} ▶</button></div>`;
  }
  const cur = () => Q.find(x => x.no === state.cur) || Q[0];

  // ---------- tabs ----------
  const views = {
    read() {
      const x = cur(); if (!x) return main.innerHTML = '<div class="panel">데이터가 없습니다.</div>';
      const bar = `<div class="cz-bar"><b>합격답안</b><button class="btn ${readMode === 'sum' ? 'p' : ''}" data-rm="sum">📄 요약</button><button class="btn ${readMode === 'det' ? 'p' : ''}" data-rm="det">📚 디테일</button><span style="flex:1"></span><span class="kbd-hint">Space 다음 · Shift+Space 이전</span></div>`;
      main.innerHTML = sheet(x, 'read') + navBtns();
    },
    cloze() {
      const x = cur(); if (!x) return;
      const lv = state.czLv;
      main.innerHTML = `<div class="cz-bar"><b>빈칸 단계</b>
        <label><input type="radio" name="lv" value="1" ${lv === 1 ? 'checked' : ''}>① 핵심단어</label>
        <label><input type="radio" name="lv" value="2" ${lv === 2 ? 'checked' : ''}>② 단어+수치</label>
        <label><input type="radio" name="lv" value="3" ${lv === 3 ? 'checked' : ''}>③ 대제목만(뼈대)</label>
        <span style="flex:1"></span><button class="btn" id="czAll">모두 보기</button><button class="btn" id="czHide">다시 가리기</button></div>
        <div class="${lv === 3 ? 'skel' : ''}">${sheet(x, lv === 1 ? 'cz1' : lv === 2 ? 'cz2' : 'read')}</div>` + navBtns();
    },
    d1() { d1View(); },
    ans() { ansView(); },
    pen() { penView(); },
    simple() { simpleView(); },
    more() { moreView(); },
    card() { cardView(); },
    exam() { examView(); },
    stat() { statView(); },
    rule() { ruleView(); },
    lib() { libView(); },
    sum() {
      const L = filtered();
      main.innerHTML = `<div class="panel"><h2>📋 한눈 요약표 — 시험 직전 30분 복습용 (${L.length}문항)</h2>
        <p style="font-size:13px;color:var(--ink2)">정의(What)·핵심단어·대제목·암기코드만 모았습니다. 행을 누르면 전체 답안으로 이동합니다. &nbsp;<a href="#all">${ONLINE ? '📄 72문항 전체보기' : '🖨 72문항 전체 인쇄본 열기'}</a></p>
        <table class="t"><tr><th style="width:44px">No</th><th style="width:26%">제목 / 대제목</th><th>정의 · 핵심단어 · 암기코드</th></tr>${L.map(x => {
          const def = (arr(x.secs).find(s => s.def) || {}).def || '';
          return `<tr data-open="${x.no}" style="cursor:pointer"><td><b>${x.no}</b></td><td><b>${esc(x.title)}</b><div style="font-size:12px;color:var(--mute)">${arr(x.secs).map((s, i) => (i + 1) + '.' + esc(s.h)).join(' / ')}</div></td>
          <td style="font-size:13px">${fmt(def, 'read')}<div class="keys">${arr(x.key).map(k => `<span class="key">${esc(k)}</span>`).join('')}</div>${x.mnemo ? `<div style="color:var(--purple);font-weight:700;margin-top:4px">▶ ${fmt(x.mnemo, 'read')}</div>` : ''}</td></tr>`;
        }).join('')}</table></div>`;
    }
  };

  // ---------- SRS cards (Leitner 5단계) ----------
  const DAY = 864e5, IV = [0, 10 / 1440, 1, 3, 7, 14]; // 단계별 복습간격(일): 1단계 10분
  let cardFlip = false, cardNo = null;
  function dueList() {
    const now = Date.now();
    return filtered().filter(x => !srs[x.no] || srs[x.no].due <= now)
      .sort((a, b) => lvOf(a.no) - lvOf(b.no) || a.no - b.no);
  }
  function cardView() {
    const due = dueList();
    if (!due.length) { main.innerHTML = `<div class="card"><div class="front">🎉 오늘 복습할 카드가 없습니다</div><div class="hint">필터를 바꾸거나 진도 탭에서 초기화할 수 있습니다.</div></div>`; return; }
    if (!cardNo || !due.find(x => x.no === cardNo)) cardNo = due[0].no;
    const x = Q.find(q => q.no === cardNo);
    const def = (arr(x.secs).find(s => s.def) || {}).def || '';
    main.innerHTML = `<div class="qinfo">남은 카드 ${due.length}장 · 현재 단계 ${lvOf(x.no)}/5</div><div class="card">
      <div class="front">No.${x.no}<br>${esc(x.title)}</div>
      <div class="hint">① 정의 한 문장 ② 대제목 ${arr(x.secs).length}개 ③ 핵심단어 ${arr(x.key).length}개를 떠올린 뒤 뒤집으세요</div>
      ${cardFlip ? `<div class="back"><div class="def">${fmt(def, 'read')}</div>
        <p><b>대제목:</b> ${arr(x.secs).map((s, i) => `${i + 1}.${esc(s.h)}`).join(' · ')}</p>
        <p><b>핵심단어:</b> ${arr(x.key).map(k => `<span class="key">${esc(k)}</span>`).join(' ')}</p>
        ${x.mnemo ? `<div class="mnemo"><b>암기코드 ▶</b> ${fmt(x.mnemo, 'read')}</div>` : ''}
        <div class="rate"><button class="btn r" data-rate="1">모름 (처음부터)</button><button class="btn a" data-rate="2">애매 (유지)</button><button class="btn g" data-rate="3">암기 (다음단계)</button></div></div>`
        : `<div class="rate"><button class="btn p" id="flip">뒤집기 (Space)</button></div>`}
    </div><div class="rate"><button class="btn" data-open="${x.no}">📘 전체 답안 보기</button></div>`;
  }
  function rate(r) {
    const s = srs[cardNo] || { box: 0, seen: 0 };
    s.box = r === 1 ? 1 : r === 2 ? Math.max(1, s.box) : Math.min(5, Math.max(2, s.box + 1));
    s.seen++; s.last = Date.now(); s.due = Date.now() + IV[s.box] * DAY;
    srs[cardNo] = s; LS.set('amg_srs', srs); cardFlip = false; cardNo = null; renderList(); cardView();
  }

  // ---------- exam ----------
  let ex = null, timerId = null;
  function examView() {
    if (!ex) {
      main.innerHTML = `<div class="panel"><h2>⏱ 모의시험 (용어 1문항 실전 리허설)</h2>
        <p>실제 시험: 1교시 용어 13문항 중 10문항 / 100분 → <b>문항당 약 10분</b>. 답안을 직접 쓰거나 종이에 쓴 뒤, 키워드 체크로 자가채점합니다.</p>
        <p><label>시간(분) <input id="exMin" type="number" value="10" min="3" max="30" style="width:60px"></label>
        &nbsp;<label>출제 <select id="exMode"><option value="due">취약문항 우선</option><option value="rand">무작위</option><option value="cur">현재 선택 문항</option></select></label></p>
        <button class="btn p" id="exStart">시험 시작</button></div>` + examHistory();
      return;
    }
    const x = Q.find(q => q.no === ex.no);
    if (!ex.done) {
      main.innerHTML = `<div class="panel"><div class="timer" id="tm"></div><h2 style="text-align:center">문제 ${x.no}. ${esc(x.title)}에 대하여 설명하시오.</h2>
        <textarea class="ans" id="exAns" placeholder="1. 정의 → 2. … 대제목부터 쓰고 채우세요 (종이에 써도 됩니다)">${esc(ex.text || '')}</textarea>
        <div class="rate"><button class="btn p" id="exEnd">답안 제출 · 채점</button><button class="btn" id="exQuit">포기</button></div></div>`;
      tick(); return;
    }
    const items = [...arr(x.secs).map(s => '대제목: ' + s.h), ...arr(x.key)];
    const typed = (ex.text || '').replace(/\s/g, '');
    main.innerHTML = `<div class="panel"><h2>채점 — ${x.no}. ${esc(x.title)}</h2>
      <p>내 답안에 포함된 항목을 체크하세요 (입력한 답안에 그대로 있는 단어는 자동 체크).</p>
      <div class="chk" id="chk">${items.map((k, i) => { const kk = k.replace('대제목: ', '').replace(/\s/g, ''); const hit = kk && typed.includes(kk); return `<label class="${hit ? 'hit' : ''}"><input type="checkbox" data-i="${i}" ${hit ? 'checked' : ''}> ${esc(k)}</label>`; }).join('')}</div>
      <p class="score" id="sc"></p><div class="rate"><button class="btn p" id="exSave">점수 저장</button><button class="btn" data-open="${x.no}">모범답안 비교</button></div></div>` + sheet(x, 'read');
    score();
  }
  function score() {
    const b = [...document.querySelectorAll('#chk input')]; const n = b.filter(i => i.checked).length;
    b.forEach(i => i.parentElement.classList.toggle('hit', i.checked));
    const p = Math.round(n / Math.max(1, b.length) * 100); ex.score = p;
    $('#sc').textContent = `키워드 회상률 ${p}%  (${n}/${b.length})  ${p >= 80 ? '✅ 합격권' : p >= 60 ? '⚠ 보완필요' : '❌ 재암기'}`;
  }
  function tick() {
    clearInterval(timerId);
    const f = () => {
      const left = Math.max(0, ex.end - Date.now()); const el = $('#tm'); if (!el) return clearInterval(timerId);
      const m = Math.floor(left / 6e4), s = Math.floor(left / 1e3) % 60;
      el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; el.classList.toggle('warn', left < 6e4);
      if (left <= 0) { clearInterval(timerId); el.textContent = '⏰ 시간 종료'; }
    }; f(); timerId = setInterval(f, 500);
  }
  function examHistory() {
    const ks = Object.keys(exam).map(Number).sort((a, b) => a - b); if (!ks.length) return '';
    return `<div class="panel"><h2>시험 기록</h2><table class="t"><tr><th>No</th><th>제목</th><th>최근</th><th>최고</th><th>횟수</th></tr>${ks.map(k => { const e = exam[k], x = Q.find(q => q.no === k) || {}; return `<tr><td>${k}</td><td>${esc(x.title || '')}</td><td>${e.last}%</td><td>${e.best}%</td><td>${e.n}</td></tr>`; }).join('')}</table></div>`;
  }

  // ---------- stats ----------
  // ---------- 🏠 오늘의 학습: 시험일 D-day·하루 분량·복습 대상·취약 문항 ----------
  function todayPanel() {
    const now = Date.now(), DAYMS = 864e5;
    const examDate = LS.get('amg_examdate', '');
    const dday = examDate ? Math.ceil((new Date(examDate + 'T09:00:00').getTime() - now) / DAYMS) : null;
    const due = Q.filter(x => srs[x.no] && srs[x.no].due <= now);
    const fresh = Q.filter(x => !srs[x.no]);
    const weak = Q.filter(x => exam[x.no] && exam[x.no].best < 80).sort((a, b) => exam[a.no].best - exam[b.no].best);
    const never = Q.filter(x => !exam[x.no]);
    const notLong = Q.filter(x => lvOf(x.no) < 4).length;
    const perDay = dday && dday > 0 ? Math.ceil(notLong / dday) : null;
    const newToday = Math.min(fresh.length, perDay || 15);
    const chip = x => '<button class="btn" data-pentry="' + x.no + '">' + x.no + ' ' + esc(x.title).slice(0, 16) + (exam[x.no] ? ' · ' + exam[x.no].best + '점' : '') + '</button>';
    const pick = weak.slice(0, 6).concat(never.slice(0, Math.max(0, 6 - weak.length)));
    return '<div class="panel today"><h2>🏠 오늘의 학습 <small>' + esc(SETS[SET]) + '</small></h2>' +
      '<div class="kpi"><div><b>' + (dday === null ? '—' : (dday > 0 ? 'D-' + dday : dday === 0 ? 'D-DAY' : '종료')) + '</b><span>시험일 <input type="date" id="examDate" value="' + esc(examDate) + '"></span></div>' +
      '<div><b>' + due.length + '</b><span>오늘 복습 카드</span></div><div><b>' + newToday + '</b><span>오늘 새로 외울 문항' + (perDay ? ' (하루 ' + perDay + ')' : '') + '</span></div>' +
      '<div><b>' + weak.length + '</b><span>취약 문항(80점 미만)</span></div></div>' +
      '<ol class="routine"><li><b>카드 복습</b> ' + due.length + '개 <button class="btn p" data-gotab="card">🃏 시작</button></li>' +
      '<li><b>새 문항 ' + newToday + '개</b> — 요약 → 디테일원 그림 → 빈칸① <button class="btn" data-gotab="d1">🖼 디테일원</button></li>' +
      '<li><b>필기 실전 3문항</b> (10분씩, 쓰고 자기채점) — 취약·미응시 우선:<div class="chips2">' + (pick.map(chip).join('') || '<span class="kbd-hint">모든 문항 80점 이상 👍</span>') + '</div></li>' +
      '<li><b>마무리</b> 요약표 훑기 5분 <button class="btn" data-gotab="sum">📋 요약표</button></li></ol></div>';
  }
  function statView() {
    const tot = Q.length, by = [0, 0, 0, 0, 0, 0]; Q.forEach(x => by[lvOf(x.no)]++);
    const due = Q.filter(x => !srs[x.no] || srs[x.no].due <= Date.now()).length;
    const ex80 = Object.values(exam).filter(e => e.best >= 80).length;
    main.innerHTML = todayPanel() + `<div class="panel"><h2>📊 암기 진도</h2>
      <div class="kpi"><div><b>${tot}</b><span>전체 문항</span></div><div><b>${by[4] + by[5]}</b><span>장기기억(4~5단계)</span></div><div><b>${due}</b><span>오늘 복습 대상</span></div><div><b>${ex80}</b><span>모의시험 80% 이상</span></div></div>
      <div class="legend"><span><i style="background:var(--line)"></i>미학습</span><span><i class="lv1"></i>1 모름</span><span><i class="lv2"></i>2</span><span><i class="lv3"></i>3</span><span><i class="lv4"></i>4</span><span><i class="lv5"></i>5 완성</span></div>
      <div class="grid">${Q.map(x => `<div class="lv${lvOf(x.no)}" data-open="${x.no}" title="${esc(x.title)}">${x.no}</div>`).join('')}</div>
      <p style="margin-top:16px"><b>학습 루틴(권장)</b>: ① 합격답안 정독(대제목·핵심단어 형광) → ② 빈칸① → ② → ③ 뼈대 → ③ 카드반복(매일) → ④ 모의시험 10분 → ⑤ 80% 미만 재암기</p>
      <button class="btn r" id="reset">진도 초기화</button></div>`;
  }

  // ---------- rules ----------
  function ruleView() {
    main.innerHTML = (window.RULES || '') + `<div class="panel"><h2>답안 기본 틀</h2>
    <table class="t"><tr><th>유형</th><th>대제목 구성</th><th>포인트</th></tr>
    <tr><td><b>용어</b></td><td>1.정의 → 2.원리/도해 → 3.특징(종류·기준) → 4.시공시 유의사항 → 5.개선방안</td><td>정의에 <b>What·Why·How</b> 3요소, 도해 1개 이상 + 지시선, 수치(KCS) 1개 이상</td></tr>
    <tr><td><b>서술(공법)</b></td><td>1.개요(시공 Process) → 2.공법종류/특징 → 3.시공순서별 관리 → 4.유의사항 → 5.결론(개선)</td><td>개요에 Process Flow 먼저 제시</td></tr>
    <tr><td><b>서술(하자)</b></td><td>1.개요(공학이론·메커니즘) → 2.원인(재료·설계·시공·환경) → 3.대책(시공 전·중·후 / 지하·지상 부위별) → 4.결론</td><td>원인-대책 1:1 대응표</td></tr></table></div>`;
  }
  // ---------- library ----------
  function libView() {
    const L = window.LIB || [];
    main.innerHTML = `<div class="panel lib"><h2>📂 자료실 (기존 정리본·원본)</h2>${L.map(g => `<h3>${esc(g.g)}</h3>${g.items.map(i => `<a href="${encodeURI(i[1])}" target="_blank">${esc(i[0])}</a>`).join('')}`).join('')}</div>`;
  }

  // ---------- routing / events ----------
  function show(tab) {
    if ((ONLINE || WEB) && tab === 'lib') tab = 'read';
    state.tab = tab; LS.set('amg_tab', tab);
    const vis = [...document.querySelectorAll('#tabs button')].some(b => b.dataset.tab === tab);
    document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab || (!vis && b.dataset.tab === 'more')));
    (views[tab] || views.read)(); window.scrollTo(0, 0);
  }
  let lastOpenT = 0;
  function open(no) { const now = Date.now(); if (now - lastOpenT < 220) return; lastOpenT = now; state.cur = +no; LS.set('amg_cur', state.cur); markList(); $('#side').classList.remove('show'); show(['cloze', 'read', 'd1', 'ans', 'pen', 'simple'].includes(state.tab) ? state.tab : 'read'); }

  let lastTapEl = null, lastTapT = 0;
  document.addEventListener('click', e => {
    const t = e.target;
    // 터치 안정화: 같은 버튼을 0.35초 안에 다시 누르면 무시 (e-ink 더블탭·떨림 방지)
    const tapEl = t.closest('button,.li,[data-go],[data-open],a');
    if (tapEl) { const now = Date.now(); if (tapEl === lastTapEl && now - lastTapT < 350) { e.preventDefault(); return; } lastTapEl = tapEl; lastTapT = now; }
    if (t.closest('.viewer')) return;
    if (t.dataset && t.dataset.pen) return penAction(t.dataset.pen);
    if (t.dataset && t.dataset.gotab) return show(t.dataset.gotab);
    if (t.dataset && t.dataset.pentry) { state.cur = +t.dataset.pentry; LS.set('amg_cur', state.cur); renderList(); return show('pen'); }
    const fsv = t.closest('figure svg, .svgw svg, .asheet .sv svg, .sumv svg');
    if (fsv && !t.closest('.hide') && !t.closest('.penpage')) { const fg = t.closest('figure'); const cap = fg && fg.querySelector('figcaption'); return openViewer(fsv, cap ? cap.textContent : ((document.querySelector('.d1 .figt, .al.h b') || {}).textContent || '')); }
    const tb = t.closest('#tabs button'); if (tb) return show(tb.dataset.tab);
    const li = t.closest('.li'); if (li) return open(li.dataset.no);
    const ch = t.closest('#catChips button'); if (ch) { state.cat = ch.dataset.c; renderChips(); renderList(); return; }
    const go = t.closest('[data-go]'); if (go && go.dataset.go) return open(go.dataset.go);
    const op = t.closest('[data-open]'); if (op) { state.tab = 'read'; return open(op.dataset.open); }
    if (t.classList.contains('cz')) return t.classList.toggle('open');
    if (t.dataset.rm) { readMode = t.dataset.rm; LS.set('amg_readmode', readMode); return views.read(); }
    if (t.id === 'ansHide') { ansHide = !ansHide; LS.set('amg_anshide', ansHide); return ansView(); }
    const az = t.closest('.asheet.hide .tx, .asheet.hide .sv'); if (az) return az.classList.toggle('open');
    if (t.id === 'd1Hide') { d1Hide = !d1Hide; LS.set('amg_d1hide', d1Hide); return d1View(); }
    if (t.id === 'd1Blink') return d1Blink();
    const sv = t.closest('.d1.hide .svgw'); if (sv) return sv.classList.toggle('open');
    const dz = t.closest('.d1.hide .dd, .d1.hide .wwh i, .d1.hide .subs li>span, .d1.hide .msg .c2, .d1.hide .rel'); if (dz) return dz.classList.toggle('open');
    const sk = t.closest('.skel .sec'); if (sk) return sk.classList.toggle('open');
    if (t.id === 'czAll') { document.querySelectorAll('.cz').forEach(c => c.classList.add('open')); document.querySelectorAll('.skel .sec').forEach(c => c.classList.add('open')); }
    if (t.id === 'czHide') { document.querySelectorAll('.cz').forEach(c => c.classList.remove('open')); document.querySelectorAll('.skel .sec').forEach(c => c.classList.remove('open')); }
    if (t.id === 'flip') { cardFlip = true; cardView(); }
    if (t.dataset.rate) rate(+t.dataset.rate);
    if (t.id === 'exStart') {
      const mode = $('#exMode').value, min = +$('#exMin').value || 10;
      let pool = filtered(); let x;
      if (mode === 'cur') x = cur();
      else if (mode === 'due') { pool = pool.slice().sort((a, b) => ((exam[a.no] || {}).best || 0) - ((exam[b.no] || {}).best || 0) || lvOf(a.no) - lvOf(b.no)); x = pool[Math.floor(Math.random() * Math.min(8, pool.length))]; }
      else x = pool[Math.floor(Math.random() * pool.length)];
      ex = { no: x.no, end: Date.now() + min * 6e4, text: '' }; examView();
    }
    if (t.id === 'exEnd') { ex.text = $('#exAns').value; ex.done = true; clearInterval(timerId); examView(); }
    if (t.id === 'exQuit') { ex = null; clearInterval(timerId); examView(); }
    if (t.id === 'exSave') { const e = exam[ex.no] || { best: 0, n: 0 }; e.last = ex.score; e.best = Math.max(e.best, ex.score); e.n++; exam[ex.no] = e; LS.set('amg_exam', exam); ex = null; examView(); }
    if (t.id === 'reset' && !t.dataset.armed) { t.dataset.armed = '1'; t.textContent = '⚠ 한 번 더 누르면 기록 전체 삭제'; setTimeout(() => { if (t.isConnected) { delete t.dataset.armed; t.textContent = '진도 초기화'; } }, 4000); return; }
    if (t.id === 'reset' && t.dataset.armed) { srs = {}; exam = {}; LS.set('amg_srs', srs); LS.set('amg_exam', exam); renderList(); statView(); }
  });
  document.addEventListener('change', e => {
    if (e.target.name === 'lv') { state.czLv = +e.target.value; views.cloze(); }
    if (e.target.id === 'examDate') { LS.set('amg_examdate', e.target.value); statView(); }
    if (e.target.closest && e.target.closest('#chk')) score();
  });
  document.addEventListener('keydown', e => {
    if (e.target.matches && e.target.matches('input,textarea,select')) return;
    if (state.tab === 'card') { if (e.code === 'Space') { e.preventDefault(); if (!cardFlip) { cardFlip = true; cardView(); } } if (cardFlip && ['1', '2', '3'].includes(e.key)) rate(+e.key); }
    if (['read', 'cloze', 'd1', 'ans', 'pen', 'simple'].includes(state.tab) && !printMode) {
      const list = filtered(), i = list.findIndex(x => x.no === state.cur);
      // Space = 다음 문항, Shift+Space = 이전 문항 (빠른 넘김)
      if (e.code === 'Space' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        const n = e.shiftKey ? list[i - 1] : (list[i + 1] || list[0]);
        if (n) open(n.no);
        return;
      }
      if (e.key === 'ArrowRight' && list[i + 1]) open(list[i + 1].no);
      if (e.key === 'ArrowLeft' && list[i - 1]) open(list[i - 1].no);
    }
  });
  let tx0 = null, ty0 = 0;
  main.addEventListener('touchstart', e => { const t = e.touches[0]; if (e.touches.length > 1 || t.touchType === 'stylus' || e.target.closest('.penpage,.viewer,table,.vbody')) { tx0 = null; return; } tx0 = t.clientX; ty0 = t.clientY; }, { passive: true });
  main.addEventListener('touchend', e => {
    if (tx0 === null || !['read', 'cloze', 'd1', 'ans', 'simple'].includes(state.tab) || printMode) return;
    const t = e.changedTouches[0], dx = t.clientX - tx0, dy = t.clientY - ty0; tx0 = null;
    if (Math.abs(dx) < 110 || Math.abs(dx) < Math.abs(dy) * 2.5) return; // 스와이프는 크게·수평으로만 (오작동 방지)
    for (let el = e.target; el && el !== main; el = el.parentElement) if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX !== 'visible') return;
    const list = filtered(), i = list.findIndex(x => x.no === state.cur), n = list[i + (dx < 0 ? 1 : -1)];
    if (n) open(n.no);
  }, { passive: true });
  $('#search').addEventListener('input', e => { state.q = e.target.value; renderList(); });
  const sn = $('#setName');
  if (sn) {
    sn.outerHTML = `<select id="setSel" aria-label="문항 세트">${Object.keys(SETS).filter(k => k === 'week' || window.DW).map(k => `<option value="${k}" ${k === SET ? 'selected' : ''}>${SETS[k]} (${k === SET ? Q.length : k === 'dw' ? Object.keys(window.DW).length : WEEK.length})</option>`).join('')}</select>`;
    $('#setSel').addEventListener('change', e => { try { localStorage.setItem('amg_set', e.target.value); } catch (er) {} location.hash = ''; location.reload(); });
  }
  $('#menuBtn').addEventListener('click', () => $('#side').classList.toggle('show'));
  const th = LS.get('amg_theme', null); if (th) document.documentElement.dataset.theme = th;
  // e-ink 모드 (오닉스 북스 등 전자잉크 기기): 흑백 고대비·애니메이션/그림자 제거·큰 글씨
  const einkBtn = document.createElement('button');
  einkBtn.id = 'einkBtn'; einkBtn.className = 'icon-btn'; einkBtn.title = 'e-ink 모드'; einkBtn.textContent = 'E';
  $('#themeBtn').before(einkBtn);
  const einkAuto = /onyx|boox|eink|e-ink/i.test(navigator.userAgent);
  const setEink = on => { document.documentElement.classList.toggle('eink', on); einkBtn.classList.toggle('on', on); };
  setEink(LS.get('amg_eink', einkAuto));
  einkBtn.addEventListener('click', () => { const on = !document.documentElement.classList.contains('eink'); setEink(on); LS.set('amg_eink', on); if (document.querySelector('.ansz')) zoomAns(); });
  $('#themeBtn').addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'light' : 'dark'; LS.set('amg_theme', document.documentElement.dataset.theme);
  });

  // ---------- 전체 인쇄본 라우팅 (#d1 디테일원 / #all 합격답안) ----------
  // 같은 탭에서 링크를 눌러 해시만 바뀌어도(페이지 새로고침 없음) 인쇄본이 뜨도록 hashchange 처리
  const printBar = (title, note) => `<div class="panel noprint printbar"><h2>${title}</h2><p>${note}</p>
    <p>${ONLINE ? '' : '<button class="btn p" id="doPrint">🖨 인쇄 / PDF로 저장</button> '}<a class="btn" href="#" id="backApp">← 프로그램으로 돌아가기</a></p></div>`;
  let printMode = '';
  function route() {
    const h = location.hash;
    document.body.classList.remove('allmode', 'd1print');
    if (h === '#d1') {
      printMode = h; document.body.classList.add('allmode', 'd1print');
      main.innerHTML = printBar(`디테일원 도해 답안지 전체본 (${Q.length}문항)`, ONLINE ? '72문항을 한 번에 넘겨보는 화면입니다. 인쇄는 PC 프로그램(index.html#d1) 또는 만들어 둔 PDF로 하세요.' : '아래 버튼 또는 Ctrl+P → 대상 "PDF로 저장", 용지 A4 세로, 배경 그래픽 체크. 문항이 쪽 경계에서 잘리지 않게 배치됩니다.') +
        Q.map(x => d1sheet(x, false)).join('');
    } else if (h === '#sheet') {
      printMode = h; document.body.classList.add('allmode', 'd1print', 'ansprint');
      main.innerHTML = printBar(`기술사 답안지 축척 요약본 (${Q.length}면)`, ONLINE ? '용어 1문항 = 답안지 1면(22행). 대제목·키워드·그림을 빠르게 넘겨보세요.' : '버튼 또는 Ctrl+P → "PDF로 저장", 용지 A4, 여백 "없음", 배율 100%, 배경 그래픽 체크 → 실제 답안지 크기로 출력됩니다.') +
        Q.map(x => ansSheet(x, false)).join('');
      fitAns(main); zoomAns();
    } else if (h === '#all') {
      printMode = h; document.body.classList.add('allmode');
      main.innerHTML = printBar(`${SETS[SET]} 합격자 답안 전체본 (${Q.length}문항)`, ONLINE ? '72문항 합격답안을 한 번에 넘겨보는 화면입니다.' : '아래 버튼 또는 Ctrl+P → "PDF로 저장"하면 문항별 1쪽 답안집이 됩니다.') +
        Q.map(x => sheet(x, 'read')).join('<div class="pb"></div>');
    } else {
      printMode = ''; renderChips(); renderList(); show(state.tab);
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  // 다크모드여도 인쇄는 흰 종이·검은 글씨로
  let thBeforePrint = null;
  window.addEventListener('beforeprint', () => { thBeforePrint = document.documentElement.dataset.theme || ''; document.documentElement.dataset.theme = 'light'; });
  window.addEventListener('afterprint', () => { if (thBeforePrint !== null) { if (thBeforePrint) document.documentElement.dataset.theme = thBeforePrint; else delete document.documentElement.dataset.theme; thBeforePrint = null; } });
  document.addEventListener('click', e => {
    if (e.target.id === 'doPrint') window.print();
    if (e.target.id === 'backApp') { e.preventDefault(); location.hash = ''; }
  });
  route();
})();
