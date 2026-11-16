// 디테일원 용어250 143~157 (초고층·커튼월·마감) — 형식은 data/SCHEMA_DW.md
window.DW = Object.assign(window.DW || {}, {
143: {
  title: 'Stack effect(굴뚝효과, 연돌효과)',
  cat: '초고층·커튼월',
  key: ['실내외 온도차', '공기 밀도차', '중성대(NPL)', '수직 압력차', '상승기류(동절기)', '역연돌(하절기)', 'E/V 오작동', '방풍실·회전문', '승강로 기밀'],
  www: { what: '고층건물에서 [[실내외 온도차]]에 의한 [[공기 밀도차]]로 [[중성대(NPL)]] 아래는 외기가 유입되고 위는 실내공기가 유출되는 수직 기류 현상', why: '엘리베이터 문 오작동·소음, 출입문 개폐 곤란, 화재 시 연기 확산, 난방부하 증가 방지', how: '외피 기밀 확보 → 저층 [[방풍실·회전문]] → [[승강로 기밀]]·Zoning → 계단실·저층 가압 → 준공 전 기밀 측정' },
  tag: '현상·원리·대책',
  def: '고층건물의 [[실내외 온도차]]로 생긴 [[공기 밀도차]]가 높이에 비례하는 [[수직 압력차]]를 만들어 [[중성대(NPL)]] 하부는 유입, 상부는 유출되는 현상으로 동절기 [[상승기류]], 하절기 [[역연돌(하강기류)]]가 발생',
  wwh: ['밀도차 수직기류', 'E/V·연기 피해', '기밀·방풍·가압'],
  figT: '연돌효과의 압력분포 원리 및 대책',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="28" class="s">동절기: 외기 −10℃ < 실내 20℃</text>' +
    '<rect x="20" y="290" width="410" height="12" class="soil"/>' +
    '<rect x="60" y="60" width="110" height="230" class="bx"/>' +
    '<rect x="100" y="60" width="30" height="230" class="bx3"/>' +
    '<rect x="56" y="262" width="8" height="28" class="bx2"/>' +
    '<line x1="60" y1="86" x2="100" y2="86" class="ln2"/><line x1="130" y1="86" x2="170" y2="86" class="ln2"/><line x1="60" y1="112" x2="100" y2="112" class="ln2"/><line x1="130" y1="112" x2="170" y2="112" class="ln2"/><line x1="60" y1="138" x2="100" y2="138" class="ln2"/><line x1="130" y1="138" x2="170" y2="138" class="ln2"/><line x1="60" y1="164" x2="100" y2="164" class="ln2"/><line x1="130" y1="164" x2="170" y2="164" class="ln2"/><line x1="60" y1="190" x2="100" y2="190" class="ln2"/><line x1="130" y1="190" x2="170" y2="190" class="ln2"/><line x1="60" y1="216" x2="100" y2="216" class="ln2"/><line x1="130" y1="216" x2="170" y2="216" class="ln2"/><line x1="60" y1="242" x2="100" y2="242" class="ln2"/><line x1="130" y1="242" x2="170" y2="242" class="ln2"/>' +
    '<line x1="115" y1="280" x2="115" y2="70" class="ar"/>' +
    '<line x1="40" y1="171" x2="300" y2="171" class="ln dash"/>' +
    '<text x="304" y="175" class="b">중성대(NPL)</text>' +
    '<line x1="230" y1="60" x2="230" y2="282" class="ln2"/>' +
    '<polygon points="230,62 275,62 230,171" class="bx2"/>' +
    '<polygon points="230,171 230,280 185,280" class="bx3"/>' +
    '<line x1="275" y1="62" x2="185" y2="280" class="rd"/>' +
    '<text x="280" y="66" class="s">+ΔP 유출</text>' +
    '<text x="236" y="276" class="s">−ΔP 유입</text>' +
    '<line x1="58" y1="80" x2="24" y2="80" class="ar"/>' +
    '<line x1="172" y1="80" x2="210" y2="80" class="ar"/>' +
    '<line x1="22" y1="250" x2="56" y2="250" class="ar"/>' +
    '<line x1="212" y1="250" x2="174" y2="250" class="ar"/>' +
    '<line x1="60" y1="80" x2="44" y2="48" class="ld"/><circle cx="44" cy="48" r="2" class="dotf"/><text x="48" y="52" class="r">상층 실내공기 유출</text>' +
    '<line x1="115" y1="200" x2="245" y2="206" class="ld"/><circle cx="245" cy="206" r="2" class="dotf"/><text x="249" y="210" class="bl">승강로 상승기류</text>' +
    '<line x1="40" y1="250" x2="40" y2="318" class="ld"/><circle cx="40" cy="318" r="2" class="dotf"/><text x="44" y="322" class="r">저층 외기 유입·문 개폐 곤란</text>' +
    '<line x1="170" y1="230" x2="245" y2="240" class="ld"/><circle cx="245" cy="240" r="2" class="dotf"/><text x="249" y="244" class="s">외피 기밀 불량부</text>' +
    '<text x="450" y="36" class="b">[압력차 산정]</text>' +
    '<text x="450" y="58" class="r">ΔP = h(ρo − ρi)g</text>' +
    '<text x="450" y="78" class="r">≈ 3460·h(1/To − 1/Ti)</text>' +
    '<text x="450" y="98" class="s">h: NPL로부터 높이(m)</text>' +
    '<text x="450" y="114" class="s">T: 절대온도(K), ΔP: Pa</text>' +
    '<text x="450" y="136" class="s">하절기: 역연돌(하강기류)</text>' +
    '<text x="450" y="154" class="s">→ 높이·온도차에 비례</text>' +
    '<line x1="300" y1="171" x2="440" y2="176" class="ld"/><circle cx="440" cy="176" r="2" class="dotf"/><text x="446" y="180" class="k3">③ 중성대 기준 압력분포</text><text x="446" y="200" class="k3">③ 동절기 상승·하절기 하강</text><text x="446" y="220" class="k3">③ 높이·온도차에 비례</text><line x1="115" y1="150" x2="440" y2="240" class="ld"/><circle cx="440" cy="240" r="2" class="dotf"/><text x="446" y="244" class="k4">④ E/V 문 오작동·소음</text><text x="446" y="264" class="k4">④ 연기·냄새 확산·난방손실</text><line x1="60" y1="270" x2="440" y2="280" class="ld"/><circle cx="440" cy="280" r="2" class="dotf"/><text x="446" y="284" class="k4">④ 출입문 개폐 곤란</text><text x="446" y="308" class="k5">⑤ 방풍실·회전문·이중문</text><line x1="130" y1="110" x2="440" y2="324" class="ld"/><circle cx="440" cy="324" r="2" class="dotf"/><text x="446" y="328" class="k5">⑤ 승강로 기밀·Zoning·가압</text>' +
    '</svg>',
  subs: [
    { h: '발생 원리·특징', pts: ['중성대 기준 압력분포', '동절기 상승·하절기 하강', '높이·온도차에 비례'] },
    { h: '문제점(피해)', pts: ['E/V 문 오작동·소음', '연기·냄새 확산·난방손실', '출입문 개폐 곤란'] },
    { h: '방지대책', pts: ['방풍실·회전문·이중문', '승강로 기밀·Zoning·가압', '외피(C/W) 기밀성 확보·준공 전 기밀 측정', '층간·수직 방화구획 강화·중간 기계층(Inter-floor) 설치', '승강기·출입구 차압 관리·Air Lock'] }
  ],
  msg: '온도차 × 높이 = 압력차 — 아래는 막고(방풍), 수직통로는 끊는다(기밀·Zoning)',
  mnemo: '연돌 = 온·밀·압 (온도차→밀도차→압력차) / 대책 = 방·기·가 (방풍실·기밀·가압)',
  rel: ['중성대(NPL)', '역연돌효과', '커튼월 기밀시험', '계단실 가압', '초고층 피난안전구역'],
  det: { secs: [
    { h: '정의', def: '고층건물에서 [[실내외 온도차]]로 생긴 [[공기 밀도차]]가 높이에 비례하는 [[수직 압력차(부력)]]를 만들어, [[중성대(NPL)]] 아래는 외기가 유입되고 위는 실내공기가 유출되는 굴뚝효과로, 동절기 승강로·계단실을 통한 [[상승기류]], 하절기 냉방 시 [[역연돌(하강기류)]]가 발생한다. 외피 [[기밀성능 저하]]와 수직 유동경로(승강로·계단실·Shaft)가 결합할 때 커진다.' },
    { h: '발생 Mechanism 및 도해', fig: 'MAIN', flow: ['외피 기밀성능 저하', '내외부 온도차', '공기 밀도차', '수직 압력차(부력)', 'NPL 하부 유입·상부 유출'], ul: ['ΔP = h(ρo − ρi)g ≈ {{3460·h(1/To − 1/Ti)}} [Pa] — h: NPL로부터 높이(m), T: 절대온도(K)', '예) NPL 상부 100m, 외기 −10℃(263K)·실내 20℃(293K) → ΔP ≈ 3460×100×(1/263 − 1/293) ≈ {{135Pa}} (계산 예시)', '원인 — 겨울: 난방 시 실내외 온도차로 상하 압력차 / 여름: 냉방 시 온도·밀도 역전으로 반대 압력 / 공통: 외피 기밀 저하와 공조로 공기 유동(코어)'] },
    { h: '동절기·하절기 비교', fig: { svg: '<svg viewBox="0 0 640 262" xmlns="http://www.w3.org/2000/svg"><text x="150" y="16" text-anchor="middle" class="b">동절기 — Stack effect</text><text x="470" y="16" text-anchor="middle" class="b">하절기 — Reverse stack</text><text x="150" y="34" text-anchor="middle" class="s">외기 −10℃ &lt; 실내 20℃</text><text x="470" y="34" text-anchor="middle" class="s">외기 32℃ &gt; 실내 24℃</text><rect x="20" y="220" width="600" height="8" class="soil"/><rect x="90" y="44" width="120" height="176" class="bx"/><rect x="135" y="44" width="30" height="176" class="bx3"/><line x1="150" y1="210" x2="150" y2="54" class="ar"/><line x1="70" y1="132" x2="230" y2="132" class="ln dash"/><line x1="210" y1="64" x2="244" y2="64" class="ar"/><line x1="90" y1="64" x2="56" y2="64" class="ar"/><line x1="52" y1="204" x2="86" y2="204" class="ar"/><line x1="248" y1="204" x2="214" y2="204" class="ar"/><rect x="80" y="198" width="10" height="22" class="bx2"/><rect x="410" y="44" width="120" height="176" class="bx"/><rect x="455" y="44" width="30" height="176" class="bx3"/><line x1="470" y1="54" x2="470" y2="210" class="ar"/><line x1="390" y1="132" x2="550" y2="132" class="ln dash"/><line x1="566" y1="64" x2="534" y2="64" class="ar"/><line x1="374" y1="64" x2="406" y2="64" class="ar"/><line x1="530" y1="204" x2="564" y2="204" class="ar"/><line x1="410" y1="204" x2="376" y2="204" class="ar"/><line x1="230" y1="132" x2="262" y2="126" class="ld"/><circle cx="262" cy="126" r="2" class="dotf"/><text x="266" y="130" class="s">중성대(NPL)</text><line x1="150" y1="100" x2="262" y2="96" class="ld"/><circle cx="262" cy="96" r="2" class="dotf"/><text x="266" y="100" class="bl">승강로 상승기류</text><line x1="244" y1="64" x2="262" y2="70" class="ld"/><circle cx="262" cy="70" r="2" class="dotf"/><text x="266" y="74" class="s">실내공기 유출</text><line x1="60" y1="204" x2="40" y2="246" class="ld"/><circle cx="40" cy="246" r="2" class="dotf"/><text x="44" y="250" class="r">외기 유입·문 개폐 곤란</text><line x1="84" y1="200" x2="40" y2="170" class="ld"/><circle cx="40" cy="170" r="2" class="dotf"/><text x="44" y="174" class="s">방풍실</text><line x1="470" y1="160" x2="584" y2="170" class="ld"/><circle cx="584" cy="170" r="2" class="dotf"/><text x="588" y="174" class="bl">하강기류</text><line x1="393" y1="204" x2="360" y2="246" class="ld"/><circle cx="360" cy="246" r="2" class="dotf"/><text x="356" y="250" text-anchor="end" class="s">저층 실내공기 유출</text><line x1="550" y1="64" x2="600" y2="88" class="ld"/><circle cx="600" cy="88" r="2" class="dotf"/><text x="636" y="102" text-anchor="end" class="s">상층 외기 유입</text></svg>', cap: '[상세] 동절기 Stack effect(상승기류) ↔ 하절기 Reverse stack(하강기류)' }, tbl: { head: ['구분', '동절기(Stack effect)', '하절기(Reverse stack)'], rows: [['온도 조건', '외기 &lt; 실내(난방)', '외기 &gt; 실내(냉방)'], ['승강로 기류', '[[상승기류]]', '[[하강기류]]'], ['저층부', '외기 유입 → 출입문 개폐 곤란·소음', '실내공기 유출'], ['상층부', '실내공기 유출 → 냄새·연기 확산', '외기 유입'], ['크기', '온도차·높이 커서 문제 큼', '온도차 작아 상대적으로 작음']] } },
    { h: '관리기준·검토항목', tbl: { head: ['항목', '기준·관리 내용', '근거'], rows: [['압력차 산정', 'ΔP ≈ 3460·h(1/To−1/Ti), 높이·온도차에 비례', 'ASHRAE 일반식'], ['중성대 위치', '개구부 분포·기밀도로 결정 — 저층 개구부 클수록 NPL 하강 → 상층 유출 증가', '일반 원리'], ['부속실·계단실 제연', '최소 차압 {{40Pa}}(스프링클러 설치 시 {{12.5Pa}}), 출입문 개방력 {{110N 이하}}', 'NFTC 501A(특별피난계단 제연설비)'], ['E/V 승강장 문', '승강장 문 전후 차압 관리 — 허용 차압은 제조사 기준', '확인 필요'], ['외피 기밀', 'C/W 기밀시험(Mock-up·Field)으로 누기량 확인', 'KCS 41 54 / ASTM E283·E783']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 설계 단계 연돌효과 해석(CFD·Network 해석)으로 NPL·차압 예측 → 방풍실·E/V Zoning 계획', '[전] 승강기 Zoning(저층·고층 분리)·셔틀 E/V·Sky lobby로 연속 수직통로 분절', '[중] C/W·창호 Sealing, 층간 방화구획(Fire stop) 충전으로 외피·층간 기밀 확보', '[중] 승강로·Shaft 관통부 밀실 충전, 계단실 출입문 Door closer·기밀 Gasket', '[후] 준공 전 외피 기밀시험·층별 차압 측정 → 문 개폐력·E/V 작동 확인', '[후] 동절기 시운전: 1층 출입문 차압·휘파람 소음(Whistling) 점검 → 가압·방풍문 조정'] },
    { h: '문제점 및 해결방안', ul: ['E/V 문 닫힘 불량·소음 → 승강로 기밀, 승강장 전실 설치', '저층 출입문 개폐 곤란·외기 유입 → 방풍실·회전문·이중문(Air Lock), 승강기·출입구 차압 관리(코어)', '화재 시 연기 상층 확산 → 층간·수직구획의 방화구획 강화(코어), 계단실·부속실 가압 제연', '중간 기계실(Inter-floor Mechanical floor) 설치로 수직 Shaft 분절(코어)', '난방부하 증가·결로 → 외피 및 개구부 기밀성능 강화(코어), 저층부 가압 공조'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p072(문제171 연돌효과: 정의·겨울/여름 Mechanism·해결방안 4가지); 마법지 p013 초고층 영향요소(NPL·Winter 연돌효과 압력분포), p020 Stack effect(동절기 상승·하절기 하강기류) / ΔP≈3460·h(1/To−1/Ti)는 ASHRAE 일반식'
},
144: {
  title: 'Out rigger & Belt truss',
  cat: '초고층·커튼월',
  key: ['Core', '외주부 기둥', 'Outrigger truss', 'Belt truss', '전도 모멘트', '축력(인장·압축)', '횡변위 감소', '부등축소', '지연접합'],
  www: { what: '초고층 [[Core]]와 [[외주부 기둥]]을 [[Outrigger truss]]로 연결하고 외주 기둥을 [[Belt truss]]로 묶은 횡력저항 구조시스템', why: '풍·지진 [[전도 모멘트]]를 외주 기둥 축력으로 분담해 Core 휨모멘트와 [[횡변위 감소]]', how: '피난·기계층에 Truss 설치 → 가조립·양중 → [[지연접합]](후조임) → 골조 완료 후 본조임 → 계측' },
  tag: '구조·부재·시스템',
  def: '초고층 [[Core]]와 [[외주부 기둥]]을 [[Outrigger truss]]로 연결하고 외주 기둥을 [[Belt truss]]로 둘러 묶어, 횡하중 시 외주 기둥의 [[축력(인장·압축)]]으로 [[전도 모멘트]]에 저항해 횡변위를 줄이는 구조시스템',
  wwh: ['Core-외주 연결', '횡변위·휨 감소', '피난층 설치·지연접합'],
  figT: 'Outrigger·Belt truss의 횡력 저항원리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="300" width="410" height="12" class="soil"/>' +
    '<line x1="90" y1="40" x2="90" y2="300" class="ln"/>' +
    '<line x1="330" y1="40" x2="330" y2="300" class="ln"/>' +
    '<line x1="90" y1="66" x2="330" y2="66" class="ln2"/><line x1="90" y1="92" x2="330" y2="92" class="ln2"/><line x1="90" y1="118" x2="330" y2="118" class="ln2"/><line x1="90" y1="196" x2="330" y2="196" class="ln2"/><line x1="90" y1="222" x2="330" y2="222" class="ln2"/><line x1="90" y1="248" x2="330" y2="248" class="ln2"/><line x1="90" y1="274" x2="330" y2="274" class="ln2"/>' +
    '<rect x="180" y="40" width="60" height="260" class="bx3"/>' +
    '<line x1="90" y1="144" x2="180" y2="144" class="bl"/>' +
    '<line x1="90" y1="176" x2="180" y2="176" class="bl"/>' +
    '<polyline points="90,176 112,144 135,176 157,144 180,176" fill="none" class="bl"/>' +
    '<line x1="240" y1="144" x2="330" y2="144" class="bl"/>' +
    '<line x1="240" y1="176" x2="330" y2="176" class="bl"/>' +
    '<polyline points="240,176 262,144 285,176 307,144 330,176" fill="none" class="bl"/>' +
    '<line x1="22" y1="52" x2="84" y2="52" class="ar"/><line x1="22" y1="82" x2="84" y2="82" class="ar"/><line x1="22" y1="112" x2="84" y2="112" class="ar"/>' +
    '<text x="22" y="132" class="s">풍·지진</text>' +
    '<line x1="80" y1="270" x2="80" y2="200" class="ar"/>' +
    '<text x="70" y="230" text-anchor="end" class="r">인장</text>' +
    '<line x1="340" y1="200" x2="340" y2="270" class="ar"/>' +
    '<text x="346" y="290" class="r">압축</text>' +
    '<text x="210" y="330" text-anchor="middle" class="s">횡하중 → Core 휨 → Outrigger → 외주기둥 축력(T·C)</text>' +
    '<line x1="285" y1="160" x2="344" y2="120" class="ld"/><circle cx="344" cy="120" r="2" class="dotf"/><text x="348" y="124" class="bl">Outrigger</text>' +
    '<line x1="210" y1="250" x2="344" y2="250" class="ld"/><circle cx="344" cy="250" r="2" class="dotf"/><text x="348" y="254" class="s">Core(전단벽)</text>' +
    '<line x1="90" y1="160" x2="30" y2="176" class="ld"/><circle cx="30" cy="176" r="2" class="dotf"/><text x="34" y="180" class="s">외주기둥</text>' +
    '<text x="450" y="30" class="b">[평면]</text>' +
    '<rect x="470" y="40" width="130" height="110" fill="none" class="bl"/>' +
    '<rect x="515" y="75" width="40" height="40" class="conc"/>' +
    '<line x1="470" y1="95" x2="515" y2="95" class="rd"/>' +
    '<line x1="555" y1="95" x2="600" y2="95" class="rd"/>' +
    '<circle cx="470" cy="95" r="4" class="rf"/>' +
    '<circle cx="600" cy="95" r="4" class="rf"/>' +
    '<text x="535" y="56" text-anchor="middle" class="s">Belt Truss</text>' +
    '<text x="535" y="136" text-anchor="middle" class="s">Outrigger</text>' +
    '<line x1="600" y1="120" x2="620" y2="168" class="ld"/><circle cx="620" cy="168" r="2" class="dotf"/><text x="616" y="172" text-anchor="end" class="s">외곽 띠</text>' +
    '<line x1="210" y1="100" x2="440" y2="186" class="ld"/><circle cx="440" cy="186" r="2" class="dotf"/><text x="446" y="190" class="k3">③ 횡변위·Core 모멘트 감소</text><text x="446" y="210" class="k3">③ 피난·기계층에 설치</text><line x1="330" y1="230" x2="440" y2="226" class="ld"/><circle cx="440" cy="226" r="2" class="dotf"/><text x="446" y="230" class="k3">③ 외주기둥 축력 활용</text><line x1="300" y1="150" x2="440" y2="250" class="ld"/><circle cx="440" cy="250" r="2" class="dotf"/><text x="446" y="254" class="k4">④ 부등축소 → 지연접합</text><text x="446" y="274" class="k4">④ 후조임·장공 볼트</text><text x="446" y="294" class="k4">④ 대형부재 양중·용접변형</text><line x1="262" y1="170" x2="440" y2="314" class="ld"/><circle cx="440" cy="314" r="2" class="dotf"/><text x="446" y="318" class="k5">⑤ Damped Outrigger</text><text x="446" y="338" class="k5">⑤ BIM 가조립·계측관리</text>' +
    '</svg>',
  subs: [
    { h: '구조 원리·특징', pts: ['횡변위·Core 모멘트 감소', '피난·기계층에 설치', '외주기둥 축력 활용', '전체 높이 {{1/3~2/3}} 지점 {{1~2개층}} 설치(코어)'] },
    { h: '시공 시 유의사항', pts: ['부등축소 → 지연접합', '후조임·장공 볼트', '대형부재 양중·용접변형', 'Core·외주기둥 [[Column shortening]] 차이 → 골조 완료 후 본조임'] },
    { h: '개선방안', pts: ['Damped Outrigger', 'BIM 가조립·계측관리'] }
  ],
  msg: 'Core 혼자 버티지 말고 팔(Outrigger)과 띠(Belt)로 외주 기둥을 함께 쓴다',
  mnemo: '아·벨 = 팔·띠 (Outrigger=팔, Belt=띠) → 휨↓ 변위↓ / 시공 = 지·후·양 (지연접합·후조임·양중)',
  rel: ['Column shortening', 'Delay joint', 'Mega Column', '피난안전구역', 'Tube 구조'],
  det: { secs: [
    { h: '정의', def: '[[Outrigger]]는 횡력에 저항하기 위해 내부 [[Core]]와 [[외곽 기둥]](또는 Belt truss)을 연결하는 보·Truss이고, [[Belt truss]]는 외곽 기둥들을 띠처럼 묶어 Outrigger가 전달한 힘을 여러 외주 기둥에 분배하는 Truss로, Core가 받는 [[전도 모멘트]]를 외곽 기둥의 [[축력(인장·압축)]]으로 분담시켜 [[횡변위]]와 층간변형을 줄인다.' },
    { h: '횡력저항 Mechanism', fig: 'MAIN', flow: ['횡력(풍·지진)', 'Core 휨 변형', 'Outrigger가 Core 회전 구속', '외곽 기둥 인장·압축 축력', 'Core 모멘트·횡변위 감소'], ul: ['Core: 수평 전단력 저항 / 외곽 기둥: Core에 발생하는 모멘트를 축력으로 분담(코어)', '설치 위치: 전체 높이 {{1/3~2/3}} 지점에 {{1~2개층}} — 기계실·피난층 활용(코어)', 'Belt truss: Outrigger가 직접 연결되지 않은 외곽 기둥까지 축력 분담 → 기둥 응력 균등화'] },
    { h: '적용 효과 및 장단점', tbl: { head: ['구분', '장점', '단점'], rows: [['구조', '횡강성 증가·풍진동 저감, 횡변위 및 층간변형 감소', '접합부 상세 복잡, 대형 부재 응력 집중'], ['설계', 'Core 단면 축소 → 공간효율 향상, 슬림한 단면설계', 'Core·외곽 기둥 부등축소 시 2차 응력'], ['시공·사용', '기계·피난층에 두어 공간 손실 최소', '시공 복잡·공사비 증가, 해당층 평면활용 제약']] } },
    { h: '관리기준', tbl: { head: ['항목', '관리 내용', '근거'], rows: [['설치 위치', '전체 높이 1/3~2/3 지점, 1~2개층', '코어 p073'], ['부등축소', 'Core-외곽 Column shortening 차이 해석 → [[지연접합(Delay joint)]]·장공 볼트, 골조 완료 후 본조임', '마법지 p013 요소기술'], ['고력볼트', '조임 순서(중앙→단부)·토크관리법/너트회전법 검사', 'KCS 14 31 25'], ['용접', '대형 단면 예열·용접순서 관리, 초음파탐상(UT)', 'KCS 14 31 20'], ['계측', 'Outrigger 부재 변형률·기둥 축소량 계측 → 해석값 비교', '시공 계측계획']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] BIM 가조립·양중계획(대형 부재 분할, T/C 용량) 수립', '[전] Column shortening 해석으로 지연접합 해제 시점 결정', '[중] Outrigger 단부 장공(Slot)·임시 볼트로 가조립 → 부등축소 흡수', '[중] 대형 용접부 예열·용접순서 관리 → 용접변형·잔류응력 억제', '[중] RC Core-철골 접합부 Embedded Plate 위치 정밀도 관리', '[후] 골조·주요 고정하중 재하 후 본조임·본용접(지연접합 해제)', '[후] 변형률계·수직도 계측 → 해석값과 비교·보정'] },
    { h: '개선방안', ul: ['Damped Outrigger(점성 Damper 삽입) → 풍진동 저감·부등축소 영향 완화', 'Virtual Outrigger(Belt truss + 강성 슬래브로 간접 연결) → Core 관통 접합 생략', 'BIM 4D 시뮬레이션·공장 가조립으로 접합부 간섭 사전 해소', '계측 기반 지연접합 해제 시점 결정'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p073(문제172: 정의·횡력저항 Mechanism·전체높이 1/3~2/3 지점 1~2개층 설치·장단점); 마법지 p013 초고층 구조형식 Out Rigger and Beam System(Belt Truss), 요소기술 Column Shortening'
},
145: {
  title: 'Concrete Filled Tube(CFT)',
  cat: '초고층·커튼월',
  key: ['강관', '고유동 콘크리트', '구속효과(Confinement)', '국부좌굴 방지', '압입공법', 'Diaphragm', '공기구멍', '증기배출구', '충전성 확인'],
  www: { what: '[[강관]] 내부에 [[고유동 콘크리트]]를 충전하여 강관의 [[구속효과(Confinement)]]와 콘크리트의 [[국부좌굴 방지]]를 상호 보완한 합성기둥', why: '단면 축소·고강도·고인성 확보, 거푸집 생략으로 초고층 골조 공기단축', how: '강관 세우기 → 하부 [[압입공법]](펌프 압입, 하→상 연속) → 상부 Overflow 확인 → [[충전성 확인]](타격음·초음파)' },
  tag: '구조·부재·공법',
  def: '[[강관]] 내부에 [[고유동 콘크리트]]를 충전한 합성기둥으로, 강관은 콘크리트를 [[구속(Confinement)]]해 압축강도·인성을 높이고 콘크리트는 강관의 [[국부좌굴]]을 방지하는 상호 보완 구조',
  wwh: ['강관+충전Con', '강도·인성·공기', '하부 압입·충전확인'],
  figT: 'CFT의 구속원리 및 압입 충전방법',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="290" width="410" height="12" class="soil"/>' +
    '<rect x="150" y="40" width="80" height="250" class="conc"/>' +
    '<line x1="150" y1="40" x2="150" y2="290" class="ln"/>' +
    '<line x1="230" y1="40" x2="230" y2="290" class="ln"/>' +
    '<rect x="230" y="100" width="90" height="20" class="bx2"/>' +
    '<rect x="60" y="100" width="90" height="20" class="bx2"/>' +
    '<rect x="230" y="200" width="90" height="20" class="bx2"/>' +
    '<rect x="60" y="200" width="90" height="20" class="bx2"/>' +
    '<line x1="150" y1="110" x2="180" y2="110" class="ln"/>' +
    '<line x1="200" y1="110" x2="230" y2="110" class="ln"/>' +
    '<line x1="150" y1="210" x2="180" y2="210" class="ln"/>' +
    '<line x1="200" y1="210" x2="230" y2="210" class="ln"/>' +
    '<circle cx="156" cy="106" r="2.5" class="rf"/>' +
    '<circle cx="224" cy="106" r="2.5" class="rf"/>' +
    '<circle cx="156" cy="206" r="2.5" class="rf"/>' +
    '<circle cx="224" cy="206" r="2.5" class="rf"/>' +
    '<circle cx="230" cy="160" r="3" class="rf"/>' +
    '<line x1="190" y1="280" x2="190" y2="52" class="ar"/>' +
    '<rect x="60" y="264" width="90" height="12" class="bx3"/>' +
    '<line x1="62" y1="270" x2="148" y2="270" class="ar"/>' +
    '<text x="60" y="258" class="s">압입구(펌프)</text>' +
    '<text x="190" y="32" text-anchor="middle" class="s">Overflow 확인</text>' +
    '<line x1="230" y1="180" x2="300" y2="186" class="ld"/><circle cx="300" cy="186" r="2" class="dotf"/><text x="304" y="190" class="s">Steel Tube 강관</text>' +
    '<line x1="200" y1="240" x2="300" y2="240" class="ld"/><circle cx="300" cy="240" r="2" class="dotf"/><text x="304" y="244" class="s">고유동 콘크리트</text>' +
    '<line x1="160" y1="210" x2="100" y2="176" class="ld"/><circle cx="100" cy="176" r="2" class="dotf"/><text x="96" y="180" text-anchor="end" class="s">Diaphragm</text>' +
    '<line x1="156" y1="206" x2="100" y2="236" class="ld"/><circle cx="100" cy="236" r="2" class="dotf"/><text x="96" y="240" text-anchor="end" class="s">공기구멍</text>' +
    '<line x1="230" y1="160" x2="300" y2="150" class="ld"/><circle cx="300" cy="150" r="2" class="dotf"/><text x="304" y="154" class="s">증기배출구</text>' +
    '<text x="450" y="30" class="b">[단면 — 상호 구속]</text>' +
    '<circle cx="530" cy="95" r="50" class="conc"/>' +
    '<circle cx="530" cy="95" r="50" class="ln"/>' +
    '<line x1="530" y1="95" x2="530" y2="52" class="ar"/>' +
    '<line x1="530" y1="95" x2="530" y2="138" class="ar"/>' +
    '<line x1="530" y1="95" x2="487" y2="95" class="ar"/>' +
    '<line x1="530" y1="95" x2="573" y2="95" class="ar"/>' +
    '<line x1="580" y1="95" x2="600" y2="50" class="ld"/><circle cx="600" cy="50" r="2" class="dotf"/><text x="604" y="54" class="r">구속</text>' +
    '<line x1="510" y1="120" x2="470" y2="158" class="ld"/><circle cx="470" cy="158" r="2" class="dotf"/><text x="474" y="162" class="bl">좌굴 방지</text>' +
    '<text x="446" y="190" class="k3">③ 강관 구속 → 강도·인성↑</text><text x="446" y="210" class="k3">③ 거푸집 불필요·공기단축</text><text x="446" y="230" class="k3">③ 단면 축소·내화성 유리</text><line x1="190" y1="250" x2="440" y2="250" class="ld"/><circle cx="440" cy="250" r="2" class="dotf"/><text x="446" y="254" class="k4">④ 압입 하부→상부 연속</text><line x1="175" y1="110" x2="440" y2="270" class="ld"/><circle cx="440" cy="270" r="2" class="dotf"/><text x="446" y="274" class="k4">④ Diaphragm 공기구멍</text><line x1="215" y1="140" x2="440" y2="290" class="ld"/><circle cx="440" cy="290" r="2" class="dotf"/><text x="446" y="294" class="k4">④ 충전성 타격음·초음파</text><text x="446" y="318" class="k5">⑤ 저Bleeding 고유동Con</text><text x="446" y="338" class="k5">⑤ 압입압·측압 계측관리</text>' +
    '</svg>',
  subs: [
    { h: '구조 원리·특징', pts: ['강관 구속 → 강도·인성↑', '거푸집 불필요·공기단축', '단면 축소·내화성 유리'] },
    { h: '시공 시 유의사항', pts: ['압입 하부→상부 연속', 'Diaphragm 공기구멍', '충전성 타격음·초음파', 'Diaphragm 하부 Bleeding 공극 방지', '화재 시 수증기 배출용 [[증기배출구]] 확인', '상부타설: 타설높이 {{6m 이내}}·Tremie 삽입 {{50cm}} / 하부압입: 압입구 하단 {{1.0m}} 위(코어)'] },
    { h: '개선방안', pts: ['저Bleeding 고유동Con', '압입압·측압 계측관리'] }
  ],
  msg: '강관은 콘크리트를 가두고, 콘크리트는 강관을 받친다 — 빈틈 없는 충전이 성능',
  mnemo: 'CFT = 구·좌 (강관 구속·콘크리트 좌굴방지) / 시공 = 압·공·타 (압입·공기구멍·타격음)',
  rel: ['합성기둥(SRC)', '고유동 콘크리트', '압입공법', 'Diaphragm', 'Column shortening'],
  det: { secs: [
    { h: '정의', def: '원형·각형 [[강관]] 내부에 [[고강도·고유동 콘크리트]]를 충전하여 이루어지는 [[충전형 합성기둥]]으로, 충전 콘크리트와 강관이 [[상호 구속효과]]를 발휘하여 [[국부좌굴 방지]], 강성·연성·내화력이 증대되며, 별도의 거푸집이 필요 없어 초고층 건물 및 기둥에 적용한다.' },
    { h: 'CFT Mechanism 및 응력거동', fig: 'MAIN', flow: ['강관이 내부 Con\'c 구속', 'Con\'c가 강관 국부좌굴 방지', '고내력·고인성 기둥'], ul: ['응력-변형 거동: CFT는 최대내력 이후에도 내력 저하가 완만(연성 우수), 단순 강관은 국부좌굴 후 급격히 저하(코어)', '구속효과(Confinement): 3축 압축 상태의 콘크리트 → 압축강도·변형능력 증가'] },
    { h: '콘크리트 충전공법', fig: { svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="130" width="60" height="90" class="conc"/><rect x="80" y="40" width="60" height="180" fill="none" class="ln"/><rect x="105" y="16" width="10" height="134" class="bx2"/><line x1="62" y1="40" x2="62" y2="220" class="ln2"/><line x1="56" y1="40" x2="68" y2="40" class="ln2"/><line x1="56" y1="220" x2="68" y2="220" class="ln2"/><text x="56" y="134" text-anchor="end" class="r">6m 이내</text><line x1="115" y1="60" x2="170" y2="52" class="ld"/><circle cx="170" cy="52" r="2" class="dotf"/><text x="174" y="56" class="s">Tremie관</text><line x1="112" y1="144" x2="170" y2="120" class="ld"/><circle cx="170" cy="120" r="2" class="dotf"/><text x="174" y="124" class="r">Con\'c 내 삽입 50cm</text><line x1="110" y1="190" x2="170" y2="196" class="ld"/><circle cx="170" cy="196" r="2" class="dotf"/><text x="174" y="200" class="s">고유동 Con\'c</text><line x1="140" y1="90" x2="170" y2="88" class="ld"/><circle cx="170" cy="88" r="2" class="dotf"/><text x="174" y="92" class="s">강관(Steel Tube)</text><text x="110" y="248" text-anchor="middle" class="b">① 상부 타설(Tremie)</text><rect x="400" y="96" width="60" height="124" class="conc"/><rect x="400" y="40" width="60" height="180" fill="none" class="ln"/><line x1="400" y1="150" x2="424" y2="150" class="ln"/><line x1="436" y1="150" x2="460" y2="150" class="ln"/><line x1="430" y1="200" x2="430" y2="108" class="ar"/><rect x="344" y="192" width="56" height="12" class="bx3"/><line x1="346" y1="198" x2="398" y2="198" class="ar"/><rect x="422" y="28" width="16" height="12" class="bx2"/><line x1="476" y1="198" x2="476" y2="220" class="ln2"/><line x1="470" y1="198" x2="482" y2="198" class="ln2"/><text x="486" y="214" class="r">1.0m</text><line x1="360" y1="192" x2="330" y2="168" class="ld"/><circle cx="330" cy="168" r="2" class="dotf"/><text x="326" y="172" text-anchor="end" class="s">압입구(펌프)</text><line x1="438" y1="34" x2="490" y2="40" class="ld"/><circle cx="490" cy="40" r="2" class="dotf"/><text x="494" y="44" class="s">Overflow·공기 배출</text><line x1="412" y1="150" x2="490" y2="136" class="ld"/><circle cx="490" cy="136" r="2" class="dotf"/><text x="494" y="140" class="s">Diaphragm 공기구멍</text><line x1="430" y1="170" x2="490" y2="176" class="ld"/><circle cx="490" cy="176" r="2" class="dotf"/><text x="494" y="180" class="bl">하→상 연속 압입</text><text x="430" y="248" text-anchor="middle" class="b">② 하부 압입(펌프)</text></svg>', cap: '[상세] 상부 타설(Tremie) ↔ 하부 압입(펌프) 충전방법' }, tbl: { head: ['구분', '상부 타설(낙하)', '하부 압입(펌프)'], rows: [['방법', '기둥 상부에서 Tremie관으로 타설', '기둥 하부 압입구로 펌프 압입, 하→상 연속 충전'], ['관리', '최고 타설높이 {{6m 이내}}, Tremie관 Con\'c 내 삽입 {{50cm}}', '압입구: 기둥 하단에서 {{1.0m}} 띄움(코어)'], ['특징', '장비 간단, 낙하 재료분리·다짐 관리 필요', '충전성 우수, 압입압·강관 측압 관리 필요']] } },
    { h: '장단점', tbl: { head: ['장점', '단점'], rows: [['구조 내력 및 연성 증대', '원형 강관은 보 접합 난해'], ['충전 Con\'c에 의한 내화성 향상', '고강도 시 내화피복 필요(검토)'], ['국부좌굴 방지 및 거푸집 생략 → 공기단축', '강관 내 충전성 확인 난해']] } },
    { h: '관리기준·시험기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['충전 Con\'c', '고유동·저Bleeding·저수축 배합, 설계강도 이상', '특기시방(Slump flow 등 수치 확인 필요)'], ['상부 타설', '타설높이 6m 이내, Tremie 삽입 50cm', '코어 p074'], ['하부 압입', '압입구 하단 1.0m 위, 하→상 연속 압입·Overflow 확인', '코어 p074'], ['Diaphragm', '공기구멍·타설구 확보(직경 확인 필요)', '설계도서'], ['충전성 검사', '타격음·초음파(UT) 검사, 필요시 천공 확인', '일반 품질관리'], ['증기배출구', '화재 시 내부 수증기 배출구 설치(규격 확인 필요)', '설계도서']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 시험시공(Mock-up 기둥)으로 충전성·압입압 확인, 고유동·저수축 배합 결정', '[전] 강관 제작 시 Diaphragm 공기구멍·증기배출구 위치 확인', '[중] 하부 압입은 하→상 연속 타설, 중단 금지·압입속도 관리', '[중] 압입압에 의한 강관 측압·변형 계측, 상부 Overflow로 충전 완료 확인', '[중] Diaphragm 하부 Bleeding 공극 → 저Bleeding 배합·공기구멍 확보', '[후] 타격음·초음파로 충전성 검사, 공극부 Grout 보수', '[후] 내화피복·방청 도장 마감'] },
    { h: '개선방안', ul: ['고강도·고유동·저수축 콘크리트 적용', '압입압·충전 센서 실시간 Monitoring', '외부 Diaphragm 등 접합 상세 개선으로 충전 장애 최소화', 'SRC 대비 거푸집·철근 생략 → 공기·인력 절감 극대화'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p074(문제173: 상호구속·국부좌굴 방지, 장단점, 상부타설 6m 이내·Tremie 50cm, 하부압입 1.0m·5m 간격); 마법지 p013 CFT구조, p004 비탈형 거푸집 CFT공법 / 공기구멍·증기배출구 직경, 하부압입 5m 간격의 의미는 확인 필요'
},
146: {
  title: 'Transfer Girder, Plate',
  cat: '초고층·커튼월',
  key: ['상·하부 수직부재 불일치', '전이보(Girder)', '전이판(Plate)', '하중 전달', '필로티·대공간', 'Mass Concrete', '다층 동바리', '철근 과밀', '수화열'],
  www: { what: '상부 기둥·벽체 하중을 하부의 다른 구조시스템으로 전달하기 위해 [[상·하부 수직부재 불일치]]층에 두는 [[전이보(Girder)]]·[[전이판(Plate)]]', why: '상부 주거(벽식)와 하부 [[필로티·대공간]](주차·상가)을 하나의 건물로 구성', how: '하중·수화열 해석 → [[다층 동바리]] 설치 → 철근·Coupler 배근 → 분할타설·온도관리 → 처짐 계측' },
  tag: '구조·부재·시공',
  def: '상부 [[기둥·벽체]]의 하중을 하부의 다른 구조시스템([[필로티·대공간]])으로 전달하기 위해 상·하부 수직부재가 불일치하는 층에 설치하는 춤이 큰 [[전이보(Transfer Girder)]] 또는 두꺼운 [[전이판(Transfer Plate)]]',
  wwh: ['수직부재 전이층', '대공간·필로티', '동바리·수화열 관리'],
  figT: 'Transfer Girder의 하중전달 원리 및 시공관리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="290" width="410" height="12" class="soil"/>' +
    '<rect x="54" y="40" width="12" height="110" class="bx3"/><line x1="60" y1="22" x2="60" y2="38" class="ar"/><rect x="114" y="40" width="12" height="110" class="bx3"/><line x1="120" y1="22" x2="120" y2="38" class="ar"/><rect x="174" y="40" width="12" height="110" class="bx3"/><line x1="180" y1="22" x2="180" y2="38" class="ar"/><rect x="234" y="40" width="12" height="110" class="bx3"/><line x1="240" y1="22" x2="240" y2="38" class="ar"/><rect x="294" y="40" width="12" height="110" class="bx3"/><line x1="300" y1="22" x2="300" y2="38" class="ar"/>' +
    '<rect x="40" y="150" width="290" height="40" class="conc"/>' +
    '<line x1="46" y1="156" x2="324" y2="156" class="rd"/>' +
    '<line x1="46" y1="184" x2="324" y2="184" class="rd"/>' +
    '<rect x="40" y="190" width="16" height="100" class="bx2"/>' +
    '<rect x="314" y="190" width="16" height="100" class="bx2"/>' +
    '<line x1="90" y1="190" x2="90" y2="290" class="ln2 dash"/><line x1="120" y1="190" x2="120" y2="290" class="ln2 dash"/><line x1="150" y1="190" x2="150" y2="290" class="ln2 dash"/><line x1="180" y1="190" x2="180" y2="290" class="ln2 dash"/><line x1="210" y1="190" x2="210" y2="290" class="ln2 dash"/><line x1="240" y1="190" x2="240" y2="290" class="ln2 dash"/><line x1="270" y1="190" x2="270" y2="290" class="ln2 dash"/>' +
    '<text x="185" y="276" text-anchor="middle" class="s">필로티·주차장(대공간)</text>' +
    '<line x1="320" y1="170" x2="350" y2="176" class="ld"/><circle cx="350" cy="176" r="2" class="dotf"/><text x="354" y="180" class="bl">전이보(춤 큰)</text>' +
    '<line x1="306" y1="100" x2="350" y2="100" class="ld"/><circle cx="350" cy="100" r="2" class="dotf"/><text x="354" y="104" class="s">상부 벽·기둥</text>' +
    '<line x1="322" y1="260" x2="350" y2="250" class="ld"/><circle cx="350" cy="250" r="2" class="dotf"/><text x="354" y="254" class="s">하부 기둥</text>' +
    '<line x1="270" y1="230" x2="350" y2="220" class="ld"/><circle cx="350" cy="220" r="2" class="dotf"/><text x="354" y="224" class="r">다층 동바리</text>' +
    '<line x1="200" y1="184" x2="170" y2="230" class="ld"/><circle cx="170" cy="230" r="2" class="dotf"/><text x="166" y="234" text-anchor="end" class="s">철근 과밀·Coupler</text>' +
    '<text x="450" y="30" class="b">[전이 형식·관리]</text>' +
    '<text x="450" y="52" class="s">Girder: 보 형식 — 선 전달</text>' +
    '<text x="450" y="70" class="s">Plate: 두꺼운 슬래브 — 면 전달</text>' +
    '<text x="450" y="92" class="r">Mass Con: 두께 0.8m 이상</text>' +
    '<text x="450" y="112" class="s">분할타설 → 합성단면 검토</text>' +
    '<text x="450" y="130" class="s">처짐 → Camber 설정</text>' +
    '<text x="450" y="148" class="s">전이층 강성 불연속 주의</text>' +
    '<line x1="300" y1="150" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 상하 수직부재 불일치층</text><text x="446" y="202" class="k3">③ Girder 선형·Plate 면전달</text><text x="446" y="222" class="k3">③ 대공간·필로티 확보</text><line x1="240" y1="250" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 자중 → 다층 동바리</text><line x1="120" y1="170" x2="440" y2="262" class="ld"/><circle cx="440" cy="262" r="2" class="dotf"/><text x="446" y="266" class="k4">④ 수화열 → 온도균열</text><line x1="90" y1="184" x2="440" y2="282" class="ld"/><circle cx="440" cy="282" r="2" class="dotf"/><text x="446" y="286" class="k4">④ 철근 과밀 → 충전불량</text><text x="446" y="310" class="k5">⑤ PT·Steel 전이보</text><text x="446" y="330" class="k5">⑤ 수화열 해석·Pipe cooling</text>' +
    '</svg>',
  subs: [
    { h: '구조 특징', pts: ['상하 수직부재 불일치층', 'Girder 선형·Plate 면전달', '대공간·필로티 확보'] },
    { h: '시공 시 유의사항', pts: ['자중 → 다층 동바리', '수화열 → 온도균열', '철근 과밀 → 충전불량', '두께 {{0.8m 이상}} → [[Mass Concrete]] 온도균열 관리(KCS 14 20 42)'] },
    { h: '개선방안', pts: ['PT·Steel 전이보', '수화열 해석·Pipe cooling'] }
  ],
  msg: '위의 촘촘한 하중을 아래 넓은 공간으로 — 동바리·수화열·철근을 함께 관리',
  mnemo: '전이 = 불·대·동·수·철 (불일치·대공간 / 동바리·수화열·철근과밀)',
  rel: ['Mass Concrete', '필로티 구조', 'Reshoring', 'Pipe cooling', 'Post-tension'],
  det: { secs: [
    { h: '정의', def: '구조형식이 달라지는 부분(상부 [[벽식구조]] ↔ 하부 [[라멘구조]]·필로티)에서 상부층의 축력과 하중을 하부층으로 전달하기 위해 설치하는 춤이 큰 [[Transfer Girder]] 또는 두꺼운 [[Transfer Plate]]로, 각 시스템의 경계부에 형성되며 [[철근 보강]] 및 콘크리트 [[분리타설]]·[[Mass Concrete]]에 대한 검토가 필요하다.' },
    { h: '하중 전달 원리', fig: 'MAIN', flow: ['상부 벽식구조', 'Transfer Girder(전이)', '하부 기둥', '기초'], ul: ['상부 벽체 하중 → 전이보 휨·전단 → 하부 기둥 축력 : 전단철근·표피철근(Skin bar) 보강', '전이층은 강성 불연속층 → 내진 시 약층·연층 검토'] },
    { h: '종류 비교', tbl: { head: ['구분', 'Transfer Girder', 'Transfer Plate', '철골·Truss 전이'], rows: [['형식', '춤 큰 보(선 전달)', '두꺼운 슬래브(면 전달)', '철골 Truss·SRC'], ['적용', '기둥 열 일부 불일치', '상하 부재 배치 전면 불일치', '장스팬·경량화'], ['계획 시 검토(코어)', '하중·응력 전달방식, 시스템 동바리, 전기·설비 위치', 'Mass Con\'c, 전단철근 배근, 분리타설', '양중 방법, 접합부, 매립 앵커']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['Mass Concrete 적용', '넓은 평판 두께 {{0.8m 이상}}, 하단 구속 벽 두께 {{0.5m 이상}}', 'KCS 14 20 42'], ['온도균열지수', '균열 방지 {{1.5 이상}} · 균열 제한 1.2~1.5 · 유해균열 제한 0.7~1.2', 'KCS 14 20 42'], ['동바리', '전이보 자중+타설하중 → 시스템·다층 동바리 구조검토, 하부층 Reshoring', 'KDS 21 50 00'], ['분리타설', '수평 분리 시 합성단면 검토, 이음면 Laitance 제거·Shear key', '코어 p077'], ['처짐', 'Camber 설정·처짐 계측', '설계도서']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 수화열 해석·타설계획(분할타설·저발열 배합), 동바리 구조계산서 확인', '[전] 철근 Shop drawing·BIM 간섭 검토(Coupler·정착·전단철근)', '[중] 보 Depth가 크므로 [[표피철근]] 배근(코어)', '[중] 철근 과다배근 부위 → 고유동 Con\'c·충분한 다짐으로 충전, 철근 과밀부 충전불량 주의(코어)', '[중] Mass Con\'c 내외부 온도차 → Pipe cooling·보온양생으로 온도균열 방지(코어)', '[후] 설계강도 확인 후 동바리 해체, 상부 하중 고려 Reshoring 유지', '[후] 처짐·균열 계측 및 보수'] },
    { h: '하자 원인 및 개선방안', ul: ['온도균열 → 저발열 시멘트·Pipe cooling·분할타설', '철근 과밀 충전불량 → 기계식 이음·Head bar로 정착 간소화', '동바리 침하·처짐 → 시스템 동바리·하부층 보강', 'PT(Post-tension)·철골 전이 Truss로 단면 축소'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p077(문제176: 구조형식 변환부 하중전달, 계획 시 검토 RC=Mass Con·전단철근·분리타설 / 철골=양중·접합부·매립앵커, 시공 시 표피철근·온도균열·철근 과다배근); 마법지 p013 요소기술 Transfer Girder / KCS 14 20 42 매스콘크리트(넓은 평판 0.8m 이상)'
},
147: {
  title: 'Column shortening',
  cat: '초고층·커튼월',
  key: ['탄성 축소', 'Creep', '건조수축', '부등축소', 'Up to', 'Sub to', '상대보정', '절대보정', '변형률계 계측'],
  www: { what: '초고층 수직부재가 [[탄성 축소]]·[[Creep]]·[[건조수축]]으로 줄어들고 Core와 외주기둥 간 [[부등축소]]가 발생하는 현상', why: '슬래브 경사·균열, 커튼월·엘리베이터·배관 등 비구조재 손상 방지', how: '축소량 해석([[Up to]]·[[Sub to]]) → 보정방안([[상대보정]]·[[절대보정]]) → 시공·측량 → [[변형률계 계측]] → 보정값 재산정' },
  tag: '현상·원인·보정',
  def: '초고층 건물의 기둥·코어벽이 [[탄성]]·[[Creep]]·[[건조수축]]에 의해 축소되는 현상으로, Core와 외주기둥의 [[부등축소]]가 슬래브 경사·비구조재 손상을 유발하므로 [[Up to·Sub to]] 축소량을 해석해 보정',
  wwh: ['탄성+비탄성 축소', '슬래브 경사 방지', '해석·계측·보정'],
  figT: 'Column shortening의 발생원리 및 보정절차',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="290" width="410" height="10" class="soil"/>' +
    '<rect x="80" y="40" width="50" height="250" class="conc"/>' +
    '<rect x="300" y="40" width="24" height="250" class="bx2"/>' +
    '<line x1="130" y1="80" x2="300" y2="80" class="ln2 dash"/><line x1="130" y1="78" x2="300" y2="90" class="ln"/><line x1="130" y1="140" x2="300" y2="140" class="ln2 dash"/><line x1="130" y1="139" x2="300" y2="148" class="ln"/><line x1="130" y1="200" x2="300" y2="200" class="ln2 dash"/><line x1="130" y1="200" x2="300" y2="206" class="ln"/><line x1="130" y1="260" x2="300" y2="260" class="ln2 dash"/><line x1="130" y1="261" x2="300" y2="264" class="ln"/>' +
    '<line x1="105" y1="22" x2="105" y2="38" class="ar"/>' +
    '<line x1="312" y1="22" x2="312" y2="38" class="ar"/>' +
    '<line x1="312" y1="48" x2="360" y2="66" class="ld"/><circle cx="360" cy="66" r="2" class="dotf"/><text x="364" y="70" class="r">δe 크다(외주)</text>' +
    '<line x1="105" y1="44" x2="70" y2="30" class="ld"/><circle cx="70" cy="30" r="2" class="dotf"/><text x="66" y="34" text-anchor="end" class="r">δc 작다</text>' +
    '<line x1="80" y1="160" x2="60" y2="150" class="ld"/><circle cx="60" cy="150" r="2" class="dotf"/><text x="56" y="154" text-anchor="end" class="s">Core</text>' +
    '<line x1="324" y1="160" x2="360" y2="160" class="ld"/><circle cx="360" cy="160" r="2" class="dotf"/><text x="364" y="164" class="s">외주 기둥</text>' +
    '<line x1="215" y1="92" x2="230" y2="112" class="ld"/><circle cx="230" cy="112" r="2" class="dotf"/><text x="234" y="116" class="r">부등축소 → 경사</text>' +
    '<rect x="20" y="312" width="90" height="22" class="bx2"/><text x="65" y="327" text-anchor="middle" class="s">축소량 해석</text><line x1="111" y1="323" x2="123" y2="323" class="ar"/><rect x="124" y="312" width="90" height="22" class="bx2"/><text x="169" y="327" text-anchor="middle" class="s">보정값 산정</text><line x1="215" y1="323" x2="227" y2="323" class="ar"/><rect x="228" y="312" width="90" height="22" class="bx2"/><text x="273" y="327" text-anchor="middle" class="s">시공·측량</text><line x1="319" y1="323" x2="331" y2="323" class="ar"/><rect x="332" y="312" width="90" height="22" class="bx2"/><text x="377" y="327" text-anchor="middle" class="s">계측·재보정</text>' +
    '<text x="450" y="22" class="b">[축소량 — 시간]</text>' +
    '<line x1="460" y1="140" x2="460" y2="30" class="ar"/>' +
    '<line x1="460" y1="140" x2="630" y2="140" class="ar"/>' +
    '<path d="M460,140 C500,80 560,60 625,55" class="ln"/>' +
    '<line x1="510" y1="36" x2="510" y2="140" class="ln2 dash"/>' +
    '<text x="466" y="44" class="s">축소량</text>' +
    '<text x="514" y="50" class="s">슬래브 타설</text>' +
    '<text x="628" y="132" text-anchor="end" class="s">시간</text>' +
    '<text x="466" y="132" class="s">Up to</text>' +
    '<text x="560" y="112" class="s">Sub to</text>' +
    '<text x="450" y="160" class="r">Total = Up to + Sub to</text>' +
    '<line x1="105" y1="100" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="446" y="184" class="k3">③ 탄성+Creep+건조수축</text><text x="446" y="204" class="k3">③ 상대보정·절대보정</text><text x="446" y="224" class="k3">③ 1,000일·10,000일 기준</text><line x1="215" y1="205" x2="440" y2="244" class="ld"/><circle cx="440" cy="244" r="2" class="dotf"/><text x="446" y="248" class="k4">④ 슬래브 경사·균열</text><text x="446" y="268" class="k4">④ C/W·E/V·배관 손상</text><line x1="312" y1="220" x2="440" y2="284" class="ld"/><circle cx="440" cy="284" r="2" class="dotf"/><text x="446" y="288" class="k4">④ 매립 변형률계 계측</text><text x="446" y="312" class="k5">⑤ 해석·계측 Feedback</text><text x="446" y="332" class="k5">⑤ 고강도·Core 선행 조정</text>' +
    '</svg>',
  subs: [
    { h: '원인·보정방법', pts: ['탄성+Creep+건조수축', '상대보정·절대보정', '1,000일·10,000일 기준', 'Up to: 타설 전 축소 → 레벨 맞추며 자연 보정', 'Sub to: 타설 후 축소 → 미리 예측 반영'] },
    { h: '문제점·시공 시 유의사항', pts: ['슬래브 경사·균열', 'C/W·E/V·배관 손상', '매립 변형률계 계측'] },
    { h: '개선방안', pts: ['해석·계측 Feedback', '고강도·Core 선행 조정', '설계: 균등 응력배분·Outrigger 부등축소 고려 / 시공: 층고 조정·수직 Duct 배관·C/W 허용오차 확인(코어)'] }
  ],
  msg: '줄어들 만큼 미리 높인다 — 해석으로 예측하고 계측으로 확인',
  mnemo: '수시로 보시게~보위를~ (시공계획·축소량 해석·보정방안·시공측량·계측분석·보정값·위치별 보정)',
  rel: ['Creep', '건조수축', 'Outrigger', 'Delay joint', '초고층 측량(GPS)'],
  det: { secs: [
    { h: '정의', def: '수직부재가 하중에 의한 [[탄성축소]]와 시간경과에 따른 [[Creep]]·[[건조수축]]에 의해 내부 Core와 외부 기둥의 [[수축차이(부등축소)]]가 발생하는 현상으로, 기둥 재질·단면적 상이 등으로 생기는 [[탄성 Shortening]]과 콘크리트 장기하중에 따른 응력차이 등으로 생기는 [[비탄성 Shortening]]이 있다.' },
    { h: '발생원리 및 보정 검토절차', fig: 'MAIN', flow: ['시공계획 수립', '수직부재 축소량 해석', '보정방안 해석·결정', '시공 및 측량', '계측자료 분석', '보정값 산정', '위치별 보정'], ul: ['Total 축소량 = [[Up to]](해당층 슬래브 타설 전) + [[Sub to]](타설 후) — Up to는 Level 시공으로 자연 보정, Sub to는 미리 예측해 반영'] },
    { h: '원인별 구분', tbl: { head: ['구분', '탄성 Shortening', '비탄성 Shortening'], rows: [['원인', '기둥부재 재질·높이·단면적 상이, 하중차이', '방위(일사)에 따른 건조수축 차이, Con\'c 장기하중 응력차이(Creep)'], ['발생 시기', '하중 재하 즉시', '장기간 지속'], ['대응', '강성 균등화·균등한 응력배분', '배합·양생 관리, 장기 계측']] } },
    { h: '보정방법', fig: { svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><line x1="70" y1="220" x2="70" y2="30" class="ar"/><line x1="70" y1="220" x2="340" y2="220" class="ar"/><text x="76" y="36" class="s">층(높이)</text><text x="340" y="238" text-anchor="end" class="s">보정량(축소량)</text><text x="64" y="224" text-anchor="end" class="s">기초</text><text x="64" y="44" text-anchor="end" class="s">최상층</text><path d="M72,216 C170,192 235,150 228,118 C220,82 160,52 110,38" fill="none" class="bl"/><polyline points="70,220 100,220 100,180 170,180 170,140 215,140 215,100 195,100 195,60 140,60 140,36" fill="none" class="rd"/><line x1="222" y1="96" x2="260" y2="96" class="ld"/><circle cx="260" cy="96" r="2" class="dotf"/><text x="264" y="100" class="bl">절대보정: 층별 예측값</text><line x1="229" y1="124" x2="260" y2="132" class="ld"/><circle cx="260" cy="132" r="2" class="dotf"/><text x="264" y="136" class="s">중·상층부 축소량 최대</text><line x1="170" y1="160" x2="260" y2="168" class="ld"/><circle cx="260" cy="168" r="2" class="dotf"/><text x="264" y="172" class="r">상대보정: 구간별 일정값</text><text x="400" y="36" class="b">[보정 방법]</text><text x="400" y="58" class="s">상대보정: 계산 보정값을 일정 적용</text><text x="400" y="76" class="s">→ 수직부재를 보정값만큼 높게 시공</text><text x="400" y="100" class="s">절대보정: 제작 단계에서 정확 예측</text><text x="400" y="118" class="s">→ 설계 Level에 맞춰 부재 제작</text><text x="400" y="142" class="r">보정 기준: 1,000일 / 10,000일</text><text x="400" y="164" class="s">Total = Up to + Sub to</text><text x="400" y="182" class="s">Up to: 슬래브 타설 전 축소</text><text x="400" y="200" class="s">Sub to: 슬래브 타설 후 축소</text></svg>', cap: '[상세] 높이별 축소량 분포와 상대보정·절대보정' }, tbl: { head: ['구분', '상대 보정법', '절대 보정법'], rows: [['방법', '기둥 및 벽체에 계산된 보정값을 일정하게 적용(수직부재를 높게 시공)', '부재 제작단계에서 보정값만큼 정확히 예측 제작 → 설계 Level에 맞춤'], ['특징', '시공 간단, Core-기둥 상대 차이 보정', '정밀, 해석·계측 Feedback 필수'], ['적용', 'RC Core·RC 기둥', '철골 기둥 제작길이 조정']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['보정 목표 시점', '완공 후 {{1,000일}} 또는 {{10,000일}}(극한상태) 축소량 기준', '마법지 p020'], ['축소량 구분', 'Total = Up to + Sub to', '마법지 p013·p020'], ['계측', '매립형 변형률계(진동현식)·온도 계측, 층별 Level 측량', '시공 계측계획'], ['허용 부등축소', '슬래브 경사·C/W·E/V 허용오차 이내 — 수치 확인 필요', '설계도서']] } },
    { h: '문제점 및 시공 시 유의사항 (시공 전·중·후)', ul: ['문제점: 내부 슬래브 처짐·경사 / 커튼월 및 문 비틀림 / 오수배관 역구배 → 내구성 및 자산가치 하락(코어)', '[전] 설계 시 균등한 응력배분, Outrigger 부등축소량 고려, 구조부재 여력 검토(코어)', '[전] 시공순서(Core 선행 층수 차)·재료 물성 반영 축소량 해석 → 층별 보정값 Level 계획', '[중] 상대보정: 수직부재 보정값만큼 높게 시공 / 절대보정: 철골 기둥 제작길이 조정', '[중] Outrigger·Belt truss 지연접합으로 부등축소 수용', '[중] 변형률계 계측 → 해석값 비교 → 보정값 재산정(Feedback)', '[후] 층고 조정, 수직 Duct·배관 신축이음, 커튼월 허용오차 확인(코어)'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p078(문제177: 탄성·비탄성 Shortening, 문제점, 설계·시공 시 대책); 마법지 p013 Column Shortening(상대·절대 보정법, 보정 검토절차), p020 Up to·Sub to, 보정시점 1,000일 또는 10,000일'
},
148: {
  title: 'PEB(Pre-Engineered Building)',
  cat: '강구조',
  key: ['Tapered Member(변단면)', 'H형강 단면', '응력 분포', '공장 자동화 생산', 'Purlin·Girt', 'Bracing', 'Anchor Bolt', '장스팬 무주공간'],
  www: { what: '[[H형강 단면]]의 웨브 춤·플랜지를 [[응력 분포]]에 맞게 변화시킨 [[Tapered Member(변단면)]]를 [[공장 자동화 생산]]하여 현장 볼트 조립하는 대공간 철골 시스템', why: '강재량 절감, [[장스팬 무주공간]] 확보, 공장·창고·체육시설 공기단축', how: '구조해석·자동설계 → 공장 절단·자동용접 → [[Anchor Bolt]] 설치 → Main frame 세우기 → [[Purlin·Girt]]·[[Bracing]] → Panel 마감' },
  tag: '공법·부재·구조',
  def: '[[H형강 단면]]에서 불필요한 부분을 줄여 웨브 춤·두께를 [[응력 분포]]에 맞춘 [[Tapered Member(변단면 부재)]]를 공장에서 설계·생산(Pre-Engineered)하고 현장에서 볼트 조립하는 [[대공간 철골 구조]]',
  wwh: ['변단면 철골', '강재절감·장스팬', '공장생산·볼트조립'],
  figT: 'PEB의 변단면 골조 구성 및 시공관리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="302" width="410" height="12" class="soil"/>' +
    '<polygon points="60,290 70,290 80,130 50,130" class="bx2"/>' +
    '<polygon points="360,290 370,290 380,130 350,130" class="bx2"/>' +
    '<polygon points="50,128 215,70 215,82 80,156 80,130" class="bx2"/>' +
    '<polygon points="380,128 215,70 215,82 350,156 350,130" class="bx2"/>' +
    '<polyline points="46,120 215,62 384,120" fill="none" class="ln2"/>' +
    '<rect x="77" y="109" width="6" height="6" class="bx3"/><rect x="107" y="99" width="6" height="6" class="bx3"/><rect x="137" y="88" width="6" height="6" class="bx3"/><rect x="167" y="78" width="6" height="6" class="bx3"/><rect x="197" y="67" width="6" height="6" class="bx3"/>' +
    '<rect x="227" y="67" width="6" height="6" class="bx3"/><rect x="257" y="78" width="6" height="6" class="bx3"/><rect x="287" y="88" width="6" height="6" class="bx3"/><rect x="317" y="99" width="6" height="6" class="bx3"/><rect x="347" y="109" width="6" height="6" class="bx3"/>' +
    '<rect x="40" y="290" width="40" height="12" class="conc"/>' +
    '<rect x="350" y="290" width="40" height="12" class="conc"/>' +
    '<line x1="58" y1="284" x2="58" y2="306" class="rd"/>' +
    '<line x1="72" y1="284" x2="72" y2="306" class="rd"/>' +
    '<line x1="358" y1="284" x2="358" y2="306" class="rd"/>' +
    '<line x1="372" y1="284" x2="372" y2="306" class="rd"/>' +
    '<line x1="66" y1="220" x2="110" y2="250" class="ld"/><circle cx="110" cy="250" r="2" class="dotf"/><text x="114" y="254" class="bl">Tapered Column</text>' +
    '<line x1="140" y1="110" x2="160" y2="186" class="ld"/><circle cx="160" cy="186" r="2" class="dotf"/><text x="164" y="190" class="bl">Tapered Rafter(변단면)</text>' +
    '<line x1="110" y1="104" x2="200" y2="216" class="ld"/><circle cx="200" cy="216" r="2" class="dotf"/><text x="204" y="220" class="s">Purlin·Girt(C·Z형강)</text>' +
    '<line x1="58" y1="300" x2="110" y2="280" class="ld"/><circle cx="110" cy="280" r="2" class="dotf"/><text x="114" y="284" class="s">Anchor Bolt</text>' +
    '<line x1="215" y1="64" x2="250" y2="44" class="ld"/><circle cx="250" cy="44" r="2" class="dotf"/><text x="254" y="48" class="s">Roof Panel·단열</text>' +
    '<text x="450" y="30" class="b">[PEB 부재 구성]</text>' +
    '<text x="450" y="52" class="s">Main: Tapered Frame</text>' +
    '<text x="450" y="70" class="s">Secondary: Purlin·Girt</text>' +
    '<text x="450" y="88" class="s">Bracing: Rod·Angle</text>' +
    '<text x="450" y="106" class="s">Sheeting: Roof·Wall Panel</text>' +
    '<text x="450" y="130" class="r">공장 자동용접 → 볼트조립</text>' +
    '<text x="450" y="150" class="s">단면 = 휨모멘트 분포 비례</text>' +
    '<line x1="80" y1="140" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 응력 비례 변단면</text><text x="446" y="202" class="k3">③ 공장생산·볼트조립</text><text x="446" y="222" class="k3">③ 강재 절감·장스팬</text><line x1="65" y1="296" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ Anchor 위치·Level</text><line x1="365" y1="220" x2="440" y2="262" class="ld"/><circle cx="440" cy="262" r="2" class="dotf"/><text x="446" y="266" class="k4">④ 세우기 가새·전도방지</text><line x1="300" y1="100" x2="440" y2="282" class="ld"/><circle cx="440" cy="282" r="2" class="dotf"/><text x="446" y="286" class="k4">④ 지붕 Panel 누수·결로</text><text x="446" y="310" class="k5">⑤ BIM 자동설계·제작</text><text x="446" y="330" class="k5">⑤ 단열 Sandwich Panel</text>' +
    '</svg>',
  subs: [
    { h: '구성·특징', pts: ['응력 비례 변단면', '공장생산·볼트조립', '강재 절감·장스팬'] },
    { h: '시공 시 유의사항', pts: ['Anchor 위치·Level', '세우기 가새·전도방지', '지붕 Panel 누수·결로', '고력볼트 조임 순서·토크 관리', '기둥 세운 후 즉시 가새·Purlin 설치 / 동절기 적설하중 대비 Snow melting(코어)'] },
    { h: '개선방안', pts: ['BIM 자동설계·제작', '단열 Sandwich Panel'] }
  ],
  msg: '필요한 곳만 두껍게 — 응력 따라 깎은 변단면을 공장에서 찍어 현장에서 조립',
  mnemo: 'PEB = 변·공·볼 (변단면·공장생산·볼트조립) / 구성 = M·S·B·S (Main·Secondary·Bracing·Sheeting)',
  rel: ['Space Frame', 'Lift up 공법', 'Anchor Bolt 시공', '고력볼트', 'Sandwich Panel'],
  det: { secs: [
    { h: '정의', def: 'Computer Program을 통해 [[H자 형상 단면]]의 두께와 폭에서 불필요한 부분을 가늘게 하여 건물의 물리적 치수와 하중조건에 필요한 응력에 대응하도록 설계·제작한 [[Tapered Member(변단면)]] 철골 시스템으로, 부재를 [[Module]]로 세분화하여 각 지점의 [[모멘트·축력]] 크기에 따라 부재 크기 및 두께를 결정하는 경제적 구조이다.' },
    { h: '부재의 Moment Diagram 및 시공 Process', fig: 'MAIN', flow: ['부재 내 휨M 분석', '불필요 단면 삭제', '최적 단면 설계', '공장 자동용접 제작', 'Anchor Bolt 설치', 'Main frame 세우기', 'Purlin·Girt·Bracing', 'Roof·Wall Panel'] },
    { h: 'PEB 시스템의 특성', tbl: { head: ['구분', '관련 내용'], rows: [['다양한 공간 활용', 'Span과 Bay 간격 조절 → 다양한 대형 공간'], ['공간의 모듈화', '적절히 배치된 내부 기둥에 의한 모듈화 공간'], ['Flange Brace 사용', 'Main frame 허용강도 증가 → 단면 축소'], ['부재 구성', 'Main(Tapered Frame) · Secondary(Purlin·Girt) · Bracing · Sheeting']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['Anchor Bolt', '위치·높이 정밀 시공(Template), 허용오차 관리', 'KCS 14 31 (수치 확인 필요)'], ['고력볼트', '조임 순서·규정 토크값 이상 관리, 토크관리법/너트회전법 검사', 'KCS 14 31 25 / 코어 p079'], ['세우기 정밀도', '기둥 수직도·Frame 정렬, 세우기 직후 가새 고정', 'KCS 14 31 (수치 확인 필요)'], ['지붕 하중', '적설·풍하중 검토, 태양광 등 추가 하중 반영', 'KDS 41 12 00']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] Anchor Bolt 위치·Level 정밀 시공, 기초 Con\'c 강도 확인', '[전] 부재 반입 순서·야적 계획(변단면 부재 변형 방지)', '[중] 기둥 세운 후 즉시 가새와 Purlin 설치 → 구조적 안정성 확보(코어)', '[중] 고장력 볼트 조임 관리 철저 → 규정 토크값 이상 관리(코어)', '[중] Flange Brace·Bracing 누락 금지(횡좌굴 방지)', '[후] 지붕 Panel 겹침부·관통부 Sealing → 누수·결로 방지', '[후] 겨울철 적설하중 대비 Snow melting 설치(코어)'] },
    { h: '개선방안', ul: ['BIM 자동설계·제작 연계(설계-제작 일원화)', '고단열 Sandwich Panel·이중 지붕으로 결로 방지', '적설·풍하중 증가 지역 Purlin 간격·단면 강화', '태양광 지붕 하중 사전 반영'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p079(문제178: 정의·Moment Diagram·특성(Flange Brace)·시공 시 유의사항); 마법지 p013 대공간 구조형식 PEB / 일반 PEB 부재 구성'
},
149: {
  title: 'Wind Tunnel Test(풍동시험)',
  cat: '초고층·커튼월',
  key: ['축소모형', '경계층 풍동', '풍력시험(Force Balance)', '풍압시험(Wind Pressure)', '풍환경시험', '설계풍압', '주변 지형·건물 재현', '설계 단계'],
  www: { what: '건물과 주변 지형·건물을 재현한 [[축소모형]]을 [[경계층 풍동]]에 설치해 풍력·풍압·풍환경을 측정하는 [[설계 단계]] 시험', why: '구조 풍하중·C/W [[설계풍압]] 산정과 보행자 빌딩풍 피해 예방', how: '모형 제작(주변 포함) → 경계층 풍속분포 재현 → Turntable 풍향별 측정 → [[풍력시험(Force Balance)]]·[[풍압시험(Wind Pressure)]]·[[풍환경시험]] → 설계 반영' },
  tag: '시험·설계·기준',
  def: '건물과 [[주변 지형·건물]]을 재현한 [[축소모형]]을 [[경계층 풍동]]에 설치해 풍향별 [[풍력·풍압·풍환경]]을 측정하고, 구조 풍하중과 커튼월 [[설계풍압]]을 결정하는 설계 단계 시험',
  wwh: ['축소모형 풍동', '풍하중·설계풍압', '풍력·풍압·풍환경'],
  figT: '풍동시험의 원리 및 시험 종류',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="60" width="410" height="150" class="bx"/>' +
    '<line x1="20" y1="200" x2="430" y2="200" class="ln"/>' +
    '<circle cx="50" cy="130" r="26" class="bx3"/>' +
    '<line x1="50" y1="106" x2="50" y2="154" class="ln"/>' +
    '<line x1="28" y1="130" x2="72" y2="130" class="ln"/>' +
    '<path d="M110,200 L118,90 L126,200 Z" class="bx2"/>' +
    '<path d="M140,200 L148,90 L156,200 Z" class="bx2"/>' +
    '<rect x="170" y="192" width="8" height="8" class="bx3"/><rect x="185" y="192" width="8" height="8" class="bx3"/><rect x="200" y="192" width="8" height="8" class="bx3"/><rect x="215" y="192" width="8" height="8" class="bx3"/><rect x="230" y="192" width="8" height="8" class="bx3"/><rect x="245" y="192" width="8" height="8" class="bx3"/>' +
    '<ellipse cx="330" cy="200" rx="55" ry="8" class="bx2"/>' +
    '<rect x="290" y="175" width="14" height="25" class="bx3"/>' +
    '<rect x="352" y="168" width="14" height="32" class="bx3"/>' +
    '<rect x="372" y="182" width="12" height="18" class="bx3"/>' +
    '<rect x="322" y="120" width="16" height="80" class="conc"/>' +
    '<line x1="80" y1="100" x2="105" y2="100" class="ar"/>' +
    '<line x1="80" y1="160" x2="105" y2="160" class="ar"/>' +
    '<line x1="260" y1="140" x2="300" y2="140" class="ar"/>' +
    '<line x1="330" y1="208" x2="330" y2="240" class="ln2"/>' +
    '<rect x="300" y="240" width="60" height="20" class="bx2"/>' +
    '<text x="330" y="254" text-anchor="middle" class="s">계측장치</text>' +
    '<line x1="50" y1="106" x2="40" y2="44" class="ld"/><circle cx="40" cy="44" r="2" class="dotf"/><text x="44" y="48" class="s">송풍기(Fan)</text>' +
    '<line x1="148" y1="100" x2="140" y2="44" class="ld"/><circle cx="140" cy="44" r="2" class="dotf"/><text x="144" y="48" class="s">Spire(경계층)</text>' +
    '<line x1="200" y1="195" x2="240" y2="74" class="ld"/><circle cx="240" cy="74" r="2" class="dotf"/><text x="244" y="78" class="s">Roughness Block</text>' +
    '<line x1="330" y1="124" x2="300" y2="96" class="ld"/><circle cx="300" cy="96" r="2" class="dotf"/><text x="296" y="100" text-anchor="end" class="r">축소모형 약 1/500</text>' +
    '<line x1="380" y1="200" x2="380" y2="230" class="ld"/><circle cx="380" cy="230" r="2" class="dotf"/><text x="384" y="234" class="s">Turntable</text>' +
    '<line x1="290" y1="182" x2="226" y2="240" class="ld"/><circle cx="226" cy="240" r="2" class="dotf"/><text x="222" y="244" text-anchor="end" class="s">주변건물·지형 재현</text>' +
    '<rect x="20" y="296" width="92" height="22" class="bx2"/><text x="66" y="311" text-anchor="middle" class="s">송풍기</text><line x1="113" y1="307" x2="125" y2="307" class="ar"/><rect x="126" y="296" width="92" height="22" class="bx2"/><text x="172" y="311" text-anchor="middle" class="s">경계층 형성</text><line x1="219" y1="307" x2="231" y2="307" class="ar"/><rect x="232" y="296" width="92" height="22" class="bx2"/><text x="278" y="311" text-anchor="middle" class="s">모형 설치</text><line x1="325" y1="307" x2="337" y2="307" class="ar"/><rect x="338" y="296" width="92" height="22" class="bx2"/><text x="384" y="311" text-anchor="middle" class="s">풍압·풍력 계측</text>' +
    '<text x="450" y="22" class="b">[경계층 풍속분포]</text>' +
    '<line x1="460" y1="140" x2="460" y2="30" class="ar"/>' +
    '<line x1="460" y1="140" x2="600" y2="140" class="ar"/>' +
    '<path d="M462,140 C540,132 562,90 572,34" class="ln"/>' +
    '<text x="464" y="42" class="s">높이 z</text>' +
    '<text x="600" y="154" text-anchor="end" class="s">풍속</text>' +
    '<text x="500" y="100" class="r">U ∝ z<tspan dy="-6" class="s">α</tspan></text>' +
    '<line x1="330" y1="150" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 풍력(HFFB)·구조 풍하중</text><text x="446" y="202" class="k3">③ 풍압 → C/W 설계풍압</text><text x="446" y="222" class="k3">③ 풍환경 → 보행자 빌딩풍</text><line x1="297" y1="180" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 주변 지형·건물 재현</text><line x1="215" y1="195" x2="440" y2="262" class="ld"/><circle cx="440" cy="262" r="2" class="dotf"/><text x="446" y="266" class="k4">④ 경계층·노풍도 일치</text><text x="446" y="286" class="k4">④ 공진·와류진동 검토</text><text x="446" y="310" class="k5">⑤ CFD 해석 병행</text><text x="446" y="330" class="k5">⑤ TMD·형상 최적화</text>' +
    '</svg>',
  subs: [
    { h: '시험 종류', pts: ['풍력(HFFB)·구조 풍하중', '풍압 → C/W 설계풍압', '풍환경 → 보행자 빌딩풍', '공탄성시험(Aeroelastic) — 진동 응답'] },
    { h: '시험 시 유의사항', pts: ['주변 지형·건물 재현', '경계층·노풍도 일치', '공진·와류진동 검토', '반경 약 {{1km}} 주변을 약 {{1/500}} 축척, 재현기간 {{10~100년}} 풍속(코어)'] },
    { h: '개선방안', pts: ['CFD 해석 병행', 'TMD·형상 최적화'] }
  ],
  msg: '설계 단계에서 바람을 미리 맞혀 본다 — 풍하중·설계풍압·빌딩풍을 한 번에',
  mnemo: '풍동 = 력·압·환 (풍력·풍압·풍환경) → 설계 시 / 실물대 = 시공 전 / Field = 시공 시',
  rel: ['Mock up test', 'Field test', '설계풍압', '빌딩풍', 'TMD'],
  det: { secs: [
    { h: '정의', def: '커튼월 부재 설계 시 [[내풍 안전성]] 설계를 위해 [[축소모형]]으로 진행하는 시뮬레이션 시험으로, 주변 반경 약 {{1km}}의 건물과 지형을 약 {{1/500}}로 제작하여 [[경계층 풍동]]에서 과거 {{10~100년}} 풍속으로 [[풍력·풍압·풍환경]]을 측정한다.' },
    { h: '시험 원리 및 Process', fig: 'MAIN', flow: ['축소모형 제작(주변 포함)', '경계층 풍속분포 재현', '360° Turntable 회전·송풍', 'Data 측정', 'Data 분석 → 설계 반영'] },
    { h: '실험 종류 및 측정항목', tbl: { head: ['종류', '측정 항목', '활용'], rows: [['풍력실험(Force Balance)', '풍력계수·밑면 전도모멘트', '구조설계 풍하중(코어)'], ['풍압실험(Wind Pressure)', '외장면 국부 풍압(Pressure tap)', '외장재·마감재(C/W) 설계풍압(코어)'], ['풍환경실험(Wind Environmental)', '저층부·모서리 바람의 방향·속도', '보행자 빌딩풍 대책(코어)'], ['공탄성실험(Aeroelastic)', '진동 응답·와류진동', 'TMD 등 제진 검토']] } },
    { h: '시험 관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['모형 범위·축척', '반경 약 {{1km}}, 약 {{1/500}}', '코어 p080'], ['시험 풍속', '과거 {{10~100년}} 풍속(재현기간)', '코어 p080 / KDS 41 12 00'], ['경계층', '지표면 조도(노풍도)에 맞춘 풍속 Profile U ∝ z^α', 'KDS 41 12 00 노풍도'], ['풍향', '360° Turntable 풍향별 측정(각도 간격 확인 필요)', '시험기관 기준'], ['결과 적용', '풍동 결과와 KDS 풍하중 비교 → 설계풍압 결정', 'KDS 41 12 00']] } },
    { h: '실험 시 유의사항 (시험 전·중·후)', ul: ['[전] 실제 건물의 크기·형태를 반영한 축소모형 사용(코어)', '[전] 주변 건물·지형 재현 범위 결정, 향후 인접 개발계획 반영', '[중] 지역 지형·거칠기를 고려한 풍압계수 적용(코어)', '[중] 풍향별 측정, 와류진동·공진 검토', '[후] 시험 풍압을 커튼월 부재 설계에 환산 적용(코어)', '[후] Mock-up test 시험압력(설계풍압) 결정에 반영'] },
    { h: '개선방안', ul: ['CFD 해석 병행으로 설계 초기 형상 검토', '형상 최적화(모서리 Chamfer·Setback)로 풍하중 저감', 'TMD·TLD 제진장치 연계 설계', '풍환경 대책(Canopy·식재·방풍벽)'] }
  ] },
  src: '근거: 마법지 p014 C.W 시험 — 풍동시험(설계 시): 풍력(Force Balance)·풍압(Wind Pressure)·풍환경(Wind Environmental); 합격답안 8.C.W공사 p6 단계별 성능시험(설계=풍동, 모형제작·풍압력 검토) ; 디테일용어 101-200 코어 p080(문제179: 반경 약 1km·약 1/500 축소모형, 10~100년 풍속, 360° Turntable, 시험종류)'
},
150: {
  title: 'Mock up test(실물대 시험)',
  cat: '초고층·커튼월',
  key: ['실물대 시험체', '압력상자(Chamber)', '예비시험', '기밀시험', '정압수밀', '동압수밀', '구조성능', '층간변위시험', '시공 전'],
  www: { what: '커튼월 [[실물대 시험체]]를 시험소 [[압력상자(Chamber)]]에 설치해 기밀·수밀·구조·층간변위 성능을 확인하는 [[시공 전]] 시험', why: '설계 성능 미달·누수 하자를 본 시공 전에 발견·개선', how: '[[예비시험]] → [[기밀시험]] → [[정압수밀]] → [[동압수밀]] → [[구조성능]] → [[층간변위시험]] → (2차 수밀·기밀) → 보고·개선' },
  tag: '시험·성능·순서',
  def: '커튼월의 [[실물대 시험체]]를 시험소 [[압력상자(Chamber)]]에 설치하고 [[예비·기밀·정압수밀·동압수밀·구조성능·층간변위]] 시험을 순서대로 실시해 설계 성능을 [[시공 전]]에 검증하는 시험',
  wwh: ['실물대 성능시험', '시공 전 하자 차단', '예·기·정·동·구·층'],
  figT: 'Mock up test 장치 구성 및 시험순서',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="280" width="410" height="10" class="soil"/>' +
    '<rect x="200" y="40" width="120" height="230" class="bx3"/>' +
    '<line x1="200" y1="30" x2="200" y2="280" class="ln"/>' +
    '<rect x="176" y="34" width="24" height="12" class="conc"/>' +
    '<rect x="176" y="149" width="24" height="12" class="conc"/>' +
    '<rect x="176" y="264" width="24" height="12" class="conc"/>' +
    '<line x1="130" y1="40" x2="130" y2="270" class="ln2"/>' +
    '<line x1="132" y1="60" x2="196" y2="66" class="ln2 dash"/><line x1="132" y1="90" x2="196" y2="96" class="ln2 dash"/><line x1="132" y1="120" x2="196" y2="126" class="ln2 dash"/><line x1="132" y1="150" x2="196" y2="156" class="ln2 dash"/><line x1="132" y1="180" x2="196" y2="186" class="ln2 dash"/><line x1="132" y1="210" x2="196" y2="216" class="ln2 dash"/><line x1="132" y1="240" x2="196" y2="246" class="ln2 dash"/>' +
    '<ellipse cx="60" cy="160" rx="6" ry="24" class="bx2"/>' +
    '<circle cx="60" cy="160" r="4" class="bx"/>' +
    '<line x1="150" y1="168" x2="172" y2="168" class="ar" style="marker-start:url(#arr)"/>' +
    '<rect x="204" y="90" width="10" height="10" class="bx2"/>' +
    '<rect x="204" y="205" width="10" height="10" class="bx2"/>' +
    '<circle cx="370" cy="240" r="16" class="bx2"/>' +
    '<line x1="320" y1="240" x2="354" y2="240" class="ln"/>' +
    '<line x1="130" y1="60" x2="24" y2="40" class="ld"/><circle cx="24" cy="40" r="2" class="dotf"/><text x="28" y="44" class="r">살수 3.4L/㎡·min</text>' +
    '<line x1="60" y1="184" x2="40" y2="210" class="ld"/><circle cx="40" cy="210" r="2" class="dotf"/><text x="44" y="214" class="s">동압(Propeller)</text>' +
    '<line x1="300" y1="60" x2="330" y2="30" class="ld"/><circle cx="330" cy="30" r="2" class="dotf"/><text x="334" y="34" class="s">압력상자(Chamber)</text>' +
    '<line x1="209" y1="95" x2="250" y2="98" class="ld"/><circle cx="250" cy="98" r="2" class="dotf"/><text x="254" y="102" class="s">LVDT 변위계</text>' +
    '<line x1="370" y1="224" x2="370" y2="206" class="ld"/><circle cx="370" cy="206" r="2" class="dotf"/><text x="374" y="210" class="s">송풍기</text>' +
    '<line x1="161" y1="172" x2="130" y2="300" class="ld"/><circle cx="130" cy="300" r="2" class="dotf"/><text x="126" y="304" text-anchor="end" class="s">층간변위 가력</text>' +
    '<text x="450" y="26" class="b">[시험 순서]</text>' +
    '<text x="450" y="46" class="s">1 예비시험(가압 점검)</text>' +
    '<text x="450" y="64" class="s">2 기밀시험(75Pa 누기량)</text>' +
    '<text x="450" y="82" class="s">3 정압수밀(설계풍압 20%)</text>' +
    '<text x="450" y="100" class="s">4 동압수밀(Propeller)</text>' +
    '<text x="450" y="118" class="s">5 구조성능(처짐 L/175)</text>' +
    '<text x="450" y="136" class="s">6 층간변위 → 2차 수밀·기밀</text>' +
    '<text x="450" y="158" class="r">예비군은 기밀하게 정동구층</text>' +
    '<line x1="200" y1="200" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 3 Span·2 Story 시험체</text><text x="446" y="202" class="k3">③ 예비·기밀·수밀·구조·층간</text><line x1="260" y1="180" x2="440" y2="218" class="ld"/><circle cx="440" cy="218" r="2" class="dotf"/><text x="446" y="222" class="k3">③ 설계풍압 기준 가압</text><line x1="200" y1="100" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 실제 자재·공법 동일</text><text x="446" y="266" class="k4">④ 불합격 → 개선 후 재시험</text><text x="446" y="286" class="k4">④ 시험 입회·기록 보관</text><text x="446" y="310" class="k5">⑤ 시공 전 조기 실시</text><text x="446" y="330" class="k5">⑤ Field test 연계 검증</text>' +
    '</svg>',
  subs: [
    { h: '시험 항목·기준', pts: ['3 Span·2 Story 시험체', '예비·기밀·수밀·구조·층간', '설계풍압 기준 가압', '수밀 살수량 {{3.4L/㎡·min}}', '기밀 압력차 {{75Pa}}'] },
    { h: '시험 시 유의사항', pts: ['실제 자재·공법 동일', '불합격 → 개선 후 재시험', '시험 입회·기록 보관'] },
    { h: '개선방안', pts: ['시공 전 조기 실시', 'Field test 연계 검증'] }
  ],
  msg: '시공 전 실물로 미리 새 본다 — 순서대로, 실제 자재로',
  mnemo: '예비군은 기밀하게 정동구층에서 시험한다 (예비·기밀·정압수밀·동압수밀·구조·층간변위)',
  rel: ['Wind Tunnel Test', 'Field test', '층간변위', 'Open joint', '설계풍압'],
  det: { secs: [
    { h: '정의', def: '[[풍동시험]]을 근거로 [[실물모형]]을 만들어 현장이 아닌 실험실(시험소) [[압력상자(Chamber)]]에서 최악의 외기조건으로 시험하는 것으로, [[예비·기밀·정압수밀·동압수밀·구조성능·층간변위]] 시험을 순서대로 실시하여 커튼월의 [[하자방지]]를 주된 목적으로 하는 시공 전 성능시험.' },
    { h: '장치 구성 및 시험 순서', fig: 'MAIN', flow: ['예비시험', '기밀시험', '정압수밀시험', '동압수밀시험', '구조성능시험', '층간변위시험', '2차 기밀·수밀'] },
    { h: '실험대상 및 항목 선정', tbl: { head: ['구분', '내용'], rows: [['시험체 크기', '{{3 Span × 2 Story}}를 시험소에 실물 설치(코어)'], ['시험대상 선정', '일반적으로 대상건물 대표 부분(기준층) / 풍압력이 가장 크게 작용하는 부분(모서리) / 구조적으로 취약한 부분(모서리)'], ['시험항목 선정', '기본성능시험·복합성능시험 — 건물 규모, 커튼월 방식에 따라 선정']] } },
    { h: '시험 항목·기준', tbl: { head: ['시험', '목적·방법', '기준(관례·확인 필요)'], rows: [['예비시험', '예상 문제점 사전파악·대비, 설계풍압 일부 가압', '—'], ['기밀시험', '건물의 풍하중 대응 성능, 압력차에서 누기량 측정', '{{75Pa}} 누기량 기준(ASTM E283 관례)'], ['정압수밀시험', '누수 하자 설계·시공 목적, 정압 가압 + 살수', '살수 {{3.4L/㎡·min}}(ASTM E331 관례), 압력 설계풍압 20% 확인 필요'], ['동압수밀시험', '설계 오류 값 확인·수정, Propeller 맥동압 + 살수', 'AAMA 501.1 관례'], ['구조성능시험', '설계풍압 가압 시 처짐·잔류변형', '처짐 L/175 등(ASTM E330·AAMA 관례)'], ['층간변위시험', '설계 층간변위 강제 가력 후 기밀·수밀 재시험', 'KDS 41 17 00 층간변위 연계']] } },
    { h: '시험 시 유의사항 (시험 전·중·후)', ul: ['[전] 시험체는 실제 자재·공법·시공팀과 동일하게 제작', '[전] 시험 계획서(순서·압력·판정기준) 감리 승인', '[중] 시험 순서 준수(예비→기밀→정압→동압→구조→층간변위), 입회·기록', '[중] 누수·변형 발생 시 위치·원인 기록 → 개선 후 재시험', '[후] 개선 내용을 Shop drawing·시공 상세에 반영', '[후] 본 시공 초기 Field test로 현장 성능 재확인'] },
    { h: 'C/W 시험 종류별 비교', tbl: { head: ['구분', 'Wind Tunnel Test', 'Mock-up Test', 'Field Test'], rows: [['시기', '계획·설계', '시공 전', '시공 중·후'], ['목적', '설계 반영', '하자 방지', '하자 확인'], ['장소', '풍동 실험실(축소모형)', '시험소 Chamber(실물대)', '현장 실제 부위']] }, ul2: ['코어 답안은 Mock-up을 시공 중, Field를 시공 후로 구분 — 마법지는 시공 전/시공 시로 정리'] }
  ] },
  src: '근거: 마법지 p014 실물대시험(시공 전) 예비·기밀·정압수밀·동압수밀·구조성능·층간변위; 합격답안 8.C.W공사 p6 시공전 단계 실물대 시험(층간변위·구조검토) / 75Pa·3.4L/㎡·min·L/175는 ASTM E283·E331·AAMA 관례, 정압수밀 설계풍압 20%는 확인 필요; 디테일용어 101-200 코어 p081(문제180: 시험체 3 Span 2 Story, 대상선정(일반·풍압최대·구조취약부), 시험항목 목적, 풍동/Mock-up/Field 비교)'
},
151: {
  title: 'Curtain Wall의 Field test',
  cat: '초고층·커튼월',
  key: ['현장 시험', '시공 중', '수밀시험', '기밀시험', 'AAMA 501.2', 'ASTM E1105', '노즐 살수', '초기 설치분'],
  www: { what: '커튼월 [[시공 중]] 현장에 설치된 실제 부위를 대상으로 [[수밀시험]]·[[기밀시험]]을 실시하는 [[현장 시험]]', why: '시공 품질(Sealing·접합부) 결함을 [[초기 설치분]]에서 조기 발견해 전체 누수 하자 예방', how: '시험 부위 선정 → Sealant 양생 확인 → [[노즐 살수]]([[AAMA 501.2]]) 또는 Chamber 가압([[ASTM E1105]]) → 실내측 누수 관찰 → 보완·재시험' },
  tag: '시험·현장·품질',
  def: '커튼월 [[시공 중]] 현장에 설치된 실제 부위를 대상으로 [[노즐 살수(AAMA 501.2)]]·[[Chamber 가압(ASTM E1105)]] 등으로 [[수밀·기밀]] 성능을 확인하는 시험으로, [[초기 설치분]]에서 실시해 결함을 조기 보완',
  wwh: ['시공 중 현장시험', '누수 조기 발견', '노즐 살수·가압'],
  figT: 'Field test(현장 수밀시험) 방법 및 관리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="220" y1="40" x2="220" y2="290" class="ln"/>' +
    '<rect x="214" y="40" width="6" height="250" class="bx2"/>' +
    '<rect x="220" y="60" width="210" height="12" class="conc"/>' +
    '<rect x="220" y="200" width="210" height="12" class="conc"/>' +
    '<line x1="212" y1="130" x2="226" y2="130" class="rd"/>' +
    '<rect x="226" y="76" width="120" height="120" fill="none" class="ln2 dash"/>' +
    '<rect x="140" y="124" width="12" height="12" class="bx3"/>' +
    '<line x1="60" y1="140" x2="140" y2="132" class="ln"/>' +
    '<line x1="152" y1="128" x2="210" y2="118" class="ln2 dash"/>' +
    '<line x1="152" y1="130" x2="210" y2="130" class="ln2 dash"/>' +
    '<line x1="152" y1="132" x2="210" y2="142" class="ln2 dash"/>' +
    '<circle cx="300" cy="160" r="6" class="bx"/>' +
    '<line x1="300" y1="166" x2="300" y2="186" class="ln"/>' +
    '<line x1="300" y1="186" x2="292" y2="198" class="ln"/>' +
    '<line x1="300" y1="186" x2="308" y2="198" class="ln"/>' +
    '<line x1="290" y1="172" x2="310" y2="172" class="ln"/>' +
    '<line x1="150" y1="124" x2="60" y2="100" class="ld"/><circle cx="60" cy="100" r="2" class="dotf"/><text x="64" y="104" class="s">B-25 노즐</text>' +
    '<line x1="100" y1="136" x2="40" y2="170" class="ld"/><circle cx="40" cy="170" r="2" class="dotf"/><text x="44" y="174" class="r">수압 30~35psi</text>' +
    '<line x1="190" y1="122" x2="100" y2="56" class="ld"/><circle cx="100" cy="56" r="2" class="dotf"/><text x="104" y="60" class="r">1.5m 구간 5분 살수</text>' +
    '<line x1="222" y1="130" x2="360" y2="120" class="ld"/><circle cx="360" cy="120" r="2" class="dotf"/><text x="364" y="124" class="s">Joint 부위</text>' +
    '<line x1="300" y1="166" x2="370" y2="160" class="ld"/><circle cx="370" cy="160" r="2" class="dotf"/><text x="374" y="164" class="s">누수 확인</text>' +
    '<line x1="346" y1="90" x2="370" y2="80" class="ld"/><circle cx="370" cy="80" r="2" class="dotf"/><text x="374" y="84" class="s">E1105 감압</text>' +
    '<line x1="214" y1="250" x2="150" y2="250" class="ld"/><circle cx="150" cy="250" r="2" class="dotf"/><text x="146" y="254" text-anchor="end" class="s">시공된 실제 C/W</text>' +
    '<text x="60" y="30" text-anchor="middle" class="b">(실외)</text>' +
    '<text x="400" y="30" text-anchor="middle" class="b">(실내)</text>' +
    '<rect x="20" y="306" width="92" height="22" class="bx2"/><text x="66" y="321" text-anchor="middle" class="s">부위 선정</text><line x1="113" y1="317" x2="125" y2="317" class="ar"/><rect x="126" y="306" width="92" height="22" class="bx2"/><text x="172" y="321" text-anchor="middle" class="s">Seal 양생</text><line x1="219" y1="317" x2="231" y2="317" class="ar"/><rect x="232" y="306" width="92" height="22" class="bx2"/><text x="278" y="321" text-anchor="middle" class="s">살수·가압</text><line x1="325" y1="317" x2="337" y2="317" class="ar"/><rect x="338" y="306" width="92" height="22" class="bx2"/><text x="384" y="321" text-anchor="middle" class="s">누수 관찰</text>' +
    '<text x="450" y="26" class="b">[현장 시험 기준]</text>' +
    '<text x="450" y="46" class="s">AAMA 501.2: 노즐 살수(수밀)</text>' +
    '<text x="450" y="64" class="s">ASTM E1105: Chamber 가압+살수</text>' +
    '<text x="450" y="82" class="s">ASTM E783: 현장 기밀(누기량)</text>' +
    '<text x="450" y="100" class="s">시기: 초기 설치분·중간·완료</text>' +
    '<text x="450" y="118" class="s">판정: 실내측 누수 없을 것</text>' +
    '<text x="450" y="142" class="r">단계별 시험 = 하자 조기 차단</text>' +
    '<line x1="222" y1="220" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 시공 중 실제 부위 시험</text><text x="446" y="202" class="k3">③ 수밀·기밀 성능 확인</text><text x="446" y="222" class="k3">③ 초기 설치분 조기 실시</text><line x1="222" y1="135" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ Sealant 양생 후 실시</text><line x1="300" y1="215" x2="440" y2="262" class="ld"/><circle cx="440" cy="262" r="2" class="dotf"/><text x="446" y="266" class="k4">④ 내부 마감 전 시험</text><text x="446" y="286" class="k4">④ 누수 부위 원인 추적</text><text x="446" y="310" class="k5">⑤ 결과 Feedback → 전체 보완</text><text x="446" y="330" class="k5">⑤ 정기 유지관리 시험</text>' +
    '</svg>',
  subs: [
    { h: '시험 방법·기준', pts: ['시공 중 실제 부위 시험', '수밀·기밀 성능 확인', '초기 설치분 조기 실시', '최종 확인: 공정률 {{90%}} 이상 시점(코어)'] },
    { h: '시험 시 유의사항', pts: ['Sealant 양생 후 실시', '내부 마감 전 시험', '누수 부위 원인 추적', '시험 부위 위치·횟수 사전 협의(감리 입회)'] },
    { h: '개선방안', pts: ['결과 Feedback → 전체 보완', '정기 유지관리 시험'] }
  ],
  msg: '실험실 합격이 현장 합격은 아니다 — 시공 초기 실제 부위로 다시 확인',
  mnemo: '시험 3단계 = 설계 풍동 → 시공 전 Mock-up → 시공 중 Field(기·수)',
  rel: ['Mock up test', 'Wind Tunnel Test', 'Closed joint', 'Sealant', '커튼월 누수'],
  det: { secs: [
    { h: '정의', def: '커튼월의 [[Field test]]란 현장 여건을 감안해 [[수밀성]]·[[기밀성]]을 현장에서 직접 확인하는 Test로, 설계 및 시공상의 하자가 없는지 최종적으로 검증하며 [[초기 설치분]]에서 조기 실시하고 공정률 {{90% 이상}} 진행 시 실제 성능을 최종 확인한다.' },
    { h: 'Field Test Process', fig: 'MAIN', flow: ['시험 부위 선정(감리 협의)', '내부 Chamber 설치', '기밀·수밀 시험', 'Data 측정 및 분석', '보완·재시험'] },
    { h: '시험항목 및 시험방법', tbl: { head: ['구분', '방법', '기준'], rows: [['수밀성능(노즐)', '노즐 살수 후 반대편(실내) 누수 확인', 'AAMA 501.2'], ['수밀성능(가압)', '실내 Chamber 감압 + 외부 균일 살수', 'ASTM E1105'], ['기밀성능', '압력 가압 후 공기 누출량 측정', 'ASTM E783']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준', '근거'], rows: [['노즐 수압', '{{30~35psi}}(약 210~240kPa), B-25 노즐', 'AAMA 501.2 (관례·확인 필요)'], ['살수 구간·시간', '{{1.5m}} 구간당 {{5분}}', 'AAMA 501.2 (관례·확인 필요)'], ['가압 수밀 시험압력', '실험실 시험압력의 약 2/3', 'AAMA 503 관례(확인 필요)'], ['판정', '실내측 누수 없을 것(판정 범위 사전 협의)', '공사시방서'], ['시기', '초기 설치분 / 공정률 {{90% 이상}} 최종 확인', '코어 p082']] } },
    { h: '시험 시 유의사항 (시험 전·중·후)', ul: ['[전] 시험 위치·횟수·판정기준 사전 협의(감리 입회)', '[전] Sealant 충분히 양생 후 실시, 내부 마감 전 시험', '[중] 시험 시 Chamber는 완전히 밀폐 구조 유지(코어)', '[중] 시험값에 안전계수 반영(코어)', '[중] 시험은 외벽에 실시하며 주변 진동·충격 금지(코어)', '[후] 누수 부위 원인 추적 → 전체 동일 부위 보완 → 재시험', '[후] 결과 기록·보관, 유지관리 정기 점검과 연계'] },
    { h: '개선방안', ul: ['초기 설치분 시험 결과 Feedback → 전체 시공 상세 보완', '적외선 열화상·Blower door 기밀 측정 병행', 'Unit 공장 수밀검사 강화로 현장 부담 경감'] }
  ] },
  src: '근거: 마법지 p014 현장시험(Field Test) 시공 시 기밀·수밀시험; 합격답안 8.C.W공사 p6 시공단계 Field Test(현장시험, 수밀·기밀성 확인) ; 디테일용어 101-200 코어 p082(문제181: 내부 Chamber 설치→기밀·수밀시험→Data 측정, 공정률 90% 이상, 구조 안정 유지·안전계수 반영·진동충격 금지) / AAMA 501.2 노즐 30~35psi·1.5m 5분은 AAMA 관례(확인 필요)'
},
152: {
  title: 'Curtain wall의 Fastener 접합방식',
  cat: '초고층·커튼월',
  key: ['Fastener', 'Embedded Plate', 'Set Anchor', 'Sliding 방식', 'Locking 방식', 'Fixed 방식', '층간변위 흡수', '오차 흡수', '하중 전달'],
  www: { what: '커튼월 Unit·Panel을 구조체 Anchor에 연결하는 [[Fastener]]의 접합방식으로 [[Sliding 방식]]·[[Locking 방식]]·[[Fixed 방식]]', why: '[[하중 전달]]·[[층간변위 흡수]]·시공 [[오차 흡수]]로 Panel 파손·탈락·누수 방지', how: '[[Embedded Plate]]·[[Set Anchor]] 설치 → 1차 Fastener 고정 → 3차원 위치 조정(Slot·Shim) → 본고정·용접 → 방청 처리' },
  tag: '부재·접합·기능',
  def: '커튼월 [[Unit·Panel]]을 구조체 [[Anchor(Embedded Plate)]]에 연결하는 [[Fastener]]의 접합방식으로, [[층간변위·열변형]]을 수평 이동 또는 회전으로 흡수하는 [[Sliding·Locking·Fixed]] 방식이 있으며 하중전달·변형흡수·오차흡수 기능을 갖는다',
  wwh: ['C/W 연결철물', '하중·변형·오차 흡수', 'Sliding·Locking·Fixed'],
  figT: 'Fastener 접합방식의 변위 흡수원리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="260" y="60" width="170" height="16" class="conc"/>' +
    '<rect x="260" y="230" width="170" height="16" class="conc"/>' +
    '<rect x="200" y="70" width="30" height="170" class="bx2"/>' +
    '<rect x="252" y="60" width="8" height="16" class="bx3"/>' +
    '<rect x="252" y="230" width="8" height="16" class="bx3"/>' +
    '<polyline points="230,78 252,78 252,62" fill="none" class="ln"/>' +
    '<polyline points="230,224 262,224 262,230" fill="none" class="ln"/>' +
    '<rect x="240" y="221" width="12" height="5" class="rf"/>' +
    '<line x1="300" y1="262" x2="400" y2="262" class="ar" style="marker-start:url(#arr)"/>' +
    '<line x1="250" y1="70" x2="300" y2="36" class="ld"/><circle cx="300" cy="36" r="2" class="dotf"/><text x="304" y="40" class="s">상부 Fixed(하중지지)</text>' +
    '<line x1="256" y1="68" x2="300" y2="100" class="ld"/><circle cx="300" cy="100" r="2" class="dotf"/><text x="304" y="104" class="s">Embedded Plate</text>' +
    '<line x1="252" y1="72" x2="300" y2="130" class="ld"/><circle cx="300" cy="130" r="2" class="dotf"/><text x="304" y="134" class="s">Set Anchor·Channel</text>' +
    '<line x1="240" y1="178" x2="300" y2="160" class="ld"/><circle cx="300" cy="160" r="2" class="dotf"/><text x="304" y="164" class="s">Shim·Slot 3방향 조정</text>' +
    '<line x1="246" y1="224" x2="300" y2="200" class="ld"/><circle cx="300" cy="200" r="2" class="dotf"/><text x="304" y="204" class="s">하부 Slot(Sliding)</text>' +
    '<line x1="215" y1="150" x2="120" y2="150" class="ld"/><circle cx="120" cy="150" r="2" class="dotf"/><text x="116" y="154" text-anchor="end" class="s">Unit·PC Panel</text>' +
    '<text x="300" y="284" class="r">층간변위 Δ 흡수</text>' +
    '<text x="450" y="26" class="b">[접합방식 3종]</text>' +
    '<rect x="456" y="44" width="40" height="40" class="bx2"/>' +
    '<rect x="466" y="44" width="40" height="40" fill="none" class="ln2 dash"/>' +
    '<line x1="460" y1="96" x2="500" y2="96" class="ar" style="marker-start:url(#arr)"/>' +
    '<text x="478" y="118" text-anchor="middle" class="s">Sliding</text>' +
    '<rect x="522" y="44" width="30" height="48" class="bx2"/>' +
    '<polygon points="527,44 557,47 552,95 522,92" class="ln2 dash"/>' +
    '<text x="540" y="118" text-anchor="middle" class="s">Locking</text>' +
    '<rect x="588" y="44" width="30" height="48" class="bx2"/>' +
    '<polygon points="584,92 592,92 588,100" class="rf"/>' +
    '<polygon points="614,92 622,92 618,100" class="rf"/>' +
    '<text x="604" y="118" text-anchor="middle" class="s">Fixed</text>' +
    '<text x="450" y="142" class="s">수평이동·회전으로 변위 흡수</text>' +
    '<text x="450" y="160" class="r">하중전달·변형흡수·오차흡수</text>' +
    '<line x1="252" y1="222" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="446" y="184" class="k3">③ Sliding: 수평 이동 흡수</text><text x="446" y="204" class="k3">③ Locking: 회전 추종</text><line x1="250" y1="74" x2="440" y2="220" class="ld"/><circle cx="440" cy="220" r="2" class="dotf"/><text x="446" y="224" class="k3">③ Fixed: Unit 자체 흡수</text><line x1="240" y1="170" x2="440" y2="244" class="ld"/><circle cx="440" cy="244" r="2" class="dotf"/><text x="446" y="248" class="k4">④ 3차원 오차흡수 조정</text><text x="446" y="268" class="k4">④ 용접부 방청·이종금속 절연</text><text x="446" y="288" class="k4">④ 볼트 풀림방지·마찰음</text><line x1="256" y1="66" x2="440" y2="308" class="ld"/><circle cx="440" cy="308" r="2" class="dotf"/><text x="446" y="312" class="k5">⑤ Cast-in Channel 선매립</text><text x="446" y="332" class="k5">⑤ Unit 공장조립·BIM</text>' +
    '</svg>',
  subs: [
    { h: '접합방식 종류', pts: ['Sliding: 수평 이동 흡수(횡長 Panel)', 'Locking: 회전 추종(종長 Panel)', 'Fixed: 상·하 고정, Unit 자체에서 변위 흡수(Al C/W)', '설치: Set Anchor·Embedded Plate·Channel System'] },
    { h: '시공 시 유의사항', pts: ['3차원 오차흡수 조정', '용접부 방청·이종금속 절연', '볼트 풀림방지·마찰음'] },
    { h: '개선방안', pts: ['Cast-in Channel 선매립', 'Unit 공장조립·BIM'] }
  ],
  msg: 'Fastener = 하중은 전하고 변위는 흘려보내는 관절',
  mnemo: '회의전달, 변형흡수, 오차흡수 / 방식 = S·L·F (Sliding·Locking·Fixed)',
  rel: ['층간변위', 'Embedded Plate', 'Unit wall', 'Stick wall', '이종금속 부식'],
  det: { secs: [
    { h: '정의', def: '[[Fastener]]는 커튼월 Unit을 구조체에 연결하는 부재로, 커튼월의 자중 및 풍하중에 대응할 수 있는 강도를 확보하고 [[층간변위]]를 흡수하는 연결철물이며, [[하중전달]]·[[변형흡수]]·[[오차흡수]] 기능을 갖고 [[Sliding]]·[[Locking]]·[[Fixed]] 방식으로 구분한다.' },
    { h: '설치 원리 및 Process', fig: 'MAIN', flow: ['Anchor 설치(Embedded Plate·Set Anchor·Channel)', '1차 Fastener 가고정', '3차원 위치 조정(Slot·Shim)', '본고정(볼트·용접)', '방청·절연 처리'] },
    { h: 'Fastener의 기능', tbl: { head: ['기능', '내용'], rows: [['하중전달', '커튼월 자중 지지, 지진력·풍압력에 저항'], ['변형흡수', '구조체 층간변위 흡수, 부재 열변형 흡수'], ['오차흡수', '구조체 시공오차·제작오차·설치오차 흡수']] } },
    { h: '접합방식 비교', fig: { svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg"><text x="105" y="16" text-anchor="middle" class="b">Sliding — 횡長 Panel</text><line x1="10" y1="32" x2="30" y2="32" class="ar"/><text x="36" y="36" class="r">Δ</text><rect x="30" y="44" width="100" height="10" class="conc"/><rect x="10" y="196" width="100" height="10" class="conc"/><rect x="20" y="96" width="80" height="92" class="bx2"/><rect x="28" y="70" width="26" height="8" fill="none" class="ln2"/><rect x="68" y="70" width="26" height="8" fill="none" class="ln2"/><line x1="48" y1="54" x2="48" y2="70" class="ln"/><line x1="88" y1="54" x2="88" y2="70" class="ln"/><line x1="41" y1="78" x2="41" y2="96" class="ln2"/><line x1="81" y1="78" x2="81" y2="96" class="ln2"/><circle cx="48" cy="74" r="3" class="rf"/><circle cx="88" cy="74" r="3" class="rf"/><circle cx="34" cy="192" r="3" class="rf"/><circle cx="86" cy="192" r="3" class="rf"/><line x1="94" y1="74" x2="120" y2="70" class="ld"/><circle cx="120" cy="70" r="2" class="dotf"/><text x="124" y="74" class="s">상부 장공(Slot)</text><line x1="60" y1="140" x2="120" y2="130" class="ld"/><circle cx="120" cy="130" r="2" class="dotf"/><text x="124" y="134" class="s">Panel 정위치</text><line x1="86" y1="192" x2="120" y2="180" class="ld"/><circle cx="120" cy="180" r="2" class="dotf"/><text x="124" y="184" class="s">하부 고정</text><text x="105" y="228" text-anchor="middle" class="s">Slot으로 수평 이동 흡수</text><text x="315" y="16" text-anchor="middle" class="b">Locking — 종長 Panel</text><line x1="220" y1="32" x2="240" y2="32" class="ar"/><text x="246" y="36" class="r">Δ</text><rect x="240" y="44" width="100" height="10" class="conc"/><rect x="220" y="196" width="100" height="10" class="conc"/><rect x="232" y="58" width="50" height="134" fill="none" class="ln2 dash"/><polygon points="248,58 298,60 282,192 232,190" class="bx2"/><circle cx="248" cy="58" r="3" class="rf"/><circle cx="298" cy="60" r="3" class="rf"/><circle cx="282" cy="192" r="3" class="rf"/><circle cx="232" cy="190" r="3" class="rf"/><line x1="298" y1="60" x2="330" y2="70" class="ld"/><circle cx="330" cy="70" r="2" class="dotf"/><text x="334" y="74" class="s">상부 Pin 회전</text><line x1="272" y1="130" x2="330" y2="126" class="ld"/><circle cx="330" cy="126" r="2" class="dotf"/><text x="334" y="130" class="s">Panel 회전 추종</text><line x1="282" y1="192" x2="330" y2="180" class="ld"/><circle cx="330" cy="180" r="2" class="dotf"/><text x="334" y="184" class="s">하부 Pin</text><text x="315" y="228" text-anchor="middle" class="s">회전(Rocking)으로 추종</text><text x="530" y="16" text-anchor="middle" class="b">Fixed — Unit 자체 흡수</text><line x1="430" y1="32" x2="450" y2="32" class="ar"/><text x="456" y="36" class="r">Δ</text><rect x="450" y="44" width="100" height="10" class="conc"/><rect x="430" y="196" width="100" height="10" class="conc"/><rect x="460" y="54" width="70" height="66" class="bx2"/><rect x="440" y="126" width="70" height="66" class="bx2"/><line x1="440" y1="123" x2="530" y2="123" class="rd dash"/><circle cx="466" cy="58" r="3" class="rf"/><circle cx="524" cy="58" r="3" class="rf"/><circle cx="448" cy="190" r="3" class="rf"/><circle cx="502" cy="190" r="3" class="rf"/><line x1="524" y1="58" x2="556" y2="70" class="ld"/><circle cx="556" cy="70" r="2" class="dotf"/><text x="560" y="74" class="s">상부 고정</text><line x1="530" y1="123" x2="556" y2="112" class="ld"/><circle cx="556" cy="112" r="2" class="dotf"/><text x="560" y="116" class="r">Stack Joint</text><line x1="502" y1="190" x2="556" y2="180" class="ld"/><circle cx="556" cy="180" r="2" class="dotf"/><text x="560" y="184" class="s">하부 고정</text><text x="530" y="228" text-anchor="middle" class="s">Unit 간 Joint에서 흡수</text></svg>', cap: '[상세] 층간변위 Δ 발생 시 Sliding·Locking·Fixed 방식의 변위 흡수' }, tbl: { head: ['구분', 'Sliding(수평이동)', 'Locking(회전)', 'Fixed(고정)'], rows: [['원리', '상·하 중 한쪽 Slot으로 수평 이동', 'Panel이 회전(Rocking)하며 추종', '상·하 고정, Unit 자체(Stack joint)에서 변형 흡수'], ['적용', '횡으로 긴 Panel Type(PC Panel)', '종으로 긴 Panel Type', 'Al 커튼월(Unit wall)'], ['유의', 'Slot 길이 ≥ 설계 층간변위', '회전 Pin Clearance·마찰음', 'Stack joint 변위량 확보']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['조정 범위', '3방향(X·Y·Z) Slot·Shim 조정', '마법지 p014 오차흡수'], ['층간변위 추종', '설계 층간변위 이상 Slot·Clearance 확보', 'KDS 41 17 00 / 설계도서'], ['용접·방청', '현장 용접부 방청도장, 이종금속(Al-Steel) 절연', 'KCS 41 54 (수치 확인 필요)'], ['볼트', '풀림방지(이중 Nut·Spring washer), 마찰음 방지 Pad', '설계도서']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 구조체 Anchor(Embedded Plate·Cast-in Channel) 위치 먹매김·피아노선 기준 확인', '[전] Fastener 구조계산(자중·풍하중·층간변위) 승인', '[중] 1차 가고정 → 3차원 조정 → 본조임 순서 준수', '[중] 용접 시 Unit 손상 방지, 용접부 방청 처리', '[중] Al과 강재 접촉부 절연 Pad → 이종금속 부식 방지', '[후] 볼트 조임 확인·Marking, Slot 기능 유지(과조임 금지)', '[후] 층간 내화충전(Fire stop) 및 Fastener 보호', '개선: Cast-in Channel 선매립으로 용접 최소화, 3D 스캔으로 구조체 오차 사전 파악'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p083(문제182: Fastener 기능 3가지, Sliding=횡으로 긴 Panel·Locking=종으로 긴 Panel·Fixed=Al C/W); 코어 p086 Fixed Type은 Unit 자체에서 변형흡수; 마법지 p014 Fastener 설치·방식'
},
153: {
  title: 'Closed joint System',
  cat: '초고층·커튼월',
  key: ['1차 Seal(외부)', '2차 Seal(내부)', '틈새 제거', '배수구멍(Weep hole)', '내부 배수 System', 'Backup재·Bond Breaker', '누수 5요인', 'Seal 열화'],
  www: { what: '커튼월 접합부를 [[1차 Seal(외부)]]·[[2차 Seal(내부)]]로 밀폐해 빗물 침입 [[틈새 제거]]로 수밀을 확보하는 수처리 방식', why: '접합부 누수 차단, 1차 Seal 파손 시에도 내부 배수로 실내 누수 방지', how: '외부 1차 Seal → [[내부 배수 System]](배수공간·[[배수구멍(Weep hole)]]) → 내부 2차 Seal' },
  tag: '공법·수처리·원리',
  def: '커튼월 접합부를 외부 [[1차 Seal]]과 내부 [[2차 Seal]]로 완전히 밀폐하여 빗물 침입 경로인 [[틈새]]를 제거하고, 1차 Seal이 파손되어도 2차 Seal 도달 전 [[배수구멍(Weep hole)]]으로 배출하는 수처리 방식',
  wwh: ['이중 Seal 밀폐', '틈새 제거·수밀', '1차Seal→배수→2차Seal'],
  figT: 'Closed joint의 수처리 원리 및 구성',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="60" y="30" text-anchor="middle" class="b">(실외)</text>' +
    '<text x="400" y="24" text-anchor="middle" class="b">(실내)</text>' +
    '<rect x="140" y="40" width="160" height="70" class="bx2"/>' +
    '<rect x="140" y="150" width="160" height="110" class="bx2"/>' +
    '<rect x="132" y="112" width="16" height="36" class="bx3"/>' +
    '<circle cx="152" cy="130" r="5" class="bx"/>' +
    '<rect x="292" y="112" width="16" height="36" class="bx3"/>' +
    '<polyline points="290,146 170,150" fill="none" class="ln2"/>' +
    '<line x1="178" y1="150" x2="140" y2="188" class="ln"/>' +
    '<line x1="190" y1="150" x2="152" y2="188" class="ln"/>' +
    '<line x1="184" y1="156" x2="148" y2="188" class="ar"/>' +
    '<line x1="40" y1="124" x2="124" y2="128" class="ar"/>' +
    '<text x="40" y="145" class="s">빗물·풍압</text>' +
    '<line x1="136" y1="118" x2="30" y2="84" class="ld"/><circle cx="30" cy="84" r="2" class="dotf"/><text x="34" y="88" class="bl">1차 Seal(외부)</text>' +
    '<line x1="150" y1="128" x2="30" y2="60" class="ld"/><circle cx="30" cy="60" r="2" class="dotf"/><text x="34" y="64" class="s">Backup재</text>' +
    '<line x1="150" y1="180" x2="30" y2="210" class="ld"/><circle cx="30" cy="210" r="2" class="dotf"/><text x="34" y="214" class="s">배수구멍(Weep hole)</text>' +
    '<line x1="300" y1="130" x2="330" y2="90" class="ld"/><circle cx="330" cy="90" r="2" class="dotf"/><text x="334" y="94" class="bl">2차 Seal(내부)</text>' +
    '<line x1="240" y1="130" x2="330" y2="200" class="ld"/><circle cx="330" cy="200" r="2" class="dotf"/><text x="334" y="204" class="s">배수 공간(Cavity)</text>' +
    '<line x1="220" y1="60" x2="330" y2="44" class="ld"/><circle cx="330" cy="44" r="2" class="dotf"/><text x="334" y="48" class="s">Unit Frame</text>' +
    '<rect x="20" y="300" width="120" height="22" class="bx2"/><text x="80" y="315" text-anchor="middle" class="s">외부 1차 Seal</text><line x1="141" y1="311" x2="164" y2="311" class="ar"/><rect x="165" y="300" width="120" height="22" class="bx2"/><text x="225" y="315" text-anchor="middle" class="s">내부 배수 System</text><line x1="286" y1="311" x2="309" y2="311" class="ar"/><rect x="310" y="300" width="120" height="22" class="bx2"/><text x="370" y="315" text-anchor="middle" class="s">내부 2차 Seal</text>' +
    '<text x="450" y="26" class="b">[누수 5요인 대응]</text>' +
    '<text x="450" y="46" class="s">중력 → 상향 구배</text>' +
    '<text x="450" y="64" class="s">표면장력 → 물끊기</text>' +
    '<text x="450" y="82" class="s">모세관 → Air Pocket</text>' +
    '<text x="450" y="100" class="s">운동E → 미로(Baffle)</text>' +
    '<text x="450" y="118" class="s">기압차 → Seal 밀폐(Closed)</text>' +
    '<text x="450" y="142" class="r">Seal 열화 시 누수 위험</text>' +
    '<line x1="140" y1="112" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 1차·2차 Seal 이중 밀폐</text><line x1="160" y1="168" x2="440" y2="198" class="ld"/><circle cx="440" cy="198" r="2" class="dotf"/><text x="446" y="202" class="k3">③ 침투수 Weep hole 배출</text><text x="446" y="222" class="k3">③ 저층·소규모 경제적</text><line x1="140" y1="140" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 2면 접착·Bond Breaker</text><text x="446" y="266" class="k4">④ 피착면 청소·Primer</text><text x="446" y="286" class="k4">④ 5℃↓·우천 시 시공금지</text><text x="446" y="310" class="k5">⑤ Open joint 병용</text><text x="446" y="330" class="k5">⑤ Seal 정기점검·교체</text>' +
    '</svg>',
  subs: [
    { h: '원리·특징', pts: ['1차·2차 Seal 이중 밀폐', '침투수 Weep hole 배출', '저층·소규모 경제적'] },
    { h: '시공 시 유의사항', pts: ['2면 접착·Bond Breaker', '피착면 청소·Primer', '5℃↓·우천 시 시공금지', 'Joint 폭·깊이 확보 → 무브먼트 추종'] },
    { h: '개선방안', pts: ['Open joint 병용', 'Seal 정기점검·교체'] }
  ],
  msg: '막아서 지킨다 — 단, Seal이 늙으면 샌다(정기 교체)',
  mnemo: 'Closed = 1·배·2 (1차 Seal → 배수 → 2차 Seal) / 누수 5요인 = 중·표·모·운·기',
  rel: ['Open joint System', '등압이론', 'Sealant', 'Backup재·Bond Breaker', 'Weep hole'],
  det: { secs: [
    { h: '정의', def: '커튼월 접합부를 외부 [[1차 Seal]]과 내부 [[2차 Seal]]로 밀폐하여 빗물 침입 경로인 [[틈새를 제거]]하는 수처리 System으로, 1차 Seal이 파손되더라도 2차 Seal에 도달하기 전 [[내부 배수 System]](배수공간·[[배수구멍]])으로 배수 처리한다.' },
    { h: '수처리 원리 및 구성', fig: 'MAIN', flow: ['외부 1차 Seal', '내부 배수 System', '내부 2차 Seal'] },
    { h: '누수 원인 및 Stack joint 구조개선', tbl: { head: ['누수 요인', '현상', '대응'], rows: [['중력', '빗물이 틈으로 흘러듦', '[[상향 구배]]'], ['표면장력', '물이 부재 표면을 따라 이동', '[[물끊기]]'], ['모세관', '좁은 틈으로 흡인', '[[Air Pocket]]'], ['운동에너지', '빗방울 관성으로 침입', '[[미로(Baffle)]] 형성'], ['기압차', '외부 &gt; 내부 기압으로 흡입', 'Seal 밀폐(Closed) / 등압(Open)']] }, ul2: ['합격답안 8.C.W공사: Stack joint 접합부 구조개선 → 접합부 틈으로 물의 이동 가능 제어'] },
    { h: 'Sealing 접착 원리 및 관리기준', fig: { svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><text x="150" y="18" text-anchor="middle" class="b">① 2면 접착 — 정상</text><rect x="30" y="40" width="50" height="120" class="bx2"/><rect x="130" y="40" width="50" height="120" class="bx2"/><rect x="80" y="40" width="50" height="24" class="bx3"/><rect x="80" y="64" width="50" height="4" class="rf"/><circle cx="105" cy="78" r="9" class="bx"/><line x1="105" y1="50" x2="190" y2="46" class="ld"/><circle cx="190" cy="46" r="2" class="dotf"/><text x="194" y="50" class="s">Sealant(2면)</text><line x1="122" y1="66" x2="190" y2="76" class="ld"/><circle cx="190" cy="76" r="2" class="dotf"/><text x="194" y="80" class="r">Bond Breaker</text><line x1="110" y1="84" x2="190" y2="106" class="ld"/><circle cx="190" cy="106" r="2" class="dotf"/><text x="194" y="110" class="s">Backup재</text><line x1="64" y1="180" x2="28" y2="180" class="ar"/><line x1="146" y1="180" x2="182" y2="180" class="ar"/><text x="105" y="184" text-anchor="middle" class="s">Movement 추종</text><text x="105" y="206" text-anchor="middle" class="s">→ 신축 대응·Sealing재 파손 방지</text><text x="480" y="18" text-anchor="middle" class="b">② 3면 접착 — 불량</text><rect x="360" y="40" width="50" height="120" class="bx2"/><rect x="460" y="40" width="50" height="120" class="bx2"/><rect x="410" y="40" width="50" height="36" class="bx3"/><rect x="410" y="76" width="50" height="8" class="conc"/><polyline points="425,40 432,52 428,62 436,76" fill="none" class="rd"/><line x1="445" y1="50" x2="520" y2="46" class="ld"/><circle cx="520" cy="46" r="2" class="dotf"/><text x="524" y="50" class="s">Sealant(3면)</text><line x1="431" y1="60" x2="520" y2="76" class="ld"/><circle cx="520" cy="76" r="2" class="dotf"/><text x="524" y="80" class="r">균열·파단</text><line x1="450" y1="80" x2="520" y2="106" class="ld"/><circle cx="520" cy="106" r="2" class="dotf"/><text x="524" y="110" class="s">바닥면 접착</text><line x1="394" y1="180" x2="358" y2="180" class="ar"/><line x1="476" y1="180" x2="512" y2="180" class="ar"/><text x="435" y="184" text-anchor="middle" class="s">구속 → 파단</text><text x="435" y="206" text-anchor="middle" class="s">→ 3면 구속으로 신축 불가</text></svg>', cap: '[상세] 2면 접착(Bond Breaker) ↔ 3면 접착 파단' }, tbl: { head: ['항목', '기준·관리', '근거'], rows: [['접착', '[[2면 접착]] — 하부 Bond Breaker 설치 → 신축 대응, Sealing재 파손 방지', '합격답안 8.C.W공사 p6'], ['Joint 크기', 'Movement(층간변위·열변형) 추종 가능한 폭·깊이 확보', '설계도서(폭·깊이 비 확인 필요)'], ['시공 환경', '5℃ 이하·우천·결로 시 시공 금지, 피착면 건조', '실링 시방(확인 필요)'], ['Primer', '피착면 청소 후 Primer, 지정 시간 내 충전', '제조사 기준'], ['검사', 'Field test(수밀)·접착성 Hand pull test', 'AAMA 501.2 / ASTM C1521']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] Joint 폭·깊이 설계(층간변위·열변형 Movement 고려), 실링재 접착성·오염성 시험', '[중] 피착면 청소·건조 → Primer → Backup재·Bond Breaker → 충전 → Tooling', '[중] 배수구멍(Weep hole) 막힘 방지, 배수 경로 연속', '[중] 5℃ 이하·우천·결로 시 시공 금지', '[후] Field test(수밀)로 성능 확인', '[후] Seal 열화 정기 점검·교체(내구연한 관리)'] },
    { h: '개선방안', ul: ['고층·고풍압부는 Open joint(등압) 병용', '2차 Seal + 내부 배수의 이중 방어 구조 유지', 'UV·내후성 우수 실리콘계 실링재 적용', '주기적 실내 환기로 상대습도 낮게 유지 → 결로 방지(합격답안)'] }
  ] },
  src: '근거: 합격답안 8.C.W공사 p10 Closed joint System(1차 Seal 파손 시 2차 Seal 도달 전 배수처리, 외부1차Seal→내부배수→내부2차Seal), p6 2면 접착·Stack joint 4요인 / 마법지 p014 수처리 방식·누수 원인(중력·표면장력·모세관·운동에너지·기압차)'
},
154: {
  title: 'Open joint System / 등압이론',
  cat: '초고층·커튼월',
  key: ['등압이론', '외기압(Po)', '공간압(Pc)', '등압공간', '기밀층(Air Seal)', 'Rain Screen', '기압차 제거', '구획(Compartment)', '물막이 턱'],
  www: { what: '외부 Joint를 개방하고 내부에 [[등압공간]]과 [[기밀층(Air Seal)]]을 두어 [[외기압(Po)]] = [[공간압(Pc)]]으로 [[기압차 제거]]하는 수처리 방식', why: 'Seal 열화와 무관하게 기압차에 의한 빗물 흡입을 막아 초고층 수밀 장기 확보', how: '외기 유입구(Open joint) → 내부 등압공간(물막이 턱·배수) → 내부 기밀층 → 층·코너 [[구획(Compartment)]]' },
  tag: '원리·공법·수처리',
  def: '외부 Joint를 열어 두고 내부에 [[등압공간]]과 [[기밀층(Air Seal)]]을 설치해 [[외기압 Po ≒ 공간압 Pc]]로 만드는 [[등압이론]]으로 [[기압차]]를 제거하여 빗물 침입을 막는 커튼월 수처리 방식',
  wwh: ['Po=Pc 등압', '기압차 누수 차단', '개방·등압공간·기밀층'],
  figT: 'Open joint의 등압원리 및 구성',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="60" y="26" text-anchor="middle" class="b">(실외)</text>' +
    '<text x="380" y="26" text-anchor="middle" class="b">(실내)</text>' +
    '<rect x="120" y="40" width="24" height="90" class="bx2"/>' +
    '<rect x="120" y="150" width="24" height="110" class="bx2"/>' +
    '<rect x="280" y="40" width="20" height="220" class="bx3"/>' +
    '<rect x="274" y="132" width="8" height="20" class="rf"/>' +
    '<line x1="144" y1="170" x2="160" y2="170" class="ln"/>' +
    '<line x1="160" y1="170" x2="160" y2="110" class="ln"/>' +
    '<line x1="172" y1="110" x2="172" y2="150" class="ln2"/>' +
    '<line x1="168" y1="110" x2="176" y2="110" class="ln2"/>' +
    '<line x1="168" y1="150" x2="176" y2="150" class="ln2"/>' +
    '<text x="178" y="134" class="r">h≥60mm</text>' +
    '<line x1="30" y1="140" x2="112" y2="140" class="ar"/>' +
    '<line x1="152" y1="164" x2="128" y2="148" class="ar"/>' +
    '<text x="80" y="110" class="b">Po</text>' +
    '<text x="222" y="90" class="b">Pc</text>' +
    '<text x="190" y="236" class="r">Po ≒ Pc</text>' +
    '<line x1="132" y1="140" x2="24" y2="180" class="ld"/><circle cx="24" cy="180" r="2" class="dotf"/><text x="28" y="184" class="s">Open Joint(개방)</text>' +
    '<line x1="132" y1="80" x2="30" y2="64" class="ld"/><circle cx="30" cy="64" r="2" class="dotf"/><text x="34" y="68" class="s">Rain Screen</text>' +
    '<line x1="160" y1="120" x2="200" y2="60" class="ld"/><circle cx="200" cy="60" r="2" class="dotf"/><text x="204" y="64" class="s">물막이 턱</text>' +
    '<line x1="276" y1="140" x2="330" y2="140" class="ld"/><circle cx="330" cy="140" r="2" class="dotf"/><text x="334" y="144" class="bl">기밀층(Air Seal)</text>' +
    '<line x1="220" y1="200" x2="330" y2="200" class="ld"/><circle cx="330" cy="200" r="2" class="dotf"/><text x="334" y="204" class="s">등압공간(Chamber)</text>' +
    '<line x1="300" y1="240" x2="330" y2="254" class="ld"/><circle cx="330" cy="254" r="2" class="dotf"/><text x="334" y="258" class="s">실내측 벽체</text>' +
    '<rect x="20" y="300" width="120" height="22" class="bx2"/><text x="80" y="315" text-anchor="middle" class="s">외기 유입구</text><line x1="141" y1="311" x2="164" y2="311" class="ar"/><rect x="165" y="300" width="120" height="22" class="bx2"/><text x="225" y="315" text-anchor="middle" class="s">내부 등압공간</text><line x1="286" y1="311" x2="309" y2="311" class="ar"/><rect x="310" y="300" width="120" height="22" class="bx2"/><text x="370" y="315" text-anchor="middle" class="s">내부 기밀층</text>' +
    '<text x="450" y="26" class="b">[등압이론]</text>' +
    '<text x="450" y="48" class="r">Po = Pc → ΔP = 0</text>' +
    '<text x="450" y="68" class="s">외기압 Po와 공간압 Pc 동일화</text>' +
    '<text x="450" y="86" class="s">→ 기압차 소멸 → 빗물 이동 차단</text>' +
    '<text x="450" y="104" class="s">중력·운동E: 상향 턱 h≥60mm</text>' +
    '<text x="450" y="122" class="s">모세관: Air Pocket 확보</text>' +
    '<text x="450" y="140" class="s">수평 압력차: 구획 설치</text>' +
    '<line x1="132" y1="145" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 외부 개방·내부 기밀</text><line x1="220" y1="170" x2="440" y2="198" class="ld"/><circle cx="440" cy="198" r="2" class="dotf"/><text x="446" y="202" class="k3">③ 기압차 제거 → 수밀</text><text x="446" y="222" class="k3">③ 초고층·Unit wall 적용</text><line x1="282" y1="150" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 기밀층 연속성 확보</text><text x="446" y="266" class="k4">④ 층·코너 구획 설치</text><text x="446" y="286" class="k4">④ 배수경로·통기구 확보</text><text x="446" y="310" class="k5">⑤ Rain Screen 외피 설계</text><text x="446" y="330" class="k5">⑤ Mock-up 동압수밀 검증</text>' +
    '</svg>',
  subs: [
    { h: '등압 원리·특징', pts: ['외부 개방·내부 기밀', '기압차 제거 → 수밀', '초고층·Unit wall 적용'] },
    { h: '시공 시 유의사항', pts: ['기밀층 연속성 확보', '층·코너 구획 설치', '배수경로·통기구 확보', '기밀층 결함 시 등압 불성립 → 누수'] },
    { h: '개선방안', pts: ['Rain Screen 외피 설계', 'Mock-up 동압수밀 검증'] }
  ],
  msg: '막지 않고 압력을 같게 — 기압차가 없으면 물은 들어오지 않는다',
  mnemo: 'Open = 유·등·기 (외기 유입구 → 등압공간 → 기밀층) / Po = Pc',
  rel: ['Closed joint System', '석재 Open joint', 'Rain Screen', '커튼월 누수', 'Mock up test'],
  det: { secs: [
    { h: '정의', def: '부재의 Joint를 Open시키고 내부에 [[등압공간]]을 형성하여 물의 침투를 막는 수처리 방식으로, [[공기 유입구]]를 통해 유입된 공기가 [[기밀층]]을 형성하고 틈을 통해 물을 이동시키는 [[기압차]]를 없애는([[Po ≒ Pc]]) 등압이론을 이용한다.' },
    { h: '등압을 이용한 수처리 원리', fig: 'MAIN', flow: ['공기 유입구(Open joint)', '내부 등압공간', '내부 기밀층'], ul: ['Po ≒ Pc가 되면 다소 틈이 있어도 누수 방지 — 틈을 통해 물을 이동시키는 기압차 제거(합격답안)', '물막이 턱 h ≥ {{60mm}} → 운동에너지·풍압력에 대응'] },
    { h: 'Closed joint와 비교', fig: { svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><text x="150" y="18" text-anchor="middle" class="b">① 2면 접착 — 정상</text><rect x="30" y="40" width="50" height="120" class="bx2"/><rect x="130" y="40" width="50" height="120" class="bx2"/><rect x="80" y="40" width="50" height="24" class="bx3"/><rect x="80" y="64" width="50" height="4" class="rf"/><circle cx="105" cy="78" r="9" class="bx"/><line x1="105" y1="50" x2="190" y2="46" class="ld"/><circle cx="190" cy="46" r="2" class="dotf"/><text x="194" y="50" class="s">Sealant(2면)</text><line x1="122" y1="66" x2="190" y2="76" class="ld"/><circle cx="190" cy="76" r="2" class="dotf"/><text x="194" y="80" class="r">Bond Breaker</text><line x1="110" y1="84" x2="190" y2="106" class="ld"/><circle cx="190" cy="106" r="2" class="dotf"/><text x="194" y="110" class="s">Backup재</text><line x1="64" y1="180" x2="28" y2="180" class="ar"/><line x1="146" y1="180" x2="182" y2="180" class="ar"/><text x="105" y="184" text-anchor="middle" class="s">Movement 추종</text><text x="105" y="206" text-anchor="middle" class="s">→ 신축 대응·Sealing재 파손 방지</text><text x="480" y="18" text-anchor="middle" class="b">② 3면 접착 — 불량</text><rect x="360" y="40" width="50" height="120" class="bx2"/><rect x="460" y="40" width="50" height="120" class="bx2"/><rect x="410" y="40" width="50" height="36" class="bx3"/><rect x="410" y="76" width="50" height="8" class="conc"/><polyline points="425,40 432,52 428,62 436,76" fill="none" class="rd"/><line x1="445" y1="50" x2="520" y2="46" class="ld"/><circle cx="520" cy="46" r="2" class="dotf"/><text x="524" y="50" class="s">Sealant(3면)</text><line x1="431" y1="60" x2="520" y2="76" class="ld"/><circle cx="520" cy="76" r="2" class="dotf"/><text x="524" y="80" class="r">균열·파단</text><line x1="450" y1="80" x2="520" y2="106" class="ld"/><circle cx="520" cy="106" r="2" class="dotf"/><text x="524" y="110" class="s">바닥면 접착</text><line x1="394" y1="180" x2="358" y2="180" class="ar"/><line x1="476" y1="180" x2="512" y2="180" class="ar"/><text x="435" y="184" text-anchor="middle" class="s">구속 → 파단</text><text x="435" y="206" text-anchor="middle" class="s">→ 3면 구속으로 신축 불가</text></svg>', cap: '[상세] Closed joint의 Sealing 접착 원리 — Open joint는 Seal 의존도를 낮춤' }, tbl: { head: ['구분', 'Closed joint', 'Open joint(등압)'], rows: [['원리', '1차·2차 Seal로 틈새 제거', '외기압 = 공간압 → 기압차 제거'], ['수밀 의존', 'Sealant 성능', '기밀층·등압 성능'], ['장점', '구조 단순, 저층 경제적', '실링재 파손 및 오염 문제 없음, 수밀성 확보(코어)'], ['단점', 'Seal 열화 시 누수', '기밀층 결함 시 등압 불성립, 구조 복잡'], ['적용', '저층·소규모', 'Unit wall 상하부 Unit 간 Stack joint(코어)·초고층']] } },
    { h: '관리기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['물막이 턱', 'h ≥ {{60mm}}(운동에너지·풍압력 대응)', '합격답안 8.C.W공사 p10 / 코어 p084'], ['기밀층', '내부 기밀을 위한 기밀용 Seal 연속 시공', '코어 p084'], ['구획', '층·코너 Compartment로 수평 압력차 제거', '등압 원리'], ['Stack joint', '허용 수축치 준수(Unit System ±20mm 변위 대응)', '코어 p084·p086'], ['구조', '설계풍압에 견딜 수 있는 구조 설계', '코어 p084 / 풍동시험']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 등압공간 체적·유입구 면적 설계, 층·코너 구획 계획', '[전] 설계풍압에 견딜 수 있는 구조 설계(코어)', '[중] 내부 기밀을 위해 기밀용 Seal 연속 시공(코어)', '[중] 가공 및 조립 시 Alignment 유지(코어)', '[중] 배수구·통기구 막힘 방지', '[후] Stack joint 허용 수축치 준수 확인(코어)', '[후] Mock-up 동압수밀·Field test로 등압 성능 검증'] },
    { h: '개선방안', ul: ['Rain Screen 외피(석재·금속 Panel Open joint) 확대 적용', '등압 Chamber 구획 상세 BIM 검토', '기밀층 Gasket 2중화로 등압 신뢰성 향상'] }
  ] },
  src: '근거: 합격답안 8.C.W공사 p10 Open joint System(Po≒Pc면 다소 틈이 있어도 누수 방지, 기압차 제거, h 60mm 이상, 외기유입구→내부등압공간→내부기밀층) / 마법지 p014 수처리 방식·누수 원인'
},
155: {
  title: 'Curtain wall의 단열Bar',
  cat: '초고층·커튼월',
  key: ['열교(Thermal Bridge)', 'Thermal Break', 'Azon 방식', 'Polyamide 방식', '저열전도 재료', '결로 방지', '열관류율', 'TDR'],
  www: { what: '알루미늄 커튼월 Bar의 실내·실외측 사이에 [[저열전도 재료]]를 삽입해 [[열교(Thermal Bridge)]]를 차단하는 [[Thermal Break]] 부재', why: '프레임 [[결로 방지]]·[[열관류율]] 저감으로 에너지 절약과 [[TDR]] 기준 확보', how: '[[Azon 방식]](수지 주입 → 경화 → Bridge 절단) 또는 [[Polyamide 방식]](Strip 삽입 → Rolling 압착) → 전단강도 확인 → 조립' },
  tag: '재료·부재·성능',
  def: '알루미늄 커튼월 Frame의 [[실내·실외측 Bar]] 사이에 [[Polyamide·Polyurethane]] 등 [[저열전도 재료]]를 삽입해 [[열교(Thermal Bridge)]]를 차단하는 부재로, [[Azon]](주입·절단)과 [[Polyamide]](삽입·압착) 방식이 있다',
  wwh: ['Al Bar 열적 분리', '결로·열손실 방지', 'Azon·Polyamide'],
  figT: '단열Bar의 열교 차단원리 및 종류',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="30" y="24" class="s">실외 −10℃</text>' +
    '<text x="380" y="40" class="s">실내 20℃</text>' +
    '<line x1="120" y1="30" x2="120" y2="100" class="ln"/>' +
    '<line x1="140" y1="30" x2="140" y2="100" class="ln"/>' +
    '<line x1="120" y1="200" x2="120" y2="270" class="ln"/>' +
    '<line x1="140" y1="200" x2="140" y2="270" class="ln"/>' +
    '<rect x="60" y="120" width="20" height="60" class="bx2"/>' +
    '<rect x="80" y="110" width="90" height="80" class="bx2"/>' +
    '<rect x="170" y="120" width="40" height="14" class="bx3"/>' +
    '<rect x="170" y="166" width="40" height="14" class="bx3"/>' +
    '<rect x="210" y="90" width="150" height="120" class="bx2"/>' +
    '<path d="M190,30 C190,120 190,180 190,280" class="rd dash"/>' +
    '<line x1="350" y1="150" x2="222" y2="150" class="ar"/>' +
    '<text x="250" y="142" class="r">열류 차단</text>' +
    '<line x1="190" y1="127" x2="230" y2="60" class="ld"/><circle cx="230" cy="60" r="2" class="dotf"/><text x="234" y="64" class="bl">단열 Bar(Polyamide)</text>' +
    '<line x1="110" y1="180" x2="24" y2="214" class="ld"/><circle cx="24" cy="214" r="2" class="dotf"/><text x="28" y="218" class="s">외부 Al Bar</text>' +
    '<line x1="300" y1="200" x2="330" y2="234" class="ld"/><circle cx="330" cy="234" r="2" class="dotf"/><text x="334" y="238" class="s">내부 Al Bar</text>' +
    '<line x1="130" y1="60" x2="30" y2="80" class="ld"/><circle cx="30" cy="80" r="2" class="dotf"/><text x="34" y="84" class="s">복층유리</text>' +
    '<line x1="150" y1="190" x2="230" y2="254" class="ld"/><circle cx="230" cy="254" r="2" class="dotf"/><text x="234" y="258" class="s">Glazing Pocket 단열재</text>' +
    '<text x="450" y="26" class="b">[단열Bar 종류]</text>' +
    '<polyline points="460,50 460,90 530,90 530,50" fill="none" class="ln"/>' +
    '<rect x="470" y="60" width="50" height="30" class="bx3"/>' +
    '<line x1="490" y1="90" x2="510" y2="90" class="rd"/>' +
    '<text x="495" y="112" text-anchor="middle" class="s">Azon 주입·절단</text>' +
    '<rect x="560" y="50" width="22" height="40" class="bx2"/>' +
    '<rect x="608" y="50" width="22" height="40" class="bx2"/>' +
    '<rect x="582" y="56" width="26" height="8" class="bx3"/>' +
    '<rect x="582" y="76" width="26" height="8" class="bx3"/>' +
    '<text x="595" y="112" text-anchor="middle" class="s">Polyamide 압착</text>' +
    '<text x="450" y="140" class="r">Al 약 200 vs PA 0.3 W/m·K</text>' +
    '<text x="450" y="160" class="s">→ 열교 차단·결로 방지</text>' +
    '<line x1="190" y1="160" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="446" y="184" class="k3">③ 실내외 Bar 열적 분리</text><text x="446" y="204" class="k3">③ Azon·Polyamide 방식</text><text x="446" y="224" class="k3">③ 열관류율↓·TDR↑</text><line x1="150" y1="105" x2="440" y2="244" class="ld"/><circle cx="440" cy="244" r="2" class="dotf"/><text x="446" y="248" class="k4">④ 단열선 연속(유리 정렬)</text><text x="446" y="268" class="k4">④ 분체도장 순서·내열성</text><line x1="190" y1="173" x2="440" y2="284" class="ld"/><circle cx="440" cy="284" r="2" class="dotf"/><text x="446" y="288" class="k4">④ 전단강도·수축 확인</text><text x="446" y="312" class="k5">⑤ Warm-edge Spacer 병용</text><text x="446" y="332" class="k5">⑤ 열해석(THERM) 검증</text>' +
    '</svg>',
  subs: [
    { h: '원리·종류', pts: ['실내외 Bar 열적 분리', 'Azon·Polyamide 방식', '열관류율↓·TDR↑'] },
    { h: '시공·제작 시 유의사항', pts: ['단열선 연속(유리 정렬)', '분체도장 순서·내열성', '전단강도·수축 확인', 'Glazing Pocket 단열재 충전 → 취약부 개선'] },
    { h: '개선방안', pts: ['Warm-edge Spacer 병용', '열해석(THERM) 검증'] }
  ],
  msg: '알루미늄은 열의 고속도로 — 단열Bar로 끊어야 결로가 멈춘다',
  mnemo: '단열Bar = A·P (Azon 주입절단 · Polyamide 삽입압착) → 열교 차단·TDR↑',
  rel: ['열교(Thermal Bridge)', 'TDR', '결로', 'Warm-edge Spacer', '열관류율'],
  det: { secs: [
    { h: '정의', def: '알루미늄 등 [[열전도율]]이 높은 자재와 그 사이에 [[열전도율이 낮은 물질]]을 삽입하여 [[열교]]를 차단해 [[결로현상]]을 방지하고 단열성능을 높이는 커튼월 구조의 핵심 부재로, [[Azon System]]과 [[Polyamide System]]이 있다.' },
    { h: '열교 차단 원리', fig: 'MAIN', flow: ['Al Bar 열교 발생', '단열Bar 삽입(실내외 열적 분리)', '실내측 표면온도 상승', '결로 방지·열손실 저감'] },
    { h: '단열Bar의 구조·종류', tbl: { head: ['구분', 'Azon System', 'Polyamide System'], rows: [['재료', '액체 상태의 고강도 Polyurethane', '유리섬유를 함유한 고체 상태 Polyamide'], ['제작', 'Al Bar에 충전 → 경화 → 하부 Bridge 절단', 'Al Bar에 삽입 → 압착(Rolling)'], ['특징', '일체성 우수, 단열 폭 제한', '단열 폭 크게 가능, 압착부 전단강도 관리']] }, ul2: ['역할: 열손실을 줄여 냉난방 소비 낮춤 / 부식방지 코팅 등으로 내구성·구조적 안정성 향상(코어)'] },
    { h: '관리기준·성능기준', tbl: { head: ['항목', '기준·관리', '근거'], rows: [['열전도율', 'Al 약 {{200}} vs Polyamide 약 {{0.3}} W/m·K', '재료 일반값'], ['결로방지 성능', 'TDR = (실내온도 − 실내표면온도)/(실내온도 − 외기온도), 지역·부위별 기준 이하', '마법지 p020 / 결로방지 설계기준(기준값 확인 필요)'], ['단열성능', '창호·C/W 열관류율 기준 충족', '건축물의 에너지절약설계기준(수치 확인 필요)'], ['전단강도', '단열Bar 결합부 전단강도·고온 내구성 시험', 'EN 14024 관례(확인 필요)']] } },
    { h: '시공·제작 시 유의사항 (시공 전·중·후)', ul: ['[전] 열해석(THERM 등)으로 단열선 연속성·실내 표면온도 검토', '[전] 단열Bar 위치를 복층유리 단열선(Spacer)과 일치', '[중] 분체도장 소부온도와 단열Bar 내열성 확인(도장 순서)', '[중] Glazing Pocket 등 단열 취약부에 단열재 충전(합격답안)', '[중] 운반·조립 시 단열Bar 손상·변형 방지', '[후] 파손 시 보수: 상태점검(손상·누수·변형, 결로·곰팡이) → 교체·고효율 단열재 충진 → 기밀·내구성 확인·결로 재발 확인(코어)'] },
    { h: '개선방안', ul: ['Warm-edge Spacer·Low-E 삼중유리 병용', '단열Bar 폭 확대·다중 Chamber 형상(AL Bar 디자인 개선, 합격답안)', '열해석 검증 결과를 Shop drawing에 반영'] }
  ] },
  src: '근거: 마법지 p014 Bar 단열Bar(Azone System·Polyamid System), 하자 결로(Bar 및 유리 단열성능); 합격답안 8.C.W공사 p6 단열성능 확보(Glazing Pocket 등 단열취약부 개선, AL Bar 디자인 개선, 단열재 처리) / 열전도율 Al≈200·PA≈0.3 W/m·K 일반값'
},
156: {
  title: '층간변위(Side sway)',
  cat: '초고층·커튼월',
  key: ['횡하중', '상대 수평변위(Δ)', '층간변위비(Δ/h)', '허용층간변위', '내진등급', '비구조재 추종성', 'Fastener Slot', '층간변위시험'],
  www: { what: '지진·풍하중 등 [[횡하중]]으로 상·하층 바닥 사이에 생기는 [[상대 수평변위(Δ)]]', why: '커튼월·칸막이·배관 등 비구조재 파손·탈락·누수와 구조 손상 방지', how: '[[층간변위비(Δ/h)]] 산정 → [[내진등급]]별 [[허용층간변위]] 검토 → Fastener Slot·Joint 추종 상세 → Mock-up [[층간변위시험]]' },
  tag: '현상·기준·대책',
  def: '지진·풍하중 등 [[횡하중]]에 의해 상·하층 바닥 사이에 발생하는 [[상대 수평변위(Δ)]]로, [[층간변위비(Δ/h)]]를 내진등급별 허용치(특 {{0.010hsx}}·Ⅰ {{0.015hsx}}·Ⅱ {{0.020hsx}}) 이내로 관리하고 [[비구조재 추종성]]을 확보',
  wwh: ['상하층 상대변위', '비구조재 파손 방지', 'Δ/h 관리·추종상세'],
  figT: '층간변위의 발생원리 및 커튼월 추종',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="60" y="270" width="260" height="10" class="conc"/>' +
    '<rect x="60" y="136" width="260" height="10" fill="none" class="ln2 dash"/>' +
    '<line x1="80" y1="146" x2="80" y2="270" class="ln2 dash"/>' +
    '<line x1="300" y1="146" x2="300" y2="270" class="ln2 dash"/>' +
    '<rect x="90" y="136" width="260" height="10" class="conc"/>' +
    '<line x1="80" y1="270" x2="110" y2="146" class="ln"/>' +
    '<line x1="300" y1="270" x2="330" y2="146" class="ln"/>' +
    '<polygon points="180,152 236,148 250,262 194,266" class="bx3"/>' +
    '<circle cx="180" cy="152" r="3" class="rf"/>' +
    '<circle cx="236" cy="148" r="3" class="rf"/>' +
    '<circle cx="250" cy="262" r="3" class="rf"/>' +
    '<circle cx="194" cy="266" r="3" class="rf"/>' +
    '<line x1="60" y1="124" x2="90" y2="124" class="ln2"/>' +
    '<line x1="60" y1="118" x2="60" y2="130" class="ln2"/>' +
    '<line x1="90" y1="118" x2="90" y2="130" class="ln2"/>' +
    '<text x="75" y="116" text-anchor="middle" class="r">Δ</text>' +
    '<line x1="360" y1="146" x2="360" y2="270" class="ln2"/>' +
    '<line x1="354" y1="146" x2="366" y2="146" class="ln2"/>' +
    '<line x1="354" y1="270" x2="366" y2="270" class="ln2"/>' +
    '<text x="366" y="212" class="r">h</text>' +
    '<line x1="10" y1="141" x2="56" y2="141" class="ar"/>' +
    '<text x="14" y="160" class="s">지진·풍하중</text>' +
    '<text x="120" y="60" class="r">θ = Δ / h (층간변위비)</text>' +
    '<line x1="95" y1="208" x2="30" y2="236" class="ld"/><circle cx="30" cy="236" r="2" class="dotf"/><text x="34" y="240" class="s">기둥 변형</text>' +
    '<line x1="220" y1="240" x2="150" y2="300" class="ld"/><circle cx="150" cy="300" r="2" class="dotf"/><text x="154" y="304" class="s">C/W Panel(Rocking)</text>' +
    '<line x1="194" y1="266" x2="290" y2="302" class="ld"/><circle cx="290" cy="302" r="2" class="dotf"/><text x="294" y="306" class="s">Fastener Slot</text>' +
    '<line x1="200" y1="141" x2="200" y2="100" class="ld"/><circle cx="200" cy="100" r="2" class="dotf"/><text x="204" y="104" class="s">상층 Slab</text>' +
    '<line x1="150" y1="275" x2="60" y2="300" class="ld"/><circle cx="60" cy="300" r="2" class="dotf"/><text x="64" y="304" class="s">하층 Slab</text>' +
    '<text x="450" y="26" class="b">[허용층간변위 KDS 41 17]</text>' +
    '<text x="450" y="48" class="s">특등급: 0.010 hsx</text>' +
    '<text x="450" y="66" class="s">내진 Ⅰ등급: 0.015 hsx</text>' +
    '<text x="450" y="84" class="s">내진 Ⅱ등급: 0.020 hsx</text>' +
    '<text x="450" y="106" class="s">C/W 추종: Sliding·Locking</text>' +
    '<text x="450" y="124" class="s">Unit Stack Joint 신축 흡수</text>' +
    '<text x="450" y="146" class="r">hsx: 해당 층 층고</text>' +
    '<line x1="200" y1="141" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ Δ/h 층간변위비 관리</text><line x1="330" y1="190" x2="440" y2="198" class="ld"/><circle cx="440" cy="198" r="2" class="dotf"/><text x="446" y="202" class="k3">③ 내진등급별 허용치</text><line x1="230" y1="200" x2="440" y2="218" class="ld"/><circle cx="440" cy="218" r="2" class="dotf"/><text x="446" y="222" class="k3">③ 비구조재 추종성 확보</text><line x1="194" y1="266" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ Fastener Slot·Clearance</text><text x="446" y="266" class="k4">④ Sealant 변위추종 폭</text><text x="446" y="286" class="k4">④ 칸막이·배관 Flexible 접합</text><text x="446" y="310" class="k5">⑤ 제진·Outrigger 강성↑</text><text x="446" y="330" class="k5">⑤ Mock-up 층간변위 시험</text>' +
    '</svg>',
  subs: [
    { h: '기준·특징', pts: ['Δ/h 층간변위비 관리', '내진등급별 허용치', '비구조재 추종성 확보', '특 {{0.010hsx}} · Ⅰ {{0.015hsx}} · Ⅱ {{0.020hsx}}'] },
    { h: '시공 시 유의사항', pts: ['Fastener Slot·Clearance', 'Sealant 변위추종 폭', '칸막이·배관 Flexible 접합', '외벽 설계: {{1/300}} Seal 무손상 · {{1/200}} Seal 외 무지장 · {{1/100}} 파손·탈락 없음(코어)', 'Unit Stack Joint {{±20mm}} 변위 대응(코어)'] },
    { h: '개선방안', pts: ['제진·Outrigger 강성↑', 'Mock-up 층간변위 시험'] }
  ],
  msg: '구조는 흔들려도 외피는 따라가야 한다 — Δ/h 관리와 추종 상세',
  mnemo: '층간변위 = 특1·일15·이2 (0.010·0.015·0.020 hsx) / C/W = 슬·락 (Sliding·Locking)',
  rel: ['Fastener 접합방식', 'Mock up test', '내진·면진·제진', 'Outrigger', 'Sealant'],
  det: { secs: [
    { h: '정의', def: '지진력이나 풍압력 등의 외력을 받아 어떤 층의 바닥과 바로 위층 바닥 사이에 생기는 [[수평방향 변위량의 차(Δ)]]로, 이 수평변위를 층고로 나눈 [[층간변위각 θ = Δ/h]]를 분자 1의 분수로 표시하며, [[허용층간변위]] 이내로 관리하고 커튼월 등 비구조재의 [[층간변위 추종성]]을 확보해야 한다.' },
    { h: '발생 Mechanism', fig: 'MAIN', flow: ['풍압력·지진력', '층간변위 발생', '마감재(C/W·칸막이) 손상'], ul: ['층간변위각 θ = Δx(변위량) ÷ h(층고)(코어)'] },
    { h: '관리기준 (허용층간변위·외벽 설계기준)', fig: { svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><text x="60" y="28" class="b">[외벽(C/W) 설계 기준 — 코어]</text><rect x="60" y="40" width="82" height="14" class="bx3"/><text x="148" y="51" class="s">1/300: Sealing재 손상 없음</text><rect x="60" y="60" width="123" height="14" class="bx2"/><text x="189" y="71" class="s">1/200: Sealing재 외 지장 없음</text><rect x="60" y="80" width="245" height="14" class="bx"/><text x="311" y="91" class="s">1/100: 파손·탈락 없음</text><line x1="60" y1="110" x2="612" y2="110" class="ar"/><line x1="142" y1="54" x2="142" y2="110" class="ln2 dash"/><line x1="183" y1="74" x2="183" y2="110" class="ln2 dash"/><line x1="305" y1="94" x2="305" y2="110" class="ln2 dash"/><line x1="142" y1="104" x2="142" y2="116" class="ln2"/><line x1="183" y1="104" x2="183" y2="116" class="ln2"/><line x1="305" y1="104" x2="305" y2="116" class="ln2"/><line x1="428" y1="104" x2="428" y2="116" class="ln2"/><line x1="551" y1="104" x2="551" y2="116" class="ln2"/><text x="60" y="128" text-anchor="middle" class="s">0</text><text x="142" y="128" text-anchor="middle" class="s">1/300</text><text x="183" y="128" text-anchor="middle" class="s">1/200</text><text x="305" y="128" text-anchor="middle" class="s">1/100</text><text x="428" y="128" text-anchor="middle" class="s">0.015</text><text x="551" y="128" text-anchor="middle" class="s">0.020</text><text x="612" y="100" text-anchor="end" class="s">층간변위각 θ = Δ/h</text><line x1="305" y1="132" x2="305" y2="148" class="ld"/><circle cx="305" cy="148" r="2" class="dotf"/><text x="305" y="162" text-anchor="middle" class="r">특등급 0.010hsx</text><line x1="428" y1="132" x2="428" y2="148" class="ld"/><circle cx="428" cy="148" r="2" class="dotf"/><text x="428" y="162" text-anchor="middle" class="r">Ⅰ등급 0.015hsx</text><line x1="551" y1="132" x2="551" y2="148" class="ld"/><circle cx="551" cy="148" r="2" class="dotf"/><text x="551" y="162" text-anchor="middle" class="r">Ⅱ등급 0.020hsx</text><text x="60" y="188" class="b">[허용층간변위 — KDS 41 17 00]</text></svg>', cap: '[상세] 외벽 설계 층간변위 기준(1/300·1/200·1/100)과 KDS 허용층간변위' }, tbl: { head: ['구분', '기준', '근거'], rows: [['허용층간변위 — 내진 특등급', '{{0.010 hsx}}', 'KDS 41 17 00'], ['내진 Ⅰ등급', '{{0.015 hsx}}', 'KDS 41 17 00'], ['내진 Ⅱ등급', '{{0.020 hsx}}', 'KDS 41 17 00'], ['외벽 설계 1/300', 'Sealing재가 손상되지 않을 것', '코어 p086'], ['외벽 설계 1/200', 'Sealing재 이외는 지장 없을 것', '코어 p086'], ['외벽 설계 1/100', '파손·탈락되지 않을 것', '코어 p086']] }, ul2: ['hsx: 해당 층의 층고'] },
    { h: '층간변위 대응 설계방법', tbl: { head: ['구분', '방식', '내용'], rows: [['Unit 설계', 'Unit System', 'Stack joint {{±20mm}} 변위 대응(코어)'], ['Unit 설계', 'Stick System', 'Splice joint로 변위 대응(허용량 확인 필요)'], ['Fastener 설계', 'Fixed Type', 'Unit 자체에서 변형 흡수'], ['Fastener 설계', 'Locking Type', 'Panel이 종으로 긴 부재 변형 흡수'], ['Fastener 설계', 'Sliding Type', 'Panel이 횡으로 긴 부재 변형 흡수']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 구조해석 층간변위 → C/W·칸막이·배관 설계 변위량 제시', '[전] Mock-up 층간변위시험 계획(설계 층간변위 가력 후 기밀·수밀 재확인)', '[중] Fastener Slot·Clearance 확보, 볼트 과조임 금지(Slot 기능 유지)', '[중] Sealant Joint 폭을 변위추종 가능하게 확보, 2면 접착', '[중] 칸막이 상부 Slip joint·배관 Flexible joint 시공', '[후] 지진·강풍 후 외장재·Fastener 점검'] },
    { h: '개선방안', ul: ['제진(Damper)·Outrigger로 구조 강성 증대 → 층간변위 저감', 'Unit wall 채택으로 변위 추종성 향상', '비구조요소 내진설계 강화(KDS 41 17 00 비구조요소)'] }
  ] },
  src: '근거: KDS 41 17 00 허용층간변위(특 0.010hsx·Ⅰ 0.015hsx·Ⅱ 0.020hsx) ; 디테일용어 101-200 코어 p086(문제185: θ=Δx/h, 외벽 설계기준 1/300·1/200·1/100, Unit Stack Joint ±20mm, Fastener별 대응) / 마법지 p014 요구성능 층간변위 추종성, 설계 Bar검토(층간변위검토), 실물대 층간변위시험; 합격답안 8.C.W공사 p6 실물대 시험(층간변위)'
},
157: {
  title: '전도성 타일(Conductive tile)',
  cat: '마감(타일·방수·목재)',
  key: ['정전기', '도전재(카본·금속분)', '동판(Copper Strip)', '접지(Earth)', '도전성 접착제', '도전성 줄눈', '전기저항 측정', '수술실·전산실'],
  www: { what: '타일 소지·접착제·줄눈에 [[도전재(카본·금속분)]]를 넣어 [[정전기]]를 바닥 [[동판(Copper Strip)]]과 [[접지(Earth)]]로 방전시키는 바닥 타일', why: '[[수술실·전산실]]·화약류 취급소·Clean room의 정전기 스파크·폭발·장비 오작동 방지', how: '바탕 정리 → 동판 격자 설치·접지 연결 → [[도전성 접착제]] 도포 → 타일 압착 → [[도전성 줄눈]] → [[전기저항 측정]]' },
  tag: '재료·기능·시공',
  def: '타일 소지와 접착제·줄눈에 [[카본·금속분 등 도전재]]를 혼입하여 인체·장비에 대전된 [[정전기]]를 바닥 [[동판]]과 [[접지]]로 방전시키는 타일로, [[수술실·전산실·화약류 취급소]]의 스파크·폭발·장비 오작동을 방지',
  wwh: ['도전성 바닥타일', '정전기 폭발 방지', '동판·접지·저항측정'],
  figT: '전도성 타일의 정전기 방전원리 및 시공',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="230" width="410" height="50" class="conc"/>' +
    '<text x="40" y="262" class="s">RC Slab</text>' +
    '<rect x="20" y="214" width="410" height="8" class="bx3"/>' +
    '<rect x="80" y="216" width="12" height="4" class="rf"/><rect x="200" y="216" width="12" height="4" class="rf"/><rect x="320" y="216" width="12" height="4" class="rf"/>' +
    '<rect x="23" y="196" width="70" height="18" class="bx2"/><rect x="99" y="196" width="70" height="18" class="bx2"/><rect x="175" y="196" width="70" height="18" class="bx2"/><rect x="251" y="196" width="70" height="18" class="bx2"/><rect x="327" y="196" width="70" height="18" class="bx2"/>' +
    '<circle cx="120" cy="128" r="8" class="bx"/>' +
    '<line x1="120" y1="136" x2="120" y2="170" class="ln"/>' +
    '<line x1="120" y1="170" x2="110" y2="196" class="ln"/>' +
    '<line x1="120" y1="170" x2="130" y2="196" class="ln"/>' +
    '<line x1="104" y1="148" x2="136" y2="148" class="ln"/>' +
    '<text x="140" y="140" class="r">+ + +</text>' +
    '<rect x="250" y="150" width="80" height="46" class="bx3"/>' +
    '<text x="290" y="178" text-anchor="middle" class="s">전산·의료장비</text>' +
    '<polyline points="120,196 120,218 326,218 410,218 410,300" fill="none" class="rd dash"/>' +
    '<line x1="398" y1="300" x2="422" y2="300" class="ln"/>' +
    '<line x1="402" y1="305" x2="418" y2="305" class="ln"/>' +
    '<line x1="406" y1="310" x2="414" y2="310" class="ln"/>' +
    '<line x1="60" y1="205" x2="40" y2="120" class="ld"/><circle cx="40" cy="120" r="2" class="dotf"/><text x="44" y="124" class="bl">전도성 타일</text>' +
    '<line x1="120" y1="160" x2="40" y2="150" class="ld"/><circle cx="40" cy="150" r="2" class="dotf"/><text x="44" y="154" class="s">인체 대전</text>' +
    '<line x1="86" y1="220" x2="60" y2="300" class="ld"/><circle cx="60" cy="300" r="2" class="dotf"/><text x="64" y="304" class="s">동판(Copper Strip) 격자</text>' +
    '<line x1="160" y1="220" x2="200" y2="320" class="ld"/><circle cx="200" cy="320" r="2" class="dotf"/><text x="204" y="324" class="s">도전성 접착제</text>' +
    '<line x1="170" y1="205" x2="190" y2="110" class="ld"/><circle cx="190" cy="110" r="2" class="dotf"/><text x="194" y="114" class="s">도전성 줄눈</text>' +
    '<line x1="410" y1="305" x2="380" y2="330" class="ld"/><circle cx="380" cy="330" r="2" class="dotf"/><text x="376" y="334" text-anchor="end" class="s">접지(Earth)</text>' +
    '<text x="450" y="26" class="b">[저항 기준·측정]</text>' +
    '<text x="450" y="48" class="r">전도성: 2.5×10⁴~10⁶ Ω</text>' +
    '<text x="450" y="66" class="s">정전기 방지: 10⁶~10⁹ Ω</text>' +
    '<text x="450" y="84" class="s">전극 2점간 저항 측정</text>' +
    '<text x="450" y="102" class="s">적용: 수술실·전산실·화약고</text>' +
    '<text x="450" y="120" class="s">반도체 Clean Room·방폭실</text>' +
    '<text x="450" y="144" class="r">정전기 방전 → 폭발·오작동 방지</text>' +
    '<line x1="60" y1="205" x2="440" y2="178" class="ld"/><circle cx="440" cy="178" r="2" class="dotf"/><text x="446" y="182" class="k3">③ 카본·금속분 도전재 혼입</text><line x1="326" y1="218" x2="440" y2="198" class="ld"/><circle cx="440" cy="198" r="2" class="dotf"/><text x="446" y="202" class="k3">③ 동판 격자 → 접지 연결</text><text x="446" y="222" class="k3">③ 저항값 범위 관리</text><line x1="174" y1="210" x2="440" y2="242" class="ld"/><circle cx="440" cy="242" r="2" class="dotf"/><text x="446" y="246" class="k4">④ 일반 접착제·줄눈 금지</text><text x="446" y="266" class="k4">④ Wax·절연 코팅 금지</text><text x="446" y="286" class="k4">④ 시공 후 저항 측정·기록</text><text x="446" y="310" class="k5">⑤ 정기 저항 점검</text><text x="446" y="330" class="k5">⑤ 습도 관리·제전 설비</text>' +
    '</svg>',
  subs: [
    { h: '구성·원리', pts: ['카본·금속분 도전재 혼입', '동판 격자 → 접지 연결', '저항값 범위 관리'] },
    { h: '시공 시 유의사항', pts: ['일반 접착제·줄눈 금지', 'Wax·절연 코팅 금지', '시공 후 저항 측정·기록', '동판 연속성·접지선 연결 확인', '바탕 평활도 확인·전도성 수성 접착제·Open Time 준수(코어)'] },
    { h: '개선방안', pts: ['정기 저항 점검', '습도 관리·제전 설비'] }
  ],
  msg: '정전기는 쌓이기 전에 흘려보낸다 — 타일·줄눈·접착제·동판·접지가 한 회로',
  mnemo: '전도성 = 타·줄·접·동·지 (타일·줄눈·접착제·동판·접지) 한 회로',
  rel: ['정전기 방지 바닥재', '접지', 'Clean Room', '타일 접착력 시험', 'Access Floor'],
  det: { secs: [
    { h: '정의', def: '[[정전기]]를 바닥을 통해 방전시켜 전기·전자·컴퓨터 장비를 정전기로부터 보호하는 타일로, 특수 망목 구조의 [[전도입자]]로 [[반영구적]] 정전기 보호 성능을 확보하며, [[전도성 접착제]]·[[동판(Copper Strip)]]·[[접지]]와 함께 하나의 방전 회로를 구성한다.' },
    { h: '시공 상세 및 시공 과정', fig: 'MAIN', flow: ['바탕 정리', '접지 시공(동판 격자·접지선)', '전도성 접착제 도포', '타일 부착', '전도성 줄눈', '저항 측정·기록'], ul: ['반도체 공장 등 정전기 피해가 예상되는 곳에 사용(코어)', '바탕: 분진방지 도장(코어)'] },
    { h: '전도성 타일의 특징', tbl: { head: ['구분', '내용'], rows: [['전도성', '반영구적으로 유지 가능(코어)'], ['내구', '내마모성·내수성·내약품성 우수(코어)'], ['안전', '난연성 타일로 화재 위험 방지(코어)'], ['적용', '반도체 공장·전산실·수술실·화약류 취급소·Clean room']] } },
    { h: '관리기준·시험기준', fig: { svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg"><text x="20" y="18" class="b">[평면] 동판 격자·접지</text><rect x="20" y="30" width="240" height="180" class="bx2"/><line x1="55" y1="30" x2="55" y2="210" class="ln2"/><line x1="90" y1="30" x2="90" y2="210" class="ln2"/><line x1="125" y1="30" x2="125" y2="210" class="ln2"/><line x1="160" y1="30" x2="160" y2="210" class="ln2"/><line x1="195" y1="30" x2="195" y2="210" class="ln2"/><line x1="230" y1="30" x2="230" y2="210" class="ln2"/><line x1="20" y1="65" x2="260" y2="65" class="ln2"/><line x1="20" y1="100" x2="260" y2="100" class="ln2"/><line x1="20" y1="135" x2="260" y2="135" class="ln2"/><line x1="20" y1="170" x2="260" y2="170" class="ln2"/><line x1="90" y1="30" x2="90" y2="210" class="rd"/><line x1="195" y1="30" x2="195" y2="210" class="rd"/><line x1="20" y1="135" x2="290" y2="135" class="rd"/><line x1="290" y1="135" x2="290" y2="158" class="ln"/><line x1="278" y1="158" x2="302" y2="158" class="ln"/><line x1="282" y1="164" x2="298" y2="164" class="ln"/><line x1="286" y1="170" x2="294" y2="170" class="ln"/><line x1="90" y1="200" x2="90" y2="222" class="ld"/><circle cx="90" cy="222" r="2" class="dotf"/><text x="94" y="230" class="r">동판(Copper Strip)</text><line x1="290" y1="172" x2="262" y2="222" class="ld"/><circle cx="262" cy="222" r="2" class="dotf"/><text x="240" y="236" class="s">접지(Earth)</text><line x1="230" y1="50" x2="268" y2="46" class="ld"/><circle cx="268" cy="46" r="2" class="dotf"/><text x="272" y="50" class="s">전도성 타일</text><line x1="230" y1="82" x2="268" y2="80" class="ld"/><circle cx="268" cy="80" r="2" class="dotf"/><text x="272" y="84" class="s">도전성 줄눈</text><text x="360" y="18" class="b">[단면] 저항 측정</text><rect x="360" y="120" width="260" height="14" class="bx2"/><rect x="360" y="134" width="260" height="6" class="bx3"/><rect x="470" y="134" width="20" height="4" class="rf"/><rect x="360" y="140" width="260" height="34" class="conc"/><rect x="400" y="108" width="24" height="12" class="bx"/><rect x="556" y="108" width="24" height="12" class="bx"/><polyline points="412,108 412,70 488,70" fill="none" class="ln2"/><polyline points="568,108 568,70 512,70" fill="none" class="ln2"/><rect x="488" y="58" width="24" height="24" class="bx3"/><text x="500" y="75" text-anchor="middle" class="b">Ω</text><text x="490" y="100" text-anchor="middle" class="s">2점간 저항 측정</text><line x1="406" y1="114" x2="380" y2="92" class="ld"/><circle cx="380" cy="92" r="2" class="dotf"/><text x="376" y="96" text-anchor="end" class="s">전극</text><line x1="512" y1="62" x2="540" y2="44" class="ld"/><circle cx="540" cy="44" r="2" class="dotf"/><text x="544" y="48" class="s">저항계(Ω)</text><line x1="530" y1="137" x2="540" y2="196" class="ld"/><circle cx="540" cy="196" r="2" class="dotf"/><text x="544" y="200" class="s">전도성 접착제</text><line x1="480" y1="138" x2="450" y2="196" class="ld"/><circle cx="450" cy="196" r="2" class="dotf"/><text x="446" y="200" text-anchor="end" class="s">동판</text><text x="490" y="226" text-anchor="middle" class="r">전도성 2.5×10⁴~10⁶Ω (확인 필요)</text></svg>', cap: '[상세] 동판 격자·접지 구성(평면) 및 전극 2점간 저항 측정(단면)' }, tbl: { head: ['항목', '기준', '근거'], rows: [['전도성 바닥 저항', '{{2.5×10⁴~10⁶ Ω}}', 'NFPA 99 구 기준(확인 필요)'], ['정전기 소산성 바닥', '10⁶~10⁹ Ω', 'ANSI/ESD S20.20 관례(확인 필요)'], ['측정', '전극 2점간·전극-접지간 저항 측정, 시공 후 및 정기 측정', '측정조건 확인 필요'], ['접착제', '전도성 수성 접착제, Open Time 준수', '코어 p088'], ['바탕', '평활도 확인, 분진방지 도장', '코어 p088']] } },
    { h: '시공 시 유의사항 (시공 전·중·후)', ul: ['[전] 시공 전 바탕 처리 및 평활도 확인(코어)', '[전] 동판 격자 배치·접지선 연결 위치 계획(전기 공종 협의)', '[중] 접착제 도포 시 Open Time 준수(코어)', '[중] 전도성 수성 접착제 사용(코어) — 일반 접착제·줄눈 사용 금지', '[중] 동판 연속성 유지·접지 단자 연결', '[후] 시공 후 저항 측정·기록, Wax·절연성 코팅 금지', '[후] 정기 저항 점검·습도 관리'] },
    { h: '개선방안', ul: ['제전 설비·습도 관리 병행', '전도성 Epoxy 바닥·전도성 Access floor 등 대안 비교', '유지관리 매뉴얼(세정제·Wax 금지) 제공'] }
  ] },
  src: '근거: 디테일용어 101-200 코어 p088(문제187: 정전기 방전·전기전자 장비 보호, 반영구적 전도성, 시공순서 바탕정리→접지시공→접착제 도포→타일부착, 분진방지 도장, 전도성 수성 접착제·Open Time); 9-1.마감공사 합격답안에는 해당 용어 없음 / 저항 2.5×10⁴~10⁶Ω(NFPA 99 구 기준)·10⁶~10⁹Ω 정전기 방지 범위는 확인 필요'
}
});
