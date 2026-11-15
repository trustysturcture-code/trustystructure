window.D1 = Object.assign(window.D1 || {}, {
139: {
  tag: '줄눈·기준·시공',
  def: '건조수축·온도변화 균열을 미리 정한 [[단면 결손]]부로 [[균열 유도]]하는 줄눈으로, 결손 깊이는 일반 벽 [[벽두께]]의 {{1/5 이상}}, 매스는 결손율 {{35% 이상}}',
  wwh: ['단면결손 유도줄눈', '불규칙 균열 방지', '깊이 1/5↑·실링'],
  figT: 'Control Joint 단면결손 원리 및 설치위치',
  svg: '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="20" class="b">[벽 단면 — 단면결손 기준]</text>' +
    '<rect x="40" y="40" width="370" height="50" class="conc"/>' +
    '<line x1="32" y1="40" x2="32" y2="90" class="ln2"/><line x1="27" y1="40" x2="37" y2="40" class="ln2"/><line x1="27" y1="90" x2="37" y2="90" class="ln2"/><text x="20" y="69" class="s">t</text>' +
    '<path d="M112,40 L120,52 L128,40 Z" class="bx3"/><path d="M112,90 L120,76 L128,90 Z" class="bx3"/><line x1="120" y1="52" x2="120" y2="76" class="rd dash"/>' +
    '<path d="M282,40 L290,52 L298,40 Z" class="bx3"/><circle cx="290" cy="65" r="7" class="bx2"/><path d="M282,90 L290,76 L298,90 Z" class="bx3"/><line x1="290" y1="52" x2="290" y2="58" class="rd dash"/><line x1="290" y1="72" x2="290" y2="76" class="rd dash"/>' +
    '<text x="120" y="106" text-anchor="middle" class="r">t1+t2 ≥ t/5</text><text x="290" y="106" text-anchor="middle" class="r">t1+t2+t3 ≥ t/5</text>' +
    '<line x1="126" y1="45" x2="175" y2="26" class="ld"/><circle cx="175" cy="26" r="2" class="dotf"/><text x="179" y="30" class="s">V홈(줄눈대) 결손</text>' +
    '<line x1="296" y1="62" x2="340" y2="26" class="ld"/><circle cx="340" cy="26" r="2" class="dotf"/><text x="344" y="30" class="s">연질 Pipe(유도재)</text>' +
    '<line x1="120" y1="64" x2="180" y2="120" class="ld"/><circle cx="180" cy="120" r="2" class="dotf"/><text x="184" y="124" class="bl">유도 균열(결손부)</text>' +
    '<line x1="410" y1="50" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 깊이 벽두께 1/5↑</text>' +
    '<line x1="410" y1="80" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k3">③ 매스 35%↑·간격 4~5m</text>' +
    '<line x1="297" y1="66" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="446" y="84" class="k5">⑤ 유도재(연질Pipe) 매립</text>' +
    '<line x1="300" y1="90" x2="440" y2="100" class="ld"/><circle cx="440" cy="100" r="2" class="dotf"/><text x="446" y="104" class="k4">④ 줄눈부 철근피복 확보</text>' +
    '<text x="20" y="146" class="b">[벽 입면 — 설치위치]</text>' +
    '<rect x="40" y="156" width="370" height="100" class="bx"/>' +
    '<rect x="100" y="180" width="55" height="40" class="bx2"/><text x="127" y="205" text-anchor="middle" class="s">창</text>' +
    '<rect x="250" y="190" width="46" height="66" class="bx2"/><text x="273" y="228" text-anchor="middle" class="s">문</text>' +
    '<line x1="90" y1="156" x2="90" y2="256" class="rd dash"/><line x1="165" y1="156" x2="165" y2="256" class="rd dash"/><line x1="240" y1="156" x2="240" y2="256" class="rd dash"/><line x1="306" y1="156" x2="306" y2="256" class="rd dash"/><line x1="372" y1="156" x2="372" y2="256" class="rd dash"/>' +
    '<line x1="165" y1="170" x2="200" y2="142" class="ld"/><circle cx="200" cy="142" r="2" class="dotf"/><text x="204" y="146" class="r">개구부 양측 수직줄눈</text>' +
    '<line x1="372" y1="205" x2="342" y2="186" class="ld"/><circle cx="342" cy="186" r="2" class="dotf"/><text x="313" y="176" class="s">장대부 간격</text>' +
    '<line x1="372" y1="166" x2="440" y2="160" class="ld"/><circle cx="440" cy="160" r="2" class="dotf"/><text x="446" y="164" class="k3">③ 개구부·변화부·장대부</text>' +
    '<line x1="306" y1="236" x2="440" y2="184" class="ld"/><circle cx="440" cy="184" r="2" class="dotf"/><text x="446" y="188" class="k4">④ 줄눈대 수직·수평 고정</text>' +
    '<line x1="410" y1="246" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="446" y="212" class="k4">④ 실링 연속·외벽색 유사</text>' +
    '<text x="446" y="236" class="k5">⑤ 온도응력 해석 간격</text>' +
    '<rect x="20" y="272" width="92" height="24" class="bx"/><text x="66" y="288" text-anchor="middle" class="s">수축·온도응력</text>' +
    '<rect x="126" y="272" width="92" height="24" class="bx"/><text x="172" y="288" text-anchor="middle" class="s">결손부 응력집중</text>' +
    '<rect x="232" y="272" width="92" height="24" class="bx"/><text x="278" y="288" text-anchor="middle" class="s">줄눈부 균열유도</text>' +
    '<rect x="338" y="272" width="92" height="24" class="bx3"/><text x="384" y="288" text-anchor="middle" class="s">실링 → 방수</text>' +
    '<line x1="112" y1="284" x2="126" y2="284" class="ar"/><line x1="218" y1="284" x2="232" y2="284" class="ar"/><line x1="324" y1="284" x2="338" y2="284" class="ar"/>' +
    '</svg>',
  subs: [
    { h: '설치기준·위치', pts: ['줄눈 깊이 [[벽두께 1/5 이상]]', '매스 [[단면 결손율 35% 이상]]·간격 {{4~5m}}', '[[개구부 주위]]·단면변화부·장대부'] },
    { h: '시공 시 유의사항', pts: ['줄눈부 철근 피복두께 확보', '줄눈대 수직·수평 선형 고정', '[[코킹(실링)]] 연속·외벽색 유사'] },
    { h: '개선방안', pts: ['균열유도재(연질 Pipe) 매립', '온도응력 해석으로 줄눈 간격 최적화'] }
  ],
  msg: '단면을 1/5 이상 결손시켜 균열을 정해진 줄눈에 모으고, 실링으로 방수 마감',
  rel: ['Expansion Joint', 'Delay Joint', 'Construction Joint', 'Cold Joint', '균열유도재']
},
140: {
  tag: '줄눈·공법·시공',
  def: '장스팬 구조물에서 {{600~900mm}} 폭의 [[Shrinkage Strip]]을 남기고 양측 타설 후 [[초기 건조수축]]이 진행된 약 {{4주 후}} 채워 일체화하는 [[지연줄눈]]',
  wwh: ['후타설 Strip', '초기수축 구속 해소', '4주 후 일체화'],
  figT: 'Delay Joint 시공방법 및 건조수축 원리',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="20" class="b">[Delay Joint 단면]</text>' +
    '<rect x="30" y="50" width="150" height="40" class="conc"/><rect x="250" y="50" width="160" height="40" class="conc"/><rect x="180" y="50" width="70" height="40" class="bx3"/>' +
    '<line x1="40" y1="58" x2="225" y2="58" class="ln"/><line x1="205" y1="66" x2="400" y2="66" class="ln"/>' +
    '<line x1="180" y1="50" x2="180" y2="90" class="rd"/><line x1="250" y1="50" x2="250" y2="90" class="rd"/>' +
    '<line x1="180" y1="38" x2="250" y2="38" class="ln2"/><line x1="180" y1="33" x2="180" y2="44" class="ln2"/><line x1="250" y1="33" x2="250" y2="44" class="ln2"/><text x="215" y="32" text-anchor="middle" class="r">600~900mm</text>' +
    '<text x="105" y="86" text-anchor="middle" class="b">A 구간</text><text x="330" y="86" text-anchor="middle" class="b">B 구간</text>' +
    '<line x1="215" y1="86" x2="240" y2="112" class="ld"/><circle cx="240" cy="112" r="2" class="dotf"/><text x="244" y="116" class="s">Shrinkage Strip(후타설)</text>' +
    '<line x1="215" y1="62" x2="150" y2="112" class="ld"/><circle cx="150" cy="112" r="2" class="dotf"/><text x="146" y="116" text-anchor="end" class="bl">Lap Bar 철근 연결</text>' +
    '<line x1="250" y1="44" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 폭 600~900mm</text>' +
    '<line x1="180" y1="74" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k4">④ Metal Lath 막음·청소</text>' +
    '<line x1="240" y1="66" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="446" y="84" class="k4">④ Lap Bar 보양·이음길이</text>' +
    '<line x1="230" y1="90" x2="440" y2="100" class="ld"/><circle cx="440" cy="100" r="2" class="dotf"/><text x="446" y="104" class="k4">④ Strip 하부 동바리 존치</text>' +
    '<line x1="50" y1="290" x2="410" y2="290" class="ar"/><line x1="50" y1="290" x2="50" y2="140" class="ar"/>' +
    '<text x="56" y="142" class="s">건조수축량</text><text x="400" y="306" text-anchor="end" class="s">재령</text>' +
    '<path d="M50,290 C90,210 130,192 150,188 C230,174 320,160 400,155" fill="none" class="bl"/>' +
    '<line x1="150" y1="188" x2="150" y2="290" class="rd dash"/><line x1="50" y1="188" x2="150" y2="188" class="ln2 dash"/><line x1="50" y1="155" x2="400" y2="155" class="ln2 dash"/>' +
    '<text x="150" y="306" text-anchor="middle" class="r">4주</text><text x="46" y="192" text-anchor="end" class="r">40%</text><text x="46" y="159" text-anchor="end" class="s">100%</text>' +
    '<line x1="100" y1="212" x2="164" y2="236" class="ld"/><circle cx="164" cy="236" r="2" class="dotf"/><text x="168" y="240" class="s">초기 급속 수축(1개월 약 40%)</text>' +
    '<line x1="150" y1="188" x2="196" y2="168" class="ld"/><circle cx="196" cy="168" r="2" class="dotf"/><text x="200" y="172" class="r">Strip 타설 시점(약 4주)</text>' +
    '<line x1="330" y1="160" x2="320" y2="200" class="ld"/><circle cx="320" cy="200" r="2" class="dotf"/><text x="300" y="214" class="s">이후 수축 완만</text>' +
    '<line x1="400" y1="155" x2="440" y2="176" class="ld"/><circle cx="440" cy="176" r="2" class="dotf"/><text x="446" y="180" class="k3">③ 4주 후 타설(수축 40%)</text>' +
    '<text x="446" y="200" class="k3">③ 신축줄눈(E.J) 대체</text>' +
    '<text x="446" y="240" class="k5">⑤ 팽창재·수축저감제</text><text x="446" y="260" class="k5">⑤ BIM 타설시기·동바리</text>' +
    '<rect x="20" y="318" width="92" height="24" class="bx"/><text x="66" y="334" text-anchor="middle" class="s">A·B 선타설</text>' +
    '<rect x="126" y="318" width="92" height="24" class="bx"/><text x="172" y="334" text-anchor="middle" class="s">Lap Bar 유지</text>' +
    '<rect x="232" y="318" width="92" height="24" class="bx"/><text x="278" y="334" text-anchor="middle" class="s">약 4주 후 타설</text>' +
    '<rect x="338" y="318" width="92" height="24" class="bx3"/><text x="384" y="334" text-anchor="middle" class="s">Strip 일체화</text>' +
    '<line x1="112" y1="330" x2="126" y2="330" class="ar"/><line x1="218" y1="330" x2="232" y2="330" class="ar"/><line x1="324" y1="330" x2="338" y2="330" class="ar"/>' +
    '</svg>',
  subs: [
    { h: '설치기준·특징', pts: ['[[Shrinkage Strip]] 폭 {{600~900mm}}', '약 {{4주 후}} 타설(1개월 내 수축 {{약 40%}})', '[[신축줄눈 대체]](E.J 생략)'] },
    { h: '시공 시 유의사항', pts: ['Metal Lath 막음·이음부 청소', '[[Lap Bar]] 보양·이음길이 확보', 'Strip 하부 동바리 존치'] },
    { h: '개선방안', pts: ['팽창재·수축저감제 사용', 'BIM 공정에 타설시기·동바리 반영'] }
  ],
  msg: '수축이 40% 진행된 뒤 메운다 — 신축줄눈 없이 장스팬 균열 저감',
  rel: ['Expansion Joint', 'Control Joint', 'Construction Joint', 'Pour Strip', '팽창재']
},
141: {
  tag: '양생·기준·관리',
  def: '타설 후 콘크리트를 습윤 상태로 유지해야 하는 최소기간으로, [[시멘트 종류]]·[[일평균기온]]별로 정하며 15℃ 이상에서 보통 {{5일}}·혼합 {{7일}}·조강 {{3일}} 이상',
  wwh: ['습윤 유지 최소기간', '초기건조·균열 방지', '살수·습포·막양생'],
  figT: '시멘트 종류·기온별 습윤양생기간 비교',
  svg: '<svg viewBox="0 0 640 345" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="56" y="36" class="s">습윤양생기간(일)</text>' +
    '<line x1="50" y1="250" x2="410" y2="250" class="ln"/><line x1="50" y1="250" x2="50" y2="40" class="ar"/>' +
    '<line x1="380" y1="50" x2="110" y2="50" class="ar"/><text x="245" y="44" text-anchor="middle" class="r">저온·혼합일수록 기간 증가</text>' +
    '<rect x="78" y="70" width="20" height="180" class="bx3"/><rect x="100" y="115" width="20" height="135" class="bx"/><rect x="122" y="175" width="20" height="75" class="bx2"/>' +
    '<rect x="198" y="115" width="20" height="135" class="bx3"/><rect x="220" y="145" width="20" height="105" class="bx"/><rect x="242" y="190" width="20" height="60" class="bx2"/>' +
    '<rect x="318" y="145" width="20" height="105" class="bx3"/><rect x="340" y="175" width="20" height="75" class="bx"/><rect x="362" y="205" width="20" height="45" class="bx2"/>' +
    '<text x="88" y="66" text-anchor="middle" class="r">12</text><text x="110" y="111" text-anchor="middle" class="r">9</text><text x="132" y="171" text-anchor="middle" class="r">5</text>' +
    '<text x="208" y="111" text-anchor="middle" class="r">9</text><text x="230" y="141" text-anchor="middle" class="r">7</text><text x="252" y="186" text-anchor="middle" class="r">4</text>' +
    '<text x="328" y="141" text-anchor="middle" class="r">7</text><text x="350" y="171" text-anchor="middle" class="r">5</text><text x="372" y="201" text-anchor="middle" class="r">3</text>' +
    '<text x="110" y="268" text-anchor="middle" class="b">5℃ 이상</text><text x="230" y="268" text-anchor="middle" class="b">10℃ 이상</text><text x="350" y="268" text-anchor="middle" class="b">15℃ 이상</text>' +
    '<line x1="98" y1="74" x2="170" y2="84" class="ld"/><circle cx="170" cy="84" r="2" class="dotf"/><text x="174" y="88" class="s">최장 12일(5℃·혼합)</text>' +
    '<rect x="446" y="31" width="12" height="10" class="bx3"/><text x="462" y="40" class="s">혼합(2종)</text><rect x="516" y="31" width="12" height="10" class="bx"/><text x="532" y="40" class="s">보통</text><rect x="566" y="31" width="12" height="10" class="bx2"/><text x="582" y="40" class="s">조강</text>' +
    '<line x1="338" y1="145" x2="440" y2="145" class="ld"/><circle cx="440" cy="145" r="2" class="dotf"/><text x="446" y="149" class="k3">③ 혼합(2종) 7일</text>' +
    '<line x1="360" y1="175" x2="440" y2="175" class="ld"/><circle cx="440" cy="175" r="2" class="dotf"/><text x="446" y="179" class="k3">③ 보통포틀랜드 5일</text>' +
    '<line x1="382" y1="205" x2="440" y2="205" class="ld"/><circle cx="440" cy="205" r="2" class="dotf"/><text x="446" y="209" class="k3">③ 조강 3일</text>' +
    '<path d="M36,300 L414,300" class="bl"/><rect x="40" y="306" width="370" height="28" class="conc"/>' +
    '<circle cx="70" cy="288" r="2" class="bf"/><circle cx="90" cy="292" r="2" class="bf"/><circle cx="110" cy="286" r="2" class="bf"/><circle cx="130" cy="291" r="2" class="bf"/>' +
    '<line x1="200" y1="300" x2="230" y2="284" class="ld"/><circle cx="230" cy="284" r="2" class="dotf"/><text x="234" y="288" class="s">양생 Sheet·습포 덮기</text>' +
    '<line x1="414" y1="300" x2="440" y2="232" class="ld"/><circle cx="440" cy="232" r="2" class="dotf"/><text x="446" y="236" class="k4">④ 경화 전 증발 방지(시트)</text>' +
    '<line x1="410" y1="314" x2="440" y2="252" class="ld"/><circle cx="440" cy="252" r="2" class="dotf"/><text x="446" y="256" class="k4">④ 경화 후 살수·담수 유지</text>' +
    '<text x="446" y="276" class="k4">④ 진동·충격·과하중 금지</text>' +
    '<line x1="410" y1="326" x2="440" y2="300" class="ld"/><circle cx="440" cy="300" r="2" class="dotf"/><text x="446" y="304" class="k5">⑤ 자동살수·보습 양생포</text>' +
    '<text x="446" y="324" class="k5">⑤ 온습도 센서 이력관리</text>' +
    '</svg>',
  subs: [
    { h: '습윤양생기간 기준(15℃ 이상)', pts: ['[[보통포틀랜드 5일]]', '[[혼합시멘트 7일]](고로슬래그·FA 2종)', '[[조강 3일]]'] },
    { h: '시공 시 유의사항', pts: ['경화 전 [[수분 증발 방지]](시트 덮기)', '경화 후 [[살수·습포]]·담수 유지', '양생 중 진동·충격·과하중 금지'] },
    { h: '개선방안', pts: ['자동 살수·보습 양생포', '무선 온·습도 센서 양생 이력관리'] }
  ],
  msg: '조강 < 보통 < 혼합, 기온이 낮을수록 길게 — 수화가 진행되는 동안 젖은 상태 유지',
  rel: ['봉함양생', '막양생', '소성수축균열', '적산온도', '서중콘크리트']
},
142: {
  tag: '양생·공법·관리',
  def: '타설 후 표면을 [[비닐 Sheet]] 또는 [[양생제 피막]]으로 외기와 차단하여 [[수분 증발 억제]]로 수화를 지속시키는 양생으로, 피막은 블리딩 종료 후 {{2회}} 교차 도포',
  wwh: ['표면 밀봉 차단', '수분증발·균열 방지', 'Sheet·피막 2회'],
  figT: '봉함양생 종류(Sheet·피막) 및 수분손실 원리',
  svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="24" class="b">[비닐 Sheet 양생]</text>' +
    '<rect x="30" y="120" width="180" height="40" class="conc"/>' +
    '<path d="M26,114 L130,114" class="bl"/><path d="M110,110 L214,110" class="bl"/>' +
    '<rect x="24" y="104" width="12" height="8" class="bx2"/><rect x="200" y="100" width="12" height="8" class="bx2"/>' +
    '<line x1="70" y1="152" x2="70" y2="124" class="ar"/><line x1="170" y1="152" x2="170" y2="124" class="ar"/>' +
    '<line x1="120" y1="112" x2="140" y2="80" class="ld"/><circle cx="140" cy="80" r="2" class="dotf"/><text x="144" y="84" class="s">겹침부 밀착</text>' +
    '<line x1="30" y1="104" x2="50" y2="70" class="ld"/><circle cx="50" cy="70" r="2" class="dotf"/><text x="40" y="64" class="s">단부 고정</text>' +
    '<line x1="70" y1="140" x2="50" y2="186" class="ld"/><circle cx="50" cy="186" r="2" class="dotf"/><text x="30" y="200" class="s">물리적 수분 차단</text>' +
    '<text x="235" y="24" class="b">[피막(막)양생]</text>' +
    '<rect x="235" y="120" width="180" height="40" class="conc"/><rect x="235" y="114" width="180" height="6" class="bx3"/>' +
    '<rect x="310" y="48" width="20" height="20" class="bx2"/><line x1="320" y1="68" x2="290" y2="112" class="ln2 dash"/><line x1="320" y1="68" x2="350" y2="112" class="ln2 dash"/><line x1="320" y1="68" x2="320" y2="112" class="ln2 dash"/>' +
    '<line x1="310" y1="56" x2="285" y2="42" class="ld"/><circle cx="285" cy="42" r="2" class="dotf"/><text x="281" y="46" text-anchor="end" class="r">분무 2회 교차</text>' +
    '<line x1="260" y1="117" x2="250" y2="186" class="ld"/><circle cx="250" cy="186" r="2" class="dotf"/><text x="240" y="200" class="s">화학적 수분 차단 피막</text>' +
    '<text x="446" y="44" class="k3">③ Sheet 물리적·평탄면</text>' +
    '<line x1="410" y1="117" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k3">③ 피막 화학적·연직면</text>' +
    '<text x="446" y="84" class="k3">③ 살수곤란 대면적 유리</text>' +
    '<line x1="330" y1="60" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="446" y="112" class="k4">④ 블리딩 종료 후 살포</text>' +
    '<line x1="350" y1="114" x2="440" y2="128" class="ld"/><circle cx="440" cy="128" r="2" class="dotf"/><text x="446" y="132" class="k4">④ 2회 교차 균일 피막</text>' +
    '<text x="446" y="152" class="k4">④ Sheet 겹침·찢김 보수</text>' +
    '<line x1="415" y1="150" x2="440" y2="168" class="ld"/><circle cx="440" cy="168" r="2" class="dotf"/><text x="446" y="172" class="k4">④ 후속마감 시 피막 제거</text>' +
    '<rect x="20" y="222" width="92" height="24" class="bx"/><text x="66" y="238" text-anchor="middle" class="s">타설·마감</text>' +
    '<rect x="126" y="222" width="92" height="24" class="bx"/><text x="172" y="238" text-anchor="middle" class="s">블리딩 종료</text>' +
    '<rect x="232" y="222" width="92" height="24" class="bx"/><text x="278" y="238" text-anchor="middle" class="s">양생제 2회 교차</text>' +
    '<rect x="338" y="222" width="92" height="24" class="bx3"/><text x="384" y="238" text-anchor="middle" class="s">봉함 5일↑ 유지</text>' +
    '<line x1="112" y1="234" x2="126" y2="234" class="ar"/><line x1="218" y1="234" x2="232" y2="234" class="ar"/><line x1="324" y1="234" x2="338" y2="234" class="ar"/>' +
    '<line x1="384" y1="246" x2="440" y2="256" class="ld"/><circle cx="440" cy="256" r="2" class="dotf"/><text x="446" y="260" class="k5">⑤ 보습 양생포(흡수+차단)</text>' +
    '<line x1="50" y1="360" x2="410" y2="360" class="ar"/><line x1="50" y1="360" x2="50" y2="268" class="ar"/>' +
    '<text x="56" y="272" class="s">수분 손실량</text><text x="406" y="376" text-anchor="end" class="s">재령</text>' +
    '<path d="M50,360 C80,300 140,288 400,282" fill="none" class="rd"/><path d="M50,360 C150,352 300,346 400,344" fill="none" class="bl"/>' +
    '<text x="230" y="278" class="r">무양생: 급속 증발·소성수축균열</text>' +
    '<text x="230" y="336" class="bl">봉함: 수화작용 지속</text>' +
    '<line x1="400" y1="282" x2="440" y2="276" class="ld"/><circle cx="440" cy="276" r="2" class="dotf"/><text x="446" y="280" class="k5">⑤ 증발률 측정·착수 판단</text>' +
    '</svg>',
  subs: [
    { h: '종류·특징', pts: ['[[비닐 Sheet 양생]] — 물리적 차단·Slab 평탄면', '[[피막(막)양생]] — 화학적 차단·연직면', '살수 곤란 대면적에 유리'] },
    { h: '시공 시 유의사항', pts: ['[[블리딩 종료 후]] 살포', '[[2회 교차 도포]]로 균일 피막', 'Sheet 겹침 밀착·찢김 즉시 보수', '후속마감 부위 피막 제거·부착 확인'] },
    { h: '개선방안', pts: ['보습 양생포(흡수층+차단층)', '수분 증발률 측정으로 양생 착수시점 판단'] }
  ],
  msg: '덮어서 가둔 수분이 수화를 이어간다 — 살수 곤란부의 습윤양생 대체',
  rel: ['습윤양생', '막양생제', '소성수축균열', '서중콘크리트', '보습 양생포']
},
143: {
  tag: '특수콘·기준·관리',
  def: '타설일 [[일평균기온]] {{4℃ 이하}}가 예상되어 응결지연·[[초기동해]] 우려가 있을 때 시공하는 콘크리트로, 타설온도 {{5~20℃}}, 압축강도 {{5MPa}}까지 보온양생',
  wwh: ['일평균 4℃ 이하', '초기동해 방지', '가열·보온양생'],
  figT: '월별 기온과 한중콘크리트 적용범위·시공순서',
  svg: '<svg viewBox="0 0 640 305" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="56" y="34" class="s">기온(℃)</text>' +
    '<line x1="50" y1="210" x2="420" y2="210" class="ar"/><line x1="50" y1="210" x2="50" y2="30" class="ar"/>' +
    '<text x="46" y="94" text-anchor="end" class="s">20</text><text x="46" y="134" text-anchor="end" class="s">10</text><text x="46" y="174" text-anchor="end" class="s">0</text><text x="46" y="214" text-anchor="end" class="s">-10</text>' +
    '<rect x="50" y="154" width="75" height="56" class="bx3"/><rect x="383" y="154" width="37" height="56" class="bx3"/>' +
    '<text x="86" y="190" text-anchor="middle" class="b">한중</text><text x="401" y="190" text-anchor="middle" class="b">한중</text>' +
    '<line x1="50" y1="70" x2="420" y2="70" class="ln2 dash"/><line x1="50" y1="154" x2="420" y2="154" class="rd dash"/>' +
    '<polyline points="70,182 100,174 130,150 160,122 190,102 220,82 250,68 280,66 310,86 340,114 370,142 400,170" fill="none" class="bl"/>' +
    '<text x="70" y="226" text-anchor="middle" class="s">1월</text><text x="160" y="226" text-anchor="middle" class="s">4월</text><text x="250" y="226" text-anchor="middle" class="s">7월</text><text x="340" y="226" text-anchor="middle" class="s">10월</text><text x="400" y="226" text-anchor="middle" class="s">12월</text>' +
    '<text x="255" y="140" text-anchor="middle" class="b">보통 콘크리트</text>' +
    '<line x1="180" y1="154" x2="196" y2="170" class="ld"/><circle cx="196" cy="170" r="2" class="dotf"/><text x="200" y="174" class="r">일평균 4℃ 이하 = 한중</text>' +
    '<line x1="330" y1="70" x2="340" y2="50" class="ld"/><circle cx="340" cy="50" r="2" class="dotf"/><text x="344" y="54" class="s">25℃ 초과 = 서중</text>' +
    '<line x1="220" y1="82" x2="190" y2="60" class="ld"/><circle cx="190" cy="60" r="2" class="dotf"/><text x="186" y="64" text-anchor="end" class="s">월평균 기온 곡선</text>' +
    '<rect x="20" y="244" width="92" height="24" class="bx"/><text x="66" y="260" text-anchor="middle" class="s">AE·W/B 60%↓</text>' +
    '<rect x="126" y="244" width="92" height="24" class="bx"/><text x="172" y="260" text-anchor="middle" class="s">물·골재 가열</text>' +
    '<rect x="232" y="244" width="92" height="24" class="bx"/><text x="278" y="260" text-anchor="middle" class="s">타설 5~20℃</text>' +
    '<rect x="338" y="244" width="92" height="24" class="bx3"/><text x="384" y="260" text-anchor="middle" class="s">보온 5MPa까지</text>' +
    '<line x1="112" y1="256" x2="126" y2="256" class="ar"/><line x1="218" y1="256" x2="232" y2="256" class="ar"/><line x1="324" y1="256" x2="338" y2="256" class="ar"/>' +
    '<line x1="66" y1="268" x2="80" y2="288" class="ld"/><circle cx="80" cy="288" r="2" class="dotf"/><text x="84" y="292" class="s">AE제·AE감수제·조강시멘트</text>' +
    '<line x1="384" y1="268" x2="370" y2="288" class="ld"/><circle cx="370" cy="288" r="2" class="dotf"/><text x="366" y="292" text-anchor="end" class="s">현장양생 공시체 확인</text>' +
    '<line x1="420" y1="160" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 일평균 4℃↓ 적용</text>' +
    '<text x="446" y="64" class="k3">③ AE·W/B 60% 이하</text>' +
    '<line x1="300" y1="244" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="446" y="84" class="k3">③ 타설 5~20℃(최저10℃)</text>' +
    '<text x="446" y="104" class="k3">③ 5MPa까지 보온양생</text>' +
    '<text x="446" y="124" class="k3">③ 적산온도 M≥210°D·D</text>' +
    '<line x1="410" y1="196" x2="440" y2="150" class="ld"/><circle cx="440" cy="150" r="2" class="dotf"/><text x="446" y="154" class="k4">④ 초기동해 → 영구 강도손실</text>' +
    '<text x="446" y="174" class="k4">④ 시멘트 직접가열 금지</text>' +
    '<text x="446" y="194" class="k4">④ 국부가열·급랭 방지</text>' +
    '<line x1="430" y1="256" x2="440" y2="240" class="ld"/><circle cx="440" cy="240" r="2" class="dotf"/><text x="446" y="244" class="k5">⑤ 방동·내한제 사용</text>' +
    '<text x="446" y="264" class="k5">⑤ 무선센서·적산온도 관리</text>' +
    '</svg>',
  subs: [
    { h: '적용범위·기준', pts: ['[[일평균기온 4℃ 이하]] 적용', '[[AE콘크리트]]·[[W/B 60% 이하]]', '[[타설온도 5~20℃]](최저 {{10℃}})', '[[초기강도 5MPa]]까지 보온양생', '[[적산온도]] M ≥ {{210°D·D}}'] },
    { h: '시공 시 유의사항', pts: ['[[초기동해]] → 영구적 강도손실', '시멘트 직접가열 금지(물·골재 가열)', '국부가열·양생 후 급랭 방지'] },
    { h: '개선방안', pts: ['방동·내한제 사용', '무선 온도센서·적산온도 강도추정'] }
  ],
  msg: '4℃ 이하면 한중 — 5~20℃로 치고 5MPa까지 얼리지 않는다',
  rel: ['서중콘크리트', '적산온도', '초기동해', '방동제', '가열양생']
},
144: {
  tag: '양생·관리·계산',
  def: '콘크리트 강도가 양생온도와 시간의 함수라는 원리로 [[일평균 양생온도]]에 {{10℃}}를 더한 값과 재령의 곱을 누적한 {{M = Σ(θ+10)Δt}}(°D·D)로 [[압축강도 추정]]에 쓰는 값',
  wwh: ['온도×시간 누적', '양생온도별 강도추정', 'Σ(θ+10)Δt 산정'],
  figT: '적산온도 산정 원리 및 강도 추정곡선',
  svg: '<svg viewBox="0 0 640 345" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="56" y="28" class="s">양생온도(℃)</text>' +
    '<line x1="50" y1="150" x2="50" y2="34" class="ar"/><line x1="50" y1="120" x2="410" y2="120" class="ln2 dash"/>' +
    '<text x="46" y="154" text-anchor="end" class="s">-10</text><text x="46" y="124" text-anchor="end" class="s">0</text><text x="46" y="94" text-anchor="end" class="s">10</text>' +
    '<rect x="60" y="84" width="48" height="66" class="bx3"/><rect x="112" y="96" width="48" height="54" class="bx3"/><rect x="164" y="108" width="48" height="42" class="bx3"/><rect x="216" y="93" width="48" height="57" class="bx3"/><rect x="268" y="75" width="48" height="75" class="bx3"/><rect x="320" y="66" width="48" height="84" class="bx3"/>' +
    '<line x1="50" y1="150" x2="410" y2="150" class="rd"/>' +
    '<text x="160" y="166" text-anchor="middle" class="s">재령 Δt(일)</text>' +
    '<line x1="84" y1="84" x2="110" y2="52" class="ld"/><circle cx="110" cy="52" r="2" class="dotf"/><text x="114" y="56" class="bl">일평균 양생온도 θ</text>' +
    '<line x1="292" y1="100" x2="300" y2="40" class="ld"/><circle cx="300" cy="40" r="2" class="dotf"/><text x="304" y="44" class="b">(θ+10)·Δt 면적 누적</text>' +
    '<line x1="390" y1="150" x2="400" y2="160" class="ld"/><circle cx="400" cy="160" r="2" class="dotf"/><text x="396" y="174" text-anchor="end" class="r">기준온도 −10℃</text>' +
    '<text x="56" y="198" class="s">압축강도</text>' +
    '<line x1="50" y1="320" x2="420" y2="320" class="ar"/><line x1="50" y1="320" x2="50" y2="194" class="ar"/>' +
    '<path d="M50,320 C100,250 160,225 230,218 C300,212 360,208 410,206" fill="none" class="bl"/>' +
    '<line x1="110" y1="320" x2="110" y2="256" class="rd dash"/><text x="110" y="334" text-anchor="middle" class="r">210</text>' +
    '<line x1="260" y1="320" x2="260" y2="220" class="ar"/><line x1="256" y1="216" x2="56" y2="216" class="ar"/>' +
    '<text x="60" y="210" class="bl">추정 강도</text>' +
    '<text x="418" y="338" text-anchor="end" class="s">적산온도 M(°D·D)</text>' +
    '<line x1="110" y1="270" x2="140" y2="276" class="ld"/><circle cx="140" cy="276" r="2" class="dotf"/><text x="144" y="280" class="r">적용 하한 M≥210</text>' +
    '<line x1="260" y1="280" x2="280" y2="292" class="ld"/><circle cx="280" cy="292" r="2" class="dotf"/><text x="284" y="296" class="s">측정 M → 강도 추정</text>' +
    '<line x1="370" y1="208" x2="380" y2="236" class="ld"/><circle cx="380" cy="236" r="2" class="dotf"/><text x="330" y="250" class="s">강도–M 관계곡선</text>' +
    '<text x="450" y="40" class="bl">M = Σ(θ+10)Δt [°D·D]</text>' +
    '<line x1="410" y1="120" x2="440" y2="66" class="ld"/><circle cx="440" cy="66" r="2" class="dotf"/><text x="446" y="70" class="k4">④ 0℃ 이하 → 관계 불성립</text>' +
    '<line x1="368" y1="70" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="446" y="90" class="k4">④ 실측 양생온도로 산정</text>' +
    '<text x="446" y="110" class="k4">④ 가열양생 시 공시체 검증</text>' +
    '<text x="446" y="130" class="k4">④ 시멘트·W/B별 관계식</text>' +
    '<line x1="410" y1="206" x2="440" y2="192" class="ld"/><circle cx="440" cy="192" r="2" class="dotf"/><text x="446" y="196" class="k3">③ 압축강도 추정(비파괴)</text>' +
    '<text x="446" y="216" class="k3">③ 보온종료 5MPa 시점</text>' +
    '<line x1="330" y1="212" x2="440" y2="232" class="ld"/><circle cx="440" cy="232" r="2" class="dotf"/><text x="446" y="236" class="k3">③ 거푸집 해체시기 결정</text>' +
    '<text x="446" y="256" class="k3">③ 한중 배합 M≥210 보정</text>' +
    '<text x="446" y="288" class="k5">⑤ Maturity Sensor 실시간</text>' +
    '<text x="446" y="308" class="k5">⑤ BIM 연계 해체 자동판단</text>' +
    '</svg>',
  subs: [
    { h: '활용(M = Σ(θ+10)Δt)', pts: ['[[압축강도 추정]](비파괴)', '보온양생 종료 {{5MPa}} 시점 판단', '[[거푸집 해체시기]] 결정', '한중 배합강도 보정 M ≥ [[210°D·D]]'] },
    { h: '활용 시 유의사항', pts: ['0℃ 이하 동결 시 관계 불성립', '외기 아닌 실측 양생온도로 산정', '가열양생 시 현장양생 공시체 검증', '시멘트·W/B별 관계식 작성'] },
    { h: '개선방안', pts: ['Maturity Sensor 실시간 강도 모니터링', 'BIM 연계 해체·후속공정 자동판단'] }
  ],
  msg: '온도 이력을 쌓으면 강도가 보인다 — 동해 방지·해체시기 최적화·공기 단축',
  rel: ['한중콘크리트', '거푸집 존치기간', '조기강도 판정', 'Maturity Sensor', '가열양생']
},
145: {
  tag: '특수콘·기준·관리',
  def: '타설일 [[일평균기온]] {{25℃ 초과}}가 예상되어 [[슬럼프 저하]]·급격한 수분증발 우려가 있을 때 시공하는 콘크리트로, 타설온도 {{35℃ 이하}}, 비비기~타설 {{1.5시간}} 이내 관리',
  wwh: ['일평균 25℃ 초과', 'Cold Joint·균열 방지', '35℃↓·1.5h 관리'],
  figT: '월별 기온과 서중콘크리트 적용범위·시간관리',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="56" y="30" class="s">일평균기온(℃)</text>' +
    '<line x1="50" y1="176" x2="420" y2="176" class="ar"/><line x1="50" y1="176" x2="50" y2="30" class="ar"/>' +
    '<text x="46" y="94" text-anchor="end" class="s">20</text><text x="46" y="129" text-anchor="end" class="s">10</text><text x="46" y="164" text-anchor="end" class="s">0</text>' +
    '<rect x="246" y="56" width="38" height="16" class="bx3"/>' +
    '<line x1="50" y1="72" x2="420" y2="72" class="rd dash"/>' +
    '<polyline points="70,170 100,164 130,142 160,118 190,100 220,83 250,71 280,69 310,86 340,111 370,136 400,160" fill="none" class="bl"/>' +
    '<text x="70" y="192" text-anchor="middle" class="s">1월</text><text x="160" y="192" text-anchor="middle" class="s">4월</text><text x="250" y="192" text-anchor="middle" class="s">7월</text><text x="280" y="192" text-anchor="middle" class="s">8월</text><text x="340" y="192" text-anchor="middle" class="s">10월</text><text x="400" y="192" text-anchor="middle" class="s">12월</text>' +
    '<text x="250" y="140" text-anchor="middle" class="b">보통 콘크리트</text>' +
    '<line x1="150" y1="72" x2="130" y2="48" class="ld"/><circle cx="130" cy="48" r="2" class="dotf"/><text x="126" y="52" text-anchor="end" class="r">일평균 25℃ 초과</text>' +
    '<line x1="270" y1="62" x2="300" y2="40" class="ld"/><circle cx="300" cy="40" r="2" class="dotf"/><text x="304" y="44" class="r">서중콘크리트 7~8월</text>' +
    '<line x1="190" y1="100" x2="150" y2="84" class="ld"/><circle cx="150" cy="84" r="2" class="dotf"/><text x="146" y="88" text-anchor="end" class="s">일평균기온 곡선</text>' +
    '<line x1="60" y1="226" x2="260" y2="226" class="ln2"/><line x1="60" y1="221" x2="60" y2="231" class="ln2"/><line x1="260" y1="221" x2="260" y2="231" class="ln2"/><text x="160" y="222" text-anchor="middle" class="r">이어치기 2.0h 이내(25℃ 초과)</text>' +
    '<line x1="60" y1="244" x2="200" y2="244" class="ln2"/><line x1="60" y1="239" x2="60" y2="249" class="ln2"/><line x1="200" y1="239" x2="200" y2="249" class="ln2"/><text x="130" y="240" text-anchor="middle" class="r">1.5h 이내</text>' +
    '<line x1="50" y1="260" x2="420" y2="260" class="ar"/>' +
    '<line x1="60" y1="254" x2="60" y2="266" class="ln"/><line x1="200" y1="254" x2="200" y2="266" class="ln"/><line x1="260" y1="254" x2="260" y2="266" class="ln"/>' +
    '<rect x="290" y="250" width="120" height="20" class="bx3"/><text x="350" y="264" text-anchor="middle" class="s">습윤 24h → 5일↑</text>' +
    '<text x="60" y="280" text-anchor="middle" class="s">비비기</text><text x="200" y="280" text-anchor="middle" class="s">타설 종료</text><text x="260" y="280" text-anchor="middle" class="s">이어치기</text>' +
    '<line x1="60" y1="266" x2="74" y2="296" class="ld"/><circle cx="74" cy="296" r="2" class="dotf"/><text x="78" y="300" class="bl">지연형 감수제·냉각수</text>' +
    '<line x1="200" y1="266" x2="214" y2="296" class="ld"/><circle cx="214" cy="296" r="2" class="dotf"/><text x="218" y="300" class="s">펌프 배관 차양·젖은 천</text>' +
    '<line x1="380" y1="270" x2="390" y2="306" class="ld"/><circle cx="390" cy="306" r="2" class="dotf"/><text x="420" y="320" text-anchor="end" class="s">노출면 살수·양생포</text>' +
    '<line x1="420" y1="72" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 일평균 25℃ 초과 적용</text>' +
    '<line x1="280" y1="69" x2="440" y2="72" class="ld"/><circle cx="440" cy="72" r="2" class="dotf"/><text x="446" y="76" class="k4">④ 슬럼프 저하·Cold Joint</text>' +
    '<text x="446" y="96" class="k4">④ 소성수축균열·장기강도↓</text>' +
    '<text x="446" y="116" class="k4">④ 현장 가수 절대 금지</text>' +
    '<line x1="200" y1="254" x2="440" y2="212" class="ld"/><circle cx="440" cy="212" r="2" class="dotf"/><text x="446" y="216" class="k3">③ 타설온도 35℃ 이하</text>' +
    '<text x="446" y="236" class="k3">③ 비비기~타설 1.5h 이내</text>' +
    '<text x="446" y="256" class="k3">③ 이어치기 2.0h 이내</text>' +
    '<line x1="410" y1="262" x2="440" y2="272" class="ld"/><circle cx="440" cy="272" r="2" class="dotf"/><text x="446" y="276" class="k3">③ 24h 습윤·5일↑ 양생</text>' +
    '<text x="446" y="304" class="k5">⑤ Pre-cooling 냉각수·얼음</text>' +
    '<text x="446" y="324" class="k5">⑤ 야간 타설·온도 계측</text>' +
    '</svg>',
  subs: [
    { h: '적용범위·기준', pts: ['[[일평균기온 25℃ 초과]] 적용', '[[타설온도 35℃ 이하]]', '비비기~타설 [[1.5시간 이내]]', '이어치기 {{2.0시간}} 이내', '{{24시간}} 노출면 습윤·[[5일 이상 습윤양생]]'] },
    { h: '문제점·유의사항', pts: ['[[슬럼프 저하]]·[[Cold Joint]]', '소성수축균열·장기강도 저하', '현장 가수 절대 금지(유동화제 후첨가)'] },
    { h: '개선방안', pts: ['Pre-cooling(냉각수·얼음·액체질소)', '야간 타설·실시간 온도 계측'] }
  ],
  msg: '25℃ 넘으면 서중 — 식혀서 빨리 치고 24시간 적셔 둔다',
  rel: ['한중콘크리트', 'Cold Joint', '지연형 감수제', 'Pre-cooling', '소성수축균열']
},
146: {
  tag: '매스·기준·평가',
  def: '재령 t일의 [[쪼갬 인장강도]]를 수화열에 의한 [[최대 온도응력]]으로 나눈 값 {{Icr = fsp(t)/ft(t)}}으로, 클수록 [[균열발생확률]]이 낮다',
  wwh: ['인장강도/온도응력', '온도균열 정량평가', '1.5·1.2·0.7 목표'],
  figT: '온도균열지수와 균열발생확률 및 구속 형태',
  svg: '<svg viewBox="0 0 640 355" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="56" y="28" class="s">균열발생확률(%)</text>' +
    '<line x1="50" y1="210" x2="420" y2="210" class="ar"/><line x1="50" y1="210" x2="50" y2="30" class="ar"/>' +
    '<text x="46" y="44" text-anchor="end" class="s">100</text><text x="46" y="129" text-anchor="end" class="s">50</text><text x="46" y="205" text-anchor="end" class="s">5</text>' +
    '<text x="122" y="224" text-anchor="middle" class="s">0.7</text><text x="170" y="224" text-anchor="middle" class="s">1.0</text><text x="202" y="224" text-anchor="middle" class="s">1.2</text><text x="250" y="224" text-anchor="middle" class="s">1.5</text><text x="330" y="224" text-anchor="middle" class="s">2.0</text><text x="410" y="224" text-anchor="end" class="s">Icr</text>' +
    '<line x1="122" y1="40" x2="122" y2="210" class="rd dash"/><line x1="202" y1="40" x2="202" y2="210" class="rd dash"/><line x1="250" y1="40" x2="250" y2="210" class="rd dash"/>' +
    '<line x1="50" y1="125" x2="170" y2="125" class="ln2 dash"/><line x1="50" y1="201" x2="250" y2="201" class="ln2 dash"/>' +
    '<path d="M70,42 C120,45 140,100 170,125 C200,150 225,195 250,201 C290,206 350,208 405,209" fill="none" class="bl"/>' +
    '<circle cx="170" cy="125" r="3" class="rf"/><circle cx="250" cy="201" r="3" class="rf"/>' +
    '<text x="162" y="66" text-anchor="middle" class="s">유해균열 제한</text><text x="226" y="66" text-anchor="middle" class="s">제한</text><text x="335" y="66" text-anchor="middle" class="g">균열 방지</text>' +
    '<text x="270" y="86" class="bl">Icr = fsp(t) / ft(t)</text><text x="270" y="104" class="s">인장강도 ÷ 최대 온도응력</text>' +
    '<line x1="170" y1="125" x2="196" y2="112" class="ld"/><circle cx="196" cy="112" r="2" class="dotf"/><text x="200" y="116" class="s">Icr 1.0 ≒ 50%</text>' +
    '<line x1="250" y1="201" x2="280" y2="180" class="ld"/><circle cx="280" cy="180" r="2" class="dotf"/><text x="284" y="184" class="s">Icr 1.5 ≒ 5%</text>' +
    '<line x1="150" y1="108" x2="90" y2="150" class="ld"/><circle cx="90" cy="150" r="2" class="dotf"/><text x="60" y="164" class="s">균열발생확률 곡선</text>' +
    '<text x="115" y="250" text-anchor="middle" class="b">내부구속</text>' +
    '<rect x="40" y="262" width="150" height="60" class="conc"/><rect x="75" y="277" width="80" height="30" class="bx3"/><text x="115" y="296" text-anchor="middle" class="s">고온 팽창</text>' +
    '<line x1="65" y1="262" x2="67" y2="274" class="rd"/><line x1="165" y1="262" x2="163" y2="274" class="rd"/>' +
    '<line x1="165" y1="265" x2="190" y2="256" class="ld"/><circle cx="190" cy="256" r="2" class="dotf"/><text x="194" y="260" class="s">표면균열</text>' +
    '<text x="115" y="338" text-anchor="middle" class="s">내부: 내외부 온도차 → 표면균열</text>' +
    '<text x="325" y="250" text-anchor="middle" class="b">외부구속</text>' +
    '<rect x="245" y="312" width="170" height="12" class="bx2"/><rect x="265" y="262" width="120" height="50" class="conc"/><line x1="325" y1="262" x2="325" y2="312" class="rd"/>' +
    '<text x="318" y="282" text-anchor="end" class="s">관통균열</text>' +
    '<line x1="285" y1="300" x2="305" y2="300" class="ar"/><line x1="365" y1="300" x2="345" y2="300" class="ar"/>' +
    '<line x1="252" y1="318" x2="238" y2="304" class="ld"/><circle cx="238" cy="304" r="2" class="dotf"/><text x="234" y="308" text-anchor="end" class="s">하부구속</text>' +
    '<text x="325" y="338" text-anchor="middle" class="s">외부: 온도강하·수축 → 관통균열</text>' +
    '<line x1="250" y1="58" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 1.5 이상 균열방지</text>' +
    '<line x1="202" y1="44" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k3">③ 1.2~1.5 균열제한</text>' +
    '<text x="446" y="84" class="k3">③ 0.7~1.2 유해균열 제한</text>' +
    '<text x="446" y="104" class="k3">③ 매스: 판 0.8m·벽 0.5m↑</text>' +
    '<text x="446" y="134" class="k5">⑤ 배합: 저발열·FA·슬래그</text>' +
    '<text x="446" y="154" class="k5">⑤ 설계: 균열유도줄눈·온도철근</text>' +
    '<text x="446" y="174" class="k5">⑤ Pre·Pipe Cooling·분할타설</text>' +
    '<text x="446" y="252" class="k4">④ 내부구속: 표면 급랭 방지</text>' +
    '<line x1="385" y1="275" x2="440" y2="268" class="ld"/><circle cx="440" cy="268" r="2" class="dotf"/><text x="446" y="272" class="k4">④ 외부구속: 리프트·간격 조절</text>' +
    '<line x1="385" y1="296" x2="440" y2="288" class="ld"/><circle cx="440" cy="288" r="2" class="dotf"/><text x="446" y="292" class="k4">④ 온도 계측 → 해석값 검증</text>' +
    '</svg>',
  subs: [
    { h: '판정 기준(KCS 14 20 42)', pts: ['[[1.5 이상 균열방지]]', '[[1.2~1.5 균열제한]]', '[[0.7~1.2 유해균열 제한]]', '매스: 평판 {{0.8m}}·하단구속 벽 {{0.5m}} 이상'] },
    { h: '균열 원인·유의사항', pts: ['[[내부구속]] — 표면 급랭 방지', '[[외부구속]] — 리프트·타설간격 조절', '온도 계측으로 해석값 검증'] },
    { h: '온도균열 대책', pts: ['배합: 저발열·FA·고로슬래그', '설계: 균열유도줄눈·온도철근', '시공: Pre·Pipe Cooling·분할타설'] }
  ],
  msg: 'Icr 1.0이면 절반, 1.5면 5% — 목표 Icr로 배합·설계·시공 대책을 정한다',
  rel: ['Mass Concrete', 'Pipe Cooling', 'Pre-cooling', '수화열 해석', 'Control Joint']
},
147: {
  tag: '구조·현상·대책',
  def: '보 없이 기둥이 슬래브를 직접 지지하고 기둥 상부에 [[Drop Panel]]을 둔 [[무량판 구조]]이며, Punching Shear Crack은 기둥면 {{d/2}} 위험단면에서 원추대로 뚫리는 [[취성 전단균열]]',
  wwh: ['무량판+지판', '뚫림전단 붕괴 방지', 'd/2 검토·전단보강'],
  figT: 'Flat Slab 지판 기준 및 Punching Shear 파괴',
  svg: '<svg viewBox="0 0 640 355" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="30" y="24" class="b">[Flat Slab — 지판]</text><text x="250" y="24" class="b">[Punching Shear]</text>' +
    '<rect x="30" y="80" width="390" height="30" class="conc"/>' +
    '<rect x="120" y="110" width="60" height="12" class="conc"/><rect x="135" y="122" width="30" height="98" class="conc"/>' +
    '<rect x="315" y="110" width="30" height="110" class="conc"/>' +
    '<line x1="315" y1="110" x2="285" y2="80" class="rd"/><line x1="345" y1="110" x2="375" y2="80" class="rd"/>' +
    '<line x1="300" y1="80" x2="300" y2="110" class="rd dash"/><line x1="360" y1="80" x2="360" y2="110" class="rd dash"/>' +
    '<line x1="330" y1="36" x2="330" y2="76" class="ar"/><text x="336" y="48" class="s">집중하중 P</text>' +
    '<line x1="24" y1="80" x2="24" y2="110" class="ln2"/><text x="14" y="99" class="s">t</text>' +
    '<line x1="186" y1="110" x2="186" y2="122" class="ln2"/><text x="190" y="121" class="r">≥ t/4</text>' +
    '<line x1="150" y1="132" x2="180" y2="132" class="ln2"/><text x="165" y="148" text-anchor="middle" class="r">≥ L/6</text>' +
    '<line x1="150" y1="236" x2="330" y2="236" class="ln2"/><line x1="150" y1="230" x2="150" y2="242" class="ln2"/><line x1="330" y1="230" x2="330" y2="242" class="ln2"/><text x="240" y="232" text-anchor="middle" class="r">L</text>' +
    '<line x1="360" y1="84" x2="390" y2="60" class="ld"/><circle cx="390" cy="60" r="2" class="dotf"/><text x="394" y="64" class="r">d/2</text>' +
    '<line x1="125" y1="118" x2="90" y2="138" class="ld"/><circle cx="90" cy="138" r="2" class="dotf"/><text x="30" y="152" class="bl">Drop Panel(지판)</text>' +
    '<line x1="80" y1="88" x2="80" y2="60" class="ld"/><circle cx="80" cy="60" r="2" class="dotf"/><text x="60" y="54" class="s">슬래브(무량판)</text>' +
    '<line x1="165" y1="180" x2="190" y2="180" class="ld"/><circle cx="190" cy="180" r="2" class="dotf"/><text x="194" y="184" class="s">기둥(폭 D)</text>' +
    '<line x1="300" y1="95" x2="270" y2="128" class="ld"/><circle cx="270" cy="128" r="2" class="dotf"/><text x="300" y="142" text-anchor="end" class="r">경사균열(약 45°)</text>' +
    '<line x1="370" y1="90" x2="395" y2="140" class="ld"/><circle cx="395" cy="140" r="2" class="dotf"/><text x="360" y="156" class="s">원추대 뚫림면</text>' +
    '<text x="30" y="266" class="s">집중하중 → 경사균열 → 원추대 뚫림 → 연쇄붕괴</text>' +
    '<text x="30" y="292" class="r">최소두께: 무지판 120 · 지판 100mm</text>' +
    '<text x="30" y="316" class="s">취성파괴(예고 없음) → 전단보강 필수</text>' +
    '<rect x="305" y="270" width="50" height="50" fill="none" class="rd dash"/><rect x="320" y="285" width="20" height="20" class="conc"/>' +
    '<line x1="340" y1="295" x2="400" y2="295" class="ln"/><line x1="320" y1="295" x2="265" y2="295" class="ln"/><line x1="330" y1="285" x2="330" y2="256" class="ln"/><line x1="330" y1="305" x2="330" y2="345" class="ln"/>' +
    '<circle cx="355" cy="295" r="3" class="bx2"/><circle cx="372" cy="295" r="3" class="bx2"/><circle cx="389" cy="295" r="3" class="bx2"/><circle cx="288" cy="295" r="3" class="bx2"/><circle cx="271" cy="295" r="3" class="bx2"/><circle cx="330" cy="270" r="3" class="bx2"/><circle cx="330" cy="320" r="3" class="bx2"/><circle cx="330" cy="337" r="3" class="bx2"/>' +
    '<line x1="355" y1="272" x2="380" y2="262" class="ld"/><circle cx="380" cy="262" r="2" class="dotf"/><text x="384" y="266" class="r">bo(d/2)</text>' +
    '<line x1="180" y1="114" x2="440" y2="40" class="ld"/><circle cx="440" cy="40" r="2" class="dotf"/><text x="446" y="44" class="k3">③ 지판 ≥ L/6 연장</text>' +
    '<line x1="222" y1="118" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k3">③ 지판 두께 ≥ t/4</text>' +
    '<line x1="345" y1="130" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="446" y="84" class="k3">③ 기둥 L/20·300mm·층고1/15</text>' +
    '<line x1="360" y1="104" x2="440" y2="100" class="ld"/><circle cx="440" cy="100" r="2" class="dotf"/><text x="446" y="104" class="k3">③ 위험단면 기둥면 d/2</text>' +
    '<text x="446" y="150" class="k4">④ 기둥 주위 Sleeve 제한</text>' +
    '<text x="446" y="170" class="k4">④ 동바리 조기해체 금지</text>' +
    '<text x="446" y="190" class="k4">④ 상부근·전단보강근 피복</text>' +
    '<line x1="400" y1="295" x2="440" y2="276" class="ld"/><circle cx="440" cy="276" r="2" class="dotf"/><text x="446" y="280" class="k5">⑤ Shear Stud·Shear Cap</text>' +
    '<text x="446" y="300" class="k5">⑤ Integrity rebar 일체근</text>' +
    '</svg>',
  subs: [
    { h: '구조 기준', pts: ['지판 [[L/6 이상 연장]]', '지판 두께 [[슬래브 두께 1/4 이상]]', '[[기둥폭 L/20·300mm·층고 1/15]] 이상', '[[위험단면 d/2]](기둥면에서)'] },
    { h: '시공 시 유의사항', pts: ['기둥 주위 개구부(Sleeve) 제한', '동바리 조기해체·하중집중 금지', '상부근·전단보강근 위치·피복 확보'] },
    { h: '개선방안(전단보강)', pts: ['Shear Stud Rail·Shear Cap', '연쇄붕괴 방지 Integrity rebar(하부 일체근)'] }
  ],
  msg: '보가 없으니 기둥 둘레가 급소 — 지판·전단보강으로 뚫림을 막는다',
  rel: ['Flat Plate', '무량판 구조', 'Shear Stud', '연쇄붕괴', '전단보강근']
}
});
