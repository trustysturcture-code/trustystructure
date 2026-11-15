// 디테일원 도해 답안 (Detail One 용어 양식) — 형식은 data/SCHEMA_D1.md
window.D1 = Object.assign(window.D1 || {}, {
170: {
  tag: '관리·체계·기법',
  def: '공사 전체 범위를 [[Level(계층)]]별(예: {{4단계}})로 분해하여 최소 관리단위 [[Work Package]]에 [[WBS Code]]를 부여하고 CBS·OBS와 연계하는 [[작업분류체계]]',
  wwh: ['계층별 작업분류', '범위 누락·중복 방지', 'Code 부여·CBS 연계'],
  figT: 'WBS 계층 구조 및 CBS·OBS 연계(CA)',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="46" class="s">Level 1</text>' +
    '<text x="20" y="101" class="s">Level 2</text>' +
    '<text x="20" y="155" class="s">Level 3</text>' +
    '<text x="20" y="209" class="s">Level 4</text>' +
    '<rect x="170" y="28" width="150" height="28" class="bx"/><text x="245" y="46" text-anchor="middle" class="b">건축공사 (1)</text>' +
    '<line x1="245" y1="56" x2="245" y2="70" class="ln2"/><line x1="120" y1="70" x2="370" y2="70" class="ln2"/><line x1="120" y1="70" x2="120" y2="84" class="ln2"/><line x1="245" y1="70" x2="245" y2="84" class="ln2"/><line x1="370" y1="70" x2="370" y2="84" class="ln2"/>' +
    '<rect x="75" y="84" width="90" height="26" class="bx2"/><text x="120" y="101" text-anchor="middle">지하 1.1</text><rect x="195" y="84" width="100" height="26" class="bx2"/><text x="245" y="101" text-anchor="middle">지상골조 1.2</text><rect x="325" y="84" width="90" height="26" class="bx2"/><text x="370" y="101" text-anchor="middle">마감 1.3</text>' +
    '<line x1="245" y1="110" x2="245" y2="124" class="ln2"/><line x1="180" y1="124" x2="310" y2="124" class="ln2"/><line x1="180" y1="124" x2="180" y2="138" class="ln2"/><line x1="310" y1="124" x2="310" y2="138" class="ln2"/>' +
    '<rect x="130" y="138" width="100" height="26" class="bx2"/><text x="180" y="155" text-anchor="middle">철근 1.2.1</text><rect x="255" y="138" width="110" height="26" class="bx2"/><text x="310" y="155" text-anchor="middle">콘크리트 1.2.2</text>' +
    '<line x1="310" y1="164" x2="310" y2="178" class="ln2"/><line x1="270" y1="178" x2="358" y2="178" class="ln2"/><line x1="270" y1="178" x2="270" y2="192" class="ln2"/><line x1="358" y1="178" x2="358" y2="192" class="ln2"/>' +
    '<rect x="230" y="192" width="80" height="26" class="bx3"/><text x="270" y="209" text-anchor="middle" class="s">WP 1층</text><rect x="318" y="192" width="80" height="26" class="bx3"/><text x="358" y="209" text-anchor="middle" class="s">WP 2층</text>' +
    '<line x1="232" y1="210" x2="190" y2="236" class="ld"/><circle cx="190" cy="236" r="2" class="dotf"/><text x="185" y="240" text-anchor="end" class="r">Work Package(최소단위)</text>' +
    '<line x1="320" y1="36" x2="340" y2="36" class="ld"/><circle cx="340" cy="36" r="2" class="dotf"/><text x="345" y="40" class="r">Code 1→1.2→1.2.2</text>' +
    '<rect x="75" y="262" width="90" height="26" class="bx"/><text x="120" y="279" text-anchor="middle">OBS(조직)</text><rect x="195" y="262" width="100" height="26" class="bx2"/><text x="245" y="279" text-anchor="middle" class="b">CA 관리계정</text><rect x="325" y="262" width="90" height="26" class="bx"/><text x="370" y="279" text-anchor="middle">CBS(내역)</text>' +
    '<line x1="165" y1="275" x2="193" y2="275" class="ar"/><line x1="325" y1="275" x2="297" y2="275" class="ar"/><line x1="270" y1="218" x2="250" y2="260" class="ar"/>' +
    '<line x1="245" y1="288" x2="245" y2="306" class="ld"/><circle cx="245" cy="306" r="2" class="dotf"/><text x="250" y="310" class="bl">WBS × OBS = CA → EVMS 기초</text>' +
    '<line x1="415" y1="97" x2="440" y2="66" class="ld"/><circle cx="440" cy="66" r="2" class="dotf"/><text x="446" y="70" class="k3">③ Level 4단계 분해</text><line x1="365" y1="151" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="446" y="90" class="k3">③ WBS Code 표준화</text><text x="446" y="110" class="k3">③ CBS·OBS 연계(CA)</text><line x1="398" y1="205" x2="440" y2="136" class="ld"/><circle cx="440" cy="136" r="2" class="dotf"/><text x="446" y="140" class="k4">④ 분해수준 적정 크기</text><text x="446" y="160" class="k4">④ 범위 100% 포함</text><text x="446" y="180" class="k4">④ 설계변경 시 동시 갱신</text><text x="446" y="210" class="k5">⑤ 표준 WBS 라이브러리</text><line x1="415" y1="268" x2="440" y2="226" class="ld"/><circle cx="440" cy="226" r="2" class="dotf"/><text x="446" y="230" class="k5">⑤ BIM 4D·5D 코드 연동</text><line x1="415" y1="282" x2="440" y2="246" class="ld"/><circle cx="440" cy="246" r="2" class="dotf"/><text x="446" y="250" class="k5">⑤ PMIS·EVMS 실시간</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 특징', pts: ['Project→구역→공종→WP [[Level(계층)]] 분해(예 {{4단계}})', '[[WBS Code]] 표준화(발주처·협력사 공통)', '[[CBS 연계]]·OBS 결합 = [[관리계정(CA)]]'] },
    { h: '적용 시 유의사항', pts: ['분해수준 적정(관리 가능한 크기)', '공사범위 {{100%}} 포함(상위 = 하위 합)', '설계변경 시 WBS 동시 갱신(버전관리)'] },
    { h: '개선방안', pts: ['표준 WBS 라이브러리·실적 DB화', 'BIM 4D·5D 객체와 WBS Code 연동', 'PMIS·EVMS 연계 실시간 통합관리'] }
  ],
  msg: '범위는 계층으로 쪼개고, 코드 하나로 공정·원가·조직을 묶는다 — EVMS의 기초',
  rel: ['CBS', 'OBS', 'EVMS', '관리계정(CA)', 'PMIS']
},
171: {
  tag: '지수·기준·통계',
  def: '[[직접공사비]](재료비·노무비·장비비)의 [[가격변동]]을 {{기준년도 = 100}}으로 나타낸 [[가공통계]]로, 계약 후 {{90일 이상}}·입찰일 기준 등락 {{3% 이상}} 시 [[지수조정률]] 산정 기준',
  wwh: ['직접공사비 가격지수', '시점보정·물가조정', '가중치·매월 공표'],
  figT: '건설공사비지수 변동과 물가변동 조정 요건',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="40" x2="50" y2="220" class="ln"/><line x1="50" y1="220" x2="420" y2="220" class="ln"/><text x="56" y="46" class="s">지수</text><text x="420" y="236" text-anchor="end" class="s">시간</text>' +
    '<line x1="50" y1="170" x2="420" y2="170" class="ln2 dash"/>' +
    '<line x1="80" y1="170" x2="70" y2="150" class="ld"/><circle cx="70" cy="150" r="2" class="dotf"/><text x="75" y="154" class="r">기준년도 = 100</text>' +
    '<polyline points="50,176 100,169 150,160 200,148 250,128 300,110 350,95 410,72" class="gr"/>' +
    '<line x1="380" y1="83" x2="390" y2="58" class="ld"/><circle cx="390" cy="58" r="2" class="dotf"/><text x="385" y="62" text-anchor="end" class="b">건설공사비지수</text>' +
    '<line x1="150" y1="160" x2="150" y2="220" class="ln2 dash"/><text x="150" y="234" text-anchor="middle" class="s">계약일</text>' +
    '<line x1="250" y1="128" x2="250" y2="220" class="ln2 dash"/><line x1="150" y1="206" x2="250" y2="206" class="ln2"/><text x="200" y="201" text-anchor="middle" class="r">90일 이상</text>' +
    '<line x1="150" y1="160" x2="265" y2="160" class="ln2 dash"/><line x1="265" y1="128" x2="265" y2="160" class="ln2"/>' +
    '<line x1="265" y1="144" x2="280" y2="144" class="ld"/><circle cx="280" cy="144" r="2" class="dotf"/><text x="285" y="148" class="r">등락률 3% 이상</text>' +
    '<circle cx="250" cy="128" r="4" class="rf"/>' +
    '<line x1="246" y1="124" x2="215" y2="99" class="ld"/><circle cx="215" cy="99" r="2" class="dotf"/><text x="210" y="103" text-anchor="end" class="bl">조정 요건 충족</text>' +
    '<rect x="20" y="258" width="64" height="26" class="bx2"/><text x="52" y="275" text-anchor="middle" class="s">Data 수집</text><line x1="84" y1="271" x2="89" y2="271" class="ar"/><rect x="89" y="258" width="64" height="26" class="bx2"/><text x="121" y="275" text-anchor="middle" class="s">CBS 가중치</text><line x1="153" y1="271" x2="158" y2="271" class="ar"/><rect x="158" y="258" width="64" height="26" class="bx2"/><text x="190" y="275" text-anchor="middle" class="s">가중평균</text><line x1="222" y1="271" x2="227" y2="271" class="ar"/><rect x="227" y="258" width="64" height="26" class="bx2"/><text x="259" y="275" text-anchor="middle" class="s">월별 공표</text><line x1="291" y1="271" x2="296" y2="271" class="ar"/><rect x="296" y="258" width="64" height="26" class="bx3"/><text x="328" y="275" text-anchor="middle" class="s">지수조정률</text><line x1="360" y1="271" x2="365" y2="271" class="ar"/><rect x="365" y="258" width="64" height="26" class="bx2"/><text x="397" y="275" text-anchor="middle" class="s">금액 조정</text>' +
    '<line x1="50" y1="284" x2="60" y2="302" class="ld"/><circle cx="60" cy="302" r="2" class="dotf"/><text x="65" y="306" class="r">재료비·노무비·장비비 Data</text>' +
    '<line x1="260" y1="284" x2="270" y2="302" class="ld"/><circle cx="270" cy="302" r="2" class="dotf"/><text x="275" y="306" class="bl">국가승인 가공통계</text>' +
    '<text x="446" y="40" class="b">[지수조정률 vs 품목조정률]</text>' +
    '<line x1="420" y1="170" x2="440" y2="62" class="ld"/><circle cx="440" cy="62" r="2" class="dotf"/><text x="446" y="66" class="k3">③ 기준년도 = 100 가공통계</text><text x="446" y="86" class="k3">③ 지수조정률: 간편·객관</text><text x="446" y="106" class="k3">③ 품목조정률: 복잡·분쟁</text><line x1="410" y1="72" x2="440" y2="128" class="ld"/><circle cx="440" cy="128" r="2" class="dotf"/><text x="446" y="132" class="k4">④ 경제·노임 급변 영향</text><text x="446" y="152" class="k4">④ 지역·공종 편차 괴리</text><text x="446" y="172" class="k4">④ 조정방법 계약 시 명시</text><text x="446" y="198" class="k5">⑤ 공종·지역 세분 지수</text><text x="446" y="218" class="k5">⑤ 가중치 주기적 갱신</text><line x1="430" y1="266" x2="440" y2="234" class="ld"/><circle cx="440" cy="234" r="2" class="dotf"/><text x="446" y="238" class="k5">⑤ 실적공사비 DB 연동</text>' +
    '</svg>',
  subs: [
    { h: '특징(산정방식 비교)', pts: ['[[기준년도 = 100]] 국가승인 [[가공통계]]', '[[지수조정률]]: 간편·객관 → 분쟁↓', '[[품목조정률]]: 복잡·단가차 분쟁', '조정요건 {{90일 이상}} + 입찰일 기준 {{3% 이상}}(시행령 제64조)'] },
    { h: '적용 시 유의사항', pts: ['거시경제·노임 급변 → 신청시기 관리', '지역·공종 편차 → 실제 변동과 괴리', '조정방법(지수/품목) 계약 시 명시'] },
    { h: '개선방안', pts: ['공종·지역별 세분화 지수 개발', 'CBS 연계 가중치 주기적 갱신', '실적공사비 DB 연동 예측 정확도↑'] }
  ],
  msg: '공사비 시점차를 객관 지수로 보정 — 90일·3% 넘으면 계약금액 조정',
  rel: ['물가변동', '지수조정률', '품목조정률', '실적공사비', '표준시장단가']
},
172: {
  tag: '공정·기법·관리',
  def: '[[작업구역 구획]]과 [[작업시간 통일]]([[Tact Time]])로 선·후행 작업이 공구를 일정 리듬으로 통과하게 하여, 작업시간을 Tact의 {{배수}}로 편성하는 [[연속작업]] 공정관리 기법',
  wwh: ['구역 구획·시간 통일', '대기시간·불균형 제거', 'Tact 배수 편성·반복'],
  figT: 'Tact 공정 진행 개념(공구 × Tact)',
  svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="90" y="60" width="336" height="128" fill="none" class="ln2 dash"/><text x="84" y="176" text-anchor="end" class="s">공구1</text><rect x="90" y="156" width="48" height="32" class="bx"/><text x="114" y="176" text-anchor="middle" class="b">A</text><rect x="138" y="156" width="48" height="32" class="bx2"/><text x="162" y="176" text-anchor="middle" class="b">B</text><rect x="186" y="156" width="48" height="32" class="bx3"/><text x="210" y="176" text-anchor="middle" class="b">C</text><text x="84" y="144" text-anchor="end" class="s">공구2</text><rect x="138" y="124" width="48" height="32" class="bx"/><text x="162" y="144" text-anchor="middle" class="b">A</text><rect x="186" y="124" width="48" height="32" class="bx2"/><text x="210" y="144" text-anchor="middle" class="b">B</text><rect x="234" y="124" width="48" height="32" class="bx3"/><text x="258" y="144" text-anchor="middle" class="b">C</text><text x="84" y="112" text-anchor="end" class="s">공구3</text><rect x="186" y="92" width="48" height="32" class="bx"/><text x="210" y="112" text-anchor="middle" class="b">A</text><rect x="234" y="92" width="48" height="32" class="bx2"/><text x="258" y="112" text-anchor="middle" class="b">B</text><rect x="282" y="92" width="48" height="32" class="bx3"/><text x="306" y="112" text-anchor="middle" class="b">C</text><text x="84" y="80" text-anchor="end" class="s">공구4</text><rect x="234" y="60" width="48" height="32" class="bx"/><text x="258" y="80" text-anchor="middle" class="b">A</text><rect x="282" y="60" width="48" height="32" class="bx2"/><text x="306" y="80" text-anchor="middle" class="b">B</text><rect x="330" y="60" width="48" height="32" class="bx3"/><text x="354" y="80" text-anchor="middle" class="b">C</text>' +
    '<line x1="90" y1="188" x2="426" y2="188" class="ln"/><line x1="90" y1="60" x2="90" y2="188" class="ln"/><text x="426" y="202" text-anchor="end" class="s">시간 →</text>' +
    '<line x1="90" y1="48" x2="138" y2="48" class="ln2"/><line x1="90" y1="43" x2="90" y2="53" class="ln2"/><line x1="138" y1="43" x2="138" y2="53" class="ln2"/>' +
    '<line x1="138" y1="48" x2="150" y2="30" class="ld"/><circle cx="150" cy="30" r="2" class="dotf"/><text x="155" y="34" class="r">1 Tact = 표준 작업시간</text>' +
    '<line x1="246" y1="186" x2="384" y2="92" class="ar"/>' +
    '<line x1="315" y1="138" x2="340" y2="160" class="ld"/><circle cx="340" cy="160" r="2" class="dotf"/><text x="345" y="164" class="bl">연속작업 흐름</text>' +
    '<line x1="378" y1="76" x2="400" y2="50" class="ld"/><circle cx="400" cy="50" r="2" class="dotf"/><text x="405" y="54" class="bl">반복작업·동기화</text>' +
    '<line x1="57" y1="140" x2="40" y2="244" class="ld"/><circle cx="40" cy="244" r="2" class="dotf"/><text x="45" y="248" class="bl">작업구역 구획(공구 분할)</text>' +
    '<line x1="162" y1="188" x2="200" y2="244" class="ld"/><circle cx="200" cy="244" r="2" class="dotf"/><text x="205" y="248" class="r">작업시간 통일 = 대기 0</text>' +
    '<text x="20" y="280" class="s">작업 A→B→C 가 1 Tact씩 밀려 각 공구를 연속 통과 (작업시간 = Tact의 배수)</text>' +
    '<line x1="426" y1="76" x2="440" y2="76" class="ld"/><circle cx="440" cy="76" r="2" class="dotf"/><text x="446" y="80" class="k3">③ 대기시간 감소</text><line x1="426" y1="100" x2="440" y2="96" class="ld"/><circle cx="440" cy="96" r="2" class="dotf"/><text x="446" y="100" class="k3">③ 평준화·동기화 생산</text><text x="446" y="120" class="k3">③ 작업 이상 즉시 파악</text><line x1="426" y1="170" x2="440" y2="142" class="ld"/><circle cx="440" cy="142" r="2" class="dotf"/><text x="446" y="146" class="k4">④ 한 작업 지연→전체 지장</text><text x="446" y="166" class="k4">④ 공구 물량 균등화</text><text x="446" y="186" class="k4">④ Tact = C.P 작업 기준</text><text x="446" y="212" class="k5">⑤ PC·모듈러 공업화</text><text x="446" y="232" class="k5">⑤ BIM 4D 사전 검증</text><text x="446" y="252" class="k5">⑤ Lean·Last Planner</text>' +
    '</svg>',
  subs: [
    { h: '특징(장·단점)', pts: ['[[대기시간 감소]]·공정 불균형 개선', '[[평준화]]·[[동기화]] 생산', '작업 이상 즉시 파악', '단점: 한 작업 지연 → 전체 공정 지장'] },
    { h: '적용 시 유의사항', pts: ['공구 분할 시 물량 균등화 선행', '[[Tact Time]] = Critical 작업(골조) 기준, 타 작업은 배수', '자재 JIT 반입·예비인력 버퍼 확보'] },
    { h: '개선방안', pts: ['PC·모듈러 공업화로 작업 표준화', 'BIM 4D로 공구·Tact 사전 검증', 'Lean Construction(Last Planner) 연계'] }
  ],
  msg: '구역은 나누고 시간은 맞춘다 — 대기 없는 연속 흐름으로 공기 단축',
  rel: ['LOB', 'Lean Construction', 'Last Planner', '공구분할', 'JIT']
},
173: {
  tag: '공정·기준·관리',
  def: '공정 중 관리상 중요한 작업의 착수·완료·인계 [[주요 시점]]을 지정한 [[중간관리일]]로, [[한계착수일]]·[[한계완료일]]·[[절대완료일]] {{3종}}을 기준으로 진도를 점검하는 [[공정 통제]] 기준일',
  wwh: ['주요 시점 관리일', '공종 인계·지연 방지', '한착·한완·절완 지정'],
  figT: 'Milestone 배치(한계착수·한계완료·절대완료일)',
  svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="104" y="72" text-anchor="end" class="s">토공</text><rect x="110" y="60" width="60" height="16" class="bx2"/><rect x="110" y="60" width="60" height="16" fill="none" class="rd"/><text x="104" y="104" text-anchor="end" class="s">골조</text><rect x="165" y="92" width="125" height="16" class="bx2"/><rect x="165" y="92" width="125" height="16" fill="none" class="rd"/><text x="104" y="136" text-anchor="end" class="s">커튼월</text><rect x="250" y="124" width="100" height="16" class="bx2"/><text x="104" y="168" text-anchor="end" class="s">마감</text><rect x="290" y="156" width="110" height="16" class="bx2"/><rect x="290" y="156" width="110" height="16" fill="none" class="rd"/><text x="104" y="200" text-anchor="end" class="s">설비</text><rect x="230" y="188" width="160" height="16" class="bx2"/>' +
    '<line x1="110" y1="212" x2="420" y2="212" class="ln"/><line x1="110" y1="52" x2="110" y2="212" class="ln"/>' +
    '<path d="M165,93 l7,7 l-7,7 l-7,-7 z" class="rf"/><path d="M290,93 l7,7 l-7,7 l-7,-7 z" class="rf"/><path d="M400,157 l7,7 l-7,7 l-7,-7 z" class="rf"/><path d="M250,125 l7,7 l-7,7 l-7,-7 z" class="rf"/>' +
    '<line x1="165" y1="93" x2="150" y2="44" class="ld"/><circle cx="150" cy="44" r="2" class="dotf"/><text x="145" y="48" text-anchor="end" class="bl">한계착수일</text>' +
    '<line x1="290" y1="93" x2="300" y2="44" class="ld"/><circle cx="300" cy="44" r="2" class="dotf"/><text x="305" y="48" class="bl">한계완료일</text>' +
    '<line x1="170" y1="62" x2="175" y2="30" class="ld"/><circle cx="175" cy="30" r="2" class="dotf"/><text x="180" y="34" class="r">C.P(주공정)</text>' +
    '<line x1="400" y1="171" x2="330" y2="226" class="ld"/><circle cx="330" cy="226" r="2" class="dotf"/><text x="335" y="230" class="r">절대완료일</text>' +
    '<line x1="250" y1="139" x2="230" y2="226" class="ld"/><circle cx="230" cy="226" r="2" class="dotf"/><text x="225" y="230" text-anchor="end" class="s">골조→커튼월 인계점</text>' +
    '<line x1="110" y1="270" x2="420" y2="270" class="ln"/><path d="M165,263 l7,7 l-7,7 l-7,-7 z" class="rf"/><path d="M290,263 l7,7 l-7,7 l-7,-7 z" class="rf"/><path d="M400,263 l7,7 l-7,7 l-7,-7 z" class="rf"/><text x="104" y="274" text-anchor="end" class="s">공기</text>' +
    '<text x="137" y="290" text-anchor="middle" class="s">구간1</text><text x="227" y="290" text-anchor="middle" class="s">구간2</text><text x="345" y="290" text-anchor="middle" class="s">구간3</text>' +
    '<line x1="290" y1="277" x2="240" y2="304" class="ld"/><circle cx="240" cy="304" r="2" class="dotf"/><text x="245" y="308" class="bl">◆ 진도 점검 기준 → 구간별 목표·지연 조기 인지</text>' +
    '<text x="446" y="66" class="k3">③ 한계착수: 이전 착수 불가</text><text x="446" y="86" class="k3">③ 한계완료: 이후 완료 불가</text><line x1="407" y1="164" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="446" y="106" class="k3">③ 절대완료: 당일 정확 완료</text>' +
    '<text x="446" y="132" class="k4">④ C.P·인계점 위주 지정</text><line x1="390" y1="196" x2="440" y2="148" class="ld"/><circle cx="440" cy="148" r="2" class="dotf"/><text x="446" y="152" class="k4">④ 협력사 인계일 사전합의</text><text x="446" y="172" class="k4">④ 지연 시 만회공정표</text>' +
    '<text x="446" y="198" class="k5">⑤ PMIS·EVMS 달성률</text><text x="446" y="218" class="k5">⑤ BIM 4D 인계 검토</text><text x="446" y="238" class="k5">⑤ 기성·인센티브 연동</text>' +
    '</svg>',
  subs: [
    { h: '종류(Milestone)', pts: ['[[한계착수일]]: 지정일 이전 착수 불가', '[[한계완료일]]: 지정일 이후 완료 불가', '[[절대완료일]]: 지정일 정확히 완료(준공)'] },
    { h: '적용 시 유의사항', pts: ['C.P·공종 인계점 위주 지정(과다 지양)', '협력업체 간 인계일 사전 합의', '지연 시 원인분석·만회공정표(MCX) 수립'] },
    { h: '개선방안', pts: ['PMIS·EVMS 연계 달성률 실시간 모니터링', 'BIM 4D 공종 인계 시뮬레이션', '하도급 기성·인센티브 Milestone 연동'] }
  ],
  msg: '전체 공기를 ◆ 구간 목표로 쪼개 — 지연은 조기에, 인계는 원활하게',
  rel: ['Network 공정표', 'C.P', 'MCX', 'EVMS', '공정관리']
},
174: {
  tag: '공정·원가·기법',
  def: '[[정상점(Normal point)]]과 [[특급점(Crash point)]]을 잇는 직선의 기울기로, [[공기 1일 단축]] 시 추가되는 [[직접비 증가액]] {{Cost slope = (특급비용 − 정상비용) / (정상공기 − 특급공기)}}',
  wwh: ['1일 단축 직접비 증가', '최소비용 단축 작업 선별', 'C.P 최소 구배부터 단축'],
  figT: '공기-비용 곡선과 Cost slope · 최적공기',
  svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="60" y1="40" x2="60" y2="240" class="ln"/><line x1="60" y1="240" x2="410" y2="240" class="ln"/><text x="64" y="36" class="s">직접비</text><text x="410" y="254" text-anchor="end" class="s">공기</text>' +
    '<line x1="130" y1="80" x2="130" y2="240" class="ln2 dash"/><line x1="60" y1="80" x2="345" y2="80" class="ln2 dash"/><line x1="330" y1="190" x2="330" y2="240" class="ln2 dash"/><line x1="60" y1="190" x2="330" y2="190" class="ln2 dash"/>' +
    '<text x="130" y="253" text-anchor="middle" class="s">특급공기</text><text x="330" y="253" text-anchor="middle" class="s">정상공기</text><text x="56" y="84" text-anchor="end" class="s">특급비용</text><text x="56" y="194" text-anchor="end" class="s">정상비용</text>' +
    '<line x1="130" y1="80" x2="330" y2="190" class="ln"/>' +
    '<circle cx="130" cy="80" r="5" class="rf"/><circle cx="330" cy="190" r="5" class="bf"/>' +
    '<line x1="345" y1="80" x2="345" y2="190" class="ln2"/><text x="350" y="139" class="r">ΔC</text>' +
    '<line x1="130" y1="274" x2="330" y2="274" class="ln2"/><line x1="130" y1="268" x2="130" y2="280" class="ln2"/><line x1="330" y1="268" x2="330" y2="280" class="ln2"/><text x="230" y="270" text-anchor="middle" class="r">ΔT</text>' +
    '<line x1="130" y1="80" x2="100" y2="52" class="ld"/><circle cx="100" cy="52" r="2" class="dotf"/><text x="105" y="56" class="bl">특급점(Crash point)</text>' +
    '<line x1="330" y1="190" x2="300" y2="222" class="ld"/><circle cx="300" cy="222" r="2" class="dotf"/><text x="295" y="226" text-anchor="end" class="bl">정상점(Normal point)</text>' +
    '<line x1="230" y1="135" x2="260" y2="110" class="ld"/><circle cx="260" cy="110" r="2" class="dotf"/><text x="265" y="114" class="r">기울기 = Cost slope</text>' +
    '<line x1="200" y1="118" x2="160" y2="176" class="ld"/><circle cx="160" cy="176" r="2" class="dotf"/><text x="165" y="180" class="r">1일 단축 → 직접비↑</text>' +
    '<text x="20" y="302" class="b">Cost slope = ΔC / ΔT (원/일)</text>' +
    '<text x="20" y="322" class="r">= (특급비용 − 정상비용) / (정상공기 − 특급공기)</text>' +
    '<text x="446" y="22" class="b">[총공사비 곡선]</text>' +
    '<line x1="460" y1="30" x2="460" y2="130" class="ln"/><line x1="460" y1="130" x2="630" y2="130" class="ln"/>' +
    '<path d="M470,48 Q520,105 620,112" class="rd"/><path d="M470,120 Q570,105 620,60" class="ln2"/><path d="M470,38 Q545,92 620,42" class="ln"/>' +
    '<circle cx="545" cy="66" r="3" class="dotf"/><line x1="545" y1="66" x2="545" y2="130" class="ln2 dash"/>' +
    '<text x="500" y="44" class="s">총공사비</text><text x="586" y="104" class="s">직접비</text><text x="588" y="84" class="s">간접비</text><text x="545" y="143" text-anchor="middle" class="r">최적공기</text>' +
    '<line x1="290" y1="168" x2="440" y2="162" class="ld"/><circle cx="440" cy="162" r="2" class="dotf"/><text x="446" y="166" class="k3">③ Cost slope 클수록 비용↑</text><line x1="470" y1="120" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="446" y="186" class="k3">③ 단축 시 직접비↑·간접비↓</text><line x1="345" y1="190" x2="440" y2="202" class="ld"/><circle cx="440" cy="202" r="2" class="dotf"/><text x="446" y="206" class="k3">③ 정상~특급 구간 직선 비례</text><text x="446" y="232" class="k4">④ 최소 Cost slope부터</text><text x="446" y="252" class="k4">④ C.P 작업만 단축·재검토</text><line x1="130" y1="240" x2="440" y2="268" class="ld"/><circle cx="440" cy="268" r="2" class="dotf"/><text x="446" y="272" class="k4">④ 특급점 이하 단축 불가</text><text x="446" y="298" class="k5">⑤ 정상·특급 실적 DB</text><text x="446" y="318" class="k5">⑤ MCX 시뮬레이션 자동화</text><text x="446" y="338" class="k5">⑤ 공법 개선→구배 저감</text>' +
    '</svg>',
  subs: [
    { h: '특징(영향)', pts: ['Cost slope 클수록 단축 1일당 비용↑', '공기단축 → 직접비↑·간접비↓', '정상점~특급점 구간 직선(비례) 가정'] },
    { h: '적용 시 유의사항', pts: ['Cost slope 최소 작업부터 단축', '[[주공정(C.P)]] 작업만 단축, C.P 변경 재검토', '[[특급점(Crash point)]] 이하 단축 불가 — 품질·안전 저하'] },
    { h: '개선방안', pts: ['정상·특급 공기/비용 실적 DB 구축', 'BIM·공정 시뮬레이션(MCX 자동화)', '공법 개선(PC화·장비 대형화)으로 구배 저감'] }
  ],
  msg: '기울기가 작은 C.P 작업부터 줄여라 — 총공사비 최소점이 최적공기',
  rel: ['MCX', 'Crash point', '최적공기', 'C.P', '공기단축']
},
175: {
  tag: '공정·원가·기준',
  def: '자원을 최대로 투입해도 더 이상 공기를 줄일 수 없는 [[단축 한계]]로, [[Crash time(특급공기)]]와 [[Crash cost(특급비용)]]가 만나는 점이며 이후 투입은 [[추가비용만 증가]] {{단축가능일수 = Normal time − Crash time}}',
  wwh: ['공기단축 한계점', 'Cost slope·MCX 기준', '최대 자원 투입 산정'],
  figT: '시간-비용 곡선과 특급점(단축 한계)',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="80" y1="30" x2="80" y2="240" class="ln"/><line x1="80" y1="240" x2="420" y2="240" class="ln"/><text x="86" y="48" class="s">비용</text><text x="420" y="254" text-anchor="end" class="s">공기</text>' +
    '<rect x="80" y="206" width="85" height="34" class="soil"/><text x="122" y="228" text-anchor="middle" class="s">단축 불가</text>' +
    '<line x1="165" y1="90" x2="165" y2="206" class="ln2 dash"/><line x1="80" y1="90" x2="165" y2="90" class="ln2 dash"/><line x1="350" y1="200" x2="350" y2="240" class="ln2 dash"/><line x1="80" y1="200" x2="350" y2="200" class="ln2 dash"/>' +
    '<text x="165" y="254" text-anchor="middle" class="s">Crash time</text><text x="350" y="254" text-anchor="middle" class="s">Normal time</text><text x="76" y="94" text-anchor="end" class="s">Crash cost</text><text x="76" y="204" text-anchor="end" class="s">Normal cost</text>' +
    '<path d="M350,200 Q210,180 165,90" class="ln"/>' +
    '<line x1="165" y1="90" x2="165" y2="40" class="rd dash"/>' +
    '<line x1="165" y1="90" x2="350" y2="200" class="ln2 dash"/>' +
    '<circle cx="165" cy="90" r="5" class="rf"/><circle cx="350" cy="200" r="5" class="bf"/>' +
    '<line x1="165" y1="90" x2="190" y2="58" class="ld"/><circle cx="190" cy="58" r="2" class="dotf"/><text x="195" y="62" class="bl">특급점(Crash point) = 단축 한계</text>' +
    '<line x1="165" y1="50" x2="185" y2="38" class="ld"/><circle cx="185" cy="38" r="2" class="dotf"/><text x="190" y="42" class="r">추가비용만 증가(특급점 이후)</text>' +
    '<line x1="350" y1="200" x2="320" y2="224" class="ld"/><circle cx="320" cy="224" r="2" class="dotf"/><text x="315" y="228" text-anchor="end" class="bl">정상점(Normal point)</text>' +
    '<line x1="258" y1="145" x2="290" y2="120" class="ld"/><circle cx="290" cy="120" r="2" class="dotf"/><text x="295" y="124" class="r">Cost slope(직선 기울기)</text>' +
    '<line x1="214" y1="152" x2="170" y2="176" class="ld"/><circle cx="170" cy="176" r="2" class="dotf"/><text x="165" y="180" text-anchor="end" class="r">자원 최대 투입</text>' +
    '<line x1="165" y1="270" x2="350" y2="270" class="ln2"/><line x1="165" y1="264" x2="165" y2="276" class="ln2"/><line x1="350" y1="264" x2="350" y2="276" class="ln2"/>' +
    '<line x1="300" y1="270" x2="320" y2="288" class="ld"/><circle cx="320" cy="288" r="2" class="dotf"/><text x="325" y="292" class="r">공기단축 가능일수 = Normal − Crash time</text>' +
    '<text x="20" y="316" class="b">Cost slope = (Crash cost − Normal cost)</text>' +
    '<text x="108" y="336" class="b">/ (Normal time − Crash time)</text>' +
    '<line x1="380" y1="58" x2="440" y2="62" class="ld"/><circle cx="440" cy="62" r="2" class="dotf"/><text x="446" y="66" class="k3">③ 특급: 최단공기·최대비</text><line x1="350" y1="200" x2="440" y2="82" class="ld"/><circle cx="440" cy="82" r="2" class="dotf"/><text x="446" y="86" class="k3">③ 정상: 경제적·최소 직접비</text><text x="446" y="106" class="k3">③ 최대 자원(야간·휴일·장비)</text><text x="446" y="132" class="k4">④ 현장여건(공간·양중) 반영</text><text x="446" y="152" class="k4">④ 근접 시 품질·안전 관리</text><text x="446" y="172" class="k4">④ 도달 작업 단축 제외</text><text x="446" y="198" class="k5">⑤ Normal·Crash 실적 DB</text><text x="446" y="218" class="k5">⑤ 신공법·장비 대형화</text><text x="446" y="238" class="k5">⑤ MCX·BIM 시뮬레이션</text>' +
    '</svg>',
  subs: [
    { h: '특징(정상점 vs 특급점)', pts: ['특급점: 최단공기·최대 직접비', '정상점: 경제적 투입·최소 직접비', '최대 자원 투입(야간·휴일·장비 추가)'] },
    { h: '적용 시 유의사항', pts: ['현장 여건(작업공간·양중능력·간섭) 반영', '특급점 근접 시 품질·안전 저하 관리', '도달 작업은 단축 제외 → 다음 최소 구배 작업'] },
    { h: '개선방안', pts: ['Normal/Crash 실적 자료 DB화', '신공법·장비 대형화로 Crash time 단축', 'MCX 프로그램·BIM 공정 시뮬레이션'] }
  ],
  msg: '특급점을 넘으면 돈만 든다 — 단축 한계를 알고 무리한 투입을 막는다',
  rel: ['Cost slope', 'MCX', 'Normal point', '최적공기', 'C.P']
},
176: {
  tag: '공정·자원·기법',
  def: '인력·장비·자재를 [[여유시간(Float)]] 내에서 균등 배분하여 자원 [[Peak]]를 깎고 투입 규모를 목표 [[동원인원]] 수준으로 [[자원평준화]]하는 [[자원배당]]으로 {{EST·LST}} 부하도로 검토',
  wwh: ['자원 균등 배분', 'Peak 제거·낭비 최소', 'Float 내 작업 이동'],
  figT: '자원 부하도(평준화 전·후)',
  svg: '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="60" y="182" width="36" height="48" class="bx2"/><rect x="96" y="150" width="36" height="80" class="bx2"/><rect x="132" y="150" width="36" height="80" class="bx2"/><rect x="132" y="102" width="36" height="48" class="bx3"/><rect x="168" y="150" width="36" height="80" class="bx2"/><rect x="168" y="86" width="36" height="64" class="bx3"/><rect x="204" y="150" width="36" height="80" class="bx2"/><rect x="204" y="118" width="36" height="32" class="bx3"/><rect x="240" y="166" width="36" height="64" class="bx2"/><rect x="276" y="182" width="36" height="48" class="bx2"/><rect x="312" y="198" width="36" height="32" class="bx2"/><rect x="348" y="198" width="36" height="32" class="bx2"/><rect x="384" y="214" width="36" height="16" class="bx2"/>' +
    '<polyline points="60,230 60,166 96,166 96,150 132,150 132,150 168,150 168,150 204,150 204,150 240,150 240,150 276,150 276,150 312,150 312,166 348,166 348,182 384,182 384,182 420,182 420,230" class="gr"/>' +
    '<line x1="60" y1="40" x2="60" y2="230" class="ln"/><line x1="60" y1="230" x2="420" y2="230" class="ln"/><text x="64" y="46" class="s">인원</text><text x="420" y="244" text-anchor="end" class="s">일(day)</text>' +
    '<line x1="60" y1="150" x2="420" y2="150" class="rd dash"/>' +
    '<line x1="410" y1="150" x2="405" y2="140" class="ld"/><circle cx="405" cy="140" r="2" class="dotf"/><text x="400" y="144" text-anchor="end" class="r">동원인원 목표</text>' +
    '<line x1="186" y1="86" x2="200" y2="60" class="ld"/><circle cx="200" cy="60" r="2" class="dotf"/><text x="205" y="64" class="r">Peak(자원 과다)</text>' +
    '<line x1="150" y1="120" x2="120" y2="104" class="ld"/><circle cx="120" cy="104" r="2" class="dotf"/><text x="115" y="108" text-anchor="end" class="r">초과분 삭감</text>' +
    '<line x1="220" y1="110" x2="360" y2="190" class="ar"/>' +
    '<line x1="255" y1="130" x2="265" y2="100" class="ld"/><circle cx="265" cy="100" r="2" class="dotf"/><text x="270" y="104" class="bl">Float 내 작업 이동</text>' +
    '<line x1="96" y1="200" x2="80" y2="262" class="ld"/><circle cx="80" cy="262" r="2" class="dotf"/><text x="85" y="266" class="b">EST 부하도(평준화 전)</text>' +
    '<line x1="330" y1="166" x2="305" y2="258" class="ld"/><circle cx="305" cy="258" r="2" class="dotf"/><text x="310" y="262" class="g">평준화 후 = 균등 배분</text>' +
    '<text x="20" y="296" class="s">부하도(EST·LST) → 균형도(Peak 확인) → Float 내 이동 → 균등 배분 → 공정표 수정</text>' +
    '<text x="446" y="66" class="k3">③ EST: 투자↑·공기 준수</text><text x="446" y="86" class="k3">③ LST: 투자↓·공기 위험</text><line x1="378" y1="100" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="446" y="106" class="k3">③ Float 내 균등 배분</text><text x="446" y="132" class="k4">④ C.P 작업 이동 불가</text><line x1="420" y1="150" x2="440" y2="148" class="ld"/><circle cx="440" cy="148" r="2" class="dotf"/><text x="446" y="152" class="k4">④ Float 소진→지연 위험</text><text x="446" y="172" class="k4">④ 우선 자원(T/C) 먼저</text><text x="446" y="198" class="k5">⑤ Resource Leveling S/W</text><text x="446" y="218" class="k5">⑤ BIM 4D·5D 자원 검토</text><text x="446" y="238" class="k5">⑤ Multi-skill 숙련공</text>' +
    '</svg>',
  subs: [
    { h: '특징(배당 방식)', pts: ['[[EST 방식]]: 초기 투자비↑·공기 준수 유리', '[[LST 방식]]: 초기 투자비↓·공기 미준수 우려', '[[여유시간(Float)]] 내 균등 배분(EST·LST 절충)'] },
    { h: '적용 시 유의사항', pts: ['C.P 작업은 이동 불가(비주공정만 조정)', 'Float 소진 → 공기 지연 위험 검토', '우선순위 자원(타워크레인 등) 먼저 평준화'] },
    { h: '개선방안', pts: ['공정 S/W Resource Leveling 활용', 'BIM 4D·5D 연계 자원 시뮬레이션', 'Multi-skill 숙련공 운용으로 유연성 확보'] }
  ],
  msg: 'Peak는 깎고 골은 메운다 — Float 안에서 자원 평준화로 유휴·낭비 제거',
  rel: ['자원평준화', 'Float', 'EST·LST', 'Network 공정표', 'MCX']
},
177: {
  tag: '공정·원가·통합관리',
  def: '[[PV(BCWS)]]·[[EV(BCWP)]]·[[AC(ACWP)]] 3요소로 공정·원가 편차와 효율({{SPI = EV/PV}}, {{CPI = EV/AC}})을 분석하고 [[EAC]]를 예측하는 [[공정·원가 통합관리]] 체계',
  wwh: ['PV·EV·AC 3요소', '지연·초과 조기 경보', '편차·지수→EAC 예측'],
  figT: 'EVMS S-Curve와 SV·CV·EAC',
  svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="60" y1="30" x2="60" y2="250" class="ln"/><line x1="60" y1="250" x2="420" y2="250" class="ln"/><text x="64" y="36" class="s">비용</text><text x="420" y="264" text-anchor="end" class="s">시간</text>' +
    '<line x1="60" y1="100" x2="400" y2="100" class="ln2 dash"/><text x="404" y="104" class="b">BAC</text>' +
    '<polyline points="60,247.9 70,247.3 80,246.6 90,245.6 100,244.4 110,242.9 120,241 130,238.6 140,235.7 150,232.1 160,227.8 170,222.6 180,216.6 190,209.7 200,201.9 210,193.4 220,184.3 230,175 240,165.7 250,156.6 260,148.1 270,140.3 280,133.4 290,127.4 300,122.2 310,117.9 320,114.3 330,111.4 340,109 350,107.1 360,105.6 370,104.4 380,103.4 390,102.7 400,102.1" class="ln"/>' +
    '<polyline points="60,248.9 70,248.6 80,248.3 90,247.8 100,247.2 110,246.4 120,245.3 130,244.1 140,242.4 150,240.4 160,237.8 170,234.6 180,230.7 190,225.9 200,220 210,213.1 220,204.9 230,195.5 240,185" class="rd"/>' +
    '<polyline points="60,249.2 70,249 80,248.7 90,248.4 100,247.9 110,247.3 120,246.6 130,245.6 140,244.4 150,242.9 160,241 170,238.6 180,235.7 190,232.1 200,227.8 210,222.6 220,216.6 230,209.7 240,201.9" class="gr"/>' +
    '<line x1="240" y1="40" x2="240" y2="250" class="ln2 dash"/><text x="240" y="264" text-anchor="middle" class="s">Data Date</text>' +
    '<line x1="240" y1="185" x2="400" y2="47.5" class="rd dash"/><text x="404" y="51.5" class="r">EAC</text>' +
    '<line x1="418" y1="55.5" x2="418" y2="100" class="ln2"/>' +
    '<line x1="250" y1="165.7" x2="250" y2="201.9" class="ln2"/><line x1="262" y1="185" x2="262" y2="201.9" class="ln2"/>' +
    '<line x1="225" y1="179.7" x2="160" y2="96" class="ld"/><circle cx="160" cy="96" r="2" class="dotf"/><text x="155" y="100" text-anchor="end" class="b">PV(BCWS) 계획</text>' +
    '<line x1="225" y1="200.4" x2="160" y2="124" class="ld"/><circle cx="160" cy="124" r="2" class="dotf"/><text x="155" y="128" text-anchor="end" class="r">AC(ACWP) 실투입</text>' +
    '<line x1="225" y1="213.2" x2="160" y2="152" class="ld"/><circle cx="160" cy="152" r="2" class="dotf"/><text x="155" y="156" text-anchor="end" class="g">EV(BCWP) 기성</text>' +
    '<line x1="250" y1="183.8" x2="280" y2="190" class="ld"/><circle cx="280" cy="190" r="2" class="dotf"/><text x="285" y="194" class="r">SV = EV − PV (−) 공정 지연</text>' +
    '<line x1="262" y1="193.5" x2="280" y2="214" class="ld"/><circle cx="280" cy="214" r="2" class="dotf"/><text x="285" y="218" class="r">CV = EV − AC (−) 원가 초과</text>' +
    '<line x1="400" y1="47.5" x2="370" y2="30" class="ld"/><circle cx="370" cy="30" r="2" class="dotf"/><text x="365" y="34" text-anchor="end" class="r">EAC = BAC / CPI</text>' +
    '<rect x="20" y="282" width="60" height="24" class="bx2"/><text x="50" y="298" text-anchor="middle" class="s">WBS·CBS</text><line x1="80" y1="294" x2="89" y2="294" class="ar"/><rect x="90" y="282" width="60" height="24" class="bx2"/><text x="120" y="298" text-anchor="middle" class="s">CA 설정</text><line x1="150" y1="294" x2="159" y2="294" class="ar"/><rect x="160" y="282" width="60" height="24" class="bx2"/><text x="190" y="298" text-anchor="middle" class="s">PV 수립</text><line x1="220" y1="294" x2="229" y2="294" class="ar"/><rect x="230" y="282" width="60" height="24" class="bx2"/><text x="260" y="298" text-anchor="middle" class="s">EV·AC 측정</text><line x1="290" y1="294" x2="299" y2="294" class="ar"/><rect x="300" y="282" width="60" height="24" class="bx2"/><text x="330" y="298" text-anchor="middle" class="s">편차·지수</text><line x1="360" y1="294" x2="369" y2="294" class="ar"/><rect x="370" y="282" width="60" height="24" class="bx3"/><text x="400" y="298" text-anchor="middle" class="s">EAC·만회</text>' +
    '<line x1="240" y1="44" x2="440" y2="62" class="ld"/><circle cx="440" cy="62" r="2" class="dotf"/><text x="446" y="66" class="k3">③ SPI = EV/PV, 1.0 미만 지연</text><text x="446" y="86" class="k3">③ CPI = EV/AC, 1.0 미만 초과</text><line x1="418" y1="80" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="446" y="106" class="k3">③ VAC = BAC − EAC</text><text x="446" y="132" class="k4">④ WBS·CBS 코드 일치</text><text x="446" y="152" class="k4">④ EV 측정기준 사전합의</text><text x="446" y="172" class="k4">④ Data Date 통일</text><text x="446" y="198" class="k5">⑤ PMIS·ERP AC 자동집계</text><text x="446" y="218" class="k5">⑤ BIM 5D EV 자동산정</text><text x="446" y="238" class="k5">⑤ 표준 WBS·CBS 운영</text>' +
    '</svg>',
  subs: [
    { h: '분석지표', pts: ['{{SPI = EV/PV}}, {{1.0}} 미만 = 공정 지연', '{{CPI = EV/AC}}, {{1.0}} 미만 = 원가 초과', '{{EAC = BAC/CPI}}, {{VAC = BAC − EAC}}'] },
    { h: '적용 시 유의사항', pts: ['WBS·CBS 코드 일치(EV 산정 전제)', 'EV 측정기준(물량·Milestone) 사전 합의', 'AC 집계·기성 측정 Data Date 통일'] },
    { h: '개선방안', pts: ['PMIS·ERP 연동 AC 자동 집계', 'BIM 5D 물량 기반 EV 자동 산정', '표준 WBS·CBS·관리계정 발주자·시공자 공동 운영'] }
  ],
  msg: '편차는 EV에서 빼고, 지수는 EV로 나눈다 — 지연·초과를 조기에 잡아 EAC 예측',
  rel: ['WBS', 'CBS', 'S-Curve', '관리계정(CA)', 'PMIS']
},
178: {
  tag: '원가·기준·체계',
  def: '[[재료비·노무비·경비]]의 [[순공사원가]]에 [[일반관리비]](순공사원가 × {{6%}} 이내)·[[이윤]]({{15%}} 이내)을 더한 총원가에 손해보험료·부가가치세를 더해 총공사비를 산정하는 [[원가계산서]]',
  wwh: ['비목별 원가 계산서', '예정가격·예산 통제', '순공사원가→총공사비'],
  figT: '원가계산서 구성(적상) 및 산정식',
  svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="20" y="40" class="b">[원가계산서 — 아래부터 적상]</text>' +
    '<text x="20" y="64" class="s">재+노+경=순공사원가 → +일반+이윤=총원가 → +보험·부가세=총공사비</text>' +
    '<rect x="40" y="290" width="110" height="50" class="bx2"/><text x="95" y="319" text-anchor="middle" class="b">재료비</text><rect x="40" y="240" width="110" height="50" class="bx2"/><text x="95" y="269" text-anchor="middle" class="b">노무비(직접·간접)</text><rect x="40" y="200" width="110" height="40" class="bx2"/><text x="95" y="224" text-anchor="middle" class="b">경비</text><rect x="40" y="166" width="110" height="34" class="bx"/><text x="95" y="187" text-anchor="middle" class="b">일반관리비</text><rect x="40" y="132" width="110" height="34" class="bx"/><text x="95" y="153" text-anchor="middle" class="b">이윤</text><rect x="40" y="98" width="110" height="34" class="bx3"/><text x="95" y="119" text-anchor="middle" class="b">보험료·부가세</text><line x1="160" y1="98" x2="160" y2="340" class="ln"/><line x1="156" y1="340" x2="160" y2="340" class="ln"/><line x1="160" y1="98" x2="225" y2="98" class="ld"/><circle cx="225" cy="98" r="2" class="dotf"/><text x="230" y="102" class="b">총공사비 = 총원가 + 보험료·부가세</text><text x="230" y="118" class="r">손해보험료 + 부가가치세</text><line x1="174" y1="132" x2="174" y2="340" class="ln"/><line x1="170" y1="340" x2="174" y2="340" class="ln"/><line x1="174" y1="132" x2="225" y2="132" class="ld"/><circle cx="225" cy="132" r="2" class="dotf"/><text x="230" y="136" class="b">총원가 = 순공사원가 + 일반 + 이윤</text><text x="230" y="152" class="r">이윤 ≤ (노+경+일반)×15%</text><text x="230" y="168" class="r">일반관리비 ≤ 순공사원가 × 6%</text><line x1="188" y1="200" x2="188" y2="340" class="ln"/><line x1="184" y1="340" x2="188" y2="340" class="ln"/><line x1="188" y1="200" x2="225" y2="200" class="ld"/><circle cx="225" cy="200" r="2" class="dotf"/><text x="230" y="204" class="b">순공사원가 = 재료비 + 노무비 + 경비</text><text x="230" y="220" class="r">재료비 = (정미 + 할증)×단가</text>' +
    '<line x1="150" y1="262" x2="225" y2="250" class="ld"/><circle cx="225" cy="250" r="2" class="dotf"/><text x="230" y="254" class="s">노무비 = 직접노무비 + 간접노무비</text>' +
    '<line x1="150" y1="225" x2="225" y2="270" class="ld"/><circle cx="225" cy="270" r="2" class="dotf"/><text x="230" y="274" class="s">경비: 직접계상 + 승률계상(안전관리비 등)</text>' +
    '<line x1="150" y1="310" x2="225" y2="294" class="ld"/><circle cx="225" cy="294" r="2" class="dotf"/><text x="230" y="298" class="r">직접노무비 = 작업량 × 시중노임단가</text>' +
    '<text x="446" y="66" class="k3">③ 순공사원가 = 재+노+경</text><line x1="372" y1="148" x2="440" y2="82" class="ld"/><circle cx="440" cy="82" r="2" class="dotf"/><text x="446" y="86" class="k3">③ 이윤율 상한 15%</text><line x1="405" y1="164" x2="440" y2="102" class="ld"/><circle cx="440" cy="102" r="2" class="dotf"/><text x="446" y="106" class="k3">③ 일반관리비 상한 6%</text><text x="446" y="132" class="k4">④ 물량 누락·중복 방지</text><line x1="432" y1="266" x2="440" y2="148" class="ld"/><circle cx="440" cy="148" r="2" class="dotf"/><text x="446" y="152" class="k4">④ 법정경비 누락 금지</text><text x="446" y="172" class="k4">④ 최신 품셈·노임 적용</text><text x="446" y="198" class="k5">⑤ BIM 5D 물량 자동산출</text><text x="446" y="218" class="k5">⑤ 표준시장단가·실적 DB</text><text x="446" y="238" class="k5">⑤ CBS 표준화·데이터 호환</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 산정기준', pts: ['[[재료비·노무비·경비]] = [[순공사원가]]', '[[이윤]]율 상한 {{15%}} ((노무비+경비+일반관리비) 기준)', '[[일반관리비]] = 순공사원가 × {{6%}} 이내'] },
    { h: '적용 시 유의사항', pts: ['순공사원가 물량 누락·중복 방지', '법정경비(산재·고용보험료·안전관리비·환경보전비) 누락 금지', '최신 할증률·품셈·시중노임단가 적용'] },
    { h: '개선방안', pts: ['BIM 5D 물량 자동산출', '표준시장단가·실적공사비 DB 확충', 'CBS 표준화로 발주처·시공사 데이터 호환'] }
  ],
  msg: '재·노·경 → 일반관리비·이윤 → 보험·부가세 — 아래부터 쌓은 원가가 예정가격의 근거',
  rel: ['예정가격', '표준시장단가', '실적공사비', 'CBS', 'EVMS']
},
179: {
  tag: '안전·제도·관리',
  def: '화학물질의 [[유해성·위험성]], 응급조치, 취급·저장방법 등 {{16개 항목}}을 기재하여 [[산업안전보건법]]에 따라 [[작성·제출]]·[[게시·비치]]·[[MSDS 교육]]하는 [[물질안전보건자료]]',
  wwh: ['화학물질 16개 정보', '알 권리·중독 예방', '작성·게시·교육'],
  figT: 'MSDS 관리 흐름 및 16개 기재항목',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="30" width="150" height="26" class="bx"/><text x="95" y="47" text-anchor="middle" class="b">제조·수입자 작성</text><line x1="95" y1="56" x2="95" y2="72" class="ar"/><line x1="170" y1="43" x2="200" y2="43" class="ld"/><circle cx="200" cy="43" r="2" class="dotf"/><text x="205" y="47" class="k3">③ 16개 항목 기재(유해성·위험성)</text><rect x="20" y="74" width="150" height="26" class="bx2"/><text x="95" y="91" text-anchor="middle">고용노동부 제출</text><line x1="95" y1="100" x2="95" y2="116" class="ar"/><line x1="170" y1="87" x2="200" y2="87" class="ld"/><circle cx="200" cy="87" r="2" class="dotf"/><text x="205" y="91" class="bl">산업안전보건법 의무</text><rect x="20" y="118" width="150" height="26" class="bx2"/><text x="95" y="135" text-anchor="middle">사업주에 제공</text><line x1="95" y1="144" x2="95" y2="160" class="ar"/><line x1="170" y1="131" x2="200" y2="131" class="ld"/><circle cx="200" cy="131" r="2" class="dotf"/><text x="205" y="135" class="k4">④ 반입 시 MSDS 수령 확인</text><rect x="20" y="162" width="150" height="26" class="bx2"/><text x="95" y="179" text-anchor="middle">작업장 게시·비치</text><line x1="95" y1="188" x2="95" y2="204" class="ar"/><line x1="170" y1="175" x2="200" y2="175" class="ld"/><circle cx="200" cy="175" r="2" class="dotf"/><text x="205" y="179" class="k3">③ 쉽게 보는 장소(전산 대체)</text><rect x="20" y="206" width="150" height="26" class="bx2"/><text x="95" y="223" text-anchor="middle">경고표지 부착</text><line x1="95" y1="232" x2="95" y2="248" class="ar"/><line x1="170" y1="219" x2="200" y2="219" class="ld"/><circle cx="200" cy="219" r="2" class="dotf"/><text x="205" y="223" class="k3">③ 용기·포장(소분 용기 포함)</text><rect x="20" y="250" width="150" height="26" class="bx2"/><text x="95" y="267" text-anchor="middle">MSDS 교육·기록</text><line x1="95" y1="276" x2="95" y2="292" class="ar"/><line x1="170" y1="263" x2="200" y2="263" class="ld"/><circle cx="200" cy="263" r="2" class="dotf"/><text x="205" y="267" class="k4">④ 배치·신규·변경 시 교육</text><rect x="20" y="294" width="150" height="26" class="bx3"/><text x="95" y="311" text-anchor="middle" class="b">근로자 알 권리</text><line x1="170" y1="307" x2="200" y2="307" class="ld"/><circle cx="200" cy="307" r="2" class="dotf"/><text x="205" y="311" class="bl">중독·화재·폭발 재해 예방</text>' +
    '<rect x="470" y="28" width="80" height="114" class="bx"/><text x="510" y="44" text-anchor="middle" class="b">MSDS</text><line x1="478" y1="52" x2="542" y2="52" class="ln2"/><line x1="478" y1="57.6" x2="542" y2="57.6" class="ln2"/><line x1="478" y1="63.2" x2="542" y2="63.2" class="ln2"/><line x1="478" y1="68.8" x2="542" y2="68.8" class="ln2"/><line x1="478" y1="74.4" x2="542" y2="74.4" class="ln2"/><line x1="478" y1="80" x2="542" y2="80" class="ln2"/><line x1="478" y1="85.6" x2="542" y2="85.6" class="ln2"/><line x1="478" y1="91.2" x2="542" y2="91.2" class="ln2"/><line x1="478" y1="96.8" x2="542" y2="96.8" class="ln2"/><line x1="478" y1="102.4" x2="542" y2="102.4" class="ln2"/><line x1="478" y1="108" x2="542" y2="108" class="ln2"/><line x1="478" y1="113.6" x2="542" y2="113.6" class="ln2"/><line x1="478" y1="119.2" x2="542" y2="119.2" class="ln2"/><line x1="478" y1="124.8" x2="542" y2="124.8" class="ln2"/><line x1="478" y1="130.4" x2="542" y2="130.4" class="ln2"/><line x1="478" y1="136" x2="542" y2="136" class="ln2"/><line x1="542" y1="52" x2="560" y2="42" class="ld"/><circle cx="560" cy="42" r="2" class="dotf"/><text x="565" y="46" class="s">1 회사정보</text><line x1="542" y1="57.6" x2="560" y2="58" class="ld"/><circle cx="560" cy="58" r="2" class="dotf"/><text x="565" y="62" class="s">2 유해·위험</text><line x1="542" y1="63.2" x2="560" y2="74" class="ld"/><circle cx="560" cy="74" r="2" class="dotf"/><text x="565" y="78" class="s">3 구성성분</text><line x1="542" y1="68.8" x2="560" y2="90" class="ld"/><circle cx="560" cy="90" r="2" class="dotf"/><text x="565" y="94" class="s">4 응급조치</text><line x1="542" y1="136" x2="560" y2="134" class="ld"/><circle cx="560" cy="134" r="2" class="dotf"/><text x="565" y="138" class="s">16 기타 참고</text>' +
    '<text x="470" y="158" class="r">16개 항목</text>' +
    '<text x="446" y="178" class="k4">④ 밀폐공간 환기·방독마스크</text><text x="446" y="204" class="k5">⑤ QR코드 MSDS 열람</text><text x="446" y="224" class="k5">⑤ 다국어 MSDS·경고표지</text><text x="446" y="244" class="k5">⑤ 저VOC 친환경 자재</text>' +
    '</svg>',
  subs: [
    { h: '구성 및 기준', pts: ['[[유해성·위험성]] 등 {{16개 항목}} 기재', '근로자가 쉽게 보는 장소 [[게시·비치]](전산 대체)', '용기·포장 [[경고표지]](소분 용기 포함)'] },
    { h: '건설현장 유의사항', pts: ['도료·방수재·접착제 반입 시 MSDS 수령 확인', '배치·신규 도입·정보 변경 시 [[MSDS 교육]]·기록 보존', '밀폐공간 도장: 환기·방독마스크·화기 통제'] },
    { h: '개선방안', pts: ['화학물질 대장 전산화·QR코드 열람', '외국인 근로자 다국어 MSDS·경고표지', '저VOC 친환경 자재로 유해물질 저감'] }
  ],
  msg: '작성·제출·게시·경고표지·교육 — 화학물질 정보를 근로자 손에 쥐여 재해 예방',
  rel: ['경고표지', '밀폐공간', '산업안전보건법', 'VOC', '작업환경측정']
},
180: {
  tag: '환경·기준·관리',
  def: '항타·발파·장비 소음·진동을 [[소음·진동관리법]] [[생활소음 규제기준]](주거지역 주간 {{65 dB(A)}}, 진동 주간 {{65 dB(V)}}) 이하로 [[부지경계선]]에서 측정·관리하는 것',
  wwh: ['소음·진동 기준관리', '주민 민원·구조물 피해', '원·경·수 3단계 대책'],
  figT: '발생원·전파경로·수음점 관리 및 측정기준',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="220" width="410" height="30" class="soil"/><line x1="20" y1="220" x2="430" y2="220" class="ln"/>' +
    '<rect x="40" y="180" width="50" height="40" class="bx"/><line x1="80" y1="80" x2="80" y2="180" class="ln"/><text x="65" y="204" text-anchor="middle" class="s">항타</text>' +
    '<path d="M110,150 A28,28 0 0,1 110,190" class="ln2"/><path d="M122,140 A44,44 0 0,1 122,200" class="ln2"/><path d="M134,130 A60,60 0 0,1 134,210" class="ln2"/>' +
    '<rect x="166" y="120" width="8" height="100" class="conc"/>' +
    '<path d="M190,160 A20,20 0 0,1 190,184" class="ln2 dash"/>' +
    '<line x1="250" y1="60" x2="250" y2="250" class="rd dash"/>' +
    '<line x1="262" y1="190" x2="262" y2="220" class="ln"/><circle cx="262" cy="190" r="4" class="bf"/><line x1="275" y1="190" x2="275" y2="220" class="ln2"/><line x1="271" y1="190" x2="279" y2="190" class="ln2"/><line x1="271" y1="220" x2="279" y2="220" class="ln2"/>' +
    '<rect x="320" y="160" width="80" height="60" class="bx"/><path d="M314,160 L360,128 L406,160 z" class="bx2"/>' +
    '<path d="M95,235 l10,-6 l10,12 l10,-12 l10,12 l10,-12 l10,12 l10,-6" class="ln2"/>' +
    '<rect x="200" y="220" width="10" height="30" class="bx"/>' +
    '<line x1="80" y1="100" x2="95" y2="70" class="ld"/><circle cx="95" cy="70" r="2" class="dotf"/><text x="100" y="74" class="bl">발생원(항타·발파·장비)</text>' +
    '<line x1="170" y1="122" x2="178" y2="98" class="ld"/><circle cx="178" cy="98" r="2" class="dotf"/><text x="183" y="102" class="bl">방음벽</text>' +
    '<line x1="250" y1="70" x2="265" y2="52" class="ld"/><circle cx="265" cy="52" r="2" class="dotf"/><text x="270" y="56" class="r">부지경계선 측정</text>' +
    '<line x1="262" y1="190" x2="240" y2="150" class="ld"/><circle cx="240" cy="150" r="2" class="dotf"/><text x="235" y="154" text-anchor="end" class="r">1.2~1.5m</text>' +
    '<line x1="380" y1="140" x2="395" y2="98" class="ld"/><circle cx="395" cy="98" r="2" class="dotf"/><text x="390" y="102" text-anchor="end" class="bl">수음점(주거지)</text>' +
    '<line x1="150" y1="238" x2="140" y2="272" class="ld"/><circle cx="140" cy="272" r="2" class="dotf"/><text x="145" y="276" class="s">진동 전파(지반)</text>' +
    '<line x1="205" y1="248" x2="230" y2="272" class="ld"/><circle cx="230" cy="272" r="2" class="dotf"/><text x="235" y="276" class="s">진동 차단 Trench</text>' +
    '<text x="20" y="300" class="s">사전조사 → 사전신고 → 저소음 공법 → 방음벽 → 경계선 측정 → 초과 시 작업조정</text>' +
    '<text x="20" y="320" class="b">대책 3단계: 발생원 → 전파경로 → 수음점</text>' +
    '<text x="446" y="18" class="b">[주거지역 공사장 기준]</text>' +
    '<line x1="275" y1="205" x2="440" y2="34" class="ld"/><circle cx="440" cy="34" r="2" class="dotf"/><text x="446" y="38" class="k3">③ 소음 주간 65 dB(A)</text><text x="446" y="56" class="k3">③ 조석 60·야간 50 dB(A)</text><text x="446" y="74" class="k3">③ 진동 주간 65·심야 60 dB(V)</text><text x="446" y="92" class="k3">③ 특정공사 사전신고</text>' +
    '<text x="446" y="110" class="s">소음: 주간 07~18·야간 22~05시</text><text x="446" y="126" class="s">진동: 주간 06~22·심야 22~06시</text>' +
    '<text x="446" y="148" class="k4">④ 저소음·저진동 장비</text><text x="446" y="166" class="k4">④ 방음벽·소음원 이격</text><line x1="406" y1="186" x2="440" y2="180" class="ld"/><circle cx="440" cy="180" r="2" class="dotf"/><text x="446" y="184" class="k4">④ 조석·야간 작업 지양</text><text x="446" y="202" class="k4">④ 인접 구조물 사전조사</text><text x="446" y="226" class="k5">⑤ IoT 실시간 모니터링</text><text x="446" y="244" class="k5">⑤ 무진동 파쇄·와이어쏘</text><text x="446" y="262" class="k5">⑤ 주민 협의체·민원매뉴얼</text>' +
    '</svg>',
  subs: [
    { h: '규제기준(주거지역 공사장)', pts: ['소음 주간 {{65 dB(A)}} 이하', '조석 {{60 dB(A)}}·야간 {{50 dB(A)}} 이하', '진동 주간(06~22시) {{65 dB(V)}}·심야 {{60 dB(V)}} 이하', '[[특정공사 사전신고]](착공 전 시장·군수·구청장)'] },
    { h: '시공 시 유의사항', pts: ['발생원: [[저소음·저진동 장비]](유압·압입식)', '전파경로: [[방음벽]]·소음원 이격·진동 차단 Trench', '수음점: 조석·야간 작업 지양, 주민 사전 고지', '발파·항타 시 인접 구조물 사전조사·계측'] },
    { h: '개선방안', pts: ['IoT 센서 [[실시간 모니터링]]·자동 알림', '무진동 파쇄·와이어쏘 저공해 공법', '주민 협의체·민원 대응 매뉴얼'] }
  ],
  msg: '발생원에서 줄이고 경로에서 막고 수음점에서 피한다 — 부지경계선 기준 준수',
  rel: ['건설공해', '방음벽', '비산먼지', '발파 진동', '민원관리']
}
});
