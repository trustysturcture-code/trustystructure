// 170~180 공정·원가관리 / 안전·환경 (합격자 답안 형식)
window.Q = (window.Q || []).concat([
{
  no: 170, cat: '공정·원가관리', type: '용어',
  title: 'WBS (Work Breakdown Structure, 작업분류체계)',
  key: ['작업분류체계', 'Level(계층)', 'Work Package', 'WBS Code', 'CBS 연계', 'OBS', '관리계정(CA)', '공정·원가 통합관리'],
  www: {
    what: '공사 전체 범위를 [[Level(계층)]]별로 세분하여 최소 관리단위인 [[Work Package]]까지 나눈 [[작업분류체계]]',
    why: '공사범위 누락·중복 방지, 공정·원가·자원 정보의 공통 기준 확보([[공정·원가 통합관리]])',
    how: 'Project → 시설·구역 → 공종 → 세부작업(Work Package) 순 분해 → [[WBS Code]] 부여 → [[CBS 연계]]·[[OBS]] 결합'
  },
  secs: [
    { h: '정의', def: 'WBS란 공사 목적물 전체를 관리 가능한 크기로 [[Level(계층)]]별로 나누어 체계화한 [[작업분류체계]]로서, 최하위 [[Work Package]]에 [[WBS Code]]를 부여하고 원가(CBS)·조직(OBS)과 연계하여 공정·원가·자원을 하나의 기준으로 관리하기 위한 [[공정·원가 통합관리]]의 기본 틀이다.' },
    { h: '원리 및 도해 — WBS 계층 구조',
      fig: { svg: '<svg viewBox="0 0 560 265"><text x="8" y="40" class="s">Level 1</text><text x="8" y="101" class="s">Level 2</text><text x="8" y="161" class="s">Level 3</text><text x="8" y="221" class="s">Level 4</text><rect x="200" y="20" width="160" height="32" class="bx"/><text x="280" y="41" text-anchor="middle" class="b">건축공사 (1)</text><line x1="280" y1="52" x2="280" y2="67" class="ln2"/><line x1="115" y1="67" x2="445" y2="67" class="ln2"/><line x1="115" y1="67" x2="115" y2="82" class="ln2"/><line x1="280" y1="67" x2="280" y2="82" class="ln2"/><line x1="445" y1="67" x2="445" y2="82" class="ln2"/><rect x="60" y="82" width="110" height="30" class="bx2"/><text x="115" y="101" text-anchor="middle">지하구조 1.1</text><rect x="225" y="82" width="110" height="30" class="bx2"/><text x="280" y="101" text-anchor="middle">지상골조 1.2</text><rect x="390" y="82" width="110" height="30" class="bx2"/><text x="445" y="101" text-anchor="middle">마감 1.3</text><line x1="280" y1="112" x2="280" y2="127" class="ln2"/><line x1="205" y1="127" x2="345" y2="127" class="ln2"/><line x1="205" y1="127" x2="205" y2="142" class="ln2"/><line x1="345" y1="127" x2="345" y2="142" class="ln2"/><rect x="150" y="142" width="110" height="30" class="bx"/><text x="205" y="161" text-anchor="middle">거푸집 1.2.1</text><rect x="290" y="142" width="110" height="30" class="bx"/><text x="345" y="161" text-anchor="middle">철근 1.2.2</text><line x1="345" y1="172" x2="345" y2="187" class="ln2"/><line x1="290" y1="187" x2="430" y2="187" class="ln2"/><line x1="290" y1="187" x2="290" y2="202" class="ln2"/><line x1="430" y1="187" x2="430" y2="202" class="ln2"/><rect x="230" y="202" width="120" height="30" class="bx3"/><text x="290" y="221" text-anchor="middle" class="s">3F 슬래브 철근</text><rect x="370" y="202" width="120" height="30" class="bx3"/><text x="430" y="221" text-anchor="middle" class="s">4F 슬래브 철근</text><line x1="490" y1="217" x2="530" y2="240" class="ld"/><circle cx="530" cy="240" r="2" class="dotf"/><text x="380" y="256" class="r">Work Package(최소 관리단위)</text><line x1="445" y1="82" x2="500" y2="55" class="ld"/><circle cx="500" cy="55" r="2" class="dotf"/><text x="455" y="48" class="bl">WBS Code 체계</text><line x1="115" y1="112" x2="115" y2="145" class="ld"/><circle cx="115" cy="145" r="2" class="dotf"/><text x="62" y="162" class="g">CBS·OBS 연계</text></svg>',
        cap: '[도해] Project → 구역 → 공종 → Work Package 4단계 분해, 각 단계 코드(1 → 1.2 → 1.2.2) 부여' },
      flow: ['공사범위 확정', '계층(Level) 분해', 'Work Package 설정', 'WBS Code 부여', 'CBS·OBS 연계(CA)', '공정·원가 통합관리'] },
    { h: '특징 (Level별 구성)', tbl: { head: ['Level', '분류 기준', '예시'], rows: [
      ['Level 1', 'Project 전체', '○○ 신축공사'],
      ['Level 2', '시설물·구역(Zone)', '지하층 / 지상층 / 부대토목'],
      ['Level 3', '공종(Trade)', '거푸집 / 철근 / 콘크리트'],
      ['Level 4', '[[Work Package]](세부작업)', '층·구간별 철근배근'],
      ['연계', 'WBS × OBS = [[관리계정(CA)]]', 'CBS(내역)와 1:1 매칭 → EVMS 기초']] } },
    { h: '적용 시 유의사항', ul: [
      '분해 수준 적정: 너무 세분 시 관리업무 과다, 너무 크면 통제 불가 → 공정·원가 관리 가능한 크기',
      '공사범위 100% 포함 원칙: 누락·중복 없이 상위 = 하위 합',
      '[[WBS Code]] 체계 표준화: 발주처·시공사·협력사 공통 코드 사용',
      '[[CBS 연계]]: 내역서 항목과 Work Package 대응 → 기성·실적 데이터 축적',
      '설계변경 시 WBS 동시 갱신(버전 관리)' ] },
    { h: '개선방안', ul: [
      '표준 WBS 라이브러리 구축 → 유사 공사 재사용, 실적 DB화',
      'BIM 객체(4D·5D)와 WBS Code 연동 → 물량·공정·원가 자동 연계',
      'PMIS·EVMS 연계로 실시간 진도·원가 통합 관리' ] }
  ],
  effect: '공사범위 누락·중복을 막고 공정·원가·자원 정보를 하나의 코드로 통합하여 EVMS 등 통합관리의 기반을 제공한다.',
  mnemo: '프·구·공·워 (Project→구역→공종→Work Package) / “W×O = CA”',
  img: [],
  src: '표준 교재 정리(원본 답안 없음)'
},
{
  no: 171, cat: '공정·원가관리', type: '용어',
  title: '건설공사비지수 (Construction Cost Index)',
  key: ['직접공사비', '가격변동', '기준년도 = 100', '가공통계', '지수조정률', '품목조정률', 'CBS 가중치', '한국건설기술연구원'],
  www: {
    what: '[[직접공사비]](재료비·노무비·장비비) 투입자원의 [[가격변동]]을 [[기준년도 = 100]]으로 나타낸 [[가공통계]]',
    why: '공사비 실적자료의 시점 보정, 물가변동 계약금액 조정([[지수조정률]]) 기준, 건설물가 예측',
    how: '생산자물가지수·시중노임·장비임대료 수집 → [[CBS 가중치]] 부여 → 가중산술평균 → 매월 공표'
  },
  secs: [
    { h: '정의', def: '건설공사비지수란 건설공사에 투입되는 [[직접공사비]](재료비·노무비·장비비 등)의 [[가격변동]] 폭을 측정하기 위해 특정 {{기준년도 = 100}}으로 하여 작성한 [[가공통계]]로서, 공사비 실적자료의 시간차 보정, 물가변동에 의한 계약금액 조정([[지수조정률]]) 및 건설시장 동향 분석에 활용된다.' },
    { h: '원리 및 도해 — 지수 산정 Process',
      fig: { svg: '<svg viewBox="0 0 560 235"><rect x="30" y="15" width="170" height="44" class="bx"/><text x="115" y="42" text-anchor="middle" class="b">① Data 도출</text><line x1="115" y1="59" x2="115" y2="88" class="ar"/><rect x="30" y="90" width="170" height="44" class="bx2"/><text x="115" y="117" text-anchor="middle" class="b">② CBS 기반 가중치</text><line x1="115" y1="134" x2="115" y2="163" class="ar"/><rect x="30" y="165" width="170" height="44" class="bx3"/><text x="115" y="192" text-anchor="middle" class="b">③ Index 산출·공표</text><line x1="200" y1="37" x2="240" y2="37" class="ld"/><circle cx="240" cy="37" r="2" class="dotf"/><text x="248" y="30" class="s">생산자물가지수(한국은행)</text><text x="248" y="46" class="s">시중노임단가·건설기계 임대료지수</text><line x1="200" y1="112" x2="240" y2="112" class="ld"/><circle cx="240" cy="112" r="2" class="dotf"/><text x="248" y="105" class="s">공종별 투입비중 분석</text><text x="248" y="121" class="s">CBS 연계 가중치 산정</text><line x1="200" y1="187" x2="240" y2="187" class="ld"/><circle cx="240" cy="187" r="2" class="dotf"/><text x="248" y="180" class="r">기준년도 = 100, 가중산술평균</text><text x="248" y="196" class="s">매월 산출·공표(한국건설기술연구원)</text></svg>',
        cap: '[도해] Data 도출 → CBS 가중치 → 지수 산출·공표 (국가승인 가공통계)' },
      flow: ['Data 수집', '가중치 부여(CBS)', '가중산술평균', '월별 지수 공표', '지수조정률 산정', '계약금액 조정'] },
    { h: '특징 — 물가변동 산정방식 비교', tbl: { head: ['구분', '[[지수조정률]]', '[[품목조정률]]'], rows: [
      ['적용 기준', '건설공사비지수 등 비목군별 지수', '개별 자재·노임 등 품목별 변동률 직접 조사'],
      ['산정 작업량', '상대적 간편(수식 기반)', '매우 복잡, 시간 과다'],
      ['객관성·분쟁', '국가승인통계 → 객관성↑, 분쟁↓', '조사기관·방법별 단가차 → 분쟁 가능'],
      ['적용 대상', '대규모·복합공종 공사', '단일공종·소규모 공사']] },
      ul2: ['물가변동 조정 요건: 계약체결일부터 {{90일 이상}} 경과 + 입찰일 기준 등락률 {{3% 이상}} (국가계약법 시행령 제64조, 2요건 동시 충족)'] },
    { h: '기준 — 물가변동 계약금액 조정 (국가계약법 시행령 제64조)', tbl: { head: ['구분', '기준'], rows: [
      ['기간 요건', '계약체결일(또는 직전 조정기준일)부터 {{90일 이상}} 경과'],
      ['등락 요건', '입찰일(수의계약은 계약체결일) 기준 품목조정률 또는 지수조정률 {{3% 이상}} 증감'],
      ['재조정', '조정기준일부터 {{90일 이내}} 재조정 불가 (천재지변·원자재 가격급등 시 예외)'],
      ['단품 조정', '특정 규격 자재 가격이 입찰일 기준 {{15% 이상}} 증감 시 해당 자재만 조정 (제64조 제6항)'],
      ['조정방법', '계약서에 지수조정률/품목조정률 중 하나 명시 → 이후 변경 불가'],
      ['지수조정률 지수', '한국은행 생산자물가지수·수입물가지수, 건설공사비지수(한국건설기술연구원), 시중노임 등']] } },
    { h: '적용 시 유의사항 (지수 변동 영향요인)', ul: [
      '거시경제: 수요·공급 불균형, 금융비용 증가 → 지수 급변 시 조정 신청 시기 관리',
      '정책·규제: 안전·환경 규제 강화에 따른 비용 상승 반영 여부 확인',
      '산업구조: 숙련공 부족·노임 상승 → 노무비 비중 큰 공종 영향 큼',
      '현장 특성: 지역·공종별 편차 → 지수 일률 적용 시 실제 변동과 괴리 가능',
      '계약 시 조정방법(지수/품목) 사전 명시, 이후 변경 제한 고려' ] },
    { h: '개선방안', ul: [
      '공종·지역별 세분화 지수 개발로 현장 실정 반영',
      'CBS·WBS 표준화와 연계한 가중치 주기적 갱신(기준년도 개편)',
      '실적공사비 DB와 연동하여 공사비 예측·산정 정확도 향상' ] }
  ],
  effect: '공사비의 시점 차이를 객관적으로 보정하여 물가변동 계약금액 조정의 분쟁을 줄이고, 적정 공사비 확보와 시장 예측에 활용된다.',
  mnemo: '데·가·공 (Data→가중치→공표) / 지수 vs 품목 = “간편 객관 vs 복잡 분쟁” / 90일·3%',
  img: [],
  src: '디테일용어300 No.269 · 기술지침 11.기타(RISK) p3 (ESC: 계약 90일 경과·입찰일 기준 품목/지수 조정률 3% 이상) · 국가계약법 시행령 제64조'
},
{
  no: 172, cat: '공정·원가관리', type: '용어',
  title: 'Tact 공정관리',
  key: ['작업구역 구획', '작업시간 통일', 'Tact Time', '연속작업', '동기화', '평준화', '반복작업', '대기시간 감소'],
  www: {
    what: '[[작업구역 구획]]과 [[작업시간 통일]]로 선·후행 작업을 [[연속작업]] 흐름으로 만드는 공정관리 기법',
    why: '작업 간 [[대기시간 감소]], 공정 불균형 해소 → [[평준화]]·[[동기화]] 생산',
    how: '공구 분할 → 표준 모듈시간([[Tact Time]]) 설정 → 각 작업을 모듈의 배수로 편성 → 공구별 [[반복작업]]'
  },
  secs: [
    { h: '정의', def: 'Tact 공정관리란 [[작업구역 구획]]을 일정하게 나누는 동시에 [[작업시간 통일]]([[Tact Time]])을 통해 선·후행 작업의 흐름을 [[연속작업]]으로 만드는 공정관리 기법으로, 고층 건물 등 [[반복작업]]이 많은 공사에서 작업조가 공구를 따라 일정한 리듬으로 이동하도록 계획한다.' },
    { h: '원리 및 도해 — 공정 진행 개념',
      fig: { svg: '<svg viewBox="0 0 560 260"><text x="10" y="64" class="b">3공구</text><text x="10" y="124" class="b">2공구</text><text x="10" y="184" class="b">1공구</text><line x1="97" y1="180" x2="163" y2="180" class="ar"/><line x1="177" y1="180" x2="243" y2="180" class="ar"/><line x1="257" y1="180" x2="323" y2="180" class="ar"/><line x1="177" y1="120" x2="243" y2="120" class="ar"/><line x1="257" y1="120" x2="323" y2="120" class="ar"/><line x1="337" y1="120" x2="403" y2="120" class="ar"/><line x1="257" y1="60" x2="323" y2="60" class="ar"/><line x1="337" y1="60" x2="403" y2="60" class="ar"/><line x1="417" y1="60" x2="483" y2="60" class="ar"/><text x="130" y="172" text-anchor="middle" class="s">A</text><text x="210" y="172" text-anchor="middle" class="s">B</text><text x="290" y="172" text-anchor="middle" class="s">C</text><text x="210" y="112" text-anchor="middle" class="s">A</text><text x="290" y="112" text-anchor="middle" class="s">B</text><text x="370" y="112" text-anchor="middle" class="s">C</text><text x="290" y="52" text-anchor="middle" class="s">A</text><text x="370" y="52" text-anchor="middle" class="s">B</text><text x="450" y="52" text-anchor="middle" class="s">C</text><circle cx="90" cy="180" r="7" class="bx"/><circle cx="170" cy="180" r="7" class="bx"/><circle cx="250" cy="180" r="7" class="bx"/><circle cx="330" cy="180" r="7" class="bx"/><circle cx="170" cy="120" r="7" class="bx2"/><circle cx="250" cy="120" r="7" class="bx2"/><circle cx="330" cy="120" r="7" class="bx2"/><circle cx="410" cy="120" r="7" class="bx2"/><circle cx="250" cy="60" r="7" class="bx3"/><circle cx="330" cy="60" r="7" class="bx3"/><circle cx="410" cy="60" r="7" class="bx3"/><circle cx="490" cy="60" r="7" class="bx3"/><line x1="170" y1="172" x2="170" y2="128" class="ar"/><line x1="250" y1="172" x2="250" y2="128" class="ar"/><line x1="330" y1="172" x2="330" y2="128" class="ar"/><line x1="250" y1="112" x2="250" y2="68" class="ar"/><line x1="330" y1="112" x2="330" y2="68" class="ar"/><line x1="410" y1="112" x2="410" y2="68" class="ar"/><line x1="60" y1="215" x2="530" y2="215" class="ar"/><line x1="90" y1="211" x2="90" y2="219" class="ln2"/><line x1="170" y1="211" x2="170" y2="219" class="ln2"/><line x1="250" y1="211" x2="250" y2="219" class="ln2"/><line x1="330" y1="211" x2="330" y2="219" class="ln2"/><line x1="410" y1="211" x2="410" y2="219" class="ln2"/><line x1="490" y1="211" x2="490" y2="219" class="ln2"/><text x="130" y="232" text-anchor="middle" class="s">T</text><text x="530" y="232" text-anchor="end" class="s">시간</text><line x1="210" y1="215" x2="225" y2="243" class="ld"/><circle cx="225" cy="243" r="2" class="dotf"/><text x="232" y="250" class="r">Tact Time(작업시간 동일 모듈)</text><line x1="490" y1="60" x2="520" y2="35" class="ld"/><circle cx="520" cy="35" r="2" class="dotf"/><text x="400" y="28" class="bl">공구별 동일 작업 반복</text><line x1="330" y1="150" x2="440" y2="165" class="ld"/><circle cx="440" cy="165" r="2" class="dotf"/><text x="446" y="170" class="g">선·후행 연속 동기화</text></svg>',
        cap: '[도해] 작업 A·B·C가 1Tact씩 밀려 각 공구를 연속 통과 — 작업시간 = 표준 모듈(Tact)의 배수' },
      flow: ['작업구역(공구) 분할', '작업 표준화', 'Tact Time 설정', '작업조 편성', '공구별 반복·동기화', '실적 분석·개선'] },
    { h: '특징', tbl: { head: ['장점', '단점'], rows: [
      ['불필요한 작업 [[대기시간 감소]]', '정해진 시간 내 작업 → 심리적 부담 증가'],
      ['공정 간 불균형 개선 → 효율 향상', '인원 변동 시 효율 저하'],
      ['[[평준화]]·[[동기화]] 생산 가능', '한 작업 지연 시 전체 공정 지장'],
      ['작업 이상 발생 즉시 파악', '반복·흐름 작업이 아니면 적용 곤란']] } },
    { h: '적용 시 유의사항', ul: [
      '공구 분할 시 작업량 균등화(물량 편차 최소) 선행',
      '[[Tact Time]]은 Critical 작업(골조 등) 기준으로 설정, 타 작업은 배수로 편성',
      '자재 반입·양중 계획을 Tact 리듬에 맞춰 JIT 공급',
      '지연 발생 시 즉시 만회 가능한 예비 인력·버퍼 확보',
      '기상·검측 대기 등 외부 요인 반영한 여유 설정' ] },
    { h: '개선방안', ul: [
      'PC·모듈러 등 공업화 공법과 결합 → 작업 표준화 극대화',
      'BIM 4D 시뮬레이션으로 공구·Tact 최적화 사전 검증',
      'Lean Construction(Last Planner)과 연계하여 흐름 안정화' ] }
  ],
  effect: '작업 간 대기와 공정 불균형을 제거하여 공기 단축·생산성 향상과 함께 작업 이상을 조기 발견할 수 있다.',
  mnemo: '구·시·연 (구역 구획·시간 통일·연속작업) / 장점 “대·불·평·이”',
  img: [],
  src: '디테일용어300 No.278'
},
{
  no: 173, cat: '공정·원가관리', type: '용어',
  title: '중간관리일 (Milestone)',
  key: ['중간관리일', '주요 시점', '한계착수일', '한계완료일', '절대완료일', '공정 통제', '공종 인계', '공기 지연 방지'],
  www: {
    what: '공사 중 관리상 특히 중요한 작업의 착수·완료·인계 [[주요 시점]]을 지정한 [[중간관리일]]',
    why: '구간별 진도 점검·[[공종 인계]] 기준 → 전체 [[공기 지연 방지]]',
    how: '네트워크 공정표의 C.P·인계 지점에 [[한계착수일]]·[[한계완료일]]·[[절대완료일]] 지정 → 정기 점검·만회'
  },
  secs: [
    { h: '정의', def: '중간관리일(Milestone)이란 공사 전체 공정 중 관리상 특히 중요한 작업의 착수·완료 또는 타 공종과의 인계 시점 등 [[주요 시점]]을 지정한 날로서, [[한계착수일]]·[[한계완료일]]·[[절대완료일]]로 구분하며 이를 기준으로 공정 진도를 점검하고 선·후행 공종을 조정하여 [[공정 통제]]와 [[공기 지연 방지]]를 도모하는 공정관리 기준일이다.' },
    { h: '원리 및 도해 — Milestone 배치',
      fig: { svg: '<svg viewBox="0 0 560 200"><text x="40" y="30" class="b">Milestone(◆) 설정 예</text><rect x="60" y="46" width="140" height="14" class="bx"/><text x="130" y="57" text-anchor="middle" class="s">토공·기초</text><rect x="180" y="66" width="200" height="14" class="bx2"/><text x="280" y="77" text-anchor="middle" class="s">골조 (C.P)</text><rect x="330" y="86" width="170" height="14" class="bx3"/><text x="415" y="97" text-anchor="middle" class="s">마감·설비</text><line x1="40" y1="110" x2="530" y2="110" class="ar"/><path d="M60,102 l8,8 l-8,8 l-8,-8 z" class="rf"/><path d="M180,102 l8,8 l-8,8 l-8,-8 z" class="rf"/><path d="M330,102 l8,8 l-8,8 l-8,-8 z" class="rf"/><path d="M380,102 l8,8 l-8,8 l-8,-8 z" class="rf"/><path d="M500,102 l8,8 l-8,8 l-8,-8 z" class="rf"/><line x1="60" y1="118" x2="60" y2="140" class="ld"/><circle cx="60" cy="140" r="2" class="dotf"/><text x="60" y="155" text-anchor="middle" class="s">착공</text><line x1="180" y1="118" x2="160" y2="145" class="ld"/><circle cx="160" cy="145" r="2" class="dotf"/><text x="160" y="160" text-anchor="middle" class="r">한계착수일(이전 착수 불가)</text><line x1="330" y1="118" x2="300" y2="170" class="ld"/><circle cx="300" cy="170" r="2" class="dotf"/><text x="300" y="185" text-anchor="middle" class="bl">공종 인계점(골조→마감)</text><line x1="380" y1="118" x2="410" y2="145" class="ld"/><circle cx="410" cy="145" r="2" class="dotf"/><text x="410" y="160" text-anchor="middle" class="r">한계완료일(이후 완료 불가)</text><line x1="500" y1="118" x2="515" y2="170" class="ld"/><circle cx="515" cy="170" r="2" class="dotf"/><text x="555" y="185" text-anchor="end" class="r">절대완료일(준공)</text></svg>',
        cap: '[도해] C.P 작업 착수·완료, 공종 인계, 준공 시점에 ◆ Milestone 지정 → 구간별 진도 점검 기준' },
      flow: ['공정표 작성', 'C.P·인계 작업 선정', 'Milestone 지정', '정기 진도 점검', '지연 시 만회대책', '공정표 갱신'] },
    { h: '특징 — Milestone 종류', tbl: { head: ['구분', '내용', '예시'], rows: [
      ['[[한계착수일]]', '지정된 날짜보다 일찍 착수할 수 없는 날 (선행조건 충족 후 착수)', '골조 착수, 커튼월 착수'],
      ['[[한계완료일]]', '지정된 날짜보다 늦게 완료되어서는 안 되는 날', '골조 완료, 외부 마감 완료'],
      ['[[절대완료일]]', '지정된 날짜에 정확히 완료되어야 하는 날', '준공·부분 사용승인, 동절기 전 외피 완료'],
      ['설정 위치', 'C.P 작업, [[공종 인계]](골조 → 마감, 건축 → 설비) 지점', '공기를 구간별 목표로 분할 → 지연 조기 인지']] } },
    { h: '적용 시 유의사항', ul: [
      'C.P(주공정) 상 작업 및 [[공종 인계]] 지점 위주로 지정(과다 지정 지양)',
      '계약 공기·발주처 요구(부분 준공·사용승인 일정)와 일치',
      '협력업체 간 인계일 사전 합의 → 간섭·대기 방지',
      'Milestone 지연 시 원인 분석 후 만회 공정표(MCX 등) 즉시 수립',
      '기상·인허가 등 외부 리스크를 고려한 여유 확보' ] },
    { h: '개선방안', ul: [
      'PMIS·EVMS와 연계하여 Milestone 달성률 실시간 모니터링',
      'BIM 4D로 공종 인계 시점 시뮬레이션',
      '하도급 계약 시 Milestone 연동 기성·인센티브 조건 반영' ] }
  ],
  effect: '전체 공기를 구간별 목표로 나누어 공정 지연을 조기에 발견·만회하고 공종 간 원활한 인계를 확보한다.',
  mnemo: '한착·한완·절완 (한계착수·한계완료·절대완료) → “일찍 못 하고, 늦으면 안 되고, 딱 맞춰야”',
  img: [],
  src: '표준 교재 정리(원본 답안 없음) · 마법지 p025 공정관리 Mile Stone · 종류(한계착수·한계완료·절대완료일)는 공정관리 표준 분류'
},
{
  no: 174, cat: '공정·원가관리', type: '용어',
  title: 'Cost Slope (비용구배)',
  key: ['비용구배', '정상점(Normal point)', '특급점(Crash point)', '직접비 증가액', '공기 1일 단축', 'MCX', '주공정(C.P)', '최적공기'],
  www: {
    what: '[[공기 1일 단축]]에 추가로 발생하는 [[직접비 증가액]] = [[정상점(Normal point)]]과 [[특급점(Crash point)]]을 잇는 직선의 기울기',
    why: '공기단축 시 비용 증가가 최소인 작업을 선별([[MCX]]) → 총공사비 최소화',
    how: '작업별 Cost slope 산정 → [[주공정(C.P)]] 상 Cost slope 최소 작업부터 단축 → [[최적공기]] 결정'
  },
  secs: [
    { h: '정의', def: '[[비용구배]](Cost Slope)란 [[특급점(Crash point)]]과 [[정상점(Normal point)]]을 연결한 직선의 기울기로서, [[공기 1일 단축]]에 따라 추가로 발생하는 [[직접비 증가액]]을 말하며 {{Cost slope = (특급비용 − 정상비용) / (정상공기 − 특급공기)}}로 산정한다.' },
    { h: '원리 및 도해 — 공기-비용 곡선(MCX 기본 이론)',
      fig: [
        { svg: '<svg viewBox="0 0 560 285"><line x1="70" y1="225" x2="70" y2="15" class="ar"/><line x1="70" y1="225" x2="530" y2="225" class="ar"/><text x="78" y="22" class="b">비용</text><text x="530" y="215" text-anchor="end" class="b">공기</text><line x1="150" y1="60" x2="150" y2="225" class="ln2 dash"/><line x1="150" y1="60" x2="70" y2="60" class="ln2 dash"/><line x1="430" y1="180" x2="430" y2="225" class="ln2 dash"/><line x1="430" y1="180" x2="70" y2="180" class="ln2 dash"/><path d="M150,60 Q200,175 430,180" fill="none" class="bl"/><line x1="150" y1="60" x2="430" y2="180" class="rd"/><circle cx="150" cy="60" r="5" class="rf"/><circle cx="430" cy="180" r="5" class="rf"/><text x="64" y="64" text-anchor="end" class="s">특급비용</text><text x="64" y="184" text-anchor="end" class="s">정상비용</text><text x="150" y="242" text-anchor="middle" class="s">특급공기</text><text x="430" y="242" text-anchor="middle" class="s">정상공기</text><line x1="150" y1="60" x2="200" y2="35" class="ld"/><circle cx="200" cy="35" r="2" class="dotf"/><text x="206" y="39" class="r">특급점(Crash point)</text><line x1="430" y1="180" x2="470" y2="150" class="ld"/><circle cx="470" cy="150" r="2" class="dotf"/><text x="440" y="140" class="b">정상점(Normal)</text><line x1="290" y1="120" x2="340" y2="95" class="ld"/><circle cx="340" cy="95" r="2" class="dotf"/><text x="346" y="99" class="r">비용구배 = 기울기</text><line x1="150" y1="262" x2="430" y2="262" class="ar"/><line x1="430" y1="262" x2="150" y2="262" class="ar"/><text x="290" y="278" text-anchor="middle" class="s">공기단축 가능일수 (정상공기 − 특급공기)</text></svg>',
          cap: '[도해1] 정상점–특급점을 잇는 직선의 기울기 = Cost slope (원/일)' },
        { svg: '<svg viewBox="0 0 560 240"><line x1="70" y1="205" x2="70" y2="15" class="ar"/><line x1="70" y1="205" x2="540" y2="205" class="ar"/><text x="78" y="22" class="b">비용</text><text x="540" y="225" text-anchor="end" class="b">공기</text><path d="M100,40 Q220,170 500,185" fill="none" class="bl"/><line x1="100" y1="180" x2="500" y2="95" class="gr"/><path d="M100,25 Q300,215 500,60" fill="none" class="rd"/><line x1="320" y1="130" x2="320" y2="205" class="rd dash"/><circle cx="320" cy="130" r="5" class="rf"/><text x="320" y="222" text-anchor="middle" class="r">최적공기</text><line x1="500" y1="60" x2="520" y2="45" class="ld"/><circle cx="520" cy="45" r="2" class="dotf"/><text x="470" y="35" class="r">총공사비</text><line x1="500" y1="95" x2="520" y2="108" class="ld"/><circle cx="520" cy="108" r="2" class="dotf"/><text x="505" y="124" class="g">간접비</text><line x1="500" y1="185" x2="520" y2="170" class="ld"/><circle cx="520" cy="170" r="2" class="dotf"/><text x="505" y="164" class="bl">직접비</text><line x1="320" y1="130" x2="360" y2="150" class="ld"/><circle cx="360" cy="150" r="2" class="dotf"/><text x="366" y="154" class="r">최소 총공사비점</text></svg>',
          cap: '[도해2] 공기단축 → 직접비↑·간접비↓ / 총공사비 최소점 = 최적공기' } ],
      flow: ['작업별 정상·특급 자료', 'Cost slope 산정', 'C.P 확인', '최소 Cost slope 작업 단축', 'C.P 재검토', '최적공기 결정'] },
    { h: '특징 — Cost Slope의 영향', tbl: { head: ['구분', '내용'], rows: [
      ['크기', 'Cost slope가 클수록 단축 1일당 총공사비 증가 큼'],
      ['직접비', '급속계획 → 노무비·장비비([[직접비 증가액]]) 증가'],
      ['간접비', '공기 단축 시 현장관리비 등 간접비 감소'],
      ['비례성', '정상점~특급점 구간에서 단축일수에 비례하여 비용 증가(직선 가정)']] } },
    { h: '적용 시 유의사항', ul: [
      'Cost slope가 가장 작은 작업부터 단축 → 공사비 증가 최소화',
      '단축은 반드시 [[주공정(C.P)]] 작업에서 실시(비주공정 단축은 효과 없음)',
      '단축 중 C.P 변경(병행 주공정 발생) 여부 단계마다 재검토',
      '직접비 증가와 간접비 감소를 함께 고려하여 [[최적공기]] 산정',
      '[[특급점(Crash point)]] 이하로는 단축 불가 — 과도한 단축은 품질·안전 저하' ] },
    { h: '개선방안', ul: [
      '작업별 정상·특급 공기/비용 실적 DB 구축 → Cost slope 신뢰성 향상',
      'BIM·공정 시뮬레이션으로 단축 대안 비교(MCX 자동화)',
      '공법 개선(PC화·장비 대형화)으로 Cost slope 자체를 낮춤' ] }
  ],
  effect: '공기단축 시 추가비용이 가장 적은 작업을 선별하여 총공사비를 최소화하는 최적공기 결정의 기준이 된다.',
  mnemo: '“특비−정비 / 정공−특공” → 위는 비용(특−정), 아래는 공기(정−특) / 작·C·재 (작은 것·C.P·재검토)',
  img: [],
  src: '디테일용어300 No.281 (관련 No.280 MCX)'
},
{
  no: 175, cat: '공정·원가관리', type: '용어',
  title: 'Crash Point (특급점)',
  key: ['특급점', 'Crash time(특급공기)', 'Crash cost(특급비용)', '단축 한계', '정상점', '비용구배', 'MCX', '추가비용만 증가'],
  www: {
    what: '자원을 최대로 투입해도 더 이상 공기를 단축할 수 없는 [[단축 한계]]의 점 = [[Crash time(특급공기)]]와 [[Crash cost(특급비용)]]의 교점',
    why: '공기단축 가능 범위와 [[비용구배]] 산정의 기준 → [[MCX]] 의사결정',
    how: '작업별 최대 자원 투입 시 공기·비용 산정 → [[정상점]]과 연결하여 Cost slope 계산 → 특급점 도달 작업은 단축 대상에서 제외'
  },
  secs: [
    { h: '정의', def: '[[특급점]](Crash Point)이란 작업에 인력·장비 등 자원을 최대로 투입하여 공기를 단축할 때 더 이상 단축이 불가능한 [[단축 한계]] 시점의 [[Crash time(특급공기)]]와 [[Crash cost(특급비용)]]가 만나는 점으로, 이 점을 넘어서는 자원 투입은 공기단축 없이 [[추가비용만 증가]]시킨다.' },
    { h: '원리 및 도해 — 시간-비용 곡선과 특급점',
      fig: [
        { svg: '<svg viewBox="0 0 560 270"><line x1="70" y1="225" x2="70" y2="15" class="ar"/><line x1="70" y1="225" x2="530" y2="225" class="ar"/><text x="78" y="22" class="b">비용</text><text x="530" y="215" text-anchor="end" class="b">공기</text><line x1="150" y1="70" x2="150" y2="225" class="ln2 dash"/><line x1="150" y1="70" x2="70" y2="70" class="ln2 dash"/><line x1="430" y1="185" x2="430" y2="225" class="ln2 dash"/><line x1="430" y1="185" x2="70" y2="185" class="ln2 dash"/><path d="M150,70 Q210,180 430,185" fill="none" class="bl"/><line x1="150" y1="70" x2="140" y2="25" class="rd dash"/><circle cx="150" cy="70" r="6" class="rf"/><circle cx="430" cy="185" r="5" class="rf"/><text x="64" y="74" text-anchor="end" class="s">특급비용</text><text x="64" y="189" text-anchor="end" class="s">정상비용</text><text x="150" y="242" text-anchor="middle" class="s">Crash time</text><text x="150" y="257" text-anchor="middle" class="s">(특급공기)</text><text x="430" y="242" text-anchor="middle" class="s">Normal time</text><text x="430" y="257" text-anchor="middle" class="s">(정상공기)</text><line x1="145" y1="45" x2="200" y2="30" class="ld"/><circle cx="200" cy="30" r="2" class="dotf"/><text x="206" y="34" class="r">자원 추가 투입해도 단축 불가</text><line x1="150" y1="70" x2="240" y2="95" class="ld"/><circle cx="240" cy="95" r="2" class="dotf"/><text x="246" y="99" class="r">특급점(Crash point)</text><line x1="430" y1="185" x2="470" y2="155" class="ld"/><circle cx="470" cy="155" r="2" class="dotf"/><text x="440" y="148" class="b">정상점(Normal point)</text></svg>',
          cap: '[도해1] 특급점 = 단축 한계점, 이후는 비용만 상승(점선)' },
        { svg: '<svg viewBox="0 0 560 230"><line x1="70" y1="200" x2="70" y2="15" class="ar"/><line x1="70" y1="200" x2="530" y2="200" class="ar"/><text x="78" y="22" class="b">비용</text><text x="530" y="218" text-anchor="end" class="b">공기</text><line x1="150" y1="110" x2="430" y2="160" class="bl"/><line x1="230" y1="40" x2="430" y2="150" class="rd"/><circle cx="150" cy="110" r="5" class="rf"/><circle cx="230" cy="40" r="5" class="rf"/><circle cx="430" cy="160" r="4" class="rf"/><circle cx="430" cy="150" r="4" class="rf"/><line x1="290" y1="135" x2="300" y2="180" class="ld"/><circle cx="300" cy="180" r="2" class="dotf"/><text x="306" y="184" class="bl">작업 A: 비용구배 小 → 우선 단축</text><line x1="330" y1="95" x2="370" y2="70" class="ld"/><circle cx="370" cy="70" r="2" class="dotf"/><text x="376" y="74" class="r">작업 B: 비용구배 大 → 후순위</text><line x1="150" y1="110" x2="110" y2="70" class="ld"/><circle cx="110" cy="70" r="2" class="dotf"/><text x="78" y="58" class="s">Crash point 도달 → 다음 작업</text></svg>',
          cap: '[도해2] 작업별 Cost slope 비교 — 작은 작업부터 Crash point까지 단축' } ],
      flow: ['정상점 산정', '최대 자원 투입 검토', '특급점(Crash) 산정', 'Cost slope 계산', 'C.P 최소 구배 작업 단축', '특급점 도달 시 다음 작업'] },
    { h: '특징 — 정상점 vs 특급점', tbl: { head: ['구분', '정상점(Normal point)', '특급점(Crash point)'], rows: [
      ['공기', 'Normal time(정상공기)', '[[Crash time(특급공기)]] — 최단 공기'],
      ['비용', 'Normal cost — 최소 직접비', '[[Crash cost(특급비용)]] — 최대 직접비'],
      ['자원 투입', '경제적·정상 투입', '최대 투입(야간·휴일·장비 추가)'],
      ['의미', 'Cost slope 산정 기준점(분모 시작)', '공기단축 한계 = [[단축 한계]]']] },
      ul2: ['{{Cost slope = (Crash cost − Normal cost) / (Normal time − Crash time)}}', '{{공기단축 가능일수 = Normal time − Crash time}}'] },
    { h: '적용 시 유의사항', ul: [
      '특급점 산정 시 현장 여건(작업공간·양중능력·동시작업 간섭) 반영',
      '특급점 근접 시 품질·안전 저하 우려 → 관리 강화',
      '특급점 도달 작업은 더 이상 단축 대상 아님 → 다음 최소 Cost slope 작업 선정',
      '병행 C.P 발생 시 복수 작업 동시 단축 필요(비용 합산 비교)',
      '단축에 따른 간접비 감소분을 함께 고려하여 최적공기 판단' ] },
    { h: '개선방안', ul: [
      '실적 기반 작업별 Normal/Crash 자료 DB화',
      '신공법·장비 대형화로 Crash time 자체 단축',
      'MCX 프로그램·BIM 공정 시뮬레이션으로 단축 대안 자동 비교' ] }
  ],
  effect: '공기단축 가능 한계를 명확히 하여 무리한 자원 투입에 의한 비용 낭비와 품질·안전 저하를 방지한다.',
  mnemo: 'C·C·C (Crash point = Crash time × Crash cost) / “특급점 넘으면 돈만 든다”',
  img: [],
  src: '표준 교재 정리(원본 답안 없음)'
},
{
  no: 176, cat: '공정·원가관리', type: '용어',
  title: '자원분배 / 자원배당 (Resource Allocation)',
  key: ['자원배당', '자원평준화', '여유시간(Float)', '부하도', 'Peak', 'EST 방식', 'LST 방식', '동원인원'],
  www: {
    what: '각 작업의 투입자원을 [[여유시간(Float)]] 내에서 균등 배분하여 자원 투입 규모를 평준화하는 [[자원배당]]',
    why: '자원 [[Peak]] 제거 → 유휴·낭비 최소화, 비용 증가 최소·효율 최대',
    how: '[[부하도]] 작성([[EST 방식]]/[[LST 방식]]) → Peak 지점 확인 → 비주공정 작업 이동으로 [[자원평준화]]'
  },
  secs: [
    { h: '정의', def: '[[자원배당]](자원분배)이란 각 작업에 투입되는 인력·장비·자재 등 자원을 [[여유시간(Float)]] 내에서 균등 배분하여 자원 소요량과 가용 자원량을 상호 조정함으로써, 전체 투입 규모를 목표 수준([[동원인원]])으로 [[자원평준화]]하고 비용 증가 최소·효율 최대를 도모하는 공정관리 기법이다.' },
    { h: '원리 및 도해 — 자원 히스토그램(평준화 전·후)',
      fig: { svg: '<svg viewBox="0 0 560 250"><text x="150" y="20" text-anchor="middle" class="b">평준화 전 (EST 부하)</text><text x="420" y="20" text-anchor="middle" class="b">평준화 후</text><line x1="40" y1="210" x2="40" y2="30" class="ar"/><line x1="40" y1="210" x2="265" y2="210" class="ar"/><line x1="310" y1="210" x2="310" y2="30" class="ar"/><line x1="310" y1="210" x2="535" y2="210" class="ar"/><text x="44" y="40" class="s">인원</text><text x="262" y="228" text-anchor="end" class="s">공기</text><text x="532" y="228" text-anchor="end" class="s">공기</text><rect x="45" y="170" width="20" height="40" class="bx2"/><rect x="65" y="120" width="20" height="90" class="bx2"/><rect x="85" y="70" width="20" height="140" class="bx2"/><rect x="105" y="60" width="20" height="150" class="bx2"/><rect x="125" y="100" width="20" height="110" class="bx2"/><rect x="145" y="150" width="20" height="60" class="bx2"/><rect x="165" y="120" width="20" height="90" class="bx2"/><rect x="185" y="160" width="20" height="50" class="bx2"/><rect x="205" y="180" width="20" height="30" class="bx2"/><rect x="225" y="190" width="20" height="20" class="bx2"/><rect x="315" y="140" width="20" height="70" class="bx3"/><rect x="335" y="130" width="20" height="80" class="bx3"/><rect x="355" y="125" width="20" height="85" class="bx3"/><rect x="375" y="125" width="20" height="85" class="bx3"/><rect x="395" y="125" width="20" height="85" class="bx3"/><rect x="415" y="130" width="20" height="80" class="bx3"/><rect x="435" y="130" width="20" height="80" class="bx3"/><rect x="455" y="135" width="20" height="75" class="bx3"/><rect x="475" y="135" width="20" height="75" class="bx3"/><rect x="495" y="145" width="20" height="65" class="bx3"/><line x1="40" y1="60" x2="260" y2="60" class="rd dash"/><line x1="40" y1="132" x2="260" y2="132" class="bl dash"/><line x1="310" y1="132" x2="530" y2="132" class="bl dash"/><line x1="115" y1="60" x2="150" y2="40" class="ld"/><circle cx="150" cy="40" r="2" class="dotf"/><text x="156" y="44" class="r">Peak(최대 인원)</text><line x1="260" y1="132" x2="285" y2="110" class="ld"/><circle cx="285" cy="110" r="2" class="dotf"/><text x="250" y="100" class="bl">평균 동원인원</text><line x1="420" y1="125" x2="470" y2="60" class="ld"/><circle cx="470" cy="60" r="2" class="dotf"/><text x="400" y="52" class="g">균등 배분(변동 최소)</text></svg>',
        cap: '[도해] 평균선 위 Peak를 깎아 여유시간 내 골(低) 구간으로 이동 → 자원 평준화' },
      flow: ['부하도 작성(EST·LST)', '균형도 파악(Peak 확인)', '여유시간 내 작업 이동', '균등 배분(평준화)', '공정표 수정'] },
    { h: '특징 — 자원배당의 의미 및 방식', tbl: { head: ['구분', '내용'], rows: [
      ['비용 최소', '최소 자원으로 투입비용 최소화'],
      ['일정 조율', '자원 과다 시 활동 일정 조정'],
      ['시간 활용', '[[여유시간(Float)]] 내 전후 작업시간 조정'],
      ['[[EST 방식]]', '초기 투자비 과다 · 공기 준수 유리'],
      ['[[LST 방식]]', '초기 투자비 최소 · 공기 미준수 우려'],
      ['조합 방식', '합리적 배당을 위해 여유시간 활용(EST·LST 절충)']] } },
    { h: '적용 시 유의사항', ul: [
      '주공정(C.P) 작업은 이동 불가 → 비주공정 작업의 Float 범위 내에서만 조정',
      '자원 종류별(인력·장비·자재) 각각 평준화, 우선순위 자원(타워크레인 등) 먼저',
      '평준화로 Float 소진 시 공기 지연 위험 증가 → 리스크 검토',
      '가용 자원 한도(동원 가능 인원) 초과 시 공기 연장 또는 추가 조달 판단',
      '협력업체 투입 계획과 연계(작업조 이동 최소화)' ] },
    { h: '개선방안', ul: [
      '공정관리 S/W의 Resource Leveling 기능 활용',
      'BIM 4D·5D 연계 자원 시뮬레이션',
      '다공종 숙련공(Multi-skill) 운용으로 유연성 확보' ] }
  ],
  effect: '자원 투입의 급격한 변동(Peak)을 줄여 유휴 인력·장비 낭비를 막고 공사비를 절감하며 안정적인 공정 운영이 가능하다.',
  mnemo: '부·균·균 (부하도→균형도→균등배분) / EST “돈 먼저 공기 OK”, LST “돈 나중 공기 위험”',
  img: [],
  src: '디테일용어300 No.283'
},
{
  no: 177, cat: '공정·원가관리', type: '용어',
  title: 'EVMS (Earned Value Management System, 공정·원가 통합관리)',
  key: ['공정·원가 통합관리', 'PV(BCWS)', 'EV(BCWP)', 'AC(ACWP)', 'SV·CV', 'SPI·CPI', 'EAC', 'BAC'],
  www: {
    what: '[[PV(BCWS)]]·[[EV(BCWP)]]·[[AC(ACWP)]] 3요소로 공정과 원가를 동시에 측정하는 [[공정·원가 통합관리]] 체계',
    why: '계획 대비 진도·원가 편차를 정량화하여 조기 경보 및 최종 사업비([[EAC]]) 예측',
    how: 'WBS·CBS 연계 관리계정 설정 → 기준선(PV) 수립 → 기성(EV)·실투입비(AC) 측정 → [[SV·CV]]·[[SPI·CPI]] 분석 → 만회대책'
  },
  secs: [
    { h: '정의', def: 'EVMS란 WBS 기반으로 계획된 예산(PV), 실제 수행한 작업의 예산 가치(EV), 실제 투입 비용(AC)의 3요소를 비교하여 공정과 원가의 편차([[SV·CV]])와 효율([[SPI·CPI]])을 정량적으로 분석하고, 최종 예상 사업비([[EAC]])를 예측하는 [[공정·원가 통합관리]] 기법이다.' },
    { h: '원리 및 도해 — S-Curve와 3요소',
      fig: [
        { svg: '<svg viewBox="0 0 560 285"><line x1="60" y1="245" x2="60" y2="15" class="ar"/><line x1="60" y1="245" x2="540" y2="245" class="ar"/><text x="66" y="14" class="b">누적비용</text><text x="540" y="262" text-anchor="end" class="b">공기</text><line x1="60" y1="35" x2="510" y2="35" class="ln2 dash"/><text x="66" y="48" class="s">BAC(총예산)</text><path d="M60,245 Q180,240 300,130 T510,35" fill="none" class="bl"/><path d="M60,245 Q200,240 300,155" fill="none" class="gr"/><path d="M60,245 Q170,238 300,105" fill="none" class="rd"/><line x1="300" y1="105" x2="510" y2="15" class="rd dash"/><text x="505" y="12" text-anchor="end" class="r">EAC</text><line x1="300" y1="20" x2="300" y2="245" class="ln2 dash"/><text x="300" y="262" text-anchor="middle" class="s">Data Date(기준일)</text><line x1="300" y1="130" x2="320" y2="130" class="ln2 dash"/><line x1="300" y1="155" x2="350" y2="155" class="ln2 dash"/><line x1="300" y1="105" x2="350" y2="105" class="ln2 dash"/><line x1="318" y1="155" x2="318" y2="131" class="ar"/><text x="322" y="147" class="b">SV</text><line x1="345" y1="155" x2="345" y2="106" class="ar"/><text x="350" y="133" class="b">CV</text><line x1="412" y1="51" x2="440" y2="80" class="ld"/><circle cx="440" cy="80" r="2" class="dotf"/><text x="446" y="84" class="bl">PV(BCWS) 계획</text><line x1="300" y1="105" x2="255" y2="72" class="ld"/><circle cx="255" cy="72" r="2" class="dotf"/><text x="150" y="68" class="r">AC(ACWP) 실투입</text><line x1="300" y1="155" x2="360" y2="200" class="ld"/><circle cx="360" cy="200" r="2" class="dotf"/><text x="366" y="204" class="g">EV(BCWP) 기성</text></svg>',
          cap: '[도해1] 기준일 현재 EV가 PV 아래(SV−, 공정 지연), AC가 EV 위(CV−, 원가 초과) → EAC 증가' },
        { svg: '<svg viewBox="0 0 560 230"><line x1="80" y1="115" x2="480" y2="115" class="ar"/><line x1="280" y1="215" x2="280" y2="15" class="ar"/><text x="486" y="119" class="b">SPI</text><text x="286" y="20" class="b">CPI</text><text x="272" y="130" text-anchor="end" class="s">1.0</text><text x="380" y="60" text-anchor="middle" class="g">공기 단축·원가 절감</text><text x="180" y="60" text-anchor="middle">공기 지연·원가 절감</text><text x="380" y="175" text-anchor="middle">공기 단축·원가 초과</text><text x="180" y="140" text-anchor="middle" class="r">공기 지연·원가 초과</text><line x1="440" y1="115" x2="470" y2="95" class="ld"/><circle cx="470" cy="95" r="2" class="dotf"/><text x="420" y="88" class="s">SPI = EV/PV</text><line x1="280" y1="40" x2="320" y2="30" class="ld"/><circle cx="320" cy="30" r="2" class="dotf"/><text x="326" y="34" class="s">CPI = EV/AC</text><circle cx="220" cy="170" r="5" class="rf"/><line x1="220" y1="170" x2="170" y2="200" class="ld"/><circle cx="170" cy="200" r="2" class="dotf"/><text x="60" y="216" class="r">관리 집중(원인분석·만회대책)</text></svg>',
          cap: '[도해2] SPI·CPI 4분면 — 1.0 기준, 좌하(둘 다 1 미만)가 최우선 관리 대상' } ],
      flow: ['WBS·CBS 연계', '관리계정(CA) 설정', '기준선(PV) 수립', 'EV·AC 측정', '편차·지수 분석', 'EAC 예측·만회대책'] },
    { h: '특징 — 3요소 및 분석지표', tbl: { head: ['구분', '산식', '판단'], rows: [
      ['[[PV(BCWS)]]', '계획 작업의 예산', '기준선(Baseline)'],
      ['[[EV(BCWP)]]', '실제 완료 작업의 예산(기성)', '성과 측정치'],
      ['[[AC(ACWP)]]', '실제 완료 작업의 실투입비', '실적 원가'],
      ['SV / CV', '{{SV = EV − PV}} / {{CV = EV − AC}}', '(−)이면 지연 / 초과'],
      ['SPI / CPI', '{{SPI = EV / PV}} / {{CPI = EV / AC}}', '1.0 미만이면 지연 / 초과'],
      ['EAC / VAC', '{{EAC = AC + ETC}} (CPI 지속 가정 시 {{EAC = BAC / CPI}}) / {{VAC = BAC − EAC}}', '최종 사업비 예측(ETC = 잔여작업 추정비)']] } },
    { h: '적용 시 유의사항', ul: [
      'WBS·CBS 코드 일치가 전제 — 내역과 공정 항목 불일치 시 EV 산정 오류',
      '기성(EV) 측정 기준(공정률 산정 방법: 물량·Milestone·주관 등) 사전 합의',
      '기준선(PV) 변경은 설계변경 등 승인 절차를 거쳐서만 수행',
      '실투입비(AC) 집계 시점과 기성 측정 시점 일치(Data Date 통일)',
      '지표는 추세 분석으로 활용 — 단일 시점 수치만으로 판단 지양' ] },
    { h: '개선방안', ul: [
      'PMIS·ERP 연동으로 AC 자동 집계, 실시간 분석',
      'BIM 5D 물량 기반 EV 자동 산정',
      '표준 WBS·CBS 및 관리계정 가이드 정립, 발주자·시공자 공동 운영' ] }
  ],
  effect: '공정과 원가를 하나의 기준으로 동시에 측정하여 지연·초과를 조기에 발견하고 최종 사업비를 예측해 선제적 대응을 가능하게 한다.',
  mnemo: '“P·E·A = 계획·기성·실투입” / 편차는 E에서 빼고(EV−), 지수는 E를 나눈다(EV/)',
  img: [],
  src: '표준 교재 정리(원본 답안 없음)'
},
{
  no: 178, cat: '공정·원가관리', type: '용어',
  title: '원가 구성체계 / 건축공사 원가계산서',
  key: ['원가계산서', '순공사비', '직접공사비', '간접공사비', '현장경비', '일반관리비', '이윤', '재료비·노무비·경비'],
  www: {
    what: '공사원가를 [[재료비·노무비·경비]] 등 비목별로 계층화한 원가 구성체계와 이를 산정한 [[원가계산서]]',
    why: '예정가격 작성(원가계산·표준시장단가)의 근거, 투명성 확보 및 공정·원가 통합관리(EVMS)',
    how: '[[직접공사비]]+[[간접공사비]] = [[순공사비]] → +[[현장경비]] → +[[일반관리비]] → +[[이윤]] 순 적상(WBS-CBS 연계)'
  },
  secs: [
    { h: '정의', def: '건설공사 원가란 [[재료비·노무비·경비]] 등을 포함한 총비용으로, 원가계산에 의한 예정가격 또는 표준시장단가에 의한 예정가격 작성을 위해 [[원가계산서]]를 작성하며, 투명성 확보와 공정·원가 통합관리(EVMS)를 위해 WBS-CBS가 연계된 산출체계가 필수적이다.' },
    { h: '원리 및 도해 — 원가 구성체계 / 원가계산서 구성',
      fig: [
        { svg: '<svg viewBox="0 0 560 300"><rect x="8" y="200" width="76" height="28" class="bx"/><text x="46" y="219" text-anchor="middle" class="b">총공사비</text><rect x="104" y="140" width="76" height="28" class="bx2"/><text x="142" y="159" text-anchor="middle">총원가</text><rect x="104" y="255" width="76" height="28" class="bx3"/><text x="142" y="274" text-anchor="middle">부가이윤</text><rect x="200" y="95" width="76" height="28" class="bx2"/><text x="238" y="114" text-anchor="middle">공사원가</text><rect x="200" y="200" width="76" height="28" class="bx3"/><text x="238" y="219" text-anchor="middle" class="s">일반관리비</text><rect x="296" y="55" width="76" height="28" class="bx2"/><text x="334" y="74" text-anchor="middle" class="b">순공사비</text><rect x="296" y="150" width="76" height="28" class="bx3"/><text x="334" y="169" text-anchor="middle">현장경비</text><rect x="392" y="20" width="76" height="28" class="bx"/><text x="430" y="39" text-anchor="middle" class="s">직접공사비</text><rect x="392" y="105" width="76" height="28" class="bx"/><text x="430" y="124" text-anchor="middle" class="s">간접공사비</text><line x1="84" y1="214" x2="94" y2="214" class="ln2"/><line x1="94" y1="154" x2="94" y2="269" class="ln2"/><line x1="94" y1="154" x2="104" y2="154" class="ln2"/><line x1="94" y1="269" x2="104" y2="269" class="ln2"/><line x1="180" y1="154" x2="190" y2="154" class="ln2"/><line x1="190" y1="109" x2="190" y2="214" class="ln2"/><line x1="190" y1="109" x2="200" y2="109" class="ln2"/><line x1="190" y1="214" x2="200" y2="214" class="ln2"/><line x1="276" y1="109" x2="286" y2="109" class="ln2"/><line x1="286" y1="69" x2="286" y2="164" class="ln2"/><line x1="286" y1="69" x2="296" y2="69" class="ln2"/><line x1="286" y1="164" x2="296" y2="164" class="ln2"/><line x1="372" y1="69" x2="382" y2="69" class="ln2"/><line x1="382" y1="34" x2="382" y2="119" class="ln2"/><line x1="382" y1="34" x2="392" y2="34" class="ln2"/><line x1="382" y1="119" x2="392" y2="119" class="ln2"/><line x1="468" y1="34" x2="478" y2="34" class="ln2"/><line x1="478" y1="14" x2="478" y2="68" class="ln2"/><line x1="478" y1="14" x2="488" y2="14" class="ln2"/><line x1="478" y1="32" x2="488" y2="32" class="ln2"/><line x1="478" y1="50" x2="488" y2="50" class="ln2"/><line x1="478" y1="68" x2="488" y2="68" class="ln2"/><text x="492" y="18" class="s">재료비</text><text x="492" y="36" class="s">노무비</text><text x="492" y="54" class="s">외주비</text><text x="492" y="72" class="s">경비</text><line x1="300" y1="55" x2="260" y2="30" class="ld"/><circle cx="260" cy="30" r="2" class="dotf"/><text x="140" y="26" class="r">예산통제 핵심 = 순공사비</text><line x1="468" y1="119" x2="500" y2="140" class="ld"/><circle cx="500" cy="140" r="2" class="dotf"/><text x="395" y="160" class="s">간접재료·노무, 보험료, 안전관리비</text><line x1="180" y1="269" x2="220" y2="255" class="ld"/><circle cx="220" cy="255" r="2" class="dotf"/><text x="226" y="259" class="s">이윤(율 적용)</text></svg>',
          cap: '[도해1] 원가 구성체계 — 순공사비 → 공사원가 → 총원가 → 총공사비 순으로 적상' },
        { svg: '<svg viewBox="0 0 560 200"><rect x="20" y="80" width="90" height="40" class="bx"/><text x="65" y="105" text-anchor="middle" class="s">재료비</text><rect x="110" y="80" width="80" height="40" class="bx2"/><text x="150" y="105" text-anchor="middle" class="s">노무비</text><rect x="190" y="80" width="70" height="40" class="bx3"/><text x="225" y="105" text-anchor="middle" class="s">경비</text><rect x="260" y="80" width="50" height="40" class="bx"/><text x="285" y="105" text-anchor="middle" class="s">일반관리</text><rect x="310" y="80" width="60" height="40" class="bx2"/><text x="340" y="105" text-anchor="middle" class="s">이윤</text><rect x="370" y="80" width="30" height="40" class="bx3"/><text x="385" y="105" text-anchor="middle" class="s">보험</text><rect x="400" y="80" width="60" height="40" class="bx"/><text x="430" y="105" text-anchor="middle" class="s">부가세</text><line x1="20" y1="70" x2="260" y2="70" class="ln"/><line x1="20" y1="70" x2="20" y2="76" class="ln"/><line x1="260" y1="70" x2="260" y2="76" class="ln"/><text x="200" y="64" text-anchor="middle" class="b">순공사원가</text><line x1="20" y1="135" x2="370" y2="135" class="ln"/><text x="195" y="150" text-anchor="middle" class="b">총원가</text><line x1="20" y1="165" x2="460" y2="165" class="ln"/><text x="240" y="180" text-anchor="middle" class="b">총공사비</text><line x1="285" y1="80" x2="300" y2="40" class="ld"/><circle cx="300" cy="40" r="2" class="dotf"/><text x="306" y="44" class="s">(재+노+경) × 율</text><line x1="340" y1="80" x2="400" y2="25" class="ld"/><circle cx="400" cy="25" r="2" class="dotf"/><text x="406" y="29" class="r">(노+경+일관) × 율</text><line x1="150" y1="80" x2="120" y2="30" class="ld"/><circle cx="120" cy="30" r="2" class="dotf"/><text x="20" y="26" class="s">직접노무+간접노무</text><line x1="430" y1="120" x2="490" y2="140" class="ld"/><circle cx="490" cy="140" r="2" class="dotf"/><text x="470" y="155" class="s">VAT 10%</text></svg>',
          cap: '[도해2] 원가계산서(예정가격) 구성 — 순공사원가 + 일반관리비 + 이윤 = 총원가, + 보험료 + 부가세 = 총공사비' } ],
      flow: ['물량 산출(수량)', '단가 적용(재·노·경)', '순공사원가', '일반관리비·이윤(율)', '보험료·부가세', '총공사비(예정가격)'] },
    { h: '특징 — 원가계산서 핵심 비용', tbl: { head: ['비목', '산정 방법', '비고'], rows: [
      ['재료비', '수량(정미량 + 할증량) × 단가', '직접재료비·간접재료비 구분'],
      ['노무비', '직접노무비(작업량 × 시중노임단가) + 간접노무비(직접노무비 × 간접노무비율)', '표준품셈 기반 산출'],
      ['경비', '직접계상 경비(소요량 산출) + 승률계상 경비(비율 산출)', '전력비·가설비·보험료 등'],
      ['일반관리비', '(재료비 + 노무비 + 경비) × 일반관리비율(공사 상한 {{6%}})', '규모별 상한율'],
      ['이윤', '(노무비 + 경비 + 일반관리비) × 이윤율', '이윤율 상한 {{15%}}'],
      ['직접 vs 간접', '직접재료·직접노무·기계경비·외주비', '간접재료·간접노무·산재/고용보험료·안전관리비·환경보전비']] } },
    { h: '기준 — 원가계산 제비율 (국가계약법 시행규칙 제8조 등)', tbl: { head: ['항목', '기준', '근거'], rows: [
      ['일반관리비율', '공사원가(재료비+노무비+경비)의 {{6%}} 이내', '국가계약법 시행규칙 제8조 (공사)'],
      ['이윤율', '(노무비+경비+일반관리비)의 {{15%}} 이내', '국가계약법 시행규칙 제8조 (공사)'],
      ['부가가치세', '(총원가 + 공사손해보험료)의 {{10%}}', '부가가치세법'],
      ['간접노무비율·산재/고용보험료율·산업안전보건관리비 요율', '공사 종류·규모별 고시 요율 적용', '예정가격 작성기준·고용노동부 고시 (매년 개정, 최신 고시 확인)']] } },
    { h: '적용 시 유의사항', ul: [
      '[[순공사비]]의 정밀 산출이 예산 통제의 핵심 — 물량 누락·중복 방지',
      '할증률·품셈·노임단가 최신 기준 적용(시중노임단가 공표 주기 확인)',
      '법정경비(산재·고용보험료, 산업안전보건관리비, 환경보전비) 누락 금지',
      '내역(CBS)과 공정(WBS) 코드 일치 → EVMS·기성 관리 연계',
      '설계변경·물가변동 시 원가계산서 단가 기준 일관성 유지' ] },
    { h: '개선방안', ul: [
      'BIM 기반 물량 자동산출(5D)로 적산 정확도 향상',
      '표준시장단가·실적공사비 DB 확충',
      '원가 분류체계(CBS) 표준화 → 발주처·시공사 간 데이터 호환' ] }
  ],
  effect: '공사비의 구성과 산정 근거를 투명하게 하여 적정 예정가격 산정, 예산 통제 및 공정·원가 통합관리의 기초를 제공한다.',
  mnemo: '직+간=순 → +현=공 → +일=총원 → +이=총공 (“직간순 현공 일총 이총”)',
  img: [],
  src: '디테일용어300 No.285 · 디테일도표 97 건설 원가구성체계(총공사비=총원가+이윤 / 총원가=공사원가+일반관리비 / 공사원가=순공사비+현장경비 / 순공사비=직접+간접) · 국가계약법 시행규칙 제8조(공사 일반관리비 6%·이윤 15%)'
},
{
  no: 179, cat: '안전·환경', type: '용어',
  title: '물질안전보건자료 (MSDS, Material Safety Data Sheet)',
  key: ['물질안전보건자료', '16개 항목', '유해성·위험성', '작성·제출', '게시·비치', '경고표지', 'MSDS 교육', '산업안전보건법'],
  www: {
    what: '화학물질의 [[유해성·위험성]], 취급방법, 응급조치 등 [[16개 항목]]을 기재한 [[물질안전보건자료]]',
    why: '근로자의 알 권리 보장, 화학물질 중독·화재·폭발 등 산업재해 예방',
    how: '제조·수입자 [[작성·제출]] → 사업주에 제공 → 작업장 [[게시·비치]]·[[경고표지]] 부착 → 근로자 [[MSDS 교육]]'
  },
  secs: [
    { h: '정의', def: 'MSDS란 화학물질 또는 이를 함유한 혼합물의 명칭, 구성성분, [[유해성·위험성]], 응급조치요령, 취급·저장방법 등 {{16개 항목}}을 기재한 [[물질안전보건자료]]로서, [[산업안전보건법]]에 따라 제조·수입자가 작성·제출·제공하고 사업주는 작업장에 [[게시·비치]]하고 근로자를 교육하여 화학물질에 의한 재해를 예방하는 제도이다.' },
    { h: '원리 및 도해 — MSDS 관리 흐름',
      fig: { svg: '<svg viewBox="0 0 560 240"><rect x="20" y="90" width="110" height="40" class="bx"/><text x="75" y="115" text-anchor="middle" class="b">제조·수입자</text><rect x="200" y="20" width="130" height="36" class="bx2"/><text x="265" y="43" text-anchor="middle">고용노동부(제출)</text><rect x="200" y="100" width="130" height="36" class="bx2"/><text x="265" y="123" text-anchor="middle" class="b">사업주(제공받음)</text><rect x="400" y="30" width="130" height="36" class="bx3"/><text x="465" y="53" text-anchor="middle">게시·비치</text><rect x="400" y="95" width="130" height="36" class="bx3"/><text x="465" y="118" text-anchor="middle">경고표지 부착</text><rect x="400" y="160" width="130" height="36" class="bx3"/><text x="465" y="183" text-anchor="middle">근로자 교육</text><line x1="130" y1="105" x2="198" y2="40" class="ar"/><line x1="130" y1="115" x2="198" y2="118" class="ar"/><line x1="330" y1="112" x2="398" y2="50" class="ar"/><line x1="330" y1="118" x2="398" y2="113" class="ar"/><line x1="330" y1="124" x2="398" y2="176" class="ar"/><line x1="75" y1="130" x2="75" y2="175" class="ld"/><circle cx="75" cy="175" r="2" class="dotf"/><text x="20" y="192" class="r">MSDS 16개 항목 작성</text><line x1="265" y1="136" x2="265" y2="170" class="ld"/><circle cx="265" cy="170" r="2" class="dotf"/><text x="180" y="186" class="s">취급 근로자가 쉽게 볼 수 있는 장소</text><line x1="330" y1="38" x2="360" y2="15" class="ld"/><circle cx="360" cy="15" r="2" class="dotf"/><text x="366" y="19" class="s">제출·비공개 승인</text><line x1="465" y1="196" x2="465" y2="215" class="ld"/><circle cx="465" cy="215" r="2" class="dotf"/><text x="340" y="232" class="s">배치·신규 도입·정보 변경 시 교육</text></svg>',
        cap: '[도해] 제조·수입자 작성·제출·제공 → 사업주 게시·경고표지·교육 → 근로자 알 권리 확보' },
      flow: ['MSDS 작성(16개 항목)', '고용노동부 제출', '사업주에 제공', '작업장 게시·비치', '경고표지 부착', 'MSDS 교육·기록'] },
    { h: '특징 — MSDS 16개 기재 항목', tbl: { head: ['번호', '항목', '번호', '항목'], rows: [
      ['1', '화학제품과 회사 정보', '9', '물리화학적 특성'],
      ['2', '유해성·위험성', '10', '안정성 및 반응성'],
      ['3', '구성성분의 명칭 및 함유량', '11', '독성에 관한 정보'],
      ['4', '응급조치 요령', '12', '환경에 미치는 영향'],
      ['5', '폭발·화재 시 대처방법', '13', '폐기 시 주의사항'],
      ['6', '누출사고 시 대처방법', '14', '운송에 필요한 정보'],
      ['7', '취급 및 저장방법', '15', '법적 규제현황'],
      ['8', '노출방지 및 개인보호구', '16', '그 밖의 참고사항']] } },
    { h: '기준 — 산업안전보건법 MSDS 관련 조항', tbl: { head: ['조항', '내용'], rows: [
      ['제110조', '제조·수입자 MSDS [[작성·제출]] (고용노동부장관, 산업안전보건공단 전산 제출)'],
      ['제111조', '양도·제공하는 자는 상대방에게 MSDS 제공, 변경 시 변경내용 제공'],
      ['제112조', '영업비밀 성분 비공개 승인(대체자료 기재)'],
      ['제114조', '사업주 [[게시·비치]] 및 근로자 [[MSDS 교육]](배치 시·신규 도입 시·정보 변경 시)'],
      ['제115조', '용기·포장 [[경고표지]](경고표시) 부착'],
      ['기재항목', '고용노동부 고시(화학물질의 분류·표시 및 MSDS 기준) — {{16개 항목}}']] } },
    { h: '적용 시 유의사항 (건설현장)', ul: [
      '도료·방수재·접착제·용제·실란트 등 반입 시 MSDS 수령 확인',
      '취급 작업장 내 근로자가 쉽게 볼 수 있는 장소에 [[게시·비치]] (전산 열람 가능 시 대체 가능)',
      '용기·포장에 [[경고표지]] 부착(소분 용기 포함)',
      '[[MSDS 교육]]: 해당 작업 근로자 배치 시, 새로운 대상물질 도입 시, 유해성·위험성 정보 변경 시 실시 및 교육시간·내용 기록 보존',
      '밀폐공간 도장 등 고위험 작업 시 환기·보호구(방독마스크)·화기 통제' ] },
    { h: '개선방안', ul: [
      '현장 화학물질 대장 전산화·QR코드 MSDS 열람 시스템',
      '외국인 근로자용 다국어 MSDS·경고표지',
      '저VOC·친환경 자재 우선 사용으로 유해물질 사용 자체 저감' ] }
  ],
  effect: '근로자의 알 권리를 보장하고 화학물질에 의한 중독·화재·폭발 등 재해와 직업병을 예방한다.',
  mnemo: '작·제·게·경·교 (작성·제출·게시·경고표지·교육) / 16개 = “1회사 2유해 3성분 4응급”',
  img: [],
  src: '표준 교재 정리(원본 답안 없음) · 산업안전보건법 제110~115조(2019 전부개정, 2021.1.16 제출의무 시행) · 비공개 승인 유효기간 등 세부는 확인 필요'
},
{
  no: 180, cat: '안전·환경', type: '용어',
  title: '소음·진동관리 (건설공사)',
  key: ['소음·진동관리법', '생활소음 규제기준', '특정공사 사전신고', '부지경계선', '저소음·저진동 장비', '방음벽', '실시간 모니터링', 'dB(A)·dB(V)'],
  www: {
    what: '건설공사 중 항타·발파·장비 가동으로 발생하는 소음·진동을 [[소음·진동관리법]] 기준 이하로 관리하는 것',
    why: '인근 주민 생활환경 피해·민원 및 인접 구조물 손상 방지',
    how: '[[특정공사 사전신고]] → [[저소음·저진동 장비]]·[[방음벽]] 설치 → [[부지경계선]]에서 측정·[[실시간 모니터링]]'
  },
  secs: [
    { h: '정의', def: '건설공사 소음·진동관리란 항타·발파·건설기계 가동 등으로 발생하는 소음·진동이 주변 생활환경을 저해하지 않도록 [[소음·진동관리법]]의 [[생활소음 규제기준]](주거지역 주간 {{65 dB(A)}} 이하 등) 이내로 발생원·전파경로·수음점에서 관리하는 것을 말한다.' },
    { h: '원리 및 도해 — 발생원·전파경로·수음점 관리',
      fig: [
        { svg: '<svg viewBox="0 0 560 235"><rect x="10" y="180" width="540" height="30" class="soil"/><line x1="10" y1="180" x2="550" y2="180" class="ln"/><rect x="40" y="110" width="60" height="70" class="bx"/><text x="70" y="150" text-anchor="middle" class="s">장비</text><path d="M110,120 q15,15 0,30" fill="none" class="bl"/><path d="M125,110 q25,25 0,50" fill="none" class="bl"/><path d="M140,100 q35,35 0,70" fill="none" class="bl"/><rect x="200" y="90" width="8" height="90" class="conc"/><line x1="230" y1="40" x2="230" y2="210" class="rd dash"/><text x="236" y="36" class="r">부지경계선</text><circle cx="240" cy="155" r="4" class="rf"/><rect x="420" y="120" width="80" height="60" class="bx2"/><polygon points="410,120 460,85 510,120" class="bx2"/><text x="460" y="155" text-anchor="middle">주거지</text><path d="M70,195 q10,-8 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" class="gr"/><line x1="204" y1="90" x2="180" y2="60" class="ld"/><circle cx="180" cy="60" r="2" class="dotf"/><text x="110" y="52" class="s">가설방음벽(차음)</text><line x1="240" y1="155" x2="290" y2="75" class="ld"/><circle cx="290" cy="75" r="2" class="dotf"/><text x="296" y="79" class="r">측정: 부지경계선 1.2~1.5m</text><line x1="130" y1="195" x2="160" y2="222" class="ld"/><circle cx="160" cy="222" r="2" class="dotf"/><text x="166" y="228" class="s">진동 전파(지반)</text><line x1="70" y1="110" x2="60" y2="80" class="ld"/><circle cx="60" cy="80" r="2" class="dotf"/><text x="20" y="72" class="s">저소음·저진동 장비</text></svg>',
          cap: '[도해1] 발생원(장비) → 전파경로(방음벽·지반) → 수음점(주거지), 부지경계선에서 측정' },
        { svg: '<svg viewBox="0 0 560 205"><line x1="60" y1="170" x2="520" y2="170" class="ln"/><rect x="80" y="50" width="50" height="120" class="bx"/><text x="105" y="66" text-anchor="middle" class="b">60</text><rect x="150" y="40" width="50" height="130" class="bx"/><text x="175" y="56" text-anchor="middle" class="b">65</text><rect x="220" y="70" width="50" height="100" class="bx"/><text x="245" y="86" text-anchor="middle" class="b">50</text><rect x="340" y="40" width="50" height="130" class="bx2"/><text x="365" y="56" text-anchor="middle" class="b">65</text><rect x="410" y="50" width="50" height="120" class="bx2"/><text x="435" y="66" text-anchor="middle" class="b">60</text><text x="105" y="183" text-anchor="middle" class="s">조석</text><text x="175" y="183" text-anchor="middle" class="s">주간</text><text x="245" y="183" text-anchor="middle" class="s">야간</text><text x="365" y="183" text-anchor="middle" class="s">주간</text><text x="435" y="183" text-anchor="middle" class="s">심야</text><text x="175" y="200" text-anchor="middle" class="b">소음 dB(A)</text><text x="400" y="200" text-anchor="middle" class="b">진동 dB(V)</text><line x1="175" y1="40" x2="200" y2="15" class="ld"/><circle cx="200" cy="15" r="2" class="dotf"/><text x="206" y="19" class="s">주간(07~18시) 65 이하</text><line x1="270" y1="120" x2="295" y2="120" class="ld"/><circle cx="295" cy="120" r="2" class="dotf"/><text x="285" y="138" class="r">야간 50</text><line x1="435" y1="50" x2="470" y2="25" class="ld"/><circle cx="470" cy="25" r="2" class="dotf"/><text x="476" y="29" class="s">심야 60</text></svg>',
          cap: '[도해2] 주거지역 공사장 규제기준 — 소음 조석60·주간65·야간50 dB(A), 진동 주간65·심야60 dB(V)' } ],
      flow: ['사전조사(주변 민감시설)', '특정공사 사전신고', '저소음 공법·장비 선정', '방음벽 설치', '부지경계선 측정·모니터링', '초과 시 작업조정·민원대응'] },
    { h: '특징 — 규제기준 (주거지역 공사장)', tbl: { head: ['구분', '관련법규', '규제기준'], rows: [
      ['소음', '[[소음·진동관리법]]', '조석(05~07, 18~22시) {{60 dB(A)}} 이하 / 주간(07~18시) {{65 dB(A)}} 이하 / 야간(22~05시) {{50 dB(A)}} 이하'],
      ['진동', '[[소음·진동관리법]]', '주간(06~22시) {{65 dB(V)}} 이하 / 심야(22~06시) {{60 dB(V)}} 이하'],
      ['그 밖의 지역', '시행규칙 별표 8', '소음 조석 {{65}}·주간 {{70}}·야간 {{50 dB(A)}} / 진동 주간 {{70}}·심야 {{65 dB(V)}}'],
      ['보정', '시행규칙 별표 8 비고', '주간 특정공사 장비 사용시간 소음 1일 3시간 이하 {{+10dB}}, 3~6시간 {{+5dB}} / 진동 1일 2시간 이하 +10dB, 2~4시간 +5dB / 발파소음 주간 +10dB (확인 필요)'],
      ['신고', '[[특정공사 사전신고]]', '특정 건설기계 사용 공사 착공 전 관할 시장·군수·구청장 신고'],
      ['측정', '공정시험기준', '피해 예상 [[부지경계선]], 지면 위 {{1.2~1.5m}}']] } },
    { h: '시공 시 유의사항', ul: [
      '발생원 대책: [[저소음·저진동 장비]](유압식·압입식 항타, 저소음 브레이커) 사용, 장비 공회전 금지',
      '전파경로 대책: [[방음벽]]·방음막 설치, 소음원과 수음점 이격, 진동 차단 Trench',
      '수음점 대책: 작업시간 조정(조석·야간 작업 지양), 주민 사전 고지',
      '발파·항타 시 인접 구조물 사전 조사(균열 기록) 및 진동 계측',
      '[[실시간 모니터링]] 전광판 설치, 기준 초과 시 즉시 작업 중지·원인 조치' ] },
    { h: '개선방안', ul: [
      'IoT 센서 기반 실시간 소음·진동 모니터링 → 기준 초과 시 관리자 자동 알림',
      '무진동 파쇄·와이어쏘 등 저공해 공법 적용 확대',
      '민원 대응 매뉴얼·주민 협의체 운영' ] }
  ],
  effect: '인근 주민 피해와 민원, 인접 구조물 손상을 예방하고 공사 중지·과태료 등에 의한 공기 지연을 방지한다.',
  mnemo: '소음 “조60·주65·야50” (그 밖 65·70·50) / 진동 “65·60” (그 밖 70·65) / 원·경·수 (발생원·경로·수음점)',
  img: [],
  src: '디테일용어300 No.298 (건설공해 중 소음·진동 기준) · 기술지침 10.총론 p5 (건설공해 법적기준: 소음 주간65·조석60·야간50 dB(A), 진동 주간65·야간60 dB(V)) · 디테일도표 99·100 (생활소음·진동 규제기준: 주거지역 등 / 그 밖의 지역) · 소음·진동관리법 시행규칙 별표 8 · 보정치·특정공사 사전신고 대상 규모는 확인 필요'
}
]);
