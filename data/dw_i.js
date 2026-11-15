// 디테일원 용어250 — group i (181~206) · 형식은 data/SCHEMA_DW.md
window.DW = Object.assign(window.DW || {}, {
181: {
  title: 'SSG(Structural Sealant Glazing System)공법',
  cat: '창호·유리',
  key: ['구조용 실란트', '실리콘 Sealant', '4변·2변 지지', 'Bite(접착폭)', 'Glue Line(두께)', '접착성 시험', 'Mock-up Test', 'Setting Block'],
  www: { what: '유리를 Mullion·Frame에 [[구조용 실란트]]만으로 접착 고정하여 외부에 Frame이 드러나지 않는 글레이징 공법', why: '외관 평활·개방감 확보, 접착 불량 시 [[유리 탈락]] 사고 → Bite·접착성 확보가 핵심', how: '[[Bite(접착폭)]]·[[Glue Line(두께)]] 산정 → [[접착성 시험]] → 공장 시공·완전 양생 → [[Mock-up Test]] → 현장 설치' },
  tag: '공법·접합·성능',
  def: '유리를 Mullion·Frame에 [[구조용 실리콘 실란트]]로 접착 고정하여 풍하중을 실란트 [[Bite(접착폭)]]가 부담하게 하는 무(無)Frame 외관 공법으로, {{Bite ≥ 6mm}}·{{Glue line 6~12mm}} 확보',
  wwh: ['구조실란트 접착고정', '평활외관·탈락방지', 'Bite산정·접착시험'],
  figT: 'SSG 수평단면 구성 및 Bite 산정원리',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="30" class="b">[수평단면 — 외부↑ 실내↓]</text>' +
    '<line x1="90" y1="42" x2="90" y2="100" class="ar"/>' +
    '<line x1="330" y1="42" x2="330" y2="100" class="ar"/>' +
    '<text x="100" y="64" class="s">풍압(정압·부압)</text>' +
    '<rect x="30" y="104" width="170" height="16" class="bx3"/>' +
    '<rect x="212" y="104" width="178" height="16" class="bx3"/>' +
    '<rect x="200" y="104" width="12" height="10" class="rf"/>' +
    '<circle cx="206" cy="118" r="4" class="bf"/>' +
    '<rect x="176" y="120" width="22" height="16" class="rf"/>' +
    '<rect x="214" y="120" width="22" height="16" class="rf"/>' +
    '<rect x="164" y="120" width="12" height="16" class="bx"/>' +
    '<rect x="236" y="120" width="12" height="16" class="bx"/>' +
    '<rect x="160" y="136" width="92" height="140" class="bx2"/>' +
    '<line x1="160" y1="206" x2="252" y2="206" class="ln2"/>' +
    '<text x="30" y="270" class="s">실내</text>' +
    '<line x1="60" y1="120" x2="50" y2="150" class="ld"/><circle cx="50" cy="150" r="2" class="dotf"/><text x="55" y="154" class="s">유리(복층·강화)</text>' +
    '<line x1="206" y1="104" x2="240" y2="84" class="ld"/><circle cx="240" cy="84" r="2" class="dotf"/><text x="245" y="88" class="s">Weather Seal(2차 방수)</text>' +
    '<line x1="225" y1="122" x2="300" y2="130" class="ld"/><circle cx="300" cy="130" r="2" class="dotf"/><text x="305" y="134" class="r">Bite ≥ 6mm</text>' +
    '<line x1="240" y1="134" x2="300" y2="152" class="ld"/><circle cx="300" cy="152" r="2" class="dotf"/><text x="305" y="156" class="r">Glue line 6~12mm</text>' +
    '<line x1="198" y1="132" x2="300" y2="174" class="ld"/><circle cx="300" cy="174" r="2" class="dotf"/><text x="305" y="178" class="r">구조용 실란트</text>' +
    '<line x1="170" y1="128" x2="120" y2="180" class="ld"/><circle cx="120" cy="180" r="2" class="dotf"/><text x="115" y="184" text-anchor="end" class="s">Spacer(양면 Tape)</text>' +
    '<line x1="252" y1="240" x2="290" y2="240" class="ld"/><circle cx="290" cy="240" r="2" class="dotf"/><text x="295" y="244" class="s">Mullion(Al 구조재)</text>' +
    '<line x1="206" y1="122" x2="150" y2="214" class="ld"/><circle cx="150" cy="214" r="2" class="dotf"/><text x="145" y="218" text-anchor="end" class="s">Backer Rod</text>' +
    '<rect x="30" y="290" width="390" height="40" class="bx"/>' +
    '<text x="40" y="307" class="s">Bite = (a/2 × P) / 0.14MPa (a: 유리 단변, P: 설계풍압)</text>' +
    '<text x="40" y="323" class="s">자중: 2변 SSG는 Setting Block 하부 지지</text>' +
    '<text x="446" y="30" class="b">[SSG 핵심기준]</text>' +
    '<text x="446" y="52" class="k3">③ 4변·2변 SSG 지지</text><line x1="236" y1="124" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ Bite ≥ 6mm·≥ Glue</text><text x="446" y="92" class="k3">③ 구조용 실리콘 실란트</text><line x1="390" y1="112" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 접착성·적합성 시험</text><text x="446" y="142" class="k4">④ 피착면 청소·Primer</text><text x="446" y="162" class="k4">④ 공장 시공·완전 양생</text><text x="446" y="192" class="k5">⑤ Mock-up·풍동 Test</text><line x1="252" y1="270" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="446" y="212" class="k5">⑤ 탈락방지 Safety Clip</text><text x="446" y="232" class="k5">⑤ 자중 Setting Block</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 설계기준', pts: ['4변·2변 SSG 지지방식', '[[Bite(접착폭)]] {{≥ 6mm}}, Bite ≥ Glue line', '[[구조용 실리콘 실란트]](2액형) + Spacer·Backer Rod'] },
    { h: '시공 시 유의사항', pts: ['[[접착성 시험]]·자재 적합성 시험', '피착면 청소(2-wipe)·Primer 도포', '공장 시공·완전 양생 후 반입(양생 중 이동 금지)'] },
    { h: '개선방안', pts: ['[[Mock-up Test]]·풍동시험으로 성능 확인', '탈락방지 Safety Clip(기계적 보조고정)', '자중은 [[Setting Block]]으로 하부 지지'] }
  ],
  msg: '프레임 대신 실란트가 유리를 잡는다 — Bite·접착성 확보가 탈락 방지의 핵심',
  mnemo: 'SSG = Bite 6 · Glue 6~12 · 접착시험 → “66 바글접”',
  rel: ['SPG(DPG)', 'Weather Seal', 'Backup재·Bond Breaker', '커튼월 Mock-up Test', 'Setting Block'],
  src: '근거: ASTM C1401(SSG 설계 Guide: Bite·Glue line·설계강도 0.14MPa) / 마법지 9-2 유리(SSG·DPG공법) / 건축공사표준시방서 유리 및 실링공사 — Glue line 상한 12mm 확인 필요'
},
182: {
  title: 'SPG(Structural Point Glazing)',
  cat: '창호·유리',
  key: ['점지지', 'Spider Fitting', 'Rotule Bolt(회전볼트)', '강화(접합)유리', 'Heat Soak Test', 'Truss·Cable 지지', 'Silicone 줄눈', 'DPG'],
  www: { what: '유리 모서리를 천공하여 [[Rotule Bolt(회전볼트)]]와 [[Spider Fitting]]으로 지지구조에 [[점지지]]하는 무(無)Frame 글레이징', why: 'Frame 없는 최대 투명성·개방감 확보, 유리 자체가 풍하중을 지지구조로 전달', how: '구조해석 → 유리 천공 후 강화·[[Heat Soak Test]] → 지지구조(Truss·Cable) 설치 → Spider·Bolt 체결 → [[Silicone 줄눈]]' },
  tag: '공법·부재·접합',
  def: '[[강화(접합)유리]]의 모서리를 천공하여 [[Rotule Bolt]]와 [[Spider Fitting]]으로 Truss·Cable·Glass Fin 등 지지구조에 [[점지지]]하고 줄눈은 Silicone으로 처리하는 Frame-less 유리공법',
  wwh: ['유리 점지지', '최대 투명·개방감', 'Spider·Rotule 체결'],
  figT: 'SPG 점지지 구성 및 하중전달 원리',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[입면]</text>' +
    '<text x="262" y="26" class="b">[Rotule 단면]</text>' +
    '<rect x="30" y="40" width="100" height="100" class="bx3"/>' +
    '<rect x="140" y="40" width="100" height="100" class="bx3"/>' +
    '<rect x="30" y="150" width="100" height="100" class="bx3"/>' +
    '<rect x="140" y="150" width="100" height="100" class="bx3"/>' +
    '<line x1="135" y1="34" x2="135" y2="262" class="ln2 dash"/>' +
    '<line x1="117" y1="127" x2="153" y2="163" class="ln"/>' +
    '<line x1="153" y1="127" x2="117" y2="163" class="ln"/>' +
    '<circle cx="135" cy="145" r="6" class="bx2"/>' +
    '<circle cx="117" cy="127" r="4" class="rf"/>' +
    '<circle cx="153" cy="127" r="4" class="rf"/>' +
    '<circle cx="117" cy="163" r="4" class="rf"/>' +
    '<circle cx="153" cy="163" r="4" class="rf"/>' +
    '<rect x="300" y="50" width="14" height="180" class="bx3"/>' +
    '<line x1="307" y1="50" x2="307" y2="230" class="ln2"/>' +
    '<path d="M300,138 L306,132 L306,158 L300,152 Z" class="rf"/>' +
    '<line x1="306" y1="145" x2="340" y2="145" class="ln"/>' +
    '<circle cx="326" cy="145" r="7" class="bx"/>' +
    '<rect x="340" y="128" width="22" height="34" class="bx2"/>' +
    '<line x1="362" y1="145" x2="384" y2="145" class="ln"/>' +
    '<rect x="384" y="110" width="20" height="70" class="bx2"/>' +
    '<line x1="258" y1="100" x2="296" y2="100" class="ar"/>' +
    '<line x1="258" y1="190" x2="296" y2="190" class="ar"/>' +
    '<text x="262" y="90" class="s">풍압</text>' +
    '<line x1="80" y1="200" x2="60" y2="280" class="ld"/><circle cx="60" cy="280" r="2" class="dotf"/><text x="65" y="284" class="s">강화·접합 복층유리</text>' +
    '<line x1="135" y1="258" x2="200" y2="280" class="ld"/><circle cx="200" cy="280" r="2" class="dotf"/><text x="205" y="284" class="s">지지 Truss·Cable</text>' +
    '<line x1="141" y1="149" x2="180" y2="300" class="ld"/><circle cx="180" cy="300" r="2" class="dotf"/><text x="185" y="304" class="s">Spider Fitting(4-Arm)</text>' +
    '<line x1="117" y1="163" x2="35" y2="320" class="ld"/><circle cx="35" cy="320" r="2" class="dotf"/><text x="40" y="324" class="s">천공부 Rotule Bolt</text>' +
    '<line x1="135" y1="195" x2="250" y2="236" class="ld"/><circle cx="250" cy="236" r="2" class="dotf"/><text x="255" y="240" class="s">Silicone 줄눈</text>' +
    '<line x1="326" y1="138" x2="322" y2="70" class="ld"/><circle cx="322" cy="70" r="2" class="dotf"/><text x="327" y="74" class="s">Rotule 볼조인트</text>' +
    '<line x1="351" y1="128" x2="350" y2="92" class="ld"/><circle cx="350" cy="92" r="2" class="dotf"/><text x="355" y="96" class="s">Spider Arm</text>' +
    '<line x1="394" y1="180" x2="380" y2="206" class="ld"/><circle cx="380" cy="206" r="2" class="dotf"/><text x="385" y="210" class="s">지지 Tube</text>' +
    '<line x1="303" y1="145" x2="330" y2="266" class="ld"/><circle cx="330" cy="266" r="2" class="dotf"/><text x="335" y="270" class="s">접시머리 Bolt</text>' +
    '<text x="446" y="30" class="b">[SPG 핵심]</text>' +
    '<text x="446" y="52" class="k3">③ 4점 지지·회전 흡수</text><text x="446" y="72" class="k3">③ 강화·접합 복층유리</text><line x1="404" y1="140" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ Truss·Cable·Fin 지지</text><text x="446" y="122" class="k4">④ 천공 후 강화 처리</text><text x="446" y="142" class="k4">④ HST 290℃·2시간</text><text x="446" y="162" class="k4">④ Bolt 체결 Torque 관리</text><text x="446" y="192" class="k5">⑤ 접합유리 비산방지</text><text x="446" y="212" class="k5">⑤ 구조해석·Mock-up</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 특징', pts: ['4점 지지·[[Rotule Bolt]] 회전으로 변위 흡수', '[[강화(접합)유리]]·복층유리 사용', 'Truss·Cable·Glass Fin [[지지구조]]'] },
    { h: '시공 시 유의사항', pts: ['천공·면취 후 강화 처리(강화 후 가공 금지)', '[[Heat Soak Test]] {{290℃·2시간}}으로 자파 예방', 'Bolt 체결 Torque·수직수평 정밀도 관리'] },
    { h: '개선방안', pts: ['접합유리로 파손 시 비산·낙하 방지', '구조해석·Mock-up Test로 처짐·응력 검증'] }
  ],
  msg: '유리를 점(Point)으로 잡고 Rotule이 회전으로 변위를 흡수 — 강화유리 자파 관리가 관건',
  mnemo: 'S·P·G = Spider·Point·Glass → “거미가 점으로 유리를 잡는다”',
  rel: ['SSG', 'DPG(Dot Point Glazing)', 'Heat Soak Test', '유리 자파현상', 'Cable Truss'],
  src: '근거: 마법지 9-2 유리(SSG·DPG공법) / EN 14179(HST 290±10℃·2h) / 건축공사표준시방서 유리공사'
},
183: {
  title: '유리의 자파(自破)현상(Spontaneous Breakage)',
  cat: '창호·유리',
  key: ['NiS(황화니켈)', '상전이·부피팽창', '중앙 인장응력층', '강화유리', 'Heat Soak Test', '나비모양(Butterfly) 파단', '배강도유리', '접합유리'],
  www: { what: '강화유리 속 [[NiS(황화니켈)]] 불순물의 [[상전이·부피팽창]]에 의한 외력 없는 자연 파손', why: '설치 후 무작위 발생 → 고층 유리 낙하·인명 피해, 원인 규명 곤란', how: 'NiS 혼입 → 강화 급랭 잔류 → 상온 상전이·팽창 → 인장층 균열 → 예방: [[Heat Soak Test]] {{290℃·2시간}}' },
  tag: '현상·원인·대책',
  def: '[[강화유리]] 내부에 혼입된 [[NiS(황화니켈)]]가 상온에서 서서히 [[상전이·부피팽창]](약 {{2~4%}})하여 [[중앙 인장응력층]]에서 외력 없이 파손되는 현상',
  wwh: ['NiS 팽창 자연파손', '유리 낙하 방지', 'HST·배강도 적용'],
  figT: '강화유리 응력분포 및 NiS 자파 Mechanism',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[강화유리 단면·응력분포]</text>' +
    '<rect x="40" y="60" width="240" height="60" class="bx3"/>' +
    '<line x1="40" y1="72" x2="280" y2="72" class="ln2 dash"/>' +
    '<line x1="40" y1="108" x2="280" y2="108" class="ln2 dash"/>' +
    '<circle cx="170" cy="90" r="5" class="rf"/>' +
    '<line x1="176" y1="90" x2="198" y2="90" class="ar"/>' +
    '<line x1="164" y1="90" x2="142" y2="90" class="ar"/>' +
    '<line x1="170" y1="85" x2="186" y2="62" class="rd"/>' +
    '<line x1="170" y1="95" x2="154" y2="118" class="rd"/>' +
    '<line x1="320" y1="56" x2="320" y2="124" class="ln"/>' +
    '<path d="M290,60 Q380,90 290,120" fill="none" class="ln"/>' +
    '<line x1="60" y1="72" x2="60" y2="44" class="ld"/><circle cx="60" cy="44" r="2" class="dotf"/><text x="65" y="48" class="s">압축층(표면 약 1/5)</text>' +
    '<line x1="292" y1="62" x2="300" y2="44" class="ld"/><circle cx="300" cy="44" r="2" class="dotf"/><text x="305" y="48" class="s">표면 압축응력(−)</text>' +
    '<line x1="335" y1="90" x2="360" y2="96" class="ld"/><circle cx="360" cy="96" r="2" class="dotf"/><text x="365" y="100" class="s">중앙 인장(+)</text>' +
    '<line x1="175" y1="92" x2="220" y2="140" class="ld"/><circle cx="220" cy="140" r="2" class="dotf"/><text x="225" y="144" class="r">NiS 입자(황화니켈)</text>' +
    '<text x="20" y="150" class="b">[파단 형태]</text>' +
    '<path d="M110,190 C80,160 60,215 110,190 C160,165 140,220 110,190" fill="none" class="rd"/>' +
    '<circle cx="110" cy="190" r="3" class="rf"/>' +
    '<line x1="72" y1="182" x2="40" y2="166" class="ln2"/>' +
    '<line x1="150" y1="200" x2="190" y2="215" class="ln2"/>' +
    '<line x1="70" y1="200" x2="36" y2="222" class="ln2"/>' +
    '<line x1="150" y1="178" x2="192" y2="162" class="ln2"/>' +
    '<line x1="110" y1="190" x2="215" y2="186" class="ld"/><circle cx="215" cy="186" r="2" class="dotf"/><text x="220" y="190" class="s">나비모양 기점(NiS)</text>' +
    '<line x1="190" y1="215" x2="215" y2="212" class="ld"/><circle cx="215" cy="212" r="2" class="dotf"/><text x="220" y="216" class="s">전면 입자상 파괴</text>' +
    '<rect x="20" y="248" width="92" height="28" class="bx2"/><text x="66" y="266" text-anchor="middle" class="s">① NiS 혼입</text>' +
    '<rect x="120" y="248" width="92" height="28" class="bx2"/><text x="166" y="266" text-anchor="middle" class="s">② 강화 급랭 잔류</text>' +
    '<rect x="220" y="248" width="92" height="28" class="bx2"/><text x="266" y="266" text-anchor="middle" class="s">③ 상전이 팽창</text>' +
    '<rect x="320" y="248" width="92" height="28" class="bx"/><text x="366" y="266" text-anchor="middle" class="s">④ 외력 없이 파손</text>' +
    '<line x1="112" y1="262" x2="120" y2="262" class="ar"/>' +
    '<line x1="212" y1="262" x2="220" y2="262" class="ar"/>' +
    '<line x1="312" y1="262" x2="320" y2="262" class="ar"/>' +
    '<text x="20" y="298" class="s">α형(고온) → β형(상온) 상전이 시 부피 약 2~4% 팽창 → 인장층 균열</text>' +
    '<text x="20" y="318" class="s">설치 후 수개월~수년 내 무작위 발생 → 고층 유리 낙하 위험</text>' +
    '<text x="446" y="30" class="b">[자파 원인·대책]</text>' +
    '<text x="446" y="52" class="k3">③ NiS 상전이·팽창</text><text x="446" y="72" class="k3">③ 강화유리 고유 현상</text><text x="446" y="92" class="k3">③ 나비모양 파단 기점</text><line x1="412" y1="256" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ HST 290℃·2시간</text><text x="446" y="142" class="k4">④ 원판 NiS 저감 관리</text><text x="446" y="162" class="k4">④ 단부 흠집·충격 관리</text><line x1="300" y1="190" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 배강도·접합유리</text><text x="446" y="212" class="k5">⑤ 비산방지 Film 부착</text><line x1="412" y1="270" x2="440" y2="228" class="ld"/><circle cx="440" cy="228" r="2" class="dotf"/><text x="446" y="232" class="k5">⑤ 낙하방지 설계</text>' +
    '</svg>',
  subs: [
    { h: '발생원리 및 특징', pts: ['[[NiS(황화니켈)]] α→β [[상전이·부피팽창]] {{2~4%}}', '[[강화유리]] 고유 현상(중앙 인장층 존재)', '[[나비모양(Butterfly) 파단]] 기점 → 전면 입자상 파괴'] },
    { h: '시공 시 유의사항', pts: ['[[Heat Soak Test]] {{290℃·2시간}} 유지 후 선별', '원판 유리 NiS 저감(원료·용해 관리)', '단부 흠집·충격·Bolt 접촉 관리'] },
    { h: '개선방안(대책)', pts: ['[[배강도유리]](자파 없음)·[[접합유리]] 적용', '비산방지 Film 부착', '파손 시 낙하방지 설계(접합·Clip)'] }
  ],
  msg: '강화유리 속 숨은 NiS — HST로 미리 걸러내고, 접합·배강도로 떨어지지 않게',
  mnemo: '니(NiS)가 부(부피팽창)풀어 나(나비)로 깨진다 → HST 290·2',
  rel: ['Heat Soak Test', '배강도유리', '열파손 현상', '접합유리', 'SPG'],
  src: '근거: EN 14179-1(Heat Soak Test 290±10℃·2h) / 마법지 9-2 유리(강화·접합유리) / 유리공사 표준시방서 — NiS 팽창률 2~4%·압축층 두께 약 1/5은 문헌값(확인 필요)'
},
184: {
  title: '열파손 현상(Thermal Breakage)',
  cat: '창호·유리',
  key: ['중앙-단부 온도차', '단부 인장응력', 'σ = E·α·ΔT', '열선흡수·반사유리', '단부 Clean cut', '배강도유리', 'Blind 이격', '열깨짐 계산'],
  www: { what: '유리 [[중앙-단부 온도차]]에 의한 열응력으로 단부에서 시작되는 균열 파손', why: '흡수율 높은 열선흡수·반사·복층유리의 조기 파손·교체비·낙하 위험 방지', how: '일사 흡수 → 중앙 팽창·단부 구속 → [[단부 인장응력]] → 단부 결함 균열 → 예방: [[열깨짐 계산]]·[[단부 Clean cut]]·[[배강도유리]]' },
  tag: '현상·원인·대책',
  def: '일사로 가열된 유리 [[중앙부]]와 Frame에 묻혀 저온인 [[단부]]의 [[온도차]]로 단부에 [[인장응력]](σ = E·α·ΔT)이 발생하여 단부 결함에서 균열이 시작·진전되는 파손',
  wwh: ['온도차 열응력 파손', '조기 파손 방지', '열깨짐계산·배강도'],
  figT: '판유리 열파손 Mechanism 및 균열 형태',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[유리 입면 — Frame 내 단부 구속]</text>' +
    '<rect x="40" y="40" width="230" height="220" class="bx2"/>' +
    '<rect x="56" y="56" width="198" height="188" class="bx3"/>' +
    '<rect x="56" y="56" width="198" height="50" fill="none" class="ln2 dash"/>' +
    '<circle cx="330" cy="60" r="14" class="bx"/>' +
    '<line x1="330" y1="38" x2="330" y2="30" class="ln2"/>' +
    '<line x1="352" y1="60" x2="360" y2="60" class="ln2"/>' +
    '<line x1="346" y1="44" x2="352" y2="38" class="ln2"/>' +
    '<line x1="316" y1="72" x2="262" y2="120" class="ar"/>' +
    '<line x1="318" y1="82" x2="262" y2="170" class="ar"/>' +
    '<text x="350" y="84" class="s">일사 흡수</text>' +
    '<circle cx="155" cy="160" r="30" fill="none" class="ln2 dash"/>' +
    '<line x1="185" y1="160" x2="215" y2="160" class="ar"/>' +
    '<line x1="125" y1="160" x2="95" y2="160" class="ar"/>' +
    '<polyline points="150,244 150,226 140,212 160,196 148,182" class="rd"/>' +
    '<line x1="170" y1="150" x2="300" y2="140" class="ld"/><circle cx="300" cy="140" r="2" class="dotf"/><text x="305" y="144" class="r">중앙부 고온·팽창</text>' +
    '<line x1="262" y1="230" x2="300" y2="236" class="ld"/><circle cx="300" cy="236" r="2" class="dotf"/><text x="305" y="240" class="r">단부 저온 → 인장</text>' +
    '<line x1="150" y1="226" x2="100" y2="286" class="ld"/><circle cx="100" cy="286" r="2" class="dotf"/><text x="105" y="290" class="s">단부 직각 균열 → 사행</text>' +
    '<line x1="240" y1="80" x2="300" y2="106" class="ld"/><circle cx="300" cy="106" r="2" class="dotf"/><text x="305" y="110" class="s">부분 그늘(차양)</text>' +
    '<line x1="240" y1="200" x2="300" y2="194" class="ld"/><circle cx="300" cy="194" r="2" class="dotf"/><text x="305" y="198" class="s">Blind 밀착 → 열축적</text>' +
    '<line x1="58" y1="120" x2="90" y2="100" class="ld"/><circle cx="90" cy="100" r="2" class="dotf"/><text x="95" y="104" class="s">단부 결함 = 균열 기점</text>' +
    '<text x="20" y="318" class="b">σ = E·α·ΔT (온도차 ΔT↑ → 단부 인장↑)</text>' +
    '<text x="446" y="30" class="b">[열파손 요인·대책]</text>' +
    '<line x1="230" y1="160" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 중앙-단부 온도차</text><text x="446" y="72" class="k3">③ 단부 직각 균열 시작</text><text x="446" y="92" class="k3">③ 흡수·반사·두꺼운 유리</text><line x1="254" y1="180" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 단부 Clean cut 가공</text><text x="446" y="142" class="k4">④ Blind·커튼 이격 확보</text><text x="446" y="162" class="k4">④ 부분 그늘·냉풍 직사 금지</text><line x1="300" y1="314" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 열깨짐 계산·배강도</text><text x="446" y="212" class="k5">⑤ 단열 Frame·Bite 적정</text>' +
    '</svg>',
  subs: [
    { h: '발생원리 및 특징', pts: ['[[중앙-단부 온도차]] → 단부 [[인장응력]](σ = E·α·ΔT)', '단부에서 직각으로 시작 → 사행 진전', '흡수·반사·두꺼운 유리일수록 위험↑'] },
    { h: '시공 시 유의사항', pts: ['[[단부 Clean cut]]·흠집 없는 가공', 'Blind·커튼 유리면 [[이격]] 확보(열축적 방지)', '부분 그늘·냉난방기 냉풍 직사 금지'] },
    { h: '개선방안', pts: ['[[열깨짐 계산]] 후 [[배강도유리]]·강화유리 적용', '단열 Frame·적정 Bite로 단부 온도 확보'] }
  ],
  msg: '가운데는 뜨겁고 가장자리는 차가워 깨진다 — 온도차를 줄이고 단부를 강하게',
  mnemo: '중·단 온도차 → 단부 인장 → “단·직·사(단부·직각·사행)”',
  rel: ['유리 자파현상', '배강도유리', 'Low-E 복층유리', '열선반사유리', 'SSG'],
  src: '근거: 판유리 열깨짐 검토(제조사 열깨짐 계산서) / 마법지 9-2 유리(열선반사·열선흡수유리) / 유리공사 표준시방서'
},
186: {
  title: '갑종방화문 시공상세도에 표기할 사항',
  cat: '창호·유리',
  key: ['60분+ 방화문(구 갑종)', '차염 60분·차열 30분', '품질인정 번호', '문틀 Anchor 고정', '틈새 내화충전', '자동폐쇄장치(Door Closer)', '차연 Gasket', '피난방향 개폐'],
  www: { what: '[[60분+ 방화문(구 갑종)]]의 차염·차열 성능을 현장에서 구현하기 위해 시공상세도에 명기할 재료·고정·충전·부속 사항', why: '인정 구성과 다른 시공·틈새 누락 시 연기·화염 확산 → 피난·방화구획 실패', how: '[[품질인정 번호]]·등급 확인 → 문틀 재질·두께 → [[문틀 Anchor 고정]]·[[틈새 내화충전]] → Door Closer·Gasket → [[피난방향 개폐]] 표기' },
  tag: '기준·부재·성능',
  def: '구 갑종방화문인 [[60분+ 방화문]](차염 {{60분}} 이상 + 차열 {{30분}} 이상)의 성능 확보를 위해 [[품질인정 번호]]·문틀 재질·[[Anchor 고정]]·[[틈새 충전]]·[[자동폐쇄장치]]·개폐방향을 시공상세도에 명기하는 사항',
  wwh: ['방화문 상세 표기', '연기·화염 차단', '인정·고정·충전 명기'],
  figT: '방화문 평면단면 상세 및 시공상세도 표기 항목',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="30" class="b">[평면 단면 상세]</text>' +
    '<text x="20" y="50" class="r">60분+ = 차염 60분 + 차열 30분</text>' +
    '<rect x="20" y="120" width="84" height="70" class="conc"/>' +
    '<rect x="336" y="120" width="84" height="70" class="conc"/>' +
    '<rect x="104" y="124" width="6" height="62" class="rf"/>' +
    '<rect x="330" y="124" width="6" height="62" class="rf"/>' +
    '<rect x="110" y="120" width="16" height="70" class="bx2"/>' +
    '<rect x="314" y="120" width="16" height="70" class="bx2"/>' +
    '<line x1="84" y1="140" x2="110" y2="140" class="ln"/>' +
    '<line x1="84" y1="170" x2="110" y2="170" class="ln"/>' +
    '<line x1="330" y1="140" x2="356" y2="140" class="ln"/>' +
    '<line x1="330" y1="170" x2="356" y2="170" class="ln"/>' +
    '<rect x="126" y="146" width="188" height="18" class="bx3"/>' +
    '<line x1="126" y1="155" x2="314" y2="155" class="ln2 dash"/>' +
    '<rect x="122" y="146" width="4" height="18" class="bf"/>' +
    '<rect x="314" y="146" width="4" height="18" class="bf"/>' +
    '<circle cx="126" cy="166" r="4" class="dotf"/>' +
    '<path d="M314,164 A188,188 0 0 1 270,285" fill="none" class="ln2 dash"/>' +
    '<line x1="126" y1="164" x2="270" y2="285" class="ln2 dash"/>' +
    '<rect x="140" y="96" width="70" height="14" class="bx"/>' +
    '<line x1="175" y1="110" x2="175" y2="146" class="ln2"/>' +
    '<line x1="60" y1="190" x2="50" y2="215" class="ld"/><circle cx="50" cy="215" r="2" class="dotf"/><text x="55" y="219" class="s">내화구조 벽체</text>' +
    '<line x1="118" y1="190" x2="120" y2="240" class="ld"/><circle cx="120" cy="240" r="2" class="dotf"/><text x="125" y="244" class="s">강재 문틀(두께 명기)</text>' +
    '<line x1="107" y1="130" x2="70" y2="80" class="ld"/><circle cx="70" cy="80" r="2" class="dotf"/><text x="75" y="84" class="r">틈새 모르타르·내화충전</text>' +
    '<line x1="346" y1="176" x2="330" y2="226" class="ld"/><circle cx="330" cy="226" r="2" class="dotf"/><text x="325" y="230" text-anchor="end" class="s">Anchor·용접 고정</text>' +
    '<line x1="230" y1="164" x2="215" y2="196" class="ld"/><circle cx="215" cy="196" r="2" class="dotf"/><text x="220" y="200" class="s">문짝(차염·차열)</text>' +
    '<line x1="316" y1="150" x2="350" y2="108" class="ld"/><circle cx="350" cy="108" r="2" class="dotf"/><text x="355" y="112" class="s">Gasket(차연)</text>' +
    '<line x1="210" y1="103" x2="240" y2="90" class="ld"/><circle cx="240" cy="90" r="2" class="dotf"/><text x="245" y="94" class="s">Door Closer(자동폐쇄)</text>' +
    '<line x1="270" y1="285" x2="290" y2="300" class="ld"/><circle cx="290" cy="300" r="2" class="dotf"/><text x="295" y="304" class="s">피난방향 개폐</text>' +
    '<line x1="160" y1="160" x2="150" y2="282" class="ld"/><circle cx="150" cy="282" r="2" class="dotf"/><text x="145" y="286" text-anchor="end" class="s">품질인정 표지 부착</text>' +
    '<text x="20" y="328" class="s">상세도 표기: 등급·인정번호 / 재질·두께 / 고정·충전 / 부속 / 개폐방향</text>' +
    '<text x="446" y="30" class="b">[방화문 등급·표기]</text>' +
    '<text x="446" y="52" class="k3">③ 60분+: 차염60+차열30</text><text x="446" y="72" class="k3">③ 60분: 차염 60분↑</text><text x="446" y="92" class="k3">③ 30분: 차염 30~60분</text><line x1="336" y1="186" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ Anchor 고정·사춤 밀실</text><text x="446" y="142" class="k4">④ 인정 구성대로 시공</text><text x="446" y="162" class="k4">④ 도어체크·순위조정기</text><text x="446" y="192" class="k5">⑤ 인정표지 부착 확인</text><text x="446" y="212" class="k5">⑤ 정기 작동점검·이력</text>' +
    '</svg>',
  subs: [
    { h: '방화문 등급(피난·방화구조 규칙)', pts: ['[[60분+ 방화문]]: 차염 {{60분}}↑ + 차열 {{30분}}↑', '60분 방화문: 차염 {{60분}}↑', '30분 방화문: 차염 {{30분 이상 60분 미만}}'] },
    { h: '시공상세도 표기·유의사항', pts: ['[[Anchor 고정]] 간격·문틀 사춤(모르타르·내화충전) 밀실', '[[품질인정]] 구성(문틀·문짝·부속)대로 시공', '[[자동폐쇄장치]](Door Closer)·순위조정기·차연 Gasket'] },
    { h: '개선방안', pts: ['품질인정 표지 부착·반입 검수 확인', '정기 작동점검·유지관리 이력 관리'] }
  ],
  msg: '인정받은 그대로 고정·충전·자동폐쇄 — 상세도에 적은 만큼 불과 연기를 막는다',
  mnemo: '등·재·고·충·부·방(등급·재질·고정·충전·부속·방향) → “등재고 충부방”',
  rel: ['방화구획', '자동방화셔터', '내화충전구조', '방화유리', '피난안전구역'],
  src: '근거: 건축물의 피난·방화구조 등의 기준에 관한 규칙 제26조(2021 개정: 60분+·60분·30분 방화문) / 마법지 핵·마-1 방화문 / 건축법 제52조의5 건축자재 품질인정'
},
187: {
  title: 'Access Floor, OA Floor',
  cat: '마감(타일·방수·목재)',
  key: ['이중바닥', 'Pedestal(지지각)', 'Panel 600×600', 'Stringer', '높이조절 Bolt', '대전방지(전도성) 마감', '배선·공조 공간', 'Level 조정'],
  www: { what: 'Slab 위 [[Pedestal(지지각)]]·[[Panel 600×600]]으로 구성한 [[이중바닥]] 시스템(OA Floor는 저상형)', why: '배선 변경·증설 자유(Free Access), 사무·전산실 공간 가변성 및 유지관리 용이', how: '먹매김 → Pedestal 설치·고정 → [[Level 조정]] → Stringer·Panel 깔기 → 대전방지 마감·검사' },
  tag: '부재·공법·기능',
  def: '구조 Slab 위에 [[Pedestal(지지각)]]과 [[Stringer]]로 [[Panel]]({{600×600mm}})을 지지하여 이중바닥을 만들고 하부 공간에 전력·통신 배선과 공조 덕트를 수용하는 Free Access 바닥 (저상형 = [[OA Floor]])',
  wwh: ['Panel 이중바닥', '배선 자유·가변성', 'Pedestal 레벨조정'],
  figT: 'Access Floor 단면 구성 및 시공순서',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[시공순서]</text>' +
    '<rect x="20" y="36" width="76" height="22" class="bx"/><text x="58" y="51" text-anchor="middle" class="s">먹매김</text>' +
    '<rect x="102" y="36" width="76" height="22" class="bx"/><text x="140" y="51" text-anchor="middle" class="s">Pedestal 설치</text>' +
    '<rect x="184" y="36" width="76" height="22" class="bx"/><text x="222" y="51" text-anchor="middle" class="s">Level 조정</text>' +
    '<rect x="266" y="36" width="76" height="22" class="bx"/><text x="304" y="51" text-anchor="middle" class="s">Panel 깔기</text>' +
    '<rect x="348" y="36" width="76" height="22" class="bx"/><text x="386" y="51" text-anchor="middle" class="s">마감·검사</text>' +
    '<line x1="96" y1="47" x2="102" y2="47" class="ar"/>' +
    '<line x1="178" y1="47" x2="184" y2="47" class="ar"/>' +
    '<line x1="260" y1="47" x2="266" y2="47" class="ar"/>' +
    '<line x1="342" y1="47" x2="348" y2="47" class="ar"/>' +
    '<rect x="20" y="240" width="410" height="24" class="conc"/>' +
    '<rect x="46" y="232" width="28" height="8" class="bx2"/><line x1="60" y1="232" x2="60" y2="170" class="ln"/><rect x="54" y="196" width="12" height="6" class="bx"/><rect x="48" y="164" width="24" height="6" class="bx2"/>' +
    '<rect x="166" y="232" width="28" height="8" class="bx2"/><line x1="180" y1="232" x2="180" y2="170" class="ln"/><rect x="174" y="196" width="12" height="6" class="bx"/><rect x="168" y="164" width="24" height="6" class="bx2"/>' +
    '<rect x="286" y="232" width="28" height="8" class="bx2"/><line x1="300" y1="232" x2="300" y2="170" class="ln"/><rect x="294" y="196" width="12" height="6" class="bx"/><rect x="288" y="164" width="24" height="6" class="bx2"/>' +
    '<rect x="406" y="232" width="28" height="8" class="bx2"/><line x1="420" y1="232" x2="420" y2="170" class="ln"/><rect x="414" y="196" width="12" height="6" class="bx"/><rect x="408" y="164" width="24" height="6" class="bx2"/>' +
    '<line x1="60" y1="167" x2="420" y2="167" class="ln"/>' +
    '<rect x="60" y="146" width="120" height="18" class="bx3"/>' +
    '<rect x="180" y="146" width="120" height="18" class="bx3"/>' +
    '<rect x="300" y="146" width="120" height="18" class="bx3"/>' +
    '<line x1="60" y1="146" x2="420" y2="146" class="bl"/>' +
    '<path d="M70,215 C120,200 160,228 220,212 S320,200 410,218" fill="none" class="rd"/>' +
    '<path d="M70,224 C130,214 170,232 240,222 S330,214 410,226" fill="none" class="ln2"/>' +
    '<line x1="120" y1="146" x2="110" y2="120" class="ld"/><circle cx="110" cy="120" r="2" class="dotf"/><text x="115" y="124" class="r">Panel 600×600(전도성 마감)</text>' +
    '<line x1="300" y1="167" x2="330" y2="120" class="ld"/><circle cx="330" cy="120" r="2" class="dotf"/><text x="335" y="124" class="s">Stringer</text>' +
    '<line x1="186" y1="190" x2="186" y2="94" class="ld"/><circle cx="186" cy="94" r="2" class="dotf"/><text x="191" y="98" class="s">Pedestal(높이조절 Bolt)</text>' +
    '<line x1="300" y1="236" x2="320" y2="290" class="ld"/><circle cx="320" cy="290" r="2" class="dotf"/><text x="325" y="294" class="s">Base Plate 접착</text>' +
    '<line x1="230" y1="212" x2="200" y2="290" class="ld"/><circle cx="200" cy="290" r="2" class="dotf"/><text x="195" y="294" text-anchor="end" class="s">전력·통신 배선</text>' +
    '<line x1="100" y1="252" x2="90" y2="312" class="ld"/><circle cx="90" cy="312" r="2" class="dotf"/><text x="95" y="316" class="s">Slab 평탄·방진 도장</text>' +
    '<text x="446" y="30" class="b">[Access Floor 기준]</text>' +
    '<line x1="410" y1="210" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 하부 배선·공조 공간</text><text x="446" y="72" class="k3">③ Panel 600×600 표준</text><text x="446" y="92" class="k3">③ 높이조절 Pedestal</text><line x1="430" y1="252" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ Slab 평탄·방진 도장</text><text x="446" y="142" class="k4">④ Level 수평·덜컹 방지</text><text x="446" y="162" class="k4">④ 배선 개구부 보강</text><line x1="420" y1="146" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 접지·대전방지 마감</text><text x="446" y="212" class="k5">⑤ 하부 방화·누수 감지</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 특징', pts: ['하부 [[배선·공조 공간]] 확보(Free Access)', '[[Panel 600×600]] 표준·탈착식', '높이조절 [[Pedestal(지지각)]] + Stringer'] },
    { h: '시공 시 유의사항', pts: ['Slab 평탄·방진(먼지방지) 도장 선행', '[[Level 조정]]·수평 확보, 덜컹(Rocking) 방지', '배선 개구부(Grommet) 주위 보강'] },
    { h: '개선방안', pts: ['[[대전방지(전도성) 마감]]·접지 연결', '하부 방화구획·누수 감지 설치'] }
  ],
  msg: '바닥을 띄워 배선을 숨긴다 — Pedestal 레벨과 Panel 밀착이 품질의 핵심',
  mnemo: '판·각·줄(Panel·Pedestal·Stringer) + 레·접(레벨·접지) → “판각줄 레접”',
  rel: ['OA Floor', '이중천장', 'Clean Room', '정전기 방지 바닥', '바닥 공조(UFAD)'],
  src: '근거: 마법지 9-2 수장공사(Access Floor) / 건축공사표준시방서 수장공사(이중바닥) — 높이·하중 등급은 제품 사양 따름'
},
188: {
  title: '매립철물(Embedded Plate)',
  cat: '초고층·커튼월',
  key: ['Embedded Plate', 'Stud Anchor', 'Core 선행공법', '철골보 접합', '위치·Level 정밀도', 'Template(Jig) 고정', 'Slot Hole', '배면 공극 방지'],
  www: { what: '구조체에 미리 매립한 [[Stud Anchor]] 부착 강판으로 후행 부재를 접합하는 [[Embedded Plate]]', why: 'Core 선행·철골 후행 시 RC-철골 일체 접합, 후시공 Anchor 천공 감소·공기 단축', how: '제작(Stud 용접) → [[Template(Jig) 고정]]·위치 측량 → 콘크리트 타설·다짐 → 검측 → Shear Plate 용접·HTB 체결' },
  tag: '부재·접합·정밀도',
  def: '콘크리트 타설 전 [[Stud Anchor]]를 용접한 [[강판]]을 구조체 표면에 매립하여, 후행 철골보·커튼월 Fastener 등을 [[용접·볼트 접합]]하는 연결철물 (Core 선행공법의 핵심 접합부)',
  wwh: ['Stud 강판 매립', 'RC-철골 일체접합', 'Jig고정·위치검측'],
  figT: 'Embedded Plate 매립 상세 및 철골보 접합',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[Core 벽체 - 철골보 접합 단면]</text>' +
    '<rect x="40" y="40" width="100" height="260" class="conc"/>' +
    '<rect x="210" y="104" width="210" height="16" class="conc"/>' +
    '<rect x="210" y="120" width="210" height="10" class="bx2"/>' +
    '<rect x="210" y="130" width="210" height="70" class="bx3"/>' +
    '<rect x="210" y="200" width="210" height="10" class="bx2"/>' +
    '<line x1="92" y1="130" x2="140" y2="130" class="ln"/>' +
    '<line x1="92" y1="165" x2="140" y2="165" class="ln"/>' +
    '<line x1="92" y1="200" x2="140" y2="200" class="ln"/>' +
    '<rect x="86" y="125" width="6" height="10" class="bx"/>' +
    '<rect x="86" y="160" width="6" height="10" class="bx"/>' +
    '<rect x="86" y="195" width="6" height="10" class="bx"/>' +
    '<rect x="140" y="110" width="10" height="110" class="bx2"/>' +
    '<rect x="150" y="145" width="80" height="40" class="bx"/>' +
    '<path d="M150,145 l8,0 l-8,-8 z" class="rf"/>' +
    '<path d="M150,185 l8,0 l-8,8 z" class="rf"/>' +
    '<circle cx="214" cy="155" r="3" class="dotf"/>' +
    '<circle cx="214" cy="175" r="3" class="dotf"/>' +
    '<circle cx="226" cy="155" r="3" class="dotf"/>' +
    '<circle cx="226" cy="175" r="3" class="dotf"/>' +
    '<line x1="90" y1="280" x2="100" y2="316" class="ld"/><circle cx="100" cy="316" r="2" class="dotf"/><text x="105" y="320" class="s">Core Wall(RC 선행)</text>' +
    '<line x1="112" y1="200" x2="140" y2="262" class="ld"/><circle cx="140" cy="262" r="2" class="dotf"/><text x="145" y="266" class="s">Stud Anchor(용접)</text>' +
    '<line x1="145" y1="215" x2="180" y2="244" class="ld"/><circle cx="180" cy="244" r="2" class="dotf"/><text x="185" y="248" class="r">Embedded Plate(t·크기 명기)</text>' +
    '<line x1="154" y1="140" x2="170" y2="80" class="ld"/><circle cx="170" cy="80" r="2" class="dotf"/><text x="175" y="84" class="s">Shear Plate 현장용접</text>' +
    '<line x1="226" y1="155" x2="250" y2="64" class="ld"/><circle cx="250" cy="64" r="2" class="dotf"/><text x="255" y="68" class="s">HTB(Slot Hole 오차흡수)</text>' +
    '<line x1="380" y1="205" x2="370" y2="276" class="ld"/><circle cx="370" cy="276" r="2" class="dotf"/><text x="365" y="280" text-anchor="end" class="s">H-Beam(철골보 후행)</text>' +
    '<line x1="410" y1="108" x2="400" y2="90" class="ld"/><circle cx="400" cy="90" r="2" class="dotf"/><text x="395" y="94" text-anchor="end" class="s">Deck Slab</text>' +
    '<line x1="145" y1="110" x2="150" y2="50" class="ld"/><circle cx="150" cy="50" r="2" class="dotf"/><text x="155" y="54" class="s">거푸집 고정 Jig·Template</text>' +
    '<text x="446" y="30" class="b">[Embed 핵심]</text>' +
    '<line x1="140" y1="60" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ Core 선행·철골 후행</text><text x="446" y="72" class="k3">③ Stud 용접 강판 매립</text><text x="446" y="92" class="k3">③ Slot Hole 오차 흡수</text><line x1="420" y1="165" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 위치·Level 측량 확인</text><text x="446" y="142" class="k4">④ 타설 중 이동 방지 고정</text><text x="446" y="162" class="k4">④ 배면 공극 방지 다짐</text><text x="446" y="192" class="k5">⑤ BIM 좌표·Template</text><text x="446" y="212" class="k5">⑤ 타설 후 검측·보정</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 특징', pts: ['[[Core 선행공법]]·철골보 후행 접합', '[[Stud Anchor]] 용접 강판 매립', '[[Slot Hole]]·Shear Plate로 오차 흡수'] },
    { h: '시공 시 유의사항', pts: ['위치·Level 측량 확인(타설 전·후)', '타설 중 이동·탈락 방지 고정(Jig·거푸집 Bolt)', 'Plate 배면 [[공극]] 방지 다짐'] },
    { h: '개선방안', pts: ['BIM 좌표 기반 [[Template]] 설치', '타설 후 검측·보정 계획(Shim·Slot)'] }
  ],
  msg: '먼저 묻고 나중에 붙인다 — 매립 위치 정밀도가 철골 접합 품질을 결정',
  mnemo: '스·판·지·검(Stud·Plate·Jig·검측) → “스판지검”',
  rel: ['Core 선행공법', 'Fastener', 'Shear Connector', 'Coupler', 'Halfen Box·Dowel Bar'],
  src: '근거: 마법지 7장 초고층 Core 계획(Embeded Plate–철골보 연결, Coupler, Halfen Box) / 마법지 8장 Fastener 설치(Embeded Plate) / KCS 41 31 강구조공사 — 매립 위치 허용오차 수치는 설계도서 따름(확인 필요)'
},
191: {
  title: '열교, 냉교(Thermal Bridge, Cold Bridge)',
  cat: '단열·결로·실내환경',
  key: ['단열 불연속', '선형 열관류율(Ψ)', '표면결로·곰팡이', '외단열', 'Thermal Break(열교차단재)', '슬래브·발코니 단부', 'TDR', '적외선 열화상'],
  www: { what: '단열층 [[단열 불연속]]·관통 부위로 열이 집중 이동하는 열적 취약부(냉기 침투 관점 = 냉교)', why: '표면온도↓ → [[표면결로·곰팡이]], 난방에너지 손실·마감 오염 방지', how: '설계 상세(외단열·[[Thermal Break(열교차단재)]]) → 단열재 틈 없는 시공 → 관통부 보강 → [[적외선 열화상]]·[[TDR]] 검토' },
  tag: '현상·원인·대책',
  def: '단열층이 [[불연속]]되거나 열전도율이 큰 부재(슬래브·보·철물)가 단열층을 관통하여 열이 집중적으로 흐르는 부위로, 실내 표면온도 저하에 따른 [[표면결로]]·곰팡이와 [[열손실]]을 유발 (평가: 선형 열관류율 [[Ψ]] W/m·K)',
  wwh: ['단열 불연속 열흐름', '결로·열손실 방지', '외단열·열교차단'],
  figT: '슬래브-외벽 접합부 열교 발생원리 및 차단',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[슬래브-외벽 접합부 단면 (내단열)]</text>' +
    '<rect x="124" y="40" width="22" height="260" fill="none" class="ln2 dash"/>' +
    '<rect x="150" y="40" width="40" height="260" class="conc"/>' +
    '<rect x="190" y="40" width="22" height="92" class="bx3"/>' +
    '<rect x="190" y="170" width="22" height="130" class="bx3"/>' +
    '<rect x="190" y="132" width="240" height="38" class="conc"/>' +
    '<path d="M226,44 L226,112 Q226,124 250,124 L430,124" fill="none" class="ln2 dash"/>' +
    '<path d="M226,296 L226,186 Q226,176 250,176 L430,176" fill="none" class="ln2 dash"/>' +
    '<line x1="330" y1="151" x2="140" y2="151" class="ar"/>' +
    '<circle cx="216" cy="128" r="3" class="bf"/>' +
    '<circle cx="216" cy="176" r="3" class="bf"/>' +
    '<circle cx="222" cy="182" r="2.5" class="bf"/>' +
    '<text x="30" y="60" class="b">실외(저온)</text>' +
    '<text x="240" y="316" class="b">실내(고온)</text>' +
    '<line x1="170" y1="250" x2="240" y2="262" class="ld"/><circle cx="240" cy="262" r="2" class="dotf"/><text x="245" y="266" class="s">RC 외벽</text>' +
    '<line x1="201" y1="80" x2="240" y2="72" class="ld"/><circle cx="240" cy="72" r="2" class="dotf"/><text x="245" y="76" class="s">내단열재(불연속)</text>' +
    '<line x1="400" y1="140" x2="380" y2="100" class="ld"/><circle cx="380" cy="100" r="2" class="dotf"/><text x="375" y="104" text-anchor="end" class="r">슬래브 관통 = 선형 열교</text>' +
    '<line x1="260" y1="155" x2="280" y2="214" class="ld"/><circle cx="280" cy="214" r="2" class="dotf"/><text x="285" y="218" class="s">열류 집중 → 열손실</text>' +
    '<line x1="218" y1="180" x2="250" y2="240" class="ld"/><circle cx="250" cy="240" r="2" class="dotf"/><text x="255" y="244" class="r">표면온도↓ → 결로·곰팡이</text>' +
    '<line x1="330" y1="176" x2="350" y2="290" class="ld"/><circle cx="350" cy="290" r="2" class="dotf"/><text x="355" y="294" class="s">등온선 굴곡</text>' +
    '<line x1="135" y1="200" x2="90" y2="220" class="ld"/><circle cx="90" cy="220" r="2" class="dotf"/><text x="85" y="224" text-anchor="end" class="s">외단열 연속</text>' +
    '<text x="446" y="30" class="b">[열교 원인·대책]</text>' +
    '<line x1="212" y1="100" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 단열층 불연속 부위</text><text x="446" y="72" class="k3">③ 선형 Ψ·점형 χ 열교</text><text x="446" y="92" class="k3">③ 표면온도↓ → 결로</text><text x="446" y="122" class="k4">④ 단열재 이음 틈 금지</text><text x="446" y="142" class="k4">④ 관통 철물·Anchor 보강</text><text x="446" y="162" class="k4">④ 발코니·파라펫 단부</text><line x1="146" y1="280" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 외단열·Thermal Break</text><text x="446" y="212" class="k5">⑤ 열화상 진단·TDR 검토</text>' +
    '</svg>',
  subs: [
    { h: '발생원리 및 특징', pts: ['[[단열 불연속]] 부위(슬래브·보·기둥 관통)', '선형 열교 [[Ψ]]·점형 열교 χ(Anchor·철물)', '실내 표면온도↓ → [[표면결로]]·곰팡이'] },
    { h: '시공 시 유의사항', pts: ['단열재 이음·모서리 틈 없이 밀착', '관통 철물·Anchor 주위 단열 보강', '발코니·파라펫·창호 주위 단부 처리'] },
    { h: '개선방안', pts: ['[[외단열]] 연속 시공·[[Thermal Break(열교차단재)]]', '[[적외선 열화상]] 진단·[[TDR]] 결로 검토'] }
  ],
  msg: '단열이 끊기는 곳으로 열이 샌다 — 끊김 없는 단열 Line이 결로 방지의 핵심',
  mnemo: '불·관·단(불연속·관통·단부) → 외·차·화(외단열·차단재·열화상)',
  rel: ['결로방지 TDR', '열관류율', '외단열 공법', '방습층', '표면결로·내부결로'],
  src: '근거: 마법지 9-2 단열(공법: 이음·관통부 보강·열교 냉교) / 건축물의 에너지절약설계기준 / 공동주택 결로방지 설계기준(TDR) / 건축공사표준시방서 단열공사'
},
194: {
  title: 'VOCs(Volatile Organic Compounds)',
  cat: '단열·결로·실내환경',
  key: ['휘발성 유기화합물', '폼알데하이드 210µg/m³', '톨루엔 1,000µg/m³', '새집증후군(SHS)', '친환경 자재(HB마크)', 'Bake-out', 'Flush-out', '실내공기질 측정·공고'],
  www: { what: '도료·접착제·마감재에서 방산되는 [[휘발성 유기화합물]](HCHO·벤젠·톨루엔·자일렌 등)', why: '[[새집증후군(SHS)]]·호흡기 질환·발암 위험 방지, 실내공기질 권고기준 충족', how: '시공 전 [[친환경 자재(HB마크)]] → 시공 중 도료 최소화·환기 → 시공 후 [[Bake-out]]·[[Flush-out]] → 입주 전 [[실내공기질 측정·공고]]' },
  tag: '물질·기준·관리',
  def: '상온에서 증기압이 높아 쉽게 [[휘발]]하는 유기화합물(벤젠·톨루엔·자일렌·폼알데하이드 등)로, 도료·접착제·마감재에서 방산되어 [[새집증후군]]을 유발하며 신축 공동주택은 [[폼알데하이드]] {{210µg/m³}}·톨루엔 {{1,000µg/m³}} 이하 등 권고기준으로 관리',
  wwh: ['휘발성 유해물질', '새집증후군 방지', '자재·환기·베이크'],
  figT: '실내 VOCs 발생원·노출 및 단계별 저감',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[발생원 → 방산 → 노출 → 저감]</text>' +
    '<path d="M40,80 L210,40 L380,80" fill="none" class="ln"/>' +
    '<rect x="50" y="80" width="320" height="140" fill="none" class="ln"/>' +
    '<rect x="160" y="84" width="70" height="16" class="bx2"/>' +
    '<text x="195" y="96" text-anchor="middle" class="s">AHU</text>' +
    '<rect x="52" y="110" width="8" height="90" class="bx3"/>' +
    '<rect x="60" y="206" width="300" height="12" class="bx3"/>' +
    '<rect x="300" y="160" width="50" height="46" class="bx2"/>' +
    '<path d="M110,204 q6,-8 0,-16 q-6,-8 0,-16" fill="none" class="rd"/>' +
    '<path d="M325,158 q6,-8 0,-16 q-6,-8 0,-16" fill="none" class="rd"/>' +
    '<path d="M64,150 q8,-6 16,0 q8,6 16,0" fill="none" class="rd"/>' +
    '<circle cx="200" cy="150" r="7" fill="none" class="ln"/>' +
    '<line x1="200" y1="157" x2="200" y2="185" class="ln"/>' +
    '<line x1="200" y1="185" x2="192" y2="205" class="ln"/>' +
    '<line x1="200" y1="185" x2="208" y2="205" class="ln"/>' +
    '<line x1="190" y1="168" x2="210" y2="168" class="ln"/>' +
    '<line x1="425" y1="92" x2="372" y2="92" class="ar"/>' +
    '<line x1="372" y1="110" x2="425" y2="110" class="ar"/>' +
    '<text x="385" y="128" class="s">외기</text>' +
    '<line x1="60" y1="140" x2="74" y2="124" class="ld"/><circle cx="74" cy="124" r="2" class="dotf"/><text x="79" y="128" class="s">도료·접착제</text>' +
    '<line x1="150" y1="212" x2="130" y2="250" class="ld"/><circle cx="130" cy="250" r="2" class="dotf"/><text x="135" y="254" class="s">바닥재·벽지(PVC)</text>' +
    '<line x1="310" y1="170" x2="290" y2="140" class="ld"/><circle cx="290" cy="140" r="2" class="dotf"/><text x="285" y="144" text-anchor="end" class="s">MDF 가구(HCHO)</text>' +
    '<line x1="230" y1="92" x2="250" y2="64" class="ld"/><circle cx="250" cy="64" r="2" class="dotf"/><text x="255" y="68" class="s">AHU 기계환기(0.5회/h↑)</text>' +
    '<line x1="194" y1="168" x2="150" y2="160" class="ld"/><circle cx="150" cy="160" r="2" class="dotf"/><text x="145" y="164" text-anchor="end" class="s">거주자 노출</text>' +
    '<line x1="112" y1="180" x2="130" y2="190" class="ld"/><circle cx="130" cy="190" r="2" class="dotf"/><text x="135" y="194" class="s">VOCs 방산</text>' +
    '<rect x="20" y="266" width="130" height="64" class="bx2"/>' +
    '<text x="85" y="283" text-anchor="middle" class="b">시공 전</text>' +
    '<text x="85" y="301" text-anchor="middle" class="s">친환경 자재(HB)</text>' +
    '<text x="85" y="319" text-anchor="middle" class="s">환기계획 수립</text>' +
    '<rect x="155" y="266" width="130" height="64" class="bx2"/>' +
    '<text x="220" y="283" text-anchor="middle" class="b">시공 중</text>' +
    '<text x="220" y="301" text-anchor="middle" class="s">저VOC 도료·최소화</text>' +
    '<text x="220" y="319" text-anchor="middle" class="s">작업장 환기 유지</text>' +
    '<rect x="290" y="266" width="130" height="64" class="bx2"/>' +
    '<text x="355" y="283" text-anchor="middle" class="b">시공 후</text>' +
    '<text x="355" y="301" text-anchor="middle" class="s">Bake-out·Flush-out</text>' +
    '<text x="355" y="319" text-anchor="middle" class="s">입주 전 측정·공고</text>' +
    '<text x="446" y="30" class="b">[신축 공동주택 권고기준]</text>' +
    '<text x="446" y="52" class="k3">③ HCHO 210µg/m³↓</text><text x="446" y="72" class="k3">③ 벤젠 30·톨루엔 1,000</text><text x="446" y="92" class="k3">③ 자일렌 700·스티렌 300</text><text x="446" y="112" class="k3">③ 에틸벤젠 360·라돈 148Bq</text><line x1="360" y1="212" x2="440" y2="136" class="ld"/><circle cx="440" cy="136" r="2" class="dotf"/><text x="446" y="140" class="k4">④ 저방출 자재·HB마크</text><line x1="285" y1="290" x2="440" y2="156" class="ld"/><circle cx="440" cy="156" r="2" class="dotf"/><text x="446" y="160" class="k4">④ 도료 최소화·작업 환기</text><text x="446" y="180" class="k4">④ 입주 전 측정·공고</text><line x1="420" y1="300" x2="440" y2="206" class="ld"/><circle cx="440" cy="206" r="2" class="dotf"/><text x="446" y="210" class="k5">⑤ Bake-out·Flush-out</text><text x="446" y="230" class="k5">⑤ 실시간 IAQ 모니터링</text>' +
    '<text x="446" y="252" class="s">단위 µg/m³ (라돈 Bq/m³)</text>' +
    '</svg>',
  subs: [
    { h: '권고기준(신축 공동주택)', pts: ['[[폼알데하이드]] {{210µg/m³}} 이하', '벤젠 {{30}}·톨루엔 {{1,000}}·자일렌 {{700}}·스티렌 {{300µg/m³}}', '에틸벤젠 {{360µg/m³}}·라돈 {{148Bq/m³}} 이하'] },
    { h: '시공 시 유의사항', pts: ['저방출 [[친환경 자재(HB마크)]] 선정', '도료 사용 최소화·작업장 환기 유지', '입주 전 [[실내공기질 측정·공고]]'] },
    { h: '개선방안', pts: ['[[Bake-out]]·[[Flush-out]] 실시', '실시간 IAQ 센서 모니터링'] }
  ],
  msg: '자재로 덜 내고, 환기로 빼고, 굽고 날려 입주 전 기준 이하로',
  mnemo: '폼210·벤30·톨1000·에360·자700·스300·라148 → “폼이일 벤삼 톨천 에삼육 자칠 스삼 라일사팔”',
  rel: ['새집증후군', 'Bake-out·Flush-out', '건강친화형 주택', 'HB마크(친환경 건축자재)', '실내공기질 관리법'],
  src: '근거: 실내공기질 관리법 시행규칙 별표4의2(신축 공동주택 권고기준) / 마법지 핵·마-4 VOC 기준 / 합격답안 10.총론 p1~3(실내공기질 시공단계별 조치) / 건축물의 설비기준 등에 관한 규칙(환기 0.5회/h)'
},
197: {
  title: '건설산업의 ESG경영',
  cat: '스마트건설·친환경',
  key: ['환경(E)', '사회(S)', '지배구조(G)', '2050 탄소중립', '중대재해 예방', '공정 하도급·상생', '윤리·투명경영', 'ESG 공시(K-ESG)'],
  www: { what: '[[환경(E)]]·[[사회(S)]]·[[지배구조(G)]] 비재무 요소를 내재화한 건설기업의 [[지속가능경영]]', why: '[[2050 탄소중립]]·중대재해 리스크 대응, 투자·수주 경쟁력과 사회적 신뢰 확보', how: '기획 LCA → 설계 ZEB·BIM → 시공 OSC·안전 → 운영 BEMS → 해체 재활용 + [[ESG 공시(K-ESG)]]' },
  tag: '제도·경영·전략',
  def: '건설기업이 재무성과 외에 [[환경(E)]]·[[사회(S)]]·[[지배구조(G)]]의 비재무 요소를 경영 전반에 내재화하여 탄소감축·안전보건·공정거래·윤리경영을 실천하고 그 성과를 [[공시·평가]]받는 [[지속가능경영]]',
  wwh: ['E·S·G 비재무경영', '탄소·안전 리스크 대응', '전생애 실천·공시'],
  figT: '건설산업 ESG 3요소 및 전생애 실천체계',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="110" cy="100" r="58" fill="none" class="ln"/>' +
    '<circle cx="220" cy="100" r="58" fill="none" class="ln"/>' +
    '<circle cx="165" cy="185" r="58" fill="none" class="ln"/>' +
    '<text x="95" y="80" text-anchor="middle" class="b">E 환경</text>' +
    '<text x="92" y="98" text-anchor="middle" class="s">탄소중립</text>' +
    '<text x="92" y="114" text-anchor="middle" class="s">폐기물·OSC</text>' +
    '<text x="235" y="80" text-anchor="middle" class="b">S 사회</text>' +
    '<text x="238" y="98" text-anchor="middle" class="s">안전보건</text>' +
    '<text x="238" y="114" text-anchor="middle" class="s">상생·하도급</text>' +
    '<text x="165" y="206" text-anchor="middle" class="b">G 지배구조</text>' +
    '<text x="165" y="222" text-anchor="middle" class="s">윤리·투명</text>' +
    '<text x="165" y="140" text-anchor="middle" class="b">지속가능</text>' +
    '<line x1="110" y1="42" x2="140" y2="30" class="ld"/><circle cx="140" cy="30" r="2" class="dotf"/><text x="145" y="34" class="s">Environment: 탄소·자원</text>' +
    '<line x1="270" y1="80" x2="300" y2="64" class="ld"/><circle cx="300" cy="64" r="2" class="dotf"/><text x="305" y="68" class="s">Social: 안전·인권·지역</text>' +
    '<line x1="276" y1="110" x2="300" y2="120" class="ld"/><circle cx="300" cy="120" r="2" class="dotf"/><text x="305" y="124" class="s">중대재해 예방(중처법)</text>' +
    '<line x1="272" y1="128" x2="300" y2="150" class="ld"/><circle cx="300" cy="150" r="2" class="dotf"/><text x="305" y="154" class="s">공정 하도급·대금 지급</text>' +
    '<line x1="215" y1="200" x2="300" y2="214" class="ld"/><circle cx="300" cy="214" r="2" class="dotf"/><text x="305" y="218" class="s">Governance: 윤리·투명</text>' +
    '<line x1="200" y1="232" x2="300" y2="240" class="ld"/><circle cx="300" cy="240" r="2" class="dotf"/><text x="305" y="244" class="s">ESG 공시·평가(K-ESG)</text>' +
    '<line x1="70" y1="150" x2="30" y2="242" class="ld"/><circle cx="30" cy="242" r="2" class="dotf"/><text x="35" y="246" class="s">재생자재·Zero Emission</text>' +
    '<rect x="20" y="258" width="76" height="26" class="bx2"/><text x="58" y="275" text-anchor="middle" class="s">기획(LCA)</text>' +
    '<rect x="104" y="258" width="76" height="26" class="bx2"/><text x="142" y="275" text-anchor="middle" class="s">설계(ZEB·BIM)</text>' +
    '<rect x="188" y="258" width="76" height="26" class="bx2"/><text x="226" y="275" text-anchor="middle" class="s">시공(OSC·안전)</text>' +
    '<rect x="272" y="258" width="76" height="26" class="bx2"/><text x="310" y="275" text-anchor="middle" class="s">운영(BEMS)</text>' +
    '<rect x="356" y="258" width="76" height="26" class="bx2"/><text x="394" y="275" text-anchor="middle" class="s">해체(재활용)</text>' +
    '<line x1="96" y1="271" x2="104" y2="271" class="ar"/>' +
    '<line x1="180" y1="271" x2="188" y2="271" class="ar"/>' +
    '<line x1="264" y1="271" x2="272" y2="271" class="ar"/>' +
    '<line x1="348" y1="271" x2="356" y2="271" class="ar"/>' +
    '<text x="20" y="308" class="r">2050 탄소중립 · NDC 2030 온실가스 40%↓(2018 대비)</text>' +
    '<text x="20" y="326" class="s">전생애(Life Cycle) 단계마다 E·S·G 실천 → 공시·평가로 환류</text>' +
    '<text x="446" y="30" class="b">[건설 ESG 실천]</text>' +
    '<line x1="168" y1="100" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ E: 탄소·폐기물 저감</text><text x="446" y="72" class="k3">③ S: 안전·상생·인권</text><text x="446" y="92" class="k3">③ G: 투명·윤리·준법</text><text x="446" y="122" class="k4">④ Greenwashing 지양</text><text x="446" y="142" class="k4">④ 협력사 공급망 관리</text><text x="446" y="162" class="k4">④ 데이터 측정·검증</text><line x1="432" y1="271" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ OSC·ZEB·LCA 적용</text><text x="446" y="212" class="k5">⑤ K-ESG 공시·평가</text>' +
    '</svg>',
  subs: [
    { h: 'ESG 구성요소', pts: ['[[환경(E)]]: 탄소·폐기물 저감', '[[사회(S)]]: 안전·상생·인권', '[[지배구조(G)]]: 투명·윤리·준법'] },
    { h: '추진 시 유의사항', pts: ['Greenwashing(위장 친환경) 지양', '협력사 포함 공급망 ESG 관리', '배출량·재해 데이터 측정·검증'] },
    { h: '개선방안', pts: ['OSC·ZEB·LCA 적용으로 탄소 저감', 'K-ESG 가이드라인 기반 공시·평가'] }
  ],
  msg: '돈만이 아닌 환경·사람·투명성으로 평가받는다 — 건설 전생애에 ESG를 심는다',
  mnemo: 'E 탄폐 · S 안상인 · G 투윤준 → “탄폐 안상인 투윤준”',
  rel: ['탄소중립(Net Zero)', 'Zero Energy Building', 'OSC', '중대재해처벌법', 'LCA'],
  src: '근거: 마법지 10장 총론(이슈와 대응전략: 건설산업의 ESG) / 합격답안 10.총론 p4(건설공해 방지 → ESG 가치 극대화)·p22~24(탄소중립 대응) / 산업통상자원부 K-ESG 가이드라인 / 탄소중립기본법(NDC 2030 40%)'
},
198: {
  title: '건축용 방화재료',
  cat: '안전·환경',
  key: ['불연재료', '준불연재료', '난연재료', '총방출열량 8MJ/m²', '가스유해성 9분', '콘칼로리미터(KS F ISO 5660-1)', '불연성 시험(KS F ISO 1182)', '실물모형시험'],
  www: { what: '화재 성능에 따라 [[불연재료]]·[[준불연재료]]·[[난연재료]]로 구분되는 건축 마감재료(건축법 시행령 제2조)', why: '화재 초기 연소확대·유독가스 억제 → 피난시간 확보·인명피해 방지', how: '[[불연성 시험(KS F ISO 1182)]] / [[콘칼로리미터(KS F ISO 5660-1)]] [[총방출열량 8MJ/m²]] / [[가스유해성 9분]] → 품질인정 → 현장 반입 검수' },
  tag: '재료·기준·시험',
  def: '화재 시 연소·발열·유독가스 발생을 억제하는 성능에 따라 [[불연재료]]·[[준불연재료]]·[[난연재료]]로 구분하는 건축 마감재료로, [[콘칼로리미터]] 가열 {{10분}}(준불연)·{{5분}}(난연) 동안 총방출열량 {{8MJ/m²}} 이하와 [[가스유해성]] 기준으로 판정',
  wwh: ['불연·준불연·난연', '연소확대·유독가스 억제', '방출열량·가스유해성'],
  figT: '방화재료 등급별 판정기준(총방출열량) 및 시험',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[콘칼로리미터 총방출열량 – 가열시간]</text>' +
    '<line x1="50" y1="50" x2="50" y2="230" class="ln"/>' +
    '<line x1="50" y1="230" x2="292" y2="230" class="ln"/>' +
    '<text x="56" y="56" class="s">총방출열량(MJ/m²)</text>' +
    '<text x="296" y="234" class="s">분</text>' +
    '<line x1="50" y1="130" x2="290" y2="130" class="ln2 dash"/>' +
    '<line x1="150" y1="60" x2="150" y2="230" class="ln2 dash"/>' +
    '<line x1="250" y1="60" x2="250" y2="230" class="ln2 dash"/>' +
    '<text x="150" y="246" text-anchor="middle" class="s">5</text>' +
    '<text x="250" y="246" text-anchor="middle" class="s">10</text>' +
    '<path d="M50,230 Q120,200 150,130 L172,96" fill="none" class="rd"/>' +
    '<path d="M50,230 Q190,200 250,130" fill="none" class="bl"/>' +
    '<path d="M50,230 Q200,225 290,205" fill="none" class="gr"/>' +
    '<text x="56" y="76" class="s">복사열 50kW/m² · 최대열방출률 200kW/m² 10초↑ 초과 금지</text>' +
    '<line x1="280" y1="130" x2="300" y2="118" class="ld"/><circle cx="300" cy="118" r="2" class="dotf"/><text x="305" y="122" class="r">8 MJ/m² 기준</text>' +
    '<line x1="170" y1="100" x2="200" y2="96" class="ld"/><circle cx="200" cy="96" r="2" class="dotf"/><text x="205" y="100" class="s">난연재료(5분)</text>' +
    '<line x1="236" y1="150" x2="262" y2="170" class="ld"/><circle cx="262" cy="170" r="2" class="dotf"/><text x="267" y="174" class="s">준불연재료(10분)</text>' +
    '<line x1="270" y1="211" x2="300" y2="196" class="ld"/><circle cx="300" cy="196" r="2" class="dotf"/><text x="305" y="200" class="s">불연재료(ISO 1182)</text>' +
    '<rect x="20" y="262" width="130" height="26" class="bx"/><text x="85" y="279" text-anchor="middle" class="b">불연재료</text>' +
    '<rect x="155" y="262" width="130" height="26" class="bx2"/><text x="220" y="279" text-anchor="middle" class="b">준불연재료</text>' +
    '<rect x="290" y="262" width="130" height="26" class="bx3"/><text x="355" y="279" text-anchor="middle" class="b">난연재료</text>' +
    '<line x1="150" y1="275" x2="155" y2="275" class="ar"/>' +
    '<line x1="285" y1="275" x2="290" y2="275" class="ar"/>' +
    '<text x="85" y="302" text-anchor="middle" class="s">콘크리트·석재·유리</text>' +
    '<text x="220" y="302" text-anchor="middle" class="s">석고보드·불연처리재</text>' +
    '<text x="355" y="302" text-anchor="middle" class="s">난연합판·난연 PS</text>' +
    '<text x="20" y="322" class="s">공통: 가스유해성 시험 마우스 행동정지 9분 이상</text>' +
    '<text x="446" y="30" class="b">[판정기준(국토부 고시)]</text>' +
    '<line x1="290" y1="205" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 불연: ΔT 20K·감량 30%↓</text><line x1="250" y1="135" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ 준불연: 10분 8MJ↓</text><line x1="152" y1="126" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ 난연: 5분 8MJ↓</text><line x1="400" y1="318" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 가스유해성 9분↑</text><text x="446" y="142" class="k4">④ 성적서·시공부위 일치</text><text x="446" y="162" class="k4">④ 복합자재 심재 확인</text><line x1="420" y1="275" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 실물모형시험 확대</text><text x="446" y="212" class="k5">⑤ 품질인정·이력 추적</text>' +
    '</svg>',
  subs: [
    { h: '등급별 판정기준', pts: ['[[불연재료]]: 온도상승 {{20K}}↓·질량감소 {{30%}}↓', '[[준불연재료]]: 가열 {{10분}} 총방출열량 {{8MJ/m²}}↓', '[[난연재료]]: 가열 {{5분}} 총방출열량 {{8MJ/m²}}↓'] },
    { h: '시공 시 유의사항', pts: ['[[가스유해성]] 마우스 행동정지 {{9분}} 이상 확인', '시험성적서·품질인정 구성과 시공부위 일치', '복합자재(샌드위치패널) 심재 성능 확인'] },
    { h: '개선방안', pts: ['[[실물모형시험]](외벽 KS F 8414 등) 확대', '품질인정 표시·유통 이력 추적관리'] }
  ],
  msg: '타지 않고(불연), 덜 내고(준불연·난연), 독하지 않게 — 재료 단계에서 화재를 늦춘다',
  mnemo: '불·준·난 = 20K30% · 10분8 · 5분8 + 가스9 → “불이삼 준십팔 난오팔 가스구”',
  rel: ['화재확산 방지구조', '내화구조', '방화구획', '방염처리', '복합자재 품질인정'],
  src: '근거: 건축법 시행령 제2조(불연·준불연·난연재료) / 건축물 마감재료의 난연성능 및 화재확산 방지구조 기준(국토부 고시) / 마법지 10장 제도(방화재료·화재확산 방지구조) — 불연재료 온도상승 20K·질량감소 30% 확인 필요'
},
199: {
  title: '화재확산 방지구조',
  cat: '안전·환경',
  key: ['층간 수직 화재확산', '높이 400mm 이상', '화재확산방지재료', '내화충전구조(Fire Stop)', '외단열(드라이비트)', '커튼월 Spandrel', '연돌(Chimney)효과', '실물모형시험(KS F 8414)'],
  www: { what: '외벽·커튼월을 타고 오르는 [[층간 수직 화재확산]]을 매 층 차단하는 구조(띠형 방지재료·[[내화충전구조(Fire Stop)]])', why: '가연성 외단열·틈새의 [[연돌(Chimney)효과]]로 인한 급격한 상층 연소 → 대형 인명피해 방지', how: '매 층 슬래브 위치에 [[화재확산방지재료]] [[높이 400mm 이상]] 설치 → 커튼월 틈 강판 받침+내화충전 → [[실물모형시험(KS F 8414)]]·감리 확인' },
  tag: '구조·기준·방화',
  def: '외벽 마감재·단열재나 커튼월-슬래브 틈을 통한 [[층간 수직 화재확산]]을 막기 위해 매 층마다 [[화재확산방지재료]]를 {{높이 400mm 이상}} 밀실하게 설치하고 커튼월 틈은 [[내화충전구조]]로 차단하는 구조',
  wwh: ['층간 화재 차단띠', '상층 연소확대 방지', '400mm 밀실·내화충전'],
  figT: '커튼월·외단열 화재확산 방지구조 상세',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[예시1 커튼월]</text>' +
    '<text x="232" y="26" class="b">[예시2 외단열]</text>' +
    '<rect x="40" y="40" width="8" height="260" class="bx3"/>' +
    '<rect x="90" y="110" width="110" height="30" class="conc"/>' +
    '<rect x="90" y="230" width="110" height="30" class="conc"/>' +
    '<rect x="48" y="110" width="42" height="16" class="rf"/>' +
    '<line x1="48" y1="128" x2="90" y2="128" class="ln"/>' +
    '<rect x="48" y="230" width="42" height="16" class="rf"/>' +
    '<line x1="48" y1="248" x2="90" y2="248" class="ln"/>' +
    '<path d="M70,222 L70,150" fill="none" class="rd"/>' +
    '<line x1="62" y1="146" x2="78" y2="146" class="rd"/>' +
    '<rect x="330" y="40" width="30" height="260" class="conc"/>' +
    '<rect x="360" y="110" width="70" height="30" class="conc"/>' +
    '<rect x="360" y="230" width="70" height="30" class="conc"/>' +
    '<rect x="300" y="40" width="30" height="260" class="bx3"/>' +
    '<rect x="300" y="110" width="30" height="30" class="rf"/>' +
    '<rect x="300" y="230" width="30" height="30" class="rf"/>' +
    '<line x1="296" y1="40" x2="296" y2="300" class="ln"/>' +
    '<path d="M276,300 q-10,-20 4,-40 q10,-20 -4,-40" fill="none" class="rd"/>' +
    '<path d="M286,292 q-8,-16 2,-32" fill="none" class="rd"/>' +
    '<line x1="286" y1="110" x2="286" y2="140" class="ln2"/>' +
    '<line x1="282" y1="110" x2="290" y2="110" class="ln2"/>' +
    '<line x1="282" y1="140" x2="290" y2="140" class="ln2"/>' +
    '<line x1="286" y1="125" x2="262" y2="160" class="ld"/><circle cx="262" cy="160" r="2" class="dotf"/><text x="257" y="164" text-anchor="end" class="r">400mm↑</text>' +
    '<line x1="44" y1="60" x2="70" y2="50" class="ld"/><circle cx="70" cy="50" r="2" class="dotf"/><text x="75" y="54" class="s">커튼월 Spandrel</text>' +
    '<line x1="69" y1="118" x2="110" y2="90" class="ld"/><circle cx="110" cy="90" r="2" class="dotf"/><text x="115" y="94" class="s">내화충전(미네랄울+실런트)</text>' +
    '<line x1="69" y1="128" x2="110" y2="160" class="ld"/><circle cx="110" cy="160" r="2" class="dotf"/><text x="115" y="164" class="s">강판 받침(Safing)</text>' +
    '<line x1="70" y1="190" x2="110" y2="204" class="ld"/><circle cx="110" cy="204" r="2" class="dotf"/><text x="115" y="208" class="r">층간 연기·화염 상승 차단</text>' +
    '<line x1="150" y1="250" x2="140" y2="290" class="ld"/><circle cx="140" cy="290" r="2" class="dotf"/><text x="145" y="294" class="s">슬래브</text>' +
    '<line x1="318" y1="70" x2="360" y2="60" class="ld"/><circle cx="360" cy="60" r="2" class="dotf"/><text x="365" y="64" class="s">외단열재(가연성)</text>' +
    '<line x1="330" y1="125" x2="372" y2="180" class="ld"/><circle cx="372" cy="180" r="2" class="dotf"/><text x="377" y="184" class="r">방지재료</text>' +
    '<line x1="296" y1="280" x2="262" y2="300" class="ld"/><circle cx="262" cy="300" r="2" class="dotf"/><text x="257" y="304" text-anchor="end" class="s">외벽 마감재</text>' +
    '<line x1="278" y1="262" x2="262" y2="244" class="ld"/><circle cx="262" cy="244" r="2" class="dotf"/><text x="257" y="248" text-anchor="end" class="s">외부 화염</text>' +
    '<text x="20" y="324" class="s">매 층마다 높이 400mm 이상 밀실하게 — 틈·이음 없이 연속 설치</text>' +
    '<text x="446" y="30" class="b">[방지구조 기준]</text>' +
    '<line x1="300" y1="118" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 매 층 400mm↑ 밀실</text><text x="446" y="72" class="k3">③ 불연재료(미네랄울 등)</text><line x1="200" y1="118" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ 커튼월 틈 내화충전</text><text x="446" y="122" class="k4">④ 틈새·이음 없이 연속</text><text x="446" y="142" class="k4">④ Anchor 고정·탈락 방지</text><text x="446" y="162" class="k4">④ 단열재 공극 방지 접착</text><line x1="430" y1="236" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 외벽 불연·준불연화</text><text x="446" y="212" class="k5">⑤ 실물모형시험·감리 확인</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 기준', pts: ['매 층 [[화재확산방지재료]] {{높이 400mm 이상}} 밀실', '불연재료(미네랄울·석재 등) 사용', '커튼월-슬래브 틈 [[내화충전구조]]'] },
    { h: '시공 시 유의사항', pts: ['틈새·이음 없이 연속 설치', 'Anchor·접착 고정으로 탈락 방지', '단열재 접착면 공극(연돌 통로) 방지'] },
    { h: '개선방안', pts: ['외벽 마감재 불연·준불연화', '[[실물모형시험]]·감리 단계별 확인'] }
  ],
  msg: '불길이 외벽을 타고 오르지 못하게 — 매 층 400mm 불연 띠와 틈새 충전',
  mnemo: '층·사·불·충(매층·400·불연·충전) → “층사불충”',
  rel: ['건축용 방화재료', '내화충전구조', '방화구획', '커튼월 층간방화', '외단열 공법'],
  src: '근거: 건축물의 피난·방화구조 등의 기준에 관한 규칙(외벽 마감재·화재확산 방지구조) / 건축물 마감재료의 난연성능 및 화재확산 방지구조 기준(국토부 고시) / 마법지 핵·마-4 화재확산 방지구조(커튼월·외단열 Type, 400mm) — 조문 번호·적용 대상(층수·높이) 확인 필요'
},
200: {
  title: '부실과 하자의 차이점',
  cat: '계약·제도·CM',
  key: ['부실(원인·행위)', '하자(결과·현상)', '설계도서·기준 위반', '균열·누수·처짐', '부실벌점', '하자담보책임기간', '하자보수보증금', '하자심사·분쟁조정위원회'],
  www: { what: '[[부실(원인·행위)]]: 기준 위반 시공 / [[하자(결과·현상)]]: 준공 후 기능·미관·안전 지장', why: '부실은 하자의 주원인 → 품질·안전사고·분쟁·LCC 증가 방지', how: '시공 중 기준 준수·검측(부실 차단) → 준공 → [[하자담보책임기간]] 내 점검·보수 → [[하자심사·분쟁조정위원회]]' },
  tag: '제도·비교·관리',
  def: '[[부실]]은 설계도서·시방서·관계법령의 기준을 위반하여 시공하는 [[원인 행위]]로 벌점·영업정지 등 제재 대상이고, [[하자]]는 공사상 잘못으로 준공 후 균열·누수·처짐 등 기능·미관·안전상 지장이 생긴 [[결과(현상)]]로 [[하자담보책임기간]]({{2·3·5·10년}}) 내 보수 대상',
  wwh: ['원인행위 vs 결과현상', '품질·분쟁 예방', '검측차단·담보보수'],
  figT: '부실→하자 발생 관계 및 관리체계 비교',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="20" y1="60" x2="430" y2="60" class="ar"/>' +
    '<text x="60" y="50" text-anchor="middle" class="s">기획·설계</text>' +
    '<text x="170" y="50" text-anchor="middle" class="s">시공</text>' +
    '<text x="260" y="50" text-anchor="middle" class="s">준공</text>' +
    '<text x="360" y="50" text-anchor="middle" class="s">유지관리</text>' +
    '<line x1="120" y1="55" x2="120" y2="65" class="ln"/>' +
    '<line x1="230" y1="55" x2="230" y2="65" class="ln"/>' +
    '<line x1="290" y1="55" x2="290" y2="65" class="ln"/>' +
    '<rect x="110" y="74" width="120" height="30" class="bx"/><text x="170" y="93" text-anchor="middle" class="b">부실(원인·행위)</text>' +
    '<rect x="300" y="74" width="120" height="30" class="bx2"/><text x="360" y="93" text-anchor="middle" class="b">하자(결과·현상)</text>' +
    '<line x1="230" y1="89" x2="300" y2="89" class="ar"/>' +
    '<text x="265" y="80" text-anchor="middle" class="s">잠복 → 발현</text>' +
    '<text x="170" y="122" text-anchor="middle" class="s">설계도서·기준 위반 시공</text>' +
    '<text x="360" y="122" text-anchor="middle" class="s">균열·누수·처짐·결로</text>' +
    '<line x1="110" y1="96" x2="70" y2="110" class="ld"/><circle cx="70" cy="110" r="2" class="dotf"/><text x="65" y="114" text-anchor="end" class="s">고의·과실</text>' +
    '<rect x="30" y="140" width="400" height="156" fill="none" class="ln2"/>' +
    '<line x1="30" y1="166" x2="430" y2="166" class="ln2"/>' +
    '<line x1="30" y1="192" x2="430" y2="192" class="ln2"/>' +
    '<line x1="30" y1="218" x2="430" y2="218" class="ln2"/>' +
    '<line x1="30" y1="244" x2="430" y2="244" class="ln2"/>' +
    '<line x1="30" y1="270" x2="430" y2="270" class="ln2"/>' +
    '<line x1="100" y1="140" x2="100" y2="296" class="ln2"/>' +
    '<line x1="260" y1="140" x2="260" y2="296" class="ln2"/>' +
    '<text x="65" y="157" text-anchor="middle" class="b">구분</text><text x="180" y="157" text-anchor="middle" class="b">부실</text><text x="345" y="157" text-anchor="middle" class="b">하자</text>' +
    '<text x="65" y="183" text-anchor="middle" class="s">시점</text><text x="180" y="183" text-anchor="middle" class="s">시공 중(원인 행위)</text><text x="345" y="183" text-anchor="middle" class="s">준공 후(결과 발현)</text>' +
    '<text x="65" y="209" text-anchor="middle" class="s">근거</text><text x="180" y="209" text-anchor="middle" class="s">건설기술진흥법</text><text x="345" y="209" text-anchor="middle" class="s">공동주택관리법·건산법</text>' +
    '<text x="65" y="235" text-anchor="middle" class="s">판단</text><text x="180" y="235" text-anchor="middle" class="s">부실측정·점검</text><text x="345" y="235" text-anchor="middle" class="s">하자심사·분쟁조정</text>' +
    '<text x="65" y="261" text-anchor="middle" class="s">책임</text><text x="180" y="261" text-anchor="middle" class="s">벌점·영업정지·형사</text><text x="345" y="261" text-anchor="middle" class="s">하자보수·손해배상</text>' +
    '<text x="65" y="287" text-anchor="middle" class="s">기간</text><text x="180" y="287" text-anchor="middle" class="s">공사 중 수시</text><text x="345" y="287" text-anchor="middle" class="s">담보 2·3·5·10년</text>' +
    '<line x1="180" y1="296" x2="180" y2="316" class="ld"/><circle cx="180" cy="316" r="2" class="dotf"/><text x="185" y="320" class="r">부실 → 하자로 발현(인과관계)</text>' +
    '<line x1="65" y1="296" x2="60" y2="316" class="ld"/><circle cx="60" cy="316" r="2" class="dotf"/><text x="65" y="320" class="s">하자 주원인 = 부실</text>' +
    '<text x="446" y="30" class="b">[부실 vs 하자]</text>' +
    '<line x1="230" y1="80" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 부실 = 원인(행위)</text><line x1="420" y1="80" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ 하자 = 결과(현상)</text><line x1="430" y1="283" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ 담보기간 2·3·5·10년</text><line x1="260" y1="179" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 시공 중 기준 준수</text><text x="446" y="142" class="k4">④ 검측·자재검수 철저</text><line x1="430" y1="231" x2="440" y2="158" class="ld"/><circle cx="440" cy="158" r="2" class="dotf"/><text x="446" y="162" class="k4">④ 하자 원인 규명 기록</text><text x="446" y="192" class="k5">⑤ 품질관리계획·CQI</text><text x="446" y="212" class="k5">⑤ BIM 이력·하자 DB</text>' +
    '</svg>',
  subs: [
    { h: '구분(비교)', pts: ['[[부실]] = 시공 중 [[원인 행위]](기준 위반)', '[[하자]] = 준공 후 [[결과(현상)]](균열·누수·처짐)', '하자담보책임기간 {{2·3·5·10년}}(공동주택)'] },
    { h: '관리 시 유의사항', pts: ['시공 중 설계도서·시방 기준 준수', '검측·자재검수 철저(부실 차단)', '하자 발생 시 원인 규명·기록(책임 구분)'] },
    { h: '개선방안', pts: ['품질관리계획·CQI 시험검사 이력화', 'BIM 기반 시공이력·하자 DB 구축'] }
  ],
  msg: '부실은 원인, 하자는 결과 — 시공 중 부실을 막아야 준공 후 하자가 없다',
  mnemo: '부·원·벌 / 하·결·보(부실=원인·벌점, 하자=결과·보수) → “부원벌 하결보”',
  rel: ['하자담보책임기간', '부실벌점제도', '품질관리계획', '하자보수보증금', 'CQI'],
  src: '근거: 건설기술진흥법 제53조(부실벌점) / 공동주택관리법 제36조·시행령 별표4(담보책임기간 2·3·5·10년) / 건설산업기본법 제28조(하자담보책임) / 마법지 10장 부실시공(기획·설계·시공 단계 대책)'
},
201: {
  title: 'C.M, 건설사업관리(Construction Management)',
  cat: '계약·제도·CM',
  key: ['건설사업관리(CM)', '발주자 대리인', '전 단계 통합관리', '공정·원가·품질·안전', 'CM for Fee', 'CM at Risk', '감독권한대행', 'PMIS'],
  www: { what: '전문 [[건설사업관리(CM)]]가 [[발주자 대리인]]으로 사업 전 단계를 관리하는 용역', why: '발주자 전문성 보완, 공기·원가·품질·안전 목표 달성 및 분쟁 감소', how: '기획(타당성) → 설계(VE·시공성) → 발주(계약) → 시공([[감독권한대행]]) → 사후관리 [[전 단계 통합관리]]([[PMIS]])' },
  tag: '제도·계약·관리',
  def: '[[건설사업관리자(CM)]]가 발주자를 대신하여 [[기획·설계·발주·시공·사후관리]] 전 단계에 걸쳐 공정·원가·품질·안전 등을 [[통합관리]]하는 용역으로, 건설기술진흥법상 감독 권한대행 업무를 포함 (총공사비 {{200억원 이상}} 주요 공사 의무)',
  wwh: ['발주자 대리 통합관리', '공기·원가·품질 확보', '전 단계 업무 수행'],
  figT: 'CM 단계별 업무영역 및 참여자 관계',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="36" width="76" height="24" class="bx"/><text x="58" y="52" text-anchor="middle" class="s">기획</text>' +
    '<rect x="104" y="36" width="76" height="24" class="bx"/><text x="142" y="52" text-anchor="middle" class="s">설계</text>' +
    '<rect x="188" y="36" width="76" height="24" class="bx"/><text x="226" y="52" text-anchor="middle" class="s">발주</text>' +
    '<rect x="272" y="36" width="76" height="24" class="bx"/><text x="310" y="52" text-anchor="middle" class="s">시공</text>' +
    '<rect x="356" y="36" width="76" height="24" class="bx"/><text x="394" y="52" text-anchor="middle" class="s">사후관리</text>' +
    '<line x1="96" y1="48" x2="104" y2="48" class="ar"/>' +
    '<line x1="180" y1="48" x2="188" y2="48" class="ar"/>' +
    '<line x1="264" y1="48" x2="272" y2="48" class="ar"/>' +
    '<line x1="348" y1="48" x2="356" y2="48" class="ar"/>' +
    '<text x="20" y="26" class="b">[사업 단계별 업무영역]</text>' +
    '<rect x="20" y="68" width="412" height="20" class="bx2"/><text x="226" y="82" text-anchor="middle" class="b">CM(건설사업관리): 전 단계 통합관리</text>' +
    '<rect x="272" y="94" width="78" height="18" class="bx"/><text x="311" y="107" text-anchor="middle" class="s">감리</text>' +
    '<rect x="185" y="128" width="90" height="26" class="bx"/><text x="230" y="145" text-anchor="middle" class="s">발주자(Owner)</text>' +
    '<rect x="40" y="248" width="100" height="26" class="bx"/><text x="90" y="265" text-anchor="middle" class="s">설계자(A/E)</text>' +
    '<rect x="320" y="248" width="100" height="26" class="bx"/><text x="370" y="265" text-anchor="middle" class="s">시공자(GC)</text>' +
    '<rect x="180" y="190" width="100" height="28" class="bx2"/><text x="230" y="208" text-anchor="middle" class="b">CM</text>' +
    '<line x1="230" y1="154" x2="90" y2="248" class="ln"/>' +
    '<line x1="230" y1="154" x2="370" y2="248" class="ln"/>' +
    '<line x1="140" y1="261" x2="320" y2="261" class="ln2 dash"/>' +
    '<line x1="230" y1="190" x2="230" y2="154" class="ln2 dash"/>' +
    '<line x1="180" y1="204" x2="140" y2="248" class="ln2 dash"/>' +
    '<line x1="280" y1="204" x2="320" y2="248" class="ln2 dash"/>' +
    '<line x1="232" y1="172" x2="300" y2="168" class="ld"/><circle cx="300" cy="168" r="2" class="dotf"/><text x="305" y="172" class="s">용역계약(대리인)</text>' +
    '<line x1="165" y1="232" x2="150" y2="240" class="ld"/><circle cx="150" cy="240" r="2" class="dotf"/><text x="155" y="244" class="s">설계VE·시공성</text>' +
    '<line x1="296" y1="226" x2="330" y2="226" class="ld"/><circle cx="330" cy="226" r="2" class="dotf"/><text x="335" y="230" class="s">공정·원가·품질·안전</text>' +
    '<line x1="350" y1="103" x2="370" y2="120" class="ld"/><circle cx="370" cy="120" r="2" class="dotf"/><text x="375" y="124" class="s">감리=시공단계</text>' +
    '<line x1="40" y1="88" x2="40" y2="120" class="ld"/><circle cx="40" cy="120" r="2" class="dotf"/><text x="45" y="124" class="s">발주자 역량 보완</text>' +
    '<line x1="230" y1="261" x2="230" y2="282" class="ld"/><circle cx="230" cy="282" r="2" class="dotf"/><text x="235" y="286" class="s">설계-시공 조정(협력)</text>' +
    '<text x="20" y="304" class="s">실선: 계약관계 / 점선: 관리·조정(CM)</text>' +
    '<text x="20" y="322" class="s">업무: 사업관리일반·계약·사업비·공정·품질·안전·환경·정보·사후관리</text>' +
    '<text x="446" y="30" class="b">[CM 핵심]</text>' +
    '<line x1="432" y1="78" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ CM for Fee / at Risk</text><text x="446" y="72" class="k3">③ 공정·원가·품질·안전</text><text x="446" y="92" class="k3">③ 감독권한대행 CM</text><line x1="275" y1="141" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 권한·책임 범위 명확</text><text x="446" y="142" class="k4">④ 발주자 의사결정 지연</text><text x="446" y="162" class="k4">④ CM 대가·역량 확보</text><line x1="280" y1="204" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ PMIS·BIM 정보 통합</text><text x="446" y="212" class="k5">⑤ 프리콘·ECI 연계</text>' +
    '</svg>',
  subs: [
    { h: '유형 및 업무', pts: ['[[CM for Fee]](대리인형) / [[CM at Risk]](시공책임형)', '공정·원가·품질·안전·환경·정보 [[통합관리]]', '[[감독권한대행]] 건설사업관리(시공단계)'] },
    { h: '운영 시 유의사항', pts: ['CM·발주자·감리 권한·책임 범위 명확화', '발주자 의사결정 지연 방지(승인 절차 단축)', '적정 CM 대가·전문인력 역량 확보'] },
    { h: '개선방안', pts: ['[[PMIS]]·BIM 기반 정보 통합', '프리콘·ECI(초기 시공자 참여) 연계'] }
  ],
  msg: '발주자의 눈과 손 — 기획부터 사후까지 전문가가 끝까지 관리한다',
  mnemo: '기·설·발·시·사 전 단계 + 공·원·품·안 → “기설발시사 공원품안”',
  rel: ['CM for Fee·CM at Risk', '프리콘', 'PM', '감리제도', 'PMIS'],
  src: '근거: 건설기술진흥법 제39조·시행령 제55조(감독권한대행 건설사업관리 대상)·제59조(업무 범위) / 마법지 10장 업무 Scope(C.M) / 마법지 핵·마-5 CM 그림 — 의무 대상 총공사비 200억원 기준 확인 필요'
},
202: {
  title: 'C.M for fee와 C.M at risk',
  cat: '계약·제도·CM',
  key: ['CM for Fee', 'CM at Risk', '대리인형(Agency)', '시공책임형', 'GMP(최대공사비 보증)', '보수(Fee)', '하도급 직접계약', 'Open Book'],
  www: { what: '[[CM for Fee]](관리 용역·대리인) vs [[CM at Risk]](시공 책임·GMP)의 CM 계약 유형', why: '발주자 역량·사업 특성에 맞는 위험 배분 → 공기·원가·품질 확보', how: 'For Fee: 발주자-시공자 직접(분할)계약 + CM 관리 / At Risk: 설계단계 참여 → [[GMP(최대공사비 보증)]] 확정 → [[하도급 직접계약]]·시공 책임' },
  tag: '계약·제도·비교',
  def: '[[CM for Fee]]는 CM이 발주자의 [[대리인]]으로 관리 용역만 수행하고 [[보수(Fee)]]를 받아 공사비 위험을 지지 않는 형태이고, [[CM at Risk]]는 CM이 시공 단계에서 시공자로서 [[GMP(최대공사비 보증)]] 하에 하도급을 직접 계약하고 공기·공사비 초과 위험을 부담하는 형태',
  wwh: ['대리형 vs 책임형', '위험 배분 최적화', 'Fee 관리·GMP 시공'],
  figT: 'CM for Fee·CM at Risk 계약관계 비교',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[CM for Fee — 대리인형]</text>' +
    '<text x="232" y="26" class="b">[CM at Risk — 시공책임형]</text>' +
    '<rect x="70" y="40" width="100" height="24" class="bx"/><text x="120" y="56" text-anchor="middle" class="b">발주자</text>' +
    '<rect x="20" y="110" width="70" height="24" class="bx"/><text x="55" y="126" text-anchor="middle" class="s">설계자</text>' +
    '<rect x="150" y="110" width="70" height="24" class="bx2"/><text x="185" y="126" text-anchor="middle" class="s">CM(Fee)</text>' +
    '<rect x="20" y="190" width="60" height="24" class="bx"/><text x="50" y="206" text-anchor="middle" class="s">시공자A</text>' +
    '<rect x="88" y="190" width="60" height="24" class="bx"/><text x="118" y="206" text-anchor="middle" class="s">시공자B</text>' +
    '<rect x="156" y="190" width="60" height="24" class="bx"/><text x="186" y="206" text-anchor="middle" class="s">시공자C</text>' +
    '<line x1="120" y1="64" x2="55" y2="110" class="ln"/>' +
    '<line x1="120" y1="64" x2="185" y2="110" class="ln"/>' +
    '<line x1="120" y1="64" x2="50" y2="190" class="ln"/>' +
    '<line x1="120" y1="64" x2="118" y2="190" class="ln"/>' +
    '<line x1="120" y1="64" x2="186" y2="190" class="ln"/>' +
    '<line x1="185" y1="134" x2="50" y2="190" class="ln2 dash"/>' +
    '<line x1="185" y1="134" x2="118" y2="190" class="ln2 dash"/>' +
    '<line x1="185" y1="134" x2="186" y2="190" class="ln2 dash"/>' +
    '<line x1="90" y1="122" x2="150" y2="122" class="ln2 dash"/>' +
    '<rect x="285" y="40" width="100" height="24" class="bx"/><text x="335" y="56" text-anchor="middle" class="b">발주자</text>' +
    '<rect x="235" y="110" width="70" height="24" class="bx"/><text x="270" y="126" text-anchor="middle" class="s">설계자</text>' +
    '<rect x="340" y="110" width="90" height="24" class="bx2"/><text x="385" y="126" text-anchor="middle" class="s">CM at Risk</text>' +
    '<rect x="300" y="190" width="40" height="24" class="bx"/><text x="320" y="206" text-anchor="middle" class="s">하1</text>' +
    '<rect x="345" y="190" width="40" height="24" class="bx"/><text x="365" y="206" text-anchor="middle" class="s">하2</text>' +
    '<rect x="390" y="190" width="40" height="24" class="bx"/><text x="410" y="206" text-anchor="middle" class="s">하3</text>' +
    '<line x1="335" y1="64" x2="270" y2="110" class="ln"/>' +
    '<line x1="335" y1="64" x2="385" y2="110" class="ln"/>' +
    '<line x1="385" y1="134" x2="320" y2="190" class="ln"/>' +
    '<line x1="385" y1="134" x2="365" y2="190" class="ln"/>' +
    '<line x1="385" y1="134" x2="410" y2="190" class="ln"/>' +
    '<line x1="305" y1="122" x2="340" y2="122" class="ln2 dash"/>' +
    '<line x1="118" y1="214" x2="100" y2="244" class="ld"/><circle cx="100" cy="244" r="2" class="dotf"/><text x="105" y="248" class="s">시공자 직접계약(분할)</text>' +
    '<line x1="185" y1="134" x2="60" y2="270" class="ld"/><circle cx="60" cy="270" r="2" class="dotf"/><text x="65" y="274" class="s">CM: 관리·조정만(무위험)</text>' +
    '<line x1="55" y1="134" x2="40" y2="300" class="ld"/><circle cx="40" cy="300" r="2" class="dotf"/><text x="45" y="304" class="s">설계자 별도 계약</text>' +
    '<line x1="400" y1="214" x2="380" y2="248" class="ld"/><circle cx="380" cy="248" r="2" class="dotf"/><text x="375" y="252" text-anchor="end" class="r">GMP 보증·초과위험 부담</text>' +
    '<line x1="345" y1="214" x2="330" y2="274" class="ld"/><circle cx="330" cy="274" r="2" class="dotf"/><text x="325" y="278" text-anchor="end" class="s">하도급 직접계약</text>' +
    '<line x1="270" y1="134" x2="290" y2="300" class="ld"/><circle cx="290" cy="300" r="2" class="dotf"/><text x="295" y="304" class="s">설계단계부터 참여</text>' +
    '<text x="20" y="324" class="s">실선: 계약관계 / 점선: 관리·협력관계</text>' +
    '<text x="446" y="30" class="b">[비교 핵심]</text>' +
    '<line x1="220" y1="122" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ Fee: 대리인·관리용역</text><line x1="430" y1="122" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ Risk: 시공자·GMP</text><text x="446" y="92" class="k3">③ Risk: 하도급 직접계약</text><text x="446" y="122" class="k4">④ Fee: 발주자 위험부담</text><text x="446" y="142" class="k4">④ Risk: 이해상충 감시</text><text x="446" y="162" class="k4">④ GMP 산정·Open Book</text><text x="446" y="192" class="k5">⑤ 발주자 역량별 선택</text><line x1="430" y1="202" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="446" y="212" class="k5">⑤ 절감액 이익공유 조항</text>' +
    '</svg>',
  subs: [
    { h: '비교(구성·특징)', pts: ['[[CM for Fee]]: 대리인·관리용역, [[보수(Fee)]] 수령', '[[CM at Risk]]: 시공자 지위·[[GMP(최대공사비 보증)]]', 'At Risk: [[하도급 직접계약]]·공사비 초과위험 부담'] },
    { h: '적용 시 유의사항', pts: ['For Fee: 공사비·공기 위험은 발주자 부담', 'At Risk: CM-시공 이해상충 감시 필요', 'GMP 산정 투명성 확보([[Open Book]])'] },
    { h: '개선방안', pts: ['발주자 역량·사업 규모별 유형 선택', '절감액 이익공유(Shared Savings) 조항'] }
  ],
  msg: '관리만 하면 Fee, 공사비까지 책임지면 at Risk — 위험을 누가 지느냐의 차이',
  mnemo: 'Fee = 대·관·발(대리·관리·발주자위험) / Risk = 시·G·하(시공·GMP·하도급) → “대관발 시지하”',
  rel: ['CM(건설사업관리)', 'GMP', '프리콘', '시공책임형 CM', 'IPD'],
  src: '근거: 마법지 핵·마-5 CM 그림(Professional CM for Fee / CM at Risk 계약·협력관계) / 마법지 10장 업무 Scope(C.M) / 국토부 시공책임형 CM 시범사업'
},
203: {
  title: '프리콘(PreConstruction)',
  cat: '계약·제도·CM',
  key: ['Pre-Construction', '시공자 조기참여(ECI)', '시공성 검토(Constructability)', '설계 VE', 'BIM 간섭검토', '공사비·공정 사전 확정', 'MacLeamy Curve', '시공책임형 CM'],
  www: { what: '설계 단계에 시공자가 조기 참여([[시공자 조기참여(ECI)]])하여 시공 노하우를 반영하는 [[Pre-Construction]] 활동', why: '설계 초기일수록 원가 영향력↑·변경비용↓([[MacLeamy Curve]]) → 설계변경·클레임·공기지연 방지', how: '시공자 선정(설계단계) → [[시공성 검토(Constructability)]]·[[설계 VE]] → [[BIM 간섭검토]] → [[공사비·공정 사전 확정]](GMP) → 착공' },
  tag: '제도·관리·협업',
  def: '설계 단계부터 [[발주자·설계자·시공자]]가 협업하여 [[시공성 검토(Constructability)]]·VE·공사비·공정·[[BIM 간섭검토]]를 착공 전에 수행함으로써 설계 변경과 리스크를 사전에 제거하는 [[Pre-Construction]] 서비스',
  wwh: ['착공 전 사전시공', '설계변경·리스크 제거', '조기참여·BIM·VE'],
  figT: '프리콘 참여 시점과 원가 영향력 곡선(MacLeamy)',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[MacLeamy Curve — 노력의 前이동]</text>' +
    '<rect x="60" y="56" width="170" height="144" fill="none" class="ln2 dash"/>' +
    '<line x1="40" y1="56" x2="40" y2="200" class="ln"/>' +
    '<line x1="40" y1="200" x2="425" y2="200" class="ln"/>' +
    '<text x="80" y="216" text-anchor="middle" class="s">기획</text>' +
    '<text x="150" y="216" text-anchor="middle" class="s">기본설계</text>' +
    '<text x="230" y="216" text-anchor="middle" class="s">실시설계</text>' +
    '<text x="310" y="216" text-anchor="middle" class="s">시공</text>' +
    '<text x="390" y="216" text-anchor="middle" class="s">유지관리</text>' +
    '<path d="M40,60 C140,70 220,170 420,190" fill="none" class="bl"/>' +
    '<path d="M40,195 C200,190 300,120 420,60" fill="none" class="rd"/>' +
    '<path d="M40,190 C200,180 240,80 300,150" fill="none" class="ln2 dash"/>' +
    '<path d="M40,190 C100,120 120,40 200,140" fill="none" class="gr"/>' +
    '<text x="66" y="194" class="s">프리콘(설계단계)</text>' +
    '<line x1="75" y1="62" x2="90" y2="40" class="ld"/><circle cx="90" cy="40" r="2" class="dotf"/><text x="95" y="44" class="s">원가·설계 영향력</text>' +
    '<line x1="400" y1="72" x2="380" y2="46" class="ld"/><circle cx="380" cy="46" r="2" class="dotf"/><text x="375" y="50" text-anchor="end" class="r">변경 비용(Cost of change)</text>' +
    '<line x1="270" y1="120" x2="300" y2="108" class="ld"/><circle cx="300" cy="108" r="2" class="dotf"/><text x="305" y="112" class="s">전통 방식 노력</text>' +
    '<line x1="112" y1="101" x2="160" y2="76" class="ld"/><circle cx="160" cy="76" r="2" class="dotf"/><text x="165" y="80" class="s">프리콘 노력 前이동</text>' +
    '<rect x="20" y="232" width="76" height="26" class="bx2"/><text x="58" y="249" text-anchor="middle" class="s">시공성 검토</text>' +
    '<rect x="104" y="232" width="76" height="26" class="bx2"/><text x="142" y="249" text-anchor="middle" class="s">VE·LCC</text>' +
    '<rect x="188" y="232" width="76" height="26" class="bx2"/><text x="226" y="249" text-anchor="middle" class="s">공사비·공정</text>' +
    '<rect x="272" y="232" width="76" height="26" class="bx2"/><text x="310" y="249" text-anchor="middle" class="s">BIM 간섭</text>' +
    '<rect x="356" y="232" width="76" height="26" class="bx2"/><text x="394" y="249" text-anchor="middle" class="s">조달·GMP</text>' +
    '<text x="20" y="284" class="b">발주자 + 설계자 + 시공자 협업 → 착공 전 리스크 제거</text>' +
    '<text x="20" y="304" class="s">설계 초기일수록 적은 비용으로 큰 효과(변경비용 최소)</text>' +
    '<line x1="58" y1="258" x2="60" y2="322" class="ld"/><circle cx="60" cy="322" r="2" class="dotf"/><text x="65" y="326" class="s">Constructability Review</text>' +
    '<line x1="394" y1="258" x2="380" y2="322" class="ld"/><circle cx="380" cy="322" r="2" class="dotf"/><text x="375" y="326" text-anchor="end" class="s">시공책임형 CM 연계</text>' +
    '<text x="446" y="30" class="b">[프리콘 핵심]</text>' +
    '<line x1="230" y1="120" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ 설계단계 시공자 참여</text><text x="446" y="72" class="k3">③ 시공성·VE·BIM 검토</text><text x="446" y="92" class="k3">③ 공사비·공기 확정(GMP)</text><text x="446" y="122" class="k4">④ 참여 범위·대가 명확</text><text x="446" y="142" class="k4">④ 설계 책임 경계 설정</text><text x="446" y="162" class="k4">④ 정보 공유·신뢰 확보</text><line x1="432" y1="245" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ IPD·시공책임형 CM</text><line x1="348" y1="252" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="446" y="212" class="k5">⑤ BIM 기반 협업</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 특징', pts: ['설계단계 [[시공자 조기참여(ECI)]]', '[[시공성 검토(Constructability)]]·VE·[[BIM 간섭검토]]', '[[공사비·공정 사전 확정]](GMP)'] },
    { h: '적용 시 유의사항', pts: ['참여 범위·Pre-con 대가 명확화', '설계 책임과 시공 제안의 경계 설정', '참여자 간 정보 공유·신뢰 확보'] },
    { h: '개선방안', pts: ['IPD·[[시공책임형 CM]](CM at Risk) 연계', 'BIM 기반 협업 플랫폼(CDE) 운영'] }
  ],
  msg: '짓기 전에 미리 지어본다 — 설계 초기 시공 참여로 변경과 리스크를 착공 전에 없앤다',
  mnemo: '조·시·V·B·G(조기참여·시공성·VE·BIM·GMP) → “조시 VBG”',
  rel: ['CM at Risk', '설계 VE', 'IPD', 'BIM', 'Constructability'],
  src: '근거: 마법지 10장 업무 Scope(시공성 분석·V.E·C.M) / 국토부 시공책임형 CM 시범사업(설계단계 시공자 참여) / MacLeamy Curve(설계 노력 前이동)'
},
204: {
  title: '건설위험관리에서 위험약화전략',
  cat: '계약·제도·CM',
  key: ['위험약화(Risk Mitigation)', 'Risk = P × I', '발생확률 저감', '영향도 저감', '잔존위험(Residual Risk)', '위험대응 4전략(회피·감소·전가·보유)', '보완조치(가새·계측)', '위험관리 절차(식별→분석→대응→관리)'],
  www: { what: '[[Risk = P × I]] 중 [[발생확률 저감]]·[[영향도 저감]]으로 위험을 허용수준까지 낮추는 대응전략', why: '회피 불가 위험의 사고·공기지연·원가손실 최소화(안전·품질·공정·원가 최적화)', how: '[[위험관리 절차(식별→분석→대응→관리)]] → 보완조치(동바리 가새·수평연결재, 불티방지·화재감시자, 스마트 계측) → [[잔존위험(Residual Risk)]] 재평가' },
  tag: '관리·전략·대응',
  def: '위험대응 4전략(회피·[[감소(약화)]]·전가·보유) 중 하나로, 위험을 제거할 수 없을 때 [[보완조치]]로 위험의 [[발생확률(P)]] 또는 [[영향도(I)]]를 낮추어 [[잔존위험]]을 허용수준 이하로 관리하는 전략 (Risk = P × I)',
  wwh: ['P·I 저감 대응전략', '회피불가 위험 최소화', '보완조치·재평가'],
  figT: '위험대응 Matrix와 약화(감소) 전략의 위치',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[위험관리 절차]</text>' +
    '<rect x="20" y="36" width="90" height="24" class="bx"/><text x="65" y="52" text-anchor="middle" class="s">식별</text>' +
    '<rect x="124" y="36" width="90" height="24" class="bx"/><text x="169" y="52" text-anchor="middle" class="s">분석</text>' +
    '<rect x="228" y="36" width="90" height="24" class="bx2"/><text x="273" y="52" text-anchor="middle" class="b">대응</text>' +
    '<rect x="332" y="36" width="90" height="24" class="bx"/><text x="377" y="52" text-anchor="middle" class="s">관리</text>' +
    '<line x1="110" y1="48" x2="124" y2="48" class="ar"/>' +
    '<line x1="214" y1="48" x2="228" y2="48" class="ar"/>' +
    '<line x1="318" y1="48" x2="332" y2="48" class="ar"/>' +
    '<line x1="273" y1="60" x2="280" y2="76" class="ld"/><circle cx="280" cy="76" r="2" class="dotf"/><text x="285" y="80" class="s">회피·감소·전가·보유</text>' +
    '<rect x="70" y="90" width="150" height="100" class="bx2"/>' +
    '<rect x="220" y="90" width="150" height="100" class="bx"/>' +
    '<rect x="70" y="190" width="150" height="100" class="bx"/>' +
    '<rect x="220" y="190" width="150" height="100" class="bx"/>' +
    '<text x="145" y="130" text-anchor="middle" class="b">감소(약화)</text>' +
    '<text x="145" y="150" text-anchor="middle" class="s">보완조치로 P·I↓</text>' +
    '<text x="295" y="130" text-anchor="middle" class="b">회피</text>' +
    '<line x1="295" y1="140" x2="300" y2="158" class="ld"/><circle cx="300" cy="158" r="2" class="dotf"/><text x="305" y="162" class="s">작업취소·공법변경</text>' +
    '<text x="145" y="230" text-anchor="middle" class="b">보유(수용)</text>' +
    '<text x="145" y="250" text-anchor="middle" class="s">예비비·비상계획</text>' +
    '<text x="295" y="230" text-anchor="middle" class="b">전가</text>' +
    '<line x1="295" y1="240" x2="300" y2="258" class="ld"/><circle cx="300" cy="258" r="2" class="dotf"/><text x="305" y="262" class="s">보험·ESC·계약</text>' +
    '<text x="24" y="84" class="s">발생확률(P)</text>' +
    '<text x="40" y="100" class="s">High</text>' +
    '<text x="40" y="286" class="s">Low</text>' +
    '<text x="76" y="304" class="s">Low</text>' +
    '<text x="334" y="304" class="s">High</text>' +
    '<text x="374" y="304" class="s">영향도(I)</text>' +
    '<circle cx="205" cy="160" r="4" class="rf"/>' +
    '<line x1="205" y1="164" x2="205" y2="266" class="ar"/>' +
    '<text x="210" y="215" class="r">P↓·I↓</text>' +
    '<line x1="205" y1="268" x2="230" y2="276" class="ld"/><circle cx="230" cy="276" r="2" class="dotf"/><text x="235" y="280" class="s">잔존위험(허용수준)</text>' +
    '<text x="70" y="324" class="b">Risk = P(발생확률) × I(영향도) → 허용수준 이하로</text>' +
    '<text x="446" y="30" class="b">[위험약화(감소) 전략]</text>' +
    '<line x1="372" y1="100" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ Risk = P × I</text><line x1="209" y1="160" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ 발생확률·영향도 저감</text><line x1="330" y1="276" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ 잔존위험 허용수준</text><line x1="220" y1="120" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k4">④ 동바리 수평연결재·가새</text><text x="446" y="142" class="k4">④ 용접 불티방지·감시자</text><text x="446" y="162" class="k4">④ 계측·신호등 조기경보</text><line x1="370" y1="150" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ 대안공법·Mock-up</text><text x="446" y="212" class="k5">⑤ 잔존위험 재평가·모니터링</text>' +
    '</svg>',
  subs: [
    { h: '개념 및 기준', pts: ['[[Risk = P × I]](발생확률 × 영향도)', '[[발생확률 저감]]·[[영향도 저감]]', '[[잔존위험(Residual Risk)]] 허용수준 이하'] },
    { h: '적용 사례(시공단계)', pts: ['동바리 수평연결재·가새 설치 → 붕괴위험 감소', '용접·용단 불티비산 방지포·소화기·화재감시자 배치', '스마트 계측·안전신호등 → 위험 시 즉시 중단'] },
    { h: '개선방안', pts: ['대안공법 검토·Mock-up 사전 검증', '잔존위험 재평가·지속 모니터링'] }
  ],
  msg: '없앨 수 없다면 줄인다 — 발생확률과 영향도를 낮춰 잔존위험을 허용수준 이하로',
  mnemo: '회·감·전·보 중 “감” = P↓·I↓ → “확영 낮춰 잔존 관리”',
  rel: ['위험관리 절차', '위험회피·전가·보유', 'DfS(설계안전성검토)', '위험성평가', '스마트 안전관리'],
  src: '근거: 합격답안 11.기타(RISK) p1~3(위험대응 Matrix 감소·회피·수용·전이, 감소전략 사례)·p10(식별→분석→대응→관리) / 마법지 10장 리스크 분석(인지→분석→대응) / PMBOK Risk Response(Mitigate)'
},
205: {
  title: '건설 VE',
  cat: '공정·원가관리',
  key: ['V = F / C', '기능분석(FAST)', 'LCC 최소화', '설계VE(100억↑)', '시공VE', '가치향상 4유형', '조직적 노력(Team)', 'Job Plan(준비→분석→개발→실시)'],
  www: { what: '[[V = F / C]] — 기능은 유지·향상하고 비용(LCC)은 낮추는 조직적 [[기능분석(FAST)]] 기법', why: '단순 원가절감이 아닌 가치 향상 → 품질 유지 + [[LCC 최소화]], 설계 초기 적용 효과 최대', how: '[[Job Plan(준비→분석→개발→실시)]]: 대상선정 → 기능정의·정리(FAST)·평가 → 아이디어 창출·평가 → 제안·실시·사후평가' },
  tag: '기법·원가·가치',
  def: '필요한 [[기능(F)]]을 최소의 [[생애주기비용(C)]]으로 달성하기 위해 [[V = F / C]] 관점에서 [[기능분석(FAST)]]과 대안 창출을 수행하는 조직적 가치향상 활동 (설계VE: 총공사비 {{100억원 이상}} 기본·실시설계)',
  wwh: ['기능/비용 가치향상', '품질 유지 원가절감', '기능분석·대안창출'],
  figT: 'VE 가치향상 유형 및 단계별 원가절감 가능성',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[가치 = 기능 / 비용]</text>' +
    '<text x="200" y="26" class="b">[단계별 VE 효과]</text>' +
    '<rect x="20" y="40" width="140" height="44" class="bx2"/><text x="90" y="66" text-anchor="middle" class="t">V = F / C</text>' +
    '<text x="24" y="108" class="s">F↑ C↓ : 가치혁신(최적)</text>' +
    '<text x="24" y="128" class="s">F→ C↓ : 원가절감</text>' +
    '<text x="24" y="148" class="s">F↑ C→ : 기능향상</text>' +
    '<text x="24" y="168" class="s">F↑↑ C↑ : 기능강화</text>' +
    '<rect x="240" y="60" width="100" height="140" fill="none" class="ln2 dash"/>' +
    '<line x1="190" y1="60" x2="190" y2="200" class="ln"/>' +
    '<line x1="190" y1="200" x2="428" y2="200" class="ln"/>' +
    '<text x="215" y="216" text-anchor="middle" class="s">기획</text>' +
    '<text x="265" y="216" text-anchor="middle" class="s">기본설계</text>' +
    '<text x="320" y="216" text-anchor="middle" class="s">실시설계</text>' +
    '<text x="370" y="216" text-anchor="middle" class="s">시공</text>' +
    '<text x="410" y="216" text-anchor="middle" class="s">유지</text>' +
    '<path d="M190,66 C260,76 330,180 425,192" fill="none" class="gr"/>' +
    '<path d="M190,196 C300,190 360,130 425,66" fill="none" class="rd"/>' +
    '<line x1="220" y1="72" x2="240" y2="50" class="ld"/><circle cx="240" cy="50" r="2" class="dotf"/><text x="245" y="54" class="g">원가절감 가능성</text>' +
    '<line x1="412" y1="78" x2="420" y2="96" class="ld"/><circle cx="420" cy="96" r="2" class="dotf"/><text x="415" y="100" text-anchor="end" class="r">변경 비용</text>' +
    '<line x1="300" y1="198" x2="300" y2="236" class="ld"/><circle cx="300" cy="236" r="2" class="dotf"/><text x="305" y="240" class="s">설계VE 효과 최대</text>' +
    '<rect x="20" y="252" width="76" height="24" class="bx"/><text x="58" y="268" text-anchor="middle" class="s">대상선정</text>' +
    '<rect x="104" y="252" width="76" height="24" class="bx"/><text x="142" y="268" text-anchor="middle" class="s">기능분석</text>' +
    '<rect x="188" y="252" width="76" height="24" class="bx"/><text x="226" y="268" text-anchor="middle" class="s">대안창출</text>' +
    '<rect x="272" y="252" width="76" height="24" class="bx"/><text x="310" y="268" text-anchor="middle" class="s">평가·제안</text>' +
    '<rect x="356" y="252" width="76" height="24" class="bx"/><text x="394" y="268" text-anchor="middle" class="s">실시·F/U</text>' +
    '<line x1="96" y1="264" x2="104" y2="264" class="ar"/>' +
    '<line x1="180" y1="264" x2="188" y2="264" class="ar"/>' +
    '<line x1="264" y1="264" x2="272" y2="264" class="ar"/>' +
    '<line x1="348" y1="264" x2="356" y2="264" class="ar"/>' +
    '<line x1="58" y1="276" x2="40" y2="304" class="ld"/><circle cx="40" cy="304" r="2" class="dotf"/><text x="45" y="308" class="s">설계VE 100억↑</text>' +
    '<line x1="142" y1="276" x2="150" y2="304" class="ld"/><circle cx="150" cy="304" r="2" class="dotf"/><text x="155" y="308" class="s">기능정의→FAST→평가</text>' +
    '<line x1="226" y1="276" x2="320" y2="304" class="ld"/><circle cx="320" cy="304" r="2" class="dotf"/><text x="325" y="308" class="s">Idea 창출·LCC 검증</text>' +
    '<text x="20" y="324" class="b">VE = 기능 저하 없는 가치향상 (≠ 단순 Cost Cut)</text>' +
    '<text x="446" y="30" class="b">[건설 VE 핵심]</text>' +
    '<line x1="160" y1="84" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ V = F / C</text><text x="446" y="72" class="k3">③ 기능분석(FAST)</text><text x="446" y="92" class="k3">③ 설계VE 총공사비 100억↑</text><text x="446" y="122" class="k4">④ 기능 저하 원가절감 금지</text><line x1="340" y1="130" x2="440" y2="138" class="ld"/><circle cx="440" cy="138" r="2" class="dotf"/><text x="446" y="142" class="k4">④ 초기 단계 적용</text><text x="446" y="162" class="k4">④ 제안 검증·LCC 확인</text><text x="446" y="192" class="k5">⑤ BIM 기반 대안 비교</text><line x1="432" y1="264" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="446" y="212" class="k5">⑤ 시공VE 절감액 보상</text>' +
    '</svg>',
  subs: [
    { h: '원리 및 기준', pts: ['[[V = F / C]](가치 = 기능 / 비용)', '[[기능분석(FAST)]]: 정의 → 정리 → 평가', '설계VE 총공사비 {{100억원 이상}}(기본·실시설계)'] },
    { h: '적용 시 유의사항', pts: ['기능 저하 원가절감(Cost Cut) 금지', '기획·설계 초기 단계 적용', '제안 검증·LCC 확인 후 채택'] },
    { h: '개선방안', pts: ['BIM 기반 대안 비교·물량 산출', '시공VE 절감액 보상(인센티브)'] }
  ],
  msg: '깎는 것이 아니라 가치를 높인다 — 기능은 지키고 생애비용은 낮춘다',
  mnemo: 'V=F/C · 준·분·개·실 → “가기비 준분개실”',
  rel: ['LCC', '설계 VE·시공 VE', 'FAST Diagram', '프리콘', '원가관리'],
  src: '근거: 건설기술진흥법 시행령 제75조(설계의 경제성 등 검토, 총공사비 100억원 이상) / 마법지 핵·마-5 VE & LCC(원가절감 가능성 vs 변경 비용, 초기 단계 개선) / 마법지 10장 건설 V·E(Function/Cost, L.C.C)'
},
206: {
  title: 'LCC(Life Cycle Cost)',
  cat: '공정·원가관리',
  key: ['LCC = C1 + C2', '초기건설비(C1)', '유지관리비(C2)', '현재가치(PV) 환산', '할인율', '최적점(총비용 최소)', 'VE 연계', 'BIM·FM 데이터'],
  www: { what: '건축물 [[전 생애]] 총비용 [[LCC = C1 + C2]](초기건설비 + 운영·유지관리비)', why: '초기비용만이 아닌 생애 총비용 최소화 → 경제적 설계·자산가치·에너지 효율 확보', how: '대안 설정 → 비용항목(C1·C2) 산정 → [[현재가치(PV) 환산]]([[할인율]]·내용연수) → 비교·민감도 분석 → [[최적점(총비용 최소)]] 선정' },
  tag: '기법·원가·평가',
  def: '건축물의 기획·설계·시공·운영·유지관리·해체에 이르는 [[전 생애]] 총비용으로, [[LCC = 초기건설비(C1) + 유지관리비(C2)]]를 [[현재가치]]로 환산하여 총비용이 최소가 되는 [[최적 성능]] 대안을 선정하는 경제성 평가기법',
  wwh: ['생애 총비용', '총비용 최소화', 'C1+C2 현재가치'],
  figT: 'LCC 곡선(C1·C2 상충) 및 최적점',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="26" class="b">[성능(품질수준)에 따른 LCC]</text>' +
    '<line x1="50" y1="50" x2="50" y2="230" class="ln"/>' +
    '<line x1="50" y1="230" x2="330" y2="230" class="ln"/>' +
    '<text x="56" y="46" class="s">비용(현재가치)</text>' +
    '<text x="334" y="234" class="s">성능</text>' +
    '<path d="M60,215 C150,205 230,160 320,70" fill="none" class="bl"/>' +
    '<path d="M60,70 C140,160 220,205 320,215" fill="none" class="gr"/>' +
    '<path d="M60,60 C120,170 260,170 320,60" fill="none" class="rd"/>' +
    '<circle cx="190" cy="142" r="4" class="rf"/>' +
    '<line x1="190" y1="146" x2="190" y2="230" class="ln2 dash"/>' +
    '<text x="100" y="246" text-anchor="middle" class="s">성능미달</text>' +
    '<text x="190" y="246" text-anchor="middle" class="r">최적</text>' +
    '<text x="285" y="246" text-anchor="middle" class="s">고성능·예산↑</text>' +
    '<line x1="318" y1="62" x2="340" y2="40" class="ld"/><circle cx="340" cy="40" r="2" class="dotf"/><text x="345" y="44" class="r">LCC = C1 + C2</text>' +
    '<line x1="305" y1="88" x2="340" y2="92" class="ld"/><circle cx="340" cy="92" r="2" class="dotf"/><text x="345" y="96" class="s">C1 초기건설비</text>' +
    '<line x1="300" y1="212" x2="340" y2="200" class="ld"/><circle cx="340" cy="200" r="2" class="dotf"/><text x="345" y="204" class="s">C2 유지관리비</text>' +
    '<line x1="190" y1="142" x2="230" y2="120" class="ld"/><circle cx="230" cy="120" r="2" class="dotf"/><text x="235" y="124" class="r">최적점(LCC 최소)</text>' +
    '<rect x="20" y="262" width="50" height="26" class="bx"/><text x="45" y="279" text-anchor="middle" class="s">설계</text>' +
    '<rect x="70" y="262" width="90" height="26" class="bx2"/><text x="115" y="279" text-anchor="middle" class="s">시공(C1)</text>' +
    '<rect x="160" y="262" width="220" height="26" class="bx3"/><text x="270" y="279" text-anchor="middle" class="s">운영·유지관리·보수(C2 대부분)</text>' +
    '<rect x="380" y="262" width="50" height="26" class="bx"/><text x="405" y="279" text-anchor="middle" class="s">해체</text>' +
    '<text x="20" y="306" class="s">C1 = 기획·설계·시공비 / C2 = 운영·유지·보수·교체·해체비</text>' +
    '<text x="20" y="324" class="s">현재가치 PV = 미래비용 / (1 + i)ⁿ  (i: 할인율, n: 경과연수)</text>' +
    '<text x="446" y="30" class="b">[LCC 핵심]</text>' +
    '<line x1="326" y1="58" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="446" y="52" class="k3">③ LCC = C1 + C2</text><line x1="400" y1="320" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="446" y="72" class="k3">③ 현재가치 환산(할인율)</text><line x1="204" y1="240" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="446" y="92" class="k3">③ 최적점 = 총비용 최소</text><text x="446" y="122" class="k4">④ 유지관리 Data 부족</text><line x1="380" y1="276" x2="440" y2="138" class="ld"/><circle cx="440" cy="138" r="2" class="dotf"/><text x="446" y="142" class="k4">④ 할인율·내용연수 가정</text><text x="446" y="162" class="k4">④ 초기비용 위주 낙찰</text><line x1="430" y1="276" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="446" y="192" class="k5">⑤ BIM·FM Data 축적</text><text x="446" y="212" class="k5">⑤ VE·LCA와 연계</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 원리', pts: ['[[LCC = C1 + C2]](초기건설비 + 유지관리비)', '[[현재가치(PV) 환산]]([[할인율]]·내용연수)', 'C1·C2 상충 → [[최적점(총비용 최소)]]'] },
    { h: '적용 시 유의사항', pts: ['유지관리 Data 부족·신뢰성 확보', '할인율·내용연수 가정에 따른 민감도 검토', '초기비용(최저가) 위주 낙찰 지양'] },
    { h: '개선방안', pts: ['BIM·FM 유지관리 Data 축적·활용', '[[VE 연계]]·LCA(탄소)와 통합 평가'] }
  ],
  msg: '싸게 짓는 것보다 싸게 쓰는 것 — 생애 총비용이 최소인 성능을 고른다',
  mnemo: 'LCC = 초(C1)+유(C2) → 현재가치 → 최적점 → “초유 현최”',
  rel: ['건설 VE', 'LCA(전과정평가)', 'BEMS·FM', '원가관리', '장수명 주택'],
  src: '근거: 마법지 핵·마-5 LCC 곡선(건설비 C1·유지관리비 C2, 최적 예산·성능) / 마법지 10장 원가관리 기법(MBO·VE·LCC) / 합격답안 11.기타(RISK) p12(설계변경 시 LCC 고려)'
}
});
