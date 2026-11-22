// 디테일원 용어250 그룹 a (2,3,4,12~24) 가설·토공·흙막이 — 형식 data/SCHEMA_DW.md
// 근거: 디테일용어300(1~100) 합격답안, 디테일원 p183·185, 마법지 1·2공종, KCS/KDS
window.DW = Object.assign(window.DW || {}, {
2: {
  title: 'System 비계',
  cat: '가설·건설기계',
  key: ['수직재·수평재·가새재', '규격화·표준화', '쐐기형 연결철물', '일체형 비계', '받침철물(Jack Base)', '겹침길이 1/3 이상', '안전난간 90cm 이상', '작업발판 40cm 이상', '벽이음'],
  www: {
    what: '[[수직재·수평재·가새재]]를 공장에서 [[규격화]]하여 [[쐐기형 연결철물]]로 현장 조립하는 [[일체형 비계]]',
    why: '강관비계 대비 결속 불량·붕괴·추락 위험을 줄이고, 조립·해체 속도와 구조적 안전성을 높이기 위함',
    how: '지반 다짐·깔판 → [[받침철물(Jack Base)]] 설치 → 수직재·수평재 조립 → 가새·[[벽이음]] → 작업발판·[[안전난간]] 설치 → 검사'
  },
  tag: '시설·부재·기능',
  def: '[[수직재·수평재·가새재]] 등 각 부재를 [[규격화]]하여 [[쐐기형 연결철물]]로 현장 조립하는 [[일체형 비계]]로, 부재 표준화로 조립이 간편하고 구조적 안전성이 우수한 가설구조물',
  wwh: ['규격 부재 비계', '추락·붕괴 방지', '쐐기 연결 조립'],
  figT: 'System 비계의 구성 및 설치기준',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="292" width="276" height="10" class="soil"/><line x1="14" y1="292" x2="290" y2="292" class="ln"/>' +
    '<rect x="24" y="50" width="14" height="242" class="conc"/><line x1="100" y1="60" x2="100" y2="272" class="ln"/><rect x="95" y="272" width="10" height="16" class="bx2"/>' +
    '<rect x="88" y="288" width="24" height="4" class="conc"/><line x1="180" y1="60" x2="180" y2="272" class="ln"/><rect x="175" y="272" width="10" height="16" class="bx2"/>' +
    '<rect x="168" y="288" width="24" height="4" class="conc"/><line x1="260" y1="60" x2="260" y2="272" class="ln"/><rect x="255" y="272" width="10" height="16" class="bx2"/>' +
    '<rect x="248" y="288" width="24" height="4" class="conc"/><line x1="100" y1="72" x2="260" y2="72" class="ln2"/><line x1="100" y1="91" x2="260" y2="91" class="ln2"/><line x1="100" y1="110" x2="260" y2="110" class="ln"/>' +
    '<line x1="100" y1="180" x2="260" y2="180" class="ln"/><line x1="100" y1="250" x2="260" y2="250" class="ln"/><rect x="100" y="104" width="160" height="6" class="bx2"/>' +
    '<rect x="100" y="174" width="160" height="6" class="bx2"/><line x1="100" y1="250" x2="180" y2="180" class="ln2"/><line x1="180" y1="250" x2="260" y2="180" class="ln2"/>' +
    '<line x1="38" y1="145" x2="100" y2="145" class="ln"/><line x1="38" y1="215" x2="100" y2="215" class="ln"/><circle cx="100" cy="110" r="2.5" class="bf"/><circle cx="100" cy="180" r="2.5" class="bf"/>' +
    '<circle cx="100" cy="250" r="2.5" class="bf"/><circle cx="180" cy="110" r="2.5" class="bf"/><circle cx="180" cy="180" r="2.5" class="bf"/><circle cx="180" cy="250" r="2.5" class="bf"/>' +
    '<circle cx="260" cy="110" r="2.5" class="bf"/><circle cx="260" cy="180" r="2.5" class="bf"/><circle cx="260" cy="250" r="2.5" class="bf"/><line x1="70" y1="145" x2="46" y2="128" class="ld"/>' +
    '<circle cx="46" cy="128" r="2" class="dotf"/><text x="50" y="132" class="b">벽이음</text><line x1="220" y1="72" x2="296" y2="46" class="ld"/><circle cx="296" cy="46" r="2" class="dotf"/>' +
    '<text x="300" y="50" class="r">안전난간 90cm↑</text><line x1="230" y1="102" x2="296" y2="70" class="ld"/><circle cx="296" cy="70" r="2" class="dotf"/><text x="300" y="74" class="r">발끝막이판 10cm↑</text>' +
    '<line x1="240" y1="110" x2="296" y2="106" class="ld"/><circle cx="296" cy="106" r="2" class="dotf"/><text x="300" y="110" class="bl">수평재</text><line x1="260" y1="140" x2="296" y2="130" class="ld"/>' +
    '<circle cx="296" cy="130" r="2" class="dotf"/><text x="300" y="134" class="bl">수직재</text><line x1="220" y1="177" x2="296" y2="156" class="ld"/><circle cx="296" cy="156" r="2" class="dotf"/>' +
    '<text x="300" y="160" class="r">작업발판 40cm↑</text><line x1="220" y1="215" x2="296" y2="196" class="ld"/><circle cx="296" cy="196" r="2" class="dotf"/><text x="300" y="200" class="b">가새 40~60°</text>' +
    '<line x1="180" y1="250" x2="296" y2="236" class="ld"/><circle cx="296" cy="236" r="2" class="dotf"/><text x="300" y="240" class="bl">쐐기 연결철물</text><line x1="260" y1="282" x2="296" y2="280" class="ld"/>' +
    '<circle cx="296" cy="280" r="2" class="dotf"/><text x="300" y="284" class="bl">잭베이스·깔판</text><text x="446" y="34" class="k3">③ 수직·수평·가새 규격화</text><text x="446" y="54" class="k3">③ 쐐기 연결 일체형</text>' +
    '<text x="446" y="74" class="k3">③ 발판·난간 동시 설치</text><text x="446" y="100" class="k4">④ 지반 다짐·깔판 설치</text><text x="446" y="120" class="k4">④ 받침철물 겹침 1/3↑</text><text x="446" y="140" class="k4">④ 벽이음 제조사 간격</text>' +
    '<text x="446" y="166" class="k5">⑤ 안전인증 제품 사용</text><text x="446" y="186" class="k5">⑤ 해체는 역순·상부부터</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">지반 다짐·깔판</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">잭베이스 설치</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">수직재·수평재 조립</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">가새·벽이음</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="345" text-anchor="middle" class="s">작업발판·안전난간</text></svg>',
  subs: [
    { h: '구성 및 특징', pts: ['수직·수평·가새 [[규격화]]', '[[쐐기]] 연결 일체형', '발판·난간 동시 설치'] },
    { h: '시공 시 유의사항', pts: ['지반 다짐·깔판 설치', '받침철물 겹침 {{1/3↑}}', '벽이음 제조사 간격'] },
    { h: '개선방안', pts: ['안전인증 제품 사용', '해체는 역순·상부부터'] }
  ],
  msg: '규격 부재 + 쐐기 연결 = 발판·난간 일체 → 추락·붕괴 없는 비계',
  mnemo: '수·수·가 쐐기로 / 발판 40 난간 90 / 받침 1/3',
  rel: ['강관비계', 'System Support', '안전난간', '벽이음', '낙하물 방지망'],
  src: '근거: 산업안전보건기준에 관한 규칙 제13조(안전난간)·제56조(작업발판)·제69조(시스템비계 구조)·제70조(조립) / KCS 21 60 10 비계(가새 40~60°) / 마법지 1공종 직접가설(비계시설물) / 합격답안: 디테일용어300 No.3(p014: Jack Base 600mm·벽연결 8m·H20m 초과 1.8m 메모 — 강관틀비계 기준과 혼재, 확인 필요), 디테일원 p183',
  det: /*DET*/{ secs: [
      { h: '정의', def: '[[수직재·수평재·가새재]] 등 각 부재를 공장에서 [[규격화]]하여 [[쐐기형 연결철물]]로 현장 조립하는 [[일체형 비계]]로, 작업발판·[[안전난간]]을 동시에 설치하여 추락·붕괴 위험을 줄인 구조적 안전성이 우수한 가설구조물' },
      { h: '구성 및 기능 원리', fig: 'MAIN', ul: [
          '수직재·수평재·가새재: 공장 [[규격화]] 부재 → [[쐐기형 연결철물]]로 일체 결속 → 연결부 강성 확보',
          '받침철물(Jack Base)·깔판: 수직하중을 지반에 분산, 높이 조절',
          '벽이음: 수평력(풍하중)·전도 저항 / 작업발판·안전난간: 추락 방지'
        ] },
      { h: '특징 (System 비계 vs 강관비계)', tbl: { head: ['구분', 'System 비계', '강관비계(단관)'], rows: [
            ['연결 방식', '[[쐐기형 연결철물]] 일체 결속', 'Clamp·Coupler 개별 결속'],
            ['구조 성능', '연결부 결합성 우수 → 강성 큼', '결속 불량 시 강성 저하'],
            ['안전성', '발판·난간 동시 설치 → 추락 위험 낮음', '난간·발판 별도 설치'],
            ['시공성', '규격 부재 → 조립·해체 신속', '숙련도 의존·시간 소요'],
            ['경제성', '초기비용 높음, 전용성 우수', '초기비용 낮음']
          ] } },
      { h: '시공 Process', flow: ['지반 다짐·깔판', '받침철물(Jack Base)', '수직재 세우기', '수평재·쐐기 결속', '가새·벽이음', '작업발판·안전난간', '검사·사용'], fig: { svg: '<svg viewBox="0 0 640 262" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="24" height="229" class="conc"/><line x1="120" y1="20" x2="120" y2="232" class="ln"/><line x1="220" y1="20" x2="220" y2="232" class="ln"/><rect x="116" y="232" width="8" height="13" class="bx2"/><rect x="216" y="232" width="8" height="13" class="bx2"/><rect x="108" y="245" width="24" height="4" class="conc"/><rect x="208" y="245" width="24" height="4" class="conc"/><rect x="20" y="249" width="280" height="8" class="soil"/><line x1="20" y1="249" x2="300" y2="249" class="ln"/><line x1="54" y1="140" x2="120" y2="140" class="ln2"/><rect x="54" y="136" width="6" height="8" class="bx2"/><rect x="122" y="196" width="46" height="6" class="bx2"/><rect x="172" y="196" width="46" height="6" class="bx2"/><line x1="120" y1="206" x2="220" y2="206" class="ln"/><circle cx="120" cy="206" r="2.5" class="bf"/><circle cx="220" cy="206" r="2.5" class="bf"/><circle cx="226" cy="110" r="4" class="ln"/><circle cx="226" cy="155" r="4" class="ln"/><rect x="222" y="186" width="5" height="10" class="conc"/><line x1="256" y1="110" x2="256" y2="196" class="ln2"/><line x1="251" y1="110" x2="261" y2="110" class="ln2"/><line x1="251" y1="196" x2="261" y2="196" class="ln2"/><line x1="88" y1="140" x2="78" y2="112" class="ld"/><circle cx="78" cy="112" r="2" class="dotf"/><text x="60" y="106" class="b">벽이음</text><line x1="230" y1="110" x2="336" y2="44" class="ld"/><circle cx="336" cy="44" r="2" class="dotf"/><text x="340" y="48" class="bl">상부 난간대(100kg 하중 견딤)</text><line x1="256" y1="130" x2="336" y2="70" class="ld"/><circle cx="336" cy="70" r="2" class="dotf"/><text x="340" y="74" class="r">상부 90cm↑ (120cm↑ 시 중간대 2단↑)</text><line x1="230" y1="155" x2="336" y2="96" class="ld"/><circle cx="336" cy="96" r="2" class="dotf"/><text x="340" y="100" class="bl">중간 난간대</text><line x1="227" y1="190" x2="336" y2="122" class="ld"/><circle cx="336" cy="122" r="2" class="dotf"/><text x="340" y="126" class="r">발끝막이판 10cm↑</text><line x1="195" y1="198" x2="336" y2="148" class="ld"/><circle cx="336" cy="148" r="2" class="dotf"/><text x="340" y="152" class="r">작업발판 폭 40cm↑</text><line x1="170" y1="199" x2="336" y2="174" class="ld"/><circle cx="336" cy="174" r="2" class="dotf"/><text x="340" y="178" class="r">발판 틈 3cm↓</text><line x1="180" y1="206" x2="336" y2="200" class="ld"/><circle cx="336" cy="200" r="2" class="dotf"/><text x="340" y="204" class="bl">장선(수평재)·쐐기 결속</text><line x1="124" y1="238" x2="336" y2="226" class="ld"/><circle cx="336" cy="226" r="2" class="dotf"/><text x="340" y="230" class="r">받침철물 겹침 1/3↑</text><line x1="240" y1="253" x2="336" y2="250" class="ld"/><circle cx="336" cy="250" r="2" class="dotf"/><text x="340" y="254" class="b">깔판·지반 다짐</text></svg>', cap: '[상세] 작업발판·안전난간 단면 — 난간 90cm↑·발끝막이판 10cm↑·발판 폭 40cm↑·받침철물 겹침 1/3↑' } },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 조립도·구조검토 작성(높이 31m 이상 비계 등은 가설구조물 구조적 안전성 확인), 안전인증 제품 반입검사',
          '[전] 지반 다짐·깔판 설치·배수 처리 → 부등침하 방지',
          '[중] 수직재와 받침철물 밀착, 겹침 {{1/3 이상}}, 경사지는 쐐기·피벗형 받침철물로 수직도 확보',
          '[중] 수평재는 수직재와 직각, 쐐기 체결 후 흔들림 확인, 가새·벽이음 조립과 동시 설치',
          '[중] 작업발판 최대적재하중 표지, 상·하 동시작업 금지',
          '[후] 해체는 조립 역순(상부→하부), 벽이음은 해당 단 해체 직전 제거, 부재 투하 금지',
          '[후] 강풍·폭우 후 및 작업 전 연결부 이완·침하 점검',
          '[대책] 붕괴: 지반 침하·벽이음 누락·과적 → 깔판·벽이음 준수, 적재하중 표지',
          '[대책] 추락: 발판 틈·난간 미설치 → 발판·난간 일체형 부재, 추락방호망 병행',
          '[대책] 연결부 이완: 쐐기 미체결 → 해머 타격 체결·체크리스트 점검',
          '[대책] 개선: 안전인증 제품, BIM 가설계획, 기울기 센서 스마트 모니터링'
        ] },
      { h: '설치기준 (산업안전보건기준규칙·KCS 21 60 10)', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['받침철물 겹침', '받침철물 전체길이의 {{1/3 이상}}', '산안규칙 제69조'],
            ['밑둥 처리', '받침철물·깔판, 경사지는 피벗형 받침철물·쐐기로 수평·수직 유지', '산안규칙 제70조'],
            ['벽 연결재', '제조사가 정한 기준 간격 (합격답안 메모: 수직·수평 8m — 확인 필요)', '산안규칙 제69조 / 합격답안 p014'],
            ['안전난간', '상부 난간대 {{90cm 이상}}, 발끝막이판 {{10cm 이상}}, {{100kg}} 하중에 견딤', '산안규칙 제13조'],
            ['작업발판', '폭 {{40cm 이상}}, 발판재 틈 {{3cm 이하}}', '산안규칙 제56조'],
            ['가새', '수평면과 {{40~60°}}', 'KCS 21 60 10'],
            ['Jack Base·주틀 간격', '조절높이 600mm 이하, H 20m 초과 시 1.8m 이하 (합격답안 메모 — 확인 필요)', '합격답안 p014']
          ] } }
    ] }/*/DET*/
},
3: {
  title: '낙하물 방지망(Debris net)',
  cat: '가설·건설기계',
  key: ['낙하물·비래물', '높이 10m 이내', '내민길이 2m 이상', '수평면 20~30°', '그물코 20mm 이하', '버팀대(Bracket)', '수직보호망', '방호선반'],
  www: {
    what: '비계·구조체 외부에 [[높이 10m 이내]]마다 [[내민길이 2m 이상]], [[수평면 20~30°]]로 설치하는 그물형 [[낙하물]] 방지시설',
    why: '공사 중 자재·공구의 낙하·비래로 인한 작업자·통행인 재해와 인접 피해를 방지하기 위함',
    how: '버팀대(Bracket) 설치 → 방지망 펼침·결속 → 테두리 로프 긴결 → 정기 점검·낙하물 제거 → 해체'
  },
  tag: '시설·안전·기준',
  def: '고층 공사 시 자재·공구 등의 [[낙하·비래]] 재해를 막기 위해 비계·구조체 외부에 [[높이 10m 이내]]마다 [[내민길이 2m 이상]], 수평면과 {{20~30°}}로 설치하는 그물형 안전시설',
  wwh: ['낙하물 차단망', '낙하·비래 재해', '10m·2m·20~30°'],
  figT: '낙하물 방지망의 설치구조 및 기준',
  svg: '<svg viewBox="0 0 640 336" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="306" width="276" height="8" class="soil"/><line x1="14" y1="306" x2="290" y2="306" class="ln"/>' +
    '<rect x="20" y="30" width="60" height="276" class="bx"/><line x1="20" y1="90" x2="80" y2="90" class="ln2"/><line x1="20" y1="150" x2="80" y2="150" class="ln2"/><line x1="20" y1="210" x2="80" y2="210" class="ln2"/>' +
    '<line x1="20" y1="260" x2="80" y2="260" class="ln2"/><text x="50" y="184" text-anchor="middle" class="s">구조체</text><line x1="95" y1="30" x2="95" y2="306" class="ln"/><line x1="110" y1="30" x2="110" y2="306" class="ln"/>' +
    '<line x1="110" y1="100" x2="230" y2="52" class="ln"/><path d="M110,100 L230,52" class="ln2 dash"/><line x1="230" y1="52" x2="230" y2="44" class="ln"/><line x1="110" y1="135" x2="180" y2="72" class="ln2"/>' +
    '<line x1="110" y1="240" x2="230" y2="192" class="ln"/><line x1="230" y1="192" x2="230" y2="184" class="ln"/><line x1="110" y1="272" x2="180" y2="212" class="ln2"/>' +
    '<line x1="110" y1="240" x2="170" y2="240" class="ln2 dash"/><path d="M150,240 A40,40 0 0,0 147,225" class="ln2"/><line x1="255" y1="100" x2="255" y2="240" class="ln2"/>' +
    '<line x1="249" y1="100" x2="261" y2="100" class="ln2"/><line x1="249" y1="240" x2="261" y2="240" class="ln2"/><line x1="110" y1="282" x2="230" y2="282" class="ln2"/><line x1="110" y1="277" x2="110" y2="287" class="ln2"/>' +
    '<line x1="230" y1="277" x2="230" y2="287" class="ln2"/><rect x="200" y="14" width="12" height="9" class="bx2"/><line x1="206" y1="25" x2="206" y2="56" class="ar"/><line x1="212" y1="18" x2="296" y2="32" class="ld"/>' +
    '<circle cx="296" cy="32" r="2" class="dotf"/><text x="300" y="36" class="b">낙하물</text><line x1="196" y1="74" x2="296" y2="58" class="ld"/><circle cx="296" cy="58" r="2" class="dotf"/>' +
    '<text x="300" y="62" class="r">방지망 그물코 20mm↓</text><line x1="150" y1="99" x2="296" y2="86" class="ld"/><circle cx="296" cy="86" r="2" class="dotf"/><text x="300" y="90" class="bl">버팀대(Bracket)</text>' +
    '<line x1="110" y1="120" x2="296" y2="114" class="ld"/><circle cx="296" cy="114" r="2" class="dotf"/><text x="300" y="118" class="bl">비계기둥</text><line x1="255" y1="170" x2="296" y2="146" class="ld"/>' +
    '<circle cx="296" cy="146" r="2" class="dotf"/><text x="300" y="150" class="r">설치 높이 10m 이내</text><line x1="230" y1="188" x2="296" y2="192" class="ld"/><circle cx="296" cy="192" r="2" class="dotf"/>' +
    '<text x="300" y="196" class="b">테두리 로프 결속</text><line x1="160" y1="232" x2="296" y2="216" class="ld"/><circle cx="296" cy="216" r="2" class="dotf"/><text x="300" y="220" class="r">수평 20~30°</text>' +
    '<line x1="102" y1="258" x2="296" y2="240" class="ld"/><circle cx="296" cy="240" r="2" class="dotf"/><text x="300" y="244" class="bl">비계 결속(벽이음)</text><line x1="200" y1="282" x2="296" y2="266" class="ld"/>' +
    '<circle cx="296" cy="266" r="2" class="dotf"/><text x="300" y="270" class="r">내민길이 2m↑</text><text x="446" y="34" class="k3">③ 높이 10m 이내마다</text><text x="446" y="54" class="k3">③ 내민길이 2m 이상</text>' +
    '<text x="446" y="74" class="k3">③ 수평면 20~30°</text><text x="446" y="100" class="k4">④ 그물코 20mm 이하</text><text x="446" y="120" class="k4">④ 망 이음·결속 철저</text><text x="446" y="140" class="k4">④ 파손·낙하물 수시 점검</text>' +
    '<text x="446" y="166" class="k5">⑤ 수직보호망 병행</text><text x="446" y="186" class="k5">⑤ 일체형 Bracket 적용</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">버팀대(Bracket) 설치</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">방지망 펼침·결속</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">테두리 로프 긴결</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">정기 점검·낙하물 제거</text></svg>',
  subs: [
    { h: '설치기준', pts: ['높이 {{10m}} 이내마다', '내민길이 {{2m}} 이상', '수평면 {{20~30°}}'] },
    { h: '시공 시 유의사항', pts: ['그물코 {{20mm}} 이하', '망 이음·결속 철저', '파손·낙하물 수시 점검'] },
    { h: '개선방안', pts: ['수직보호망 병행', '일체형 Bracket 적용'] }
  ],
  msg: '10m마다·2m 내밀고·20~30° 올려 → 낙하·비래 재해 차단',
  mnemo: '10·2·20~30 (십이 이삼) + 그물 20',
  rel: ['수직보호망', '방호선반', '추락방호망', 'System 비계', '안전난간'],
  src: '근거: 산업안전보건기준에 관한 규칙 제14조(낙하물에 의한 위험의 방지) / KCS 21 70 15(낙하물 재해방지시설 — 조항 확인 필요) / 마법지 1공종 직접가설(안전시설물) / 합격답안: 디테일원 p185(그물코 20mm 이하)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '고층 공사 시 자재·공구 등의 [[낙하·비래]] 재해를 막기 위해 비계·구조체 외부에 [[높이 10m 이내]]마다 벽면에서 [[내민길이 2m 이상]], 수평면과 {{20~30°}}로 설치하는 그물형 [[낙하물 방지시설]]' },
      { h: '설치기준 (산업안전보건기준규칙 제14조)', fig: 'MAIN', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['설치 높이', '{{10m 이내}}마다', '산안규칙 제14조'],
            ['내민길이', '벽면으로부터 {{2m 이상}}', '산안규칙 제14조'],
            ['설치 각도', '수평면과 {{20~30°}}', '산안규칙 제14조'],
            ['그물코', '{{20mm 이하}}', '디테일원 p185 (지침 조항 확인 필요)'],
            ['이음·결속', '망 이음 겹침·로프 결속, 구조체와 틈새 없게', 'KCS 21 70 15 (확인 필요)']
          ] } },
      { h: '낙하물 방지시설의 분류·비교', tbl: { head: ['구분', '낙하물 방지망', '수직보호망', '방호선반'], rows: [
            ['설치 위치', '비계·구조체 외측 경사 설치', '비계 외측 수직면 전면', '출입구·통로 상부'],
            ['기능', '낙하물을 받아냄(1차 차단)', '비산·낙하 외부 차단', '통행인 머리 위 보호'],
            ['재료', '합성섬유 그물(그물코 {{20mm↓}})', '합성섬유 망', '판재(합판·강판)']
          ] } },
      { h: '설치 목적 및 Process', p: '목적: 낙하·비래물 1차 차단 → 하부 작업자·통행인 보호, 외부 비산 방지', flow: ['설치계획(위치·단수)', '버팀대(Bracket) 설치', '방지망 펼침·결속', '테두리 로프 긴결', '이음·틈새 처리', '정기 점검·낙하물 제거', '해체(상부부터)'] },
      { h: '설치·관리 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 외부비계·공정계획과 연계하여 설치 위치·단수 결정, 인증 제품 반입검사',
          '[중] Bracket을 비계·구조체에 견고히 고정, 각도 {{20~30°}}·내민길이 {{2m↑}} 유지',
          '[중] 망 이음부·모서리·개구부 틈새 없이 결속, 테두리 로프 긴결',
          '[중] 방지망 위 자재 적치 금지, 하부 통행로 통제',
          '[후] 낙하물 수시 제거, 파손·처짐·결속 이완 정기점검',
          '[후] 해체는 상부부터, 하부 출입 통제 후 실시',
          '[대책] 처짐·파손: 낙하물 누적·노후 → 정기 제거·교체',
          '[대책] 틈새 낙하: 모서리·개구부 처리 미흡 → 코너 전용 망·보강',
          '[대책] 개선: 일체형 Bracket·시스템 방지망, 수직보호망·방호선반 병행, CCTV 감시'
        ] }
    ] }/*/DET*/
},
4: {
  title: '복공구조물, 가설구대(Over Bridge)',
  cat: '가설·건설기계',
  key: ['복공판', '주형·상현재', 'Post Pile', '허용 활하중 20kN/m²', '장비 500kN 이상', '진입로 경사 1/6', '단차 10mm 이내', '풍화암 정착', '가새(좌굴방지)'],
  www: {
    what: '도심지 굴착 시 [[복공판]]·[[주형]]·[[Post Pile]]로 지상 작업공간과 장비 동선을 확보하는 [[가설구대(Over Bridge)]]',
    why: '협소 대지에서 장비 진출입·자재 반입 공간과 교통·보행로를 유지하고, 장비 하중에 의한 붕괴를 방지하기 위함',
    how: 'Post Pile 시공(풍화암 정착) → 주형·가새 설치 → [[복공판]] 깔기 → 진입로(1/6)·난간 → 정기 구조검토·점검'
  },
  tag: '시설·구조·기준',
  def: '지하 굴착 공사 중 [[Post Pile]] 위에 [[주형]]과 [[복공판]]을 설치하여 장비 진출입·자재 반입·작업동선을 확보하는 가설 연결 구조물로, [[허용 활하중]] {{20kN/m²}}·장비 하중에 대한 구조검토가 필수',
  wwh: ['가설 작업구대', '장비·자재 동선', 'Post+주형+복공판'],
  figT: '가설구대(복공구조물)의 단면 및 구조검토',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="120" width="80" height="180" class="soil"/><rect x="275" y="120" width="15" height="180" class="soil"/>' +
    '<rect x="100" y="270" width="175" height="30" class="soil"/><text x="192" y="291" text-anchor="middle" class="s">풍화암</text><line x1="20" y1="120" x2="60" y2="120" class="ln"/>' +
    '<line x1="60" y1="120" x2="100" y2="100" class="ln"/><rect x="100" y="96" width="175" height="8" class="bx2"/><rect x="100" y="104" width="175" height="8" class="bx"/>' +
    '<rect x="147" y="112" width="6" height="178" class="conc"/><rect x="232" y="112" width="6" height="178" class="conc"/><line x1="150" y1="140" x2="235" y2="200" class="ln2"/>' +
    '<line x1="235" y1="140" x2="150" y2="200" class="ln2"/><line x1="150" y1="210" x2="235" y2="210" class="ln"/><line x1="100" y1="100" x2="100" y2="270" class="ln"/><line x1="275" y1="100" x2="275" y2="270" class="ln"/>' +
    '<rect x="180" y="72" width="50" height="20" class="bx2"/><circle cx="190" cy="94" r="3" class="ln"/><circle cx="220" cy="94" r="3" class="ln"/><line x1="80" y1="110" x2="30" y2="80" class="ld"/>' +
    '<circle cx="30" cy="80" r="2" class="dotf"/><text x="34" y="84" class="r">진입로 경사 1/6↓</text><line x1="205" y1="76" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/>' +
    '<text x="300" y="40" class="r">장비 하중(500kN↑)</text><line x1="262" y1="98" x2="296" y2="60" class="ld"/><circle cx="296" cy="60" r="2" class="dotf"/><text x="300" y="64" class="r">복공판 단차 10mm↓</text>' +
    '<line x1="272" y1="100" x2="296" y2="84" class="ld"/><circle cx="296" cy="84" r="2" class="dotf"/><text x="300" y="88" class="r">허용 활하중 20kN/m²</text><line x1="250" y1="108" x2="296" y2="114" class="ld"/>' +
    '<circle cx="296" cy="114" r="2" class="dotf"/><text x="300" y="118" class="bl">주형·상현재</text><line x1="235" y1="152" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/>' +
    '<text x="300" y="150" class="bl">Post Pile(H-Pile)</text><line x1="214" y1="186" x2="296" y2="176" class="ld"/><circle cx="296" cy="176" r="2" class="dotf"/><text x="300" y="180" class="bl">수평·경사 가새</text>' +
    '<line x1="200" y1="210" x2="296" y2="210" class="ld"/><circle cx="296" cy="210" r="2" class="dotf"/><text x="300" y="214" class="bl">하현재(수평재)</text><line x1="235" y1="286" x2="296" y2="282" class="ld"/>' +
    '<circle cx="296" cy="282" r="2" class="dotf"/><text x="300" y="286" class="r">선단 풍화암 정착</text><text x="446" y="34" class="k3">③ 허용 활하중 20kN/m²</text><text x="446" y="54" class="k3">③ 장비 500kN↑ 진입 고려</text>' +
    '<text x="446" y="74" class="k3">③ Post Pile 풍화암 정착</text><text x="446" y="100" class="k4">④ 진입로 경사 1/6 이하</text><text x="446" y="120" class="k4">④ 복공판 단차 10mm 이내</text>' +
    '<text x="446" y="140" class="k4">④ 가새 설치·좌굴 방지</text><text x="446" y="166" class="k5">⑤ 하중 표지·과적 통제</text><text x="446" y="186" class="k5">⑤ 정기 구조검토·점검</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">Post Pile 시공</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">주형·가새 설치</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">복공판 깔기</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">진입로·안전난간</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="345" text-anchor="middle" class="s">정기 구조검토·점검</text></svg>',
  subs: [
    { h: '설계 시 고려사항(구조검토)', pts: ['허용 활하중 {{20kN/m²}}', '장비 {{500kN}}↑ 진입 고려', 'Post Pile [[풍화암 정착]]'] },
    { h: '시공 시 유의사항', pts: ['진입로 경사 {{1/6}} 이하', '복공판 단차 {{10mm}} 이내', '가새 설치·좌굴 방지'] },
    { h: '개선방안', pts: ['하중 표지·과적 통제', '정기 구조검토·점검'] }
  ],
  msg: '풍화암 정착 Post + 가새 + 단차 없는 복공판 → 장비 하중 안전 지지',
  mnemo: '20kN·500kN·1/6·10mm (이오육십)',
  rel: ['Top Down 공법', '흙막이 공법', 'Jack Support', '가설구조물 구조검토', '복공판'],
  src: '근거: 건설기술진흥법 시행령(가설구조물 구조적 안전성 확인) / 마법지 1공종 직접가설(보조시설물: 가설구대) / 합격답안: 디테일용어300 No.4(p015: 활하중 20kN/m², 500kN 장비, 구배 1/6, 단차 10mm, N50 풍화암), 디테일원 p185 / 기술지침 1-1 가설공사 p011(1층 작업장: 진입 구배 1/6, 허용활하중 20kN/m²) / 스터디: (이이섭)용어300(1주차 19개).pdf p1(정의·단면형상·설계 시 고려사항 20kN/m²·500kN·N50·유의사항 1/6·가새·단차 10mm, 임시 EPS 블록 진입로)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '지하구조체 공사 진행 시 작업지반으로서 [[Bridge 역할]]을 하기 위해 [[가설지주(Post Pile)]]·[[주형]]·[[복공판]]으로 구성된 가설 연결시설로, 본 건물 골조·장비 진출입·작업동선·지하 골조 위치·버팀대 위치를 고려하여 설치하며 허용 활하중 {{20kN/m²}}·{{500kN}} 이상 장비 진입에 대한 [[구조검토]]가 필수' },
      { h: '단면 형상 및 구성 부재', fig: 'MAIN', tbl: { head: ['부재', '기능', '관리 Point'], rows: [
            ['복공판', '상부 작업면·하중 전달', '단차 {{10mm↓}}, 이탈 방지 고정'],
            ['주형·상현재', '복공판 하중 → Post 전달', '처짐·접합 Bolt 관리'],
            ['Post Pile(H-Pile)', '연직하중 지지', '선단 풍화암(N50↑) 정착'],
            ['수평·경사 가새', '좌굴·횡변위 방지', '굴착 단계별 설치'],
            ['진입로', '장비 진출입', '경사 {{1/6}} 이하']
          ] } },
      { h: '설계 시 고려사항 (구조검토 기준)', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['허용 활하중', '{{20kN/m²}}', '합격답안 p015 / 기술지침 가설 p011'],
            ['장비 하중', '{{500kN}} 이상 장비 진입 고려', '합격답안 p015'],
            ['진입로 경사', '{{1/6 이하}}', '합격답안 p015 / 기술지침 가설 p011'],
            ['복공판 단차', '{{10mm 이내}}', '합격답안 p015'],
            ['Post Pile', '선단 풍화암(N50 이상) 정착', '합격답안 p015'],
            ['구조검토', '가설구조물 구조적 안전성 확인 (대상 여부 확인 필요)', '건설기술진흥법 시행령']
          ] } },
      { h: '시공 Process', flow: ['장비·하중 조건 검토', 'Post Pile 시공(풍화암 정착)', '주형·상현재 설치', '가새·하현재 설치', '복공판 깔기', '진입로(1/6)·난간', '구조검토·정기점검'] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 장비 제원(Crane·레미콘·펌프카) 하중·동선 반영 구조계산, 지하 골조·버팀대 위치와 간섭 검토',
          '[전] Post Pile 선단 지지층(풍화암) 확인',
          '[중] Post Pile 좌굴 방지 가새, 굴착 단계별 하현재 설치',
          '[중] 복공판 단차 {{10mm}} 이내·이탈 방지, 진입로 경사 {{1/6}} 이하',
          '[중] 하중 표지판·과적 차량 통제, 우수 배수',
          '[후] Bolt 이완·처짐·부식 정기점검, 지하 골조 강도 확인 후 역순 해체',
          '[대책] 침하·처짐: 선단 지지 부족 → 풍화암 근입·재하시험 확인',
          '[대책] 좌굴·붕괴: 가새 누락·과적 → 단계별 가새, 과적 통제 → "집중하중 방지"',
          '[대책] 단차 사고·소음: 복공판 들뜸 → 고정·고무패드',
          '[대책] 개선: 1층 바닥 선시공(Top Down) 작업장 활용, 현장타설 EPS 블록 진입로(합격답안), 변위·응력 계측'
        ] }
    ] }/*/DET*/
},
12: {
  title: '압밀 현상(Consolidation)',
  cat: '토공·지반',
  key: ['투수성 낮은 점성토', '과잉간극수압', '간극수 배출', '유효응력 증가', '1차압밀', '2차압밀(Creep)', '압밀시간 ∝ H²', 'Preloading', 'Vertical Drain'],
  www: {
    what: '투수성이 낮은 포화 [[점성토]]가 하중을 받아 [[간극수]]가 장기간 배출되며 체적이 줄어 침하하는 현상',
    why: '장기 [[부등침하]]·구조물 균열·말뚝 부마찰력을 일으키므로 침하량·침하시간을 예측·촉진해야 함',
    how: '하중 재하 → [[과잉간극수압]] 발생 → 간극수 배출(소산) → [[유효응력]] 증가 → 1차압밀 → 2차압밀(Creep)'
  },
  tag: '현상·원리·대책',
  def: '투수성이 낮은 포화 [[점성토]] 지반이 상재하중을 받아 [[과잉간극수압]]이 소산되면서 [[간극수]]가 장기간 배출되어 체적이 감소(침하)하는 현상으로, 압밀시간은 배수거리의 제곱({{H²}})에 비례',
  wwh: ['점토 체적 감소', '장기 부등침하', '간극수 배출'],
  figT: '압밀 현상의 Mechanism 및 침하-시간 관계',
  svg: '<svg viewBox="0 0 640 356" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="28" width="210" height="16" class="bx2"/><text x="145" y="40" text-anchor="middle" class="s">성토·건물 하중</text>' +
    '<line x1="70" y1="46" x2="70" y2="62" class="ar"/><line x1="145" y1="46" x2="145" y2="62" class="ar"/><line x1="220" y1="46" x2="220" y2="62" class="ar"/><rect x="30" y="64" width="230" height="16" class="bx3"/>' +
    '<rect x="30" y="80" width="230" height="60" class="soil"/><rect x="30" y="140" width="230" height="14" class="bx3"/><text x="150" y="114" text-anchor="middle" class="s">점토층(포화)</text>' +
    '<line x1="100" y1="108" x2="100" y2="84" class="ar"/><line x1="100" y1="112" x2="100" y2="136" class="ar"/><line x1="200" y1="108" x2="200" y2="84" class="ar"/><line x1="200" y1="112" x2="200" y2="136" class="ar"/>' +
    '<line x1="40" y1="180" x2="280" y2="180" class="ar"/><line x1="40" y1="180" x2="40" y2="306" class="ar"/><text x="278" y="174" text-anchor="end" class="s">시간 t</text><text x="46" y="320" class="s">침하량 S</text>' +
    '<path d="M40,180 L60,215 L80,240 L100,258 L120,270 L140,278 L160,283 L280,296" class="ln"/><line x1="160" y1="180" x2="160" y2="304" class="ln2 dash"/><line x1="250" y1="36" x2="296" y2="36" class="ld"/>' +
    '<circle cx="296" cy="36" r="2" class="dotf"/><text x="300" y="40" class="b">하중 증가 ΔP</text><line x1="260" y1="72" x2="296" y2="70" class="ld"/><circle cx="296" cy="70" r="2" class="dotf"/>' +
    '<text x="300" y="74" class="bl">배수층(모래)</text><line x1="200" y1="98" x2="296" y2="100" class="ld"/><circle cx="296" cy="100" r="2" class="dotf"/><text x="300" y="104" class="r">간극수 배출</text>' +
    '<line x1="260" y1="120" x2="296" y2="124" class="ld"/><circle cx="296" cy="124" r="2" class="dotf"/><text x="300" y="128" class="r">배수거리 H/2(양면)</text><line x1="260" y1="148" x2="296" y2="148" class="ld"/>' +
    '<circle cx="296" cy="148" r="2" class="dotf"/><text x="300" y="152" class="bl">하부 배수층</text><line x1="60" y1="215" x2="296" y2="196" class="ld"/><circle cx="296" cy="196" r="2" class="dotf"/>' +
    '<text x="300" y="200" class="b">과잉간극수압 소산</text><line x1="100" y1="258" x2="296" y2="226" class="ld"/><circle cx="296" cy="226" r="2" class="dotf"/><text x="300" y="230" class="r">1차압밀: 간극수 배출</text>' +
    '<line x1="220" y1="290" x2="296" y2="258" class="ld"/><circle cx="296" cy="258" r="2" class="dotf"/><text x="300" y="262" class="r">2차압밀: Creep</text><text x="446" y="34" class="k3">③ 1차압밀(간극수 배출)</text>' +
    '<text x="446" y="54" class="k3">③ 2차압밀(Creep)</text><text x="446" y="74" class="k3">③ 압밀시간 t ∝ H²</text><text x="446" y="100" class="k4">④ 장기 부등침하·균열</text><text x="446" y="120" class="k4">④ 말뚝 부마찰력</text>' +
    '<text x="446" y="140" class="k4">④ 인접 구조물 침하</text><text x="446" y="166" class="k5">⑤ Preloading 선행재하</text><text x="446" y="186" class="k5">⑤ Vertical Drain(PBD)</text><text x="446" y="206" class="k5">⑤ SCP·치환 공법</text>' +
    '<rect x="446" y="236" width="186" height="18" class="bx"/><text x="539" y="249" text-anchor="middle" class="s">하중 재하(ΔP)</text><line x1="539" y1="254" x2="539" y2="264" class="ar"/>' +
    '<rect x="446" y="265" width="186" height="18" class="bx"/><text x="539" y="278" text-anchor="middle" class="s">과잉간극수압 발생</text><line x1="539" y1="283" x2="539" y2="293" class="ar"/>' +
    '<rect x="446" y="294" width="186" height="18" class="bx"/><text x="539" y="307" text-anchor="middle" class="s">간극수 배출(소산)</text><line x1="539" y1="312" x2="539" y2="322" class="ar"/>' +
    '<rect x="446" y="323" width="186" height="18" class="bx3"/><text x="539" y="336" text-anchor="middle" class="s">유효응력 증가·침하</text></svg>',
  subs: [
    { h: '압밀의 단계·원리', pts: ['1차압밀(간극수 배출)', '2차압밀([[Creep]])', '압밀시간 t ∝ {{H²}}'] },
    { h: '문제점(피해)', pts: ['장기 [[부등침하]]·균열', '말뚝 부마찰력', '인접 구조물 침하'] },
    { h: '방지대책', pts: ['[[Preloading]] 선행재하', '[[Vertical Drain]](PBD)', 'SCP·치환 공법'] }
  ],
  msg: '간극수가 빠져야 침하가 끝난다 → 배수거리 단축(Drain)·선행재하로 촉진',
  mnemo: '하·과·배·유 (하과배유) / 1차 물, 2차 Creep',
  rel: ['압밀시험', 'Preloading', 'Sand Drain·PBD', '부마찰력', '부등침하'],
  src: '근거: Terzaghi 1차원 압밀이론(t = Tv·H²/Cv) / KDS 11 50 10(얕은기초 침하 — 조항 확인 필요) / 마법지 2공종(역학적 성질: 압밀특성, 점성토 개량: 탈수·압밀) / 합격답안: 디테일용어300 No.15(p026)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '투수성이 낮은 포화 [[점성토]] 지반이 상재하중을 받아 [[과잉간극수압]]이 소산되면서 [[간극수]]가 장기간 배출되어 체적이 감소(침하)하는 현상으로, 체적 감소는 흙입자의 재배열과 물의 배출로 발생하며 압밀시간은 배수거리의 제곱({{H²}})에 비례' },
      { h: '압밀 Mechanism (발생원리·영향인자)', fig: 'MAIN', flow: ['하중 재하(ΔP)', '과잉간극수압 발생', '간극수 배출(소산)', '유효응력 증가', '1차압밀(체적 감소)', '2차압밀(Creep)'], tbl: { head: ['구분', '1차압밀', '2차압밀'], rows: [
            ['원인', '과잉간극수압 소산 → [[간극수 배출]]', '흙 골격의 소성적 재조정([[Creep]])'],
            ['시기', '과잉간극수압 소산 기간', '소산 완료 후 장기'],
            ['지배 요인', '투수계수·배수거리(t ∝ H²)', '유기질토·고압축성 점토에서 큼'],
            ['산정 계수', '압축지수 Cc, 압밀계수 Cv', '2차 압축지수 Cα']
          ] } },
      { h: '문제점·피해', ul: ['장기 [[부등침하]] → 구조물 균열·기울어짐', '말뚝 [[부마찰력]] → 말뚝 지지력 저하·파손', '인접 구조물·매설관 침하, 성토부 활동파괴'] },
      { h: '발생원인 및 압밀 관리기준 (압밀이론)', ul: [
          '포화 [[점성토]](저투수) + 상재하중(성토·구조물) 증가 → 과잉간극수압 장기 소산',
          '지하수위 저하 → 유효응력 증가 → 압밀 진행',
          '배수거리(H)가 길수록 압밀시간 증가 (t ∝ H²)'
        ], tbl: { head: ['항목', '기준', '근거'], rows: [
            ['압밀시간', 't = Tv·H²/Cv (H: 배수거리)', 'Terzaghi 1차원 압밀이론'],
            ['배수거리', '양면배수 H/2, 일면배수 H (층두께 H)', 'Terzaghi'],
            ['압밀도', 'U = 소산된 과잉간극수압 / 초기 과잉간극수압 × 100%', '압밀이론'],
            ['침하 관리', '침하판·간극수압계 계측 → 최종침하량 예측 후 재하 제거 시기 결정', '설계도서(확인 필요)']
          ] } },
      { h: '방지대책·조치사항 (시공 전·중·후)', ul: [
          '사전 하중 재하([[Preloading]])·Surcharge로 압밀 유도',
          '연직 배수공법([[Vertical Drain]]: Sand Drain·PBD) → 배수거리 단축·압밀 촉진',
          '치환으로 연약토 제거 → 활동파괴 방지',
          'Sand Compaction Pile(SCP) → 지지력 증가',
          '말뚝 부마찰력: SL(역청 Coating) 말뚝·이중관',
          '[전] Boring·불교란 Sampling·압밀시험으로 Cc·Cv·선행압밀하중 확인',
          '[전] 연약층 두께·배수조건 파악 → 침하량·침하시간 예측',
          '[중] Sand Mat·Vertical Drain으로 배수거리 단축, 단계 성토로 활동파괴 방지',
          '[중] 침하판·간극수압계·경사계 계측으로 성토 속도 관리',
          '[후] 잔류침하 확인 후 구조물 시공, 매설관·말뚝 부마찰력 검토'
        ], fig: { svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><polygon points="30,58 390,58 370,38 50,38" class="bx2"/><text x="210" y="52" text-anchor="middle" class="s">Preloading 성토</text><rect x="20" y="58" width="180" height="10" class="bx3"/><rect x="20" y="68" width="180" height="142" class="soil"/><rect x="20" y="210" width="180" height="10" class="bx3"/><line x1="70" y1="140" x2="70" y2="74" class="ar"/><line x1="70" y1="140" x2="70" y2="204" class="ar"/><line x1="150" y1="140" x2="150" y2="74" class="ar"/><line x1="150" y1="140" x2="150" y2="204" class="ar"/><text x="110" y="144" text-anchor="middle" class="r">배수거리 H/2</text><text x="110" y="236" text-anchor="middle" class="s">(a) 무처리: 상·하 연직배수</text><rect x="220" y="58" width="180" height="10" class="bx3"/><rect x="220" y="68" width="180" height="142" class="soil"/><rect x="220" y="210" width="180" height="10" class="bx3"/><rect x="245" y="58" width="6" height="152" class="bx2"/><rect x="295" y="58" width="6" height="152" class="bx2"/><rect x="345" y="58" width="6" height="152" class="bx2"/><line x1="273" y1="110" x2="254" y2="110" class="ar"/><line x1="273" y1="110" x2="292" y2="110" class="ar"/><line x1="323" y1="110" x2="304" y2="110" class="ar"/><line x1="323" y1="110" x2="342" y2="110" class="ar"/><line x1="273" y1="170" x2="254" y2="170" class="ar"/><line x1="273" y1="170" x2="292" y2="170" class="ar"/><line x1="323" y1="170" x2="304" y2="170" class="ar"/><line x1="323" y1="170" x2="342" y2="170" class="ar"/><line x1="373" y1="140" x2="354" y2="140" class="ar"/><line x1="248" y1="196" x2="298" y2="196" class="ln2"/><line x1="248" y1="191" x2="248" y2="201" class="ln2"/><line x1="298" y1="191" x2="298" y2="201" class="ln2"/><text x="310" y="236" text-anchor="middle" class="s">(b) Vertical Drain: 수평배수 de/2</text><line x1="360" y1="48" x2="436" y2="40" class="ld"/><circle cx="436" cy="40" r="2" class="dotf"/><text x="440" y="44" class="b">선행재하(Preloading) 성토</text><line x1="390" y1="63" x2="436" y2="64" class="ld"/><circle cx="436" cy="64" r="2" class="dotf"/><text x="440" y="68" class="bl">Sand Mat(수평 배수층)</text><line x1="348" y1="90" x2="436" y2="88" class="ld"/><circle cx="436" cy="88" r="2" class="dotf"/><text x="440" y="92" class="bl">PBD·Sand Drain</text><line x1="312" y1="110" x2="436" y2="112" class="ld"/><circle cx="436" cy="112" r="2" class="dotf"/><text x="440" y="116" class="r">수평 배수(간극수→Drain)</text><line x1="385" y1="150" x2="436" y2="136" class="ld"/><circle cx="436" cy="136" r="2" class="dotf"/><text x="440" y="140" class="b">점토층(포화·저투수성)</text><line x1="273" y1="196" x2="436" y2="160" class="ld"/><circle cx="436" cy="160" r="2" class="dotf"/><text x="440" y="164" class="r">Drain 간격 de</text><line x1="390" y1="182" x2="436" y2="184" class="ld"/><circle cx="436" cy="184" r="2" class="dotf"/><text x="440" y="188" class="r">t ∝ (배수거리)² → 압밀 촉진</text><line x1="396" y1="215" x2="436" y2="208" class="ld"/><circle cx="436" cy="208" r="2" class="dotf"/><text x="440" y="212" class="bl">하부 배수층(모래)</text></svg>', cap: '[상세] Vertical Drain 설치 전·후 배수거리 비교 — t ∝ H² 원리로 압밀 촉진' } }
    ] }/*/DET*/
},
13: {
  title: '액상화(Liquefaction)',
  cat: '토공·지반',
  key: ['느슨한 포화 사질토', '지진·진동', '과잉간극수압 상승', '유효응력 0', '전단강도 상실', 'N값 20 이하', 'Sand Boil', '부등침하·부상', 'SCP·Gravel Drain'],
  www: {
    what: '[[느슨한 포화 사질토]]가 지진·진동으로 [[과잉간극수압]]이 상승하여 [[유효응력]]이 0이 되고 액체처럼 거동하는 현상',
    why: '[[전단강도 상실]]로 구조물 부등침하·전도, 매설관 부상, 측방유동 등 대형 피해를 유발함',
    how: '지진·진동 → 간극수압 상승(u↑) → 유효응력(σ-u)→0 → 전단강도 상실 → 지반 재배열·침하'
  },
  tag: '현상·원인·대책',
  def: '[[느슨한 포화 사질토]] 지반이 지진·진동을 받아 순간적으로 발생한 [[과잉간극수압]]에 의해 [[유효응력]]이 0이 되어 [[전단강도]]를 상실하고 액체처럼 거동하는 현상',
  wwh: ['사질토 액체화', '전단강도 상실', '간극수압 상승'],
  figT: '액상화 발생 Mechanism 및 피해형태',
  svg: '<svg viewBox="0 0 640 356" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="40" width="60" height="60" class="bx3"/><circle cx="38" cy="56" r="13" class="ln"/><circle cx="66" cy="56" r="13" class="ln"/>' +
    '<circle cx="38" cy="84" r="13" class="ln"/><circle cx="66" cy="84" r="13" class="ln"/><polygon points="112,100 172,100 182,40 122,40" class="bx3"/><circle cx="130" cy="84" r="12" class="ln"/>' +
    '<circle cx="158" cy="84" r="12" class="ln"/><circle cx="138" cy="56" r="12" class="ln"/><circle cx="166" cy="56" r="12" class="ln"/><rect x="202" y="40" width="60" height="60" class="bx3"/>' +
    '<line x1="202" y1="54" x2="262" y2="54" class="ln2 dash"/><circle cx="218" cy="87" r="13" class="ln"/><circle cx="246" cy="87" r="13" class="ln"/><circle cx="232" cy="66" r="13" class="ln"/>' +
    '<line x1="86" y1="70" x2="108" y2="70" class="ar"/><line x1="180" y1="70" x2="198" y2="70" class="ar"/><text x="52" y="116" text-anchor="middle" class="s">느슨한 포화사질</text>' +
    '<text x="148" y="116" text-anchor="middle" class="s">진동·전단</text><text x="232" y="116" text-anchor="middle" class="s">재배열·침하</text><rect x="20" y="170" width="270" height="30" class="soil"/>' +
    '<rect x="20" y="200" width="270" height="70" class="bx3"/><rect x="20" y="270" width="270" height="28" class="soil"/><line x1="20" y1="170" x2="290" y2="170" class="ln"/>' +
    '<line x1="20" y1="190" x2="290" y2="190" class="ln2 dash"/><polygon points="58,172 106,166 101,130 53,136" class="bx"/><path d="M185,170 Q200,152 215,170" class="bx3"/>' +
    '<line x1="200" y1="240" x2="200" y2="174" class="ar"/><line x1="280" y1="170" x2="280" y2="270" class="ln2"/><line x1="274" y1="270" x2="286" y2="270" class="ln2"/>' +
    '<path d="M30,312 l10,-6 l10,12 l10,-12 l10,12 l10,-12 l10,6" class="rd"/><line x1="165" y1="50" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/><text x="300" y="40" class="r">간극수압 상승(u↑)</text>' +
    '<line x1="262" y1="70" x2="296" y2="62" class="ld"/><circle cx="296" cy="62" r="2" class="dotf"/><text x="300" y="66" class="r">유효응력 σ-u→0</text><line x1="240" y1="92" x2="296" y2="92" class="ld"/>' +
    '<circle cx="296" cy="92" r="2" class="dotf"/><text x="300" y="96" class="r">전단강도 상실</text><line x1="100" y1="146" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/>' +
    '<text x="300" y="150" class="bl">부등침하·전도</text><line x1="206" y1="160" x2="296" y2="170" class="ld"/><circle cx="296" cy="170" r="2" class="dotf"/><text x="300" y="174" class="bl">Sand Boil(분사)</text>' +
    '<line x1="262" y1="190" x2="296" y2="194" class="ld"/><circle cx="296" cy="194" r="2" class="dotf"/><text x="300" y="198" class="b">지하수위 높음</text><line x1="250" y1="235" x2="296" y2="226" class="ld"/>' +
    '<circle cx="296" cy="226" r="2" class="dotf"/><text x="300" y="230" class="b">느슨한 사질토 N≤20</text><line x1="280" y1="262" x2="296" y2="258" class="ld"/><circle cx="296" cy="258" r="2" class="dotf"/>' +
    '<text x="300" y="262" class="r">깊이 20m 이내</text><line x1="92" y1="308" x2="296" y2="306" class="ld"/><circle cx="296" cy="306" r="2" class="dotf"/><text x="300" y="310" class="r">지진·진동</text>' +
    '<text x="446" y="34" class="k3">③ 포화 느슨한 사질토</text><text x="446" y="54" class="k3">③ N값 20 이하</text><text x="446" y="74" class="k3">③ 깊이 20m 이내·고수위</text><text x="446" y="100" class="k4">④ 부등침하·전도</text>' +
    '<text x="446" y="120" class="k4">④ 매설관 부상</text><text x="446" y="140" class="k4">④ 측방유동·Sand Boil</text><text x="446" y="166" class="k5">⑤ SCP·다짐(밀도 증대)</text><text x="446" y="186" class="k5">⑤ 지하수위 저하·배수</text>' +
    '<text x="446" y="206" class="k5">⑤ Gravel Drain·약액주입</text><rect x="446" y="236" width="186" height="18" class="bx"/><text x="539" y="249" text-anchor="middle" class="s">지진·진동</text>' +
    '<line x1="539" y1="254" x2="539" y2="264" class="ar"/><rect x="446" y="265" width="186" height="18" class="bx"/><text x="539" y="278" text-anchor="middle" class="s">과잉간극수압 상승</text>' +
    '<line x1="539" y1="283" x2="539" y2="293" class="ar"/><rect x="446" y="294" width="186" height="18" class="bx"/><text x="539" y="307" text-anchor="middle" class="s">유효응력 → 0</text>' +
    '<line x1="539" y1="312" x2="539" y2="322" class="ar"/><rect x="446" y="323" width="186" height="18" class="bx3"/><text x="539" y="336" text-anchor="middle" class="s">전단강도 상실</text></svg>',
  subs: [
    { h: '발생조건', pts: ['포화 [[느슨한 사질토]]', 'N값 {{20}} 이하', '깊이 {{20m}} 이내·고수위'] },
    { h: '문제점(피해)', pts: ['[[부등침하]]·전도', '매설관 부상', '측방유동·Sand Boil'] },
    { h: '방지대책', pts: ['SCP·다짐(밀도 증대)', '지하수위 저하·배수', 'Gravel Drain·약액주입'] }
  ],
  msg: 'τ = c + (σ-u)tanφ 에서 u↑ → τ→0 : 밀도 증대·간극수압 소산이 핵심',
  mnemo: '느·포·사 + 진동 = 물처럼 / 대책 밀·배·고(밀도·배수·고결)',
  rel: ['유효응력', '전단강도(Coulomb)', 'SCP', 'Gravel Drain', '내진설계'],
  src: '근거: KDS 11 50 25(액상화 평가) / KDS 41 17 00 / 마법지 2공종(역학적 성질: 액상화, 사질토 개량) / 합격답안: 디테일용어300 No.16(p027: N값 20 이하, 깊이 20m 이내, 고수위)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '[[느슨한 포화 사질토]] 지반이 지진·진동을 받아 순간적으로 발생한 [[과잉간극수압]]에 의해 [[유효응력]]이 0이 되어 [[전단강도]]를 상실하고 지반이 액체처럼 거동하는 현상' },
      { h: '액상화 Mechanism (발생원리·영향인자)', fig: 'MAIN', flow: ['지진·진동(반복 전단)', '간극수압 상승(u↑)', '유효응력 σ′=σ−u → 0', '전단강도 τ=σ′tanφ → 0', '지반 액체화·Sand Boil', '재배열·침하'] },
      { h: '문제점·피해', ul: ['건물 [[부등침하]]·전도', '지하매설관 부상·건축물 균열', '지반 이동·측방유동, 도로 균열', 'Sand Boil(분사), 기초 지지력 상실'] },
      { h: '발생원인(발생조건) 및 평가기준', ul: ['느슨한 포화 사질토(균등 입도)', 'N값 {{20 이하}}', '깊이 {{20m}} 이내 두꺼운 사질층', '지하수위가 높을 때'], tbl: { head: ['항목', '기준', '근거'], rows: [
            ['검토 대상', '포화 사질토·N값 20 이하·깊이 20m 이내·고수위', '합격답안 p027'],
            ['평가 절차', '예비평가 → 본평가(저항 전단응력비 / 지진 전단응력비 = 안전율)', 'KDS 11 50 25 (확인 필요)'],
            ['판정', '안전율 기준값 미달 시 액상화 대책 수립 (기준값 확인 필요)', 'KDS 11 50 25']
          ] } },
      { h: '방지대책 ("사질토 = 다짐") 및 조치사항', ul: [
          '지반개량(밀도 증대) → 전단강도 확보: SCP, Vibroflotation, 동다짐',
          '약액주입·고결 → 유효응력 증대: 약액주입, 심층혼합',
          '계측관리 및 사전 배수공법: Gravel Drain, Deep Well → 간극수압 소산',
          '구조적 대책: 말뚝기초 지지층 근입, 지중벽으로 전단변형 억제',
          '[전] SPT·입도·지하수위 조사로 액상화 가능 구간 평가, 내진설계 지반 분류 반영',
          '[중] SCP·Vibroflotation 다짐으로 밀도 증대, 시공 중 N값 증가 확인',
          '[중] 지하수위 저하·Gravel Drain, 약액주입 시 주입범위·압력 관리',
          '[후] 개량 후 SPT·CPT 재시험, 매설관 가요성 이음'
        ] }
    ] }/*/DET*/
},
14: {
  title: '안정액(Stabilizer Liquid)',
  cat: '토공·지반',
  key: ['벤토나이트 현탁액', 'Filter Cake(불투수막)', '공벽 붕괴 방지', '안정액 수위 유지', '비중 1.04~1.2', '점성 22~40초', '사분율 15% 이하', 'Desander 재사용', '폐액 처리'],
  www: {
    what: '굴착 공벽에 [[Filter Cake(불투수막)]]을 형성하고 액압으로 토압·수압에 저항하는 [[벤토나이트]] 등의 현탁액',
    why: 'Slurry Wall·RCD 등 굴착 시 [[공벽 붕괴]]와 Slime 침전을 막아 벽체·말뚝 품질을 확보하기 위함',
    how: '벤토나이트 혼합·숙성 → 굴착 중 공급·수위 유지(지하수위+1.5m↑) → 품질시험(비중·점성·사분율) → Desander 회수·재사용 → 폐액 처리'
  },
  tag: '재료·성능·기준',
  def: '굴착면 흙 입자 사이에 침투하여 [[Filter Cake(불투수막)]]을 형성하고 [[액압]]으로 토압·수압에 저항함으로써 [[공벽 붕괴]]를 방지하는 [[벤토나이트]] 현탁액으로, 굴착 시 비중 {{1.04~1.2}}로 관리',
  wwh: ['공벽 보호 현탁액', '공벽 붕괴 방지', 'Filter Cake+액압'],
  figT: '안정액의 공벽 유지 원리 및 관리기준',
  svg: '<svg viewBox="0 0 640 336" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="86" height="240" class="soil"/><rect x="194" y="60" width="96" height="240" class="soil"/>' +
    '<line x1="20" y1="60" x2="106" y2="60" class="ln"/><line x1="194" y1="60" x2="290" y2="60" class="ln"/><rect x="106" y="72" width="88" height="228" class="bx"/><rect x="106" y="286" width="88" height="14" class="bx2"/>' +
    '<rect x="90" y="50" width="16" height="40" class="conc"/><rect x="194" y="50" width="16" height="40" class="conc"/><line x1="106" y1="72" x2="106" y2="286" class="rd"/>' +
    '<line x1="194" y1="72" x2="194" y2="286" class="rd"/><line x1="106" y1="72" x2="194" y2="72" class="ln2"/><path d="M144,64 l12,0 l-6,8 z" class="ln2"/><line x1="20" y1="110" x2="90" y2="110" class="ln2 dash"/>' +
    '<line x1="210" y1="110" x2="290" y2="110" class="ln2 dash"/><path d="M262,102 l12,0 l-6,8 z" class="ln2"/><line x1="240" y1="72" x2="240" y2="110" class="ln2"/><line x1="234" y1="72" x2="246" y2="72" class="ln2"/>' +
    '<line x1="234" y1="110" x2="246" y2="110" class="ln2"/><line x1="150" y1="180" x2="112" y2="180" class="ar"/><line x1="150" y1="180" x2="188" y2="180" class="ar"/><line x1="52" y1="232" x2="100" y2="232" class="ar"/>' +
    '<line x1="70" y1="232" x2="30" y2="262" class="ld"/><circle cx="30" cy="262" r="2" class="dotf"/><text x="34" y="266" class="b">토압·수압</text><line x1="202" y1="56" x2="296" y2="36" class="ld"/>' +
    '<circle cx="296" cy="36" r="2" class="dotf"/><text x="300" y="40" class="bl">Guide Wall</text><line x1="180" y1="72" x2="296" y2="60" class="ld"/><circle cx="296" cy="60" r="2" class="dotf"/>' +
    '<text x="300" y="64" class="b">안정액 수위</text><line x1="240" y1="92" x2="296" y2="84" class="ld"/><circle cx="296" cy="84" r="2" class="dotf"/><text x="300" y="88" class="r">지하수위+1.5m↑</text>' +
    '<line x1="272" y1="110" x2="296" y2="108" class="ld"/><circle cx="296" cy="108" r="2" class="dotf"/><text x="300" y="112" class="b">지하수위(GWT)</text><line x1="194" y1="150" x2="296" y2="146" class="ld"/>' +
    '<circle cx="296" cy="146" r="2" class="dotf"/><text x="300" y="150" class="r">Filter Cake(불투수막)</text><line x1="186" y1="180" x2="296" y2="180" class="ld"/><circle cx="296" cy="180" r="2" class="dotf"/>' +
    '<text x="300" y="184" class="r">액압 > 토압+수압</text><line x1="150" y1="230" x2="296" y2="216" class="ld"/><circle cx="296" cy="216" r="2" class="dotf"/><text x="300" y="220" class="bl">벤토나이트 현탁액</text>' +
    '<line x1="180" y1="293" x2="296" y2="290" class="ld"/><circle cx="296" cy="290" r="2" class="dotf"/><text x="300" y="294" class="b">Slime 침전 방지</text><text x="446" y="34" class="k3">③ 비중 1.04~1.2</text>' +
    '<text x="446" y="54" class="k3">③ 점성 22~40초</text><text x="446" y="74" class="k3">③ 사분율 15% 이하</text><text x="446" y="100" class="k4">④ 수위 지하수위+1.5m↑</text><text x="446" y="120" class="k4">④ 일수·공벽붕괴 감시</text>' +
    '<text x="446" y="140" class="k4">④ Slime 처리 시 사분율 5%↓</text><text x="446" y="166" class="k5">⑤ Desander 회수·재사용</text><text x="446" y="186" class="k5">⑤ 폐액 적법 처리</text>' +
    '<rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">벤토나이트 혼합·숙성</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/>' +
    '<rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">굴착 중 공급·수위 유지</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/>' +
    '<rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">비중·점성·사분율 시험</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/>' +
    '<rect x="446" y="303" width="186" height="18" class="bx3"/><text x="539" y="316" text-anchor="middle" class="s">Desander 회수·재사용</text></svg>',
  subs: [
    { h: '관리기준(굴착 시)', pts: ['비중 {{1.04~1.2}}', '점성 {{22~40초}}', '사분율 {{15%}} 이하'] },
    { h: '사용 시 유의사항', pts: ['수위 지하수위+{{1.5m}}↑', '일수·공벽붕괴 감시', 'Slime 처리 시 사분율 {{5%}}↓'] },
    { h: '개선방안', pts: ['Desander 회수·재사용', '폐액 적법 처리'] }
  ],
  msg: '불투수막(Filter Cake) + 액압 → 공벽 유지, 비중·점성·사분율로 품질관리',
  mnemo: '비 1.04~1.2 / 점 22~40 / 사 15 (Slime 시 1.1·35·5)',
  rel: ['Slurry Wall', 'RCD 공법', '일수현상', 'Slime 처리(Desanding)', 'Koden Test'],
  src: '근거: KCS 21 30 00 / KCS 11 50 15(지하연속벽 — 조항 확인 필요) / 마법지 3공종(공벽보호: 안정액) / 합격답안: 디테일용어300 No.18(p029: 굴착 시 1.04~1.2·22~40초·15%↓, Slime 처리 시 1.04~1.1·22~35초·5%↓) / 기술지침 2 토공사 p012~015(수위 지하수위+1.5m↑, Desanding 사분율 5%↓, Mud Balance·Funnel·Sand Content Tube) / 스터디: (박동수) 용어300_1주차.pdf p3(정의·불투수막 원리·관리기준 굴착 시/Slime 처리 시 동일 수치·배합/재사용/폐액처리)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '흙 입자 사이 공극에 침투하여 굴착 주변에 [[Filter Cake]]를 만들고 그 표면에 입자가 부착된 얇은 [[불투수막(Mud Film)]]을 형성하여, 액압으로 토압·수압에 저항함으로써 [[공벽 붕괴]]를 방지하는 [[벤토나이트]] 현탁액으로, 액성한계 이상의 수분을 함유한 흙을 대상으로 공벽을 굴착할 때 사용' },
      { h: '불투수막 형성에 의한 공벽 유지 원리', fig: 'MAIN', p: '안정액의 액압이 토압 및 수압에 저항 + 굴착면에 [[Filter Cake]]·불투수막 형성 → 공벽 붕괴 방지' },
      { h: '기능 및 품질시험 방법', tbl: { head: ['구분', '내용'], rows: [
            ['공벽 보호', 'Filter Cake(불투수막) + 액압 > 토압·수압'],
            ['Slime 침전 방지', '굴착토 부유 유지 → 저면 침전 억제'],
            ['비중 시험', 'Mud Balance(추 이동하여 비중 측정)'],
            ['점성 시험', '점도계(Funnel 배출시간, 초)'],
            ['사분율 시험', 'Sand Content Tube(유리 Tube 하부 침전 모래량)']
          ] } },
      { h: '사용 Process', flow: [
          '벤토나이트 Mixing·숙성',
          '굴착 중 공급·수위 유지',
          '품질시험(비중·점성·사분율)',
          'Desanding(1차 Slime 제거)',
          'Cleaning(2차)',
          '회수·재사용 / 폐액 처리'
        ], fig: { svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="24" width="110" height="24" class="bx"/><text x="75" y="40" text-anchor="middle" class="s">벤토나이트 Mixing</text><rect x="160" y="24" width="110" height="24" class="bx"/><text x="215" y="40" text-anchor="middle" class="s">저장·숙성 Tank</text><rect x="300" y="40" width="20" height="170" class="soil"/><rect x="380" y="40" width="20" height="170" class="soil"/><rect x="320" y="50" width="60" height="160" class="bx"/><line x1="320" y1="50" x2="320" y2="210" class="rd"/><line x1="380" y1="50" x2="380" y2="210" class="rd"/><text x="350" y="226" text-anchor="middle" class="s">굴착 Trench</text><rect x="160" y="112" width="110" height="24" class="bx"/><text x="215" y="128" text-anchor="middle" class="s">회수 Pump</text><rect x="20" y="112" width="110" height="24" class="bx"/><text x="75" y="128" text-anchor="middle" class="s">Desander(Cyclone)</text><rect x="20" y="200" width="130" height="24" class="bx3"/><text x="85" y="216" text-anchor="middle" class="s">폐액 탈수·고화 처리</text><line x1="130" y1="36" x2="158" y2="36" class="ar"/><path d="M270,36 L335,36 L335,56" class="ar"/><path d="M350,150 L350,124 L272,124" class="ar"/><line x1="160" y1="124" x2="132" y2="124" class="ar"/><line x1="105" y1="112" x2="188" y2="50" class="ar"/><text x="160" y="92" class="g">재사용</text><line x1="50" y1="136" x2="50" y2="198" class="ar"/><text x="22" y="104" class="r">사분율 5%↓</text><text x="58" y="170" class="s">재사용 불가분</text><line x1="335" y1="52" x2="442" y2="30" class="ld"/><circle cx="442" cy="30" r="2" class="dotf"/><text x="446" y="34" class="r">수위: 지하수위+1.5m↑</text><line x1="320" y1="150" x2="442" y2="56" class="ld"/><circle cx="442" cy="56" r="2" class="dotf"/><text x="446" y="60" class="bl">Filter Cake(불투수막)</text><line x1="340" y1="80" x2="442" y2="82" class="ld"/><circle cx="442" cy="82" r="2" class="dotf"/><text x="446" y="86" class="b">비중: Mud Balance</text><line x1="355" y1="100" x2="442" y2="108" class="ld"/><circle cx="442" cy="108" r="2" class="dotf"/><text x="446" y="112" class="b">점성: Funnel 점도계(초)</text><line x1="365" y1="120" x2="442" y2="134" class="ld"/><circle cx="442" cy="134" r="2" class="dotf"/><text x="446" y="138" class="b">사분율: Sand Content Tube</text><line x1="350" y1="150" x2="442" y2="160" class="ld"/><circle cx="442" cy="160" r="2" class="dotf"/><text x="446" y="164" class="b">회수 Hose(Slime 포함)</text><line x1="350" y1="205" x2="442" y2="186" class="ld"/><circle cx="442" cy="186" r="2" class="dotf"/><text x="446" y="190" class="b">Slime 침전 방지</text></svg>', cap: '[상세] 안정액 순환 계통 — 공급·회수·Desanding·재사용 / 폐액 처리, 품질시험 3종' } },
      { h: '사용 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 배합·혼합: 벤토나이트 입자가 완전히 수화될 때까지 혼합·숙성',
          '[전] 1일 굴착량·투수계수 검토 → 필요 수량 산정·Silo 저장',
          '[중] 수위를 지하수위보다 {{1.5m 이상}} 유지 (저하 → 공벽 붕괴, 과다 → Overflow)',
          '[중] 일수 발생 시 즉시 보충·점성 증대, 굴착 상단 덮개·발판 설치',
          '[중] Desanding(1차)·Cleaning(2차)로 사분율 {{5% 이하}}까지 치환 후 철근망 삽입',
          '[후] 재사용: 회수 안정액 재생 / 폐액: 재사용 불가분 탈수·고화 후 적법 처리',
          '[대책] 공벽 붕괴: 수위 저하·비중 부족 → 수위·비중 관리, Koden Test 확인',
          '[대책] 일수: 투수성 큰 자갈층 → 점성 증대·일수방지제',
          '[대책] Slime 과다·콘크리트 품질 저하 → Desander 처리 강화, Tremie 연속 타설',
          '[대책] 개선: 비중·수위 자동 계측 Plant, Polymer계 안정액 재사용률 향상'
        ] },
      { h: '관리기준 (합격답안 p029·기술지침 토공사 p014)', tbl: { head: ['항목', '굴착 시', 'Slime 처리 시'], rows: [
            ['비중', '{{1.04~1.2}}', '{{1.04~1.1}}'],
            ['점성', '{{22~40초}}', '{{22~35초}}'],
            ['사분율', '{{15% 이하}}', '{{5% 이하}}'],
            ['안정액 수위', '지하수위 + {{1.5m 이상}}', '동일 유지']
          ] } }
    ] }/*/DET*/
},
15: {
  title: 'Koden test',
  cat: '토공·지반',
  key: ['초음파 송수신', '굴착 공벽 측정', '벽두께·수직도', '굴착 깊이', '수직도 1/300', 'Panel당 3개소 이상', '공벽 붕괴 확인', '안정액 관리'],
  www: {
    what: '굴착 공 내에 [[초음파]] 송수신 센서를 내려 반사파로 [[공벽 형상]]·벽두께·[[수직도]]·굴착 깊이를 측정하는 시험',
    why: 'Slurry Wall·RCD 굴착 정밀도를 확인하여 [[공벽 붕괴]]·과굴착·편심을 조기에 판단하고 콘크리트 과다 타설을 방지',
    how: '중심선 측량 → Sensor 하강 → 초음파 송·수신 → 벽면 Profile 기록 → 수직도·깊이 판정 → 보완'
  },
  tag: '시험·측정·품질',
  def: '굴착 공 내에 [[초음파]] 송수신기를 내려 공벽에서 반사되는 초음파를 분석함으로써 굴착 구간의 [[벽두께]]·[[수직도]]·굴착 깊이·공벽 형상을 측정하여 굴착 정밀도를 확인하는 시험',
  wwh: ['초음파 공벽 측정', '굴착 정밀도 확인', '센서 승강·반사파'],
  figT: 'Koden Test의 측정 원리 및 판정',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="110" height="230" class="ln2"/><text x="75" y="52" text-anchor="middle" class="s">Profile 기록</text>' +
    '<path d="M40,70 l3,25 l-3,25 l4,25 l-2,25 l3,25 l-2,25 l3,25 l-2,30" class="ln"/><path d="M110,70 l3,25 l-3,25 l4,25 l-2,25 l3,25 l-2,25 l3,25 l-2,30" class="ln"/><line x1="75" y1="66" x2="81" y2="284" class="ln2 dash"/>' +
    '<text x="75" y="306" text-anchor="middle" class="r">수직도 1/300 이내</text><rect x="150" y="70" width="30" height="230" class="soil"/><rect x="240" y="70" width="30" height="230" class="soil"/>' +
    '<line x1="150" y1="70" x2="270" y2="70" class="ln"/><rect x="172" y="62" width="8" height="18" class="conc"/><rect x="240" y="62" width="8" height="18" class="conc"/>' +
    '<rect x="180" y="80" width="60" height="220" class="bx"/><rect x="190" y="34" width="40" height="18" class="bx2"/><line x1="210" y1="52" x2="210" y2="198" class="ln"/><circle cx="210" cy="204" r="6" class="bx2"/>' +
    '<line x1="210" y1="204" x2="180" y2="188" class="ln2 dash"/><line x1="210" y1="204" x2="180" y2="220" class="ln2 dash"/><line x1="210" y1="204" x2="240" y2="188" class="ln2 dash"/>' +
    '<line x1="210" y1="204" x2="240" y2="220" class="ln2 dash"/><line x1="230" y1="42" x2="296" y2="32" class="ld"/><circle cx="296" cy="32" r="2" class="dotf"/><text x="300" y="36" class="bl">초음파 송수신 장치</text>' +
    '<line x1="210" y1="92" x2="296" y2="66" class="ld"/><circle cx="296" cy="66" r="2" class="dotf"/><text x="300" y="70" class="b">Cable·Winch</text><line x1="248" y1="72" x2="296" y2="96" class="ld"/>' +
    '<circle cx="296" cy="96" r="2" class="dotf"/><text x="300" y="100" class="b">Guide Wall·중심선</text><line x1="240" y1="150" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/>' +
    '<text x="300" y="150" class="bl">공벽(굴착면)</text><line x1="232" y1="192" x2="296" y2="186" class="ld"/><circle cx="296" cy="186" r="2" class="dotf"/><text x="300" y="190" class="r">초음파 반사</text>' +
    '<line x1="216" y1="206" x2="296" y2="212" class="ld"/><circle cx="296" cy="212" r="2" class="dotf"/><text x="300" y="216" class="bl">Sensor 승강</text><line x1="210" y1="250" x2="296" y2="246" class="ld"/>' +
    '<circle cx="296" cy="246" r="2" class="dotf"/><text x="300" y="250" class="b">안정액</text><line x1="230" y1="298" x2="296" y2="286" class="ld"/><circle cx="296" cy="286" r="2" class="dotf"/>' +
    '<text x="300" y="290" class="b">굴착 깊이·선단</text><text x="446" y="34" class="k3">③ 굴착 깊이·공벽 형상</text><text x="446" y="54" class="k3">③ 수직도 1/300 이내</text><text x="446" y="74" class="k3">③ 공벽 붕괴·과굴착 확인</text>' +
    '<text x="446" y="100" class="k4">④ Panel당 3개소 이상</text><text x="446" y="120" class="k4">④ 중심선 기준 측정</text><text x="446" y="140" class="k4">④ 측정 Data 기록·보관</text><text x="446" y="166" class="k5">⑤ 안정액 관리 피드백</text>' +
    '<text x="446" y="186" class="k5">⑤ 콘크리트 타설량 관리</text><rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">중심선 측량</text>' +
    '<line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">Sensor 하강</text>' +
    '<line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">초음파 송·수신</text>' +
    '<line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">벽면 Profile 기록</text>' +
    '<line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">수직도·깊이 판정</text></svg>',
  subs: [
    { h: '측정 항목·목적', pts: ['굴착 깊이·공벽 형상', '수직도 {{1/300}} 이내', '공벽 붕괴·과굴착 확인'] },
    { h: '측정 시 유의사항', pts: ['Panel당 {{3개소}} 이상', '중심선 기준 측정', '측정 Data 기록·보관'] },
    { h: '결과 활용', pts: ['안정액 관리 피드백', '콘크리트 타설량 관리'] }
  ],
  msg: '초음파 반사로 공벽을 그려 본다 → 수직도·붕괴·과굴착 확인 후 철근망·타설',
  mnemo: '중·센·초·기·판 / 1/300·3개소',
  rel: ['Slurry Wall', '안정액', 'RCD 공법', 'Barrette Pile', '공벽 붕괴'],
  src: '근거: KCS 11 50 15(지하연속벽 — 조항 확인 필요) / 마법지 3공종(유의사항: Koden Test) / 합격답안: 디테일용어300 No.21(p032: 수직 1/300, Panel 3개소 이상, ±50mm 판독) — 수직도 허용치는 설계도서 우선(확인 필요) / 기술지침 토공사 p060(수직도 1/300) / 스터디: 2C-2주차.용어형(암질지수 등 7개)-이이섭.pdf p4(정의·장치도/결과도·Process·수직허용오차 1/300 또는 ±50mm 작은 값·최대 100m 측정; 대구경 최대 수직허용오차 1/100 이하 메모는 판독 불확실 — 확인 필요)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '[[초음파]] 측정장치로 Slurry Wall·RCD·Barrette 등 현장타설 굴착 공 내에 [[Sensor Unit]]을 이동시키며 공벽에서 반사되는 초음파를 기록하여 굴착 구간의 [[벽두께]]·[[수직도]]·굴착 깊이·공벽 형상을 측정하고 허용오차 만족 여부를 확인하는 시험' },
      { h: '시험방법·원리 (측정기준)', fig: 'MAIN', p: '초음파 송·수신 → 왕복시간으로 공벽까지 거리 산정 → 깊이별 벽면 Profile(결과도: 정상 / 공벽 붕괴 / 과굴착) 기록' },
      { h: '시험항목 및 Process', flow: ['굴착', '중심선 측량·측정기 설치', 'Sensor Unit 하강(Cable·Winch)', '초음파 송·수신·수직도 확인', 'Data 분석', '후속공정(철근망 삽입) 판단'], tbl: { head: ['구분', '내용'], rows: [
            ['측정 항목', '굴착 깊이, 수직도, 벽두께(공경), 공벽 형상'],
            ['판단', '안정액 일수·공벽 붕괴 여부, 굴착지반 상태·보강 여부'],
            ['활용', '콘크리트 과다 투입 방지, 안정액 관리 Feedback'],
            ['적용', 'Slurry Wall Panel, RCD·Barrette 등 현장타설말뚝']
          ] } },
      { h: '판정기준 (관리기준·허용오차)', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['수직도', '{{1/300}} 또는 {{±50mm}} 중 작은 값 이내', '합격답안 p032 / 기술지침 토공사 p060 / 스터디 2C-2주차 p4'],
            ['측정 개소', 'Panel당 {{3개소 이상}}(길이가 긴 Panel)', '합격답안 p032'],
            ['측정 기준', '벽체 중심선 기준', '합격답안 p032'],
            ['측정 범위', '최대 약 {{100m}} 깊이 이내 측정 (장비 사양 확인)', '스터디 2C-2주차 p4'],
            ['우선 적용', '설계도서·특기시방서 허용치 우선 (확인 필요)', '—']
          ] } },
      { h: '측정 시 유의사항 및 불합격 조치', ul: [
          '[전] 장비 Calibration, Guide Wall 중심선 측량·기준점 설정',
          '[전] 안정액 비중·사분율 확인 (기포·Slime은 측정 오차 원인)',
          '[중] Panel 길이가 길면 {{3개소 이상}} 측정, 굴착 완료 직후 측정',
          '[중] Sensor 하강 속도 일정, 장비 수평 유지',
          '[중] Sensor Unit은 굴착 바닥까지 삽입 (스터디)',
          '[후] 측정 Data 기록·보관·분석 → 후속공정(철근망 삽입) 판단, 허용치 초과 시 재굴착·보정 후 재측정',
          '[대책] 수직도 불량 → 철근망 삽입 곤란·벽두께 부족·이음부 누수 → 굴착기 경사 제어',
          '[대책] 공벽 붕괴 확인 → 안정액 비중·수위 상향, 콘크리트 타설량 보정',
          '[대책] 개선: 굴착장비 실시간 경사 모니터링 + 3D Profile 자료 BIM 연계'
        ] }
    ] }/*/DET*/
},
16: {
  title: 'IPS(Innovative Prestressed Support System)',
  cat: '토공·지반',
  key: ['IPS 띠장(Wale)', 'PS강선 긴장', '받침대(Post)', 'Prestress', '버팀보 수 감소', '작업공간 확보', '강재량 감소', '재긴장 가능', '계측관리'],
  www: {
    what: '버팀보 대신 [[IPS 띠장]]에 [[받침대]]를 두고 [[PS강선]]을 긴장하여 [[Prestress]]로 흙막이 벽을 지지하는 공법',
    why: '버팀보 개수를 줄여 넓은 [[작업공간]]을 확보하고 강재량 감소·변위 억제로 안전성과 시공성을 높이기 위함',
    how: '흙막이벽·1차 굴착 → IPS 띠장·받침대 설치 → 버팀보·접합 → PS강선 긴장 → 계측·재긴장 → 단계 굴착 반복'
  },
  tag: '공법·원리·특징',
  def: '기존 버팀보(Strut)를 최소화하고 흙막이 벽체에 [[IPS 띠장]]을 설치한 뒤 띠장에 [[PS강선]]을 긴장하여 [[Prestress]]를 가한 상태로 토압을 지지하는 흙막이 지보공법',
  wwh: ['PS 긴장 띠장', '작업공간 확보', 'PS강선 긴장'],
  figT: 'IPS 공법의 토압 지지 원리 및 시공순서',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="250" height="230" class="ln"/><line x1="80" y1="22" x2="80" y2="46" class="ar"/>' +
    '<line x1="155" y1="22" x2="155" y2="46" class="ar"/><line x1="230" y1="22" x2="230" y2="46" class="ar"/><rect x="40" y="56" width="230" height="8" class="bx2"/><rect x="40" y="266" width="230" height="8" class="bx2"/>' +
    '<line x1="80" y1="64" x2="80" y2="92" class="ln"/><line x1="120" y1="64" x2="120" y2="100" class="ln"/><line x1="190" y1="64" x2="190" y2="100" class="ln"/><line x1="230" y1="64" x2="230" y2="92" class="ln"/>' +
    '<line x1="80" y1="266" x2="80" y2="238" class="ln"/><line x1="120" y1="266" x2="120" y2="230" class="ln"/><line x1="190" y1="266" x2="190" y2="230" class="ln"/><line x1="230" y1="266" x2="230" y2="238" class="ln"/>' +
    '<path d="M40,64 L80,92 L120,100 L190,100 L230,92 L270,64" class="rd"/><path d="M40,266 L80,238 L120,230 L190,230 L230,238 L270,266" class="rd"/><line x1="155" y1="100" x2="155" y2="230" class="ln"/>' +
    '<line x1="31" y1="120" x2="55" y2="64" class="ln2"/><line x1="279" y1="120" x2="255" y2="64" class="ln2"/><line x1="31" y1="210" x2="55" y2="266" class="ln2"/><line x1="279" y1="210" x2="255" y2="266" class="ln2"/>' +
    '<text x="100" y="170" text-anchor="middle" class="s">넓은 작업공간</text><line x1="232" y1="30" x2="296" y2="32" class="ld"/><circle cx="296" cy="32" r="2" class="dotf"/><text x="300" y="36" class="b">토압</text>' +
    '<line x1="260" y1="60" x2="296" y2="58" class="ld"/><circle cx="296" cy="58" r="2" class="dotf"/><text x="300" y="62" class="bl">IPS 띠장(Wale)</text><line x1="250" y1="78" x2="296" y2="86" class="ld"/>' +
    '<circle cx="296" cy="86" r="2" class="dotf"/><text x="300" y="90" class="r">PS강선 긴장</text><line x1="190" y1="90" x2="296" y2="110" class="ld"/><circle cx="296" cy="110" r="2" class="dotf"/>' +
    '<text x="300" y="114" class="bl">받침대(Post)</text><line x1="155" y1="150" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/><text x="300" y="150" class="bl">중앙 버팀보</text>' +
    '<line x1="269" y1="232" x2="296" y2="196" class="ld"/><circle cx="296" cy="196" r="2" class="dotf"/><text x="300" y="200" class="bl">사보강(Corner)</text><line x1="280" y1="250" x2="296" y2="236" class="ld"/>' +
    '<circle cx="296" cy="236" r="2" class="dotf"/><text x="300" y="240" class="b">흙막이벽(H-Pile)</text><line x1="150" y1="252" x2="296" y2="274" class="ld"/><circle cx="296" cy="274" r="2" class="dotf"/>' +
    '<text x="300" y="278" class="r">굴착 작업공간 확보</text><text x="446" y="34" class="k3">③ 강재량 감소·재활용</text><text x="446" y="54" class="k3">③ 버팀보 감소→공간 확보</text><text x="446" y="74" class="k3">③ 재긴장으로 변위 조절</text>' +
    '<text x="446" y="100" class="k4">④ 단계별 PS 긴장 관리</text><text x="446" y="120" class="k4">④ 여굴 금지·적기 설치</text><text x="446" y="140" class="k4">④ 하중계·변위 계측</text><text x="446" y="166" class="k5">⑤ 자동 긴장·IoT 계측</text>' +
    '<text x="446" y="186" class="k5">⑤ 굴착 단계별 재긴장</text><rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">흙막이벽·1차 굴착</text>' +
    '<line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">IPS 띠장·받침대 설치</text>' +
    '<line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">버팀보·접합</text>' +
    '<line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">PS강선 긴장</text>' +
    '<line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">계측·단계 굴착 반복</text></svg>',
  subs: [
    { h: 'IPS 공법의 특징', pts: ['강재량 감소·재활용', '버팀보 감소→공간 확보', '[[재긴장]]으로 변위 조절'] },
    { h: '시공 시 유의사항', pts: ['단계별 PS 긴장 관리', '여굴 금지·적기 설치', '하중계·변위 계측'] },
    { h: '개선방안', pts: ['자동 긴장·IoT 계측', '굴착 단계별 재긴장'] }
  ],
  msg: '띠장에 Prestress → 버팀보 최소화·넓은 작업공간·변위 억제',
  mnemo: 'IPS = 띠·받·강 (띠장·받침대·강선 긴장)',
  rel: ['Strut 공법', 'Earth Anchor', 'PS Beam', 'Top Down', '흙막이 계측'],
  src: '근거: KCS 21 30 00(가설흙막이) / 마법지 2공종(지보공 공법: Strut, Earth Anchor, IPS, PS Beam) / 합격답안: 디테일용어300 No.24(p035) / 기술지침 2 토공사 p057(계측 관리기준: 벽체 H/200·설계허용값, 지반 침하경사 1/200~1/500, 구조물 경사 1/300~1/1000)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '기존 버팀보(Strut)를 사용하지 않고 흙막이 벽체에 [[IPS 띠장]]을 설치한 뒤 띠장에 [[PS강선]]을 설치·긴장하여 [[Prestress]]를 가한 상태로 토압을 지지하는 흙막이 지보공법' },
      { h: 'IPS 공법의 원리 ("토압 지지 원리")', fig: 'MAIN', p: '띠장에 PS강선 긴장 → 토압에 의한 띠장 휨모멘트를 반대 방향 모멘트로 상쇄 → 버팀보 간격 확대·작업공간 확보' },
      { h: '특징 (지보공 공법 비교)', tbl: { head: ['구분', 'IPS', 'Strut', 'Earth Anchor'], rows: [
            ['지지 원리', '띠장 Prestress', '버팀보 압축력', '지반 정착 인장력'],
            ['작업공간', '넓음', '좁음', '매우 넓음'],
            ['강재량', '적음·재활용', '많음', '적음'],
            ['인접대지', '영향 없음', '영향 없음', '승낙 필요'],
            ['변위 조절', '[[재긴장]] 가능', 'Jack 일부', '재긴장 제한적']
          ] } },
      { h: '시공 Process', flow: ['흙막이벽·1차 굴착', 'IPS 띠장 설치', '받침대·버팀보 및 접합', 'PS강선 긴장(Prestressing)', '단계 굴착·추가 긴장', '계측·재긴장', '해체(역순)'] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 굴착 단계별 구조검토, 흙막이 굴착 시 여굴을 고려한 띠장 치수 여유 확보',
          '[중] 여굴 금지, 굴착 즉시 띠장·받침대 설치',
          '[중] PS강선 단계별 긴장, 긴장력·신장량 기록',
          '[중] 주기적 계측(하중계·경사계)으로 흙막이·지보공 변위 확인',
          '[후] 공간에 맞는 시공(단경간용·장경간용) 선정, 구조체 강도 확인 후 역순 해체·강재 회수',
          '[대책] 긴장력 손실(Relaxation·온도) → 재긴장으로 변위 조절',
          '[대책] 띠장 좌굴·국부 변형 → 받침대 간격·보강',
          '[대책] 관리기준 초과 시 단계별 대책: 주의 → 대체공법 검토, 경계 → 배면 Grouting·띠장 보강, 위험 → 공사 중지',
          '[대책] 개선: 자동 긴장장치·IoT 하중계 실시간 모니터링'
        ] },
      { h: '관리기준 (긴장·계측 관리)', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['PS 긴장', '2단 버팀보 가압 시 설계압의 {{70%}} 확보 후 중앙 버팀보 설치 (판독 — 확인 필요)', '합격답안 p035'],
            ['흙막이벽 변형', 'H/200 이면서 설계 허용값 이하', '기술지침 토공사 p057'],
            ['주변지반 침하경사', '{{1/200~1/500}}', '기술지침 토공사 p057'],
            ['주변구조물 경사', '{{1/300~1/1000}}', '기술지침 토공사 p057']
          ] } }
    ] }/*/DET*/
},
17: {
  title: 'Earth anchor공법',
  cat: '토공·지반',
  key: ['PC강연선', '앵커체(정착장)', '자유장', 'Grouting', '긴장·정착', '주동 파괴면', '설치각 10~45°', '인접대지 승낙', '제거식 앵커'],
  www: {
    what: '흙막이 배면 지반을 천공하여 [[PC강연선]]을 삽입·[[Grouting]]으로 [[앵커체]]를 만들고 [[긴장·정착]]하여 흙막이를 지지하는 공법',
    why: '버팀대 없이 굴착 내부 [[작업공간]]을 넓게 확보하고, 경사·편토압 현장에서도 흙막이 변위를 억제하기 위함',
    how: '천공·강선 삽입 → Grouting → 양생·띠장 설치 → [[긴장·정착]] → 인장시험·계측'
  },
  tag: '공법·원리·기준',
  def: '흙막이 배면 지반을 천공한 후 [[PC강연선]]을 삽입하고 [[Grouting]]으로 [[앵커체]]를 형성한 다음, 인장력을 도입·[[정착]]하여 앵커체 주면마찰(또는 지압) 저항으로 흙막이를 지지하는 공법',
  wwh: ['지반 정착 인장재', '작업공간 확보', '천공·주입·긴장'],
  figT: 'Earth Anchor의 Prestress 토압지지 원리 및 설치기준',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="60" width="220" height="250" class="soil"/><line x1="70" y1="60" x2="290" y2="60" class="ln"/>' +
    '<line x1="20" y1="290" x2="70" y2="290" class="ln"/><rect x="60" y="50" width="10" height="260" class="conc"/><line x1="70" y1="90" x2="178" y2="140" class="ln"/>' +
    '<polygon points="175.5,146.4 265.5,188.4 270.5,177.6 180.5,135.6" class="bx2"/><line x1="70" y1="170" x2="178" y2="220" class="ln"/><polygon points="175.5,226.4 265.5,268.4 270.5,257.6 180.5,215.6" class="bx2"/>' +
    '<rect x="46" y="84" width="14" height="12" class="bx"/><rect x="46" y="164" width="14" height="12" class="bx"/><line x1="70" y1="290" x2="180" y2="60" class="ln2 dash"/>' +
    '<line x1="70" y1="90" x2="112" y2="90" class="ln2 dash"/><path d="M104,90 A34,34 0 0,1 101,104" class="ln2"/><line x1="53" y1="84" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/>' +
    '<text x="300" y="40" class="bl">띠장·정착구(Head)</text><line x1="125" y1="116" x2="296" y2="74" class="ld"/><circle cx="296" cy="74" r="2" class="dotf"/><text x="300" y="78" class="r">자유장 4m↑</text>' +
    '<line x1="102" y1="100" x2="296" y2="106" class="ld"/><circle cx="296" cy="106" r="2" class="dotf"/><text x="300" y="110" class="r">설치각 10~45°</text><line x1="225" y1="163" x2="296" y2="134" class="ld"/>' +
    '<circle cx="296" cy="134" r="2" class="dotf"/><text x="300" y="138" class="r">앵커체(정착장) 3~10m</text><line x1="150" y1="207" x2="296" y2="162" class="ld"/><circle cx="296" cy="162" r="2" class="dotf"/>' +
    '<text x="300" y="166" class="b">PC강연선·Grout</text><line x1="123" y1="180" x2="296" y2="196" class="ld"/><circle cx="296" cy="196" r="2" class="dotf"/><text x="300" y="200" class="b">주동 파괴면</text>' +
    '<line x1="53" y1="176" x2="296" y2="236" class="ld"/><circle cx="296" cy="236" r="2" class="dotf"/><text x="300" y="240" class="bl">긴장·정착(Lock-off)</text><line x1="40" y1="290" x2="296" y2="286" class="ld"/>' +
    '<circle cx="296" cy="286" r="2" class="dotf"/><text x="300" y="290" class="b">굴착저면</text><text x="446" y="34" class="k3">③ 자유장 4.0m 이상</text><text x="446" y="54" class="k3">③ 정착장 3~10m</text>' +
    '<text x="446" y="74" class="k3">③ 설치각 10~45°</text><text x="446" y="100" class="k4">④ 지장물·인접대지 승낙</text><text x="446" y="120" class="k4">④ 천공 깊이·각도 관리</text><text x="446" y="140" class="k4">④ Grout 연속 주입·양생</text>' +
    '<text x="446" y="166" class="k5">⑤ 제거식 앵커 적용</text><text x="446" y="186" class="k5">⑤ Load Cell 긴장력 계측</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">천공·강선 삽입</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">Grouting</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">양생·띠장 설치</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">긴장·정착</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="345" text-anchor="middle" class="s">인장시험·계측</text></svg>',
  subs: [
    { h: 'Earth Anchor 설치기준', pts: ['자유장 {{4.0m}} 이상', '정착장 {{3~10m}}', '설치각 {{10~45°}}'] },
    { h: '시공 시 유의사항', pts: ['지장물·인접대지 승낙', '천공 깊이·각도 관리', 'Grout 연속 주입·양생'] },
    { h: '개선방안', pts: ['[[제거식 앵커]] 적용', 'Load Cell 긴장력 계측'] }
  ],
  msg: '파괴면 밖 정착장 + Prestress → 버팀대 없는 넓은 굴착공간',
  mnemo: '자4·정3~10·각10~45 / 천·그·띠·긴·시',
  rel: ['Rock Anchor', '제거식 앵커', 'IPS', 'Soil Nailing', '흙막이 계측'],
  src: '근거: KCS 21 30 00 / KDS 11 60 00(앵커 — 조항 확인 필요) / 마법지 2공종(지보공 공법: Earth Anchor) / 합격답안: 디테일용어300 No.26(p037: 자유장 4.0m↑, 정착장 3.0~10m, 각도 10~45°) / 기술지침 2 토공사 p037~038(천공 위치 편차 100mm 이내·각도 ±2.5°·휨 3m당 20mm 이하 판독, Casing·Packer·Slime 제거) / 스터디: (박동수) 용어300_1주차.pdf p4(정의·Prestress 원리·설치기준 자유장 4.0m↑·정착장 3.0~10m·각도 10~45°, 천공 시 Anchor 위치 ±25mm·천공 길이 +0.5m 메모 — 위치 허용오차는 기술지침 100mm 우선, 확인 필요)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '흙막이 배면 지반을 천공한 후 [[PC강연선]]을 삽입하고 [[Grouting]]으로 [[앵커체]]를 형성한 다음 인장력을 도입·[[정착]]하여, 앵커체 주면 마찰저항 또는 선단부 지압저항으로 흙막이를 지지하는 공법' },
      { h: 'Prestress에 의한 토압지지 원리', fig: [
          'MAIN',
          { svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg"><rect x="66" y="20" width="354" height="220" class="soil"/><line x1="66" y1="20" x2="420" y2="20" class="ln"/><rect x="54" y="14" width="12" height="226" class="conc"/><line x1="10" y1="230" x2="54" y2="230" class="ln"/><rect x="40" y="58" width="14" height="20" class="bx2"/><rect x="34" y="60" width="6" height="16" class="conc"/><line x1="40" y1="68" x2="230" y2="137.5" class="ln"/><polygon points="232.4,130.9 402.4,193 397.6,206.2 227.6,144.1" class="bx3"/><line x1="40" y1="68" x2="400" y2="218" class="rd dash"/><line x1="40" y1="68" x2="150" y2="68" class="ln2 dash"/><path d="M130,68 A90,90 0 0,1 124.5,98.9" class="ln2"/><line x1="66" y1="230" x2="200" y2="20" class="ln2 dash"/><circle cx="150" cy="215" r="9" class="ln2"/><circle cx="157" cy="211" r="9" class="rd dash"/><line x1="187" y1="40" x2="442" y2="30" class="ld"/><circle cx="442" cy="30" r="2" class="dotf"/><text x="446" y="34" class="b">주동 파괴면(45°+φ/2)</text><line x1="47" y1="58" x2="442" y2="56" class="ld"/><circle cx="442" cy="56" r="2" class="dotf"/><text x="446" y="60" class="bl">띠장·지압판·정착구</text><line x1="128" y1="84" x2="442" y2="82" class="ld"/><circle cx="442" cy="82" r="2" class="dotf"/><text x="446" y="86" class="r">설치각 10~45°</text><line x1="180" y1="119" x2="442" y2="108" class="ld"/><circle cx="442" cy="108" r="2" class="dotf"/><text x="446" y="112" class="r">자유장 4.0m↑ (비부착)</text><line x1="320" y1="170" x2="442" y2="134" class="ld"/><circle cx="442" cy="134" r="2" class="dotf"/><text x="446" y="138" class="r">정착장 3~10m (Grout 정착)</text><line x1="372" y1="183" x2="442" y2="160" class="ld"/><circle cx="442" cy="160" r="2" class="dotf"/><text x="446" y="164" class="r">천공 휨 3m당 20mm↓</text><line x1="390" y1="213" x2="442" y2="186" class="ld"/><circle cx="442" cy="186" r="2" class="dotf"/><text x="446" y="190" class="r">각도 허용오차 ±2.5°</text><line x1="166" y1="211" x2="442" y2="212" class="ld"/><circle cx="442" cy="212" r="2" class="dotf"/><text x="446" y="216" class="r">천공 위치 편차 100mm 이내</text><line x1="30" y1="230" x2="442" y2="238" class="ld"/><circle cx="442" cy="238" r="2" class="dotf"/><text x="446" y="242" class="b">굴착저면</text></svg>', cap: '[상세] Earth Anchor 단면 및 천공 허용오차 — 위치 100mm·각도 ±2.5°·휨 3m당 20mm' }
        ], p: '지반 내 형성된 앵커체와 흙막이를 인장재로 연결 → 인장력(Prestress) 도입 → 앵커체 주면 마찰저항 또는 선단 지압저항으로 토압 지지' },
      { h: '종류 및 구성', tbl: { head: ['구분', '내용'], rows: [
            ['지지 방식', '마찰형(주면마찰) / 지압형(선단 지압) / 복합형'],
            ['사용 기간', '가설 앵커(흙막이) / 영구 앵커(옹벽·부력 방지)'],
            ['제거 여부', '[[제거식 앵커]](강선 회수 → 인접대지 분쟁 방지) / 비제거식'],
            ['구성', '앵커두부(정착구·지압판) – 자유장(비부착) – 정착장(앵커체)']
          ] } },
      { h: '시공 Process', flow: ['지장물·인접대지 조사', '천공(Casing)·강선 삽입', 'Slime 제거·Grouting', '양생·띠장 설치', '긴장·정착(Lock-off)', '인장시험·계측'] },
      { h: '시공 시 유의사항 (천공 전·중·후)', ul: [
          '[전] 지중장애물(매설관)·인접 건물 기초 간섭 검토, 인접대지 소유자 승낙',
          '[전] 토질주상도(N값·RQD·지하수위)로 자유장·정착장 길이, 인발저항력·안전율 검토',
          '[중] 연약지반 Casing 천공, 지하수 존재 시 안정액·Packer → 공벽 붕괴 방지',
          '[중] Slime 제거 철저(잔존 시 부착력 저하), Mortar 연속 주입·동절기 온도관리',
          '[중] 토사 유출·피압 지하수 → 지수 Packing (배면 침하 방지)',
          '[후] Grout 강도 확인 후 긴장·정착, 인장시험·Load Cell 계측, Casing 인발 시 공벽 붕괴 주의',
          '[대책] 정착력 부족: Slime·정착장 부족 → 천공 깊이 여유·인장시험',
          '[대책] 배면 침하: 토사·지하수 유출 → 지수 Packing·배면 Grouting',
          '[대책] 개선: 제거식 앵커, Load Cell 실시간 긴장력 계측'
        ] },
      { h: '설치기준·허용오차', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['자유장', '{{4.0m 이상}}', '합격답안 p037'],
            ['정착장', '{{3.0~10m}}', '합격답안 p037'],
            ['설치각', '{{10~45°}}', '합격답안 p037'],
            ['천공 위치', '설계위치 편차 {{100mm}} 이내', '기술지침 토공사 p037'],
            ['천공 각도', '허용오차 {{±2.5°}} (판독)', '기술지침 토공사 p037'],
            ['천공 휨', '{{3m당 20mm}} 이하 (판독)', '기술지침 토공사 p037'],
            ['천공 길이', '설계길이 + {{0.3~0.5m}} 여유 (판독)', '합격답안 p037·기술지침 p038']
          ] } }
    ] }/*/DET*/
},
18: {
  title: 'Toe Grouting',
  cat: '기초',
  key: ['현장타설말뚝(RCD)', '선단 Slime', '선단지지력 저하', 'Cement Milk', 'TG Pipe(Ø100)', '수세(Slime 제거)', '주입압·주입량', '선단 이완부 보강'],
  www: {
    what: 'RCD 등 [[현장타설말뚝]] 선단의 [[Slime]]·이완 지반에 사전 매립한 주입관으로 [[Cement Milk]]를 주입하는 선단 보강 공법',
    why: '공 내 잔존 Slime에 의한 [[선단지지력]] 저하와 말뚝 침하를 방지하고 지지력을 확보하기 위함',
    how: '주입관 철근망 부착 → 콘크리트 타설·양생 → 관 선단 천공·수세(Slime 제거) → Cement Milk 주입 → 재하시험 확인'
  },
  tag: '공법·기능·작용',
  def: 'RCD 등 [[현장타설말뚝]] 굴착 후 공 내 잔존 [[Slime]]으로 인한 [[선단지지력]] 저하를 방지하기 위해 말뚝 선단부에 [[Cement Milk]]를 주입하여 선단 이완 지반을 보강하는 공법',
  wwh: ['선단 주입 보강', '선단지지력 확보', 'Cement Milk 주입'],
  figT: 'Toe Grouting의 시공개요 및 관리사항',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="270" height="200" class="soil"/><rect x="20" y="260" width="270" height="50" class="bx3"/>' +
    '<line x1="20" y1="60" x2="290" y2="60" class="ln"/><ellipse cx="150" cy="278" rx="55" ry="16" class="bx2"/><rect x="110" y="60" width="80" height="210" class="conc"/>' +
    '<rect x="110" y="262" width="80" height="8" class="bx2"/><line x1="118" y1="66" x2="118" y2="262" class="ln2 dash"/><line x1="182" y1="66" x2="182" y2="262" class="ln2 dash"/>' +
    '<rect x="140" y="40" width="20" height="160" class="bx"/><line x1="125" y1="44" x2="125" y2="268" class="ln"/><line x1="175" y1="44" x2="175" y2="268" class="ln"/><line x1="160" y1="46" x2="296" y2="32" class="ld"/>' +
    '<circle cx="296" cy="32" r="2" class="dotf"/><text x="300" y="36" class="bl">철골기둥(역타)</text><line x1="175" y1="52" x2="296" y2="58" class="ld"/><circle cx="296" cy="58" r="2" class="dotf"/>' +
    '<text x="300" y="62" class="bl">TG Pipe(Ø100)</text><line x1="175" y1="100" x2="296" y2="92" class="ld"/><circle cx="296" cy="92" r="2" class="dotf"/><text x="300" y="96" class="r">주입관 2개소↑</text>' +
    '<line x1="182" y1="130" x2="296" y2="126" class="ld"/><circle cx="296" cy="126" r="2" class="dotf"/><text x="300" y="130" class="b">철근망(Cage)</text><line x1="190" y1="170" x2="296" y2="160" class="ld"/>' +
    '<circle cx="296" cy="160" r="2" class="dotf"/><text x="300" y="164" class="b">RCD 현장타설말뚝</text><line x1="188" y1="266" x2="296" y2="226" class="ld"/><circle cx="296" cy="226" r="2" class="dotf"/>' +
    '<text x="300" y="230" class="r">Slime·선단 이완부</text><line x1="204" y1="280" x2="296" y2="258" class="ld"/><circle cx="296" cy="258" r="2" class="dotf"/><text x="300" y="262" class="r">Cement Milk 주입</text>' +
    '<line x1="250" y1="296" x2="296" y2="292" class="ld"/><circle cx="296" cy="292" r="2" class="dotf"/><text x="300" y="296" class="bl">지지층(선단)</text><text x="446" y="34" class="k3">③ 주입관 Ø100 2개↑</text>' +
    '<text x="446" y="54" class="k3">③ 타설 후 10일↑ 양생</text><text x="446" y="74" class="k3">③ 수세(청수)→Slime 제거</text><text x="446" y="100" class="k4">④ 주입압·주입량 관리</text><text x="446" y="120" class="k4">④ 지반·지하수 조건 확인</text>' +
    '<text x="446" y="140" class="k4">④ 1차·2차 단계 주입</text><text x="446" y="166" class="k5">⑤ 재하시험 지지력 확인</text><text x="446" y="186" class="k5">⑤ 굴착 시 Slime 우선 처리</text>' +
    '<rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">주입관 철근망 부착</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/>' +
    '<rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">콘크리트 타설·양생</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/>' +
    '<rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">관 선단 천공·수세</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/>' +
    '<rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">Cement Milk 주입</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/>' +
    '<rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">재하시험 확인</text></svg>',
  subs: [
    { h: 'Toe Grouting 관리사항', pts: ['주입관 Ø100 {{2개}}↑', '타설 후 {{10일}}↑ 양생', '수세(청수)→Slime 제거'] },
    { h: '시공 시 유의사항', pts: ['주입압·주입량 관리', '지반·지하수 조건 확인', '1차·2차 단계 주입'] },
    { h: '개선방안', pts: ['재하시험 지지력 확인', '굴착 시 Slime 우선 처리'] }
  ],
  msg: '선단 Slime 을 씻고 Cement Milk 로 채워 → 선단지지력 회복·침하 방지',
  mnemo: '부·타·천·수·주 (부착·타설·천공·수세·주입)',
  rel: ['RCD 공법', 'Slime 처리', '선단지지력', '재하시험', 'Koden Test'],
  src: '근거: KCS 11 50 15(현장타설말뚝 — 조항 확인 필요) / 마법지 3공종(Slime 제거) / 합격답안: 디테일용어300 No.28(p039: Ø100 Steel pipe 2개, 10일 이상 양생) — 주입압 1차 중력·2차 0.5~0.7MPa(손글씨 판독, 확인 필요) / 스터디: (이이섭)용어300(1주차 19개).pdf p3(= 2C-2주차 p6, 정의 ①②·시공개요도·관리사항 Ø100 2개·10일·Ø18/Ø25 Hose·주입압 1차 중력/2차 0.5~0.7MPa)',
  det: /*DET*/{ secs: [
      { h: '정의', def: 'RCD 등 [[현장타설말뚝]] 굴착 후 공 내 잔존 [[Slime]]에 의한 기초 성능 저하를 방지하기 위해 선단부에 [[Cement Milk]]를 주입하여 선단 이완 지반을 보강하고 [[선단지지력]]을 확보하는 공법으로, 상부하중에 의한 침하 방지·원지반 변형 보강 목적' },
      { h: '시공 개요 (주입 원리)', fig: [
          'MAIN',
          { svg: '<svg viewBox="0 0 640 256" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="186" width="360" height="64" class="soil"/><rect x="120" y="20" width="180" height="166" class="conc"/><line x1="135" y1="20" x2="135" y2="180" class="ln2 dash"/><line x1="285" y1="20" x2="285" y2="180" class="ln2 dash"/><rect x="160" y="14" width="10" height="172" class="bx2"/><rect x="250" y="14" width="10" height="172" class="bx2"/><line x1="165" y1="14" x2="165" y2="180" class="bl"/><line x1="255" y1="14" x2="255" y2="180" class="bl"/><ellipse cx="210" cy="208" rx="110" ry="22" class="bx3"/><rect x="120" y="186" width="180" height="8" class="bx2"/><rect x="158" y="180" width="14" height="6" class="bx"/><rect x="248" y="180" width="14" height="6" class="bx"/><line x1="165" y1="192" x2="140" y2="214" class="ar"/><line x1="165" y1="192" x2="185" y2="220" class="ar"/><line x1="255" y1="192" x2="235" y2="220" class="ar"/><line x1="255" y1="192" x2="282" y2="214" class="ar"/><line x1="260" y1="40" x2="442" y2="30" class="ld"/><circle cx="442" cy="30" r="2" class="dotf"/><text x="446" y="34" class="bl">TG Pipe Ø100 × 2개↑</text><line x1="165" y1="60" x2="442" y2="56" class="ld"/><circle cx="442" cy="56" r="2" class="dotf"/><text x="446" y="60" class="b">주입 Hose(PVC Ø18·Ø25)</text><line x1="285" y1="90" x2="442" y2="82" class="ld"/><circle cx="442" cy="82" r="2" class="dotf"/><text x="446" y="86" class="b">철근망(Cage)</text><line x1="230" y1="120" x2="442" y2="108" class="ld"/><circle cx="442" cy="108" r="2" class="dotf"/><text x="446" y="112" class="r">타설 후 10일↑ 양생·천공</text><line x1="262" y1="183" x2="442" y2="134" class="ld"/><circle cx="442" cy="134" r="2" class="dotf"/><text x="446" y="138" class="r">Sleeve Cap·수세(청수)</text><line x1="295" y1="190" x2="442" y2="160" class="ld"/><circle cx="442" cy="160" r="2" class="dotf"/><text x="446" y="164" class="b">선단 Slime·이완부</text><line x1="312" y1="206" x2="442" y2="186" class="ld"/><circle cx="442" cy="186" r="2" class="dotf"/><text x="446" y="190" class="r">Cement Milk 주입·고결</text><line x1="210" y1="222" x2="442" y2="212" class="ld"/><circle cx="442" cy="212" r="2" class="dotf"/><text x="446" y="216" class="r">2차 주입압 0.5~0.7MPa</text><line x1="380" y1="238" x2="442" y2="238" class="ld"/><circle cx="442" cy="238" r="2" class="dotf"/><text x="446" y="242" class="b">지지층(선단)</text></svg>', cap: '[상세] TG Pipe 선단 상세 — Sleeve Cap 천공·수세 후 Cement Milk 주입으로 선단 이완부 보강' }
        ] },
      { h: '목적·효과 및 적용', tbl: { head: ['구분', '내용'], rows: [
            ['목적', '선단 Slime 제거·이완 지반 보강 → [[선단지지력]] 확보'],
            ['효과', '상부하중에 의한 침하 방지, 원지반 변형 대응'],
            ['적용', 'RCD·Barrette 등 대구경 현장타설말뚝, 역타 철골기둥 하부']
          ] } },
      { h: '시공 Process', flow: [
          'TG Pipe(Ø100) 철근망 부착',
          '콘크리트 타설',
          '10일↑ 양생',
          'Sleeve Cap 천공',
          '수세(청수 → Slime 배출)',
          '1차·2차 Cement Milk 주입',
          '재하시험 확인'
        ] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 지반 및 지하수 조건 확인, 주입관 위치·고정(타설 중 이탈·막힘 방지)',
          '[전] 굴착 시 Slime 1차 처리(Desanding) 우선 — "TG 목적 = Slime 처리"',
          '[중] 천공 및 주입 관리: 붕괴 방지 Casing·안정액 사용',
          '[중] 공내 청소: 청수로 Slime 제거, 잔여 Grouting재 및 Slime 배출 확인',
          '[중] 주입 압력·주입량·속도 관리, 말뚝 들림·지반 융기 감시',
          '[후] 재하시험·Core로 선단 상태·지지력 확인, 주입 기록 보관',
          '[대책] 주입관 막힘: 콘크리트 유입 → Sleeve Cap·Hose 보호',
          '[대책] 과압 주입: 지반 할렬·말뚝 부상 → 단계 주입·압력 상한',
          '[대책] 개선: 압력·주입량 자동기록, 굴착 단계 Slime 처리 강화'
        ] },
      { h: 'Toe Grouting 관리사항', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['주입관', 'Ø100 Steel Pipe 말뚝 1개당 {{2개}} 설치', '합격답안 p039'],
            ['천공 시기', '콘크리트 타설 후 최소 {{10일 이상}} 양생 후', '합격답안 p039'],
            ['주입 Hose', 'Sleeve Cap 및 PVC Hose(Ø18·Ø25)', '합격답안 p039'],
            ['주입압', '1차: 중력식 / 2차: {{0.5~0.7MPa}} (판독 — 확인 필요)', '합격답안 p039']
          ] } }
    ] }/*/DET*/
},
19: {
  title: 'SPS(Strut as Permanent System )',
  cat: '토공·지반',
  key: ['영구 철골 구조물', '버팀대 겸용', 'Perimeter Beam', '지하·지상 동시', 'Up-Up 공법', '가설 Strut 해체 불필요', '기둥 수직도', '작업장 하중', '공기단축'],
  www: {
    what: '지하 [[영구 철골]] 기둥·보를 굴착 진행에 따라 선시공하여 굴착 중에는 [[버팀대]], 완료 후에는 본구조로 쓰는 공법',
    why: '가설 Strut 설치·해체를 없애 안전성을 높이고 지하·지상 동시 시공([[Up-Up]])으로 공기를 단축하기 위함',
    how: '흙막이벽 시공 → 철골기둥·기초 설치 → 1층 바닥·보 선시공 → 굴착·하부 보 Down → 지상 Up-Up 동시 진행'
  },
  tag: '공법·구조·특징',
  def: '지하 본구조물인 [[철골 기둥·보]]를 굴토 진행에 따라 선시공하여 굴토 중에는 토압을 지지하는 [[버팀대]]로, Slab 타설 후에는 [[본구조물]]로 사용하며 지하·지상을 동시에 진행하는 철골조 Top Down 공법',
  wwh: ['영구 철골 버팀대', '공기단축·안전', '보 선시공·Up-Up'],
  figT: 'SPS 공법의 구성 및 토압 지지 Process',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="20" height="240" class="soil"/><rect x="270" y="60" width="20" height="240" class="soil"/>' +
    '<line x1="20" y1="60" x2="290" y2="60" class="ln"/><rect x="40" y="60" width="8" height="240" class="conc"/><rect x="262" y="60" width="8" height="240" class="conc"/>' +
    '<rect x="100" y="30" width="6" height="250" class="bx"/><rect x="95" y="280" width="16" height="30" class="conc"/><rect x="152" y="30" width="6" height="250" class="bx"/>' +
    '<rect x="147" y="280" width="16" height="30" class="conc"/><rect x="204" y="30" width="6" height="250" class="bx"/><rect x="199" y="280" width="16" height="30" class="conc"/>' +
    '<rect x="48" y="61" width="214" height="6" class="bx2"/><line x1="48" y1="130" x2="262" y2="130" class="ln"/><line x1="48" y1="200" x2="262" y2="200" class="ln"/>' +
    '<line x1="48" y1="270" x2="262" y2="270" class="ln2 dash"/><rect x="48" y="126" width="10" height="8" class="bx"/><rect x="252" y="126" width="10" height="8" class="bx"/>' +
    '<rect x="48" y="196" width="10" height="8" class="bx"/><rect x="252" y="196" width="10" height="8" class="bx"/><line x1="176" y1="40" x2="176" y2="16" class="ar"/><line x1="180" y1="228" x2="180" y2="256" class="ar"/>' +
    '<line x1="178" y1="22" x2="296" y2="20" class="ld"/><circle cx="296" cy="20" r="2" class="dotf"/><text x="300" y="24" class="b">지상 철골 Up</text><line x1="230" y1="64" x2="296" y2="52" class="ld"/>' +
    '<circle cx="296" cy="52" r="2" class="dotf"/><text x="300" y="56" class="r">1층 슬래브(작업장)</text><line x1="210" y1="92" x2="296" y2="88" class="ld"/><circle cx="296" cy="88" r="2" class="dotf"/>' +
    '<text x="300" y="92" class="bl">영구 철골기둥</text><line x1="230" y1="130" x2="296" y2="122" class="ld"/><circle cx="296" cy="122" r="2" class="dotf"/><text x="300" y="126" class="r">철골보 = 버팀대</text>' +
    '<line x1="58" y1="134" x2="296" y2="148" class="ld"/><circle cx="296" cy="148" r="2" class="dotf"/><text x="300" y="152" class="bl">Perimeter Beam</text><line x1="182" y1="240" x2="296" y2="192" class="ld"/>' +
    '<circle cx="296" cy="192" r="2" class="dotf"/><text x="300" y="196" class="b">하부 굴착(Down)</text><line x1="266" y1="226" x2="296" y2="222" class="ld"/><circle cx="296" cy="222" r="2" class="dotf"/>' +
    '<text x="300" y="226" class="b">흙막이벽(CIP·D/W)</text><line x1="30" y1="250" x2="296" y2="256" class="ld"/><circle cx="296" cy="256" r="2" class="dotf"/><text x="300" y="260" class="b">토압</text>' +
    '<line x1="210" y1="300" x2="296" y2="296" class="ld"/><circle cx="296" cy="296" r="2" class="dotf"/><text x="300" y="300" class="bl">PRD·RCD 기초</text><text x="446" y="34" class="k3">③ 가설 Strut 해체 불필요</text>' +
    '<text x="446" y="54" class="k3">③ 지하·지상 동시 시공</text><text x="446" y="74" class="k3">③ 공기단축·안전성 향상</text><text x="446" y="100" class="k4">④ 기둥 수직도 확보</text><text x="446" y="120" class="k4">④ 작업장(1층) 하중 관리</text>' +
    '<text x="446" y="140" class="k4">④ Perimeter Beam 접합</text><text x="446" y="166" class="k5">⑤ BIM 접합부 사전검토</text><text x="446" y="186" class="k5">⑤ 변위·응력 계측 관리</text>' +
    '<rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">흙막이벽 시공</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/>' +
    '<rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">철골기둥·기초 설치</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/>' +
    '<rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">1층 바닥·보 선시공</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/>' +
    '<rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">굴착·하부 보 Down</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/>' +
    '<rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">지상 Up-Up 동시</text></svg>',
  subs: [
    { h: 'SPS 공법의 특징', pts: ['가설 Strut 해체 불필요', '지하·지상 동시 시공', '공기단축·안전성 향상'] },
    { h: '시공 시 유의사항', pts: ['기둥 [[수직도]] 확보', '작업장(1층) 하중 관리', 'Perimeter Beam 접합'] },
    { h: '개선방안', pts: ['BIM 접합부 사전검토', '변위·응력 계측 관리'] }
  ],
  msg: '본구조 철골보가 곧 버팀대 → 가설재 해체 無, 지하·지상 동시(Up-Up) 공기단축',
  mnemo: '흙·기·선·다·업 (흙막이·기둥·선시공·Down·Up)',
  rel: ['Top Down 공법', 'Up-Up 공법', 'PRD', 'Perimeter Beam', '역타 기둥 수직도'],
  src: '근거: 마법지 2공종(지보공 공법: Top Down) / 합격답안: 디테일용어300 No.29(p040: Guide Concrete 수직도, 1층 복공슬래브 하중, Perimeter Beam·Embed Plate) / 기술지침 2 토공사 p058~060(SPS Up-Up: 기둥 수직도 1/300 이하·선기둥 위치오차 5mm 이내, Reshoring 2~3개층)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '지하 본구조물인 [[철골 기둥·보]]를 굴토 진행에 따라 선시공하여 굴토 중에는 토압을 지지하는 [[버팀대]]로, Slab 타설 후에는 [[본구조물]]로 사용하며 지하·지상을 동시에 진행하는 철골조 Top Down 공법' },
      { h: '공법의 구성 및 토압 지지 원리', fig: [
          'MAIN',
          { svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="40" height="200" class="conc"/><line x1="4" y1="60" x2="28" y2="60" class="ar"/><line x1="4" y1="120" x2="28" y2="120" class="ar"/><line x1="4" y1="180" x2="28" y2="180" class="ar"/><rect x="70" y="80" width="330" height="10" class="conc"/><rect x="70" y="90" width="100" height="60" class="conc"/><rect x="166" y="100" width="6" height="40" class="bx2"/><rect x="172" y="104" width="228" height="32" class="bx2"/><line x1="200" y1="120" x2="330" y2="120" class="ar"/><text x="265" y="101" text-anchor="middle" class="s">축력 전달</text><line x1="70" y1="95" x2="70" y2="145" class="bl"/><line x1="120" y1="90" x2="120" y2="150" class="ln2 dash"/><line x1="50" y1="40" x2="442" y2="30" class="ld"/><circle cx="442" cy="30" r="2" class="dotf"/><text x="446" y="34" class="b">흙막이벽(CIP·Slurry Wall)</text><line x1="16" y1="60" x2="442" y2="56" class="ld"/><circle cx="442" cy="56" r="2" class="dotf"/><text x="446" y="60" class="r">토압·수압</text><line x1="300" y1="85" x2="442" y2="82" class="ld"/><circle cx="442" cy="82" r="2" class="dotf"/><text x="446" y="86" class="b">1층·지하 Slab</text><line x1="110" y1="110" x2="442" y2="108" class="ld"/><circle cx="442" cy="108" r="2" class="dotf"/><text x="446" y="112" class="bl">Perimeter Beam(RC)</text><line x1="169" y1="130" x2="442" y2="134" class="ld"/><circle cx="442" cy="134" r="2" class="dotf"/><text x="446" y="138" class="bl">Embed Plate·Stud</text><line x1="370" y1="128" x2="442" y2="160" class="ld"/><circle cx="442" cy="160" r="2" class="dotf"/><text x="446" y="164" class="bl">철골보 = 버팀대(영구)</text><line x1="70" y1="140" x2="442" y2="186" class="ld"/><circle cx="442" cy="186" r="2" class="dotf"/><text x="446" y="190" class="r">지수재·철근 간섭 검토</text><line x1="120" y1="148" x2="442" y2="212" class="ld"/><circle cx="442" cy="212" r="2" class="dotf"/><text x="446" y="216" class="r">Metal Lath·PVC Pipe @1000</text></svg>', cap: '[상세] Perimeter Beam 토압 지지 Mechanism — 토압 → Perimeter Beam → Embed Plate → 철골보(버팀대) 축력 전달' }
        ] },
      { h: '특징 (공법 비교)', tbl: [
          { head: ['구분', 'Down-Up', 'Up-Up', 'Top-Down'], rows: [['우선 목표', '공사비 우선', '공사비 절감·공기단축', '공기단축 우선'], ['기초', 'PRD 기초', 'PRD 기초', 'PRD·RCD 기초']] },
          { head: ['구분', 'SPS', '가설 Strut'], rows: [
              ['토압 지지', '영구 철골보(본구조)', '가설 H-Strut'],
              ['해체', '[[불필요]]', '해체 필요(재하·변형 위험)'],
              ['공기', '지하·지상 동시 → 단축', '순차 시공'],
              ['작업공간', '1층 작업장·개구부 이용', '버팀보 간섭']
            ] }
        ] },
      { h: '시공 Process', flow: [
          '지하외벽 측량·Guide Wall',
          'Slurry Wall 흙막이',
          '철골기둥 설치(PRD·RCD)',
          '1층 바닥·보 선시공',
          '굴토·하부 보 Down',
          'Slab 타설·지상 Up-Up'
        ] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] Slurry Wall 차수성·지하수위 변위 관리, 주변 침하계측 실시',
          '[전] 영구 기둥 수직도 확보(Guide Concrete 타설), 천공 후 Koden Test',
          '[중] 토압 지지 및 구조 안전성: 테두리보 보강, 슬래브 개구부 구조검토',
          '[중] Perimeter Beam: Embed Plate 접합, 지수재·철근 간섭 고려, Metal Lath·PVC Pipe @1000',
          '[중] 작업장 동하중 관리, 조명·환기, Smart 계측(단지 내 자동화·단지 외 인접건물)',
          '[후] Joint부 누수 집중 관리, 본구조 품질·마감 고려(용접 관리·균열 검토)',
          '[대책] 선기둥 오차 누적 → 지상 SRC 접합부 볼트 체결 불량·Beam 편심 → 정밀 측량·Koden',
          '[대책] 접합부 누수 → 지수재·Grouting, 웰포인트·집수정 운영',
          '[대책] 개선: BIM 접합부 사전검토, Smart 관제 System 실시간 계측'
        ] },
      { h: '관리기준·허용오차 (기술지침 토공사 p058~060)', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['기둥 수직도', '{{1/300}} 이하 (천공 후 Koden Test 검증)', '기술지침 토공사 p060'],
            ['선기둥 위치오차', '{{5mm}} 이내', '기술지침 토공사 p060'],
            ['Slab Jack Support', 'Reshoring {{2~3개층}} 유지(토압·수압 변화 고려)', '기술지침 토공사 p060'],
            ['작업장 하중', '1층 복공 Slab 설계하중 이내', '합격답안 p040'],
            ['지하 조명', '{{150lux}} 이상 (판독 — 확인 필요)', '기술지침 토공사 p060']
          ] } }
    ] }/*/DET*/
},
20: {
  title: 'Jumbo Special Pile',
  cat: '토공·지반',
  key: ['Double Rod', 'Jetting Nozzle', '초고압 20MPa', 'Cement Milk 분사', '원주형 고결체', '차수·지반개량', 'Slime 배출', '지반 융기'],
  www: {
    what: '[[Double Rod]] 선단 [[Jetting Nozzle]]로 [[Cement Milk]]를 [[초고압(20MPa)]] 수평 분사·회전하여 원주형 고결체를 만드는 고압분사 주입공법(JSP)',
    why: '흙막이 배면 [[차수]]와 연약지반 [[지반개량]]을 위해 균질한 개량체를 형성하기 위함',
    how: '천공(Double Rod) → 선단 Nozzle 초고압 분사 → 회전·인발 상승 → 원주형 고결체 형성 → Core 강도 확인'
  },
  tag: '공법·차수·개량',
  def: '[[Double Rod]] 선단의 [[Jetting Nozzle]]로 압축공기와 [[Cement Milk]]를 초고압({{20MPa}})으로 수평 분사하면서 회전·인발하여 지반을 파쇄·혼합하고 [[원주형 고결체]]를 형성하는 고압분사 주입공법',
  wwh: ['고압분사 고결체', '차수·지반개량', '20MPa 회전 분사'],
  figT: 'JSP의 차수 및 지반개량 원리',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="270" height="190" class="soil"/><rect x="20" y="250" width="270" height="50" class="conc"/>' +
    '<line x1="20" y1="60" x2="290" y2="60" class="ln"/><rect x="110" y="150" width="86" height="100" class="bx3"/><rect x="120" y="20" width="66" height="16" class="bx2"/><line x1="150" y1="36" x2="150" y2="232" class="ln"/>' +
    '<line x1="156" y1="36" x2="156" y2="232" class="ln"/><path d="M140,48 A14,6 0 1,0 166,48" class="ar"/><line x1="156" y1="200" x2="192" y2="200" class="ar"/><line x1="150" y1="200" x2="114" y2="200" class="ar"/>' +
    '<line x1="166" y1="140" x2="166" y2="66" class="ar"/><path d="M140,60 q13,-10 26,0" class="bx2"/><line x1="186" y1="28" x2="296" y2="26" class="ld"/><circle cx="296" cy="26" r="2" class="dotf"/>' +
    '<text x="300" y="30" class="b">고압 분사 장비</text><line x1="166" y1="52" x2="296" y2="52" class="ld"/><circle cx="296" cy="52" r="2" class="dotf"/><text x="300" y="56" class="r">회전·상승</text>' +
    '<line x1="166" y1="100" x2="296" y2="80" class="ld"/><circle cx="296" cy="80" r="2" class="dotf"/><text x="300" y="84" class="r">Slime 배출</text><line x1="156" y1="120" x2="296" y2="106" class="ld"/>' +
    '<circle cx="296" cy="106" r="2" class="dotf"/><text x="300" y="110" class="bl">Double Rod</text><line x1="158" y1="196" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/>' +
    '<text x="300" y="150" class="bl">Jetting Nozzle</text><line x1="188" y1="200" x2="296" y2="176" class="ld"/><circle cx="296" cy="176" r="2" class="dotf"/><text x="300" y="180" class="r">초고압 20MPa</text>' +
    '<line x1="196" y1="232" x2="296" y2="210" class="ld"/><circle cx="296" cy="210" r="2" class="dotf"/><text x="300" y="214" class="bl">원주형 고결체</text><line x1="250" y1="272" x2="296" y2="266" class="ld"/>' +
    '<circle cx="296" cy="266" r="2" class="dotf"/><text x="300" y="270" class="b">경질층(선단 근입)</text><text x="446" y="34" class="k3">③ 차수·지반개량 우수</text><text x="446" y="54" class="k3">③ 협소·경사 시공 가능</text>' +
    '<text x="446" y="74" class="k3">③ 원주형 균질 고결체</text><text x="446" y="100" class="k4">④ Slime 다량·처리비</text><text x="446" y="120" class="k4">④ 지반 융기·인접 변형</text><text x="446" y="140" class="k4">④ 분사압 20MPa 관리</text>' +
    '<text x="446" y="166" class="k5">⑤ 시험시공 개량경 확인</text><text x="446" y="186" class="k5">⑤ 인접 구조물 계측</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">천공(Double Rod)</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">선단 Nozzle 고압 분사</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">회전·인발 상승</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">원주형 고결체 형성</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="345" text-anchor="middle" class="s">Core 강도 확인</text></svg>',
  subs: [
    { h: '특징(장점)', pts: ['[[차수]]·지반개량 우수', '협소·경사 시공 가능', '원주형 균질 고결체'] },
    { h: '시공 시 유의사항(단점)', pts: ['Slime 다량·처리비', '지반 융기·인접 변형', '분사압 {{20MPa}} 관리'] },
    { h: '개선방안', pts: ['시험시공 개량경 확인', '인접 구조물 계측'] }
  ],
  msg: '초고압 분사로 흙을 깎아 섞는다 → 균질 원주 고결체로 차수·지반개량',
  mnemo: 'J·S·P = Jet·Slime·Pressure(20MPa)',
  rel: ['SGR 공법', 'LW 공법', 'SCW', '약액주입공법', '흙막이 차수'],
  src: '근거: KCS 11 30 05(지반개량) / 마법지 2공종(차수공법: 약액주입 LW·SGR·JSP) / 합격답안: 디테일용어300 No.30(p041: 20MPa, Slime 배출, N>30 지반 시험시공, 20±1MPa, 1회전 후 25mm 상승·경질층 0.5~1m 근입 판독) — 개량체 직경 미기재(확인 필요) / 기술지침 2 토공사 p065(CIP 배면 JSP·SGR 차수) / 스터디: (장성영) 용어300 (1).pdf p4(정의·원리도·Process 초고압 분사→1회전 후 25mm 자동 상승→반복·장단점·유의사항 Slime 배출·N값 큰 지반 사전 확인)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '[[Double Rod]] 선단에 [[Jetting Nozzle]]을 장착하여 상부 압축공기와 [[Cement Milk]]를 초고압({{20MPa}})으로 수평 분사하여 지반을 파쇄함과 동시에 공극에 Grouting 주입재를 충전하는 [[고압분사 주입공법]]' },
      { h: '차수 및 지반개량 원리', fig: 'MAIN', p: '초고압 분사 → 지반 파쇄 → Cement Milk와 교반·치환 → 원주형 고결체 형성 → 차수·지반개량' },
      { h: '특징 (장·단점, 차수 Grouting 공법 비교)', tbl: { head: ['구분', 'JSP', 'SGR', 'LW'], rows: [
            ['원리', '초고압 분사 파쇄·혼합', '유도공간 저압 복합주입', '물유리+시멘트 저압주입'],
            ['주입압', '{{20MPa}} 내외', '{{0.3~0.5MPa}}', '저압'],
            ['개량체', '원주형 균질 고결체', '균등 침투 고결', '공극 충전'],
            ['장점', '차수·지반개량 우수, 협소·경사 시공', '지반교란 적음', '재주입 가능'],
            ['단점', 'Slime 처리비·지반 변형', '공사비 고가', '용탈·지하수 오염']
          ] } },
      { h: '시공 Process', flow: ['천공(Double Rod)', '선단 경질층 0.5~1m 근입', '초고압 분사(20±1MPa)', '1회전 후 25mm씩 자동 상승', '원주형 고결체 형성', 'Core 강도 확인'] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 지반 조건(N값·지하수) 확인, 시험시공으로 개량경·분사 조건 결정',
          '[전] 인접 구조물·매설물 현황 조사',
          '[중] Cement Milk 혼합 비율·분사압 {{20±1MPa}}·상승 속도 관리',
          '[중] Cement Milk에 혼합되지 않은 토사 Slime 배출 철저 (배출 불량 → 지반 융기)',
          '[중] 주변 지반 및 인접 구조물 영향 관리(변위 계측)',
          '[후] Core 강도·차수성 확인, Slime 적법 처리',
          '[대책] 지반 융기·인접 변형: Slime 배출 불량 → 배출 경로 확보·분사 중단',
          '[대책] 개량체 불연속(Gap): 위치 오차 → 중첩 배치·위치 관리',
          '[대책] CIP 배면 차수: JSP·SGR로 불투수층(암반)까지 근입 → 지하수 유입 차단(기술지침 p065)',
          '[대책] 개선: 압력·회전·상승 자동기록, Slime 감량·재활용'
        ] },
      { h: '관리기준', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['분사압', '{{20±1MPa}}', '합격답안 p041'],
            ['상승 속도', '1회전 분사 후 {{25mm}}씩 자동 상승 (판독)', '합격답안 p041'],
            ['근입', '경질층 {{0.5~1m}} 근입', '합격답안 p041'],
            ['적용 한계', 'N > 30 지반은 효과 불확실 → 사전 Boring·시험시공', '합격답안 p041'],
            ['개량체 직경·강도', '시험시공·Core로 확인 (수치 확인 필요)', 'KCS 11 30 05']
          ] } }
    ] }/*/DET*/
},
21: {
  title: 'S.G.R(Space Grouting Rocket)',
  cat: '토공·지반',
  key: ['이중관 Rod', '특수 선단장치(Rocket)', '유도공간', '순결성·완결성 약액', '저압 복합주입', '0.3~0.5MPa', '단계 상승 주입', '균등 침투', '지하수 오염'],
  www: {
    what: '이중관 Rod 선단에 [[특수 선단장치(Rocket)]]를 달아 [[유도공간]]을 만들고 [[순결성·완결성]] 약액을 저압 [[복합주입]]하는 약액주입공법',
    why: '유도공간을 통해 약액을 [[균등 침투]]시켜 지반교란 없이 차수·지반보강 효과를 얻기 위함',
    how: '천공(이중관) → 선단장치로 유도공간 형성 → A·B액 복합 저압주입 → {{0.3~0.5m}} 단계 상승 → 반복'
  },
  tag: '공법·차수·주입',
  def: '이중관 Rod에 [[특수 선단장치(Rocket)]]를 결합하여 지중에 [[유도공간]]을 형성하고, 이를 통해 [[순결성]]·[[완결성]] 주입재를 {{0.3~0.5MPa}} [[저압]]으로 복합 주입하여 균일하게 침투시키는 약액주입공법',
  wwh: ['유도공간 저압주입', '균등 침투 차수', '이중관 복합주입'],
  figT: 'S.G.R 유도공간을 통한 복합주입 원리',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="170" height="260" class="soil"/><line x1="20" y1="40" x2="190" y2="40" class="ln"/>' +
    '<rect x="90" y="30" width="40" height="190" class="bx"/><line x1="104" y1="30" x2="104" y2="220" class="ln2"/><line x1="116" y1="30" x2="116" y2="220" class="ln2"/><path d="M90,220 L130,220 L110,250 Z" class="bx2"/>' +
    '<rect x="66" y="200" width="88" height="62" class="ln2 dash"/><line x1="110" y1="232" x2="60" y2="232" class="ar"/><line x1="110" y1="232" x2="160" y2="232" class="ar"/>' +
    '<line x1="110" y1="252" x2="110" y2="280" class="ar"/><line x1="80" y1="292" x2="80" y2="252" class="ar"/><circle cx="235" cy="120" r="40" class="ln2"/><circle cx="235" cy="120" r="12" class="bx2"/>' +
    '<line x1="249" y1="120" x2="269" y2="120" class="ar"/><line x1="242" y1="132.1" x2="252" y2="149.4" class="ar"/><line x1="228" y1="132.1" x2="218" y2="149.4" class="ar"/>' +
    '<line x1="221" y1="120" x2="201" y2="120" class="ar"/><line x1="228" y1="107.9" x2="218" y2="90.6" class="ar"/><line x1="242" y1="107.9" x2="252" y2="90.6" class="ar"/>' +
    '<text x="235" y="178" text-anchor="middle" class="s">평면: 균등 침투</text><line x1="130" y1="60" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/><text x="300" y="40" class="bl">외관·내관(이중관)</text>' +
    '<line x1="110" y1="70" x2="296" y2="62" class="ld"/><circle cx="296" cy="62" r="2" class="dotf"/><text x="300" y="66" class="b">A액(순결)·B액(완결)</text><line x1="90" y1="120" x2="296" y2="100" class="ld"/>' +
    '<circle cx="296" cy="100" r="2" class="dotf"/><text x="300" y="104" class="b">천공 Ø40.2mm</text><line x1="268" y1="120" x2="296" y2="136" class="ld"/><circle cx="296" cy="136" r="2" class="dotf"/>' +
    '<text x="300" y="140" class="r">방사형 균등 침투</text><line x1="150" y1="214" x2="296" y2="192" class="ld"/><circle cx="296" cy="192" r="2" class="dotf"/><text x="300" y="196" class="r">유도공간(Space)</text>' +
    '<line x1="125" y1="236" x2="296" y2="218" class="ld"/><circle cx="296" cy="218" r="2" class="dotf"/><text x="300" y="222" class="bl">특수 선단장치(Rocket)</text><line x1="160" y1="232" x2="296" y2="246" class="ld"/>' +
    '<circle cx="296" cy="246" r="2" class="dotf"/><text x="300" y="250" class="r">저압 0.3~0.5MPa</text><line x1="80" y1="270" x2="296" y2="276" class="ld"/><circle cx="296" cy="276" r="2" class="dotf"/>' +
    '<text x="300" y="280" class="b">0.3~0.5m씩 단계 상승</text><text x="446" y="34" class="k3">③ 유도공간 균등 침투</text><text x="446" y="54" class="k3">③ 저압 → 지반교란 적음</text><text x="446" y="74" class="k3">③ 순결·완결 복합주입</text>' +
    '<text x="446" y="100" class="k4">④ 주입압 0.3~0.5MPa</text><text x="446" y="120" class="k4">④ 주입량·Gel Time 관리</text><text x="446" y="140" class="k4">④ 약액 용탈·지하수 오염</text><text x="446" y="166" class="k5">⑤ 주입 이력 자동기록</text>' +
    '<text x="446" y="186" class="k5">⑤ 인접 구조물 융기 계측</text><rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">천공(이중관 Rod)</text>' +
    '<line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">선단장치 유도공간 형성</text>' +
    '<line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">A·B액 복합 저압주입</text>' +
    '<line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">0.3~0.5m 단계 상승</text>' +
    '<line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">반복 주입·확인</text></svg>',
  subs: [
    { h: 'SGR 공법의 특징', pts: ['유도공간 [[균등 침투]]', '저압 → 지반교란 적음', '순결·완결 복합주입'] },
    { h: '시공 시 유의사항', pts: ['주입압 {{0.3~0.5MPa}}', '주입량·Gel Time 관리', '약액 용탈·지하수 오염'] },
    { h: '개선방안', pts: ['주입 이력 자동기록', '인접 구조물 융기 계측'] }
  ],
  msg: '유도공간(Space)으로 저압 균등 침투 → 교란 적은 차수·지반보강',
  mnemo: 'S(Space)·G(Grouting)·R(Rocket) = 공간·주입·선단',
  rel: ['LW 공법', 'JSP', '약액주입공법', 'Gel Time', '흙막이 차수'],
  src: '근거: KCS 11 30 05(지반개량) / 마법지 2공종(차수공법: 약액주입 LW·SGR·JSP) / 합격답안: 디테일용어300 No.31(p042: Ø40.2mm, 0.3~0.5MPa, 18~20L/min, 0.3~0.5m 상승, 순결:완결 5:5~3:7) / 기술지침 2 토공사 p065(CIP 배면 차수 Grouting)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '이중관 Rod에 [[특수 선단장치(Rocket)]]를 부착하여 [[유도공간]]을 통해 [[순결성]]·[[완결성]] 주입재를 {{0.3~0.5MPa}} [[저압]]으로 복합주입하는 공법으로, 주입노즐에서 직접 지반으로 방출하는 방식과 달리 유도공간을 통해 방출하여 균일한 침투가 가능' },
      { h: '유도공간을 통한 복합주입 원리', fig: 'MAIN', ul: ['순결성(Gel Time 짧음): 1차 공극 충전·유출 방지 / 완결성: 2차 미세공극 침투'] },
      { h: '특징 (장점·단점)', tbl: { head: ['장점', '단점'], rows: [['유도공간 → 균일한 침투', '저압·저속 주입 → 시간 소요'], ['주입압력↓ → 지반교란↓', '비교적 복잡한 시공'], ['Gel Time 조절 용이', '공사비 고가']] } },
      { h: '시공 Process', flow: ['천공(Ø40.2mm 이중관)', '특수 선단장치 유도공간 형성', '내관·외관 A·B액 주입', '저압 복합주입', '0.3~0.5m씩 상승', '반복 주입·확인'] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 지반·지하수 흐름 조사, 시험주입으로 주입 범위·배합 결정',
          '[전] 주변 우물·지하수 이용 현황 조사(오염 방지)',
          '[중] Ø40.2mm 천공·유도공간 형성 후 1단계씩 상승 주입',
          '[중] 주입압·주입량·Gel Time 관리, 인접 구조물·지반 융기 계측',
          '[후] 현장투수시험·Core로 차수 효과 확인, 약액 용탈·수질 모니터링',
          '[대책] 주입 누락·불균질 → 주입공 간격 중첩 배치',
          '[대책] 약액 용탈·지하수 오염 → 무공해 약액, 수질 감시',
          '[대책] CIP 배면 차수 Grouting: 불투수층(암반)까지 근입하여 지하수 유입 차단(기술지침 p065)',
          '[대책] 개선: 주입 이력 자동기록(압력·유량)'
        ] },
      { h: '관리기준', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['천공 직경', '{{Ø40.2mm}}', '합격답안 p042'],
            ['주입 방식', '2.0 Shot 방식', '합격답안 p042'],
            ['주입압', '{{0.3~0.5MPa}}', '합격답안 p042'],
            ['주입량', '{{18~20L/min}}', '합격답안 p042'],
            ['상승 간격', '{{0.3~0.5m}}씩 단계 상승', '합격답안 p042'],
            ['순결:완결 비율', '{{5:5~3:7}}', '합격답안 p042']
          ] } }
    ] }/*/DET*/
},
22: {
  title: 'L.W공법(Labiles Wasserglass)',
  cat: '토공·지반',
  key: ['규산소다(물유리)', '시멘트 현탁액', '저압 주입', 'Manchette Tube', 'Seal재(Sleeve Grout)', 'Double Packer', '재주입 가능', '용탈·지하수 오염', '28일 일축압축강도'],
  www: {
    what: '[[규산소다(물유리)]] 수용액과 [[시멘트 현탁액]]을 혼합하여 [[Manchette Tube]]·[[Double Packer]]로 지반에 [[저압 주입]]하는 약액주입공법',
    why: '지반 공극을 시멘트 입자로 충전하여 밀도를 높이고 지반강화·[[차수]] 효과를 얻기 위함',
    how: '천공·Casing 설치 → Manchette Tube 삽입 → Seal재 주입·Casing 인발 → Seal재 양생(24h) → Double Packer LW 주입'
  },
  tag: '공법·차수·주입',
  def: '[[규산소다(물유리)]] 수용액과 [[시멘트 현탁액]]을 혼합한 주입재를 [[Manchette Tube]]와 [[Double Packer]]를 이용하여 지반에 [[저압]]으로 주입함으로써 공극을 충전하여 지반강화 및 차수성을 향상시키는 공법',
  wwh: ['물유리+시멘트 주입', '지반강화·차수', 'Double Packer 저압'],
  figT: 'LW 약액주입 원리 및 Process',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="50" width="270" height="250" class="soil"/><line x1="20" y1="50" x2="290" y2="50" class="ln"/>' +
    '<ellipse cx="150" cy="200" rx="80" ry="36" class="ln2 dash"/><rect x="130" y="50" width="40" height="240" class="bx"/><rect x="142" y="40" width="16" height="250" class="bx2"/>' +
    '<rect x="139" y="97" width="22" height="6" class="conc"/><rect x="139" y="147" width="22" height="6" class="conc"/><rect x="139" y="197" width="22" height="6" class="conc"/>' +
    '<rect x="139" y="247" width="22" height="6" class="conc"/><rect x="144" y="182" width="12" height="8" class="rf"/><rect x="144" y="210" width="12" height="8" class="rf"/>' +
    '<line x1="160" y1="205" x2="208" y2="184" class="ar"/><line x1="160" y1="205" x2="214" y2="220" class="ar"/><line x1="140" y1="205" x2="92" y2="184" class="ar"/><line x1="140" y1="205" x2="86" y2="220" class="ar"/>' +
    '<line x1="115" y1="282" x2="115" y2="244" class="ar"/><line x1="158" y1="44" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/><text x="300" y="40" class="bl">Manchette Tube</text>' +
    '<line x1="170" y1="80" x2="296" y2="70" class="ld"/><circle cx="296" cy="70" r="2" class="dotf"/><text x="300" y="74" class="b">Seal재(Sleeve Grout)</text><line x1="161" y1="100" x2="296" y2="108" class="ld"/>' +
    '<circle cx="296" cy="108" r="2" class="dotf"/><text x="300" y="112" class="b">고무 Sleeve(밸브)</text><line x1="156" y1="190" x2="296" y2="156" class="ld"/><circle cx="296" cy="156" r="2" class="dotf"/>' +
    '<text x="300" y="160" class="bl">Double Packer</text><line x1="212" y1="186" x2="296" y2="192" class="ld"/><circle cx="296" cy="192" r="2" class="dotf"/><text x="300" y="196" class="r">LW: 물유리+시멘트</text>' +
    '<line x1="230" y1="204" x2="296" y2="228" class="ld"/><circle cx="296" cy="228" r="2" class="dotf"/><text x="300" y="232" class="r">저압 침투·공극 충전</text><line x1="115" y1="262" x2="296" y2="264" class="ld"/>' +
    '<circle cx="296" cy="264" r="2" class="dotf"/><text x="300" y="268" class="b">단계 주입(상향)</text><line x1="170" y1="290" x2="296" y2="296" class="ld"/><circle cx="296" cy="296" r="2" class="dotf"/>' +
    '<text x="300" y="300" class="b">천공 후 Casing 인발</text><text x="446" y="34" class="k3">③ 물유리+시멘트 현탁액</text><text x="446" y="54" class="k3">③ Manchette 재주입 가능</text><text x="446" y="74" class="k3">③ 재료 취급·시공 간편</text>' +
    '<text x="446" y="100" class="k4">④ Seal재 24시간 양생</text><text x="446" y="120" class="k4">④ 용탈·지하수 오염</text><text x="446" y="140" class="k4">④ 단계별 압력·주입량</text><text x="446" y="166" class="k5">⑤ 28일 일축압축강도</text>' +
    '<text x="446" y="186" class="k5">⑤ 현장투수시험 차수 확인</text><rect x="446" y="216" width="186" height="18" class="bx"/><text x="539" y="229" text-anchor="middle" class="s">천공·Casing 설치</text>' +
    '<line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/><text x="539" y="258" text-anchor="middle" class="s">Manchette Tube 삽입</text>' +
    '<line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/><text x="539" y="287" text-anchor="middle" class="s">Seal재 주입·Casing 인발</text>' +
    '<line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/><text x="539" y="316" text-anchor="middle" class="s">Seal재 양생(24h)</text>' +
    '<line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/><text x="539" y="345" text-anchor="middle" class="s">Double Packer LW 주입</text></svg>',
  subs: [
    { h: 'LW 공법의 특징', pts: ['물유리+시멘트 현탁액', 'Manchette 재주입 가능', '재료 취급·시공 간편'] },
    { h: '시공 시 유의사항(단점)', pts: ['Seal재 {{24시간}} 양생', '용탈·지하수 오염', '단계별 압력·주입량'] },
    { h: '개선방안(품질확인)', pts: ['{{28일}} 일축압축강도', '현장투수시험 차수 확인'] }
  ],
  msg: '물유리+시멘트를 Packer로 저압 주입 → 공극 충전·지반강화(용탈 주의)',
  mnemo: 'L.W = 물유리(Wasserglass) + 시멘트 / 천·맨·실·양·패',
  rel: ['SGR 공법', 'JSP', '약액주입공법', 'Gel Time', '지하수 오염'],
  src: '근거: KCS 11 30 05(지반개량) / 마법지 2공종(차수공법: 약액주입 LW·SGR·JSP) / 합격답안: 디테일용어300 No.32(p043: Seal재 24시간, 28일 일축압축강도, Double Packer) / 기술지침 2 토공사 p065(침투주입·할렬주입)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '[[규산소다(물유리)]] 수용액과 [[시멘트 현탁액]]을 혼합한 후 지상의 Y자관을 통하여 지반에 [[저압]] 주입하는 공법으로, 지반 공극을 시멘트 입자로 충전시켜 밀도를 높여 지반강화 및 [[차수성]]을 향상' },
      { h: '약액주입 원리 (침투·할렬주입)', fig: 'MAIN', ul: ['침투주입(사질토): 지반 교란 없이 공극으로 침투', '할렬주입(점성토): 지반 내 균열을 따라 맥상 주입 (기술지침 p065)'] },
      { h: '특징 (장점·단점)', tbl: { head: ['장점', '단점'], rows: [
            ['무독성 안정제 → 취급 용이', 'Seal재 {{24시간}} 양생 필요'],
            ['고결강도 양호', '지하수 오염(용탈) 가능성'],
            ['주입관 보존 → 재주입 가능', '차수·지반보강 효과 상대적으로 낮음']
          ] } },
      { h: '시공 Process', flow: [
          '천공·Casing 삽입',
          'Manchette Tube 삽입',
          'Seal재 주입·Casing 인발',
          'Seal재 양생(24h)',
          'Double Packer 삽입',
          'LW 단계 주입',
          '28일 강도·투수 확인'
        ] },
      { h: '시공 시 유의사항 (시공 전·중·후)', ul: [
          '[전] 지반 조건·지하수 이용 현황 조사, 배합·주입 범위 결정',
          '[중] Seal재 {{24시간}} 양생 후 주입, 주입관 상·하 Packer 밀착',
          '[중] 단계별 압력·주입량 제한 준수 (과압 → 지반 할렬·융기)',
          '[후] {{28일}} 양생 후 일축압축강도 검사',
          '[후] 지반 고결화에 따른 차수·주입효과 확인 → 필요 시 Manchette 재주입',
          '[대책] 용탈에 의한 강도 저하·지하수 오염 → 내구성 약액·수질 모니터링',
          '[대책] 차수 불량 → 보완 재주입',
          '[대책] 개선: 영구 차수 필요 시 SGR·JSP 병용, 주입 자동기록'
        ] },
      { h: '관리기준', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['Seal재 양생', '{{24시간}}', '합격답안 p043'],
            ['주입 방법', 'Double Packer 단계별 주입, 주입관 상·하 Packer 부착', '합격답안 p043'],
            ['압력·주입량', '단계별 압력·주입량 제한 준수', '합격답안 p043'],
            ['품질 확인', '{{28일}} 양생 후 일축압축강도', '합격답안 p043']
          ] } }
    ] }/*/DET*/
},
23: {
  title: '토압이론(Earth Pressure)',
  cat: '토공·지반',
  key: ['정지토압 K0=1-sinφ', '주동토압 Ka', '수동토압 Kp', 'Rankine 토압', '벽체 변위', 'Pp > Po > Pa', '삼각형 분포', '흙막이 지보공 설계'],
  www: {
    what: '흙과 구조물이 접할 때 흙이 접촉면에 작용시키는 [[수평방향 압력]]으로, 벽체 변위에 따라 [[정지·주동·수동토압]]으로 구분',
    why: '흙막이 벽·지보공·옹벽의 응력과 변형을 산정하여 [[붕괴]]와 과대 변위를 방지하기 위함',
    how: '지반조사(γ·c·φ) → 토압 산정(Rankine·Coulomb) → 벽체·지보공 응력 → 부재 단면·변형 검토 → 계측 관리'
  },
  tag: '기준·원리·분류',
  def: '흙과 구조물이 접할 때 흙에 의해 접촉면에 작용하는 [[수평방향 압력]]으로, 흙의 구조·입도·내부마찰각·상재하중·[[벽체 변위]]에 따라 [[정지토압]]·[[주동토압]]·[[수동토압]]으로 변화',
  wwh: ['흙의 수평압력', '벽체 붕괴 방지', '변위별 Ka·K0·Kp'],
  figT: '흙막이 벽에 작용하는 토압 및 변위-토압 관계',
  svg: '<svg viewBox="0 0 640 336" xmlns="http://www.w3.org/2000/svg"><rect x="158" y="30" width="132" height="140" class="soil"/><rect x="20" y="120" width="130" height="50" class="soil"/>' +
    '<line x1="158" y1="30" x2="290" y2="30" class="ln"/><line x1="20" y1="120" x2="150" y2="120" class="ln"/><polygon points="158,30 158,170 230,170" class="bx2"/><polygon points="150,120 150,170 80,170" class="bx3"/>' +
    '<rect x="150" y="26" width="8" height="150" class="conc"/><rect x="40" y="56" width="110" height="6" class="bx"/><line x1="150" y1="290" x2="30" y2="290" class="ln"/><line x1="150" y1="290" x2="290" y2="290" class="ln"/>' +
    '<line x1="150" y1="290" x2="150" y2="196" class="ar"/><path d="M30,282 L100,280 L130,270 L150,252 L175,225 L205,210 L290,206" class="ln"/><text x="34" y="306" class="s">← 주동변위</text>' +
    '<text x="286" y="306" text-anchor="end" class="s">수동변위 →</text><text x="156" y="206" class="s">토압</text><line x1="110" y1="59" x2="296" y2="36" class="ld"/><circle cx="296" cy="36" r="2" class="dotf"/>' +
    '<text x="300" y="40" class="bl">버팀대(Strut)</text><line x1="200" y1="140" x2="296" y2="66" class="ld"/><circle cx="296" cy="66" r="2" class="dotf"/><text x="300" y="70" class="r">주동토압 Pa(배면)</text>' +
    '<line x1="225" y1="166" x2="296" y2="92" class="ld"/><circle cx="296" cy="92" r="2" class="dotf"/><text x="300" y="96" class="r">Ka=tan²(45-φ/2)</text><line x1="110" y1="150" x2="296" y2="120" class="ld"/>' +
    '<circle cx="296" cy="120" r="2" class="dotf"/><text x="300" y="124" class="bl">수동토압 Pp(근입)</text><line x1="60" y1="120" x2="296" y2="146" class="ld"/><circle cx="296" cy="146" r="2" class="dotf"/>' +
    '<text x="300" y="150" class="b">굴착저면</text><line x1="270" y1="206" x2="296" y2="202" class="ld"/><circle cx="296" cy="202" r="2" class="dotf"/><text x="300" y="206" class="bl">Pp(수동) 최대</text>' +
    '<line x1="150" y1="252" x2="296" y2="232" class="ld"/><circle cx="296" cy="232" r="2" class="dotf"/><text x="300" y="236" class="b">Po(정지) K0=1-sinφ</text><line x1="60" y1="281" x2="296" y2="276" class="ld"/>' +
    '<circle cx="296" cy="276" r="2" class="dotf"/><text x="300" y="280" class="r">Pa(주동) 최소</text><text x="446" y="34" class="k3">③ 정지 K0=1-sinφ</text><text x="446" y="54" class="k3">③ 주동 Ka=tan²(45-φ/2)</text>' +
    '<text x="446" y="74" class="k3">③ 대소 Pp > Po > Pa</text><text x="446" y="100" class="k4">④ 배면 상재하중·수압</text><text x="446" y="120" class="k4">④ 벽체 변위 허용 관리</text><text x="446" y="140" class="k4">④ 뒤채움·배수 불량</text>' +
    '<text x="446" y="166" class="k5">⑤ 토압계·경사계 계측</text><text x="446" y="186" class="k5">⑤ 배수공·지하수위 저하</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">토압 산정(γ·c·φ)</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">벽체·지보공 응력</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">부재 단면·변형 검토</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">계측 관리·Feedback</text></svg>',
  subs: [
    { h: '토압의 종류', pts: ['정지 K0=1-sinφ', '주동 Ka=tan²(45-φ/2)', '대소 Pp > Po > Pa'] },
    { h: '영향요인·유의사항', pts: ['배면 상재하중·수압', '벽체 변위 허용 관리', '뒤채움·배수 불량'] },
    { h: '대책(관리)', pts: ['토압계·경사계 계측', '배수공·지하수위 저하'] }
  ],
  msg: '벽이 밀려나면 주동(최소), 밀어붙이면 수동(최대) → Pp > Po > Pa',
  mnemo: '수 > 정 > 주 (수정주) / K0 = 1-sinφ',
  rel: ['흙의 전단강도', 'Heaving·Boiling', '흙막이 계측', '근입장', '옹벽'],
  src: '근거: Rankine·Coulomb 토압론, Jaky 식 K0=1-sinφ / KDS 21 30 00(가설흙막이 설계) / 마법지 2공종(토압: 주동·수동·정지) / 합격답안: 디테일용어300 No.33(p044) / 기술지침 2 토공사 p057(흙막이 변위 관리기준)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '흙과 구조물이 접촉하고 있을 때 흙에 의해 접촉면에 작용하는 [[수평방향 압력]]으로, 흙의 구조·입도·내부마찰각·상재하중·전단강도 및 [[벽체 변위]]에 따라 크게 변하며 흙파기 깊이가 깊을수록 증가' },
      { h: '토압 분포 및 산정기준', fig: 'MAIN', tbl: { head: ['항목', '기준', '근거'], rows: [
            ['대소 관계', '수동 > 정지 > 주동 (Pp > Po > Pa)', '합격답안 p044'],
            ['Rankine 토압', 'P = ½·K·γ·H² (삼각형 분포)', 'Rankine 토압론'],
            ['흙막이벽 변형', 'H/200 이면서 설계 허용값 이하', '기술지침 토공사 p057'],
            ['주변지반 침하경사', '{{1/200~1/500}}', '기술지침 토공사 p057']
          ] } },
      { h: '토압의 분류 (벽체 변위에 따른 종류)', tbl: { head: ['구분', '정지토압 Po', '주동토압 Pa', '수동토압 Pp'], rows: [
            ['벽체 변위', '변위 없음', '벽이 흙에서 멀어짐', '벽이 흙 쪽으로 밀림'],
            ['토압계수', 'K0 = 1−sinφ', 'Ka = tan²(45°−φ/2)', 'Kp = tan²(45°+φ/2)'],
            ['크기', '중간', '최소', '최대'],
            ['적용', '지하외벽·지하구조물', '흙막이 배면', '근입부 저항']
          ] } },
      { h: '영향요인 및 산정 Process', p: '영향요인: 흙의 구조·입도·내부마찰각(φ)·점착력(c)·단위중량(γ), 상재하중, 지하수(수압), 벽체 변위·강성, 굴착 깊이', flow: ['지반조사(γ·c·φ·지하수)', '흙막이벽 작용 하중·토압 산정', '흙막이벽·지보공 응력 산정', '부재 응력·변형량 산정', '계측·Feedback'] },
      { h: '산정·시공 시 유의사항 및 대책', ul: [
          '[전] 지반조사로 γ·c·φ·지하수위 확보, 상재하중(장비·인접건물) 반영',
          '[중] 굴착 단계별 지보공 적기 설치 → 과대 변위(주동 상태 진전) 억제',
          '[중] 배면 배수·지하수위 관리(수압 증가 방지), 배면 과재하 금지',
          '[후] 토압계·경사계·지하수위계 계측 → 설계 토압과 비교·Feedback',
          '[대책] 토압 증가 원인(상재하중·수위 상승·동결) → 하중 제한·배수공',
          '[대책] 변위 억제: Prestress 도입(IPS·Earth Anchor), 강성 큰 벽체',
          '[대책] 근입장 확보로 수동토압 저항 → Heaving·Boiling 검토'
        ] }
    ] }/*/DET*/
},
24: {
  title: 'GPR (Ground Penetrating Radar)',
  cat: '토공·지반',
  key: ['전자기파 송·수신', '유전율 차 반사', '비파괴 탐사', '지하 공동(동공)', '매설물 탐사', '쌍곡선 반사파형', '안테나 주파수', '점토·지하수 감쇠', '3D 차량형 GPR'],
  www: {
    what: '지표에서 [[전자기파]]를 송신하여 지하 층·물체에서 [[반사]]된 신호를 수신·영상화하는 [[비파괴 지하탐사]] 기법',
    why: '도심지 굴착·도로의 [[지반침하]](동공)를 예방하고 매설물 위치를 정확히 파악하여 사고·파손을 방지하기 위함',
    how: '전자기파 송신 → 유전율 경계면 반사 → 수신·신호처리 → 영상화(쌍곡선)·공동 판정 → 천공·내시경 정밀조사'
  },
  tag: '검사·장비·기술',
  def: '지표면에서 [[전자기파]]를 송신해 지하의 층·물체 경계([[유전율 차]])에서 반사된 신호를 수신·데이터화하여 지하 단면 형상과 깊이를 영상화하는 [[비파괴 탐사]] 기법',
  wwh: ['전자기파 지하탐사', '지반침하 예방', '송신·반사·수신'],
  figT: 'GPR 탐사 시스템의 원리',
  svg: '<svg viewBox="0 0 640 365" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="100" width="270" height="170" class="soil"/><rect x="20" y="270" width="270" height="30" class="conc"/>' +
    '<rect x="20" y="90" width="270" height="10" class="conc"/><ellipse cx="150" cy="190" rx="28" ry="16" class="bx"/><circle cx="240" cy="150" r="9" class="bx2"/><rect x="120" y="66" width="60" height="18" class="bx2"/>' +
    '<circle cx="132" cy="88" r="5" class="ln"/><circle cx="168" cy="88" r="5" class="ln"/><line x1="120" y1="70" x2="96" y2="46" class="ln"/><line x1="142" y1="92" x2="148" y2="170" class="ar"/>' +
    '<line x1="154" y1="172" x2="160" y2="96" class="ar"/><rect x="200" y="18" width="86" height="40" class="ln2"/><path d="M206,54 Q243,6 280,54" class="rd"/><line x1="262" y1="36" x2="296" y2="30" class="ld"/>' +
    '<circle cx="296" cy="30" r="2" class="dotf"/><text x="300" y="34" class="r">쌍곡선 반사파형</text><line x1="176" y1="72" x2="296" y2="58" class="ld"/><circle cx="296" cy="58" r="2" class="dotf"/>' +
    '<text x="300" y="62" class="bl">안테나 송·수신</text><line x1="272" y1="95" x2="296" y2="88" class="ld"/><circle cx="296" cy="88" r="2" class="dotf"/><text x="300" y="92" class="b">포장층</text>' +
    '<line x1="144" y1="116" x2="296" y2="118" class="ld"/><circle cx="296" cy="118" r="2" class="dotf"/><text x="300" y="122" class="b">전자기파 송신</text><line x1="249" y1="150" x2="296" y2="146" class="ld"/>' +
    '<circle cx="296" cy="146" r="2" class="dotf"/><text x="300" y="150" class="b">매설관</text><line x1="158" y1="136" x2="296" y2="172" class="ld"/><circle cx="296" cy="172" r="2" class="dotf"/>' +
    '<text x="300" y="176" class="r">유전율 차 반사</text><line x1="178" y1="194" x2="296" y2="200" class="ld"/><circle cx="296" cy="200" r="2" class="dotf"/><text x="300" y="204" class="r">공동(동공)</text>' +
    '<line x1="80" y1="240" x2="296" y2="232" class="ld"/><circle cx="296" cy="232" r="2" class="dotf"/><text x="300" y="236" class="r">점토·지하수 감쇠</text><line x1="250" y1="286" x2="296" y2="282" class="ld"/>' +
    '<circle cx="296" cy="282" r="2" class="dotf"/><text x="300" y="286" class="b">기반암</text><text x="446" y="34" class="k3">③ 비파괴·연속 탐사</text><text x="446" y="54" class="k3">③ 유전율 차 반사</text>' +
    '<text x="446" y="74" class="k3">③ 고주파 = 고해상·얕음</text><text x="446" y="100" class="k4">④ 점토·지하수 감쇠</text><text x="446" y="120" class="k4">④ 전파 간섭(무전기·Wi-Fi)</text><text x="446" y="140" class="k4">④ 안테나 주파수 선정</text>' +
    '<text x="446" y="166" class="k5">⑤ 3D 차량형 GPR</text><text x="446" y="186" class="k5">⑤ BIM·지하안전지도 연계</text><rect x="446" y="216" width="186" height="18" class="bx"/>' +
    '<text x="539" y="229" text-anchor="middle" class="s">전자기파 송신</text><line x1="539" y1="234" x2="539" y2="244" class="ar"/><rect x="446" y="245" width="186" height="18" class="bx"/>' +
    '<text x="539" y="258" text-anchor="middle" class="s">지하 경계면 반사</text><line x1="539" y1="263" x2="539" y2="273" class="ar"/><rect x="446" y="274" width="186" height="18" class="bx"/>' +
    '<text x="539" y="287" text-anchor="middle" class="s">수신·신호처리</text><line x1="539" y1="292" x2="539" y2="302" class="ar"/><rect x="446" y="303" width="186" height="18" class="bx"/>' +
    '<text x="539" y="316" text-anchor="middle" class="s">영상화·공동 판정</text><line x1="539" y1="321" x2="539" y2="331" class="ar"/><rect x="446" y="332" width="186" height="18" class="bx3"/>' +
    '<text x="539" y="345" text-anchor="middle" class="s">천공·내시경 정밀조사</text></svg>',
  subs: [
    { h: 'GPR의 원리·특징', pts: ['비파괴·연속 탐사', '[[유전율 차]] 반사', '고주파 = 고해상·얕음'] },
    { h: '탐사 시 유의사항', pts: ['점토·지하수 [[감쇠]]', '전파 간섭(무전기·Wi-Fi)', '안테나 주파수 선정'] },
    { h: '스마트건설 적용방안', pts: ['3D 차량형 GPR', 'BIM·지하안전지도 연계'] }
  ],
  msg: '송신→반사→수신, 쌍곡선으로 공동을 찾아 지반침하를 예방',
  mnemo: 'G·P·R = 땅(Ground)·뚫고(Penetrating)·전파(Radar)',
  rel: ['지하안전평가', '지반침하(Sink Hole)', '매설물 탐사', '비파괴검사', '스마트 건설'],
  src: '근거: 지하안전관리에 관한 특별법(공동조사) / 마법지 2공종(지반조사) / 합격답안: 디테일용어300 No.34(p045) / 기술지침 2 토공사 p026(지하 물리탐사: 매설물 종류·위치 파악) / 스터디: (박동수) 용어300_2주차.pdf p1(정의 ①②·탐사 시스템 원리도·스마트 건설 적용방안 3D 차량형/지하공간 BIM/로봇·드론·유의사항 3개)',
  det: /*DET*/{ secs: [
      { h: '정의', def: '지표면에서 [[전자기파]]를 송신해 지하의 층·물체에 반사된 신호를 수신하여 데이터로 변환해 지하의 단면 형상과 깊이를 영상화하는 [[비파괴 탐사]] 기법으로, 도심지 굴착 공사 시 [[지반침하]] 예방 및 지장물 위치를 정확히 파악하기 위해 적용' },
      { h: 'GPR 탐사 시스템 원리', fig: 'MAIN', tbl: { head: ['구분', '내용'], rows: [
            ['원리', '[[유전율 차]]가 있는 경계면(공동·매설관·층)에서 반사 → 왕복시간으로 깊이 산정'],
            ['안테나', '고주파: 고해상·얕은 심도 / 저주파: 깊은 심도·저해상'],
            ['장점', '비파괴·연속·신속 탐사, 3D 영상화'],
            ['한계', '점토·지하수(전도성)에서 [[감쇠]] → 탐사심도 감소']
          ] } },
      { h: '탐사 대상·조건 및 Process', flow: ['전자기파 송신(Tx)', '지하구조물·경계면 반사', '전자기파 수신(Rx)', '신호처리·영상화', '쌍곡선 판독·공동 판정', '천공·내시경 정밀조사'], tbl: { head: ['항목', '기준', '근거'], rows: [
            ['공동 조사', '지반침하 위험 구간 공동조사', '지하안전관리에 관한 특별법'],
            ['지반 조건', '점토층이 두껍거나 지하수 포화 시 적용 제한', '합격답안 p045'],
            ['전파 간섭', '무전기·Wi-Fi 등 불필요한 통신기기 사용 자제', '합격답안 p045'],
            ['안테나', '측정 목적·심도에 맞는 주파수 선정', '합격답안 p045'],
            ['매설물 파악', '상·하수도관·가스관·통신케이블 종류·위치', '기술지침 토공사 p026']
          ] } },
      { h: '스마트 건설 적용방안', ul: [
          '3D 차량형 GPR: 차량에 탑재하여 GPR 탐사 후 지하 조사',
          '지하공간 BIM: GPR 탐사결과 + BIM → MG(Machine Guidance) 연계',
          '로봇·드론 기반 무인 탐사: 접근 불가 지역 무인 안전점검',
          'AI 영상 판독으로 공동 자동 탐지'
        ] },
      { h: '탐사 시 유의사항 (탐사 전·중·후)', ul: [
          '[전] 탐사 목적(공동·매설물)·심도에 맞는 안테나 주파수 선정, 기존 매설물도 확인',
          '[전] 점토·지하수 조건 검토 → 전기비저항 등 타 탐사 병행 판단',
          '[중] 일정 속도·측선 간격 유지, 통신기기 간섭 차단',
          '[후] 이상 신호(쌍곡선) 구간 천공·내시경 확인, 결과를 지하안전정보·BIM에 등록'
        ] }
    ] }/*/DET*/
}
});
