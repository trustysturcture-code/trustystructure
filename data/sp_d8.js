// 간단 요약(한눈에·따라 그리기) — 디테일원 용어250 208~226 (근거: data/dw_j.js) — 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
208: {
  one: '공정·원가·품질·안전 정보를 [[Web 기반 통합 DB]]로 모아 참여주체가 [[실시간 공유]]하는 [[사업관리 정보시스템]]',
  flow: ['WBS 코드체계', '권한 설정', 'Data 입력', 'EVMS 분석', '보고·결정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="170" y="105" width="140" height="70" class="bx2"/><text x="240" y="146" text-anchor="middle" class="t">Web 통합 DB</text>' +
    '<rect x="30" y="30" width="100" height="40" class="bx"/><text x="80" y="56" text-anchor="middle">발주자</text>' +
    '<rect x="350" y="30" width="100" height="40" class="bx"/><text x="400" y="56" text-anchor="middle">설계자</text>' +
    '<rect x="30" y="210" width="100" height="40" class="bx"/><text x="80" y="236" text-anchor="middle">시공자</text>' +
    '<rect x="350" y="210" width="100" height="40" class="bx"/><text x="400" y="236" text-anchor="middle">감리자</text>' +
    '<line x1="130" y1="65" x2="170" y2="105" class="ln"/><line x1="350" y1="65" x2="310" y2="105" class="ln"/>' +
    '<line x1="130" y1="215" x2="170" y2="175" class="ln"/><line x1="350" y1="215" x2="310" y2="175" class="ln"/>' +
    '<text x="240" y="40" text-anchor="middle" class="s2">공정·원가·품질·안전</text>' +
    '<text x="240" y="262" text-anchor="middle" class="r">실시간 공유 · WBS 코드</text>' +
    '<text x="12" y="56" class="n">①</text><text x="176" y="124" class="n">②</text><text x="136" y="262" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구성·기능', k: ['[[Web 통합 DB]]', '공정·원가·품질·안전', '문서 전자결재'] },
    { h: '운영 시 유의사항', k: ['[[WBS]] 코드 표준화', '입력 적시성·정확성', '보안·접근권한'] },
    { h: '개선방안', k: ['BIM·모바일 연계', 'IoT·RFID 자동수집', 'AI·빅데이터 분석'] }
  ],
  code: '💡 웹디비 공원품안문 → Web DB에 공정·원가·품질·안전·문서',
  read: '①발주·설계·시공·감리자가 정보 입력 → ②Web 통합 DB에 집적 → ③실시간 공유·의사결정'
},
209: {
  one: '[[객체기반]] 파라메트릭 3D 모델에 건물 [[생애주기]] 정보를 담아 [[IFC]] 표준으로 교환·협업하는 정보모델링',
  flow: ['BEP 수립', 'LOD 설정', '간섭·물량', '4D·5D', 'FM 활용'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="180" y="100" width="100" height="80" class="bx2"/>' +
    '<path d="M180,100 l25,-20 l100,0 l-25,20 z" class="bx"/><path d="M280,100 l25,-20 l0,80 l-25,20 z" class="bx"/>' +
    '<text x="230" y="146" text-anchor="middle" class="t">3D 모델</text>' +
    '<line x1="175" y1="100" x2="135" y2="70" class="ld"/><text x="30" y="60" class="bl">4D 공정(시간)</text>' +
    '<line x1="300" y1="78" x2="330" y2="66" class="ld"/><text x="330" y="60" class="bl">5D 원가(물량)</text>' +
    '<line x1="180" y1="175" x2="110" y2="208" class="ld"/><text x="40" y="225">간섭검토</text>' +
    '<line x1="290" y1="172" x2="330" y2="205" class="ld"/><text x="320" y="225">6D 유지관리(FM)</text>' +
    '<text x="240" y="266" text-anchor="middle" class="r">IFC 표준 교환 · 생애주기 정보</text>' +
    '<text x="150" y="150" class="n">①</text><text x="10" y="60" class="n">②</text><text x="114" y="266" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '도입효과', k: ['간섭검토·물량산출', '[[4D·5D]] 시뮬레이션', '설계변경 즉시 반영'] },
    { h: '적용 시 유의사항', k: ['[[LOD]] 단계별 상세', '[[IFC]] 호환·정보표준', '초기 투자·전문인력'] },
    { h: '활용방안', k: ['FM 연계 유지관리', 'Digital Twin 확장'] }
  ],
  code: '💡 객파생 IFC LOD → 객체·파라메트릭·생애주기',
  read: '①객체 3D 모델에 속성정보 입력 → ②공정(4D)·원가(5D)·FM으로 확장 → ③IFC로 생애주기 공유'
},
210: {
  one: '건설에 [[BIM·드론·IoT·AI·로봇]]을 접목해 [[디지털화·자동화·지능화·제조업화]]로 생산성·안전성을 높이는 기술',
  flow: ['드론·BIM 설계', 'MG·MC 토공', 'OSC·로봇 골조', 'IoT 안전', 'Twin 유지'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="240" cy="130" r="55" class="bx2"/><text x="240" y="136" text-anchor="middle" class="t">스마트 건설</text>' +
    '<rect x="20" y="30" width="160" height="50" class="bx"/><text x="100" y="60" text-anchor="middle">디지털화 BIM·Twin</text>' +
    '<rect x="300" y="30" width="160" height="50" class="bx"/><text x="380" y="60" text-anchor="middle">자동화 MG·MC·로봇</text>' +
    '<rect x="20" y="180" width="160" height="50" class="bx"/><text x="100" y="210" text-anchor="middle">지능화 AI·빅데이터</text>' +
    '<rect x="300" y="180" width="160" height="50" class="bx"/><text x="380" y="210" text-anchor="middle">제조업화 OSC·모듈러</text>' +
    '<line x1="180" y1="80" x2="200" y2="98" class="ln"/><line x1="300" y1="80" x2="280" y2="98" class="ln"/>' +
    '<line x1="180" y1="180" x2="200" y2="164" class="ln"/><line x1="300" y1="180" x2="280" y2="164" class="ln"/>' +
    '<text x="240" y="266" text-anchor="middle" class="r">인력한계 극복 → 생산성·안전성 ↑</text>' +
    '<text x="2" y="60" class="n">①</text><text x="232" y="106" class="n">②</text><text x="100" y="266" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '핵심 요소기술', k: ['디지털화: BIM·Twin', '자동화: MG·MC·로봇', '지능화·제조업화(OSC)'] },
    { h: '도입 시 문제점', k: ['초기 투자비 과다', '표준·제도 미비', '전문인력 부족'] },
    { h: '활성화 방안', k: ['OSC·모듈러 확대', '스마트안전 장비 지원'] }
  ],
  code: '💡 디자지제 → 디지털·자동·지능·제조업화',
  read: '①디지털·자동·지능·제조업화 4대 기술 → ②스마트 건설로 융합 → ③생산성·안전성 향상'
},
211: {
  one: '[[반도체 칩]] Tag의 Data를 [[무선주파수]]로 [[비접촉·원거리]]에서 읽어 자재·인력을 실시간 관리하는 시스템',
  flow: ['Tag 부착', 'Reader 송신', 'Tag 응답', 'DB·PMIS 연동', '이력 추적'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="100" width="80" height="60" class="bx2"/><text x="70" y="136" text-anchor="middle" class="b">Tag 칩</text>' +
    '<path d="M128,112 q10,18 0,36" class="bl"/><path d="M148,104 q14,26 0,52" class="bl"/><path d="M168,96 q18,34 0,68" class="bl"/>' +
    '<rect x="200" y="100" width="100" height="60" class="bx"/><text x="250" y="136" text-anchor="middle" class="b">Reader</text>' +
    '<line x1="302" y1="130" x2="343" y2="130" class="ar"/>' +
    '<rect x="345" y="100" width="115" height="60" class="bx"/><text x="402" y="136" text-anchor="middle" class="b">PMIS DB</text>' +
    '<text x="160" y="80" text-anchor="middle" class="bl">무선주파수</text>' +
    '<text x="160" y="190" text-anchor="middle" class="r">비접촉·원거리 인식</text>' +
    '<text x="30" y="240" class="s2">Active: 전원·원거리</text><text x="250" y="240" class="s2">Passive: 무전원·저가</text>' +
    '<text x="40" y="92" class="n">①</text><text x="205" y="92" class="n">②</text><text x="350" y="92" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '종류·특징', k: ['Active: 전원·원거리', 'Passive: 무전원·저가', '다수 Tag 동시 인식'] },
    { h: '적용 시 유의사항', k: ['금속·수분 간섭 차폐', '인식거리·주파수 선정', 'Tag 부착위치·내구성'] },
    { h: '활용분야', k: ['레미콘·PC 부재 추적', '출입·안전관리 연계'] }
  ],
  code: '💡 칩태리안 → 칩·Tag·Reader·Antenna',
  read: '①자재에 Tag 칩 부착 → ②Reader가 무선주파수로 비접촉 인식 → ③PMIS DB로 실시간 관리'
},
212: {
  one: '공급자–공장–물류–현장의 [[공급망]]을 정보 공유로 통합해 [[JIT]] 조달로 [[재고·대기]]를 최소화하는 관리기법',
  flow: ['공정계획', '정보 공유', '공장 제작', 'JIT 운반', '현장 설치'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="15" y="110" width="90" height="50" class="bx"/><text x="60" y="140" text-anchor="middle">공급자</text>' +
    '<rect x="135" y="110" width="90" height="50" class="bx"/><text x="180" y="140" text-anchor="middle">공장</text>' +
    '<rect x="255" y="110" width="90" height="50" class="bx"/><text x="300" y="140" text-anchor="middle">물류</text>' +
    '<rect x="375" y="110" width="90" height="50" class="bx2"/><text x="420" y="140" text-anchor="middle">현장</text>' +
    '<line x1="105" y1="135" x2="133" y2="135" class="ar"/><line x1="225" y1="135" x2="253" y2="135" class="ar"/><line x1="345" y1="135" x2="373" y2="135" class="ar"/>' +
    '<line x1="60" y1="80" x2="420" y2="80" class="bl dash"/><line x1="60" y1="80" x2="60" y2="110" class="bl dash"/><line x1="180" y1="80" x2="180" y2="110" class="bl dash"/><line x1="300" y1="80" x2="300" y2="110" class="bl dash"/><line x1="420" y1="80" x2="420" y2="110" class="bl dash"/>' +
    '<text x="240" y="62" text-anchor="middle" class="bl">정보 공유 (양방향)</text>' +
    '<text x="240" y="200" text-anchor="middle" class="r">JIT 적시 조달</text>' +
    '<text x="240" y="232" text-anchor="middle" class="s2">재고·대기 최소화</text>' +
    '<text x="52" y="185" class="n">①</text><text x="150" y="62" class="n">②</text><text x="165" y="200" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구성·특징', k: ['정보·물류 통합흐름', '[[JIT]] 적시 조달', '협력사 파트너링'] },
    { h: '도입 시 문제점', k: ['정보공유 기피·불신', '현장 야적·양중 제약', '설계변경 공급차질'] },
    { h: '개선방안', k: ['RFID·BIM 실시간 추적', '표준화·모듈화 확대'] }
  ],
  code: '💡 공공물현 정물 JIT → 공급자·공장·물류·현장',
  read: '①공급자→공장→물류→현장 자재 흐름 → ②정보 양방향 공유 → ③JIT 조달로 재고·대기 최소'
},
213: {
  one: '[[LCC]] 관점에서 건축물의 환경영향을 [[7개 분야]]로 평가해 [[환경성능]]을 {{4등급}}으로 인증하는 제도',
  flow: ['인증 신청', '심사단 평가', '심의위원회', '예비인증', '본인증'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M160,80 L240,30 L320,80 z" class="bx2"/>' +
    '<rect x="170" y="80" width="140" height="140" class="bx"/><text x="240" y="160" text-anchor="middle" class="t">녹색건축물</text>' +
    '<line x1="120" y1="220" x2="360" y2="220" class="ln"/>' +
    '<text x="20" y="120" class="r">7개 분야 평가</text><text x="20" y="144" class="s2">토지·에너지·재료 등</text>' +
    '<text x="330" y="120" class="r">최우수~일반 4등급</text><text x="330" y="144" class="s2">공공 3,000㎡↑ 의무</text>' +
    '<text x="240" y="260" text-anchor="middle" class="bl">예비인증(설계) → 본인증(5년)</text>' +
    '<text x="20" y="98" class="n">①</text><text x="335" y="98" class="n">②</text><text x="115" y="260" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '평가분야·등급', k: ['[[7개 분야]] 평가', '최우수~일반 [[4등급]]', '공공 {{3,000㎡}}↑ 의무'] },
    { h: '인증 절차·유의사항', k: ['예비인증 → 본인증', '본인증 유효 {{5년}}', '설계변경 시 재검토'] },
    { h: '활성화 방안', k: ['인센티브(기준완화)', 'ZEB·LCA 연계 강화'] }
  ],
  code: '💡 토에재물 유생실 → 7개 분야 · 예비→본(5년)',
  read: '①7개 분야 환경영향 평가 → ②최우수~일반 4등급 부여 → ③예비인증(설계) 후 본인증'
},
214: {
  one: '[[패시브]]로 부하를 줄이고 [[액티브]]·신재생으로 생산해 [[에너지자립률]] {{20% 이상}}을 1~5등급 인증받는 건축물',
  flow: ['고단열·기밀', '고효율 설비', '태양광·지열', 'BEMS 설치', '등급 인증'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="152" y="82" width="176" height="146" fill="none" class="rd dash"/>' +
    '<rect x="160" y="90" width="160" height="130" class="bx"/><text x="240" y="160" text-anchor="middle" class="t">BEMS</text>' +
    '<path d="M175,82 l50,-30 l20,0 l-50,30 z" class="bx2"/><path d="M245,82 l50,-30 l20,0 l-50,30 z" class="bx2"/>' +
    '<line x1="120" y1="228" x2="360" y2="228" class="ln"/>' +
    '<line x1="105" y1="120" x2="150" y2="135" class="ld"/><text x="20" y="110" class="b">Passive</text><text x="20" y="134" class="s2">고단열·고기밀</text>' +
    '<line x1="318" y1="66" x2="345" y2="60" class="ld"/><text x="350" y="60" class="b">Active</text><text x="350" y="84" class="s2">태양광·지열</text>' +
    '<text x="240" y="252" text-anchor="middle" class="r">에너지자립률 20%↑</text>' +
    '<text x="240" y="273" text-anchor="middle" class="s2">1~5등급 인증</text>' +
    '<text x="2" y="110" class="n">①</text><text x="350" y="40" class="n">②</text><text x="150" y="252" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '인증등급·의무대상', k: ['자립률 {{20%}}↑ 1~5등급', '공공 {{1,000㎡}}↑ {{4등급}}', '민간 {{1,000㎡}}↑ {{5등급}}'] },
    { h: '인증요건·유의사항', k: ['BEMS·원격검침 설치', '기밀·열교 시공관리', '효율등급 ZEB 통합'] },
    { h: '활성화 방안', k: ['BIPV·지열 확대', '인센티브·세제 지원'] }
  ],
  code: '💡 패액자 BEMS → 공공1천 4등급 · 민간1천 5등급',
  read: '①Passive 고단열·기밀로 부하 절감 → ②Active 태양광·지열로 생산 → ③자립률 20%↑ 등급 인증'
},
215: {
  one: '[[500세대 이상]] 공동주택의 [[5개 분야]] 성능을 인증받아 등급을 [[입주자 모집공고]]에 표시하는 의무제도',
  flow: ['인증 신청', '5개 분야 평가', '1~4등급 부여', '모집공고 표시', '시공 중 검증'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="120" height="190" class="bx"/>' +
    '<line x1="40" y1="90" x2="160" y2="90" class="ln2"/><line x1="40" y1="190" x2="160" y2="190" class="ln2"/>' +
    '<text x="100" y="135" text-anchor="middle" class="t">500세대↑</text><text x="100" y="165" text-anchor="middle" class="s2">공동주택</text>' +
    '<line x1="165" y1="125" x2="226" y2="125" class="ar"/>' +
    '<rect x="230" y="50" width="220" height="150" class="bx2"/>' +
    '<text x="340" y="80" text-anchor="middle" class="b">입주자 모집공고</text>' +
    '<text x="340" y="120" text-anchor="middle" class="r">★★★ 1~4등급</text>' +
    '<text x="340" y="155" text-anchor="middle" class="s2">소음·구조·환경</text>' +
    '<text x="340" y="178" text-anchor="middle" class="s2">생활환경·화재소방</text>' +
    '<text x="340" y="230" text-anchor="middle" class="bl">5개 분야 성능 평가</text>' +
    '<text x="44" y="76" class="n">①</text><text x="252" y="230" class="n">②</text><text x="240" y="112" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '평가분야', k: ['소음·구조·환경', '생활환경·화재소방', '1~4등급(★ 표기)'] },
    { h: '인증 절차·유의사항', k: ['사업주체 → 인증기관', '모집공고 시 등급 표시', '시공 중 성능 검증'] },
    { h: '개선방안', k: ['실측 성능검증 강화', '장수명주택 인증 연계'] }
  ],
  code: '💡 소구환생화 → 500세대↑ · 모집공고에 ★등급',
  read: '①500세대↑ 공동주택 → ②5개 분야 성능 평가 → ③모집공고에 1~4등급(★) 표시'
},
216: {
  one: '건축물 [[전 생애주기]]의 [[에너지·CO2]] 환경영향을 [[목록분석·영향평가·결과해석]]으로 정량 평가(ISO 14040)',
  flow: ['목적·범위', '목록분석 LCI', '영향평가', '결과해석', '저감 Feedback'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="30" y1="200" x2="450" y2="200" class="ln"/><line x1="30" y1="200" x2="30" y2="40" class="ln"/>' +
    '<rect x="45" y="160" width="40" height="40" class="bx2"/><rect x="115" y="130" width="40" height="70" class="bx2"/>' +
    '<rect x="185" y="180" width="40" height="20" class="bx2"/><rect x="255" y="170" width="40" height="30" class="bx2"/>' +
    '<rect x="325" y="70" width="40" height="130" class="bx3"/><rect x="395" y="175" width="40" height="25" class="bx2"/>' +
    '<text x="65" y="222" text-anchor="middle" class="s2">원료</text><text x="135" y="222" text-anchor="middle" class="s2">생산</text>' +
    '<text x="205" y="222" text-anchor="middle" class="s2">운송</text><text x="275" y="222" text-anchor="middle" class="s2">시공</text>' +
    '<text x="345" y="222" text-anchor="middle" class="s2">운영</text><text x="415" y="222" text-anchor="middle" class="s2">해체</text>' +
    '<text x="345" y="56" text-anchor="middle" class="r">운영단계 비중 최대</text>' +
    '<text x="240" y="258" text-anchor="middle" class="b">CO2 = 투입량 × 배출계수</text>' +
    '<text x="36" y="222" class="n">①</text><text x="258" y="56" class="n">②</text>' +
    '</svg>',
  heads: [
    { h: '평가절차(ISO 14040)', k: ['목적·범위 설정', '목록분석([[LCI]])', '영향평가·결과해석'] },
    { h: '적용 시 유의사항', k: ['배출계수 DB 신뢰성', '평가경계 명확화', '운영단계 비중 최대'] },
    { h: 'CO2 저감방안', k: ['저탄소 시멘트·EPD', 'OSC·ZEB·순환골재'] }
  ],
  code: '💡 목목영해 → 목적·목록·영향·해석 (요람→무덤)',
  read: '①원료~해체 전 생애 단계별 CO2 산정 → ②운영단계 비중이 가장 큼 (투입량×배출계수)'
},
217: {
  one: '[[태양광 모듈]]을 지붕·벽·창호 등 [[건축 외장재]]로 써서 외피 기능과 [[전기 생산]]을 동시에 하는 시스템',
  flow: ['일사·음영 분석', '유형·모듈 선정', '구조·방수 설계', '일체 시공', '인버터 연계'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M50,90 L140,40 L230,90 z" class="bx"/><line x1="148" y1="46" x2="222" y2="86" class="rd"/>' +
    '<rect x="60" y="90" width="160" height="150" class="bx"/>' +
    '<rect x="200" y="110" width="20" height="110" class="bx2"/>' +
    '<rect x="90" y="130" width="50" height="50" class="bx3"/>' +
    '<line x1="190" y1="62" x2="232" y2="52" class="ld"/><text x="236" y="56" class="b">지붕형</text>' +
    '<text x="235" y="150" class="b">벽면형</text><text x="115" y="210" text-anchor="middle" class="b">창호형</text>' +
    '<line x1="222" y1="200" x2="328" y2="200" class="ar"/>' +
    '<rect x="330" y="170" width="120" height="60" class="bx"/><text x="390" y="196" text-anchor="middle">인버터</text><text x="390" y="218" text-anchor="middle" class="s2">DC → AC</text>' +
    '<text x="390" y="252" text-anchor="middle" class="s2">계통연계·자가소비</text>' +
    '<text x="240" y="272" text-anchor="middle" class="r">외장재 + 전기생산 동시</text>' +
    '<text x="20" y="130" class="n">①</text><text x="336" y="162" class="n">②</text><text x="138" y="272" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '설치유형·특징', k: ['지붕·벽면·창호·차양', '외장재 대체·경제성', '생산전력 즉시 사용'] },
    { h: '설계·시공 유의사항', k: ['남향·경사각 최적', '온도상승 → 효율저하', '음영·방수·하중 검토'] },
    { h: '개선방안', k: ['컬러·투광형 모듈', 'ZEB 인증 연계'] }
  ],
  code: '💡 지벽창차 → 지붕·벽면·창호·차양 + 인버터',
  read: '①지붕·벽면·창호에 모듈 일체 시공 → ②인버터로 DC→AC 변환 → ③외장재+전기생산 동시'
},
218: {
  one: '콘크리트 부재 표면에 [[인장강도 7~10배]]인 [[탄소섬유 Sheet]]를 [[에폭시]]로 붙여 휨·전단·구속 내력 향상',
  flow: ['바탕처리', '프라이머·퍼티', '함침·부착', '탈포·양생', '보호코팅'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="100" y1="25" x2="100" y2="55" class="ar"/><line x1="165" y1="25" x2="165" y2="55" class="ar"/><line x1="230" y1="25" x2="230" y2="55" class="ar"/>' +
    '<rect x="30" y="60" width="270" height="70" class="conc"/><text x="165" y="102" text-anchor="middle" class="t">RC 보 (휨 보강)</text>' +
    '<line x1="30" y1="136" x2="300" y2="136" class="rd"/>' +
    '<text x="165" y="168" text-anchor="middle" class="r">탄소섬유 Sheet</text>' +
    '<text x="165" y="190" text-anchor="middle" class="s2">에폭시 접착·함침</text>' +
    '<rect x="364" y="64" width="82" height="82" fill="none" class="rd"/><rect x="370" y="70" width="70" height="70" class="conc"/>' +
    '<text x="405" y="168" text-anchor="middle">기둥 횡구속</text><text x="405" y="190" text-anchor="middle" class="s2">압축 ↑</text>' +
    '<text x="240" y="250" text-anchor="middle" class="b">인장강도 강재의 7~10배</text>' +
    '<text x="40" y="48" class="n">①</text><text x="60" y="168" class="n">②</text><text x="345" y="60" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '보강부재별 역할', k: ['보·Slab: 휨·전단', '기둥: 횡구속 → 압축↑', '경량·고정하중 무증가'] },
    { h: '시공 시 유의사항', k: ['표면처리·모서리 면취', '함침·탈포(들뜸 방지)', '겹침이음 {{200mm}}↑'] },
    { h: '파괴 방지대책', k: ['정착길이·U-Wrap', '내화·자외선 코팅'] }
  ],
  code: '💡 표프퍼 함시함 코 → 표면·프라이머·퍼티·함침·Sheet·함침·코팅',
  read: '①하중으로 보 하부에 인장 발생 → ②하부에 탄소섬유 Sheet 에폭시 부착 → ③기둥은 감싸 횡구속'
},
219: {
  one: '[[건축물관리법]]상 해체 전 사전조사로 [[해체공법·작업순서·구조안전·안전관리]] 대책을 세워 허가(신고) 시 내는 계획서',
  flow: ['사전조사·계획', '허가·감리지정', '설비·석면 제거', '상부→하부 해체', '완료신고'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="142" y="32" width="156" height="208" fill="none" class="ln2 dash"/>' +
    '<rect x="150" y="40" width="140" height="200" class="bx"/><rect x="150" y="40" width="140" height="50" class="bx3"/>' +
    '<line x1="150" y1="140" x2="290" y2="140" class="ln"/><line x1="150" y1="190" x2="290" y2="190" class="ln"/>' +
    '<line x1="180" y1="90" x2="180" y2="140" class="ln2"/><line x1="220" y1="90" x2="220" y2="140" class="ln2"/><line x1="260" y1="90" x2="260" y2="140" class="ln2"/>' +
    '<line x1="125" y1="50" x2="125" y2="230" class="ar"/>' +
    '<text x="12" y="140" class="r">상부 → 하부</text><text x="12" y="164" class="s2">Slab→보→기둥</text>' +
    '<line x1="266" y1="115" x2="306" y2="115" class="ld"/><text x="310" y="120">잭서포트</text>' +
    '<line x1="298" y1="45" x2="306" y2="45" class="ld"/><text x="310" y="50">방진막</text>' +
    '<text x="310" y="200" class="bl">감리자 상주·점검</text>' +
    '<text x="240" y="268" text-anchor="middle" class="b">해체계획서 → 허가(신고)</text>' +
    '<text x="360" y="50" class="n">①</text><text x="100" y="48" class="n">②</text><text x="310" y="180" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '계획서 작성항목', k: ['공사개요·사전조사', '작업순서·구조안전', '안전·환경관리 계획'] },
    { h: '해체 시 유의사항', k: ['상부 → 하부 순서', '잭서포트·과하중 금지', '감리자 상주·점검'] },
    { h: '개선방안', k: ['저소음 압쇄·와이어쏘', 'CCTV·계측 모니터링'] }
  ],
  code: '💡 개사작안환 → 개요·사전조사·작업순서·안전·환경',
  read: '①방진막·잭서포트 설치 → ②상부→하부(Slab→보→기둥) 순서 해체 → ③감리자 상주 점검'
},
220: {
  one: '1급 발암물질 석면 비산을 막기 위해 해체 전 [[석면조사]], 제거 시 [[음압·습식·밀봉 폐기]]를 지키는 제도',
  flow: ['석면조사', '계획서·신고', '밀폐·음압', '습식 제거', '밀봉·측정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="40" width="280" height="170" class="bx"/>' +
    '<text x="170" y="110" text-anchor="middle" class="t">작업장 (비닐 밀폐)</text>' +
    '<text x="170" y="150" text-anchor="middle" class="bl">습식 제거</text>' +
    '<rect x="330" y="60" width="80" height="50" class="bx2"/><text x="370" y="90" text-anchor="middle">음압기</text>' +
    '<line x1="310" y1="85" x2="328" y2="85" class="ln"/><line x1="410" y1="85" x2="460" y2="85" class="ar"/>' +
    '<text x="330" y="140" class="r">-0.508mmH2O 유지</text>' +
    '<text x="330" y="180" class="s2">폐기물 2중 밀봉</text>' +
    '<rect x="40" y="212" width="50" height="34" class="bx2"/><rect x="90" y="212" width="50" height="34" class="bx2"/><rect x="140" y="212" width="50" height="34" class="bx2"/>' +
    '<text x="200" y="236" class="s2">위생설비 3단계 통과</text>' +
    '<text x="40" y="66" class="n">①</text><text x="418" y="74" class="n">②</text><text x="18" y="240" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '석면조사 대상', k: ['건축물 {{50㎡}}↑', '주택 {{200㎡}}↑', '보온재 {{15㎡}}·배관 {{80m}}↑'] },
    { h: '해체·제거 준수사항', k: ['음압 {{-0.508mmH2O}}', '습식·비닐 밀폐보양', '위생설비 3단계'] },
    { h: '사후관리 대책', k: ['폐기물 2중 밀봉·표시', '공기 중 {{0.01개/cc}}↓'] }
  ],
  code: '💡 조신음습밀측 → 조사·신고·음압·습식·밀봉·측정',
  read: '①작업장 비닐 밀폐·습식 제거 → ②음압기로 -0.508mmH2O 유지 → ③위생설비 3단계로 출입'
},
221: {
  one: '[[주계약자]]가 전체 [[계획·관리·조정]]을, [[부계약자]]가 분담공사를 직접 시공하며 각자 발주자와 직접 계약',
  flow: ['수급체 구성', '분담 확정', '직접 계약', '주계약 관리', '부계약 시공'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="180" y="20" width="120" height="44" class="bx2"/><text x="240" y="48" text-anchor="middle" class="t">발주자</text>' +
    '<rect x="40" y="160" width="140" height="44" class="bx"/><text x="110" y="188" text-anchor="middle">주계약자 (종합)</text>' +
    '<rect x="300" y="160" width="140" height="44" class="bx"/><text x="370" y="188" text-anchor="middle">부계약자 (전문)</text>' +
    '<line x1="210" y1="64" x2="110" y2="160" class="ln"/><line x1="270" y1="64" x2="370" y2="160" class="ln"/>' +
    '<text x="240" y="110" text-anchor="middle" class="s2">직접 계약</text>' +
    '<line x1="180" y1="186" x2="298" y2="186" class="ar"/><text x="240" y="174" text-anchor="middle" class="bl">관리·조정</text>' +
    '<text x="110" y="230" text-anchor="middle" class="r">전체 연대책임</text>' +
    '<text x="370" y="230" text-anchor="middle" class="s2">분담공사 직접시공</text>' +
    '<text x="308" y="40" class="n">①</text><text x="184" y="154" class="n">②</text><text x="296" y="232" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '구성·이행 책임', k: ['주: 계획·관리·조정', '부: 분담공사 시공', '주계약자 연대책임'] },
    { h: '문제점', k: ['주계약자 관리부담', '책임소재 분쟁', '조정권한 약화'] },
    { h: '도입효과·개선', k: ['불공정 하도급 근절', '적정공사비·품질 확보'] }
  ],
  code: '💡 주계관조 부분시 → 주는 관리·조정, 부는 분담시공',
  read: '①발주자와 주·부계약자가 각각 직접 계약 → ②주계약자가 관리·조정 → ③부계약자는 분담공사 시공'
},
222: {
  one: '설계 확정 전 [[선행공사]]를 분리 발주해 [[설계·시공 병행]]으로 [[공기를 단축]]하는 조기착공 방식',
  flow: ['기본설계', '선행공종 발주', '조기 착공', '후속공종 반복', '조기 준공'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="78" class="b">전통방식</text>' +
    '<rect x="130" y="60" width="150" height="26" class="bx2"/><text x="205" y="78" text-anchor="middle" class="s2">설계</text>' +
    '<rect x="280" y="60" width="170" height="26" class="bx"/><text x="400" y="78" text-anchor="middle" class="s2">시공</text>' +
    '<text x="20" y="158" class="b">Fast Track</text>' +
    '<rect x="130" y="130" width="150" height="18" class="bx2"/><rect x="180" y="152" width="170" height="18" class="bx"/>' +
    '<line x1="350" y1="50" x2="350" y2="205" class="ln2 dash"/><line x1="450" y1="50" x2="450" y2="205" class="ln2 dash"/>' +
    '<line x1="448" y1="200" x2="352" y2="200" class="ar"/>' +
    '<text x="410" y="225" text-anchor="middle" class="r">공기단축</text>' +
    '<text x="20" y="262" class="bl">설계·시공 병행 (Overlapping)</text>' +
    '<text x="2" y="78" class="n">①</text>' +
    '<text x="2" y="158" class="n">②</text>' +
    '<text x="360" y="225" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징·적용대상', k: ['설계·시공 병행', '공기단축·조기 가동', '대형·긴급 Project'] },
    { h: '유의사항', k: ['설계변경·클레임 증가', '공사범위·책임 명확화', '공종 간섭·재시공'] },
    { h: '개선방안', k: ['CM at Risk·GMP', 'BIM·IPD 협업'] }
  ],
  code: '💡 설시병 단분발 → 설계·시공 병행, 단계별 분리발주',
  read: '①전통방식은 설계 완료 후 시공 → ②Fast Track은 설계·시공을 겹쳐 진행 → ③그만큼 공기단축'
},
223: {
  one: '민간이 시설을 짓고 [[준공 시 소유권을 정부에 이전]], [[관리운영권]]으로 [[이용자 사용료]]를 받아 회수하는 수익형',
  flow: ['사업제안', '실시협약', 'SPC·PF', '건설 B', '이전 T·운영 O'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="100" width="145" height="40" class="bx2"/><text x="102" y="126" text-anchor="middle" class="b">B 건설</text>' +
    '<line x1="177" y1="120" x2="218" y2="120" class="ar"/><text x="200" y="70" text-anchor="middle" class="r">T 소유권 → 정부</text>' +
    '<rect x="220" y="100" width="230" height="40" class="bx"/><text x="335" y="126" text-anchor="middle" class="b">O 관리운영권 (민간)</text>' +
    '<line x1="335" y1="190" x2="335" y2="145" class="ar"/>' +
    '<text x="335" y="210" text-anchor="middle" class="r">이용자 사용료 → 투자비 회수</text>' +
    '<text x="335" y="236" text-anchor="middle" class="s2">수요위험: 민간 부담</text>' +
    '<text x="105" y="210" text-anchor="middle" class="s2">도로·철도·항만</text>' +
    '<text x="10" y="126" class="n">①</text><text x="124" y="70" class="n">②</text><text x="345" y="176" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징·대상', k: ['수익형: 사용료 회수', '도로·철도·항만', '수요위험 민간 부담'] },
    { h: '문제점', k: ['수요예측 과다 → MRG', '이용자 사용료 부담', '재정지원 분쟁'] },
    { h: '개선방안', k: ['BTO-rs·BTO-a 분담', '수요예측 검증 강화'] }
  ],
  code: '💡 B-T-O 짓넘운 → 이용자 사용료로 회수 (수익형)',
  read: '①민간이 건설 → ②준공 시 소유권 정부 이전 → ③민간이 운영하며 이용자 사용료로 회수'
},
224: {
  one: '민간이 학교·군숙소 등을 짓고 [[소유권을 정부에 이전]], 정부가 [[임차]]해 [[임대료+운영비]]를 지급하는 임대형',
  flow: ['한도액 의결', '사업자 선정', '실시협약', '건설 B', '이전 T·임대 L'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="100" width="145" height="40" class="bx2"/><text x="102" y="126" text-anchor="middle" class="b">B 건설</text>' +
    '<line x1="177" y1="120" x2="218" y2="120" class="ar"/><text x="200" y="70" text-anchor="middle" class="r">T 소유권 → 정부</text>' +
    '<rect x="220" y="100" width="230" height="40" class="bx"/><text x="335" y="126" text-anchor="middle" class="b">L 정부 임차 (임대)</text>' +
    '<line x1="335" y1="190" x2="335" y2="145" class="ar"/>' +
    '<text x="335" y="210" text-anchor="middle" class="r">정부 → 민간: 임대료+운영비</text>' +
    '<text x="335" y="236" text-anchor="middle" class="s2">수요위험: 정부 부담</text>' +
    '<text x="105" y="210" text-anchor="middle" class="s2">학교·군숙소·하수관거</text>' +
    '<text x="10" y="126" class="n">①</text><text x="124" y="70" class="n">②</text><text x="345" y="176" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징·대상', k: ['임대형: 정부 임대료', '학교·군숙소·하수관거', '수요위험 정부 부담'] },
    { h: '문제점', k: ['정부 재정부담 이연', '운영성과 평가 미흡', '사업자 경쟁 저조'] },
    { h: '개선방안', k: ['성과연동 임대료', '혼합형(BTO+BTL)'] }
  ],
  code: '💡 B-T-L 짓넘빌 → 정부가 임대료+운영비 지급 (임대형)',
  read: '①민간이 건설 → ②준공 시 소유권 정부 이전 → ③정부가 임차해 임대료+운영비 지급'
},
225: {
  one: '[[초기 단계]]부터 발주자·설계자·시공자가 [[통합팀]]으로 [[Risk·성과를 공유]]하고 BIM으로 협업하는 발주방식',
  flow: ['통합팀 계약', '목표비용 설정', 'BIM 초기설계', '시공성 반영', '이익 공유'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="230" x2="460" y2="230" class="ln"/><line x1="50" y1="230" x2="50" y2="30" class="ln"/>' +
    '<path d="M50,215 C200,200 330,90 460,50" class="rd"/>' +
    '<path d="M55,228 C110,80 170,80 260,226" class="bl"/>' +
    '<path d="M150,228 C260,80 330,80 420,226" class="ln2 dash"/>' +
    '<text x="380" y="40" class="r">변경 비용</text>' +
    '<text x="60" y="62" class="bl">IPD 초기 집중</text>' +
    '<text x="300" y="98" text-anchor="middle" class="s2">전통방식</text>' +
    '<text x="455" y="255" text-anchor="end" class="s2">시간(설계→시공) →</text>' +
    '<text x="50" y="275" class="b">통합팀·Risk 공유·BIM</text>' +
    '<text x="360" y="40" class="n">①</text><text x="254" y="98" class="n">②</text><text x="60" y="40" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '특징', k: ['다자간 단일계약', 'Risk·이익 공유', '초기 설계 집중'] },
    { h: '문제점', k: ['참여자 전문성 확보', '책임소재 불명확', '설계 자율성 제약'] },
    { h: '개선방안', k: ['BIM·Big Room 협업', '표준계약서·법제 정비'] }
  ],
  code: '💡 초통리공 → 초기·통합팀·Risk·공유 (MacLeamy)',
  read: '①변경 비용은 뒤로 갈수록 증가 → ②전통방식은 늦게 노력 집중 → ③IPD는 초기 집중으로 비용 절감'
},
226: {
  one: '계약 후 [[90일 경과]] + 품목·지수 조정률 [[3% 이상]] 증감 시 계약금액 조정, 특정자재는 {{15%}} [[단품조정]]',
  flow: ['요건 확인', '조정기준일', '조정률 산정', '적용대가 산정', '금액 조정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="220" x2="460" y2="220" class="ln"/><line x1="50" y1="220" x2="50" y2="30" class="ln"/>' +
    '<line x1="50" y1="110" x2="460" y2="110" class="rd dash"/><line x1="200" y1="30" x2="200" y2="220" class="ln2 dash"/>' +
    '<path d="M50,200 C150,190 250,130 440,60" class="bl"/>' +
    '<text x="60" y="100" class="r">+3% 이상</text>' +
    '<text x="50" y="240" text-anchor="middle" class="s2">계약체결일</text>' +
    '<text x="200" y="240" text-anchor="middle" class="s2">90일 경과</text>' +
    '<text x="260" y="60" class="b">→ 계약금액 조정</text>' +
    '<text x="240" y="268" text-anchor="middle" class="s2">품목·지수조정률 / 단품 15%↑</text>' +
    '<text x="20" y="215" class="n">①</text><text x="206" y="215" class="n">②</text><text x="128" y="100" class="n">③</text>' +
    '</svg>',
  heads: [
    { h: '조정요건·방법', k: ['[[90일 경과]] + [[3% 이상]]', '품목·지수조정률', '단품 {{15%}} 이상'] },
    { h: '적용 시 유의사항', k: ['재조정은 90일 후', '선금 공제·기성분 제외', '계약자 귀책 지연 제외'] },
    { h: '개선방안', k: ['급등 시 90일 내 조정', '민간공사 ES 특약'] }
  ],
  code: '💡 구공삼 품지 단15 → 90일·3%·품목/지수·단품15%',
  read: '①계약체결일부터 → ②90일 경과하고 → ③등락률 3% 이상이면 계약금액 조정'
}
});
