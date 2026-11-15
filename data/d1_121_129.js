// 디테일원 도해 답안 121~129 (거푸집·철근) — 형식은 data/SCHEMA_D1.md
window.D1 = Object.assign(window.D1 || {}, {
121: {
  tag: '하중·설계·기준',
  def: '거푸집·동바리에 작용하는 [[연직하중]](고정+작업), [[수평하중]], 콘크리트 [[측압]], [[특수하중]]으로, 연직하중은 최소 {{5.0kN/㎡}}(전동카트 {{6.25kN/㎡}}) 이상으로 설계',
  wwh: ['연직·수평·측압', '변형·붕괴 방지', '하중→응력→단면'],
  figT: '거푸집 하중 작용도 및 구조설계 순서',
  svg: '<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="96" width="240" height="16" class="conc"/>' +
    '<rect x="30" y="112" width="240" height="5" class="bx2"/>' +
    '<rect x="36" y="117" width="228" height="5" class="bx3"/>' +
    '<line x1="50" y1="122" x2="50" y2="290" class="ln"/><rect x="42" y="286" width="16" height="4" class="bx3"/>' +
    '<line x1="110" y1="122" x2="110" y2="290" class="ln"/><rect x="102" y="286" width="16" height="4" class="bx3"/>' +
    '<line x1="170" y1="122" x2="170" y2="290" class="ln"/><rect x="162" y="286" width="16" height="4" class="bx3"/>' +
    '<line x1="230" y1="122" x2="230" y2="290" class="ln"/><rect x="222" y="286" width="16" height="4" class="bx3"/>' +
    '<line x1="50" y1="205" x2="230" y2="205" class="ln2"/>' +
    '<line x1="50" y1="290" x2="110" y2="205" class="ln2 dash"/>' +
    '<line x1="170" y1="205" x2="230" y2="290" class="ln2 dash"/>' +
    '<rect x="20" y="290" width="400" height="12" class="soil"/>' +
    '<line x1="20" y1="290" x2="420" y2="290" class="ln"/>' +
    '<line x1="60" y1="56" x2="60" y2="92" class="ar"/>' +
    '<line x1="100" y1="56" x2="100" y2="92" class="ar"/>' +
    '<circle cx="200" cy="70" r="6" class="ln2"/>' +
    '<line x1="200" y1="76" x2="200" y2="88" class="ln2"/>' +
    '<line x1="200" y1="88" x2="194" y2="95" class="ln2"/>' +
    '<line x1="200" y1="88" x2="206" y2="95" class="ln2"/>' +
    '<line x1="192" y1="80" x2="208" y2="80" class="ln2"/>' +
    '<line x1="2" y1="118" x2="28" y2="118" class="ar"/>' +
    '<text x="2" y="108" class="s">수평</text>' +
    '<rect x="300" y="150" width="22" height="140" class="conc"/>' +
    '<line x1="324" y1="150" x2="324" y2="290" class="ln"/>' +
    '<polyline points="324,150 368,214 368,290" class="bl"/>' +
    '<line x1="324" y1="150" x2="398" y2="290" class="rd dash"/>' +
    '<line x1="349" y1="190" x2="327" y2="190" class="ar"/>' +
    '<line x1="366" y1="240" x2="327" y2="240" class="ar"/>' +
    '<line x1="366" y1="272" x2="327" y2="272" class="ar"/>' +
    '<line x1="100" y1="70" x2="124" y2="44" class="ld"/><circle cx="124" cy="44" r="2" class="dotf"/><text x="128" y="48" class="r">고정: 철근Con 24kN/㎥ + 거푸집 0.4kN/㎡</text>' +
    '<line x1="206" y1="82" x2="232" y2="66" class="ld"/><circle cx="232" cy="66" r="2" class="dotf"/><text x="236" y="70" class="r">작업 2.5kN/㎡↑ (카트 3.75)</text>' +
    '<line x1="260" y1="96" x2="272" y2="24" class="ld"/><circle cx="272" cy="24" r="2" class="dotf"/><text x="276" y="28" class="s">특수: 풍하중·편심·충격</text>' +
    '<line x1="150" y1="120" x2="140" y2="148" class="ld"/><circle cx="140" cy="148" r="2" class="dotf"/><text x="144" y="152" class="s">널·장선·멍에</text>' +
    '<line x1="110" y1="250" x2="124" y2="266" class="ld"/><circle cx="124" cy="266" r="2" class="dotf"/><text x="128" y="270" class="s">동바리(Support)</text>' +
    '<line x1="311" y1="160" x2="330" y2="128" class="ld"/><circle cx="330" cy="128" r="2" class="dotf"/><text x="334" y="132" class="r">벽체 0.5kN/㎡↑</text>' +
    '<line x1="352" y1="214" x2="384" y2="198" class="ld"/><circle cx="384" cy="198" r="2" class="dotf"/><text x="388" y="202" class="s">Con Head</text>' +
    '<line x1="383" y1="262" x2="396" y2="244" class="ld"/><circle cx="396" cy="244" r="2" class="dotf"/><text x="400" y="248" class="r">p=W·H</text>' +
    '<rect x="20" y="318" width="110" height="26" class="bx"/>' +
    '<text x="75" y="335" text-anchor="middle" class="b">하중계산</text>' +
    '<line x1="131" y1="331" x2="151" y2="331" class="ar"/>' +
    '<rect x="152" y="318" width="110" height="26" class="bx"/>' +
    '<text x="207" y="335" text-anchor="middle" class="b">응력계산</text>' +
    '<line x1="263" y1="331" x2="283" y2="331" class="ar"/>' +
    '<rect x="284" y="318" width="136" height="26" class="bx"/>' +
    '<text x="352" y="335" text-anchor="middle" class="b">단면·배치간격</text>' +
    '<text x="75" y="360" text-anchor="middle" class="s">수직·수평·특수</text>' +
    '<text x="207" y="360" text-anchor="middle" class="s">휨·전단·처짐·좌굴</text>' +
    '<text x="352" y="360" text-anchor="middle" class="s">널·장선·멍에·동바리</text>' +
    '<line x1="230" y1="150" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ 연직 5.0kN/㎡↑(카트 6.25)</text>' +
    '<line x1="170" y1="205" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 수평 2%·1.5kN/m 큰 값</text>' +
    '<line x1="368" y1="250" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ 측압 p=W·H</text>' +
    '<line x1="270" y1="104" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 편심·몰림 타설 금지</text>' +
    '<line x1="398" y1="286" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 타설속도 관리(측압↑ 방지)</text>' +
    '<line x1="200" y1="205" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 수평연결재·가새 설치</text>' +
    '<line x1="230" y1="240" x2="440" y2="184" class="ld"/><circle cx="440" cy="184" r="2" class="dotf"/><text x="444" y="188" class="k4">④ 높이 5m↑ 구조검토</text>' +
    '<line x1="230" y1="270" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ System Support 적용</text>' +
    '<text x="446" y="242" class="k5">⑤ BIM 가설구조 검토</text>' +
    '<line x1="170" y1="280" x2="440" y2="260" class="ld"/><circle cx="440" cy="260" r="2" class="dotf"/><text x="444" y="264" class="k5">⑤ 변위 계측(침하·측압)</text>' +
    '</svg>',
  subs: [
    { h: '하중 산정 기준', pts: ['연직 {{5.0kN/㎡}}↑(카트 {{6.25}})', '수평 {{2%}}·{{1.5kN/m}} 큰 값', '측압 {{p=W·H}}'] },
    { h: '시공 시 유의사항', pts: ['편심·몰림 타설 금지', '타설속도 관리(측압↑ 방지)', '수평연결재·가새 설치', '높이 {{5m}}↑ 구조검토'] },
    { h: '개선방안', pts: ['System Support 적용', 'BIM 가설구조 검토', '변위 계측(침하·측압)'] }
  ],
  msg: '하중 산정 → 응력 검토 → 단면·간격 결정 — 측압·편심 관리로 거푸집 붕괴 방지',
  rel: ['측압', 'Concrete Head', '동바리', 'System Support', '가설구조 안전성 검토']
},
122: {
  tag: '부재·변형·시공',
  def: '보·Slab·Truss 등 [[수평부재]]의 [[처짐]]을 예상하여 미리 위로 치켜올리는 [[상향 솟음]] 또는 그 크기로, 일반적으로 [[Span]]의 {{l/300~l/500}} 정도',
  wwh: ['처짐 역방향 솟음', '설계 Level 유지', '냉·열간·Support'],
  figT: 'Camber 원리 및 제작·관리 순서',
  svg: '<svg viewBox="0 0 640 356" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="250" width="400" height="12" class="soil"/>' +
    '<line x1="20" y1="250" x2="420" y2="250" class="ln"/>' +
    '<rect x="30" y="96" width="20" height="154" class="bx2"/>' +
    '<rect x="390" y="96" width="20" height="154" class="bx2"/>' +
    '<path d="M50,96 Q220,56 390,96 L390,110 Q220,70 50,110 Z" class="conc"/>' +
    '<line x1="50" y1="96" x2="390" y2="96" class="ln2 dash"/>' +
    '<line x1="110" y1="99" x2="110" y2="250" class="ln"/><line x1="102" y1="99" x2="118" y2="99" class="ln"/>' +
    '<line x1="165" y1="93" x2="165" y2="250" class="ln"/><line x1="157" y1="93" x2="173" y2="93" class="ln"/>' +
    '<line x1="220" y1="91" x2="220" y2="250" class="bl"/><line x1="212" y1="91" x2="228" y2="91" class="ln"/>' +
    '<line x1="275" y1="93" x2="275" y2="250" class="ln"/><line x1="267" y1="93" x2="283" y2="93" class="ln"/>' +
    '<line x1="330" y1="99" x2="330" y2="250" class="ln"/><line x1="322" y1="99" x2="338" y2="99" class="ln"/>' +
    '<line x1="200" y1="130" x2="200" y2="100" class="ar"/>' +
    '<line x1="240" y1="130" x2="240" y2="100" class="ar"/>' +
    '<line x1="50" y1="272" x2="390" y2="272" class="ln2"/>' +
    '<line x1="46" y1="276" x2="54" y2="268" class="ln2"/>' +
    '<line x1="386" y1="276" x2="394" y2="268" class="ln2"/>' +
    '<text x="220" y="288" text-anchor="middle" class="b">l (Span)</text>' +
    '<line x1="220" y1="76" x2="236" y2="40" class="ld"/><circle cx="236" cy="40" r="2" class="dotf"/><text x="240" y="44" class="r">Camber = l/300~l/500</text>' +
    '<line x1="130" y1="86" x2="110" y2="24" class="ld"/><circle cx="110" cy="24" r="2" class="dotf"/><text x="114" y="28" class="s">장스팬 보·Slab·Truss</text>' +
    '<line x1="90" y1="100" x2="40" y2="64" class="ld"/><circle cx="40" cy="64" r="2" class="dotf"/><text x="44" y="68" class="s">설계 Level</text>' +
    '<line x1="220" y1="180" x2="250" y2="170" class="ld"/><circle cx="250" cy="170" r="2" class="dotf"/><text x="254" y="174" class="bl">중앙부 Support 높게 조절</text>' +
    '<line x1="40" y1="180" x2="60" y2="200" class="ld"/><circle cx="60" cy="200" r="2" class="dotf"/><text x="64" y="204" class="s">지점(기둥)</text>' +
    '<line x1="330" y1="140" x2="300" y2="216" class="ld"/><circle cx="300" cy="216" r="2" class="dotf"/><text x="304" y="220" class="s">타설 후 처짐 → 수평 회복</text>' +
    '<text x="20" y="310" class="r">처짐량 예측 = 자중 + 타설하중 + 거푸집 탄성변형</text>' +
    '<rect x="20" y="322" width="92" height="22" class="bx"/>' +
    '<text x="66" y="337" text-anchor="middle" class="s">Leveling</text>' +
    '<line x1="113" y1="333" x2="123" y2="333" class="ar"/>' +
    '<rect x="124" y="322" width="92" height="22" class="bx"/>' +
    '<text x="170" y="337" text-anchor="middle" class="s">처짐량 예측</text>' +
    '<line x1="217" y1="333" x2="227" y2="333" class="ar"/>' +
    '<rect x="228" y="322" width="92" height="22" class="bx"/>' +
    '<text x="274" y="337" text-anchor="middle" class="s">Support 조절</text>' +
    '<line x1="321" y1="333" x2="331" y2="333" class="ar"/>' +
    '<rect x="332" y="322" width="92" height="22" class="bx"/>' +
    '<text x="378" y="337" text-anchor="middle" class="s">타설·계측</text>' +
    '<line x1="200" y1="120" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ 냉간가공(항복점↑ 가압)</text>' +
    '<line x1="240" y1="120" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 열간가공(가열·냉각)</text>' +
    '<line x1="220" y1="200" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ Support 높이 조절(RC)</text>' +
    '<line x1="390" y1="100" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 온도·건조수축·Creep</text>' +
    '<line x1="275" y1="150" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 이음 위치 고려 처짐 계산</text>' +
    '<line x1="165" y1="160" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 거푸집 자체 처짐 추가</text>' +
    '<text x="446" y="188" class="k4">④ 고정하중 소멸량 고려</text>' +
    '<line x1="300" y1="80" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ BIM·구조해석 Camber 명기</text>' +
    '<text x="446" y="242" class="k5">⑤ 공장 Camber 가공 검측</text>' +
    '<text x="446" y="264" class="k5">⑤ Level 계측 Data 피드백</text>' +
    '</svg>',
  subs: [
    { h: 'Camber 제작방법', pts: ['[[냉간가공]](항복점↑ 가압)', '[[열간가공]](가열·냉각)', '[[Support 높이 조절]](RC)'] },
    { h: '시공 시 유의사항', pts: ['온도·건조수축·Creep', '이음 위치 고려 처짐 계산', '거푸집 자체 처짐 추가', '고정하중 소멸량 고려'] },
    { h: '개선방안', pts: ['BIM·구조해석 Camber 명기', '공장 Camber 가공 검측', 'Level 계측 Data 피드백'] }
  ],
  msg: '처짐만큼 미리 솟아 올려 타설·고정하중 후 설계 Level 회복',
  rel: ['처짐', 'Creep', 'Deck Plate', '동바리', 'Leveling']
},
123: {
  tag: '기준·시험·공정',
  def: '콘크리트가 소요강도에 도달할 때까지 거푸집을 유지하는 [[존치기간]]으로, [[측면]] {{5MPa}} 이상, [[밑면]] {{2/3 fck}} 이상(최소 {{14MPa}})에서 [[거푸집 해체]]',
  wwh: ['소요강도까지 존치', '처짐·균열·붕괴 방지', '강도시험·일수 표'],
  figT: '강도 발현곡선과 해체 시기·순서',
  svg: '<svg viewBox="0 0 640 372" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="230" x2="420" y2="230" class="ar"/>' +
    '<line x1="50" y1="230" x2="50" y2="24" class="ar"/>' +
    '<text x="56" y="30" class="s">fcu</text>' +
    '<text x="420" y="222" text-anchor="end" class="s">재령</text>' +
    '<polyline points="50,230 70,192 90,162 120,130 160,104 210,87 290,74 390,66 420,64" class="bl"/>' +
    '<line x1="50" y1="205" x2="420" y2="205" class="rd dash"/>' +
    '<line x1="50" y1="126" x2="420" y2="126" class="rd dash"/>' +
    '<line x1="50" y1="74" x2="420" y2="74" class="rd dash"/>' +
    '<text x="46" y="209" text-anchor="end" class="r">5</text>' +
    '<text x="46" y="130" text-anchor="end" class="r">2/3fck</text>' +
    '<text x="46" y="78" text-anchor="end" class="r">fck</text>' +
    '<line x1="63" y1="205" x2="63" y2="230" class="ln2 dash"/>' +
    '<line x1="124" y1="126" x2="124" y2="230" class="ln2 dash"/>' +
    '<line x1="290" y1="74" x2="290" y2="230" class="ln2 dash"/>' +
    '<line x1="63" y1="205" x2="88" y2="216" class="ld"/><circle cx="88" cy="216" r="2" class="dotf"/><text x="92" y="220" class="b">측면 해체</text>' +
    '<line x1="124" y1="126" x2="150" y2="150" class="ld"/><circle cx="150" cy="150" r="2" class="dotf"/><text x="154" y="154" class="b">단층 밑면 해체</text>' +
    '<line x1="290" y1="74" x2="310" y2="100" class="ld"/><circle cx="310" cy="100" r="2" class="dotf"/><text x="314" y="104" class="b">다층 밑면 해체</text>' +
    '<line x1="380" y1="66" x2="370" y2="44" class="ld"/><circle cx="370" cy="44" r="2" class="dotf"/><text x="366" y="48" text-anchor="end" class="bl">강도 발현곡선</text>' +
    '<line x1="90" y1="162" x2="100" y2="190" class="ld"/><circle cx="100" cy="190" r="2" class="dotf"/><text x="104" y="194" class="s">공시체: 배출량 50% 시점 채취</text>' +
    '<rect x="20" y="248" width="400" height="60" fill="none" class="ln2"/>' +
    '<line x1="20" y1="268" x2="420" y2="268" class="ln2"/>' +
    '<line x1="20" y1="288" x2="420" y2="288" class="ln2"/>' +
    '<line x1="140" y1="248" x2="140" y2="308" class="ln2"/>' +
    '<line x1="220" y1="248" x2="220" y2="308" class="ln2"/>' +
    '<line x1="330" y1="248" x2="330" y2="308" class="ln2"/>' +
    '<text x="80" y="262" text-anchor="middle" class="s">기온 / 시멘트</text>' +
    '<text x="180" y="262" text-anchor="middle" class="s">조강</text>' +
    '<text x="275" y="262" text-anchor="middle" class="s">보통·혼합1종</text>' +
    '<text x="375" y="262" text-anchor="middle" class="s">혼합2종</text>' +
    '<text x="80" y="282" text-anchor="middle" class="s">20℃ 이상</text>' +
    '<text x="180" y="283" text-anchor="middle" class="r">2일</text>' +
    '<text x="275" y="283" text-anchor="middle" class="r">4일</text>' +
    '<text x="375" y="283" text-anchor="middle" class="r">5일</text>' +
    '<text x="80" y="302" text-anchor="middle" class="s">10~20℃</text>' +
    '<text x="180" y="303" text-anchor="middle" class="r">3일</text>' +
    '<text x="275" y="303" text-anchor="middle" class="r">6일</text>' +
    '<text x="375" y="303" text-anchor="middle" class="r">8일</text>' +
    '<rect x="20" y="320" width="80" height="22" class="bx"/>' +
    '<text x="60" y="335" text-anchor="middle" class="b">강도 확인</text>' +
    '<line x1="101" y1="331" x2="117" y2="331" class="ar"/>' +
    '<rect x="118" y="320" width="80" height="22" class="bx"/>' +
    '<text x="158" y="335" text-anchor="middle" class="b">측면 해체</text>' +
    '<line x1="199" y1="331" x2="215" y2="331" class="ar"/>' +
    '<rect x="216" y="320" width="80" height="22" class="bx"/>' +
    '<text x="256" y="335" text-anchor="middle" class="b">밑면 해체</text>' +
    '<line x1="297" y1="331" x2="313" y2="331" class="ar"/>' +
    '<rect x="314" y="320" width="106" height="22" class="bx"/>' +
    '<text x="367" y="335" text-anchor="middle" class="b">동바리 해체</text>' +
    '<text x="220" y="362" text-anchor="middle" class="s">설치 역순: 연직(측면) → 수평(밑면) → 동바리</text>' +
    '<line x1="63" y1="205" x2="440" y2="36" class="ld"/><circle cx="440" cy="36" r="2" class="dotf"/><text x="444" y="40" class="k3">③ 측면 5MPa 이상</text>' +
    '<line x1="124" y1="126" x2="440" y2="58" class="ld"/><circle cx="440" cy="58" r="2" class="dotf"/><text x="444" y="62" class="k3">③ 밑면 2/3fck·14MPa↑</text>' +
    '<line x1="330" y1="268" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="444" y="84" class="k3">③ 미시험: 기온·시멘트별 일수</text>' +
    '<line x1="420" y1="331" x2="440" y2="114" class="ld"/><circle cx="440" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k4">④ 설치 역순 해체</text>' +
    '<line x1="250" y1="205" x2="440" y2="136" class="ld"/><circle cx="440" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k4">④ 진동·충격 금지</text>' +
    '<text x="446" y="162" class="k4">④ 직상층 과적재 금지</text>' +
    '<line x1="290" y1="150" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 한중 적산온도 → 연장</text>' +
    '<line x1="210" y1="87" x2="440" y2="214" class="ld"/><circle cx="440" cy="214" r="2" class="dotf"/><text x="444" y="218" class="k5">⑤ 성숙도·무선 센서 강도추정</text>' +
    '<text x="446" y="240" class="k5">⑤ Drop Head 조기 전용</text>' +
    '<line x1="160" y1="104" x2="440" y2="258" class="ld"/><circle cx="440" cy="258" r="2" class="dotf"/><text x="444" y="262" class="k5">⑤ 조강·고온양생 공기단축</text>' +
    '</svg>',
  subs: [
    { h: '존치기간 기준', pts: ['[[측면]] {{5MPa}} 이상', '[[밑면]] {{2/3fck}}·{{14MPa}}↑', '미시험: 기온·시멘트별 일수'] },
    { h: '해체 시 유의사항', pts: ['[[설치 역순]] 해체', '진동·충격 금지', '직상층 과적재 금지', '한중 적산온도 → 연장'] },
    { h: '개선방안', pts: ['성숙도·무선 센서 강도추정', 'Drop Head 조기 전용', '조강·고온양생 공기단축'] }
  ],
  msg: '강도로 판단하여 측면 → 밑면 → 동바리 순 해체 — 조기 해체 붕괴 방지·적기 전용',
  rel: ['Reshoring', '적산온도', '성숙도법', 'Drop Head', '조강시멘트']
},
124: {
  tag: '공법·가설·기준',
  def: '거푸집 전용을 위해 동바리를 해체 후 재설치하는 [[Reshoring]]은 원칙적으로 금지하고, [[동바리 존치]] 상태로 판넬만 해체하는 [[Filler 처리]]가 바람직하며 부득이 시 [[최소 3개층]] 지지',
  wwh: ['재설치 vs 존치', '조기 전용·처짐 방지', '승인·동일위치·3개층'],
  figT: 'Reshoring·Filler Support 원리 및 순서',
  svg: '<svg viewBox="0 0 640 356" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="18" class="b">[Reshoring]</text>' +
    '<text x="275" y="18" class="b">[Filler Support]</text>' +
    '<line x1="85" y1="26" x2="85" y2="64" class="ar"/>' +
    '<text x="93" y="40" class="s">상층 타설하중</text>' +
    '<rect x="20" y="66" width="135" height="10" class="conc"/>' +
    '<rect x="20" y="136" width="135" height="10" class="conc"/>' +
    '<rect x="20" y="206" width="135" height="10" class="conc"/>' +
    '<line x1="10" y1="280" x2="160" y2="280" class="ln"/>' +
    '<rect x="10" y="280" width="150" height="10" class="soil"/>' +
    '<line x1="35" y1="76" x2="35" y2="136" class="ln"/>' +
    '<line x1="75" y1="76" x2="75" y2="136" class="ln"/>' +
    '<line x1="115" y1="76" x2="115" y2="136" class="ln"/>' +
    '<line x1="145" y1="76" x2="145" y2="136" class="ln"/>' +
    '<line x1="35" y1="150" x2="35" y2="206" class="bl"/><rect x="27" y="146" width="16" height="4" class="bx3"/>' +
    '<line x1="75" y1="150" x2="75" y2="206" class="bl"/><rect x="67" y="146" width="16" height="4" class="bx3"/>' +
    '<line x1="115" y1="150" x2="115" y2="206" class="bl"/><rect x="107" y="146" width="16" height="4" class="bx3"/>' +
    '<line x1="145" y1="150" x2="145" y2="206" class="bl"/><rect x="137" y="146" width="16" height="4" class="bx3"/>' +
    '<line x1="35" y1="220" x2="35" y2="280" class="bl"/><rect x="27" y="216" width="16" height="4" class="bx3"/>' +
    '<line x1="75" y1="220" x2="75" y2="280" class="bl"/><rect x="67" y="216" width="16" height="4" class="bx3"/>' +
    '<line x1="115" y1="220" x2="115" y2="280" class="bl"/><rect x="107" y="216" width="16" height="4" class="bx3"/>' +
    '<line x1="145" y1="220" x2="145" y2="280" class="bl"/><rect x="137" y="216" width="16" height="4" class="bx3"/>' +
    '<line x1="145" y1="105" x2="165" y2="100" class="ld"/><circle cx="165" cy="100" r="2" class="dotf"/><text x="169" y="104" class="s">원 동바리</text>' +
    '<line x1="145" y1="176" x2="165" y2="166" class="ld"/><circle cx="165" cy="166" r="2" class="dotf"/><text x="169" y="170" class="bl">Reshore(동일 위치)</text>' +
    '<line x1="145" y1="148" x2="165" y2="188" class="ld"/><circle cx="165" cy="188" r="2" class="dotf"/><text x="169" y="192" class="r">머리받침판 300mm↑</text>' +
    '<line x1="145" y1="250" x2="165" y2="236" class="ld"/><circle cx="165" cy="236" r="2" class="dotf"/><text x="169" y="240" class="r">최소 3개층 지지</text>' +
    '<rect x="275" y="90" width="155" height="14" class="conc"/>' +
    '<rect x="280" y="112" width="60" height="6" class="bx2 dash"/>' +
    '<rect x="372" y="112" width="56" height="6" class="bx2 dash"/>' +
    '<rect x="342" y="104" width="28" height="8" class="bx3"/>' +
    '<line x1="356" y1="112" x2="356" y2="280" class="bl"/>' +
    '<line x1="265" y1="280" x2="430" y2="280" class="ln"/>' +
    '<rect x="265" y="280" width="165" height="10" class="soil"/>' +
    '<line x1="310" y1="122" x2="310" y2="146" class="ar"/>' +
    '<line x1="400" y1="122" x2="400" y2="146" class="ar"/>' +
    '<line x1="300" y1="90" x2="290" y2="46" class="ld"/><circle cx="290" cy="46" r="2" class="dotf"/><text x="294" y="50" class="s">슬래브(강도 발현 중)</text>' +
    '<line x1="350" y1="108" x2="340" y2="72" class="ld"/><circle cx="340" cy="72" r="2" class="dotf"/><text x="336" y="76" text-anchor="end" class="r">Filler판 존치</text>' +
    '<line x1="310" y1="146" x2="300" y2="168" class="ld"/><circle cx="300" cy="168" r="2" class="dotf"/><text x="304" y="172" class="s">판넬 조기 해체</text>' +
    '<line x1="356" y1="220" x2="366" y2="206" class="ld"/><circle cx="366" cy="206" r="2" class="dotf"/><text x="370" y="210" class="bl">필러 서포트</text>' +
    '<line x1="356" y1="250" x2="346" y2="262" class="ld"/><circle cx="346" cy="262" r="2" class="dotf"/><text x="342" y="266" text-anchor="end" class="s">타설하중 연속 지지</text>' +
    '<rect x="20" y="300" width="90" height="22" class="bx"/>' +
    '<text x="65" y="315" text-anchor="middle" class="s">2/3fck·승인</text>' +
    '<line x1="111" y1="311" x2="127" y2="311" class="ar"/>' +
    '<rect x="128" y="300" width="90" height="22" class="bx"/>' +
    '<text x="173" y="315" text-anchor="middle" class="s">1구획 해체</text>' +
    '<line x1="219" y1="311" x2="235" y2="311" class="ar"/>' +
    '<rect x="236" y="300" width="100" height="22" class="bx"/>' +
    '<text x="286" y="315" text-anchor="middle" class="s">동일위치 재설치</text>' +
    '<line x1="337" y1="311" x2="353" y2="311" class="ar"/>' +
    '<rect x="354" y="300" width="76" height="22" class="bx"/>' +
    '<text x="392" y="315" text-anchor="middle" class="s">쐐기·잭 밀착</text>' +
    '<text x="225" y="344" text-anchor="middle" class="s">바꾸어 세우기 = 원칙 금지 → Filler 처리 권장</text>' +
    '<line x1="65" y1="311" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ 원칙 금지·공사감독자 승인</text>' +
    '<line x1="20" y1="211" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 큰 보 금지(라멘구조)</text>' +
    '<line x1="145" y1="236" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ 동일 위치·최소 3개층</text>' +
    '<line x1="85" y1="50" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 직상층 큰 적재하중 금지</text>' +
    '<line x1="281" y1="311" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 한꺼번에 해체 금지</text>' +
    '<line x1="115" y1="180" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 지지력 부족 시 동바리 존치</text>' +
    '<line x1="356" y1="160" x2="440" y2="194" class="ld"/><circle cx="440" cy="194" r="2" class="dotf"/><text x="444" y="198" class="k5">⑤ Drop Head System</text>' +
    '<line x1="370" y1="104" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ Filler 처리로 재설치 배제</text>' +
    '<line x1="430" y1="97" x2="440" y2="238" class="ld"/><circle cx="440" cy="238" r="2" class="dotf"/><text x="444" y="242" class="k5">⑤ 판넬 조기 전용·공기단축</text>' +
    '</svg>',
  subs: [
    { h: '바꾸어 세우기 기준', pts: ['원칙 금지·[[공사감독자 승인]]', '[[큰 보 금지]](라멘구조)', '[[동일 위치]]·[[최소 3개층]]'] },
    { h: '시공 시 유의사항', pts: ['직상층 큰 적재하중 금지', '한꺼번에 해체 금지', '지지력 부족 시 동바리 존치'] },
    { h: '개선방안', pts: ['Drop Head System', 'Filler 처리로 재설치 배제', '판넬 조기 전용·공기단축'] }
  ],
  msg: '바꾸어 세우기는 피하고 Filler로 남겨 지지 — 부득이 시 동일 위치·3개층',
  rel: ['존치기간', 'Drop Head', 'Sky Deck', 'AL Form', '동바리']
},
125: {
  tag: '철근·배근·기준',
  def: '[[건조수축]]·[[온도변화]]에 의한 [[인장응력]]을 분산시켜 균열을 방지하도록 [[1방향 슬래브]]의 [[주근 직각방향]]으로 철근비 {{0.0020}} 이상, 간격 {{5h}}·{{450mm}} 이하로 배치하는 철근',
  wwh: ['주근 직각 보조철근', '수축·온도균열 분산', '0.0020·5h·450mm'],
  figT: '1방향 슬래브 수축·온도철근 배치 원리',
  svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="40" y="60" width="300" height="140" class="conc"/>' +
    '<rect x="40" y="52" width="300" height="8" class="bx2"/>' +
    '<rect x="40" y="200" width="300" height="8" class="bx2"/>' +
    '<line x1="60" y1="62" x2="60" y2="198" class="bl"/>' +
    '<line x1="86" y1="62" x2="86" y2="198" class="bl"/>' +
    '<line x1="112" y1="62" x2="112" y2="198" class="bl"/>' +
    '<line x1="138" y1="62" x2="138" y2="198" class="bl"/>' +
    '<line x1="164" y1="62" x2="164" y2="198" class="bl"/>' +
    '<line x1="190" y1="62" x2="190" y2="198" class="bl"/>' +
    '<line x1="216" y1="62" x2="216" y2="198" class="bl"/>' +
    '<line x1="242" y1="62" x2="242" y2="198" class="bl"/>' +
    '<line x1="268" y1="62" x2="268" y2="198" class="bl"/>' +
    '<line x1="294" y1="62" x2="294" y2="198" class="bl"/>' +
    '<line x1="320" y1="62" x2="320" y2="198" class="bl"/>' +
    '<line x1="42" y1="85" x2="338" y2="85" class="rd dash"/>' +
    '<line x1="42" y1="115" x2="338" y2="115" class="rd dash"/>' +
    '<line x1="42" y1="145" x2="338" y2="145" class="rd dash"/>' +
    '<line x1="42" y1="175" x2="338" y2="175" class="rd dash"/>' +
    '<polyline points="205,62 200,90 208,120 202,150 207,198" class="rd"/>' +
    '<line x1="38" y1="140" x2="8" y2="140" class="ar"/>' +
    '<text x="2" y="162" class="s">인장응력</text>' +
    '<line x1="90" y1="52" x2="100" y2="30" class="ld"/><circle cx="100" cy="30" r="2" class="dotf"/><text x="104" y="34" class="s">지지보(장변)</text>' +
    '<line x1="164" y1="70" x2="190" y2="30" class="ld"/><circle cx="190" cy="30" r="2" class="dotf"/><text x="194" y="34" class="bl">주근 — 단변방향</text>' +
    '<line x1="338" y1="115" x2="360" y2="96" class="ld"/><circle cx="360" cy="96" r="2" class="dotf"/><text x="364" y="100" class="r">수축·온도철근</text>' +
    '<text x="364" y="116" class="s">(장변방향)</text>' +
    '<line x1="207" y1="170" x2="232" y2="184" class="ld"/><circle cx="232" cy="184" r="2" class="dotf"/><text x="236" y="188" class="s">균열 분산·폭 제어</text>' +
    '<line x1="40" y1="222" x2="340" y2="222" class="ln2"/>' +
    '<text x="190" y="238" text-anchor="middle" class="s">Lx(장변) / Ly(단변) &gt; 2 → 1방향 슬래브</text>' +
    '<text x="40" y="256" class="s">[단면]</text>' +
    '<rect x="40" y="262" width="300" height="40" class="conc"/>' +
    '<line x1="44" y1="292" x2="336" y2="292" class="bl"/>' +
    '<circle cx="70" cy="286" r="3" class="dotf"/>' +
    '<circle cx="130" cy="286" r="3" class="dotf"/>' +
    '<circle cx="190" cy="286" r="3" class="dotf"/>' +
    '<circle cx="250" cy="286" r="3" class="dotf"/>' +
    '<circle cx="310" cy="286" r="3" class="dotf"/>' +
    '<line x1="30" y1="262" x2="30" y2="302" class="ln2"/>' +
    '<text x="22" y="286" text-anchor="end" class="b">h</text>' +
    '<line x1="130" y1="312" x2="190" y2="312" class="ln2"/>' +
    '<text x="160" y="326" text-anchor="middle" class="r">간격 ≤ 5h·450mm</text>' +
    '<line x1="310" y1="286" x2="360" y2="270" class="ld"/><circle cx="360" cy="270" r="2" class="dotf"/><text x="364" y="274" class="s">주근 안쪽 배치</text>' +
    '<line x1="320" y1="292" x2="360" y2="300" class="ld"/><circle cx="360" cy="300" r="2" class="dotf"/><text x="364" y="304" class="s">주근 외측</text>' +
    '<text x="20" y="348" class="r">fy&gt;400: 0.0020×400/fy ≥ 0.0014</text>' +
    '<text x="234" y="348" class="s">1m당 1,800㎟ 초과 불필요</text>' +
    '<line x1="250" y1="175" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ 철근비 0.0020 이상</text>' +
    '<line x1="190" y1="312" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 간격 5h·450mm 이하</text>' +
    '<line x1="86" y1="150" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ 주근 직각방향 배치</text>' +
    '<line x1="270" y1="286" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 간격·위치 유지(스페이서)</text>' +
    '<line x1="320" y1="145" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 이음 엇갈림·정착 확보</text>' +
    '<line x1="242" y1="100" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 밟힘 방지·습윤양생</text>' +
    '<line x1="205" y1="120" x2="440" y2="194" class="ld"/><circle cx="440" cy="194" r="2" class="dotf"/><text x="444" y="198" class="k5">⑤ 균열유발줄눈·섬유보강</text>' +
    '<line x1="300" y1="175" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ 저수축 배합·팽창재</text>' +
    '</svg>',
  subs: [
    { h: '배근 기준', pts: ['철근비 {{0.0020}} 이상', '간격 {{5h}}·{{450mm}} 이하', '[[주근 직각방향]] 배치'] },
    { h: '시공 시 유의사항', pts: ['간격·위치 유지(스페이서)', '이음 엇갈림·정착 확보', '밟힘 방지·습윤양생'] },
    { h: '개선방안', pts: ['균열유발줄눈·섬유보강', '저수축 배합·팽창재'] }
  ],
  msg: '주근 직각방향 배근으로 수축·온도균열을 미세 분산 — 누수·부식 방지',
  rel: ['1방향 슬래브', '건조수축', '균열유발줄눈', '배력철근', '최소 철근비']
},
126: {
  tag: '철근·이음·시공',
  def: 'Mat기초 분할타설 [[시공이음]]에 설치하는 [[원형강봉]]으로, 한쪽은 고정·다른 쪽은 [[부착방지 도포]]하여 신축은 허용하고 [[전단력 전달]]·[[부등침하 단차]]를 방지',
  wwh: ['이음부 원형강봉', '전단전달·단차 방지', '고정·도포·Cap'],
  figT: 'Dowel bar 이음 원리 및 시공순서',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="120" y="30" text-anchor="middle" class="b">1차 콘크리트</text>' +
    '<text x="320" y="30" text-anchor="middle" class="b">2차 콘크리트</text>' +
    '<line x1="30" y1="38" x2="208" y2="38" class="ln2"/>' +
    '<line x1="220" y1="38" x2="420" y2="38" class="ln2"/>' +
    '<rect x="30" y="60" width="180" height="110" class="conc"/>' +
    '<rect x="220" y="60" width="200" height="110" class="conc"/>' +
    '<rect x="210" y="66" width="10" height="104" class="bx3"/>' +
    '<circle cx="215" cy="62" r="4" class="bx2"/>' +
    '<rect x="30" y="170" width="390" height="14" class="bx2"/>' +
    '<line x1="38" y1="78" x2="204" y2="78" class="ln"/>' +
    '<line x1="226" y1="78" x2="414" y2="78" class="ln"/>' +
    '<line x1="38" y1="152" x2="204" y2="152" class="ln"/>' +
    '<line x1="226" y1="152" x2="414" y2="152" class="ln"/>' +
    '<rect x="110" y="114" width="210" height="8" class="bx3"/>' +
    '<rect x="220" y="112" width="100" height="12" class="rd"/>' +
    '<path d="M314,109 h24 v18 h-24" class="ln"/>' +
    '<text x="40" y="106" class="s">매립·고정측</text>' +
    '<text x="340" y="104" class="s">자유단(신축)</text>' +
    '<line x1="70" y1="78" x2="60" y2="50" class="ld"/><circle cx="60" cy="50" r="2" class="dotf"/><text x="64" y="54" class="s">상·하부 철근</text>' +
    '<line x1="215" y1="70" x2="240" y2="48" class="ld"/><circle cx="240" cy="48" r="2" class="dotf"/><text x="244" y="52" class="s">압축성 줄눈판·실링</text>' +
    '<line x1="150" y1="122" x2="140" y2="206" class="ld"/><circle cx="140" cy="206" r="2" class="dotf"/><text x="144" y="210" class="bl">Dowel Bar(원형강봉)</text>' +
    '<line x1="270" y1="124" x2="290" y2="226" class="ld"/><circle cx="290" cy="226" r="2" class="dotf"/><text x="294" y="230" class="r">자유단 부착방지 도포</text>' +
    '<line x1="330" y1="127" x2="380" y2="204" class="ld"/><circle cx="380" cy="204" r="2" class="dotf"/><text x="384" y="208" class="s">Dowel Cap</text>' +
    '<line x1="214" y1="165" x2="40" y2="240" class="ld"/><circle cx="40" cy="240" r="2" class="dotf"/><text x="44" y="244" class="bl">전단력 전달·부등침하 단차 방지</text>' +
    '<rect x="20" y="258" width="120" height="22" class="bx"/>' +
    '<text x="80" y="273" text-anchor="middle" class="s">1차측 철근 배근</text>' +
    '<line x1="141" y1="269" x2="157" y2="269" class="ar"/>' +
    '<rect x="158" y="258" width="120" height="22" class="bx"/>' +
    '<text x="218" y="273" text-anchor="middle" class="s">줄눈판·관통 거푸집</text>' +
    '<line x1="279" y1="269" x2="295" y2="269" class="ar"/>' +
    '<rect x="296" y="258" width="124" height="22" class="bx"/>' +
    '<text x="358" y="273" text-anchor="middle" class="s">Dowel 삽입·고정</text>' +
    '<line x1="296" y1="281" x2="142" y2="296" class="ar"/>' +
    '<rect x="20" y="298" width="120" height="22" class="bx"/>' +
    '<text x="80" y="313" text-anchor="middle" class="s">1차 타설</text>' +
    '<line x1="141" y1="309" x2="157" y2="309" class="ar"/>' +
    '<rect x="158" y="298" width="120" height="22" class="bx"/>' +
    '<text x="218" y="313" text-anchor="middle" class="s">도포상태 검사</text>' +
    '<line x1="279" y1="309" x2="295" y2="309" class="ar"/>' +
    '<rect x="296" y="298" width="124" height="22" class="bx"/>' +
    '<text x="358" y="313" text-anchor="middle" class="s">Cap 설치·2차 타설</text>' +
    '<line x1="160" y1="118" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ 1차측 매립·고정</text>' +
    '<line x1="260" y1="112" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 자유단 부착방지 도포</text>' +
    '<line x1="326" y1="109" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ Dowel Cap 신축 여유</text>' +
    '<line x1="120" y1="122" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 수평·직각 고정(들뜸 방지)</text>' +
    '<line x1="215" y1="100" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 관통부 Paste 누출 막음</text>' +
    '<line x1="218" y1="309" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 2차 타설 전 도포 검사</text>' +
    '<line x1="210" y1="140" x2="440" y2="184" class="ld"/><circle cx="440" cy="184" r="2" class="dotf"/><text x="444" y="188" class="k4">④ 이음부 거푸집 측압 견딤</text>' +
    '<line x1="80" y1="180" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ Dowel Basket·Sleeve 일체형</text>' +
    '<line x1="360" y1="309" x2="440" y2="238" class="ld"/><circle cx="440" cy="238" r="2" class="dotf"/><text x="444" y="242" class="k5">⑤ 에폭시·스테인리스 Dowel</text>' +
    '<line x1="410" y1="118" x2="440" y2="260" class="ld"/><circle cx="440" cy="260" r="2" class="dotf"/><text x="444" y="264" class="k5">⑤ Starter bar Template 고정</text>' +
    '</svg>',
  subs: [
    { h: 'Dowel bar 시공방법', pts: ['1차측 매립·고정', '자유단 [[부착방지 도포]]', '[[Dowel Cap]] 신축 여유'] },
    { h: '시공 시 유의사항', pts: ['[[수평·직각 고정]](들뜸 방지)', '관통부 Paste 누출 막음', '2차 타설 전 도포 검사', '이음부 거푸집 측압 견딤'] },
    { h: '개선방안', pts: ['Dowel Basket·Sleeve 일체형', '에폭시·스테인리스 Dowel', 'Starter bar Template 고정'] }
  ],
  msg: '한쪽 고정·한쪽 미끄럼 — 전단은 전달, 신축은 허용',
  rel: ['시공이음', '신축이음', 'Mat기초', 'Starter bar', '분할타설']
},
127: {
  tag: '현상·기준·관리',
  def: '[[탄산화]]·[[염화물]]로 철근 표면 [[부동태막]]이 파괴되어 녹이 생성되고 약 {{2.5배}} [[체적팽창]]하는 현상으로, [[가벼운 녹]]만 허용하고 염화물량 {{0.30kg/㎥}} 이하로 관리',
  wwh: ['부동태막 파괴·녹', '균열·박리 방지', '허용치·피복·방청'],
  figT: '철근부식 Mechanism 및 허용치·방지대책',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="20" y1="70" x2="86" y2="70" class="ar"/>' +
    '<text x="20" y="62" class="s">CO₂</text>' +
    '<line x1="20" y1="120" x2="86" y2="120" class="ar"/>' +
    '<text x="20" y="112" class="s">H₂O·O₂</text>' +
    '<line x1="20" y1="170" x2="86" y2="170" class="ar"/>' +
    '<text x="20" y="162" class="s">Cl⁻</text>' +
    '<rect x="90" y="40" width="160" height="200" class="conc"/>' +
    '<rect x="90" y="40" width="60" height="200" class="bx3"/>' +
    '<line x1="150" y1="40" x2="150" y2="240" class="rd dash"/>' +
    '<circle cx="190" cy="80" r="9" class="bx2"/>' +
    '<circle cx="190" cy="140" r="15" class="rd"/>' +
    '<circle cx="190" cy="140" r="9" class="bx2"/>' +
    '<circle cx="190" cy="200" r="9" class="bx2"/>' +
    '<polyline points="176,137 160,132 150,141 130,135 110,142 90,137" class="rd"/>' +
    '<line x1="90" y1="32" x2="181" y2="32" class="ln2"/>' +
    '<line x1="90" y1="27" x2="90" y2="37" class="ln2"/>' +
    '<line x1="181" y1="27" x2="181" y2="37" class="ln2"/>' +
    '<text x="112" y="26" class="s">피복두께</text>' +
    '<line x1="120" y1="60" x2="270" y2="52" class="ld"/><circle cx="270" cy="52" r="2" class="dotf"/><text x="274" y="56" class="s">탄산화 영역 pH 12.5→9↓</text>' +
    '<line x1="150" y1="90" x2="270" y2="82" class="ld"/><circle cx="270" cy="82" r="2" class="dotf"/><text x="274" y="86" class="s">탄산화 전선 → 부동태막 파괴</text>' +
    '<line x1="205" y1="140" x2="270" y2="116" class="ld"/><circle cx="270" cy="116" r="2" class="dotf"/><text x="274" y="120" class="r">녹 생성 → 체적 약 2.5배 팽창</text>' +
    '<line x1="130" y1="136" x2="270" y2="150" class="ld"/><circle cx="270" cy="150" r="2" class="dotf"/><text x="274" y="154" class="s">팽창압 → 균열·박리·탈락</text>' +
    '<line x1="199" y1="200" x2="270" y2="186" class="ld"/><circle cx="270" cy="186" r="2" class="dotf"/><text x="274" y="190" class="s">건전 철근(부동태막 유지)</text>' +
    '<rect x="20" y="258" width="72" height="24" class="bx"/>' +
    '<text x="56" y="274" text-anchor="middle" class="s">탄산화·염화물</text>' +
    '<line x1="93" y1="270" x2="101" y2="270" class="ar"/>' +
    '<rect x="102" y="258" width="72" height="24" class="bx"/>' +
    '<text x="138" y="274" text-anchor="middle" class="s">부동태막 파괴</text>' +
    '<line x1="175" y1="270" x2="183" y2="270" class="ar"/>' +
    '<rect x="184" y="258" width="72" height="24" class="bx"/>' +
    '<text x="220" y="274" text-anchor="middle" class="s">녹(H₂O·O₂)</text>' +
    '<line x1="257" y1="270" x2="265" y2="270" class="ar"/>' +
    '<rect x="266" y="258" width="72" height="24" class="bx"/>' +
    '<text x="302" y="274" text-anchor="middle" class="s">체적팽창</text>' +
    '<line x1="339" y1="270" x2="347" y2="270" class="ar"/>' +
    '<rect x="348" y="258" width="72" height="24" class="bx"/>' +
    '<text x="384" y="274" text-anchor="middle" class="s">균열·박리</text>' +
    '<text x="20" y="306" class="s">Ca(OH)₂ + CO₂ → CaCO₃ + H₂O (탄산화)</text>' +
    '<text x="20" y="328" class="r">염화물 승인 시 0.60kg/㎥ · 잔골재 NaCl 0.04% 이하</text>' +
    '<line x1="181" y1="80" x2="440" y2="36" class="ld"/><circle cx="440" cy="36" r="2" class="dotf"/><text x="444" y="40" class="k3">③ 가벼운 녹만 허용(부착↑)</text>' +
    '<line x1="205" y1="150" x2="440" y2="58" class="ld"/><circle cx="440" cy="58" r="2" class="dotf"/><text x="444" y="62" class="k3">③ 들뜬 녹·기름 제거·교체</text>' +
    '<line x1="200" y1="140" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="444" y="84" class="k3">③ 중량손실 2~5%↑ 구조검토</text>' +
    '<line x1="86" y1="170" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="444" y="106" class="k3">③ 염화물 0.30kg/㎥ 이하</text>' +
    '<line x1="150" y1="32" x2="440" y2="132" class="ld"/><circle cx="440" cy="132" r="2" class="dotf"/><text x="444" y="136" class="k4">④ 노출환경별 피복두께 준수</text>' +
    '<line x1="250" y1="200" x2="440" y2="154" class="ld"/><circle cx="440" cy="154" r="2" class="dotf"/><text x="444" y="158" class="k4">④ W/B↓·밀실다짐·습윤양생</text>' +
    '<text x="446" y="180" class="k4">④ 철근 보관 고임재·덮개</text>' +
    '<line x1="250" y1="100" x2="440" y2="206" class="ld"/><circle cx="440" cy="206" r="2" class="dotf"/><text x="444" y="210" class="k5">⑤ 에폭시 코팅철근·방청제</text>' +
    '<text x="446" y="232" class="k5">⑤ 전기방식·표면 침투도막</text>' +
    '<line x1="384" y1="282" x2="440" y2="250" class="ld"/><circle cx="440" cy="250" r="2" class="dotf"/><text x="444" y="254" class="k5">⑤ 탄산화·염화물 정기측정</text>' +
    '</svg>',
  subs: [
    { h: '철근부식 허용치', pts: ['[[가벼운 녹]]만 허용(부착↑)', '[[들뜬 녹]]·기름 제거·교체', '중량손실 {{2~5%}}↑ 구조검토', '염화물 {{0.30kg/㎥}} 이하'] },
    { h: '품질관리 유의사항', pts: ['노출환경별 [[피복두께]] 준수', 'W/B↓·밀실다짐·습윤양생', '철근 보관 고임재·덮개'] },
    { h: '방청·개선방안', pts: ['에폭시 코팅철근·방청제', '전기방식·표면 침투도막', '탄산화·염화물 정기측정'] }
  ],
  msg: '부동태막을 지키는 피복·밀실 Con + 허용치 관리 + 방청 — 내력·내구수명 확보',
  rel: ['탄산화', '염해', '부동태막', '전기방식', '에폭시 코팅철근']
},
128: {
  tag: '성능·시험·기준',
  def: '철근과 콘크리트 경계면에서 철근의 미끄러짐을 방지하여 일체 거동하게 하는 [[부착강도]]로, [[교착(Adhesion)]]·[[마찰]]·[[기계적 맞물림]]으로 발현되며 [[이형철근]]이 우수',
  wwh: ['미끄러짐 저항 성능', '일체 거동·응력전달', '이형·정착·피복'],
  figT: '부착응력-미끄러짐 곡선 및 인발시험',
  svg: '<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="200" x2="250" y2="200" class="ar"/>' +
    '<line x1="50" y1="200" x2="50" y2="30" class="ar"/>' +
    '<text x="56" y="34" class="s">τ 부착응력</text>' +
    '<text x="250" y="232" text-anchor="end" class="s">미끄러짐(mm)</text>' +
    '<line x1="100" y1="197" x2="100" y2="203" class="ln2"/>' +
    '<line x1="150" y1="197" x2="150" y2="203" class="ln2"/>' +
    '<line x1="200" y1="197" x2="200" y2="203" class="ln2"/>' +
    '<text x="100" y="214" text-anchor="middle" class="s">0.2</text>' +
    '<text x="150" y="214" text-anchor="middle" class="s">0.4</text>' +
    '<text x="200" y="214" text-anchor="middle" class="s">0.6</text>' +
    '<polyline points="50,200 56,140 68,92 90,64 130,50 190,46 250,50" class="bl"/>' +
    '<polyline points="50,200 53,150 62,138 100,140 160,150 250,162" class="rd"/>' +
    '<line x1="160" y1="48" x2="170" y2="74" class="ld"/><circle cx="170" cy="74" r="2" class="dotf"/><text x="174" y="78" class="bl">이형(기계적 맞물림)</text>' +
    '<line x1="160" y1="150" x2="170" y2="176" class="ld"/><circle cx="170" cy="176" r="2" class="dotf"/><text x="174" y="180" class="s">원형(교착·마찰)</text>' +
    '<text x="365" y="18" text-anchor="middle" class="b">[인발시험]</text>' +
    '<rect x="320" y="70" width="90" height="100" class="conc"/>' +
    '<rect x="361" y="40" width="8" height="200" class="bx2"/>' +
    '<polyline points="330,80 400,90 330,100 400,110 330,120 400,130 330,140 400,150 330,160" class="ln2 dash"/>' +
    '<rect x="300" y="170" width="130" height="10" class="bx3"/>' +
    '<line x1="390" y1="200" x2="390" y2="240" class="ar"/>' +
    '<text x="396" y="236" class="s">P(인발)</text>' +
    '<line x1="365" y1="44" x2="350" y2="30" class="ld"/><circle cx="350" cy="30" r="2" class="dotf"/><text x="346" y="34" text-anchor="end" class="s">자유단 미끄러짐 측정</text>' +
    '<line x1="398" y1="110" x2="408" y2="96" class="ld"/><circle cx="408" cy="96" r="2" class="dotf"/><text x="412" y="100" class="s">나선근</text>' +
    '<line x1="306" y1="175" x2="290" y2="192" class="ld"/><circle cx="290" cy="192" r="2" class="dotf"/><text x="286" y="196" text-anchor="end" class="s">재하판</text>' +
    '<text x="20" y="262" class="b">[부착 발현 원리]</text>' +
    '<rect x="20" y="272" width="280" height="44" class="conc"/>' +
    '<rect x="20" y="290" width="300" height="10" class="bx2"/>' +
    '<rect x="50" y="284" width="6" height="22" class="bx2"/>' +
    '<rect x="90" y="284" width="6" height="22" class="bx2"/>' +
    '<rect x="130" y="284" width="6" height="22" class="bx2"/>' +
    '<rect x="170" y="284" width="6" height="22" class="bx2"/>' +
    '<rect x="210" y="284" width="6" height="22" class="bx2"/>' +
    '<rect x="250" y="284" width="6" height="22" class="bx2"/>' +
    '<line x1="320" y1="295" x2="345" y2="295" class="ar"/>' +
    '<line x1="80" y1="300" x2="60" y2="330" class="ld"/><circle cx="60" cy="330" r="2" class="dotf"/><text x="64" y="334" class="s">교착: 초기</text>' +
    '<line x1="150" y1="300" x2="140" y2="330" class="ld"/><circle cx="140" cy="330" r="2" class="dotf"/><text x="144" y="334" class="s">마찰</text>' +
    '<line x1="213" y1="290" x2="200" y2="330" class="ld"/><circle cx="200" cy="330" r="2" class="dotf"/><text x="204" y="334" class="bl">마디 지압 = 지배</text>' +
    '<line x1="300" y1="290" x2="346" y2="270" class="ld"/><circle cx="346" cy="270" r="2" class="dotf"/><text x="350" y="274" class="r">상부근 보정 1.3</text>' +
    '<text x="20" y="356" class="r">정착 l_db = 0.6·d_b·f_y/(λ√fck), l_d ≥ 300mm</text>' +
    '<line x1="90" y1="64" x2="440" y2="42" class="ld"/><circle cx="440" cy="42" r="2" class="dotf"/><text x="444" y="46" class="k3">③ fck↑·W/B↓ → 부착↑</text>' +
    '<line x1="130" y1="50" x2="440" y2="64" class="ld"/><circle cx="440" cy="64" r="2" class="dotf"/><text x="444" y="68" class="k3">③ 이형철근 우수(원형 대비)</text>' +
    '<line x1="253" y1="295" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k3">③ 가는 철근 다수(둘레↑)</text>' +
    '<line x1="320" y1="120" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="444" y="122" class="k4">④ 들뜬 녹·기름·이형제 제거</text>' +
    '<line x1="410" y1="175" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="k4">④ 피복두께·순간격 확보</text>' +
    '<line x1="260" y1="316" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="444" y="166" class="k4">④ 진동다짐·블리딩 저감</text>' +
    '<line x1="300" y1="250" x2="440" y2="194" class="ld"/><circle cx="440" cy="194" r="2" class="dotf"/><text x="444" y="198" class="k5">⑤ 에폭시철근 정착길이 할증</text>' +
    '<line x1="50" y1="356" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k5">⑤ 고강도 철근 Head bar</text>' +
    '</svg>',
  subs: [
    { h: '부착강도 영향요인', pts: ['fck↑·W/B↓ → 부착↑', '[[이형철근]] 우수(원형 대비)', '가는 철근 다수(둘레↑)'] },
    { h: '시공 시 유의사항', pts: ['들뜬 녹·기름·이형제 제거', '[[피복두께]]·순간격 확보', '진동다짐·블리딩 저감'] },
    { h: '개선방안', pts: ['에폭시철근 [[정착길이]] 할증', '고강도 철근 Head bar'] }
  ],
  msg: '교착·마찰·맞물림으로 일체화 — 정착·피복·다짐으로 뽑힘·쪼갬 파괴 방지',
  rel: ['정착길이', '이형철근', '피복두께', 'Head bar', '쪼갬 균열']
},
129: {
  tag: '기준·부재·내구',
  def: '[[최외측 철근]](늑근·띠철근) 표면에서 콘크리트 표면까지의 최단거리로, [[부착강도]]·[[내구성(부식방지)]]·[[내화성]] 확보를 위해 [[노출환경]]별 최소값(수중 {{100mm}}~실내 {{20mm}})을 규정',
  wwh: ['최외측 철근~표면', '부착·내구·내화', '노출환경별 최소값'],
  figT: '피복두께 개념 및 열화 차단 원리',
  svg: '<svg viewBox="0 0 640 370" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="40" y="30" width="160" height="200" class="conc"/>' +
    '<rect x="62" y="52" width="116" height="156" rx="6" fill="none" class="ln"/>' +
    '<circle cx="80" cy="194" r="9" class="bx2"/>' +
    '<circle cx="120" cy="194" r="9" class="bx2"/>' +
    '<circle cx="160" cy="194" r="9" class="bx2"/>' +
    '<circle cx="78" cy="66" r="7" class="bx2"/>' +
    '<circle cx="162" cy="66" r="7" class="bx2"/>' +
    '<rect x="112" y="208" width="16" height="22" class="bx3"/>' +
    '<line x1="178" y1="208" x2="222" y2="208" class="ln2"/>' +
    '<line x1="200" y1="230" x2="222" y2="230" class="ln2"/>' +
    '<line x1="216" y1="219" x2="216" y2="210" class="ar"/>' +
    '<line x1="216" y1="219" x2="216" y2="228" class="ar"/>' +
    '<line x1="216" y1="219" x2="236" y2="220" class="ld"/><circle cx="236" cy="220" r="2" class="dotf"/><text x="240" y="224" class="r">피복두께 c (늑근 외면~표면)</text>' +
    '<line x1="40" y1="232" x2="40" y2="250" class="ln2"/>' +
    '<line x1="62" y1="208" x2="62" y2="250" class="ln2"/>' +
    '<line x1="51" y1="246" x2="42" y2="246" class="ar"/>' +
    '<line x1="51" y1="246" x2="60" y2="246" class="ar"/>' +
    '<text x="66" y="250" class="r">c</text>' +
    '<line x1="162" y1="66" x2="232" y2="52" class="ld"/><circle cx="232" cy="52" r="2" class="dotf"/><text x="236" y="56" class="s">상부근</text>' +
    '<line x1="178" y1="130" x2="232" y2="96" class="ld"/><circle cx="232" cy="96" r="2" class="dotf"/><text x="236" y="100" class="bl">늑근(Stirrup) = 최외측 철근</text>' +
    '<line x1="160" y1="194" x2="232" y2="140" class="ld"/><circle cx="232" cy="140" r="2" class="dotf"/><text x="236" y="144" class="s">주근</text>' +
    '<line x1="128" y1="220" x2="232" y2="182" class="ld"/><circle cx="232" cy="182" r="2" class="dotf"/><text x="236" y="186" class="s">간격재(Spacer)</text>' +
    '<rect x="150" y="264" width="270" height="84" class="conc"/>' +
    '<rect x="150" y="264" width="60" height="84" class="bx3"/>' +
    '<line x1="220" y1="264" x2="220" y2="348" class="bl"/>' +
    '<line x1="150" y1="258" x2="210" y2="258" class="ln2"/>' +
    '<text x="180" y="254" text-anchor="middle" class="r">피복</text>' +
    '<text x="20" y="276" class="s">CO₂(탄산화)</text>' +
    '<line x1="20" y1="284" x2="146" y2="284" class="ar"/>' +
    '<text x="20" y="308" class="s">H₂O·Cl⁻(염해)</text>' +
    '<line x1="20" y1="316" x2="146" y2="316" class="ar"/>' +
    '<text x="20" y="338" class="s">화재 열(내화)</text>' +
    '<line x1="20" y1="344" x2="146" y2="344" class="ar"/>' +
    '<line x1="222" y1="282" x2="240" y2="282" class="ld"/><circle cx="240" cy="282" r="2" class="dotf"/><text x="244" y="286" class="s">부식·강도저하 방지(내구성)</text>' +
    '<line x1="180" y1="304" x2="240" y2="304" class="ld"/><circle cx="240" cy="304" r="2" class="dotf"/><text x="244" y="308" class="s">알칼리 보호층</text>' +
    '<line x1="222" y1="326" x2="240" y2="326" class="ld"/><circle cx="240" cy="326" r="2" class="dotf"/><text x="244" y="330" class="s">부착강도 확보(쪼갬 방지)</text>' +
    '<line x1="200" y1="344" x2="240" y2="346" class="ld"/><circle cx="240" cy="346" r="2" class="dotf"/><text x="244" y="350" class="s">화재 시 내화성 확보</text>' +
    '<line x1="150" y1="300" x2="440" y2="36" class="ld"/><circle cx="440" cy="36" r="2" class="dotf"/><text x="444" y="40" class="k3">③ 수중 100·영구 흙 75</text>' +
    '<line x1="150" y1="284" x2="440" y2="58" class="ld"/><circle cx="440" cy="58" r="2" class="dotf"/><text x="444" y="62" class="k3">③ 노출 D19↑ 50·D16↓ 40</text>' +
    '<line x1="200" y1="100" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="444" y="84" class="k3">③ 실내 슬래브·벽 20(D35↓)</text>' +
    '<line x1="200" y1="160" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="444" y="106" class="k3">③ 보·기둥 40</text>' +
    '<line x1="128" y1="230" x2="440" y2="132" class="ld"/><circle cx="440" cy="132" r="2" class="dotf"/><text x="444" y="136" class="k4">④ 규격 간격재(Spacer) 배치</text>' +
    '<line x1="120" y1="194" x2="440" y2="154" class="ld"/><circle cx="440" cy="154" r="2" class="dotf"/><text x="444" y="158" class="k4">④ 주근 기준 오인 금지</text>' +
    '<line x1="216" y1="219" x2="440" y2="176" class="ld"/><circle cx="440" cy="176" r="2" class="dotf"/><text x="444" y="180" class="k4">④ 허용오차 ±10·±13mm</text>' +
    '<text x="446" y="202" class="k4">④ 밟힘·간격재 탈락 점검</text>' +
    '<line x1="380" y1="290" x2="440" y2="228" class="ld"/><circle cx="440" cy="228" r="2" class="dotf"/><text x="444" y="232" class="k5">⑤ 노출등급별 피복 할증</text>' +
    '<line x1="420" y1="330" x2="440" y2="250" class="ld"/><circle cx="440" cy="250" r="2" class="dotf"/><text x="444" y="254" class="k5">⑤ 철근탐사기 비파괴 검측</text>' +
    '<text x="446" y="276" class="k5">⑤ Prefab·BIM 배근상세</text>' +
    '</svg>',
  subs: [
    { h: '최소 피복두께 기준', pts: ['수중 {{100}}·영구 흙 {{75}}', '노출 D19↑ {{50}}·D16↓ {{40}}', '실내 슬래브·벽 {{20}}(D35↓)', '보·기둥 {{40}}'] },
    { h: '시공 시 유의사항', pts: ['규격 [[간격재(Spacer)]] 배치', '주근 기준 오인 금지', '[[허용오차]] ±{{10}}·±{{13}}mm', '밟힘·간격재 탈락 점검'] },
    { h: '개선방안', pts: ['노출등급별 피복 할증', '철근탐사기 비파괴 검측', 'Prefab·BIM 배근상세'] }
  ],
  msg: '최외측 철근 기준 피복 확보 — 부착·내구·내화의 1차 방어선',
  rel: ['간격재(Spacer)', '탄산화', '내구성 노출등급', '철근탐사기', '유효깊이']
}
});
