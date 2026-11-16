// 문항 148~158 (구조·내진 / 강구조) — 합격자 답안 기반 + KCS·표준시방서 기준 보강
window.Q = (window.Q || []).concat([
{
  no: 148, cat: '구조·내진', type: '용어',
  title: '내진·면진·제진',
  key: ['내진', '면진', '제진', '강성·인성', '적층고무(LRB)', '장주기화', 'TMD', '댐퍼', '이격거리'],
  www: {
    what: '지진력에 [[강성·인성]]으로 저항하는 [[내진]], 지반과 건물을 분리하는 [[면진]], 장치로 진동에너지를 흡수하는 [[제진]] 구조',
    why: '지진 시 구조물 붕괴·취성파괴 방지, 인명·재산 보호 및 건물 기능 유지',
    how: '부재 보강(브레이스·연성상세) / 기초부 [[적층고무(LRB)]] 설치로 [[장주기화]] / [[TMD]]·[[댐퍼]] 설치로 감쇠 증가'
  },
  secs: [
    { h: '정의', def: '[[내진]]은 구조물 자체의 [[강성·인성]]을 높여 지진하중에 저항하는 구조, [[면진]]은 건축물과 지반 사이에 면진장치([[적층고무(LRB)]])를 설치하여 지반 진동이 구조물에 직접 전달되는 것을 차단(절연)하는 구조, [[제진]]은 구조물 내부에 [[댐퍼]]·[[TMD]](동조질량) 등을 설치하여 지진에너지를 흡수·제어하는 구조이다. 2층 이상 또는 연면적 {{200㎡ 이상}} 건축물은 내진설계 대상이다.' },
    { h: '내진·면진·제진 구조 원리(도해)',
      fig: [
        { svg: '<svg viewBox="0 0 560 250"><rect x="10" y="200" width="540" height="20" class="soil"/><rect x="30" y="70" width="100" height="110" class="bx"/><line x1="30" y1="107" x2="130" y2="107" class="ln2"/><line x1="30" y1="144" x2="130" y2="144" class="ln2"/><line x1="30" y1="70" x2="30" y2="180" class="rd"/><line x1="130" y1="70" x2="130" y2="180" class="rd"/><line x1="50" y1="144" x2="110" y2="180" class="ln"/><line x1="110" y1="144" x2="50" y2="180" class="ln"/><rect x="25" y="180" width="110" height="20" class="conc"/><line x1="45" y1="210" x2="115" y2="210" class="ar" style="marker-start:url(#arr)"/><line x1="100" y1="170" x2="150" y2="150" class="ld"/><circle cx="150" cy="150" r="2" class="dotf"/><text x="140" y="145" class="s">브레이스</text><line x1="130" y1="90" x2="150" y2="80" class="ld"/><circle cx="150" cy="80" r="2" class="dotf"/><text x="140" y="75" class="s">부재 강성↑</text><rect x="215" y="60" width="100" height="105" class="bx"/><line x1="215" y1="95" x2="315" y2="95" class="ln2"/><line x1="215" y1="130" x2="315" y2="130" class="ln2"/><rect x="228" y="165" width="20" height="15" class="bx2"/><line x1="228" y1="170" x2="248" y2="170" class="ln2"/><line x1="228" y1="175" x2="248" y2="175" class="ln2"/><rect x="282" y="165" width="20" height="15" class="bx2"/><line x1="282" y1="170" x2="302" y2="170" class="ln2"/><line x1="282" y1="175" x2="302" y2="175" class="ln2"/><rect x="210" y="180" width="110" height="20" class="conc"/><line x1="230" y1="210" x2="300" y2="210" class="ar" style="marker-start:url(#arr)"/><line x1="302" y1="172" x2="345" y2="150" class="ld"/><circle cx="345" cy="150" r="2" class="dotf"/><text x="335" y="145" class="r">면진장치</text><line x1="318" y1="60" x2="318" y2="180" class="ln2 dash"/><line x1="318" y1="110" x2="345" y2="100" class="ld"/><circle cx="345" cy="100" r="2" class="dotf"/><text x="335" y="95" class="s">이격(E/J)</text><rect x="400" y="70" width="100" height="110" class="bx"/><line x1="400" y1="107" x2="500" y2="107" class="ln2"/><line x1="400" y1="144" x2="500" y2="144" class="ln2"/><rect x="430" y="78" width="40" height="22" class="bx3"/><circle cx="450" cy="89" r="7" class="bx2"/><line x1="410" y1="180" x2="490" y2="144" class="ln"/><rect x="443" y="157" width="14" height="10" class="bx2"/><rect x="395" y="180" width="110" height="20" class="conc"/><line x1="415" y1="210" x2="485" y2="210" class="ar" style="marker-start:url(#arr)"/><line x1="470" y1="89" x2="515" y2="60" class="ld"/><circle cx="515" cy="60" r="2" class="dotf"/><text x="505" y="55" class="r">TMD</text><line x1="457" y1="162" x2="515" y2="150" class="ld"/><circle cx="515" cy="150" r="2" class="dotf"/><text x="505" y="145" class="s">댐퍼</text><text x="80" y="238" text-anchor="middle" class="b">(a) 내진 — 저항</text><text x="265" y="238" text-anchor="middle" class="b">(b) 면진 — 차단</text><text x="450" y="238" text-anchor="middle" class="b">(c) 제진 — 흡수</text></svg>',
          cap: '[도해] 내진(강성·브레이스) / 면진(적층고무로 지반 분리) / 제진(TMD·댐퍼로 에너지 흡수)' },
        { svg: '<svg viewBox="0 0 560 220"><line x1="60" y1="190" x2="530" y2="190" class="ln"/><line x1="60" y1="190" x2="60" y2="25" class="ln"/><text x="66" y="12" class="s">응답가속도 Sa</text><text x="530" y="208" text-anchor="end" class="s">고유주기 T(sec)</text><path d="M60,150 L100,60 L220,60 Q300,130 520,170" class="bl"/><path d="M60,160 L100,95 L220,95 Q300,150 520,180" class="gr dash"/><circle cx="160" cy="60" r="5" class="rf"/><circle cx="419" cy="148" r="5" class="bf"/><line x1="170" y1="66" x2="408" y2="143" class="ar"/><text x="270" y="92" class="r">장주기화</text><line x1="160" y1="60" x2="150" y2="35" class="ld"/><circle cx="150" cy="35" r="2" class="dotf"/><text x="110" y="30" class="s">내진건물: 단주기 → 응답 큼</text><line x1="419" y1="148" x2="440" y2="110" class="ld"/><circle cx="440" cy="110" r="2" class="dotf"/><text x="420" y="104" class="bl">면진: 약 2~4s</text><line x1="335" y1="144" x2="300" y2="172" class="ld"/><circle cx="300" cy="172" r="2" class="dotf"/><text x="190" y="182" class="g">감쇠 부가(제진) → 추가 저감</text></svg>',
          cap: '[그래프] 가속도 응답스펙트럼 — 면진은 주기 이동(장주기화), 제진은 감쇠 증가로 응답 저감' }
      ] },
    { h: '내진·면진·제진 구조의 특징', tbl: { head: ['구분', '내진', '면진', '제진'], rows: [
      ['원리', '지진력에 [[강성·인성]]으로 저항', '지반과 구조물 분리 → [[장주기화]]', '지진E 흡수·감쇠 증가'],
      ['부재·장치', '브레이스, 전단벽, 탄소섬유 보강', '[[적층고무(LRB)]], 미끄럼받침, 탄소성 댐퍼', '[[TMD]], 오일·점탄성·강재 [[댐퍼]], AMD(능동)'],
      ['특징', '보강부재 증대, 경제적', '내진안정성·기능유지 최고, 고가', '보강부재 적음, 초고층·풍진동 유효'],
      ['적용', '일반 건축물', '병원·전산센터·문화재', '초고층·장스팬']] } },
    { h: '시공 및 설계 시 유의사항', ul: [
      '내진: **연성 상세** — 하중 집중부 전단보강(띠철근 135° 갈고리)으로 취성파괴 방지, 균형·연속적 배치·경량화',
      '면진: 인접 구조물과의 [[이격거리]](Clearance)·E/J 확보, 설비배관 플렉시블 조인트 설치',
      '면진장치 수평도·레벨 관리, 상·하부 앵커 정밀 시공, 내화피복 필요 여부 검토',
      '제진: [[댐퍼]] 성능시험 후 설치, 주기적 유지관리·점검구 설치, 교체 가능 상세',
      '공통: 장치 반입 시 성능시험성적서 확인, 시공 중 변위 구속재(가설고정) 해체 시기 관리' ] },
    { h: '개선방안', ul: [
      '내진·면진·제진 **복합(Hybrid) 시스템** 적용 → 성능기반 내진설계(PBD)',
      '기존 건축물 내진보강(제진댐퍼 Retrofit) 확대, 구조 모니터링(SHM) 센서 연계',
      '면진장치 국산화·KS 인증 확대 및 장기 크리프·노화 시험 의무화' ] }
  ],
  effect: '지진 시 구조물의 붕괴·취성파괴를 막아 인명을 보호하고, 면진·제진 적용 시 건물 손상과 내부 기능 정지를 최소화한다.',
  mnemo: '내·면·제 = 저·차·흡 (저항·차단·흡수) / 면진 = 적층고무 장주기, 제진 = TMD 댐퍼',
  img: [],
  src: '디테일용어300 No.130 · 한솔 시크릿 마법지 구조(지진) · 건축법 시행령 제32조 · KDS 41 17 00'
},
{
  no: 149, cat: '강구조', type: '용어',
  title: 'TMC강 (Thermo-Mechanical Control Process Steel)',
  key: ['제어압연', '가속냉각', '탄소당량', '용접균열감수성(Pcm)', '예열 저감', '후판', '결정립 미세화', '두께별 강도 일정'],
  www: {
    what: '압연 공정에서 [[제어압연]]과 [[가속냉각]]을 조합하여 강도를 확보한 열가공제어 강재',
    why: '합금원소를 줄여 [[탄소당량]]·[[용접균열감수성(Pcm)]]을 낮추고 [[후판]]의 용접성·인성 확보',
    how: '슬래브 재가열 → 저온역 [[제어압연]] → 수냉 [[가속냉각]] → [[결정립 미세화]](페라이트+베이나이트)'
  },
  secs: [
    { h: '정의', def: 'TMC강은 강재 압연 시 [[제어압연]]·[[가속냉각]](TMCP)으로 [[결정립 미세화]]를 통해 강도를 확보함으로써, 동일 강도의 일반강보다 [[탄소당량]]과 [[용접균열감수성(Pcm)]]을 낮춰 [[예열 저감]](생략) 등 용접성이 우수한 건축구조용 [[후판]] 강재이다. 판두께 {{40mm 초과}}에서도 항복강도가 저감되지 않는다([[두께별 강도 일정]]).' },
    { h: '제조 원리(TMCP) 및 도해',
      fig: [
        { svg: '<svg viewBox="0 0 560 230"><line x1="50" y1="200" x2="530" y2="200" class="ln"/><line x1="50" y1="200" x2="50" y2="20" class="ln"/><text x="56" y="18" class="s">온도(℃)</text><text x="530" y="215" text-anchor="end" class="s">시간</text><line x1="50" y1="110" x2="530" y2="110" class="ln2 dash"/><text x="55" y="106" class="s">Ar3(변태점)</text><line x1="50" y1="140" x2="530" y2="140" class="ln2 dash"/><text x="55" y="136" class="s">Ar1</text><polyline points="50,200 90,40 150,40 220,80" class="ln"/><text x="95" y="34" class="s">슬래브 재가열</text><text x="170" y="56" class="s">조압연</text><polyline points="220,80 300,105 330,108 380,170 530,185" class="rd"/><path d="M220,80 Q380,110 530,175" class="bl dash"/><line x1="270" y1="96" x2="240" y2="150" class="ld"/><circle cx="240" cy="150" r="2" class="dotf"/><text x="160" y="164" class="s">제어압연(미재결정역·저온)</text><line x1="355" y1="140" x2="330" y2="178" class="ld"/><circle cx="330" cy="178" r="2" class="dotf"/><text x="325" y="182" text-anchor="end" class="r">가속냉각(수냉)</text><line x1="485" y1="156" x2="490" y2="132" class="ld"/><circle cx="490" cy="132" r="2" class="dotf"/><text x="445" y="126" class="s">일반 압연재(공랭)</text><line x1="510" y1="183" x2="500" y2="62" class="ld"/><circle cx="500" cy="62" r="2" class="dotf"/><text x="335" y="58" class="g">결정립 미세화 → 고강도·고인성</text></svg>',
          cap: '[도해] TMCP — 저온 제어압연 + 가속냉각(적색) vs 일반 압연·공랭(청색 점선)' },
        { svg: '<svg viewBox="0 0 560 190"><line x1="60" y1="170" x2="520" y2="170" class="ln"/><line x1="60" y1="170" x2="60" y2="20" class="ln"/><text x="66" y="18" class="s">항복강도 Fy</text><text x="520" y="186" text-anchor="end" class="s">판두께 t(mm)</text><line x1="140" y1="170" x2="140" y2="175" class="ln2"/><text x="140" y="186" text-anchor="middle" class="s">16</text><line x1="260" y1="170" x2="260" y2="175" class="ln2"/><text x="260" y="186" text-anchor="middle" class="s">40</text><text x="54" y="54" text-anchor="end" class="s">355</text><line x1="60" y1="50" x2="520" y2="50" class="rd"/><polyline points="60,52 140,52 140,72 260,72 260,97 520,97" class="bl"/><line x1="420" y1="50" x2="440" y2="30" class="ld"/><circle cx="440" cy="30" r="2" class="dotf"/><text x="400" y="26" class="r">TMC강: 두께 무관 일정</text><line x1="420" y1="97" x2="440" y2="125" class="ld"/><circle cx="440" cy="125" r="2" class="dotf"/><text x="380" y="140" class="bl">일반강: 두께↑ → Fy 저하</text><line x1="260" y1="85" x2="200" y2="120" class="ld"/><circle cx="200" cy="120" r="2" class="dotf"/><text x="120" y="135" class="s">t 40mm 초과 시 저감</text></svg>',
          cap: '[그래프] 판두께에 따른 항복강도 — TMC강은 후판에서도 설계강도 유지' }
      ],
      flow: ['슬래브 재가열', '조압연(재결정역)', '제어압연(저온)', '가속냉각(수냉)', '미세조직 확보'] },
    { h: 'TMC강의 특징', tbl: { head: ['구분', 'TMC강', '일반 압연강'], rows: [
      ['강도 확보', '[[제어압연]]·[[가속냉각]] (조직 제어)', '합금원소·탄소 첨가'],
      ['탄소당량', '낮음 → [[용접균열감수성(Pcm)]] 낮음', '상대적으로 높음'],
      ['예열', '[[예열 저감]] 또는 생략 가능', '두께·Ceq에 따라 예열 필수'],
      ['후판 강도', '[[두께별 강도 일정]]', '{{40mm}} 초과 시 Fy 저감'],
      ['기타', '용접 열영향부(HAZ) 인성 우수, 단면 약 15% 절감(원문)', '—']] } },
    { h: '시공 시 유의사항', ul: [
      '재가열·열간가공 시 TMC 효과(미세조직) 소실 → **고온 가열·응력제거 열처리는 제조사 기준 준수**',
      '대입열 용접 시 HAZ 연화 우려 → 용접 입열량·패스간 온도 관리',
      'Mill Sheet로 강종(TMC 표기)·[[탄소당량]]·Pcm·충격치 확인',
      '선상가열 교정 시 가열온도 제한 준수' ] },
    { h: '개선방안', ul: [
      '초고층·장스팬 [[후판]] 기둥에 TMC·고성능강(HSA) 적용 확대 → 단면·용접량 절감',
      '예열 생략 기준(Pcm 기반) 표준화로 공기 단축',
      'KS 인증·Mill Sheet 전산 이력관리(QR) 연계' ] }
  ],
  effect: '용접성·인성이 우수하여 예열 공정을 줄이고, 후판에서도 강도가 유지되어 부재 단면·강재량을 절감한다.',
  mnemo: 'TMC = 제·가·미 (제어압연·가속냉각·미세조직) → 탄소당량↓ 예열↓ 두께 무관',
  img: [],
  src: '디테일용어300 No.141 · 한솔 시크릿 마법지 강구조(재료) · KS D 3861'
},
{
  no: 150, cat: '강구조', type: '용어',
  title: '탄소당량 (Ceq, Carbon Equivalent)',
  key: ['탄소당량(Ceq)', '탄소 환산', '용접성', '저온균열', '열영향부 경화', '예열', 'Ceq 0.44%', '강도·연성'],
  www: {
    what: '강재의 기계적 성질·[[용접성]]에 미치는 합금원소의 영향을 탄소량으로 [[탄소 환산]]한 지표',
    why: '[[저온균열]]·[[열영향부 경화]] 위험을 판단하여 [[예열]] 여부와 용접재료를 결정',
    how: 'Ceq = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15 로 산정 → {{0.44%}} 기준으로 예열·후열 결정'
  },
  secs: [
    { h: '정의', def: '[[탄소당량(Ceq)]]은 강재의 기계적 성질이나 [[용접성]]에 미치는 Mn·Cr·Mo·V·Ni·Cu 등 첨가원소의 영향을 탄소의 양으로 [[탄소 환산]]한 값으로, 용접 [[열영향부 경화]]성과 [[저온균열]] 감수성을 판단하여 [[예열]] 필요 여부를 결정하는 척도이다. 일반적으로 [[Ceq 0.44%]] 이하이면 용접성이 양호하다.' },
    { h: '탄소당량 산정식 및 기준', p: '**Ceq(%) = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15** (IIW식) — 건축구조용(SN)강은 Ceq = C + Mn/6 + Si/24 + Ni/40 + Cr/5 + Mo/4 + V/14 (KS·JIS식)',
      tbl: { head: ['관리기준', 'Ceq(%) 범위 → 판정'], rows: [
        ['용접성', '{{0.40 이하}} 우수 / 0.40~0.45 양호 / 0.46~0.52 보통 / {{0.52 초과}} 불량'],
        ['예열온도', '{{0.45 미만}} 임의온도 / 0.45~0.60 {{100~200℃}} / {{0.60 초과}} {{200~350℃}}'],
        ['예열 필요성(원문)', 'Ceq {{0.44%}} 이하 용접 적합 / 초과 시 예열·후열']] },
      ul2: ['원문 기준: Ceq ≤ {{0.44%}} 용접 적합 / Ceq > 0.44% 예열·후열 필요', 'SN355B(t≤40mm) Ceq {{0.44% 이하}} 규정'] },
    { h: '탄소량에 따른 강재 성질 변화(도해)',
      fig: { svg: '<svg viewBox="0 0 560 230"><line x1="60" y1="190" x2="360" y2="190" class="ln"/><line x1="60" y1="190" x2="60" y2="25" class="ln"/><text x="66" y="20" class="s">강도 / 연신율</text><text x="360" y="222" text-anchor="end" class="s">탄소량 C(%)</text><line x1="230" y1="190" x2="230" y2="40" class="ln2 dash"/><text x="230" y="205" text-anchor="middle" class="s">0.85</text><path d="M60,165 C150,90 190,45 230,45 C270,45 300,70 350,95" class="rd"/><path d="M60,50 C120,110 200,150 350,165" class="bl"/><line x1="230" y1="45" x2="260" y2="30" class="ld"/><circle cx="260" cy="30" r="2" class="dotf"/><text x="264" y="33" class="r">최대 인장강도</text><line x1="232" y1="145" x2="270" y2="160" class="ld"/><circle cx="270" cy="160" r="2" class="dotf"/><text x="274" y="164" class="bl">신장률(연성)</text><line x1="230" y1="175" x2="260" y2="180" class="ld"/><circle cx="260" cy="180" r="2" class="dotf"/><text x="264" y="184" class="s">공석점(0.85%C)</text><rect x="380" y="40" width="165" height="130" class="bx"/><text x="462" y="62" text-anchor="middle" class="b">탄소당량 증가 시</text><text x="392" y="88">강도·경도 : <tspan class="r">상승</tspan></text><text x="392" y="112">연성·인성 : 저하</text><text x="392" y="136">용접성 : 불량</text><text x="392" y="160" class="r">저온균열 민감도 ↑</text></svg>',
        cap: '[그래프] 탄소량 증가 → 강도 증가(0.85%C 최대), 신장률 감소 ∝ 1/C' } },
    { h: '탄소당량의 활용 및 관리 유의사항', ul: [
      '[[저온균열]](Cold Cracking) 감수성 판단 → [[예열]] 온도 결정',
      'Ceq 증가 시 [[강도·연성]] 변화(강도↑·연성↓) 예측, 저합금강·고장력강의 [[용접성]] 판정, 용접재료(저수소계 용접봉) 선정 기준',
      '구조용강 용접 [[열영향부 경화]]성 표현 척도(HAZ 최고경도 추정)',
      'Mill Sheet 화학성분으로 Ceq 재계산·검증, 이종강재 용접 시 상위 강종 기준 적용',
      '후판·고구속 이음은 Ceq와 함께 Pcm(용접균열감수성 조성) 병행 검토' ] },
    { h: '개선방안', ul: [
      'TMC강 등 저탄소당량 강재 사용 → 예열 생략·공기 단축',
      'Ceq·판두께·수소량 연계 예열온도 산정 프로그램 활용',
      '반입 강재 Ceq 전산관리(Mill Sheet 데이터베이스화)' ] }
  ],
  effect: '탄소당량으로 용접성과 저온균열 위험을 사전에 판단하여 적정 예열·용접재료를 선정, 용접 균열·취성파괴를 예방한다.',
  mnemo: '씨·망6·크몰바5·니구15 (C + Mn/6 + CrMoV/5 + NiCu/15) / 0.44 넘으면 예열',
  img: [],
  src: '디테일용어300 No.142 · 한솔 핵심마법지 강재표기&탄소당량(용접성 0.4/0.45/0.52, 예열 0.45/0.6 — 두 기준 분리 표기) · KS D 3861 / ※ 원문 그래프 0.85%는 탄소량(공석강) 기준이므로 축을 C%로 표기'
},
{
  no: 151, cat: '강구조', type: '용어',
  title: 'Mill Sheet Certificate (강재 규격증명서)',
  key: ['Mill Sheet', '제강번호(Heat No.)', '화학성분', '기계적 성질', '규격·강종', '원본 대조', '추적관리', '공인시험'],
  www: {
    what: '제강사가 발행하는 강재의 [[제강번호(Heat No.)]]·[[화학성분]]·[[기계적 성질]]을 기록한 [[Mill Sheet]](품질증명서)',
    why: '반입 강재가 설계 [[규격·강종]]과 일치하는지 확인하고 하자 발생 시 [[추적관리]]',
    how: '반입 시 [[원본 대조]] → Heat No.·강재 표시 일치 확인 → 성분·강도 규격 검토 → 주요 부재 [[공인시험]]'
  },
  secs: [
    { h: '정의', def: '[[Mill Sheet]]는 공장(제강사)에서 제작된 강재의 [[제강번호(Heat No.)]], 품명·[[규격·강종]], 치수·중량, [[화학성분]] 및 [[기계적 성질]] 등을 기록한 강재 규격증명서로, 반입 강재가 주문내용·설계도서와 일치하는지 [[원본 대조]]하여 확인하고 하자 시 [[추적관리]]의 근거로 활용한다.' },
    { h: 'Mill Sheet 주요 구성요소 및 확인 방법(도해)',
      fig: { svg: '<svg viewBox="0 0 560 230"><rect x="20" y="15" width="300" height="200" class="bx"/><text x="170" y="35" text-anchor="middle" class="b">MILL SHEET (강재 검사증명서)</text><line x1="20" y1="45" x2="320" y2="45" class="ln2"/><text x="30" y="63" class="s">품명 H-형강 / 규격 KS D 3503 SS275</text><line x1="20" y1="75" x2="320" y2="75" class="ln2"/><text x="30" y="93" class="s">수량(PCS)·중량(kg)·치수·길이</text><line x1="20" y1="105" x2="320" y2="105" class="ln2"/><text x="30" y="123" class="s">제강번호 Heat No. : 2A1234</text><line x1="20" y1="135" x2="320" y2="135" class="ln2"/><text x="30" y="153" class="s">화학성분 C·Si·Mn·P·S (Ceq)</text><line x1="20" y1="165" x2="320" y2="165" class="ln2"/><text x="30" y="183" class="s">기계적 성질 YS·TS·EL·YR·충격(V-notch)</text><line x1="20" y1="195" x2="320" y2="195" class="ln2"/><text x="30" y="209" class="s">제강사 검사원 서명·발행일</text><rect x="360" y="30" width="180" height="28" class="bx2"/><text x="370" y="49" class="s">SS275  Heat 2A1234</text><text x="360" y="22" class="s">반입 강재 표시(Stencil·Tag)</text><line x1="440" y1="60" x2="440" y2="88" class="ar"/><text x="446" y="80" class="s">대조</text><line x1="300" y1="120" x2="345" y2="100" class="ld"/><circle cx="345" cy="100" r="2" class="dotf"/><text x="350" y="104" class="r">Heat No. 일치 확인</text><line x1="300" y1="150" x2="345" y2="135" class="ld"/><circle cx="345" cy="135" r="2" class="dotf"/><text x="350" y="139" class="s">Ceq·P·S 상한 확인</text><line x1="300" y1="180" x2="345" y2="200" class="ld"/><circle cx="345" cy="200" r="2" class="dotf"/><text x="350" y="212" class="s">YS·TS·YR 규격값 만족</text></svg>',
        cap: '[도해] Mill Sheet 항목과 반입 강재 표시(Heat No.) 대조' },
      tbl: { head: ['구분', '항목'], rows: [
        ['일반사항', '품명(Commodity)·규격(Specification)·수량·중량·치수·길이'],
        ['[[제강번호(Heat No.)]]', '용해 단위 고유번호 → 강재 표시와 일치'],
        ['[[화학성분]]', 'C·Mn·Si·P·S·Ni·Cr·V → 탄소당량 산정'],
        ['[[기계적 성질]]', '항복강도(YS)·인장강도(TS)·연신율(EL)·항복비(YR)·굽힘·충격시험']] } },
    { h: 'Mill Sheet 용도 및 확인 Process', flow: ['강재 반입', '원본(원본대조필) 확인', 'Heat No.·표시 대조', '성분·강도 규격 검토', '외관·치수 검사', '공인시험(주요부재)', '승인·사용'],
      ul: [
        '철강제품 품질보증 및 정도관리 자료',
        '반입처에서 시험 여부·빈도 결정 근거',
        '성분·제원으로 사용처(용접부재 등) 결정, 하자 시 Lot [[추적관리]]' ] },
    { h: '현장 반입 및 사용 시 유의사항', ul: [
      '사본 제출 시 제강사·공급사 **원본대조필** 날인 확인, 위·변조 여부 검토',
      '주요 구조부재는 [[공인시험]]기관 시험 의뢰(인장·굽힘·성분) 후 사용',
      '[[제강번호(Heat No.)]]별 구분 적치, 가공 후에도 강재 표시 이기(移記)',
      '현장 여건(용접성·저온) 고려 화학성분(Ceq·P·S) 적합 여부 확인',
      '수입강재는 KS 동등 이상 여부·원산지 증명 병행 확인' ] },
    { h: '개선방안', ul: [
      '전자 Mill Sheet(e-Certificate)·QR 코드로 위·변조 방지',
      'Heat No. 기반 BIM 부재 이력관리 연계 → 전 생애 추적관리' ] }
  ],
  effect: '부적합·위조 강재 반입을 차단하여 구조 안전성을 확보하고, 하자 발생 시 원인 강재를 추적할 수 있다.',
  mnemo: '밀시트 = 히·화·기 (Heat No.·화학성분·기계적성질) + 원본대조',
  img: [],
  src: '디테일용어300 No.145 · 한솔 시크릿 마법지 강구조(반입검사: 외관·치수·Mill sheet) · KCS 14 31 10'
},
{
  no: 152, cat: '강구조', type: '용어',
  title: 'Metal Touch',
  key: ['Metal Touch', '기둥 이음', 'Facing Machine', '밀착', '축력 50% 전달', '직각도 1.5/1000', '응력집중', '고력볼트 보강'],
  www: {
    what: '[[기둥 이음]]부 단면을 [[Facing Machine]]으로 정밀 가공하여 상·하부 기둥을 완전 [[밀착]]시키는 이음 방법',
    why: '압축력·휨모멘트의 일부를 접촉면으로 직접 전달하여 이음재료 절감·용접변형 저감',
    how: '단면 정밀가공(직각도 {{1.5/1000}} 이하) → 밀착 → [[축력 50% 전달]], 나머지는 용접·[[고력볼트 보강]]'
  },
  secs: [
    { h: '정의', def: '[[Metal Touch]]는 철골 [[기둥 이음]]부를 [[Facing Machine]] 등으로 정밀 가공하여 상·하부 기둥을 수평으로 완전히 [[밀착]]시켜 축력과 휨모멘트의 {{50%}}까지 하부 기둥 밀착면에 직접 전달시키는 이음 방법으로, 이음재료를 절감하고 [[응력집중]]을 방지한다.' },
    { h: 'Metal Touch 가공기준 및 축력전달 Mechanism(도해)',
      fig: { svg: '<svg viewBox="0 0 560 240"><line x1="100" y1="8" x2="100" y2="222" class="ln2 dash"/><polygon points="60,20 140,20 140,108 60,118" class="bx"/><polygon points="60,118 140,108 140,210 60,210" class="bx"/><rect x="48" y="95" width="12" height="40" class="bx3"/><rect x="140" y="88" width="12" height="40" class="bx3"/><circle cx="54" cy="104" r="2" class="dotf"/><circle cx="54" cy="126" r="2" class="dotf"/><circle cx="146" cy="97" r="2" class="dotf"/><circle cx="146" cy="119" r="2" class="dotf"/><line x1="30" y1="20" x2="30" y2="100" class="ar"/><text x="14" y="15" class="s">축력 N</text><line x1="152" y1="108" x2="172" y2="108" class="ln2"/><line x1="152" y1="118" x2="172" y2="118" class="ln2"/><text x="175" y="118" class="s">e</text><line x1="60" y1="222" x2="140" y2="222" class="ar" style="marker-start:url(#arr)"/><text x="100" y="236" text-anchor="middle" class="s">w</text><line x1="100" y1="60" x2="190" y2="40" class="ld"/><circle cx="190" cy="40" r="2" class="dotf"/><text x="195" y="44">상부 기둥</text><line x1="120" y1="111" x2="190" y2="85" class="ld"/><circle cx="190" cy="85" r="2" class="dotf"/><text x="195" y="89" class="r">Metal touch면(정밀가공)</text><line x1="152" y1="125" x2="190" y2="140" class="ld"/><circle cx="190" cy="140" r="2" class="dotf"/><text x="195" y="144" class="s">덧판·고력볼트(잔여 50%)</text><line x1="100" y1="180" x2="190" y2="180" class="ld"/><circle cx="190" cy="180" r="2" class="dotf"/><text x="195" y="184">하부 기둥</text><polygon points="372,60 540,60 540,140 388,140" class="bx2"/><line x1="372" y1="50" x2="388" y2="50" class="ln2"/><line x1="372" y1="45" x2="372" y2="58" class="ln2"/><line x1="388" y1="45" x2="388" y2="58" class="ln2"/><text x="376" y="42" class="s">t</text><line x1="358" y1="60" x2="358" y2="140" class="ar" style="marker-start:url(#arr)"/><text x="344" y="104" class="s">D</text><line x1="380" y1="100" x2="545" y2="100" class="ln2 dash"/><line x1="500" y1="100" x2="515" y2="80" class="ld"/><circle cx="515" cy="80" r="2" class="dotf"/><text x="500" y="74" class="s">축선</text><line x1="384" y1="125" x2="405" y2="162" class="ld"/><circle cx="405" cy="162" r="2" class="dotf"/><text x="410" y="166" class="s">가공면 직각도</text><text x="360" y="195" class="r">t / D ≤ 1.5 / 1,000</text><text x="360" y="215" class="s">마감 가공면 거칠기 50S 정도</text></svg>',
        cap: '[도해] 기둥 이음부 정밀가공(좌, e 과장 표현)과 가공면 직각도 기준(우)' },
      flow: ['이음부 정밀가공', '상·하부 완전밀착', '축력 50% 직접전달', '잔여 50% 용접·고력볼트'] },
    { h: 'Metal Touch의 특징', tbl: { head: ['구분', '내용'], rows: [
      ['경제성', '이음재료(덧판 두께·용접장·볼트 수) 절약'],
      ['품질', '용접 가열에 의한 변질·변형·잔류응력 저감'],
      ['시공성', '현장 용접량·검사량 감소, 품질관리 용이'],
      ['한계', '고정밀 가공장비 필요, 인장·전단 전달 불가 → 보강 필수']] } },
    { h: 'Metal Touch 관리기준', tbl: { head: ['항목', '기준'], rows: [
        ['가공면 직각도', '[[직각도 1.5/1000]] 이하 (t/D, 축선 직교)'],
        ['가공면 거칠기', 'Facing Machine 마감 {{50S}} 정도'],
        ['응력 전달', '압축력·휨모멘트의 {{50%}}까지 접촉면 직접 전달, 잔여는 용접·고력볼트'],
        ['밀착면 보호', '녹·도장 금지, 틈새 발생 시 설계자 협의']] } },
    { h: '가공 및 시공 시 유의사항', ul: [
      '가공면 [[직각도 1.5/1000]] 이하, 표면 거칠기 50S 정도로 [[Facing Machine]] 가공',
      '이음부 [[응력집중]]·불연속 이음 유의 — 틈새 발생 시 Filler·Shim 처리 금지 원칙(설계자 협의)',
      '이음부에 축력·전단력·휨모멘트가 충분히 전달되도록 접합 설계',
      'Metal touch 후 나머지 {{50%}} 축력은 용접 또는 [[고력볼트 보강]]',
      '세우기 시 기둥 수직도 관리, 가공면 녹·도장 금지(밀착면 보호)' ] },
    { h: '개선방안', ul: [
      '3D 스캐너로 가공면 평탄·직각도 공장 검측 → 데이터 기록',
      '초고층 CFT·Box 기둥 Metal touch 이음 표준상세 정립' ] }
  ],
  effect: '기둥 이음의 축력을 접촉면으로 직접 전달하여 이음재·용접량을 줄이고 용접변형·잔류응력을 저감한다.',
  mnemo: '메탈터치 = 페·밀·반 (Facing Machine·밀착·50%) / 1.5/1000',
  img: [],
  src: '디테일용어300 No.146 · 한솔 시크릿 마법지 강구조(Groove 가공: Scallop, Metal touch) · KCS 14 31 20'
},
{
  no: 153, cat: '강구조', type: '용어',
  title: 'Scallop (스캘럽)',
  key: ['Scallop', '용접선 교차', '열영향', '부채꼴 가공', 'r1 35mm', 'r2 10mm', '돌림용접', 'Notch 1mm 이하'],
  www: {
    what: '철골 용접접합부에서 [[용접선 교차]]를 피하기 위해 웨브 모서리를 [[부채꼴 가공]]한 홈',
    why: '용접선 교차에 의한 [[열영향]] 중복·용접결함(균열·슬래그 혼입) 방지',
    how: '복합원형 [[r1 35mm]] 이상·[[r2 10mm]] 이상으로 기계가공 → 스캘럽 단부 [[돌림용접]]'
  },
  secs: [
    { h: '정의', def: '[[Scallop]]은 철골부재의 용접이음·용접접합 시 [[용접선 교차]]로 인한 [[열영향]] 중복과 용접결함을 방지하기 위하여 웨브 단부를 [[부채꼴 가공]]한 것으로, 원호 곡선은 플랜지와 필릿부분이 매끄럽게 접속되도록 하며 반지름 {{r1 35mm 이상}}, {{r2 10mm 이상}}으로 가공한다.' },
    { h: 'Scallop 상세(도해)',
      fig: { svg: '<svg viewBox="0 0 560 240"><rect x="40" y="10" width="20" height="220" class="bx"/><rect x="60" y="60" width="200" height="12" class="bx"/><rect x="60" y="160" width="200" height="12" class="bx"/><path d="M75,72 L260,72 L260,160 L75,160 A15,15 0 0 0 60,145 L60,87 A15,15 0 0 0 75,72 Z" class="bx2"/><polyline points="60,60 64,63 60,66 64,69 60,72" class="rd"/><polyline points="60,160 64,163 60,166 64,169 60,172" class="rd"/><text x="180" y="120" class="b">웨브</text><circle cx="64" cy="156" r="24" class="ln2 dash"/><line x1="78" y1="176" x2="325" y2="200" class="ar"/><line x1="68" y1="80" x2="110" y2="34" class="ld"/><line x1="68" y1="152" x2="110" y2="34" class="ld"/><circle cx="110" cy="34" r="2" class="dotf"/><text x="114" y="32" class="r">Scallop</text><line x1="62" y1="66" x2="20" y2="40" class="ld"/><circle cx="20" cy="40" r="2" class="dotf"/><text x="4" y="34" class="s">용접선</text><line x1="200" y1="66" x2="220" y2="44" class="ld"/><circle cx="220" cy="44" r="2" class="dotf"/><text x="225" y="44" class="s">보 플랜지</text><line x1="50" y1="220" x2="80" y2="225" class="ld"/><circle cx="80" cy="225" r="2" class="dotf"/><text x="84" y="229" class="s">기둥 플랜지</text><rect x="330" y="40" width="20" height="180" class="bx"/><rect x="350" y="190" width="200" height="16" class="bx"/><path d="M350,40 L550,40 L550,190 L420,190 Q404,190 402,176 A56,56 0 0 0 350,134 Z" class="bx2"/><text x="332" y="34" class="s">기둥 플랜지면</text><line x1="350" y1="190" x2="389" y2="150" class="ln2"/><text x="360" y="165" class="r">r1</text><text x="430" y="100" class="b">웨브</text><text x="430" y="120" class="s">r1 ≥ 35mm, r2 ≥ 10mm</text><line x1="408" y1="186" x2="440" y2="218" class="ld"/><circle cx="440" cy="218" r="2" class="dotf"/><text x="444" y="230" class="r">r2 (플랜지 접속부)</text><line x1="375" y1="140" x2="450" y2="150" class="ld"/><circle cx="450" cy="150" r="2" class="dotf"/><text x="455" y="154" class="s">Notch 깊이 ≤ 1mm</text></svg>',
        cap: '[도해] 보-기둥 접합부 Scallop(좌)과 복합원형 Scallop 확대(우) — 용접이 끊기지 않고 연속되도록 공간 확보' },
      tbl: { head: ['항목', '기준'], rows: [
        ['반지름', '[[r1 35mm]] 이상(큰 원호), [[r2 10mm]] 이상(플랜지 접속부)'],
        ['가공면 거칠기', '{{100μm Ry 이하}}'],
        ['[[Notch 1mm 이하]]', '가공면 노치 깊이 {{1mm 이하}}'],
        ['가공방법', '기계가공 또는 자동가스절단 후 그라인더 마감']] } },
    { h: 'Scallop의 목적', ul: [
      '[[용접선 교차]] 방지로 용접부 결함(균열·슬래그 혼입·용입불량) 방지',
      '[[열영향]] 중복 최소화로 용접 취약부(HAZ 취화) 발생 방지',
      '뒷댐재(Backing) 설치 및 용접봉 운봉 공간 확보 → 연속 용접' ] },
    { h: '시공 시 유의사항', ul: [
      '용접 비드 이중 겹침 방지, 스캘럽 단부는 [[돌림용접]](End Return) 시공',
      '[[Notch 1mm 이하]] 유지, 가스절단 노치는 그라인더로 매끄럽게 마감',
      '스캘럽 단부는 지진 시 균열 발생 기점 → 원호 정밀가공·응력집중 방지',
      '용접 후 스캘럽 내부 슬래그·스패터 제거 후 비파괴검사(UT·MT)' ] },
    { h: '개선방안', ul: [
      '내진 접합부는 **Non-Scallop(무스캘럽) 공법** 또는 개량형 스캘럽 적용 → 취성파괴 방지',
      '로봇 가공·용접으로 원호 정밀도 및 돌림용접 품질 확보' ] }
  ],
  effect: '용접선 교차와 열영향 중복을 피하여 용접결함·취성파괴를 예방하고 연속 용접이 가능한 공간을 확보한다.',
  mnemo: '스캘럽 = 삼오·일영 (r1 35·r2 10) + 노치 1 · 거칠기 100',
  img: [],
  src: '디테일용어300 No.147 · 한솔 핵심마법지 Scallop · KCS 14 31 20 / ※ 원문은 R1=10·R2=35로 표기, 마법지·표준(r1 35mm, r2 10mm) 명칭으로 정리'
},
{
  no: 154, cat: '강구조', type: '용어',
  title: '고력볼트 반입검사 및 재료관리',
  key: ['미개봉 반입', '검사성적서', 'Lot', '토크계수값', '축력시험', '건조·통풍 보관', '선입선출', '볼트 길이'],
  www: {
    what: '고력볼트 세트를 [[미개봉 반입]]하여 [[검사성적서]]·[[Lot]]·[[토크계수값]]을 확인하고 적정 보관하는 품질관리',
    why: '녹·나사손상·윤활 변질에 의한 토크계수값 변동 → 축력 부족(접합부 미끄럼) 방지',
    how: '성적서 확인 → 외관·Lot 확인 → [[축력시험]](로트당 {{5세트}}) → [[건조·통풍 보관]]·[[선입선출]]'
  },
  secs: [
    { h: '정의', def: '고력볼트는 완전히 포장된 [[미개봉 반입]]을 원칙으로 하며 [[검사성적서]]·외관·[[Lot]]·규격을 확인하고 [[토크계수값]] 및 [[축력시험]]을 실시한 후, [[Lot]]별로 구분하여 습기·먼지·직사광선이 없는 [[건조·통풍 보관]] 창고에 보관하고 [[선입선출]]로 사용하는 재료관리를 말한다.' },
    { h: '고력볼트 반입검사 Process', flow: ['검사성적서 확인', '외관·Lot 확인', '토크계수값·축력 시험', '합격 → 보관', '불합격 → 반출'],
      tbl: { head: ['단계', '확인 내용'], rows: [
        ['[[검사성적서]]', '제조사 성적서와 규격(F10T·S10T)·등급·치수 일치'],
        ['외관·[[Lot]]', '볼트·너트·와셔 Lot 번호 동일, 녹·나사손상·도금(윤활) 상태'],
        ['[[토크계수값]]', 'A종 {{0.110~0.150}}(표준편차 0.010 이하) / B종 {{0.150~0.190}}(0.013 이하)'],
        ['[[축력시험]]', '축력계로 로트당 {{5세트}} 조임 → 평균 축력이 규정 범위 이내']] } },
    { h: '고력볼트 구성 및 볼트 길이(도해)',
      fig: { svg: '<svg viewBox="0 0 560 250"><rect x="170" y="30" width="60" height="24" class="bx"/><line x1="185" y1="30" x2="185" y2="54" class="ln2"/><line x1="215" y1="30" x2="215" y2="54" class="ln2"/><rect x="165" y="54" width="70" height="6" class="bx3"/><rect x="110" y="60" width="180" height="40" class="bx2"/><rect x="110" y="100" width="180" height="40" class="bx2"/><line x1="188" y1="60" x2="188" y2="140" class="ln2 dash"/><line x1="212" y1="60" x2="212" y2="140" class="ln2 dash"/><rect x="165" y="140" width="70" height="6" class="bx3"/><rect x="172" y="146" width="56" height="26" class="bx"/><line x1="186" y1="146" x2="186" y2="172" class="ln2"/><line x1="214" y1="146" x2="214" y2="172" class="ln2"/><rect x="188" y="172" width="24" height="18" fill="url(#hatch)" class="ln2"/><line x1="170" y1="42" x2="100" y2="38" class="ld"/><circle cx="100" cy="38" r="2" class="dotf"/><text x="20" y="42" class="s">볼트 머리</text><line x1="165" y1="57" x2="100" y2="66" class="ld"/><circle cx="100" cy="66" r="2" class="dotf"/><text x="60" y="70" class="s">와셔</text><line x1="172" y1="160" x2="100" y2="165" class="ld"/><circle cx="100" cy="165" r="2" class="dotf"/><text x="64" y="169" class="s">너트</text><line x1="212" y1="182" x2="240" y2="215" class="ld"/><circle cx="240" cy="215" r="2" class="dotf"/><text x="246" y="219" class="s">나사산 돌출</text><line x1="290" y1="60" x2="310" y2="60" class="ln2"/><line x1="290" y1="140" x2="310" y2="140" class="ln2"/><line x1="235" y1="190" x2="310" y2="190" class="ln2 dash"/><line x1="300" y1="60" x2="300" y2="140" class="ar" style="marker-start:url(#arr)"/><text x="308" y="104" class="bl">조임길이 = 접합판 두께 합</text><line x1="300" y1="140" x2="300" y2="190" class="ar" style="marker-start:url(#arr)"/><text x="308" y="170" class="s">여유길이(와셔·너트·돌출)</text><line x1="235" y1="54" x2="480" y2="54" class="ln2 dash"/><line x1="310" y1="190" x2="480" y2="190" class="ln2 dash"/><line x1="472" y1="54" x2="472" y2="190" class="ar" style="marker-start:url(#arr)"/><text x="478" y="125" class="b">볼트길이 L</text><text x="20" y="242" class="r">L = 조임길이 + 여유길이</text></svg>',
        cap: '[도해] 고력볼트 세트 구성 — 볼트 길이 = 조임길이(접합판 두께 합) + 여유길이' } },
    { h: '재료관리 시 유의사항', ul: [
      '습기·먼지가 없고 온도변화가 적은 [[건조·통풍 보관]], 바닥에서 띄워 적치',
      '종류·등급·사이즈·[[Lot]]별 구분 보관, [[선입선출]]',
      '시공 직전 필요 수량만 개봉, 당일 미사용분은 재포장·창고 반납',
      '녹·흙·기름 부착 볼트 사용 금지(토크계수값 변동), 나사부 임의 세척·윤활 금지',
      '장기 보관 시 [[토크계수값]] 재시험 후 사용(원문: 반입 후 6개월 이내 사용)',
      '[[볼트 길이]]: 본조임 후 너트 밖 나사산 {{1~6개}} 돌출 확인(원문: 3개 이상)' ] },
    { h: '개선방안', ul: [
      '바코드·RFID로 Lot별 반입·사용 이력 관리',
      '현장 축력계 상시 비치 및 기온 변화 시 토크계수값 재확인', '토크렌치·축력계 정밀도 오차 {{3% 이내}} 검교정(기술지침 6.강구조)' ] }
  ],
  effect: '토크계수값과 축력을 안정적으로 확보하여 마찰접합부의 미끄럼·볼트 파단을 방지한다.',
  mnemo: '반입 = 성·외·축 (성적서·외관Lot·축력) / 보관 = 건·로·선 (건조·Lot·선입선출)',
  img: [],
  src: '디테일용어300 No.151 · 한솔 시크릿 마법지 강구조(Bolting 반입검사: 토크계수값) · KCS 14 31 25 · KS B 1010(토크계수값 A·B종 — 기술지침 6.강구조 p037~039에는 토크계수 수치 미수록, KS B 1010 기준값)'
},
{
  no: 155, cat: '강구조', type: '용어',
  title: 'TS bolt, TS형 고력볼트 축회전',
  key: ['TS bolt', '핀테일(Pintail)', '파단홈', '전용 렌치', '축회전', '공회전', '금매김', '마찰면 처리'],
  www: {
    what: '[[핀테일(Pintail)]]이 [[파단홈]]에서 전단파단되면 규정 축력이 도입되는 [[TS bolt]]와, 조임 중 볼트가 함께 도는 [[축회전]] 불량',
    why: '축회전·[[공회전]] 발생 시 축력 도입 불량 → 마찰접합부 성능 저하',
    how: '1차조임 → [[금매김]] → [[전용 렌치]] 본조임(핀테일 파단) → 금매김 어긋남으로 축회전 판별'
  },
  secs: [
    { h: '정의', def: '[[TS bolt]](Torque Shear)는 [[전용 렌치]]의 내·외측 소켓이 반대로 회전하여 볼트 끝 [[핀테일(Pintail)]]이 [[파단홈]]에서 전단파단될 때 공장에서 규정된 축력이 도입되는 고력볼트이며, TS형 고력볼트 [[축회전]]은 볼트머리 측 마찰력이 너트 측보다 작거나 조임 중 볼트 축이 함께 회전하는 현상으로 축력 도입 불량을 일으켜 접합부 성능을 저하시킨다.' },
    { h: 'TS bolt 상세 및 축회전 판별(도해)',
      fig: [
        { svg: '<svg viewBox="0 0 560 220"><path d="M60,70 Q30,110 60,150 Z" class="bx"/><rect x="62" y="55" width="50" height="110" class="bx2"/><rect x="112" y="55" width="50" height="110" class="bx2"/><line x1="62" y1="97" x2="162" y2="97" class="ln2 dash"/><line x1="62" y1="123" x2="162" y2="123" class="ln2 dash"/><rect x="162" y="78" width="8" height="64" class="bx3"/><rect x="170" y="72" width="36" height="76" class="bx"/><rect x="206" y="97" width="34" height="26" fill="url(#hatch)" class="ln2"/><rect x="240" y="103" width="8" height="14" class="bx"/><rect x="248" y="97" width="40" height="26" class="bx"/><line x1="258" y1="97" x2="258" y2="123" class="ln2"/><line x1="268" y1="97" x2="268" y2="123" class="ln2"/><line x1="278" y1="97" x2="278" y2="123" class="ln2"/><rect x="166" y="62" width="62" height="96" class="ln2 dash" fill="none"/><rect x="244" y="88" width="50" height="44" class="ln2 dash" fill="none"/><line x1="45" y1="100" x2="30" y2="40" class="ld"/><circle cx="30" cy="40" r="2" class="dotf"/><text x="10" y="34" class="s">둥근 머리</text><line x1="166" y1="80" x2="160" y2="30" class="ld"/><circle cx="160" cy="30" r="2" class="dotf"/><text x="130" y="24" class="s">와셔(너트측 1장)</text><line x1="206" y1="80" x2="330" y2="60" class="ld"/><circle cx="330" cy="60" r="2" class="dotf"/><text x="335" y="64">너트 ← 외측 소켓 회전</text><line x1="244" y1="117" x2="330" y2="100" class="ld"/><circle cx="330" cy="100" r="2" class="dotf"/><text x="335" y="104" class="r">파단홈(Notch) — 규정 토크 시 파단</text><line x1="288" y1="115" x2="330" y2="140" class="ld"/><circle cx="330" cy="140" r="2" class="dotf"/><text x="335" y="144">핀테일 ← 내측 소켓 반력</text><text x="20" y="200" class="s">전용 렌치: 내·외측 소켓 반대 회전 → 핀테일 파단 = 축력 도입 완료(육안 확인)</text></svg>',
          cap: '[도해] TS bolt 구성 — 둥근머리·와셔 1장·너트·파단홈·핀테일, 점선 = 전용 렌치 소켓' },
        { svg: '<svg viewBox="0 0 560 200"><rect x="15" y="40" width="530" height="110" class="bx2"/><polygon points="123,95 109,119.2 81,119.2 67,95 81,70.8 109,70.8" class="bx"/><circle cx="95" cy="95" r="12" class="bx3"/><line x1="40" y1="95" x2="62" y2="95" class="rd"/><line x1="128" y1="95" x2="150" y2="95" class="rd"/><line x1="88" y1="83" x2="82" y2="72.5" class="rd"/><line x1="83" y1="95" x2="107" y2="95" class="rd"/><line x1="50" y1="95" x2="35" y2="58" class="ld"/><circle cx="35" cy="58" r="2" class="dotf"/><text x="20" y="54" class="s">부재 금매김</text><line x1="84" y1="76" x2="112" y2="52" class="ld"/><circle cx="112" cy="52" r="2" class="dotf"/><text x="116" y="56" class="s">너트 회전</text><line x1="105" y1="95" x2="135" y2="132" class="ld"/><circle cx="135" cy="132" r="2" class="dotf"/><text x="100" y="146" class="s">볼트 끝 일치</text><polygon points="308,95 294,119.2 266,119.2 252,95 266,70.8 294,70.8" class="bx"/><circle cx="280" cy="95" r="12" class="bx3"/><line x1="225" y1="95" x2="247" y2="95" class="rd"/><line x1="313" y1="95" x2="335" y2="95" class="rd"/><line x1="273" y1="83" x2="267" y2="72.5" class="rd"/><line x1="274" y1="84.6" x2="286" y2="105.4" class="rd"/><line x1="286" y1="105" x2="320" y2="130" class="ld"/><circle cx="320" cy="130" r="2" class="dotf"/><text x="240" y="144" class="r">볼트·너트 동시 회전</text><polygon points="493,95 479,119.2 451,119.2 437,95 451,70.8 479,70.8" class="bx"/><circle cx="465" cy="95" r="12" class="bx3"/><line x1="410" y1="95" x2="432" y2="95" class="rd"/><line x1="498" y1="95" x2="520" y2="95" class="rd"/><line x1="458" y1="83" x2="452" y2="72.5" class="rd"/><line x1="453" y1="95" x2="477" y2="95" class="rd"/><line x1="448" y1="66" x2="444" y2="60" class="rd"/><line x1="446" y1="63" x2="500" y2="32" class="ld"/><circle cx="500" cy="32" r="2" class="dotf"/><text x="496" y="30" text-anchor="end" class="r">와셔 동반 회전</text><text x="95" y="175" text-anchor="middle" class="b">① 정상(합격)</text><text x="280" y="175" text-anchor="middle" class="b">② 축회전(불합격·교체)</text><text x="465" y="175" text-anchor="middle" class="b">③ 와셔 공회전(불합격)</text></svg>',
          cap: '[도해] 금매김(적색선)에 의한 판정 — 너트만 회전 = 정상, 볼트 끝 마킹 동반 회전 = 축회전' }
      ] },
    { h: 'TS형 고력볼트 체결 순서', flow: ['1차 조임(중앙→단부)', '금매김(볼트·너트·와셔·부재)', '본조임(전용 렌치)', '핀테일 파단 확인', '축회전 유무 판별'],
      tbl: { head: ['단계', '관리 기준'], rows: [
        ['1차 조임', '토크 M16 약 {{100}} / M20·M22 약 {{150}} / M24 약 {{200}} N·m, 중앙부→단부'],
        ['[[금매김]]', '1차조임 후 모든 볼트에 볼트·너트·와셔·부재 일직선 표시'],
        ['본조임', '[[전용 렌치]]로 [[핀테일(Pintail)]] 파단까지 조임'],
        ['검사', '핀테일 파단·금매김 어긋남으로 [[축회전]]·[[공회전]] 확인, 너트 회전량 평균 {{±30°}} 이내']] } },
    { h: '축회전 발생 원인 및 대책', tbl: { head: ['발생 원인', '대책 방안'], rows: [
      ['부재 습윤 상태(우천·결로)', '부재 건조 상태 유지, 우천 시 작업 중지'],
      ['[[마찰면 처리]] 불량·이물질·녹', '마찰면 이물질 제거, 적정 녹 발생(미끄럼계수 0.5 이상) 관리'],
      ['볼트머리 측 마찰력 < 너트 측', '머리 측 접촉면 평탄도·구멍 정밀도 확보'],
      ['조임기구 작동 불량', '[[전용 렌치]] 정밀도 확보·정기 교정']] },
      ul2: ['[[축회전]]·[[공회전]] 볼트, 너트 회전량 이상 볼트는 **신품 교체**(재사용 금지)'] },
    { h: '시공 시 유의사항 및 개선방안', ul: [
      '체결 순서·방법 준수로 균형 있는 체결(볼트군 중앙 → 단부)',
      '규정 공차 준수 구멍 정밀도 확보(Reaming), 구멍 불일치 시 가스 확공 금지',
      '접합면·접촉면 평탄면 확보, 틈새 1mm 초과 시 Filler Plate 삽입',
      '개선: 핀테일 파단 인식 자동 렌치·조임 데이터 로깅 시스템 도입' ] }
  ],
  effect: '핀테일 파단으로 축력 도입을 육안 확인할 수 있어 검사가 간편하며, 축회전 관리로 마찰접합부 성능 저하를 방지한다.',
  mnemo: 'TS = 핀·홈·렌 (핀테일·파단홈·전용렌치) / 축회전 = 습·이·기 (습윤·이물질·기구불량)',
  img: [],
  src: '디테일용어300 No.152 · 한솔 시크릿 마법지 강구조(Bolting 조임방법·조임검사) · KCS 14 31 25 / ※ 원문 첨삭 "TS bolt 상세 필요" 반영하여 상세도 추가'
},
{
  no: 156, cat: '강구조', type: '용어',
  title: '고장력볼트의 조임방법 / Torque Control법',
  key: ['1차 조임', '금매김', '본조임', '표준볼트장력', '토크관리법', '토크계수(k)', '평균토크 ±10%', '너트회전법'],
  www: {
    what: '[[1차 조임]]·[[금매김]]·[[본조임]] 순서로 [[표준볼트장력]]을 도입하고 [[토크관리법]]으로 검사하는 조임 방법',
    why: '접합부 소요 마찰력·응력전달·일체성 확보(미끄럼·볼트 파단 방지)',
    how: 'T = k·d·N 으로 조임토크 산정 → 볼트군 중앙→단부 조임 → 볼트군 {{10%}} 토크렌치 검사, [[평균토크 ±10%]] 합격'
  },
  secs: [
    { h: '정의', def: '고장력볼트 조임은 철골부재 구멍에 볼트·와셔를 넣고 너트를 볼트군의 이음 중앙부에서 단부로 [[1차 조임]] → [[금매김]] → [[본조임]] 하여 [[표준볼트장력]](설계볼트장력의 {{1.1배}})을 도입하는 것이며, [[토크관리법]]은 [[토크계수(k)]]로부터 T = k·d·N 의 조임토크를 산정하여 토크렌치로 조이고 검사하는 방법이다.' },
    { h: '조임 순서 및 원리(도해)',
      fig: [
        { svg: '<svg viewBox="0 0 560 230"><rect x="60" y="20" width="150" height="190" class="bx2"/><line x1="50" y1="115" x2="220" y2="115" class="rd dash"/><circle cx="95" cy="35" r="6" class="bx"/><circle cx="135" cy="35" r="6" class="bx"/><circle cx="175" cy="35" r="6" class="bx"/><circle cx="95" cy="62" r="6" class="bx"/><circle cx="135" cy="62" r="6" class="bx"/><circle cx="175" cy="62" r="6" class="bx"/><circle cx="95" cy="89" r="6" class="bx"/><circle cx="135" cy="89" r="6" class="bx"/><circle cx="175" cy="89" r="6" class="bx"/><circle cx="95" cy="141" r="6" class="bx"/><circle cx="135" cy="141" r="6" class="bx"/><circle cx="175" cy="141" r="6" class="bx"/><circle cx="95" cy="168" r="6" class="bx"/><circle cx="135" cy="168" r="6" class="bx"/><circle cx="175" cy="168" r="6" class="bx"/><circle cx="95" cy="195" r="6" class="bx"/><circle cx="135" cy="195" r="6" class="bx"/><circle cx="175" cy="195" r="6" class="bx"/><text x="192" y="93" class="s">①</text><text x="192" y="66" class="s">②</text><text x="192" y="39" class="s">③</text><text x="192" y="145" class="s">①</text><text x="192" y="172" class="s">②</text><text x="192" y="199" class="s">③</text><line x1="225" y1="105" x2="225" y2="30" class="ar"/><line x1="225" y1="125" x2="225" y2="200" class="ar"/><text x="232" y="119" class="s">중앙→단부</text><line x1="60" y1="115" x2="40" y2="100" class="ld"/><circle cx="40" cy="100" r="2" class="dotf"/><text x="5" y="94" class="r">이음부</text><rect x="290" y="150" width="140" height="30" class="bx2"/><ellipse cx="360" cy="146" rx="40" ry="10" class="bx3"/><rect x="330" y="105" width="60" height="38" class="bx"/><ellipse cx="360" cy="105" rx="30" ry="8" class="bx"/><rect x="350" y="86" width="20" height="19" class="bx2"/><ellipse cx="360" cy="86" rx="10" ry="3" class="bx2"/><line x1="360" y1="84" x2="360" y2="172" class="rd"/><text x="300" y="40" class="r">금매김: 1차조임 후 일직선</text><line x1="362" y1="92" x2="440" y2="70" class="ld"/><circle cx="440" cy="70" r="2" class="dotf"/><text x="444" y="74" class="s">볼트 끝단</text><line x1="362" y1="122" x2="440" y2="105" class="ld"/><circle cx="440" cy="105" r="2" class="dotf"/><text x="444" y="109" class="s">너트</text><line x1="362" y1="148" x2="440" y2="140" class="ld"/><circle cx="440" cy="140" r="2" class="dotf"/><text x="444" y="144" class="s">와셔</text><line x1="362" y1="166" x2="440" y2="175" class="ld"/><circle cx="440" cy="175" r="2" class="dotf"/><text x="444" y="179" class="s">부재</text></svg>',
          cap: '[도해] 볼트군 조임 순서(이음 중앙 → 단부)와 금매김 위치' },
        { svg: '<svg viewBox="0 0 560 220"><rect x="346" y="35" width="64" height="155" class="bx3"/><line x1="60" y1="190" x2="530" y2="190" class="ln"/><line x1="60" y1="190" x2="60" y2="20" class="ln"/><text x="66" y="18" class="s">축력 N(kN)</text><text x="530" y="208" text-anchor="end" class="s">토크 T(N·m)</text><line x1="60" y1="100" x2="520" y2="100" class="rd dash"/><text x="66" y="95" class="s">표준볼트장력</text><line x1="60" y1="190" x2="360" y2="30" class="bl"/><line x1="60" y1="190" x2="520" y2="60" class="ln"/><line x1="60" y1="190" x2="520" y2="140" class="bl dash"/><circle cx="378" cy="100" r="5" class="rf"/><text x="180" y="40" class="r">T = k · d · N</text><line x1="240" y1="94" x2="200" y2="62" class="ld"/><circle cx="200" cy="62" r="2" class="dotf"/><text x="150" y="58" class="bl">k=0.110</text><line x1="460" y1="146" x2="480" y2="170" class="ld"/><circle cx="480" cy="170" r="2" class="dotf"/><text x="470" y="184" class="s">k=0.150</text><line x1="400" y1="40" x2="420" y2="28" class="ld"/><circle cx="420" cy="28" r="2" class="dotf"/><text x="424" y="28" class="g">평균토크 ±10% 합격</text></svg>',
          cap: '[그래프] 토크-축력 관계 — 토크계수 k에 따라 동일 토크에서 축력 변동 → 반입 시 k값 확인 필수' }
      ],
      flow: ['1차 조임(표준볼트장력 약 60%, M16 100·M20/22 150·M24 200 N·m)', '금매김', '본조임(표준볼트장력 100%)', '토크 검사', '불합격 처리'] },
    { h: '고장력볼트(F10T) 장력 기준(kN)', tbl: { head: ['볼트 호칭', 'M16', 'M20', 'M22', 'M24', 'M27'], rows: [
      ['설계볼트장력', '106', '165', '205', '238', '310'],
      ['[[표준볼트장력]](×1.1)', '{{117}}', '{{182}}', '{{226}}', '{{262}}', '{{341}}']] },
      ul2: ['조임 방법: [[토크관리법]] / [[너트회전법]](1차조임 후 너트 회전량 {{120°±30°}} 합격) / 조합법(TS bolt)'] },
    { h: 'Torque Control법에 의한 조임검사', tbl: { head: ['구분', '기준'], rows: [
      ['검사 수량', '볼트군의 {{10%}} 이상(최소 1개) 토크렌치로 검사'],
      ['합격 기준', '[[평균토크 ±10%]] 이내'],
      ['불합격 처리', '해당 볼트군 재검사 → 재불합격 시 전수검사(원문: 배수 재검사 후 전수)'],
      ['조임 부족', '소요 토크까지 추가 조임'],
      ['과다 조임', '{{10%}} 초과 조여진 볼트는 신품 교체']] } },
    { h: '시공 시 유의사항 및 개선방안', ul: [
      '토크렌치·축력계 정기 교정 및 작업 전 검정',
      '[[토크계수(k)]] 변동 요인(녹·우천·기온) 관리 — 당일 개봉분 당일 사용',
      '마찰면 미끄럼계수 {{0.5 이상}} 확보, 틈새 1mm 초과 시 Filler Plate',
      '개선: 전동 토크렌치 데이터 자동기록·BIM 연계 조임 이력관리' ] }
  ],
  effect: '규정 축력을 균일하게 도입하여 마찰접합부의 소요강도·응력전달·일체성을 확보하고 미끄럼·볼트 파단을 방지한다.',
  mnemo: '조임 = 일·금·본 (1차·금매김·본조임) / 검사 = 십·십 (10% 검사·±10% 합격)',
  img: [],
  src: '디테일용어300 No.153 · 한솔 시크릿 마법지 강구조(토크관리법 ±10%, 너트회전법 120°±30°) · KDS 14 31 25 · KCS 14 31 25 / ※ 원문 장력표(M22 200/220, M24 237/261, M27 300/330)는 기준값(205/226, 238/262, 310/341)으로 정정 · 1차조임 토크·약 60%는 기술지침 6.강구조 p037'
},
{
  no: 157, cat: '강구조', type: '용어',
  title: '철골 예열온도(Preheat) / 예열방법',
  key: ['예열(Preheat)', '저온균열', '열영향부 경화', '탄소당량', '0℃ 이하', '양측 100mm', '75mm 온도측정', '230℃ 이하'],
  www: {
    what: '용접·가스절단 전 모재를 미리 가열하는 [[예열(Preheat)]]',
    why: '냉각속도 완화로 [[저온균열]]·[[열영향부 경화]] 방지, 수분(수소) 제거',
    how: '[[탄소당량]]·판두께·기온에 따라 예열온도 결정 → 용접선 [[양측 100mm]] 가열 → [[75mm 온도측정]]'
  },
  secs: [
    { h: '정의', def: '[[예열(Preheat)]]은 [[저온균열]] 발생이나 [[열영향부 경화]]를 막기 위해 용접 또는 가스절단 전에 모재에 미리 열을 가하는 것으로, 냉각속도를 완화하고 습기·수분(확산성 수소)을 제거하며, [[탄소당량]]·판두께·기온에 따라 예열온도를 정하되 최대 {{230℃ 이하}}로 관리한다.' },
    { h: '철골 예열 기준', tbl: { head: ['적용 대상', '예열 기준'], rows: [
      ['모재 표면온도 [[0℃ 이하]]', '{{20℃ 이상}}까지 예열'],
      ['[[탄소당량]] {{0.44%}} 초과', '예열·후열 실시'],
      ['판두께 {{40mm 이상}}·고구속 이음·보수용접', '최소 예열온도 이상 예열'],
      ['이종강재 간 용접', '상위 등급 강종 기준으로 예열'],
      ['최대 예열온도', '[[230℃ 이하]](KCS 14 31 20)']] },
      ul2: ['Ceq 기준 예열: {{0.45 미만}} 임의 / {{0.45~0.60}} 100~200℃ / {{0.60 초과}} 200~350℃'] },
    { h: '예열 범위 및 원리(도해)',
      fig: [
        { svg: '<svg viewBox="0 0 560 220"><rect x="40" y="40" width="230" height="140" class="bx2"/><rect x="280" y="40" width="230" height="140" class="bx2"/><rect x="180" y="55" width="190" height="110" fill="url(#hatch)" class="ln2"/><line x1="275" y1="40" x2="275" y2="180" class="rd"/><circle cx="275" cy="150" r="5" class="rf"/><line x1="275" y1="145" x2="275" y2="62" class="ar"/><line x1="180" y1="28" x2="275" y2="28" class="ar" style="marker-start:url(#arr)"/><line x1="275" y1="28" x2="370" y2="28" class="ar" style="marker-start:url(#arr)"/><text x="200" y="22" class="s">100mm</text><text x="300" y="22" class="s">100mm</text><line x1="390" y1="55" x2="390" y2="150" class="ar" style="marker-start:url(#arr)"/><text x="396" y="105" class="s">아크 전방</text><text x="396" y="119" class="s">100mm</text><circle cx="204" cy="100" r="4" class="bf"/><line x1="204" y1="100" x2="110" y2="196" class="ld"/><circle cx="110" cy="196" r="2" class="dotf"/><text x="40" y="212" class="bl">온도 측정점(용접선에서 75mm)</text><line x1="275" y1="175" x2="330" y2="200" class="ld"/><circle cx="330" cy="200" r="2" class="dotf"/><text x="335" y="205" class="r">용접선(개선부)</text><line x1="340" y1="80" x2="410" y2="40" class="ld"/><circle cx="410" cy="40" r="2" class="dotf"/><text x="415" y="36" class="s">예열 범위(최소 예열온도↑)</text><text x="285" y="160" class="s">아크</text></svg>',
          cap: '[도해] 예열 범위 — 용접선 양측 100mm·아크 전방 100mm, 용접선에서 75mm 위치 온도 측정' },
        { svg: '<svg viewBox="0 0 560 200"><line x1="60" y1="170" x2="520" y2="170" class="ln"/><line x1="60" y1="170" x2="60" y2="20" class="ln"/><text x="66" y="18" class="s">온도 T(℃)</text><text x="520" y="188" text-anchor="end" class="s">시간 t</text><line x1="60" y1="50" x2="520" y2="50" class="ln2 dash"/><text x="56" y="54" text-anchor="end" class="s">800</text><line x1="60" y1="100" x2="520" y2="100" class="ln2 dash"/><text x="56" y="104" text-anchor="end" class="s">500</text><path d="M60,30 Q100,160 520,165" class="rd"/><path d="M60,30 Q220,120 520,140" class="bl"/><line x1="120" y1="100" x2="250" y2="100" class="ar" style="marker-start:url(#arr)"/><line x1="109" y1="91" x2="90" y2="140" class="ld"/><circle cx="90" cy="140" r="2" class="dotf"/><text x="64" y="158" class="r">예열 無: 급랭</text><line x1="185" y1="100" x2="205" y2="75" class="ld"/><circle cx="205" cy="75" r="2" class="dotf"/><text x="209" y="72" class="g">냉각시간 t8/5 증가</text><line x1="379" y1="126" x2="400" y2="80" class="ld"/><circle cx="400" cy="80" r="2" class="dotf"/><text x="330" y="74" class="s">예열 有: 서냉 → 경화 방지·수소 방출</text></svg>',
          cap: '[그래프] 냉각곡선 — 예열 시 800→500℃ 냉각시간 증가 → HAZ 경화·저온균열 방지' }
      ] },
    { h: '철골 예열 방법', tbl: { head: ['방법', '특징'], rows: [
      ['전기저항 가열법', '세라믹 패드 히터 → 온도 자동제어, 후판·균일 가열 유리'],
      ['가스버너(고정·수동)', '개선면 직접 가열, 간편하나 국부 과열 주의'],
      ['고주파 유도가열', '가열속도 빠르고 균일, 장비비 고가']] },
      flow: ['예열온도 결정', '가열(양측 100mm)', '온도 측정(75mm, 표면온도계·온도초크)', '용접', '패스간 온도 관리'] },
    { h: '시공 시 유의사항 및 개선방안', ul: [
      '용접선 [[양측 100mm]], 아크 전방 100mm 범위 균일 가열 — 국부 가열 금지(열변형)',
      '용접선에서 [[75mm 온도측정]] 위치에서 접촉식 온도계·온도초크로 확인',
      '가열로 모재 표면 결로·수분 완전 제거(기공·수소균열 방지), 저수소계 용접봉 사용',
      '패스간 온도 상한 관리, 우천·강풍 시 방풍·보온 조치',
      '개선: TMC강 등 저탄소당량 강재 사용으로 예열 생략, 전기식 자동 온도기록 장치 도입' ] }
  ],
  effect: '용접부 냉각속도를 늦춰 열영향부 경화와 저온(수소)균열을 방지하고 잔류응력·변형을 줄인다.',
  mnemo: '예열 = 영·사사·사십 (0℃ 이하·Ceq 0.44·40mm) / 범위 백·백, 측정 칠오, 상한 230',
  img: [],
  src: '디테일용어300 No.158 · 한솔 핵심마법지 예열기준 · KCS 14 31 20 / ※ 원문 예열온도 상한 230℃와 일치(일부 문헌 250℃)'
},
{
  no: 158, cat: '강구조', type: '용어',
  title: '내화피복 공사의 현장관리 항목 및 공법별 검사',
  key: ['내화피복', '뿜칠공법', '미장공법', '내화도료', '두께·비중', '코어 채취', '1,500㎡마다', '덧뿜칠'],
  www: {
    what: '화재 시 강재 온도상승을 억제하기 위한 [[내화피복]]의 두께·밀도 등을 공법별로 확인하는 검사',
    why: '강재는 고온에서 강도가 급감({{600℃}}에서 상온강도의 약 1/2) → 소요 내화시간 확보',
    how: '시공 중 [[두께·비중]] 확인 → 시공 후 [[코어 채취]]([[1,500㎡마다]] 부위별) → 불합격 시 [[덧뿜칠]]·재시공'
  },
  secs: [
    { h: '정의', def: '[[내화피복]]은 화재 시 철골 주요구조부를 고열로부터 보호하기 위해 [[뿜칠공법]]·[[미장공법]]·내화보드 붙임·[[내화도료]] 등으로 강재를 피복하는 공사이며, 공법별로 시공 중·후 [[두께·비중]]을 측정([[1,500㎡마다]](KCS 14)·500㎡마다(KCS 41) 부위별)하여 소요 내화성능(보·기둥 {{1~3시간}})을 확인한다.' },
    { h: '내화피복 공법 및 현장관리(도해)',
      fig: [
        { svg: '<svg viewBox="0 0 560 245"><polygon points="52,32 208,32 208,62 144,62 144,158 208,158 208,188 52,188 52,158 116,158 116,62 52,62" fill="url(#hatch)" class="ln2"/><rect x="60" y="40" width="140" height="14" class="bx"/><rect x="124" y="54" width="12" height="112" class="bx"/><rect x="60" y="166" width="140" height="14" class="bx"/><line x1="90" y1="188" x2="90" y2="200" class="rd"/><rect x="318" y="28" width="164" height="164" class="bx3"/><rect x="328" y="38" width="144" height="144" class="bx"/><rect x="330" y="40" width="140" height="14" class="bx2"/><rect x="394" y="54" width="12" height="112" class="bx2"/><rect x="330" y="166" width="140" height="14" class="bx2"/><line x1="208" y1="45" x2="240" y2="30" class="ld"/><circle cx="240" cy="30" r="2" class="dotf"/><text x="230" y="24" class="s">뿜칠 피복(습식)</text><line x1="130" y1="110" x2="225" y2="110" class="ld"/><circle cx="225" cy="110" r="2" class="dotf"/><text x="230" y="114" class="s">강재(H형강)</text><line x1="90" y1="198" x2="130" y2="212" class="ld"/><circle cx="130" cy="212" r="2" class="dotf"/><text x="136" y="216" class="r">두께 측정(핀·코어)</text><line x1="330" y1="45" x2="300" y2="68" class="ld"/><circle cx="300" cy="68" r="2" class="dotf"/><text x="240" y="64" class="s">연결철물</text><text x="232" y="80" class="s">@500~600mm</text><line x1="482" y1="150" x2="490" y2="205" class="ld"/><circle cx="490" cy="205" r="2" class="dotf"/><text x="390" y="216" class="s">내화보드 붙임(건식)</text><text x="130" y="238" text-anchor="middle" class="b">(a) 뿜칠공법</text><text x="400" y="238" text-anchor="middle" class="b">(b) 성형판 붙임공법</text></svg>',
          cap: '[도해] 습식(뿜칠, 부재 형상 따라 피복)과 건식(내화보드 상자형 피복) 비교' },
        { svg: '<svg viewBox="0 0 560 200"><rect x="40" y="140" width="480" height="20" class="bx"/><rect x="40" y="118" width="300" height="22" fill="url(#hatch)" class="ln2"/><rect x="410" y="20" width="20" height="50" class="bx2"/><polygon points="410,70 430,70 420,82" class="bx2"/><line x1="420" y1="82" x2="395" y2="138" class="ln2 dash"/><line x1="420" y1="82" x2="445" y2="138" class="ln2 dash"/><path d="M405,140 A15,15 0 0 1 420,125" class="rd"/><text x="380" y="128" class="r">90°</text><line x1="120" y1="100" x2="120" y2="140" class="rd"/><circle cx="120" cy="100" r="3" class="rf"/><rect x="230" y="112" width="24" height="28" class="ln dash" fill="none"/><line x1="430" y1="40" x2="444" y2="30" class="ld"/><circle cx="444" cy="30" r="2" class="dotf"/><text x="448" y="34" class="s">뿜칠 노즐(면과 90°)</text><line x1="120" y1="100" x2="90" y2="70" class="ld"/><circle cx="90" cy="70" r="2" class="dotf"/><text x="40" y="64" class="r">두께 측정 핀(5㎡당 1개소)</text><line x1="242" y1="112" x2="260" y2="70" class="ld"/><circle cx="260" cy="70" r="2" class="dotf"/><text x="230" y="64" class="s">코어 채취(두께·비중)</text><line x1="200" y1="129" x2="200" y2="180" class="ld"/><circle cx="200" cy="180" r="2" class="dotf"/><text x="206" y="184" class="s">뿜칠 피복층(1회 두께 관리)</text><line x1="480" y1="150" x2="500" y2="180" class="ld"/><circle cx="500" cy="180" r="2" class="dotf"/><text x="420" y="194" class="s">강재면(방청·청소)</text></svg>',
          cap: '[도해] 뿜칠 시공·검사 — 노즐 직각 분사, 시공 중 핀 측정, 시공 후 코어 채취' }
      ],
      flow: ['바탕처리(녹·유분 제거)', '재료 반입검사', '시공(공법별)', '두께·비중 측정', '판정', '보수(덧뿜칠·재시공)'] },
    { h: '공법별 검사 기준', tbl: { head: ['공법', '시공 중', '시공 후'], rows: [
      ['[[미장공법]]', '{{5㎡당 1개소}} 단위로 두께 확인', '층마다 또는 바닥면적 [[1,500㎡마다]](KCS 14)·{{500㎡마다}}(KCS 41) 부위별 1회, 1회 {{5개소}}'],
      ['[[뿜칠공법]]', '{{5㎡당 1개소}} 핀으로 두께 확인', '[[코어 채취]]로 두께·비중 측정, [[1,500㎡마다]](KCS 41: 500㎡) 부위별 1회({{5개소}})'],
      ['조적·붙임·멤브레인', '재료 반입 시 [[두께·비중]] 확인', '[[1,500㎡마다]](KCS 41: 500㎡) 부위별 1회({{3개소}})'],
      ['[[내화도료]]', '습도 {{85% 이하}}, 풍속 {{5m/s 이하}}, 5~40℃', '건조도막 두께(막후계) 층마다 또는 {{500㎡마다}} 부위별 1회({{3개소}})·부착성 시험']] },
      ul2: ['연면적 {{1,500㎡ 미만}}(KCS 41: 500㎡ 미만) 건물은 {{2회 이상}} 측정 — 적용 시방서(KCS 14 강구조 / KCS 41 건축)에 따라 로트 상이', '불합격 시 [[덧뿜칠]] 또는 재시공하여 보수'] },
    { h: '현장관리 항목 및 시공 시 유의사항', ul: [
      '바탕: 강재면 녹·유분·먼지 제거, 방청도장과 내화피복재 부착성 확인',
      '[[뿜칠공법]]: 시공면과 노즐 각도 {{90°}} 원칙(70° 이하 금지)·노즐 거리 {{0.5m}} 내외, 1회 뿜칠두께 {{20mm}} 이하(문헌 30mm, 초과 시 2회 뿜칠), 기온 {{4℃}} 이상에서 시공',
      '성형판 붙임: 연결철물 {{500~600mm}}마다 설치, 줄눈부 내화 실링',
      '[[내화도료]]: 하도 완전건조 후 중·상도, 설계 도막두께 준수',
      '시공 후 설비·전기 공사에 의한 피복 탈락 보수, 양생 중 진동·충격·우수 방지' ] },
    { h: '개선방안', ul: [
      '초음파·전자식 두께측정기로 비파괴 전수 측정 확대',
      '공장 선시공 내화도료(Shop Coating)로 현장 공정·품질 편차 감소',
      'BIM 부재별 내화시간·두께 데이터 연계 검측 관리' ] }
  ],
  effect: '화재 시 강재의 온도상승과 강도저하를 억제하여 소요 내화시간 동안 구조 안전성을 확보하고 인명 피난시간을 보장한다.',
  mnemo: '검사 = 오·천오백·오(삼) (5㎡당 1개소·1,500㎡마다(건축 500)·5개/3개) / 공법 = 도습건합',
  img: [],
  src: '디테일용어300 No.169·170 · 한솔 시크릿 마법지 강구조(내화피복: 도·습·건·합) · KCS 14 31 50 · KCS 41 · 기술지침 6.강구조 p076~077·p027~028(로트: KCS 14 1,500㎡ / KCS 41 500㎡ — 원문 연필 첨삭 500은 KCS 41 기준; 뿜칠 1회 두께 20mm(p027)·30mm(p077) 문헌별 상이; 기온 4℃↑ p077)'
}
]);
