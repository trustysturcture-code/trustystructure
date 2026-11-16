// 간단 요약(한눈에·따라 그리기) 데이터 — 형식: data/SCHEMA_SP.md
// w = 이번주 번호, d = 디테일원 용어250 번호
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.w, {
109: {
  one: '공사 전 [[대지경계선]]을 현장에 복원하고, 높이 기준 [[B.M]]을 {{2개소 이상}} [[부동점]]에 설치',
  flow: ['지적측량 의뢰', '경계말뚝 설치', 'B.M 2개소', '수시 검측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="48" width="290" height="190" fill="none" class="rd dash"/>' +
    '<circle cx="40" cy="48" r="6" class="rf"/><circle cx="330" cy="48" r="6" class="rf"/><circle cx="330" cy="238" r="6" class="rf"/><circle cx="40" cy="238" r="6" class="rf"/>' +
    '<rect x="105" y="100" width="160" height="88" class="bx"/><text x="185" y="150" text-anchor="middle" class="t">신축 건물</text>' +
    '<line x1="370" y1="200" x2="450" y2="200" class="ln"/><line x1="410" y1="200" x2="410" y2="168" class="ln"/><path d="M398,168 l24,0 l-12,-20 z" class="bx2"/>' +
    '<line x1="40" y1="48" x2="70" y2="24" class="ld"/><text x="74" y="28">경계말뚝 (지적측량)</text>' +
    '<line x1="185" y1="238" x2="185" y2="262" class="ld"/><text x="192" y="268" class="r">대지경계선 = 지적도</text>' +
    '<line x1="410" y1="148" x2="410" y2="118" class="ld"/><text x="410" y="110" text-anchor="middle" class="bl">B.M ▲ 2개소↑</text>' +
    '<text x="410" y="224" text-anchor="middle" class="s2">부동점·영향권 밖</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['[[부동점]]', '{{2개소↑}} 상호검측', 'GL+{{0.5~1.0m}}'] },
    { h: '유의사항', k: ['말뚝 보호·사진', '인접대지주 입회', '[[수시 검측]]'] },
    { h: '개선방안', k: ['GPS·TS 좌표', '드론·BIM 기록'] }
  ],
  code: '경·지·말 / B.M = 2개·부동·수시 → “둘 부수”'
}
});
Object.assign(window.SP.d, {
12: {
  one: '포화 [[점성토]]가 하중을 받아 [[간극수]]가 빠지며 오랜 시간 [[침하]]하는 현상 (시간 ∝ {{H²}})',
  flow: ['하중 ΔP', '과잉간극수압', '간극수 배출', '침하'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="70" y1="18" x2="70" y2="48" class="ar"/><line x1="140" y1="18" x2="140" y2="48" class="ar"/><line x1="210" y1="18" x2="210" y2="48" class="ar"/><text x="228" y="36" class="b">하중 ΔP</text>' +
    '<rect x="40" y="54" width="200" height="26" class="bx2"/><text x="140" y="72" text-anchor="middle" class="s2">모래 (배수층)</text>' +
    '<rect x="40" y="80" width="200" height="96" class="soil"/><text x="140" y="134" text-anchor="middle" class="t">점토 (포화)</text>' +
    '<rect x="40" y="176" width="200" height="26" class="bx2"/><text x="140" y="194" text-anchor="middle" class="s2">모래 (배수층)</text>' +
    '<line x1="90" y1="112" x2="90" y2="84" class="ar"/><line x1="190" y1="148" x2="190" y2="172" class="ar"/>' +
    '<text x="40" y="236" class="bl">↑↓ 간극수가 위·아래 모래층으로 빠짐</text>' +
    '<line x1="290" y1="56" x2="465" y2="56" class="ln"/><line x1="290" y1="56" x2="290" y2="230" class="ln"/>' +
    '<path d="M290,56 C320,150 370,196 460,206" class="bl"/>' +
    '<text x="462" y="48" text-anchor="end" class="s2">시간 t →</text><text x="298" y="248" class="s2">침하량 S ↓</text>' +
    '<text x="350" y="118" class="r">t ∝ H²</text>' +
    '</svg>',
  heads: [
    { h: '원리', k: ['[[과잉간극수압]] 소산', '1차(배수)·2차(Creep)', 'H 클수록 오래'] },
    { h: '문제점', k: ['[[부등침하]]·균열', '말뚝 [[부마찰력]]', '인접 구조물 침하'] },
    { h: '대책', k: ['[[선행재하]](Preloading)', 'PBD·Sand Drain', 'SCP 치환'] }
  ],
  code: '물 빠져야 끝난다 → “선·드·치” (선행재하·드레인·치환)'
}
});
