// 간단 요약(한눈에·따라 그리기) — 디테일원 용어250 group i (181~206) · 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
181: {
  one: '유리를 [[구조용 실란트]]로 Mullion에 접착, 풍압은 [[Bite]]가 부담 ({{Bite ≥ 6mm}})',
  flow: ['Bite 산정', '접착성 시험', '공장 시공·양생', 'Mock-up', '현장 설치'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="60" width="180" height="16" class="bx3"/><rect x="240" y="60" width="180" height="16" class="bx3"/>' +
    '<circle cx="230" cy="68" r="6" class="bf"/>' +
    '<rect x="196" y="76" width="24" height="30" class="rf"/><rect x="240" y="76" width="24" height="30" class="rf"/>' +
    '<rect x="190" y="106" width="80" height="120" class="bx2"/>' +
    '<line x1="120" y1="56" x2="120" y2="26" class="ar"/>' +
    '<text x="40" y="40" class="n">①</text><text x="62" y="40" class="b">풍압</text>' +
    '<line x1="234" y1="62" x2="252" y2="44" class="ld"/><text x="256" y="40" class="s2">Weather Seal</text>' +
    '<text x="100" y="100">유리</text>' +
    '<line x1="264" y1="90" x2="286" y2="92" class="ld"/><text x="290" y="98" class="n">②</text><text x="312" y="98" class="r">구조용 실란트</text>' +
    '<text x="312" y="130" class="r">Bite ≥ 6mm</text>' +
    '<text x="312" y="160" class="r">Glue line 6~12mm</text>' +
    '<text x="168" y="184" class="n">③</text><text x="230" y="180" text-anchor="middle" class="t">Mullion</text>' +
    '</svg>',
  read: '①외부 풍압이 유리를 당김 → ②구조용 실란트 Bite(≥6mm)가 부담 → ③Mullion으로 전달',
  heads: [
    { h: '설계기준', k: ['[[Bite]] {{≥ 6mm}}', 'Bite ≥ Glue line', '4변·2변 지지'] },
    { h: '유의사항', k: ['[[접착성 시험]]', '2-wipe·Primer', '공장 완전 양생'] },
    { h: '개선방안', k: ['Mock-up·풍동시험', 'Safety Clip', '[[Setting Block]]'] }
  ],
  code: 'Bite 6 · Glue 6~12 · 접착시험 → “66 바글접”'
},
182: {
  one: '[[강화(접합)유리]] 모서리 천공 → [[Rotule Bolt]]·[[Spider]]로 지지구조에 [[점지지]]',
  flow: ['구조해석', '천공·면취', '강화·HST', 'Spider 체결', '실리콘 줄눈'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="110" height="90" class="bx3"/><rect x="180" y="40" width="110" height="90" class="bx3"/>' +
    '<rect x="60" y="140" width="110" height="90" class="bx3"/><rect x="180" y="140" width="110" height="90" class="bx3"/>' +
    '<line x1="155" y1="115" x2="195" y2="155" class="ln"/><line x1="195" y1="115" x2="155" y2="155" class="ln"/>' +
    '<circle cx="175" cy="135" r="6" class="bx2"/>' +
    '<circle cx="155" cy="115" r="4" class="rf"/><circle cx="195" cy="115" r="4" class="rf"/><circle cx="155" cy="155" r="4" class="rf"/><circle cx="195" cy="155" r="4" class="rf"/>' +
    '<text x="60" y="24" class="b">4점 지지 · Frame 없음</text>' +
    '<line x1="176" y1="60" x2="306" y2="58" class="ld"/><text x="310" y="62">Silicone 줄눈</text>' +
    '<line x1="181" y1="132" x2="306" y2="106" class="ld"/><text x="310" y="112" class="n">③</text><text x="332" y="112" class="t">Spider</text>' +
    '<line x1="199" y1="157" x2="306" y2="150" class="ld"/><text x="310" y="156" class="n">②</text><text x="332" y="156" class="r">Rotule Bolt(회전)</text>' +
    '<text x="332" y="200" class="r">HST 290℃·2시간</text>' +
    '<text x="332" y="240" class="s2">Truss·Cable 지지</text>' +
    '<text x="104" y="264" class="n">①</text><text x="175" y="262" text-anchor="middle">강화·접합유리</text>' +
    '</svg>',
  read: '①천공한 강화·접합유리를 → ②Rotule Bolt가 회전하며 잡고 → ③Spider가 지지구조로 전달',
  heads: [
    { h: '구성·특징', k: ['4점 지지', '[[Rotule]] 변위흡수', 'Truss·Cable 지지'] },
    { h: '유의사항', k: ['천공 후 강화', '[[HST]] {{290℃·2h}}', 'Bolt Torque 관리'] },
    { h: '개선방안', k: ['접합유리 비산방지', '구조해석·Mock-up'] }
  ],
  code: 'Spider·Point·Glass → “거미가 점으로 유리를 잡는다”'
},
183: {
  one: '[[강화유리]] 속 [[NiS]]가 상온에서 [[부피팽창]]하여 외력 없이 깨지는 현상',
  flow: ['NiS 혼입', '강화 급랭', 'β 상전이', '부피팽창', '나비 파단'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="70" width="260" height="80" class="bx3"/>' +
    '<line x1="40" y1="86" x2="300" y2="86" class="ln2 dash"/><line x1="40" y1="134" x2="300" y2="134" class="ln2 dash"/>' +
    '<circle cx="170" cy="110" r="6" class="rf"/><line x1="178" y1="110" x2="210" y2="110" class="ar"/><line x1="162" y1="110" x2="130" y2="110" class="ar"/>' +
    '<path d="M400,180 C370,150 350,205 400,180 C450,155 430,210 400,180" fill="none" class="rd"/>' +
    '<text x="40" y="50" class="b">강화유리 단면</text>' +
    '<text x="182" y="102" class="n">①</text>' +
    '<line x1="300" y1="80" x2="308" y2="78" class="ld"/><text x="312" y="82" class="s2">표면 압축층</text>' +
    '<text x="312" y="114">중앙 인장층</text>' +
    '<line x1="170" y1="118" x2="170" y2="164" class="ld"/><text x="98" y="184" class="n">②</text><text x="170" y="182" text-anchor="middle" class="r">NiS 팽창 2~4%</text>' +
    '<text x="400" y="140" text-anchor="middle" class="s2">외력 없이 파손</text>' +
    '<text x="332" y="234" class="n">③</text><text x="400" y="232" text-anchor="middle">나비모양 파단</text>' +
    '<text x="40" y="262" class="r">HST 290℃·2시간 → 사전 선별</text>' +
    '</svg>',
  read: '①강화유리 인장층 속 NiS가 → ②상온에서 2~4% 부피팽창 → ③외력 없이 나비모양 파단',
  heads: [
    { h: '발생원리', k: ['[[NiS]] α→β {{283℃}}', '중앙 인장층 균열', '나비모양 파단'] },
    { h: '유의사항', k: ['[[HST]] {{290℃·2h}}', '원판 NiS 저감', '단부 흠집 관리'] },
    { h: '대책', k: ['[[배강도유리]]', '[[접합유리]]', '비산방지 Film'] }
  ],
  code: '니(NiS)가 부(팽창)풀어 나(나비)로 → HST 290·2'
},
184: {
  one: '유리 [[중앙부]](고온)와 [[단부]](저온) 온도차로 단부 [[인장응력]] 발생 → 균열',
  flow: ['일사 흡수', '중앙 팽창', '단부 구속', '단부 인장', '직각 균열'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="220" height="200" class="bx2"/><rect x="56" y="56" width="188" height="168" class="bx3"/>' +
    '<circle cx="150" cy="130" r="40" fill="none" class="ln2 dash"/>' +
    '<polyline points="150,224 150,206 140,194 158,180" fill="none" class="rd"/>' +
    '<text x="150" y="114" text-anchor="middle" class="n">①</text>' +
    '<text x="150" y="140" text-anchor="middle" class="r">고온·팽창</text>' +
    '<text x="280" y="80" class="t">σ = E·α·ΔT</text>' +
    '<text x="280" y="120" class="s2">일사 → 중앙부 고온</text>' +
    '<line x1="160" y1="190" x2="254" y2="176" class="ld"/><text x="258" y="182" class="n">③</text><text x="280" y="182" class="r">단부 직각 균열</text>' +
    '<line x1="246" y1="215" x2="254" y2="215" class="ld"/><text x="258" y="222" class="n">②</text><text x="280" y="222">단부 저온 → 구속</text>' +
    '<text x="40" y="262" class="s2">Frame 매립 단부</text>' +
    '</svg>',
  read: '①일사로 중앙부 고온 팽창 → ②Frame 속 단부는 저온·구속 → ③단부 인장으로 직각 균열',
  heads: [
    { h: '발생원리', k: ['[[중앙-단부 온도차]]', '단부 직각→사행', '흡수·반사유리↑'] },
    { h: '유의사항', k: ['[[단부 Clean cut]]', 'Blind 이격', '냉풍 직사 금지'] },
    { h: '개선방안', k: ['[[열깨짐 계산]]', '[[배강도유리]]', '단열 Frame'] }
  ],
  code: '중·단 온도차 → “단·직·사(단부·직각·사행)”'
},
186: {
  one: '[[60분+ 방화문]](차염 {{60분}}+차열 {{30분}}) 성능을 위해 인정번호·고정·충전·부속을 상세도에 명기',
  flow: ['등급·인정번호', '재질·두께', 'Anchor·사춤', '부속·Gasket', '개폐방향'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="90" width="80" height="60" class="conc"/><rect x="370" y="90" width="80" height="60" class="conc"/>' +
    '<rect x="106" y="92" width="4" height="56" class="rf"/>' +
    '<rect x="110" y="90" width="14" height="60" class="bx2"/><rect x="356" y="90" width="14" height="60" class="bx2"/>' +
    '<rect x="124" y="110" width="232" height="16" class="bx3"/>' +
    '<rect x="150" y="96" width="50" height="10" class="bx"/>' +
    '<path d="M356,126 A232,232 0 0 1 325,242" fill="none" class="ln2 dash"/><line x1="124" y1="126" x2="325" y2="242" class="ln2 dash"/>' +
    '<text x="20" y="28" class="t">60분+ = 차염60 + 차열30</text>' +
    '<line x1="108" y1="90" x2="84" y2="68" class="ld"/><text x="20" y="62" class="n">②</text><text x="42" y="62" class="r">틈새 내화충전</text>' +
    '<text x="128" y="88" class="n">③</text><text x="150" y="86" class="s2">Door Closer</text>' +
    '<line x1="362" y1="90" x2="380" y2="68" class="ld"/><text x="348" y="62" class="n">①</text><text x="370" y="62">Anchor 고정</text>' +
    '<text x="30" y="190" class="s2">인정 구성대로 시공</text>' +
    '<text x="335" y="262" class="b">피난방향 개폐</text>' +
    '</svg>',
  read: '①문틀을 Anchor로 고정 → ②틈새 내화충전으로 화염 차단 → ③Door Closer·피난방향 개폐',
  heads: [
    { h: '방화문 등급', k: ['60분+: 차염60+차열30', '60분: 차염 {{60분}}↑', '30분: 차염 30~60분'] },
    { h: '상세도 표기', k: ['[[Anchor 고정]]·사춤', '[[품질인정]] 구성', 'Door Closer·Gasket'] },
    { h: '개선방안', k: ['인정표지 반입검수', '정기 작동점검'] }
  ],
  code: '등·재·고·충·부·방 → “등재고 충부방”'
},
187: {
  one: 'Slab 위 [[Pedestal]]·[[Stringer]]로 [[Panel]] {{600×600}}을 받친 이중바닥, 하부에 배선·공조',
  flow: ['Slab 방진도장', '먹매김', 'Pedestal', 'Level 조정', 'Panel·접지'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="210" width="300" height="30" class="conc"/>' +
    '<line x1="130" y1="120" x2="130" y2="210" class="ln"/><line x1="230" y1="120" x2="230" y2="210" class="ln"/>' +
    '<rect x="120" y="204" width="20" height="6" class="bx2"/><rect x="220" y="204" width="20" height="6" class="bx2"/>' +
    '<rect x="30" y="104" width="100" height="16" class="bx3"/><rect x="130" y="104" width="100" height="16" class="bx3"/><rect x="230" y="104" width="100" height="16" class="bx3"/>' +
    '<line x1="30" y1="122" x2="330" y2="122" class="ln2"/>' +
    '<path d="M40,185 C100,170 160,200 220,185 C260,175 300,195 320,185" fill="none" class="bl"/>' +
    '<text x="30" y="40" class="t">이중바닥 (Free Access)</text>' +
    '<text x="336" y="116" class="n">③</text><text x="358" y="116" class="r">Panel 600×600</text>' +
    '<line x1="300" y1="123" x2="334" y2="140" class="ld"/><text x="336" y="148" class="n">②</text><text x="358" y="146" class="s2">Stringer</text>' +
    '<line x1="230" y1="170" x2="334" y2="176" class="ld"/><text x="336" y="182" class="n">①</text><text x="358" y="182">Pedestal</text>' +
    '<text x="80" y="160" text-anchor="middle" class="bl">배선·공조 공간</text>' +
    '<text x="30" y="268" class="r">Level 조정 · 대전방지 접지</text>' +
    '</svg>',
  read: '①Slab 위 Pedestal 세워 Level 조정 → ②Stringer로 연결 → ③Panel 600×600 얹고 하부 배선',
  heads: [
    { h: '구성·특징', k: ['[[Panel]] {{600×600}}', 'Pedestal+Stringer', 'Access/OA 구분'] },
    { h: '유의사항', k: ['Slab 방진도장', '[[Level 조정]]', '개구부 보강'] },
    { h: '개선방안', k: ['대전방지·접지', '방화구획·누수감지'] }
  ],
  code: '판·각·줄 + 레·접 → “판각줄 레접”'
},
188: {
  one: '[[Stud Anchor]] 붙은 [[강판]]을 콘크리트에 미리 묻어 후행 철골보를 [[용접·볼트]] 접합',
  flow: ['BIM 좌표', 'Plate 제작', 'Jig 고정', '타설·다짐', '검측·접합'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="160" height="200" class="conc"/>' +
    '<rect x="192" y="90" width="12" height="100" class="bf"/>' +
    '<line x1="192" y1="110" x2="140" y2="110" class="ln2"/><line x1="192" y1="140" x2="140" y2="140" class="ln2"/><line x1="192" y1="170" x2="140" y2="170" class="ln2"/>' +
    '<circle cx="140" cy="110" r="4" class="dotf"/><circle cx="140" cy="140" r="4" class="dotf"/><circle cx="140" cy="170" r="4" class="dotf"/>' +
    '<rect x="204" y="120" width="60" height="8" class="bx2"/><rect x="264" y="100" width="180" height="60" class="bx3"/>' +
    '<line x1="140" y1="106" x2="110" y2="32" class="ld"/><text x="18" y="24" class="n">①</text><text x="40" y="24" class="r">Stud Anchor</text>' +
    '<line x1="198" y1="88" x2="210" y2="66" class="ld"/><text x="196" y="60" class="n">②</text><text x="218" y="60" class="r">Embedded Plate</text>' +
    '<line x1="230" y1="128" x2="230" y2="186" class="ld"/><text x="198" y="202" class="n">③</text><text x="220" y="200" class="s2">Shear Plate·HTB</text>' +
    '<text x="354" y="136" text-anchor="middle" class="t">철골보 (후행)</text>' +
    '<text x="120" y="262" text-anchor="middle" class="s2">Core 벽체 (선행 타설)</text>' +
    '<text x="280" y="262" class="r">Template 고정·검측</text>' +
    '</svg>',
  read: '①Stud Anchor 붙은 ②Embedded Plate를 Core에 선매립 → ③Shear Plate로 철골보 접합',
  heads: [
    { h: '구성·특징', k: ['[[Core 선행공법]]', 'Stud 용접 강판', '[[Slot Hole]] 오차흡수'] },
    { h: '유의사항', k: ['위치·Level 측량', 'Jig 이동 방지', '배면 공극 방지'] },
    { h: '개선방안', k: ['BIM [[Template]]', 'Shim·Slot 보정'] }
  ],
  code: 'Stud·Plate·Jig·검측 → “스판지검”'
},
191: {
  one: '[[단열 불연속]]·관통 부위로 열이 집중되어 [[표면결로]]·곰팡이·[[열손실]] 발생 (Ψ W/m·K)',
  flow: ['단열 불연속', '열류 집중', '표면온도↓', '표면결로'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="200" y="30" width="40" height="220" class="conc"/>' +
    '<rect x="170" y="30" width="30" height="90" class="bx2"/><rect x="170" y="150" width="30" height="100" class="bx2"/>' +
    '<rect x="40" y="120" width="200" height="30" class="conc"/>' +
    '<line x1="130" y1="135" x2="290" y2="135" class="ar"/>' +
    '<circle cx="164" cy="112" r="3" class="bf"/><circle cx="164" cy="158" r="3" class="bf"/>' +
    '<text x="60" y="60" class="t">실내</text><text x="330" y="60" class="t">실외</text>' +
    '<line x1="170" y1="80" x2="148" y2="84" class="ld"/><text x="100" y="90">단열재</text>' +
    '<text x="176" y="112" class="n">①</text>' +
    '<text x="300" y="128" class="n">②</text><text x="322" y="128" class="r">열교 (열류 집중)</text>' +
    '<text x="322" y="156" class="s2">선형 열관류율 Ψ</text>' +
    '<line x1="162" y1="162" x2="150" y2="186" class="ld"/><text x="18" y="202" class="n">③</text><text x="40" y="200" class="bl">표면결로·곰팡이</text>' +
    '<text x="40" y="270" class="g">대책: 외단열·열교차단재</text>' +
    '</svg>',
  read: '①슬래브가 단열재를 끊음 → ②그 틈으로 열이 집중 유출 → ③실내 모서리 표면결로·곰팡이',
  heads: [
    { h: '발생원리', k: ['[[단열 불연속]]', '선형 Ψ·점형 χ', '표면온도↓ 결로'] },
    { h: '유의사항', k: ['단열재 밀착', '관통철물 보강', '발코니·창호 단부'] },
    { h: '개선방안', k: ['[[외단열]] 연속', '[[Thermal Break]]', '열화상·TDR'] }
  ],
  code: '불·관·단 → 외·차·화 (외단열·차단재·열화상)'
},
194: {
  one: '도료·접착제에서 [[휘발]]하는 유기화합물로 [[새집증후군]] 유발, [[폼알데하이드]] {{210µg/m³}}↓',
  flow: ['HB 자재', '저VOC·환기', 'Bake-out', '공기질 측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="260" height="180" class="bx"/>' +
    '<rect x="40" y="210" width="260" height="20" class="bx2"/>' +
    '<line x1="100" y1="205" x2="100" y2="150" class="ar"/><line x1="170" y1="205" x2="170" y2="140" class="ar"/><line x1="240" y1="205" x2="240" y2="150" class="ar"/>' +
    '<line x1="300" y1="160" x2="350" y2="160" class="ar"/>' +
    '<text x="170" y="80" text-anchor="middle" class="t">새집증후군</text>' +
    '<text x="110" y="126" class="n">①</text><text x="180" y="125" text-anchor="middle" class="r">VOCs 방산</text>' +
    '<text x="170" y="252" text-anchor="middle" class="s2">도료·접착제·마감재</text>' +
    '<text x="310" y="88" class="n">②</text><text x="332" y="88">폼알데하이드</text>' +
    '<text x="332" y="112" class="r">210µg/m³ 이하</text>' +
    '<text x="358" y="165" class="s2">환기·Flush-out</text>' +
    '<text x="310" y="206" class="n">③</text><text x="332" y="206" class="s2">Bake-out (고온)</text>' +
    '</svg>',
  read: '①마감재·접착제에서 VOCs 방산 → ②폼알데하이드 210µg/m³ 이하 관리 → ③환기·Bake-out',
  heads: [
    { h: '권고기준', k: ['폼알 {{210}}·벤젠 {{30}}', '톨루엔 {{1,000}}', '라돈 {{148Bq/m³}}'] },
    { h: '유의사항', k: ['[[HB마크]] 자재', '도료 최소·환기', '입주 전 측정·공고'] },
    { h: '개선방안', k: ['[[Bake-out]]', '[[Flush-out]]', 'IAQ 센서'] }
  ],
  code: '폼210·벤30·톨1000 → “폼이일 벤삼 톨천”'
},
197: {
  one: '건설기업이 [[환경(E)]]·[[사회(S)]]·[[지배구조(G)]] 비재무 요소를 내재화하는 [[지속가능경영]]',
  flow: ['기획 LCA', '설계 ZEB', '시공 OSC', '운영 BEMS', '공시·평가'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="60" width="140" height="110" class="bx2"/><rect x="170" y="60" width="140" height="110" class="bx2"/><rect x="320" y="60" width="140" height="110" class="bx2"/>' +
    '<line x1="90" y1="170" x2="90" y2="190" class="ln"/><line x1="390" y1="170" x2="390" y2="190" class="ln"/><line x1="90" y1="190" x2="390" y2="190" class="ln"/>' +
    '<line x1="240" y1="170" x2="240" y2="210" class="ar"/>' +
    '<text x="28" y="84" class="n">①</text><text x="90" y="104" text-anchor="middle" class="t">E 환경</text>' +
    '<text x="90" y="140" text-anchor="middle" class="s2">탄소·폐기물</text>' +
    '<text x="178" y="84" class="n">②</text><text x="240" y="104" text-anchor="middle" class="t">S 사회</text>' +
    '<text x="240" y="140" text-anchor="middle" class="s2">안전·상생·인권</text>' +
    '<text x="328" y="84" class="n">③</text><text x="390" y="104" text-anchor="middle" class="t">G 지배구조</text>' +
    '<text x="390" y="140" text-anchor="middle" class="s2">투명·윤리·준법</text>' +
    '<text x="240" y="236" text-anchor="middle" class="r">지속가능경영 → 공시·평가</text>' +
    '</svg>',
  read: '①E 탄소·폐기물 + ②S 안전·상생 + ③G 투명·윤리 → 지속가능경영·공시',
  heads: [
    { h: 'ESG 구성', k: ['E: 탄소·폐기물', 'S: 안전·상생', 'G: 투명·윤리'] },
    { h: '유의사항', k: ['Greenwashing 지양', '공급망 ESG', '데이터 측정·검증'] },
    { h: '개선방안', k: ['OSC·ZEB·LCA', 'K-ESG 공시'] }
  ],
  code: 'E 탄폐 · S 안상인 · G 투윤준 → “탄폐 안상인 투윤준”'
},
198: {
  one: '화재 성능에 따라 [[불연]]·[[준불연]]·[[난연]]으로 구분, 총방출열량 {{8MJ/m²}}↓·[[가스유해성]]으로 판정',
  flow: ['시험체 제작', '불연성·콘칼', '가스유해성', '실물모형', '인정·검수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="110" y1="230" x2="460" y2="230" class="ln"/><line x1="110" y1="40" x2="110" y2="230" class="ln"/>' +
    '<rect x="110" y="60" width="320" height="34" class="bx3"/><rect x="110" y="110" width="160" height="34" class="bx2"/><rect x="110" y="160" width="80" height="34" class="bx"/>' +
    '<text x="40" y="84" class="n">①</text><text x="100" y="83" text-anchor="end" class="t">불연</text>' +
    '<text x="24" y="134" class="n">②</text><text x="100" y="133" text-anchor="end" class="t">준불연</text>' +
    '<text x="40" y="184" class="n">③</text><text x="100" y="183" text-anchor="end" class="t">난연</text>' +
    '<text x="120" y="82" class="s2">20분 · +20K↓ · 질량30%↓</text>' +
    '<text x="120" y="132" class="s2">10분 · 8MJ/m²↓</text>' +
    '<text x="200" y="182" class="s2">5분 · 8MJ/m²↓</text>' +
    '<text x="460" y="250" text-anchor="end" class="s2">가열시간 →</text>' +
    '<text x="110" y="268" class="r">+ 가스유해성 9분↑</text>' +
    '</svg>',
  read: '막대 길이 = 견디는 가열시간: ①불연 20분 → ②준불연 10분 → ③난연 5분 + 가스유해성',
  heads: [
    { h: '판정기준', k: ['불연 {{20분}}·+20K', '준불연 {{10분}}·8MJ', '난연 {{5분}}·8MJ'] },
    { h: '유의사항', k: ['가스유해성 {{9분}}↑', '인정구성 일치', '복합자재 심재'] },
    { h: '개선방안', k: ['[[실물모형시험]]', '유통 이력 추적'] }
  ],
  code: '불이삼 준십팔 난오팔 가스구'
},
199: {
  one: '층간 [[수직 화재확산]] 방지를 위해 매 층 [[방지재료]] {{400mm 이상}} 설치, 커튼월 틈 [[내화충전]]',
  flow: ['대상 확인', '재료 승인', '매층 400↑', '틈 내화충전', '감리 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="80" width="220" height="24" class="conc"/><rect x="40" y="200" width="220" height="24" class="conc"/>' +
    '<rect x="260" y="30" width="24" height="230" class="bx2"/>' +
    '<rect x="260" y="72" width="24" height="40" class="rf"/><rect x="260" y="192" width="24" height="40" class="rf"/>' +
    '<line x1="464" y1="275" x2="464" y2="236" class="ar"/>' +
    '<text x="300" y="40" class="s2">외벽 단열·마감</text>' +
    '<text x="300" y="96" class="n">①</text><text x="322" y="96" class="r">방지재료 400mm↑</text>' +
    '<text x="322" y="118" class="s2">(슬래브 포함·매 층)</text>' +
    '<text x="150" y="97" text-anchor="middle">슬래브</text>' +
    '<text x="300" y="170" class="s2">불연재 (미네랄울 등)</text>' +
    '<text x="316" y="256" class="n">③</text><text x="338" y="256" class="r">화염 상승 차단</text>' +
    '<text x="18" y="262" class="n">②</text><text x="40" y="262" class="s2">커튼월 틈 = 내화충전</text>' +
    '</svg>',
  read: '①매 층 슬래브 끝 외벽에 방지재료 400mm↑ → ②커튼월 틈 내화충전 → ③화염 상승 차단',
  heads: [
    { h: '구성·기준', k: ['매 층 {{400mm}}↑', '불연재료', '[[내화충전구조]]'] },
    { h: '유의사항', k: ['틈 없이 연속', 'Anchor 고정', '접착면 공극 방지'] },
    { h: '개선방안', k: ['마감재 불연화', '[[실물모형시험]]'] }
  ],
  code: '매층·400·불연·충전 → “층사불충”'
},
200: {
  one: '[[부실]] = 시공 중 기준 위반([[원인]], 벌점) / [[하자]] = 준공 후 결함([[결과]], 보수)',
  flow: ['기준 정립', '부실 차단', '준공', '하자 발현', '담보기간 보수'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="50" y="60" width="170" height="60" class="bx2"/><rect x="260" y="60" width="190" height="60" class="bx3"/>' +
    '<line x1="40" y1="150" x2="450" y2="150" class="ar"/>' +
    '<line x1="240" y1="135" x2="240" y2="165" class="ln2"/>' +
    '<text x="58" y="88" class="n">①</text><text x="140" y="88" text-anchor="middle" class="t">부실 = 원인</text>' +
    '<text x="135" y="110" text-anchor="middle" class="s2">기준 위반 → 벌점</text>' +
    '<text x="268" y="88" class="n">③</text><text x="360" y="88" text-anchor="middle" class="t">하자 = 결과</text>' +
    '<text x="355" y="110" text-anchor="middle" class="s2">균열·누수 → 보수</text>' +
    '<text x="140" y="180" text-anchor="middle">시공 중</text>' +
    '<text x="240" y="190" text-anchor="middle" class="b">준공</text><text x="232" y="218" class="n">②</text>' +
    '<text x="350" y="180" text-anchor="middle" class="r">하자담보 2·3·5·10년</text>' +
    '</svg>',
  read: '①시공 중 기준 위반 = 부실(원인·벌점) → ②준공 → ③이후 드러난 결함 = 하자(결과·보수)',
  heads: [
    { h: '구분', k: ['부실: [[원인 행위]]', '하자: [[결과(현상)]]', '담보 {{2·3·5·10년}}'] },
    { h: '관리 유의사항', k: ['설계도서 준수', '검측·자재검수', '원인 규명·기록'] },
    { h: '개선방안', k: ['CQI 이력화', 'BIM 하자 DB'] }
  ],
  code: '부원벌 하결보 (부실=원인·벌점, 하자=결과·보수)'
},
201: {
  one: '[[CM]]이 발주자 대신 [[기획~사후관리]] 전 단계의 공정·원가·품질·안전을 [[통합관리]]',
  flow: ['타당성·VE', '발주 관리', '시공 관리', '유지관리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="60" width="440" height="40" class="bx3"/>' +
    '<rect x="20" y="150" width="80" height="40" class="bx2"/><rect x="110" y="150" width="80" height="40" class="bx2"/><rect x="200" y="150" width="80" height="40" class="bx2"/><rect x="290" y="150" width="80" height="40" class="bx2"/><rect x="380" y="150" width="80" height="40" class="bx2"/>' +
    '<line x1="60" y1="100" x2="60" y2="150" class="ld"/><line x1="150" y1="100" x2="150" y2="150" class="ld"/><line x1="240" y1="100" x2="240" y2="150" class="ld"/><line x1="330" y1="100" x2="330" y2="150" class="ld"/><line x1="420" y1="100" x2="420" y2="150" class="ld"/>' +
    '<text x="30" y="88" class="n">①</text><text x="250" y="86" text-anchor="middle" class="t">CM = 발주자 대리 통합관리</text>' +
    '<text x="20" y="140" class="n">②</text>' +
    '<text x="60" y="176" text-anchor="middle">기획</text>' +
    '<text x="150" y="176" text-anchor="middle">설계</text>' +
    '<text x="240" y="176" text-anchor="middle">발주</text>' +
    '<text x="330" y="176" text-anchor="middle">시공</text>' +
    '<text x="420" y="176" text-anchor="middle">사후</text>' +
    '<text x="144" y="232" class="n">③</text><text x="240" y="230" text-anchor="middle" class="r">공정·원가·품질·안전</text>' +
    '</svg>',
  read: '①CM이 발주자 대신 → ②기획~사후 전 단계에서 → ③공정·원가·품질·안전 통합관리',
  heads: [
    { h: '유형·업무', k: ['[[CM for Fee]]', '[[CM at Risk]]', '감독권한대행'] },
    { h: '유의사항', k: ['권한·책임 명확화', '승인절차 단축', '적정 대가·인력'] },
    { h: '개선방안', k: ['[[PMIS]]·BIM', '프리콘·ECI'] }
  ],
  code: '기설발시사 공원품안'
},
202: {
  one: '[[For Fee]] = 대리인·관리용역(위험 발주자) / [[At Risk]] = 시공자·[[GMP]] 보증(위험 CM)',
  flow: ['설계 참여', 'GMP 확정', '하도급 계약', '시공·정산'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="60" width="110" height="34" class="bx2"/><rect x="20" y="150" width="80" height="34" class="bx3"/><rect x="130" y="150" width="90" height="34" class="bx"/>' +
    '<line x1="100" y1="94" x2="60" y2="150" class="ln2 dash"/><line x1="130" y1="94" x2="175" y2="150" class="ln"/>' +
    '<rect x="300" y="40" width="110" height="34" class="bx2"/><rect x="300" y="110" width="110" height="34" class="bx3"/><rect x="300" y="180" width="110" height="34" class="bx"/>' +
    '<line x1="355" y1="74" x2="355" y2="110" class="ln"/><line x1="355" y1="144" x2="355" y2="180" class="ln"/>' +
    '<text x="115" y="83" text-anchor="middle">발주자</text>' +
    '<text x="60" y="173" text-anchor="middle" class="s2">CM 대리인</text>' +
    '<text x="175" y="173" text-anchor="middle" class="s2">시공자 (분할)</text>' +
    '<text x="20" y="230" class="n">①</text><text x="42" y="230" class="b">For Fee: 위험=발주자</text>' +
    '<text x="355" y="63" text-anchor="middle">발주자</text>' +
    '<text x="355" y="133" text-anchor="middle" class="s2">CM (시공자)</text>' +
    '<text x="355" y="203" text-anchor="middle" class="s2">하도급 직접계약</text>' +
    '<text x="248" y="252" class="n">②</text><text x="270" y="250" class="r">At Risk: GMP 보증</text>' +
    '</svg>',
  read: '①For Fee: CM은 대리인, 시공 위험은 발주자 → ②At Risk: CM이 시공자로 GMP 보증·하도급 직접',
  heads: [
    { h: '비교', k: ['Fee: 대리·Fee 수령', 'Risk: 시공자·GMP', 'Risk: 하도급 직접'] },
    { h: '유의사항', k: ['Fee: 위험 발주자', 'Risk: 이해상충 감시', '[[Open Book]]'] },
    { h: '개선방안', k: ['규모별 유형 선택', 'Shared Savings'] }
  ],
  code: 'Fee 대관발 / Risk 시지하 → “대관발 시지하”'
},
203: {
  one: '설계단계부터 [[발주자·설계자·시공자]]가 협업해 [[시공성]]·VE·BIM·[[GMP]]를 착공 전 확정',
  flow: ['BIM 간섭검토', '시공성·VE', 'GMP 계약', '시공 Lean'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="120" y1="60" x2="60" y2="150" class="ln"/><line x1="120" y1="60" x2="180" y2="150" class="ln"/><line x1="60" y1="150" x2="180" y2="150" class="ln"/>' +
    '<circle cx="120" cy="60" r="28" class="bx2"/><circle cx="60" cy="150" r="28" class="bx2"/><circle cx="180" cy="150" r="28" class="bx3"/>' +
    '<line x1="220" y1="110" x2="260" y2="110" class="ar"/>' +
    '<rect x="40" y="218" width="200" height="24" class="bx3"/><line x1="40" y1="230" x2="450" y2="230" class="ar"/><line x1="240" y1="215" x2="240" y2="245" class="ln2"/>' +
    '<text x="120" y="65" text-anchor="middle" class="s2">발주자</text>' +
    '<text x="60" y="155" text-anchor="middle" class="s2">설계자</text>' +
    '<text x="180" y="155" text-anchor="middle" class="s2">시공자</text>' +
    '<text x="120" y="124" text-anchor="middle" class="n">①</text>' +
    '<text x="270" y="72" class="n">②</text><text x="292" y="72">시공성 검토</text>' +
    '<text x="292" y="115">VE · BIM 간섭검토</text>' +
    '<text x="270" y="162" class="n">③</text><text x="292" y="160" class="r">GMP 사전 확정</text>' +
    '<text x="40" y="266" class="r">Pre-Con (착공 전)</text>' +
    '<text x="250" y="266" class="b">착공</text>' +
    '</svg>',
  read: '①발주자·설계자·시공자 조기 협업 → ②시공성·VE·BIM 검토 → ③착공 전 GMP 확정',
  heads: [
    { h: '구성·특징', k: ['[[ECI]] 조기참여', '시공성·VE·BIM', 'GMP 사전 확정'] },
    { h: '유의사항', k: ['참여범위·대가', '설계책임 경계', '정보공유·신뢰'] },
    { h: '개선방안', k: ['IPD·CM at Risk', 'BIM CDE 협업'] }
  ],
  code: '조기참여·시공성·VE·BIM·GMP → “조시 VBG”'
},
204: {
  one: '제거 못 하는 위험을 [[보완조치]]로 [[발생확률(P)]]·[[영향도(I)]]를 낮춰 [[잔존위험]] 관리',
  flow: ['위험 식별', 'P×I 평가', '전략 선정', 'P↓·I↓ 조치', '잔존 재평가'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="240" x2="300" y2="240" class="ln"/><line x1="60" y1="240" x2="60" y2="40" class="ln"/>' +
    '<path d="M60,90 C140,150 200,200 300,215" fill="none" class="gr dash"/>' +
    '<circle cx="240" cy="70" r="8" class="rf"/><circle cx="130" cy="190" r="8" class="bf"/>' +
    '<line x1="232" y1="80" x2="140" y2="180" class="ar"/>' +
    '<text x="68" y="34" class="s2">발생확률 P</text>' +
    '<text x="300" y="262" text-anchor="end" class="s2">영향도 I</text>' +
    '<text x="254" y="64" class="n">①</text>' +
    '<text x="320" y="50" class="t">Risk = P × I</text>' +
    '<text x="308" y="122" class="n">②</text><text x="330" y="120" class="r">보완조치 P↓·I↓</text>' +
    '<text x="330" y="160" class="s2">회피·감소·전가·보유</text>' +
    '<text x="100" y="218" class="n">③</text>' +
    '<text x="330" y="200" class="g">잔존위험 ≤ 허용</text>' +
    '</svg>',
  read: '①P×I 큰 위험(빨강) → ②보완조치로 P↓·I↓ → ③허용선 아래 잔존위험(파랑)으로 관리',
  heads: [
    { h: '개념', k: ['Risk = P × I', '확률·영향도 저감', '[[잔존위험]] 허용↓'] },
    { h: '적용 사례', k: ['동바리 수평재', '불티 방지포', '스마트 계측'] },
    { h: '개선방안', k: ['대안공법·Mock-up', '잔존위험 재평가'] }
  ],
  code: '회·감·전·보 중 감 = P↓·I↓ → “확영 낮춰 잔존 관리”'
},
205: {
  one: '필요 [[기능(F)]]을 최소 [[생애주기비용(C)]]으로 달성하는 [[V = F / C]] 가치향상 활동',
  flow: ['준비', '기능분석', '대안 제안', 'Follow-up'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="30" width="200" height="60" class="bx3"/>' +
    '<rect x="20" y="160" width="100" height="40" class="bx2"/><rect x="135" y="160" width="100" height="40" class="bx2"/><rect x="250" y="160" width="100" height="40" class="bx2"/><rect x="365" y="160" width="100" height="40" class="bx2"/>' +
    '<line x1="120" y1="180" x2="135" y2="180" class="ar"/><line x1="235" y1="180" x2="250" y2="180" class="ar"/><line x1="350" y1="180" x2="365" y2="180" class="ar"/>' +
    '<text x="240" y="68" text-anchor="middle" class="t">V = F / C</text>' +
    '<text x="240" y="115" text-anchor="middle" class="s2">가치 = 기능 / 생애주기비용</text>' +
    '<text x="70" y="152" text-anchor="middle" class="n">①</text><text x="185" y="152" text-anchor="middle" class="n">②</text><text x="300" y="152" text-anchor="middle" class="n">③</text>' +
    '<text x="70" y="186" text-anchor="middle">준비</text>' +
    '<text x="185" y="186" text-anchor="middle">분석 FAST</text>' +
    '<text x="300" y="186" text-anchor="middle">대안 제안</text>' +
    '<text x="415" y="186" text-anchor="middle">Follow-up</text>' +
    '<text x="20" y="250" class="r">설계VE 100억↑</text>' +
    '</svg>',
  read: '①준비 → ②FAST로 기능 분석 → ③기능 유지·비용 절감 대안 제안 → V=F/C 향상',
  heads: [
    { h: '원리·기준', k: ['V = F / C', '[[기능분석(FAST)]]', '설계VE {{100억}}↑'] },
    { h: '유의사항', k: ['Cost Cut 금지', '설계 초기 적용', 'LCC 검증 채택'] },
    { h: '개선방안', k: ['BIM 대안 비교', '시공VE 인센티브'] }
  ],
  code: 'V=F/C · 준·분·개·실 → “가기비 준분개실”'
},
206: {
  one: '[[LCC = C1 + C2]](초기건설비+유지관리비)를 [[현재가치]]로 환산해 [[최적점]] 대안 선정',
  flow: ['대안 설정', 'C1·C2 산정', '현재가치 환산', '민감도 분석', '최적점 선정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="240" x2="440" y2="240" class="ln"/><line x1="60" y1="240" x2="60" y2="30" class="ln"/>' +
    '<path d="M80,220 C200,200 320,140 420,60" fill="none" class="bl"/>' +
    '<path d="M80,60 C180,140 300,200 420,220" fill="none" class="gr"/>' +
    '<path d="M80,40 C180,150 300,150 420,40" fill="none" class="rd"/>' +
    '<line x1="250" y1="122" x2="250" y2="240" class="ln2 dash"/><circle cx="250" cy="122" r="5" class="rf"/>' +
    '<text x="20" y="24" class="s2">비용</text>' +
    '<text x="440" y="262" text-anchor="end" class="s2">성능 →</text>' +
    '<text x="250" y="105" text-anchor="middle" class="r">LCC 총비용</text>' +
    '<text x="320" y="150" class="n">①</text><text x="440" y="150" text-anchor="end" class="bl">C1 초기건설비</text>' +
    '<text x="320" y="205" class="n">②</text><text x="440" y="205" text-anchor="end" class="g">C2 유지관리비</text>' +
    '<text x="258" y="144" class="n">③</text>' +
    '<text x="250" y="262" text-anchor="middle" class="r">최적점</text>' +
    '<text x="70" y="262" class="s2">현재가치 환산 (할인율)</text>' +
    '</svg>',
  read: '성능↑일수록 ①초기건설비 C1 증가 ②유지관리비 C2 감소 → ③합계 LCC 최저 = 최적점',
  heads: [
    { h: '구성·원리', k: ['LCC = C1 + C2', '[[현재가치]] 환산', 'C1·C2 상충→최적점'] },
    { h: '유의사항', k: ['유지관리 Data', '할인율 민감도', '최저가 낙찰 지양'] },
    { h: '개선방안', k: ['BIM·FM Data', 'VE·LCA 연계'] }
  ],
  code: 'LCC = 초(C1)+유(C2) → 현재가치 → 최적점 → “초유 현최”'
}
});
