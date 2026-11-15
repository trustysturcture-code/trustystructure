// 디테일원 용어250 그룹 b (26~40) 말뚝·기초·부력·Underpinning — gen_dw_b.js 생성 / rv_b/patch_b.js 검토·det 추가
window.DW = Object.assign(window.DW || {}, {
26: {
  title: '말뚝기초의 부마찰력(Negative Friction)',
  cat: '기초',
  key: ['부마찰력', '중립점', '압밀침하', '연약 점토층', '상재하중(성토)', '지하수위 저하', 'SL Pile', '이중관(Sleeve)'],
  www: { what: '연약층의 [[압밀침하]]가 말뚝 침하보다 커서 [[중립점]] 상부 말뚝 주면에 하향으로 작용하는 [[부마찰력]]', why: '말뚝 축력 증가로 [[지지력 감소]]·말뚝 파손 및 구조물 [[부등침하]]·균열 발생', how: '성토·지하수위 저하 → 연약층 압밀 → 지반침하 > 말뚝침하 → 하향 마찰(Pn) → [[SL Pile]]·이중관·Preloading 으로 저감' },
  tag: '현상·원인·대책',
  def: '말뚝 주변 [[연약 점토층]]이 성토·지하수위 저하로 [[압밀침하]]하여 지반이 말뚝보다 더 침하할 때, [[중립점]] 상부 말뚝 주면에 아래로 작용하는 마찰력({{중립점 깊이 약 0.8~1.0H}})',
  wwh: ['하향 주면마찰', '지지력 감소 방지', '역청 Slip Layer'],
  figT: '부마찰력의 발생원리(중립점) 및 대책',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="24" x2="40" y2="50" class="ar"/><line x1="70" y1="24" x2="70" y2="50" class="ar"/><line x1="100" y1="24" x2="100" y2="50" class="ar"/><text x="110" y="40" class="s">성토하중</text><rect x="20" y="52" width="400" height="26" class="soil"/><text x="26" y="70" class="s">성토층</text><rect x="20" y="78" width="400" height="132" class="soil"/><text x="26" y="100" class="s">연약 점토층</text><text x="26" y="116" class="s">(압밀 진행)</text><rect x="20" y="210" width="400" height="80" class="bx2"/><text x="26" y="240" class="s">지지층</text><rect x="150" y="40" width="20" height="210" class="conc"/><line x1="140" y1="90" x2="140" y2="110" class="ar"/><line x1="140" y1="120" x2="140" y2="140" class="ar"/><line x1="140" y1="146" x2="140" y2="166" class="ar"/><line x1="180" y1="90" x2="180" y2="110" class="ar"/><line x1="180" y1="120" x2="180" y2="140" class="ar"/><line x1="180" y1="146" x2="180" y2="166" class="ar"/><text x="188" y="124" class="r">부마찰력</text><text x="188" y="140" class="s">(하향 Pn)</text><line x1="20" y1="173" x2="400" y2="173" class="rd dash"/><text x="188" y="168" class="r">중립점</text><line x1="140" y1="200" x2="140" y2="184" class="ar"/><line x1="140" y1="240" x2="140" y2="224" class="ar"/><line x1="180" y1="200" x2="180" y2="184" class="ar"/><line x1="180" y1="240" x2="180" y2="224" class="ar"/><text x="188" y="222" class="bl">정마찰력</text><line x1="160" y1="280" x2="160" y2="254" class="ar"/><text x="170" y="282" class="s">선단지지력</text><line x1="250" y1="80" x2="250" y2="255" class="ln2"/><line x1="250" y1="80" x2="405" y2="80" class="ln2"/><text x="330" y="96" class="s">침하량</text><line x1="390" y1="80" x2="280" y2="250" class="bl"/><line x1="330" y1="80" x2="330" y2="250" class="rd"/><circle cx="330" cy="173" r="4" class="rf"/><text x="262" y="268" class="s">지반침하</text><text x="326" y="268" class="s">말뚝침하</text><line x1="160" y1="40" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">하향력 Pn → 축력 증가</text><line x1="330" y1="173" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">중립점 0.8H~1.0H</text><line x1="306" y1="210" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">지반침하 > 말뚝침하</text><line x1="140" y1="100" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 연약층 압밀침하 > 말뚝침하</text><line x1="160" y1="173" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 중립점 상부 하향 마찰</text><line x1="70" y1="50" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 성토·지하수위 저하</text><line x1="160" y1="250" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 말뚝 지지력 감소·파손</text><line x1="100" y1="210" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 부등침하·구조물 균열</text><line x1="150" y1="130" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ SL Pile 역청 Coating</text><line x1="170" y1="70" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 이중관(Sleeve)·Preloading</text></svg>',
  subs: [
    { h: '발생원인·특징', pts: ['연약층 [[압밀침하]] > 말뚝침하', '[[중립점]] 상부 하향 마찰', '성토·[[지하수위 저하]]'] },
    { h: '피해·시공 시 유의사항', pts: ['말뚝 [[지지력 감소]]·파손', '[[부등침하]]·구조물 균열'] },
    { h: '대책', pts: ['[[SL Pile]] 역청 Coating', '이중관(Sleeve)·Preloading'] }
  ],
  msg: '지반이 말뚝보다 더 가라앉으면 마찰은 하중이 된다 — 중립점 상부를 미끄럽게(SL)',
  mnemo: '압중성 지파부 SL이중 (압밀·중립점·성토 / 지지력·파손·부등침하 / SL·이중관)',
  rel: ['중립점', '압밀침하', 'SL Pile', 'Preloading', '말뚝 지지력', '군말뚝'],
  src: '근거: 디테일용어300 코어 No.37(p048: 정의·정/부마찰력 개념·Qu = Qp + Qfs − Qnf·발생원인·방지대책) / 마법지 3기초 기초의 분류-기능(부마찰력) / 건축기초 구조설계기준(KDS 41 19) 부마찰력 / 합격답안 3.기초공사 PDF p13~17(부동침하 원인) / 중립점 0.8~1.0H 는 통상 교재값(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '연약지반에서 말뚝 주변 지반이 [[압밀침하]]하여 말뚝보다 더 침하할 때 말뚝 주면에 [[하향]]으로 작용하는 전단응력(마찰력)으로, 지표면 부근에서 가장 크고 선단으로 갈수록 작아져 [[중립점]]에서 0이 되며 말뚝 [[축력 증가]]·[[순지지력 감소]]를 유발한다.'
      },
      {
        h: '원리 및 도해 — 발생 Mechanism',
        fig: 'MAIN',
        flow: ['성토·지하수위 저하', '연약 점토층 압밀', '지반침하 > 말뚝침하', '중립점 상부 하향 마찰(Qnf)', '축력 증가·지지력 감소', '부등침하·말뚝 파손'],
        ul: ['정마찰력: 말뚝침하 > 지반침하 → 상향 저항력', '부마찰력: 지반침하 > 말뚝침하 → 하향 하중', '{{Qu = Qp + Qfs − Qnf}} (Qp 선단저항, Qfs 정마찰력, Qnf 부마찰력)']
      },
      {
        h: '정·부마찰력 비교 및 발생 원인',
        tbl: [
          {
            head: ['구분', '정마찰력', '부마찰력'],
            rows: [
              ['상대변위', '말뚝침하 > 지반침하', '지반침하 > 말뚝침하'],
              ['작용방향', '상향(저항력)', '하향(하중)'],
              ['지지력식', 'Qu = Qp + Qf', 'Qu = Qp + Qfs − Qnf'],
              ['영향', '지지력에 기여', '마찰력 역전 → 순지지력 감소·축력 증가']
            ]
          },
          {
            head: ['구분', '발생 원인'],
            rows: [
              ['지반·수리적 요인', '연약 점성토의 자중 압밀 / 과도한 배수 및 지하수위 저하'],
              ['시공적 요인', '성토 등 상재하중 작용 / 사질토의 동적다짐(진동)']
            ]
          }
        ]
      },
      {
        h: '관리기준 (설계·검토)',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['지지력 산정', 'Qu = Qp + Qfs − Qnf (부마찰력은 하중으로 고려)', '디테일용어 No.37'],
            ['중립점 깊이', '마찰말뚝 약 0.8H, 선단지지말뚝 약 1.0H (H: 압밀층 두께)', '교재 통상값 — 확인 필요'],
            ['부마찰력 검토', '말뚝 구조 내력·침하 검토에 반영', 'KDS 41 19 00 — 확인 필요']
          ]
        }
      },
      {
        h: '상세도 — 축력 분포 및 SL Pile',
        fig: {
          svg: '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="50" width="140" height="190" class="soil"/><rect x="64" y="50" width="6" height="100" class="bx2"/><rect x="96" y="50" width="6" height="100" class="bx2"/><rect x="70" y="40" width="26" height="200" class="conc"/><line x1="83" y1="14" x2="83" y2="36" class="ar"/><text x="92" y="28" class="b">P</text><line x1="20" y1="150" x2="410" y2="150" class="rd dash"/><text x="108" y="144" class="r">중립점</text><line x1="220" y1="40" x2="220" y2="240" class="ln"/><line x1="220" y1="40" x2="410" y2="40" class="ln"/><text x="360" y="56" class="s">축력 N</text><text x="226" y="256" class="s">깊이 z</text><polyline points="270,40 380,150 320,235" fill="none" class="rd"/><polyline points="270,40 250,235" fill="none" class="bl dash"/><circle cx="380" cy="150" r="4" class="rf"/><text x="20" y="262" class="r">Qu = Qp + Qfs − Qnf</text><line x1="83" y1="40" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">말뚝머리 하중 P</text><line x1="67" y1="100" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="bl">SL층: 중립점 상부 역청 도포</text><line x1="380" y1="150" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">중립점 = 축력 최대 위치</text><line x1="330" y1="100" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="r">Pmax = P + Pn(부마찰력)</text><line x1="258" y1="160" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="s">청 점선: 부마찰 없을 때 축력</text><line x1="40" y1="200" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="s">중립점 하부: 정마찰력(상향)</text><line x1="83" y1="238" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="b">선단지지력 Qp</text><line x1="150" y1="258" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="r">Qnf 발생 → 순지지력 감소</text></svg>',
          cap: '[상세] 중립점에서 축력 최대(P + Pn) — 중립점 상부만 역청 SL층 도포'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사로 연약층 두께·잔류 압밀량·지하수위 변동 확인 → 부마찰력 설계 반영', '[전] 성토·지하수위 저하 계획 검토, 가능하면 [[Preloading]]으로 압밀 완료 후 말뚝 시공', '[중] SL Pile 역청재 도포 범위(중립점 상부)·두께 확인, 운반·항타 중 역청층 박리·손상 방지', '[중] 말뚝 주변 추가 성토·진동다짐 최소화, 군말뚝 간격 확보', '[후] 지반침하·말뚝 침하 계측, 지하수위 관리 → 부등침하 조기 발견']
      },
      {
        h: '방지대책 / 개선방안',
        ul: ['지지력 증대: 선단 확대·지지층 근입 증가, 말뚝 본수 증가', '부주면마찰력 감소: [[SL Pile]](역청 Slip Layer)·[[이중관(Sleeve)]]·Bentonite 주입', '지반 개량: Preloading·Sand Drain 으로 사전 압밀', '설계 변경: 부마찰력을 하중으로 고려, 말뚝 단면·구조 보강', '중립점 상부 말뚝 표면적 축소(소구경·Taper)·군말뚝 효과 활용']
      }
    ]
  }
},
27: {
  title: 'Top base Pile 공법',
  cat: '기초',
  key: ['팽이기초(Top base)', '연약지반', '응력분산', '쇄석 채움', '연결철근', '지지력 증대', '부등침하 저감', '무진동·무소음'],
  www: { what: '연약지반 위에 [[팽이형 콘크리트 블록(Top base)]]을 격자로 배열하고 [[쇄석 채움]]·연결철근으로 일체화한 얕은 기초 보강공법', why: '하중 [[응력분산]]으로 [[지지력 증대]]·[[부등침하 저감]], 말뚝 대비 무진동·공기단축', how: '지반 고르기 → 위치 측량 → [[Top base]] 안착 → [[쇄석 충전]]·다짐 → 연결철근 결속 → 기초 Con\'c 타설' },
  tag: '공법·지반·기초',
  def: '[[팽이 모양]]의 콘크리트 말뚝(Top base)을 연약지반 위에 연속 설치하고 사이를 [[쇄석]]으로 채운 뒤 [[연결철근]]을 결속·타설하여 일체화하고, 원추부 {{45°}} 경사면으로 하중을 분산시키는 [[얕은기초 보강공법]]',
  wwh: ['팽이형 블록 배열', '응력분산·침하저감', '쇄석+연결철근'],
  figT: 'Top base 공법의 응력분산 원리 및 시공순서',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="24" x2="80" y2="48" class="ar"/><line x1="150" y1="24" x2="150" y2="48" class="ar"/><line x1="220" y1="24" x2="220" y2="48" class="ar"/><line x1="290" y1="24" x2="290" y2="48" class="ar"/><text x="304" y="40" class="s">상부하중</text><rect x="40" y="50" width="320" height="24" class="conc"/><text x="200" y="67" text-anchor="middle" class="s">기초 Slab</text><rect x="20" y="74" width="400" height="220" class="soil"/><rect x="42" y="80" width="56" height="16" class="bx"/><polygon points="42,96 98,96 70,140" class="bx"/><line x1="70" y1="140" x2="70" y2="152" class="ln"/><rect x="102" y="80" width="56" height="16" class="bx"/><polygon points="102,96 158,96 130,140" class="bx"/><line x1="130" y1="140" x2="130" y2="152" class="ln"/><rect x="162" y="80" width="56" height="16" class="bx"/><polygon points="162,96 218,96 190,140" class="bx"/><line x1="190" y1="140" x2="190" y2="152" class="ln"/><rect x="222" y="80" width="56" height="16" class="bx"/><polygon points="222,96 278,96 250,140" class="bx"/><line x1="250" y1="140" x2="250" y2="152" class="ln"/><rect x="282" y="80" width="56" height="16" class="bx"/><polygon points="282,96 338,96 310,140" class="bx"/><line x1="310" y1="140" x2="310" y2="152" class="ln"/><polyline points="42,88 338,88" fill="none" class="rd"/><polyline points="60,152 30,230" fill="none" class="ln2 dash"/><polyline points="80,152 110,230" fill="none" class="ln2 dash"/><polyline points="180,152 150,230" fill="none" class="ln2 dash"/><polyline points="200,152 230,230" fill="none" class="ln2 dash"/><polyline points="300,152 270,230" fill="none" class="ln2 dash"/><polyline points="320,152 350,230" fill="none" class="ln2 dash"/><line x1="40" y1="230" x2="360" y2="230" class="bl"/><text x="150" y="248" class="s">분산된 지중응력(균등)</text><text x="30" y="120" class="s">쇄석</text><text x="30" y="280" class="s">연약지반(점토·매립층)</text><line x1="100" y1="88" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="r">연결철근(상·하 일체화)</text><line x1="190" y1="120" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">팽이부(원추부)+다리부</text><text x="444" y="74" class="s">고르기→측량→안착→쇄석→철근</text><line x1="250" y1="90" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 팽이형 Top base 기성품</text><line x1="130" y1="230" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 응력분산·지지력 증대</text><line x1="310" y1="152" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 부등침하 저감·무진동</text><line x1="160" y1="100" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 쇄석 채움·다짐 철저</text><line x1="40" y1="88" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 연결철근 Level 관리</text><line x1="60" y1="270" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 연약지반 얕은기초 대안</text><line x1="340" y1="60" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 공기단축·경제성 확보</text></svg>',
  subs: [
    { h: '특징', pts: ['팽이형 [[Top base]] 기성품', '[[응력분산]]·지지력 증대', '[[부등침하 저감]]·무진동'] },
    { h: '시공 시 유의사항', pts: ['[[쇄석 채움]]·다짐 철저', '연결철근 Level 관리'] },
    { h: '개선방안', pts: ['연약지반 [[얕은기초]] 대안', '공기단축·경제성 확보'] }
  ],
  msg: '팽이가 하중을 넓게 펴 준다 — 쇄석 채움과 연결철근이 일체성의 핵심',
  mnemo: '팽응부 쇄연 얕공 (팽이·응력분산·부등침하 / 쇄석·연결철근 / 얕은기초·공기)',
  rel: ['지반개량', '얕은기초', '부등침하', 'Floating Foundation', '말뚝기초'],
  src: '근거: 디테일용어300 코어 No.38(p049: 정의·원추부 45° 응력분산·기성재형/현장타설형 Process·관리사항) / 마법지 3기초 기초의 분류-형상(Top Base) / 블록 규격·지지력 증대율은 제조사별 상이(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '연약지반 위에 [[팽이 모양]] 콘크리트 말뚝(Top base)을 연속 설치하고 말뚝 간 공간을 [[쇄석]]으로 채운 뒤 상부 [[연결철근]]을 결속하고 Concrete를 부어 넣어 기초를 형성하는 [[얕은기초 보강공법]]으로, 원추부 {{45°}} 경사면이 연직하중을 수평·수직 분력으로 분산시켜 [[침하량]]을 저감한다.'
      },
      {
        h: '원리 및 도해 — 지지력 증대 원리',
        fig: 'MAIN',
        flow: ['연직하중 작용', '원추부 45° 경사면', '수평·수직 분력 분산', '쇄석 구속·전단저항 증대', '지지력 증대', '침하 억제'],
        ul: ['팽이부(원추부) + 말뚝부(다리부) 구성, 쇄석이 다리부 사이를 구속', '기초 평면 규격 Bk × Lk (Breadth·Length of Foundation) 에 맞추어 배열']
      },
      {
        h: '시공 Process 및 특징',
        tbl: {
          head: ['구분', '기성재형', '현장타설형'],
          rows: [
            ['Process', '지반 고르기 → 위치 측량 → 말뚝 안착 → 쇄석 충전 → 연결철근 결속', '몰드(거푸집) 설치 → 상부 연결철근 → Con\'c 타설 → 쇄석 포설'],
            ['특징', '품질 균일·공기 단축', '현장 여건 대응·운반 불필요'],
            ['공통', '무진동·무소음, 연약지반 얕은기초 대안', '응력분산으로 부등침하 저감']
          ]
        }
      },
      {
        h: '관리기준 (시공관리 사항)',
        tbl: {
          head: ['항목', '관리 내용', '근거'],
          rows: [
            ['지반 하부층 정리', '평탄성 확보 및 지내력 확인', '디테일용어 No.38'],
            ['파일 배치·수직도', '정위치 배열·수직 유지', '디테일용어 No.38'],
            ['쇄석 다짐', '밀실 채움 및 충분한 진동다짐', '디테일용어 No.38'],
            ['시공 높이·마감', '시공 Level 관리', '디테일용어 No.38'],
            ['블록 규격·지지력 증대율', '제조사·설계도서 따름', '확인 필요']
          ]
        }
      },
      {
        h: '상세도 — 원추부 응력분산',
        fig: {
          svg: '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="76" width="400" height="174" class="soil"/><rect x="40" y="30" width="360" height="22" class="conc"/><text x="80" y="46" class="s">기초 Slab</text><rect x="50" y="52" width="100" height="24" class="bx"/><polygon points="50,76 150,76 100,126" class="bx"/><rect x="92" y="126" width="16" height="40" class="bx"/><rect x="170" y="52" width="100" height="24" class="bx"/><polygon points="170,76 270,76 220,126" class="bx"/><rect x="212" y="126" width="16" height="40" class="bx"/><rect x="290" y="52" width="100" height="24" class="bx"/><polygon points="290,76 390,76 340,126" class="bx"/><rect x="332" y="126" width="16" height="40" class="bx"/><circle cx="132" cy="92" r="3" class="bx2"/><circle cx="150" cy="100" r="3" class="bx2"/><circle cx="168" cy="92" r="3" class="bx2"/><circle cx="158" cy="116" r="3" class="bx2"/><circle cx="142" cy="112" r="3" class="bx2"/><circle cx="252" cy="92" r="3" class="bx2"/><circle cx="270" cy="100" r="3" class="bx2"/><circle cx="288" cy="92" r="3" class="bx2"/><circle cx="278" cy="116" r="3" class="bx2"/><circle cx="262" cy="112" r="3" class="bx2"/><line x1="50" y1="64" x2="390" y2="64" class="rd"/><line x1="120" y1="6" x2="120" y2="26" class="ar"/><line x1="220" y1="6" x2="220" y2="26" class="ar"/><line x1="320" y1="6" x2="320" y2="26" class="ar"/><text x="334" y="20" class="s">연직하중</text><line x1="245" y1="101" x2="272" y2="128" class="ar"/><line x1="245" y1="101" x2="245" y2="132" class="ar"/><line x1="245" y1="101" x2="268" y2="101" class="ar"/><text x="284" y="112" class="r">45°</text><polyline points="212,166 172,236" fill="none" class="ln2 dash"/><polyline points="228,166 268,236" fill="none" class="ln2 dash"/><text x="220" y="248" text-anchor="middle" class="s">응력 분산</text><line x1="200" y1="64" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="bl">연결철근: 상부 결속·일체화</text><line x1="262" y1="84" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">원추부(팽이부) 45° 경사면</text><line x1="272" y1="128" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">연직하중 → 수평·수직 분력</text><line x1="220" y1="150" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="b">다리부(말뚝부): 지반 관입</text><line x1="158" y1="116" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="b">쇄석 충전·진동다짐(구속)</text><line x1="250" y1="220" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="r">응력 분산 → 침하량 억제</text><line x1="300" y1="41" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="s">기초 Slab Con\'c 일체 타설</text><line x1="30" y1="230" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="s">연약지반(점토·매립층)</text></svg>',
          cap: '[상세] 45° 경사면 분력 + 쇄석 구속 → 하중 분산·침하 억제'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사로 연약층 두께·지내력 확인, 얕은 연약층 적용성 검토', '[전] 지반 하부층 정리 → 평탄성 확보·지지력 확인', '[중] 정위치 배열·수직도 관리, 블록 간격 균일', '[중] 쇄석 밀실 충전·충분한 진동다짐 (공극 시 구속·분산 효과 저하)', '[중] 연결철근 결속·Level 관리, 피복 확보', '[후] 기초 Con\'c 양생 관리, 침하 계측']
      },
      { h: '개선방안', ul: ['연약층이 깊으면 Preloading·말뚝기초 병용 검토', '현장타설형 몰드 표준화 → 품질 균일', '평판재하시험으로 지지력 증대 효과 확인', '재생 쇄석 활용 → 경제성·친환경'] }
    ]
  }
},
28: {
  title: 'DRA(Double Rod Auger) SIP+Casing',
  cat: '기초',
  key: ['DRA', 'Double Rod Auger', '역회전', 'Casing', 'SIP', '공벽붕괴 방지', '근고정액', '경타', '저소음·저진동'],
  www: { what: '[[내측 Auger]]와 [[외측 Casing]]을 서로 [[역회전]]시키며 동시 천공하는 매입말뚝(SIP+Casing) 공법', why: '자갈·매립층 [[공벽붕괴]] 방지, 수직도 확보, 타격공법 대비 소음·진동 저감', how: '말뚝 중심측량 → DRA 동시 천공(지지층) → 근고정액(시멘트 페이스트) 주입 → 말뚝 삽입·Casing 인발 → 안착·[[경타]] → 두부정리' },
  tag: '공법·장비·매입말뚝',
  def: '내측 Screw Auger와 외측 [[Casing Screw]]를 각각 독립된 두 Rod로 [[역방향 회전]]시켜 동시 천공 후 [[근고정액]]을 주입하고 기성말뚝을 삽입·[[경타]]하는 SIP 계열 [[매입말뚝 공법]]',
  wwh: ['2중 Rod 역회전', '공벽붕괴 방지', 'Casing 동시천공'],
  figT: 'DRA 공법의 천공원리(역회전) 및 시공순서',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="22" width="80" height="22" class="bx2"/><text x="190" y="37" text-anchor="middle" class="s">구동부(2축)</text><rect x="20" y="70" width="400" height="100" class="soil"/><text x="26" y="88" class="s">매립·자갈층</text><rect x="20" y="170" width="400" height="70" class="soil"/><text x="26" y="188" class="s">풍화토</text><rect x="20" y="240" width="400" height="60" class="bx2"/><text x="26" y="258" class="s">풍화암(지지층)</text><line x1="20" y1="70" x2="420" y2="70" class="ln"/><text x="26" y="64" class="s">GL</text><rect x="160" y="44" width="60" height="210" class="bx"/><rect x="180" y="44" width="20" height="226" class="conc"/><polyline points="180,80 200,92 180,104 200,116 180,128 200,140 180,152 200,164 180,176 200,188 180,200 200,212 180,224 200,236 180,248" fill="none" class="ln2"/><polyline points="160,90 150,98" fill="none" class="ln"/><polyline points="220,90 230,98" fill="none" class="ln"/><line x1="120" y1="50" x2="150" y2="50" class="ar"/><text x="60" y="54" class="r">외측 정회전</text><line x1="262" y1="50" x2="232" y2="50" class="ar"/><text x="266" y="54" class="bl">내측 역회전</text><polygon points="180,270 200,270 190,284" class="bx2"/><rect x="290" y="110" width="100" height="22" class="bx"/><text x="340" y="125" text-anchor="middle" class="s">① 동시천공</text><rect x="290" y="140" width="100" height="22" class="bx"/><text x="340" y="155" text-anchor="middle" class="s">② 근고정액 주입</text><rect x="290" y="170" width="100" height="22" class="bx"/><text x="340" y="185" text-anchor="middle" class="s">③ 삽입·Casing 인발</text><rect x="290" y="200" width="100" height="22" class="bx"/><text x="340" y="215" text-anchor="middle" class="s">④ 경타·두부정리</text><line x1="340" y1="132" x2="340" y2="140" class="ar"/><line x1="340" y1="162" x2="340" y2="170" class="ar"/><line x1="340" y1="192" x2="340" y2="200" class="ar"/><text x="26" y="318" class="s">자갈·전석층에서도 수직도 확보</text><line x1="220" y1="120" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">외측 Casing Screw</text><line x1="200" y1="150" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">내측 Screw Auger</text><line x1="190" y1="284" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">지지층 확인 후 천공 종료</text><line x1="190" y1="50" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 내·외 Rod 역회전 동시천공</text><line x1="160" y1="90" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ Casing 공벽붕괴 방지</text><line x1="26" y1="300" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 수직도·저소음 저진동</text><line x1="390" y1="151" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 근고정액 배합·주입량</text><line x1="390" y1="211" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 최종 경타·지지층 확인</text><line x1="230" y1="30" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 장비 자동화·천공 기록</text><line x1="390" y1="181" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ PDA 동재하시험 확인</text></svg>',
  subs: [
    { h: '특징', pts: ['내·외 Rod [[역회전]] 동시천공', '[[Casing]] 공벽붕괴 방지', '수직도·저소음 저진동'] },
    { h: '시공 시 유의사항', pts: ['[[근고정액]] 배합·주입량', '최종 [[경타]]·지지층 확인'] },
    { h: '개선방안', pts: ['장비 [[자동화]]·천공 기록', '[[PDA]] 동재하시험 확인'] }
  ],
  msg: '두 Rod가 서로 반대로 돌며 Casing으로 구멍을 지킨다 — 자갈층 SIP의 해법',
  mnemo: '역케수 근경 자PDA (역회전·Casing·수직도 / 근고정액·경타 / 자동화·PDA)',
  rel: ['SIP 공법', 'PHC 말뚝', '매입말뚝', '근고정액', '동재하시험(PDA)'],
  src: '근거: 디테일용어300 코어 No.39(p050: 정의·Process·적용대상·N값 50/7 근입·시멘트 페이스트 W/C 83%·Wire Rope 수직도) / 마법지 3기초 기성P Preboring(SIP, DRA) / KCS 11 50 15 기성말뚝 / 합격답안 3.기초공사 PDF p41~44',
  det: {
    secs: [
      {
        h: '정의',
        def: '내부 [[Screw Auger]]와 외부 [[Casing]]이 서로 [[역회전]]하며 천공·배토하고 [[시멘트 페이스트]](근고정액) 주입 후 기성말뚝을 삽입·[[경타]]하는 SIP + Casing 공법으로, Casing이 연약층·자갈층 [[공벽붕괴]]를 막아 지지층까지 안전하게 말뚝을 설치한다.'
      },
      {
        h: '원리 및 도해 — 시공 Process',
        fig: 'MAIN',
        flow: ['말뚝 중심 측량', 'DRA 동시 천공(지지층)', '시멘트 페이스트 주입', '말뚝 삽입·Casing 인발', '안착·경타', '두부정리·PDA'],
        ul: ['내측 Auger 배토 + 외측 Casing 공벽보호 → 자갈·전석층에서도 수직도 확보']
      },
      {
        h: '특징 및 적용대상',
        tbl: {
          head: ['구분', 'SIP(단일 Auger)', 'DRA(SIP + Casing)'],
          rows: [
            ['천공', 'Auger 단독', 'Auger·Casing 역회전 동시 천공'],
            ['공벽', '무보호 → 붕괴 우려', 'Casing 보호'],
            ['적용 지반', '균질 토사층', '자갈·전석·매립층'],
            ['수직도', '상대적 불리', '유리']
          ]
        },
        ul2: ['적용: 항타 소음·진동 민원 우려 지역', '적용: 설계심도까지 직타로 {{4m 이상}} 관입이 어려운 경우', '적용: 지층 중간 자갈·전석층으로 직타공법이 불가한 경우']
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['지지층 근입', 'N값 {{50/7}} 풍화암까지 근입 확인', '디테일용어 No.39'],
            ['시멘트 페이스트', '배합비 W/C {{83%}} (물 730kg, 시멘트 880kg/m³)', '디테일용어 No.39'],
            ['수직도', 'Wire Rope 고정지지 방식으로 확보', '디테일용어 No.39'],
            ['본항타', '시항타·재하시험 결과 확인 후 실시', '디테일용어 No.39'],
            ['위치·경사 허용오차', 'KCS 11 50 15 기성말뚝', '수치 확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 시항타 결과·재하시험 확인 후 본항타, 자갈·전석층 위치 확인', '[전] 장비 거치 지반 지지력 확보 → 장비 전도 방지', '[중] Wire Rope 고정지지로 수직도 확보, 천공 깊이·N값 50/7 지지층 도달 확인', '[중] 시멘트 페이스트 배합·주입량 관리, Casing 인발 속도 관리 → 공벽 교란 방지', '[중] 최종 경타 낙하고 관리 → 두부파손 방지', '[후] 두부정리, 동재하시험(PDA)으로 지지력 확인']
      },
      { h: '개선방안', ul: ['천공 깊이·전류값·주입량 자동기록(디지털 천공관리)', 'PDA·정재하시험 병행 지지력 검증', '저소음 장비·방음 Cover'] }
    ]
  }
},
29: {
  title: '시험말뚝박기(Pile Driving Test)',
  cat: '기초',
  key: ['시험말뚝', '시항타', '관입량', '최종 타격기준', '말뚝길이 결정', '장비 적정성', '동재하시험(PDA)', 'Rebound Check'],
  www: { what: '본 말뚝 시공 전 대표 위치에서 실제 장비로 박아 [[말뚝길이]]·[[관입량]]·[[최종 타격기준]]을 정하는 시험시공', why: '지반조건·장비·Hammer 적정성 확인으로 말뚝 파손·지지력 부족·길이 과부족 방지', how: '위치 선정(대표 지반) → 시항타 연속 타격 → 관입량·Rebound 측정 → [[동재하시험(PDA)]] → 시공기준 결정' },
  tag: '시험·기준·관리',
  def: '본 공사 전 지반을 대표하는 위치에서 본 말뚝과 같은 장비·말뚝으로 [[시항타]]하여 [[EOID]]·[[Restrike]]로 지지력을 확인하고 [[말뚝길이]]·[[관입량]]·Hammer 낙하고 등 [[최종 타격기준]]을 결정하는 시험({{기초면적 1,500m² 2본, 3,000m² 3본}})',
  wwh: ['본공사 전 시항타', '타격기준 결정', '관입량·PDA 측정'],
  figT: '시험말뚝박기의 위치·측정항목 및 판정',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="130" y="20" width="60" height="34" class="bx2"/><text x="160" y="41" text-anchor="middle" class="s">Hammer</text><line x1="160" y1="54" x2="160" y2="66" class="ar"/><rect x="20" y="90" width="400" height="120" class="soil"/><rect x="20" y="210" width="400" height="50" class="bx2"/><line x1="20" y1="90" x2="420" y2="90" class="ln"/><text x="26" y="106" class="s">연약·중간층</text><text x="26" y="228" class="s">지지층</text><rect x="152" y="68" width="16" height="162" class="conc"/><rect x="146" y="80" width="28" height="8" class="bx"/><line x1="176" y1="112" x2="196" y2="112" class="rd"/><text x="200" y="116" class="s">PDA 센서</text><rect x="124" y="76" width="10" height="14" class="bx"/><text x="56" y="84" class="s">Rebound 용지</text><rect x="260" y="70" width="160" height="18" class="bx2"/><text x="340" y="83" text-anchor="middle" class="s">기초면적</text><rect x="260" y="88" width="80" height="18" class="bx"/><rect x="340" y="88" width="80" height="18" class="bx"/><text x="300" y="101" text-anchor="middle" class="s">1,500m² 이하</text><text x="380" y="101" text-anchor="middle" class="r">2본</text><rect x="260" y="106" width="80" height="18" class="bx"/><rect x="340" y="106" width="80" height="18" class="bx"/><text x="300" y="119" text-anchor="middle" class="s">3,000m² 이하</text><text x="380" y="119" text-anchor="middle" class="r">3본</text><rect x="260" y="140" width="150" height="50" class="bx"/><text x="268" y="158" class="s">결정: 말뚝길이·낙하고</text><text x="268" y="176" class="s">타격횟수·최종관입량</text><text x="26" y="290" class="s">시항타 → 관입량 → PDA → 시공기준 확정</text><line x1="160" y1="30" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">Hammer 중량·낙하고 확인</text><line x1="196" y1="112" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">동재하시험 지지력 확인</text><line x1="160" y1="226" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">지지층 관입깊이 확인</text><line x1="150" y1="72" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 본공사 전 시항타</text><line x1="410" y1="165" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 말뚝길이·관입량 결정</text><line x1="140" y1="40" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 장비·Hammer 적정성</text><line x1="60" y1="210" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 지반 대표 위치 선정</text><line x1="168" y1="160" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 연속 타격(중단 금지)</text><line x1="184" y1="112" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 동재하시험 병행</text><line x1="129" y1="82" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 최종 관입량 기준 확정</text></svg>',
  subs: [
    { h: '목적·기준', pts: ['본공사 전 [[시항타]]', '말뚝길이·[[관입량]] 결정', '장비·Hammer 적정성'] },
    { h: '시공 시 유의사항', pts: ['지반 대표 위치 선정', '연속 타격(중단 금지)'] },
    { h: '개선방안', pts: ['[[동재하시험]] 병행', '[[최종 관입량]] 기준 확정'] }
  ],
  msg: '본말뚝은 시험말뚝이 정한 기준으로 박는다 — 길이·낙하고·관입량을 먼저 확정',
  mnemo: '시관장 대연 동최 (시항타·관입량·장비 / 대표위치·연속타격 / 동재하·최종관입량)',
  rel: ['Rebound Check', '동재하시험(PDA)', '정재하시험', '말뚝 두부파손', '최종 관입량'],
  src: '근거: 디테일용어300 코어 No.40(p051: EOID·Restrike, 결정사항, 타입/매입 유의사항) / 합격답안 3.기초공사 PDF p3(시항타 수: 기초면적 1,500m² 2본·3,000m² 3본, 연속항타, 경사 1/100 이하) / KCS 11 50 15 기성말뚝(시험말뚝)',
  det: {
    secs: [
      {
        h: '정의',
        def: '본항타 전에 실제 지반상태에서 말뚝 [[지지력]]을 확인하기 위해 시험적으로 시공하는 말뚝으로, [[EOID]](초기 항타) 시험으로 선단지지력을, 양생 후 [[Restrike]](재항타)로 최종 지지력을 확인하여 말뚝길이·[[최종 관입량]]·Ram 중량·낙하고 등 시공기준을 결정한다.'
      },
      {
        h: '원리 및 도해 — 시험 Process',
        fig: 'MAIN',
        flow: ['대표 위치 선정', '시항타(연속 타격)', '관입량·Rebound 측정', 'EOID 동재하시험', '양생 후 Restrike', '시공기준 확정'],
        ul: ['EOID 초기 선단지지력 → 약 일주일 후 Restrike 최종지지력(선단 + 마찰력)', '결정 사항: 본말뚝 길이·심도, 지지력, 최종 관입량 / 설계 심도 조율·시멘트 밀크 배합비 / Ram 중량·낙하고 관리기준']
      },
      {
        h: '공법별 시험 방법',
        tbl: {
          head: ['구분', '타입말뚝', '매입말뚝'],
          rows: [
            ['시공', '소요 지지력 확보 시까지 항타', '설계 심도까지 천공'],
            ['확인', '말뚝 길이 부족 시 이음 시공', '오거 선단 토사로 지지층 확인'],
            ['마무리', '설계 심도까지 타격', '설계 천공 깊이까지 경타']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['시항타 수', '기초면적 {{1,500m²}} 2본, {{3,000m²}} 3본', '3.기초공사 p3'],
            ['시항타 방법', '약 15m 간격 배치, 중단 없이 연속 항타', '3.기초공사 p3'],
            ['수직도', '경사 {{1/100}} 이하 (Hammer 편타 방지)', '3.기초공사 p3 (KCS 값 확인 필요)'],
            ['지지력 확인', 'EOID ↔ Restrike 값 비교', '디테일용어 No.40'],
            ['위치·본수 상세', '설계도서·KCS 11 50 15', '확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사 결과로 대표 위치 선정, 본공사와 동일 장비·말뚝 사용', '[전] Hammer 중량·낙하고·Cushion 재질 확인', '[중] 중단 없이 연속 항타(중단 시 주면마찰 회복으로 관입저항 증가), 타격횟수·관입량 기록', '[중] 경타 1회 후 Hammer와 두부 수직도 확인', '[후] EOID·Restrike 결과 비교 → 본말뚝 시공기준서 작성·감리 승인']
      },
      { h: '개선방안', ul: ['동재하시험(PDA) 병행으로 지지력 정량 평가', '자동 항타관리 System(PDAM)으로 관입량 기록', '시항타 결과 DB화 → 유사 지반 설계 반영'] }
    ]
  }
},
30: {
  title: 'Rebound check',
  cat: '기초',
  key: ['Rebound Check', '최종 관입량(S)', 'Rebound량(K)', 'Hiley 공식', '동역학적 지지력', '타격 10회 평균', '기준대 고정', 'PDA'],
  www: { what: '최종 타격 시 말뚝머리에 용지를 붙여 [[최종 관입량(S)]]과 [[Rebound량(K)]]을 기록하는 지지력 확인 방법', why: '[[Hiley 공식]] 등 동역학적 공식으로 지지력을 산정하여 과항타·지지력 부족 방지', how: '용지 부착 → 기준대(각재) 고정 → 연필 수평 이동 + 타격 → 관입량·Rebound 측정 → Hiley 공식 지지력 산정' },
  tag: '시험·측정·지지력',
  def: '기성말뚝 최종 타격 시 말뚝 머리에 부착한 용지에 고정 기준대로 궤적을 그어 [[최종 관입량(S)]]과 탄성 [[Rebound량(K)]]을 측정하고 [[Hiley 공식]]으로 [[동역학적 지지력]]을 확인하는 방법',
  wwh: ['S·K 궤적 측정', '지지력 확인', 'Hiley 공식 산정'],
  figT: 'Rebound Check 측정원리 및 지지력 산정',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="30" width="60" height="30" class="bx2"/><text x="100" y="50" text-anchor="middle" class="s">Hammer</text><line x1="100" y1="60" x2="100" y2="74" class="ar"/><rect x="84" y="76" width="32" height="220" class="conc"/><rect x="116" y="120" width="24" height="70" class="bx"/><line x1="40" y1="160" x2="200" y2="160" class="ln"/><rect x="194" y="150" width="12" height="140" class="bx2"/><text x="150" y="306" text-anchor="middle" class="s">고정 기준대(각재)</text><line x1="30" y1="296" x2="230" y2="296" class="ln2"/><polyline points="250,100 300,100 300,150 312,140 324,150 336,140 348,150 348,180 410,180" fill="none" class="rd"/><line x1="286" y1="100" x2="286" y2="150" class="ln2"/><text x="282" y="130" text-anchor="end" class="r">S</text><line x1="360" y1="140" x2="360" y2="150" class="ln2"/><text x="366" y="136" class="r">K</text><text x="250" y="92" class="s">연필 궤적(타격 순간)</text><text x="250" y="206" class="s">S: 관입량 / K: Rebound</text><rect x="240" y="220" width="180" height="50" class="bx"/><text x="250" y="240" class="r">Ru = e·W·H/(S+K/2)</text><text x="250" y="260" class="s">Ra = Ru / 3</text><line x1="128" y1="130" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">용지 부착(말뚝 측면)</text><line x1="100" y1="70" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">W: Hammer중량, H: 낙하고</text><line x1="330" y1="245" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">Hiley 동역학 공식</text><line x1="300" y1="125" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 최종 관입량(S) 측정</text><line x1="360" y1="145" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ Rebound량(K) 측정</text><line x1="260" y1="240" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ Hiley 공식 지지력 산정</text><line x1="200" y1="200" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 기준대 고정·흔들림 금지</text><line x1="100" y1="76" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 타격 10회 평균값 적용</text><line x1="116" y1="180" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ PDA 동재하시험 병행</text><line x1="380" y1="180" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 디지털 관입량 계측</text></svg>',
  subs: [
    { h: '측정 항목', pts: ['[[최종 관입량]](S) 측정', '[[Rebound]]량(K) 측정', 'Hiley 공식 [[지지력]] 산정'] },
    { h: '측정 시 유의사항', pts: ['기준대 고정·흔들림 금지', '타격 10회 평균값 적용'] },
    { h: '개선방안', pts: ['[[PDA]] 동재하시험 병행', '디지털 관입량 계측'] }
  ],
  msg: '종이 한 장의 궤적이 지지력을 말한다 — S와 K를 정확히',
  mnemo: '관리하 고평 PD디 (관입량·Rebound·Hiley / 고정·평균 / PDA·디지털)',
  rel: ['시험말뚝박기', 'Hiley 공식', '동재하시험(PDA)', '최종 관입량', '말뚝 두부파손'],
  src: '근거: 디테일용어300 코어 No.41(p052: 정의·S = 총관입량/N·최종 침하량 5~10mm 이하 정지·PDAM·유의사항) / 합격답안 3.기초공사 PDF p44(Rebound Check 실시) / Hiley 공식(안전율 3)은 일반 교재 기준(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '기성 Concrete 말뚝 1회 타격 시 반동에 의해 튀어 오르는 정도를 확인하여 말뚝과 지반의 [[탄성변형량]](Rebound량 K)과 [[최종 관입량]](S)을 측정하는 방법으로, 말뚝마다 최종 관입예정 위치에서 매회 확인하여 [[Hiley 공식]] 등으로 지지력을 판정한다.'
      },
      { h: '원리 및 도해 — 측정 방법', fig: 'MAIN', flow: ['용지(Graph지) 부착', '기준대 고정', '펜 수평 이동 + 타격', '궤적에서 S·K 판독', 'S = 총관입량 / 타격횟수', '지지력 판정·항타 정지'] },
      {
        h: '측정 사항',
        tbl: {
          head: ['측정 항목', '내용', '목적'],
          rows: [
            ['최종 관입량(S)', '1회 타격 허용 관입량 결정', '지지층 도달 여부 파악'],
            ['Rebound량(K)', '말뚝머리 탄성변형량', '말뚝·지반 탄성 확인'],
            ['Hammer 에너지', 'E = W × H (중량 × 낙하고)', 'Hammer 용량·낙하고 결정']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['항타 정지', '최종 침하량 {{5~10mm}} 이하 (최종 5~10회 타격)', '디테일용어 No.41'],
            ['평균 관입량', 'S = 총관입량 / 타격횟수 N', '디테일용어 No.41'],
            ['동역학 공식', 'Hiley: Ru = e·W·H / (S + K/2), Ra = Ru / 3', '일반 교재 — 확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 항타장비·Hammer 용량·이음부·말뚝 치수 사전 검토', '[전] 기준대(각재)를 말뚝 영향 밖에 견고히 고정, 말뚝과 기준대 수평 유지', '[중] 측정용 펜과 말뚝 수직도 준수, 펜 이동 속도 일정', '[중] 최종 관입예정 위치에서 매회 확인, 요구 깊이 관입 여부 확인 후 지지력 판정', '[후] 기록지는 공사 완료 시까지 보관, 기준 미달 시 추가 타격·PDA 확인']
      },
      { h: '개선방안', ul: ['자동 항타관리 System(PDAM)으로 관입량·Rebound 자동 계측', 'PDA 동재하시험 병행', '디지털 기록·이력 관리'] }
    ]
  }
},
31: {
  title: 'RCD공법(역순환 공법) Reverse Circulation Drill',
  cat: '기초',
  key: ['RCD', '역순환', '정수압', 'Stand Pipe', 'Drill Pipe', 'Suction·Air Lift', 'Slime 제거', 'Tremie', '대구경'],
  www: { what: '공내에 물을 채워 [[정수압]]으로 공벽을 보호하며 회전 Bit로 굴착하고 굴착토를 [[Drill Pipe]] 내부로 [[역순환]] 배출하는 대구경 현장타설말뚝', why: '대구경·대심도 굴착, 공벽붕괴 방지, 저소음·저진동으로 도심 고하중 기초에 적용', how: 'Stand Pipe 설치 → 회전굴착 + 역순환 배토 → Slime 제거 → 철근망 건입 → [[Tremie]] 콘크리트 타설' },
  tag: '공법·현장타설·말뚝',
  def: 'Stand Pipe 이하 공내수위를 지하수위보다 {{2m 이상}} 높게 유지한 [[정수압]]으로 공벽을 보호하고, 회전 Bit 굴착토를 [[Drill Pipe]] 내부로 흡입([[Suction·Air Lift]])하는 [[역순환]] 방식의 대구경 현장타설 말뚝',
  wwh: ['정수압·역순환', '대구경 공벽보호', '회전굴착·흡입배토'],
  figT: 'RCD 공법의 역순환 원리 및 시공관리',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="400" height="240" class="soil"/><line x1="20" y1="70" x2="420" y2="70" class="ln"/><text x="26" y="64" class="s">GL</text><line x1="20" y1="110" x2="140" y2="110" class="bl dash"/><text x="26" y="106" class="s">GWL</text><rect x="140" y="50" width="12" height="80" class="bx2"/><rect x="248" y="50" width="12" height="80" class="bx2"/><text x="118" y="46" class="s">Stand Pipe</text><rect x="152" y="80" width="96" height="210" class="bx"/><line x1="152" y1="80" x2="248" y2="80" class="bl"/><rect x="194" y="30" width="12" height="250" class="conc"/><polygon points="170,280 230,280 200,300" class="bx2"/><line x1="200" y1="270" x2="200" y2="40" class="ar"/><polyline points="200,30 200,20 320,20 320,40" fill="none" class="ar"/><rect x="300" y="40" width="70" height="30" class="bx2"/><text x="335" y="60" text-anchor="middle" class="s">침전조</text><line x1="300" y1="66" x2="260" y2="76" class="ar"/><line x1="170" y1="100" x2="170" y2="260" class="ar"/><line x1="232" y1="100" x2="232" y2="260" class="ar"/><text x="26" y="200" class="s">공내수 하강</text><text x="268" y="160" class="s">굴착토+물 상승</text><text x="268" y="176" class="s">(Pipe 내부)</text><line x1="260" y1="80" x2="280" y2="80" class="ln2"/><line x1="260" y1="110" x2="280" y2="110" class="ln2"/><line x1="270" y1="80" x2="270" y2="110" class="ln2"/><text x="284" y="99" class="r">2m↑</text><line x1="200" y1="160" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">Drill Pipe(Suction·Air Lift)</text><line x1="200" y1="296" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">회전 Bit 굴착</text><line x1="270" y1="95" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">공내수위 ≥ GWL+2m</text><line x1="240" y1="82" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 정수압 공벽보호</text><line x1="200" y1="60" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 역순환 Pipe 내 배토</text><line x1="152" y1="300" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 대구경·대심도 굴착</text><line x1="146" y1="120" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 공내수위 유지·수직도</text><line x1="230" y1="286" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ Slime 제거·Koden Test</text><line x1="190" y1="250" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ Tremie 2m↑ 매입 타설</text><line x1="248" y1="200" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 건전도 시험 확인</text></svg>',
  subs: [
    { h: '특징', pts: ['[[정수압]] 공벽보호', '[[역순환]] Pipe 내 배토', '대구경·대심도 굴착'] },
    { h: '시공 시 유의사항', pts: ['공내수위 유지·수직도', '[[Slime]] 제거·Koden Test'] },
    { h: '개선방안', pts: ['[[Tremie]] 2m↑ 매입 타설', '[[건전도 시험]] 확인'] }
  ],
  msg: '물이 벽을 지키고, 흙은 Pipe 속으로 거꾸로 올라온다',
  mnemo: '정역대 수슬 트건 (정수압·역순환·대구경 / 수위·Slime / Tremie·건전도)',
  rel: ['Earth Drill 공법', 'PRD 공법', 'Barrette', 'Slime 처리', '건전도 시험(CSL)', 'Koden Test'],
  src: '근거: 디테일용어300 코어 No.42(p053: 정수압 0.02MPa 이상·공내수위 지하수위+2m 이상·Slime 10cm 이하·장단점) / 마법지 3기초 현장P(RCD·Koden Test) / KCS 11 50 20 현장타설말뚝(트레미 2m 이상 매입, 확인 필요) / 핵심마법지 굴착 수직도 1/300',
  det: {
    secs: [
      {
        h: '정의',
        def: 'Reverse Circulation Drill로 굴착하며 공내수의 [[정수압]]({{0.02MPa 이상}})으로 공벽을 보호하고, Drill Rod 끝에서 물을 빨아올려 굴착토를 [[Drill Pipe]] 내부로 지상에 [[역순환]] 배출한 뒤 철근망 삽입·[[Tremie]] 콘크리트를 타설하는 대구경 현장타설 말뚝이다.'
      },
      {
        h: '원리 및 도해 — 역순환 원리',
        fig: 'MAIN',
        flow: ['Stand Pipe 설치', '회전굴착·역순환 배토', 'Slime 처리', '철근망 삽입·Tremie 설치', 'Con\'c 타설', '양생·Stand Pipe 인발']
      },
      {
        h: '특징 (장·단점)',
        tbl: {
          head: ['장점', '단점'],
          rows: [
            ['대구경·대심도 시공 가능', '정수압 관리 어려움'],
            ['사질지반 적용성 우수', '순환수 별도 처리 필요'],
            ['저소음·저진동', '피압수·전석층에서 공벽 붕괴 우려']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['정수압', '{{0.02MPa}} 이상', '디테일용어 No.42'],
            ['공내수위', '지하수위보다 {{2m}} 이상', '디테일용어 No.42'],
            ['Slime', 'Con\'c 타설 직전 {{10cm}} 이하', '디테일용어 No.42'],
            ['굴착 수직도', '{{1/300}} 이내', '핵심마법지'],
            ['Tremie 매입', 'Con\'c 속 {{2m}} 이상', 'KCS 11 50 20 — 확인 필요'],
            ['공벽 확인', 'Koden Test(초음파 공벽측정)', '마법지 3기초']
          ]
        }
      },
      {
        h: '상세도 — 시공순서',
        fig: {
          svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="60" width="420" height="160" class="soil"/><line x1="10" y1="60" x2="430" y2="60" class="ln"/><line x1="10" y1="80" x2="430" y2="80" class="bl dash"/><text x="12" y="54" class="s">GL</text><text x="12" y="94" class="s">GWL</text><rect x="44" y="40" width="6" height="50" class="bx2"/><rect x="70" y="40" width="6" height="50" class="bx2"/><rect x="50" y="60" width="20" height="30" class="bx3"/><rect x="144" y="40" width="6" height="50" class="bx2"/><rect x="180" y="40" width="6" height="50" class="bx2"/><rect x="150" y="60" width="30" height="145" class="bx3"/><rect x="162" y="26" width="6" height="172" class="conc"/><polygon points="152,198 178,198 165,212" class="bx2"/><polyline points="165,26 165,18 205,18" fill="none" class="ar"/><rect x="244" y="40" width="6" height="50" class="bx2"/><rect x="290" y="40" width="6" height="50" class="bx2"/><rect x="250" y="60" width="40" height="150" class="bx3"/><line x1="256" y1="68" x2="256" y2="205" class="rd"/><line x1="284" y1="68" x2="284" y2="205" class="rd"/><line x1="256" y1="90" x2="284" y2="90" class="rd"/><line x1="256" y1="120" x2="284" y2="120" class="rd"/><line x1="256" y1="150" x2="284" y2="150" class="rd"/><line x1="256" y1="180" x2="284" y2="180" class="rd"/><rect x="268" y="26" width="5" height="172" class="conc"/><rect x="355" y="60" width="40" height="150" class="conc"/><line x1="361" y1="68" x2="361" y2="205" class="rd"/><line x1="389" y1="68" x2="389" y2="205" class="rd"/><rect x="349" y="18" width="6" height="50" class="bx2"/><rect x="395" y="18" width="6" height="50" class="bx2"/><line x1="412" y1="50" x2="412" y2="16" class="ar"/><line x1="84" y1="135" x2="138" y2="135" class="ar"/><line x1="194" y1="135" x2="240" y2="135" class="ar"/><line x1="300" y1="135" x2="345" y2="135" class="ar"/><text x="60" y="238" text-anchor="middle" class="s">① Stand Pipe</text><text x="165" y="238" text-anchor="middle" class="s">② 굴착·역순환</text><text x="270" y="238" text-anchor="middle" class="s">③ 철근망·Tremie</text><text x="375" y="238" text-anchor="middle" class="s">④ 타설·인발</text><line x1="60" y1="70" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="r">공내수위 ≥ GWL + 2m</text><line x1="150" y1="100" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">정수압 0.02MPa 이상</text><line x1="176" y1="120" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">Koden Test 공벽 확인</text><line x1="165" y1="160" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="r">굴착 수직도 1/300</text><line x1="165" y1="206" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="r">Slime 10cm 이하(타설 직전)</text><line x1="284" y1="100" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="b">철근망 Spacer·공상 방지</text><line x1="270" y1="190" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="r">Tremie 2m 이상 매입</text><line x1="412" y1="30" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="b">Stand Pipe 인발·양생</text></svg>',
          cap: '[상세] Stand Pipe → 굴착·역순환 → 철근망·Tremie → 타설·인발'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사로 피압수·자갈층 확인, Stand Pipe 근입 깊이 확보', '[중] 공내수위 GWL + 2m 이상 유지, 급격한 수위 저하 금지, 수직도 1/300 관리', '[중] Slime 1차(굴착 후)·2차(타설 직전) 처리 → 10cm 이하, Koden Test 로 공벽 확인', '[중] 철근망 Spacer·공상 방지, Tremie 2m 이상 매입 연속 타설', '[후] 두부 여분 타설·Laitance 제거, 건전도(CSL)·재하시험, 순환수·슬러지 처리']
      },
      { h: '개선방안', ul: ['Slime 자동 측정·초음파 공벽 측정', '순환수 정화 설비 → 환경오염 방지', 'CSL·양방향 재하시험 연계 품질 검증'] }
    ]
  }
},
32: {
  title: 'PRD공법(Percussion Rotary Drill)',
  cat: '기초',
  key: ['PRD', 'DTH Hammer', '타격+회전', '강관 Casing', '암반 근입', 'Rock Socket', '압축공기 배토', '강관말뚝'],
  www: { what: '[[DTH Hammer]]의 [[타격+회전]]으로 암반을 굴착하면서 [[강관 Casing]]을 동시에 관입·근입시키는 대구경 강관 매입말뚝 공법', why: '경암·전석층에도 [[암반 근입]]이 확실하여 고지지력 확보, 공벽붕괴 방지·저진동', how: '강관 세우기 → Hammer 타격·회전 굴착(압축공기 배토) → [[Rock Socket]] 근입 → Hammer 인양 → 콘크리트 충전' },
  tag: '공법·장비·암반근입',
  def: 'Casing(강관) 내부의 [[DTH Hammer]] Bit를 압축공기로 [[타격]]하면서 [[회전]] 굴착하고, 내측 Shaft와 외측 Casing의 [[역회전]]으로 강관을 암반까지 동시 근입시키는 [[강관 매입말뚝]] 공법',
  wwh: ['타격+회전 굴착', '암반근입 고지지력', 'DTH·강관 동시관입'],
  figT: 'PRD 공법의 굴착원리 및 암반근입',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="130" y="22" width="120" height="22" class="bx2"/><text x="190" y="37" text-anchor="middle" class="s">Rotary 구동부</text><rect x="20" y="70" width="400" height="110" class="soil"/><text x="26" y="88" class="s">토사·전석층</text><rect x="20" y="180" width="400" height="130" class="bx2"/><text x="26" y="198" class="s">연암·경암</text><line x1="20" y1="70" x2="420" y2="70" class="ln"/><rect x="160" y="44" width="14" height="236" class="conc"/><rect x="206" y="44" width="14" height="236" class="conc"/><rect x="184" y="44" width="12" height="216" class="bx"/><rect x="176" y="260" width="28" height="26" class="bx"/><polygon points="176,286 204,286 190,298" class="rf"/><line x1="296" y1="40" x2="260" y2="40" class="ar"/><text x="300" y="44" class="s">압축공기</text><line x1="178" y1="240" x2="178" y2="90" class="ar"/><line x1="202" y1="240" x2="202" y2="90" class="ar"/><text x="230" y="140" class="s">Cutting 배출</text><line x1="230" y1="180" x2="230" y2="280" class="ln2"/><line x1="224" y1="180" x2="236" y2="180" class="ln2"/><line x1="224" y1="280" x2="236" y2="280" class="ln2"/><text x="240" y="236" class="r">근입장</text><text x="26" y="326" class="s">강관 세우기→타격·회전→근입→충전</text><line x1="190" y1="290" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">DTH Hammer Bit(타격)</text><line x1="220" y1="120" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">강관 Casing(본말뚝)</text><line x1="190" y1="140" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">Drill Rod(회전·공기)</text><line x1="180" y1="270" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ DTH Hammer 타격+회전</text><line x1="167" y1="200" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 강관 Casing 동시 관입</text><line x1="210" y1="280" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 경암 암반 근입 확실</text><line x1="190" y1="160" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ Slime·Cutting 배출</text><line x1="167" y1="100" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 강관 수직도·이음 용접</text><line x1="250" y1="30" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 방음 Cover·저소음 장비</text><line x1="220" y1="260" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ Rock Socket 지지력 확인</text></svg>',
  subs: [
    { h: '특징', pts: ['[[DTH Hammer]] 타격+회전', '[[강관 Casing]] 동시 관입', '경암 [[암반 근입]] 확실'] },
    { h: '시공 시 유의사항', pts: ['Slime·Cutting 배출', '강관 수직도·이음 용접'] },
    { h: '개선방안', pts: ['방음 Cover·저소음 장비', '[[Rock Socket]] 지지력 확인'] }
  ],
  msg: '두드리며 돌려 강관째 암반에 꽂는다 — 경암 고지지력 기초',
  mnemo: 'DT강암 슬수 방락 (DTH·강관·암반 / Slime·수직도 / 방음·Rock Socket)',
  rel: ['RCD 공법', '강관말뚝', 'Rock Socket', 'SIP 공법', '동재하시험(PDA)'],
  src: '근거: 디테일용어300 코어 No.43(p054: 해머비트 타격+회전·내측 Shaft/외측 Casing 역회전·특징·Slime 10cm 이하·Back Fill) / 마법지 3기초 현장P(PRD) / KCS 11 50 15·20 / 근입장은 설계도서(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: 'Casing 압입 후 [[Hammer Bit]]의 [[타격]]과 [[회전]]으로 지반을 천공하며, 내측 Shaft와 외측 Casing이 서로 [[역회전]]하여 경암층까지 굴착하고 강관을 [[암반 근입]]시키는 저소음 대구경 말뚝기초 공법이다.'
      },
      {
        h: '원리 및 도해 — 시공 Process',
        fig: 'MAIN',
        flow: ['중심선 측량', 'Casing(강관) 설치', 'DTH Hammer 타격·회전 천공', '암반 근입(Rock Socket)', '철근망·철골 설치', 'Con\'c 타설']
      },
      {
        h: '특징',
        tbl: {
          head: ['구분', '내용'],
          rows: [
            ['적용', '경암층 및 대구경 천공에 적합'],
            ['환경', '저압·저소음 장비 사용 → 민원 발생 적음'],
            ['품질', '선단 지지층을 시공 중 육안(Cutting)으로 확인 가능'],
            ['구조', '강관 Casing 을 본말뚝으로 활용 → 고지지력']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['연직도', '굴착 시 연직도 유지 확인', '디테일용어 No.43'],
            ['Slime', 'Con\'c 타설 전 {{10cm}} 이하', '디테일용어 No.43'],
            ['편심 방지', '강재 편심 없게 양측 Back Fill', '디테일용어 No.43'],
            ['근입장', '설계도서 따름', '확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사로 암반선 깊이·강도 확인, 강관 규격·이음 확인', '[전] Compressor 용량·방음 Cover·집진설비 준비', '[중] 연직도 수시 확인, 강관 이음 용접 품질(비파괴검사)', '[중] Cutting 배출로 지지층 확인, 근입장 확보, Slime 10cm 이하 처리', '[후] 양측 Back Fill 로 편심 방지, 재하시험으로 지지력 확인']
      },
      { h: '개선방안', ul: ['Rock Socket 지지력 양방향 재하시험 확인', '분진 집진장치·방음 Cover', '천공 Data 자동기록'] }
    ]
  }
},
33: {
  title: 'Micro Pile',
  cat: '기초',
  key: ['Micro Pile', '소구경 말뚝', 'Ø300mm 이하', '강봉·강관', '가압 Grouting', '주면마찰', 'Underpinning', '부력 저항'],
  www: { what: '[[Ø300mm 이하]]로 천공 후 [[강봉·강관]]을 삽입하고 [[가압 Grouting]]하여 주면마찰로 지지하는 소구경 현장타설말뚝', why: '협소·저공고 공간 시공 가능, 기존 건물 [[Underpinning]]·증축·[[부력 저항]] 보강', how: '천공(Casing) → 강봉·강관 삽입 → 1차 Grouting → 가압 2차 Grouting → 두부정착(기초 연결)' },
  tag: '공법·보강·소구경',
  def: '직경 {{300mm 이하}}로 천공한 공에 [[강봉·강관]]을 삽입하고 시멘트 [[가압 Grouting]]하여 주로 [[주면마찰]]로 압축·인장력을 지지하는 [[소구경 말뚝]]',
  wwh: ['Ø300↓ 소구경', '협소지 보강·부력', '천공→강재→Grout'],
  figT: 'Micro Pile의 지지원리 및 적용(Underpinning·부력)',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="200" height="70" class="bx"/><text x="140" y="60" text-anchor="middle" class="s">기존 건물</text><rect x="60" y="100" width="160" height="30" class="conc"/><text x="140" y="120" text-anchor="middle" class="s">기존 기초</text><rect x="20" y="130" width="400" height="120" class="soil"/><text x="300" y="150" class="s">연약·매립층</text><rect x="20" y="250" width="400" height="60" class="bx2"/><text x="300" y="272" class="s">암반·지지층</text><line x1="100" y1="130" x2="70" y2="300" class="ln"/><line x1="180" y1="130" x2="210" y2="300" class="ln"/><line x1="140" y1="130" x2="140" y2="300" class="ln"/><rect x="64" y="250" width="12" height="50" class="conc"/><rect x="134" y="250" width="12" height="50" class="conc"/><rect x="204" y="250" width="12" height="50" class="conc"/><line x1="120" y1="180" x2="120" y2="166" class="ar"/><line x1="160" y1="180" x2="160" y2="166" class="ar"/><line x1="120" y1="230" x2="120" y2="216" class="ar"/><line x1="160" y1="230" x2="160" y2="216" class="ar"/><text x="300" y="200" class="r">Ø300mm 이하</text><line x1="330" y1="300" x2="330" y2="284" class="ar"/><text x="260" y="325" class="s">인장(부력)·압축 겸용</text><line x1="140" y1="200" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">강봉·강관 + Grout</text><line x1="210" y1="270" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">가압 Grouting 정착부</text><line x1="100" y1="130" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">두부 정착(기초 연결)</text><line x1="296" y1="196" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ Ø300mm 이하 소구경</text><line x1="120" y1="200" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 주면마찰 지지</text><line x1="40" y1="60" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 협소·저공고 시공</text><line x1="70" y1="290" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ Grout 가압·충전 확인</text><line x1="180" y1="160" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 강재 부식 방지</text><line x1="100" y1="110" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ Underpinning·부력 저항</text><line x1="330" y1="292" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 재하시험 지지력 확인</text></svg>',
  subs: [
    { h: '특징', pts: ['[[Ø300mm 이하]] 소구경', '[[주면마찰]] 지지', '협소·저공고 시공'] },
    { h: '시공 시 유의사항', pts: ['Grout 가압·충전 확인', '강재 [[부식]] 방지'] },
    { h: '개선방안', pts: ['[[Underpinning]]·부력 저항', '[[재하시험]] 지지력 확인'] }
  ],
  msg: '가늘지만 많이, 깊게 — 협소지·기존건물 보강의 해결사',
  mnemo: '소주협 가부 언재 (소구경·주면마찰·협소 / 가압·부식 / Underpinning·재하시험)',
  rel: ['Underpinning', '부력 대처방안', 'Rock Anchor', '약액주입', '강관 말뚝'],
  src: '근거: 디테일용어300 코어 No.44(p055: Ø300mm 이하·저압 고강도 Mortar Grouting·1차/2차 재주입·Over Flow·이중 방식) / 합격답안 3.기초공사 PDF p78(Micro pile: Ø300 이하 소구경 강봉) / 마법지 3기초 부력(Micro Pile)',
  det: {
    secs: [
      {
        h: '정의',
        def: '천공장비로 소요 깊이까지 천공한 공에 Pipe 및 [[이형 Bar]] 등을 삽입 후 [[저압]]으로 고강도 [[Mortar Grouting]]하는 직경 {{300mm 이하}}의 [[소구경 말뚝]]으로, 소규모 장비로 지반조건에 구애받지 않고 높은 지지력을 발휘하여 신·증축 및 보수공사에 유리하다.'
      },
      { h: '원리 및 도해 — 시공 Process', fig: 'MAIN', flow: ['천공·Casing 설치', '이형 Bar(강봉) 삽입', '1차 Grouting(저압)', '2차 재주입(고압)', '두부정리(지압판)', '재하시험'] },
      {
        h: '특징',
        tbl: {
          head: ['구분', '내용'],
          rows: [
            ['장비', '천공장비 소형화 → 소음·진동 저감, 협소·저공고 시공'],
            ['지지', '주면마찰력 중심 → 암반·전단강도 큰 지반에 유리'],
            ['내구', '고강도 Grouting → 장기 내구성'],
            ['적용', 'Underpinning, 증축·리모델링, 부력 저항(인장)']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['직경', '{{300mm}} 이하', '디테일용어 No.44·3.기초공사 p78'],
            ['Grouting 충전', 'Over Flow 될 때까지 시행', '디테일용어 No.44'],
            ['재주입', '1차 저압 후 필요 시 2차 고압 재주입 → 주면마찰력 극대화', '디테일용어 No.44'],
            ['부식 방지', '이중 방식처리', '디테일용어 No.44'],
            ['설계 지지력', '설계도서·재하시험', '확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 기존 기초·매설물 조사, 천공 위치·각도 표시', '[중] 천공 수직 정밀도, 선단 지지력 저하 여부 확인', '[중] Grouting Over Flow 까지 시행, 필요 시 2차 고압 재주입', '[중] 강봉 Centralizer 로 피복 확보, 이중 방식 처리', '[후] 두부 지압판 정착·기초 연결, 재하시험으로 지지력 확인']
      },
      { h: '개선방안', ul: ['고강도 무수축 Grout 사용', 'Underpinning 시 기존 건물 계측 병행', '부력 저항용 인장 Micro Pile 활용'] }
    ]
  }
},
34: {
  title: '현장 타설 콘크리트 말뚝의 건전도 시험(Pile Integrity Test)',
  cat: '기초',
  key: ['건전도 시험', 'CSL(공대공 초음파)', '검측관', '전파속도 V=S/T', 'A~D 등급', '결함점수', '저변형률 PIT', 'Core 보링'],
  www: { what: '현장타설말뚝 내부의 공극·Slime·단면결손 등 [[결함]] 유무를 [[초음파(CSL)]] 전파속도로 판정하는 비파괴시험', why: '말뚝 품질결함 조기 발견으로 지지력 부족·부등침하 방지, 보강 여부 판단', how: '철근망에 [[검측관]] 설치 → 물 채움 → 송·수신 Probe 동시 인상 → 전파시간 측정 → [[A~D 등급]] 판정' },
  tag: '시험·품질·비파괴',
  def: '철근망에 설치한 [[검측관]] 사이로 초음파를 송·수신하여 [[전파속도(V=S/T)]] 감소율로 말뚝 내부 결함을 판정하는 [[공대공 초음파 검층(CSL)]] 등의 비파괴 [[건전도 시험]]({{속도 10% 이내 감소 = A 양호}})',
  wwh: ['내부결함 판정', '지지력 결함 예방', '초음파 V=S/T'],
  figT: '공대공 초음파 검층(CSL) 원리 및 판정기준',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="200" height="280" class="soil"/><rect x="70" y="40" width="100" height="270" class="conc"/><rect x="84" y="30" width="8" height="280" class="bx"/><rect x="148" y="30" width="8" height="280" class="bx"/><rect x="82" y="150" width="12" height="14" class="rf"/><rect x="146" y="150" width="12" height="14" class="bf"/><line x1="94" y1="157" x2="146" y2="157" class="rd dash"/><polyline points="88,30 88,20 60,20" fill="none" class="ln2"/><polyline points="152,30 152,20 180,20" fill="none" class="ln2"/><text x="26" y="24" class="s">Tx</text><text x="186" y="24" class="s">Rx</text><line x1="196" y1="150" x2="196" y2="110" class="ar"/><text x="198" y="140" class="s">인상</text><circle cx="120" cy="230" r="10" class="bx2"/><text x="26" y="300" class="s">결함(공극)</text><text x="240" y="52" class="r">V = S / T</text><rect x="236" y="64" width="190" height="22" class="bx2"/><text x="244" y="79" class="s">등급</text><text x="300" y="79" class="s">속도 감소</text><text x="380" y="79" class="s">점수</text><rect x="236" y="86" width="190" height="22" class="bx"/><text x="244" y="101" class="s">A 양호</text><text x="300" y="101" class="s">10% 이내</text><text x="384" y="101" class="s">0</text><rect x="236" y="108" width="190" height="22" class="bx"/><text x="244" y="123" class="s">B 의심</text><text x="300" y="123" class="s">10~20%</text><text x="384" y="123" class="s">30</text><rect x="236" y="130" width="190" height="22" class="bx"/><text x="244" y="145" class="s">C 불량</text><text x="300" y="145" class="s">20% 이상</text><text x="384" y="145" class="s">50</text><rect x="236" y="152" width="190" height="22" class="bx"/><text x="244" y="167" class="s">D 중대</text><text x="300" y="167" class="s">신호 미감지</text><text x="384" y="167" class="s">100</text><circle cx="300" cy="250" r="44" class="conc"/><circle cx="300" cy="210" r="5" class="bx"/><circle cx="340" cy="266" r="5" class="bx"/><circle cx="260" cy="266" r="5" class="bx"/><text x="300" y="316" text-anchor="middle" class="s">평면: 검측관 배치</text><line x1="88" y1="100" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">검측관(강관, 물 채움)</text><line x1="120" y1="157" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">S: 관 간격 / T: 전파시간</text><line x1="300" y1="210" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">직경별 검측관 다수 배치</text><line x1="60" y1="20" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ CSL 공대공 초음파</text><line x1="270" y1="52" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 전파속도 V=S/T</text><line x1="426" y1="120" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ A~D 등급 판정</text><line x1="152" y1="290" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 검측관 수직·이음 수밀</text><line x1="84" y1="280" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 관내 물 채움·막힘 방지</text><line x1="128" y1="238" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ Core 확인·보강 Grouting</text><line x1="80" y1="45" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 저변형률 PIT 병행</text></svg>',
  subs: [
    { h: '시험 원리·판정', pts: ['[[CSL]] 공대공 초음파', '전파속도 [[V=S/T]]', '[[A~D 등급]] 판정'] },
    { h: '시험 시 유의사항', pts: ['검측관 수직·이음 수밀', '관내 물 채움·막힘 방지'] },
    { h: '결함 시 대책', pts: ['[[Core]] 확인·보강 Grouting', '저변형률 PIT 병행'] }
  ],
  msg: '보이지 않는 말뚝 속을 소리로 본다 — 속도 감소율이 곧 결함의 크기',
  mnemo: '공속등 수물 코핏 (CSL·속도·등급 / 수직수밀·물 / Core·PIT)',
  rel: ['양방향 말뚝재하시험', 'RCD 공법', 'Slime 처리', 'Koden Test', '저변형률 충격반향 시험'],
  src: '근거: 디테일용어300 코어 No.46(p057: Sonic Logging·A 10% 이내/B 10~20%/C 20% 이상·유의사항) / 핵심마법지 p018 건전도 결함판정(D 신호 미감지 100점, 결함점수) / 직경별 검측관 수·시험 빈도는 KCS 11 50 20·설계도서(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '현장타설 말뚝의 두부정리 전 [[검사용 Tube]]에 송·수신 Sensor를 동일 속도로 삽입한 후 Pipe 간 [[Sonic Logging]]으로 [[초음파 도달시간]](전파속도 V = S/T)을 측정하여 말뚝의 [[건전상태]]와 결함 유무를 확인하는 시험이다.'
      },
      {
        h: '원리 및 도해 — 시험 Process',
        fig: 'MAIN',
        flow: ['철근망에 검측관 설치', 'Tube 상단까지 물 채움', '송·수신기 삽입', '동일 속도 인상 Logging', '전파시간·속도 분석', 'A~D 등급 판정']
      },
      {
        h: '내부결함 판정기준',
        tbl: {
          head: ['등급', '판정', '속도 감소율', '결함점수'],
          rows: [
            ['A', '양호', '10% 이내', '0'],
            ['B', '결함 의심', '10~20%', '30'],
            ['C', '불량', '20% 이상', '50'],
            ['D', '중대 결함', '신호 미감지', '100']
          ]
        },
        ul2: ['판정 기준: 건전한 Concrete 의 초음파 전파속도 대비 감소율']
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['A·B·C 등급', '10% 이내 / 10~20% / 20% 이상 감소', '디테일용어 No.46'],
            ['D 등급·결함점수', '신호 미감지 100점 (A 0, B 30, C 50)', '핵심마법지 p018'],
            ['검측관 수·시험 빈도', '말뚝 직경별 — KCS 11 50 20·설계도서', '확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 검측관 수직 설치·이음부 수밀, 하단 Cap 막음, 철근망에 견고히 고정', '[중] 타설 중 검측관 변형·이탈 방지, Tube 상단까지 물 채움', '[중] 초음파 송·수신 케이블 길이 충분히 확보, 송·수신기 동일 속도 인상', '[후] 이상 부위는 초음파 송신과 동시에 기록', '[후] 판정 확정 시까지 Tube 뚜껑 덮어 이물질 유입 방지, 판정 후 Grouting 충전']
      },
      {
        h: '결함 시 대책 / 개선방안',
        ul: ['B 등급 이상 결함 → Core Boring 으로 확인', '보강 Grouting 또는 보강 말뚝 추가', '저변형률 충격반향시험(PIT) 병행', 'Slime 처리·Tremie 관리 등 원인 개선']
      }
    ]
  }
},
35: {
  title: '양방향 말뚝재하시험(O-Cell 재하시험)',
  cat: '기초',
  key: ['양방향 재하시험', 'O-Cell', '유압 Jack 매설', '상향 주면마찰', '하향 선단지지', '평형점', '반력장치 불필요', '등가 하중-침하곡선'],
  www: { what: '말뚝 선단 부근에 [[O-Cell(유압 Jack)]]을 매설하고 가압하여 상부 [[주면마찰력]]과 하부 [[선단지지력]]을 서로의 반력으로 동시에 측정하는 정재하시험', why: '대형 반력장치·사하중 없이 대구경 고하중 말뚝의 [[지지력]]을 분리·확인', how: '철근망에 O-Cell·Telltale 설치 → 콘크리트 타설·양생 → 단계 가압 → 상·하 변위 측정 → [[등가 하중-침하곡선]] 환산' },
  tag: '시험·지지력·재하',
  def: '현장타설말뚝 하부의 [[평형점]]에 매설한 [[O-Cell]]을 가압하여 상부는 [[상향 주면마찰력]], 하부는 [[하향 선단지지력]]이 서로 반력이 되도록 하여 지지력을 측정하는 [[양방향 정재하시험]]',
  wwh: ['선단부 Jack 매설', '반력장치 불필요', '상·하 양방향 가압'],
  figT: '양방향 재하시험(O-Cell)의 원리 및 결과 해석',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="260" height="260" class="soil"/><line x1="20" y1="60" x2="280" y2="60" class="ln"/><text x="26" y="54" class="s">GL</text><rect x="110" y="50" width="60" height="260" class="conc"/><rect x="104" y="220" width="72" height="18" class="rf"/><text x="184" y="234" class="r">O-Cell</text><line x1="96" y1="200" x2="96" y2="120" class="ar"/><line x1="184" y1="200" x2="184" y2="120" class="ar"/><text x="190" y="160" class="s">상향 주면마찰</text><line x1="96" y1="244" x2="96" y2="296" class="ar"/><line x1="184" y1="244" x2="184" y2="296" class="ar"/><line x1="140" y1="300" x2="140" y2="318" class="ar"/><text x="190" y="286" class="s">하향 선단·주면</text><line x1="125" y1="20" x2="125" y2="220" class="ln2"/><line x1="155" y1="30" x2="155" y2="238" class="ln2 dash"/><rect x="110" y="14" width="30" height="10" class="bx2"/><text x="26" y="24" class="s">유압 Pump</text><line x1="300" y1="70" x2="300" y2="300" class="ln2"/><line x1="300" y1="185" x2="430" y2="185" class="ln2"/><text x="304" y="82" class="s">상향변위</text><text x="304" y="298" class="s">하향변위</text><text x="424" y="180" text-anchor="end" class="s">하중</text><polyline points="300,185 340,170 380,150 420,140" fill="none" class="bl"/><polyline points="300,185 340,198 380,220 420,250" fill="none" class="rd"/><line x1="125" y1="40" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">유압관(가압)</text><line x1="155" y1="120" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">Telltale·LVDT 변위</text><line x1="140" y1="229" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">상·하 반력 평형점 배치</text><line x1="110" y1="229" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 선단부 O-Cell 매설</text><line x1="96" y1="160" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 상향·하향 양방향 재하</text><line x1="60" y1="60" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 반력장치 불필요</text><line x1="176" y1="229" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ Jack 위치 평형점 설계</text><line x1="125" y1="120" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 유압관·Telltale 보호</text><line x1="360" y1="160" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 등가 하중-침하곡선 환산</text><line x1="170" y1="280" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 대구경·고하중 적용 확대</text></svg>',
  subs: [
    { h: '특징', pts: ['선단부 [[O-Cell]] 매설', '상향·하향 [[양방향 재하]]', '[[반력장치]] 불필요'] },
    { h: '시험 시 유의사항', pts: ['Jack 위치 [[평형점]] 설계', '유압관·Telltale 보호'] },
    { h: '개선방안', pts: ['[[등가 하중-침하곡선]] 환산', '대구경·고하중 적용 확대'] }
  ],
  msg: '말뚝이 스스로 반력이 된다 — 주면과 선단을 한 번에 분리 측정',
  mnemo: 'O양반 평보 등대 (O-Cell·양방향·반력무 / 평형점·보호 / 등가곡선·대구경)',
  rel: ['정재하시험', '동재하시험(PDA)', '건전도 시험', 'RCD 공법', 'Barrette'],
  src: '근거: 디테일용어300 코어 No.47(p058: 총 시험하중 설계지지력 200% 이상 8단계, 침하율 0.25mm 기준 12/24시간 유지, 변위 각 2개소 이상) / 마법지 3기초 현장P 시험(양방향 재하시험) / KCS 11 50 20 말뚝재하시험(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '현장타설 말뚝 선단 또는 중간에 [[유압 Jack]](가압장치, O-Cell)을 설치하여 [[주면마찰력]]과 [[선단지지력]]을 동시에 측정하는 시험으로, 상부 재하식과 달리 [[반력 구조물]]이 필요 없고 고용량 하중 재하가 가능하여 지지력과 침하량을 정확하게 측정한다.'
      },
      {
        h: '원리 및 도해 — 시험 Process',
        fig: 'MAIN',
        flow: ['선단부 유압 Jack 설치', 'Con\'c 타설·양생', '단계 재하(상·하향 동시 가력)', '변위 측정(상향·하향·두부)', '등가 하중-침하곡선 환산', '지지력 판정'],
        ul: ['정재하: P = F + Q (두부 재하) / O-Cell: Q = (−)F (상·하 상호 반력)']
      },
      {
        h: '정재하시험과 비교',
        tbl: {
          head: ['구분', '정재하시험(두부재하)', '양방향 재하시험(O-Cell)'],
          rows: [
            ['재하 위치', '말뚝 두부', '선단 또는 중간 매설'],
            ['반력', '반력말뚝·사하중 필요', '말뚝 자체(상·하 상호 반력)'],
            ['측정', '전체 지지력', '선단지지·주면마찰 분리 측정'],
            ['공간·비용', '대형 반력장치·공간 필요', '좁은 공간 가능, 공사비 절감'],
            ['단점', '고하중 재하 한계', 'Jack 매립 → 재사용 불가']
          ]
        }
      },
      {
        h: '관리기준 (재하 및 측정)',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['총 시험하중', '설계지지력의 {{200%}} 이상, {{8단계}} 재하', '디테일용어 No.47'],
            ['하중 유지', '침하율 {{0.25mm}} 이하 12시간, 초과 시 24시간 재하', '디테일용어 No.47'],
            ['변위 측정', '상향·하향·말뚝두부 각 {{2개소}} 이상', '디테일용어 No.47'],
            ['재하 기준 상세', 'KCS 11 50 20·설계도서', '확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] Jack 위치를 상·하 저항력 평형점으로 설계 (지반조사 기반)', '[전] O-Cell·유압관·Telltale 철근망 견고 고정, 유압관 누유 점검', '[중] 철근망 건입 시 Jack 손상·편심 방지, Jack 주변 Con\'c 밀실 충전', '[중] 단계별 재하·하중 유지시간 준수, 상·하 변위 동시 측정', '[후] Jack 공극 Grouting 충전, 등가 하중-침하곡선 작성·지지력 판정']
      },
      { h: '개선방안', ul: ['다단 O-Cell 배치로 구간별 주면마찰 분석', '대구경·고하중 말뚝·Barrette 적용 확대', '자동 Data Logger 계측'] }
    ]
  }
},
36: {
  title: '부력과 양압력(Buoyancy와 Uplift Pressure)',
  cat: '기초',
  key: ['부력', '양압력', 'B = γw·V', 'U = γw·h', '지하수위', '피압수', '부상', '자중 W ≥ 1.25B'],
  www: { what: '지하수위 아래 구조물이 밀어낸 물의 무게만큼 받는 상향력 [[부력(B=γw·V)]]과 기초 저면에 작용하는 수압 [[양압력(U=γw·h)]]', why: '자중 < 부력 시 구조물 [[부상]]·바닥 균열·누수·부등침하 발생', how: '설계지하수위 산정 → 부력·양압력 계산 → [[W ≥ 1.25B]] 검토 → 순응(영구배수)·대응(Rock Anchor) 공법 선정' },
  tag: '현상·원리·검토',
  def: '[[부력]]은 지하수위 아래 구조물이 배제한 물의 무게({{B = γw·V}})만큼 받는 상향력이고, [[양압력]]은 구조물 기초 저면에 작용하는 지하수압({{U = γw·h}})으로 구조물 자중보다 크면 [[부상]]이 발생',
  wwh: ['상향 수압·부력', '부상·누수 방지', 'W ≥ 1.25B 검토'],
  figT: '부력·양압력의 발생원리 및 안정검토',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="90" width="400" height="220" class="soil"/><line x1="20" y1="90" x2="420" y2="90" class="ln"/><text x="26" y="84" class="s">GL</text><line x1="20" y1="130" x2="420" y2="130" class="bl dash"/><text x="26" y="125" class="s">지하수위(GWL)</text><rect x="120" y="30" width="160" height="60" class="bx"/><rect x="120" y="90" width="160" height="130" class="conc"/><text x="150" y="60" text-anchor="middle" class="s">상부구조</text><rect x="120" y="130" width="160" height="90" class="bx3"/><text x="200" y="170" text-anchor="middle" class="s">수중 체적 V</text><line x1="200" y1="42" x2="200" y2="76" class="ar"/><text x="208" y="82" class="b">W(자중)</text><line x1="140" y1="270" x2="140" y2="226" class="ar"/><line x1="180" y1="270" x2="180" y2="226" class="ar"/><line x1="220" y1="270" x2="220" y2="226" class="ar"/><line x1="260" y1="270" x2="260" y2="226" class="ar"/><text x="200" y="290" text-anchor="middle" class="r">양압력 U = γw·h</text><line x1="300" y1="130" x2="300" y2="220" class="ln2"/><line x1="294" y1="130" x2="306" y2="130" class="ln2"/><line x1="294" y1="220" x2="306" y2="220" class="ln2"/><text x="310" y="180" class="r">h</text><text x="26" y="240" class="s">피압수</text><line x1="60" y1="270" x2="100" y2="230" class="ar"/><line x1="200" y1="170" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="r">부력 B = γw·V</text><line x1="210" y1="46" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">W: 구조물 자중+상재하중</text><line x1="300" y1="220" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">h: 기초저면~지하수위</text><line x1="150" y1="160" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 부력 B = γw·V</text><line x1="250" y1="270" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 양압력 U = γw·h</text><line x1="200" y1="76" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 자중 W ≥ 1.25B 안정</text><line x1="80" y1="250" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 피압수·우기 수위상승</text><line x1="270" y1="220" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 바닥 Slab 균열·누수</text><line x1="400" y1="300" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 순응: 영구배수 공법</text><line x1="120" y1="280" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 대응: Rock Anchor 공법</text></svg>',
  subs: [
    { h: '원리·검토기준', pts: ['부력 [[B = γw·V]]', '양압력 [[U = γw·h]]', '자중 [[W ≥ 1.25B]] 안정'] },
    { h: '문제점(피해)', pts: ['[[피압수]]·우기 수위상승', '바닥 Slab 균열·누수'] },
    { h: '대책', pts: ['순응: [[영구배수]] 공법', '대응: [[Rock Anchor]] 공법'] }
  ],
  msg: '물이 밀어 올리는 힘보다 무거워야 뜨지 않는다 — W ≥ 1.25B',
  mnemo: 'BUW 피균 순대 (부력·양압력·자중 / 피압수·균열 / 순응·대응)',
  rel: ['부력 대처방안', '영구배수공법', 'Rock Anchor', 'Floating Foundation', '피압수'],
  src: '근거: 디테일용어300 코어 No.48(p059: 부력 B = γw·V, 양압력 = D·γw, 원인·문제점·방지대책)·No.49(p060: W ≥ 1.25B) / 합격답안 3.기초공사 PDF p76·p78(W = 1.25P 이상)·p112 / 1.25 는 합격답안 값(KDS 기준 확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '[[부력]]은 물에 잠긴 물체의 표면에 상향으로 작용하는 물 전체의 압력({{B = γw × V}})이고, [[양압력]]은 구조물 저면에 단위면적당 상향으로 작용하는 물의 압력({{U = γw × h}})으로, 구조물 자중이 부력보다 작으면 [[부상]]이 발생한다.'
      },
      { h: '원리 및 도해 — Mechanism', fig: 'MAIN', flow: ['강우·지하수위 상승', '피압수 작용', '부력·양압력 증가', '자중 W < 부력 B', '구조물 부상·균열', '누수·부등침하'] },
      {
        h: '부력과 양압력 비교',
        tbl: {
          head: ['구분', '부력(Buoyancy)', '양압력(Uplift Pressure)'],
          rows: [
            ['정의', '수중 체적만큼 받는 상향 합력', '구조물 저면 단위면적당 상향 수압'],
            ['산정식', 'B = γw × V (kN)', 'U = γw × h (kN/m²)'],
            ['인자', 'γw 물 단위중량, V 수중 체적', 'h 지하수위~기초저면 깊이'],
            ['검토', '자중 W ≥ 1.25B', '저판 휨·균열·누수 검토']
          ]
        }
      },
      {
        h: '발생 원인 및 문제점',
        tbl: {
          head: ['발생 원인', '문제점'],
          rows: [
            ['일시적 수량 증가(강우)', '구조물 부상'],
            ['지하수위 상승', '구조물 균열·누수'],
            ['피압수 지반', '구조물 파손·부등침하']
          ]
        }
      },
      {
        h: '관리기준 (안정 검토)',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['부상 안정', '자중 W ≥ {{1.25B}}', '디테일용어 No.49·3.기초공사 p78'],
            ['부력', 'B = γw·V', '디테일용어 No.48'],
            ['양압력', 'U = γw·h', '디테일용어 No.48·3.기초공사 p112'],
            ['설계지하수위', '우기 최고수위·피압 고려 산정', 'KDS 기준 확인 필요']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사·장기 수위관측으로 설계지하수위(우기 최고·피압) 산정', '[전] 시공 단계별 자중 vs 부력 검토 (골조 진행 중 자중 부족 시점 파악)', '[중] 자중 확보 전 Dewatering 중단 금지, 기초 저판 방수·이음부 지수판', '[후] 지하수위 계측, 바닥 균열·누수 점검']
      },
      {
        h: '방지대책',
        ul: ['대응: [[Rock Anchor]]·자중증대·마찰말뚝·Micro Pile', '순응(감소): [[영구배수]]·[[상수위 제어]] System', '내수압 Slab 설계로 부력·양압력 대응', '지하수위 계측 기반 유지관리']
      }
    ]
  }
},
37: {
  title: '지하수에 의한 부력 대처 방안',
  cat: '기초',
  key: ['순응공법', '대응공법', '영구배수', '상수위 조절', 'Rock Anchor', '자중증대', 'Micro Pile', 'Bracket', '인접건물 긴결'],
  www: { what: '지하수 부력에 대해 수압을 줄이는 [[순응공법]](영구배수·상수위 조절·외부배수)과 저항력을 키우는 [[대응공법]](Rock Anchor·자중증대·Micro Pile 등)', why: '구조물 [[부상]]·균열·누수 방지, 지하구조물 장기 안정성 확보', how: '지하수위 조사 → 부력 검토(W ≥ 1.25B) → 순응·대응 공법 비교 선정 → 시공 → [[지하수위 계측관리]]' },
  tag: '대책·공법·비교',
  def: '지하구조물에 작용하는 부력에 대하여 [[영구배수]]·[[상수위 조절]]로 수압을 저감하는 [[순응공법]]과 [[Rock Anchor]]·[[자중증대]]·Micro Pile·Bracket 등으로 저항하는 [[대응공법]]',
  wwh: ['순응·대응 공법', '부상·누수 방지', '수압저감·저항증대'],
  figT: '부력 대처방안(순응·대응)의 원리 및 비교',
  svg: '<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="80" width="400" height="250" class="soil"/><line x1="20" y1="80" x2="420" y2="80" class="ln"/><text x="26" y="74" class="s">GL</text><line x1="20" y1="110" x2="100" y2="110" class="bl dash"/><line x1="300" y1="110" x2="420" y2="110" class="bl dash"/><text x="340" y="105" class="s">GWL</text><rect x="100" y="30" width="200" height="50" class="bx"/><rect x="100" y="80" width="200" height="110" class="bx3"/><rect x="90" y="190" width="220" height="24" class="conc"/><text x="200" y="130" text-anchor="middle" class="s">지하구조물</text><rect x="110" y="160" width="180" height="30" class="conc"/><text x="200" y="180" text-anchor="middle" class="s">자중증대(채움)</text><rect x="78" y="190" width="12" height="12" class="bx2"/><rect x="310" y="190" width="12" height="12" class="bx2"/><line x1="130" y1="214" x2="130" y2="300" class="rd"/><line x1="270" y1="214" x2="270" y2="300" class="rd"/><rect x="124" y="280" width="12" height="30" class="rf"/><rect x="264" y="280" width="12" height="30" class="rf"/><line x1="200" y1="214" x2="200" y2="290" class="ln"/><rect x="195" y="260" width="10" height="30" class="conc"/><rect x="20" y="300" width="400" height="30" class="bx2"/><text x="26" y="318" class="s">암반</text><line x1="90" y1="216" x2="310" y2="216" class="gr"/><rect x="316" y="214" width="26" height="30" class="bx"/><text x="346" y="240" class="s">집수정</text><line x1="30" y1="240" x2="70" y2="240" class="ar"/><text x="26" y="262" class="s">지하수</text><line x1="90" y1="196" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">Bracket(상부 매립토 저항)</text><line x1="200" y1="280" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">Micro Pile·마찰말뚝</text><line x1="329" y1="220" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">Drain Mat → 집수정 Pump</text><line x1="250" y1="216" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 순응: 영구배수·상수위</text><line x1="130" y1="260" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 대응: Rock Anchor</text><line x1="200" y1="170" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 대응: 자중증대·Bracket</text><line x1="60" y1="110" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 설계지하수위 산정</text><line x1="40" y1="240" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 공사 중 강제배수 유지</text><line x1="380" y1="110" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 지하수위 계측관리</text><line x1="240" y1="50" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 복합공법 경제성 비교</text></svg>',
  subs: [
    { h: '공법 분류', pts: ['순응: [[영구배수]]·상수위', '대응: [[Rock Anchor]]', '대응: [[자중증대]]·Bracket'] },
    { h: '시공 시 유의사항', pts: ['[[설계지하수위]] 산정', '공사 중 강제배수 유지'] },
    { h: '개선방안', pts: ['지하수위 [[계측관리]]', '복합공법 경제성 비교'] }
  ],
  msg: '물을 빼거나(순응), 붙잡거나(대응) — 부력 = 자중 균형 유지',
  mnemo: '브라자는 인접건물 지하 M마트 맹자 (Bracket·Rock Anchor·자중·인접긴결·지하수유입·Micro·마찰말뚝·맹암거)',
  rel: ['부력과 양압력', '영구배수공법', 'Rock Anchor', 'Micro Pile', '상수위 조절', 'Dewatering'],
  src: '근거: 디테일용어300 코어 No.49(p060: 대응공법 Rock Anchor·자중증대·지하수 유입 / 감소공법 Dewatering·맹암거·자연배수, W ≥ 1.25B) / 합격답안 3.기초공사 PDF p77~78(순응·대응, Bracket·인접건물 긴결·마찰말뚝) / 마법지 3기초 부력',
  det: {
    secs: [
      {
        h: '정의',
        def: '지하구조물은 지하수위에서 구조물 저면 깊이만큼 부력을 받아 자중이 부력보다 작으면 [[부상]]하므로, 부력에 저항하는 [[대응공법]](Rock Anchor·자중증대·지하수 유입 등)과 부력을 감소시키는 [[순응(감소)공법]](영구배수·Dewatering·맹암거·자연배수·상수위 조절)으로 대처하는 방안이다.'
      },
      {
        h: '원리 및 도해 — 공법 선정 Process',
        fig: 'MAIN',
        flow: ['지하수위·피압 조사', '부력 검토 W ≥ 1.25B', '순응·대응 공법 비교', 'LCC·유지관리 검토', '공법 선정·시공', '지하수위 계측관리']
      },
      {
        h: '순응공법과 대응공법 비교',
        tbl: {
          head: ['구분', '순응(감소)공법', '대응공법'],
          rows: [
            ['원리', '부력(수압) 자체를 저감', '부력에 저항하는 힘 증대'],
            ['종류', '영구배수(Dewatering)·상수위 조절·맹암거·자연배수·외부배출', 'Rock Anchor·자중증대·지하수 유입·Micro Pile·Bracket·인접건물 긴결·마찰말뚝'],
            ['장점', '기초 두께 감소·공사비 절감', 'Pump 유지관리 부담 적음'],
            ['단점', 'Pump 유지비·Clogging', '공사비 증가, 관통부 방수 취약']
          ]
        }
      },
      {
        h: '관리기준 (공법별 요점)',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['안정 조건', 'W ≥ {{1.25B}} (가장 적절한 균형)', '디테일용어 No.49'],
            ['자중증대', '구조체 단면 증대·기초판 확장, 2중 Slab 채움(중정석·자갈)', '3.기초공사 p78'],
            ['Micro Pile', 'Ø{{300mm}} 이하 소구경 강봉, 암반 정착', '3.기초공사 p78'],
            ['Bracket', '상부 매립토 하중으로 저항', '3.기초공사 p78']
          ]
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 사전조사로 지하수위의 양과 범위·피압 조사', '[전] 인접 구조물·지하 매설물 등 현장 여건 파악', '[전] 유지관리비 포함 모든 상황 고려하여 공법 선정', '[중] 자중 확보 시점까지 강제배수 유지, Anchor·Pile 관통부 방수 상세', '[후] 지하수위 계측관리, Pump·배수로 정기 점검']
      },
      { h: '개선방안', ul: ['순응 + 대응 복합공법(영구배수 + Rock Anchor)으로 경제성 확보', '수위 Sensor·IoT 원격 계측', '상수위 조절로 배수량·유지비 저감'] }
    ]
  }
},
38: {
  title: 'Rock Anchor공법',
  cat: '기초',
  key: ['Rock Anchor', '부력 저항', 'PS Strand', '자유장', '정착장', 'Grouting', '인장·정착', '방수·방식'],
  www: { what: '기초 저면에서 암반까지 천공 후 [[PS Strand]]를 삽입·[[Grouting]]하고 긴장·정착하여 [[부력]]에 저항하는 대응공법', why: '지하수 부력에 의한 구조물 [[부상]]·균열 방지, 기초 두께·자중 증대 최소화', how: '암반 천공 → Strand 삽입 → [[정착장]] Grouting → 양생 → 인장·정착(Lock-off) → 두부 방수 처리' },
  tag: '공법·부력·대응',
  def: '기초 하부 [[암반]]까지 천공하여 [[PS Strand]]를 삽입하고 [[정착장]]을 Grouting한 뒤 긴장·정착하여 그 인장저항으로 지하수 [[부력]]에 대응하는 영구 [[Anchor 공법]]',
  wwh: ['암반 정착 인장재', '부력 부상 방지', '천공→Grout→긴장'],
  figT: 'Rock Anchor의 부력 저항원리 및 시공순서',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="70" width="400" height="140" class="soil"/><line x1="20" y1="70" x2="420" y2="70" class="ln"/><line x1="20" y1="90" x2="420" y2="90" class="bl dash"/><text x="340" y="86" class="s">GWL</text><rect x="40" y="40" width="360" height="30" class="conc"/><text x="220" y="60" text-anchor="middle" class="s">기초 Mat</text><rect x="20" y="210" width="400" height="110" class="bx2"/><text x="340" y="228" class="s">암반</text><rect x="108" y="36" width="24" height="8" class="bx"/><line x1="120" y1="44" x2="120" y2="300" class="rd"/><rect x="113" y="220" width="14" height="80" class="conc"/><rect x="288" y="36" width="24" height="8" class="bx"/><line x1="300" y1="44" x2="300" y2="300" class="rd"/><rect x="293" y="220" width="14" height="80" class="conc"/><line x1="200" y1="200" x2="200" y2="120" class="ar"/><line x1="240" y1="200" x2="240" y2="120" class="ar"/><text x="206" y="160" class="r">부력</text><line x1="150" y1="70" x2="150" y2="210" class="ln2"/><line x1="144" y1="70" x2="156" y2="70" class="ln2"/><line x1="144" y1="210" x2="156" y2="210" class="ln2"/><text x="156" y="146" class="s">자유장</text><line x1="150" y1="220" x2="150" y2="300" class="ln2"/><line x1="144" y1="300" x2="156" y2="300" class="ln2"/><text x="156" y="266" class="s">정착장</text><text x="26" y="334" class="s">천공→Strand 삽입→Grouting→인장·정착</text><line x1="120" y1="40" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">정착구·두부(Lock-off)</text><line x1="120" y1="140" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">PS Strand(Sheath)</text><line x1="300" y1="260" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">정착장 Grout(암반)</text><line x1="150" y1="140" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 자유장+정착장 구성</text><line x1="300" y1="200" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ PS Strand 인장 저항</text><line x1="240" y1="160" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 부력 대응 공법</text><line x1="300" y1="40" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 두부 관통부 방수 상세</text><line x1="308" y1="120" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ Strand 부식 방지</text><line x1="112" y1="280" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 인장시험 확인</text><line x1="128" y1="36" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ Load Cell 장기 계측</text></svg>',
  subs: [
    { h: '특징', pts: ['[[자유장]]+[[정착장]] 구성', 'PS Strand 인장 저항', '[[부력]] 대응 공법'] },
    { h: '시공 시 유의사항', pts: ['두부 관통부 [[방수]] 상세', 'Strand [[부식]] 방지'] },
    { h: '개선방안', pts: ['[[인장시험]] 확인', 'Load Cell 장기 계측'] }
  ],
  msg: '암반을 손으로 잡아 구조물을 붙든다 — 정착장과 방수·방식이 성패',
  mnemo: '자정부 방부 인로 (자유장·정착장·부력 / 방수·부식 / 인장시험·Load Cell)',
  rel: ['Earth Anchor', '부력 대처방안', 'Micro Pile', '영구배수공법', '부력과 양압력'],
  src: '근거: 디테일용어300 코어 No.50(p061: 천공 소요길이+0.5m 이상·7일 이상 양생 170kgf/cm²·소요 앵커력 20% 가산·장단점) / 합격답안 3.기초공사 PDF p77 / 마법지 3기초 부력(Rock Anchor) / 정착장·설계하중은 KDS·설계도서(확인 필요)',
  det: {
    secs: [
      {
        h: '정의',
        def: '구조물에 작용하는 [[부력]]에 저항하기 위해 [[암반층]]까지 천공하여 [[Strand]] 삽입 후 [[Grouting]]하고 [[인장·정착]]하는 부상 방지 영구용 Anchor 공법으로, 인장재와 Anchor 두부를 통해 구조물과 역학적으로 연결된다.'
      },
      {
        h: '원리 및 도해 — 시공 Process',
        fig: 'MAIN',
        flow: ['암반까지 천공', 'Anchor Body(Strand) 삽입', '1차 Grouting(정착장)', '양생 7일 이상', '인장·정착(Lock-off)', '2차 Grouting·두부 방수']
      },
      {
        h: '특징 (장·단점)',
        tbl: {
          head: ['장점', '단점'],
          rows: [
            ['Anchor 개수 및 간격 선택 용이', '공사비 고가'],
            ['장기적 유지관리비 부담 적음', '장기 계측 필요, 방수 선행'],
            ['기초 두께·자중 증대 최소화', 'Strand 부식 시 성능 저하']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['천공 깊이', '소요 길이보다 {{0.5m}} 이상', '디테일용어 No.50'],
            ['Grout 양생', '{{7일}} 이상, 압축강도 {{17MPa}}(170kgf/cm²)', '디테일용어 No.50'],
            ['시험 인장', '소요 앵커력에 {{20%}} 가산', '디테일용어 No.50'],
            ['정착장·설계하중', 'KDS·설계도서', '확인 필요']
          ]
        }
      },
      {
        h: '상세도 — Anchor 두부·방수',
        fig: {
          svg: '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="400" height="60" class="conc"/><text x="40" y="92" class="s">기초 Mat</text><rect x="20" y="120" width="400" height="5" class="bx2"/><rect x="20" y="125" width="400" height="8" class="bx"/><rect x="20" y="133" width="400" height="57" class="soil"/><text x="30" y="170" class="s">토사</text><rect x="20" y="190" width="400" height="70" class="bx2"/><text x="30" y="230" class="s">암반</text><rect x="212" y="60" width="16" height="190" class="ln2"/><rect x="210" y="190" width="20" height="60" class="conc"/><line x1="220" y1="40" x2="220" y2="250" class="rd"/><rect x="195" y="52" width="50" height="8" class="bx2"/><rect x="208" y="40" width="24" height="12" class="bx"/><polyline points="200,52 200,30 240,30 240,52" fill="none" class="ln"/><rect x="204" y="114" width="8" height="6" class="rf"/><rect x="228" y="114" width="8" height="6" class="rf"/><line x1="150" y1="133" x2="150" y2="190" class="ln2"/><line x1="144" y1="133" x2="156" y2="133" class="ln2"/><line x1="144" y1="190" x2="156" y2="190" class="ln2"/><text x="130" y="166" text-anchor="end" class="s">자유장</text><line x1="150" y1="192" x2="150" y2="250" class="ln2"/><line x1="144" y1="250" x2="156" y2="250" class="ln2"/><text x="130" y="226" text-anchor="end" class="s">정착장</text><line x1="220" y1="30" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">Protection Cap(방청 충전)</text><line x1="245" y1="56" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">지압판·정착구(Wedge)</text><line x1="232" y1="46" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">시험인장 = 소요 앵커력 × 1.2</text><line x1="300" y1="90" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="r">Grout 7일↑·17MPa 후 인장</text><line x1="236" y1="117" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="r">관통부 지수 Ring·Sealing</text><line x1="100" y1="122" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="b">기초 하부 방수층·버림</text><line x1="220" y1="160" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="b">자유장: Sheath + 2차 Grout</text><line x1="220" y1="220" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="b">정착장: 1차 Grout(암반)</text><line x1="228" y1="250" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="r">천공 = 소요길이 + 0.5m 이상</text></svg>',
          cap: '[상세] 두부 Protection Cap·지수 Ring, 자유장(2차 Grout)·정착장(1차 Grout)'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반조사로 암반 깊이·절리 확인, 설계 Anchor력 검토, Strand·Sheath 방식 처리 확인', '[중] 천공 깊이 소요길이 + 0.5m 이상, 공내 세척', '[중] 1차(정착장)·2차(자유장) Grouting 밀실 충전, 7일 이상 양생 후 인장', '[중] 기초 관통부 지수 Ring·Sealing, Protection Cap 설치', '[후] 시험 인장(+20%) 확인, Load Cell 장기 계측']
      },
      { h: '개선방안', ul: ['이중 방식(Double Corrosion Protection) Anchor 적용', 'Load Cell 원격 계측으로 긴장력 손실 관리', '영구배수와 복합 적용 경제성 검토'] }
    ]
  }
},
39: {
  title: '영구배수공법(Dewatering)',
  cat: '기초',
  key: ['영구배수', 'Drain Mat(Board)', 'Trench·유공관', '집수정', 'Pump 배수', '양압력 저감', 'Clogging', '상수위 조절'],
  www: { what: '기초 하부에 [[Drain Mat]]·[[Trench(유공관)]]를 설치하여 지하수를 [[집수정]]으로 모아 Pump로 영구 배수해 [[양압력]]을 저감하는 순응공법', why: '부력 저감으로 기초 두께·공사비 절감, 구조물 부상·누수 방지', how: '기초 바닥 정리 → 집수정 설치 → 유공관·Trench 설치 → Drain Mat 설치 → 버림·기초 Con c 타설 → Pump 설치' },
  tag: '공법·배수·순응',
  def: '지하구조물 기초 하부에 [[Drain Mat]]·[[Trench(유공관)]] 등 배수층을 설치하여 유입 지하수를 [[집수정]]에 모아 Pump로 배출함으로써 기초 저면 [[양압력]]을 영구적으로 저감하는 공법',
  wwh: ['기초하부 영구배수', '양압력·부력 저감', 'Drain→집수정→Pump'],
  figT: '영구배수공법의 원리(배수경로) 및 시공순서',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="400" height="270" class="soil"/><line x1="20" y1="100" x2="420" y2="100" class="bl dash"/><text x="26" y="95" class="s">원지하수위</text><rect x="40" y="150" width="380" height="26" class="conc"/><text x="80" y="167" class="s">기초 Slab</text><rect x="40" y="176" width="380" height="10" class="bx2"/><rect x="150" y="186" width="50" height="26" class="bx"/><circle cx="175" cy="199" r="7" class="bx2"/><rect x="270" y="140" width="70" height="110" class="bx"/><rect x="280" y="190" width="50" height="60" class="bx3"/><line x1="305" y1="120" x2="305" y2="230" class="ln"/><polyline points="305,120 305,110 380,110" fill="none" class="ar"/><line x1="60" y1="260" x2="60" y2="192" class="ar"/><line x1="120" y1="260" x2="120" y2="192" class="ar"/><line x1="220" y1="260" x2="220" y2="216" class="ar"/><text x="30" y="290" class="s">지하수 유입(양압력)</text><line x1="200" y1="182" x2="266" y2="182" class="ar"/><text x="330" y="280" class="s">저하수위</text><line x1="270" y1="250" x2="345" y2="250" class="bl"/><text x="26" y="128" class="s">저감된 양압력</text><line x1="100" y1="181" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">Drain Mat(Board)</text><line x1="175" y1="199" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">Trench·유공관·자갈</text><line x1="340" y1="110" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">수중 Pump → 우수관로</text><line x1="60" y1="181" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ Drain Mat·Trench</text><line x1="300" y1="200" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 집수정·Pump 배수</text><line x1="40" y1="160" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 기초두께·공사비 절감</text><line x1="150" y1="205" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ Clogging 막힘 방지</text><line x1="320" y1="230" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ Pump 고장·정전 대비</text><line x1="340" y1="100" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ 상수위 조절 공법</text><line x1="305" y1="150" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ 수위 Sensor 계측관리</text></svg>',
  subs: [
    { h: '구성·특징', pts: ['Drain Mat·[[Trench]]', '[[집수정]]·Pump 배수', '기초두께·공사비 절감'] },
    { h: '문제점·유의사항', pts: ['[[Clogging]] 막힘 방지', 'Pump 고장·정전 대비'] },
    { h: '개선방안', pts: ['[[상수위 조절]] 공법', '수위 Sensor 계측관리'] }
  ],
  msg: '양압력을 버티지 말고 빼낸다 — 막힘(Clogging)·Pump 관리가 생명',
  mnemo: '드집절 클펌 상센 (Drain·집수정·절감 / Clogging·Pump / 상수위·Sensor)',
  rel: ['부력과 양압력', '부력 대처방안', '상수위 조절공법', 'Rock Anchor', 'Deep Well'],
  src: '근거: 디테일용어300 코어 No.51(p062: 토목섬유 피복·겹침 100mm 이상·주관 50m 이내 집수정 연결) / 합격답안 3.기초공사 PDF p101(시공순서·장단점 Clogging)·p77 / 마법지 2토공 배수-영구배수(Trench, Drain Mat, PDD, Dual Chamber, 상수위 조절)',
  det: {
    secs: [
      {
        h: '정의',
        def: '지하수위를 강제로 저하시켜 구조물에 작용하는 [[부력(양압력)]]을 영구적으로 저감하는 공법으로, 기초 하부에 [[배수층]](Drain Mat·Trench)과 [[집수정]]을 설치하여 유입되는 지하수를 Pump로 상시 배출하는 방식이다.'
      },
      {
        h: '원리 및 도해 — 시공순서',
        fig: 'MAIN',
        flow: ['기초 바닥면 정리', '집수정 설치', '유공 배수관(Trench) 설치', '시트형 배수판 설치', '버림 Con\'c 타설', '기초 Con\'c 타설', '집수정 Pump 설치']
      },
      {
        h: '특징 (장·단점)',
        tbl: {
          head: ['장점', '단점'],
          rows: [
            ['기초 하부 지하수 처리로 부력 문제 해결', '지속적 Pump 사용으로 유지비 증대'],
            ['부력 축소로 기초 두께 감소 → 공사비 절감', '배수판 막힘(Clogging) 시 구조체 부상 위험'],
            ['강제배수 대비 주변 침하 방지', '정전·Pump 고장 대비 필요']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['토목섬유 피복', '배수관 전면 피복', '디테일용어 No.51'],
            ['토목섬유 겹침', '겹침길이 {{100mm}} 이상', '디테일용어 No.51'],
            ['주관 연결', '{{50m}} 이내마다 집수정 연결', '디테일용어 No.51'],
            ['배수 용량·Pump', '예상 유입량 산정, 예비 Pump·비상전원', '설계도서 — 확인 필요']
          ]
        }
      },
      {
        h: '상세도 — Trench 배수 단면',
        fig: {
          svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="400" height="40" class="conc"/><text x="40" y="54" class="s">기초 Slab</text><rect x="20" y="70" width="400" height="10" class="bx"/><rect x="20" y="80" width="400" height="10" class="bx2"/><rect x="20" y="90" width="400" height="160" class="soil"/><polygon points="150,90 290,90 260,190 180,190" class="bx3"/><polyline points="150,90 180,190 260,190 290,90" fill="none" class="gr"/><circle cx="175" cy="104" r="4" class="bx2"/><circle cx="200" cy="112" r="4" class="bx2"/><circle cx="240" cy="104" r="4" class="bx2"/><circle cx="265" cy="110" r="4" class="bx2"/><circle cx="190" cy="130" r="4" class="bx2"/><circle cx="250" cy="130" r="4" class="bx2"/><circle cx="195" cy="176" r="4" class="bx2"/><circle cx="245" cy="176" r="4" class="bx2"/><circle cx="220" cy="160" r="20" class="bx2"/><circle cx="210" cy="150" r="2" class="dotf"/><circle cx="230" cy="150" r="2" class="dotf"/><circle cx="220" cy="145" r="2" class="dotf"/><circle cx="208" cy="165" r="2" class="dotf"/><circle cx="232" cy="165" r="2" class="dotf"/><line x1="60" y1="230" x2="140" y2="170" class="ar"/><line x1="380" y1="230" x2="300" y2="170" class="ar"/><line x1="60" y1="140" x2="60" y2="96" class="ar"/><line x1="380" y1="140" x2="380" y2="96" class="ar"/><line x1="100" y1="50" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="s">기초 Slab(부력 저감 → 두께 감소)</text><line x1="100" y1="75" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">버림 Con\'c(Paste 유입 방지)</text><line x1="340" y1="85" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">Drain Board(시트형 배수판)</text><line x1="165" y1="140" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="r">토목섬유 피복·겹침 100mm↑</text><line x1="200" y1="112" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="b">쇄석(자갈) 필터층</text><line x1="220" y1="160" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="r">유공관: 50m 이내 집수정 연결</text><line x1="60" y1="200" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="bl">지하수 유입 → 양압력 저감</text><line x1="260" y1="190" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="s">Clogging 방지 → 배수성능 유지</text></svg>',
          cap: '[상세] 유공관 + 쇄석 필터 + 토목섬유 피복 → Drain Board → 집수정'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 지반 투수계수·유입량 산정, 주변 지반침하 영향 검토', '[중] 배수관 전면 토목섬유 피복, 겹침 100mm 이상 → Clogging 방지', '[중] 주관 50m 이내마다 집수정 연결, 배수 구배 확보', '[중] 버림 Con\'c 타설 시 배수판 손상·Paste 유입 방지', '[후] 예비 Pump·비상전원, 수위 Sensor 경보, 정기 준설·점검']
      },
      { h: '개선방안', ul: ['상수위 조절 배수 → 배수량·유지비 저감', '수위 Sensor·원격 경보 System', 'Dual Chamber·PDD 등 Clogging 저감형 System'] }
    ]
  }
},
40: {
  title: 'Under Pinning',
  cat: '기초',
  key: ['Underpinning', '기존 건물 기초 보강', '가받이', '본받이', '바로받이', '보받이', '바닥판받이', '약액주입', 'Micro Pile'],
  www: { what: '인접 굴착·부동침하·증축 시 [[기존 건물 기초]]를 보강하거나 새 기초로 하중을 옮기는 [[기초 보강공법]]', why: '인접 터파기·지하수 변화로 인한 기존 건물 침하·균열·붕괴 방지', how: '사전조사 → 준비공사 → [[가받이]] → [[본받이]](바로받이·보받이·바닥판받이) → 철거·복구 + 계측' },
  tag: '공법·보강·인접',
  def: '인접 터파기·부동침하·증축 등으로 기존 건물의 기초가 불안정할 때 기초 하부를 [[바로받이]]·[[보받이]]·[[바닥판받이]]·[[약액주입]]·Micro Pile 등으로 보강하여 하중을 새 지지층으로 전달하는 공법',
  wwh: ['기존기초 보강', '인접건물 침하방지', '가받이→본받이'],
  figT: 'Underpinning의 원리(하중이전) 및 공법 종류',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="150" height="90" class="bx"/><text x="105" y="66" text-anchor="middle" class="s">기존 건물</text><rect x="40" y="120" width="130" height="26" class="conc"/><text x="105" y="138" text-anchor="middle" class="s">기존 기초</text><rect x="20" y="146" width="230" height="180" class="soil"/><rect x="20" y="270" width="400" height="56" class="bx2"/><text x="330" y="296" class="s">지지층</text><rect x="60" y="146" width="30" height="124" class="conc"/><text x="56" y="210" text-anchor="end" class="s">바로받이</text><line x1="140" y1="146" x2="160" y2="270" class="rd"/><line x1="150" y1="146" x2="120" y2="270" class="rd"/><text x="166" y="200" class="s">Micro Pile</text><circle cx="110" cy="190" r="22" class="bx2"/><text x="110" y="236" text-anchor="middle" class="s">약액주입</text><line x1="250" y1="60" x2="250" y2="270" class="ln"/><rect x="250" y="60" width="170" height="210" class="bx3"/><text x="270" y="160" class="s">신축 굴착부</text><line x1="80" y1="40" x2="80" y2="116" class="ar"/><line x1="130" y1="40" x2="130" y2="116" class="ar"/><rect x="264" y="80" width="140" height="22" class="bx"/><text x="334" y="95" text-anchor="middle" class="s">사전조사·준비</text><rect x="264" y="110" width="140" height="22" class="bx"/><text x="334" y="125" text-anchor="middle" class="s">가받이→본받이</text><line x1="334" y1="102" x2="334" y2="110" class="ar"/><line x1="75" y1="250" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">하중 → 지지층 이전</text><line x1="250" y1="200" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="r">인접 굴착 → 지반 이완</text><line x1="334" y1="132" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="r">철거·복구 후 계측 유지</text><line x1="300" y1="120" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 사전조사→가받이→본받이</text><line x1="90" y1="220" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="k3">③ 바로받이·보받이</text><line x1="110" y1="200" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="k3">③ 바닥판받이·약액주입</text><line x1="180" y1="80" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="k4">④ 기존 건물 계측 관리</text><line x1="60" y1="160" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="k4">④ 구간 분할·교대 시공</text><line x1="158" y1="240" x2="438" y2="202" class="ld"/><circle cx="438" cy="202" r="2" class="dotf"/><text x="444" y="206" class="k5">⑤ Micro Pile 보강</text><line x1="120" y1="190" x2="438" y2="224" class="ld"/><circle cx="438" cy="224" r="2" class="dotf"/><text x="444" y="228" class="k5">⑤ JSP·LW 약액주입 보강</text></svg>',
  subs: [
    { h: '시공순서·종류', pts: ['사전조사→[[가받이]]→본받이', '[[바로받이]]·보받이', '바닥판받이·[[약액주입]]'] },
    { h: '시공 시 유의사항', pts: ['기존 건물 [[계측]] 관리', '구간 분할·교대 시공'] },
    { h: '개선방안', pts: ['[[Micro Pile]] 보강', '[[JSP]]·LW 약액주입 보강'] }
  ],
  msg: '새로 파기 전에 옆집 발밑부터 받친다 — 가받이 후 본받이',
  mnemo: '사준가본 철복 / 바보는 바닥에서 약을 먹는다(바로받이·보받이·바닥판받이·약액주입)',
  rel: ['Micro Pile', '약액주입공법', '부동침하', '인접건물 보호', '계측관리'],
  src: '근거: 디테일용어300 코어 No.53(p064: 가받이 경사지주·수직지주·Truss 지주법 / 본받이 바로받이·보받이·바닥받이 / 유의사항) / 마법지 3기초 Underpinning(사전조사>준비>가받이>본받이>철거·복구) / 합격답안 3.기초공사 PDF p13~17',
  det: {
    secs: [
      {
        h: '정의',
        def: '기존 구조물의 기초를 보강하거나 새로운 기초를 설치하여 보강하는 공법으로, 기존 구조물의 [[노후화]], 흙막이 배면 지반 이완 등에 따른 인접 건물·도로·상하수도관 등의 [[변형·침하]]를 사전에 방지하기 위한 공법이다.'
      },
      { h: '원리 및 도해 — 시공 Process', fig: 'MAIN', flow: ['사전조사(흙막이·주변, 하중 검토)', '준비공사', '가받이 공사', '본받이 공사', '철거·복구', '계측관리'] },
      {
        h: '종류',
        tbl: {
          head: ['구분', '공법', '내용'],
          rows: [
            ['가받이', '경사지주법·수직지주법·Truss 지주법', '지주에 의한 가받이 / 신설 기초 일부 이용 가받이'],
            ['본받이', '바로받이·보받이·바닥(판)받이', '기초 하부 직접 보강 / 보로 하중 전달 / 신설 바닥판 방식'],
            ['지반보강', '약액주입(JSP·LW)·Micro Pile', '지반 강화·소구경 말뚝으로 하중 이전']
          ]
        }
      },
      {
        h: '관리기준',
        tbl: {
          head: ['항목', '기준', '근거'],
          rows: [
            ['부동침하', '하중 전이 시 부동침하 허용값 이내 관리', '디테일용어 No.53'],
            ['공법 선정', '기초 형식 기준 같은 방식 시공 → 부동침하 방지', '디테일용어 No.53'],
            ['계측', '기존 건물 기울기·균열·침하 계측 병행', '디테일용어 No.53'],
            ['허용 침하·기울기 수치', '설계도서·계측관리 기준', '확인 필요']
          ]
        }
      },
      {
        h: '상세도 — 가받이 공법',
        fig: {
          svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="200" x2="430" y2="200" class="ln"/><rect x="20" y="120" width="40" height="80" class="soil"/><rect x="60" y="30" width="20" height="150" class="bx"/><rect x="50" y="180" width="40" height="16" class="conc"/><line x1="80" y1="70" x2="130" y2="190" class="ln"/><rect x="122" y="190" width="20" height="10" class="bx2"/><polygon points="80,66 88,62 88,74" class="rf"/><rect x="190" y="30" width="20" height="120" class="bx"/><rect x="170" y="90" width="70" height="10" class="bx2"/><line x1="178" y1="100" x2="178" y2="200" class="ln"/><line x1="232" y1="100" x2="232" y2="200" class="ln"/><rect x="228" y="188" width="8" height="10" class="rf"/><rect x="174" y="188" width="8" height="10" class="rf"/><rect x="330" y="30" width="20" height="120" class="bx"/><polyline points="350,60 420,60 420,110 350,110 350,60 420,110" fill="none" class="ln2"/><polyline points="385,60 385,110 350,60" fill="none" class="ln2"/><line x1="420" y1="110" x2="420" y2="200" class="ln"/><text x="80" y="236" text-anchor="middle" class="s">① 경사지주법</text><text x="205" y="236" text-anchor="middle" class="s">② 수직지주법</text><text x="370" y="236" text-anchor="middle" class="s">③ Truss 지주법</text><line x1="70" y1="50" x2="438" y2="26" class="ld"/><circle cx="438" cy="26" r="2" class="dotf"/><text x="444" y="30" class="b">기존 건물 벽·기둥</text><line x1="105" y1="130" x2="438" y2="48" class="ld"/><circle cx="438" cy="48" r="2" class="dotf"/><text x="444" y="52" class="b">경사지주(빗버팀)+쐐기</text><line x1="205" y1="95" x2="438" y2="70" class="ld"/><circle cx="438" cy="70" r="2" class="dotf"/><text x="444" y="74" class="b">받침보(Needle Beam) 관통</text><line x1="232" y1="192" x2="438" y2="92" class="ld"/><circle cx="438" cy="92" r="2" class="dotf"/><text x="444" y="96" class="r">Jack 가압·쐐기 조정</text><line x1="400" y1="85" x2="438" y2="114" class="ld"/><circle cx="438" cy="114" r="2" class="dotf"/><text x="444" y="118" class="b">Truss로 하중 전달</text><line x1="70" y1="188" x2="438" y2="136" class="ld"/><circle cx="438" cy="136" r="2" class="dotf"/><text x="444" y="140" class="bl">본받이: 바로·보·바닥(판)받이</text><line x1="200" y1="150" x2="438" y2="158" class="ld"/><circle cx="438" cy="158" r="2" class="dotf"/><text x="444" y="162" class="r">전이 시 부동침하 허용값 이내</text><line x1="30" y1="150" x2="438" y2="180" class="ld"/><circle cx="438" cy="180" r="2" class="dotf"/><text x="444" y="184" class="s">구간 분할·교대 시공</text></svg>',
          cap: '[상세] 경사지주·수직지주(Needle Beam)·Truss 지주 → 본받이로 하중 전이'
        }
      },
      {
        h: '시공 시 유의사항 (시공 전·중·후)',
        ul: ['[전] 흙막이 및 주변 상황 조사, 기존 건물 하중 검토, 균열 사진·기록', '[전] 기존 기초 형식에 맞는 동일 방식 공법 선정', '[중] 구간 분할·교대 시공 → 한 번에 지지력 상실 방지', '[중] 하중 전이 시 Jack 가압·쐐기 조정, 부동침하 허용값 이내', '[후] 철거·복구 후 계측 지속, 균열 보수']
      },
      { h: '개선방안', ul: ['Micro Pile·JSP 등 무진동 보강', '경사계·균열계 자동화 계측 실시간 관리', '인접 구조물 영향 수치해석 사전 검토'] }
    ]
  }
}
});
