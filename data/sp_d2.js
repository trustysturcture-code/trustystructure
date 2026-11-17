// 간단 요약(한눈에·따라 그리기) — 디테일원 용어250 (dw_c·dw_d) — 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
42: {
  one: '굳지 않은 콘크리트가 거푸집에 주는 [[수평압력]]으로 {{p = W·H}}로 커지다 [[Concrete Head]]에서 최대',
  flow: ['측압 산정', '폼타이 설계', '타설속도 관리', '측압계 계측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="200" y="40" width="50" height="200" class="conc"/>' +
    '<line x1="196" y1="36" x2="196" y2="244" class="ln"/><line x1="254" y1="36" x2="254" y2="244" class="ln"/>' +
    '<polygon points="196,40 130,140 130,240 196,240" class="bx2"/>' +
    '<line x1="146" y1="120" x2="192" y2="120" class="ar"/><line x1="134" y1="175" x2="192" y2="175" class="ar"/><line x1="134" y1="215" x2="192" y2="215" class="ar"/>' +
    '<line x1="100" y1="40" x2="100" y2="140" class="ln2"/><line x1="94" y1="40" x2="106" y2="40" class="ln2"/><line x1="94" y1="140" x2="106" y2="140" class="ln2"/>' +
    '<text x="84" y="96" class="b">H</text>' +
    '<text x="225" y="28" text-anchor="middle" class="b">타설 ↓</text>' +
    '<line x1="170" y1="80" x2="286" y2="80" class="ld"/><text x="290" y="85" class="r">p = W·H</text>' +
    '<line x1="132" y1="140" x2="286" y2="140" class="ld"/><text x="290" y="145" class="r">최대측압 = Head</text>' +
    '<text x="290" y="215" class="s2">응결 후 증가 정지</text>' +
    '<text x="225" y="266" text-anchor="middle" class="s2">거푸집·폼타이</text>' +
    '<text x="186" y="30" text-anchor="middle" class="n">①</text>' +
    '<text x="145" y="75" text-anchor="middle" class="n">②</text>' +
    '<text x="118" y="160" text-anchor="middle" class="n">③</text>' +
    '<text x="276" y="215" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '측압 영향요인', k: ['[[부배합]]·[[슬럼프]]↑', '[[타설속도]]·다짐↑', '저온·고습 → 大'] },
    { h: '시공 시 유의사항', k: ['1회 {{300~600mm}}', '과다진동 금지', '폼타이 간격·조임'] },
    { h: '개선방안', k: ['[[측압계]] 계측·경보', '분할타설·속도 조절'] }
  ],
  code: '측압요인 “부슬타다 습기 응수철” → p = W·H',
  read: '①위에서 타설 → ②깊이 따라 p = W·H 로 증가 → ③Concrete Head 에서 최대 → ④응결 후 더 증가 안 함'
},
43: {
  one: '[[유압잭]]·[[Rail]]·[[Climbing Shoe]]로 거푸집과 작업발판을 [[크레인 없이]] 일체 자동 상승시키는 코어벽 거푸집',
  flow: ['타설·양생', '탈형·후퇴', 'Shoe·Anchor', 'Rail·거푸집 상승'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="30" width="50" height="230" class="conc"/>' +
    '<line x1="140" y1="45" x2="140" y2="250" class="ln"/>' +
    '<rect x="112" y="70" width="140" height="10" class="bx2"/><rect x="112" y="175" width="140" height="10" class="bx2"/>' +
    '<rect x="132" y="115" width="18" height="40" class="bx3"/>' +
    '<circle cx="114" cy="210" r="5" class="rf"/><circle cx="114" cy="240" r="5" class="rf"/>' +
    '<line x1="230" y1="160" x2="230" y2="95" class="ar"/>' +
    '<line x1="144" y1="55" x2="284" y2="55" class="ld"/><text x="290" y="60">Rail 상승</text>' +
    '<text x="290" y="100" class="s2">작업발판 일체</text>' +
    '<line x1="152" y1="135" x2="284" y2="135" class="ld"/><text x="290" y="140" class="bl">유압잭 (크레인 없이)</text>' +
    '<line x1="120" y1="210" x2="284" y2="200" class="ld"/><text x="290" y="205">Climbing Shoe·Anchor</text>' +
    '<text x="290" y="245" class="r">Anchor부 10MPa↑</text>' +
    '<text x="85" y="276" text-anchor="middle" class="t">코어벽</text>' +
    '<text x="128" y="232" text-anchor="middle" class="n">①</text>' +
    '<text x="165" y="112" text-anchor="middle" class="n">②</text>' +
    '<text x="250" y="120" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구성 및 특징', k: ['[[Crane 없이]] 상승', '거푸집·발판 일체', 'Rail·Shoe·Jack'] },
    { h: '시공 시 유의사항', k: ['[[Anchor]]부 {{10MPa}}', '수직도·Level 관리', '강풍 시 작업중지'] },
    { h: '개선방안', k: ['코어 선행·Prefab', '센서·GPS 수직관리'] }
  ],
  code: 'ACS = “레(Rail)·슈(Shoe)·잭(Jack)” + 앵커 강도 확인',
  read: '①Shoe·Anchor 를 벽에 고정 → ②유압잭이 Rail 을 밀어 올림 → ③거푸집·작업발판 일체 상승'
},
44: {
  one: '[[AL Form]]에서 [[Drop Head]]를 하강시켜 [[동바리 존치]] 상태로 슬래브 패널만 먼저 해체·전용하는 시스템',
  flow: ['일체 조립', '타설·양생', 'Pin 해제·하강', '패널 선해체', '상층 전용'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="60" width="190" height="18" class="conc"/>' +
    '<rect x="30" y="78" width="30" height="12" class="bx"/><rect x="80" y="78" width="90" height="12" class="bx"/><rect x="190" y="78" width="30" height="12" class="bx"/>' +
    '<rect x="60" y="78" width="20" height="16" class="bx3"/><rect x="170" y="78" width="20" height="16" class="bx3"/>' +
    '<line x1="70" y1="94" x2="70" y2="230" class="ln"/><line x1="180" y1="94" x2="180" y2="230" class="ln"/><line x1="20" y1="230" x2="230" y2="230" class="ln"/>' +
    '<rect x="260" y="60" width="200" height="18" class="conc"/>' +
    '<rect x="290" y="78" width="20" height="16" class="bx3"/><rect x="410" y="78" width="20" height="16" class="bx3"/>' +
    '<line x1="300" y1="94" x2="300" y2="230" class="ln"/><line x1="420" y1="94" x2="420" y2="230" class="ln"/><line x1="250" y1="230" x2="470" y2="230" class="ln"/>' +
    '<rect x="320" y="140" width="80" height="12" class="bx"/><line x1="360" y1="96" x2="360" y2="134" class="ar"/>' +
    '<text x="125" y="40" text-anchor="middle" class="t">조립·타설</text>' +
    '<text x="365" y="40" text-anchor="middle" class="t">Drop 후</text>' +
    '<text x="125" y="115" text-anchor="middle" class="s2">Drop Head</text>' +
    '<text x="360" y="175" text-anchor="middle" class="bl">패널 선해체</text>' +
    '<text x="360" y="212" text-anchor="middle" class="r">동바리 존치</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">Pin 해제 → 하강</text>' +
    '<text x="50" y="110" text-anchor="middle" class="n">①</text>' +
    '<text x="340" y="122" text-anchor="middle" class="n">②</text>' +
    '<text x="442" y="142" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구성 및 특징', k: ['벽·슬래브 [[일체 조립]]', '[[동바리 존치]]', '전용성·정밀도'] },
    { h: '시공 시 유의사항', k: ['강도 확인 후 Drop', '패널 낙하 방지', '박리제·청소'] },
    { h: '개선방안', k: ['층당 Cycle 최적화', '시스템동바리 연계'] }
  ],
  code: 'Drop Down = “핀 빼고·판 빼고·기둥은 남긴다”',
  read: '①Drop Head 의 Pin 해제 → ②AL 패널만 내려 선해체 → ③동바리는 슬래브를 받친 채 존치'
},
45: {
  one: '[[수직재]]·[[수평재]]·[[가새재]]를 Ring·Pin으로 일체 조립한 동바리로 층고 {{4m 초과}} 시 [[좌굴]] 방지',
  flow: ['구조검토', 'Jack Base', '수직·수평재', '가새 설치', 'U-Head 조정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="70" y="36" width="220" height="18" class="conc"/>' +
    '<path d="M110,54 l0,10 l20,0 l0,-10 M230,54 l0,10 l20,0 l0,-10" class="ln"/>' +
    '<line x1="120" y1="64" x2="120" y2="226" class="ln"/><line x1="240" y1="64" x2="240" y2="226" class="ln"/>' +
    '<line x1="120" y1="110" x2="240" y2="110" class="ln"/><line x1="120" y1="170" x2="240" y2="170" class="ln"/>' +
    '<line x1="120" y1="226" x2="240" y2="110" class="ln2"/>' +
    '<rect x="108" y="226" width="24" height="10" class="bx3"/><rect x="228" y="226" width="24" height="10" class="bx3"/>' +
    '<rect x="60" y="236" width="240" height="12" class="soil"/>' +
    '<line x1="252" y1="60" x2="304" y2="60" class="ld"/><text x="310" y="65">U-Head 높이조정</text>' +
    '<line x1="242" y1="110" x2="304" y2="110" class="ld"/><text x="310" y="115">수직재·수평재</text>' +
    '<line x1="200" y1="150" x2="304" y2="165" class="ld"/><text x="310" y="170" class="bl">가새 (Ring·Pin)</text>' +
    '<line x1="254" y1="231" x2="304" y2="221" class="ld"/><text x="310" y="226">Jack Base·깔목</text>' +
    '<text x="310" y="266" class="r">층고 4m 초과</text>' +
    '<text x="95" y="225" text-anchor="middle" class="n">①</text>' +
    '<text x="180" y="100" text-anchor="middle" class="n">②</text>' +
    '<text x="160" y="150" text-anchor="middle" class="n">③</text>' +
    '<text x="100" y="72" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '적용기준', k: ['층고 {{4m 초과}}', '높이 {{5m↑}} 안전계획'] },
    { h: '시공 시 유의사항', k: ['깔목 {{45mm↑}}', 'U-Head 편심·수직도', '쐐기·Pin 체결'] },
    { h: '개선방안', k: ['안전인증·구조검토', '무선 변위·하중계측'] }
  ],
  code: '“수수가 U자로 잭” = 수직·수평·가새·U-Head·Jack',
  read: '①Jack Base·깔목으로 지지 → ②수직·수평재 조립 → ③가새로 좌굴 방지 → ④U-Head 로 높이 맞춤'
},
49: {
  one: '[[항복강도]] {{500MPa 이상}} 이형철근으로 [[과밀배근]]을 해소하나 [[연성]] 저하·[[정착·이음길이]] 증가',
  flow: ['fy 상향 설계', '강종 식별', '굽힘 가공', '기계식이음 정착'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="240" x2="300" y2="240" class="ln"/><line x1="60" y1="240" x2="60" y2="40" class="ln"/>' +
    '<path d="M60,240 L110,150 L280,150" class="ln"/>' +
    '<path d="M60,240 L130,95 L220,88" class="rd"/>' +
    '<text x="66" y="50" class="s2">응력 σ</text><text x="300" y="262" text-anchor="end" class="s2">변형 ε</text>' +
    '<text x="140" y="78" class="r">SD500↑ (fy 상향)</text>' +
    '<text x="200" y="172" class="s2">SD400</text>' +
    '<text x="226" y="112" class="bl">연성 ↓</text>' +
    '<text x="320" y="140" class="g">철근량 ↓ 과밀 해소</text>' +
    '<text x="320" y="190" class="r">정착·이음길이 ↑</text>' +
    '<text x="115" y="90" text-anchor="middle" class="n">①</text>' +
    '<text x="288" y="112" text-anchor="middle" class="n">②</text>' +
    '<text x="306" y="140" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류 및 특징', k: ['SD500·600·700', '내진 S·용접 W', '[[과밀배근 해소]]'] },
    { h: '시공 시 유의사항', k: ['굽힘 균열 주의', '[[정착·이음길이]]↑', '용접·가열 금지'] },
    { h: '개선방안', k: ['[[기계식이음]]', '[[Head Bar]] 정착', '강종 식별 표시'] }
  ],
  code: '고강도 = “줄고(철근량) 늘고(정착) 약하고(연성)”',
  read: '①SD500 은 항복강도 fy 가 높음 → ②소성구간이 짧아 연성↓ → ③철근량↓ 이지만 정착·이음길이↑'
},
51: {
  one: '[[1방향 슬래브]]에서 [[주철근과 직각]]으로 배근해 하중 [[분산]]·[[건조수축·온도균열]] 제어·주근 고정',
  flow: ['주근 배치', '직각 배력근', '결속·Spacer', '간격·피복 검측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="260" height="200" class="bx"/>' +
    '<line x1="80" y1="40" x2="80" y2="240" class="rd"/><line x1="125" y1="40" x2="125" y2="240" class="rd"/><line x1="170" y1="40" x2="170" y2="240" class="rd"/><line x1="215" y1="40" x2="215" y2="240" class="rd"/><line x1="260" y1="40" x2="260" y2="240" class="rd"/>' +
    '<line x1="40" y1="90" x2="300" y2="90" class="bl"/><line x1="40" y1="140" x2="300" y2="140" class="bl"/><line x1="40" y1="190" x2="300" y2="190" class="bl"/>' +
    '<line x1="262" y1="60" x2="310" y2="65" class="ld"/><text x="315" y="70" class="r">주철근 (단변)</text>' +
    '<line x1="300" y1="140" x2="310" y2="120" class="ld"/><text x="315" y="120" class="bl">배력철근 ⊥ 직각</text>' +
    '<text x="315" y="170">하중 분산·균열 제어</text>' +
    '<text x="315" y="220" class="r">간격 5h·450 이하</text>' +
    '<text x="170" y="268" text-anchor="middle" class="t">1방향 슬래브</text>' +
    '<text x="102" y="66" text-anchor="middle" class="n">①</text>' +
    '<text x="148" y="120" text-anchor="middle" class="n">②</text>' +
    '<text x="330" y="150" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '역할 및 기준', k: ['[[하중 분산]]', '철근비 {{0.0020↑}}', '간격 {{5h·450mm↓}}'] },
    { h: '시공 시 유의사항', k: ['주근 외측·배력 내측', '결속·Spacer 고정'] },
    { h: '개선방안', k: ['용접철망·Prefab', '수축·온도철근 겸용'] }
  ],
  code: '배력 = “직각·분산·균열·고정” (직분균고)',
  read: '①단변 방향 주철근이 하중 부담 → ②직각 배력철근이 하중 분산 → ③균열 제어 (간격 5h·450 이하)'
},
55: {
  one: '철근을 맞대고 [[산소-아세틸렌]]으로 {{1,200~1,300℃}} 가열하며 [[축방향 가압]]해 접합하는 맞댄 이음',
  flow: ['직각 절단·연마', '맞대기·고정', '가열·가압', '부풂 형성', '초음파 검사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="122" width="160" height="26" class="bx2"/><rect x="260" y="122" width="160" height="26" class="bx2"/>' +
    '<ellipse cx="240" cy="135" rx="34" ry="24" class="bx3"/>' +
    '<line x1="20" y1="135" x2="56" y2="135" class="ar"/><line x1="460" y1="135" x2="424" y2="135" class="ar"/>' +
    '<line x1="215" y1="72" x2="226" y2="104" class="ar"/><line x1="265" y1="72" x2="254" y2="104" class="ar"/>' +
    '<text x="20" y="108" class="r">가압 30MPa↑</text>' +
    '<text x="240" y="36" text-anchor="middle" class="r">가열 1,200~1,300℃</text>' +
    '<text x="240" y="60" text-anchor="middle" class="s2">산소-아세틸렌</text>' +
    '<text x="240" y="190" text-anchor="middle" class="bl">부풂 지름 1.4d↑</text>' +
    '<text x="240" y="215" text-anchor="middle" class="bl">부풂 길이 1.2d↑</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">편심 1/5d·엇갈림 1/4d 이하</text>' +
    '<text x="240" y="90" text-anchor="middle" class="n">①</text>' +
    '<text x="30" y="155" text-anchor="middle" class="n">②</text>' +
    '<text x="290" y="174" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '품질기준', k: ['지름 {{1.4d↑}}', '길이 {{1.2d↑}}', '편심 1/5d 이하'] },
    { h: '시공 시 유의사항', k: ['단면 직각·연마', '이경·이강종 제한', '강우·강풍 중지'] },
    { h: '개선방안', k: ['[[초음파탐상]]', '기계식이음 대체'] }
  ],
  code: '압접 “1.4·1.2·1/5·1/4” + 가압 30MPa',
  read: '①산소-아세틸렌으로 맞댄 면 가열 → ②양쪽에서 축방향 가압 → ③부풂(지름 1.4d·길이 1.2d) 형성'
},
56: {
  one: '철근 단부를 [[Coupler(Sleeve)]]에 넣어 나사·압착·Grout로 응력을 전달하는 이음 ({{1.25fy 이상}})',
  flow: ['단부 가공', '삽입길이 Marking', 'Coupler 체결', '토크·인장 시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="125" width="190" height="24" class="bx2"/><rect x="250" y="125" width="190" height="24" class="bx2"/>' +
    '<rect x="190" y="112" width="100" height="50" class="bx3"/>' +
    '<line x1="180" y1="118" x2="180" y2="156" class="rd"/><line x1="300" y1="118" x2="300" y2="156" class="rd"/>' +
    '<text x="240" y="40" text-anchor="middle" class="r">1.25fy 이상 인장</text>' +
    '<text x="240" y="95" text-anchor="middle" class="t">Coupler (Sleeve)</text>' +
    '<line x1="180" y1="158" x2="160" y2="180" class="ld"/><text x="40" y="195" class="r">삽입길이 Marking</text>' +
    '<line x1="290" y1="160" x2="320" y2="180" class="ld"/><text x="320" y="195" class="bl">토크 관리</text>' +
    '<text x="240" y="235" text-anchor="middle" class="g">이음길이 불필요</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">나사·압착·Grout 충전</text>' +
    '<text x="165" y="118" text-anchor="middle" class="n">①</text>' +
    '<text x="240" y="145" text-anchor="middle" class="n">②</text>' +
    '<text x="165" y="42" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류 및 특징', k: ['[[나사식]]·[[압착식]]', '[[Grout 충전식]]', '과밀배근 해소'] },
    { h: '시공 시 유의사항', k: ['[[삽입길이 Marking]]', '[[토크 관리]] 기록', 'Sleeve 외면 피복'] },
    { h: '개선방안', k: ['Lot별 인장 검사', '대구경·Prefab'] }
  ],
  code: '기계식 “나·압·충·편” + “마·토·피”',
  read: '①철근을 Marking 선까지 삽입 → ②Coupler 가 나사·압착·Grout 로 응력 전달 → ③1.25fy 이상 인장'
},
57: {
  one: '시멘트 광물이 [[물과 화학반응]]해 [[C-S-H 겔]]·[[Ca(OH)2]]를 만들며 [[수화열]]을 내고 굳는 반응',
  flow: ['초기 반응', '유도기', '가속기', '감속기', '안정기'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="230" x2="450" y2="230" class="ln"/><line x1="50" y1="230" x2="50" y2="40" class="ln"/>' +
    '<path d="M50,230 L62,80 L82,212 L150,212 C190,212 200,90 240,90 C290,90 330,190 440,205" class="rd"/>' +
    '<text x="56" y="42" class="s2">수화열</text>' +
    '<text x="70" y="64" class="s2">초기</text>' +
    '<text x="116" y="202" text-anchor="middle" class="s2">유도기</text>' +
    '<text x="240" y="76" text-anchor="middle" class="b">가속기 (C3S)</text>' +
    '<text x="360" y="150" class="s2">감속기·안정기</text>' +
    '<text x="340" y="30" text-anchor="middle" class="bl">C-S-H 겔 + Ca(OH)2</text>' +
    '<text x="450" y="256" text-anchor="end" class="s2">시간 →</text>' +
    '<text x="90" y="90" text-anchor="middle" class="n">①</text>' +
    '<text x="160" y="200" text-anchor="middle" class="n">②</text>' +
    '<text x="185" y="110" text-anchor="middle" class="n">③</text>' +
    '<text x="330" y="130" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '반응 특성', k: ['[[C-S-H 겔]]·[[Ca(OH)2]]', 'C3S 조기·C2S 장기', '결합수 약 {{25%}}'] },
    { h: '문제점', k: ['[[수화열]] → 온도균열', '저온·건조 수화정지'] },
    { h: '대책', k: ['저발열·FA·Slag', '습윤·보온 양생'] }
  ],
  code: '수화 “초·유·가·감·안” / “C3S 빨리, C2S 오래”',
  read: '①물과 닿자마자 초기 발열 → ②유도기(휴지) → ③C3S 가속기 발열 최대·경화 → ④감속기·안정기'
},
58: {
  one: '콘크리트 성질 개선용 첨가재료로 {{5% 이상}} 배합계산 포함 [[혼화재]]와 {{1% 이하}} 약품 [[혼화제]]로 구분',
  flow: ['요구성능', '종류·량 선정', '시험배합', '계량·비빔'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="240" y1="38" x2="127" y2="60" class="ln2"/><line x1="240" y1="38" x2="352" y2="60" class="ln2"/>' +
    '<rect x="30" y="60" width="195" height="140" class="bx"/><rect x="255" y="60" width="195" height="140" class="bx2"/>' +
    '<text x="240" y="28" text-anchor="middle" class="t">혼화재료</text>' +
    '<text x="127" y="95" text-anchor="middle" class="t">혼화재</text>' +
    '<text x="127" y="130" text-anchor="middle" class="r">5% 이상</text>' +
    '<text x="127" y="158" text-anchor="middle" class="s2">배합계산 포함</text>' +
    '<text x="127" y="185" text-anchor="middle" class="s2">FA·Slag·팽창재</text>' +
    '<text x="352" y="95" text-anchor="middle" class="t">혼화제</text>' +
    '<text x="352" y="130" text-anchor="middle" class="r">1% 이하</text>' +
    '<text x="352" y="158" text-anchor="middle" class="s2">용적 무시</text>' +
    '<text x="352" y="185" text-anchor="middle" class="s2">AE·감수·지연</text>' +
    '<text x="50" y="100" text-anchor="middle" class="n">①</text>' +
    '<text x="275" y="100" text-anchor="middle" class="n">②</text>' +
    '</svg>',
  heads: [
    { h: '분류 및 특징', k: ['[[혼화재]] {{5%↑}}', '[[혼화제]] {{1%↓}}', '포졸란·잠재수경성'] },
    { h: '시공 시 유의사항', k: ['계량 {{±2%}}·{{±3%}}', '과다 → 응결지연', '상호 적합성 시험'] },
    { h: '개선방안', k: ['부산물 → 탄소저감', '시험배합 최적량'] }
  ],
  code: '혼화재 “석식 팽이버섯” / 혼화제 “AE 감수 지연”',
  read: '①혼화재: 5% 이상, 배합계산 포함(FA·Slag) ↔ ②혼화제: 1% 이하, 용적 무시(AE·감수·지연)'
},
59: {
  one: '[[한중 콘크리트]]에서 [[빙점을 낮추고]] 수화를 [[촉진]]해 {{5MPa}} 전 [[초기동해]]를 막는 [[비염화물계]] 혼화제',
  flow: ['외기온 예측', '첨가율 결정', '시험배합', '타설', '5MPa 보온양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="60" x2="60" y2="230" class="ln"/>' +
    '<line x1="60" y1="110" x2="300" y2="110" class="ln dash"/>' +
    '<line x1="60" y1="180" x2="300" y2="180" class="rd"/>' +
    '<line x1="180" y1="114" x2="180" y2="174" class="ar"/>' +
    '<text x="60" y="40" class="r">촉진 → 5MPa 조기확보</text>' +
    '<text x="310" y="115">0℃ : 보통 동결</text>' +
    '<text x="190" y="150" class="bl">빙점 강하</text>' +
    '<text x="310" y="185" class="r">-3℃ 까지 방지</text>' +
    '<text x="70" y="215" class="s2">일평균 4℃ 이하 적용</text>' +
    '<text x="60" y="262" class="g">비염화물계 (질산염)</text>' +
    '<text x="40" y="115" text-anchor="middle" class="n">①</text>' +
    '<text x="160" y="150" text-anchor="middle" class="n">②</text>' +
    '<text x="40" y="185" text-anchor="middle" class="n">③</text>' +
    '<text x="40" y="40" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '작용 및 적용', k: ['[[빙점 강하]]', '[[응결·경화 촉진]]', '일평균 {{4℃↓}}'] },
    { h: '시공 시 유의사항', k: ['염화물 {{0.30kg/m³↓}}', '온도별 첨가율', '과다 → 급결'] },
    { h: '개선방안', k: ['보온·가열 양생', '적산온도 관리'] }
  ],
  code: '내한촉진 “빙·촉·비·5” (빙점·촉진·비염화물·5MPa)',
  read: '①보통은 0℃ 에서 동결 → ②빙점을 낮춰 → ③-3℃ 까지 동결 방지 → ④수화 촉진으로 5MPa 조기확보'
},
63: {
  one: '펌프 [[압송배관]]의 콘크리트를 [[Mast]] 위 회전·굴절 [[Placing Boom]]으로 분배, 층 따라 [[Climbing]]',
  flow: ['압송계획', 'Mast 설치', 'Boom 회전 타설', 'Climbing', '배관 청소'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="100" y1="120" x2="420" y2="120" class="ln2"/><line x1="100" y1="180" x2="420" y2="180" class="ln2"/><line x1="10" y1="250" x2="420" y2="250" class="ln"/>' +
    '<line x1="150" y1="60" x2="150" y2="250" class="ln"/>' +
    '<path d="M150,60 L260,40 L360,90" class="ln"/>' +
    '<line x1="360" y1="90" x2="360" y2="115" class="ar"/>' +
    '<rect x="20" y="222" width="60" height="26" class="bx3"/>' +
    '<path d="M80,240 L144,240 L144,70" class="bl dash"/>' +
    '<text x="260" y="28" text-anchor="middle" class="t">Placing Boom</text>' +
    '<text x="160" y="100">Mast (Climbing)</text>' +
    '<text x="370" y="110" class="r">타설 분배</text>' +
    '<text x="78" y="214" class="bl">압송배관</text>' +
    '<text x="50" y="270" text-anchor="middle" class="s2">Pump</text>' +
    '<text x="300" y="205" class="s2">Slab 구조검토·보강</text>' +
    '<text x="30" y="214" text-anchor="middle" class="n">①</text>' +
    '<text x="130" y="150" text-anchor="middle" class="n">②</text>' +
    '<text x="210" y="72" text-anchor="middle" class="n">③</text>' +
    '<text x="380" y="140" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '구성 및 종류', k: ['Boom·Mast·배관', '고정식·이동식', '관경 {{100·125mm}}'] },
    { h: '시공 시 유의사항', k: ['Mast 지지 Slab 보강', '배관 고정·폐색 방지', '강풍 시 Boom 접기'] },
    { h: '개선방안', k: ['고압펌프 선정', '원격·충돌방지 센서'] }
  ],
  code: 'CPB = “붐·마·배·펌” (Boom·Mast·배관·Pump)',
  read: '①Pump 압송 → ②배관이 Mast 따라 상승 → ③Boom 회전·굴절 → ④원하는 위치에 타설 분배'
},
64: {
  one: '빗물로 [[단위수량 증가]]·[[W/C 상승]]·[[Cement Paste 유실]]이 생기므로 원칙적으로 [[타설을 중지]]',
  flow: ['기상예보', '타설 결정', '중지·시공이음', '물 제거·보양', '강도 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="70" y1="60" x2="62" y2="80" class="bl"/><line x1="130" y1="60" x2="122" y2="80" class="bl"/><line x1="190" y1="60" x2="182" y2="80" class="bl"/><line x1="250" y1="60" x2="242" y2="80" class="bl"/>' +
    '<path d="M30,140 L30,110 L310,110 L310,140" class="bl"/>' +
    '<rect x="40" y="150" width="260" height="50" class="conc"/>' +
    '<line x1="200" y1="146" x2="200" y2="204" class="rd"/>' +
    '<text x="40" y="40" class="s2">빗물 유입</text>' +
    '<text x="320" y="40" class="r">원칙: 타설 중지</text>' +
    '<text x="320" y="115" class="bl">보양 Sheet</text>' +
    '<text x="320" y="180">W/C ↑·Paste 유실</text>' +
    '<text x="200" y="225" text-anchor="middle" class="r">시공이음</text>' +
    '<text x="40" y="262" class="s2">고인 물 제거 → Tamping</text>' +
    '<text x="40" y="78" text-anchor="middle" class="n">①</text>' +
    '<text x="60" y="180" text-anchor="middle" class="n">②</text>' +
    '<text x="215" y="180" text-anchor="middle" class="n">③</text>' +
    '<text x="30" y="100" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '문제점', k: ['[[Cold Joint]]', '표면 Scaling', '강도 저하'] },
    { h: '시공 시 유의사항', k: ['[[시공이음]] 사전계획', '고인 물 제거', '[[Tamping]] 재마감'] },
    { h: '개선방안', k: ['기상 기반 일정', 'Core·비파괴 확인'] }
  ],
  code: '우천 타설 “중·덮·이·제·확”',
  read: '①빗물 유입 → ②W/C↑·Paste 유실 → ③원칙 중지·시공이음 → ④Sheet 보양·고인 물 제거'
},
65: {
  one: '고강도 기둥·벽(V)을 먼저, 저강도 보·슬래브(H)를 나중에 타설, 강도비 {{1.4배}} 초과 시 {{600mm}} 확장',
  flow: ['V 타설', '침하 안정', 'Laitance 제거', '600 확장타설', 'H 타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="100" width="400" height="30" class="bx2"/>' +
    '<rect x="140" y="100" width="180" height="30" class="conc"/>' +
    '<rect x="200" y="40" width="60" height="210" class="conc"/>' +
    '<line x1="140" y1="88" x2="200" y2="88" class="ln2"/><line x1="260" y1="88" x2="320" y2="88" class="ln2"/>' +
    '<text x="240" y="26" text-anchor="middle">강도비 1.4배 초과 시</text>' +
    '<text x="170" y="82" text-anchor="middle" class="r">600mm</text>' +
    '<text x="290" y="82" text-anchor="middle" class="r">600mm</text>' +
    '<text x="40" y="160" class="bl">H: 슬래브 (후타설)</text>' +
    '<text x="270" y="200" class="r">V: 기둥 고강도 (선타설)</text>' +
    '<text x="270" y="240" class="s2">Laitance 제거</text>' +
    '<text x="230" y="150" text-anchor="middle" class="n">①</text>' +
    '<text x="170" y="122" text-anchor="middle" class="n">②</text>' +
    '<text x="80" y="122" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '적용 및 기준', k: ['강도비 {{1.4배}} 초과', '기둥면 {{600mm}} 확장', 'Puddling'] },
    { h: '시공 시 유의사항', k: ['V 침하 후 H 타설', 'Laitance 제거·습윤', '경계 Mesh'] },
    { h: '개선방안', k: ['기둥 선행 공기단축', '강도별 Truck 식별'] }
  ],
  code: 'VH = “V 먼저·1.4배·600 확장·이음 청소”',
  read: '①고강도 기둥(V) 먼저 타설 → ②기둥면 600mm 까지 고강도 확장 → ③나머지 슬래브(H) 후타설'
},
72: {
  one: '[[보일법칙]]의 [[공기실 압력법]]으로 공기량을 재는 시험, [[동결융해 저항성]] 위해 {{4.5%}} {{±1.5%}}',
  flow: ['3층 다짐', '뚜껑·주수', '공기실 가압', '밸브 개방', '골재수정 보정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="130" width="140" height="110" class="bx"/>' +
    '<rect x="50" y="118" width="160" height="12" class="bx2"/>' +
    '<rect x="100" y="70" width="60" height="48" class="bx3"/>' +
    '<circle cx="230" cy="70" r="24" class="bx"/><line x1="230" y1="70" x2="244" y2="56" class="rd"/>' +
    '<line x1="160" y1="80" x2="206" y2="74" class="ln"/>' +
    '<text x="270" y="50">공기실 (P1 → P2)</text>' +
    '<text x="270" y="90">압력계 직독</text>' +
    '<text x="270" y="140" class="t">보일법칙</text>' +
    '<text x="270" y="190" class="r">4.5 ± 1.5%</text>' +
    '<text x="270" y="225" class="s2">골재수정계수 보정</text>' +
    '<text x="130" y="262" text-anchor="middle" class="s2">시료 3층 다짐</text>' +
    '<text x="130" y="190" text-anchor="middle" class="n">①</text>' +
    '<text x="130" y="98" text-anchor="middle" class="n">②</text>' +
    '<text x="230" y="112" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '기준·규정목적', k: ['보통 {{4.5%}}·경량 5.5', '허용 {{±1.5%}}', '[[동결융해 저항성]]'] },
    { h: '시험·관리 유의', k: ['공기1%↑ 강도4~6%↓', '[[골재수정계수]]'] },
    { h: '개선방안', k: ['AE·AE감수제', '받아들이기 측정'] }
  ],
  code: '공기량 4.5·5.5·3.5 ±1.5 / “슬20·수3·강4~6”',
  read: '①시료를 3층 다짐해 채움 → ②공기실 압력 P1 을 개방 → ③압력계 P2 로 공기량 직독(보일법칙)'
},
73: {
  one: '구조체 [[압축강도]] 확인용으로 [[1회/일·층·타설구획]] 채취해 [[현장양생]] 후 재령 {{28일}}에 판정하는 공시체',
  flow: ['1/4·2/4·3/4 채취', '1회 3개', '현장양생', '28일 압축시험', '판정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="400" height="30" class="bx2"/>' +
    '<line x1="140" y1="90" x2="140" y2="134" class="ar"/><line x1="240" y1="90" x2="240" y2="134" class="ar"/><line x1="340" y1="90" x2="340" y2="134" class="ar"/>' +
    '<rect x="120" y="140" width="40" height="70" class="conc"/><rect x="220" y="140" width="40" height="70" class="conc"/><rect x="320" y="140" width="40" height="70" class="conc"/>' +
    '<text x="240" y="44" text-anchor="middle" class="t">레미콘 배출</text>' +
    '<text x="140" y="81" text-anchor="middle" class="b">1/4</text>' +
    '<text x="240" y="81" text-anchor="middle" class="b">2/4</text>' +
    '<text x="340" y="81" text-anchor="middle" class="b">3/4</text>' +
    '<text x="240" y="240" text-anchor="middle" class="r">1회 3개 → 재령 28일</text>' +
    '<text x="240" y="266" text-anchor="middle" class="s2">현장양생 = 구조체 조건</text>' +
    '<text x="60" y="81" text-anchor="middle" class="n">①</text>' +
    '<text x="110" y="180" text-anchor="middle" class="n">②</text>' +
    '<text x="160" y="262" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '채취·판정기준', k: ['연속 {{3회}} 평균≥fcq', '35↓: fcq−{{3.5}}', '35↑: {{0.9}}fcq'] },
    { h: '시공 시 유의사항', k: ['구조체 동일 조건', '운반 충격·급랭 금지'] },
    { h: '개선방안', k: ['무선 온도센서', '적산온도 강도추정'] }
  ],
  code: '“일·층·구획 1회, 3개 1조, 28일” / 35 기준',
  read: '①레미콘 배출 1/4·2/4·3/4 에서 채취 → ②1회 3개 공시체 제작 → ③현장양생 후 28일 압축시험'
},
74: {
  one: '[[동결융해]] 반복과 [[제빙화학제]]의 삼투압·결빙압으로 [[표층 모르타르]]가 얇게 떨어져 나가는 현상',
  flow: ['적정 공기량', '블리딩 후 마감', '초기동해 방지', '발수 처리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="110" width="260" height="120" class="conc"/>' +
    '<rect x="40" y="98" width="80" height="12" class="bx2"/><rect x="200" y="98" width="100" height="12" class="bx2"/>' +
    '<path d="M126,90 L170,84 L174,94 L130,100 z" class="bx2"/>' +
    '<circle cx="80" cy="62" r="4" class="bf"/><circle cx="110" cy="70" r="4" class="bf"/><circle cx="240" cy="64" r="4" class="bf"/><circle cx="270" cy="72" r="4" class="bf"/>' +
    '<text x="40" y="40" class="r">제빙화학제 (염)</text>' +
    '<text x="200" y="40" class="bl">동결융해 반복</text>' +
    '<line x1="175" y1="90" x2="315" y2="96" class="ld"/><text x="320" y="100">표층 모르타르 박리</text>' +
    '<text x="170" y="175" text-anchor="middle" class="t">콘크리트</text>' +
    '<text x="320" y="200" class="s2">블리딩 후 마감</text>' +
    '<text x="40" y="262" class="g">공기량 확보·W/B 45%↓</text>' +
    '<text x="60" y="75" text-anchor="middle" class="n">①</text>' +
    '<text x="222" y="78" text-anchor="middle" class="n">②</text>' +
    '<text x="115" y="92" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['[[동결융해]] 반복', '[[제빙화학제]] 삼투압', '블리딩수 위 마감'] },
    { h: '시공 시 유의사항', k: ['블리딩 후 마감', '초기동해 방지', '첫 겨울 제빙제 자제'] },
    { h: '방지대책', k: ['[[연행공기]] AE제', 'W/B {{45%}} 이하', '실란 발수제'] }
  ],
  code: 'Scaling “얼·염·약” → 대책 “공·마·발”',
  read: '①제빙화학제(염) + ②동결융해 반복 → ③표층 모르타르가 얇게 박리(Scaling)'
},
75: {
  one: '표면 부근 [[흡수율 큰 다공질 골재]]의 물 동결 또는 [[ASR 겔]] 팽창으로 표면이 [[원추형]]으로 떨어지는 현상',
  flow: ['흡수율 시험', '불량골재 배제', 'AE 배합', '습윤·표면보호'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="100" width="290" height="140" class="conc"/>' +
    '<polygon points="150,100 220,100 185,148" class="bx2"/>' +
    '<circle cx="185" cy="166" r="16" class="bf"/>' +
    '<polygon points="150,28 220,28 185,70" class="bx3"/>' +
    '<line x1="185" y1="96" x2="185" y2="76" class="ar"/>' +
    '<text x="240" y="50" class="r">원추형 탈락</text>' +
    '<line x1="201" y1="166" x2="340" y2="166" class="ld"/><text x="345" y="171" class="bl">흡수율 큰 골재</text>' +
    '<text x="345" y="205">동결 팽창 / ASR 겔</text>' +
    '<text x="95" y="210" text-anchor="middle" class="t">콘크리트</text>' +
    '<text x="40" y="268" class="g">굵은골재 흡수율 3% 이하</text>' +
    '<text x="160" y="175" text-anchor="middle" class="n">①</text>' +
    '<text x="330" y="205" text-anchor="middle" class="n">②</text>' +
    '<text x="140" y="60" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['[[흡수율 큰 골재]]', '골재 내 물 동결', '[[ASR 겔]] 팽창'] },
    { h: '시공 시 유의사항', k: ['흡수율 {{3%}} 이하', '풍화골재 배제', '과다 진동 금지'] },
    { h: '방지대책', k: ['AE제 공기량', '저알칼리 시멘트', '표면 발수·도장'] }
  ],
  code: 'Pop out = “흡·동·겔” → 원추형',
  read: '①표면 가까이 흡수율 큰 골재 → ②물 동결·ASR 겔로 팽창 → ③원추형으로 튀어나와 탈락'
},
76: {
  one: '블리딩 중 [[쇠흙손 마감]]·[[표면 조기건조]]로 표층이 막혀 [[공기·블리딩수]]가 갇혀 부풀어 오르는 현상',
  flow: ['블리딩 종료', '플로팅', '적기 쇠흙손', '방풍·증발억제', '습윤양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M40,230 L40,120 L150,120 Q185,86 220,120 L330,120 L330,230 z" class="conc"/>' +
    '<circle cx="175" cy="110" r="5" class="bf"/><circle cx="195" cy="112" r="4" class="bf"/>' +
    '<line x1="100" y1="200" x2="100" y2="132" class="ar"/><line x1="270" y1="200" x2="270" y2="132" class="ar"/>' +
    '<text x="40" y="40">표면 조기 밀폐 (쇠흙손)</text>' +
    '<text x="260" y="40" class="s2">바람·고온 → 조기건조</text>' +
    '<text x="185" y="80" text-anchor="middle" class="r">부풀음</text>' +
    '<line x1="272" y1="160" x2="340" y2="155" class="ld"/><text x="345" y="160" class="bl">공기·블리딩수 갇힘</text>' +
    '<text x="40" y="262" class="g">블리딩 종료 후 마감</text>' +
    '<text x="60" y="110" text-anchor="middle" class="n">①</text>' +
    '<text x="115" y="170" text-anchor="middle" class="n">②</text>' +
    '<text x="225" y="95" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['블리딩 중 [[조기 마감]]', '[[표면 조기건조]]', '공기량 과다'] },
    { h: '시공 시 유의사항', k: ['[[블리딩 종료 후 마감]]', '쇠흙손 과다 금지', '바닥 가열 금지'] },
    { h: '방지대책', k: ['증발억제제·방풍막', '공기량 {{3%}} 이하', '진공탈수 공법'] }
  ],
  code: 'Blister = “조·건·공” → 부풀음',
  read: '①쇠흙손으로 표면이 먼저 막힘 → ②블리딩수·공기가 올라오다 갇힘 → ③표면이 부풀어 오름'
},
77: {
  one: '스프링 해머의 [[반발도(R)]]가 표면경도에 비례함을 이용해 {{20점}} 타격으로 강도를 추정하는 [[비파괴시험]]',
  flow: ['측정면 정리', '20점 직각 타격', '이상값 제외', '방향·재령 보정', '강도 추정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="300" y="60" width="60" height="190" class="conc"/>' +
    '<rect x="110" y="125" width="170" height="30" class="bx3"/>' +
    '<line x1="280" y1="140" x2="300" y2="140" class="ln"/>' +
    '<line x1="285" y1="105" x2="190" y2="105" class="ar"/>' +
    '<text x="40" y="40" class="r">20점 타격 · 간격 30mm↑</text>' +
    '<text x="120" y="110" class="r">반발도 R</text>' +
    '<text x="195" y="185" text-anchor="middle" class="t">슈미트해머</text>' +
    '<text x="195" y="212" text-anchor="middle" class="s2">N·L·P·M형</text>' +
    '<text x="370" y="150">마감층 제거</text>' +
    '<text x="40" y="266" class="s2">평균 ±20% 이탈값 제외</text>' +
    '<text x="100" y="160" text-anchor="middle" class="n">①</text>' +
    '<text x="240" y="95" text-anchor="middle" class="n">②</text>' +
    '<text x="310" y="50" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '해머 종류', k: ['N형 보통', 'L형 경량·P형 저강도', 'M형 매스'] },
    { h: '측정 시 유의사항', k: ['두께·이격 {{100mm}}', '{{20점}}·간격 {{30mm}}', '이탈 {{4개}}↑ 재측정'] },
    { h: '개선방안', k: ['재령·방향 보정', '코어·초음파 조합법'] }
  ],
  code: '슈미트 “20점·30mm·100mm·±20%·4개” / N·L·P·M',
  read: '①해머를 직각으로 타격 → ②튕겨 나온 반발도 R 측정 → ③20점 평균으로 강도 추정'
},
78: {
  one: '타설 후 [[비중차]]로 시멘트·골재는 가라앉고 [[물]]과 미립분이 떠올라 표면에 고이는 [[재료분리]] 현상',
  flow: ['단위수량↓ 배합', '타설속도 관리', '블리딩수 제거', 'Tamping·재진동'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="60" width="160" height="22" class="bx2"/>' +
    '<rect x="60" y="82" width="160" height="158" class="conc"/>' +
    '<line x1="100" y1="210" x2="100" y2="100" class="ar"/><line x1="180" y1="210" x2="180" y2="100" class="ar"/>' +
    '<line x1="140" y1="110" x2="140" y2="215" class="ar"/>' +
    '<text x="240" y="76" class="bl">블리딩수 (물 상승)</text>' +
    '<text x="240" y="125" class="r">피해: 레이턴스·침하균열</text>' +
    '<text x="240" y="170">시멘트·골재 침강</text>' +
    '<text x="240" y="220" class="t">비중차 → 재료분리</text>' +
    '<text x="40" y="268" class="g">단위수량 185kg/m³ ↓</text>' +
    '<text x="155" y="230" text-anchor="middle" class="n">①</text>' +
    '<text x="115" y="95" text-anchor="middle" class="n">②</text>' +
    '<text x="40" y="75" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['W/B·단위수량 大', '분말도 小·조립 모래', '타설높이·속도 과다'] },
    { h: '시공 시 유의사항', k: ['블리딩수 제거 후 마감', '침하 후 [[Tamping]]', '[[레이턴스]] 제거'] },
    { h: '방지대책', k: ['단위수량 {{185kg/m³↓}}', 'AE감수제·FA', '분할 타설·재진동'] }
  ],
  code: 'Bleeding 피해 “레·침·부·수”',
  read: '①무거운 시멘트·골재는 침강 → ②가벼운 물은 상승 → ③표면 블리딩수 → 레이턴스·침하균열'
},
79: {
  one: '[[블리딩]]으로 표면에 떠올라 쌓인 [[미립분]] 얇은 층, 강도·부착력이 없어 [[이어치기]] 전 반드시 제거',
  flow: ['블리딩 억제', '고압수·Chipping', '습윤', '모르타르 깔기', '이어치기'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="56" width="260" height="72" class="bx dash"/>' +
    '<rect x="40" y="128" width="260" height="12" class="bx3"/>' +
    '<rect x="40" y="140" width="260" height="100" class="conc"/>' +
    '<text x="40" y="34" class="bl">고압수 세정 / Chipping</text>' +
    '<text x="170" y="98" text-anchor="middle" class="s2">이어치기 콘크리트</text>' +
    '<line x1="300" y1="134" x2="312" y2="134" class="ld"/><text x="315" y="139" class="r">Laitance 층</text>' +
    '<text x="315" y="162" class="s2">강도·부착력 ≈ 0</text>' +
    '<text x="170" y="198" text-anchor="middle" class="t">기존 콘크리트</text>' +
    '<text x="40" y="268" class="g">제거 → 습윤 → 모르타르</text>' +
    '<text x="20" y="138" text-anchor="middle" class="n">①</text>' +
    '<text x="225" y="34" text-anchor="middle" class="n">②</text>' +
    '<text x="60" y="80" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[미립분]] 침적층', '강도·부착력 없음', '[[블리딩]] 클수록 ↑'] },
    { h: '시공 시 유의사항', k: ['[[이어치기]] 전 제거', '제거 후 습윤', '들뜸·분진 주의'] },
    { h: '개선방안', k: ['블리딩 적은 배합', '표면지연제·고압수', '분할·재진동'] }
  ],
  code: 'Laitance “전 고압수 / 후 Chipping → 습윤”',
  read: '①블리딩 미립분이 Laitance 층 형성 → ②고압수·Chipping 으로 제거 → ③습윤 후 이어치기'
},
80: {
  one: '경화 전({{2.5~9시간}}) 표면 [[수분증발속도]]가 [[블리딩속도]]보다 커서 생기는 미세 표면균열',
  flow: ['기상 확인', '노반 습윤', '방풍·차양', '증발억제·Fog', '조기 습윤양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="130" width="290" height="100" class="conc"/>' +
    '<line x1="100" y1="126" x2="100" y2="80" class="ar"/><line x1="180" y1="126" x2="180" y2="80" class="ar"/><line x1="260" y1="126" x2="260" y2="80" class="ar"/>' +
    '<line x1="140" y1="200" x2="140" y2="160" class="ar"/><line x1="220" y1="200" x2="220" y2="160" class="ar"/>' +
    '<path d="M120,130 l6,10 l-4,8 M200,130 l6,10 l-4,8 M300,130 l-6,10 l4,8" class="rd"/>' +
    '<text x="240" y="40" text-anchor="middle" class="r">증발속도 &gt; 블리딩속도</text>' +
    '<text x="345" y="95">고온·저습·강풍</text>' +
    '<text x="345" y="145" class="r">미세균열</text>' +
    '<text x="345" y="170" class="s2">경화 전 2.5~9h</text>' +
    '<text x="180" y="222" text-anchor="middle" class="s2">블리딩</text>' +
    '<text x="40" y="262" class="g">방풍·Fog·증발억제제</text>' +
    '<text x="115" y="100" text-anchor="middle" class="n">①</text>' +
    '<text x="155" y="190" text-anchor="middle" class="n">②</text>' +
    '<text x="318" y="125" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['고온·저습·강풍', '블리딩 적은 배합', '고강도·고유동'] },
    { h: '시공 시 유의사항', k: ['직후 증발 억제', '노반 사전 습윤', '초기 [[Tamping]]'] },
    { h: '방지대책', k: ['방풍·차양막', '증발억제제·Fog', '조기 습윤양생'] }
  ],
  code: '소성수축 “증발 > 블리딩” / “고·저·강” → “방·증·양”',
  read: '①표면 증발속도가 → ②블리딩 공급속도보다 크면 → ③표면이 말라 미세균열'
},
81: {
  one: '블리딩으로 고형분이 가라앉다 [[철근]]·[[단면 변화부]]에 구속되어 타설 {{1~3시간}} 후 상부에 생기는 균열',
  flow: ['단위수량↓', '보·기둥 선타설', '침하 대기', '슬래브 타설', '재진동·Tamping'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="290" height="170" class="conc"/>' +
    '<circle cx="110" cy="100" r="10" class="rf"/><circle cx="185" cy="100" r="10" class="rf"/><circle cx="260" cy="100" r="10" class="rf"/>' +
    '<path d="M110,60 l-3,10 l4,8 M185,60 l-3,10 l4,8 M260,60 l-3,10 l4,8" class="rd"/>' +
    '<line x1="148" y1="120" x2="148" y2="160" class="ar"/><line x1="222" y1="120" x2="222" y2="160" class="ar"/>' +
    '<line x1="263" y1="66" x2="340" y2="66" class="ld"/><text x="345" y="71" class="r">철근 상부 균열</text>' +
    '<text x="345" y="105">철근이 구속</text>' +
    '<text x="345" y="150" class="bl">고형분 침하 ↓</text>' +
    '<text x="345" y="195" class="s2">타설 후 1~3시간</text>' +
    '<text x="185" y="205" text-anchor="middle" class="t">콘크리트</text>' +
    '<text x="40" y="262" class="g">재진동·Tamping</text>' +
    '<text x="165" y="150" text-anchor="middle" class="n">①</text>' +
    '<text x="90" y="108" text-anchor="middle" class="n">②</text>' +
    '<text x="85" y="75" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['블리딩·침하량 大', '피복 얇고 철근 굵음', '[[동시타설]] 단면변화'] },
    { h: '시공 시 유의사항', k: ['보·기둥 선타설', '진동기 {{500mm}} 이내', '하층 {{100mm}} 삽입'] },
    { h: '방지대책', k: ['응결 전 [[Tamping]]', '단위수량·슬럼프↓', '피복두께 확보'] }
  ],
  code: '침하균열 “철·단·블” / 1~3h / Tamping',
  read: '①고형분이 가라앉음 → ②철근이 침하를 구속 → ③철근 위 표면에 균열'
},
82: {
  one: '[[지속하중]] 아래 응력 증가 없이 [[시간 경과]]에 따라 변형이 계속 커지는 현상 ([[크리프 계수]])',
  flow: ['저W/B 배합', '습윤양생', '조기재하 금지', '압축철근', '축소량 보정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="40" class="ln"/>' +
    '<line x1="60" y1="170" x2="440" y2="170" class="ln2 dash"/>' +
    '<path d="M60,230 L60,170 C150,110 280,85 440,75" class="rd"/>' +
    '<text x="66" y="44" class="s2">변형 ε</text>' +
    '<text x="180" y="40">지속하중 (응력 일정)</text>' +
    '<text x="300" y="122" class="r">크리프 변형</text>' +
    '<text x="180" y="192" class="bl">탄성변형</text>' +
    '<text x="440" y="256" text-anchor="end" class="s2">시간 t →</text>' +
    '<text x="60" y="275" class="s2">크리프 계수 = 크리프/탄성</text>' +
    '<text x="165" y="40" text-anchor="middle" class="n">①</text>' +
    '<text x="45" y="200" text-anchor="middle" class="n">②</text>' +
    '<text x="280" y="108" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '증가 요인', k: ['W/C·시멘트량 大', '조기 재하', '고온·저습·부재 小'] },
    { h: '시공 시 유의사항', k: ['조기 탈형 금지', '장기처짐·PS 손실', '[[기둥 축소량]] 보정'] },
    { h: '저감대책', k: ['습윤양생 철저', '저W/B 밀실 배합', '압축철근 배근'] }
  ],
  code: 'Creep↑ “물·젊·응·온·건·작”',
  read: '①하중이 일정하게 계속 작용 → ②재하 즉시 탄성변형 → ③시간이 지나며 크리프 변형 증가'
},
83: {
  one: '[[초결 이후]] 수화로 내부 수분이 소비되어([[자기건조]]) 외부 수분 이동 없이 체적이 주는 현상, [[고강도]]에서 大',
  flow: ['수화 진행', '자기건조', '모세관 장력', '체적 수축'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="60" x2="450" y2="60" class="ln"/><line x1="60" y1="60" x2="60" y2="240" class="ln"/>' +
    '<path d="M60,60 C120,200 250,215 440,225" class="rd"/>' +
    '<path d="M60,60 C150,100 300,110 440,115" class="ln dash"/>' +
    '<text x="255" y="30" text-anchor="middle" class="t">수화 → 자기건조 → 수축</text>' +
    '<text x="95" y="48" class="s2">초결 이후</text>' +
    '<text x="450" y="48" text-anchor="end" class="s2">시간 →</text>' +
    '<text x="14" y="150" class="s2">수축 ↓</text>' +
    '<text x="300" y="140" class="s2">보통 콘크리트</text>' +
    '<text x="280" y="252" class="r">고강도 (저W/B)</text>' +
    '<text x="60" y="276" class="g">팽창재·수축저감제·내부양생</text>' +
    '<text x="45" y="75" text-anchor="middle" class="n">①</text>' +
    '<text x="150" y="215" text-anchor="middle" class="n">②</text>' +
    '<text x="250" y="85" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[초결 이후]] 발생', '저W/B·고강도 大', '결합재·분말도 大'] },
    { h: '시공 시 유의사항', k: ['초기 구속균열', '슬래그 고치환 주의', '표면 습윤만 한계'] },
    { h: '저감대책', k: ['팽창재·수축저감제', '[[내부양생]] SAP', '플라이애시 치환'] }
  ],
  code: '자기수축 “수화 → 자기건조 → 수축” / “팽·저·내·플”',
  read: '①초결 이후 수화가 내부 물 소비(자기건조) → ②고강도(저W/B)는 수축 큼 → ③보통 콘크리트는 작음'
},
84: {
  one: '[[CO₂]]가 침투해 [[Ca(OH)₂]]와 반응, pH {{12~13}} → {{8.5~10}}으로 떨어져 철근 [[부동태 피막]]이 파괴',
  flow: ['저W/B 배합', '피복 확보', '충분한 양생', '표면 마감', '페놀 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="100" y1="30" x2="100" y2="64" class="ar"/><line x1="170" y1="30" x2="170" y2="64" class="ar"/><line x1="240" y1="30" x2="240" y2="64" class="ar"/>' +
    '<rect x="40" y="70" width="260" height="180" class="conc"/>' +
    '<rect x="40" y="70" width="260" height="60" class="bx2"/>' +
    '<circle cx="100" cy="170" r="9" class="rf"/><circle cx="170" cy="170" r="9" class="rf"/><circle cx="240" cy="170" r="9" class="rf"/>' +
    '<text x="320" y="50" class="r">CO₂ 침투</text>' +
    '<text x="320" y="105">pH 12~13 → 8.5~10</text>' +
    '<text x="320" y="135" class="bl">깊이 x = A√t</text>' +
    '<line x1="249" y1="170" x2="315" y2="175" class="ld"/><text x="320" y="180" class="r">부동태 피막 파괴</text>' +
    '<text x="170" y="205" text-anchor="middle" class="s2">철근</text>' +
    '<text x="40" y="272" class="s2">페놀프탈레인: 무색 = 탄산화</text>' +
    '<text x="85" y="50" text-anchor="middle" class="n">①</text>' +
    '<text x="60" y="110" text-anchor="middle" class="n">②</text>' +
    '<text x="210" y="165" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '영향인자', k: ['W/C 大·[[피복두께]]↓', 'CO₂ 농도·온도 高', '습도 {{50~70%}} 최대'] },
    { h: '시공 시 유의사항', k: ['스페이서 피복 확보', '균열부 보수', '양생·다짐 철저'] },
    { h: '방지대책', k: ['저W/B 밀실', '표면 마감·도장', '[[재알칼리화]]'] }
  ],
  code: '탄산화 “CO₂ + Ca(OH)₂ → CaCO₃” / x = A√t',
  read: '①CO₂ 침투 → ②표층 pH 12~13 → 8.5~10 저하 → ③철근까지 오면 부동태 피막 파괴'
},
85: {
  one: '[[반응성 실리카]]가 시멘트 [[알칼리]]와 반응해 생긴 [[알칼리실리카겔]]이 흡수·팽창, [[거북등 균열]] 발생',
  flow: ['반응성 시험', '무해 골재', '저알칼리·혼화재', '총알칼리 관리', '수분 차단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="130" cy="110" r="60" fill="none" class="ln"/><circle cx="210" cy="110" r="60" fill="none" class="ln"/><circle cx="170" cy="175" r="60" fill="none" class="ln"/>' +
    '<line x1="285" y1="135" x2="330" y2="135" class="ar"/>' +
    '<text x="105" y="95" text-anchor="middle">골재</text>' +
    '<text x="235" y="95" text-anchor="middle">알칼리</text>' +
    '<text x="170" y="210" text-anchor="middle" class="bl">수분</text>' +
    '<text x="170" y="140" text-anchor="middle" class="r">겔</text>' +
    '<text x="340" y="115">흡수·팽창</text>' +
    '<text x="340" y="155" class="t">거북등 균열</text>' +
    '<text x="20" y="272" class="g">저알칼리 0.6%↓·총량 3.0kg</text>' +
    '<text x="80" y="70" text-anchor="middle" class="n">①</text>' +
    '<text x="194" y="145" text-anchor="middle" class="n">②</text>' +
    '<text x="307" y="128" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생조건 3요소', k: ['[[반응성 골재]]', '[[알칼리]] Na₂O·K₂O', '수분(습윤)'] },
    { h: '시공 시 유의사항', k: ['골재 반응성 시험', '화학법·모르타르봉', '총알칼리 {{3.0kg/m³↓}}'] },
    { h: '방지대책', k: ['저알칼리 {{0.6%↓}}', 'FA·고로슬래그', '방수·발수'] }
  ],
  code: 'ASR “골·알·물” → 겔 → 팽창 → 거북등',
  read: '①반응성 골재·알칼리·수분 3요소 → ②알칼리실리카겔 생성 → ③흡수·팽창해 거북등 균열'
},
88: {
  one: '[[초기동해]] 방지를 위해 {{5MPa}}까지 {{5℃ 이상}} 유지하는 [[초기양생]]과 [[단열·가열·피복]] 보온양생',
  flow: ['보온계획', '천막·매트', '열풍기 가열', '5℃ 유지', '서서히 해제'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M60,230 L60,90 L190,40 L320,90 L320,230" class="ln"/>' +
    '<path d="M72,230 L72,98 L190,52 L308,98 L308,230" class="ln2 dash"/>' +
    '<rect x="90" y="170" width="200" height="30" class="conc"/>' +
    '<line x1="90" y1="166" x2="290" y2="166" class="bl"/>' +
    '<rect x="110" y="205" width="40" height="25" class="bx3"/>' +
    '<line x1="40" y1="230" x2="340" y2="230" class="ln"/>' +
    '<line x1="306" y1="80" x2="330" y2="80" class="ld"/><text x="334" y="85">이중 천막 (피복)</text>' +
    '<line x1="290" y1="166" x2="330" y2="150" class="ld"/><text x="334" y="155" class="bl">보온매트 (단열)</text>' +
    '<line x1="150" y1="217" x2="330" y2="217" class="ld"/><text x="334" y="222" class="r">열풍기 (가열)</text>' +
    '<text x="190" y="130" text-anchor="middle" class="r">5MPa까지 5℃ 이상</text>' +
    '<text x="190" y="155" text-anchor="middle" class="s2">이후 2일 0℃↑</text>' +
    '<text x="40" y="266" class="g">초기동해 방지</text>' +
    '<text x="190" y="72" text-anchor="middle" class="n">①</text>' +
    '<text x="100" y="160" text-anchor="middle" class="n">②</text>' +
    '<text x="95" y="222" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '양생방법', k: ['[[단열양생]] 매트', '[[가열양생]] 열풍기', '[[피복양생]] 천막'] },
    { h: '시공 시 유의사항', k: ['{{5MPa}}까지 {{5℃↑}}', '국부가열·건조 방지', 'CO 중독·화재 주의'] },
    { h: '개선방안', k: ['무선 온도 계측', '[[적산온도]] 관리', '전기열선·온수'] }
  ],
  code: '한중양생 “단·가·피” / “5MPa까지 5℃, 이후 2일 0℃”',
  read: '①천막으로 덮고(피복) → ②매트로 단열 → ③열풍기로 가열 → 5MPa 까지 5℃ 이상 유지'
}
});
