// 간단 요약(SP) — 디테일원 용어250 group h (159~180) — 형식: data/SCHEMA_SP.md / 근거: data/dw_h.js
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
159: {
  one: '타일 시공 후 [[타음법]]으로 들뜸을 전면 확인하고 [[접착력 시험]]으로 [[부착강도]] {{0.39MPa 이상}}을 판정',
  flow: ['줄눈 후 4주', '200㎡당 1회', '바탕까지 절단', '수직 인장', '≥0.39MPa'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="30" width="50" height="210" class="conc"/><rect x="90" y="30" width="10" height="210" class="bx2"/>' +
    '<rect x="100" y="30" width="10" height="90" class="bx3"/><rect x="100" y="125" width="10" height="60" class="bx"/><rect x="100" y="190" width="10" height="50" class="bx3"/>' +
    '<line x1="88" y1="122" x2="114" y2="122" class="rd"/><line x1="88" y1="187" x2="114" y2="187" class="rd"/>' +
    '<rect x="110" y="140" width="10" height="30" class="bx2"/><line x1="120" y1="155" x2="170" y2="155" class="ln"/>' +
    '<rect x="170" y="135" width="90" height="40" class="bx"/><text x="215" y="160" text-anchor="middle">시험기</text>' +
    '<line x1="262" y1="155" x2="320" y2="155" class="ar"/><text x="326" y="160" class="r">P 수직 인장</text>' +
    '<text x="284" y="146" class="n">②</text>' +
    '<text x="170" y="125" class="s2">시험체 180×60mm</text>' +
    '<line x1="110" y1="70" x2="140" y2="60" class="ld"/><text x="144" y="64">타일</text>' +
    '<line x1="114" y1="188" x2="140" y2="214" class="ld"/><text x="144" y="226" class="n">①</text><text x="166" y="226" class="r">줄눈 바탕까지 절단</text>' +
    '<text x="40" y="266">바탕 콘크리트</text>' +
    '<text x="300" y="64" class="bl">200㎡당 1회 · 4주 후</text>' +
    '<text x="300" y="266" class="n">③</text><text x="322" y="266" class="r">0.39MPa 이상 합격</text>' +
    '</svg>',
  read: '①줄눈을 바탕까지 절단해 시험체 분리 → ②시험기로 수직 인장 → ③0.39MPa 이상이면 합격',
  heads: [
    { h: '시험기준', k: ['타음법 전면 두들김', '{{200㎡당 1회}}', '시험체 {{180×60mm}}'] },
    { h: '시험 시 유의사항', k: ['줄눈 후 {{4주}} 시험', '[[바탕까지 절단]]', '일정속도 수직 인장'] },
    { h: '개선방안', k: ['적외선 열화상 진단', '사진·기록 이력관리'] }
  ],
  code: '💡 타접 이공사 영삼구 → 타음·접착 / 200㎡ / 4주 / 0.39MPa'
},
160: {
  one: '구조체에 [[Anchor Bolt]]·[[Fastener]]를 고정하고 [[촉(Pin)]]으로 석재를 한 장씩 개별 지지하는 [[건식공법]]',
  flow: ['먹매김', 'Anchor 설치', 'Fastener 조정', '촉 삽입·설치', 'Sealant'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="20" width="50" height="230" class="conc"/>' +
    '<rect x="200" y="20" width="30" height="110" class="bx2"/><rect x="200" y="140" width="30" height="110" class="bx2"/>' +
    '<line x1="45" y1="133" x2="80" y2="133" class="ln"/><rect x="80" y="130" width="125" height="6" class="bx3"/>' +
    '<line x1="215" y1="112" x2="215" y2="158" class="rd"/>' +
    '<text x="55" y="272" text-anchor="middle">구조체</text>' +
    '<line x1="65" y1="130" x2="88" y2="116" class="ld"/><text x="90" y="110" class="n">①</text><text x="112" y="110">Anchor</text>' +
    '<text x="90" y="164" class="n">②</text><text x="112" y="164">Fastener</text>' +
    '<line x1="230" y1="60" x2="260" y2="50" class="ld"/><text x="264" y="55">석재</text>' +
    '<line x1="217" y1="135" x2="258" y2="135" class="ld"/><text x="262" y="141" class="n">③</text><text x="284" y="141">촉(Pin)</text>' +
    '<text x="284" y="166" class="r">촉구멍 +3mm</text>' +
    '<text x="262" y="214" class="bl">석재 한 장씩 개별 지지</text>' +
    '</svg>',
  read: '①Anchor Bolt를 구조체에 고정 → ②Fastener로 위치 조정 → ③촉(Pin)이 석재를 한 장씩 지지',
  heads: [
    { h: '긴결 원리·형식', k: ['상부 고정·하부 지지', '하부석재 전달X', 'Grouting/Non-Gr.'] },
    { h: '시공 시 유의사항', k: ['촉구멍 {{+3mm}}', '철물 [[STS304]]', 'Sealant 연속'] },
    { h: '개선방안', k: ['Unit화·트러스 지지', 'BIM·Mock-up 검증'] }
  ],
  code: '💡 앵파촉실 → Anchor·Fastener·촉·Sealant'
},
161: {
  one: '줄눈에 [[Sealant]] 없이 [[Rain Screen]]과 [[기밀층]] 사이 [[등압공간]]을 두어 {{P=P1>P2}}로 빗물 차단',
  flow: ['기밀층 시공', '등압공간 확보', '석재 Open 설치', '압력 평형', '침입 차단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="20" width="40" height="210" class="conc"/><line x1="86" y1="20" x2="86" y2="230" class="bl"/>' +
    '<rect x="200" y="20" width="24" height="90" class="bx2"/><rect x="200" y="122" width="24" height="108" class="bx2"/>' +
    '<line x1="330" y1="98" x2="232" y2="115" class="ar"/>' +
    '<text x="60" y="256" text-anchor="middle">실내 P2</text>' +
    '<text x="94" y="44" class="bl">기밀층</text><text x="94" y="206" class="n">③</text>' +
    '<text x="142" y="122" text-anchor="middle" class="n">②</text>' +
    '<text x="142" y="152" text-anchor="middle" class="t">등압공간 P1</text>' +
    '<text x="232" y="44">석재(외피)</text>' +
    '<text x="300" y="80">빗물·풍압 P</text><text x="340" y="116" class="n">①</text>' +
    '<line x1="224" y1="117" x2="250" y2="140" class="ld"/><text x="254" y="152">Open joint</text>' +
    '<text x="254" y="226" class="r">P = P1 &gt; P2</text>' +
    '</svg>',
  read: '①빗물·풍압 P가 Open joint로 → ②등압공간 P1=P라 압력차 없음 → ③기밀층이 실내 P2 차단',
  heads: [
    { h: '원리·구성', k: ['줄눈 Sealant 없음', '[[등압]] 압력차 제거', '중력·모세관 차단'] },
    { h: '시공 시 유의사항', k: ['[[기밀층]] 연속·밀실', '배플 겹침·배수구', '하부 Weep Hole'] },
    { h: '개선방안', k: ['등압 Mock-up 시험', 'Unit 패널화'] }
  ],
  code: '💡 레등기 → Rain screen·등압공간·기밀층'
},
162: {
  one: '[[합성수지 에멀션]] 플라스터를 {{3~5mm}}로 [[실러]]→[[초벌]]→[[정벌]] 얇게 바르는 미장',
  flow: ['바탕처리', '실러', '초벌', '연마지 갈기', '정벌'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="30" width="70" height="210" class="conc"/><rect x="110" y="30" width="6" height="210" class="bx3"/>' +
    '<rect x="116" y="30" width="14" height="210" class="bx2"/><rect x="130" y="30" width="10" height="210" class="bx"/>' +
    '<text x="148" y="44" class="r">3~5mm</text>' +
    '<line x1="113" y1="100" x2="160" y2="100" class="ld"/><text x="164" y="106" class="n">①</text><text x="186" y="106">실러</text>' +
    '<line x1="123" y1="150" x2="160" y2="150" class="ld"/><text x="164" y="156" class="n">②</text><text x="186" y="156">초벌 → 연마지</text>' +
    '<line x1="135" y1="200" x2="160" y2="200" class="ld"/><text x="164" y="206" class="n">③</text><text x="186" y="206">정벌</text>' +
    '<text x="40" y="266">콘크리트 바탕</text>' +
    '<text x="310" y="80" class="t">얇게 여러 번</text>' +
    '<text x="310" y="156" class="r">5℃↓ 시공금지</text>' +
    '<text x="310" y="206" class="bl">정벌 후 24h 보양</text>' +
    '</svg>',
  read: '①실러로 바탕 접착 → ②초벌 후 연마지로 요철 제거 → ③정벌로 3~5mm 평활 마감',
  heads: [
    { h: '특징', k: ['[[평활도]] 우수', '균열 적음', '부착성·도배 바탕'] },
    { h: '시공 시 유의사항', k: ['바탕 함수율 건조', '실러 흘러내림 방지', '{{5℃ 이하}} 시공금지'] },
    { h: '양생·개선', k: ['정벌 후 {{24시간}} 보양', '초벌 요철 연마지'] }
  ],
  code: '💡 실초연정 → 실러·초벌·연마지·정벌, 3~5mm'
},
163: {
  one: '시멘트에 [[경량골재(펄라이트)]]·[[기포]]를 섞어 [[열전도율]]을 낮춘 바르는 단열재 → [[결로방지]]',
  flow: ['바탕처리', '프라이머', 'Mesh 보강', '초벌→정벌', '양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="48" width="300" height="12" class="bx2"/><rect x="30" y="60" width="300" height="30" class="conc"/>' +
    '<rect x="150" y="90" width="24" height="170" class="conc"/><rect x="174" y="90" width="10" height="170" class="bx2"/>' +
    '<line x1="80" y1="48" x2="80" y2="34" class="ld"/><text x="84" y="30" class="n">①</text><text x="106" y="30">지붕 단열모르타르</text>' +
    '<text x="240" y="80" text-anchor="middle" class="s2">슬래브</text>' +
    '<text x="140" y="200" text-anchor="end">외벽 구조체</text>' +
    '<line x1="180" y1="170" x2="215" y2="170" class="ld"/><text x="219" y="176" class="n">②</text><text x="241" y="176">외벽 바름</text>' +
    '<text x="350" y="130" class="t">펄라이트·기포</text>' +
    '<text x="300" y="226" class="n">③</text><text x="322" y="226" class="r">열전도율↓ 결로방지</text>' +
    '<text x="322" y="254" class="bl">경량 → 하중↓</text>' +
    '</svg>',
  read: '①지붕 슬래브 위·②외벽에 펄라이트·기포 모르타르를 바름 → ③열전도율↓로 결로방지',
  heads: [
    { h: '특징', k: ['경량 → 하중 감소', '저열전도·[[결로방지]]', '미장·뿜칠·내화'] },
    { h: '시공 시 유의사항', k: ['균일 혼합·분리 방지', '과다 가수 금지', '양생 → [[건조수축]]'] },
    { h: '개선방안', k: ['[[프라이머]] 접착 확보', '[[보강 Mesh]]·분할 시공'] }
  ],
  code: '💡 경저시내 → 경량·저열전도·시공성·내화'
},
164: {
  one: '[[고성능감수제]]·[[증점제]]로 유동성을 준 모르타르를 부어 [[자중]]으로 평탄면 형성 (Flow {{180mm 이상}})',
  flow: ['레이턴스 제거', '실러 2회↑', '배합 교반', '펌프 타설', '밀폐 양생'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="200" width="420" height="40" class="conc"/><rect x="30" y="184" width="420" height="16" class="bx2"/>' +
    '<line x1="30" y1="200" x2="450" y2="200" class="bl"/>' +
    '<rect x="60" y="80" width="16" height="70" class="bx"/><line x1="68" y1="150" x2="68" y2="180" class="ar"/>' +
    '<line x1="96" y1="172" x2="200" y2="172" class="ar"/><line x1="220" y1="172" x2="330" y2="172" class="ar"/>' +
    '<text x="36" y="70" class="n">②</text><text x="58" y="70">펌프 타설</text>' +
    '<text x="100" y="158" class="n">③</text><text x="122" y="158" class="bl">자중·표면장력으로 수평</text>' +
    '<text x="390" y="197" text-anchor="middle" class="s2">SLM</text>' +
    '<text x="240" y="226" text-anchor="middle">바탕 콘크리트</text>' +
    '<text x="30" y="266" class="n">①</text><text x="52" y="266" class="bl">실러 2회↑ 후 타설</text>' +
    '<text x="300" y="40" class="r">Flow 180mm↑</text>' +
    '<text x="300" y="66" class="r">압축 20MPa↑</text>' +
    '<text x="300" y="266" class="s2">창문 밀폐 양생</text>' +
    '</svg>',
  read: '①실러 2회↑ 도포 → ②펌프로 부어 넣으면 → ③자중·표면장력으로 수평면 형성',
  heads: [
    { h: '품질기준(KS F 4041)', k: ['Flow {{180mm↑}}', '압축 {{20MPa↑}}', '휨 {{4MPa↑}}'] },
    { h: '시공 시 유의사항', k: ['레이턴스 제거', '실러 {{2회↑}} 건조', '창문 밀폐·{{5℃↑}}'] },
    { h: '개선방안', k: ['감수제·증점제 배합', '레이저 레벨 검측'] }
  ],
  code: '💡 고증 중표 → 감수제·증점제 / 중력·표면장력'
},
165: {
  one: '[[F-Number]](FF 평탄도·FL 수평도)로 요철을 관리해 고단 Rack·지게차 운용이 가능한 [[초평탄]] 노출바닥',
  flow: ['Floor Class', '강방향 타설', 'Laser Screed', '반복 Trowel', 'F-Number 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="190" width="420" height="40" class="conc"/>' +
    '<rect x="50" y="70" width="30" height="120" class="bx3"/><line x1="50" y1="110" x2="80" y2="110" class="ln2"/><line x1="50" y1="150" x2="80" y2="150" class="ln2"/>' +
    '<line x1="440" y1="90" x2="440" y2="190" class="ln"/><rect x="430" y="76" width="20" height="14" class="bx"/>' +
    '<line x1="430" y1="83" x2="140" y2="83" class="rd dash"/>' +
    '<rect x="230" y="150" width="100" height="40" class="bx3"/><line x1="280" y1="150" x2="280" y2="86" class="ln2"/>' +
    '<line x1="226" y1="170" x2="186" y2="170" class="ar"/>' +
    '<text x="50" y="60">고단 Rack</text>' +
    '<text x="274" y="70" class="n">①</text><text x="296" y="70" class="bl">Laser 기준선</text>' +
    '<text x="280" y="175" text-anchor="middle" class="s2">Laser Screed</text><text x="196" y="160" class="n">②</text>' +
    '<text x="240" y="216" text-anchor="middle">노출 바닥 콘크리트</text>' +
    '<text x="120" y="254" class="n">③</text><text x="142" y="254" class="r">F-Number: FF 평탄·FL 수평</text>' +
    '<text x="30" y="276" class="s2">강방향(Strip) 타설 → 줄눈 최소</text>' +
    '</svg>',
  read: '①레이저로 수평 기준선 → ②Laser Screed가 따라가며 평탄 마감 → ③F-Number(FF·FL) 측정',
  heads: [
    { h: 'Floor Class·특성', k: ['FM1 {{13m↑}} Rack', 'FF평탄·FL수평', '지게차 고속주행'] },
    { h: '시공 시 유의사항', k: ['급속건조 방지', '강방향(Strip) 타설', 'Laser Screed 마감'] },
    { h: '개선방안', k: ['3D 스캐닝 검측', '표면강화·연마 마감'] }
  ],
  code: '💡 에프 레이저 강줄 → F-Number·Laser·강방향·줄눈↓'
},
167: {
  one: '[[시트]]와 [[도막]] 방수재를 적층 복합해 서로의 단점을 보완, 접합부 수밀성·균열 대응성 향상',
  flow: ['바탕처리', '프라이머', '도막+시트', '보호재', '누름 콘크리트'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="120" width="280" height="40" class="conc"/><rect x="40" y="160" width="280" height="8" class="bx3"/>' +
    '<rect x="40" y="168" width="280" height="14" class="bx"/><rect x="40" y="182" width="280" height="14" class="bx2"/>' +
    '<rect x="40" y="196" width="280" height="6" class="bx3"/><rect x="40" y="202" width="280" height="50" class="conc"/>' +
    '<line x1="320" y1="140" x2="372" y2="140" class="ld"/><text x="376" y="145">누름 콘크리트</text>' +
    '<line x1="320" y1="175" x2="350" y2="168" class="ld"/><text x="354" y="172" class="n">③</text><text x="376" y="172">방수시트</text>' +
    '<line x1="320" y1="189" x2="350" y2="192" class="ld"/><text x="354" y="196" class="n">②</text><text x="376" y="196">도막 방수</text>' +
    '<line x1="320" y1="199" x2="350" y2="216" class="ld"/><text x="354" y="220" class="n">①</text><text x="376" y="220">프라이머</text>' +
    '<line x1="320" y1="235" x2="372" y2="240" class="ld"/><text x="376" y="244">구조체</text>' +
    '<text x="40" y="60" class="t">상호 단점 보완</text>' +
    '<text x="40" y="95" class="r">함수율 8%↓ · 5℃↑</text>' +
    '</svg>',
  read: '①프라이머 → ②도막(이음 없음) → ③시트(균일 두께) 순 적층으로 서로 단점 보완',
  heads: [
    { h: '구성·특징', k: ['도막: 이음 없음', '시트: 균일두께', '복합: 단점 보완'] },
    { h: '시공 시 유의사항', k: ['함수율 {{8% 이하}}', '시트 {{100mm↑}} 겹침', '코너·드레인 보강'] },
    { h: '개선방안', k: ['도막 얇게 여러 번', '시공 후 담수시험'] }
  ],
  code: '💡 프도시보누 → 프라이머·도막·시트·보호재·누름'
},
168: {
  one: '인공지반 녹화 시 [[방수층]]+[[방근층]]을 복합하고 [[배수층]]·여과층을 두어 누수·뿌리 침투 방지',
  flow: ['바탕·프라이머', '방수·방근층', '보호·배수층', '담수 48h', '토양·식재'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="150" y1="110" x2="150" y2="76" class="ln"/><circle cx="150" cy="58" r="20" class="bf"/>' +
    '<rect x="40" y="110" width="280" height="54" class="soil"/><rect x="40" y="164" width="280" height="6" class="bx2"/>' +
    '<rect x="40" y="170" width="280" height="22" class="bx3"/><rect x="40" y="192" width="280" height="14" class="bx"/>' +
    '<rect x="40" y="206" width="280" height="14" class="bx2"/><rect x="40" y="220" width="280" height="40" class="conc"/>' +
    '<line x1="320" y1="137" x2="372" y2="115" class="ld"/><text x="376" y="120">토양층</text>' +
    '<line x1="320" y1="167" x2="372" y2="140" class="ld"/><text x="376" y="145">여과층</text>' +
    '<line x1="320" y1="181" x2="350" y2="166" class="ld"/><text x="354" y="170" class="n">③</text><text x="376" y="170">배수층</text>' +
    '<line x1="320" y1="199" x2="350" y2="191" class="ld"/><text x="354" y="195" class="n">②</text><text x="376" y="195" class="r">방근층</text>' +
    '<line x1="320" y1="213" x2="350" y2="216" class="ld"/><text x="354" y="220" class="n">①</text><text x="376" y="220" class="bl">방수층</text>' +
    '<line x1="320" y1="240" x2="372" y2="244" class="ld"/><text x="376" y="248">구조체</text>' +
    '<text x="200" y="40" class="r">담수 48h 후 식재</text>' +
    '</svg>',
  read: '①방수층으로 누수 차단 → ②방근층이 뿌리 침투 차단 → ③배수·여과층으로 물 빼고 식재',
  heads: [
    { h: '구성·계획', k: ['구조체·방수·방근', '배수·여과·토양층', '하중·풍압 구조검토'] },
    { h: '시공 시 유의사항', k: ['함수율 {{8~10%}}', '이음 {{100mm↑}} 겹침', '드레인 방근테이프'] },
    { h: '개선방안', k: ['담수 {{48시간↑}} 확인', '배수판·드레인 점검'] }
  ],
  code: '💡 구방방보 배여토식 → 아래부터 쌓는 순서'
},
169: {
  one: '방수 후 드레인을 막고 {{48시간}} 물을 채우는 [[담수]]·[[살수]]·[[강우시]] Test로 누수 여부 확인',
  flow: ['드레인 밀봉', '끝까지 담수', '48시간 유지', '하부 누수 확인', '배수 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="110" width="14" height="60" class="conc"/><rect x="346" y="110" width="14" height="60" class="conc"/>' +
    '<rect x="40" y="170" width="320" height="30" class="conc"/><rect x="54" y="140" width="292" height="30" class="bx2"/>' +
    '<rect x="190" y="170" width="20" height="30" class="bx3"/>' +
    '<line x1="70" y1="210" x2="70" y2="236" class="ar"/>' +
    '<text x="200" y="161" text-anchor="middle" class="t">담수 48시간</text><text x="120" y="162" class="n">②</text>' +
    '<line x1="200" y1="200" x2="200" y2="226" class="ld"/><text x="132" y="246" class="n">①</text><text x="200" y="246" text-anchor="middle" class="r">드레인 밀봉</text>' +
    '<line x1="54" y1="140" x2="60" y2="102" class="ld"/><text x="40" y="95" class="s2">방수층 끝까지 잠김</text>' +
    '<text x="40" y="270" class="n">③</text><text x="62" y="270" class="bl">하부 누수 확인</text>' +
    '<text x="300" y="40">살수 30cm·5분↑</text>' +
    '<text x="300" y="64">강우 1일 50mm↑</text>' +
    '</svg>',
  read: '①드레인 밀봉 → ②방수층 끝까지 물을 채워 48시간 유지 → ③하부 누수 여부 확인',
  heads: [
    { h: '시험 종류', k: ['담수 {{48시간}}', '살수 {{30cm}}·5분↑', '강우 {{50mm↑}} 후'] },
    { h: '시험 시 유의사항', k: ['드레인 완전 밀봉', '모서리·관통부 중점', '보수 후 재시험'] },
    { h: '개선방안', k: ['전극식 누수감지', '열화상·이력 기록'] }
  ],
  code: '💡 담살강 → 담수 48h·살수 30cm·강우 50mm'
},
171: {
  one: '세포막이 수분으로 포화되고 [[자유수]]가 없는 함수율 {{약 30%}} — 이하에서 [[수축]]·[[강도]] 급변',
  flow: ['자유수 증발', 'FSP 30%', '결합수 감소', '수축·강도↑'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="230" x2="440" y2="230" class="ln"/><line x1="60" y1="230" x2="60" y2="30" class="ln"/>' +
    '<path d="M70,50 L250,170 L430,170" class="bl"/><line x1="250" y1="40" x2="250" y2="230" class="rd dash"/>' +
    '<line x1="420" y1="196" x2="300" y2="196" class="ar"/>' +
    '<text x="66" y="26" class="s2">강도·수축</text>' +
    '<text x="250" y="30" text-anchor="middle" class="r">섬유포화점 30%</text><text x="258" y="200" class="n">②</text>' +
    '<text x="460" y="255" text-anchor="end" class="s2">함수율 MC(%) →</text>' +
    '<text x="70" y="212" class="n">③</text><text x="92" y="212" class="s2">결합수 감소 → 수축·강도↑</text>' +
    '<text x="300" y="155" class="s2">자유수만 증발: 변화 없음</text><text x="430" y="200" class="n">①</text>' +
    '<text x="60" y="272" class="bl">구조재 15~20% · 마감재 8~15%</text>' +
    '</svg>',
  read: '①건조 초기 자유수만 빠져 변화 없음 → ②섬유포화점 30% → ③이하 결합수 감소로 수축·강도↑',
  heads: [
    { h: '섬유포화점 전·후', k: ['30%↑: 변화 없음', '30%↓: 수축·강도↑', '널결>곧은결>섬유'] },
    { h: '목재 선정 시 유의', k: ['구조재 {{15~20%}}', '마감재 {{8~15%}}', '평형함수율 건조'] },
    { h: '개선방안', k: ['인공건조·함수율계', '방부·방습 병행'] }
  ],
  code: '💡 삼십 자결 → 30% 기준 자유수·결합수'
},
172: {
  one: '함수율을 [[평형함수율]]까지 낮춰 [[수축·변형]]·[[부패]]를 막고 강도를 높이는 처리 (자연·인공건조)',
  flow: ['수침 전처리', '간격 적재', '자연/인공 건조', '함수율 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="30" y1="240" x2="230" y2="240" class="ln"/>' +
    '<rect x="50" y="220" width="20" height="20" class="bx3"/><rect x="180" y="220" width="20" height="20" class="bx3"/>' +
    '<rect x="40" y="206" width="170" height="12" class="bx2"/><rect x="40" y="188" width="170" height="12" class="bx2"/>' +
    '<rect x="40" y="170" width="170" height="12" class="bx2"/><rect x="40" y="152" width="170" height="12" class="bx2"/>' +
    '<line x1="60" y1="120" x2="190" y2="120" class="ar"/>' +
    '<text x="66" y="44" class="n">①</text><text x="88" y="44" class="t">자연건조</text>' +
    '<text x="125" y="108" text-anchor="middle" class="bl">간격 적재 · 통풍</text>' +
    '<text x="30" y="268" class="s2">받침목·지면 이격</text>' +
    '<rect x="280" y="110" width="160" height="110" class="bx"/>' +
    '<text x="306" y="44" class="n">②</text><text x="328" y="44" class="t">인공건조</text>' +
    '<text x="360" y="160" text-anchor="middle" class="s2">증기·열기</text>' +
    '<text x="360" y="185" text-anchor="middle" class="s2">진공·고주파</text>' +
    '<text x="238" y="268" class="n">③</text><text x="260" y="268" class="r">급속건조 → 할렬 주의</text>' +
    '</svg>',
  read: '①받침목 위 간격 적재·통풍 자연건조 / ②증기·열기 인공건조 → ③급속건조 시 할렬 주의',
  heads: [
    { h: '건조 목적', k: ['수축·변형 방지', '부패 억제·강도↑', '경량·도장성 향상'] },
    { h: '건조 시 유의사항', k: ['급속건조 할렬 주의', '받침목 적재·통풍', '마구리 도포'] },
    { h: '개선방안', k: ['평형함수율 목표', '함수율계 전수 관리'] }
  ],
  code: '💡 자인 증열진고 → 자연·인공(증기·열기·진공·고주파)'
},
173: {
  one: '수분·온도·공기·양분 [[부패 4요소]]를 막도록 목재에 [[방부제]]를 도포·주입하는 내구성 처리',
  flow: ['목재 건조', '가공·절단', '방부제 선정', '도포·주입', '절단면 재도포'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="180" width="200" height="80" class="soil"/><rect x="110" y="80" width="30" height="180" class="bx2"/>' +
    '<line x1="278" y1="140" x2="146" y2="140" class="ar"/>' +
    '<text x="30" y="40" class="n">①</text><text x="52" y="40" class="t">부패 4요소</text>' +
    '<text x="52" y="64" class="s2">수분·온도·공기·양분</text>' +
    '<text x="150" y="112" class="n">③</text><text x="172" y="112" class="bl">절단면 재도포</text>' +
    '<text x="150" y="172" class="r">토대·지면 1m 이내</text>' +
    '<rect x="280" y="110" width="170" height="70" class="bx"/>' +
    '<text x="280" y="100" class="n">②</text>' +
    '<text x="365" y="140" text-anchor="middle" class="t">가압주입</text>' +
    '<text x="365" y="165" text-anchor="middle" class="s2">감압 → 가압</text>' +
    '<text x="365" y="205" text-anchor="middle" class="s2">가장 확실</text>' +
    '</svg>',
  read: '①수분·온도·공기·양분이 부패 유발 → ②가압주입으로 방부제 침투 → ③절단면은 재도포',
  heads: [
    { h: '방부처리 공법', k: ['도포법', '침지·상압주입', '가압주입·표면탄화'] },
    { h: '시공 시 유의사항', k: ['충분 건조 후 처리', 'CCA 등 유해제 제한', '절단면 재도포'] },
    { h: '개선방안', k: ['ACQ 친환경 방부제', '방습층·통풍 상세'] }
  ],
  code: '💡 도주침탄 → 도포·주입·침지·탄화'
},
174: {
  one: '목재가 [[착화]] {{약 260℃}}에 늦게 도달하도록 [[불연재 피복]]·방화도료·난연약제·[[대단면화]] 적용',
  flow: ['목표 설정', '공법 선정', '시공', '접합부 피복', '성능 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="60" width="150" height="150" class="bx3"/><rect x="75" y="75" width="120" height="120" class="bx2"/>' +
    '<text x="135" y="40" text-anchor="middle" class="t">대단면화</text>' +
    '<text x="135" y="118" text-anchor="middle" class="n">③</text>' +
    '<text x="135" y="146" text-anchor="middle">내부 보호</text>' +
    '<text x="38" y="240" class="n">②</text><text x="60" y="240" class="r">탄화층 약 0.6mm/분</text>' +
    '<text x="260" y="60" class="r">착화 260℃ 지연</text>' +
    '<text x="238" y="110" class="n">①</text><text x="260" y="110">불연재 피복</text>' +
    '<text x="260" y="140">방화도료·난연약제</text>' +
    '<text x="260" y="200" class="bl">접합철물 피복</text>' +
    '</svg>',
  read: '①불연재 피복·도료로 착화 260℃ 지연 → ②대단면은 표면 탄화층이 생겨 → ③내부 보호',
  heads: [
    { h: '내화공법', k: ['불연재 피복', '방화도료·난연약제', '대단면 탄화층'] },
    { h: '시공 시 유의사항', k: ['착화 {{260℃}} 전 차단', '접합 철물 피복', '난연 후 강도 확인'] },
    { h: '개선방안', k: ['내화구조 인정 확인', '스프링클러 병행'] }
  ],
  code: '💡 피도약대 → 피복·도료·약제·대단면'
},
175: {
  one: '판유리 2장 이상을 [[Spacer]]로 띄우고 [[건조공기·Ar]]을 채워 밀봉, [[단열]]·차음을 높인 유리',
  flow: ['유리 세척', '간봉 조립', '1차 부틸', '가스 주입', '2차 실링'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="150" y="40" width="10" height="200" class="bx3"/><rect x="220" y="40" width="10" height="200" class="bx3"/>' +
    '<rect x="160" y="40" width="60" height="15" class="bx2"/><rect x="160" y="225" width="60" height="15" class="bx2"/>' +
    '<rect x="150" y="240" width="80" height="10" class="bx"/>' +
    '<text x="30" y="140" class="t">단열·차음</text>' +
    '<line x1="150" y1="80" x2="110" y2="70" class="ld"/><text x="106" y="75" text-anchor="end">판유리</text>' +
    '<line x1="222" y1="70" x2="260" y2="60" class="ld"/><text x="264" y="66" class="n">③</text><text x="286" y="66">Low-E 코팅</text>' +
    '<line x1="190" y1="120" x2="260" y2="112" class="ld"/><text x="264" y="118" class="n">②</text><text x="286" y="118">Ar·건조공기 층</text>' +
    '<text x="300" y="176" class="r">4℃↑ 시공</text>' +
    '<line x1="210" y1="232" x2="260" y2="232" class="ld"/><text x="264" y="238" class="n">①</text><text x="286" y="238">간봉(흡습제)</text>' +
    '<line x1="220" y1="248" x2="282" y2="262" class="ld"/><text x="286" y="270">2차 실링</text>' +
    '</svg>',
  read: '①흡습제 간봉으로 두 유리 이격·밀봉 → ②Ar·건조공기층이 전도·대류 차단 → ③Low-E로 복사 차단',
  heads: [
    { h: '단열 원리', k: ['공기층 전도·대류↓', 'Low-E 복사 차단', '단열간봉·Ar 가스'] },
    { h: '시공 시 유의사항', k: ['기온 {{4℃↑}} 시공', '습도 {{90%↑}} 실링금지', '배수구 {{5mm}} 2개↑'] },
    { h: '개선방안', k: ['삼중·진공복층유리', 'TDR 결로 성능'] }
  ],
  code: '💡 간흡가실 → 간봉·흡습제·가스·실링'
},
176: {
  one: '복층유리 간격재를 [[복합수지·STS·TPS]] 등 저열전도 재료로 만들어 가장자리 [[열교]]·[[결로]] 저감',
  flow: ['간봉 선정', '흡습제 충전', '1차 부틸', '유리 합판', '2차 실링'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="30" width="10" height="190" class="bx3"/><rect x="250" y="30" width="10" height="190" class="bx3"/>' +
    '<rect x="150" y="190" width="100" height="30" class="bx2"/><rect x="140" y="220" width="120" height="20" class="bx"/>' +
    '<text x="134" y="50" text-anchor="end" class="s2">유리</text>' +
    '<text x="200" y="210" text-anchor="middle" class="s2">흡습제</text>' +
    '<text x="270" y="60" class="n">①</text><text x="292" y="60" class="r">알루미늄 → 열교·결로</text>' +
    '<line x1="250" y1="190" x2="276" y2="160" class="ld"/><text x="280" y="150" class="n">②</text><text x="302" y="150" class="t">단열간봉</text>' +
    '<text x="302" y="172" class="s2">TPS·STS·복합수지</text>' +
    '<text x="280" y="204" class="n">③</text><text x="302" y="204" class="bl">Warm Edge</text>' +
    '<line x1="260" y1="230" x2="298" y2="234" class="ld"/><text x="302" y="240" class="s2">1차 부틸·2차 실링</text>' +
    '</svg>',
  read: '①알루미늄 간봉은 열교·결로 → ②TPS·STS·복합수지 단열간봉으로 교체 → ③Warm Edge',
  heads: [
    { h: '종류·효과', k: ['TPS·STS·복합수지', '선형열관류율 Ψ↓', 'Warm Edge'] },
    { h: '시공 시 유의사항', k: ['알루미늄 → 열교', '부틸·실링 기밀', '흡습제·코너 일체'] },
    { h: '개선방안', k: ['TDR 결로방지 충족', '단열 Frame 병행'] }
  ],
  code: '💡 웜엣지 TPS 수스복 → TPS·STS·복합수지'
},
177: {
  one: '로이유리와 판유리 사이 {{약 0.2mm}} [[진공층]]을 [[Pillar]]로 유지·밀봉하고 Ar층을 더한 고단열 유리',
  flow: ['로이 코팅', 'Pillar 배치', '엣지 밀봉', '배기·진공', 'Ar 복층 합판'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="10" height="190" class="bx3"/><rect x="74" y="40" width="10" height="190" class="bx3"/><rect x="160" y="40" width="10" height="190" class="bx3"/>' +
    '<circle cx="72" cy="80" r="2" class="dotf"/><circle cx="72" cy="120" r="2" class="dotf"/><circle cx="72" cy="160" r="2" class="dotf"/><circle cx="72" cy="200" r="2" class="dotf"/>' +
    '<rect x="60" y="230" width="24" height="8" class="bx"/>' +
    '<text x="65" y="28" text-anchor="middle">로이유리</text>' +
    '<line x1="72" y1="90" x2="190" y2="70" class="ld"/><text x="194" y="76" class="n">①</text><text x="216" y="76" class="r">진공층 0.2mm</text>' +
    '<line x1="72" y1="150" x2="190" y2="140" class="ld"/><text x="194" y="146" class="n">②</text><text x="216" y="146">Pillar(지지)</text>' +
    '<line x1="84" y1="234" x2="190" y2="234" class="ld"/><text x="194" y="240" class="n">③</text><text x="216" y="240">엣지 밀봉</text>' +
    '<text x="122" y="200" text-anchor="middle" class="s2">Ar 중공층</text>' +
    '<text x="330" y="110" class="t">전도·대류 제거</text>' +
    '<text x="330" y="190" class="bl">열관류율↓·차음↑</text>' +
    '</svg>',
  read: '①로이유리 사이 0.2mm 진공으로 전도·대류 제거 → ②Pillar가 간격 유지 → ③엣지 밀봉',
  heads: [
    { h: '특징', k: ['전도·대류 제거', '차음 성능 증대', '얇고 고단열'] },
    { h: '시공 시 유의사항', k: ['기온 {{4℃↑}} 시공', 'Pillar 응력 충격주의', '배수구 {{5mm}} 2개↑'] },
    { h: '개선방안', k: ['Mock-up 열성능', '엣지 밀봉·진공도'] }
  ],
  code: '💡 로필진엣 → 로이·Pillar·진공·엣지밀봉'
},
178: {
  one: '판유리를 {{650~700℃}} 가열 후 [[급랭]]해 표면 [[압축응력]]·내부 [[인장응력]]을 만든 3~5배 강도 안전유리',
  flow: ['절단·가공', '650~700℃', '급랭', '표면압축', 'Heat Soak'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="280" y1="60" x2="280" y2="240" class="ln"/><line x1="240" y1="80" x2="320" y2="80" class="ln2"/><line x1="240" y1="220" x2="320" y2="220" class="ln2"/>' +
    '<path d="M240,80 Q340,150 240,220" class="bl"/>' +
    '<line x1="150" y1="150" x2="220" y2="150" class="ar"/>' +
    '<text x="280" y="44" text-anchor="middle" class="t">응력 분포</text>' +
    '<text x="235" y="98" text-anchor="end" class="r">표면 압축</text>' +
    '<text x="235" y="215" text-anchor="end" class="r">표면 압축</text>' +
    '<text x="330" y="130" class="n">③</text><text x="330" y="156" class="bl">내부 인장</text>' +
    '<text x="20" y="130" class="n">①</text><text x="42" y="130" class="r">650~700℃ 가열</text>' +
    '<text x="20" y="166" class="n">②</text><text x="42" y="166" class="t">급랭</text>' +
    '<text x="30" y="268">일반유리 3~5배 · 입상파편</text>' +
    '<text x="280" y="268" class="s2">Heat Soak → 자파 제거</text>' +
    '</svg>',
  read: '①650~700℃로 가열 → ②급랭하면 → ③표면 압축·내부 인장 응력이 생겨 3~5배 강도',
  heads: [
    { h: '특징', k: ['가열 → 급랭', '일반유리 {{3~5배}}', '입상 파편 안전'] },
    { h: '시공 시 유의사항', k: ['열처리 후 가공 불가', '자파(NiS) 위험', '집중응력 방지'] },
    { h: '개선방안', k: ['Heat Soak Test', '치수·홀가공 사전 검토'] }
  ],
  code: '💡 가급압인 → 가열·급랭·압축·인장'
},
179: {
  one: '판유리를 {{약 700℃}} 가열 후 [[서냉]]해 표면 압축층({{20~60MPa}})을 만든 일반유리 2~3배 강도 유리',
  flow: ['절단·가공', '약 700℃ 가열', '서냉', '표면압축', '평탄도 검사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="170" height="150" class="bx3"/>' +
    '<line x1="125" y1="135" x2="40" y2="80" class="ln"/><line x1="125" y1="135" x2="210" y2="95" class="ln"/><line x1="125" y1="135" x2="70" y2="210" class="ln"/><line x1="125" y1="135" x2="190" y2="210" class="ln"/>' +
    '<text x="125" y="40" text-anchor="middle" class="t">배강도 파손</text>' +
    '<text x="56" y="238" class="n">③</text><text x="125" y="236" text-anchor="middle" class="s2">방사형 큰 조각</text>' +
    '<text x="125" y="262" text-anchor="middle" class="bl">탈락 적음</text>' +
    '<text x="250" y="70" class="n">①</text><text x="272" y="70">약 700℃ 가열 → 서냉</text>' +
    '<text x="250" y="110" class="n">②</text><text x="272" y="110" class="r">표면압축 20~60MPa</text>' +
    '<text x="272" y="160" class="t">일반유리 2~3배</text>' +
    '<text x="272" y="200">자파 거의 없음</text>' +
    '</svg>',
  read: '①약 700℃ 가열 후 서냉 → ②표면압축 20~60MPa로 2~3배 강도 → ③깨지면 방사형 큰 조각',
  heads: [
    { h: '특징(강화 비교)', k: ['{{2~3배}} (강화 3~5배)', '방사형 큰 조각', '자파 거의 없음'] },
    { h: '시공 시 유의사항', k: ['열처리 전 가공 완료', '열깨짐 검토', '충격·파괴 시험'] },
    { h: '개선방안', k: ['접합유리 병용', 'Roller wave 관리'] }
  ],
  code: '💡 가서 이삼배 → 가열·서냉, 2~3배 강도'
},
180: {
  one: '유리면에 [[은(Ag)]] 박막을 코팅해 [[방사율]]을 낮춰 가시광은 투과, [[적외선]]은 반사하는 에너지절약 유리',
  flow: ['용도 결정', 'Soft/Hard 선정', '2면·3면 결정', '복층 합판'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="150" y="40" width="10" height="190" class="bx3"/><rect x="240" y="40" width="10" height="190" class="bx3"/>' +
    '<line x1="161" y1="40" x2="161" y2="230" class="rd"/><line x1="239" y1="40" x2="239" y2="230" class="rd"/>' +
    '<line x1="30" y1="100" x2="140" y2="100" class="ar"/>' +
    '<line x1="252" y1="100" x2="330" y2="100" class="ar"/>' +
    '<line x1="146" y1="112" x2="70" y2="160" class="ar"/>' +
    '<text x="200" y="26" text-anchor="middle" class="t">Ag 박막 코팅</text>' +
    '<text x="70" y="64" text-anchor="middle" class="t">실외</text>' +
    '<text x="320" y="64" text-anchor="middle" class="t">실내</text>' +
    '<text x="200" y="140" text-anchor="middle" class="s2">Ar</text>' +
    '<text x="80" y="90" class="n">①</text>' +
    '<text x="276" y="90" class="n">②</text><text x="340" y="106" class="bl">가시광 투과</text>' +
    '<text x="20" y="190" class="n">③</text><text x="42" y="190" class="r">적외선 반사</text>' +
    '<line x1="160" y1="210" x2="135" y2="222" class="ld"/><text x="20" y="236" class="r">2면 = 냉방(상업)</text>' +
    '<line x1="240" y1="210" x2="262" y2="222" class="ld"/><text x="264" y="236" class="bl">3면 = 난방(주거)</text>' +
    '</svg>',
  read: '①햇빛 입사 → Ag 코팅이 ②가시광은 투과 ③적외선은 반사 (2면 냉방·3면 난방)',
  heads: [
    { h: '종류·적용', k: ['Soft: 복층 전용', 'Hard: 단판 가능', '2면 냉방·3면 난방'] },
    { h: '시공 시 유의사항', k: ['코팅면 복층 내부', 'Edge Deletion', '열깨짐 사전 검토'] },
    { h: '개선방안', k: ['삼중 Low-E·Ar', '방사율·SHGC 확인'] }
  ],
  code: '💡 은코 저방 이삼면 → 은 코팅·저방사·2·3면'
}
});
