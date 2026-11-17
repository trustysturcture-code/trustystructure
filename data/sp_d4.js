// 간단 요약 — 디테일원 용어250 그룹 f (117~142 강구조), 근거: data/dw_f.js
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
117: {
  one: '겹친 판의 [[볼트구멍 엇갈림]]이 {{2mm 이하}}일 때 [[Reamer]]로 구멍 내면을 깎아 일치시키는 수정 가공',
  flow: ['가조립', '엇갈림 측정', 'Reaming', 'Burr 제거', '볼트 조임'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="140" width="240" height="26" class="bx"/><rect x="60" y="166" width="240" height="26" class="bx2"/>' +
    '<rect x="160" y="140" width="24" height="26" fill="none" class="ln"/><rect x="168" y="166" width="24" height="26" fill="none" class="ln"/>' +
    '<rect x="169" y="60" width="14" height="72" class="bx3"/><line x1="176" y1="40" x2="176" y2="60" class="ln"/><line x1="156" y1="40" x2="196" y2="40" class="ln"/>' +
    '<line x1="183" y1="80" x2="210" y2="80" class="ld"/><text x="214" y="85" class="bl">Reamer</text>' +
    '<text x="70" y="158" class="s2">상판</text><text x="70" y="184" class="s2">하판</text>' +
    '<line x1="160" y1="204" x2="168" y2="204" class="rd"/><text x="60" y="226" class="r">엇갈림 e ≤ 2mm</text>' +
    '<text x="320" y="150" class="r">M24 미만 d+2</text><text x="320" y="178" class="r">M24 이상 d+3</text>' +
    '<text x="60" y="262">Burr 제거 → 볼트 조임</text>' +
    '</svg>',
  heads: [
    { h: '수정 기준', k: ['엇갈림 {{2mm↓}}', '구멍 {{d+2·d+3}}', '[[드릴 천공]] 원칙'] },
    { h: '유의사항', k: ['2mm 초과 재가공', '[[Burr]]·녹 제거', '가스 구멍확대 금지'] },
    { h: '개선방안', k: ['공장 [[가조립]] 검사', 'CNC 드릴·BIM'] }
  ],
  code: '리밍 2·23 → 엇갈림 2mm, 구멍 d+2 / d+3'
},
120: {
  one: '판보 [[Web]]의 [[국부좌굴]]을 막기 위해 수직·수평으로 용접해 Web을 나누는 [[보강판]]',
  flow: ['하중점 수직', '중간 수직', '수평 0.2d', 'Flange 밀착'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="280" height="10" class="bx"/><rect x="40" y="200" width="280" height="10" class="bx"/><rect x="40" y="60" width="280" height="140" class="bx3"/>' +
    '<rect x="44" y="60" width="8" height="140" class="bx2"/><rect x="150" y="60" width="5" height="140" class="bx2"/><rect x="230" y="60" width="5" height="140" class="bx2"/><rect x="308" y="60" width="8" height="140" class="bx2"/>' +
    '<rect x="52" y="86" width="256" height="4" class="bx2"/>' +
    '<line x1="48" y1="16" x2="48" y2="46" class="ar"/><text x="58" y="32" class="b">P</text>' +
    '<line x1="24" y1="60" x2="24" y2="200" class="ln2"/><text x="10" y="135" class="r">d</text>' +
    '<line x1="328" y1="60" x2="328" y2="88" class="ln2"/><text x="336" y="80" class="r">0.2d</text>' +
    '<text x="336" y="56">압축측 Flange</text>' +
    '<line x1="300" y1="90" x2="334" y2="102" class="ld"/><text x="336" y="110" class="bl">수평 Stiffener</text>' +
    '<text x="336" y="150" class="r">Web 단면적 1/20↑</text>' +
    '<line x1="48" y1="210" x2="48" y2="220" class="ld"/><text x="20" y="236">하중점 Stiffener</text>' +
    '<line x1="232" y1="210" x2="232" y2="220" class="ld"/><text x="170" y="236">중간 수직 Stiffener</text>' +
    '</svg>',
  heads: [
    { h: '종류·기준', k: ['하중점·중간 수직', '수평 압축측 {{0.2d}}', '단면적 Web {{1/20↑}}'] },
    { h: '유의사항', k: ['Flange 밀착·용접', '교차부 [[Scallop]]', '용접변형 관리'] },
    { h: '개선방안', k: ['[[폭두께비]] 검토', 'Corrugated Web'] }
  ],
  code: '하·중·수 스티프너 → 수평은 0.2d, 1/20'
},
121: {
  one: '기둥 주각 [[Anchor Bolt]]를 [[고정매입]]·[[가동매입]]·[[나중매입]]으로 기초에 정착 (위치 {{±3·±5mm}})',
  flow: ['먹매김', 'Frame 고정', '타설', '위치 검측', 'Cap 보양'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="120" width="220" height="120" class="conc"/>' +
    '<line x1="100" y1="100" x2="100" y2="220" class="ln"/><line x1="200" y1="100" x2="200" y2="220" class="ln"/>' +
    '<path d="M100,220 q0,10 12,10" class="ln"/><path d="M200,220 q0,10 12,10" class="ln"/>' +
    '<rect x="94" y="94" width="12" height="8" class="bx3"/><rect x="194" y="94" width="12" height="8" class="bx3"/>' +
    '<rect x="80" y="150" width="140" height="8" class="bx2"/>' +
    '<line x1="100" y1="86" x2="200" y2="86" class="ln2"/><text x="150" y="76" text-anchor="middle" class="r">위치 ±3·한계 ±5mm</text>' +
    '<line x1="206" y1="110" x2="286" y2="104" class="ld"/><text x="290" y="110" class="r">a/D ≤ 1/6 굽힘수정</text>' +
    '<line x1="220" y1="154" x2="286" y2="146" class="ld"/><text x="290" y="150" class="bl">Anchor Frame</text>' +
    '<text x="150" y="212" text-anchor="middle" class="t">기초</text>' +
    '<text x="290" y="190">고정매입 = Frame</text><text x="290" y="215">가동매입 = 깔때기</text><text x="290" y="240">나중매입 = Grouting</text>' +
    '</svg>',
  heads: [
    { h: '종류·기준', k: ['고정·가동·나중매입', '위치 {{±3 / ±5mm}}', '굽힘 {{a/D ≤ 1/6}}'] },
    { h: '유의사항', k: ['타설 시 이동 방지', '[[Laitance]] 제거', '나사부 Cap 보양'] },
    { h: '개선방안', k: ['강재 Template', '3D 스캔·BIM 검측'] }
  ],
  code: '고·가·나 매입 → 고가나 고부전, ±3·±5'
},
122: {
  one: '기초 상부에 [[고름 Mortar]]를 바르거나 채워 [[Base Plate]] Level을 맞추고 밀착시키는 작업',
  flow: ['Laitance 제거', 'Mortar Pad', '양생 3일', '세우기', '무수축 충전'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="170" width="260" height="80" class="conc"/>' +
    '<rect x="140" y="150" width="60" height="20" class="bx2"/><rect x="70" y="150" width="200" height="20" fill="none" class="ln2 dash"/>' +
    '<rect x="70" y="140" width="200" height="10" class="bx"/><rect x="135" y="40" width="70" height="100" class="bx3"/>' +
    '<line x1="90" y1="120" x2="90" y2="230" class="ln"/><line x1="250" y1="120" x2="250" y2="230" class="ln"/>' +
    '<text x="170" y="95" text-anchor="middle" class="t">기둥</text>' +
    '<text x="20" y="60" class="r">Level ±3mm</text>' +
    '<text x="220" y="30">양생 3일↑ 후 세우기</text>' +
    '<line x1="270" y1="145" x2="306" y2="140" class="ld"/><text x="310" y="145" class="bl">Base Plate</text>' +
    '<line x1="200" y1="160" x2="306" y2="172" class="ld"/><text x="310" y="177" class="r">Mortar Pad 30~50mm</text>' +
    '<line x1="262" y1="166" x2="306" y2="202" class="ld"/><text x="310" y="207">무수축 Mortar 충전</text>' +
    '<text x="50" y="270" class="s2">Laitance 제거·습윤</text>' +
    '</svg>',
  heads: [
    { h: '공법', k: ['전면바름', '[[중심바름]]·십자바름', '전면채워넣기'] },
    { h: '유의사항', k: ['Pad 양생 {{3일↑}}', '공극 없이 밀실 충전', 'Level {{±3mm}}'] },
    { h: '개선방안', k: ['Level Nut·Liner', '무수축 Grout 압입'] }
  ],
  code: '전·중·십·전 바름 → Pad 먼저, 무수축 나중'
},
123: {
  one: '세장한 [[압축재]]가 [[Euler 좌굴하중]] {{Pcr = π²EI/(KL)²}}에서 항복 전 옆으로 휘는 [[불안정 현상]]',
  flow: ['세장비 산정', 'K 단부조건', 'Pcr 검토', 'Bracing 보강'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="120" y1="14" x2="120" y2="44" class="ar"/><text x="130" y="30" class="b">P</text>' +
    '<path d="M110,62 l10,-14 l10,14 z" class="bx2"/><path d="M110,238 l10,14 l10,-14 z" class="bx2"/>' +
    '<line x1="120" y1="62" x2="120" y2="238" class="ln2 dash"/><path d="M120,62 Q180,150 120,238" class="bl"/>' +
    '<line x1="80" y1="62" x2="80" y2="238" class="ln2"/><text x="50" y="155" class="r">KL</text>' +
    '<text x="220" y="70" class="r">Pcr = π²EI/(KL)²</text>' +
    '<text x="220" y="110">K: 핀 1.0 · 고정 0.5 · 자유 2.0</text>' +
    '<text x="220" y="150">λ = KL/r ≤ 200</text>' +
    '<text x="220" y="200" class="bl">대책: Bracing·단면↑</text>' +
    '</svg>',
  heads: [
    { h: '종류·원리', k: ['휨·국부·횡비틀림', 'K 핀1·고정0.5·자유2', '세장비 {{200↓}}'] },
    { h: '유의사항', k: ['세우기 임시가새', '초기처짐·용접변형', '양중 편심 금지'] },
    { h: '대책', k: ['[[Bracing]] 길이 단축', '단면2차모멘트↑', '[[Stiffener]]·폭두께비'] }
  ],
  code: 'Pcr = π²EI/(KL)² → 핀1·고정0.5·자유2'
},
124: {
  one: '가조립 후 기둥 [[수직도]]·기둥 간격을 재어 [[Wire Rope]]·[[Turnbuckle]]로 허용오차 안에 바로잡는 작업',
  flow: ['가조립', '수직도 검사', 'Wire 수정', '재계측', '본조임'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="240" x2="300" y2="240" class="ln"/>' +
    '<path d="M142,240 L158,240 L173,60 L157,60 Z" class="bx3"/>' +
    '<line x1="150" y1="60" x2="150" y2="240" class="ln2 dash"/><line x1="150" y1="52" x2="165" y2="52" class="rd"/>' +
    '<line x1="165" y1="70" x2="40" y2="240" class="ln"/><rect x="95" y="148" width="15" height="14" class="bx2"/>' +
    '<text x="10" y="40">Wire Rope 12.5φ↑</text>' +
    '<text x="4" y="140" class="bl">Turnbuckle</text>' +
    '<text x="230" y="80" class="r">기둥 H/1000·10mm↓</text>' +
    '<text x="230" y="115" class="r">건물 H/4000+7mm</text>' +
    '<text x="230" y="150" class="r">보 L/1000+3mm</text>' +
    '<text x="230" y="190" class="bl">해뜨기 전 계측</text>' +
    '<text x="230" y="225">풍속 10m/s↑ 중지</text>' +
    '</svg>',
  heads: [
    { h: '관리 기준', k: ['기둥 {{H/1000}}', '건물 {{H/4000+7}}', '보 {{L/1000+3}}'] },
    { h: '유의사항', k: ['[[해뜨기 전]] 계측', '풍속 10m/s↑ 중지', '무리한 수정 금지'] },
    { h: '개선방안', k: ['수직 Data 반영', '3D 스캐너 계측'] }
  ],
  code: '가·검·수·본 → 관리 1000·4000+7·1000+3'
},
127: {
  one: '모재 끝을 [[개선(Groove)]] 가공해 맞대고 [[Root 간격]]을 둔 뒤 홈을 채우는 [[완전용입]] 용접',
  flow: ['개선 가공', 'Root·Back Strip', 'End Tab', '다층 용접', 'UT'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M40,120 L190,120 L225,172 L225,180 L40,180 Z" class="bx"/><path d="M420,120 L270,120 L235,172 L235,180 L420,180 Z" class="bx"/>' +
    '<path d="M190,120 L270,120 L235,172 L235,180 L225,180 L225,172 Z" class="bx2"/><path d="M186,120 Q230,104 274,120" class="bx2"/>' +
    '<rect x="205" y="180" width="50" height="8" class="bx3"/>' +
    '<text x="300" y="60" class="t">완전용입 CJP</text>' +
    '<line x1="256" y1="112" x2="286" y2="96" class="ld"/><text x="290" y="100" class="r">덧살 0~3mm</text>' +
    '<line x1="200" y1="128" x2="170" y2="100" class="ld"/><text x="100" y="96" class="bl">개선 (V형)</text>' +
    '<line x1="230" y1="186" x2="185" y2="214" class="ld"/><text x="100" y="226" class="r">Root 간격</text>' +
    '<line x1="250" y1="188" x2="270" y2="214" class="ld"/><text x="270" y="226">Back Strip</text>' +
    '<text x="40" y="262" class="s2">End Tab → 다층용접 → Slag 제거 → UT</text>' +
    '</svg>',
  heads: [
    { h: '종류·기준', k: ['[[완전용입]]·부분용입', 'I·V·X·K·J·U형', '덧살 {{0~3mm}}'] },
    { h: '유의사항', k: ['Root 간격·개선각', 'End Tab·예열', '[[Back Gouging]]'] },
    { h: '개선방안', k: ['UT·PAUT 강화', '용접 Robot'] }
  ],
  code: '맞댄 = 개·루·백·엔 (개선·Root·Back·End)'
},
128: {
  one: 'T·겹침 이음 구석에 삼각형 용착금속을 붙여 [[목두께]] {{a = 0.7S}} 면의 전단으로 힘을 전하는 용접',
  flow: ['조립·밀착', '각장 결정', '용접', '각장 측정', '외관 검사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="200" width="300" height="16" class="bx"/><rect x="180" y="60" width="16" height="140" class="bx"/>' +
    '<path d="M196,200 L196,160 L236,200 Z" class="bx2"/><path d="M180,200 L180,160 L140,200 Z" class="bx2"/>' +
    '<line x1="196" y1="200" x2="216" y2="180" class="rd"/>' +
    '<line x1="196" y1="232" x2="236" y2="232" class="ln2"/><text x="216" y="252" text-anchor="middle" class="r">S (각장)</text>' +
    '<line x1="216" y1="180" x2="246" y2="168" class="ld"/><text x="250" y="165" class="r">a = 0.7S</text>' +
    '<text x="250" y="192">45° 면 전단</text>' +
    '<text x="250" y="80">유효길이 = 전장 - 2S</text>' +
    '<text x="250" y="110" class="r">최소 4S·40mm↑</text>' +
    '<text x="20" y="40" class="bl">Under Cut·각장부족 주의</text>' +
    '</svg>',
  heads: [
    { h: '기준', k: ['목두께 {{0.7S}}', '유효길이 전장-2S', '최소 {{4S·40mm}}'] },
    { h: '유의사항', k: ['각장·목두께 부족', '이음 틈 {{2mm↓}}', '단부 돌림용접'] },
    { h: '개선방안', k: ['각장 Gauge 전수', '자동 Fillet 용접'] }
  ],
  code: '모살 0.7 · 45 · 4S40 → 목두께·전단면·최소길이'
},
129: {
  one: '보 상부 Flange에 [[Arc Stud 용접]]해 [[수평전단력]]을 전달, 보와 Slab를 [[합성보]]로 만드는 전단연결재',
  flow: ['바탕 청소', 'Ferrule 장착', 'Stud 용접', '외관 검사', '15° 굽힘'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="320" height="110" class="conc"/>' +
    '<rect x="60" y="170" width="280" height="10" class="bx"/><rect x="195" y="180" width="10" height="70" class="bx3"/>' +
    '<line x1="150" y1="170" x2="150" y2="100" class="ln"/><rect x="142" y="94" width="16" height="6" class="bx2"/>' +
    '<line x1="250" y1="170" x2="250" y2="100" class="ln"/><rect x="242" y="94" width="16" height="6" class="bx2"/>' +
    '<line x1="70" y1="150" x2="120" y2="150" class="ar"/>' +
    '<text x="60" y="88" class="t">Slab</text>' +
    '<line x1="258" y1="96" x2="290" y2="46" class="ld"/><text x="280" y="40" class="bl">전단연결재 Stud</text>' +
    '<text x="20" y="30" class="r">높이 ±2mm·기울기 5°↓</text>' +
    '<text x="370" y="140" class="r">15° 굽힘시험</text>' +
    '<text x="215" y="240" class="s2">철골보</text>' +
    '<text x="40" y="272">수평전단력 → 합성보</text>' +
    '</svg>',
  heads: [
    { h: '역할·기준', k: ['수평전단력 전달', '높이 {{±2mm}}·기울기 5°', '[[15° 굽힘시험]]'] },
    { h: '유의사항', k: ['100개당 1개 검사', '더돋기 360° 균일', '우천 시 중지'] },
    { h: '개선방안', k: ['불합격 시 2개 추가', '자동 용접기 기록'] }
  ],
  code: 'Stud 2·5·15·100 → 높이·기울기·굽힘·Lot'
},
130: {
  one: '용접 착수 전 [[용접사]]가 실제 조건과 같은 [[시험편]]을 용접해 외관·인장·Macro·RT로 기량을 확인',
  flow: ['대상 선정', '시험편 제작', '자세별 용접', '판정 시험', '합격 등록'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="80" width="100" height="40" class="bx"/><rect x="146" y="80" width="100" height="40" class="bx"/><rect x="140" y="80" width="6" height="40" class="bx2"/>' +
    '<text x="40" y="60" class="r">시험편 a=3t · b=6t</text>' +
    '<text x="40" y="146">150mm↑, t 25mm↑</text>' +
    '<text x="270" y="100" class="bl">외관·인장·Macro·RT</text>' +
    '<text x="270" y="130" class="r">재시험 2배</text>' +
    '<rect x="30" y="205" width="70" height="8" class="bx"/><line x1="65" y1="178" x2="65" y2="200" class="ar"/>' +
    '<rect x="172" y="178" width="8" height="40" class="bx"/><line x1="140" y1="198" x2="166" y2="198" class="ar"/>' +
    '<rect x="282" y="178" width="8" height="40" class="bx"/><line x1="270" y1="216" x2="270" y2="184" class="ar"/>' +
    '<rect x="360" y="180" width="70" height="8" class="bx"/><line x1="395" y1="216" x2="395" y2="194" class="ar"/>' +
    '<text x="30" y="250">1G 아래보기</text><text x="140" y="250">2G 수평</text><text x="250" y="250">3G 수직</text><text x="360" y="250">4G 위보기</text>' +
    '</svg>',
  heads: [
    { h: '시험편·판정', k: ['{{3t·6t}}·150mm↑', '외관·인장·Macro·RT', '1G~4G 자세'] },
    { h: '유의사항', k: ['가장 불리한 자세', '최저등급 강재', '재시험 {{2배}}'] },
    { h: '개선방안', k: ['전류·전압 기록', '자격 이력 전산관리'] }
  ],
  code: 'WPQ 3t·6t·150·25 → 외·인·마·비, 재시험 2배'
},
132: {
  one: '맞댄용접 [[시·종단]]의 [[Crater]]·용입불량을 모재 밖으로 빼내려 양끝에 붙이는 [[동일 재질]] 보조판',
  flow: ['Tab 가용접', '본용접', '냉각', '절단·Grinding', 'MT·PT'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="100" y="90" width="240" height="120" class="bx"/>' +
    '<rect x="40" y="130" width="60" height="40" class="bx3"/><rect x="340" y="130" width="60" height="40" class="bx3"/>' +
    '<rect x="60" y="145" width="320" height="10" class="bx2"/>' +
    '<text x="220" y="125" text-anchor="middle" class="t">모재</text>' +
    '<text x="30" y="118" class="bl">End Tab</text>' +
    '<line x1="380" y1="145" x2="390" y2="116" class="ld"/><text x="300" y="110" class="r">Crater 결함 밖으로</text>' +
    '<text x="110" y="60">동일 재질·개선형상</text>' +
    '<text x="40" y="245" class="r">수동 35 · 반자동 40 · 자동 70mm↑</text>' +
    '<text x="40" y="270" class="s2">절단 → Grinding 마감</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['동일 재질·개선형상', '수동 {{35}}·반자동 {{40}}', '자동 {{70mm↑}}'] },
    { h: '유의사항', k: ['가용접은 Tab 측', '절단 Notch 금지', '반복하중부 제거'] },
    { h: '개선방안', k: ['세라믹·Flux Tab', '단부 MT·PT'] }
  ],
  code: '엔드탭 35·40·70 → 수동·반자동·자동'
},
133: {
  one: '후판 T·십자 이음 용접 시 [[Z방향]] 수축응력이 [[MnS 개재물]]층을 따라 생기는 [[계단형 균열]]',
  flow: ['Z방향 구속', '개재물 층', '수축응력', '계단형 균열'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="140" width="320" height="60" class="bx"/>' +
    '<line x1="50" y1="160" x2="350" y2="160" class="ln2 dash"/><line x1="50" y1="175" x2="350" y2="175" class="ln2 dash"/><line x1="50" y1="190" x2="350" y2="190" class="ln2 dash"/>' +
    '<rect x="190" y="40" width="20" height="100" class="bx3"/>' +
    '<path d="M190,140 L190,115 L165,140 Z" class="bx2"/><path d="M210,140 L210,115 L235,140 Z" class="bx2"/>' +
    '<path d="M170,150 L200,150 L200,165 L240,165 L240,180 L270,180" class="rd"/>' +
    '<line x1="380" y1="200" x2="380" y2="140" class="ar"/><text x="390" y="175" class="r">Z 방향</text>' +
    '<text x="40" y="70">후판 T이음</text>' +
    '<line x1="222" y1="120" x2="240" y2="88" class="ld"/><text x="240" y="82">수축응력</text>' +
    '<line x1="260" y1="182" x2="280" y2="212" class="ld"/><text x="280" y="226" class="r">계단형 균열</text>' +
    '<text x="40" y="226" class="bl">MnS 개재물</text>' +
    '<text x="40" y="265" class="bl">대책: Z방향강재·Buttering·예열</text>' +
    '</svg>',
  heads: [
    { h: '발생 원인', k: ['후판 T·십자 이음', '[[MnS]] 층상 분포', '수축응력 집중'] },
    { h: '유의사항', k: ['Z응력 작은 개선', '용착량 최소화', '예열·저수소계'] },
    { h: '방지대책', k: ['[[Z방향 강재]]', '[[Buttering]]', '전·후 UT 검사'] }
  ],
  code: 'Lamellar = Z·MnS·계단 → 대책 Z·버·예·UT'
},
134: {
  one: '[[X선·γ선]]을 용접부에 투과시켜 [[필름 농도차]]로 Blow hole·Slag 등 [[내부결함]]을 찾는 검사',
  flow: ['관리구역', '선원·필름 배치', '촬영·현상', '판독 1~4류'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="200" cy="50" r="12" class="rf"/>' +
    '<line x1="200" y1="62" x2="130" y2="150" class="ln2 dash"/><line x1="200" y1="62" x2="270" y2="150" class="ln2 dash"/>' +
    '<rect x="80" y="150" width="240" height="24" class="bx"/><rect x="185" y="150" width="30" height="24" class="bx2"/><circle cx="200" cy="162" r="4" class="dotf"/>' +
    '<rect x="80" y="190" width="240" height="8" class="bx3"/>' +
    '<text x="220" y="40">X선·γ선 선원</text>' +
    '<text x="330" y="198">필름 (농도차)</text>' +
    '<line x1="215" y1="160" x2="326" y2="156" class="ld"/><text x="330" y="160" class="r">Blow hole·Slag</text>' +
    '<line x1="100" y1="150" x2="90" y2="136" class="ld"/><text x="40" y="130" class="bl">투과도계 IQI</text>' +
    '<text x="80" y="232">KS B 0845 1~4류</text>' +
    '<text x="80" y="262" class="r">관리구역·피폭관리</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[내부결함]] 검출', '필름 기록 보존', '[[IQI]]로 감도 확인'] },
    { h: '유의사항', k: ['방사선 관리구역', 'T이음·후판 곤란', '면상 Crack 한계'] },
    { h: '개선방안', k: ['Digital RT', 'UT·PAUT 병행'] }
  ],
  code: 'RT = 선원·IQI·필름 → 내부·기록·안전'
},
135: {
  one: '[[탐촉자]]의 [[초음파]]를 용접부에 넣어 결함 [[반사 Echo]]의 높이·시간으로 내부결함 위치·크기를 판정',
  flow: ['표면 정리', '접촉매질', '사각탐상', 'Echo 판독', '등급 판정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="120" width="380" height="80" class="bx"/>' +
    '<path d="M260,120 L300,120 L285,200 L275,200 Z" class="bx2"/>' +
    '<rect x="110" y="96" width="50" height="24" class="bx3"/>' +
    '<line x1="150" y1="120" x2="266" y2="158" class="ar"/><circle cx="272" cy="160" r="4" class="dotf"/>' +
    '<line x1="120" y1="96" x2="100" y2="84" class="ld"/><text x="50" y="80" class="bl">탐촉자</text>' +
    '<text x="170" y="80" class="s2">접촉매질</text>' +
    '<line x1="274" y1="156" x2="300" y2="106" class="ld"/><text x="300" y="100" class="r">결함 반사 Echo</text>' +
    '<text x="60" y="230" class="r">θ = 45·60·70°</text>' +
    '<text x="300" y="230">1~5MHz</text>' +
    '<text x="40" y="265" class="bl">방사선 위험 없음</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['위치·크기 즉시 판정', '사각 {{45·60·70°}}', '후판·T이음 적용'] },
    { h: '유의사항', k: ['Spatter·녹 제거', '[[접촉매질]] 밀착', '검사자 숙련도'] },
    { h: '개선방안', k: ['[[PAUT]]·TOFD', 'Level Ⅱ↑ 검사자'] }
  ],
  code: 'UT = 탐·매·사·Echo → 45·60·70'
},
136: {
  one: '[[강자성체]]를 [[자화]]해 결함의 [[누설자속]]에 [[자분]]이 모이는 것으로 표면·표면직하 결함 검출',
  flow: ['전처리', 'Yoke 자화', '자분 살포', '2방향 관찰', '탈자'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="160" width="340" height="30" class="bx"/>' +
    '<rect x="112" y="80" width="16" height="80" class="bx3"/><rect x="272" y="80" width="16" height="80" class="bx3"/><rect x="112" y="72" width="176" height="16" class="bx3"/>' +
    '<path d="M128,176 Q200,200 272,176" class="ln2 dash"/>' +
    '<line x1="200" y1="160" x2="200" y2="174" class="rd"/><path d="M190,160 Q200,146 210,160" class="rd"/>' +
    '<circle cx="195" cy="156" r="2" class="dotf"/><circle cx="200" cy="153" r="2" class="dotf"/><circle cx="205" cy="156" r="2" class="dotf"/>' +
    '<text x="300" y="66" class="bl">Yoke (자화)</text>' +
    '<text x="200" y="130" text-anchor="middle" class="r">자분 모임</text>' +
    '<line x1="210" y1="154" x2="296" y2="118" class="ld"/><text x="300" y="120">누설자속</text>' +
    '<text x="40" y="225" class="r">표면·표면직하 결함</text>' +
    '<text x="40" y="252">2방향(직각) 검사</text>' +
    '<text x="250" y="225" class="s2">비자성체 불가</text>' +
    '<text x="250" y="252" class="bl">탈자·청소</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['표면·표면직하 결함', '[[Yoke법]]·형광자분', '간단·신속·저렴'] },
    { h: '유의사항', k: ['비자성체 불가', '직각 [[2방향]] 검사', '검사 후 [[탈자]]'] },
    { h: '개선방안', k: ['형광자분 + UV등', '결함 사진 기록'] }
  ],
  code: 'MT = 자화·누설·자분·탈자 → 2방향'
},
137: {
  one: '[[침투액]]을 [[모세관 현상]]으로 결함에 스미게 한 뒤 [[세척]]·[[현상]]해 [[표면 개구 결함]]을 눈으로 확인',
  flow: ['전처리', '침투', '세척', '현상', '관찰'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="120" width="100" height="30" class="bx"/><rect x="20" y="114" width="100" height="6" class="bx2"/><path d="M66,120 L70,140 L74,120" class="rd"/>' +
    '<rect x="135" y="120" width="100" height="30" class="bx"/><path d="M181,120 L185,140 L189,120" class="rd"/>' +
    '<rect x="250" y="120" width="100" height="30" class="bx"/><rect x="250" y="112" width="100" height="8" class="bx3"/><path d="M296,120 L300,140 L304,120" class="rd"/>' +
    '<rect x="365" y="120" width="100" height="30" class="bx"/><rect x="365" y="112" width="100" height="8" class="bx3"/><circle cx="415" cy="114" r="5" class="dotf"/>' +
    '<line x1="122" y1="135" x2="133" y2="135" class="ar"/><line x1="237" y1="135" x2="248" y2="135" class="ar"/><line x1="352" y1="135" x2="363" y2="135" class="ar"/>' +
    '<text x="70" y="90" text-anchor="middle" class="t">침투</text><text x="185" y="90" text-anchor="middle" class="t">세척</text>' +
    '<text x="300" y="90" text-anchor="middle" class="t">현상</text><text x="415" y="90" text-anchor="middle" class="t">관찰</text>' +
    '<text x="70" y="180" text-anchor="middle" class="r">5~10분</text>' +
    '<text x="185" y="180" text-anchor="middle" class="s2">과세척 금지</text>' +
    '<text x="300" y="180" text-anchor="middle" class="s2">현상제 흡출</text>' +
    '<text x="415" y="210" text-anchor="middle" class="r">표면 개구결함</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['표면 개구결함', '비자성체·STS 가능', '염색·형광 침투'] },
    { h: '유의사항', k: ['침투 {{5~10분}}', '과세척 금지', '내부결함 불가'] },
    { h: '개선방안', k: ['형광 PT + UV등', 'MT·UT 병행'] }
  ],
  code: 'PT = 침·세·현·관 → 침투 5~10분'
},
138: {
  one: '골형 강판을 철골보에 걸쳐 고정하고 콘크리트를 치는 바닥판, 동바리 생략 [[무지주 Slab 공법]]',
  flow: ['설치계획', '2점 걸기', '걸침·가용접', '개구부 보강', '분산타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="80" width="380" height="60" class="conc"/>' +
    '<path d="M20,140 L50,140 L60,170 L90,170 L100,140 L140,140 L150,170 L180,170 L190,140 L230,140 L240,170 L270,170 L280,140 L320,140 L330,170 L360,170 L370,140 L400,140" class="ln"/>' +
    '<rect x="150" y="170" width="100" height="8" class="bx"/><rect x="195" y="178" width="10" height="70" class="bx3"/><rect x="150" y="248" width="100" height="8" class="bx"/>' +
    '<text x="40" y="115" class="t">분산타설 (집중 금지)</text>' +
    '<line x1="300" y1="160" x2="300" y2="188" class="ld"/><text x="270" y="200" class="bl">Deck Plate</text>' +
    '<line x1="240" y1="174" x2="262" y2="218" class="ld"/><text x="262" y="230" class="r">걸침 50mm↑ (골방향)</text>' +
    '<text x="262" y="262">가용접 600mm 이내</text>' +
    '<text x="20" y="225">2점 걸기 양중</text>' +
    '<text x="10" y="272" class="r">무지주(동바리 생략)</text>' +
    '</svg>',
  heads: [
    { h: '종류·기준', k: ['거푸집용·합성·Truss', '걸침 {{50 / 30mm↑}}', '받침재 {{6mm↑}}'] },
    { h: '유의사항', k: ['[[2점 걸기]] 양중', '가용접 {{600mm}} 이내', '[[분산타설]]'] },
    { h: '개선방안', k: ['Span 3.6m↑ Support', 'Shop Dwg·BIM'] }
  ],
  code: 'Deck 2점·50/30·6mm·600 → 양중·걸침·받침·가용접'
},
139: {
  one: '공장제작 [[철골계단 Unit]]을 [[Stair Anchor]]에 걸고 [[Sliding]] 접합 후 디딤판을 충전하는 계단 공법',
  flow: ['Anchor 설치', 'Unit 가설치', '거푸집 탈형', 'Sliding 고정', '디딤판 충전'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="260" y="50" width="200" height="20" class="conc"/><rect x="20" y="230" width="200" height="20" class="conc"/>' +
    '<path d="M120,230 L120,198 L156,198 L156,166 L192,166 L192,134 L228,134 L228,102 L264,102 L264,70 L300,70" class="ln"/>' +
    '<line x1="130" y1="236" x2="300" y2="86" class="ln2"/>' +
    '<rect x="112" y="224" width="14" height="8" class="bx2"/><rect x="292" y="66" width="12" height="10" class="bx2"/>' +
    '<line x1="302" y1="76" x2="318" y2="98" class="ld"/><text x="320" y="110" class="r">Stair Anchor</text>' +
    '<line x1="114" y1="226" x2="80" y2="196" class="ld"/><text x="10" y="190" class="bl">Sliding 접합</text>' +
    '<text x="240" y="200" class="t">철골계단 Unit</text>' +
    '<text x="320" y="150">거푸집·배근 생략</text>' +
    '<text x="320" y="180">수직동선 조기확보</text>' +
    '<text x="20" y="272" class="s2">방진 Pad (진동·소음)</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['[[거푸집·배근 생략]]', '수직 동선 조기확보', '공장제작 품질'] },
    { h: '유의사항', k: ['양중 변형 방지', '수평·수직도 유지', '[[방진 Pad]]'] },
    { h: '개선방안', k: ['BIM·모듈화', '논슬립·난간 일체'] }
  ],
  code: 'Ferro = 앵·가·탈·슬 (Anchor·가설치·탈형·Sliding)'
},
140: {
  one: '철골을 [[Blast]]로 {{Sa 2½}} 표면처리 후 [[방청 Primer]]·중·상도를 규정 [[도막두께]]로 칠하는 공정',
  flow: ['표면처리', 'Primer', '중도·상도', '막두께 측정', '현장 보수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="170" width="240" height="40" class="bx3"/><rect x="60" y="158" width="240" height="12" class="bx2"/>' +
    '<rect x="60" y="146" width="240" height="12" class="bx"/><rect x="60" y="134" width="240" height="12" class="bx2"/>' +
    '<line x1="300" y1="140" x2="316" y2="106" class="ld"/><text x="320" y="110">상도</text>' +
    '<line x1="300" y1="152" x2="316" y2="136" class="ld"/><text x="320" y="140">중도</text>' +
    '<line x1="300" y1="164" x2="316" y2="166" class="ld"/><text x="320" y="170" class="bl">방청 Primer</text>' +
    '<line x1="300" y1="190" x2="316" y2="196" class="ld"/><text x="320" y="200" class="r">표면처리 Sa 2½</text>' +
    '<line x1="100" y1="134" x2="100" y2="116" class="ld"/><text x="60" y="110" class="bl">도막두께 측정</text>' +
    '<text x="40" y="245">용접부 100mm·마찰면 제외</text>' +
    '<text x="40" y="270" class="r">5℃↓·85%↑ 도장금지</text>' +
    '</svg>',
  heads: [
    { h: '공정·기준', k: ['Blast {{Sa 2½}}', 'Primer→중도→상도', '전자식 막후계'] },
    { h: '유의사항', k: ['용접부 {{100mm}} 제외', '마찰면·매입부 제외', '{{5℃↓·85%↑}} 금지'] },
    { h: '개선방안', k: ['현장 [[보수도장]]', '내화피복 적합성'] }
  ],
  code: '방청 Sa2½·100·5·85 → 표면·용접부·기온·습도'
},
142: {
  one: '화재 {{200~250℃}}에서 도막이 [[발포·팽창]]해 [[단열탄화층]]을 만들어 강재 온도상승을 늦추는 내화피복',
  flow: ['표면처리', '방청 Primer', '내화도료 다회', '두께 측정', 'Top Coat'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="140" width="120" height="40" class="bx3"/><rect x="40" y="132" width="120" height="8" class="bx2"/>' +
    '<line x1="175" y1="160" x2="245" y2="160" class="ar"/><text x="210" y="148" text-anchor="middle" class="r">200~250℃</text>' +
    '<rect x="260" y="140" width="120" height="40" class="bx3"/><rect x="260" y="70" width="120" height="70" class="bx2"/>' +
    '<text x="320" y="112" text-anchor="middle" class="t">단열탄화층</text>' +
    '<text x="260" y="58" class="r">20~80배 팽창</text>' +
    '<text x="40" y="120" class="s2">도막 (얇게)</text>' +
    '<text x="100" y="166" text-anchor="middle">강재</text>' +
    '<text x="40" y="225">방청 Primer → 내화도료 → Top Coat</text>' +
    '<text x="40" y="255" class="bl">인정 도막두께 확인</text>' +
    '<text x="260" y="255" class="r">5℃↑ 시공</text>' +
    '</svg>',
  heads: [
    { h: '특징·원리', k: ['{{20~80배}} 발포', '내화시간별 인정두께', '노출 철골 미관'] },
    { h: '유의사항', k: ['기온 {{5℃↑}} 시공', 'Primer 적합성 확인', '다회 도장·건조'] },
    { h: '개선방안', k: ['습·건 두께 측정', '[[Top Coat]] 보호'] }
  ],
  code: '내화페인트 200·20~80·5℃ → 발포·팽창·기온'
}
});
