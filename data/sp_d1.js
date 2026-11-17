// 간단 요약(한눈에·따라 그리기) — 디테일원 용어250 그룹 a·b (2,3,4,13~24,26~40) — 형식: data/SCHEMA_SP.md
// 근거: data/dw_a.js, data/dw_b.js 의 def·subs·mnemo (12 는 sp_proto.js)
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
2: {
  one: '[[수직재·수평재·가새재]]를 [[규격화]]하여 [[쐐기형 연결철물]]로 조립하는 일체형 비계',
  flow: ['지반다짐·깔판', 'Jack Base', '수직·수평재', '가새·벽이음', '발판·난간'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="240" x2="250" y2="240" class="ln"/>' +
    '<rect x="30" y="232" width="20" height="8" class="bx3"/><rect x="130" y="232" width="20" height="8" class="bx3"/><rect x="230" y="232" width="20" height="8" class="bx3"/>' +
    '<line x1="40" y1="30" x2="40" y2="232" class="ln"/><line x1="140" y1="30" x2="140" y2="232" class="ln"/><line x1="240" y1="30" x2="240" y2="232" class="ln"/>' +
    '<line x1="40" y1="50" x2="240" y2="50" class="rd"/>' +
    '<rect x="40" y="86" width="200" height="8" class="bx2"/><rect x="40" y="166" width="200" height="8" class="bx2"/>' +
    '<line x1="40" y1="130" x2="240" y2="130" class="ln"/><line x1="40" y1="210" x2="240" y2="210" class="ln"/>' +
    '<line x1="140" y1="210" x2="240" y2="130" class="ln2"/>' +
    '<circle cx="240" cy="130" r="5" class="dotf"/>' +
    '<line x1="242" y1="50" x2="270" y2="50" class="ld"/><text x="275" y="55" class="r">안전난간 90cm↑</text>' +
    '<line x1="242" y1="90" x2="270" y2="90" class="ld"/><text x="275" y="95" class="r">작업발판 40cm↑</text>' +
    '<line x1="245" y1="130" x2="270" y2="130" class="ld"/><text x="275" y="135" class="bl">쐐기 연결</text>' +
    '<line x1="215" y1="150" x2="270" y2="175" class="ld"/><text x="275" y="180">가새재</text>' +
    '<line x1="252" y1="236" x2="270" y2="236" class="ld"/><text x="275" y="241">Jack Base (겹침 1/3↑)</text>' +
    '<text x="140" y="270" text-anchor="middle" class="t">System 비계</text>' +
    '</svg>',
  heads: [
    { h: '구성·특징', k: ['[[규격화]] 부재', '[[쐐기]] 연결 일체형', '발판·난간 동시'] },
    { h: '유의사항', k: ['지반다짐·깔판', '받침 겹침 {{1/3↑}}', '벽이음 간격'] },
    { h: '개선방안', k: ['안전인증 제품', '해체는 상부부터'] }
  ],
  code: '수·수·가 쐐기로 / 발판 40 난간 90 / 받침 1/3'
},
3: {
  one: '자재 [[낙하·비래]] 방지를 위해 [[10m 이내]]마다 [[내민길이 2m↑]], {{20~30°}}로 설치하는 안전망',
  flow: ['Bracket 설치', '망 펼침·결속', '로프 긴결', '점검·해체'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="20" width="70" height="245" class="conc"/>' +
    '<line x1="110" y1="110" x2="260" y2="70" class="bl dash"/><line x1="110" y1="110" x2="260" y2="70" class="ln2"/>' +
    '<line x1="110" y1="230" x2="260" y2="190" class="bl dash"/>' +
    '<line x1="110" y1="140" x2="200" y2="86" class="ln"/><line x1="110" y1="260" x2="200" y2="206" class="ln"/>' +
    '<line x1="290" y1="70" x2="290" y2="190" class="ln2"/><line x1="282" y1="70" x2="298" y2="70" class="ln2"/><line x1="282" y1="190" x2="298" y2="190" class="ln2"/>' +
    '<line x1="110" y1="44" x2="260" y2="44" class="ln2"/>' +
    '<text x="75" y="150" text-anchor="middle" class="t">구조체</text>' +
    '<text x="185" y="36" text-anchor="middle" class="r">내민 2m↑</text>' +
    '<text x="270" y="60">낙하물 방지망</text>' +
    '<text x="170" y="128" class="r">20~30°</text>' +
    '<text x="300" y="135" class="r">10m 이내</text>' +
    '<text x="300" y="250" class="s2">그물코 20mm↓</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['높이 {{10m}} 이내', '내민 {{2m}} 이상', '수평 {{20~30°}}'] },
    { h: '유의사항', k: ['그물코 {{20mm}}↓', '이음·결속 철저', '낙하물 수시 제거'] },
    { h: '개선방안', k: ['수직보호망 병행', '일체형 Bracket'] }
  ],
  code: '10·2·20~30 (십이 이삼) + 그물 20'
},
4: {
  one: '굴착 중 [[Post Pile]] 위에 [[주형]]·[[복공판]]을 깔아 장비·자재 동선을 확보하는 가설구조물',
  flow: ['Post Pile', '주형·가새', '복공판 깔기', '진입로·난간', '구조검토'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="80" width="40" height="180" class="soil"/><rect x="420" y="80" width="40" height="180" class="soil"/>' +
    '<rect x="60" y="48" width="360" height="12" class="bx2"/><rect x="60" y="60" width="360" height="12" class="bx3"/>' +
    '<line x1="150" y1="72" x2="150" y2="240" class="ln"/><line x1="330" y1="72" x2="330" y2="240" class="ln"/>' +
    '<line x1="150" y1="110" x2="330" y2="170" class="ln2"/>' +
    '<rect x="60" y="240" width="360" height="20" class="bx3"/>' +
    '<rect x="200" y="22" width="60" height="18" class="bx"/><circle cx="212" cy="43" r="5" class="dotf"/><circle cx="248" cy="43" r="5" class="dotf"/>' +
    '<text x="20" y="30" class="r">활하중 20kN/m²</text>' +
    '<text x="280" y="34" class="bl">장비 500kN↑</text>' +
    '<text x="425" y="44" class="s2">복공판</text>' +
    '<text x="240" y="150" text-anchor="middle" class="t">굴착</text>' +
    '<text x="340" y="215">Post Pile</text>' +
    '<text x="240" y="276" text-anchor="middle" class="r">풍화암 정착</text>' +
    '</svg>',
  heads: [
    { h: '구조검토', k: ['활하중 {{20kN/m²}}', '장비 {{500kN}}↑', '[[풍화암 정착]]'] },
    { h: '유의사항', k: ['진입로 {{1/6}}↓', '단차 {{10mm}} 이내', '가새·좌굴 방지'] },
    { h: '개선방안', k: ['하중표지·과적통제', '정기 점검'] }
  ],
  code: '20kN·500kN·1/6·10mm (이오육십)'
},
13: {
  one: '[[느슨한 포화 사질토]]가 진동으로 [[과잉간극수압]]이 생겨 [[유효응력]] 0, 액체처럼 거동',
  flow: ['지진·진동', '간극수압 u↑', 'σ′ → 0', '전단강도 상실', '침하·전도'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="50" width="170" height="130" class="soil"/><rect x="280" y="50" width="170" height="130" class="soil"/>' +
    '<circle cx="75" cy="75" r="20" class="ln"/><circle cx="115" cy="75" r="20" class="ln"/><circle cx="155" cy="75" r="20" class="ln"/>' +
    '<circle cx="75" cy="115" r="20" class="ln"/><circle cx="115" cy="115" r="20" class="ln"/><circle cx="155" cy="115" r="20" class="ln"/>' +
    '<circle cx="75" cy="155" r="20" class="ln"/><circle cx="115" cy="155" r="20" class="ln"/><circle cx="155" cy="155" r="20" class="ln"/>' +
    '<circle cx="310" cy="80" r="14" class="ln"/><circle cx="375" cy="70" r="14" class="ln"/><circle cx="425" cy="95" r="14" class="ln"/>' +
    '<circle cx="335" cy="140" r="14" class="ln"/><circle cx="400" cy="150" r="14" class="ln"/><circle cx="360" cy="110" r="14" class="ln"/>' +
    '<line x1="210" y1="115" x2="270" y2="115" class="ar"/>' +
    '<text x="240" y="30" text-anchor="middle" class="t">느슨한 포화 사질토</text>' +
    '<text x="240" y="105" text-anchor="middle" class="b">진동</text>' +
    '<text x="115" y="200" text-anchor="middle" class="s2">진동 전: 입자 접촉</text>' +
    '<text x="365" y="200" text-anchor="middle" class="s2">진동 후: 입자 부유</text>' +
    '<text x="240" y="240" text-anchor="middle" class="r">σ′ = σ − u → 0</text>' +
    '<text x="365" y="268" text-anchor="middle" class="s2">Sand Boil·침하</text>' +
    '</svg>',
  heads: [
    { h: '발생조건', k: ['포화 [[느슨한 사질토]]', 'N값 {{20}} 이하', '깊이 {{20m}} 이내'] },
    { h: '문제점', k: ['[[부등침하]]·전도', '매설관 부상', 'Sand Boil'] },
    { h: '방지대책', k: ['SCP·다짐(밀도)', '지하수위 저하', 'Gravel Drain'] }
  ],
  code: '느·포·사 + 진동 = 물처럼 / 대책 밀·배·고'
},
14: {
  one: '[[벤토나이트]] 현탁액이 [[Filter Cake]]와 [[액압]]으로 [[공벽 붕괴]]를 막음 (비중 {{1.04~1.2}})',
  flow: ['혼합·숙성', '굴착 중 공급', '품질시험', 'Desander 회수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="90" height="210" class="soil"/><rect x="250" y="40" width="90" height="210" class="soil"/>' +
    '<rect x="130" y="50" width="120" height="200" class="bx2"/>' +
    '<line x1="130" y1="50" x2="130" y2="250" class="rd"/><line x1="250" y1="50" x2="250" y2="250" class="rd"/>' +
    '<line x1="40" y1="90" x2="130" y2="90" class="bl dash"/><line x1="250" y1="90" x2="340" y2="90" class="bl dash"/>' +
    '<line x1="190" y1="160" x2="140" y2="160" class="ar"/><line x1="190" y1="160" x2="240" y2="160" class="ar"/>' +
    '<text x="190" y="120" text-anchor="middle" class="t">안정액</text>' +
    '<text x="45" y="84" class="s2">지하수위</text>' +
    '<text x="355" y="70" class="s2">수위차 1.5m↑</text>' +
    '<line x1="252" y1="115" x2="350" y2="115" class="ld"/><text x="355" y="120" class="r">Filter Cake</text>' +
    '<text x="355" y="165" class="bl">액압 > 토압+수압</text>' +
    '<text x="190" y="272" text-anchor="middle" class="r">비중 1.04~1.2</text>' +
    '</svg>',
  heads: [
    { h: '관리기준', k: ['비중 {{1.04~1.2}}', '점성 {{22~40초}}', '사분율 {{15%}}↓'] },
    { h: '유의사항', k: ['지하수위+{{1.5m}}↑', '일수·공벽 감시', 'Slime 사분 {{5%}}↓'] },
    { h: '개선방안', k: ['Desander 재사용', '폐액 적법 처리'] }
  ],
  code: '비 1.04~1.2 / 점 22~40 / 사 15'
},
15: {
  one: '굴착 공 내 [[초음파]] 반사로 [[벽두께]]·[[수직도]]·깊이·공벽 형상을 측정하는 시험',
  flow: ['중심선 측량', 'Sensor 하강', '초음파 송수신', 'Profile 판정', '보완'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="140" y1="40" x2="340" y2="40" class="ln"/>' +
    '<path d="M160,40 L156,100 L166,160 L158,250" class="ln"/><path d="M320,40 L326,100 L316,160 L324,250" class="ln"/>' +
    '<line x1="160" y1="250" x2="320" y2="250" class="ln"/>' +
    '<line x1="240" y1="15" x2="240" y2="130" class="ln2"/><rect x="230" y="130" width="20" height="20" class="bx3"/>' +
    '<line x1="228" y1="140" x2="172" y2="140" class="ar"/><line x1="252" y1="140" x2="308" y2="140" class="ar"/>' +
    '<text x="20" y="30" class="t">Koden Test</text>' +
    '<text x="20" y="140">벽두께·형상</text>' +
    '<text x="340" y="105" class="r">수직도 1/300</text>' +
    '<text x="240" y="185" text-anchor="middle" class="bl">초음파 송·수신</text>' +
    '<text x="340" y="205" class="s2">Panel당 3개소↑</text>' +
    '<text x="240" y="272" text-anchor="middle" class="s2">굴착 깊이</text>' +
    '</svg>',
  heads: [
    { h: '측정항목', k: ['깊이·공벽 형상', '수직도 {{1/300}}', '붕괴·과굴착'] },
    { h: '유의사항', k: ['Panel당 {{3개소}}↑', '중심선 기준', 'Data 기록·보관'] },
    { h: '결과활용', k: ['안정액 피드백', '타설량 관리'] }
  ],
  code: '중·센·초·기·판 / 1/300·3개소'
},
16: {
  one: '버팀보를 줄이고 [[IPS 띠장]]의 [[PS강선]]을 긴장해 [[Prestress]]로 토압을 지지하는 공법',
  flow: ['1차 굴착', '띠장·받침대', '버팀보 접합', 'PS 긴장', '계측·재긴장'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="58" width="400" height="12" class="conc"/>' +
    '<rect x="60" y="72" width="360" height="14" class="bx3"/>' +
    '<line x1="120" y1="18" x2="120" y2="54" class="ar"/><line x1="240" y1="18" x2="240" y2="54" class="ar"/><line x1="360" y1="18" x2="360" y2="54" class="ar"/>' +
    '<path d="M60,86 L150,150 L330,150 L420,86" class="rd"/>' +
    '<line x1="150" y1="86" x2="150" y2="150" class="ln"/><line x1="330" y1="86" x2="330" y2="150" class="ln"/>' +
    '<rect x="232" y="150" width="16" height="110" class="bx2"/>' +
    '<text x="380" y="40" class="b">토압</text>' +
    '<text x="240" y="112" text-anchor="middle">IPS 띠장</text>' +
    '<text x="158" y="138" class="s2">받침대</text>' +
    '<line x1="100" y1="118" x2="70" y2="185" class="ld"/><text x="20" y="200" class="r">PS강선 긴장</text>' +
    '<text x="300" y="200" class="bl">재긴장 → 변위 조절</text>' +
    '<text x="260" y="240">버팀보 최소화</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['강재량 감소', '작업공간 확보', '[[재긴장]] 변위조절'] },
    { h: '유의사항', k: ['단계별 긴장 관리', '여굴 금지', '하중계·변위 계측'] },
    { h: '개선방안', k: ['자동 긴장·IoT', '단계별 재긴장'] }
  ],
  code: 'IPS = 띠·받·강 (띠장·받침대·강선 긴장)'
},
17: {
  one: '배면 천공 후 [[PC강연선]]을 넣고 [[Grouting]]해 앵커체를 만든 뒤 [[긴장·정착]]해 흙막이 지지',
  flow: ['천공·강선', 'Grouting', '띠장 설치', '긴장·정착', '인장시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="114" y="30" width="346" height="230" class="soil"/>' +
    '<rect x="100" y="30" width="14" height="230" class="conc"/>' +
    '<rect x="86" y="82" width="14" height="16" class="bx2"/>' +
    '<line x1="100" y1="90" x2="270" y2="140" class="ln"/>' +
    '<path d="M270,132 L420,182 L416,196 L266,146 z" class="bx3"/>' +
    '<line x1="60" y1="66" x2="86" y2="86" class="ld"/><text x="20" y="60" class="bl">긴장·정착</text>' +
    '<text x="20" y="160">흙막이벽</text>' +
    '<text x="150" y="80">자유장 4.0m↑</text>' +
    '<text x="125" y="140" class="s2">설치각 10~45°</text>' +
    '<text x="300" y="230" class="r">정착장 3~10m</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['자유장 {{4.0m}}↑', '정착장 {{3~10m}}', '설치각 {{10~45°}}'] },
    { h: '유의사항', k: ['인접대지 승낙', '천공 깊이·각도', 'Grout 연속 주입'] },
    { h: '개선방안', k: ['[[제거식 앵커]]', 'Load Cell 계측'] }
  ],
  code: '자4·정3~10·각10~45 / 천·그·띠·긴·시'
},
18: {
  one: '현장타설말뚝 선단 [[Slime]]에 의한 [[선단지지력]] 저하를 막기 위해 [[Cement Milk]] 주입',
  flow: ['주입관 부착', '타설·양생', '천공·수세', 'Milk 주입', '재하시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<ellipse cx="240" cy="230" rx="90" ry="30" class="bx3"/>' +
    '<rect x="180" y="30" width="120" height="180" class="conc"/>' +
    '<rect x="180" y="210" width="120" height="12" class="bx2"/>' +
    '<line x1="210" y1="15" x2="210" y2="215" class="bl"/><line x1="270" y1="15" x2="270" y2="215" class="bl"/>' +
    '<line x1="210" y1="215" x2="190" y2="240" class="ar"/><line x1="270" y1="215" x2="290" y2="240" class="ar"/>' +
    '<text x="310" y="40" class="bl">주입관 Ø100 2개↑</text>' +
    '<text x="20" y="120">RCD 말뚝</text>' +
    '<text x="20" y="150" class="s2">10일↑ 양생 후</text>' +
    '<line x1="302" y1="216" x2="335" y2="210" class="ld"/><text x="340" y="210" class="r">Slime</text>' +
    '<text x="340" y="250" class="g">선단지지력 ↑</text>' +
    '<text x="240" y="276" text-anchor="middle" class="r">Cement Milk 주입</text>' +
    '</svg>',
  heads: [
    { h: '관리사항', k: ['주입관 {{2개}}↑', '{{10일}}↑ 양생', '수세 → Slime 제거'] },
    { h: '유의사항', k: ['주입압·주입량', '1차·2차 단계주입'] },
    { h: '개선방안', k: ['재하시험 확인', '굴착 시 Slime 처리'] }
  ],
  code: '부·타·천·수·주 (부착·타설·천공·수세·주입)'
},
19: {
  one: '[[철골 기둥·보]]를 선시공해 굴토 중 [[버팀대]], 완성 후 [[본구조물]]로 쓰는 Top Down',
  flow: ['흙막이벽', '철골기둥', '1층 선시공', '하부 Down', '지상 Up'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="60" x2="460" y2="60" class="ln"/>' +
    '<rect x="40" y="60" width="12" height="200" class="conc"/><rect x="428" y="60" width="12" height="200" class="conc"/>' +
    '<line x1="160" y1="40" x2="160" y2="260" class="ln"/><line x1="320" y1="40" x2="320" y2="260" class="ln"/>' +
    '<line x1="52" y1="130" x2="428" y2="130" class="ln"/><line x1="52" y1="200" x2="428" y2="200" class="ln"/>' +
    '<line x1="240" y1="52" x2="240" y2="15" class="ar"/><line x1="240" y1="210" x2="240" y2="252" class="ar"/>' +
    '<text x="40" y="30" class="t">SPS</text>' +
    '<text x="60" y="54" class="s2">1층 선시공</text>' +
    '<text x="260" y="34" class="g">지상 Up</text>' +
    '<text x="170" y="100">철골 기둥</text>' +
    '<text x="330" y="124" class="bl">보 = 버팀대</text>' +
    '<text x="58" y="160" class="s2">흙막이벽</text>' +
    '<text x="170" y="245" class="r">지하 Down</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['Strut 해체 불필요', '지하·지상 동시', '공기단축·안전'] },
    { h: '유의사항', k: ['기둥 [[수직도]]', '1층 작업하중', 'Perimeter Beam'] },
    { h: '개선방안', k: ['BIM 접합 검토', '변위·응력 계측'] }
  ],
  code: '흙·기·선·다·업 (흙막이·기둥·선시공·Down·Up)'
},
20: {
  one: '[[Double Rod]] 노즐로 [[Cement Milk]]를 초고압 {{20MPa}} 분사·회전해 [[원주형 고결체]] 형성',
  flow: ['천공', '초고압 분사', '회전·인발', '고결체 형성', 'Core 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="40" x2="440" y2="40" class="ln"/>' +
    '<rect x="140" y="90" width="120" height="160" class="bx3"/>' +
    '<line x1="196" y1="20" x2="196" y2="200" class="ln"/><line x1="204" y1="20" x2="204" y2="200" class="ln"/>' +
    '<line x1="206" y1="150" x2="255" y2="150" class="ar"/><line x1="194" y1="150" x2="145" y2="150" class="ar"/>' +
    '<text x="215" y="70">Double Rod</text>' +
    '<text x="20" y="110" class="bl">회전·인발 ↑</text>' +
    '<text x="20" y="175" class="s2">Cement Milk</text>' +
    '<text x="280" y="145" class="r">초고압 20MPa</text>' +
    '<text x="280" y="210" class="b">원주형 고결체</text>' +
    '<text x="200" y="272" text-anchor="middle" class="g">차수·지반개량</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[차수]]·지반개량', '협소·경사 시공', '균질 고결체'] },
    { h: '유의사항', k: ['Slime 다량', '지반 융기·변형', '분사압 {{20MPa}}'] },
    { h: '개선방안', k: ['시험시공 개량경', '인접구조물 계측'] }
  ],
  code: 'J·S·P = Jet·Slime·Pressure(20MPa)'
},
21: {
  one: '이중관 선단 [[Rocket]]으로 [[유도공간]]을 만들고 순결·완결 약액을 [[저압]] 복합주입',
  flow: ['이중관 천공', '유도공간', 'A·B액 저압주입', '단계 상승', '반복'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="30" x2="440" y2="30" class="ln"/>' +
    '<line x1="196" y1="15" x2="196" y2="160" class="ln"/><line x1="204" y1="15" x2="204" y2="160" class="ln"/>' +
    '<path d="M190,160 l20,0 l-10,18 z" class="bx2"/>' +
    '<ellipse cx="200" cy="190" rx="40" ry="22" class="bl dash"/>' +
    '<line x1="240" y1="190" x2="300" y2="190" class="ar"/><line x1="160" y1="190" x2="100" y2="190" class="ar"/>' +
    '<text x="20" y="60" class="s2">단계 상승 ↑</text>' +
    '<text x="215" y="60">이중관 Rod</text>' +
    '<text x="215" y="105" class="r">A액+B액 복합주입</text>' +
    '<text x="120" y="160" class="s2">Rocket</text>' +
    '<text x="310" y="195" class="bl">유도공간</text>' +
    '<text x="20" y="225" class="g">균등 침투</text>' +
    '<text x="200" y="250" text-anchor="middle" class="r">저압 0.3~0.5MPa</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['유도공간 [[균등 침투]]', '저압 → 교란 적음', '순결·완결 복합'] },
    { h: '유의사항', k: ['주입압 {{0.3~0.5MPa}}', 'Gel Time 관리', '용탈·지하수 오염'] },
    { h: '개선방안', k: ['주입이력 자동기록', '융기 계측'] }
  ],
  code: 'S·G·R = 공간(Space)·주입(Grouting)·선단(Rocket)'
},
22: {
  one: '[[물유리]]+[[시멘트 현탁액]]을 [[Manchette Tube]]·Double Packer로 [[저압]] 주입해 공극 충전',
  flow: ['천공·Casing', 'Manchette', 'Seal재·인발', 'Seal 양생', 'Packer 주입'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="40" x2="440" y2="40" class="ln"/>' +
    '<ellipse cx="200" cy="150" rx="100" ry="35" class="gr dash"/>' +
    '<rect x="180" y="40" width="40" height="190" class="bx2"/>' +
    '<line x1="195" y1="40" x2="195" y2="230" class="ln"/><line x1="205" y1="40" x2="205" y2="230" class="ln"/>' +
    '<rect x="190" y="96" width="20" height="8" class="bx3"/><rect x="190" y="146" width="20" height="8" class="bx3"/><rect x="190" y="196" width="20" height="8" class="bx3"/>' +
    '<line x1="210" y1="150" x2="280" y2="150" class="ar"/><line x1="190" y1="150" x2="120" y2="150" class="ar"/>' +
    '<text x="200" y="28" text-anchor="middle" class="b">물유리+시멘트</text>' +
    '<text x="240" y="75">Manchette Tube</text>' +
    '<text x="20" y="100" class="s2">Seal재 (24h 양생)</text>' +
    '<text x="310" y="130" class="r">저압 주입</text>' +
    '<text x="20" y="215" class="g">공극 충전·차수</text>' +
    '<line x1="205" y1="215" x2="230" y2="250" class="ld"/><text x="235" y="262" class="s2">Double Packer</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['물유리+시멘트', 'Manchette 재주입', '시공 간편'] },
    { h: '유의사항', k: ['Seal재 {{24시간}} 양생', '용탈·지하수 오염', '단계별 압력·량'] },
    { h: '품질확인', k: ['{{28일}} 압축강도', '현장투수시험'] }
  ],
  code: 'L.W = 물유리 + 시멘트 / 천·맨·실·양·패'
},
23: {
  one: '흙이 벽에 미치는 [[수평방향 압력]]으로 [[벽체 변위]]에 따라 [[정지]]·[[주동]]·[[수동]]토압',
  flow: ['지반조사 γ·c·φ', '토압 산정', '부재 응력', '단면 검토', '계측 관리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="230" x2="460" y2="230" class="ln"/><line x1="240" y1="230" x2="240" y2="30" class="ln"/>' +
    '<path d="M60,200 C150,198 200,170 240,150 C290,125 360,60 440,50" class="bl"/>' +
    '<circle cx="60" cy="200" r="5" class="rf"/><circle cx="240" cy="150" r="5" class="dotf"/><circle cx="440" cy="50" r="5" class="rf"/>' +
    '<text x="40" y="40" class="r">Pp > Po > Pa</text>' +
    '<text x="248" y="42" class="s2">토압 P</text>' +
    '<text x="40" y="120" class="b">K0 = 1 − sinφ</text>' +
    '<text x="60" y="180" class="r">주동 Pa</text>' +
    '<text x="250" y="175">정지 Po</text>' +
    '<text x="440" y="82" text-anchor="end" class="r">수동 Pp</text>' +
    '<text x="240" y="252" text-anchor="middle" class="s2">변위 0</text>' +
    '</svg>',
  heads: [
    { h: '토압 종류', k: ['정지 K0=1-sinφ', '주동 Ka', 'Pp > Po > Pa'] },
    { h: '영향요인', k: ['상재하중·수압', '벽체 변위', '뒤채움·배수 불량'] },
    { h: '대책', k: ['토압계·경사계', '배수·수위 저하'] }
  ],
  code: '수 > 정 > 주 (수정주) / K0 = 1-sinφ'
},
24: {
  one: '[[전자기파]]를 쏘아 [[유전율 차]] 경계의 반사파로 지하 단면을 영상화하는 [[비파괴 탐사]]',
  flow: ['전자기파 송신', '경계면 반사', '수신·처리', '영상화·판정', '정밀조사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="70" x2="310" y2="70" class="ln"/>' +
    '<rect x="180" y="42" width="80" height="26" class="bx2"/>' +
    '<line x1="205" y1="70" x2="205" y2="150" class="ar"/><line x1="235" y1="150" x2="235" y2="74" class="ar"/>' +
    '<circle cx="220" cy="170" r="16" class="ln"/>' +
    '<rect x="330" y="100" width="130" height="110" class="bx"/>' +
    '<path d="M340,200 Q395,100 450,200" class="rd"/>' +
    '<text x="180" y="30">GPR 안테나</text>' +
    '<text x="90" y="120" class="bl">전자기파</text>' +
    '<text x="245" y="125" class="s2">유전율 차 반사</text>' +
    '<text x="130" y="212">매설관·공동</text>' +
    '<text x="395" y="240" text-anchor="middle" class="r">쌍곡선 = 대상물</text>' +
    '<text x="40" y="265" class="g">비파괴 탐사</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['비파괴·연속', '[[유전율 차]] 반사', '고주파=고해상'] },
    { h: '유의사항', k: ['점토·지하수 [[감쇠]]', '전파 간섭', '주파수 선정'] },
    { h: '적용방안', k: ['3D 차량형 GPR', '지하안전지도 연계'] }
  ],
  code: 'G·P·R = 땅(Ground)·뚫고(Penetrating)·전파(Radar)'
},
26: {
  one: '[[연약 점토층]]이 [[압밀침하]]해 말뚝보다 더 내려갈 때 [[중립점]] 위 주면에 아래로 작용하는 마찰력',
  flow: ['성토·수위저하', '연약층 압밀', '지반침하 > 말뚝', '하향 마찰 Pn'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="400" height="20" class="bx3"/>' +
    '<rect x="40" y="60" width="400" height="110" class="soil"/>' +
    '<rect x="40" y="170" width="400" height="90" class="bx2"/>' +
    '<rect x="220" y="30" width="30" height="220" class="conc"/>' +
    '<line x1="205" y1="75" x2="205" y2="120" class="ar"/><line x1="265" y1="75" x2="265" y2="120" class="ar"/>' +
    '<line x1="120" y1="140" x2="350" y2="140" class="rd dash"/>' +
    '<line x1="205" y1="235" x2="205" y2="190" class="ar"/><line x1="265" y1="235" x2="265" y2="190" class="ar"/>' +
    '<text x="60" y="55" class="s2">성토 하중</text>' +
    '<text x="40" y="100" class="s2">연약 점토 (압밀침하)</text>' +
    '<text x="280" y="100" class="r">부마찰력 Pn ↓</text>' +
    '<text x="360" y="145" class="r">중립점</text>' +
    '<text x="280" y="215" class="g">정마찰력 ↑</text>' +
    '<text x="60" y="230" class="s2">지지층</text>' +
    '</svg>',
  heads: [
    { h: '발생원인', k: ['[[압밀침하]] > 말뚝', '[[중립점]] 상부', '성토·수위저하'] },
    { h: '피해', k: ['[[지지력 감소]]·파손', '[[부등침하]]·균열'] },
    { h: '대책', k: ['[[SL Pile]] 역청', '이중관·Preloading'] }
  ],
  code: '압중성 지파부 SL이중'
},
27: {
  one: '[[팽이형]] 콘크리트 말뚝을 깔고 [[쇄석]] 충전·[[연결철근]]으로 일체화해 하중 분산하는 얕은기초 보강',
  flow: ['지반 고르기', '위치 측량', 'Top base 안착', '쇄석 충전', '철근·타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="120" y1="20" x2="120" y2="66" class="ar"/><line x1="280" y1="20" x2="280" y2="66" class="ar"/>' +
    '<rect x="50" y="70" width="300" height="40" class="conc"/>' +
    '<rect x="50" y="110" width="300" height="50" class="bx3"/>' +
    '<path d="M55,115 l70,0 l-25,35 l-20,0 z" class="bx2"/><path d="M130,115 l70,0 l-25,35 l-20,0 z" class="bx2"/><path d="M205,115 l70,0 l-25,35 l-20,0 z" class="bx2"/><path d="M280,115 l70,0 l-25,35 l-20,0 z" class="bx2"/>' +
    '<line x1="90" y1="160" x2="60" y2="215" class="ld"/><line x1="315" y1="160" x2="345" y2="215" class="ld"/>' +
    '<text x="200" y="35" text-anchor="middle" class="b">하중</text>' +
    '<text x="365" y="95">기초 콘크리트</text>' +
    '<text x="365" y="130" class="bl">Top base</text>' +
    '<text x="365" y="160">쇄석 충전</text>' +
    '<text x="200" y="240" text-anchor="middle" class="r">응력분산 45°</text>' +
    '<text x="365" y="240" class="g">부등침하 저감</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['팽이형 기성품', '[[응력분산]]·지지력', '부등침하 저감'] },
    { h: '유의사항', k: ['[[쇄석 채움]]·다짐', '연결철근 Level'] },
    { h: '개선방안', k: ['얕은기초 대안', '공기단축·경제성'] }
  ],
  code: '팽응부 쇄연 얕공'
},
28: {
  one: '내측 Auger와 외측 [[Casing]]을 [[역방향 회전]]해 동시 천공, [[근고정액]] 주입 후 말뚝 삽입·[[경타]]',
  flow: ['중심측량', 'DRA 동시천공', '근고정액 주입', '삽입·인발', '경타·두부정리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="40" x2="460" y2="40" class="ln"/>' +
    '<rect x="40" y="220" width="400" height="40" class="bx3"/>' +
    '<rect x="200" y="25" width="80" height="195" class="bx2"/>' +
    '<line x1="240" y1="20" x2="240" y2="220" class="ln"/>' +
    '<path d="M210,60 L270,80 M210,100 L270,120 M210,140 L270,160 M210,180 L270,200" class="ln"/>' +
    '<text x="40" y="70" class="t">동시 천공</text>' +
    '<text x="40" y="120" class="bl">경타 → 안착</text>' +
    '<text x="290" y="75">외측 Casing (역회전)</text>' +
    '<text x="290" y="130">내측 Auger</text>' +
    '<text x="290" y="200" class="r">근고정액 주입</text>' +
    '<text x="60" y="245" class="s2">지지층</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['내·외 [[역회전]]', 'Casing 붕괴방지', '수직도·저소음'] },
    { h: '유의사항', k: ['[[근고정액]] 주입량', '최종 [[경타]] 확인'] },
    { h: '개선방안', k: ['천공 자동기록', '[[PDA]] 동재하'] }
  ],
  code: '역케수 근경 자PDA'
},
29: {
  one: '본공사 전 [[시항타]]로 [[EOID]]·[[Restrike]] 지지력 확인, [[말뚝길이]]·관입량 기준 결정',
  flow: ['대표위치 선정', '연속 시항타', '관입량 측정', 'PDA 시험', '기준 결정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="90" width="400" height="150" class="soil"/>' +
    '<rect x="200" y="20" width="50" height="30" class="bx3"/>' +
    '<rect x="215" y="50" width="20" height="170" class="conc"/>' +
    '<text x="265" y="40">Hammer 낙하고</text>' +
    '<text x="265" y="110" class="r">관입량·Rebound</text>' +
    '<text x="20" y="75" class="bl">EOID·Restrike</text>' +
    '<text x="265" y="170">말뚝길이 결정</text>' +
    '<text x="50" y="205" class="s2">1,500m² 2본</text>' +
    '<text x="50" y="228" class="s2">3,000m² 3본</text>' +
    '</svg>',
  heads: [
    { h: '목적·기준', k: ['본공사 전 [[시항타]]', '길이·[[관입량]] 결정', 'Hammer 적정성'] },
    { h: '유의사항', k: ['대표 위치 선정', '연속 타격'] },
    { h: '개선방안', k: ['[[동재하시험]] 병행', '최종 관입량 확정'] }
  ],
  code: '시관장 대연 동최'
},
30: {
  one: '최종 타격 시 말뚝 용지에 궤적을 그려 [[관입량 S]]·[[Rebound K]] 측정, [[Hiley 공식]]으로 지지력 확인',
  flow: ['용지 부착', '기준대 고정', '연필 이동·타격', 'S·K 측정', 'Hiley 산정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="290" y="36" width="150" height="10" class="bx3"/>' +
    '<rect x="180" y="40" width="60" height="190" class="conc"/>' +
    '<rect x="150" y="80" width="120" height="110" class="bx"/>' +
    '<path d="M160,110 L195,110 L205,170 L215,140 L260,140" class="rd"/>' +
    '<text x="20" y="30" class="t">Rebound Check</text>' +
    '<text x="290" y="28" class="s2">기준대(각재) 고정</text>' +
    '<text x="285" y="130" class="r">S = 관입량</text>' +
    '<text x="285" y="170" class="bl">K = Rebound</text>' +
    '<text x="100" y="210" class="s2">용지</text>' +
    '<text x="240" y="260" text-anchor="middle" class="b">Hiley 공식 → 지지력</text>' +
    '</svg>',
  heads: [
    { h: '측정항목', k: ['최종 관입량 S', 'Rebound량 K', 'Hiley 지지력'] },
    { h: '유의사항', k: ['기준대 고정', '타격 {{10회}} 평균'] },
    { h: '개선방안', k: ['[[PDA]] 병행', '디지털 계측'] }
  ],
  code: '관리하 고평 PD디'
},
31: {
  one: '공내수위를 지하수위보다 {{2m↑}} 높여 [[정수압]]으로 공벽 보호, [[역순환]]으로 배토하는 대구경 말뚝',
  flow: ['Stand Pipe', '회전굴착·역순환', 'Slime 제거', '철근망 건입', 'Tremie 타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="40" x2="460" y2="40" class="ln"/>' +
    '<rect x="190" y="40" width="100" height="200" class="bx2"/>' +
    '<rect x="186" y="30" width="108" height="50" class="bx3"/>' +
    '<line x1="40" y1="100" x2="186" y2="100" class="bl dash"/><line x1="294" y1="100" x2="440" y2="100" class="bl dash"/>' +
    '<line x1="240" y1="10" x2="240" y2="225" class="ln"/>' +
    '<path d="M220,225 l40,0 l-20,15 z" class="dotf"/>' +
    '<line x1="252" y1="210" x2="252" y2="120" class="ar"/>' +
    '<text x="300" y="55">Stand Pipe</text>' +
    '<text x="300" y="92" class="r">수위차 2m↑</text>' +
    '<text x="40" y="94" class="s2">지하수위</text>' +
    '<text x="300" y="160" class="bl">역순환 배토 ↑</text>' +
    '<text x="20" y="170">정수압 공벽보호</text>' +
    '<text x="300" y="235" class="s2">회전 Bit</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[정수압]] 공벽보호', '[[역순환]] 배토', '대구경·대심도'] },
    { h: '유의사항', k: ['수위 유지·수직도', 'Slime·Koden'] },
    { h: '개선방안', k: ['Tremie {{2m}}↑ 매입', '[[건전도 시험]]'] }
  ],
  code: '정역대 수슬 트건'
},
32: {
  one: 'Casing 안 [[DTH Hammer]]로 [[타격+회전]] 굴착하며 [[강관]]을 [[암반]]까지 동시 근입하는 매입말뚝',
  flow: ['강관 세우기', '타격·회전 굴착', 'Rock Socket', 'Hammer 인양', '콘크리트 충전'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="230" height="130" class="soil"/>' +
    '<rect x="40" y="170" width="230" height="90" class="bx3"/>' +
    '<rect x="200" y="20" width="60" height="225" class="bx"/>' +
    '<rect x="212" y="205" width="36" height="30" class="bx2"/>' +
    '<line x1="230" y1="195" x2="230" y2="60" class="ar"/>' +
    '<text x="20" y="30" class="bl">압축공기 배토 ↑</text>' +
    '<text x="60" y="110" class="s2">토사</text>' +
    '<text x="60" y="200" class="s2">암반</text>' +
    '<text x="275" y="70">강관 Casing</text>' +
    '<text x="275" y="215" class="r">DTH Hammer (타격+회전)</text>' +
    '<text x="275" y="250" class="b">Rock Socket 근입</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[DTH Hammer]] 타격', '강관 동시 관입', '경암 근입 확실'] },
    { h: '유의사항', k: ['Slime·Cutting 배출', '수직도·이음 용접'] },
    { h: '개선방안', k: ['방음 Cover', 'Rock Socket 확인'] }
  ],
  code: 'DT강암 슬수 방락'
},
33: {
  one: '{{Ø300mm 이하}}로 천공해 [[강봉·강관]]을 넣고 [[가압 Grouting]], [[주면마찰]]로 지지하는 소구경 말뚝',
  flow: ['천공(Casing)', '강봉 삽입', '1차 Grout', '가압 2차', '두부정착'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="40" width="200" height="50" class="conc"/>' +
    '<line x1="170" y1="90" x2="130" y2="250" class="ln"/><line x1="240" y1="90" x2="240" y2="250" class="ln"/><line x1="310" y1="90" x2="350" y2="250" class="ln"/>' +
    '<rect x="232" y="160" width="16" height="90" class="bx3"/>' +
    '<line x1="258" y1="220" x2="258" y2="180" class="ar"/>' +
    '<text x="240" y="72" text-anchor="middle" class="t">기존 기초</text>' +
    '<text x="360" y="125" class="r">Ø300mm 이하</text>' +
    '<text x="20" y="150">가압 Grout</text>' +
    '<text x="360" y="205" class="g">주면마찰 지지</text>' +
    '<text x="20" y="215" class="s2">소구경 말뚝</text>' +
    '<text x="240" y="272" text-anchor="middle" class="bl">Underpinning·부력</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['{{Ø300mm}}↓ 소구경', '[[주면마찰]] 지지', '협소·저공고'] },
    { h: '유의사항', k: ['가압·충전 확인', '강재 [[부식]] 방지'] },
    { h: '개선방안', k: ['Underpinning·부력', '[[재하시험]] 확인'] }
  ],
  code: '소주협 가부 언재'
},
34: {
  one: '[[검측관]] 사이 초음파 [[전파속도 V=S/T]] 감소율로 말뚝 내부 결함을 판정하는 [[CSL]] 시험',
  flow: ['검측관 설치', '물 채움', 'Probe 동시인상', '전파시간 측정', 'A~D 판정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="30" width="200" height="220" class="conc"/>' +
    '<line x1="170" y1="20" x2="170" y2="245" class="ln"/><line x1="310" y1="20" x2="310" y2="245" class="ln"/>' +
    '<rect x="164" y="140" width="12" height="16" class="dotf"/><rect x="304" y="140" width="12" height="16" class="dotf"/>' +
    '<line x1="178" y1="148" x2="300" y2="148" class="ar"/>' +
    '<ellipse cx="240" cy="210" rx="30" ry="12" class="rd dash"/>' +
    '<line x1="312" y1="45" x2="345" y2="45" class="ld"/><text x="350" y="50" class="s2">검측관</text>' +
    '<text x="100" y="152" class="s2">송신</text>' +
    '<text x="350" y="152" class="s2">수신</text>' +
    '<text x="240" y="130" text-anchor="middle" class="r">V = S / T</text>' +
    '<text x="350" y="215" class="r">결함 → 속도 감소</text>' +
    '<text x="240" y="272" text-anchor="middle" class="g">A등급: 감소 10% 이내</text>' +
    '</svg>',
  heads: [
    { h: '원리·판정', k: ['[[CSL]] 공대공', '속도 [[V=S/T]]', '[[A~D 등급]]'] },
    { h: '유의사항', k: ['검측관 수직·수밀', '관내 물 채움'] },
    { h: '결함 대책', k: ['Core·보강 Grout', '저변형률 PIT'] }
  ],
  code: '공속등 수물 코핏'
},
35: {
  one: '말뚝 [[평형점]]의 [[O-Cell]]을 가압해 상향 [[주면마찰력]]과 하향 [[선단지지력]]을 서로 반력으로 측정',
  flow: ['O-Cell 설치', '타설·양생', '단계 가압', '상·하 변위', '등가곡선 환산'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="200" y="30" width="80" height="220" class="conc"/>' +
    '<rect x="195" y="172" width="90" height="16" class="bx3"/>' +
    '<line x1="240" y1="165" x2="240" y2="90" class="ar"/><line x1="240" y1="195" x2="240" y2="240" class="ar"/>' +
    '<text x="240" y="22" text-anchor="middle" class="t">양방향 재하</text>' +
    '<text x="20" y="45" class="g">반력장치 불필요</text>' +
    '<text x="300" y="100" class="bl">상향 주면마찰력</text>' +
    '<text x="120" y="185" class="s2">평형점</text>' +
    '<text x="300" y="185" class="r">O-Cell (Jack)</text>' +
    '<text x="300" y="245" class="bl">하향 선단지지력</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['선단부 [[O-Cell]]', '[[양방향 재하]]', '반력장치 불필요'] },
    { h: '유의사항', k: ['[[평형점]] 설계', '유압관·Telltale'] },
    { h: '개선방안', k: ['등가 하중-침하곡선', '대구경·고하중'] }
  ],
  code: 'O양반 평보 등대'
},
36: {
  one: '[[부력]] {{B=γw·V}}, 기초 저면 [[양압력]] {{U=γw·h}} — 자중보다 크면 [[부상]] 발생',
  flow: ['설계수위 산정', '부력 계산', 'W ≥ 1.25B', '공법 선정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="60" x2="460" y2="60" class="bl dash"/>' +
    '<rect x="140" y="40" width="200" height="150" class="conc"/>' +
    '<line x1="240" y1="70" x2="240" y2="140" class="ar"/>' +
    '<line x1="180" y1="250" x2="180" y2="195" class="ar"/><line x1="240" y1="250" x2="240" y2="195" class="ar"/><line x1="300" y1="250" x2="300" y2="195" class="ar"/>' +
    '<text x="350" y="52" class="bl">지하수위 ▽</text>' +
    '<text x="250" y="110" class="b">W (자중)</text>' +
    '<text x="350" y="125" class="g">W ≥ 1.25B</text>' +
    '<text x="20" y="150" class="r">부력 B = γw·V</text>' +
    '<text x="350" y="175" class="s2">피압수·우기</text>' +
    '<text x="240" y="272" text-anchor="middle" class="r">양압력 U = γw·h</text>' +
    '</svg>',
  heads: [
    { h: '검토기준', k: ['부력 B=γw·V', '양압력 U=γw·h', '[[W ≥ 1.25B]]'] },
    { h: '문제점', k: ['피압수·수위상승', 'Slab 균열·누수'] },
    { h: '대책', k: ['순응: [[영구배수]]', '대응: [[Rock Anchor]]'] }
  ],
  code: 'BUW 피균 순대'
},
37: {
  one: '[[영구배수]]로 수압을 낮추는 [[순응공법]]과 [[Rock Anchor]]·자중증대로 버티는 [[대응공법]]',
  flow: ['수위 조사', 'W ≥ 1.25B', '공법 비교', '시공', '수위 계측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="360" height="110" class="conc"/>' +
    '<line x1="240" y1="32" x2="240" y2="260" class="ln2 dash"/>' +
    '<rect x="60" y="150" width="180" height="14" class="bx2"/><rect x="90" y="150" width="30" height="40" class="bx3"/>' +
    '<line x1="160" y1="220" x2="160" y2="170" class="ar"/><line x1="210" y1="220" x2="210" y2="170" class="ar"/>' +
    '<line x1="290" y1="150" x2="290" y2="250" class="rd"/><line x1="370" y1="150" x2="370" y2="250" class="rd"/>' +
    '<rect x="284" y="210" width="12" height="40" class="bx3"/><rect x="364" y="210" width="12" height="40" class="bx3"/>' +
    '<text x="240" y="25" text-anchor="middle" class="r">W ≥ 1.25B</text>' +
    '<text x="150" y="95" text-anchor="middle" class="t">순응공법</text>' +
    '<text x="330" y="95" text-anchor="middle" class="t">대응공법</text>' +
    '<text x="330" y="125" text-anchor="middle" class="s2">자중증대</text>' +
    '<text x="40" y="242" class="bl">영구배수·집수정</text>' +
    '<text x="330" y="272" text-anchor="middle" class="r">Rock Anchor</text>' +
    '</svg>',
  heads: [
    { h: '공법 분류', k: ['순응: 영구배수', '대응: Rock Anchor', '대응: 자중·Bracket'] },
    { h: '유의사항', k: ['[[설계지하수위]]', '강제배수 유지'] },
    { h: '개선방안', k: ['수위 [[계측관리]]', '복합공법 비교'] }
  ],
  code: '브라자는 인접건물 지하 M마트 맹자'
},
38: {
  one: '[[암반]]까지 천공해 [[PS Strand]] 정착장을 Grouting 후 긴장·정착, 인장저항으로 [[부력]]에 대응',
  flow: ['암반 천공', 'Strand 삽입', '정착장 Grout', '긴장·정착', '두부 방수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="360" height="40" class="conc"/>' +
    '<rect x="60" y="80" width="360" height="80" class="soil"/>' +
    '<rect x="60" y="160" width="360" height="100" class="bx3"/>' +
    '<line x1="240" y1="35" x2="240" y2="250" class="ln"/>' +
    '<rect x="232" y="170" width="16" height="80" class="bx2"/>' +
    '<rect x="225" y="30" width="30" height="10" class="dotf"/>' +
    '<line x1="120" y1="140" x2="120" y2="90" class="ar"/><line x1="360" y1="140" x2="360" y2="90" class="ar"/>' +
    '<text x="20" y="25">PS Strand 긴장</text>' +
    '<text x="270" y="25" class="r">두부 방수</text>' +
    '<text x="130" y="125" class="bl">부력</text>' +
    '<text x="255" y="130">자유장</text>' +
    '<text x="255" y="215" class="r">정착장 (Grout)</text>' +
    '<text x="70" y="245" class="s2">암반</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[자유장]]+[[정착장]]', 'Strand 인장 저항', '[[부력]] 대응'] },
    { h: '유의사항', k: ['두부 [[방수]] 상세', 'Strand [[부식]] 방지'] },
    { h: '개선방안', k: ['[[인장시험]] 확인', 'Load Cell 계측'] }
  ],
  code: '자정부 방부 인로'
},
39: {
  one: '기초 하부 [[Drain Mat]]·[[Trench]]로 지하수를 [[집수정]]에 모아 Pump 배출, [[양압력]] 영구 저감',
  flow: ['바닥 정리', '집수정', '유공관 Trench', 'Drain Mat', '타설·Pump'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="360" height="50" class="conc"/>' +
    '<rect x="40" y="90" width="360" height="14" class="bx2"/>' +
    '<rect x="145" y="104" width="30" height="20" class="bx3"/><rect x="295" y="104" width="30" height="20" class="bx3"/>' +
    '<rect x="400" y="60" width="40" height="90" class="bx3"/>' +
    '<line x1="420" y1="60" x2="420" y2="15" class="ar"/>' +
    '<line x1="100" y1="210" x2="100" y2="110" class="ar"/><line x1="240" y1="210" x2="240" y2="110" class="ar"/><line x1="360" y1="210" x2="360" y2="110" class="ar"/>' +
    '<text x="410" y="30" text-anchor="end" class="r">Pump 배출</text>' +
    '<text x="220" y="70" text-anchor="middle" class="g">양압력 저감</text>' +
    '<text x="110" y="140" class="s2">Drain Mat</text>' +
    '<text x="395" y="170" class="s2">집수정</text>' +
    '<text x="120" y="240" class="bl">지하수 유입 ↑</text>' +
    '<text x="280" y="268" class="s2">Clogging 방지</text>' +
    '</svg>',
  heads: [
    { h: '구성·특징', k: ['Drain Mat·Trench', '집수정·Pump', '기초두께 절감'] },
    { h: '유의사항', k: ['[[Clogging]] 방지', 'Pump 고장 대비'] },
    { h: '개선방안', k: ['[[상수위 조절]]', '수위 Sensor'] }
  ],
  code: '드집절 클펌 상센'
},
40: {
  one: '기존 건물 기초가 불안정할 때 [[바로받이]]·[[보받이]]·[[약액주입]] 등으로 하중을 새 지지층에 전달',
  flow: ['사전조사', '준비공사', '가받이', '본받이', '철거·복구'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="30" width="150" height="110" class="bx"/>' +
    '<rect x="60" y="140" width="110" height="20" class="conc"/>' +
    '<rect x="100" y="160" width="30" height="90" class="bx3"/>' +
    '<line x1="160" y1="50" x2="160" y2="130" class="ar"/>' +
    '<rect x="230" y="40" width="10" height="220" class="conc"/>' +
    '<line x1="40" y1="250" x2="460" y2="250" class="ln2"/>' +
    '<text x="95" y="90" text-anchor="middle" class="t">기존 건물</text>' +
    '<text x="140" y="210" class="r">바로받이</text>' +
    '<text x="255" y="65" class="bl">계측 관리</text>' +
    '<text x="255" y="125">신설 터파기</text>' +
    '<text x="255" y="240" class="g">새 지지층</text>' +
    '<text x="240" y="275" text-anchor="middle" class="s2">보받이·바닥판받이·약액주입</text>' +
    '</svg>',
  heads: [
    { h: '종류', k: ['[[가받이]] → 본받이', '바로받이·보받이', '바닥판·[[약액주입]]'] },
    { h: '유의사항', k: ['기존건물 [[계측]]', '구간 분할 시공'] },
    { h: '개선방안', k: ['[[Micro Pile]] 보강', 'JSP·LW 주입'] }
  ],
  code: '사준가본 철복 / 바보는 바닥에서 약을 먹는다'
}
});
