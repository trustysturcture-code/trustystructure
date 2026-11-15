// 디테일원 도해 답안 (Detail One 용어 양식) No.159~169 — 형식은 data/SCHEMA_D1.md
window.D1 = Object.assign(window.D1 || {}, {
159: {
  tag: '공법·계획·품질',
  def: '타일 시공 전 [[실측]] 치수로 [[온장]]·[[쪽타일]]({{1/2장 이상}}) 배치와 줄눈 위치를 계획하고 [[이질재 접합부]]·E.J에 줄눈을 두는 타일 분할도',
  wwh: ['온장·줄눈 배치도', 'Loss·탈락 방지', '실측→기준점→분할'],
  figT: '줄눈나누기 시작점 설정 및 분할 순서',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="40" width="170" height="170" fill="none" class="ln"/><line x1="30" y1="40" x2="200" y2="40" class="rd"/>' +
    '<rect x="36" y="46" width="70" height="40" class="bx2"/><text x="71" y="70" text-anchor="middle" class="s">욕조</text>' +
    '<rect x="160" y="46" width="34" height="30" class="bx3"/><text x="177" y="65" text-anchor="middle" class="s">변기</text>' +
    '<rect x="158" y="100" width="38" height="36" class="bx"/><text x="177" y="122" text-anchor="middle" class="s">세면대</text>' +
    '<line x1="40" y1="210" x2="40" y2="172" class="ln"/><path d="M40,172 A38,38 0 0,1 78,210" fill="none" class="ln2 dash"/>' +
    '<circle cx="60" cy="226" r="4" class="rf"/><line x1="62" y1="220" x2="112" y2="46" class="ar dash"/><line x1="66" y1="221" x2="154" y2="124" class="ar dash"/>' +
    '<line x1="120" y1="40" x2="128" y2="24" class="ld"/><circle cx="128" cy="24" r="2" class="dotf"/><text x="132" y="28" class="k3">③ 시야 우선: 정면 벽 온장</text>' +
    '<line x1="67" y1="183" x2="96" y2="176" class="ld"/><circle cx="96" cy="176" r="2" class="dotf"/><text x="100" y="180" class="s">문 개폐 궤적</text>' +
    '<line x1="60" y1="226" x2="90" y2="244" class="ld"/><circle cx="90" cy="244" r="2" class="dotf"/><text x="94" y="248" class="bl">출입문 시점(eye)</text>' +
    '<rect x="230" y="40" width="180" height="170" fill="none" class="ln"/>' +
    '<line x1="260" y1="40" x2="260" y2="210" class="ln2"/><line x1="290" y1="40" x2="290" y2="210" class="ln2"/><line x1="320" y1="40" x2="320" y2="210" class="ln2"/><line x1="350" y1="40" x2="350" y2="210" class="ln2"/><line x1="380" y1="40" x2="380" y2="210" class="ln2"/>' +
    '<line x1="230" y1="70" x2="410" y2="70" class="ln2"/><line x1="230" y1="100" x2="410" y2="100" class="ln2"/><line x1="230" y1="130" x2="410" y2="130" class="ln2"/><line x1="230" y1="160" x2="410" y2="160" class="ln2"/><line x1="230" y1="190" x2="410" y2="190" class="ln2"/>' +
    '<rect x="230" y="190" width="180" height="20" class="bx2"/><rect x="290" y="70" width="60" height="60" class="bx3"/><text x="320" y="104" text-anchor="middle" class="s">거울</text>' +
    '<line x1="320" y1="34" x2="320" y2="216" class="ln2 dash"/><circle cx="320" cy="160" r="4" class="rf"/>' +
    '<rect x="224" y="210" width="192" height="8" class="conc"/><line x1="410" y1="40" x2="410" y2="210" class="rd"/>' +
    '<line x1="320" y1="218" x2="316" y2="236" class="ld"/><circle cx="316" cy="236" r="2" class="dotf"/><text x="312" y="240" text-anchor="end" class="bl">기준점: 아이템 중심</text>' +
    '<text x="446" y="40" class="b">[줄눈 폭 · KCS]</text>' +
    '<text x="446" y="60" class="r">외부 대형 9mm</text>' +
    '<text x="446" y="78" class="r">내부 대형 6mm</text>' +
    '<text x="446" y="96" class="r">소형 3mm · 모자이크 2mm</text>' +
    '<line x1="410" y1="110" x2="440" y2="116" class="ld"/><circle cx="440" cy="116" r="2" class="dotf"/><text x="446" y="120" class="k3">③ 이질재 접합부·E.J 줄눈</text>' +
    '<line x1="380" y1="214" x2="440" y2="136" class="ld"/><circle cx="440" cy="136" r="2" class="dotf"/><text x="446" y="140" class="k3">③ 벽→바닥 순 줄눈 일치</text>' +
    '<line x1="400" y1="200" x2="440" y2="160" class="ld"/><circle cx="440" cy="160" r="2" class="dotf"/><text x="446" y="164" class="k4">④ 쪽타일 1/2장↑ 좌우 대칭</text>' +
    '<line x1="324" y1="160" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="446" y="184" class="k4">④ 수전·콘센트 줄눈 정렬</text>' +
    '<line x1="260" y1="214" x2="440" y2="200" class="ld"/><circle cx="440" cy="200" r="2" class="dotf"/><text x="446" y="204" class="k4">④ 배수구 중심 구배 분할</text>' +
    '<text x="446" y="228" class="k5">⑤ BIM 나누기·Loss율 산출</text>' +
    '<text x="446" y="248" class="k5">⑤ MC 모듈 설계·Mock-up</text>' +
    '<rect x="20" y="266" width="60" height="26" class="bx"/><text x="50" y="283" text-anchor="middle" class="s">실측</text><line x1="81" y1="279" x2="89" y2="279" class="ar"/><rect x="90" y="266" width="60" height="26" class="bx"/><text x="120" y="283" text-anchor="middle" class="s">기준점</text><line x1="151" y1="279" x2="159" y2="279" class="ar"/><rect x="160" y="266" width="60" height="26" class="bx"/><text x="190" y="283" text-anchor="middle" class="s">벽 분할</text><line x1="221" y1="279" x2="229" y2="279" class="ar"/><rect x="230" y="266" width="60" height="26" class="bx"/><text x="260" y="283" text-anchor="middle" class="s">바닥 연계</text><line x1="291" y1="279" x2="299" y2="279" class="ar"/><rect x="300" y="266" width="60" height="26" class="bx"/><text x="330" y="283" text-anchor="middle" class="s">E.J·설비</text><line x1="361" y1="279" x2="369" y2="279" class="ar"/><rect x="370" y="266" width="60" height="26" class="bx"/><text x="400" y="283" text-anchor="middle" class="s">승인·먹매김</text>' +
    '<text x="20" y="316" class="g">온장 극대화 → Loss 감소 · 균열·탈락 방지</text>' +
    '</svg>',
  subs: [
    { h: '줄눈나누기 기준', pts: ['벽→바닥 순 줄눈 일치', '[[시야 우선]]: 정면 벽 온장', '[[이질재 접합부]]·E.J 줄눈'] },
    { h: '시공 시 유의사항', pts: ['쪽타일 {{1/2장}}↑ 좌우 대칭', '수전·콘센트 줄눈 정렬', '배수구 중심 구배 분할'] },
    { h: '개선방안', pts: ['BIM 나누기·Loss율 산출', 'MC 모듈 설계·Mock-up'] }
  ],
  msg: '보이는 곳은 온장, 쪽타일은 구석으로 — 이질재·E.J에는 반드시 줄눈',
  rel: ['신축줄눈(E.J)', '타일 Mock-up', 'MC(모듈러 설계)', '먹매김', '타일 접착력 시험']
},
160: {
  tag: '시공·시간·기준',
  def: '[[붙임 모르타르]] 도포 후 소요 [[부착강도]]를 확보할 수 있는 최대 허용 부착시간으로, 압착 {{1.2㎡ 이하·15분 이내}} 등 공법별 [[붙임시간]] 준수',
  wwh: ['최대 허용 부착시간', '피막→박리 방지', '면적·시간 준수'],
  figT: '경과시간별 부착강도 저하와 허용 Open time',
  svg: '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="60" y1="230" x2="410" y2="230" class="ar"/><line x1="60" y1="230" x2="60" y2="38" class="ar"/>' +
    '<text x="66" y="48" class="s">부착강도</text>' +
    '<text x="410" y="248" text-anchor="end" class="s">경과시간(분)</text>' +
    '<text x="140" y="244" text-anchor="middle" class="s">15</text>' +
    '<text x="220" y="244" text-anchor="middle" class="s">30</text>' +
    '<text x="300" y="244" text-anchor="middle" class="s">45</text>' +
    '<line x1="60" y1="70" x2="400" y2="200" class="gr"/><line x1="60" y1="90" x2="400" y2="220" class="ln"/><line x1="60" y1="110" x2="330" y2="230" class="ln2 dash"/>' +
    '<line x1="60" y1="160" x2="410" y2="160" class="rd dash"/><circle cx="295" cy="160" r="4" class="rf"/><line x1="295" y1="160" x2="295" y2="230" class="ln2 dash"/>' +
    '<line x1="150" y1="104" x2="170" y2="64" class="ld"/><circle cx="170" cy="64" r="2" class="dotf"/><text x="174" y="68" class="bl">산형 뒷굽: 유리</text>' +
    '<line x1="200" y1="144" x2="230" y2="92" class="ld"/><circle cx="230" cy="92" r="2" class="dotf"/><text x="234" y="96" class="b">Press형 뒷굽</text>' +
    '<line x1="100" y1="128" x2="80" y2="196" class="ld"/><circle cx="80" cy="196" r="2" class="dotf"/><text x="84" y="200" class="s">Flat형 뒷굽: 불리</text>' +
    '<line x1="380" y1="160" x2="392" y2="140" class="ld"/><circle cx="392" cy="140" r="2" class="dotf"/><text x="388" y="144" text-anchor="end" class="r">기준 0.39MPa(4kgf/cm²)</text>' +
    '<line x1="295" y1="160" x2="300" y2="116" class="ld"/><circle cx="300" cy="116" r="2" class="dotf"/><text x="304" y="120" class="r">허용 Open time(교점)</text>' +
    '<text x="446" y="40" class="b">[공법별 붙임 기준]</text>' +
    '<text x="446" y="60" class="s">떠붙임 12~24mm · 즉시 붙임</text>' +
    '<text x="446" y="78" class="s">접착제 3~5mm · 10~20분</text>' +
    '<text x="446" y="100" class="k3">③ 압착 1.2㎡↓·15분 이내</text>' +
    '<text x="446" y="120" class="k3">③ 개량압착 1.5㎡↓·30분 이내</text>' +
    '<line x1="400" y1="200" x2="440" y2="136" class="ld"/><circle cx="440" cy="136" r="2" class="dotf"/><text x="446" y="140" class="k3">③ 뒷굽: 산형 &gt; Press &gt; Flat</text>' +
    '<line x1="320" y1="268" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="446" y="166" class="k4">④ 피막 형성 시 긁어내고 재도포</text>' +
    '<line x1="410" y1="160" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k4">④ 고온·강풍 → 바름면적 축소</text>' +
    '<text x="446" y="206" class="k4">④ 4주 후 0.39MPa↑·600㎡당 1장</text>' +
    '<text x="446" y="232" class="k5">⑤ 폴리머·Open time 연장형</text>' +
    '<text x="446" y="252" class="k5">⑤ 타이머 관리·타음/인발 검사</text>' +
    '<rect x="20" y="268" width="90" height="26" class="bx"/><text x="65" y="285" text-anchor="middle" class="s">Open time 초과</text><line x1="111" y1="281" x2="124" y2="281" class="ar"/><rect x="125" y="268" width="90" height="26" class="bx"/><text x="170" y="285" text-anchor="middle" class="s">피막 형성</text><line x1="216" y1="281" x2="229" y2="281" class="ar"/><rect x="230" y="268" width="90" height="26" class="bx"/><text x="275" y="285" text-anchor="middle" class="s">접착력 상실</text><line x1="321" y1="281" x2="334" y2="281" class="ar"/><rect x="335" y="268" width="90" height="26" class="bx"/><text x="380" y="285" text-anchor="middle" class="s">박리·탈락</text>' +
    '</svg>',
  subs: [
    { h: '공법별 붙임 기준', pts: ['압착 {{1.2㎡}}↓·{{15분}} 이내', '개량압착 {{1.5㎡}}↓·{{30분}} 이내', '[[뒷굽]]: 산형 > Press > Flat'] },
    { h: '시공 시 유의사항', pts: ['[[피막 형성]] 시 긁어내고 재도포', '고온·강풍 → 바름면적 축소', '{{4주}} 후 {{0.39MPa}}↑·{{600㎡}}당 1장'] },
    { h: '개선방안', pts: ['폴리머·Open time 연장형', '타이머 관리·타음/인발 검사'] }
  ],
  msg: '피막 생기기 전에 붙인다 — 면적·시간 관리가 박리·탈락 방지의 핵심',
  rel: ['압착공법', '개량압착공법', '타일 접착력 시험', 'Dry-out', '타음검사']
},
161: {
  tag: '재료·시험·성능',
  def: '역청재의 굳기를 {{25℃}} 시료에 {{100g}} 표준침을 {{5초}} 관입한 깊이({{0.1mm=1}})로 나타낸 [[침입도]]와, [[감온성]]을 수치화한 [[침입도지수(PI)]]',
  wwh: ['굳기·감온성 지표', '용도·기후별 선정', '25℃·100g·5초'],
  figT: '침입도 시험방법 및 PI 산정·분류',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="150" width="180" height="90" class="bx3"/><rect x="50" y="180" width="60" height="40" class="bx2"/><rect x="130" y="180" width="60" height="40" class="bx2"/>' +
    '<line x1="80" y1="100" x2="80" y2="180" class="ln"/><rect x="70" y="80" width="20" height="30" class="conc"/><text x="80" y="74" text-anchor="middle" class="s">100g</text>' +
    '<line x1="160" y1="125" x2="160" y2="205" class="ln"/><rect x="150" y="105" width="20" height="30" class="conc"/><text x="160" y="99" text-anchor="middle" class="s">100g</text>' +
    '<line x1="100" y1="60" x2="140" y2="60" class="ar"/><text x="120" y="52" text-anchor="middle" class="s">5초 관입</text>' +
    '<line x1="176" y1="180" x2="176" y2="205" class="ln2"/><line x1="172" y1="180" x2="180" y2="180" class="ln2"/><line x1="172" y1="205" x2="180" y2="205" class="ln2"/>' +
    '<line x1="80" y1="80" x2="90" y2="24" class="ld"/><circle cx="90" cy="24" r="2" class="dotf"/><text x="94" y="28" class="k3">③ 25℃·100g·5초 관입</text>' +
    '<line x1="80" y1="140" x2="60" y2="128" class="ld"/><circle cx="60" cy="128" r="2" class="dotf"/><text x="56" y="132" text-anchor="end" class="s">표준침</text>' +
    '<line x1="120" y1="240" x2="120" y2="258" class="ld"/><circle cx="120" cy="258" r="2" class="dotf"/><text x="124" y="262" class="bl">항온수조 25±0.1℃</text>' +
    '<line x1="60" y1="215" x2="30" y2="280" class="ld"/><circle cx="30" cy="280" r="2" class="dotf"/><text x="34" y="284" class="s">시료(아스팔트)</text>' +
    '<line x1="176" y1="200" x2="196" y2="276" class="ld"/><circle cx="196" cy="276" r="2" class="dotf"/><text x="200" y="280" class="k3">③ 관입깊이 0.1mm = 1</text>' +
    '<text x="240" y="40" class="b">PI = 30/(1+50A) − 10</text>' +
    '<text x="240" y="58" class="s">A = (log800 − logP25)/(연화점 − 25)</text>' +
    '<rect x="240" y="72" width="60" height="20" class="bx2"/><rect x="300" y="72" width="70" height="20" class="bx"/><rect x="370" y="72" width="60" height="20" class="bx3"/>' +
    '<text x="270" y="86" text-anchor="middle" class="s">Sol</text>' +
    '<text x="335" y="86" text-anchor="middle" class="s">Sol-Gel</text>' +
    '<text x="400" y="86" text-anchor="middle" class="s">Gel</text>' +
    '<text x="300" y="104" text-anchor="middle" class="r">−2</text>' +
    '<text x="370" y="104" text-anchor="middle" class="r">+2</text>' +
    '<text x="240" y="124" class="s">Sol: 감온성 큼·피치계</text>' +
    '<text x="240" y="140" class="s">Sol-Gel: 스트레이트(포장)</text>' +
    '<text x="240" y="156" class="s">Gel: 블로운(방수용)</text>' +
    '<text x="446" y="40" class="b">[침입도 특성]</text>' +
    '<text x="446" y="58" class="s">침입도 큼 = 연질(한랭지)</text>' +
    '<text x="446" y="74" class="s">침입도 작음 = 경질(고온부)</text>' +
    '<text x="446" y="90" class="s">포장 등급 40~50 ~ 200~300</text>' +
    '<line x1="430" y1="82" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="446" y="112" class="k3">③ PI 클수록 Gel형·감온성 작음</text>' +
    '<text x="446" y="136" class="s">측정 3회 평균 · KS M 2252</text>' +
    '<line x1="210" y1="200" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k4">④ 시료 25±0.1℃ 항온 유지</text>' +
    '<line x1="190" y1="190" x2="440" y2="198" class="ld"/><circle cx="440" cy="198" r="2" class="dotf"/><text x="446" y="202" class="k4">④ 측정점 10mm↑ 이격·침 청소</text>' +
    '<text x="446" y="222" class="k4">④ 과열 금지 → 연화점 변화</text>' +
    '<text x="446" y="246" class="k5">⑤ SBS·APP 개질 아스팔트</text>' +
    '<text x="446" y="266" class="k5">⑤ 침입도·연화점·신도 통합관리</text>' +
    '<rect x="20" y="300" width="60" height="26" class="bx"/><text x="50" y="317" text-anchor="middle" class="s">시료 가열</text><line x1="81" y1="313" x2="89" y2="313" class="ar"/><rect x="90" y="300" width="60" height="26" class="bx"/><text x="120" y="317" text-anchor="middle" class="s">25℃ 항온</text><line x1="151" y1="313" x2="159" y2="313" class="ar"/><rect x="160" y="300" width="60" height="26" class="bx"/><text x="190" y="317" text-anchor="middle" class="s">100g 재하</text><line x1="221" y1="313" x2="229" y2="313" class="ar"/><rect x="230" y="300" width="60" height="26" class="bx"/><text x="260" y="317" text-anchor="middle" class="s">5초 관입</text><line x1="291" y1="313" x2="299" y2="313" class="ar"/><rect x="300" y="300" width="60" height="26" class="bx"/><text x="330" y="317" text-anchor="middle" class="s">깊이 판독</text><line x1="361" y1="313" x2="369" y2="313" class="ar"/><rect x="370" y="300" width="60" height="26" class="bx"/><text x="400" y="317" text-anchor="middle" class="s">3회 평균</text>' +
    '</svg>',
  subs: [
    { h: '시험조건·PI 분류', pts: ['{{25℃}}·{{100g}}·{{5초}} 관입', '관입깊이 {{0.1mm = 1}}', 'PI 클수록 Gel형·[[감온성]] 작음'] },
    { h: '시험·사용 시 유의사항', pts: ['시료 {{25±0.1℃}} 항온 유지', '측정점 {{10mm}}↑ 이격·침 청소', '과열 금지 → 연화점 변화'] },
    { h: '개선방안', pts: ['SBS·APP 개질 아스팔트', '침입도·연화점·신도 통합관리'] }
  ],
  msg: '침입도는 굳기, PI는 온도 안정성 — 기후·부위에 맞춰 아스팔트 선정',
  rel: ['연화점', '신도', '블로운 아스팔트', '개질 아스팔트', '인화점']
},
162: {
  tag: '재료·성질·기준',
  def: '목재 수분 중량을 [[전건중량]]으로 나눈 [[함수율]]과 건조재가 물을 흡수한 [[흡수율]]로, [[섬유포화점]] {{30%}} 이하에서 수축·강도가 변함',
  wwh: ['수분/전건중량', '변형·부패 방지', '측정기·기준 확인'],
  figT: '섬유포화점 기준 수축·강도 변화',
  svg: '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="60" y1="140" x2="410" y2="140" class="ln"/><line x1="60" y1="140" x2="60" y2="36" class="ar"/>' +
    '<line x1="60" y1="280" x2="410" y2="280" class="ar"/><line x1="60" y1="280" x2="60" y2="176" class="ar"/>' +
    '<text x="66" y="46" class="s">수축률(%)</text>' +
    '<text x="66" y="186" class="s">압축강도</text>' +
    '<line x1="60" y1="55" x2="225" y2="140" class="rd"/><line x1="60" y1="90" x2="225" y2="140" class="ln"/><line x1="60" y1="128" x2="225" y2="140" class="ln2"/>' +
    '<polyline points="60,190 142,230 225,262 400,262" class="gr"/>' +
    '<line x1="225" y1="40" x2="225" y2="280" class="rd dash"/><line x1="142" y1="40" x2="142" y2="280" class="ln2 dash"/>' +
    '<text x="60" y="294" text-anchor="middle" class="s">0</text>' +
    '<text x="142" y="294" text-anchor="middle" class="s">15</text>' +
    '<text x="225" y="294" text-anchor="middle" class="s">30</text>' +
    '<text x="410" y="294" text-anchor="end" class="s">함수율(%)</text>' +
    '<line x1="110" y1="81" x2="128" y2="62" class="ld"/><circle cx="128" cy="62" r="2" class="dotf"/><text x="132" y="66" class="s">널결</text>' +
    '<line x1="150" y1="117" x2="168" y2="98" class="ld"/><circle cx="168" cy="98" r="2" class="dotf"/><text x="172" y="102" class="s">곧은결</text>' +
    '<line x1="90" y1="130" x2="96" y2="158" class="ld"/><circle cx="96" cy="158" r="2" class="dotf"/><text x="100" y="162" class="s">섬유방향</text>' +
    '<line x1="225" y1="60" x2="240" y2="50" class="ld"/><circle cx="240" cy="50" r="2" class="dotf"/><text x="244" y="54" class="k3">③ 섬유포화점 30%·기건 15%</text>' +
    '<line x1="142" y1="168" x2="160" y2="168" class="ld"/><circle cx="160" cy="168" r="2" class="dotf"/><text x="164" y="172" class="r">기건 15%</text>' +
    '<line x1="310" y1="140" x2="316" y2="122" class="ld"/><circle cx="316" cy="122" r="2" class="dotf"/><text x="320" y="126" class="s">FSP 이상: 변화 없음</text>' +
    '<line x1="100" y1="210" x2="120" y2="196" class="ld"/><circle cx="120" cy="196" r="2" class="dotf"/><text x="124" y="200" class="s">건조 → 강도 증가</text>' +
    '<text x="310" y="252" text-anchor="middle" class="s">자유수: 강도 불변</text>' +
    '<text x="446" y="40" class="b">[산정식·측정]</text>' +
    '<text x="446" y="58" class="s">함수율 = (W1−W2)/W2×100</text>' +
    '<text x="446" y="74" class="s">W2 = 전건중량 (103±2℃)</text>' +
    '<text x="446" y="90" class="s">전기저항식·고주파식 측정기</text>' +
    '<line x1="225" y1="100" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="446" y="112" class="k3">③ 구조재 24%↓(건조재 18%↓)</text>' +
    '<text x="446" y="132" class="k3">③ 수장·마감재 15%↓</text>' +
    '<text x="446" y="160" class="k4">④ 반입 시 함수율 측정기 검사</text>' +
    '<text x="446" y="180" class="k4">④ 현장 온·습도 순응 후 가공</text>' +
    '<line x1="170" y1="241" x2="440" y2="196" class="ld"/><circle cx="440" cy="196" r="2" class="dotf"/><text x="446" y="200" class="k4">④ 부패 방지 20%↓·통풍 야적</text>' +
    '<text x="446" y="224" class="k5">⑤ 인공건조재(KD)·프리컷</text>' +
    '<text x="446" y="244" class="k5">⑤ 입고 전수 측정 데이터 관리</text>' +
    '</svg>',
  subs: [
    { h: '함수율 기준', pts: ['[[섬유포화점]] {{30%}}·기건 {{15%}}', '구조재 {{24%}}↓(건조재 {{18%}}↓)', '수장·마감재 {{15%}}↓'] },
    { h: '시공 시 유의사항', pts: ['반입 시 [[함수율 측정기]] 검사', '현장 온·습도 순응 후 가공', '부패 방지 {{20%}}↓·통풍 야적'] },
    { h: '개선방안', pts: ['인공건조재(KD)·프리컷', '입고 전수 측정 데이터 관리'] }
  ],
  msg: '섬유포화점 30% 이하에서만 변한다 — 기준 함수율 이하로 건조·순응 후 사용',
  rel: ['섬유포화점', '기건함수율', '인공건조(KD)', '목재 방부처리', '전건법']
},
163: {
  tag: '재료·기능·시공',
  def: '실링재의 [[3면 접착]]을 막아 [[2면 접착]]을 유도하도록 줄눈 바닥에 두는 [[Back up재]](깊이 조절)와 [[Bond Breaker]](얕은 줄눈), D = W × {{1/2~1}}',
  wwh: ['줄눈 바닥 절연재', '2면 접착·거동 추종', 'Rod 압입·테이프'],
  figT: '3면 접착 vs 2면 접착 원리 및 시공순서',
  svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="25" y="60" width="45" height="110" class="conc"/><rect x="100" y="60" width="45" height="110" class="conc"/><rect x="70" y="100" width="30" height="70" class="conc"/><rect x="70" y="60" width="30" height="40" class="bx2"/><polyline points="74,96 80,88 76,80" class="rd"/>' +
    '<rect x="160" y="60" width="45" height="110" class="conc"/><rect x="235" y="60" width="45" height="110" class="conc"/><rect x="205" y="100" width="30" height="70" class="conc"/><rect x="205" y="60" width="30" height="37" class="bx2"/><rect x="205" y="97" width="30" height="3" class="bf"/>' +
    '<rect x="295" y="60" width="45" height="110" class="conc"/><rect x="370" y="60" width="45" height="110" class="conc"/><rect x="340" y="60" width="30" height="30" class="bx2"/><ellipse cx="355" cy="104" rx="15" ry="13" class="bx3"/>' +
    '<text x="85" y="44" text-anchor="middle" class="b">3면 접착 (×)</text>' +
    '<text x="220" y="44" text-anchor="middle" class="b">2면: Bond Breaker</text>' +
    '<text x="355" y="44" text-anchor="middle" class="b">2면: Back up재</text>' +
    '<line x1="340" y1="180" x2="370" y2="180" class="ln2"/><line x1="340" y1="175" x2="340" y2="185" class="ln2"/><line x1="370" y1="175" x2="370" y2="185" class="ln2"/><text x="355" y="196" text-anchor="middle" class="r">W</text>' +
    '<line x1="420" y1="60" x2="420" y2="90" class="ln2"/><line x1="415" y1="60" x2="425" y2="60" class="ln2"/><line x1="415" y1="90" x2="425" y2="90" class="ln2"/><text x="424" y="80" class="r">D</text>' +
    '<line x1="85" y1="100" x2="60" y2="200" class="ld"/><circle cx="60" cy="200" r="2" class="dotf"/><text x="64" y="204" class="r">바닥 구속 → 파단</text>' +
    '<line x1="40" y1="120" x2="30" y2="236" class="ld"/><circle cx="30" cy="236" r="2" class="dotf"/><text x="34" y="240" class="s">응력 집중 → 파괴</text>' +
    '<line x1="225" y1="78" x2="150" y2="186" class="ld"/><circle cx="150" cy="186" r="2" class="dotf"/><text x="154" y="190" class="s">실링재 두께 균일</text>' +
    '<line x1="220" y1="98" x2="190" y2="214" class="ld"/><circle cx="190" cy="214" r="2" class="dotf"/><text x="194" y="218" class="k3">③ Bond Breaker: 얕은 줄눈</text>' +
    '<line x1="400" y1="150" x2="380" y2="236" class="ld"/><circle cx="380" cy="236" r="2" class="dotf"/><text x="384" y="240" class="s">구조물 거동 → 신축 대응</text>' +
    '<text x="446" y="40" class="b">[W/D 비 기준]</text>' +
    '<text x="446" y="58" class="r">D = W × 1/2 ~ 1</text>' +
    '<line x1="365" y1="64" x2="440" y2="78" class="ld"/><circle cx="440" cy="78" r="2" class="dotf"/><text x="446" y="82" class="k3">③ 3면 접착 방지 → 2면 접착</text>' +
    '<line x1="362" y1="108" x2="440" y2="98" class="ld"/><circle cx="440" cy="98" r="2" class="dotf"/><text x="446" y="102" class="k3">③ Back up재: 깊이 조절(PE 발포)</text>' +
    '<line x1="370" y1="180" x2="440" y2="126" class="ld"/><circle cx="440" cy="126" r="2" class="dotf"/><text x="446" y="130" class="k4">④ 줄눈 폭+3~4mm Rod 압입</text>' +
    '<text x="446" y="150" class="k4">④ Rod 표면 손상 금지(기포)</text>' +
    '<text x="446" y="170" class="k4">④ 5℃↓·30℃↑·85%↑ 작업 중지</text>' +
    '<text x="446" y="196" class="k5">⑤ Rod 규격 표준화·압입 롤러</text>' +
    '<text x="446" y="216" class="k5">⑤ Mock-up 부착성 시험</text>' +
    '<rect x="20" y="260" width="54" height="26" class="bx"/><text x="47" y="277" text-anchor="middle" class="s">청소·건조</text><line x1="75" y1="273" x2="79" y2="273" class="ar"/><rect x="80" y="260" width="54" height="26" class="bx"/><text x="107" y="277" text-anchor="middle" class="s">Rod·BB</text><line x1="135" y1="273" x2="139" y2="273" class="ar"/><rect x="140" y="260" width="54" height="26" class="bx"/><text x="167" y="277" text-anchor="middle" class="s">마스킹</text><line x1="195" y1="273" x2="199" y2="273" class="ar"/><rect x="200" y="260" width="54" height="26" class="bx"/><text x="227" y="277" text-anchor="middle" class="s">프라이머</text><line x1="255" y1="273" x2="259" y2="273" class="ar"/><rect x="260" y="260" width="54" height="26" class="bx"/><text x="287" y="277" text-anchor="middle" class="s">실링 충전</text><line x1="315" y1="273" x2="319" y2="273" class="ar"/><rect x="320" y="260" width="54" height="26" class="bx"/><text x="347" y="277" text-anchor="middle" class="s">헤라</text><line x1="375" y1="273" x2="379" y2="273" class="ar"/><rect x="380" y="260" width="54" height="26" class="bx"/><text x="407" y="277" text-anchor="middle" class="s">양생</text>' +
    '</svg>',
  subs: [
    { h: '설치 목적·구분', pts: ['[[3면 접착 방지]] → [[2면 접착]]', 'Back up재: 깊이 조절(PE 발포)', 'Bond Breaker: 얕은 줄눈'] },
    { h: '시공 시 유의사항', pts: ['줄눈 폭+{{3~4mm}} Rod 압입', 'Rod 표면 손상 금지(기포)', '{{5℃}}↓·{{30℃}}↑·{{85%}}↑ 작업 중지'] },
    { h: '개선방안', pts: ['Rod 규격 표준화·압입 롤러', 'Mock-up 부착성 시험'] }
  ],
  msg: '바닥은 떼고 양옆만 붙인다 — 2면 접착이 실링 파단·누수를 막는다',
  rel: ['실링방수', 'Working Joint', 'Non Working Joint', '프라이머', 'Mock-up 시험']
},
164: {
  tag: '성능·기준·단열',
  def: '재료 고유의 열전달 능력인 [[열전도율(λ)]]({{W/m·K}})과, 벽체 양측 공기 사이 열통과율로 [[열저항]] 합의 역수인 [[열관류율(U)]]({{W/㎡·K}})',
  wwh: ['재료 λ·부위 U', '단열기준·부하 판정', 'U = 1/RT'],
  figT: '열전달 → 열전도 → 열전달 = 열관류',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="120" y="50" width="12" height="180" class="bx"/><rect x="132" y="50" width="80" height="180" class="conc"/><rect x="212" y="50" width="60" height="180" class="bx3"/><rect x="272" y="50" width="12" height="180" class="bx"/>' +
    '<polyline points="30,70 100,70 120,82 132,86 212,100 272,200 284,204 310,218 400,218" class="rd"/>' +
    '<line x1="60" y1="40" x2="380" y2="40" class="ar"/><text x="220" y="32" text-anchor="middle" class="s">열관류 Q = U·A·(Ti − To)</text>' +
    '<text x="40" y="64" class="b">실내 Ti</text>' +
    '<text x="396" y="210" text-anchor="end" class="b">실외 To</text>' +
    '<line x1="115" y1="80" x2="96" y2="110" class="ld"/><circle cx="96" cy="110" r="2" class="dotf"/><text x="92" y="114" text-anchor="end" class="r">Ri = 0.11 ㎡K/W</text>' +
    '<line x1="100" y1="140" x2="60" y2="160" class="ld"/><circle cx="60" cy="160" r="2" class="dotf"/><text x="56" y="164" text-anchor="end" class="s">대류+복사</text>' +
    '<line x1="172" y1="200" x2="160" y2="252" class="ld"/><circle cx="160" cy="252" r="2" class="dotf"/><text x="164" y="256" class="s">구조체 R = d/λ</text>' +
    '<line x1="242" y1="180" x2="236" y2="272" class="ld"/><circle cx="236" cy="272" r="2" class="dotf"/><text x="240" y="276" class="s">단열재: λ 작을수록 R↑</text>' +
    '<line x1="290" y1="214" x2="310" y2="250" class="ld"/><circle cx="310" cy="250" r="2" class="dotf"/><text x="314" y="254" class="r">Ro = 0.043 ㎡K/W</text>' +
    '<text x="30" y="300" class="b">U = 1/RT (W/㎡·K)</text>' +
    '<text x="30" y="320" class="s">RT = Ri + Σ(d/λ) + Ra(중공층) + Ro</text>' +
    '<text x="446" y="40" class="b">[열관류율 기준]</text>' +
    '<text x="446" y="58" class="r">중부1 외벽(외기직접) 0.150↓</text>' +
    '<line x1="262" y1="110" x2="440" y2="78" class="ld"/><circle cx="440" cy="78" r="2" class="dotf"/><text x="446" y="82" class="k3">③ λ: 재료 고유 W/m·K</text>' +
    '<line x1="284" y1="130" x2="440" y2="98" class="ld"/><circle cx="440" cy="98" r="2" class="dotf"/><text x="446" y="102" class="k3">③ U: 부위 성능 W/㎡·K</text>' +
    '<line x1="250" y1="170" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k3">③ 단열재 가등급 λ 0.034↓</text>' +
    '<text x="446" y="146" class="k4">④ 이음부 밀착·틈새 발포 충전</text>' +
    '<text x="446" y="166" class="k4">④ 슬래브·창호 접합부 열교 차단</text>' +
    '<line x1="270" y1="190" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k4">④ 함수 시 λ 급증 → 방습층</text>' +
    '<text x="446" y="210" class="k5">⑤ 외단열 일체형·진공단열재</text>' +
    '<text x="446" y="230" class="k5">⑤ 열화상·현장 U값 검증</text>' +
    '</svg>',
  subs: [
    { h: '특징 비교·단열재 등급', pts: ['λ: 재료 고유 {{W/m·K}}', 'U: 부위 성능 {{W/㎡·K}}', '단열재 가등급 λ {{0.034}}↓'] },
    { h: '시공 시 유의사항', pts: ['이음부 밀착·틈새 발포 충전', '슬래브·창호 접합부 [[열교]] 차단', '함수 시 λ 급증 → 방습층'] },
    { h: '개선방안', pts: ['외단열 일체형·진공단열재', '열화상·현장 U값 검증'] }
  ],
  msg: 'λ로 재료를 고르고 U로 벽체를 판정 — 열교 없는 연속 단열',
  rel: ['열교(Thermal Bridge)', '단열재 등급', '표면결로', '에너지절약설계기준', 'ZEB']
},
165: {
  tag: '기준·성능·결로',
  def: '실내외 온도차에 대한 실내와 부위 [[실내표면온도]] 차의 비율({{0~1}})로, 작을수록 [[노점온도]] 이상으로 유지되는 [[결로방지 성능]] 지표',
  wwh: ['온도차이비율', '표면결로 방지', '부위·지역별 기준'],
  figT: 'TDR 산정 원리와 접합부 표면온도',
  svg: '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="80" y="50" width="30" height="210" class="conc"/><rect x="110" y="50" width="18" height="90" class="bx3"/><rect x="110" y="160" width="18" height="100" class="bx3"/><rect x="80" y="140" width="120" height="20" class="conc"/>' +
    '<rect x="84" y="72" width="22" height="46" class="bx"/><line x1="95" y1="72" x2="95" y2="118" class="ln2"/>' +
    '<text x="30" y="64" class="b">실외</text>' +
    '<text x="24" y="82" class="s">Ⅰ −20℃</text>' +
    '<text x="24" y="98" class="s">Ⅱ −15℃</text>' +
    '<text x="24" y="114" class="s">Ⅲ −10℃</text>' +
    '<text x="150" y="64" class="b">실내 25℃·RH50%</text>' +
    '<line x1="119" y1="90" x2="150" y2="96" class="ld"/><circle cx="150" cy="96" r="2" class="dotf"/><text x="154" y="100" class="s">단열재</text>' +
    '<line x1="106" y1="100" x2="150" y2="126" class="ld"/><circle cx="150" cy="126" r="2" class="dotf"/><text x="154" y="130" class="s">창호(유리 중앙부)</text>' +
    '<line x1="128" y1="160" x2="150" y2="180" class="ld"/><circle cx="150" cy="180" r="2" class="dotf"/><text x="154" y="184" class="r">열교부 Ts 저하</text>' +
    '<line x1="95" y1="236" x2="70" y2="252" class="ld"/><circle cx="70" cy="252" r="2" class="dotf"/><text x="66" y="256" text-anchor="end" class="s">구조체</text>' +
    '<line x1="119" y1="220" x2="150" y2="236" class="ld"/><circle cx="150" cy="236" r="2" class="dotf"/><text x="154" y="240" class="s">실내측 단열 연속</text>' +
    '<text x="230" y="44" class="b">TDR = (Ti − Ts)/(Ti − To)</text>' +
    '<line x1="330" y1="60" x2="330" y2="260" class="ln"/><line x1="320" y1="60" x2="340" y2="60" class="ln"/><line x1="320" y1="260" x2="340" y2="260" class="ln"/>' +
    '<line x1="296" y1="112" x2="340" y2="112" class="rd"/><line x1="296" y1="116" x2="420" y2="116" class="ln2 dash"/>' +
    '<line x1="300" y1="60" x2="300" y2="112" class="ln2"/><line x1="280" y1="60" x2="280" y2="260" class="ln2"/>' +
    '<text x="344" y="64" class="b">Ti = 25℃</text>' +
    '<text x="296" y="90" text-anchor="end" class="s">Ti − Ts</text>' +
    '<text x="276" y="220" text-anchor="end" class="s">Ti − To</text>' +
    '<text x="276" y="116" text-anchor="end" class="r">Ts ≥ 14.6℃</text>' +
    '<text x="344" y="134" class="bl">노점 13.9℃</text>' +
    '<line x1="330" y1="260" x2="344" y2="276" class="ld"/><circle cx="344" cy="276" r="2" class="dotf"/><text x="348" y="280" class="b">To = −15℃(Ⅱ)</text>' +
    '<text x="20" y="296" class="r">예) 지역Ⅱ 벽체 0.26 → Ts ≥ 25 − 0.26×40 = 14.6℃ &gt; 노점 13.9℃</text>' +
    '<text x="446" y="40" class="b">[TDR 기준 Ⅰ·Ⅱ·Ⅲ]</text>' +
    '<text x="446" y="58" class="s">500세대↑ 공동주택 · 0~1</text>' +
    '<text x="446" y="74" class="s">실내 25℃ · RH 50% 조건</text>' +
    '<text x="446" y="96" class="k3">③ 출입문 0.30·0.33·0.38</text>' +
    '<line x1="340" y1="112" x2="440" y2="112" class="ld"/><circle cx="440" cy="112" r="2" class="dotf"/><text x="446" y="116" class="k3">③ 벽체 접합부 0.25·0.26·0.28</text>' +
    '<text x="446" y="136" class="k3">③ 창 유리 중앙 0.16·0.18·0.20</text>' +
    '<text x="446" y="162" class="k4">④ 단열간봉·Low-E·창틀 기밀</text>' +
    '<line x1="200" y1="150" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k4">④ 접합부·우각부 열교 차단</text>' +
    '<text x="446" y="202" class="k4">④ 시뮬레이션·KS F 2295 검증</text>' +
    '<text x="446" y="228" class="k5">⑤ 환기장치 연속 운전 안내</text>' +
    '<text x="446" y="248" class="k5">⑤ 준공 전 열화상 점검·보수</text>' +
    '</svg>',
  subs: [
    { h: '부위별 기준(TDR 이하, Ⅰ·Ⅱ·Ⅲ)', pts: ['출입문 {{0.30·0.33·0.38}}', '벽체 접합부 {{0.25·0.26·0.28}}', '창 유리 중앙 {{0.16·0.18·0.20}}'] },
    { h: '시공 시 유의사항', pts: ['단열간봉·Low-E·창틀 기밀', '접합부·우각부 [[열교 차단]]', '시뮬레이션·KS F 2295 검증'] },
    { h: '개선방안', pts: ['환기장치 연속 운전 안내', '준공 전 열화상 점검·보수'] }
  ],
  msg: 'TDR이 작을수록 표면온도↑ — 노점 위로 유지하면 결로 없음',
  rel: ['표면결로', '내부결로', '열교', '노점온도', 'KS F 2295']
},
166: {
  tag: '재료·기능·결로',
  def: '구조체 내부로의 수증기 이동을 막아 [[내부결로]]를 방지하는 [[투습저항]]이 큰 층으로, 투습 {{30g/㎡·24h 이하}}이며 단열재 [[실내측(고온측)]]에 설치',
  wwh: ['불투습층', '내부결로 방지', '실내측 연속 설치'],
  figT: '방습층 위치와 온도·노점 분포',
  svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="110" y="50" width="10" height="180" class="bx"/><rect x="120" y="50" width="4" height="180" class="rf"/><rect x="124" y="50" width="80" height="180" class="bx3"/><rect x="204" y="50" width="80" height="180" class="conc"/>' +
    '<polyline points="30,70 110,78 124,82 204,190 284,200 400,210" class="rd"/>' +
    '<polyline points="30,118 120,118 124,200 284,212 400,214" class="ln dash"/>' +
    '<text x="24" y="64" class="b">실내(고온다습)</text>' +
    '<text x="394" y="64" text-anchor="end" class="b">실외(저온)</text>' +
    '<line x1="122" y1="60" x2="140" y2="36" class="ld"/><circle cx="140" cy="36" r="2" class="dotf"/><text x="144" y="40" class="bl">방습층(실내측·고온측)</text>' +
    '<line x1="164" y1="220" x2="150" y2="252" class="ld"/><circle cx="150" cy="252" r="2" class="dotf"/><text x="154" y="256" class="s">단열재</text>' +
    '<line x1="244" y1="220" x2="240" y2="252" class="ld"/><circle cx="240" cy="252" r="2" class="dotf"/><text x="244" y="256" class="s">구조체(콘크리트)</text>' +
    '<line x1="70" y1="74" x2="70" y2="94" class="ld"/><circle cx="70" cy="94" r="2" class="dotf"/><text x="74" y="98" class="s">건구온도</text>' +
    '<line x1="70" y1="118" x2="70" y2="136" class="ld"/><circle cx="70" cy="136" r="2" class="dotf"/><text x="74" y="140" class="s">노점온도</text>' +
    '<text x="30" y="284" class="r">노점 급강하 → 교차 없음 = 내부결로 방지</text>' +
    '<text x="446" y="40" class="b">[투습 성능]</text>' +
    '<text x="446" y="58" class="r">투습 30g/㎡·24h↓</text>' +
    '<text x="446" y="76" class="r">투습계수 0.28g/㎡·h·mmHg↓</text>' +
    '<line x1="122" y1="120" x2="440" y2="96" class="ld"/><circle cx="440" cy="96" r="2" class="dotf"/><text x="446" y="100" class="k3">③ PE필름 0.1mm↑·도포·가변형</text>' +
    '<text x="446" y="120" class="k3">③ 벽: 실내측 / 바닥: 지반측</text>' +
    '<text x="446" y="140" class="k3">③ 조적 하부 GL+100~200mm</text>' +
    '<line x1="122" y1="170" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="446" y="166" class="k4">④ 실내측 설치·실외측 금지</text>' +
    '<line x1="122" y1="200" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k4">④ 100mm↑ 겹침·기밀 테이핑</text>' +
    '<text x="446" y="206" class="k4">④ 관통부·콘센트 실링·찢김 보수</text>' +
    '<line x1="284" y1="120" x2="440" y2="226" class="ld"/><circle cx="440" cy="226" r="2" class="dotf"/><text x="446" y="230" class="k5">⑤ 실외측 투습방수지 병용</text>' +
    '<text x="446" y="250" class="k5">⑤ 가변형 방습지·기밀시험</text>' +
    '</svg>',
  subs: [
    { h: '종류·부위별 설치', pts: ['[[PE필름]] {{0.1mm}}↑·도포·가변형', '벽: 실내측 / 바닥: 지반측', '조적 하부 GL+{{100~200mm}}'] },
    { h: '시공 시 유의사항', pts: ['실내측 설치·실외측 금지', '{{100mm}}↑ 겹침·[[기밀 테이핑]]', '관통부·콘센트 실링·찢김 보수'] },
    { h: '개선방안', pts: ['실외측 투습방수지 병용', '[[가변형 방습지]]·기밀시험'] }
  ],
  msg: '방습층은 따뜻한 쪽에, 끊김 없이 — 노점선이 온도선을 넘지 않게',
  rel: ['내부결로', '투습방수지', '단열재', '기밀시험(Blower door)', '가변형 방습지']
},
167: {
  tag: '현상·기준·성능',
  def: '가볍고 딱딱한 충격의 고주파 [[경량충격음]]과 무겁고 부드러운 충격의 저주파 [[중량충격음]]으로, 모두 {{49dB 이하}}를 [[사후확인제]]로 확인',
  wwh: ['바닥충격음 2종', '층간 분쟁 방지', '측정·뜬바닥구조'],
  figT: '바닥충격음 시험방법 및 표준바닥구조',
  svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="40" width="14" height="260" class="conc"/><rect x="34" y="150" width="4" height="48" class="rf"/>' +
    '<rect x="38" y="150" width="262" height="6" class="bx2"/><rect x="38" y="156" width="262" height="18" class="conc"/><rect x="38" y="174" width="262" height="16" class="bx3"/><rect x="34" y="190" width="266" height="8" class="bx2"/><rect x="34" y="198" width="266" height="30" class="conc"/>' +
    '<line x1="20" y1="300" x2="300" y2="300" class="ln"/>' +
    '<text x="40" y="56" class="b">경량(고주파)</text>' +
    '<text x="200" y="56" class="b">중량(저주파)</text>' +
    '<rect x="60" y="128" width="80" height="22" class="bx"/><line x1="76" y1="128" x2="76" y2="118" class="ln"/><line x1="100" y1="128" x2="100" y2="118" class="ln"/><line x1="124" y1="128" x2="124" y2="118" class="ln"/>' +
    '<line x1="100" y1="128" x2="52" y2="80" class="ld"/><circle cx="52" cy="80" r="2" class="dotf"/><text x="56" y="84" class="r">태핑머신 500g·40mm</text>' +
    '<circle cx="220" cy="100" r="12" class="bx3"/><line x1="220" y1="114" x2="220" y2="146" class="ar"/><line x1="196" y1="88" x2="196" y2="150" class="ln2"/><text x="192" y="124" text-anchor="end" class="s">1m</text>' +
    '<line x1="232" y1="96" x2="240" y2="74" class="ld"/><circle cx="240" cy="74" r="2" class="dotf"/><text x="244" y="78" class="r">임팩트볼 2.5kg·1m</text>' +
    '<line x1="290" y1="153" x2="312" y2="140" class="ld"/><circle cx="312" cy="140" r="2" class="dotf"/><text x="316" y="144" class="s">마감재(바닥재)</text>' +
    '<line x1="290" y1="165" x2="312" y2="156" class="ld"/><circle cx="312" cy="156" r="2" class="dotf"/><text x="316" y="160" class="s">마감 모르타르</text>' +
    '<line x1="290" y1="182" x2="312" y2="172" class="ld"/><circle cx="312" cy="172" r="2" class="dotf"/><text x="316" y="176" class="s">경량기포콘크리트</text>' +
    '<line x1="290" y1="194" x2="312" y2="188" class="ld"/><circle cx="312" cy="188" r="2" class="dotf"/><text x="316" y="192" class="k4">④ 완충재 성능인정서·샘플시험</text>' +
    '<line x1="290" y1="213" x2="312" y2="208" class="ld"/><circle cx="312" cy="208" r="2" class="dotf"/><text x="316" y="212" class="b">슬래브</text>' +
    '<line x1="120" y1="230" x2="150" y2="252" class="ar dash"/><line x1="160" y1="262" x2="160" y2="296" class="ln"/><circle cx="160" cy="262" r="5" class="rf"/>' +
    '<line x1="166" y1="262" x2="190" y2="264" class="ld"/><circle cx="190" cy="264" r="2" class="dotf"/><text x="194" y="268" class="s">수음실 마이크 측정</text>' +
    '<line x1="36" y1="198" x2="60" y2="240" class="ld"/><circle cx="60" cy="240" r="2" class="dotf"/><text x="64" y="244" class="k4">④ 측면 완충재 연속(Sound Bridge 방지)</text>' +
    '<text x="446" y="40" class="b">[등급 기준 dB]</text>' +
    '<text x="446" y="58" class="s">2급 41↓ · 3급 45↓</text>' +
    '<text x="446" y="74" class="s">종전: 경량 58 · 중량 50dB</text>' +
    '<text x="446" y="96" class="k3">③ 경량·중량 모두 49dB↓(4급)</text>' +
    '<text x="446" y="116" class="k3">③ 1급 37dB↓ 최상</text>' +
    '<text x="446" y="136" class="k3">③ 사후확인제 표본세대 측정</text>' +
    '<text x="446" y="216" class="k4">④ 평탄도 7mm/3m·사진기록</text>' +
    '<line x1="300" y1="220" x2="440" y2="236" class="ld"/><circle cx="440" cy="236" r="2" class="dotf"/><text x="446" y="240" class="k5">⑤ 슬래브 두께↑·라멘 구조</text>' +
    '<text x="446" y="260" class="k5">⑤ 고성능 완충재·IoT 알림</text>' +
    '</svg>',
  subs: [
    { h: '등급·기준', pts: ['경량·중량 모두 {{49dB}}↓(4급)', '1급 {{37dB}}↓ 최상', '[[사후확인제]] 표본세대 측정'] },
    { h: '품질관리 사항', pts: ['[[완충재]] 성능인정서·샘플시험', '측면 완충재 연속(Sound Bridge 방지)', '평탄도 {{7mm/3m}}·사진기록'] },
    { h: '개선방안', pts: ['슬래브 두께↑·라멘 구조', '고성능 완충재·IoT 알림'] }
  ],
  msg: '완충재 연속 시공으로 Sound Bridge 차단 — 49dB 이하 사후확인',
  rel: ['사후확인제', '완충재', '뜬바닥구조', 'Sound Bridge', '질량법칙(Mass Law)']
},
168: {
  tag: '제도·기준·환경',
  def: '[[친환경 건축자재]]와 [[환기설비]]로 일정 수준 이상의 실내공기질·환기성능을 확보한 주택으로, {{500세대 이상}} 공동주택에 [[의무기준]] 적용',
  wwh: ['청정 실내공기 주택', '새집증후군 예방', '자재·환기·관리'],
  figT: '오염원 저감·배출·환기 3단 관리',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="40" y="60" width="300" height="160" fill="none" class="ln"/><rect x="40" y="220" width="300" height="10" class="conc"/>' +
    '<rect x="140" y="62" width="80" height="20" class="bx"/><text x="180" y="76" text-anchor="middle" class="s">환기장치</text>' +
    '<line x1="20" y1="72" x2="138" y2="72" class="ar"/><line x1="222" y1="72" x2="380" y2="72" class="ar"/>' +
    '<line x1="160" y1="82" x2="160" y2="120" class="ar dash"/><line x1="200" y1="120" x2="200" y2="84" class="ar dash"/>' +
    '<rect x="270" y="140" width="60" height="80" class="bx2"/><text x="300" y="182" text-anchor="middle" class="s">붙박이</text>' +
    '<circle cx="250" cy="150" r="3" class="rf"/><circle cx="258" cy="170" r="3" class="rf"/><circle cx="244" cy="190" r="3" class="rf"/>' +
    '<line x1="60" y1="72" x2="64" y2="46" class="ld"/><circle cx="64" cy="46" r="2" class="dotf"/><text x="68" y="50" class="s">신선 외기</text>' +
    '<line x1="360" y1="72" x2="364" y2="46" class="ld"/><circle cx="364" cy="46" r="2" class="dotf"/><text x="368" y="50" class="s">오염공기 배출</text>' +
    '<line x1="250" y1="150" x2="226" y2="134" class="ld"/><circle cx="226" cy="134" r="2" class="dotf"/><text x="222" y="138" text-anchor="end" class="r">HCHO·VOCs</text>' +
    '<line x1="120" y1="220" x2="100" y2="250" class="ld"/><circle cx="100" cy="250" r="2" class="dotf"/><text x="104" y="254" class="k3">③ 의무: 친환경 건축자재</text>' +
    '<line x1="220" y1="66" x2="440" y2="94" class="ld"/><circle cx="440" cy="94" r="2" class="dotf"/><text x="446" y="98" class="k3">③ 의무: 환기 0.5회/h↑</text>' +
    '<line x1="330" y1="150" x2="440" y2="114" class="ld"/><circle cx="440" cy="114" r="2" class="dotf"/><text x="446" y="118" class="k3">③ 권장: 기능성 자재·국소배기</text>' +
    '<text x="446" y="40" class="b">[실내공기질 권고 µg/㎥]</text>' +
    '<text x="446" y="58" class="r">HCHO 210 · 톨루엔 1,000</text>' +
    '<text x="446" y="74" class="r">벤젠 30 · 라돈 148Bq/㎥</text>' +
    '<text x="446" y="146" class="k4">④ HB마크·환경표지·밀폐 보관</text>' +
    '<line x1="340" y1="180" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="446" y="166" class="k4">④ 흡착성 자재 오염공정 후 시공</text>' +
    '<text x="446" y="192" class="k5">⑤ ERV + HEPA 필터</text>' +
    '<text x="446" y="212" class="k5">⑤ IoT 공기질 모니터링·환기 연동</text>' +
    '<text x="446" y="236" class="s">500세대↑ 의무 · 권장 별도</text>' +
    '<rect x="20" y="270" width="60" height="26" class="bx"/><text x="50" y="287" text-anchor="middle" class="s">설계</text><line x1="81" y1="283" x2="89" y2="283" class="ar"/><rect x="90" y="270" width="60" height="26" class="bx"/><text x="120" y="287" text-anchor="middle" class="s">자재 선정</text><line x1="151" y1="283" x2="159" y2="283" class="ar"/><rect x="160" y="270" width="60" height="26" class="bx"/><text x="190" y="287" text-anchor="middle" class="s">시공 중 환기</text><line x1="221" y1="283" x2="229" y2="283" class="ar"/><rect x="230" y="270" width="60" height="26" class="bx"/><text x="260" y="287" text-anchor="middle" class="s">Bake/Flush</text><line x1="291" y1="283" x2="299" y2="283" class="ar"/><rect x="300" y="270" width="60" height="26" class="bx"/><text x="330" y="287" text-anchor="middle" class="s">측정</text><line x1="361" y1="283" x2="369" y2="283" class="ar"/><rect x="370" y="270" width="60" height="26" class="bx"/><text x="400" y="287" text-anchor="middle" class="s">공고</text>' +
    '<line x1="400" y1="296" x2="404" y2="316" class="ld"/><circle cx="404" cy="316" r="2" class="dotf"/><text x="408" y="320" class="k4">④ 입주 7일 전부터 60일간 공고</text>' +
    '</svg>',
  subs: [
    { h: '주요 건설기준', pts: ['의무: [[친환경 건축자재]]', '의무: 환기 {{0.5회/h}}↑', '권장: 기능성 자재·국소배기'] },
    { h: '시공 시 유의사항', pts: ['HB마크·환경표지·밀폐 보관', '흡착성 자재 오염공정 후 시공', '입주 {{7일 전}}부터 {{60일간}} 공고'] },
    { h: '개선방안', pts: ['ERV + HEPA 필터', 'IoT 공기질 모니터링·환기 연동'] }
  ],
  msg: '저방출 자재로 줄이고, 굽고 내보내고, 상시 환기한다',
  rel: ['새집증후군', 'Bake out', 'Flush out', 'HB마크', '실내공기질 관리법']
},
169: {
  tag: '공법·환경·기준',
  def: '실내를 {{33~38℃}}로 가열해 방출 후 환기하는 [[Bake out]]과 외기 {{400㎥/㎡}}를 공급해 배출하는 [[Flush out]]으로 [[새집증후군]]을 저감',
  wwh: ['가열·외기 배출', 'VOCs·HCHO 저감', '사용검사 전 실시'],
  figT: 'Bake out 온도 Cycle 및 Flush out 개념',
  svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="200" x2="420" y2="200" class="ar"/><line x1="50" y1="200" x2="50" y2="36" class="ar"/>' +
    '<text x="56" y="48" class="s">실내온도(℃)</text>' +
    '<text x="420" y="216" text-anchor="end" class="s">시간(h)</text>' +
    '<line x1="50" y1="70" x2="410" y2="70" class="rd dash"/><line x1="50" y1="90" x2="410" y2="90" class="rd dash"/>' +
    '<polyline points="50,180 65,80 145,80 150,170 165,170 175,80 255,80 260,170 275,170 285,80 365,80 370,170 385,170" class="rd"/>' +
    '<line x1="65" y1="100" x2="145" y2="100" class="ln2"/><text x="105" y="114" text-anchor="middle" class="s">8h</text>' +
    '<text x="105" y="132" text-anchor="middle" class="s">1회</text>' +
    '<text x="215" y="132" text-anchor="middle" class="s">2회</text>' +
    '<text x="325" y="132" text-anchor="middle" class="s">3회</text>' +
    '<line x1="105" y1="80" x2="130" y2="58" class="ld"/><circle cx="130" cy="58" r="2" class="dotf"/><text x="134" y="62" class="k3">③ Bake: 33~38℃·8시간 유지</text>' +
    '<line x1="157" y1="170" x2="180" y2="186" class="ld"/><circle cx="180" cy="186" r="2" class="dotf"/><text x="184" y="190" class="k3">③ 2시간 환기 × 3회 이상</text>' +
    '<line x1="58" y1="140" x2="76" y2="150" class="ld"/><circle cx="76" cy="150" r="2" class="dotf"/><text x="80" y="154" class="s">가열 → 방출 촉진</text>' +
    '<rect x="40" y="240" width="200" height="70" fill="none" class="ln"/><circle cx="60" cy="275" r="12" class="bx3"/><line x1="74" y1="275" x2="220" y2="275" class="ar dash"/><line x1="240" y1="275" x2="280" y2="275" class="ar"/>' +
    '<text x="46" y="254" class="b">Flush out</text>' +
    '<line x1="60" y1="263" x2="64" y2="232" class="ld"/><circle cx="64" cy="232" r="2" class="dotf"/><text x="68" y="236" class="s">대형팬·기계환기</text>' +
    '<line x1="280" y1="275" x2="290" y2="256" class="ld"/><circle cx="290" cy="256" r="2" class="dotf"/><text x="294" y="260" class="s">오염물질 배출</text>' +
    '<line x1="150" y1="278" x2="96" y2="296" class="ld"/><circle cx="96" cy="296" r="2" class="dotf"/><text x="100" y="300" class="k3">③ Flush: 16℃↑·RH 60%↓·400㎥/㎡</text>' +
    '<text x="446" y="40" class="b">[사전 조치·비교]</text>' +
    '<text x="446" y="58" class="s">Bake: 방출 효과 큼·과열 위험</text>' +
    '<text x="446" y="74" class="s">Flush: 자재 손상 적음·장시간</text>' +
    '<line x1="410" y1="70" x2="440" y2="94" class="ld"/><circle cx="440" cy="94" r="2" class="dotf"/><text x="446" y="98" class="k4">④ 개구부 밀폐·포장재 제거</text>' +
    '<line x1="365" y1="80" x2="440" y2="114" class="ld"/><circle cx="440" cy="114" r="2" class="dotf"/><text x="446" y="118" class="k4">④ 과열·화재 감시·변형 확인</text>' +
    '<text x="446" y="138" class="k4">④ 실내공기질 공고 7일 전·60일</text>' +
    '<text x="446" y="162" class="k5">⑤ 저방출 자재로 원천 저감</text>' +
    '<text x="446" y="182" class="k5">⑤ 환기설비 연동 자동 운전</text>' +
    '</svg>',
  subs: [
    { h: '특징·시행 기준', pts: ['Bake: {{33~38℃}}·[[8시간 유지]]', '[[2시간 환기]] × {{3회}} 이상', 'Flush: {{16℃}}↑·RH {{60%}}↓·{{400㎥/㎡}}'] },
    { h: '시공 시 유의사항', pts: ['개구부 밀폐·포장재 제거', '과열·화재 감시·변형 확인', '실내공기질 공고 {{7일 전}}·{{60일}}'] },
    { h: '개선방안', pts: ['저방출 자재로 원천 저감', '환기설비 연동 자동 운전'] }
  ],
  msg: '굽고(33~38℃·8h) 빼고(2h×3회), 불어낸다(400㎥/㎡)',
  rel: ['건강친화형 주택', '새집증후군', '실내공기질 공고', '환기설비', 'HB마크']
}
});
