// 간단 요약(한눈에·따라 그리기) — 이번주 No.133~156 / 형식: data/SCHEMA_SP.md, 근거: q_130_147.js·q_148_158.js·d1_*.js
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.w, {
133: {
  one: '[[AE제]]로 미세 [[연행공기]]를 넣어 시공연도·[[동결융해 저항성]]을 높이고 {{4.5±1.5%}}로 관리하는 기포 체적비',
  flow: ['AE제 투입', '연행공기 생성', 'Ball Bearing', '공기량 시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="50" class="ln"/>' +
    '<rect x="200" y="60" width="100" height="170" fill="none" class="rd dash"/>' +
    '<path d="M60,210 C140,200 180,80 260,70 L440,66" class="bl"/>' +
    '<line x1="60" y1="90" x2="440" y2="190" class="rd"/>' +
    '<text x="250" y="28" text-anchor="middle" class="t">연행공기 = AE제</text>' +
    '<text x="330" y="56" class="bl">내구성 ↑</text>' +
    '<text x="70" y="78" class="r">강도 ↓</text>' +
    '<text x="250" y="252" text-anchor="middle" class="r">4.5±1.5%</text>' +
    '<text x="440" y="252" text-anchor="end" class="s2">공기량(%) →</text>' +
    '<text x="330" y="253" class="n">①</text><text x="410" y="57" class="n">②</text><text x="125" y="79" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '관리기준', k: ['보통 {{4.5±1.5%}}', '경량 5.5·고강도 3.5', '1%↑ 강도 4~6%↓'] },
    { h: '유의사항', k: ['공기실 압력법 검사', '압송 중 손실 고려', '고온·FA → 감소'] },
    { h: '개선방안', k: ['기포간격계수 측정', 'FA 강열감량 관리'] }
  ],
  code: '갇·연 / 4.5±1.5 / 1%↑ → “슬이수삼강사육”',
  read: '①AE제로 공기량이 늘면 → ②동결융해 내구성↑ → ③강도는↓ → 4.5±1.5%로 관리'
},
134: {
  one: '전체 골재 중 [[잔골재]]의 절대용적비로, [[단위수량]]이 최소가 되는 최적값(통상 {{35~45%}})을 시험비빔으로 결정',
  flow: ['시험비빔', 'S/a 변화', '단위수량 최소', '최적 S/a'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="30" class="ln"/>' +
    '<path d="M90,80 Q250,300 410,80" class="bl"/>' +
    '<line x1="250" y1="190" x2="250" y2="230" class="ld"/><circle cx="250" cy="190" r="5" class="rf"/>' +
    '<text x="68" y="40" class="b">단위수량</text>' +
    '<text x="250" y="175" text-anchor="middle" class="b">최적 S/a</text>' +
    '<text x="250" y="252" text-anchor="middle" class="r">35~45%</text>' +
    '<text x="460" y="252" text-anchor="end" class="s2">S/a(%) →</text>' +
    '<text x="460" y="28" text-anchor="end" class="s2">小 분리 / 大 점성</text>' +
    '<text x="372" y="253" class="n">①</text><text x="290" y="176" class="n">②</text><text x="196" y="253" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['S/a 小 → 분리·Plug', 'S/a 大 → 수량↑·수축'] },
    { h: '유의사항', k: ['조립률 ±0.2 보정', 'AE감수제 +1~2%', '골재치수↑ → S/a↓'] },
    { h: '개선방안', k: ['입도 자동보정', '부순모래 미립분 관리'] }
  ],
  code: 'S/a 小 = 분리 / 大 = 점성 → “영이 일이”',
  read: '①S/a를 바꿔가며 시험비빔 → ②단위수량이 최소인 점 = 최적 S/a → ③통상 35~45%'
},
135: {
  one: '[[단위시멘트량]]이 적은 [[빈배합]](경제·저발열)과 많은 [[부배합]](강도·수밀↑, [[수화열]]·수축↑)',
  flow: ['소요 강도', '시멘트량 결정', '빈/부 선택', '대책 반영'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="80" y="60" width="90" height="30" class="bx2"/><rect x="80" y="90" width="90" height="140" class="soil"/>' +
    '<rect x="290" y="60" width="90" height="80" class="bx2"/><rect x="290" y="140" width="90" height="90" class="soil"/>' +
    '<text x="230" y="80" text-anchor="middle" class="s2">시멘트</text>' +
    '<text x="230" y="190" text-anchor="middle" class="s2">골재</text>' +
    '<text x="125" y="258" text-anchor="middle" class="t">빈배합</text>' +
    '<text x="335" y="258" text-anchor="middle" class="t">부배합</text>' +
    '<text x="392" y="100" class="r">열·수축↑</text><text x="392" y="190" class="bl">강도·수밀↑</text>' +
    '<text x="8" y="130" class="g s2">경제·저발열</text><text x="8" y="170" class="bl">분리 주의</text>' +
    '<text x="60" y="259" class="n">①</text><text x="270" y="259" class="n">②</text>' +
    '</svg>',
  heads: [
    { h: '특징 비교', k: ['빈: 경제·저발열', '부: 강도·수밀 양호', '부: 열·수축·측압'] },
    { h: '유의사항', k: ['부: 저발열·습윤양생', '부: 측압·타설속도', '빈: AE·감수제 보완'] },
    { h: '개선방안', k: ['고성능 감수제', 'FA·슬래그 치환'] }
  ],
  code: '빈 = 싸고·차갑고·분리 / “부강수열측”',
  read: '①빈배합: 시멘트 적어 경제·저발열, 분리 주의 ↔ ②부배합: 강도·수밀↑, 수화열·수축↑'
},
136: {
  one: '시멘트·[[건조 잔골재]]·혼화재를 [[공장 계량·혼합]]해 포대·[[Silo]]로 공급, 현장에서 [[규정 가수량]]의 물만 넣는 모르타르',
  flow: ['공장 계량', '포대·Silo', '현장 가수', '혼합·시공'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="90" width="120" height="70" class="bx"/>' +
    '<rect x="205" y="60" width="70" height="90" class="bx2"/><path d="M205,150 L240,182 L275,150" class="ln"/>' +
    '<rect x="340" y="90" width="120" height="70" class="bx"/>' +
    '<line x1="142" y1="125" x2="198" y2="125" class="ar"/><line x1="282" y1="125" x2="334" y2="125" class="ar"/>' +
    '<text x="80" y="122" text-anchor="middle" class="t">공장</text>' +
    '<text x="80" y="146" text-anchor="middle" class="s2">계량·혼합</text>' +
    '<text x="240" y="108" text-anchor="middle" class="t">Silo</text>' +
    '<text x="240" y="206" text-anchor="middle" class="s2">벌크·포대</text>' +
    '<text x="400" y="122" text-anchor="middle" class="t">현장</text>' +
    '<text x="400" y="146" text-anchor="middle" class="s2">믹서 → 시공</text>' +
    '<text x="400" y="70" text-anchor="middle" class="bl">+ 물만</text>' +
    '<text x="240" y="256" text-anchor="middle" class="r">규정 가수량 준수 (과다 → 강도↓)</text>' +
    '<text x="20" y="80" class="n">①</text><text x="180" y="80" class="n">②</text><text x="350" y="71" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['정밀계량 품질 균일', '공기 단축·인력 절감', '분진·야적 감소'] },
    { h: '유의사항', k: ['[[규정 가수량]] 준수', '사용가능시간 내', '재비빔 금지·방습'] },
    { h: '개선방안', k: ['Silo-믹서-펌프 일체', '가수량 자동 제어'] }
  ],
  code: '공장 계량 → 포·벌 → 현장 물만 “공포물”',
  read: '①공장에서 계량·혼합 → ②Silo·포대로 운반 → ③현장에서 규정 가수량 물만 넣고 비빔'
},
137: {
  one: '이어 치는 계획이음으로 [[전단력 작은 위치]]에 [[압축력 직각]]으로 두고, [[레이턴스 제거]]·습윤으로 일체화',
  flow: ['위치 계획', '레이턴스 제거', '습윤·도포', '이어치기·다짐'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="400" height="40" class="conc"/>' +
    '<path d="M40,100 l-10,18 l20,0 z" class="bx2"/><path d="M440,100 l-10,18 l20,0 z" class="bx2"/>' +
    '<line x1="240" y1="52" x2="240" y2="200" class="rd dash"/>' +
    '<line x1="40" y1="180" x2="440" y2="180" class="ln"/><line x1="40" y1="140" x2="440" y2="220" class="bl"/>' +
    '<text x="240" y="40" text-anchor="middle" class="r">시공이음 (경간 중앙)</text>' +
    '<text x="120" y="86" text-anchor="middle" class="t">보</text>' +
    '<text x="300" y="160" class="bl">전단력 작은 곳</text>' +
    '<text x="44" y="240" class="s2">S.F.D</text>' +
    '<text x="240" y="270" text-anchor="middle" class="s2">처리: 레이턴스 제거 → 습윤 → 이어치기</text>' +
    '<text x="252" y="214" class="n">①</text><text x="145" y="41" class="n">②</text><text x="80" y="271" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '설치 위치', k: ['[[전단력 작은 위치]]', '압축력 직각 방향', '작은보 폭 2배 이격'] },
    { h: '유의사항', k: ['레이턴스 제거·습윤', '25℃↑ {{2.0h}} 이내', '모르타르 도포·다짐'] },
    { h: '개선방안', k: ['응결지연제·고압수', '수팽창 지수재'] }
  ],
  code: '전작·압직·중앙 / 처리 “레습키지”',
  read: '①전단력이 작은 경간 중앙에 → ②압축력 직각으로 시공이음 → ③레이턴스 제거·습윤 후 이어치기'
},
138: {
  one: '[[온도변화]]·[[부동침하]]·진동 변형을 흡수하려고 기초 상부부터 [[구조체 완전 분리]]하는 이음',
  flow: ['변위량 산정', '구조체 분리', '채움재·지수판', '실란트·커버'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="60" width="150" height="150" class="bx"/><rect x="240" y="100" width="170" height="110" class="bx"/>' +
    '<rect x="50" y="210" width="165" height="25" class="conc"/><rect x="235" y="210" width="185" height="25" class="conc"/>' +
    '<line x1="225" y1="56" x2="225" y2="235" class="rd dash"/>' +
    '<text x="225" y="48" text-anchor="middle" class="t">E.J</text>' +
    '<text x="135" y="140" text-anchor="middle" class="b">건물 A</text>' +
    '<text x="325" y="160" text-anchor="middle" class="b">건물 B</text>' +
    '<text x="250" y="86" class="bl">온도·침하·진동 흡수</text>' +
    '<text x="225" y="255" text-anchor="middle" class="r">기초부터 완전 분리</text>' +
    '<text x="225" y="275" text-anchor="middle" class="s2">채움재·실란트·지수판</text>' +
    '<text x="440" y="87" class="n">①</text><text x="135" y="256" class="n">②</text><text x="140" y="276" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '설치위치', k: ['하중·높이 변화부', '신·구 증축 접합부', '채움재·실란트'] },
    { h: '유의사항', k: ['변위량 산정 이격폭', '지수판 연속 설치', '다웰바 슬리브'] },
    { h: '개선방안', k: ['내진 E.J 층간변위', '배관 신축관 통합'] }
  ],
  code: '위치 = 하·증·사 / 구성 “채실지다”',
  read: '①건물 A·B의 온도·침하·진동 변형이 달라 → ②기초부터 완전 분리 → ③채움재·실란트·지수판 마감'
},
139: {
  one: '[[단면 결손]]부를 미리 만들어 건조수축·온도 균열을 [[균열 유도]]하는 줄눈 (깊이 {{벽두께 1/5 이상}})',
  flow: ['위치 선정', '줄눈대 설치', '단면 결손', '균열 유도·실링'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="80" y="100" width="320" height="70" class="conc"/>' +
    '<path d="M228,100 L240,116 L252,100 Z" class="bx"/><path d="M228,170 L240,154 L252,170 Z" class="bx"/>' +
    '<path d="M240,116 L236,126 L244,136 L236,146 L240,154" class="rd"/>' +
    '<line x1="250" y1="172" x2="280" y2="206" class="ld"/>' +
    '<text x="240" y="70" text-anchor="middle" class="r">줄눈 깊이 ≥ 벽두께 1/5</text>' +
    '<text x="140" y="142" text-anchor="middle" class="t">벽</text>' +
    '<text x="470" y="88" text-anchor="end" class="bl">균열 유도</text>' +
    '<text x="284" y="212" class="s2">코킹(실링)</text>' +
    '<text x="80" y="250" class="s2">매스: 결손율 35%↑</text>' +
    '<text x="136" y="71" class="n">①</text><text x="256" y="140" class="n">②</text><text x="355" y="213" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['깊이 벽두께 {{1/5↑}}', '매스 35%↑·4~5m', '개구부·단면변화부'] },
    { h: '유의사항', k: ['줄눈부 피복 확보', '줄눈대 선형 고정', '코킹 연속 시공'] },
    { h: '개선방안', k: ['균열유도재 매립', '온도응력 해석'] }
  ],
  code: '일반 1/5↑ · 매스 35%↑ / “개변장배”',
  read: '①벽두께 1/5↑ 깊이로 단면 결손 → ②수축 균열이 줄눈 위치로 유도 → ③줄눈은 코킹(실링) 마감'
},
140: {
  one: '장스팬에서 {{600~900mm}} [[Shrinkage Strip]]을 남겨 두고 초기 수축 후 약 {{4주 후}} 채우는 [[지연줄눈]]',
  flow: ['A·B 구간 타설', 'Lap Bar 연결', '약 4주 대기', 'Strip 타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="90" width="170" height="70" class="conc"/><rect x="280" y="90" width="170" height="70" class="conc"/>' +
    '<rect x="200" y="90" width="80" height="70" fill="none" class="rd dash"/>' +
    '<line x1="170" y1="125" x2="310" y2="125" class="ln2"/>' +
    '' +
    '<text x="240" y="70" text-anchor="middle" class="r">Strip 600~900</text>' +
    '<text x="110" y="132" text-anchor="middle" class="t">A 구간</text>' +
    '<text x="370" y="132" text-anchor="middle" class="t">B 구간</text>' +
    '<text x="240" y="196" text-anchor="middle" class="bl">약 4주 후 타설</text>' +
    '<text x="240" y="230" text-anchor="middle" class="s2">Lap Bar 연결</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">수축 40% 진행 후 일체화</text>' +
    '<text x="165" y="71" class="n">①</text><text x="165" y="197" class="n">②</text><text x="140" y="263" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '설치기준', k: ['폭 {{600~900mm}}', '약 4주 후 타설', '신축줄눈 대체'] },
    { h: '유의사항', k: ['Metal Lath 막음', 'Lap Bar 보양', '하부 동바리 존치'] },
    { h: '개선방안', k: ['팽창재·수축저감제', 'BIM 타설시기 반영'] }
  ],
  code: '6~9백 · 4주 · 40% → “육구사사”',
  read: '①A·B 구간 사이 Strip 600~900 비움 → ②약 4주 후 Lap Bar로 연결 타설 → ③수축 40% 진행 후 일체화'
},
141: {
  one: '타설 후 습윤을 유지할 최소기간으로 15℃ 이상에서 [[조강]] {{3일}}·[[보통]] {{5일}}·[[혼합]] {{7일}}',
  flow: ['타설', '증발 방지', '살수·습포', '기간 확보'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="80" y1="230" x2="400" y2="230" class="ln"/>' +
    '<rect x="110" y="155" width="60" height="75" class="bx"/><rect x="210" y="105" width="60" height="125" class="bx2"/><rect x="310" y="55" width="60" height="175" class="bx3"/>' +
    '<text x="140" y="147" text-anchor="middle" class="r">3일</text>' +
    '<text x="240" y="97" text-anchor="middle" class="r">5일</text>' +
    '<text x="340" y="47" text-anchor="middle" class="r">7일</text>' +
    '<text x="140" y="254" text-anchor="middle" class="b">조강</text>' +
    '<text x="240" y="254" text-anchor="middle" class="b">보통</text>' +
    '<text x="340" y="254" text-anchor="middle" class="b">혼합</text>' +
    '<text x="460" y="40" text-anchor="end" class="t">15℃ 이상</text>' +
    '<text x="470" y="70" text-anchor="end" class="s2">기온↓ → 기간↑</text>' +
    '<text x="132" y="200" class="n">①</text><text x="232" y="175" class="n">②</text><text x="332" y="150" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '기간 기준', k: ['보통 {{5일}}', '혼합 {{7일}}', '조강 {{3일}}'] },
    { h: '유의사항', k: ['경화 전 시트 덮기', '경화 후 살수·습포', '진동·과하중 금지'] },
    { h: '개선방안', k: ['자동 살수·보습포', '무선 온습도 센서'] }
  ],
  code: '15℃ 오칠삼 / 10℃ 칠구사 / 5℃ 구십이오',
  read: '15℃ 이상에서 ①조강 3일 → ②보통 5일 → ③혼합 7일, 기온이 낮으면 기간↑'
},
142: {
  one: '표면을 [[비닐 Sheet]]나 [[양생제 피막]]으로 덮어 [[수분 증발 억제]]로 수화를 지속시키는 양생',
  flow: ['블리딩 종료', 'Sheet·양생제', '2회 교차 도포', '피막 유지'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="150" width="360" height="60" class="conc"/>' +
    '<line x1="50" y1="142" x2="430" y2="142" class="bl"/>' +
    '<line x1="120" y1="200" x2="120" y2="148" class="ar"/><line x1="360" y1="200" x2="360" y2="148" class="ar"/>' +
    '<text x="240" y="60" text-anchor="middle" class="r">수분 증발 차단</text>' +
    '<text x="240" y="128" text-anchor="middle" class="bl">Sheet·양생제 피막</text>' +
    '<text x="240" y="195" text-anchor="middle" class="t">콘크리트</text>' +
    '<text x="60" y="250" class="s2">블리딩 종료 후</text>' +
    '<text x="420" y="250" text-anchor="end" class="s2">2회 교차 도포</text>' +
    '<text x="36" y="251" class="n">①</text><text x="150" y="129" class="n">②</text><text x="165" y="61" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류', k: ['Sheet: 물리적 차단', '피막: 화학적 차단', '살수 곤란 대면적'] },
    { h: '유의사항', k: ['블리딩 종료 후', '2회 교차 도포', 'Sheet 겹침 밀착'] },
    { h: '개선방안', k: ['보습 양생포', '증발률 측정 착수'] }
  ],
  code: '시트 = 물리 / 피막 = 화학 → “시물피화”',
  read: '①블리딩 끝난 뒤 → ②Sheet·양생제 피막으로 표면을 덮어 → ③수분 증발을 막아 수화 지속'
},
143: {
  one: '[[일평균기온]] {{4℃ 이하}}에서 [[초기동해]]를 막기 위해 타설온도 5~20℃, 강도 {{5MPa}}까지 보온양생',
  flow: ['AE·W/B 60↓', '타설 5~20℃', '보온·가열양생', '5MPa 확보'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M60,220 L60,90 L240,40 L420,90 L420,220" class="ln"/>' +
    '<rect x="110" y="180" width="260" height="40" class="conc"/>' +
    '<rect x="70" y="150" width="30" height="25" class="bx2"/>' +
    '<line x1="40" y1="220" x2="440" y2="220" class="ln"/>' +
    '<text x="240" y="80" text-anchor="middle" class="bl">보온·가열 양생</text>' +
    '<text x="240" y="120" text-anchor="middle" class="b">강도 5MPa 확보</text>' +
    '<text x="240" y="150" text-anchor="middle" class="r">타설 5~20℃</text>' +
    '<text x="240" y="205" text-anchor="middle" class="s2">콘크리트</text>' +
    '<text x="240" y="262" text-anchor="middle" class="t">일평균 4℃ 이하</text>' +
    '<text x="140" y="263" class="n">①</text><text x="168" y="151" class="n">②</text><text x="165" y="81" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '적용기준', k: ['일평균 {{4℃ 이하}}', 'AE·W/B 60% 이하', '적산온도 210'] },
    { h: '유의사항', k: ['초기동해 강도손실', '물·골재만 가열', '급랭 방지'] },
    { h: '개선방안', k: ['방동·내한제', '적산온도 강도추정'] }
  ],
  code: '4℃↓ · 5~20℃ · 5MPa “사오오육이일공”',
  read: '①일평균 4℃↓면 한중 → ②타설온도 5~20℃ 유지 → ③보온·가열해 강도 5MPa까지 양생'
},
144: {
  one: '양생온도+10℃와 시간을 누적한 [[M = Σ(θ+10)Δt]]로 [[압축강도 추정]]·해체시기를 정하는 값',
  flow: ['온도 측정', 'M 누적', '강도 추정', '해체·양생 판단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="40" class="ln"/>' +
    '<path d="M60,230 C140,120 260,80 450,70" class="bl"/>' +
    '<line x1="177" y1="129" x2="177" y2="230" class="ld"/><line x1="60" y1="129" x2="177" y2="129" class="ld"/><circle cx="177" cy="129" r="5" class="rf"/>' +
    '<text x="240" y="30" text-anchor="middle" class="t">M = Σ(θ+10)Δt</text>' +
    '<text x="68" y="56" class="b">강도</text>' +
    '<text x="54" y="134" text-anchor="end" class="r">5MPa</text>' +
    '<text x="177" y="254" text-anchor="middle" class="r">210°D·D</text>' +
    '<text x="300" y="130" class="bl">강도 추정·해체</text>' +
    '<text x="460" y="256" text-anchor="end" class="s2">M(°D·D) →</text>' +
    '<text x="360" y="257" class="n">①</text><text x="272" y="131" class="n">②</text><text x="120" y="255" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '활용', k: ['압축강도 추정', '거푸집 해체시기', '한중 M ≥ 210'] },
    { h: '유의사항', k: ['0℃ 이하 불성립', '실측 양생온도', '시멘트별 관계식'] },
    { h: '개선방안', k: ['Maturity Sensor', 'BIM 해체 자동판단'] }
  ],
  code: 'M = Σ(θ+10)Δt / 210 → “강양해보”',
  read: '①(온도+10)×시간 누적 = M → ②강도 곡선에서 강도 추정 → ③5MPa 도달 M ≈ 210°D·D 해체'
},
145: {
  one: '[[일평균기온]] {{25℃ 초과}} 시 [[슬럼프 저하]]·급속 증발에 대비해 타설온도 {{35℃ 이하}}, 1.5시간 내 타설',
  flow: ['지연형 감수제', '35℃↓ 타설', '1.5h 내 완료', '5일 습윤양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="70" cy="40" r="14" class="rf"/>' +
    '<line x1="40" y1="150" x2="455" y2="150" class="ar"/>' +
    '<circle cx="60" cy="150" r="5" class="dotf"/><circle cx="200" cy="150" r="5" class="dotf"/><circle cx="430" cy="150" r="5" class="dotf"/>' +
    '<line x1="200" y1="120" x2="430" y2="120" class="bl"/>' +
    '<text x="240" y="46" text-anchor="middle" class="t">일평균 25℃ 초과</text>' +
    '<text x="130" y="138" text-anchor="middle" class="r">1.5h 이내</text>' +
    '<text x="315" y="108" text-anchor="middle" class="bl">습윤 5일↑</text>' +
    '<text x="60" y="178" text-anchor="middle" class="s2">비비기</text>' +
    '<text x="200" y="178" text-anchor="middle" class="s2">타설</text>' +
    '<text x="240" y="250" text-anchor="middle" class="r">타설온도 35℃ 이하</text>' +
    '<text x="110" y="47" class="n">①</text><text x="74" y="139" class="n">②</text><text x="365" y="109" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '적용기준', k: ['일평균 {{25℃ 초과}}', '타설 35℃ 이하', '1.5h 내·24h 습윤'] },
    { h: '문제점', k: ['슬럼프 저하', 'Cold Joint', '현장 가수 금지'] },
    { h: '개선방안', k: ['Pre-cooling', '야간 타설·온도계측'] }
  ],
  code: '25 초과·35 이하·1.5h “이오삼오 일오”',
  read: '①일평균 25℃ 초과 시 → ②비비기부터 1.5h 이내 타설(35℃↓) → ③타설 후 습윤 5일↑'
},
146: {
  one: '[[쪼갬 인장강도]]를 수화열 [[온도응력]]으로 나눈 {{Icr = fsp/ft}} 값, 클수록 균열확률 낮음',
  flow: ['수화열 해석', 'Icr 산정', '목표값 비교', '배합·시공 대책'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="50" class="ln"/>' +
    '<path d="M70,70 C180,90 260,200 440,222" class="bl"/>' +
    '<line x1="200" y1="80" x2="200" y2="230" class="ld"/><line x1="300" y1="80" x2="300" y2="230" class="ld"/><line x1="360" y1="80" x2="360" y2="230" class="ld"/>' +
    '<text x="250" y="30" text-anchor="middle" class="t">Icr = 인장강도 / 온도응력</text>' +
    '<text x="68" y="60" class="b">균열확률</text>' +
    '<text x="370" y="120" class="s2">1.5↑ 방지</text>' +
    '<text x="200" y="254" text-anchor="middle" class="r">0.7</text>' +
    '<text x="300" y="254" text-anchor="middle" class="r">1.2</text>' +
    '<text x="360" y="254" text-anchor="middle" class="r">1.5</text>' +
    '<text x="460" y="254" text-anchor="end" class="s2">Icr →</text>' +
    '<text x="125" y="31" class="n">①</text><text x="215" y="200" class="n">②</text><text x="445" y="121" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '판정기준', k: ['1.5↑ 균열방지', '1.2~1.5 균열제한', '0.7~1.2 유해제한'] },
    { h: '균열 원인', k: ['내부구속 표면급랭', '외부구속 리프트', '온도 계측 검증'] },
    { h: '대책', k: ['저발열·FA·슬래그', 'Pipe Cooling', '분할타설'] }
  ],
  code: 'Icr = 인장/온도응력 → “일오 일이 공칠”',
  read: '①Icr = 인장강도/온도응력 → ②Icr 클수록 균열확률↓ → ③1.5↑이면 균열 방지'
},
147: {
  one: '보 없이 기둥이 슬래브를 지지하는 [[무량판]] 구조로, 기둥면 {{d/2}}에서 뚫리는 [[Punching Shear]]가 급소',
  flow: ['위험단면 d/2', '지판 설치', '전단보강', '동바리 관리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="90" width="420" height="30" class="conc"/><rect x="170" y="120" width="140" height="30" class="conc"/>' +
    '<rect x="215" y="150" width="50" height="110" class="bx"/>' +
    '<line x1="215" y1="150" x2="170" y2="90" class="rd dash"/><line x1="265" y1="150" x2="310" y2="90" class="rd dash"/>' +
    '<line x1="310" y1="90" x2="330" y2="66" class="ld"/><line x1="300" y1="140" x2="340" y2="170" class="ld"/>' +
    '<text x="40" y="80" class="s2">슬래브</text>' +
    '<text x="330" y="60" class="r">Punching Crack</text>' +
    '<text x="344" y="176" class="s2">지판 (Drop Panel)</text>' +
    '<text x="240" y="210" text-anchor="middle" class="t">기둥</text>' +
    '<text x="40" y="200" class="bl">위험단면 d/2</text>' +
    '<text x="40" y="230" class="s2">지판 L/6·t/4</text>' +
    '<text x="16" y="201" class="n">①</text><text x="306" y="61" class="n">②</text><text x="344" y="200" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구조기준', k: ['지판 L/6 이상 연장', '지판 두께 t/4 이상', '위험단면 {{d/2}}'] },
    { h: '유의사항', k: ['기둥 주위 Sleeve 제한', '동바리 조기해체 금지', '상부근·피복 확보'] },
    { h: '개선방안', k: ['Shear Stud Rail', 'Integrity rebar'] }
  ],
  code: '지판 L/6·t/4 / 위험단면 d/2 “반d”',
  read: '①기둥면에서 d/2 위험단면에 → ②Punching 전단균열이 경사로 뚫림 → ③지판(L/6·t/4)으로 보강'
},
148: {
  one: '[[내진]]은 강성으로 버티고, [[면진]]은 적층고무로 끊고, [[제진]]은 댐퍼로 흡수하는 지진 대응 구조',
  flow: ['지진력', '저항(내진)', '차단(면진)', '흡수(제진)'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="20" y1="220" x2="460" y2="220" class="ln"/>' +
    '<rect x="40" y="90" width="90" height="130" class="bx"/><line x1="40" y1="90" x2="130" y2="220" class="ln"/><line x1="130" y1="90" x2="40" y2="220" class="ln"/>' +
    '<rect x="195" y="60" width="90" height="130" class="bx"/><rect x="205" y="192" width="22" height="26" class="bx2"/><rect x="253" y="192" width="22" height="26" class="bx2"/>' +
    '<rect x="350" y="90" width="90" height="130" class="bx"/><rect x="380" y="60" width="30" height="24" class="bx2"/><line x1="395" y1="84" x2="395" y2="90" class="ln"/>' +
    '<text x="85" y="246" text-anchor="middle" class="t">내진</text>' +
    '<text x="240" y="246" text-anchor="middle" class="t">면진</text>' +
    '<text x="395" y="246" text-anchor="middle" class="t">제진</text>' +
    '<text x="85" y="270" text-anchor="middle" class="s2">강성 저항</text>' +
    '<text x="240" y="270" text-anchor="middle" class="s2">절연·장주기</text>' +
    '<text x="395" y="270" text-anchor="middle" class="s2">감쇠 흡수</text>' +
    '<text x="40" y="247" class="n">①</text><text x="195" y="247" class="n">②</text><text x="350" y="247" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['내진: 강성·인성', '면진: 장주기화', '제진: 감쇠 증가'] },
    { h: '유의사항', k: ['띠철근 135° 갈고리', '면진 이격거리', '댐퍼 성능시험'] },
    { h: '개선방안', k: ['Hybrid·성능기반설계', '댐퍼 Retrofit'] }
  ],
  code: '내·면·제 = 저·차·흡 (저항·차단·흡수)',
  read: '①내진: 강성으로 버팀 → ②면진: 적층고무로 진동 차단 → ③제진: 댐퍼로 흡수'
},
149: {
  one: '[[제어압연]]·[[가속냉각]]으로 [[결정립 미세화]]하여 탄소당량을 낮추고 두꺼워도 강도가 일정한 후판 강재',
  flow: ['재가열', '제어압연', '가속냉각', '결정립 미세화'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="30" class="ln"/>' +
    '<path d="M70,50 L130,50 L170,110 L230,120 L260,125 L300,215 L440,220" class="bl"/>' +
    '<text x="54" y="70" text-anchor="end" class="s2">온도</text>' +
    '<text x="80" y="40" class="s2">재가열</text>' +
    '<text x="200" y="102" text-anchor="middle" class="bl">제어압연</text>' +
    '<text x="290" y="160" class="r">가속냉각(수냉)</text>' +
    '<text x="460" y="40" text-anchor="end" class="t">결정립 미세화 → Ceq↓</text>' +
    '<text x="460" y="254" text-anchor="end" class="s2">시간 →</text>' +
    '<text x="135" y="42" class="n">①</text><text x="244" y="103" class="n">②</text><text x="320" y="195" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['조직제어로 강도', 'Ceq·Pcm↓ 예열↓', '후판 강도 일정'] },
    { h: '유의사항', k: ['재가열 열처리 제한', '대입열 HAZ 연화', 'Mill Sheet 확인'] },
    { h: '개선방안', k: ['초고층 후판 기둥', '예열생략 표준화'] }
  ],
  code: 'TMC = 제·가·미 → 예열↓·두께 무관',
  read: '①재가열 후 → ②제어압연으로 결정립 미세화 → ③가속냉각(수냉) → Ceq↓·두께 무관 강도'
},
150: {
  one: '합금원소 영향을 탄소량으로 환산한 [[용접성]] 지표로, {{0.44%}} 이하 양호, 초과 시 [[예열]]·후열',
  flow: ['성분 확인', 'Ceq 산정', '0.44% 비교', '예열 결정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="145" width="180" height="14" class="bx"/><rect x="240" y="145" width="180" height="14" class="bx2"/>' +
    '<line x1="240" y1="110" x2="240" y2="166" class="rd"/>' +
    '<text x="240" y="50" text-anchor="middle" class="t">Ceq = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15</text>' +
    '<text x="150" y="135" text-anchor="middle" class="g">용접성 양호</text>' +
    '<text x="330" y="135" text-anchor="middle" class="r">예열·후열 필요</text>' +
    '<text x="240" y="186" text-anchor="middle" class="b">0.44%</text>' +
    '<text x="240" y="240" text-anchor="middle" class="s2">Ceq↑ → 저온균열·HAZ 경화</text>' +
    '<text x="20" y="51" class="n">①</text><text x="80" y="136" class="n">②</text><text x="392" y="136" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '활용', k: ['{{0.44%}}↓ 용접성 양호', '예열온도 결정', 'HAZ 경도 추정'] },
    { h: '유의사항', k: ['Mill Sheet 재계산', '이종강재 상위 기준', '후판은 Pcm 병행'] },
    { h: '개선방안', k: ['저Ceq TMC강', '예열 산정 프로그램'] }
  ],
  code: '씨·망6·크몰바5·니구15 / 0.44 넘으면 예열',
  read: '①C·Mn·Cr 등으로 Ceq 계산 → ②0.44% 이하면 용접성 양호 → ③초과 시 예열·후열'
},
151: {
  one: '제강사 발행 [[Heat No.]]·[[화학성분]]·[[기계적 성질]] 증명서로, 반입 시 [[원본 대조]]와 강재 표시 일치 확인',
  flow: ['원본 대조', 'Heat No. 일치', '성분·강도 검토', '공인시험'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="150" height="200" class="bx"/>' +
    '<rect x="290" y="110" width="160" height="40" class="bx2"/>' +
    '<line x1="195" y1="115" x2="284" y2="128" class="ar"/>' +
    '<text x="115" y="70" text-anchor="middle" class="t">Mill Sheet</text>' +
    '<text x="55" y="110" class="s2">Heat No.</text>' +
    '<text x="55" y="145" class="s2">화학성분</text>' +
    '<text x="55" y="180" class="s2">기계적 성질</text>' +
    '<text x="370" y="135" text-anchor="middle" class="b">강재 Heat No.</text>' +
    '<text x="330" y="80" text-anchor="middle" class="r">원본 대조·일치</text>' +
    '<text x="370" y="200" text-anchor="middle" class="s2">주요부재 공인시험</text>' +
    '<text x="16" y="60" class="n">①</text><text x="258" y="81" class="n">②</text><text x="290" y="201" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '확인항목', k: ['Heat No. 일치', '화학성분 → Ceq', 'YS·TS·EL·충격'] },
    { h: '유의사항', k: ['사본 원본대조 날인', '주요부재 공인시험', 'Heat No.별 적치'] },
    { h: '개선방안', k: ['전자 Mill Sheet·QR', 'BIM 부재 이력관리'] }
  ],
  code: '밀시트 = 히·화·기 + 원본대조',
  read: '①Mill Sheet의 Heat No.·성분·기계적 성질을 → ②강재 표시와 원본 대조 → ③주요부재는 공인시험'
},
152: {
  one: '[[기둥 이음]] 단면을 [[Facing Machine]]으로 정밀가공·밀착하여 축력의 {{50%}}를 접촉으로 전달하는 이음',
  flow: ['정밀 가공', '직각도 검측', '밀착 세우기', '50% 보강'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="190" y="30" width="100" height="105" class="bx"/><rect x="190" y="139" width="100" height="110" class="bx"/>' +
    '<line x1="186" y1="137" x2="294" y2="137" class="rd"/>' +
    '<line x1="240" y1="2" x2="240" y2="26" class="ar"/>' +
    '<line x1="290" y1="137" x2="330" y2="137" class="ld"/>' +
    '<text x="240" y="90" text-anchor="middle" class="t">기둥</text>' +
    '<text x="20" y="100" class="r">축력 50% 접촉 전달</text>' +
    '<text x="20" y="190" class="s2">나머지 50% 용접·볼트</text>' +
    '<text x="334" y="142" class="bl">정밀가공 면 밀착</text>' +
    '<text x="334" y="180" class="r">직각도 1.5/1000</text>' +
    '<text x="334" y="215" class="s2">Facing Machine</text>' +
    '<text x="252" y="22" class="n">①</text><text x="456" y="143" class="n">②</text><text x="20" y="75" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['이음재료 절감', '용접변형 저감', '인장·전단 불가'] },
    { h: '유의사항', k: ['직각도 {{1.5/1000}}', 'Filler·Shim 금지', '밀착면 녹·도장 금지'] },
    { h: '개선방안', k: ['3D 스캐너 검측', 'CFT·Box 표준상세'] }
  ],
  code: '메탈터치 = 페·밀·반 / 1.5/1000',
  read: '①위에서 축력이 내려오면 → ②정밀가공한 면이 밀착해 → ③축력 50%는 접촉, 50%는 용접·볼트'
},
153: {
  one: '[[용접선 교차]]·[[열영향]] 중복을 피하려 웨브 단부를 r1 {{35mm}}·r2 {{10mm}} 이상 부채꼴로 판 홈',
  flow: ['원호 가공', '노치 제거', '플랜지 용접', '단부 돌림용접'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="20" width="24" height="230" class="bx2"/>' +
    '<rect x="84" y="60" width="360" height="16" class="bx2"/><rect x="84" y="200" width="360" height="16" class="bx2"/>' +
    '<path d="M119,76 L440,76 L440,200 L119,200 A35,35 0 0 0 84,165 L84,111 A35,35 0 0 0 119,76 Z" class="bx"/>' +
    '<line x1="100" y1="90" x2="128" y2="46" class="ld"/>' +
    '<text x="130" y="40" class="r">Scallop (r1≥35, r2≥10mm)</text>' +
    '<text x="72" y="276" text-anchor="middle" class="t">기둥</text>' +
    '<text x="260" y="145" text-anchor="middle" class="bl">용접선 교차 방지</text>' +
    '<text x="130" y="240" class="s2">단부 돌림용접</text>' +
    '<text x="300" y="240" class="s2">Notch 1mm 이하</text>' +
    '<text x="106" y="40" class="n">①</text><text x="178" y="146" class="n">②</text><text x="104" y="241" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '가공기준', k: ['r1 35·r2 10mm↑', 'Notch 1mm 이하', '거칠기 100μm↓'] },
    { h: '유의사항', k: ['단부 돌림용접', '노치 그라인더 마감', '지진 시 균열 기점'] },
    { h: '개선방안', k: ['Non-Scallop 공법', '로봇 가공·용접'] }
  ],
  code: '스캘럽 = 삼오·일영 (r1 35·r2 10)',
  read: '①웨브 단부를 r1 35·r2 10mm 부채꼴로 따내 → ②용접선 교차·열영향 중복 방지 → ③단부 돌림용접'
},
154: {
  one: '[[미개봉 반입]] 후 성적서·Lot·[[토크계수값]] 확인, [[축력시험]](로트당 {{5세트}}) 뒤 건조 보관·선입선출',
  flow: ['성적서 확인', '외관·Lot', '축력시험', '건조 보관'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="25" y="80" width="120" height="80" class="bx"/><rect x="180" y="80" width="120" height="80" class="bx2"/><rect x="335" y="80" width="120" height="80" class="bx"/>' +
    '<line x1="147" y1="120" x2="174" y2="120" class="ar"/><line x1="302" y1="120" x2="329" y2="120" class="ar"/>' +
    '<text x="85" y="115" text-anchor="middle" class="t">반입</text>' +
    '<text x="240" y="115" text-anchor="middle" class="t">축력시험</text>' +
    '<text x="395" y="115" text-anchor="middle" class="t">보관</text>' +
    '<text x="85" y="142" text-anchor="middle" class="s2">성적서·Lot</text>' +
    '<text x="240" y="142" text-anchor="middle" class="s2">로트당 5세트</text>' +
    '<text x="395" y="142" text-anchor="middle" class="s2">건조·선입선출</text>' +
    '<text x="240" y="220" text-anchor="middle" class="r">토크계수값 확인 → 축력 좌우</text>' +
    '<text x="78" y="70" class="n">①</text><text x="233" y="70" class="n">②</text><text x="388" y="70" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '반입검사', k: ['성적서·외관·Lot', 'A종 0.110~0.150', '로트당 {{5세트}}'] },
    { h: '재료관리', k: ['건조·통풍 보관', '녹·기름 볼트 금지', '장기보관 재시험'] },
    { h: '개선방안', k: ['바코드·RFID 이력', '현장 축력계 비치'] }
  ],
  code: '반입 = 성·외·축 / 보관 = 건·로·선',
  read: '①미개봉 반입·성적서·Lot 확인 → ②로트당 5세트 축력시험 → ③건조 보관·선입선출'
},
155: {
  one: '[[전용 렌치]]로 조여 [[핀테일]]이 파단홈에서 끊기면 축력 도입, [[금매김]]이 함께 돌면 [[축회전]] 불량',
  flow: ['1차 조임', '금매김', '본조임', '핀테일 파단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="130" y="70" width="50" height="140" class="bx3"/><rect x="180" y="70" width="50" height="140" class="bx3"/>' +
    '<rect x="60" y="105" width="30" height="70" class="bx2"/><rect x="90" y="125" width="230" height="30" class="bx"/>' +
    '<rect x="230" y="110" width="30" height="60" class="bx2"/><rect x="326" y="130" width="50" height="20" class="bx"/>' +
    '<line x1="245" y1="100" x2="245" y2="118" class="rd"/>' +
    '<line x1="350" y1="130" x2="370" y2="95" class="ld"/><line x1="323" y1="150" x2="330" y2="186" class="ld"/>' +
    '<text x="40" y="40" class="t">TS bolt</text>' +
    '<text x="300" y="88" class="r">핀테일 파단 = 축력 OK</text>' +
    '<text x="330" y="200" class="s2">파단홈</text>' +
    '<text x="40" y="250" class="r">금매김 어긋남 = 축회전</text>' +
    '<text x="400" y="230" class="s2">전용 렌치</text>' +
    '<text x="375" y="231" class="n">①</text><text x="276" y="89" class="n">②</text><text x="16" y="251" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '판정', k: ['핀테일 파단 확인', '금매김 어긋남', '너트 회전 ±30°'] },
    { h: '축회전 원인', k: ['부재 습윤(우천)', '마찰면 녹·이물질', '렌치 작동 불량'] },
    { h: '대책', k: ['우천 시 작업중지', '렌치 정기 교정', '불량 볼트 신품교체'] }
  ],
  code: 'TS = 핀·홈·렌 / 축회전 = 습·이·기',
  read: '①전용 렌치로 너트 조임 → ②핀테일이 파단홈에서 끊기면 축력 도입 → ③금매김 보고 축회전 불량 확인'
},
156: {
  one: '[[T = k·d·N]]으로 토크를 정해 [[본조임]]하고 볼트군 {{10%}}를 검사해 [[평균토크 ±10%]] 이내 합격',
  flow: ['1차 조임', '금매김', '본조임', '10% 검사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="450" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="20" class="ln"/>' +
    '<line x1="60" y1="230" x2="420" y2="50" class="bl"/>' +
    '<line x1="60" y1="230" x2="420" y2="32" class="rd dash"/><line x1="60" y1="230" x2="420" y2="68" class="rd dash"/>' +
    '<text x="120" y="40" class="t">T = k · d · N</text>' +
    '<text x="68" y="30" class="s2">토크 T</text>' +
    '<text x="350" y="40" class="r">±10% 합격</text>' +
    '<text x="230" y="190" class="bl">k값 변동 주의</text>' +
    '<text x="460" y="254" text-anchor="end" class="s2">축력 N →</text>' +
    '<text x="60" y="272" class="s2">볼트군 10% 검사</text>' +
    '<text x="232" y="41" class="n">①</text><text x="170" y="273" class="n">②</text><text x="325" y="41" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '검사기준', k: ['설계장력 × {{1.1}}', '볼트군 10% 검사', '평균토크 ±10%'] },
    { h: '유의사항', k: ['불합격 → 전수검사', '초과 볼트 신품교체', '당일 개봉 당일 사용'] },
    { h: '개선방안', k: ['전동렌치 자동기록', 'BIM 조임 이력'] }
  ],
  code: '조임 = 일·금·본 / 검사 = 십·십',
  read: '①T = k·d·N으로 조임 토크 결정 → ②본조임 후 볼트군 10% 검사 → ③평균토크 ±10% 이내 합격'
}
});
