// 간단 요약(한눈에·따라 그리기) — 디테일원 용어250 143~157 (근거: data/dw_g.js) — 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
143: {
  one: '고층건물 [[실내외 온도차]]→[[밀도차]]로 [[중성대]] 아래는 외기 유입, 위는 실내공기 유출되는 수직기류',
  flow: ['온도차', '밀도차', '압력차', '수직기류'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="10" y="20" class="s2">동절기: 외기 차고 실내 따뜻</text>' +
    '<rect x="60" y="240" width="240" height="10" class="soil"/>' +
    '<rect x="120" y="30" width="120" height="210" class="bx"/>' +
    '<rect x="165" y="30" width="30" height="210" class="bx3"/>' +
    '<line x1="180" y1="228" x2="180" y2="44" class="ar"/><text x="202" y="112" class="n">②</text>' +
    '<line x1="90" y1="135" x2="280" y2="135" class="ln dash"/>' +
    '<text x="290" y="140" class="b">중성대(NPL)</text>' +
    '<line x1="240" y1="60" x2="280" y2="60" class="ar"/><line x1="120" y1="60" x2="80" y2="60" class="ar"/>' +
    '<text x="290" y="65" class="r">상층 유출</text><text x="370" y="67" class="n">③</text>' +
    '<line x1="80" y1="215" x2="118" y2="215" class="ar"/><line x1="280" y1="215" x2="242" y2="215" class="ar"/>' +
    '<text x="290" y="220" class="bl">저층 유입</text><text x="370" y="222" class="n">①</text>' +
    '<text x="330" y="105" class="r">ΔP ∝ h·Δt</text>' +
    '<text x="180" y="272" text-anchor="middle" class="bl">승강로 상승기류</text>' +
    '</svg>',
  heads: [
    { h: '원리', k: ['[[중성대]] 기준 압력분포', '동절기 상승·하절기 하강', '높이·온도차 비례'] },
    { h: '문제점', k: ['E/V 문 오작동', '출입문 개폐 곤란', '연기 확산·난방손실'] },
    { h: '대책', k: ['[[방풍실]]·회전문', '승강로 기밀·Zoning', '계단실 가압'] }
  ],
  code: '온·밀·압 → 대책 “방·기·가” (방풍실·기밀·가압)',
  read: '①겨울 저층에서 외기 유입 → ②따뜻한 공기가 승강로로 상승 → ③중성대 위 상층에서 유출'
},
144: {
  one: '[[Core]]와 [[외주기둥]]을 [[Outrigger]]로 잇고 [[Belt truss]]로 묶어 외주기둥 축력으로 횡변위 감소',
  flow: ['횡력', 'Core 휨', '팔로 구속', '기둥 축력', '변위 감소'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="250" width="320" height="10" class="soil"/>' +
    '<line x1="100" y1="30" x2="100" y2="250" class="ln"/><line x1="300" y1="30" x2="300" y2="250" class="ln"/>' +
    '<rect x="170" y="30" width="60" height="220" class="bx3"/>' +
    '<text x="200" y="210" text-anchor="middle" class="t">Core</text>' +
    '<line x1="100" y1="120" x2="170" y2="120" class="bl"/><line x1="100" y1="145" x2="170" y2="145" class="bl"/><polyline points="100,145 135,120 170,145" fill="none" class="bl"/>' +
    '<line x1="230" y1="120" x2="300" y2="120" class="bl"/><line x1="230" y1="145" x2="300" y2="145" class="bl"/><polyline points="230,145 265,120 300,145" fill="none" class="bl"/>' +
    '<text x="20" y="40" class="b">풍·지진</text>' +
    '<line x1="20" y1="55" x2="92" y2="55" class="ar"/><line x1="20" y1="85" x2="92" y2="85" class="ar"/><text x="40" y="78" class="n">①</text>' +
    '<text x="125" y="112" class="n">②</text>' +
    '<line x1="290" y1="125" x2="316" y2="116" class="ld"/><text x="320" y="120" class="bl">Outrigger</text>' +
    '<text x="320" y="150" class="s2">Belt truss(외곽 띠)</text>' +
    '<line x1="80" y1="230" x2="80" y2="180" class="ar"/><text x="72" y="210" text-anchor="end" class="r">인장</text>' +
    '<line x1="320" y1="180" x2="320" y2="230" class="ar"/><text x="330" y="215" class="r">압축</text><text x="340" y="190" class="n">③</text>' +
    '<text x="200" y="274" text-anchor="middle" class="s2">높이 1/3~2/3 · 1~2개층</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['Core 모멘트 감소', '외주기둥 축력 활용', '높이 {{1/3~2/3}} 설치'] },
    { h: '시공 시 유의사항', k: ['부등축소 → [[지연접합]]', '후조임·장공 볼트', '대형부재 양중'] },
    { h: '개선방안', k: ['Damper 삽입', 'BIM 가조립·계측'] }
  ],
  code: '아·벨 = 팔·띠 → 시공 “지·후·양” (지연접합·후조임·양중)',
  read: '①횡력에 Core가 휘려 함 → ②Outrigger 팔이 Core 회전을 구속 → ③외주기둥 인장·압축 축력으로 저항'
},
145: {
  one: '[[강관]] 속에 [[고유동 콘크리트]]를 채워 강관은 [[구속]], 콘크리트는 [[국부좌굴]] 방지하는 합성기둥',
  flow: ['강관 세우기', '하부 압입', 'Overflow', '충전성 검사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="240" width="200" height="10" class="soil"/>' +
    '<rect x="110" y="30" width="70" height="210" class="conc"/>' +
    '<line x1="110" y1="30" x2="110" y2="240" class="ln"/><line x1="180" y1="30" x2="180" y2="240" class="ln"/>' +
    '<line x1="110" y1="130" x2="135" y2="130" class="ln"/><line x1="155" y1="130" x2="180" y2="130" class="ln"/>' +
    '<line x1="145" y1="225" x2="145" y2="45" class="ar"/><text x="152" y="112" class="n">②</text>' +
    '<text x="145" y="22" text-anchor="middle" class="s2">Overflow</text><text x="184" y="26" class="n">③</text>' +
    '<rect x="40" y="205" width="70" height="12" class="bx3"/><line x1="42" y1="211" x2="108" y2="211" class="ar"/>' +
    '<text x="20" y="196" class="s2">압입구(펌프)</text><text x="46" y="238" class="n">①</text>' +
    '<line x1="180" y1="130" x2="200" y2="130" class="ld"/><text x="204" y="135">Diaphragm 공기구멍</text>' +
    '<line x1="150" y1="190" x2="196" y2="214" class="ld"/><text x="200" y="220" class="bl">하→상 연속</text>' +
    '<circle cx="400" cy="70" r="45" class="conc"/><circle cx="400" cy="70" r="45" fill="none" class="ln"/>' +
    '<line x1="400" y1="70" x2="400" y2="33" class="ar"/><line x1="400" y1="70" x2="437" y2="70" class="ar"/><line x1="400" y1="70" x2="363" y2="70" class="ar"/>' +
    '<text x="390" y="160" text-anchor="middle" class="r">구속 ↔ 좌굴방지</text>' +
    '<text x="240" y="270" text-anchor="middle" class="s2">타격음·초음파 검사</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['강관 구속 → 강도↑', '거푸집 생략·공기단축', '단면 축소·내화'] },
    { h: '시공 시 유의사항', k: ['하부→상부 연속 압입', 'Diaphragm 공기구멍', '타격음·초음파 확인'] },
    { h: '개선방안', k: ['저Bleeding 배합', '압입압·측압 계측'] }
  ],
  code: 'CFT = 구·좌 → 시공 “압·공·타” (압입·공기구멍·타격음)',
  read: '①하부 압입구로 콘크리트를 펌프 압입 → ②아래에서 위로 연속 충전 → ③상단 Overflow로 충전 확인'
},
146: {
  one: '상·하부 [[수직부재 불일치]]층에서 상부 하중을 하부 [[대공간]]으로 넘기는 [[전이보·전이판]]',
  flow: ['상부 벽식', '전이보', '하부 기둥', '기초'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="66" y1="16" x2="66" y2="38" class="ar"/><line x1="126" y1="16" x2="126" y2="38" class="ar"/><line x1="186" y1="16" x2="186" y2="38" class="ar"/><line x1="246" y1="16" x2="246" y2="38" class="ar"/><line x1="306" y1="16" x2="306" y2="38" class="ar"/>' +
    '<text x="24" y="40" class="n">①</text>' +
    '<rect x="60" y="40" width="12" height="80" class="bx3"/><rect x="120" y="40" width="12" height="80" class="bx3"/><rect x="180" y="40" width="12" height="80" class="bx3"/><rect x="240" y="40" width="12" height="80" class="bx3"/><rect x="300" y="40" width="12" height="80" class="bx3"/>' +
    '<rect x="40" y="120" width="290" height="40" class="conc"/>' +
    '<text x="185" y="146" text-anchor="middle" class="t">전이보</text><text x="70" y="148" class="n">②</text>' +
    '<rect x="40" y="160" width="18" height="80" class="bx2"/><rect x="312" y="160" width="18" height="80" class="bx2"/><text x="64" y="210" class="n">③</text>' +
    '<line x1="110" y1="160" x2="110" y2="240" class="ln2 dash"/><line x1="185" y1="160" x2="185" y2="240" class="ln2 dash"/><line x1="260" y1="160" x2="260" y2="240" class="ln2 dash"/>' +
    '<rect x="30" y="240" width="310" height="10" class="soil"/>' +
    '<line x1="314" y1="80" x2="340" y2="80" class="ld"/><text x="345" y="85">상부 벽·기둥</text>' +
    '<line x1="330" y1="140" x2="340" y2="140" class="ld"/><text x="345" y="145" class="r">Mass Con 0.8m↑</text>' +
    '<line x1="262" y1="200" x2="340" y2="200" class="ld"/><text x="345" y="205" class="bl">다층 동바리</text>' +
    '<text x="345" y="235" class="s2">하부 기둥</text>' +
    '<text x="185" y="272" text-anchor="middle" class="b">필로티·대공간</text>' +
    '</svg>',
  heads: [
    { h: '구조 특징', k: ['수직부재 불일치층', 'Girder 선·Plate 면', '필로티·대공간'] },
    { h: '시공 시 유의사항', k: ['자중 → [[다층 동바리]]', '수화열 → 온도균열', '철근 과밀 → 충전'] },
    { h: '개선방안', k: ['PT·Steel 전이보', 'Pipe cooling'] }
  ],
  code: '전이 = 불·대 → 시공 “동·수·철” (동바리·수화열·철근과밀)',
  read: '①상부 벽·기둥의 하중이 → ②두꺼운 전이보로 모여 → ③하부 소수 기둥(대공간)으로 전달'
},
147: {
  one: '초고층 기둥·코어가 [[탄성]]·[[Creep]]·[[건조수축]]으로 줄며 생기는 [[부등축소]]를 해석·계측해 보정',
  flow: ['축소량 해석', '보정방안', '시공·측량', '계측', '보정값 재산정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="50" x2="320" y2="50" class="ln2 dash"/>' +
    '<text x="330" y="45" class="s2">설계 Level</text>' +
    '<rect x="80" y="50" width="60" height="190" class="bx3"/>' +
    '<text x="110" y="150" text-anchor="middle" class="t">Core</text>' +
    '<rect x="260" y="80" width="24" height="160" class="bx2"/>' +
    '<text x="294" y="160">외주기둥</text>' +
    '<line x1="140" y1="50" x2="260" y2="80" class="rd"/>' +
    '<text x="150" y="36" class="s2">슬래브 경사·균열</text>' +
    '<line x1="290" y1="50" x2="290" y2="80" class="ar"/><text x="330" y="72" class="r">부등축소 Δ</text><text x="414" y="74" class="n">②</text>' +
    '<rect x="40" y="240" width="300" height="10" class="soil"/>' +
    '<text x="16" y="274" class="n">①</text><text x="40" y="272" class="s2">탄성+Creep+건조수축</text>' +
    '<text x="226" y="274" class="n">③</text><text x="250" y="272" class="bl">Up to·Sub to 보정</text>' +
    '</svg>',
  heads: [
    { h: '원인·보정', k: ['탄성·Creep·수축', '[[상대보정]]·[[절대보정]]', 'Up to·Sub to'] },
    { h: '문제점·유의사항', k: ['슬래브 경사·균열', 'C/W·E/V·배관 손상', '매립 변형률계 계측'] },
    { h: '개선방안', k: ['해석·계측 Feedback', 'Core 선행 조정'] }
  ],
  code: '수시로 보시게~보위를~ → 해석·보정·측량·계측 반복',
  read: '①탄성·Creep·건조수축으로 → ②Core와 외주기둥이 다르게 줄어 슬래브 경사 → ③Up to·Sub to 보정'
},
148: {
  one: 'H형강을 [[응력 분포]]에 맞춰 줄인 [[변단면(Tapered) 부재]]를 공장생산·[[볼트조립]]하는 대공간 철골',
  flow: ['휨M 분석', '변단면 설계', '공장 제작', '현장 볼트조립'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<polyline points="50,240 50,100 240,40 430,100 430,240" fill="none" class="ln"/>' +
    '<polyline points="64,240 82,122 240,56 398,122 416,240" fill="none" class="ln"/>' +
    '<rect x="30" y="240" width="420" height="10" class="soil"/>' +
    '<text x="240" y="28" text-anchor="middle" class="bl">Ridge 춤 작음</text><text x="296" y="30" class="n">②</text>' +
    '<line x1="72" y1="118" x2="96" y2="172" class="ld"/><text x="96" y="190" class="r">Haunch 춤 큼</text><text x="196" y="192" class="n">①</text>' +
    '<text x="240" y="150" text-anchor="middle" class="t">Main frame(변단면)</text>' +
    '<text x="240" y="218" text-anchor="middle" class="g">응력 비례 단면</text><text x="298" y="220" class="n">③</text>' +
    '<text x="200" y="272" text-anchor="middle" class="s2">Purlin·Girt·Bracing</text>' +
    '<text x="440" y="272" text-anchor="end" class="s2">Anchor Bolt</text>' +
    '</svg>',
  heads: [
    { h: '구성·특징', k: ['응력 비례 [[변단면]]', '공장생산·볼트조립', '강재 절감·장스팬'] },
    { h: '시공 시 유의사항', k: ['Anchor 위치·Level', '세우기 가새·전도방지', '고력볼트 조임 순서'] },
    { h: '개선방안', k: ['BIM 자동설계·제작', 'Sandwich Panel'] }
  ],
  code: 'PEB = 변·공·볼 / 구성 M·S·B·S (Main·Secondary·Bracing·Sheeting)',
  read: '①휨M 큰 Haunch는 춤을 크게 → ②Ridge는 춤을 작게 → ③응력 비례 변단면으로 강재 절감'
},
149: {
  one: '[[축소모형]]과 주변 건물을 [[경계층 풍동]]에서 회전 송풍해 [[풍력·풍압·풍환경]] 측정 → 설계 반영',
  flow: ['축소모형', '경계층 재현', 'Turntable 회전', '측정·분석'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="48" class="bl">경계층 풍속분포</text><text x="132" y="50" class="n">①</text>' +
    '<rect x="20" y="60" width="440" height="170" fill="none" class="ln"/>' +
    '<path d="M40,220 C60,200 90,120 112,72" fill="none" class="bl"/>' +
    '<line x1="40" y1="200" x2="62" y2="200" class="ar"/><line x1="40" y1="160" x2="82" y2="160" class="ar"/><line x1="40" y1="110" x2="102" y2="110" class="ar"/>' +
    '<ellipse cx="300" cy="220" rx="90" ry="10" fill="none" class="ln2"/>' +
    '<rect x="285" y="110" width="30" height="110" class="bx3"/>' +
    '<rect x="230" y="180" width="20" height="40" class="bx2"/><rect x="350" y="170" width="22" height="50" class="bx2"/>' +
    '<text x="300" y="100" text-anchor="middle" class="r">축소모형 1/500</text><text x="358" y="102" class="n">②</text>' +
    '<text x="400" y="150" text-anchor="middle" class="s2">주변 건물 재현</text>' +
    '<text x="300" y="255" text-anchor="middle" class="s2">Turntable 360°</text><text x="356" y="258" class="n">③</text>' +
    '<text x="240" y="276" text-anchor="middle" class="b">풍력·풍압·풍환경</text>' +
    '</svg>',
  heads: [
    { h: '시험 종류', k: ['풍력 → 구조 풍하중', '풍압 → C/W 설계풍압', '풍환경 → 빌딩풍'] },
    { h: '시험 시 유의사항', k: ['주변 지형·건물 재현', '경계층·노풍도 일치', '공진·와류진동 검토'] },
    { h: '개선방안', k: ['CFD 해석 병행', 'TMD·형상 최적화'] }
  ],
  code: '풍동 = 력·압·환 → 설계 풍동 / 시공 전 Mock-up / 시공 중 Field',
  read: '①높을수록 빠른 경계층 바람 재현 → ②주변 건물 포함 축소모형 → ③Turntable 돌리며 풍력·풍압 측정'
},
150: {
  one: '실물대 [[커튼월 시험체]]를 [[압력상자]]에 설치해 기밀·수밀·구조·층간변위 성능을 [[시공 전]] 검증',
  flow: ['예비', '기밀', '정압·동압수밀', '구조성능', '층간변위'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="30" class="s2">압력상자(Chamber)</text>' +
    '<text x="300" y="30" class="r">살수 3.4L/㎡·min</text>' +
    '<rect x="40" y="60" width="60" height="180" class="bx2"/><text x="60" y="156" class="n">①</text>' +
    '<rect x="100" y="40" width="180" height="200" fill="none" class="ln"/>' +
    '<line x1="160" y1="40" x2="160" y2="240" class="ln2"/><line x1="220" y1="40" x2="220" y2="240" class="ln2"/><line x1="100" y1="140" x2="280" y2="140" class="ln2"/>' +
    '<text x="190" y="100" text-anchor="middle" class="t">시험체</text>' +
    '<line x1="365" y1="80" x2="290" y2="80" class="ar"/><line x1="365" y1="140" x2="290" y2="140" class="ar"/><line x1="365" y1="200" x2="290" y2="200" class="ar"/>' +
    '<text x="374" y="146" class="n">②</text>' +
    '<text x="278" y="272" class="n">③</text><text x="300" y="270" class="s2">불합격 → 개선·재시험</text>' +
    '<text x="20" y="258" class="s2">가압 → 설계풍압</text>' +
    '<text x="190" y="270" text-anchor="middle" class="b">3 Span × 2 Story</text>' +
    '</svg>',
  heads: [
    { h: '시험 항목·기준', k: ['예비·기밀·수밀', '구조·층간변위', '살수 {{3.4L/㎡·min}}'] },
    { h: '시험 시 유의사항', k: ['실제 자재·공법 동일', '불합격 → 개선 재시험', '입회·기록 보관'] },
    { h: '개선방안', k: ['시공 전 조기 실시', 'Field test 연계'] }
  ],
  code: '예비군은 기밀하게 정동구층에서 시험한다 (예·기·정·동·구·층)',
  read: '①압력상자로 설계풍압 가압 → ②3.4L/㎡·min 살수 → ③시험체 누수·변형 확인, 불합격 시 개선'
},
151: {
  one: '[[시공 중]] 설치된 실제 커튼월에 [[노즐 살수]]·[[Chamber 가압]]으로 수밀·기밀을 확인해 조기 보완',
  flow: ['부위 선정', 'Chamber 설치', '기밀·수밀', '분석', '보완·재시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="60" y="30" class="b">시공 중 실제 부위</text>' +
    '<line x1="60" y1="60" x2="300" y2="60" class="ln"/><line x1="60" y1="150" x2="300" y2="150" class="ln"/><line x1="60" y1="240" x2="300" y2="240" class="ln"/>' +
    '<line x1="300" y1="40" x2="300" y2="250" class="bl"/>' +
    '<text x="310" y="52" class="bl">커튼월</text>' +
    '<rect x="210" y="152" width="88" height="86" fill="none" class="rd dash"/><text x="244" y="202" class="n">①</text>' +
    '<rect x="420" y="112" width="30" height="16" class="bx3"/><line x1="420" y1="120" x2="310" y2="120" class="ar"/><text x="426" y="152" class="n">②</text>' +
    '<text x="330" y="86" class="s2">노즐 살수</text><text x="330" y="104" class="s2">AAMA 501.2</text>' +
    '<text x="330" y="196" class="r">초기 설치분</text>' +
    '<text x="314" y="238" class="n">③</text><text x="338" y="236">누수 → 보완</text>' +
    '<text x="60" y="272" class="s2">Chamber 가압 E1105</text>' +
    '</svg>',
  heads: [
    { h: '시험 방법·기준', k: ['시공 중 실제 부위', '수밀·기밀 확인', '최종: 공정률 {{90%}}↑'] },
    { h: '시험 시 유의사항', k: ['Sealant 양생 후', '내부 마감 전 시험', '누수 원인 추적'] },
    { h: '개선방안', k: ['결과 → 전체 보완', '정기 유지관리 시험'] }
  ],
  code: '시험 3단계 = 설계 풍동 → 시공 전 Mock-up → 시공 중 Field',
  read: '①시공 중 초기 설치분을 골라 → ②노즐 살수·Chamber 가압 → ③누수 원인 찾아 전체에 보완'
},
152: {
  one: '커튼월을 구조체 [[Anchor]]에 잇는 [[Fastener]]로 [[Sliding·Locking·Fixed]] 방식으로 층간변위 흡수',
  flow: ['Anchor 설치', '가고정', '3차원 조정', '본고정', '방청·절연'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="120" y="40" text-anchor="middle" class="t">Sliding</text>' +
    '<rect x="30" y="90" width="180" height="20" class="conc"/>' +
    '<rect x="40" y="110" width="160" height="70" class="bx2"/>' +
    '<circle cx="60" cy="110" r="5" class="rf"/><circle cx="180" cy="110" r="5" class="rf"/><text x="50" y="82" class="n">①</text>' +
    '<line x1="70" y1="200" x2="170" y2="200" class="ar"/><line x1="170" y1="200" x2="70" y2="200" class="ar"/><text x="180" y="207" class="n">②</text>' +
    '<text x="120" y="230" text-anchor="middle" class="s2">가로 Panel → 수평 이동</text>' +
    '<text x="360" y="40" text-anchor="middle" class="t">Locking</text>' +
    '<rect x="270" y="60" width="180" height="16" class="conc"/>' +
    '<rect x="330" y="76" width="60" height="150" class="bx2"/>' +
    '<circle cx="360" cy="76" r="5" class="rf"/>' +
    '<path d="M300,236 Q360,262 420,236" fill="none" class="ar"/><text x="428" y="254" class="n">③</text>' +
    '<text x="360" y="274" text-anchor="middle" class="s2">세로 Panel → 회전 추종</text>' +
    '<text x="40" y="272" class="s2">Fixed: Unit 자체 흡수</text>' +
    '</svg>',
  heads: [
    { h: '접합방식', k: ['Sliding: 수평 이동', 'Locking: 회전 추종', 'Fixed: Unit 흡수'] },
    { h: '시공 시 유의사항', k: ['3차원 오차흡수', '방청·이종금속 절연', '볼트 풀림방지'] },
    { h: '개선방안', k: ['Cast-in Channel', 'Unit 공장조립·BIM'] }
  ],
  code: '기능 = 하중전달·변형흡수·오차흡수 / 방식 S·L·F',
  read: '①Fastener로 Panel을 구조체에 걸고 → ②가로 Panel은 수평 Sliding → ③세로 Panel은 Locking 회전'
},
153: {
  one: '접합부를 외부 [[1차 Seal]]·내부 [[2차 Seal]]로 밀폐하고 침투수는 [[Weep hole]]로 배출하는 수처리',
  flow: ['외부 1차 Seal', '배수 System', '내부 2차 Seal'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="30" class="s2">외부(빗물)</text>' +
    '<line x1="225" y1="15" x2="225" y2="52" class="ar"/><line x1="255" y1="15" x2="255" y2="52" class="ar"/>' +
    '<rect x="80" y="60" width="130" height="110" class="bx2"/><rect x="270" y="60" width="130" height="110" class="bx2"/>' +
    '<rect x="210" y="60" width="60" height="14" class="bx3"/>' +
    '<rect x="210" y="150" width="60" height="14" class="bx3"/>' +
    '<text x="280" y="50" class="r">1차 Seal</text><text x="350" y="52" class="n">①</text>' +
    '<line x1="240" y1="86" x2="240" y2="136" class="ar"/>' +
    '<text x="280" y="192" class="r">2차 Seal</text><text x="350" y="194" class="n">②</text>' +
    '<text x="20" y="200" class="s2">실내</text>' +
    '<line x1="240" y1="166" x2="240" y2="214" class="ld"/>' +
    '<text x="240" y="232" text-anchor="middle" class="bl">침투수 → Weep hole 배출</text><text x="342" y="234" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '원리·특징', k: ['1차·2차 Seal 이중', '침투수 [[Weep hole]]', '저층·소규모 경제적'] },
    { h: '시공 시 유의사항', k: ['Bond Breaker', '피착면 청소·Primer', '5℃↓·우천 시공금지'] },
    { h: '개선방안', k: ['Open joint 병용', 'Seal 정기점검·교체'] }
  ],
  code: 'Closed = 1·배·2 (1차 Seal·배수·2차 Seal) / 누수 = 중·표·모·운·기',
  read: '①외부 1차 Seal이 빗물을 막고 → ②새어든 물은 내부 2차 Seal이 차단 → ③Weep hole로 배출'
},
154: {
  one: '외부 Joint를 열고 [[등압공간]]·[[기밀층]]을 두어 [[Po ≒ Pc]]로 기압차를 없애 빗물 침입 방지',
  flow: ['외기 유입구', '등압공간', '기밀층'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="40" class="s2">실외</text>' +
    '<text x="240" y="30" text-anchor="middle" class="bl">외기 Po</text><text x="272" y="32" class="n">①</text>' +
    '<line x1="240" y1="38" x2="240" y2="84" class="ar"/>' +
    '<rect x="100" y="60" width="110" height="110" class="bx2"/><rect x="270" y="60" width="110" height="110" class="bx2"/>' +
    '<text x="240" y="115" text-anchor="middle" class="r">등압</text>' +
    '<text x="240" y="138" text-anchor="middle" class="r">Pc</text><text x="280" y="128" class="n">②</text>' +
    '<rect x="210" y="156" width="60" height="14" class="bx3"/>' +
    '<text x="240" y="195" text-anchor="middle" class="b">기밀층(Air Seal)</text><text x="308" y="197" class="n">③</text>' +
    '<text x="20" y="200" class="s2">실내</text>' +
    '<text x="240" y="240" text-anchor="middle" class="b">Po ≒ Pc → 기압차 0 → 수밀</text>' +
    '</svg>',
  heads: [
    { h: '등압 원리', k: ['외부 개방·내부 기밀', '기압차 제거 → 수밀', '초고층·Unit wall'] },
    { h: '시공 시 유의사항', k: ['[[기밀층]] 연속성', '층·코너 구획', '배수·통기구 확보'] },
    { h: '개선방안', k: ['Rain Screen 설계', 'Mock-up 동압수밀'] }
  ],
  code: 'Open = 유·등·기 (유입구 → 등압공간 → 기밀층) / Po = Pc',
  read: '①외기 Po가 열린 Joint로 들어와 → ②내부 공간도 같은 압력 Pc → ③기밀층이 막아 기압차 0, 빗물 차단'
},
155: {
  one: 'Al 커튼월 Frame의 실내·실외 Bar 사이에 [[저열전도 재료]]를 끼워 [[열교]] 차단 — [[Azon]]·[[Polyamide]]',
  flow: ['열교 발생', '단열Bar 삽입', '표면온도↑', '결로 방지'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="120" y="50" text-anchor="middle" class="t">실외</text>' +
    '<text x="300" y="50" text-anchor="middle" class="t">실내</text>' +
    '<rect x="60" y="80" width="120" height="60" class="bx2"/>' +
    '<rect x="240" y="80" width="120" height="60" class="bx2"/>' +
    '<rect x="180" y="95" width="60" height="30" class="bx3"/>' +
    '<text x="120" y="116" text-anchor="middle">Al Bar</text>' +
    '<text x="300" y="116" text-anchor="middle">Al Bar</text>' +
    '<line x1="210" y1="125" x2="210" y2="156" class="ld"/>' +
    '<text x="210" y="172" text-anchor="middle" class="r">단열Bar</text><text x="244" y="174" class="n">②</text>' +
    '<text x="210" y="194" text-anchor="middle" class="s2">Azon·Polyamide</text>' +
    '<line x1="360" y1="222" x2="250" y2="222" class="ar"/><line x1="236" y1="210" x2="236" y2="234" class="rd"/><text x="366" y="229" class="n">①</text>' +
    '<text x="210" y="258" text-anchor="middle" class="bl">열교 차단 → 결로 방지</text><text x="298" y="260" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '원리·종류', k: ['실내외 Bar 열적 분리', 'Azon·Polyamide', '열관류율↓·TDR↑'] },
    { h: '시공·제작 유의사항', k: ['단열선 연속', '분체도장 내열성', '전단강도·수축 확인'] },
    { h: '개선방안', k: ['Warm-edge Spacer', 'THERM 열해석'] }
  ],
  code: '단열Bar = A·P (Azon 주입절단·Polyamide 삽입압착) → TDR↑',
  read: '①실내 열이 Al Bar를 타고 나가려 함 → ②중간 단열Bar가 끊음 → ③열교 차단, 결로 방지'
},
156: {
  one: '[[횡하중]]으로 상·하층 바닥 사이에 생기는 [[상대 수평변위 Δ]] — [[Δ/h]]를 허용치 이내로 관리',
  flow: ['풍압·지진력', '층간변위 발생', 'C/W·칸막이 손상'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="30" y="48" class="b">횡하중</text><text x="80" y="50" class="n">①</text>' +
    '<line x1="30" y1="60" x2="134" y2="60" class="ar"/>' +
    '<line x1="100" y1="60" x2="100" y2="240" class="ln2 dash"/><line x1="260" y1="60" x2="260" y2="240" class="ln2 dash"/>' +
    '<line x1="100" y1="240" x2="140" y2="60" class="ln"/><line x1="260" y1="240" x2="300" y2="60" class="ln"/>' +
    '<line x1="140" y1="60" x2="300" y2="60" class="ln"/><line x1="80" y1="240" x2="280" y2="240" class="ln"/>' +
    '<line x1="260" y1="40" x2="300" y2="40" class="rd"/><text x="280" y="32" text-anchor="middle" class="r">Δ</text><text x="306" y="34" class="n">②</text>' +
    '<line x1="320" y1="60" x2="320" y2="240" class="ln2"/><text x="328" y="155" class="r">h</text>' +
    '<text x="346" y="90" class="b">Δ/h 허용치</text>' +
    '<text x="346" y="120" class="s2">특 0.010hsx</text>' +
    '<text x="346" y="145" class="s2">Ⅰ 0.015·Ⅱ 0.020</text>' +
    '<text x="36" y="274" class="n">③</text><text x="60" y="272" class="bl">Fastener Slot·Sealant로 추종</text>' +
    '</svg>',
  heads: [
    { h: '기준·특징', k: ['Δ/h 층간변위비', '특 {{0.010hsx}}', 'Ⅰ {{0.015}}·Ⅱ {{0.020}}'] },
    { h: '시공 시 유의사항', k: ['Fastener Slot', 'Sealant 변위추종', '칸막이 Flexible'] },
    { h: '개선방안', k: ['제진·강성 증대', 'Mock-up 층간시험'] }
  ],
  code: '층간변위 = 특1·일15·이2 (0.010·0.015·0.020 hsx) / 슬·락',
  read: '①횡하중으로 → ②윗층이 Δ만큼 밀림, Δ/h로 관리 → ③Fastener Slot·Sealant가 변위 추종'
},
157: {
  one: '[[도전재]]를 넣은 타일·접착제·줄눈과 [[동판]]·[[접지]]로 [[정전기]]를 방전시켜 스파크·폭발 방지',
  flow: ['동판·접지', '전도성 접착제', '타일 부착', '전도성 줄눈', '저항 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="200" y="30" text-anchor="middle" class="bl">인체·장비 정전기</text>' +
    '<line x1="200" y1="40" x2="200" y2="112" class="ar"/><text x="208" y="82" class="n">①</text>' +
    '<text x="40" y="105" class="b">전도성 타일·줄눈</text><text x="160" y="107" class="n">②</text>' +
    '<rect x="40" y="120" width="75" height="40" class="bx2"/><rect x="121" y="120" width="75" height="40" class="bx2"/><rect x="202" y="120" width="75" height="40" class="bx2"/><rect x="283" y="120" width="75" height="40" class="bx2"/>' +
    '<rect x="40" y="160" width="320" height="12" class="bx3"/>' +
    '<text x="366" y="165" class="s2">전도성 접착제</text>' +
    '<line x1="40" y1="176" x2="400" y2="176" class="rd"/>' +
    '<text x="366" y="196" class="r">동판</text>' +
    '<rect x="40" y="180" width="320" height="50" class="conc"/>' +
    '<text x="200" y="210" text-anchor="middle" class="s2">콘크리트 바탕</text>' +
    '<line x1="400" y1="176" x2="400" y2="220" class="ln"/><line x1="385" y1="220" x2="415" y2="220" class="ln"/><line x1="390" y1="228" x2="410" y2="228" class="ln"/><line x1="395" y1="236" x2="405" y2="236" class="ln"/>' +
    '<text x="422" y="238" class="r">접지</text><text x="438" y="212" class="n">③</text>' +
    '<text x="40" y="262" class="bl">저항 측정·기록</text>' +
    '</svg>',
  heads: [
    { h: '구성·원리', k: ['카본·금속분 혼입', '동판 격자 → 접지', '저항값 범위 관리'] },
    { h: '시공 시 유의사항', k: ['일반 접착제 금지', 'Wax·절연 코팅 금지', '시공 후 저항 측정'] },
    { h: '개선방안', k: ['정기 저항 점검', '습도 관리·제전'] }
  ],
  code: '전도성 = 타·줄·접·동·지 (타일·줄눈·접착제·동판·접지) 한 회로',
  read: '①인체·장비 정전기가 → ②전도성 타일·접착제를 지나 → ③동판·접지로 방전'
}
});
