// 디테일원 도해 답안 (Detail One 용어 양식) No.130~138 — 형식은 data/SCHEMA_D1.md, 내용은 q_130_147.js
window.D1 = Object.assign(window.D1 || {}, {
130: {
  tag: '재료·시험·기준',
  def: '시멘트 입자의 고운 정도를 단위질량당 표면적인 [[비표면적]](cm²/g)으로 나타낸 값으로, [[블레인 공기투과장치]]로 측정하며 보통포틀랜드 {{2,800 cm²/g 이상}}',
  wwh: ['비표면적 cm²/g', '수화·강도·수축 좌우', '블레인 투과시간'],
  figT: '블레인 공기투과 시험원리 및 분말도-물성 관계',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="24" y="30" class="b">[블레인 KS L 5106]</text>' +
    '<rect x="48" y="70" width="34" height="40" class="bx"/><rect x="52" y="80" width="26" height="18" class="conc"/>' +
    '<line x1="60" y1="110" x2="60" y2="250" class="ln"/><line x1="70" y1="110" x2="70" y2="250" class="ln"/><line x1="120" y1="150" x2="120" y2="250" class="ln"/><line x1="130" y1="150" x2="130" y2="250" class="ln"/>' +
    '<path d="M60,250 Q95,290 130,250" fill="none" class="ln"/><path d="M70,250 Q95,278 120,250" fill="none" class="ln"/>' +
    '<rect x="61" y="180" width="8" height="70" class="bx2"/><rect x="121" y="215" width="8" height="35" class="bx2"/>' +
    '<line x1="130" y1="190" x2="175" y2="190" class="ln"/><circle cx="188" cy="190" r="13" class="bx3"/>' +
    '<line x1="65" y1="176" x2="65" y2="140" class="ar"/>' +
    '<line x1="78" y1="88" x2="110" y2="60" class="ld"/><circle cx="110" cy="60" r="2" class="dotf"/><text x="114" y="64" class="r">시멘트 시료(다짐)</text>' +
    '<line x1="125" y1="235" x2="160" y2="240" class="ld"/><circle cx="160" cy="240" r="2" class="dotf"/><text x="164" y="244" class="s">마노미터액</text>' +
    '<line x1="195" y1="180" x2="205" y2="160" class="ld"/><circle cx="205" cy="160" r="2" class="dotf"/><text x="160" y="156" class="s">공기주머니</text>' +
    '<text x="24" y="300" class="s">공기 투과시간 길수록 분말도 大</text><text x="24" y="320" class="r">S = Ss·√T / √Ts</text>' +
    '<line x1="240" y1="200" x2="420" y2="200" class="ln"/><line x1="240" y1="200" x2="240" y2="55" class="ln"/>' +
    '<text x="246" y="52" class="s">물성</text><text x="420" y="216" text-anchor="end" class="s">분말도(cm²/g) →</text>' +
    '<line x1="290" y1="200" x2="290" y2="70" class="ln2 dash"/><text x="290" y="214" text-anchor="middle" class="s">2,800</text>' +
    '<path d="M245,180 Q330,150 415,70" fill="none" class="bl"/><path d="M245,190 Q330,175 415,110" fill="none" class="rd"/>' +
    '<line x1="390" y1="88" x2="360" y2="72" class="ld"/><circle cx="360" cy="72" r="2" class="dotf"/><text x="356" y="70" text-anchor="end" class="b">조기강도↑</text>' +
    '<line x1="400" y1="122" x2="372" y2="142" class="ld"/><circle cx="372" cy="142" r="2" class="dotf"/><text x="300" y="158" class="r">수화열·건조수축↑</text>' +
    '<text x="232" y="250" class="b">[시험순서]</text>' +
    '<rect x="228" y="260" width="34" height="22" class="bx"/><text x="245" y="275" text-anchor="middle" class="s">계량</text>' +
    '<line x1="262" y1="271" x2="270" y2="271" class="ar"/><rect x="270" y="260" width="34" height="22" class="bx"/><text x="287" y="275" text-anchor="middle" class="s">충전</text>' +
    '<line x1="304" y1="271" x2="312" y2="271" class="ar"/><rect x="312" y="260" width="34" height="22" class="bx"/><text x="329" y="275" text-anchor="middle" class="s">흡인</text>' +
    '<line x1="346" y1="271" x2="354" y2="271" class="ar"/><rect x="354" y="260" width="34" height="22" class="bx"/><text x="371" y="275" text-anchor="middle" class="s">T측정</text>' +
    '<line x1="388" y1="271" x2="396" y2="271" class="ar"/><rect x="396" y="260" width="34" height="22" class="bx3"/><text x="413" y="275" text-anchor="middle" class="s">S산정</text>' +
    '<text x="232" y="310" class="s">표준시료 비교 → 비표면적</text>' +
    '<text x="450" y="40" class="b">[분말도 大·小]</text>' +
    '<text x="450" y="62" class="s">大: 입자 미세·수화 빠름</text><text x="450" y="80" class="s">小: 장기강도·저발열 유리</text>' +
    '<line x1="290" y1="90" x2="440" y2="100" class="ld"/><circle cx="440" cy="100" r="2" class="dotf"/><text x="446" y="104" class="k3">③ 1·2·4·5종 2,800↑</text>' +
    '<text x="446" y="124" class="k3">③ 3종 조강 3,300↑</text><text x="446" y="144" class="k3">③ 분말도大 → 조기강도↑</text>' +
    '<line x1="82" y1="74" x2="440" y2="168" class="ld"/><circle cx="440" cy="168" r="2" class="dotf"/><text x="446" y="172" class="k4">④ 방습저장 0.3m↑·13포↓</text>' +
    '<text x="446" y="192" class="k4">④ 3개월↑ 저장 재시험</text><text x="446" y="212" class="k4">④ 조강 초기 습윤양생</text>' +
    '<line x1="430" y1="282" x2="440" y2="236" class="ld"/><circle cx="440" cy="236" r="2" class="dotf"/><text x="446" y="240" class="k5">⑤ 분급기 입도분포 관리</text>' +
    '<text x="446" y="260" class="k5">⑤ FA·고로슬래그 치환</text><text x="446" y="280" class="k5">⑤ 레이저 회절 입도분석</text>' +
    '</svg>',
  subs: [
    { h: '종류별 기준 및 특징', pts: ['1·2·4·5종 {{2,800 cm²/g 이상}}', '3종 조강 {{3,300 cm²/g 이상}}', '분말도 大 → [[조기강도]]·[[수화열]]·[[건조수축]] ↑'] },
    { h: '품질관리 시 유의사항', pts: ['방습 저장 {{0.3m 이상}}·{{13포대 이하}}', '{{3개월 이상}} 저장 시 재시험', '조강 사용 시 초기 [[습윤양생]]'] },
    { h: '개선방안', pts: ['분급기 입도분포 관리', 'FA·고로슬래그 미분말 치환', '레이저 회절 입도분석'] }
  ],
  msg: '분말도는 강도발현과 수화열·수축의 균형점 — 용도별 시멘트 선정과 풍화 방지 저장',
  rel: ['비표면적', '조강시멘트', '수화열', '강열감량', '건조수축']
},
131: {
  tag: '재료·시험·기준',
  def: '시멘트 시료를 {{975±25℃}}로 [[15분 강열]]하여 [[항량]]이 되었을 때 감소한 질량의 백분율로, [[풍화]] 정도를 판단하는 지표 = [[강열감량]]',
  wwh: ['강열 질량감소율', '풍화 여부 판단', '975℃·15분·항량'],
  figT: '강열감량 시험순서(KS L 5120) 및 산정',
  svg: '<svg viewBox="0 0 640 345" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="24" y="30" class="b">[시험순서 KS L 5120]</text>' +
    '<path d="M40,140 L48,170 L72,170 L80,140 Z" class="bx"/><rect x="47" y="150" width="26" height="12" class="conc"/><text x="60" y="188" text-anchor="middle" class="s">도가니</text>' +
    '<line x1="60" y1="150" x2="50" y2="110" class="ld"/><circle cx="50" cy="110" r="2" class="dotf"/><text x="30" y="104" class="r">시료 1g</text>' +
    '<line x1="84" y1="155" x2="102" y2="155" class="ar"/>' +
    '<rect x="105" y="100" width="85" height="80" class="bx2"/><rect x="120" y="125" width="55" height="40" class="bx3"/>' +
    '<line x1="147" y1="125" x2="147" y2="80" class="ld"/><circle cx="147" cy="80" r="2" class="dotf"/><text x="110" y="72" class="r">975±25℃ · 15분</text>' +
    '<line x1="120" y1="178" x2="100" y2="205" class="ld"/><circle cx="100" cy="205" r="2" class="dotf"/><text x="40" y="214" class="s">전기로 강열</text>' +
    '<line x1="192" y1="140" x2="214" y2="140" class="ar"/>' +
    '<path d="M218,175 L218,120 Q255,95 292,120 L292,175 Z" class="bx"/><line x1="218" y1="150" x2="292" y2="150" class="ln2 dash"/><text x="255" y="196" text-anchor="middle" class="s">데시케이터</text>' +
    '<line x1="255" y1="108" x2="262" y2="78" class="ld"/><circle cx="262" cy="78" r="2" class="dotf"/><text x="228" y="72" class="s">냉각(흡습 방지)</text>' +
    '<line x1="295" y1="140" x2="318" y2="140" class="ar"/>' +
    '<rect x="322" y="150" width="80" height="25" class="bx"/><rect x="340" y="130" width="44" height="20" class="bx3"/><text x="362" y="196" text-anchor="middle" class="s">정밀저울</text>' +
    '<line x1="385" y1="132" x2="392" y2="112" class="ld"/><circle cx="392" cy="112" r="2" class="dotf"/><text x="330" y="106" class="r">0.1mg 칭량</text>' +
    '<path d="M362,205 L362,220 L147,220 L147,186" fill="none" class="ar"/>' +
    '<text x="255" y="238" text-anchor="middle" class="r">15분씩 반복 → 항량(질량차 0.5mg↓)</text>' +
    '<rect x="30" y="252" width="380" height="30" class="bx3"/><text x="220" y="272" text-anchor="middle" class="b">LOI(%) = (W1 − W2) / W1 × 100</text>' +
    '<text x="30" y="306" class="s">W1 강열 전 · W2 강열 후 질량</text>' +
    '<text x="30" y="330" class="r">강열감량↑(풍화) → 비중↓·강도↓·응결지연</text>' +
    '<text x="450" y="40" class="b">[기준·판정]</text>' +
    '<line x1="410" y1="262" x2="440" y2="60" class="ld"/><circle cx="440" cy="60" r="2" class="dotf"/><text x="446" y="64" class="k3">③ 포틀랜드 5.0%↓</text>' +
    '<text x="446" y="84" class="k3">③ 플라이애시 1종 3%↓</text><text x="446" y="104" class="k3">③ 목적: 풍화 여부 판단</text>' +
    '<text x="446" y="134" class="k4">④ 데시케이터 냉각 후 칭량</text>' +
    '<line x1="402" y1="162" x2="440" y2="150" class="ld"/><circle cx="440" cy="150" r="2" class="dotf"/><text x="446" y="154" class="k4">④ 기준 초과 시 사용금지</text>' +
    '<text x="446" y="174" class="k4">④ 13포↓·선입선출 저장</text>' +
    '<text x="446" y="204" class="k5">⑤ 벌크 Silo 밀폐 저장</text><text x="446" y="224" class="k5">⑤ Lot별 시험성적서</text>' +
    '<line x1="410" y1="280" x2="440" y2="240" class="ld"/><circle cx="440" cy="240" r="2" class="dotf"/><text x="446" y="244" class="k5">⑤ 장기저장 정기시험·이력</text>' +
    '</svg>',
  subs: [
    { h: '기준 및 목적', pts: ['포틀랜드 시멘트 {{5.0% 이하}}', '플라이애시 1종 {{3% 이하}}', '목적: [[풍화]] 여부 판단'] },
    { h: '시험·관리 시 유의사항', pts: ['[[데시케이터]] 냉각 후 칭량', '기준 초과 시 사용금지', '{{13포대 이하}}·선입선출 저장'] },
    { h: '개선방안', pts: ['벌크 Silo 밀폐 저장', 'Lot별 시험성적서 관리', '장기저장 정기시험·이력관리'] }
  ],
  msg: '강열감량으로 풍화를 걸러내 강도 저하·응결 지연·내구성 저하를 사전 차단',
  rel: ['풍화', '시멘트 저장', '분말도', '플라이애시', '응결시간']
},
132: {
  tag: '강도·배합·기준',
  def: '구조설계 기준인 [[설계기준압축강도(fck)]], 기온보정을 더한 주문강도 [[호칭강도(fcn)]], 표준편차 할증 {{1.34s / 2.33s}}를 더한 목표강도 [[배합강도(fcr)]]',
  wwh: ['설계·주문·목표강도', '편차·기온 보정', 'fcq→fcn→fcr'],
  figT: '강도 산정 단계 및 강도 정규분포',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="30" y1="200" x2="330" y2="200" class="ln"/><line x1="30" y1="110" x2="330" y2="110" class="rd dash"/>' +
    '<rect x="35" y="110" width="44" height="90" class="bx"/><rect x="95" y="125" width="44" height="75" class="bx"/><rect x="155" y="110" width="44" height="90" class="bx3"/>' +
    '<rect x="215" y="110" width="44" height="90" class="bx3"/><rect x="215" y="88" width="44" height="22" class="bx2"/>' +
    '<rect x="275" y="110" width="44" height="90" class="bx3"/><rect x="275" y="88" width="44" height="22" class="bx2"/><rect x="275" y="55" width="44" height="33" class="conc"/>' +
    '<line x1="140" y1="160" x2="153" y2="160" class="ar"/><line x1="200" y1="160" x2="213" y2="160" class="ar"/><line x1="260" y1="160" x2="273" y2="160" class="ar"/>' +
    '<text x="57" y="216" text-anchor="middle" class="b">fck</text><text x="117" y="216" text-anchor="middle" class="b">fcd</text><text x="177" y="216" text-anchor="middle" class="b">fcq</text><text x="237" y="216" text-anchor="middle" class="b">fcn</text><text x="297" y="216" text-anchor="middle" class="b">fcr</text>' +
    '<text x="57" y="232" text-anchor="middle" class="s">설계기준</text><text x="117" y="232" text-anchor="middle" class="s">내구성</text><text x="177" y="232" text-anchor="middle" class="s">품질기준</text><text x="237" y="232" text-anchor="middle" class="s">호칭(주문)</text><text x="297" y="232" text-anchor="middle" class="s">배합(목표)</text>' +
    '<line x1="57" y1="115" x2="50" y2="92" class="ld"/><circle cx="50" cy="92" r="2" class="dotf"/><text x="20" y="88" class="s">재령 28일 압축강도</text>' +
    '<line x1="177" y1="110" x2="160" y2="70" class="ld"/><circle cx="160" cy="70" r="2" class="dotf"/><text x="110" y="64" class="s">max(fck, fcd)</text>' +
    '<line x1="237" y1="99" x2="225" y2="40" class="ld"/><circle cx="225" cy="40" r="2" class="dotf"/><text x="190" y="34" class="r">+Tn 기온보정 0·3·6MPa</text>' +
    '<line x1="297" y1="70" x2="340" y2="62" class="ld"/><circle cx="340" cy="62" r="2" class="dotf"/><text x="344" y="66" class="bl">+1.34s / 2.33s</text>' +
    '<line x1="30" y1="330" x2="420" y2="330" class="ln"/>' +
    '<path d="M40,330 C150,330 190,250 250,250 C310,250 350,330 420,330" fill="none" class="bl"/>' +
    '<path d="M40,330 C90,330 150,325 185,305 L185,330 Z" class="conc"/>' +
    '<line x1="185" y1="245" x2="185" y2="330" class="rd dash"/><line x1="250" y1="245" x2="250" y2="330" class="ln2 dash"/>' +
    '<line x1="186" y1="266" x2="248" y2="266" class="ar"/><text x="190" y="260" class="s">1.34s/2.33s</text>' +
    '<text x="185" y="346" text-anchor="middle" class="r">fcn</text><text x="250" y="346" text-anchor="middle" class="b">fcr(평균)</text>' +
    '<line x1="120" y1="322" x2="90" y2="292" class="ld"/><circle cx="90" cy="292" r="2" class="dotf"/><text x="30" y="286" class="r">불합격 확률 1%↓</text>' +
    '<line x1="300" y1="262" x2="330" y2="250" class="ld"/><circle cx="330" cy="250" r="2" class="dotf"/><text x="334" y="254" class="s">정규분포·표준편차 s</text>' +
    '<text x="450" y="40" class="b">[산정식 KCS 14 20 10]</text>' +
    '<text x="446" y="62" class="k3">③ fcq = max(fck, fcd)</text><text x="446" y="82" class="k3">③ fcn = fcq + Tn(0·3·6)</text>' +
    '<text x="446" y="102" class="k3">③ fcr = fcn + 1.34s</text>' +
    '<line x1="321" y1="150" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k3">③ ≤35: (fcn−3.5)+2.33s</text>' +
    '<text x="446" y="142" class="k3">③ fcn>35: 0.9fcn+2.33s</text>' +
    '<text x="446" y="168" class="k4">④ 표준양생 20±2℃ 28일</text>' +
    '<line x1="185" y1="300" x2="440" y2="184" class="ld"/><circle cx="440" cy="184" r="2" class="dotf"/><text x="446" y="188" class="k4">④ 1회 ≥ fcn−3.5MPa</text>' +
    '<text x="446" y="208" class="k4">④ 동절기 Tn 누락→미달</text>' +
    '<text x="446" y="234" class="k5">⑤ 공장 표준편차 실적관리</text><text x="446" y="254" class="k5">⑤ 적산온도 강도 예측</text><text x="446" y="274" class="k5">⑤ 품질 데이터 통계관리</text>' +
    '</svg>',
  subs: [
    { h: '산정식(KCS 14 20 10)', pts: ['fcq = max(fck, fcd)', 'fcn = fcq + [[Tn]] {{0·3·6MPa}}', 'fcr = fcn + {{1.34s}}', 'fcn≤35: (fcn−3.5) + {{2.33s}}', 'fcn>35: {{0.9fcn + 2.33s}}'] },
    { h: '관리 시 유의사항', pts: ['표준양생 {{20±2℃}} [[재령 28일]]', '판정 1회 ≥ {{fcn−3.5MPa}}', '동절기 Tn 누락 → 강도 미달'] },
    { h: '개선방안', pts: ['공장 [[표준편차(s)]] 실적관리', '적산온도 강도 예측', '품질 데이터 통계관리'] }
  ],
  msg: '설·내 → 품 → 호(+Tn) → 배(+1.34s/2.33s) — 불합격 확률 1% 이하로 설계강도 확보',
  rel: ['표준편차', '적산온도', '압축강도 판정', '레디믹스트 콘크리트', '기온보정강도']
},
133: {
  tag: '배합·성능·기준',
  def: '콘크리트 내 [[갇힌공기]]와 [[AE제]]에 의한 [[연행공기]]의 체적합을 전체 용적에 대한 백분율로 나타낸 값으로, 보통콘크리트 {{4.5±1.5%}} 관리',
  wwh: ['기포 체적 백분율', '시공연도·동해 저항', 'AE제 4.5±1.5%'],
  figT: '공기량-내구지수·강도 관계 및 기포 구분',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="140" y="70" width="90" height="160" class="bx3"/>' +
    '<line x1="50" y1="230" x2="300" y2="230" class="ln"/><line x1="50" y1="230" x2="50" y2="45" class="ln"/>' +
    '<text x="56" y="34" class="s">내구지수·강도</text>' +
    '<text x="140" y="246" text-anchor="middle" class="s">3</text><text x="185" y="246" text-anchor="middle" class="s">4.5</text><text x="230" y="246" text-anchor="middle" class="s">6</text><text x="300" y="246" text-anchor="end" class="s">공기량(%)</text>' +
    '<path d="M55,215 C110,210 140,100 190,92 C240,86 260,110 290,125" fill="none" class="bl"/>' +
    '<line x1="55" y1="90" x2="290" y2="195" class="rd"/>' +
    '<text x="185" y="82" text-anchor="middle" class="r">적정 4.5±1.5%</text>' +
    '<line x1="262" y1="108" x2="262" y2="56" class="ld"/><circle cx="262" cy="56" r="2" class="dotf"/><text x="236" y="50" class="bl">내구지수(동결융해)</text>' +
    '<line x1="80" y1="102" x2="88" y2="140" class="ld"/><circle cx="88" cy="140" r="2" class="dotf"/><text x="60" y="156" class="r">압축강도</text>' +
    '<text x="315" y="84" class="b">[기포 구분]</text>' +
    '<circle cx="340" cy="120" r="12" class="bx"/><circle cx="380" cy="110" r="4" class="bx2"/><circle cx="395" cy="125" r="4" class="bx2"/><circle cx="372" cy="132" r="4" class="bx2"/><circle cx="405" cy="105" r="4" class="bx2"/><circle cx="388" cy="145" r="3" class="bx2"/>' +
    '<line x1="340" y1="132" x2="330" y2="164" class="ld"/><circle cx="330" cy="164" r="2" class="dotf"/><text x="315" y="176" class="s">갇힌공기(자연·大)</text>' +
    '<line x1="398" y1="128" x2="420" y2="184" class="ld"/><circle cx="420" cy="184" r="2" class="dotf"/><text x="315" y="196" class="s">연행공기(AE제·미세)</text>' +
    '<line x1="388" y1="148" x2="404" y2="206" class="ld"/><circle cx="404" cy="206" r="2" class="dotf"/><text x="315" y="214" class="r">Ball Bearing</text>' +
    '<line x1="409" y1="107" x2="440" y2="146" class="ld"/><circle cx="440" cy="146" r="2" class="dotf"/>' +
    '<text x="40" y="275" class="b">[공기량 1% 증가 시]</text>' +
    '<rect x="40" y="284" width="118" height="42" class="bx"/><text x="99" y="300" text-anchor="middle" class="s">슬럼프</text><text x="99" y="318" text-anchor="middle" class="r">약 20mm ↑</text>' +
    '<rect x="170" y="284" width="118" height="42" class="bx"/><text x="229" y="300" text-anchor="middle" class="s">단위수량</text><text x="229" y="318" text-anchor="middle" class="r">약 3% ↓</text>' +
    '<rect x="300" y="284" width="118" height="42" class="bx"/><text x="359" y="300" text-anchor="middle" class="s">압축강도</text><text x="359" y="318" text-anchor="middle" class="r">4~6% ↓</text>' +
    '<text x="450" y="40" class="b">[공기량 기준]</text>' +
    '<line x1="230" y1="72" x2="440" y2="58" class="ld"/><circle cx="440" cy="58" r="2" class="dotf"/><text x="446" y="62" class="k3">③ 보통·포장 4.5±1.5%</text>' +
    '<text x="446" y="82" class="k3">③ 경량골재 5.5±1.5%</text><text x="446" y="102" class="k3">③ 고강도 3.5±1.5%</text>' +
    '<line x1="418" y1="290" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k3">③ 1%↑: 강도 4~6%↓</text>' +
    '<text x="446" y="150" class="k4">④ 공기실 압력법 검사</text><text x="446" y="170" class="k4">④ 압송 중 공기량 손실</text>' +
    '<text x="446" y="190" class="k4">④ 고온·미연탄소 → 감소</text><text x="446" y="210" class="k4">④ 허용차 초과 시 반송</text>' +
    '<text x="446" y="238" class="k5">⑤ 기포간격계수 측정</text><text x="446" y="258" class="k5">⑤ FA 강열감량 관리</text>' +
    '<line x1="418" y1="318" x2="440" y2="274" class="ld"/><circle cx="440" cy="274" r="2" class="dotf"/><text x="446" y="278" class="k5">⑤ 동결융해 저항성 ↑</text>' +
    '</svg>',
  subs: [
    { h: '공기량 기준', pts: ['보통·포장 {{4.5±1.5%}}', '경량골재 {{5.5±1.5%}}', '고강도 {{3.5±1.5%}}', '1% 증가 시 [[압축강도 4~6% 감소]]'] },
    { h: '시공 시 유의사항', pts: ['공기실 압력법 받아들이기 검사', '압송 중 공기량 손실 고려', '고온·FA 미연탄소 → 공기량 감소', '허용차 {{±1.5%}} 초과 시 반송'] },
    { h: '개선방안 및 효과', pts: ['기포간격계수 측정', 'FA 강열감량 관리', '[[동결융해 저항성]] 향상'] }
  ],
  msg: '연행공기 4.5±1.5% — Ball Bearing으로 시공연도, 팽창압 흡수로 동해 저항, 과다 시 강도 저하',
  rel: ['AE제', '동결융해', '기포간격계수', '워커빌리티', '플라이애시']
},
134: {
  tag: '배합·설계·기준',
  def: '[[5mm체]] 기준으로 구분한 전체 골재 절대용적에 대한 잔골재 [[절대용적비]](%)로, 소요 [[워커빌리티]] 범위에서 [[단위수량]]이 최소가 되도록 정하는 값(통상 {{35~45%}})',
  wwh: ['잔골재 절대용적비', '단위수량 최소화', '시험비빔 최적 S/a'],
  figT: '잔골재율-단위수량 관계 및 골재 구성',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="135" y="72" width="75" height="138" class="bx3"/>' +
    '<line x1="50" y1="210" x2="300" y2="210" class="ln"/><line x1="50" y1="210" x2="50" y2="45" class="ln"/>' +
    '<text x="56" y="42" class="s">단위수량 W</text>' +
    '<path d="M60,70 C120,190 200,195 290,80" fill="none" class="bl"/>' +
    '<line x1="172" y1="168" x2="172" y2="210" class="rd dash"/>' +
    '<line x1="172" y1="166" x2="172" y2="70" class="ld"/><circle cx="172" cy="70" r="2" class="dotf"/><text x="172" y="64" text-anchor="middle" class="r">최적 S/a(W 최소)</text>' +
    '<text x="172" y="226" text-anchor="middle" class="r">35~45%</text><text x="300" y="226" text-anchor="end" class="s">S/a(%)</text>' +
    '<line x1="86" y1="112" x2="80" y2="176" class="ld"/><circle cx="80" cy="176" r="2" class="dotf"/><text x="58" y="190" class="s">S/a 小: 재료분리·거침</text>' +
    '<line x1="270" y1="110" x2="270" y2="182" class="ld"/><circle cx="270" cy="182" r="2" class="dotf"/><text x="296" y="198" text-anchor="end" class="s">S/a 大: W·C↑ 점성↑</text>' +
    '<rect x="50" y="258" width="110" height="28" class="bx2"/><rect x="160" y="258" width="180" height="28" class="bx"/>' +
    '<text x="105" y="276" text-anchor="middle" class="s">잔골재 S</text><text x="250" y="276" text-anchor="middle" class="s">굵은골재 G</text>' +
    '<line x1="50" y1="294" x2="160" y2="294" class="ln2"/><line x1="50" y1="300" x2="340" y2="300" class="ln2"/>' +
    '<text x="40" y="322" class="r">S/a = S / (S+G) × 100 (절대용적비)</text>' +
    '<line x1="360" y1="266" x2="425" y2="266" class="ln"/>' +
    '<circle cx="372" cy="258" r="5" class="bx"/><circle cx="392" cy="256" r="6" class="bx"/><circle cx="412" cy="258" r="5" class="bx"/>' +
    '<circle cx="370" cy="280" r="2" class="bx2"/><circle cx="385" cy="286" r="2" class="bx2"/><circle cx="400" cy="280" r="2" class="bx2"/><circle cx="414" cy="288" r="2" class="bx2"/>' +
    '<line x1="392" y1="266" x2="392" y2="240" class="ld"/><circle cx="392" cy="240" r="2" class="dotf"/><text x="350" y="234" class="bl">5mm체 구분</text>' +
    '<text x="350" y="318" class="s">잔류 G / 통과 S</text>' +
    '<text x="450" y="40" class="b">[S/a 영향·보정]</text>' +
    '<line x1="210" y1="90" x2="440" y2="58" class="ld"/><circle cx="440" cy="58" r="2" class="dotf"/><text x="446" y="62" class="k3">③ 통상 35~45% 적정</text>' +
    '<text x="446" y="82" class="k3">③ 小: W↓·분리·Plug</text>' +
    '<line x1="290" y1="82" x2="440" y2="98" class="ld"/><circle cx="440" cy="98" r="2" class="dotf"/><text x="446" y="102" class="k3">③ 大: W·C↑ 수축·수화열</text>' +
    '<text x="446" y="128" class="k4">④ 시험비빔 W 최소 결정</text>' +
    '<line x1="340" y1="272" x2="440" y2="144" class="ld"/><circle cx="440" cy="144" r="2" class="dotf"/><text x="446" y="148" class="k4">④ 조립률 ±0.2 변동 보정</text>' +
    '<text x="446" y="168" class="k4">④ AE감수제 S/a +1~2%</text><text x="446" y="188" class="k4">④ Gmax·공기량↑ → S/a↓</text>' +
    '<line x1="425" y1="266" x2="440" y2="210" class="ld"/><circle cx="440" cy="210" r="2" class="dotf"/><text x="446" y="214" class="k5">⑤ 입도시험·배치 자동보정</text>' +
    '<text x="446" y="234" class="k5">⑤ 부순모래 미립분 관리</text><text x="446" y="254" class="k5">⑤ 건조수축·수화열 저감</text>' +
    '</svg>',
  subs: [
    { h: '특징(S/a 크기별 영향)', pts: ['통상 {{35~45%}} 적정', 'S/a 小: 단위수량↓·재료분리·펌프 Plug', 'S/a 大: 단위수량·시멘트량↑ → 수축·수화열'] },
    { h: '산정 시 유의사항', pts: ['시험비빔으로 [[단위수량]] 최소 결정', '[[조립률 ±0.2]] 변동 시 배합 보정', '[[고성능 AE감수제]] 사용 시 S/a {{+1~2%}}', '굵은골재 최대치수·공기량↑ → S/a↓'] },
    { h: '개선방안 및 효과', pts: ['입도시험·배치플랜트 자동보정', '부순모래 미립분 관리', '건조수축·수화열 저감'] }
  ],
  msg: '단위수량이 최소가 되는 최적 S/a — 경제성·워커빌리티·펌프 압송성의 균형',
  rel: ['조립률', '단위수량', '물결합재비', '굵은골재 최대치수', '고성능 AE감수제']
},
135: {
  tag: '배합·비교·특성',
  def: '[[단위시멘트량]]이 적어 경제적·저발열인 [[빈배합]](Lean mix)과, 많아 강도·수밀성이 양호하나 [[수화열]]·[[건조수축]]이 큰 [[부배합]](Rich mix)',
  wwh: ['시멘트량 多少 배합', '용도별 강도·발열', '부=수축 / 빈=분리 대책'],
  figT: '빈배합·부배합 체적 구성 비교',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="110" y="50" text-anchor="middle" class="b">빈배합(Lean)</text><text x="270" y="50" text-anchor="middle" class="b">부배합(Rich)</text>' +
    '<rect x="70" y="60" width="80" height="18" class="bx2"/><rect x="70" y="78" width="80" height="30" class="bx3"/><rect x="70" y="108" width="80" height="62" class="conc"/><rect x="70" y="170" width="80" height="90" class="bx"/>' +
    '<text x="64" y="73" text-anchor="end" class="s">시멘트</text><text x="64" y="97" text-anchor="end" class="s">물</text><text x="64" y="143" text-anchor="end" class="s">잔골재</text><text x="64" y="219" text-anchor="end" class="s">굵은골재</text>' +
    '<rect x="230" y="60" width="80" height="40" class="bx2"/><rect x="230" y="100" width="80" height="35" class="bx3"/><rect x="230" y="135" width="80" height="55" class="conc"/><rect x="230" y="190" width="80" height="70" class="bx"/>' +
    '<line x1="160" y1="160" x2="222" y2="160" class="ar"/><text x="191" y="152" text-anchor="middle" class="s">C ↑</text>' +
    '<line x1="310" y1="80" x2="325" y2="72" class="ld"/><circle cx="325" cy="72" r="2" class="dotf"/><text x="329" y="76" class="bl">단위시멘트량 大</text>' +
    '<line x1="310" y1="118" x2="325" y2="110" class="ld"/><circle cx="325" cy="110" r="2" class="dotf"/><text x="329" y="114" class="r">수화열·건조수축↑</text>' +
    '<line x1="310" y1="160" x2="325" y2="150" class="ld"/><circle cx="325" cy="150" r="2" class="dotf"/><text x="329" y="154" class="r">거푸집 측압 大</text>' +
    '<line x1="310" y1="230" x2="325" y2="226" class="ld"/><circle cx="325" cy="226" r="2" class="dotf"/><text x="329" y="230" class="b">강도·수밀성 양호</text>' +
    '<line x1="150" y1="215" x2="168" y2="232" class="ld"/><circle cx="168" cy="232" r="2" class="dotf"/><text x="170" y="246" class="r">블리딩</text>' +
    '<line x1="110" y1="260" x2="100" y2="278" class="ld"/><circle cx="100" cy="278" r="2" class="dotf"/>' +
    '<text x="30" y="292" class="s">경제적·수화열 小</text><text x="30" y="310" class="s">워커빌리티↓·재료분리</text><text x="30" y="328" class="s">용도: 버림·매스·채움</text>' +
    '<text x="230" y="292" class="s">용도: 고강도·수밀·PC</text><text x="230" y="310" class="s">미장 초벌 부배합→정벌 빈배합</text>' +
    '<text x="450" y="40" class="b">[빈 vs 부 비교]</text>' +
    '<text x="446" y="62" class="k3">③ 빈: 경제·저발열·분리</text><text x="446" y="82" class="k3">③ 부: 강도·수밀·성형성</text><text x="446" y="102" class="k3">③ 부: 수화열·수축·측압 大</text>' +
    '<line x1="425" y1="114" x2="440" y2="124" class="ld"/><circle cx="440" cy="124" r="2" class="dotf"/><text x="446" y="128" class="k4">④ 부: 저발열·습윤양생</text>' +
    '<line x1="410" y1="154" x2="440" y2="144" class="ld"/><circle cx="440" cy="144" r="2" class="dotf"/><text x="446" y="148" class="k4">④ 부: 타설속도·높이 조절</text>' +
    '<text x="446" y="168" class="k4">④ 빈: AE·감수제 보완</text><text x="446" y="188" class="k4">④ 미장 초벌 부→정벌 빈</text>' +
    '<text x="446" y="214" class="k5">⑤ 고성능 감수제 W·C↓</text>' +
    '<line x1="310" y1="250" x2="440" y2="230" class="ld"/><circle cx="440" cy="230" r="2" class="dotf"/><text x="446" y="234" class="k5">⑤ FA·고로슬래그 치환</text>' +
    '<text x="446" y="254" class="k5">⑤ 균열·비용 최소화</text>' +
    '</svg>',
  subs: [
    { h: '특징(빈배합 vs 부배합)', pts: ['빈: 경제·저발열·[[재료분리]]', '부: 강도·수밀·성형성 양호', '부: [[수화열]]·[[건조수축]]·[[측압]] 大'] },
    { h: '시공 시 유의사항', pts: ['부: 저발열 시멘트·습윤양생', '부: 측압 고려 타설속도·높이 조절', '빈: AE제·감수제로 [[워커빌리티]] 보완', '미장 초벌 부배합 → 정벌 빈배합'] },
    { h: '개선방안 및 효과', pts: ['고성능 감수제로 단위수량·시멘트량 저감', 'FA·고로슬래그 치환', '균열·비용 최소화'] }
  ],
  msg: '빈 = 싸고 차갑고 분리 / 부 = 강하고 뜨겁고 수축·측압 — 용도에 맞는 시멘트량',
  rel: ['단위시멘트량', '수화열', '거푸집 측압', '버림콘크리트', '매스콘크리트']
},
136: {
  tag: '재료·공법·품질',
  def: '시멘트·[[건조 잔골재]]·혼화재료를 [[공장 계량·혼합]]하여 포대/[[벌크 Silo]]로 공급하고 현장에서 [[규정 가수량]]의 물만 가하는 기배합 [[Dry Mortar]]',
  wwh: ['공장 기배합 모르타르', '품질 균일·공기 단축', '현장 규정량 가수'],
  figT: 'Dry Mortar 생산·공급 흐름 및 현장 시스템',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="40" width="180" height="160" fill="none" class="ln2 dash"/><text x="28" y="56" class="b">공장(Plant)</text>' +
    '<rect x="30" y="80" width="30" height="50" class="bx"/><path d="M30,130 L45,145 L60,130" class="ln"/><rect x="70" y="80" width="30" height="50" class="bx3"/><path d="M70,130 L85,145 L100,130" class="ln"/>' +
    '<line x1="45" y1="80" x2="110" y2="62" class="ld"/><circle cx="110" cy="62" r="2" class="dotf"/><text x="114" y="66" class="s">시멘트·혼화재</text>' +
    '<line x1="100" y1="100" x2="114" y2="92" class="ld"/><circle cx="114" cy="92" r="2" class="dotf"/><text x="118" y="96" class="s">건조 잔골재</text><text x="118" y="112" class="r">함수율 관리</text>' +
    '<line x1="45" y1="145" x2="60" y2="158" class="ar"/><line x1="85" y1="145" x2="80" y2="158" class="ar"/>' +
    '<rect x="40" y="158" width="90" height="28" class="bx2"/><text x="85" y="177" text-anchor="middle" class="s">계량·혼합</text>' +
    '<line x1="130" y1="170" x2="148" y2="176" class="ld"/><circle cx="148" cy="176" r="2" class="dotf"/><text x="152" y="180" class="s">정밀 계량</text>' +
    '<line x1="200" y1="120" x2="230" y2="120" class="ar"/><text x="215" y="110" text-anchor="middle" class="s">포대/벌크</text>' +
    '<rect x="230" y="40" width="200" height="160" fill="none" class="ln2 dash"/><text x="238" y="56" class="b">현장</text>' +
    '<rect x="250" y="70" width="40" height="70" class="bx"/><path d="M250,140 L270,160 L290,140" class="ln"/><line x1="254" y1="140" x2="250" y2="190" class="ln"/><line x1="286" y1="140" x2="290" y2="190" class="ln"/>' +
    '<line x1="290" y1="90" x2="310" y2="70" class="ld"/><circle cx="310" cy="70" r="2" class="dotf"/><text x="314" y="74" class="s">현장 벌크 Silo</text>' +
    '<rect x="320" y="110" width="24" height="30" class="bx3"/><line x1="332" y1="140" x2="332" y2="158" class="ar"/>' +
    '<line x1="344" y1="120" x2="360" y2="108" class="ld"/><circle cx="360" cy="108" r="2" class="dotf"/><text x="364" y="112" class="r">규정 가수량</text>' +
    '<line x1="270" y1="160" x2="298" y2="170" class="ar"/><rect x="300" y="160" width="55" height="24" class="bx2"/>' +
    '<line x1="355" y1="172" x2="420" y2="172" class="ar"/><text x="372" y="166" class="s">압송·시공</text>' +
    '<text x="300" y="196" class="s">연속믹서(가수)</text>' +
    '<rect x="15" y="222" width="60" height="24" class="bx"/><text x="45" y="238" text-anchor="middle" class="s">원료관리</text>' +
    '<line x1="75" y1="234" x2="87" y2="234" class="ar"/><rect x="87" y="222" width="60" height="24" class="bx"/><text x="117" y="238" text-anchor="middle" class="s">계량·혼합</text>' +
    '<line x1="147" y1="234" x2="159" y2="234" class="ar"/><rect x="159" y="222" width="60" height="24" class="bx"/><text x="189" y="238" text-anchor="middle" class="s">포대/벌크</text>' +
    '<line x1="219" y1="234" x2="231" y2="234" class="ar"/><rect x="231" y="222" width="60" height="24" class="bx"/><text x="261" y="238" text-anchor="middle" class="s">Silo 저장</text>' +
    '<line x1="291" y1="234" x2="303" y2="234" class="ar"/><rect x="303" y="222" width="60" height="24" class="bx3"/><text x="333" y="238" text-anchor="middle" class="s">규정 가수</text>' +
    '<line x1="363" y1="234" x2="375" y2="234" class="ar"/><rect x="375" y="222" width="60" height="24" class="bx"/><text x="405" y="238" text-anchor="middle" class="s">시공·양생</text>' +
    '<text x="20" y="272" class="b">[종류]</text><text x="70" y="272" class="s">조적용·미장용·바닥용·타일붙임용·보수용</text>' +
    '<text x="20" y="296" class="r">KS L 5220 · 바닥용 28일 21MPa↑</text>' +
    '<text x="20" y="320" class="s">vs 현장배합: 계량오차·편차·모래 야적 오염</text>' +
    '<text x="450" y="40" class="b">[특징·관리]</text>' +
    '<text x="446" y="62" class="k3">③ 정밀계량 품질 균일</text><text x="446" y="82" class="k3">③ 물만 가수·공기 단축</text><text x="446" y="102" class="k3">③ 분진·야적 감소</text><text x="446" y="122" class="k3">③ 단가↑·Silo 설치 필요</text>' +
    '<line x1="344" y1="128" x2="440" y2="144" class="ld"/><circle cx="440" cy="144" r="2" class="dotf"/><text x="446" y="148" class="k4">④ 규정 가수량 준수</text>' +
    '<text x="446" y="168" class="k4">④ 사용가능시간 내 사용</text><text x="446" y="188" class="k4">④ 재비빔 금지·방습 보관</text>' +
    '<line x1="290" y1="190" x2="440" y2="204" class="ld"/><circle cx="440" cy="204" r="2" class="dotf"/><text x="446" y="208" class="k4">④ Silo 기초·전도 안전</text>' +
    '<line x1="420" y1="176" x2="440" y2="230" class="ld"/><circle cx="440" cy="230" r="2" class="dotf"/><text x="446" y="234" class="k5">⑤ Silo-믹서-펌프 일체</text>' +
    '<text x="446" y="254" class="k5">⑤ 가수량 자동 제어</text><text x="446" y="274" class="k5">⑤ KS 인증·Lot 성적서</text>' +
    '</svg>',
  subs: [
    { h: '특징(현장배합 대비)', pts: ['정밀계량 [[품질 균일]]', '물만 가수·공기 단축·인력 절감', '분진·모래 야적 감소', '재료 단가↑·Silo 설치 필요'] },
    { h: '시공 시 유의사항', pts: ['[[규정 가수량]] 준수(과다 시 강도↓·균열)', '[[사용가능시간]] 내 사용', '재비빔 금지·포대 방습 보관', 'Silo 기초 지지력·전도 안전'] },
    { h: '개선방안', pts: ['Silo-믹서-펌프 일체형 연속 시스템', '가수량 자동 제어', 'KS 인증 제품·Lot별 시험성적서'] }
  ],
  msg: '공장 계량 → 포대/벌크 → 현장 물만 — 품질 균일·현장 청결·공기 단축',
  rel: ['레디믹스트 콘크리트', '미장 모르타르', '셀프레벨링', '조적 모르타르', '건조수축 균열']
},
137: {
  tag: '공법·위치·처리',
  def: '타설 구획·작업 중단으로 경화 콘크리트에 새 콘크리트를 이어 칠 때 [[전단력 작은 위치]]에 [[압축력 직각]] 방향으로 두는 계획된 [[시공이음]]',
  wwh: ['계획된 이어치기 이음', '연속성·수밀성 확보', '위치 선정·면처리'],
  figT: '시공이음 위치(전단력도) 및 수직이음 처리 상세',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="66" x2="40" y2="40" class="ld"/><circle cx="40" cy="40" r="2" class="dotf"/><text x="30" y="34" class="r">고정단(접합부) 이음 금지</text>' +
    '<text x="92" y="56" text-anchor="middle" class="s">L/4</text><text x="177" y="56" text-anchor="middle" class="s">L/4</text><text x="262" y="56" text-anchor="middle" class="s">L/4</text><text x="347" y="56" text-anchor="middle" class="s">L/4</text>' +
    '<rect x="30" y="60" width="20" height="110" class="conc"/><rect x="390" y="60" width="20" height="110" class="conc"/>' +
    '<rect x="50" y="70" width="340" height="22" class="bx"/><rect x="280" y="70" width="14" height="22" class="bx2"/>' +
    '<line x1="220" y1="64" x2="220" y2="98" class="rd dash"/><line x1="322" y1="64" x2="322" y2="98" class="rd dash"/>' +
    '<line x1="287" y1="70" x2="300" y2="40" class="ld"/><circle cx="300" cy="40" r="2" class="dotf"/><text x="304" y="36" class="s">작은보(b)</text>' +
    '<line x1="294" y1="108" x2="322" y2="108" class="ln2"/><text x="300" y="124" class="r">2b 이격</text>' +
    '<line x1="50" y1="135" x2="390" y2="135" class="ln2"/>' +
    '<path d="M50,135 L50,112 L220,135 Z" class="bx3"/><path d="M220,135 L390,158 L390,135 Z" class="bx3"/>' +
    '<text x="56" y="128" class="s">+V</text><text x="370" y="152" class="s">−V</text>' +
    '<line x1="220" y1="136" x2="224" y2="156" class="ld"/><circle cx="224" cy="156" r="2" class="dotf"/><text x="228" y="168" class="r">V≈0 경간 중앙부</text>' +
    '<text x="100" y="194" text-anchor="middle" class="s">기존 콘크리트</text><text x="225" y="194" text-anchor="middle" class="s">신규 콘크리트</text>' +
    '<rect x="40" y="200" width="120" height="120" class="conc"/><rect x="160" y="200" width="130" height="120" class="bx"/>' +
    '<rect x="160" y="245" width="12" height="30" class="conc"/>' +
    '<line x1="60" y1="212" x2="270" y2="212" class="rd"/><line x1="60" y1="310" x2="270" y2="310" class="rd"/>' +
    '<rect x="140" y="286" width="40" height="5" class="bx2"/>' +
    '<line x1="160" y1="200" x2="160" y2="320" class="rd dash"/>' +
    '<line x1="270" y1="212" x2="305" y2="226" class="ld"/><circle cx="305" cy="226" r="2" class="dotf"/><text x="309" y="230" class="s">관통 철근</text>' +
    '<line x1="172" y1="260" x2="305" y2="250" class="ld"/><circle cx="305" cy="250" r="2" class="dotf"/><text x="309" y="254" class="bl">전단키(Shear Key)</text>' +
    '<line x1="180" y1="288" x2="305" y2="276" class="ld"/><circle cx="305" cy="276" r="2" class="dotf"/><text x="309" y="280" class="bl">지수판(Water Stop)</text>' +
    '<line x1="160" y1="320" x2="190" y2="334" class="ld"/><circle cx="190" cy="334" r="2" class="dotf"/><text x="196" y="338" class="r">레이턴스 제거·습윤</text>' +
    '<text x="450" y="40" class="b">[위치·처리]</text>' +
    '<text x="446" y="62" class="k3">③ 전단력 작은 위치</text><text x="446" y="82" class="k3">③ 압축력 직각 방향</text>' +
    '<line x1="311" y1="164" x2="440" y2="98" class="ld"/><circle cx="440" cy="98" r="2" class="dotf"/><text x="446" y="102" class="k3">③ 경간 중앙부 수직이음</text>' +
    '<line x1="322" y1="98" x2="440" y2="118" class="ld"/><circle cx="440" cy="118" r="2" class="dotf"/><text x="446" y="122" class="k3">③ 작은보 폭 2배 이격</text>' +
    '<text x="446" y="150" class="k4">④ 레이턴스 제거·습윤</text><text x="446" y="170" class="k4">④ 25℃↑ 2.0h / ↓ 2.5h</text>' +
    '<text x="446" y="190" class="k4">④ 페이스트 도포·다짐</text><text x="446" y="210" class="k4">④ Metal Lath 막음판</text>' +
    '<text x="446" y="238" class="k5">⑤ 이음위치 사전 계획</text><text x="446" y="258" class="k5">⑤ 응결지연제·고압수 세척</text><text x="446" y="278" class="k5">⑤ 수팽창 지수재 병용</text>' +
    '</svg>',
  subs: [
    { h: '설치 위치', pts: ['[[전단력 작은 위치]]', '[[압축력 직각]] 방향', '[[경간 중앙부]] 수직이음', '[[작은보 폭 2배]] 이격'] },
    { h: '시공 시 유의사항', pts: ['[[레이턴스 제거]]·습윤', '이어치기 25℃ 초과 {{2.0h}} / 이하 {{2.5h}}', '페이스트·모르타르 도포 후 다짐', 'Metal Lath 막음판'] },
    { h: '개선방안', pts: ['이음위치 타설계획 사전 반영', '표면 응결지연제·고압수 세척', '수팽창 지수재 병용'] }
  ],
  msg: '전단력 작은 곳에 압축력 직각으로 — 레이턴스 제거·전단키·지수판으로 일체화·수밀',
  rel: ['Cold Joint', 'Expansion Joint', 'Control Joint', '지수판', '레이턴스']
},
138: {
  tag: '공법·위치·구성',
  def: '[[온도변화]]·[[부동침하]]·진동에 의한 변형을 흡수하도록 기초 상부부터 [[구조체 완전 분리]]하여 [[채움재]]·[[실란트]]·[[지수판]]으로 처리하는 이음',
  wwh: ['구조체 완전 분리', '변형 흡수·균열 방지', '채움·실란트·지수판'],
  figT: 'Expansion Joint 설치위치 및 바닥 단면 구성',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="20" y1="160" x2="430" y2="160" class="ln"/>' +
    '<rect x="30" y="50" width="70" height="110" class="bx"/><rect x="106" y="110" width="90" height="50" class="bx"/>' +
    '<line x1="100" y1="50" x2="100" y2="160" class="rd dash"/><line x1="106" y1="110" x2="106" y2="160" class="rd dash"/>' +
    '<text x="65" y="106" text-anchor="middle" class="s">고층</text><text x="151" y="140" text-anchor="middle" class="s">저층</text>' +
    '<line x1="103" y1="120" x2="120" y2="80" class="ld"/><circle cx="120" cy="80" r="2" class="dotf"/><text x="124" y="84" class="r">하중·높이 변화부</text>' +
    '<line x1="103" y1="156" x2="162" y2="174" class="ld"/><circle cx="162" cy="174" r="2" class="dotf"/><text x="24" y="180" class="bl">기초 상부부터 완전 분리</text>' +
    '<rect x="255" y="80" width="80" height="80" class="conc"/><rect x="341" y="80" width="80" height="80" class="bx3"/>' +
    '<text x="295" y="124" text-anchor="middle" class="s">기존</text><text x="381" y="124" text-anchor="middle" class="s">증축</text>' +
    '<line x1="338" y1="90" x2="338" y2="62" class="ld"/><circle cx="338" cy="62" r="2" class="dotf"/><text x="300" y="56" class="r">증축 접합부 E.J</text>' +
    '<line x1="330" y1="150" x2="318" y2="150" class="ar"/><line x1="346" y1="150" x2="358" y2="150" class="ar"/>' +
    '<text x="338" y="178" text-anchor="middle" class="s">온도·침하·진동 변형 흡수</text>' +
    '<rect x="40" y="230" width="160" height="60" class="conc"/><rect x="220" y="230" width="160" height="60" class="conc"/>' +
    '<rect x="200" y="244" width="20" height="46" class="bx3"/><rect x="200" y="230" width="20" height="14" class="bx2"/><rect x="190" y="224" width="40" height="6" class="bx"/>' +
    '<line x1="130" y1="258" x2="300" y2="258" class="rd"/><rect x="220" y="253" width="70" height="10" fill="none" class="ln2 dash"/>' +
    '<path d="M180,280 L200,280 Q210,272 220,280 L240,280" fill="none" class="bl"/>' +
    '<line x1="200" y1="216" x2="220" y2="216" class="ln2"/>' +
    '<line x1="210" y1="216" x2="230" y2="206" class="ld"/><circle cx="230" cy="206" r="2" class="dotf"/><text x="234" y="208" class="r">이격폭(온도·지진 변위)</text>' +
    '<line x1="205" y1="236" x2="140" y2="212" class="ld"/><circle cx="140" cy="212" r="2" class="dotf"/><text x="40" y="214" class="bl">실란트(2면 접착)</text>' +
    '<line x1="205" y1="286" x2="132" y2="312" class="ld"/><circle cx="132" cy="312" r="2" class="dotf"/><text x="40" y="316" class="bl">채움재(Filler)</text>' +
    '<line x1="230" y1="280" x2="260" y2="312" class="ld"/><circle cx="260" cy="312" r="2" class="dotf"/><text x="264" y="316" class="bl">지수판(Water Stop)</text>' +
    '<line x1="300" y1="258" x2="388" y2="246" class="ld"/><circle cx="388" cy="246" r="2" class="dotf"/><text x="392" y="250" class="bl">다웰바</text>' +
    '<text x="40" y="338" class="r">수평 이동 허용 · 수직 단차 방지</text><text x="264" y="338" class="s">다웰바 한쪽 슬리브·윤활</text>' +
    '<text x="450" y="40" class="b">[설치위치·구성]</text>' +
    '<text x="446" y="62" class="k3">③ 하중·높이 변화부</text><text x="446" y="82" class="k3">③ 신·구 증축 접합부</text><text x="446" y="102" class="k3">③ 견고한 구조체 사이</text><text x="446" y="122" class="k3">③ 채움재·실란트·지수판</text>' +
    '<text x="446" y="148" class="k4">④ 변위량 산정 이격폭</text><text x="446" y="168" class="k4">④ 지수판 연속 설치</text><text x="446" y="188" class="k4">④ E.J Cover 선형 일치</text><text x="446" y="208" class="k4">④ 다웰바 슬리브·윤활</text>' +
    '<text x="446" y="234" class="k5">⑤ 내진 E.J 층간변위 설계</text><text x="446" y="254" class="k5">⑤ 배관 신축관 통합검토</text><text x="446" y="274" class="k5">⑤ 균열·누수 방지</text>' +
    '</svg>',
  subs: [
    { h: '설치위치 및 구성', pts: ['하중·높이 변화부', '신·구 증축 접합부', '견고한 구조체 사이', '[[채움재]]·[[실란트]]·[[지수판]]'] },
    { h: '시공 시 유의사항', pts: ['온도·지진 변위량 산정 이격폭', '[[지수판]] 연속 설치', 'E.J Cover 선형 일치', '[[다웰바]] 한쪽 슬리브·윤활'] },
    { h: '개선방안 및 효과', pts: ['내진 E.J 층간변위 설계', '배관 신축관 통합 검토', '균열·누수 방지'] }
  ],
  msg: '기초 상부부터 완전 분리 — 온도·침하·진동 변형 흡수로 균열·누수 방지',
  rel: ['Control Joint', 'Construction Joint', '부동침하', '지수판', '면진']
}
});
