// 디테일원 도해 답안 (Detail One 용어 양식) — 형식은 data/SCHEMA_D1.md
window.D1 = Object.assign(window.D1 || {}, {
148: {
  tag: '구조·공법·비교',
  def: '지진력에 [[강성·인성]]으로 저항하는 [[내진]], [[적층고무(LRB)]]로 지반과 절연하는 [[면진]], [[댐퍼]]·[[TMD]]로 진동에너지를 흡수하는 [[제진]] 구조 — 2층 이상·연면적 {{200㎡ 이상}} 내진설계 대상',
  wwh: ['저항·차단·흡수', '붕괴·취성파괴 방지', 'LRB·TMD·댐퍼'],
  figT: '내진·면진·제진 구조 원리 및 응답 비교',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="262" width="410" height="14" class="soil"/>' +
    '<rect x="30" y="110" width="80" height="140" class="bx"/>' +
    '<line x1="30" y1="145" x2="110" y2="145" class="ln2"/>' +
    '<line x1="30" y1="180" x2="110" y2="180" class="ln2"/>' +
    '<line x1="30" y1="215" x2="110" y2="215" class="ln2"/>' +
    '<line x1="30" y1="215" x2="110" y2="250" class="ln"/>' +
    '<line x1="110" y1="215" x2="30" y2="250" class="ln"/>' +
    '<line x1="30" y1="145" x2="110" y2="180" class="ln"/>' +
    '<line x1="110" y1="145" x2="30" y2="180" class="ln"/>' +
    '<rect x="24" y="250" width="92" height="12" class="conc"/>' +
    '<rect x="170" y="110" width="80" height="124" class="bx"/>' +
    '<line x1="170" y1="141" x2="250" y2="141" class="ln2"/>' +
    '<line x1="170" y1="172" x2="250" y2="172" class="ln2"/>' +
    '<line x1="170" y1="203" x2="250" y2="203" class="ln2"/>' +
    '<rect x="176" y="236" width="16" height="14" class="bx2"/><line x1="176" y1="240.5" x2="192" y2="240.5" class="ln2"/><line x1="176" y1="245" x2="192" y2="245" class="ln2"/><rect x="202" y="236" width="16" height="14" class="bx2"/><line x1="202" y1="240.5" x2="218" y2="240.5" class="ln2"/><line x1="202" y1="245" x2="218" y2="245" class="ln2"/><rect x="228" y="236" width="16" height="14" class="bx2"/><line x1="228" y1="240.5" x2="244" y2="240.5" class="ln2"/><line x1="228" y1="245" x2="244" y2="245" class="ln2"/>' +
    '<rect x="164" y="250" width="92" height="12" class="conc"/>' +
    '<rect x="270" y="196" width="8" height="66" class="conc"/>' +
    '<line x1="250" y1="212" x2="270" y2="212" class="ln2"/><line x1="250" y1="207" x2="250" y2="217" class="ln2"/><line x1="270" y1="207" x2="270" y2="217" class="ln2"/>' +
    '<rect x="320" y="92" width="80" height="158" class="bx"/>' +
    '<line x1="320" y1="132" x2="400" y2="132" class="ln2"/>' +
    '<line x1="320" y1="171" x2="400" y2="171" class="ln2"/>' +
    '<line x1="320" y1="210" x2="400" y2="210" class="ln2"/>' +
    '<rect x="348" y="104" width="24" height="16" class="bx3"/>' +
    '<polyline points="320,112 325,106 330,118 335,106 340,118 345,112 348,112" fill="none" class="ln2"/>' +
    '<polyline points="372,112 377,106 382,118 387,106 392,118 397,112 400,112" fill="none" class="ln2"/>' +
    '<line x1="320" y1="171" x2="400" y2="210" class="ln"/>' +
    '<rect x="353" y="186" width="14" height="9" class="bx2"/>' +
    '<line x1="400" y1="210" x2="320" y2="250" class="ln"/>' +
    '<rect x="353" y="225" width="14" height="9" class="bx2"/>' +
    '<rect x="314" y="250" width="92" height="12" class="conc"/>' +
    '<text x="70" y="294" text-anchor="middle" class="b">내진 = 저항</text>' +
    '<text x="210" y="294" text-anchor="middle" class="b">면진 = 차단</text>' +
    '<text x="360" y="294" text-anchor="middle" class="b">제진 = 흡수</text>' +
    '<line x1="40" y1="316" x2="130" y2="316" class="ar" style="marker-start:url(#arr)"/>' +
    '<text x="140" y="320" class="s">지반 진동(지진력)</text>' +
    '<text x="250" y="320" class="r">대상: 2층↑ 또는 200㎡↑</text>' +
    '<line x1="60" y1="163" x2="52" y2="76" class="ld"/><circle cx="52" cy="76" r="2" class="dotf"/><text x="56" y="80" class="b">브레이스·전단벽</text>' +
    '<line x1="184" y1="243" x2="150" y2="100" class="ld"/><circle cx="150" cy="100" r="2" class="dotf"/><text x="154" y="104" class="bl">적층고무(LRB)</text>' +
    '<line x1="210" y1="156" x2="196" y2="60" class="ld"/><circle cx="196" cy="60" r="2" class="dotf"/><text x="192" y="64" text-anchor="end" class="bl">장주기화(절연)</text>' +
    '<line x1="274" y1="200" x2="300" y2="72" class="ld"/><circle cx="300" cy="72" r="2" class="dotf"/><text x="296" y="76" text-anchor="end" class="r">이격거리(E/J)</text>' +
    '<line x1="352" y1="106" x2="330" y2="36" class="ld"/><circle cx="330" cy="36" r="2" class="dotf"/><text x="326" y="40" text-anchor="end" class="bl">TMD(동조질량)</text>' +
    '<text x="450" y="24" class="b">[가속도 응답스펙트럼]</text>' +
    '<line x1="462" y1="140" x2="462" y2="44" class="ar"/>' +
    '<line x1="462" y1="140" x2="628" y2="140" class="ar"/>' +
    '<text x="466" y="54" class="s">Sa</text>' +
    '<text x="628" y="154" text-anchor="end" class="s">주기 T</text>' +
    '<path d="M464,118 C478,56 496,50 512,58 S590,122 626,128" class="ln"/>' +
    '<path d="M464,122 C480,92 498,86 514,92 S590,126 626,133" class="gr dash"/>' +
    '<circle cx="505" cy="54" r="3.5" class="rf"/>' +
    '<circle cx="598" cy="121" r="3.5" class="rf"/>' +
    '<line x1="510" y1="60" x2="590" y2="116" class="ar"/>' +
    '<text x="556" y="82" class="s">면진 장주기화</text>' +
    '<text x="500" y="116" class="s">제진 감쇠↑</text>' +
    '<line x1="505" y1="54" x2="530" y2="36" class="ld"/><circle cx="530" cy="36" r="2" class="dotf"/><text x="534" y="40" class="s">내진 응답(단주기)</text>' +
    '<text x="446" y="176" class="k3">③ 내진: 강성·인성 저항</text><text x="446" y="196" class="k3">③ 면진: 장주기·기능유지</text><line x1="367" y1="190" x2="440" y2="212" class="ld"/><circle cx="440" cy="212" r="2" class="dotf"/><text x="446" y="216" class="k3">③ 제진: 감쇠↑·초고층 유효</text><text x="446" y="240" class="k4">④ 연성상세 135° 갈고리</text><text x="446" y="260" class="k4">④ 이격거리·플렉시블 조인트</text><line x1="367" y1="229" x2="440" y2="276" class="ld"/><circle cx="440" cy="276" r="2" class="dotf"/><text x="446" y="280" class="k4">④ 댐퍼 성능시험·교체상세</text><text x="446" y="304" class="k5">⑤ Hybrid·성능기반설계</text><text x="446" y="324" class="k5">⑤ 제진 Retrofit·SHM</text>' +
    '</svg>',
  subs: [
    { h: '구분별 특징', pts: ['내진: [[강성·인성]]으로 저항(경제적)', '면진: [[장주기화]]·기능유지(병원·전산)', '제진: 감쇠 증가·초고층 유효'] },
    { h: '시공 및 설계 시 유의사항', pts: ['내진 [[연성상세]] — 띠철근 135° 갈고리', '면진 [[이격거리]](E/J)·플렉시블 조인트', '[[댐퍼]] 성능시험 후 설치·교체 가능 상세'] },
    { h: '개선방안', pts: ['Hybrid 시스템·성능기반설계(PBD)', '제진댐퍼 Retrofit·SHM 모니터링'] }
  ],
  msg: '내진은 버티고, 면진은 끊고, 제진은 흡수한다 — 용도·높이에 맞춰 선택·복합화',
  rel: ['성능기반 내진설계(PBD)', '적층고무(LRB)', 'TMD', '연성상세', 'SHM']
},
149: {
  tag: '재료·강재·제조',
  def: '[[제어압연]]·[[가속냉각]](TMCP)으로 [[결정립 미세화]]하여 [[탄소당량]]·Pcm을 낮추고 판두께 {{40mm 초과}}에도 강도가 일정한 용접성 우수 [[후판]] 강재',
  wwh: ['열가공제어 후판', '용접성·인성 확보', '제어압연+가속냉각'],
  figT: 'TMCP 제조원리(온도-시간) 및 판두께별 강도',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="40" y1="250" x2="40" y2="30" class="ar"/>' +
    '<line x1="40" y1="250" x2="426" y2="250" class="ar"/>' +
    '<text x="44" y="40" class="s">온도</text>' +
    '<text x="426" y="262" text-anchor="end" class="s">시간</text>' +
    '<line x1="40" y1="95" x2="420" y2="95" class="ln2 dash"/>' +
    '<text x="420" y="91" text-anchor="end" class="s">재결정 온도</text>' +
    '<line x1="40" y1="160" x2="420" y2="160" class="ln2 dash"/>' +
    '<text x="420" y="156" text-anchor="end" class="s">변태점(Ar3)</text>' +
    '<path d="M135,75 L200,95 L260,120 L330,160 L410,190" class="bl dash"/>' +
    '<polyline points="50,50 100,50 120,75 135,75 150,90 175,105 190,105 205,120 220,120 235,135 250,140 270,150 320,225 410,235" fill="none" class="rd"/>' +
    '<line x1="75" y1="50" x2="110" y2="34" class="ld"/><circle cx="110" cy="34" r="2" class="dotf"/><text x="114" y="38" class="b">슬래브 재가열</text>' +
    '<line x1="128" y1="75" x2="70" y2="130" class="ld"/><circle cx="70" cy="130" r="2" class="dotf"/><text x="74" y="134" class="s">조압연(재결정역)</text>' +
    '<line x1="215" y1="120" x2="120" y2="190" class="ld"/><circle cx="120" cy="190" r="2" class="dotf"/><text x="124" y="194" class="bl">제어압연(저온·미재결정)</text>' +
    '<line x1="300" y1="195" x2="240" y2="222" class="ld"/><circle cx="240" cy="222" r="2" class="dotf"/><text x="236" y="226" text-anchor="end" class="r">가속냉각(수냉)</text>' +
    '<line x1="300" y1="143" x2="330" y2="124" class="ld"/><circle cx="330" cy="124" r="2" class="dotf"/><text x="334" y="128" class="bl">일반강 공랭</text>' +
    '<line x1="400" y1="234" x2="400" y2="212" class="ld"/><circle cx="400" cy="212" r="2" class="dotf"/><text x="396" y="216" text-anchor="end" class="bl">결정립 미세화</text>' +
    '<rect x="24" y="266" width="72" height="22" class="bx2"/><text x="60" y="281" text-anchor="middle" class="s">슬래브 재가열</text><line x1="97" y1="277" x2="105" y2="277" class="ar"/><rect x="106" y="266" width="72" height="22" class="bx2"/><text x="142" y="281" text-anchor="middle" class="s">조압연</text><line x1="179" y1="277" x2="187" y2="277" class="ar"/><rect x="188" y="266" width="72" height="22" class="bx2"/><text x="224" y="281" text-anchor="middle" class="s">제어압연</text><line x1="261" y1="277" x2="269" y2="277" class="ar"/><rect x="270" y="266" width="72" height="22" class="bx2"/><text x="306" y="281" text-anchor="middle" class="s">가속냉각</text><line x1="343" y1="277" x2="351" y2="277" class="ar"/><rect x="352" y="266" width="72" height="22" class="bx2"/><text x="388" y="281" text-anchor="middle" class="s">미세조직</text>' +
    '<text x="24" y="316" class="r">판두께 40mm 초과에도 Fy 일정 · 단면 약 15% 절감</text>' +
    '<text x="450" y="24" class="b">[판두께-항복강도]</text>' +
    '<line x1="462" y1="140" x2="462" y2="40" class="ar"/>' +
    '<line x1="462" y1="140" x2="630" y2="140" class="ar"/>' +
    '<text x="466" y="50" class="s">Fy</text>' +
    '<text x="628" y="134" text-anchor="end" class="s">t</text>' +
    '<line x1="462" y1="66" x2="625" y2="66" class="rd"/>' +
    '<polyline points="462,74 545,74 625,108" fill="none" class="bl dash"/>' +
    '<line x1="545" y1="40" x2="545" y2="140" class="ln2 dash"/>' +
    '<text x="545" y="154" text-anchor="middle" class="r">40mm</text>' +
    '<text x="560" y="58" class="r">TMC: 일정</text>' +
    '<line x1="600" y1="97" x2="556" y2="118" class="ld"/><circle cx="556" cy="118" r="2" class="dotf"/><text x="552" y="122" text-anchor="end" class="s">일반강 Fy 저감</text>' +
    '<line x1="300" y1="195" x2="440" y2="172" class="ld"/><circle cx="440" cy="172" r="2" class="dotf"/><text x="446" y="176" class="k3">③ 제어압연+가속냉각</text><text x="446" y="196" class="k3">③ Ceq·Pcm↓ → 예열 저감</text><line x1="410" y1="235" x2="440" y2="212" class="ld"/><circle cx="440" cy="212" r="2" class="dotf"/><text x="446" y="216" class="k3">③ 후판 강도 일정·HAZ 인성</text><text x="446" y="240" class="k4">④ 재가열·열처리 제한</text><text x="446" y="260" class="k4">④ 대입열 HAZ 연화 관리</text><text x="446" y="280" class="k4">④ Mill Sheet TMC 표기 확인</text><text x="446" y="304" class="k5">⑤ 후판 기둥 적용 확대</text><text x="446" y="324" class="k5">⑤ 예열생략 표준·QR 이력</text>' +
    '</svg>',
  subs: [
    { h: 'TMC강의 특징', pts: ['[[제어압연]]+[[가속냉각]] 조직제어로 강도 확보', '[[탄소당량]]·Pcm↓ → [[예열 저감]](생략)', '[[후판]] 강도 일정·HAZ 인성 우수'] },
    { h: '시공 시 유의사항', pts: ['재가열·응력제거 열처리 제한(TMC 효과 소실)', '대입열 용접 HAZ 연화 → 입열량·패스간 온도 관리', 'Mill Sheet로 TMC 표기·Ceq·Pcm 확인'] },
    { h: '개선방안', pts: ['초고층·장스팬 [[후판]] 기둥 적용 확대', 'Pcm 기반 예열생략 표준화·QR 이력관리'] }
  ],
  msg: '합금 대신 조직제어로 강도 확보 — 예열↓, 두께 무관 강도, 단면·용접량 절감',
  rel: ['탄소당량(Ceq)', 'Pcm', '예열', 'HSA 강재', 'SN강']
},
150: {
  tag: '재료·지표·기준',
  def: 'Mn·Cr·Mo·V·Ni·Cu 등 합금원소의 영향을 탄소량으로 [[탄소 환산]]한 [[용접성]] 지표로, {{0.44%}} 이하면 양호하고 초과 시 [[예열]]·후열이 필요하다',
  wwh: ['합금원소 탄소 환산', '저온균열 판단', 'Ceq 산정→예열'],
  figT: '탄소당량 산정식 및 Ceq별 예열온도',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="18" width="410" height="30" class="bx2"/>' +
    '<text x="225" y="38" text-anchor="middle" class="b">Ceq = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15</text>' +
    '<rect x="54" y="225" width="121" height="25" fill="none" class="bx dash"/>' +
    '<rect x="175" y="160" width="135" height="45" class="bx2"/>' +
    '<rect x="310" y="92" width="110" height="68" class="bx3"/>' +
    '<line x1="50" y1="250" x2="50" y2="62" class="ar"/>' +
    '<line x1="50" y1="250" x2="426" y2="250" class="ar"/>' +
    '<text x="54" y="72" class="s">예열온도(℃)</text>' +
    '<text x="424" y="244" text-anchor="end" class="s">Ceq(%)</text>' +
    '<line x1="164" y1="58" x2="164" y2="250" class="rd dash"/>' +
    '<text x="46" y="209" text-anchor="end" class="s">100</text>' +
    '<text x="46" y="164" text-anchor="end" class="s">200</text>' +
    '<text x="46" y="96" text-anchor="end" class="s">350</text>' +
    '<text x="120" y="264" text-anchor="middle" class="s">0.40</text>' +
    '<text x="175" y="264" text-anchor="middle" class="s">0.45</text>' +
    '<text x="310" y="264" text-anchor="middle" class="s">0.60</text>' +
    '<text x="242" y="186" text-anchor="middle" class="r">100~200℃</text>' +
    '<text x="365" y="130" text-anchor="middle" class="r">200~350℃</text>' +
    '<text x="112" y="242" text-anchor="middle" class="s">임의온도</text>' +
    '<text x="238" y="264" text-anchor="middle" class="s">0.52</text><line x1="238" y1="250" x2="238" y2="255" class="ln2"/>' +
    '<text x="85" y="282" text-anchor="middle" class="s">우수</text>' +
    '<text x="147" y="282" text-anchor="middle" class="s">양호</text>' +
    '<text x="206" y="282" text-anchor="middle" class="s">보통</text>' +
    '<text x="365" y="282" text-anchor="middle" class="s">불량</text>' +
    '<line x1="164" y1="92" x2="190" y2="80" class="ld"/><circle cx="190" cy="80" r="2" class="dotf"/><text x="194" y="84" class="r">0.44% 이하 용접 적합</text>' +
    '<line x1="400" y1="92" x2="410" y2="66" class="ld"/><circle cx="410" cy="66" r="2" class="dotf"/><text x="406" y="70" text-anchor="end" class="r">예열·후열 필수</text>' +
    '<line x1="242" y1="205" x2="230" y2="226" class="ld"/><circle cx="230" cy="226" r="2" class="dotf"/><text x="234" y="230" class="s">저온균열 감수성↑</text>' +
    '<line x1="90" y1="232" x2="70" y2="140" class="ld"/><circle cx="70" cy="140" r="2" class="dotf"/><text x="74" y="144" class="s">0.45 미만 임의</text>' +
    '<text x="24" y="304" class="r">SN355B(t≤40mm) Ceq 0.44% 이하</text>' +
    '<text x="24" y="322" class="b">Ceq↑ → HAZ 경화·저온균열↑ → 예열</text>' +
    '<text x="24" y="340" class="s">SN강식: C+Mn/6+Si/24+Ni/40+Cr/5+Mo/4+V/14</text>' +
    '<text x="450" y="24" class="b">[탄소량-강재 성질]</text>' +
    '<line x1="462" y1="140" x2="462" y2="36" class="ar"/>' +
    '<line x1="462" y1="140" x2="630" y2="140" class="ar"/>' +
    '<text x="628" y="154" text-anchor="end" class="s">C(%)</text>' +
    '<text x="560" y="154" text-anchor="middle" class="r">0.85</text>' +
    '<line x1="560" y1="48" x2="560" y2="140" class="ln2 dash"/>' +
    '<path d="M464,122 Q530,60 560,50 Q600,52 628,62" class="rd"/>' +
    '<path d="M464,50 Q520,110 628,130" class="bl dash"/>' +
    '<text x="628" y="44" text-anchor="end" class="r">인장강도</text>' +
    '<text x="628" y="122" text-anchor="end" class="bl">신장률↓</text>' +
    '<line x1="175" y1="175" x2="440" y2="174" class="ld"/><circle cx="440" cy="174" r="2" class="dotf"/><text x="446" y="178" class="k3">③ 0.44%↓ 용접성 양호</text><line x1="310" y1="150" x2="440" y2="194" class="ld"/><circle cx="440" cy="194" r="2" class="dotf"/><text x="446" y="198" class="k3">③ 예열온도 결정 척도</text><line x1="242" y1="205" x2="440" y2="214" class="ld"/><circle cx="440" cy="214" r="2" class="dotf"/><text x="446" y="218" class="k3">③ HAZ 최고경도 추정</text><line x1="430" y1="40" x2="440" y2="238" class="ld"/><circle cx="440" cy="238" r="2" class="dotf"/><text x="446" y="242" class="k4">④ Mill Sheet로 재계산</text><text x="446" y="262" class="k4">④ 이종강재 → 상위강종</text><text x="446" y="282" class="k4">④ 후판·고구속 Pcm 병행</text><text x="446" y="306" class="k5">⑤ TMC강 등 저Ceq 강재</text><text x="446" y="326" class="k5">⑤ 예열산정 프로그램·DB</text>' +
    '</svg>',
  subs: [
    { h: '산정 기준 및 활용', pts: ['Ceq {{0.44%}} 이하 → [[용접성]] 양호', '[[저온균열]] 판단 → [[예열]]온도 결정 척도', '[[열영향부 경화]](HAZ 최고경도) 추정'] },
    { h: '관리 시 유의사항', pts: ['Mill Sheet 화학성분으로 Ceq 재계산·검증', '이종강재 용접 시 상위 강종 기준', '후판·고구속 이음은 Pcm 병행 검토'] },
    { h: '개선방안', pts: ['TMC강 등 저탄소당량 강재 → 예열 생략', '예열온도 산정 프로그램·Mill Sheet DB화'] }
  ],
  msg: 'Ceq로 용접성을 수치화 — 0.44%를 넘으면 예열, 강재는 저Ceq로 선택',
  rel: ['Pcm', 'TMC강', '예열', '저수소계 용접봉', 'Mill Sheet']
},
151: {
  tag: '재료·검사·서류',
  def: '제강사가 발행한 강재의 [[제강번호(Heat No.)]]·[[화학성분]]·[[기계적 성질]]을 기록한 규격증명서로, 반입 시 [[원본 대조]]와 강재 표시 일치를 확인하고 [[추적관리]] 근거로 쓴다',
  wwh: ['강재 품질증명서', '규격 일치·추적', '원본대조·공인시험'],
  figT: 'Mill Sheet 구성 및 반입 강재 대조 Process',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="30" width="170" height="232" class="bx"/>' +
    '<text x="115" y="50" text-anchor="middle" class="b">MILL SHEET</text>' +
    '<line x1="30" y1="60" x2="200" y2="60" class="ln2"/>' +
    '<line x1="30" y1="100" x2="200" y2="100" class="ln2"/>' +
    '<line x1="30" y1="150" x2="200" y2="150" class="ln2"/>' +
    '<line x1="30" y1="200" x2="200" y2="200" class="ln2"/>' +
    '<line x1="30" y1="240" x2="200" y2="240" class="ln2"/>' +
    '<text x="36" y="76" class="s">품명·규격·치수</text>' +
    '<text x="36" y="92" class="s">수량·중량·길이</text>' +
    '<text x="36" y="120" class="bl">Heat No. ○○○○</text>' +
    '<text x="36" y="140" class="s">(용해 단위 고유번호)</text>' +
    '<text x="36" y="170" class="b">화학성분</text>' +
    '<text x="36" y="188" class="s">C·Mn·Si·P·S·Cr·V</text>' +
    '<text x="36" y="218" class="b">기계적 성질</text>' +
    '<text x="36" y="234" class="s">YS·TS·EL·YR·충격</text>' +
    '<text x="36" y="255" class="s">제강사 서명·날인</text>' +
    '<rect x="250" y="110" width="170" height="12" class="bx2"/>' +
    '<rect x="250" y="122" width="170" height="36" class="bx"/>' +
    '<rect x="250" y="158" width="170" height="12" class="bx2"/>' +
    '<text x="335" y="145" text-anchor="middle" class="bl">Heat No. ○○○○</text>' +
    '<line x1="202" y1="122" x2="248" y2="138" class="ar dash"/>' +
    '<text x="206" y="110" class="r">일치</text>' +
    '<line x1="200" y1="80" x2="250" y2="60" class="ld"/><circle cx="250" cy="60" r="2" class="dotf"/><text x="254" y="64" class="s">일반사항: 주문내용 일치</text>' +
    '<line x1="200" y1="178" x2="250" y2="196" class="ld"/><circle cx="250" cy="196" r="2" class="dotf"/><text x="254" y="200" class="s">화학성분 → Ceq·P·S 산정</text>' +
    '<line x1="200" y1="222" x2="250" y2="220" class="ld"/><circle cx="250" cy="220" r="2" class="dotf"/><text x="254" y="224" class="s">항복·인장강도·연신율·항복비</text>' +
    '<line x1="170" y1="250" x2="250" y2="248" class="ld"/><circle cx="250" cy="248" r="2" class="dotf"/><text x="254" y="252" class="r">사본은 원본대조필 날인</text>' +
    '<line x1="400" y1="116" x2="410" y2="90" class="ld"/><circle cx="410" cy="90" r="2" class="dotf"/><text x="406" y="94" text-anchor="end" class="s">강재 표시(Stencil)</text>' +
    '<rect x="22" y="274" width="58" height="22" class="bx2"/><text x="51" y="289" text-anchor="middle" class="s">반입·원본</text><line x1="81" y1="285" x2="91" y2="285" class="ar"/><rect x="92" y="274" width="58" height="22" class="bx2"/><text x="121" y="289" text-anchor="middle" class="s">번호 대조</text><line x1="151" y1="285" x2="161" y2="285" class="ar"/><rect x="162" y="274" width="58" height="22" class="bx2"/><text x="191" y="289" text-anchor="middle" class="s">성분·강도</text><line x1="221" y1="285" x2="231" y2="285" class="ar"/><rect x="232" y="274" width="58" height="22" class="bx2"/><text x="261" y="289" text-anchor="middle" class="s">외관·치수</text><line x1="291" y1="285" x2="301" y2="285" class="ar"/><rect x="302" y="274" width="58" height="22" class="bx2"/><text x="331" y="289" text-anchor="middle" class="s">공인시험</text><line x1="361" y1="285" x2="371" y2="285" class="ar"/><rect x="372" y="274" width="58" height="22" class="bx2"/><text x="401" y="289" text-anchor="middle" class="s">승인·사용</text>' +
    '<text x="24" y="324" class="r">하자 시 Heat No.로 Lot 추적관리</text>' +
    '<text x="24" y="342" class="s">수입강재: KS 동등 이상·원산지 증명 병행</text>' +
    '<text x="450" y="24" class="b">[Heat No.별 구분 적치]</text>' +
    '<rect x="460" y="90" width="70" height="10" class="bx2"/><rect x="555" y="90" width="70" height="10" class="bx2"/><rect x="460" y="100" width="70" height="10" class="bx2"/><rect x="555" y="100" width="70" height="10" class="bx2"/><rect x="460" y="110" width="70" height="10" class="bx2"/><rect x="555" y="110" width="70" height="10" class="bx2"/><rect x="460" y="120" width="70" height="10" class="bx2"/><rect x="555" y="120" width="70" height="10" class="bx2"/>' +
    '<rect x="470" y="130" width="10" height="10" class="conc"/><rect x="515" y="130" width="10" height="10" class="conc"/><rect x="565" y="130" width="10" height="10" class="conc"/><rect x="610" y="130" width="10" height="10" class="conc"/>' +
    '<rect x="456" y="140" width="174" height="8" class="soil"/>' +
    '<text x="495" y="82" text-anchor="middle" class="s">Heat A</text>' +
    '<text x="590" y="82" text-anchor="middle" class="s">Heat B</text>' +
    '<line x1="520" y1="135" x2="540" y2="160" class="ld"/><circle cx="540" cy="160" r="2" class="dotf"/><text x="544" y="164" class="s">받침목·우수 차단</text>' +
    '<line x1="610" y1="92" x2="620" y2="62" class="ld"/><circle cx="620" cy="62" r="2" class="dotf"/><text x="616" y="66" text-anchor="end" class="s">가공 후 표시 이기</text>' +
    '<line x1="420" y1="140" x2="440" y2="176" class="ld"/><circle cx="440" cy="176" r="2" class="dotf"/><text x="446" y="180" class="k3">③ Heat No. 표시 일치</text><text x="446" y="200" class="k3">③ 화학성분 → Ceq 산정</text><text x="446" y="220" class="k3">③ 기계적성질 YS·TS·EL</text><text x="446" y="244" class="k4">④ 원본대조필·위변조 검토</text><line x1="360" y1="276" x2="440" y2="260" class="ld"/><circle cx="440" cy="260" r="2" class="dotf"/><text x="446" y="264" class="k4">④ 주요부재 공인시험</text><text x="446" y="284" class="k4">④ Heat별 적치·표시 이기</text><text x="446" y="308" class="k5">⑤ e-Mill Sheet·QR 코드</text><text x="446" y="328" class="k5">⑤ Heat No.-BIM 이력관리</text>' +
    '</svg>',
  subs: [
    { h: '주요 구성(확인 항목)', pts: ['[[제강번호(Heat No.)]] — 강재 표시와 일치', '[[화학성분]] C·Mn·Si·P·S → Ceq 산정', '[[기계적 성질]] YS·TS·EL·YR·충격'] },
    { h: '반입·사용 시 유의사항', pts: ['사본은 [[원본 대조]]필 날인·위변조 검토', '주요 구조부재 [[공인시험]](인장·굽힘·성분)', 'Heat No.별 구분 적치·가공 후 표시 이기'] },
    { h: '개선방안', pts: ['전자 Mill Sheet(e-Certificate)·QR 코드', 'Heat No. 기반 BIM 부재 이력관리'] }
  ],
  msg: '서류(Mill Sheet)와 실물(Heat No.)을 맞춰 보는 것이 강재 반입검사의 시작',
  rel: ['강재 반입검사', '탄소당량', 'KS 인증', 'Lot 관리', 'e-Certificate']
},
152: {
  tag: '접합·이음·가공',
  def: '[[기둥 이음]]부를 [[Facing Machine]]으로 직각도 {{1.5/1000}} 이하로 정밀가공·[[밀착]]시켜 축력·휨모멘트의 {{50%}}를 접촉면으로 직접 전달하는 이음',
  wwh: ['기둥 이음 밀착', '이음재·변형 저감', '정밀가공→50% 전달'],
  figT: 'Metal Touch 축력전달 Mechanism 및 가공기준',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="240" y1="10" x2="240" y2="40" class="ar"/>' +
    '<text x="248" y="24" class="b">N (축력·휨)</text>' +
    '<rect x="200" y="44" width="80" height="105" class="bx"/>' +
    '<rect x="200" y="151" width="80" height="115" class="bx"/>' +
    '<line x1="200" y1="150" x2="280" y2="150" class="rd"/>' +
    '<polyline points="196,266 206,260 214,272 224,262 232,270 244,262 256,270 268,262 284,268" fill="none" class="ln2"/>' +
    '<rect x="188" y="110" width="12" height="80" class="bx2"/>' +
    '<rect x="280" y="110" width="12" height="80" class="bx2"/>' +
    '<circle cx="194" cy="120" r="3" class="bx3"/><circle cx="286" cy="120" r="3" class="bx3"/><circle cx="194" cy="135" r="3" class="bx3"/><circle cx="286" cy="135" r="3" class="bx3"/><circle cx="194" cy="165" r="3" class="bx3"/><circle cx="286" cy="165" r="3" class="bx3"/><circle cx="194" cy="180" r="3" class="bx3"/><circle cx="286" cy="180" r="3" class="bx3"/>' +
    '<line x1="240" y1="110" x2="240" y2="190" class="ar rd"/>' +
    '<line x1="188" y1="150" x2="176" y2="154" class="ld"/><circle cx="176" cy="154" r="2" class="dotf"/><text x="172" y="158" text-anchor="end" class="b">밀착면(Metal Touch)</text>' +
    '<line x1="200" y1="147" x2="176" y2="130" class="ld"/><circle cx="176" cy="130" r="2" class="dotf"/><text x="172" y="134" text-anchor="end" class="bl">Facing Machine 정밀가공</text>' +
    '<line x1="200" y1="153" x2="176" y2="176" class="ld"/><circle cx="176" cy="176" r="2" class="dotf"/><text x="172" y="180" text-anchor="end" class="s">이음부 응력집중 방지</text>' +
    '<line x1="200" y1="156" x2="176" y2="196" class="ld"/><circle cx="176" cy="196" r="2" class="dotf"/><text x="172" y="200" text-anchor="end" class="s">거칠기 50S 정도</text>' +
    '<line x1="190" y1="115" x2="176" y2="100" class="ld"/><circle cx="176" cy="100" r="2" class="dotf"/><text x="172" y="104" text-anchor="end" class="s">덧판 두께·볼트 수 절감</text>' +
    '<line x1="240" y1="170" x2="304" y2="166" class="ld"/><circle cx="304" cy="166" r="2" class="dotf"/><text x="308" y="170" class="r">축력 50% 직접전달</text>' +
    '<line x1="288" y1="182" x2="304" y2="210" class="ld"/><circle cx="304" cy="210" r="2" class="dotf"/><text x="308" y="214" class="r">잔여 50% 용접·고력볼트</text>' +
    '<rect x="22" y="286" width="92" height="22" class="bx2"/><text x="68" y="301" text-anchor="middle" class="s">정밀가공</text><line x1="115" y1="297" x2="125" y2="297" class="ar"/><rect x="126" y="286" width="92" height="22" class="bx2"/><text x="172" y="301" text-anchor="middle" class="s">상·하부 완전밀착</text><line x1="219" y1="297" x2="229" y2="297" class="ar"/><rect x="230" y="286" width="92" height="22" class="bx2"/><text x="276" y="301" text-anchor="middle" class="s">50% 직접전달</text><line x1="323" y1="297" x2="333" y2="297" class="ar"/><rect x="334" y="286" width="92" height="22" class="bx2"/><text x="380" y="301" text-anchor="middle" class="s">잔여 50% 보강</text>' +
    '<text x="24" y="334" class="b">압축력·휨모멘트 일부를 접촉면으로 직접 전달</text>' +
    '<text x="450" y="24" class="b">[가공면 직각도]</text>' +
    '<rect x="480" y="60" width="120" height="60" class="bx"/>' +
    '<line x1="480" y1="60" x2="600" y2="60" class="ln2 dash"/>' +
    '<line x1="480" y1="62" x2="600" y2="54" class="rd"/>' +
    '<text x="540" y="48" text-anchor="middle" class="r">e ≤ 1.5/1000</text>' +
    '<line x1="560" y1="120" x2="560" y2="136" class="ld"/><circle cx="560" cy="136" r="2" class="dotf"/><text x="560" y="150" text-anchor="middle" class="s">밀착면 보호(녹·도장 금지)</text>' +
    '<line x1="286" y1="190" x2="440" y2="172" class="ld"/><circle cx="440" cy="172" r="2" class="dotf"/><text x="446" y="176" class="k3">③ 이음재료 절감(경제성)</text><text x="446" y="196" class="k3">③ 용접변형·잔류응력↓</text><text x="446" y="216" class="k3">③ 인장·전단 불가 → 보강</text><text x="446" y="240" class="k4">④ 직각도 1.5/1000·50S</text><text x="446" y="260" class="k4">④ 틈새 Shim 처리 금지</text><text x="446" y="280" class="k4">④ 수직도·밀착면 보호</text><text x="446" y="304" class="k5">⑤ 3D 스캐너 검측 기록</text><text x="446" y="324" class="k5">⑤ CFT·Box 표준상세</text>' +
    '</svg>',
  subs: [
    { h: 'Metal Touch의 특징', pts: ['이음재료(덧판·용접장·볼트 수) 절감', '용접변형·잔류응력 저감', '인장·전단 전달 불가 → 보강 필수'] },
    { h: '가공 및 시공 시 유의사항', pts: ['가공면 [[직각도 1.5/1000]] 이하·거칠기 50S', '틈새 Filler·Shim 처리 금지(설계자 협의)', '세우기 수직도 관리·밀착면 녹·도장 금지'] },
    { h: '개선방안', pts: ['3D 스캐너로 평탄·직각도 공장 검측 기록', '초고층 CFT·Box 기둥 표준상세 정립'] }
  ],
  msg: '깎아서 맞대면 절반은 접촉으로 전달 — 나머지 50%는 용접·고력볼트로 보강',
  rel: ['Facing Machine', '기둥 현장이음', '고력볼트 접합', 'CFT 기둥', '철골 세우기 정도']
},
153: {
  tag: '접합·용접·가공',
  def: '[[용접선 교차]]와 [[열영향]] 중복을 피하기 위해 웨브 단부를 반지름 {{r1 35mm}}·{{r2 10mm}} 이상으로 [[부채꼴 가공]]한 홈',
  wwh: ['웨브 부채꼴 홈', '교차·결함 방지', 'r1 35·r2 10 가공'],
  figT: '보-기둥 접합부 Scallop 상세 및 가공기준',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="40" y="20" width="30" height="290" class="bx2"/>' +
    '<rect x="70" y="90" width="340" height="12" class="bx2"/>' +
    '<rect x="70" y="208" width="340" height="12" class="bx2"/>' +
    '<path d="M70,122 A20,20 0 0 0 90,102 L410,102 L410,208 L90,208 A20,20 0 0 0 70,188 Z" class="bx"/>' +
    '<rect x="70" y="102" width="30" height="4" class="conc"/>' +
    '<rect x="70" y="220" width="30" height="4" class="conc"/>' +
    '<path d="M70,90 L80,90 L70,100 Z" class="rf"/>' +
    '<path d="M70,220 L80,220 L70,210 Z" class="rf"/>' +
    '<line x1="71" y1="122" x2="71" y2="188" class="rd"/>' +
    '<text x="250" y="160" text-anchor="middle" class="s">보 웨브</text>' +
    '<line x1="82" y1="112" x2="120" y2="60" class="ld"/><circle cx="120" cy="60" r="2" class="dotf"/><text x="124" y="64" class="bl">Scallop(부채꼴 가공)</text>' +
    '<line x1="75" y1="94" x2="94" y2="36" class="ld"/><circle cx="94" cy="36" r="2" class="dotf"/><text x="98" y="40" class="s">플랜지 용접(연속)</text>' +
    '<line x1="98" y1="105" x2="280" y2="80" class="ld"/><circle cx="280" cy="80" r="2" class="dotf"/><text x="284" y="84" class="s">뒷댐재(Backing) 공간 확보</text>' +
    '<line x1="86" y1="200" x2="110" y2="250" class="ld"/><circle cx="110" cy="250" r="2" class="dotf"/><text x="114" y="254" class="s">용접봉 운봉 공간</text>' +
    '<line x1="78" y1="194" x2="110" y2="270" class="ld"/><circle cx="110" cy="270" r="2" class="dotf"/><text x="114" y="274" class="r">용접선 교차·열영향 중복 방지</text>' +
    '<line x1="55" y1="280" x2="90" y2="300" class="ld"/><circle cx="90" cy="300" r="2" class="dotf"/><text x="94" y="304" class="s">기둥 플랜지</text>' +
    '<text x="450" y="24" class="b">[복합원형 Scallop 확대]</text>' +
    '<rect x="455" y="30" width="14" height="130" class="bx2"/>' +
    '<rect x="469" y="40" width="161" height="14" class="bx2"/>' +
    '<path d="M469,109 A55,55 0 0 0 522.6,66.4 A16,16 0 0 1 538.2,54 L630,54 L630,160 L469,160 Z" class="bx"/>' +
    '<line x1="469" y1="54" x2="500.5" y2="99.1" class="ln2"/>' +
    '<line x1="538.2" y1="70" x2="526" y2="60" class="ln2"/>' +
    '<line x1="500" y1="99" x2="520" y2="124" class="ld"/><circle cx="520" cy="124" r="2" class="dotf"/><text x="524" y="128" class="r">r1 ≥ 35mm</text>' +
    '<line x1="530" y1="62" x2="560" y2="80" class="ld"/><circle cx="560" cy="80" r="2" class="dotf"/><text x="564" y="84" class="r">r2 ≥ 10mm</text>' +
    '<text x="474" y="152" class="s">거칠기 100μmRy↓</text>' +
    '<text x="446" y="178" class="k3">③ r1 35·r2 10mm 이상</text><text x="446" y="198" class="k3">③ 100μmRy↓·노치 1mm↓</text><text x="446" y="218" class="k3">③ 교차·열영향 중복 방지</text><line x1="90" y1="206" x2="440" y2="238" class="ld"/><circle cx="440" cy="238" r="2" class="dotf"/><text x="446" y="242" class="k4">④ 단부 돌림용접</text><text x="446" y="262" class="k4">④ 노치 그라인더 마감</text><text x="446" y="282" class="k4">④ 지진 시 균열 기점 유의</text><text x="446" y="306" class="k5">⑤ Non-Scallop·개량형</text><text x="446" y="326" class="k5">⑤ 로봇 가공·용접 정밀화</text>' +
    '</svg>',
  subs: [
    { h: '가공 기준 및 목적', pts: ['[[r1 35mm]]·[[r2 10mm]] 이상 복합원형', '거칠기 {{100μm Ry}}↓·[[Notch 1mm 이하]]', '[[용접선 교차]]·[[열영향]] 중복 방지'] },
    { h: '시공 시 유의사항', pts: ['스캘럽 단부 [[돌림용접]](End Return)', '가스절단 노치는 그라인더로 매끄럽게 마감', '지진 시 균열 기점 → 응력집중 유의'] },
    { h: '개선방안', pts: ['내진 접합부 Non-Scallop·개량형 스캘럽', '로봇 가공·용접으로 원호·돌림용접 품질 확보'] }
  ],
  msg: '용접이 끊기지 않도록 길을 내는 홈 — 단부는 돌림용접, 내진부는 Non-Scallop',
  rel: ['Non-Scallop 공법', 'End Tab', '뒷댐재(Backing)', '돌림용접', '용접결함']
},
154: {
  tag: '재료·검사·관리',
  def: '고력볼트를 [[미개봉 반입]]하여 [[검사성적서]]·[[Lot]]·[[토크계수값]]을 확인하고 [[축력시험]](로트당 {{5세트}}) 후 [[건조·통풍 보관]]·[[선입선출]]하는 재료관리',
  wwh: ['볼트세트 품질관리', '토크계수 변동 방지', '성적서·축력·보관'],
  figT: '고력볼트 반입검사 Process 및 보관·볼트 길이',
  svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="22" y="30" width="86" height="30" class="bx2"/>' +
    '<text x="65" y="49" text-anchor="middle" class="s">검사성적서</text>' +
    '<rect x="124" y="30" width="86" height="30" class="bx2"/>' +
    '<text x="167" y="49" text-anchor="middle" class="s">외관·Lot</text>' +
    '<rect x="226" y="30" width="100" height="30" class="bx2"/>' +
    '<text x="276" y="49" text-anchor="middle" class="s">토크계수·축력</text>' +
    '<rect x="344" y="20" width="84" height="22" class="bx2"/>' +
    '<text x="386" y="35" text-anchor="middle" class="s">합격 → 보관</text>' +
    '<rect x="344" y="48" width="84" height="22" class="bx2"/>' +
    '<text x="386" y="63" text-anchor="middle" class="s">불합격 → 반출</text>' +
    '<line x1="109" y1="45" x2="123" y2="45" class="ar"/>' +
    '<line x1="211" y1="45" x2="225" y2="45" class="ar"/>' +
    '<line x1="327" y1="40" x2="343" y2="32" class="ar"/>' +
    '<line x1="327" y1="50" x2="343" y2="58" class="ar"/>' +
    '<line x1="65" y1="60" x2="30" y2="84" class="ld"/><circle cx="30" cy="84" r="2" class="dotf"/><text x="34" y="88" class="s">규격 F10T·S10T 일치</text>' +
    '<line x1="167" y1="60" x2="150" y2="104" class="ld"/><circle cx="150" cy="104" r="2" class="dotf"/><text x="154" y="108" class="s">Lot 동일·녹·나사손상</text>' +
    '<line x1="276" y1="60" x2="270" y2="84" class="ld"/><circle cx="270" cy="84" r="2" class="dotf"/><text x="274" y="88" class="s">축력계 조임 → 평균 규정 내</text>' +
    '<polyline points="30,172 200,132 370,172" fill="none" class="ln"/>' +
    '<rect x="40" y="172" width="320" height="118" fill="none" class="ln"/>' +
    '<rect x="30" y="290" width="340" height="10" class="conc"/>' +
    '<rect x="36" y="192" width="8" height="26" class="bx3"/>' +
    '<rect x="60" y="280" width="80" height="8" class="bx3"/><rect x="60" y="232" width="80" height="24" class="bx2"/><rect x="60" y="256" width="80" height="24" class="bx2"/><text x="100" y="248" text-anchor="middle" class="s">Lot A</text><text x="100" y="272" text-anchor="middle" class="s">Lot A</text><rect x="170" y="280" width="80" height="8" class="bx3"/><rect x="170" y="232" width="80" height="24" class="bx2"/><rect x="170" y="256" width="80" height="24" class="bx2"/><text x="210" y="248" text-anchor="middle" class="s">Lot B</text><text x="210" y="272" text-anchor="middle" class="s">Lot B</text><rect x="280" y="280" width="80" height="8" class="bx3"/><rect x="280" y="232" width="80" height="24" class="bx2"/><rect x="280" y="256" width="80" height="24" class="bx2"/><text x="320" y="248" text-anchor="middle" class="s">Lot C</text><text x="320" y="272" text-anchor="middle" class="s">Lot C</text>' +
    '<line x1="200" y1="134" x2="214" y2="186" class="ld"/><circle cx="214" cy="186" r="2" class="dotf"/><text x="218" y="190" class="bl">건조·통풍 보관</text>' +
    '<line x1="140" y1="284" x2="150" y2="210" class="ld"/><circle cx="150" cy="210" r="2" class="dotf"/><text x="154" y="214" class="s">바닥에서 띄워 적치</text>' +
    '<line x1="320" y1="232" x2="330" y2="210" class="ld"/><circle cx="330" cy="210" r="2" class="dotf"/><text x="334" y="214" class="s">등급·Lot별 구분</text>' +
    '<line x1="80" y1="318" x2="330" y2="318" class="ar"/>' +
    '<text x="205" y="336" text-anchor="middle" class="s">선입선출(FIFO) · 시공 직전 필요량만 개봉</text>' +
    '<text x="450" y="24" class="b">[볼트 세트·볼트 길이]</text>' +
    '<line x1="516" y1="48" x2="600" y2="48" class="ln2"/>' +
    '<line x1="516" y1="44" x2="516" y2="52" class="ln2"/>' +
    '<line x1="600" y1="44" x2="600" y2="52" class="ln2"/>' +
    '<text x="558" y="38" text-anchor="middle" class="s">볼트 길이 = 조임길이 + 여유</text>' +
    '<rect x="520" y="56" width="14" height="48" class="bx2"/>' +
    '<rect x="534" y="56" width="14" height="48" class="bx2"/>' +
    '<rect x="502" y="68" width="12" height="24" class="bx"/>' +
    '<rect x="514" y="66" width="4" height="28" class="bx3"/>' +
    '<rect x="548" y="66" width="4" height="28" class="bx3"/>' +
    '<rect x="552" y="68" width="14" height="24" class="bx2"/>' +
    '<rect x="566" y="74" width="36" height="12" class="bx"/>' +
    '<line x1="570" y1="74" x2="570" y2="86" class="ln2"/><line x1="575" y1="74" x2="575" y2="86" class="ln2"/><line x1="580" y1="74" x2="580" y2="86" class="ln2"/><line x1="585" y1="74" x2="585" y2="86" class="ln2"/><line x1="590" y1="74" x2="590" y2="86" class="ln2"/><line x1="595" y1="74" x2="595" y2="86" class="ln2"/>' +
    '<line x1="516" y1="134" x2="552" y2="134" class="ln2"/>' +
    '<line x1="552" y1="134" x2="600" y2="134" class="ln2 dash"/>' +
    '<line x1="516" y1="130" x2="516" y2="138" class="ln2"/>' +
    '<line x1="552" y1="130" x2="552" y2="138" class="ln2"/>' +
    '<line x1="600" y1="130" x2="600" y2="138" class="ln2"/>' +
    '<text x="534" y="148" text-anchor="middle" class="s">조임길이</text>' +
    '<text x="578" y="148" text-anchor="middle" class="s">여유</text>' +
    '<line x1="598" y1="86" x2="604" y2="112" class="ld"/><circle cx="604" cy="112" r="2" class="dotf"/><text x="600" y="116" text-anchor="end" class="r">나사산 1~6개 돌출</text>' +
    '<text x="446" y="176" class="k3">③ 성적서·외관·Lot 확인</text><line x1="428" y1="70" x2="440" y2="192" class="ld"/><circle cx="440" cy="192" r="2" class="dotf"/><text x="446" y="196" class="k3">③ 토크계수 A 0.110~0.150</text><text x="446" y="216" class="k3">③ 토크계수 B 0.150~0.190</text><text x="446" y="236" class="k3">③ 축력시험 로트당 5세트</text><line x1="360" y1="250" x2="440" y2="256" class="ld"/><circle cx="440" cy="256" r="2" class="dotf"/><text x="446" y="260" class="k4">④ 건조·통풍·Lot별 보관</text><text x="446" y="280" class="k4">④ 녹·기름 부착 사용 금지</text><text x="446" y="300" class="k4">④ 장기보관 시 k값 재시험</text><text x="446" y="324" class="k5">⑤ 바코드·RFID 이력관리</text><text x="446" y="344" class="k5">⑤ 축력계 상시 비치</text>' +
    '</svg>',
  subs: [
    { h: '반입검사 기준', pts: ['[[검사성적서]]·외관·[[Lot]] 확인', '[[토크계수값]] A종 {{0.110~0.150}}', '[[토크계수값]] B종 {{0.150~0.190}}', '[[축력시험]] 로트당 {{5세트}}'] },
    { h: '재료관리 시 유의사항', pts: ['[[건조·통풍 보관]]·Lot별 구분·[[선입선출]]', '녹·흙·기름 부착 볼트 사용 금지', '장기 보관 시 [[토크계수값]] 재시험'] },
    { h: '개선방안', pts: ['바코드·RFID로 Lot별 반입·사용 이력관리', '현장 축력계 상시 비치·기온 변화 시 재확인'] }
  ],
  msg: '반입은 성·외·축, 보관은 건·로·선 — 토크계수값이 축력을 좌우한다',
  rel: ['토크계수값', 'TS bolt', '토크관리법', '축력계', 'F10T·S10T']
},
155: {
  tag: '접합·볼트·현상',
  def: '[[전용 렌치]]로 조여 [[핀테일(Pintail)]]이 [[파단홈]]에서 끊길 때 규정 축력이 도입되는 [[TS bolt]]와, 조임 중 볼트가 함께 도는 [[축회전]] 불량(너트 회전량 평균 {{±30°}} 관리)',
  wwh: ['핀테일 파단형 볼트', '축력 도입 불량 방지', '금매김→파단→판별'],
  figT: 'TS bolt 상세·체결순서 및 금매김 판정',
  svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="150" y="40" width="18" height="80" class="bx2"/>' +
    '<rect x="168" y="40" width="18" height="80" class="bx2"/>' +
    '<path d="M150,62 Q118,80 150,98 Z" class="bx"/>' +
    '<rect x="186" y="60" width="5" height="40" class="bx3"/>' +
    '<rect x="191" y="64" width="18" height="32" class="bx2"/>' +
    '<rect x="209" y="74" width="29" height="12" class="bx"/>' +
    '<rect x="238" y="77" width="4" height="6" class="bx"/>' +
    '<rect x="242" y="72" width="26" height="16" class="bx3"/>' +
    '<rect x="187" y="56" width="27" height="48" fill="none" class="ln2 dash"/>' +
    '<rect x="236" y="66" width="36" height="28" fill="none" class="ln2 dash"/>' +
    '<rect x="272" y="50" width="60" height="60" fill="none" class="ln2 dash"/>' +
    '<line x1="134" y1="72" x2="120" y2="44" class="ld"/><circle cx="120" cy="44" r="2" class="dotf"/><text x="116" y="48" text-anchor="end" class="s">둥근머리</text>' +
    '<line x1="200" y1="64" x2="200" y2="36" class="ld"/><circle cx="200" cy="36" r="2" class="dotf"/><text x="204" y="40" class="s">너트·외측 소켓</text>' +
    '<line x1="240" y1="83" x2="236" y2="140" class="ld"/><circle cx="236" cy="140" r="2" class="dotf"/><text x="232" y="144" text-anchor="end" class="r">파단홈(전단파단)</text>' +
    '<line x1="260" y1="88" x2="266" y2="140" class="ld"/><circle cx="266" cy="140" r="2" class="dotf"/><text x="270" y="144" class="bl">핀테일(Pintail)</text>' +
    '<line x1="310" y1="50" x2="320" y2="32" class="ld"/><circle cx="320" cy="32" r="2" class="dotf"/><text x="324" y="36" class="s">전용 렌치(역회전)</text>' +
    '<text x="24" y="178" class="b">[금매김 판정]</text>' +
    '<circle cx="70" cy="222" r="26" class="ln2"/><polygon points="85.6,231.0 70.0,240.0 54.4,231.0 54.4,213.0 70.0,204.0 85.6,213.0" class="bx2"/><circle cx="70" cy="222" r="6" class="bx3"/><line x1="70" y1="182" x2="70" y2="194" class="rd"/><line x1="70.0" y1="203.0" x2="70.0" y2="197.0" class="rd"/><line x1="76.9" y1="226.0" x2="84.7" y2="230.5" class="rd"/><line x1="70.0" y1="227.0" x2="70.0" y2="217.0" class="rd"/>' +
    '<circle cx="200" cy="222" r="26" class="ln2"/><polygon points="215.6,231.0 200.0,240.0 184.4,231.0 184.4,213.0 200.0,204.0 215.6,213.0" class="bx2"/><circle cx="200" cy="222" r="6" class="bx3"/><line x1="200" y1="182" x2="200" y2="194" class="rd"/><line x1="200.0" y1="203.0" x2="200.0" y2="197.0" class="rd"/><line x1="206.9" y1="226.0" x2="214.7" y2="230.5" class="rd"/><line x1="195.7" y1="219.5" x2="204.3" y2="224.5" class="rd"/>' +
    '<circle cx="330" cy="222" r="26" class="ln2"/><polygon points="345.6,231.0 330.0,240.0 314.4,231.0 314.4,213.0 330.0,204.0 345.6,213.0" class="bx2"/><circle cx="330" cy="222" r="6" class="bx3"/><line x1="330" y1="182" x2="330" y2="194" class="rd"/><line x1="346.5" y1="231.5" x2="351.7" y2="234.5" class="rd"/><line x1="336.9" y1="226.0" x2="344.7" y2="230.5" class="rd"/><line x1="325.7" y1="219.5" x2="334.3" y2="224.5" class="rd"/>' +
    '<line x1="70" y1="186" x2="100" y2="186" class="ld"/><circle cx="100" cy="186" r="2" class="dotf"/><text x="104" y="190" class="s">금매김 일직선</text>' +
    '<text x="70" y="268" text-anchor="middle" class="s">정상(너트만 회전)</text>' +
    '<text x="200" y="268" text-anchor="middle" class="r">축회전(볼트 동반)</text>' +
    '<text x="330" y="268" text-anchor="middle" class="r">공회전(와셔 동반)</text>' +
    '<rect x="20" y="286" width="74" height="22" class="bx2"/><text x="57" y="301" text-anchor="middle" class="s">1차 조임</text><line x1="95" y1="297" x2="103" y2="297" class="ar"/><rect x="104" y="286" width="74" height="22" class="bx2"/><text x="141" y="301" text-anchor="middle" class="s">금매김</text><line x1="179" y1="297" x2="187" y2="297" class="ar"/><rect x="188" y="286" width="74" height="22" class="bx2"/><text x="225" y="301" text-anchor="middle" class="s">본조임</text><line x1="263" y1="297" x2="271" y2="297" class="ar"/><rect x="272" y="286" width="74" height="22" class="bx2"/><text x="309" y="301" text-anchor="middle" class="s">핀테일 파단</text><line x1="347" y1="297" x2="355" y2="297" class="ar"/><rect x="356" y="286" width="74" height="22" class="bx2"/><text x="393" y="301" text-anchor="middle" class="s">축회전 판별</text>' +
    '<text x="24" y="332" class="r">1차조임 M16 100 / M20·M22 150 / M24 200 N·m</text>' +
    '<text x="24" y="352" class="b">축회전·공회전 볼트 → 신품 교체(재사용 금지)</text>' +
    '<text x="24" y="370" class="s">구멍 정밀도(Reaming)·틈새 1mm 초과 시 Filler Plate</text>' +
    '<text x="450" y="24" class="b">[볼트군 조임 순서]</text>' +
    '<rect x="470" y="40" width="150" height="90" class="bx2"/>' +
    '<line x1="545" y1="40" x2="545" y2="130" class="ln2 dash"/>' +
    '<circle cx="485" cy="70" r="4" class="bx3"/><circle cx="485" cy="100" r="4" class="bx3"/><circle cx="505" cy="70" r="4" class="bx3"/><circle cx="505" cy="100" r="4" class="bx3"/><circle cx="525" cy="70" r="4" class="bx3"/><circle cx="525" cy="100" r="4" class="bx3"/><circle cx="565" cy="70" r="4" class="bx3"/><circle cx="565" cy="100" r="4" class="bx3"/><circle cx="585" cy="70" r="4" class="bx3"/><circle cx="585" cy="100" r="4" class="bx3"/><circle cx="605" cy="70" r="4" class="bx3"/><circle cx="605" cy="100" r="4" class="bx3"/>' +
    '<line x1="538" y1="142" x2="476" y2="142" class="ar"/>' +
    '<line x1="552" y1="142" x2="614" y2="142" class="ar"/>' +
    '<text x="545" y="158" text-anchor="middle" class="s">중앙 → 단부 순 조임</text>' +
    '<text x="446" y="180" class="k3">③ 핀테일 파단 = 규정축력</text><line x1="356" y1="222" x2="440" y2="196" class="ld"/><circle cx="440" cy="196" r="2" class="dotf"/><text x="446" y="200" class="k3">③ 금매김으로 축회전 판별</text><text x="446" y="220" class="k3">③ 너트회전량 평균 ±30°</text><text x="446" y="244" class="k4">④ 부재 습윤(우천·결로)</text><text x="446" y="264" class="k4">④ 마찰면 불량·녹·이물질</text><text x="446" y="284" class="k4">④ 머리측 마찰력 < 너트측</text><line x1="332" y1="92" x2="440" y2="300" class="ld"/><circle cx="440" cy="300" r="2" class="dotf"/><text x="446" y="304" class="k4">④ 전용 렌치 작동 불량</text><text x="446" y="328" class="k5">⑤ 건조 유지·우천 시 중지</text><text x="446" y="348" class="k5">⑤ 미끄럼계수 0.5↑·렌치 교정</text><text x="446" y="368" class="k5">⑤ 축회전 볼트 신품 교체</text>' +
    '</svg>',
  subs: [
    { h: '체결 원리 및 판정', pts: ['[[핀테일(Pintail)]] 파단 = 규정 축력 도입', '[[금매김]] 어긋남으로 [[축회전]] 판별', '너트 회전량 평균 {{±30°}} 이내'] },
    { h: '축회전 발생 원인', pts: ['부재 습윤 상태(우천·결로)', '[[마찰면 처리]] 불량·녹·이물질', '볼트머리 측 마찰력 < 너트 측', '[[전용 렌치]] 작동 불량'] },
    { h: '대책 및 개선방안', pts: ['부재 건조 유지·우천 시 작업 중지', '미끄럼계수 {{0.5 이상}}·렌치 정기 교정', '[[축회전]]·[[공회전]] 볼트 신품 교체'] }
  ],
  msg: '핀테일이 끊기면 축력 OK, 금매김이 함께 돌면 축회전 — 신품으로 교체',
  rel: ['토크관리법', '너트회전법', '금매김', '마찰면 처리', '고력볼트 반입검사']
},
156: {
  tag: '접합·볼트·검사',
  def: '[[1차 조임]]→[[금매김]]→[[본조임]]으로 [[표준볼트장력]](설계볼트장력 × {{1.1}})을 도입하고, T = k·d·N 토크로 볼트군 {{10%}}를 검사하여 [[평균토크 ±10%]] 이내를 합격으로 하는 [[토크관리법]]',
  wwh: ['토크로 장력 관리', '마찰력·일체성 확보', 'T=k·d·N·±10%'],
  figT: '토크-축력 관계 및 조임순서·검사기준',
  svg: '<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="50" y="112" width="370" height="22" class="bx3"/>' +
    '<line x1="50" y1="200" x2="50" y2="30" class="ar"/>' +
    '<line x1="50" y1="200" x2="424" y2="200" class="ar"/>' +
    '<text x="54" y="40" class="s">축력 N</text>' +
    '<text x="432" y="188" text-anchor="end" class="s">T(토크)</text>' +
    '<line x1="50" y1="90" x2="420" y2="90" class="ln2 dash"/>' +
    '<text x="56" y="84" class="r">표준볼트장력(설계×1.1)</text>' +
    '<line x1="50" y1="200" x2="290" y2="50" class="ln"/>' +
    '<line x1="50" y1="200" x2="410" y2="80" class="ln dash"/>' +
    '<circle cx="226" cy="90" r="3.5" class="rf"/>' +
    '<circle cx="380" cy="90" r="3.5" class="rf"/>' +
    '<line x1="226" y1="90" x2="226" y2="200" class="ln2 dash"/>' +
    '<line x1="380" y1="90" x2="380" y2="200" class="ln2 dash"/>' +
    '<text x="226" y="214" text-anchor="middle" class="s">T1</text>' +
    '<text x="380" y="214" text-anchor="middle" class="s">T2</text>' +
    '<text x="56" y="128" class="s">1차 조임(약 60%)</text>' +
    '<text x="303" y="170" text-anchor="middle" class="b">T = k · d · N</text>' +
    '<text x="303" y="188" text-anchor="middle" class="s">k 토크계수 · d 호칭경 · N 축력</text>' +
    '<line x1="290" y1="50" x2="310" y2="40" class="ld"/><circle cx="310" cy="40" r="2" class="dotf"/><text x="314" y="44" class="s">k 小(A종 0.110~0.150)</text>' +
    '<line x1="410" y1="80" x2="418" y2="62" class="ld"/><circle cx="418" cy="62" r="2" class="dotf"/><text x="414" y="66" text-anchor="end" class="s">k 大(B종 0.150~0.190)</text>' +
    '<line x1="380" y1="90" x2="370" y2="148" class="ld"/><circle cx="370" cy="148" r="2" class="dotf"/><text x="366" y="152" text-anchor="end" class="r">k값 반입 시 확인</text>' +
    '<rect x="40" y="232" width="200" height="60" class="bx2"/>' +
    '<line x1="140" y1="232" x2="140" y2="292" class="ln2 dash"/>' +
    '<circle cx="60" cy="250" r="5" class="bx3"/><circle cx="60" cy="274" r="5" class="bx3"/><circle cx="85" cy="250" r="5" class="bx3"/><circle cx="85" cy="274" r="5" class="bx3"/><circle cx="110" cy="250" r="5" class="bx3"/><circle cx="110" cy="274" r="5" class="bx3"/><circle cx="170" cy="250" r="5" class="bx3"/><circle cx="170" cy="274" r="5" class="bx3"/><circle cx="195" cy="250" r="5" class="bx3"/><circle cx="195" cy="274" r="5" class="bx3"/><circle cx="220" cy="250" r="5" class="bx3"/><circle cx="220" cy="274" r="5" class="bx3"/>' +
    '<line x1="130" y1="302" x2="52" y2="302" class="ar"/>' +
    '<line x1="150" y1="302" x2="228" y2="302" class="ar"/>' +
    '<text x="140" y="318" text-anchor="middle" class="s">이음 중앙 → 단부</text>' +
    '<line x1="195" y1="250" x2="260" y2="240" class="ld"/><circle cx="260" cy="240" r="2" class="dotf"/><text x="264" y="244" class="r">금매김(볼트·너트·와셔·부재)</text>' +
    '<line x1="220" y1="274" x2="260" y2="262" class="ld"/><circle cx="260" cy="262" r="2" class="dotf"/><text x="264" y="266" class="s">본조임 = 표준볼트장력 100%</text>' +
    '<line x1="110" y1="274" x2="260" y2="284" class="ld"/><circle cx="260" cy="284" r="2" class="dotf"/><text x="264" y="288" class="s">토크렌치·축력계 정기 교정</text>' +
    '<rect x="20" y="326" width="74" height="22" class="bx2"/><text x="57" y="341" text-anchor="middle" class="s">1차 조임</text><line x1="95" y1="337" x2="103" y2="337" class="ar"/><rect x="104" y="326" width="74" height="22" class="bx2"/><text x="141" y="341" text-anchor="middle" class="s">금매김</text><line x1="179" y1="337" x2="187" y2="337" class="ar"/><rect x="188" y="326" width="74" height="22" class="bx2"/><text x="225" y="341" text-anchor="middle" class="s">본조임</text><line x1="263" y1="337" x2="271" y2="337" class="ar"/><rect x="272" y="326" width="74" height="22" class="bx2"/><text x="309" y="341" text-anchor="middle" class="s">토크 검사</text><line x1="347" y1="337" x2="355" y2="337" class="ar"/><rect x="356" y="326" width="74" height="22" class="bx2"/><text x="393" y="341" text-anchor="middle" class="s">불합격 처리</text>' +
    '<text x="24" y="364" class="s">너트회전법: 1차조임 후 120°±30° 합격</text>' +
    '<text x="450" y="24" class="b">[F10T 표준볼트장력 kN]</text>' +
    '<text x="450" y="40" class="s">(설계볼트장력 × 1.1)</text>' +
    '<line x1="455" y1="150" x2="630" y2="150" class="ln"/>' +
    '<rect x="462" y="114.9" width="24" height="35.1" class="bx2"/><text x="474" y="110.9" text-anchor="middle" class="s">117</text><text x="474" y="164" text-anchor="middle" class="s">M16</text><rect x="496" y="95.4" width="24" height="54.6" class="bx2"/><text x="508" y="91.4" text-anchor="middle" class="s">182</text><text x="508" y="164" text-anchor="middle" class="s">M20</text><rect x="530" y="82.2" width="24" height="67.8" class="bx2"/><text x="542" y="78.2" text-anchor="middle" class="s">226</text><text x="542" y="164" text-anchor="middle" class="s">M22</text><rect x="564" y="71.4" width="24" height="78.6" class="bx2"/><text x="576" y="67.4" text-anchor="middle" class="s">262</text><text x="576" y="164" text-anchor="middle" class="s">M24</text><rect x="598" y="47.7" width="24" height="102.3" class="bx2"/><text x="610" y="43.7" text-anchor="middle" class="s">341</text><text x="610" y="164" text-anchor="middle" class="s">M27</text>' +
    '<line x1="420" y1="90" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k3">③ 표준장력 = 설계 × 1.1</text><line x1="240" y1="232" x2="440" y2="202" class="ld"/><circle cx="440" cy="202" r="2" class="dotf"/><text x="446" y="206" class="k3">③ 볼트군 10%↑ 토크검사</text><text x="446" y="226" class="k3">③ 평균토크 ±10% 합격</text><text x="446" y="250" class="k4">④ 불합격 → 재검사·전수</text><text x="446" y="270" class="k4">④ 10% 초과 조임 신품교체</text><text x="446" y="290" class="k4">④ k 변동(녹·우천·기온)</text><text x="446" y="314" class="k5">⑤ 전동렌치 자동기록</text><text x="446" y="334" class="k5">⑤ BIM 연계 조임 이력</text>' +
    '</svg>',
  subs: [
    { h: '조임 및 검사 기준', pts: ['[[표준볼트장력]] = 설계볼트장력 × {{1.1}}', '볼트군 {{10%}} 이상 토크렌치 검사', '[[평균토크 ±10%]] 이내 합격'] },
    { h: '시공 시 유의사항', pts: ['불합격 → 볼트군 재검사 → 전수검사', '{{10%}} 초과 조임 볼트 신품 교체', '[[토크계수(k)]] 변동(녹·우천·기온) — 당일 개봉 당일 사용'] },
    { h: '개선방안', pts: ['전동 토크렌치 조임 데이터 자동기록', 'BIM 연계 조임 이력관리'] }
  ],
  msg: '토크로 축력을 관리 — k값이 변하면 축력이 변하므로 반입·당일 관리가 핵심',
  rel: ['토크계수값', '너트회전법', 'TS bolt', '축력계', '마찰면 처리']
},
157: {
  tag: '용접·공정·기준',
  def: '용접·가스절단 전 모재를 미리 가열하는 [[예열(Preheat)]]으로 냉각속도를 늦춰 [[저온균열]]·[[열영향부 경화]]를 막으며, 용접선 [[양측 100mm]]를 가열하고 최대 {{230℃ 이하}}로 관리',
  wwh: ['용접 전 모재 가열', '저온균열·경화 방지', '양측 100·측정 75'],
  figT: '예열 범위·온도측정 위치 및 냉각곡선',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="40" y="60" width="370" height="70" class="bx"/>' +
    '<rect x="40" y="130" width="370" height="70" class="bx"/>' +
    '<rect x="40" y="90" width="300" height="80" class="bx3"/>' +
    '<rect x="60" y="98" width="40" height="14" class="bx2"/>' +
    '<rect x="60" y="148" width="40" height="14" class="bx2"/>' +
    '<line x1="40" y1="130" x2="410" y2="130" class="rd"/>' +
    '<line x1="300" y1="130" x2="322" y2="98" class="ln"/>' +
    '<circle cx="300" cy="130" r="4" class="rf"/>' +
    '<line x1="360" y1="90" x2="360" y2="170" class="ln2"/>' +
    '<line x1="354" y1="90" x2="366" y2="90" class="ln2"/>' +
    '<line x1="354" y1="130" x2="366" y2="130" class="ln2"/>' +
    '<line x1="354" y1="170" x2="366" y2="170" class="ln2"/>' +
    '<text x="368" y="114" class="r s">100mm</text>' +
    '<text x="368" y="154" class="r s">100mm</text>' +
    '<line x1="300" y1="80" x2="340" y2="80" class="ln2"/>' +
    '<line x1="340" y1="76" x2="340" y2="90" class="ln2"/>' +
    '<circle cx="205" cy="100" r="4" class="bx3"/>' +
    '<line x1="214" y1="100" x2="214" y2="130" class="ln2"/>' +
    '<line x1="205" y1="96" x2="230" y2="20" class="ld"/><circle cx="230" cy="20" r="2" class="dotf"/><text x="234" y="24" class="r">75mm 위치 온도측정</text>' +
    '<line x1="150" y1="92" x2="60" y2="40" class="ld"/><circle cx="60" cy="40" r="2" class="dotf"/><text x="64" y="44" class="bl">예열 범위(양측 100mm)</text>' +
    '<line x1="322" y1="98" x2="330" y2="44" class="ld"/><circle cx="330" cy="44" r="2" class="dotf"/><text x="334" y="48" class="r">아크 전방 100mm</text>' +
    '<line x1="160" y1="130" x2="150" y2="226" class="ld"/><circle cx="150" cy="226" r="2" class="dotf"/><text x="154" y="230" class="s">용접선(개선부)</text>' +
    '<line x1="100" y1="162" x2="114" y2="250" class="ld"/><circle cx="114" cy="250" r="2" class="dotf"/><text x="118" y="254" class="s">전기저항(세라믹 패드)</text>' +
    '<text x="114" y="268" class="s">가스버너 / 고주파 유도가열</text>' +
    '<line x1="250" y1="214" x2="330" y2="214" class="ar"/>' +
    '<text x="340" y="218" class="s">용접 진행</text>' +
    '<rect x="20" y="282" width="74" height="22" class="bx2"/><text x="57" y="297" text-anchor="middle" class="s">예열온도 결정</text><line x1="95" y1="293" x2="103" y2="293" class="ar"/><rect x="104" y="282" width="74" height="22" class="bx2"/><text x="141" y="297" text-anchor="middle" class="s">양측 100 가열</text><line x1="179" y1="293" x2="187" y2="293" class="ar"/><rect x="188" y="282" width="74" height="22" class="bx2"/><text x="225" y="297" text-anchor="middle" class="s">75mm 측정</text><line x1="263" y1="293" x2="271" y2="293" class="ar"/><rect x="272" y="282" width="74" height="22" class="bx2"/><text x="309" y="297" text-anchor="middle" class="s">용접</text><line x1="347" y1="293" x2="355" y2="293" class="ar"/><rect x="356" y="282" width="74" height="22" class="bx2"/><text x="393" y="297" text-anchor="middle" class="s">패스간 온도</text>' +
    '<text x="24" y="336" class="s">Ceq 0.45~0.60 → 100~200℃ / 0.60 초과 → 200~350℃</text>' +
    '<text x="450" y="24" class="b">[냉각곡선 t8/5]</text>' +
    '<line x1="462" y1="150" x2="462" y2="36" class="ar"/>' +
    '<line x1="462" y1="150" x2="630" y2="150" class="ar"/>' +
    '<text x="474" y="36" class="s">온도</text>' +
    '<text x="628" y="164" text-anchor="end" class="s">시간</text>' +
    '<line x1="462" y1="60" x2="630" y2="60" class="ln2 dash"/>' +
    '<line x1="462" y1="100" x2="630" y2="100" class="ln2 dash"/>' +
    '<text x="458" y="64" text-anchor="end" class="s">800</text>' +
    '<text x="458" y="104" text-anchor="end" class="s">500</text>' +
    '<polyline points="466,40 476,60 490,100 530,130 630,142" fill="none" class="ln"/>' +
    '<polyline points="466,40 490,60 540,100 590,120 630,128" fill="none" class="rd"/>' +
    '<line x1="490" y1="112" x2="540" y2="112" class="ar" style="marker-start:url(#arr)"/>' +
    '<text x="560" y="96" class="r">t8/5 증가</text>' +
    '<text x="628" y="116" text-anchor="end" class="r">예열</text>' +
    '<text x="512" y="140" text-anchor="end" class="s">무예열</text>' +
    '<line x1="515" y1="80" x2="560" y2="66" class="ld"/><circle cx="560" cy="66" r="2" class="dotf"/><text x="564" y="70" class="s">냉각속도 완화</text>' +
    '<line x1="410" y1="190" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k3">③ 0℃ 이하 → 20℃↑ 예열</text><text x="446" y="206" class="k3">③ Ceq 0.44%↑·t 40mm↑</text><text x="446" y="226" class="k3">③ 최대 230℃ 이하</text><line x1="340" y1="165" x2="440" y2="246" class="ld"/><circle cx="440" cy="246" r="2" class="dotf"/><text x="446" y="250" class="k4">④ 국부가열 금지·균일 가열</text><text x="446" y="270" class="k4">④ 결로 제거·저수소계 봉</text><text x="446" y="290" class="k4">④ 패스간 온도·방풍 보온</text><text x="446" y="314" class="k5">⑤ TMC강 → 예열 생략</text><text x="446" y="334" class="k5">⑤ 자동 온도기록 장치</text>' +
    '</svg>',
  subs: [
    { h: '철골 예열 기준', pts: ['모재 [[0℃ 이하]] → {{20℃ 이상}} 예열', '[[탄소당량]] {{0.44%}} 초과·판두께 {{40mm 이상}}', '최대 [[230℃ 이하]](이종강재는 상위 강종 기준)'] },
    { h: '시공 시 유의사항', pts: ['국부 가열 금지 — [[양측 100mm]] 균일 가열', '결로·수분 제거·저수소계 용접봉', '패스간 온도 상한·우천·강풍 시 방풍 보온'] },
    { h: '개선방안', pts: ['TMC강 등 저탄소당량 강재 → 예열 생략', '전기식 자동 온도기록 장치'] }
  ],
  msg: '천천히 식혀야 깨지지 않는다 — 0℃·Ceq 0.44%·40mm면 예열, 230℃ 이하',
  rel: ['탄소당량(Ceq)', '저수소계 용접봉', 'TMC강', '후열', '패스간 온도']
},
158: {
  tag: '공법·검사·관리',
  def: '화재 시 강재 온도상승을 막는 [[내화피복]]([[뿜칠공법]]·[[미장공법]]·보드·[[내화도료]])의 [[두께·비중]]을 시공 중 {{5㎡당 1개소}}, 시공 후 [[1,500㎡마다]](건축 500㎡) 부위별로 확인하는 검사',
  wwh: ['강재 내화보호', '600℃ 강도 1/2 대비', '두께·비중 검사'],
  figT: '내화피복 공법(습식·건식) 및 뿜칠 시공·검사',
  svg: '<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg">' +
    '<polygon points="62,42 158,42 158,68 122,68 122,142 158,142 158,168 62,168 62,142 98,142 98,68 62,68" class="bx3"/>' +
    '<rect x="70" y="50" width="80" height="10" class="bx2"/>' +
    '<rect x="70" y="150" width="80" height="10" class="bx2"/>' +
    '<rect x="106" y="60" width="8" height="90" class="bx2"/>' +
    '<text x="110" y="186" text-anchor="middle" class="b">습식(뿜칠)</text>' +
    '<rect x="210" y="40" width="100" height="130" class="bx3"/>' +
    '<rect x="218" y="48" width="84" height="114" class="bx"/>' +
    '<rect x="220" y="50" width="80" height="10" class="bx2"/>' +
    '<rect x="220" y="150" width="80" height="10" class="bx2"/>' +
    '<rect x="256" y="60" width="8" height="90" class="bx2"/>' +
    '<text x="260" y="186" text-anchor="middle" class="b">건식(내화보드)</text>' +
    '<line x1="62" y1="46" x2="30" y2="24" class="ld"/><circle cx="30" cy="24" r="2" class="dotf"/><text x="34" y="28" class="s">형상 따라 피복</text>' +
    '<line x1="158" y1="155" x2="130" y2="224" class="ld"/><circle cx="130" cy="224" r="2" class="dotf"/><text x="134" y="228" class="r">소요 내화 1~3시간</text>' +
    '<line x1="98" y1="140" x2="40" y2="246" class="ld"/><circle cx="40" cy="246" r="2" class="dotf"/><text x="44" y="250" class="s">방청도장 부착성 확인</text>' +
    '<line x1="300" y1="165" x2="290" y2="264" class="ld"/><circle cx="290" cy="264" r="2" class="dotf"/><text x="286" y="268" text-anchor="end" class="r">연결철물 간격 시방 준수</text>' +
    '<line x1="212" y1="44" x2="200" y2="24" class="ld"/><circle cx="200" cy="24" r="2" class="dotf"/><text x="196" y="28" text-anchor="end" class="s">줄눈 내화 실링</text>' +
    '<line x1="260" y1="40" x2="280" y2="24" class="ld"/><circle cx="280" cy="24" r="2" class="dotf"/><text x="284" y="28" class="s">성형판 붙임</text>' +
    '<line x1="345" y1="160" x2="345" y2="36" class="ar"/>' +
    '<line x1="345" y1="160" x2="432" y2="160" class="ar"/>' +
    '<text x="349" y="46" class="s">강도</text>' +
    '<text x="430" y="154" text-anchor="end" class="s">온도</text>' +
    '<path d="M347,60 L380,70 Q400,110 428,150" class="rd"/>' +
    '<line x1="400" y1="110" x2="400" y2="160" class="ln2 dash"/>' +
    '<line x1="345" y1="110" x2="400" y2="110" class="ln2 dash"/>' +
    '<text x="349" y="104" class="r">1/2</text>' +
    '<text x="400" y="174" text-anchor="middle" class="r">600℃</text>' +
    '<text x="24" y="284" class="b">[공법별 검사 기준]</text>' +
    '<text x="24" y="304" class="k3">③ 시공 중 5㎡당 1개소 두께 확인(핀)</text>' +
    '<text x="24" y="324" class="k3">③ 시공 후 코어 두께·비중, 1,500㎡(건축 500㎡)마다 5개소</text>' +
    '<text x="24" y="344" class="k3">③ 조적·붙임 3개소 / 내화도료 습도 85%↓·풍속 5m/s↓</text>' +
    '<text x="24" y="362" class="s">※ 로트 KCS 14 1,500㎡ / KCS 41 500㎡, 연면적 미만 시 2회 이상</text>' +
    '<text x="450" y="24" class="b">[뿜칠 시공·검사]</text>' +
    '<rect x="596" y="36" width="12" height="120" class="bx2"/>' +
    '<rect x="584" y="36" width="12" height="120" class="bx3"/>' +
    '<rect x="500" y="60" width="50" height="10" class="bx"/>' +
    '<polygon points="550,65 584,48 584,82" fill="none" class="ln2"/>' +
    '<text x="567" y="44" text-anchor="middle" class="r">90°</text>' +
    '<text x="456" y="92" class="s">노즐 90° 직각 분사</text>' +
    '<line x1="570" y1="110" x2="590" y2="110" class="rd"/>' +
    '<rect x="584" y="130" width="12" height="10" class="rf"/>' +
    '<line x1="570" y1="110" x2="552" y2="112" class="ld"/><circle cx="552" cy="112" r="2" class="dotf"/><text x="548" y="116" text-anchor="end" class="r">핀 측정(시공 중)</text>' +
    '<line x1="584" y1="135" x2="552" y2="138" class="ld"/><circle cx="552" cy="138" r="2" class="dotf"/><text x="548" y="142" text-anchor="end" class="r">코어 채취(시공 후)</text>' +
    '<text x="456" y="170" class="s">기온 4℃ 이상 시공</text>' +
    '<text x="446" y="194" class="k4">④ 바탕 녹·유분 제거</text><text x="446" y="214" class="k4">④ 불합격 → 덧뿜칠·재시공</text><text x="446" y="234" class="k4">④ 설비공사 탈락부 보수</text><text x="446" y="254" class="k4">④ 양생 중 진동·충격 방지</text><text x="446" y="278" class="k5">⑤ 초음파 두께 전수측정</text><text x="446" y="298" class="k5">⑤ 공장 선시공 내화도료</text><text x="446" y="318" class="k5">⑤ BIM 내화시간 연계 검측</text>' +
    '</svg>',
  subs: [
    { h: '공법별 검사 기준', pts: ['시공 중 {{5㎡당 1개소}} 두께 확인(핀)', '시공 후 [[코어 채취]] [[두께·비중]] — [[1,500㎡마다]](건축 {{500㎡}}) {{5개소}}', '조적·붙임 {{3개소}} / [[내화도료]] 습도 {{85%}}↓·풍속 {{5m/s}}↓'] },
    { h: '현장관리 시 유의사항', pts: ['바탕 녹·유분·먼지 제거', '불합격 시 [[덧뿜칠]]·재시공', '설비·전기공사 탈락부 보수', '양생 중 진동·충격·우수 방지'] },
    { h: '개선방안', pts: ['초음파·전자식 두께 비파괴 전수측정', '공장 선시공 내화도료(Shop Coating)', 'BIM 부재별 내화시간·두께 연계 검측'] }
  ],
  msg: '두께가 곧 내화시간 — 시공 중엔 핀, 시공 후엔 코어로 확인',
  rel: ['내화구조', '내화도료', '뿜칠 내화피복', '내화시간', '방청도장']
}
});
