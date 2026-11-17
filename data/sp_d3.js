// 간단 요약(SP) — 디테일원 용어250 group e (92~103, 106~113). 형식: data/SCHEMA_SP.md / 근거: data/dw_e.js
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
92: {
  one: '[[고강도]]·[[고유동]]·[[고내구성]]을 동시에 갖도록 [[실리카퓸]]·감수제로 저W/B화한 콘크리트 ({{40MPa↑}})',
  flow: ['결합재 선정', '저W/B 배합', '시험비빔', '타설·다짐', '습윤양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="110" cy="95" r="52" class="bx"/><circle cx="230" cy="95" r="52" class="bx"/><circle cx="170" cy="185" r="52" class="bx2"/>' +
    '<text x="110" y="100" text-anchor="middle" class="t">고강도</text><text x="230" y="100" text-anchor="middle" class="t">고유동</text><text x="170" y="190" text-anchor="middle" class="t">고내구성</text>' +
    '<text x="110" y="30" text-anchor="middle" class="r">40MPa↑</text><text x="240" y="30" text-anchor="middle" class="r">플로 600mm↑</text>' +
    '<line x1="222" y1="190" x2="300" y2="190" class="ld"/><text x="306" y="195" class="b">저W/B·밀실</text>' +
    '<text x="306" y="250" class="s2">실리카퓸 + 감수제</text>' +
    '<text x="60" y="60" text-anchor="middle" class="n">①</text>' +
    '<text x="285" y="60" text-anchor="middle" class="n">②</text>' +
    '<text x="110" y="205" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징(요구성능)', k: ['고강도 {{40MPa↑}}', '슬럼프플로 {{600mm↑}}', '저W/B → 고내구성'] },
    { h: '시공 시 유의사항', k: ['[[폭렬]] 위험', '[[자기수축]]·수화열', '고점성 압송 관리'] },
    { h: '개선방안', k: ['[[PP섬유]] 혼입', '온도계측·습윤양생'] }
  ],
  code: '강·유·내 3성능 + 실·감 배합 → 폭렬 주의(PP섬유)',
  read: '①고강도 40MPa↑ + ②고유동 플로 600mm↑ + ③고내구성 → 실리카퓸·감수제로 저W/B'
},
93: {
  one: '[[강섬유]]·[[합성섬유]]를 {{0.5~2.0%}} 분산시켜 [[균열 가교]]로 인장강도·[[인성]]을 높인 콘크리트',
  flow: ['섬유·혼입률 결정', '분산 투입', '충분한 비빔', '타설·양생', '휨인성 시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="60" width="200" height="100" class="conc"/>' +
    '<path d="M130,160 L136,138 L127,115 L135,90 L130,60" class="rd" fill="none"/>' +
    '<line x1="115" y1="145" x2="150" y2="138" class="ln"/><line x1="112" y1="118" x2="148" y2="124" class="ln"/><line x1="116" y1="92" x2="150" y2="86" class="ln"/>' +
    '<line x1="28" y1="110" x2="6" y2="110" class="ar"/><line x1="232" y1="110" x2="254" y2="110" class="ar"/>' +
    '<text x="30" y="40" class="r">섬유 0.5~2.0%</text><text x="130" y="190" text-anchor="middle" class="b">균열 가교</text>' +
    '<line x1="280" y1="230" x2="460" y2="230" class="ar"/><line x1="280" y1="230" x2="280" y2="50" class="ar"/>' +
    '<path d="M280,230 L320,130 L330,225" class="rd dash" fill="none"/><path d="M280,230 L320,128 Q370,105 455,150" class="bl" fill="none"/>' +
    '<text x="290" y="56" class="s2">하중 P</text><text x="460" y="252" text-anchor="end" class="s2">처짐 δ</text>' +
    '<text x="350" y="96" class="bl">FRC 인성↑</text><text x="340" y="214" class="s2">무근 취성</text>' +
    '<text x="100" y="130" text-anchor="middle" class="n">①</text>' +
    '<text x="15" y="100" text-anchor="middle" class="n">②</text>' +
    '<text x="440" y="130" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징(효과)', k: ['[[균열 가교]]', '인성·내충격↑', '혼입 {{0.5~2.0%}}'] },
    { h: '시공 시 유의사항', k: ['[[Fiber Ball]] 방지', '슬럼프 저하 조정', '표면 섬유 돌출'] },
    { h: '개선방안', k: ['하이브리드 섬유', '[[휨인성]] 시험'] }
  ],
  code: '강·합·유 섬유 / 가교·인성 / 볼(Fiber Ball) 금지',
  read: '①섬유가 균열을 가로질러 연결(가교) → ②잡아당겨도 바로 끊어지지 않음 → ③무근보다 인성↑'
},
94: {
  one: '화재 시 [[치밀 조직]] 내부 [[수증기압]]이 인장강도를 넘어 표면이 박리·비산하는 현상 (함수율 {{3.5%↑}})',
  flow: ['화재 가열', '수분 증발', '수증기압 축적', '박리·비산', '내력 저하'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M50,240 Q40,200 60,170 Q55,140 80,110 Q72,80 95,60 Q105,100 100,140 Q120,170 105,210 Q110,230 100,240" class="rd" fill="none"/>' +
    '<line x1="105" y1="100" x2="145" y2="100" class="ar"/><line x1="110" y1="160" x2="145" y2="160" class="ar"/>' +
    '<rect x="150" y="40" width="120" height="200" class="conc"/>' +
    '<path d="M150,110 L162,122 L154,138 L150,146" class="rd" fill="none"/>' +
    '<circle cx="190" cy="160" r="5" class="ln2"/><circle cx="215" cy="180" r="5" class="ln2"/><circle cx="235" cy="155" r="5" class="ln2"/>' +
    '<text x="80" y="266" text-anchor="middle" class="r">화재</text>' +
    '<text x="210" y="28" text-anchor="middle" class="b">고강도·치밀 조직</text>' +
    '<text x="210" y="100" text-anchor="middle">수증기압↑</text>' +
    '<text x="290" y="90">수증기압 > 인장</text><text x="290" y="130" class="r">→ 표면 박리·비산</text>' +
    '<text x="290" y="190" class="g">PP섬유 → 증기통로</text><text x="290" y="225" class="s2">함수율 3.5%↑ 위험</text>' +
    '<text x="115" y="60" text-anchor="middle" class="n">①</text>' +
    '<text x="185" y="130" text-anchor="middle" class="n">②</text>' +
    '<text x="135" y="135" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['[[치밀 조직]](저W/B)', '수증기압 > 인장강도', '급가열 열응력'] },
    { h: '문제점', k: ['피복 탈락·철근 노출', '단면결손·[[내력 저하]]'] },
    { h: '방지대책', k: ['[[PP섬유]] 혼입', '[[내화피복]]·CFT 구속', '함수율·메탈라스'] }
  ],
  code: '치·수·열 → 폭렬 / PP·피복·구속으로 방지',
  read: '①화재로 급가열 → ②치밀 조직 속 수증기압↑ → ③인장강도를 넘으면 표면 박리·비산'
},
95: {
  one: '[[팽창재]](CSA·석회계)로 초기 체적을 팽창시켜 [[건조수축]]을 보상하는 콘크리트 ({{150~250×10⁻⁶}})',
  flow: ['팽창재 계량', '비빔·타설', '초기 습윤양생', '팽창 ⇄ 철근구속', '수축 상쇄'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="140" x2="460" y2="140" class="ar"/><line x1="50" y1="250" x2="50" y2="20" class="ar"/>' +
    '<path d="M50,140 Q90,60 150,65 Q300,80 450,110" class="bl" fill="none"/>' +
    '<path d="M50,140 Q200,200 450,230" class="rd dash" fill="none"/>' +
    '<text x="60" y="24" class="r">수축보상 150~250×10⁻⁶</text><text x="60" y="44" class="s2">화학적PS 200~700×10⁻⁶</text>' +
    '<text x="300" y="62" class="bl">팽창 콘크리트</text><text x="250" y="250" class="r">보통 콘크리트 수축</text>' +
    '<text x="460" y="132" text-anchor="end" class="s2">재령 →</text>' +
    '<text x="40" y="274" class="s2">팽창재 + 철근구속 → 균열 억제</text>' +
    '<text x="110" y="90" text-anchor="middle" class="n">①</text>' +
    '<text x="150" y="190" text-anchor="middle" class="n">②</text>' +
    '<text x="30" y="274" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류(팽창률)', k: ['수축보상 {{150~250}}', '화학PS {{200~700}}', '[[CSA계]]·석회계'] },
    { h: '시공 시 유의사항', k: ['계량·흡습 방지', '초기 [[습윤양생]]', '과다혼입 팽창균열'] },
    { h: '개선방안', k: ['[[철근 구속]] 확보', '수축저감제 병용'] }
  ],
  code: '수축보상 150~250 / 화학PS 200~700 / 습윤·구속',
  read: '①팽창재로 초기에 팽창 → ②보통 콘크리트는 건조수축 → ③팽창이 수축을 상쇄해 균열 억제'
},
96: {
  one: '균열 시 [[박테리아]]·[[캡슐]]·미수화 시멘트가 반응해 [[CaCO₃]]로 {{0.3mm↓}} 균열을 스스로 메움',
  flow: ['균열 발생', '물·CO₂ 유입', '치유제 활성', 'CaCO₃ 침전', '균열 폐색'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="240" height="190" class="conc"/>' +
    '<path d="M165,50 L158,100 L168,150 L160,200" class="rd" fill="none"/><path d="M158,50 L172,50 L166,95 L162,95 Z" class="bx3"/>' +
    '<line x1="165" y1="14" x2="165" y2="46" class="ar"/>' +
    '<circle cx="90" cy="100" r="7" class="bx2"/><circle cx="110" cy="190" r="7" class="bx2"/><circle cx="235" cy="95" r="7" class="bx2"/><circle cx="230" cy="195" r="7" class="bx2"/>' +
    '<text x="178" y="30" class="bl">물·CO₂ 유입</text>' +
    '<line x1="242" y1="95" x2="296" y2="85" class="ld"/><text x="300" y="90">박테리아·캡슐</text>' +
    '<line x1="166" y1="80" x2="296" y2="125" class="ld"/><text x="300" y="130">CaCO₃ 침전</text>' +
    '<text x="300" y="170" class="r">→ 균열 폐색</text><text x="300" y="210" class="r">균열폭 0.3mm↓</text>' +
    '<text x="300" y="250" class="g">LCC 절감</text>' +
    '<text x="145" y="140" text-anchor="middle" class="n">①</text>' +
    '<text x="150" y="30" text-anchor="middle" class="n">②</text>' +
    '<text x="70" y="130" text-anchor="middle" class="n">③</text>' +
    '<text x="185" y="75" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '종류(치유방식)', k: ['자생치유(재수화)', '[[박테리아]] MICP', '캡슐·혈관형'] },
    { h: '시공 시 유의사항', k: ['균열폭 {{0.3mm}} 한계', '고알칼리 생존성', '캡슐 파손·강도↓'] },
    { h: '개선방안', k: ['치유제 표준화', '[[LCC]] 절감·지하구조'] }
  ],
  code: '자·박·캡 3방식 → CaCO₃로 메운다',
  read: '①균열 발생 → ②물·CO₂ 유입 → ③박테리아·캡슐 활성 → ④CaCO₃ 침전으로 균열 폐색'
},
97: {
  one: '[[팽창 시멘트]]의 팽창을 [[철근 구속]]으로 막아 [[압축응력]](화학적 PS)을 도입한 콘크리트 ({{200~700×10⁻⁶}})',
  flow: ['팽창재 배합', '구속철근 배근', '타설', '습윤양생', '압축응력 도입'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="340" height="80" class="conc"/>' +
    '<line x1="50" y1="65" x2="370" y2="65" class="bl"/><line x1="50" y1="115" x2="370" y2="115" class="bl"/>' +
    '<text x="210" y="96" text-anchor="middle" class="t">팽창 시멘트 콘크리트</text>' +
    '<line x1="38" y1="90" x2="12" y2="90" class="ar"/><line x1="382" y1="90" x2="410" y2="90" class="ar"/><text x="416" y="95">팽창력</text>' +
    '<text x="40" y="152" class="bl">철근 구속</text>' +
    '<rect x="40" y="170" width="160" height="40" class="bx2"/><text x="120" y="195" text-anchor="middle">콘크리트 압축</text>' +
    '<text x="220" y="195" text-anchor="middle" class="b">⇄</text>' +
    '<rect x="240" y="170" width="160" height="40" class="bx3"/><text x="320" y="195" text-anchor="middle">철근 인장</text>' +
    '<text x="40" y="250" class="r">200~700×10⁻⁶</text><text x="260" y="250" class="g">균열·누수 억제</text>' +
    '<text x="24" y="75" text-anchor="middle" class="n">①</text>' +
    '<text x="390" y="120" text-anchor="middle" class="n">②</text>' +
    '<text x="220" y="165" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['팽창 ⇄ [[철근 구속]]', '[[압축응력]] 도입', '균열저항·수밀성'] },
    { h: '시공 시 유의사항', k: ['구속 철근비 확보', '습윤양생 {{5일↑}}', '과팽창 균열'] },
    { h: '개선방안', k: ['PC관·수조 적용', '팽창률 계측'] }
  ],
  code: '팽창 + 구속 = 화학적 PS (200~700)',
  read: '①팽창 시멘트가 늘어나려 함 → ②철근이 막아 구속 → ③콘크리트 압축 ⇄ 철근 인장 = 화학적 PS'
},
98: {
  one: '타설 직후 [[진공매트]]와 [[진공펌프]]로 잉여수·기포를 빼내 W/C를 낮춰 [[초기강도]]를 높이는 공법',
  flow: ['타설·다짐', '진공매트 설치', '잉여수 흡입', '매트 철거', 'Trowel 마감'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="120" width="300" height="90" class="conc"/><rect x="40" y="104" width="300" height="16" class="bx2"/>' +
    '<line x1="340" y1="112" x2="390" y2="112" class="ln"/><rect x="390" y="90" width="70" height="44" class="bx"/>' +
    '<line x1="80" y1="200" x2="80" y2="126" class="ar"/><line x1="300" y1="200" x2="300" y2="126" class="ar"/>' +
    '<text x="40" y="92" class="b">진공매트</text><text x="425" y="80" text-anchor="middle" class="b">진공펌프</text>' +
    '<text x="460" y="160" text-anchor="end" class="r">80~100kN/㎡</text>' +
    '<text x="190" y="170" text-anchor="middle" class="bl">잉여수·기포 흡입</text>' +
    '<text x="40" y="240" class="r">W/C↓ → 초기강도·내마모↑</text>' +
    '<text x="40" y="268" class="s2">Power Trowel 즉시 마감</text>' +
    '<text x="25" y="112" text-anchor="middle" class="n">①</text>' +
    '<text x="425" y="118" text-anchor="middle" class="n">②</text>' +
    '<text x="100" y="160" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징(효과)', k: ['잉여수 제거·W/C↓', '[[초기강도]]·내마모↑', '조기 마감·공기단축'] },
    { h: '시공 시 유의사항', k: ['진공도 {{80~100kN/㎡}}', '매트 밀착·누기', '단부·모서리 처리'] },
    { h: '개선방안', k: ['[[Power Trowel]] 즉시', '대형 바닥 적용'] }
  ],
  code: '매트·펌프·흡입 → 트로웰',
  read: '①진공매트 덮음 → ②진공펌프로 흡입 → ③잉여수·기포 빠져 W/C↓·초기강도↑'
},
99: {
  one: '시멘트 저감·[[순환골재]]로 [[환경부하]]를 줄이거나, 연속공극({{15~30%}})으로 식생·투수 기능을 준 콘크리트',
  flow: ['목적 선정', '결합재·골재 선정', '시험비빔', '시공', 'LCA 평가'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="150" y="20" width="180" height="36" class="bx"/><text x="240" y="44" text-anchor="middle" class="t">친환경 콘크리트</text>' +
    '<line x1="200" y1="56" x2="120" y2="90" class="ln"/><line x1="280" y1="56" x2="360" y2="90" class="ln"/>' +
    '<rect x="30" y="90" width="180" height="36" class="bx2"/><text x="120" y="114" text-anchor="middle" class="b">환경부하 저감형</text>' +
    '<rect x="270" y="90" width="180" height="36" class="bx3"/><text x="360" y="114" text-anchor="middle" class="b">생물 대응형</text>' +
    '<text x="120" y="160" text-anchor="middle">혼합시멘트·순환골재</text><text x="120" y="190" text-anchor="middle">투수포장·지오폴리머</text>' +
    '<text x="360" y="160" text-anchor="middle">식생·인공어초</text><text x="360" y="190" text-anchor="middle">수질정화</text>' +
    '<text x="240" y="250" text-anchor="middle" class="r">연속공극 15~30%</text>' +
    '<text x="42" y="113" text-anchor="middle" class="n">①</text>' +
    '<text x="285" y="113" text-anchor="middle" class="n">②</text>' +
    '</svg>',
  heads: [
    { h: '종류', k: ['[[환경부하 저감형]]', '[[생물 대응형]]', 'Geopolymer'] },
    { h: '시공 시 유의사항', k: ['순환골재 흡수율', '공극 多 → 강도↓', '고알칼리 식생저해'] },
    { h: '개선방안', k: ['[[LCA]] 탄소 평가', '부산물 표준화'] }
  ],
  code: '저감형(혼·순·지·투) / 대응형(식·어·수)',
  read: '①환경부하 저감형: 혼합시멘트·순환골재 ↔ ②생물 대응형: 식생·수질정화(연속공극)'
},
100: {
  one: '시멘트 CO₂(1t당 {{약 0.8t}})를 줄이려 [[혼화재 대량치환]]·[[CO₂ 주입]]·[[지오폴리머]]를 적용한 콘크리트',
  flow: ['결합재 선정', '치환율 배합', '시험비빔', '양생 연장', 'LCA 평가'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="30" width="130" height="40" class="bx"/><text x="105" y="56" text-anchor="middle" class="b">시멘트 1t</text>' +
    '<line x1="175" y1="50" x2="245" y2="50" class="ar"/><text x="252" y="56" class="r">CO₂ 0.8t 배출</text>' +
    '<line x1="240" y1="80" x2="240" y2="112" class="ar"/>' +
    '<rect x="20" y="120" width="140" height="50" class="bx2"/><text x="90" y="150" text-anchor="middle">혼화재 치환</text>' +
    '<rect x="170" y="120" width="140" height="50" class="bx2"/><text x="240" y="150" text-anchor="middle">CO₂ 주입(CCU)</text>' +
    '<rect x="320" y="120" width="140" height="50" class="bx2"/><text x="390" y="150" text-anchor="middle">지오폴리머</text>' +
    '<text x="90" y="192" text-anchor="middle" class="s2">BFS·FA 대량</text>' +
    '<text x="240" y="250" text-anchor="middle" class="r">초기강도↓ · 중성화↑ 주의</text>' +
    '<text x="30" y="56" text-anchor="middle" class="n">①</text>' +
    '<text x="258" y="100" text-anchor="middle" class="n">②</text>' +
    '<text x="100" y="250" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '저감 방법', k: ['BFS·FA [[대량치환]]', '[[CO₂ 주입]](CCU)', '[[지오폴리머]]'] },
    { h: '시공 시 유의사항', k: ['초기강도↓ 양생연장', '[[중성화]] 피복 확보', '한중 응결지연'] },
    { h: '개선방안', k: ['LCA·EPD 인증', '저탄소 결합재 KS'] }
  ],
  code: '치환(BFS·FA)·주입(CCU)·무시멘트(지오) → 강도·중성화 주의',
  read: '①시멘트 1t 당 CO₂ 약 0.8t → ②치환·CO₂ 주입·지오폴리머로 저감 → ③초기강도·중성화 주의'
},
101: {
  one: '[[응력]] σ=P/A, [[변형률]] ε=ΔL/L 이며 탄성범위에서 [[훅의 법칙]] σ=E·ε (Es={{200,000MPa}})',
  flow: ['탄성', '항복(Fy)', '소성', '변형률경화', '파단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="240" x2="460" y2="240" class="ar"/><line x1="50" y1="240" x2="50" y2="25" class="ar"/>' +
    '<path d="M50,240 L110,110 L170,112 Q230,40 300,60 Q370,75 420,105" class="bl" fill="none"/>' +
    '<circle cx="420" cy="105" r="4" class="rf"/>' +
    '<text x="58" y="34">응력 σ</text><text x="460" y="262" text-anchor="end">변형률 ε</text>' +
    '<text x="90" y="190" class="r">σ=E·ε</text><text x="114" y="100" class="b">항복 Fy</text>' +
    '<text x="190" y="140" class="s2">변형률경화</text><text x="300" y="44" text-anchor="middle" class="r">인장강도 Fu</text>' +
    '<text x="430" y="130" class="s2">파단</text>' +
    '<text x="70" y="150" text-anchor="middle" class="n">①</text>' +
    '<text x="140" y="128" text-anchor="middle" class="n">②</text>' +
    '<text x="300" y="80" text-anchor="middle" class="n">③</text>' +
    '<text x="420" y="90" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '구간별 특징', k: ['[[탄성]]: σ=E·ε', '[[항복]] → 소성', '경화 → Fu → 파단'] },
    { h: '유의사항', k: ['항복비 {{0.80↓}}(SN)', '노치 [[응력집중]]', '저온 취성'] },
    { h: '개선방안', k: ['SN강·TMC강', 'Strain Gauge 계측'] }
  ],
  code: '비·탄·항·소·경·파 (σ=Eε, Es 200,000)',
  read: '①탄성 σ=E·ε → ②항복 Fy 후 소성 → ③변형률경화로 인장강도 Fu → ④파단'
},
102: {
  one: '[[고정하중]]은 변하지 않는 자중, [[활하중]]은 사용에 따라 변하는 하중 — 조합 {{1.2D+1.6L}}',
  flow: ['용도 확인', '고정하중 산정', '활하중 산정', '하중조합', '부재 설계'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="138" width="320" height="12" class="bx3"/><rect x="40" y="150" width="320" height="30" class="conc"/>' +
    '<rect x="40" y="180" width="20" height="70" class="bx"/><rect x="340" y="180" width="20" height="70" class="bx"/>' +
    '<rect x="90" y="110" width="30" height="28" class="bx2"/><circle cx="200" cy="100" r="8" class="ln"/><line x1="200" y1="108" x2="200" y2="138" class="ln"/><rect x="260" y="104" width="40" height="34" class="bx2"/>' +
    '<text x="60" y="66" class="bl">활하중 L (사용·변동)</text>' +
    '<text x="80" y="214">고정하중 D (자중·마감)</text>' +
    '<text x="380" y="90" class="t">1.2D + 1.6L</text>' +
    '<text x="380" y="130" class="s2">주거 2.0kN/㎡</text><text x="380" y="152" class="s2">사무 2.5kN/㎡</text>' +
    '<text x="60" y="270" class="r">시공 중 자재 적치 주의</text>' +
    '<text x="40" y="110" text-anchor="middle" class="n">①</text>' +
    '<text x="30" y="170" text-anchor="middle" class="n">②</text>' +
    '<text x="370" y="70" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구분·기준', k: ['D: 구조·마감 자중', 'L: 주거 {{2.0kN/㎡}}', '조합 {{1.2D+1.6L}}'] },
    { h: '시공 시 유의사항', k: ['자재 [[적치]] 초과', '마감 두께 증가', '용도변경 재검토'] },
    { h: '개선방안', k: ['[[시공하중]] 검토', '적재하중 표지'] }
  ],
  code: 'D=Dead(자중), L=Live(사용) / 1.2D+1.6L',
  read: '①사용 따라 변하는 활하중 L + ②변하지 않는 자중 고정하중 D → ③1.2D + 1.6L 로 조합'
},
103: {
  one: '인장철근 [[항복]](εy)과 콘크리트 [[극한변형률]] {{0.0033}}이 동시에 도달하는 [[균형파괴]] 상태의 철근비',
  flow: ['εcu 0.0033', 'εs=εy 동시', '중립축 c', 'ρb 산정', 'ρ 범위 배근'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="100" height="170" class="bx"/>' +
    '<circle cx="65" cy="190" r="6" class="rf"/><circle cx="90" cy="190" r="6" class="rf"/><circle cx="115" cy="190" r="6" class="rf"/>' +
    '<line x1="30" y1="90" x2="330" y2="90" class="ln2 dash"/>' +
    '<line x1="220" y1="40" x2="220" y2="190" class="ln"/><path d="M220,40 L180,40 L300,190 L220,190" fill="none" class="bl"/>' +
    '<text x="240" y="30" class="r">εcu = 0.0033</text><text x="306" y="196" class="r">εs = εy</text>' +
    '<text x="340" y="95" class="s2">중립축 c</text><text x="340" y="150" class="b">동시 도달</text>' +
    '<text x="40" y="250" class="r">ρ > ρb → 취성파괴</text><text x="260" y="250" class="bl">ρ ≤ ρmax → 연성</text>' +
    '<text x="165" y="45" text-anchor="middle" class="n">①</text>' +
    '<text x="315" y="175" text-anchor="middle" class="n">②</text>' +
    '<text x="330" y="150" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '정의·기준', k: ['εc {{0.0033}} & εy', '최대 εt ≥ {{0.004}}', '인장지배 {{0.005}}'] },
    { h: '문제점', k: ['ρ>ρb [[취성파괴]]', 'ρ<ρmin 즉시 파단', '과배근·누락'] },
    { h: '개선방안', k: ['ρmin~ρmax [[연성]]', '배근검측'] }
  ],
  code: '0.0033·εy 동시 / 0.004 최대 / 0.005 인장지배',
  read: '①콘크리트 εcu 0.0033 과 ②철근 εy 가 ③동시에 도달 = 균형파괴 → ρb'
},
106: {
  one: '[[PS강재]]를 긴장해 콘크리트에 미리 [[압축응력]]을 넣어 하중 [[인장응력]]을 상쇄하는 콘크리트',
  flow: ['PS강재 긴장', '압축 도입', '하중 작용', '인장 상쇄', '균열 제어'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="140" y1="20" x2="140" y2="56" class="ar"/><line x1="210" y1="20" x2="210" y2="56" class="ar"/><line x1="280" y1="20" x2="280" y2="56" class="ar"/><text x="296" y="38">하중</text>' +
    '<rect x="60" y="60" width="300" height="60" class="conc"/><path d="M60,85 Q210,135 360,85" class="bl" fill="none"/>' +
    '<line x1="58" y1="90" x2="24" y2="90" class="ar"/><line x1="362" y1="90" x2="396" y2="90" class="ar"/>' +
    '<text x="210" y="150" text-anchor="middle" class="bl">PS강재 긴장 → 압축 도입</text>' +
    '<text x="210" y="180" text-anchor="middle" class="r">인장 상쇄 → 균열 제어</text>' +
    '<text x="40" y="220" class="s2">Pre-tension: 공장·부착</text><text x="40" y="248" class="s2">Post-tension: 쉬스·정착구</text>' +
    '<text x="250" y="220" class="r">도입강도 30MPa↑</text><text x="250" y="248" class="r">Grout W/B 45%↓</text>' +
    '<text x="225" y="100" text-anchor="middle" class="n">①</text>' +
    '<text x="125" y="40" text-anchor="middle" class="n">②</text>' +
    '<text x="110" y="180" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '방식·특징', k: ['[[Pre-tension]] 공장', '[[Post-tension]] 현장', '장스팬·균열 제어'] },
    { h: '시공 시 유의사항', k: ['도입강도 {{30MPa↑}}', '긴장력·신장량', 'Grout {{45%↓}} 충전'] },
    { h: '개선방안', k: ['[[긴장력 손실]] 보정', 'Unbonded 강연선'] }
  ],
  code: 'Pre=먼저 당기고 타설 / Post=타설 후 당김 / 30·45',
  read: '①PS강재를 긴장해 압축 도입 → ②하중이 인장을 일으킴 → ③미리 넣은 압축이 인장을 상쇄'
},
107: {
  one: '공장 [[Half PC판]](거푸집 겸용)을 걸치고 [[Topping]]을 타설해 [[Truss근]]·요철({{6mm}})로 일체화',
  flow: ['공장 제작', '양중·거치', '배근·설비', 'Topping 타설', 'Support 해체'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="100" width="360" height="50" class="conc"/><rect x="40" y="150" width="360" height="30" class="bx2"/>' +
    '<path d="M60,150 L90,112 L120,150 L150,112 L180,150 L210,112 L240,150 L270,112 L300,150 L330,112 L360,150" class="ln" fill="none"/>' +
    '<line x1="120" y1="180" x2="120" y2="240" class="ln2"/><line x1="320" y1="180" x2="320" y2="240" class="ln2"/><line x1="100" y1="240" x2="140" y2="240" class="ln2"/><line x1="300" y1="240" x2="340" y2="240" class="ln2"/>' +
    '<text x="40" y="88" class="b">Topping 콘크리트 (현장)</text>' +
    '<text x="220" y="170" text-anchor="middle" class="s2">Half PC판 (거푸집 겸용)</text>' +
    '<line x1="330" y1="120" x2="404" y2="126" class="ld"/><text x="408" y="131">Truss근</text>' +
    '<text x="408" y="165" class="r">요철 6mm</text>' +
    '<text x="220" y="232" text-anchor="middle">Jack Support</text>' +
    '<text x="220" y="268" text-anchor="middle" class="r">일체화 = 수평전단 전달</text>' +
    '<text x="30" y="170" text-anchor="middle" class="n">①</text>' +
    '<text x="420" y="110" text-anchor="middle" class="n">②</text>' +
    '<text x="25" y="88" text-anchor="middle" class="n">③</text>' +
    '<text x="100" y="215" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '구성·특징', k: ['[[거푸집 겸용]]', 'Truss근·거친면', 'Topping 일체화'] },
    { h: '시공 시 유의사항', k: ['[[걸침길이]]·Pad', '[[Jack Support]] 보강', '접합면 청소·습윤'] },
    { h: '개선방안', k: ['Topping 습윤양생', '조인트 Back-up재'] }
  ],
  code: '판(PC)+트(Truss)+탑(Topping) / 걸·잭·습',
  read: '①Half PC판 거치(거푸집 겸용) → ②Truss근 → ③Topping 타설 → ④Support 해체, 일체화'
},
108: {
  one: '[[Flange]]와 2개 [[Stem]]의 T형 PC 부재에 [[Pre-tension]] 강연선을 넣어 {{10~20m}} 무량 공간을 만드는 공법',
  flow: ['공장 제작', '운반', '양중·거치', 'Camber 조정', '용접·Topping'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="44" width="400" height="16" class="conc"/><rect x="40" y="60" width="400" height="20" class="bx"/>' +
    '<path d="M120,80 L150,80 L145,200 L125,200 Z" class="bx2"/><path d="M330,80 L360,80 L355,200 L335,200 Z" class="bx2"/>' +
    '<circle cx="135" cy="188" r="4" class="rf"/><circle cx="345" cy="188" r="4" class="rf"/>' +
    '<text x="240" y="30" text-anchor="middle" class="s2">Topping 타설</text>' +
    '<text x="240" y="76" text-anchor="middle" class="s2">Flange</text>' +
    '<text x="240" y="140" text-anchor="middle" class="b">Stem (2개)</text>' +
    '<line x1="139" y1="192" x2="180" y2="218" class="ld"/><line x1="341" y1="192" x2="300" y2="218" class="ld"/>' +
    '<text x="240" y="225" text-anchor="middle" class="r">Pre-tension 강연선</text>' +
    '<text x="240" y="250" text-anchor="middle" class="bl">Span 10~20m 무량</text>' +
    '<text x="240" y="272" text-anchor="middle" class="s2">Camber·단차 주의</text>' +
    '<text x="30" y="60" text-anchor="middle" class="n">①</text>' +
    '<text x="110" y="140" text-anchor="middle" class="n">②</text>' +
    '<text x="110" y="195" text-anchor="middle" class="n">③</text>' +
    '<text x="175" y="30" text-anchor="middle" class="n">④</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[장스팬]]·무량 공간', 'Pre-tension 강연선', '주차장·물류 반복'] },
    { h: '시공 시 유의사항', k: ['[[Camber]] 단차', 'Bearing Pad 파손', '양중 시 비틀림'] },
    { h: '개선방안', k: ['Camber Leveling', 'Plate 용접+Topping'] }
  ],
  code: '플·스·강(Flange·Stem·강연선) / 캠·패·비',
  read: '①Flange + ②Stem 2개 T형 → ③하부 Pre-tension 강연선 → ④Topping 타설로 일체'
},
109: {
  one: '[[합성보]]에서 강재와 콘크리트 사이 [[수평전단력]]을 전달하는 연결재 (길이 {{4d↑}}·간격 {{6d↑}})',
  flow: ['Flange 청소', '시험용접', 'Stud 용접', '15° 굽힘검사', '타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="400" height="70" class="conc"/>' +
    '<rect x="40" y="120" width="400" height="12" class="bx3"/><rect x="40" y="132" width="400" height="50" class="bx"/><rect x="40" y="182" width="400" height="12" class="bx3"/>' +
    '<line x1="100" y1="120" x2="100" y2="76" class="ln2"/><line x1="180" y1="120" x2="180" y2="76" class="ln2"/><line x1="260" y1="120" x2="260" y2="76" class="ln2"/><line x1="340" y1="120" x2="340" y2="76" class="ln2"/>' +
    '<rect x="93" y="70" width="14" height="6" class="bx2"/><rect x="173" y="70" width="14" height="6" class="bx2"/><rect x="253" y="70" width="14" height="6" class="bx2"/><rect x="333" y="70" width="14" height="6" class="bx2"/>' +
    '<text x="240" y="36" text-anchor="middle" class="bl">⇄ 수평전단 전달</text>' +
    '<text x="380" y="100" text-anchor="middle" class="s2">슬래브</text>' +
    '<text x="240" y="162" text-anchor="middle" class="b">강재 보</text>' +
    '<text x="40" y="222" class="r">Stud 길이 ≥ 4d</text><text x="260" y="222" class="r">간격 ≥ 6d</text>' +
    '<text x="40" y="252">15° 타격 굽힘검사</text><text x="260" y="252" class="s2">최대 8t·900mm</text>' +
    '<text x="115" y="95" text-anchor="middle" class="n">①</text>' +
    '<text x="60" y="108" text-anchor="middle" class="n">②</text>' +
    '<text x="155" y="36" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류·기준', k: ['Stud·Channel·Truss', '길이 {{4d}}·간격 {{6d}}', '최대 {{8t}}·{{900mm}}'] },
    { h: '시공 시 유의사항', k: ['{{15°}} [[굽힘검사]]', '녹·도장·수분 제거', 'Deck 관통 전류'] },
    { h: '개선방안', k: ['자동 Stud Gun', '시험용접·Mock-up'] }
  ],
  code: '4d 길이 · 6d 간격 · 8t/900 최대 · 15° 검사',
  read: '①Stud 를 강재 보에 용접 → ②슬래브 콘크리트에 묻힘 → ③둘 사이 수평전단 전달(합성)'
},
110: {
  one: 'PC 접합부 철근을 [[Sleeve]]·겹침이음 후 [[현장타설]]·[[무수축 Grout]]로 채워 일체식으로 만드는 접합',
  flow: ['접합면 청소', '철근 오차 교정', 'Sleeve 연결', '거푸집 설치', '충전·양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="170" height="140" class="bx2"/><rect x="250" y="60" width="170" height="140" class="bx2"/><rect x="210" y="60" width="40" height="140" class="conc"/>' +
    '<line x1="150" y1="100" x2="310" y2="100" class="bl"/><line x1="150" y1="160" x2="310" y2="160" class="bl"/>' +
    '<rect x="218" y="94" width="24" height="12" class="bx3"/><rect x="218" y="154" width="24" height="12" class="bx3"/>' +
    '<text x="110" y="136" text-anchor="middle" class="t">PC 부재</text><text x="350" y="136" text-anchor="middle" class="t">PC 부재</text>' +
    '<text x="230" y="40" text-anchor="middle" class="b">현장타설·무수축 Grout</text>' +
    '<text x="230" y="228" text-anchor="middle" class="bl">Sleeve·철근 연결</text>' +
    '<text x="230" y="256" text-anchor="middle" class="r">일체식(Monolithic)</text>' +
    '<text x="60" y="85" text-anchor="middle" class="n">①</text>' +
    '<text x="230" y="135" text-anchor="middle" class="n">②</text>' +
    '<text x="130" y="40" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '요구성능', k: ['[[응력전달]]·일체성', '수밀·차음·내화', 'Tolerance·시공성'] },
    { h: '시공 시 유의사항', k: ['접합면 이물질 제거', '철근 [[오차 교정]]', '무수축 밀실 충전'] },
    { h: '개선방안', k: ['Sleeve 충전 확인', 'BIM·Mock-up'] }
  ],
  code: '응·수·차·내·T (요구성능) / 이·오·무 (유의)',
  read: '①PC 부재 맞댐 → ②접합부 철근을 Sleeve 로 연결 → ③현장타설·무수축 Grout 충전 → 일체식'
},
111: {
  one: '[[유닛(Unit)]]에 {{70%↑}} 부품을 공장 제작·설치해 현장에서 [[조립]]하는 [[탈현장(OSC)]] 건축',
  flow: ['BIM·DfMA 설계', '공장 제작', '운송', '양중·설치', '접합·마감'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="140" width="100" height="50" class="bx"/><rect x="160" y="140" width="100" height="50" class="bx"/><rect x="60" y="190" width="100" height="50" class="bx"/><rect x="160" y="190" width="100" height="50" class="bx"/>' +
    '<line x1="30" y1="240" x2="300" y2="240" class="ln"/>' +
    '<line x1="370" y1="14" x2="370" y2="60" class="ln2"/><rect x="320" y="60" width="100" height="50" class="bx2"/>' +
    '<line x1="330" y1="110" x2="270" y2="140" class="ar"/>' +
    '<text x="40" y="40" class="r">공장 제작 70%↑</text><text x="40" y="64" class="s2">운송 폭 2.5m·높이 4.0m</text>' +
    '<text x="110" y="170" text-anchor="middle" class="s2">Unit</text>' +
    '<text x="370" y="134" text-anchor="middle">크레인 양중</text>' +
    '<text x="160" y="266" text-anchor="middle" class="b">현장 조립·접합</text>' +
    '<text x="310" y="210" class="s2">접합부 차음·내화</text>' +
    '<text x="25" y="40" text-anchor="middle" class="n">①</text>' +
    '<text x="310" y="85" text-anchor="middle" class="n">②</text>' +
    '<text x="60" y="130" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류', k: ['Unit Box(라멘)', 'Panelizing(벽식)', 'In-fill'] },
    { h: '시공 시 유의사항', k: ['운송 {{2.5m}}·{{4.0m}}', '접합부 차음·누수', '양중 정밀도'] },
    { h: '개선방안', k: ['[[BIM]]·DfMA 표준화', '중고층 내화 개발'] }
  ],
  code: '유·패·인(Unit·Panel·In-fill) / 설·제·운·설·마',
  read: '①공장에서 Unit 70%↑ 제작 → ②운송·크레인 양중 → ③현장에서 쌓아 조립·접합'
},
112: {
  one: '항복 이하 [[반복하중]]으로 [[응력집중부]]에서 균열이 진전해 파괴 — 강재 {{10⁶~10⁷회}} [[피로한도]]',
  flow: ['반복응력', '미세균열 발생', '균열 진전', '잔여단면↓', '급속 파단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="220" x2="460" y2="220" class="ar"/><line x1="60" y1="220" x2="60" y2="25" class="ar"/>' +
    '<path d="M70,50 Q150,140 260,165 L450,165" class="bl" fill="none"/>' +
    '<line x1="260" y1="165" x2="260" y2="220" class="ln2 dash"/>' +
    '<text x="68" y="36" class="s2">S (응력범위)</text><text x="460" y="262" text-anchor="end" class="s2">N (반복횟수, log)</text>' +
    '<text x="170" y="80" class="s2">용접지단·노치 균열</text>' +
    '<text x="330" y="155" class="r">피로한도</text><text x="340" y="198" class="bl">무한수명</text>' +
    '<text x="260" y="240" text-anchor="middle" class="r">10⁶~10⁷회</text>' +
    '<text x="90" y="90" text-anchor="middle" class="n">①</text>' +
    '<text x="300" y="185" text-anchor="middle" class="n">②</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['[[S-N 곡선]]', '발생→진전→파단', '용접지단·노치 기점'] },
    { h: '원인', k: ['[[언더컷]]·오버랩', '단면급변·볼트구멍', '부식·피팅'] },
    { h: '방지대책', k: ['[[그라인딩]]·피닝', '응력범위 제한'] }
  ],
  code: 'S-N·10⁶~10⁷회 / 발생·진전·파단 / 갈고 두드려',
  read: '①응력범위가 클수록 적은 횟수에 파괴 → ②10⁶~10⁷회 이후 수평 = 피로한도(이하 무한수명)'
},
113: {
  one: '[[천이온도]] 이하 저온·[[노치]]·[[잔류응력]]에서 소성변형 없이 균열이 급속 전파되는 파괴 (SM-B {{0℃ 27J}})',
  flow: ['외력', '노치 응력집중', '균열 발생', '급속 전파', '파괴'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="460" y2="230" class="ar"/><line x1="60" y1="230" x2="60" y2="25" class="ar"/>' +
    '<path d="M70,210 C200,210 220,70 380,70 L450,70" class="bl" fill="none"/>' +
    '<line x1="230" y1="140" x2="230" y2="230" class="ln2 dash"/>' +
    '<text x="68" y="36" class="s2">흡수에너지 (J)</text><text x="460" y="252" text-anchor="end" class="s2">온도 →</text>' +
    '<text x="80" y="190" class="r">취성 (저온)</text><text x="390" y="58" class="bl">연성</text>' +
    '<text x="230" y="252" text-anchor="middle" class="b">천이온도</text>' +
    '<text x="290" y="112" class="r">샤르피 27J↑ (0℃)</text>' +
    '<text x="40" y="274" class="s2">저온·노치·잔류응력 → 취성</text>' +
    '<text x="100" y="170" text-anchor="middle" class="n">①</text>' +
    '<text x="250" y="180" text-anchor="middle" class="n">②</text>' +
    '<text x="440" y="95" text-anchor="middle" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '발생원인(3요소)', k: ['[[저온]](천이온도↓)', '[[노치]]·용접결함', '인장 잔류응력'] },
    { h: '시공 시 유의사항', k: ['{{-5℃}} 미만 용접금지', '아크스트라이크 금지', '입열량·층간온도'] },
    { h: '방지대책', k: ['[[샤르피]] 등급 강재', 'TMC강·SN강'] }
  ],
  code: '저·노·잔 → 취성 / 샤르피 27J · -5℃ 용접금지',
  read: '①저온에서는 흡수에너지 작아 취성 → ②천이온도에서 급변 → ③고온 쪽은 연성 (0℃ 27J↑ 확보)'
}
});
