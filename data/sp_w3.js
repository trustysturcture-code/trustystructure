// 간단 요약(한눈에·따라 그리기) — 이번주 157~180 / 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.w, {
157: {
  one: '용접·절단 전 모재를 미리 가열하는 [[예열]] — 냉각속도를 늦춰 [[저온균열]]·[[열영향부 경화]] 방지, 최대 {{230℃ 이하}}',
  flow: ['온도 결정', '양측 가열', '75mm 측정', '용접', '패스간 관리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="130" width="170" height="40" class="bx"/><rect x="250" y="130" width="170" height="40" class="bx"/>' +
    '<path d="M230,130 L240,170 L250,130" class="ln"/>' +
    '<rect x="140" y="122" width="200" height="56" fill="none" class="rd dash"/>' +
    '<line x1="140" y1="110" x2="240" y2="110" class="ln"/><line x1="240" y1="110" x2="340" y2="110" class="ln"/>' +
    '<text x="190" y="100" text-anchor="middle" class="r">100mm</text><text x="290" y="100" text-anchor="middle" class="r">100mm</text>' +
    '<line x1="240" y1="48" x2="240" y2="88" class="ld"/><text x="240" y="40" text-anchor="middle" class="t">용접선</text>' +
    '<text x="85" y="156">모재</text>' +
    '<circle cx="165" cy="150" r="6" class="rf"/><line x1="165" y1="180" x2="165" y2="205" class="ld"/><text x="165" y="222" text-anchor="middle" class="bl">75mm 온도측정</text>' +
    '<text x="470" y="40" text-anchor="end" class="r">최대 230℃</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">0℃ 이하 · Ceq 0.44% · t40mm↑ → 예열</text>' +
    '<text x="140" y="102" class="n">①</text><text x="178" y="158" class="n">②</text><text x="370" y="40" class="n">③</text></svg>',
  heads: [
    { h: '예열 기준', k: ['모재 {{0℃ 이하}}', '[[탄소당량]] {{0.44%}} 초과', '판두께 {{40mm↑}}'] },
    { h: '유의사항', k: ['[[양측 100mm]] 균일', '75mm 온도측정', '결로·수분 제거'] },
    { h: '개선방안', k: ['TMC강 예열 생략', '자동 온도기록'] }
  ],
  code: '예열 = 영·사사·사십 (0℃·Ceq 0.44·40mm) / 백백·칠오·230',
  read: '①용접선 양측 100mm 가열 → ②75mm 지점 온도 확인 → ③최대 230℃ 이하로 용접'
},
158: {
  one: '화재 시 강재 온도상승을 막는 [[내화피복]]의 [[두께·비중]]을 시공 중 {{5㎡당 1개소}}, 시공 후 [[코어 채취]]로 확인',
  flow: ['바탕처리', '반입검사', '공법별 시공', '두께·비중 측정', '판정·보수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="60" width="160" height="36" class="conc"/><rect x="195" y="90" width="50" height="110" class="conc"/><rect x="140" y="194" width="160" height="36" class="conc"/>' +
    '<rect x="150" y="70" width="140" height="16" class="bx2"/><rect x="213" y="86" width="14" height="118" class="bx2"/><rect x="150" y="204" width="140" height="16" class="bx2"/>' +
    '<text x="240" y="36" text-anchor="middle" class="r">600℃ → 강도 약 1/2</text>' +
    '<line x1="300" y1="70" x2="340" y2="62" class="ld"/><text x="344" y="66">뿜칠 피복</text>' +
    '<line x1="227" y1="140" x2="330" y2="140" class="ld"/><text x="336" y="145">강재(H형강)</text>' +
    '<line x1="300" y1="222" x2="340" y2="230" class="ld"/><text x="344" y="236" class="r">두께·비중</text>' +
    '<line x1="196" y1="150" x2="120" y2="150" class="ld"/><text x="112" y="155" text-anchor="end" class="bl">코어 채취</text>' +
    '<text x="240" y="264" text-anchor="middle" class="s2">시공 중 5㎡당 1개소 / 시공 후 1,500㎡마다 5개소</text>' +
    '<text x="145" y="38" class="n">①</text><text x="306" y="102" class="n">②</text><text x="25" y="156" class="n">③</text></svg>',
  heads: [
    { h: '공법별 검사', k: ['시공 중 {{5㎡당 1개소}}', '[[코어 채취]] 두께·비중', '{{1,500㎡마다}} 5개소'] },
    { h: '유의사항', k: ['바탕 녹·유분 제거', '노즐 {{90°}}·0.5m', '탈락부 보수'] },
    { h: '개선방안', k: ['초음파 비파괴 측정', 'Shop Coating', 'BIM 검측'] }
  ],
  code: '검사 = 오·천오백·오 (5㎡당 1·1,500㎡마다·5개소)',
  read: '①600℃면 강재 강도 1/2 → ②피복 두께·비중이 온도상승 지연 → ③코어 채취로 확인'
},
159: {
  one: '타일 시공 전 [[실측]] 치수로 [[온장]]·[[쪽타일]] 배치와 줄눈 위치를 정한 분할도 — 쪽타일은 {{1/2장 이상}}',
  flow: ['현장 실측', '기준점 설정', '벽→바닥 분할', 'E.J·설비 반영', '승인·먹매김'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="30" height="180" class="bx3"/><rect x="290" y="40" width="30" height="180" class="bx3"/><rect x="60" y="190" width="260" height="30" class="bx3"/>' +
    '<rect x="60" y="40" width="260" height="180" fill="none" class="ln"/>' +
    '<line x1="90" y1="40" x2="90" y2="220" class="ln2"/><line x1="140" y1="40" x2="140" y2="220" class="ln2"/><line x1="190" y1="40" x2="190" y2="220" class="ln2"/><line x1="240" y1="40" x2="240" y2="220" class="ln2"/><line x1="290" y1="40" x2="290" y2="220" class="ln2"/>' +
    '<line x1="60" y1="90" x2="320" y2="90" class="ln2"/><line x1="60" y1="140" x2="320" y2="140" class="ln2"/><line x1="60" y1="190" x2="320" y2="190" class="ln2"/>' +
    '<circle cx="190" cy="40" r="6" class="rf"/><line x1="190" y1="34" x2="190" y2="20" class="ld"/><text x="200" y="22" class="r">기준점(정면 중앙)</text>' +
    '<text x="165" y="121" text-anchor="middle" class="t">온장</text>' +
    '<text x="354" y="80" class="s2">벽 → 바닥 순</text>' +
    '<line x1="305" y1="120" x2="350" y2="120" class="ld"/><text x="354" y="125">쪽타일 1/2장↑</text>' +
    '<text x="354" y="200" class="bl">이질재 → 줄눈</text>' +
    '<text x="190" y="252" text-anchor="middle" class="s2">쪽타일은 구석·하부·가구 뒤로</text>' +
    '<text x="168" y="26" class="n">①</text><text x="118" y="122" class="n">②</text><text x="330" y="110" class="n">③</text></svg>',
  heads: [
    { h: '나누기 기준', k: ['벽→바닥 줄눈 일치', '[[시야 우선]] 온장', '[[이질재 접합부]] 줄눈'] },
    { h: '유의사항', k: ['쪽타일 {{1/2장↑}} 대칭', '수전·콘센트 정렬', '배수구 중심 분할'] },
    { h: '개선방안', k: ['BIM 나누기·Loss율', 'MC 설계·Mock-up'] }
  ],
  code: '기술 = 벽바·접합·이질 / 시각 = 문·온장·신발장 → “벽바이 문온신”',
  read: '①정면 중앙 기준점에서 분할 → ②시야 부위는 온장 → ③쪽타일(1/2장↑)은 구석·하부로'
},
160: {
  one: '[[붙임 모르타르]] 도포 후 소요 [[부착강도]]를 확보할 수 있는 최대 허용 시간 — 압착 {{1.2㎡·15분 이내}}',
  flow: ['모르타르 도포', '시간 경과', '표면 피막', '부착력 급감', '박리·탈락'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<path d="M62,70 C180,75 230,120 300,200 L440,215" class="bl"/>' +
    '<line x1="60" y1="110" x2="440" y2="110" class="dash"/>' +
    '<line x1="230" y1="60" x2="230" y2="230" class="rd dash"/>' +
    '<text x="68" y="34" class="s2">부착강도</text>' +
    '<text x="440" y="100" text-anchor="end" class="s2">소요 부착강도</text>' +
    '<text x="230" y="252" text-anchor="middle" class="r">Open time</text>' +
    '<text x="450" y="252" text-anchor="end" class="s2">경과시간 →</text>' +
    '<text x="320" y="160" class="r">피막 → 박리</text>' +
    '<text x="80" y="200" class="bl">압착 1.2㎡·15분</text>' +
    '<text x="100" y="58" class="n">①</text><text x="238" y="74" class="n">②</text><text x="296" y="160" class="n">③</text></svg>',
  heads: [
    { h: '공법별 기준', k: ['압착 {{1.2㎡·15분}}', '개량압착 {{1.5㎡·30분}}'] },
    { h: '유의사항', k: ['[[피막]] 시 긁어내기', '고온·강풍 면적↓', '바탕 물축임'] },
    { h: '개선방안', k: ['Open time 연장형', '타이머 관리', '타음·인발 검사'] }
  ],
  code: '압착 1.2·15 / 개량 1.5·30 → “일이일오, 일오삼공”',
  read: '①시간이 지나면 부착강도 저하 → ②소요강도선과 만나는 시점 = Open time → ③넘기면 피막·박리'
},
161: {
  one: '{{25℃}} 시료에 {{100g}} 표준침을 5초 관입한 깊이(0.1mm=1)로 굳기를 표시한 [[침입도]]와 감온성 지표 [[PI]]',
  flow: ['시료 가열·주입', '25℃ 항온', '100g 침 재하', '5초 관입', '깊이 판독'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="100" y="150" width="160" height="80" class="bx"/><rect x="104" y="160" width="152" height="66" class="soil"/>' +
    '<rect x="160" y="40" width="40" height="30" class="bx2"/><text x="180" y="60" text-anchor="middle" class="s2">100g</text>' +
    '<line x1="180" y1="70" x2="180" y2="190" class="ln2"/>' +
    '<line x1="190" y1="110" x2="230" y2="110" class="ld"/><text x="236" y="115">표준침 · 5초</text>' +
    '<line x1="270" y1="160" x2="290" y2="160" class="ln"/><line x1="270" y1="190" x2="290" y2="190" class="ln"/><line x1="280" y1="160" x2="280" y2="190" class="rd"/>' +
    '<text x="296" y="180" class="r">관입깊이 0.1mm = 1</text>' +
    '<text x="180" y="256" text-anchor="middle" class="t">25℃ 시료</text>' +
    '<text x="470" y="60" text-anchor="end" class="bl">PI 클수록 Gel형</text>' +
    '<text x="470" y="84" text-anchor="end" class="s2">감온성 작음 (방수용)</text>' +
    '<text x="62" y="200" class="n">①</text><text x="138" y="62" class="n">②</text><text x="296" y="156" class="n">③</text></svg>',
  heads: [
    { h: '시험조건·PI', k: ['{{25℃}}·100g·5초', '0.1mm = 1', 'PI 클수록 Gel형'] },
    { h: '유의사항', k: ['시료 25±0.1℃', '측정점 10mm 이격', '과열 금지'] },
    { h: '개선방안', k: ['SBS·APP 개질', '연화점·신도 병행'] }
  ],
  code: '침입도 = 25℃·100g·5초·0.1mm → “이오 백오 영점일”',
  read: '①25℃ 시료에 → ②100g 표준침을 5초 관입 → ③들어간 깊이 0.1mm = 침입도 1'
},
162: {
  one: '목재 수분 중량을 [[전건중량]]으로 나눈 [[함수율]] — [[섬유포화점]] {{30%}} 이하에서 수축·강도 변화',
  flow: ['자유수 증발', '섬유포화점 30%', '결합수 감소', '수축·강도↑'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<path d="M62,60 C150,90 240,150 300,180 L440,180" class="bl"/>' +
    '<line x1="300" y1="44" x2="300" y2="230" class="rd dash"/><line x1="180" y1="120" x2="180" y2="230" class="dash"/>' +
    '<text x="68" y="34" class="s2">강도</text>' +
    '<text x="300" y="34" text-anchor="middle" class="r">섬유포화점 30%</text>' +
    '<text x="80" y="200" class="bl">강도↑·수축</text>' +
    '<text x="370" y="165" text-anchor="middle" class="s2">변화 거의 없음</text>' +
    '<text x="180" y="252" text-anchor="middle" class="s2">기건 15%</text>' +
    '<text x="450" y="252" text-anchor="end" class="s2">함수율 % →</text>' +
    '<text x="440" y="174" class="n">①</text><text x="306" y="120" class="n">②</text><text x="186" y="140" class="n">③</text></svg>',
  heads: [
    { h: '함수율 기준', k: ['섬유포화점 {{30%}}', '구조재 {{24%↓}}', '마감재 {{15%↓}}'] },
    { h: '유의사항', k: ['반입 시 측정기 검사', '현장 온습도 순응', '부패 방지 20%↓'] },
    { h: '개선방안', k: ['인공건조재(KD)', '프리컷·전수측정'] }
  ],
  code: '섬포 30·기건 15·구조 24·마감 15 → “삼일 이사 일오”',
  read: '①30% 이상은 자유수만 빠져 변화 없음 → ②30% 이하 결합수 감소로 수축·강도↑ → ③기건 15%'
},
163: {
  one: '실링재 [[3면 접착]]을 막아 [[2면 접착]]을 유도하도록 줄눈 바닥에 두는 [[Back up재]]·Bond Breaker',
  flow: ['줄눈 청소', 'Back up 압입', '프라이머', '실링 충전', '헤라 마무리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="50" width="60" height="170" class="conc"/><rect x="160" y="50" width="60" height="170" class="conc"/>' +
    '<rect x="120" y="50" width="40" height="40" class="bx2"/><circle cx="140" cy="110" r="20" class="bf"/>' +
    '<rect x="280" y="50" width="60" height="80" class="conc"/><rect x="380" y="50" width="60" height="80" class="conc"/>' +
    '<rect x="340" y="50" width="40" height="30" class="bx2"/><line x1="340" y1="82" x2="380" y2="82" class="rd"/>' +
    '<text x="140" y="36" text-anchor="middle" class="r">실링 (2면 접착)</text>' +
    '<text x="360" y="36" text-anchor="middle" class="s2">D = W × 1/2~1</text>' +
    '<text x="140" y="250" text-anchor="middle" class="t">Back up재</text>' +
    '<text x="360" y="250" text-anchor="middle" class="t">Bond Breaker</text>' +
    '<text x="140" y="272" text-anchor="middle" class="s2">깊은 줄눈</text>' +
    '<text x="360" y="272" text-anchor="middle" class="s2">얕은 줄눈</text>' +
    '<line x1="120" y1="50" x2="120" y2="90" class="rd"/><line x1="160" y1="50" x2="160" y2="90" class="rd"/><text x="96" y="118" class="n">①</text><text x="96" y="76" class="n">②</text><text x="351" y="114" class="n">③</text></svg>',
  heads: [
    { h: '설치 목적', k: ['[[3면 접착 방지]]', '2면 접착·거동 추종', '줄눈 깊이 조절'] },
    { h: '유의사항', k: ['폭+{{3~4mm}} Rod', 'Rod 표면 손상 금지', '5℃↓·85%↑ 중지'] },
    { h: '개선방안', k: ['Rod 규격 표준화', 'Mock-up 부착시험'] }
  ],
  code: '목적 = 3면방지·내구·깊이·절감 → “삼내깊절” / 폭+3~4mm',
  read: '①Back up재가 줄눈 바닥을 막아 → ②실링은 양 측면 2면만 접착 → ③얕은 줄눈은 Bond Breaker'
},
164: {
  one: '재료 고유의 열전달 능력 [[열전도율 λ]](W/m·K)와 벽체 공기→공기 열통과율 [[열관류율 U]] = {{1/RT}}',
  flow: ['실내 열전달', '벽체 열전도', '외기 열전달', '= 열관류'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="180" y="40" width="50" height="190" class="conc"/><rect x="230" y="40" width="40" height="190" class="bx3"/>' +
    '<path d="M40,70 L180,80 L230,100 L270,200 L440,210" class="rd"/>' +
    '<text x="40" y="50" class="b">실내 Ti</text>' +
    '<text x="440" y="245" text-anchor="end" class="b">외기 To</text>' +
    '<line x1="250" y1="140" x2="320" y2="140" class="ld"/><text x="326" y="145">단열재 λ↓</text>' +
    '<text x="225" y="262" text-anchor="middle" class="bl">λ = 재료 (W/m·K)</text>' +
    '<text x="470" y="40" text-anchor="end" class="r">U = 1 / RT</text>' +
    '<text x="470" y="64" text-anchor="end" class="s2">공기→공기 (W/㎡·K)</text>' +
    '<text x="14" y="56" class="n">①</text><text x="282" y="180" class="n">②</text><text x="372" y="40" class="n">③</text></svg>',
  heads: [
    { h: '특징 비교', k: ['λ 재료 W/m·K', 'U 부위 W/㎡·K', '가등급 λ {{0.034↓}}'] },
    { h: '유의사항', k: ['이음부 밀착 시공', '[[열교]] 차단', '함수 시 λ 급증'] },
    { h: '개선방안', k: ['외단열 일체형', '열화상 U값 검증'] }
  ],
  code: 'λ = 재료, U = 벽체(1/ΣR) → “람다 재료, 유 벽체”',
  read: '①실내 열이 벽체로 전달 → ②단열재(λ 작음)에서 온도 급강하 → ③저항 합 RT의 역수 = U'
},
165: {
  one: '실내외 온도차 대비 실내와 [[표면온도]] 차의 비율({{0~1}}) — 작을수록 [[노점]] 위로 유지돼 결로방지 우수',
  flow: ['실내외 온도차', '표면온도 저하', '노점 이하', '결로·곰팡이'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="200" y="50" width="60" height="170" class="conc"/>' +
    '<path d="M40,70 L200,95 L260,200 L440,215" class="rd"/>' +
    '<line x1="40" y1="130" x2="200" y2="130" class="bl dash"/>' +
    '<circle cx="200" cy="95" r="5" class="rf"/>' +
    '<text x="40" y="50" class="b">Ti 실내 25℃</text>' +
    '<text x="154" y="114" text-anchor="end" class="r">Ts 표면온도</text>' +
    '<text x="44" y="152" class="s2">노점 약 13.9℃</text>' +
    '<text x="440" y="245" text-anchor="end" class="b">To 외기</text>' +
    '<text x="470" y="30" text-anchor="end" class="r">TDR = (Ti−Ts)/(Ti−To)</text>' +
    '<text x="470" y="54" text-anchor="end" class="s2">작을수록 결로방지 우수</text>' +
    '<text x="300" y="268" text-anchor="middle" class="s2">지역Ⅰ 벽체접합부 0.25 · 창 0.16</text>' +
    '<text x="14" y="50" class="n">①</text><text x="207" y="84" class="n">②</text><text x="16" y="137" class="n">③</text></svg>',
  heads: [
    { h: '부위별 기준(Ⅰ)', k: ['출입문 {{0.30}}', '벽체 접합부 {{0.25}}', '창 유리 {{0.16}}'] },
    { h: '유의사항', k: ['단열간봉·Low-E', '[[열교]] 차단', 'KS F 2295 검증'] },
    { h: '개선방안', k: ['환기장치 연속 운전', '열화상 점검'] }
  ],
  code: 'TDR 작을수록 good / 문 .30·벽 .25·유리 .16 → “삼공 이오 일육”',
  read: '①실내외 온도차 → ②벽 표면온도 Ts 저하 → ③Ts가 노점 아래면 결로 (TDR 작을수록 안전)'
},
166: {
  one: '수증기의 구조체 내부 이동을 막아 [[내부결로]]를 방지하는 불투습층 — 단열재 [[실내측]]에 연속 설치',
  flow: ['바탕 정리', '단열재 밀착', '방습층 설치', '겹침·테이핑', '관통부 실링'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="150" y="40" width="14" height="190" class="bx2"/><line x1="169" y1="40" x2="169" y2="230" class="rd"/>' +
    '<rect x="172" y="40" width="60" height="190" class="bx3"/><rect x="232" y="40" width="60" height="190" class="conc"/>' +
    '<line x1="40" y1="130" x2="140" y2="130" class="ar"/>' +
    '<text x="20" y="100" class="b">실내(고온)</text>' +
    '<text x="90" y="152" text-anchor="middle" class="s2">수증기</text>' +
    '<line x1="169" y1="40" x2="169" y2="22" class="ld"/><text x="176" y="24" class="r">방습층 = 실내측</text>' +
    '<text x="202" y="140" text-anchor="middle" class="s2">단열재</text>' +
    '<text x="310" y="100" class="b">외기(저온)</text>' +
    '<text x="310" y="124" class="s2">실외측 설치 금지</text>' +
    '<text x="220" y="258" text-anchor="middle" class="bl">이음 100mm 겹침 + 기밀 테이핑</text>' +
    '<text x="14" y="137" class="n">①</text><text x="145" y="26" class="n">②</text><text x="84" y="259" class="n">③</text></svg>',
  heads: [
    { h: '종류·설치', k: ['[[PE필름]] 0.1mm↑', '벽: 실내측', '바닥: 지반측'] },
    { h: '유의사항', k: ['{{100mm↑}} 겹침', '[[기밀 테이핑]]', '관통부 실링'] },
    { h: '개선방안', k: ['투습방수지 병용', '가변형 방습지'] }
  ],
  code: '방습층 = 실내측·연속·겹침100 → “안연백” / 투습 30g',
  read: '①실내 고온 수증기가 밖으로 이동 → ②단열재 실내측 방습층이 차단 → ③이음 겹침·테이핑으로 연속'
},
167: {
  one: '가볍고 딱딱한 고주파 [[경량충격음]]과 무겁고 부드러운 저주파 [[중량충격음]] — 모두 {{49dB 이하}}',
  flow: ['슬래브', '완충재', '기포콘크리트', '마감 모르타르', '마감재'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="105" width="360" height="20" class="bx"/><rect x="60" y="125" width="360" height="25" class="bx2"/>' +
    '<rect x="60" y="150" width="360" height="20" class="bx3"/><rect x="60" y="170" width="360" height="40" class="conc"/>' +
    '<rect x="110" y="75" width="50" height="30" class="bx2"/><circle cx="330" cy="80" r="18" class="bf"/>' +
    '<text x="135" y="60" text-anchor="middle">경량 = 태핑머신</text>' +
    '<text x="330" y="50" text-anchor="middle">중량 = 임팩트볼</text>' +
    '<text x="426" y="166" class="s2">완충재</text><text x="426" y="195" class="s2">슬래브</text>' +
    '<text x="240" y="240" text-anchor="middle" class="r">경량·중량 모두 49dB 이하</text>' +
    '<text x="240" y="264" text-anchor="middle" class="s2">측면 완충재 연속 → Sound Bridge 방지</text>' +
    '<text x="86" y="100" class="n">①</text><text x="395" y="166" class="n">②</text><text x="128" y="241" class="n">③</text></svg>',
  heads: [
    { h: '등급·기준', k: ['4급 {{49dB↓}}', '1급 {{37dB↓}}', '[[사후확인제]]'] },
    { h: '품질관리', k: ['완충재 인정서', '측면 완충재 연속', '평탄도 7mm/3m'] },
    { h: '개선방안', k: ['슬래브 두께↑', 'IoT 소음 알림'] }
  ],
  code: '경량 = 탭·500g·40mm / 중량 = 볼·2.5kg·1m → “탭오사, 볼이오일”',
  read: '①태핑머신·임팩트볼이 바닥 충격 → ②완충재가 진동 흡수 → ③아래층 49dB 이하'
},
168: {
  one: '저방출 [[친환경 자재]]와 [[환기설비]]로 실내공기질·환기성능을 확보한 주택 — {{500세대 이상}} 의무',
  flow: ['자재 선정', '시공 중 환기', 'Bake·Flush', '공기질 측정', '입주 전 공고'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M100,120 L220,50 L340,120 Z" class="bx2"/><rect x="110" y="120" width="220" height="110" class="bx"/>' +
    '<line x1="30" y1="170" x2="105" y2="170" class="ar"/><line x1="335" y1="170" x2="410" y2="170" class="ar"/>' +
    '<text x="220" y="105" text-anchor="middle" class="s2">건강친화형 주택</text>' +
    '<text x="220" y="180" text-anchor="middle" class="t">실내공기질</text>' +
    '<text x="220" y="210" text-anchor="middle" class="s2">HB마크 저방출 자재</text>' +
    '<text x="10" y="150" class="s2">환기 0.5회/h↑</text>' +
    '<text x="470" y="150" text-anchor="end" class="s2">Bake·Flush out</text>' +
    '<text x="220" y="258" text-anchor="middle" class="r">500세대 이상 = 의무기준</text>' +
    '<text x="136" y="212" class="n">①</text><text x="40" y="196" class="n">②</text><text x="400" y="196" class="n">③</text></svg>',
  heads: [
    { h: '의무기준', k: ['[[친환경 자재]]', '환기 {{0.5회/h↑}}', 'Bake·Flush out'] },
    { h: '유의사항', k: ['HB마크·밀폐보관', '흡착자재 후시공', '입주 7일 전 공고'] },
    { h: '개선방안', k: ['ERV + HEPA', 'IoT 공기질 연동'] }
  ],
  code: '건강친화 = 500세대·자재·환기·관리 → “오백 자환관”',
  read: '①저방출 자재로 오염원 차단 → ②환기 0.5회/h↑로 배출 → ③입주 전 Bake·Flush out'
},
169: {
  one: '실내를 {{33~38℃}}로 가열 후 환기하는 [[Bake out]]과 외기 400㎥/㎡를 공급하는 [[Flush out]]으로 새집증후군 저감',
  flow: ['개구부 밀폐', '33~38℃ 8h', '2h 환기', '3회 반복'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="50" class="ln"/>' +
    '<path d="M60,200 L80,90 L150,90 L160,200 L180,200 L200,90 L270,90 L280,200 L300,200 L320,90 L390,90 L400,200" class="rd"/>' +
    '<text x="68" y="62" class="s2">온도</text>' +
    '<text x="410" y="95" class="r">33~38℃</text>' +
    '<text x="115" y="80" text-anchor="middle" class="s2">8h 유지</text>' +
    '<text x="170" y="222" text-anchor="middle" class="s2">2h 환기</text>' +
    '<text x="240" y="256" text-anchor="middle" class="b">Bake out × 3회 이상</text>' +
    '<text x="470" y="34" text-anchor="end" class="bl">Flush: 16℃↑·60%↓·400㎥/㎡</text>' +
    '<text x="152" y="80" class="n">①</text><text x="122" y="222" class="n">②</text><text x="138" y="257" class="n">③</text></svg>',
  heads: [
    { h: '시행 기준', k: ['Bake {{33~38℃·8h}}', '2h 환기 × {{3회↑}}', 'Flush {{400㎥/㎡}}'] },
    { h: '유의사항', k: ['개구부 밀폐·포장 제거', '과열·화재 감시', '7일 전·60일 공고'] },
    { h: '개선방안', k: ['저방출 자재', '환기설비 자동 운전'] }
  ],
  code: 'Bake 33~38·8·2·3 / Flush 16·60·400 → “삼삼팔 팔이삼”',
  read: '①33~38℃로 8시간 가열해 유해물질 방출 → ②2시간 환기로 배출 → ③3회 이상 반복'
},
170: {
  one: '공사 범위를 [[Level(계층)]]별로 쪼개 최소 관리단위 [[Work Package]]에 [[WBS Code]]를 부여한 작업분류체계',
  flow: ['Project', '구역', '공종', 'Work Package', 'CBS 연계'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="180" y="20" width="120" height="34" class="bx"/><text x="240" y="43" text-anchor="middle" class="t">Project</text>' +
    '<line x1="240" y1="54" x2="115" y2="90" class="ln"/><line x1="240" y1="54" x2="365" y2="90" class="ln"/>' +
    '<rect x="60" y="90" width="110" height="32" class="bx2"/><text x="115" y="111" text-anchor="middle">지하층</text>' +
    '<rect x="310" y="90" width="110" height="32" class="bx2"/><text x="365" y="111" text-anchor="middle">지상층</text>' +
    '<line x1="365" y1="122" x2="295" y2="160" class="ln"/><line x1="365" y1="122" x2="405" y2="160" class="ln"/>' +
    '<rect x="250" y="160" width="90" height="30" class="bx2"/><text x="295" y="180" text-anchor="middle">철근</text>' +
    '<rect x="360" y="160" width="90" height="30" class="bx2"/><text x="405" y="180" text-anchor="middle">콘크리트</text>' +
    '<line x1="295" y1="190" x2="295" y2="225" class="ln"/>' +
    '<rect x="240" y="225" width="110" height="30" class="bx3"/><text x="295" y="245" text-anchor="middle" class="s2">Work Package</text>' +
    '<text x="20" y="200" class="r">WBS × OBS = CA</text>' +
    '' +
    '<text x="150" y="44" class="n">①</text><text x="286" y="112" class="n">②</text><text x="214" y="247" class="n">③</text></svg>',
  heads: [
    { h: '구성', k: ['Project→구역→공종', '[[Work Package]]', '[[WBS Code]] 표준화'] },
    { h: '유의사항', k: ['분해수준 적정', '범위 100% 포함', '설계변경 시 갱신'] },
    { h: '개선방안', k: ['표준 WBS 라이브러리', 'BIM 4D·5D 연동'] }
  ],
  code: '프·구·공·워 (Project→구역→공종→WP) / “W×O = CA”',
  read: '①Project를 → ②구역·공종 Level로 쪼개 → ③최소 관리단위 Work Package에 Code 부여'
},
171: {
  one: '[[직접공사비]] 투입자원의 가격변동을 {{기준년도 = 100}}으로 나타낸 [[가공통계]] — [[지수조정률]] 기준',
  flow: ['Data 수집', 'CBS 가중치', '가중평균', '월별 공표', '지수조정률'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<line x1="60" y1="170" x2="440" y2="170" class="dash"/>' +
    '<path d="M62,170 L140,160 L220,140 L300,120 L380,80 L440,70" class="bl"/>' +
    '<circle cx="140" cy="160" r="5" class="rf"/><circle cx="380" cy="80" r="5" class="rf"/>' +
    '<text x="68" y="34" class="s2">지수</text>' +
    '<text x="440" y="192" text-anchor="end" class="s2">기준년도 = 100</text>' +
    '<text x="140" y="192" text-anchor="middle" class="s2">입찰·계약</text>' +
    '<text x="376" y="62" text-anchor="end" class="r">90일↑ + 3%↑ → 조정</text>' +
    '<text x="450" y="252" text-anchor="end" class="s2">시간 →</text>' +
    '<text x="444" y="192" class="n">①</text><text x="226" y="128" class="n">②</text><text x="390" y="102" class="n">③</text></svg>',
  heads: [
    { h: '산정방식 비교', k: ['[[지수조정률]] 간편·객관', '품목조정률 복잡·분쟁'] },
    { h: '조정 요건', k: ['{{90일 이상}} 경과', '등락 {{3% 이상}}', '단품 {{15%}} 증감'] },
    { h: '개선방안', k: ['공종·지역별 세분화', '가중치 주기 갱신'] }
  ],
  code: '데·가·공 (Data→가중치→공표) / 조정 = 90일·3%',
  read: '①기준년도 = 100 → ②물가 따라 지수 변동 → ③입찰 후 90일↑·3%↑ 오르면 계약금액 조정'
},
172: {
  one: '[[작업구역]]을 일정하게 나누고 [[Tact Time]]으로 작업시간을 통일해 선·후행 작업을 [[연속작업]]으로 흐르게 하는 공정관리',
  flow: ['공구 분할', '작업 표준화', 'Tact 설정', '작업조 편성', '반복·동기화'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="80" y1="230" x2="450" y2="230" class="ln"/><line x1="80" y1="230" x2="80" y2="44" class="ln"/>' +
    '<line x1="90" y1="220" x2="250" y2="60" class="rd"/><line x1="150" y1="220" x2="310" y2="60" class="bl"/><line x1="210" y1="220" x2="370" y2="60" class="gr"/>' +
    '<text x="250" y="50" text-anchor="middle" class="r">골조</text><text x="310" y="50" text-anchor="middle" class="bl">설비</text><text x="370" y="50" text-anchor="middle" class="g">마감</text>' +
    '<line x1="90" y1="242" x2="150" y2="242" class="ln"/><text x="120" y="262" text-anchor="middle" class="r">Tact</text>' +
    '<text x="88" y="34" class="s2">공구(층) ↑</text>' +
    '<text x="450" y="262" text-anchor="end" class="s2">시간 →</text>' +
    '<text x="470" y="140" text-anchor="end" class="bl">평행 → 대기 0</text>' +
    '<text x="56" y="100" class="n">①</text><text x="150" y="263" class="n">②</text><text x="350" y="140" class="n">③</text></svg>',
  heads: [
    { h: '특징', k: ['[[대기시간 감소]]', '평준화·동기화', '한 작업 지연 → 전체'] },
    { h: '유의사항', k: ['공구 물량 균등화', 'Critical 기준 Tact', 'JIT 자재 반입'] },
    { h: '개선방안', k: ['PC·모듈러 결합', 'BIM 4D 검증', 'Last Planner 연계'] }
  ],
  code: '구·시·연 (구역 구획·시간 통일·연속작업) / 장점 “대·불·평·이”',
  read: '①공구를 균등 분할 → ②Tact로 작업시간 통일 → ③공종선이 평행 = 대기 없이 연속'
},
173: {
  one: '관리상 중요한 작업의 착수·완료·인계 [[주요 시점]]을 지정한 날 — [[한계착수일]]·[[한계완료일]]·[[절대완료일]]',
  flow: ['공정표 작성', 'C.P·인계 선정', 'Milestone 지정', '진도 점검', '만회·갱신'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="150" x2="450" y2="150" class="ar"/>' +
    '<path d="M120,138 l12,12 l-12,12 l-12,-12 z" class="rf"/><path d="M260,138 l12,12 l-12,12 l-12,-12 z" class="rf"/><path d="M400,138 l12,12 l-12,12 l-12,-12 z" class="rf"/>' +
    '<text x="120" y="120" text-anchor="middle" class="b">한계착수일</text>' +
    '<text x="260" y="120" text-anchor="middle" class="b">한계완료일</text>' +
    '<text x="400" y="120" text-anchor="middle" class="r">절대완료일</text>' +
    '<text x="120" y="186" text-anchor="middle" class="s2">이전 착수 불가</text>' +
    '<text x="260" y="186" text-anchor="middle" class="s2">이후 완료 불가</text>' +
    '<text x="400" y="186" text-anchor="middle" class="s2">정확히 완료(준공)</text>' +
    '<text x="240" y="240" text-anchor="middle" class="bl">C.P · 공종 인계 지점에 지정</text>' +
    '<text x="60" y="120" class="n">①</text><text x="200" y="120" class="n">②</text><text x="340" y="120" class="n">③</text></svg>',
  heads: [
    { h: '종류', k: ['[[한계착수일]]', '[[한계완료일]]', '[[절대완료일]]'] },
    { h: '유의사항', k: ['C.P·인계점 위주', '인계일 사전 합의', '지연 시 MCX 만회'] },
    { h: '개선방안', k: ['PMIS·EVMS 연계', 'BIM 4D 인계 검토'] }
  ],
  code: '한착·한완·절완 → “일찍 못, 늦으면 안, 딱 맞춰”',
  read: '①이날 이전 착수 불가 → ②이날 이후 완료 불가 → ③이날 정확히 완료(준공)'
},
174: {
  one: '[[공기 1일 단축]] 시 추가되는 [[직접비 증가액]] = (특급비용 − 정상비용) / (정상공기 − 특급공기)',
  flow: ['정상·특급 자료', '구배 산정', 'C.P 확인', '최소 구배 단축', '최적공기'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<line x1="150" y1="70" x2="380" y2="190" class="rd"/>' +
    '<line x1="150" y1="70" x2="150" y2="230" class="dash"/><line x1="380" y1="190" x2="380" y2="230" class="dash"/>' +
    '<circle cx="150" cy="70" r="6" class="rf"/><circle cx="380" cy="190" r="6" class="rf"/>' +
    '<text x="150" y="56" text-anchor="middle">특급점 (Crash)</text>' +
    '<text x="370" y="214" text-anchor="end">정상점 (Normal)</text>' +
    '<text x="290" y="110" class="r">기울기 = Cost slope</text>' +
    '<text x="68" y="34" class="s2">직접비</text>' +
    '<text x="150" y="252" text-anchor="middle" class="s2">특급공기</text>' +
    '<text x="380" y="252" text-anchor="middle" class="s2">정상공기</text>' +
    '<text x="470" y="252" text-anchor="end" class="s2">공기 →</text>' +
    '<text x="392" y="182" class="n">①</text><text x="118" y="86" class="n">②</text><text x="268" y="110" class="n">③</text></svg>',
  heads: [
    { h: '특징', k: ['클수록 단축비용↑', '직접비↑·간접비↓'] },
    { h: '유의사항', k: ['최소 구배부터 단축', '[[C.P]] 작업만', 'C.P 변경 재검토'] },
    { h: '개선방안', k: ['실적 DB 구축', 'MCX 자동화', 'PC화로 구배↓'] }
  ],
  code: '“특비−정비 / 정공−특공” → 작·C·재 (작은것·C.P·재검토)',
  read: '①정상공기·정상비용에서 → ②특급으로 당기면 직접비↑ → ③1일당 증가액 = 기울기(Cost slope)'
},
175: {
  one: '자원을 최대로 투입해도 더 이상 공기를 줄일 수 없는 [[단축 한계]] — [[Crash time]]과 [[Crash cost]]의 교점',
  flow: ['정상점 산정', '최대 자원 투입', '특급점 산정', 'Cost slope', '다음 작업 단축'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<path d="M390,200 C300,190 200,150 160,80" class="bl"/>' +
    '<line x1="160" y1="80" x2="160" y2="40" class="rd dash"/>' +
    '<circle cx="160" cy="80" r="6" class="rf"/><circle cx="390" cy="200" r="6" class="rf"/>' +
    '<text x="68" y="34" class="s2">비용</text>' +
    '<text x="176" y="84" class="r">특급점 = 단축 한계</text>' +
    '<text x="176" y="44" class="s2">이후 투입 = 비용만 ↑</text>' +
    '<text x="390" y="184" text-anchor="middle">정상점</text>' +
    '<text x="160" y="252" text-anchor="middle" class="s2">Crash time</text>' +
    '<text x="390" y="252" text-anchor="middle" class="s2">Normal time</text>' +
    '<text x="470" y="222" text-anchor="end" class="s2">공기 →</text>' +
    '<text x="366" y="224" class="n">①</text><text x="134" y="86" class="n">②</text></svg>',
  heads: [
    { h: '정상점 vs 특급점', k: ['특급: 최단공기·최대비', '정상: 최소 직접비'] },
    { h: '유의사항', k: ['작업공간·양중 반영', '품질·안전 관리', '도달 작업 단축 제외'] },
    { h: '개선방안', k: ['Normal/Crash DB', '신공법·장비 대형화'] }
  ],
  code: 'C·C·C (Crash point = time × cost) → “넘으면 돈만 든다”',
  read: '①정상점에서 자원을 더 넣을수록 공기↓·비용↑ → ②특급점 이후엔 공기 못 줄이고 비용만↑'
},
176: {
  one: '인력·장비를 [[여유시간(Float)]] 안에서 옮겨 자원 [[Peak]]를 깎고 투입량을 고르게 하는 [[자원평준화]]',
  flow: ['부하도 작성', 'Peak 확인', 'Float 내 이동', '균등 배분', '공정표 수정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="160" width="30" height="60" class="bx2"/><rect x="70" y="80" width="30" height="140" class="bx2"/><rect x="100" y="100" width="30" height="120" class="bx2"/><rect x="130" y="180" width="30" height="40" class="bx2"/><rect x="160" y="200" width="30" height="20" class="bx2"/>' +
    '<rect x="270" y="140" width="30" height="80" class="bx3"/><rect x="300" y="140" width="30" height="80" class="bx3"/><rect x="330" y="140" width="30" height="80" class="bx3"/><rect x="360" y="140" width="30" height="80" class="bx3"/><rect x="390" y="140" width="30" height="80" class="bx3"/>' +
    '<line x1="30" y1="220" x2="200" y2="220" class="ln"/><line x1="260" y1="220" x2="440" y2="220" class="ln"/>' +
    '<line x1="260" y1="130" x2="450" y2="130" class="dash"/>' +
    '<line x1="205" y1="150" x2="255" y2="150" class="ar"/>' +
    '<text x="85" y="66" text-anchor="middle" class="r">Peak</text>' +
    '<text x="230" y="40" text-anchor="middle" class="bl">Float 내 이동</text>' +
    '<text x="450" y="122" text-anchor="end" class="s2">동원인원</text>' +
    '<text x="115" y="250" text-anchor="middle" class="b">평준화 전</text>' +
    '<text x="345" y="250" text-anchor="middle" class="b">평준화 후</text>' +
    '<text x="44" y="66" class="n">①</text><text x="156" y="42" class="n">②</text><text x="286" y="251" class="n">③</text></svg>',
  heads: [
    { h: '배당 방식', k: ['EST: 공기 준수 유리', 'LST: 초기 투자비↓', 'EST·LST 절충'] },
    { h: '유의사항', k: ['C.P 작업 이동 불가', 'Float 소진 주의', '타워크레인 우선'] },
    { h: '개선방안', k: ['Resource Leveling', 'Multi-skill 운용'] }
  ],
  code: '부·균·균 (부하도→균형도→균등배분) / Peak 깎고 골 메움',
  read: '①특정 시기 인력 Peak → ②Float 범위 안에서 작업 이동 → ③투입량 균등'
},
177: {
  one: '[[PV]]·[[EV]]·[[AC]] 3요소로 공정·원가 편차와 효율을 측정해 [[EAC]]를 예측하는 공정·원가 통합관리',
  flow: ['WBS·CBS 연계', '기준선 PV', 'EV·AC 측정', 'SV·CV 분석', 'EAC 예측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="44" class="ln"/>' +
    '<path d="M62,228 C160,220 250,120 440,60" class="bl dash"/>' +
    '<path d="M62,228 C150,224 220,175 300,150" class="gr"/>' +
    '<path d="M62,228 C140,222 220,130 300,100" class="rd"/>' +
    '<line x1="300" y1="60" x2="300" y2="230" class="dash"/>' +
    '<text x="68" y="34" class="s2">비용</text>' +
    '<text x="446" y="64" class="bl">PV</text>' +
    '<text x="308" y="96" class="r">AC</text>' +
    '<text x="308" y="160" class="g">EV</text>' +
    '<text x="470" y="200" text-anchor="end" class="s2">SV = EV−PV</text>' +
    '<text x="470" y="222" text-anchor="end" class="s2">CV = EV−AC</text>' +
    '<text x="300" y="252" text-anchor="middle" class="s2">Data Date</text>' +
    '<text x="416" y="46" class="n">①</text><text x="330" y="162" class="n">②</text><text x="330" y="78" class="n">③</text></svg>',
  heads: [
    { h: '분석지표', k: ['{{SV = EV − PV}}', '{{CPI = EV / AC}}', '1.0 미만 = 지연·초과'] },
    { h: '유의사항', k: ['WBS·CBS 코드 일치', 'Data Date 통일', 'EV 측정기준 합의'] },
    { h: '개선방안', k: ['PMIS·ERP 연동', 'BIM 5D EV 산정'] }
  ],
  code: 'P·E·A = 계획·기성·실투입 / 편차는 빼고(EV−), 지수는 나눈다(EV/)',
  read: '①계획 PV 대비 → ②기성 EV가 낮으면 공정 지연(SV−) → ③실투입 AC가 EV보다 크면 원가 초과(CV−)'
},
178: {
  one: '[[재료비·노무비·경비]](순공사원가)에 [[일반관리비]]·[[이윤]]·보험료·부가세를 쌓아 총공사비를 산정하는 계산서',
  flow: ['재·노·경', '순공사원가', '일반관리비', '이윤', '부가세·총공사비'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="120" y="190" width="200" height="40" class="bx2"/><rect x="120" y="150" width="200" height="40" class="bx"/>' +
    '<rect x="120" y="110" width="200" height="40" class="bx"/><rect x="120" y="70" width="200" height="40" class="bx3"/>' +
    '<text x="220" y="215" text-anchor="middle">재·노·경 = 순공사원가</text>' +
    '<text x="220" y="175" text-anchor="middle">일반관리비</text>' +
    '<text x="220" y="135" text-anchor="middle">이윤</text>' +
    '<text x="220" y="95" text-anchor="middle">보험료·부가세(10%)</text>' +
    '<text x="220" y="55" text-anchor="middle" class="t">총공사비 ↑</text>' +
    '' +
    '<text x="330" y="175" class="r">6% 이내</text>' +
    '<text x="330" y="135" class="r">15% 이내</text>' +
    '' +
    '<text x="96" y="217" class="n">①</text><text x="96" y="177" class="n">②</text><text x="96" y="137" class="n">③</text></svg>',
  heads: [
    { h: '구성', k: ['재·노·경 = 순공사원가', '일반관리비 {{6%}} 이내', '이윤 {{15%}} 이내'] },
    { h: '유의사항', k: ['물량 누락·중복 방지', '법정경비 누락 금지', '최신 노임단가'] },
    { h: '개선방안', k: ['BIM 5D 물량산출', 'CBS 표준화'] }
  ],
  code: '아래부터 쌓기 → “직간순 현공 일총 이총”',
  read: '①재료비·노무비·경비(순공사원가) 위에 → ②일반관리비 6% → ③이윤 15% 순으로 쌓아 총공사비'
},
179: {
  one: '화학물질의 [[유해성·위험성]]·응급조치·취급방법 등 {{16개 항목}}을 적은 [[물질안전보건자료]] — 게시·교육',
  flow: ['작성·제출', '사업주 제공', '게시·비치', '경고표지', '교육·기록'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="30" width="150" height="200" class="bx"/><text x="135" y="60" text-anchor="middle" class="t">MSDS</text>' +
    '<line x1="80" y1="90" x2="190" y2="90" class="ln2"/><line x1="80" y1="115" x2="190" y2="115" class="ln2"/><line x1="80" y1="140" x2="190" y2="140" class="ln2"/><line x1="80" y1="165" x2="190" y2="165" class="ln2"/><line x1="80" y1="190" x2="190" y2="190" class="ln2"/>' +
    '<text x="135" y="215" text-anchor="middle" class="s2">16개 항목</text>' +
    '<rect x="280" y="85" width="30" height="25" class="bx2"/><rect x="260" y="110" width="70" height="110" class="bx2"/>' +
    '<path d="M295,135 l20,20 l-20,20 l-20,-20 z" class="rf"/>' +
    '<line x1="315" y1="155" x2="360" y2="155" class="ld"/><text x="364" y="160" class="r">경고표지</text>' +
    '<text x="350" y="50" class="bl">게시·비치</text>' +
    '<text x="350" y="72" class="s2">근로자가 보는 곳</text>' +
    '<text x="240" y="258" text-anchor="middle" class="b">배치·신규 도입·변경 시 교육</text>' +
    '<text x="36" y="60" class="n">①</text><text x="326" y="50" class="n">②</text><text x="340" y="190" class="n">③</text></svg>',
  heads: [
    { h: '구성·기준', k: ['{{16개 항목}} 기재', '[[게시·비치]]', '용기 [[경고표지]]'] },
    { h: '현장 유의사항', k: ['반입 시 MSDS 수령', '배치·변경 시 교육', '밀폐공간 환기'] },
    { h: '개선방안', k: ['QR코드 열람', '다국어 MSDS', '저VOC 자재'] }
  ],
  code: '작·제·게·경·교 (작성·제출·게시·경고표지·교육)',
  read: '①16개 항목 MSDS 작성 → ②근로자 보는 곳에 게시·비치 → ③용기에 경고표지 부착'
},
180: {
  one: '항타·발파·장비 소음·진동을 [[부지경계선]]에서 측정해 주거지역 주간 {{65 dB(A)}} 이하로 관리',
  flow: ['사전조사', '특정공사 신고', '저소음 장비', '방음벽', '경계선 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="220" x2="460" y2="220" class="ln"/>' +
    '<rect x="50" y="160" width="80" height="60" class="bx2"/><line x1="70" y1="160" x2="70" y2="70" class="ln2"/>' +
    '<path d="M150,150 q15,20 0,40" class="bl"/><path d="M170,140 q20,30 0,60" class="bl"/>' +
    '<rect x="230" y="110" width="14" height="110" class="conc"/>' +
    '<line x1="280" y1="60" x2="280" y2="230" class="rd dash"/>' +
    '<path d="M360,160 L400,125 L440,160 Z" class="bx"/><rect x="365" y="160" width="70" height="60" class="bx"/>' +
    '<text x="90" y="58" text-anchor="middle" class="s2">저소음 장비</text>' +
    '<text x="237" y="100" text-anchor="middle" class="s2">방음벽</text>' +
    '<text x="286" y="50" class="r">부지경계선 측정</text>' +
    '<text x="470" y="80" text-anchor="end" class="bl">주간 65 dB(A)↓</text>' +
    '<text x="90" y="250" text-anchor="middle" class="t">발생원</text>' +
    '<text x="237" y="250" text-anchor="middle" class="t">전파경로</text>' +
    '<text x="400" y="250" text-anchor="middle" class="t">수음점</text>' +
    '<text x="40" y="251" class="n">①</text><text x="180" y="251" class="n">②</text><text x="258" y="50" class="n">③</text></svg>',
  heads: [
    { h: '규제기준(주거)', k: ['주간 {{65 dB(A)}}', '야간 {{50 dB(A)}}', '진동 주간 65 dB(V)'] },
    { h: '유의사항', k: ['저소음·저진동 장비', '방음벽·이격', '인접 구조물 계측'] },
    { h: '개선방안', k: ['IoT 실시간 모니터링', '무진동 파쇄 공법'] }
  ],
  code: '소음 조60·주65·야50 / 진동 65·60 / 원·경·수',
  read: '①발생원은 저소음 장비 → ②전파경로는 방음벽 차단 → ③부지경계선에서 주간 65dB(A)↓ 측정'
}
});
