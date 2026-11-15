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
  src: '근거: 디테일용어 101-200 코어 p088(문제187: 정전기 방전·전기전자 장비 보호, 반영구적 전도성, 시공순서 바탕정리→접지시공→접착제 도포→타일부착, 분진방지 도장, 전도성 수성 접착제·Open Time); 9-1.마감공사 합격답안에는 해당 용어 없음 / 저항 2.5×10⁴~10⁶Ω(NFPA 99 구 기준)·10⁶~10⁹Ω 정전기 방지 범위는 확인 필요'
}
});
