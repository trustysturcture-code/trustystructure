// 디테일원 도해 답안 (Detail One 용어 양식) — 형식은 data/SCHEMA_D1.md
window.D1 = Object.assign(window.D1 || {}, {
109: {
  tag: '측량·기준·관리',
  def: '착공 전 지적공부의 [[대지경계선]]을 현장에 복원하는 [[경계복원측량]]과, 건물 위치·높이의 기준으로 [[부동점]]에 {{2개소 이상}} 설치하는 [[B.M(기준점)]]',
  wwh: ['경계 복원·기준점', '침범·레벨오차 방지', '부동점 2개소↑ 검측'],
  figT: '경계측량·B.M 배치 원리 및 설치기준',
  svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="22" width="410" height="290" fill="none" class="ln2 dash"/><text x="28" y="304" class="s">인접대지</text>' +
    '<polyline points="60,60 390,60 390,270 60,270 60,60" class="rd"/>' +
    '<rect x="100" y="95" width="250" height="140" fill="none" class="ln2 dash"/><text x="106" y="109" class="s">굴착 영향권</text>' +
    '<rect x="135" y="122" width="180" height="92" class="bx"/><text x="225" y="166" text-anchor="middle" class="b">신축 건물</text><text x="225" y="184" text-anchor="middle" class="s">규준틀·먹매김 기준</text>' +
    '<circle cx="60" cy="60" r="5" class="rf"/><circle cx="390" cy="60" r="5" class="rf"/><circle cx="390" cy="270" r="5" class="rf"/><circle cx="60" cy="270" r="5" class="rf"/>' +
    '<path d="M72,258 l12,0 l-6,-12 z" class="bx2"/><path d="M366,86 l12,0 l-6,-12 z" class="bx2"/>' +
    '<line x1="60" y1="60" x2="95" y2="42" class="ld"/><circle cx="95" cy="42" r="2" class="dotf"/><text x="99" y="46" class="r">경계말뚝(지적측량)</text>' +
    '<line x1="372" y1="74" x2="348" y2="46" class="ld"/><circle cx="348" cy="46" r="2" class="dotf"/><text x="343" y="44" text-anchor="end" class="bl">B.M② 부동점</text>' +
    '<line x1="84" y1="252" x2="112" y2="256" class="ld"/><circle cx="112" cy="256" r="2" class="dotf"/><text x="116" y="260" class="bl">B.M① (2개소 이상)</text>' +
    '<line x1="225" y1="270" x2="225" y2="288" class="ld"/><circle cx="225" cy="288" r="2" class="dotf"/><text x="231" y="293" class="r">대지경계선 = 지적도 일치</text>' +
    '<text x="450" y="40" class="b">[B.M 상세]</text>' +
    '<rect x="455" y="130" width="175" height="18" class="soil"/><line x1="455" y1="130" x2="630" y2="130" class="ln"/><text x="600" y="125" class="s">GL</text>' +
    '<rect x="505" y="70" width="28" height="74" class="conc"/><path d="M512,70 l14,0 l-7,-10 z" class="rf"/>' +
    '<line x1="548" y1="62" x2="548" y2="130" class="ln2"/><line x1="542" y1="62" x2="554" y2="62" class="ln2"/><line x1="542" y1="130" x2="554" y2="130" class="ln2"/><text x="556" y="100" class="r">0.5~1.0m</text>' +
    '<line x1="505" y1="90" x2="470" y2="66" class="ld"/><circle cx="470" cy="66" r="2" class="dotf"/><text x="452" y="58" class="s">콘크리트 매립</text>' +
    '<line x1="350" y1="160" x2="440" y2="176" class="ld"/><circle cx="440" cy="176" r="2" class="dotf"/><text x="446" y="180" class="k3">③ 영향권 밖 부동점</text>' +
    '<line x1="378" y1="84" x2="440" y2="196" class="ld"/><circle cx="440" cy="196" r="2" class="dotf"/><text x="446" y="200" class="k3">③ 2개소↑ 상호 검측</text>' +
    '<line x1="390" y1="270" x2="440" y2="228" class="ld"/><circle cx="440" cy="228" r="2" class="dotf"/><text x="446" y="232" class="k4">④ 말뚝 보호펜스·사진</text>' +
    '<text x="446" y="252" class="k4">④ 인접대지주·감리 입회</text><text x="446" y="272" class="k4">④ 층별·월별 수시 검측</text>' +
    '<text x="446" y="296" class="k5">⑤ GPS·TS 좌표 관리</text><text x="446" y="316" class="k5">⑤ 드론·BIM 기록 관리</text>' +
    '</svg>',
  subs: [
    { h: '설치기준', pts: ['굴착 영향권 밖 [[부동점]]', 'B.M {{2개소 이상}} 상호 검측', 'GL+{{0.5~1.0m}} 표시·콘크리트 매립'] },
    { h: '시공 시 유의사항', pts: ['경계말뚝 보호펜스·사진기록', '인접대지주·감리 입회 확인', '층별·월별 [[수시 검측]]'] },
    { h: '개선방안', pts: ['GPS·Total Station 좌표관리', '드론측량·BIM 디지털 기록'] }
  ],
  msg: '경계는 지적도로, 높이는 부동 B.M으로 — 착공 전 확정, 준공까지 유지',
  rel: ['GPS 측량', '규준틀', '먹매김', '지적측량', 'Total Station']
},
110: {
  tag: '측량·장비·기술',
  def: '[[인공위성 전파]]의 [[도달시간(ΔT)]]으로 거리(전파속도×ΔT)를 구해 좌표를 정하는 측량으로, [[RTK]]는 기준국 실시간 보정으로 {{cm급}} 정밀도를 확보',
  wwh: ['위성 ΔT 거리측위', '시통불필요·신속정밀', '4위성 + RTK 보정'],
  figT: 'RTK GPS 측량원리 및 오차요인',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="58" width="40" height="8" class="bx2"/><circle cx="50" cy="62" r="9" class="bx"/>' +
    '<rect x="130" y="38" width="40" height="8" class="bx2"/><circle cx="150" cy="42" r="9" class="bx"/>' +
    '<rect x="240" y="38" width="40" height="8" class="bx2"/><circle cx="260" cy="42" r="9" class="bx"/>' +
    '<rect x="340" y="58" width="40" height="8" class="bx2"/><circle cx="360" cy="62" r="9" class="bx"/>' +
    '<line x1="50" y1="71" x2="110" y2="228" class="ln2 dash"/><line x1="50" y1="71" x2="320" y2="228" class="ln2 dash"/>' +
    '<line x1="150" y1="51" x2="110" y2="228" class="ln2 dash"/><line x1="150" y1="51" x2="320" y2="228" class="ln2 dash"/>' +
    '<line x1="260" y1="51" x2="110" y2="228" class="ln2 dash"/><line x1="260" y1="51" x2="320" y2="228" class="ln2 dash"/>' +
    '<line x1="360" y1="71" x2="110" y2="228" class="ln2 dash"/><line x1="360" y1="71" x2="320" y2="228" class="ln2 dash"/>' +
    '<line x1="20" y1="95" x2="430" y2="95" class="ln2 dash"/>' +
    '<rect x="372" y="150" width="48" height="112" class="bx3"/>' +
    '<polyline points="268,50 372,190 326,230" class="rd dash" fill="none"/>' +
    '<rect x="20" y="262" width="410" height="16" class="soil"/>' +
    '<line x1="20" y1="262" x2="430" y2="262" class="ln"/>' +
    '<line x1="110" y1="236" x2="96" y2="262" class="ln"/><line x1="110" y1="236" x2="124" y2="262" class="ln"/><circle cx="110" cy="232" r="6" class="rf"/>' +
    '<line x1="320" y1="238" x2="320" y2="262" class="ln"/><circle cx="320" cy="232" r="6" class="bf"/>' +
    '<line x1="122" y1="244" x2="306" y2="244" class="ar"/>' +
    '<text x="214" y="256" text-anchor="middle" class="s">보정신호 실시간 송신(RTK)</text>' +
    '<text x="24" y="20" class="b">위성 4개↑ 동시수신 → 3차원 좌표</text>' +
    '<line x1="260" y1="33" x2="290" y2="18" class="ld"/><circle cx="290" cy="18" r="2" class="dotf"/><text x="294" y="22" class="s">GPS 위성</text>' +
    '<line x1="50" y1="71" x2="40" y2="120" class="ld"/><circle cx="40" cy="120" r="2" class="dotf"/><text x="44" y="124" class="s">위성궤도·시계오차</text>' +
    '<line x1="110" y1="262" x2="110" y2="296" class="ld"/><circle cx="110" cy="296" r="2" class="dotf"/><text x="114" y="300" class="bl">기준국(국가기준점 연결)</text>' +
    '<line x1="320" y1="262" x2="300" y2="296" class="ld"/><circle cx="300" cy="296" r="2" class="dotf"/><text x="304" y="300" class="bl">이동국(측점)</text>' +
    '<line x1="250" y1="270" x2="250" y2="318" class="ld"/><circle cx="250" cy="318" r="2" class="dotf"/><text x="254" y="322" class="s">경계·항심 위치·터파기 Level 확인</text>' +
    '<text x="450" y="30" class="b">[측위 원리]</text>' +
    '<text x="450" y="50" class="r">거리 = 전파속도 × ΔT</text>' +
    '<text x="450" y="68" class="s">위성 4개: x·y·z + 시계오차</text>' +
    '<text x="450" y="86" class="s">기준국 오차 → 이동국 보정</text>' +
    '<text x="446" y="112" class="k3">③ Static: 후처리 최고정밀</text>' +
    '<line x1="300" y1="244" x2="440" y2="126" class="ld"/><circle cx="440" cy="126" r="2" class="dotf"/><text x="444" y="130" class="k3">③ RTK: 실시간 cm급</text>' +
    '<text x="446" y="148" class="k3">③ VRS: 기준국 불필요</text>' +
    '<text x="446" y="166" class="k3">③ DGPS: m급 장비추적</text>' +
    '<text x="446" y="184" class="k3">③ 활용: 경계·항심·터파기 Level</text>' +
    '<text x="446" y="202" class="k4">④ 국가기준점 연결·다수점</text>' +
    '<line x1="420" y1="175" x2="440" y2="216" class="ld"/><circle cx="440" cy="216" r="2" class="dotf"/><text x="444" y="220" class="k4">④ 건물·수목 다중경로 오차</text>' +
    '<line x1="369" y1="62" x2="440" y2="234" class="ld"/><circle cx="440" cy="234" r="2" class="dotf"/><text x="444" y="238" class="k4">④ DOP 불량 시간대 회피</text>' +
    '<line x1="430" y1="95" x2="440" y2="252" class="ld"/><circle cx="440" cy="252" r="2" class="dotf"/><text x="444" y="256" class="k4">④ 전리층·대류권 지연 보정</text>' +
    '<text x="446" y="274" class="k5">⑤ MG·MC + BIM 장비제어</text>' +
    '<text x="446" y="292" class="k5">⑤ 드론·스마트폰 RTK 토공</text>' +
    '<line x1="420" y1="240" x2="440" y2="306" class="ld"/><circle cx="440" cy="306" r="2" class="dotf"/><text x="444" y="310" class="k5">⑤ TS 병행 음영지역 보완</text>' +
    '</svg>',
  subs: [
    { h: '측량방식 및 활용', pts: ['Static: 후처리 최고정밀', '[[RTK]]: 실시간 {{cm급}}', 'VRS: 기준국 불필요', 'DGPS: {{m급}} 장비추적', '활용: 경계·항심·터파기 Level'] },
    { h: '측량 시 유의사항', pts: ['국가기준점 연결·다수점', '건물·수목 [[다중경로 오차]]', 'DOP 불량 시간대 회피', '전리층·대류권 지연 보정'] },
    { h: '개선방안', pts: ['MG·MC + BIM 장비제어', '드론·스마트폰 RTK 토공', 'TS 병행 음영지역 보완'] }
  ],
  msg: 'ΔT로 거리, 위성 4개로 좌표, 기준국으로 보정 — 시통 없이 cm급 측량',
  rel: ['Total Station', 'Network RTK(VRS)', '드론측량', '머신 가이던스', '경계측량']
},
111: {
  tag: '장비·관리·기준',
  def: '취득가·[[운영·유지비]]·[[잔존가치]]를 이자로 환산한 [[연간 등가비용]]이 [[최소점]]이 되는 사용기간으로, 건설기계 [[교체시기]] 판단의 기준',
  wwh: ['등가비용 최소 연수', '교체시기 합리 결정', 'CR↓ + O·M↑ 합 최소'],
  figT: '연간 등가비용 곡선과 경제수명',
  svg: '<svg viewBox="0 0 640 352" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="290" x2="425" y2="290" class="ar"/>' +
    '<line x1="50" y1="290" x2="50" y2="30" class="ar"/>' +
    '<text x="56" y="36" class="s">연간 등가비용</text>' +
    '<text x="425" y="280" text-anchor="end" class="s">사용연수 n</text>' +
    '<path d="M70,60 Q120,200 400,250" class="ln2 dash"/>' +
    '<path d="M70,272 Q300,250 400,80" class="ln2"/>' +
    '<path d="M70,45 Q230,300 400,50" class="rd"/>' +
    '<line x1="232" y1="174" x2="232" y2="290" class="ln2 dash"/>' +
    '<circle cx="232" cy="174" r="4" class="rf"/>' +
    '<line x1="400" y1="286" x2="400" y2="294" class="ln"/>' +
    '<line x1="99" y1="113" x2="130" y2="96" class="ld"/><circle cx="130" cy="96" r="2" class="dotf"/><text x="134" y="100" class="bl">자본회수비 CR↓</text>' +
    '<line x1="355" y1="142" x2="330" y2="116" class="ld"/><circle cx="330" cy="116" r="2" class="dotf"/><text x="326" y="120" text-anchor="end" class="bl">운영·유지비↑</text>' +
    '<line x1="366" y1="95" x2="350" y2="60" class="ld"/><circle cx="350" cy="60" r="2" class="dotf"/><text x="346" y="64" text-anchor="end" class="r">총 연간 등가비용</text>' +
    '<line x1="232" y1="174" x2="262" y2="200" class="ld"/><circle cx="262" cy="200" r="2" class="dotf"/><text x="266" y="204" class="r">최소점</text>' +
    '<line x1="232" y1="290" x2="262" y2="306" class="ld"/><circle cx="262" cy="306" r="2" class="dotf"/><text x="266" y="310" class="r">경제수명 n*</text>' +
    '<line x1="400" y1="294" x2="390" y2="326" class="ld"/><circle cx="390" cy="326" r="2" class="dotf"/><text x="386" y="330" text-anchor="end" class="s">물리적 수명(최장)</text>' +
    '<text x="56" y="344" class="s">영향요인: 기계·작업·운전자</text>' +
    '<text x="450" y="30" class="b">[자본회수비]</text>' +
    '<text x="450" y="50" class="r">CR = (P−S)·(A/P,i,n) + S·i</text>' +
    '<text x="450" y="68" class="s">P 취득가·S 잔존가치·i 이자율</text>' +
    '<text x="450" y="86" class="s">총 등가비용 최소 n = 경제수명</text>' +
    '<text x="446" y="114" class="k3">③ 물리적: 고장·마모 한계(최장)</text>' +
    '<line x1="232" y1="180" x2="440" y2="130" class="ld"/><circle cx="440" cy="130" r="2" class="dotf"/><text x="444" y="134" class="k3">③ 경제적: 등가비용 최소점</text>' +
    '<text x="446" y="154" class="k3">③ 기술적: 신기술 진부화</text>' +
    '<text x="446" y="174" class="k3">③ 법정: 세법 내용연수</text>' +
    '<text x="446" y="194" class="k4">④ 정비이력·수리비 연도별 기록</text>' +
    '<line x1="232" y1="240" x2="440" y2="210" class="ld"/><circle cx="440" cy="210" r="2" class="dotf"/><text x="444" y="214" class="k4">④ 대체분석 후 교체시기 결정</text>' +
    '<line x1="390" y1="97" x2="440" y2="230" class="ld"/><circle cx="440" cy="230" r="2" class="dotf"/><text x="444" y="234" class="k4">④ 가혹작업·미숙련 → 수명단축</text>' +
    '<text x="446" y="254" class="k4">④ 양중부하·가동률 적정대수</text>' +
    '<text x="446" y="274" class="k5">⑤ 예방정비 계획적 유지관리</text>' +
    '<text x="446" y="294" class="k5">⑤ IoT·오일분석 고장예지</text>' +
    '<text x="446" y="314" class="k5">⑤ 렌탈·Fleet 최적 운영</text>' +
    '</svg>',
  subs: [
    { h: '수명의 구분', pts: ['물리적: 고장·마모 한계(최장)', '경제적: [[등가비용 최소점]]', '기술적: 신기술 진부화', '법정: 세법 내용연수'] },
    { h: '운용 시 유의사항', pts: ['정비이력·수리비 연도별 기록', '대체분석 후 [[교체시기]] 결정', '가혹작업·미숙련 → 수명단축', '양중부하·가동률 적정대수'] },
    { h: '개선방안', pts: ['[[예방정비]] 계획적 유지관리', 'IoT·오일분석 고장예지', '렌탈·Fleet 최적 운영'] }
  ],
  msg: '자본회수비는 줄고 유지비는 늘어, 그 합이 최소인 해가 교체시기',
  rel: ['감가상각', '내용연수', '예방정비', '장비 가동률', 'LCC']
},
112: {
  tag: '장비·공법·안전',
  def: '[[Telescoping Cage]]의 [[유압 Cylinder]] Stroke로 확보한 {{Mast 1단}} 공간에 [[Guide Rail]]을 따라 Mast를 삽입하여 타워크레인을 상승·해체하는 작업',
  wwh: ['Cage로 Mast 삽입', '층수 증가·붕괴방지', '균형 → 상승 → 삽입'],
  figT: 'Telescoping 원리 및 작업순서',
  svg: '<svg viewBox="0 0 640 346" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="300" width="410" height="10" class="soil"/>' +
    '<line x1="20" y1="300" x2="430" y2="300" class="ln"/>' +
    '<rect x="130" y="284" width="70" height="16" class="conc"/>' +
    '<rect x="150" y="130" width="30" height="154" class="bx"/>' +
    '<polyline points="150,284 180,264 150,244 180,224 150,204 180,184 150,164 180,144 150,130" class="ln2" fill="none"/>' +
    '<rect x="150" y="100" width="30" height="30" class="ln2 dash"/>' +
    '<rect x="140" y="72" width="50" height="92" class="ln2 dash"/>' +
    '<rect x="131" y="92" width="7" height="58" class="bx2"/>' +
    '<rect x="140" y="60" width="50" height="12" class="bx2"/>' +
    '<polyline points="150,60 165,20 180,60" class="ln" fill="none"/>' +
    '<line x1="165" y1="20" x2="400" y2="48" class="ln2"/>' +
    '<line x1="165" y1="20" x2="50" y2="52" class="ln2"/>' +
    '<line x1="190" y1="48" x2="420" y2="48" class="ln"/>' +
    '<line x1="190" y1="58" x2="420" y2="58" class="ln"/>' +
    '<polyline points="190,58 205,48 220,58 235,48 250,58 265,48 280,58 295,48 310,58 325,48 340,58 355,48 370,58 385,48 400,58 415,48" class="ln2" fill="none"/>' +
    '<line x1="40" y1="52" x2="140" y2="52" class="ln"/>' +
    '<line x1="40" y1="60" x2="140" y2="60" class="ln"/>' +
    '<rect x="40" y="60" width="30" height="26" class="conc"/>' +
    '<rect x="364" y="58" width="16" height="6" class="bx2"/>' +
    '<line x1="372" y1="64" x2="372" y2="70" class="ln"/>' +
    '<rect x="360" y="70" width="24" height="40" class="bx"/>' +
    '<rect x="200" y="116" width="30" height="26" class="bx"/>' +
    '<line x1="190" y1="142" x2="260" y2="142" class="ln"/>' +
    '<line x1="236" y1="129" x2="186" y2="129" class="ar"/>' +
    '<line x1="134" y1="120" x2="100" y2="130" class="ld"/><circle cx="100" cy="130" r="2" class="dotf"/><text x="96" y="134" text-anchor="end" class="bl">유압 Cylinder</text>' +
    '<line x1="134" y1="146" x2="104" y2="156" class="ld"/><circle cx="104" cy="156" r="2" class="dotf"/><text x="100" y="160" text-anchor="end" class="r">1단 높이 Stroke</text>' +
    '<line x1="190" y1="90" x2="230" y2="82" class="ld"/><circle cx="230" cy="82" r="2" class="dotf"/><text x="234" y="86" class="bl">Telescoping Cage</text>' +
    '<line x1="220" y1="142" x2="240" y2="150" class="ld"/><circle cx="240" cy="150" r="2" class="dotf"/><text x="244" y="154" class="s">Guide Rail → Mast 삽입</text>' +
    '<line x1="360" y1="105" x2="330" y2="190" class="ld"/><circle cx="330" cy="190" r="2" class="dotf"/><text x="326" y="194" text-anchor="end" class="s">추가 Mast 인양(Jib 방향)</text>' +
    '<line x1="55" y1="86" x2="55" y2="110" class="ld"/><circle cx="55" cy="110" r="2" class="dotf"/><text x="59" y="114" class="s">카운터웨이트</text>' +
    '<line x1="165" y1="22" x2="200" y2="18" class="ld"/><circle cx="200" cy="18" r="2" class="dotf"/><text x="204" y="22" class="b">균형(Balance) 유지</text>' +
    '<rect x="20" y="312" width="58" height="22" class="bx"/>' +
    '<text x="49" y="327" text-anchor="middle" class="s">인양·운반</text>' +
    '<line x1="79" y1="323" x2="89" y2="323" class="ar"/>' +
    '<rect x="90" y="312" width="58" height="22" class="bx"/>' +
    '<text x="119" y="327" text-anchor="middle" class="s">균형확인</text>' +
    '<line x1="149" y1="323" x2="159" y2="323" class="ar"/>' +
    '<rect x="160" y="312" width="58" height="22" class="bx"/>' +
    '<text x="189" y="327" text-anchor="middle" class="s">유압상승</text>' +
    '<line x1="219" y1="323" x2="229" y2="323" class="ar"/>' +
    '<rect x="230" y="312" width="58" height="22" class="bx"/>' +
    '<text x="259" y="327" text-anchor="middle" class="s">Mast 삽입</text>' +
    '<line x1="289" y1="323" x2="299" y2="323" class="ar"/>' +
    '<rect x="300" y="312" width="58" height="22" class="bx"/>' +
    '<text x="329" y="327" text-anchor="middle" class="s">핀·볼트</text>' +
    '<line x1="359" y1="323" x2="369" y2="323" class="ar"/>' +
    '<rect x="370" y="312" width="58" height="22" class="bx"/>' +
    '<text x="399" y="327" text-anchor="middle" class="s">반복·점검</text>' +
    '<text x="450" y="24" class="b">[Telescoping 원리]</text>' +
    '<text x="450" y="42" class="s">Cage 상승 → 1단 공간 → 삽입</text>' +
    '<line x1="384" y1="90" x2="440" y2="62" class="ld"/><circle cx="440" cy="62" r="2" class="dotf"/><text x="444" y="66" class="k3">③ Mast Jib 방향 운반·균형</text>' +
    '<text x="446" y="86" class="k3">③ 유압 오일량·압력 점검</text>' +
    '<text x="446" y="106" class="k3">③ Motor 회전방향 점검</text>' +
    '<text x="446" y="126" class="k3">③ 작업계획서·신호체계</text>' +
    '<line x1="420" y1="48" x2="440" y2="142" class="ld"/><circle cx="440" cy="142" r="2" class="dotf"/><text x="444" y="146" class="k4">④ 순간풍속 10m/s 초과 중지</text>' +
    '<text x="446" y="166" class="k4">④ 실린더 = 카운터지브 방향</text>' +
    '<line x1="190" y1="66" x2="440" y2="182" class="ld"/><circle cx="440" cy="182" r="2" class="dotf"/><text x="444" y="186" class="k4">④ 고정 전 선회·트롤리 금지</text>' +
    '<text x="446" y="206" class="k4">④ 보조핀 체결 시 작동 금지</text>' +
    '<text x="446" y="226" class="k4">④ 유자격자·반경 내 출입통제</text>' +
    '<text x="446" y="246" class="k5">⑤ 균형·유압·풍속 모니터링</text>' +
    '<text x="446" y="266" class="k5">⑤ Self-Telescoping 자동화</text>' +
    '<text x="446" y="286" class="k5">⑤ BIM 양중계획·Wall bracing</text>' +
    '</svg>',
  subs: [
    { h: '준비작업', pts: ['Mast Jib 방향 운반·[[균형]]', '유압 오일량·압력 점검', 'Motor 회전방향 점검', '작업계획서·신호체계'] },
    { h: '작업 시 유의사항', pts: ['[[순간풍속 {{10m/s}}]] 초과 중지', '실린더 = 카운터지브 방향', '고정 전 [[선회]]·트롤리 금지', '보조핀 체결 시 작동 금지', '유자격자·반경 내 출입통제'] },
    { h: '개선방안', pts: ['균형·유압·풍속 모니터링', 'Self-Telescoping 자동화', 'BIM 양중계획·Wall bracing'] }
  ],
  msg: '균형 잡고 올려 끼운다 — 풍속·선회·핀 확인이 붕괴를 막는다',
  rel: ['Tower Crane', 'Climbing', 'Wall bracing', '양중계획', '악천후 작업중지']
},
113: {
  tag: '안전·기준·장비',
  def: '곤돌라 달기 와이어로프는 [[이음매]]·소선 {{10% 이상}} 절단·지름 {{7% 초과}} 감소·꼬임·부식이 없고 [[안전계수 10 이상]]이며 별도 [[구명줄]]에 안전대를 체결하는 조건',
  wwh: ['사용금지·안전계수', '추락·파단 방지', '점검 → 구명줄 체결'],
  figT: '곤돌라 와이어 사용금지 기준 및 구명줄 구성',
  svg: '<svg viewBox="0 0 640 346" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="24" y="26" class="b">[와이어로프 확대]</text>' +
    '<rect x="50" y="40" width="22" height="262" class="bx"/>' +
    '<line x1="50" y1="46" x2="72" y2="56" class="ln2"/>' +
    '<line x1="50" y1="60" x2="72" y2="70" class="ln2"/>' +
    '<line x1="50" y1="74" x2="72" y2="84" class="ln2"/>' +
    '<line x1="50" y1="88" x2="72" y2="98" class="ln2"/>' +
    '<line x1="50" y1="102" x2="72" y2="112" class="ln2"/>' +
    '<line x1="50" y1="116" x2="72" y2="126" class="ln2"/>' +
    '<line x1="50" y1="130" x2="72" y2="140" class="ln2"/>' +
    '<line x1="50" y1="144" x2="72" y2="154" class="ln2"/>' +
    '<line x1="50" y1="158" x2="72" y2="168" class="ln2"/>' +
    '<line x1="50" y1="172" x2="72" y2="182" class="ln2"/>' +
    '<line x1="50" y1="186" x2="72" y2="196" class="ln2"/>' +
    '<line x1="50" y1="200" x2="72" y2="210" class="ln2"/>' +
    '<line x1="50" y1="214" x2="72" y2="224" class="ln2"/>' +
    '<line x1="50" y1="228" x2="72" y2="238" class="ln2"/>' +
    '<line x1="50" y1="242" x2="72" y2="252" class="ln2"/>' +
    '<line x1="50" y1="256" x2="72" y2="266" class="ln2"/>' +
    '<line x1="50" y1="270" x2="72" y2="280" class="ln2"/>' +
    '<line x1="50" y1="284" x2="72" y2="294" class="ln2"/>' +
    '<rect x="46" y="64" width="30" height="12" class="bx2"/>' +
    '<polyline points="72,116 84,108 78,124" class="rd" fill="none"/>' +
    '<path d="M50,160 Q60,170 50,180" class="rd"/>' +
    '<path d="M72,160 Q62,170 72,180" class="rd"/>' +
    '<polyline points="50,214 58,222 50,230" class="rd" fill="none"/>' +
    '<line x1="61" y1="302" x2="61" y2="322" class="ar"/>' +
    '<line x1="76" y1="70" x2="100" y2="70" class="ld"/><circle cx="100" cy="70" r="2" class="dotf"/><text x="104" y="74" class="k3">③ 이음매 있는 것 금지</text>' +
    '<line x1="84" y1="112" x2="100" y2="120" class="ld"/><circle cx="100" cy="120" r="2" class="dotf"/><text x="104" y="124" class="k3">③ 소선 10% 이상 절단</text>' +
    '<line x1="72" y1="170" x2="100" y2="170" class="ld"/><circle cx="100" cy="170" r="2" class="dotf"/><text x="104" y="174" class="k3">③ 공칭지름 7% 초과 감소</text>' +
    '<line x1="58" y1="222" x2="100" y2="220" class="ld"/><circle cx="100" cy="220" r="2" class="dotf"/><text x="104" y="224" class="k3">③ 꼬임·변형·부식·열손상</text>' +
    '<line x1="66" y1="316" x2="100" y2="296" class="ld"/><circle cx="100" cy="296" r="2" class="dotf"/><text x="104" y="300" class="k3">③ 안전계수 10↑(화물 5↑)</text>' +
    '<rect x="340" y="70" width="90" height="260" class="bx3"/>' +
    '<rect x="340" y="58" width="10" height="12" class="conc"/>' +
    '<rect x="300" y="50" width="125" height="8" class="bx2"/>' +
    '<rect x="400" y="28" width="26" height="22" class="conc"/>' +
    '<line x1="360" y1="58" x2="360" y2="70" class="ln"/>' +
    '<line x1="410" y1="58" x2="410" y2="70" class="ln"/>' +
    '<line x1="306" y1="58" x2="306" y2="190" class="ln"/>' +
    '<rect x="280" y="190" width="56" height="26" class="bx"/>' +
    '<rect x="380" y="62" width="8" height="8" class="rf"/>' +
    '<polyline points="384,66 352,62 290,62 290,330" class="gr" fill="none"/>' +
    '<circle cx="304" cy="180" r="5" class="bx"/>' +
    '<line x1="304" y1="185" x2="304" y2="198" class="ln"/>' +
    '<line x1="304" y1="190" x2="290" y2="170" class="ln2"/>' +
    '<rect x="287" y="166" width="6" height="8" class="rf"/>' +
    '<rect x="260" y="330" width="170" height="12" class="soil"/>' +
    '<line x1="306" y1="140" x2="288" y2="142" class="ld"/><circle cx="288" cy="142" r="2" class="dotf"/><text x="284" y="146" text-anchor="end" class="s">주 와이어</text>' +
    '<line x1="290" y1="262" x2="270" y2="266" class="ld"/><circle cx="270" cy="266" r="2" class="dotf"/><text x="266" y="270" text-anchor="end" class="g">구명줄(별도)</text>' +
    '<line x1="282" y1="216" x2="270" y2="240" class="ld"/><circle cx="270" cy="240" r="2" class="dotf"/><text x="266" y="244" text-anchor="end" class="s">곤돌라 작업대</text>' +
    '<text x="450" y="24" class="b">[주 와이어 + 별도 구명줄]</text>' +
    '<line x1="384" y1="64" x2="440" y2="46" class="ld"/><circle cx="440" cy="46" r="2" class="dotf"/><text x="444" y="50" class="k4">④ 구명줄 별도 고정점·안전대</text>' +
    '<line x1="426" y1="36" x2="440" y2="66" class="ld"/><circle cx="440" cy="66" r="2" class="dotf"/><text x="444" y="70" class="k4">④ 앵커·카운터웨이트 전도방지</text>' +
    '<line x1="340" y1="58" x2="440" y2="86" class="ld"/><circle cx="440" cy="86" r="2" class="dotf"/><text x="444" y="90" class="k4">④ 모서리 와이어 보호대</text>' +
    '<line x1="336" y1="200" x2="440" y2="106" class="ld"/><circle cx="440" cy="106" r="2" class="dotf"/><text x="444" y="110" class="k4">④ 클립·권과방지·비상정지 확인</text>' +
    '<text x="446" y="130" class="k4">④ 일일점검·6개월마다 안전검사</text>' +
    '<text x="446" y="150" class="k4">④ 강풍 10m/s↑ 중지·정격하중</text>' +
    '<text x="446" y="170" class="k5">⑤ MFL 비파괴·하중풍속 센서</text>' +
    '<text x="446" y="190" class="k5">⑤ 설치계획서·고정점 구조검토</text>' +
    '<text x="446" y="210" class="k5">⑤ 특별교육·점검표 이력관리</text>' +
    '</svg>',
  subs: [
    { h: '와이어로프 사용금지 기준', pts: ['[[이음매]] 있는 것 금지', '소선 {{10% 이상}} 절단', '공칭지름 {{7% 초과}} 감소', '꼬임·변형·부식·열손상', '안전계수 {{10↑}}(화물 {{5↑}})'] },
    { h: '시공 시 유의사항', pts: ['[[구명줄]] 별도 고정점·안전대', '앵커·카운터웨이트 전도방지', '모서리 와이어 보호대', '클립·권과방지·비상정지 확인', '일일점검·{{6개월마다}} 안전검사', '강풍 {{10m/s}}↑ 중지·정격하중'] },
    { h: '개선방안', pts: ['MFL 비파괴·하중풍속 센서', '설치계획서·고정점 구조검토', '특별교육·점검표 이력관리'] }
  ],
  msg: '와이어는 이·10·7·꼬·변·부 금지, 생명은 별도 구명줄에 건다',
  rel: ['달비계', '구명줄', '안전대', '안전검사', '권과방지장치']
},
114: {
  tag: '시험·지반·기준',
  def: '[[표준관입시험(SPT)]]에서 {{63.5kg}} 해머를 {{76cm}} 자유낙하시켜 샘플러를 {{30cm}} 관입시키는 데 필요한 [[타격횟수]]로, 지반의 단단함·[[상대밀도]] 판정 지표',
  wwh: ['SPT 타격횟수', '지지층·지반강도 판단', '예비15 → 본30cm'],
  figT: '표준관입시험 원리와 N치 판정',
  svg: '<svg viewBox="0 0 640 346" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="20" y="120" width="210" height="210" class="soil"/>' +
    '<line x1="20" y1="120" x2="230" y2="120" class="ln"/>' +
    '<line x1="20" y1="190" x2="230" y2="190" class="ln2 dash"/>' +
    '<line x1="20" y1="250" x2="230" y2="250" class="ln2 dash"/>' +
    '<rect x="100" y="120" width="20" height="205" class="bx3"/>' +
    '<polyline points="60,120 110,20 160,120" class="ln" fill="none"/>' +
    '<circle cx="110" cy="22" r="4" class="bx"/>' +
    '<line x1="110" y1="26" x2="110" y2="300" class="ln"/>' +
    '<rect x="98" y="50" width="24" height="22" class="conc"/>' +
    '<rect x="102" y="104" width="16" height="6" class="bx2"/>' +
    '<line x1="140" y1="72" x2="140" y2="104" class="ln2"/>' +
    '<line x1="134" y1="72" x2="146" y2="72" class="ln2"/>' +
    '<line x1="134" y1="104" x2="146" y2="104" class="ln2"/>' +
    '<text x="145" y="92" class="r">76cm 낙하</text>' +
    '<rect x="104" y="270" width="12" height="45" class="bx2"/>' +
    '<line x1="104" y1="285" x2="116" y2="285" class="ln"/>' +
    '<line x1="122" y1="58" x2="160" y2="48" class="ld"/><circle cx="160" cy="48" r="2" class="dotf"/><text x="164" y="52" class="bl">63.5kg 해머</text>' +
    '<line x1="102" y1="107" x2="70" y2="100" class="ld"/><circle cx="70" cy="100" r="2" class="dotf"/><text x="66" y="104" text-anchor="end" class="s">Anvil</text>' +
    '<line x1="120" y1="160" x2="150" y2="160" class="ld"/><circle cx="150" cy="160" r="2" class="dotf"/><text x="154" y="164" class="s">시추공·Rod</text>' +
    '<line x1="104" y1="277" x2="96" y2="262" class="ld"/><circle cx="96" cy="262" r="2" class="dotf"/><text x="92" y="266" text-anchor="end" class="s">예비 15cm(제외)</text>' +
    '<line x1="104" y1="300" x2="96" y2="300" class="ld"/><circle cx="96" cy="300" r="2" class="dotf"/><text x="92" y="304" text-anchor="end" class="r">본 30cm = N치</text>' +
    '<text x="245" y="40" class="k3">③ N치 판정: 상대밀도·연경도</text>' +
    '<text x="287" y="60" text-anchor="middle" class="b">사질토</text>' +
    '<text x="387" y="60" text-anchor="middle" class="b">점성토</text>' +
    '<rect x="247" y="68" width="80" height="22" class="bx3"/><text x="287" y="83" text-anchor="middle" class="s">0~4 매우느슨</text>' +
    '<rect x="247" y="90" width="80" height="22" class="bx"/><text x="287" y="105" text-anchor="middle" class="s">4~10 느슨</text>' +
    '<rect x="247" y="112" width="80" height="22" class="bx3"/><text x="287" y="127" text-anchor="middle" class="s">10~30 중간</text>' +
    '<rect x="247" y="134" width="80" height="22" class="bx"/><text x="287" y="149" text-anchor="middle" class="s">30~50 조밀</text>' +
    '<rect x="247" y="156" width="80" height="22" class="bx3"/><text x="287" y="171" text-anchor="middle" class="s">50↑ 매우조밀</text>' +
    '<rect x="347" y="68" width="80" height="22" class="bx3"/><text x="387" y="83" text-anchor="middle" class="s">2 미만 매우연약</text>' +
    '<rect x="347" y="90" width="80" height="22" class="bx"/><text x="387" y="105" text-anchor="middle" class="s">2~4 연약</text>' +
    '<rect x="347" y="112" width="80" height="22" class="bx3"/><text x="387" y="127" text-anchor="middle" class="s">4~8 중간</text>' +
    '<rect x="347" y="134" width="80" height="22" class="bx"/><text x="387" y="149" text-anchor="middle" class="s">8~15 견고</text>' +
    '<rect x="347" y="156" width="80" height="22" class="bx3"/><text x="387" y="171" text-anchor="middle" class="s">15~30 매우견고</text>' +
    '<rect x="347" y="178" width="80" height="22" class="bx"/><text x="387" y="193" text-anchor="middle" class="s">30↑ 고결</text>' +
    '<text x="450" y="110" class="b">[측정 원리]</text>' +
    '<text x="450" y="130" class="r">63.5kg·76cm 자유낙하</text>' +
    '<text x="450" y="150" class="s">샘플러 30cm 관입 타격횟수</text>' +
    '<text x="450" y="168" class="s">클수록 단단 → 지지층 판단</text>' +
    '<text x="446" y="34" class="k3">③ φ = √12N + 15~25(사질)</text>' +
    '<text x="446" y="54" class="k3">③ qu ≈ N/8 kgf/cm²(점성)</text>' +
    '<text x="446" y="74" class="k3">③ 점성토 Vane·일축 병행</text>' +
    '<line x1="116" y1="280" x2="440" y2="192" class="ld"/><circle cx="440" cy="192" r="2" class="dotf"/><text x="444" y="196" class="k4">④ 예비 15cm 제외·본 30cm만</text>' +
    '<line x1="116" y1="312" x2="440" y2="210" class="ld"/><circle cx="440" cy="210" r="2" class="dotf"/><text x="444" y="214" class="k4">④ 50회 초과 → 50/관입량</text>' +
    '<line x1="110" y1="322" x2="440" y2="228" class="ld"/><circle cx="440" cy="228" r="2" class="dotf"/><text x="444" y="232" class="k4">④ 공저 슬라임 제거·자유낙하</text>' +
    '<line x1="110" y1="230" x2="440" y2="246" class="ld"/><circle cx="440" cy="246" r="2" class="dotf"/><text x="444" y="250" class="k4">④ N60 보정·자갈층 과대평가</text>' +
    '<text x="446" y="268" class="k4">④ 1.0~1.5m 간격·지하수위 기록</text>' +
    '<text x="446" y="286" class="k5">⑤ Auto-trip 자동낙하 해머</text>' +
    '<text x="446" y="304" class="k5">⑤ CPT·공내재하시험 병행</text>' +
    '<text x="446" y="322" class="k5">⑤ 지반정보 DB·BIM 연계</text>' +
    '</svg>',
  subs: [
    { h: 'N치로 추정 가능한 항목', pts: ['N치 판정: [[상대밀도]]·연경도', 'φ = √12N + {{15~25}}(사질)', 'qu ≈ {{N/8}} kgf/cm²(점성)', '점성토 Vane·일축 병행'] },
    { h: '시험 시 유의사항', pts: ['예비 {{15cm}} 제외·본 {{30cm}}만', '{{50회}} 초과 → [[50/관입량]]', '공저 슬라임 제거·자유낙하', 'N60 보정·자갈층 과대평가', '{{1.0~1.5m}} 간격·지하수위 기록'] },
    { h: '개선방안', pts: ['Auto-trip 자동낙하 해머', 'CPT·공내재하시험 병행', '지반정보 DB·BIM 연계'] }
  ],
  msg: '육삼오·칠육·삼십 — 예비 15cm는 버리고 본 30cm 타격수가 N',
  rel: ['표준관입시험', '토질주상도', 'Sounding', 'CPT', 'Vane Test']
},
115: {
  tag: '조사·도서·지반',
  def: '[[Boring]]과 [[표준관입시험(N값)]] 결과로 [[지층 구성]]·[[심도·층후]]·[[지하수위]]·시료상태를 축척으로 표시한 지반조사 도서로, N값 눈금은 {{50}}까지 표시',
  wwh: ['지층·수위·N값 도서', '지지층·흙막이 결정', '시추 → SPT → 작성'],
  figT: '토질주상도 구성(지층·지하수위·N값)',
  svg: '<svg viewBox="0 0 640 346" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="24" y="22" class="s">BH-1 · 위치·표고·일자</text>' +
    '<line x1="44" y1="40" x2="44" y2="320" class="ln"/>' +
    '<line x1="40" y1="40" x2="48" y2="40" class="ln"/><text x="38" y="44" text-anchor="end" class="s">0</text>' +
    '<line x1="40" y1="96" x2="48" y2="96" class="ln"/><text x="38" y="100" text-anchor="end" class="s">5</text>' +
    '<line x1="40" y1="152" x2="48" y2="152" class="ln"/><text x="38" y="156" text-anchor="end" class="s">10</text>' +
    '<line x1="40" y1="208" x2="48" y2="208" class="ln"/><text x="38" y="212" text-anchor="end" class="s">15</text>' +
    '<line x1="40" y1="264" x2="48" y2="264" class="ln"/><text x="38" y="268" text-anchor="end" class="s">20</text>' +
    '<line x1="40" y1="320" x2="48" y2="320" class="ln"/><text x="38" y="324" text-anchor="end" class="s">25</text>' +
    '<rect x="50" y="40" width="60" height="22.4" class="bx3"/><text x="124" y="55.2" class="s">매립토</text>' +
    '<rect x="50" y="62.4" width="60" height="67.2" class="soil"/><text x="124" y="100" class="s">점토(연약)</text>' +
    '<rect x="50" y="129.6" width="60" height="67.2" class="bx"/><text x="124" y="167.2" class="s">모래</text>' +
    '<rect x="50" y="196.8" width="60" height="44.8" class="soil"/><text x="124" y="223.2" class="s">풍화토</text>' +
    '<rect x="50" y="241.6" width="60" height="44.8" class="bx2"/><text x="124" y="268" class="s">풍화암</text>' +
    '<rect x="50" y="286.4" width="60" height="33.6" class="conc"/><text x="124" y="307.2" class="s">연암(지지층)</text>' +
    '<path d="M54,70 l12,0 l-6,8 z" class="bf"/>' +
    '<line x1="50" y1="79" x2="110" y2="79" class="ln2 dash"/>' +
    '<line x1="200" y1="40" x2="420" y2="40" class="ln"/>' +
    '<line x1="200" y1="36" x2="200" y2="44" class="ln"/><text x="200" y="32" text-anchor="middle" class="s">0</text>' +
    '<line x1="242" y1="36" x2="242" y2="44" class="ln"/><text x="242" y="32" text-anchor="middle" class="s">10</text>' +
    '<line x1="284" y1="36" x2="284" y2="44" class="ln"/><text x="284" y="32" text-anchor="middle" class="s">20</text>' +
    '<line x1="326" y1="36" x2="326" y2="44" class="ln"/><text x="326" y="32" text-anchor="middle" class="s">30</text>' +
    '<line x1="368" y1="36" x2="368" y2="44" class="ln"/><text x="368" y="32" text-anchor="middle" class="s">40</text>' +
    '<line x1="410" y1="36" x2="410" y2="44" class="ln"/><text x="410" y="32" text-anchor="middle" class="s">50</text>' +
    '<line x1="410" y1="40" x2="410" y2="320" class="ln2 dash"/>' +
    '<polyline points="221,51.2 208.4,73.6 212.6,96 216.8,118.4 250.4,140.8 275.6,163.2 305,185.6 326,208 359.6,230.4 410,252.8 410,275.2 410,297.6" class="rd" fill="none"/>' +
    '<circle cx="221" cy="51.2" r="2.5" class="rf"/>' +
    '<circle cx="208.4" cy="73.6" r="2.5" class="rf"/>' +
    '<circle cx="212.6" cy="96" r="2.5" class="rf"/>' +
    '<circle cx="216.8" cy="118.4" r="2.5" class="rf"/>' +
    '<circle cx="250.4" cy="140.8" r="2.5" class="rf"/>' +
    '<circle cx="275.6" cy="163.2" r="2.5" class="rf"/>' +
    '<circle cx="305" cy="185.6" r="2.5" class="rf"/>' +
    '<circle cx="326" cy="208" r="2.5" class="rf"/>' +
    '<circle cx="359.6" cy="230.4" r="2.5" class="rf"/>' +
    '<circle cx="410" cy="252.8" r="2.5" class="rf"/>' +
    '<circle cx="410" cy="275.2" r="2.5" class="rf"/>' +
    '<circle cx="410" cy="297.6" r="2.5" class="rf"/>' +
    '<rect x="184" y="146" width="6" height="8" class="bx2"/>' +
    '<rect x="184" y="214" width="6" height="8" class="bx2"/>' +
    '<line x1="66" y1="76" x2="136" y2="70" class="ld"/><circle cx="136" cy="70" r="2" class="dotf"/><text x="140" y="74" class="s">지하수위</text>' +
    '<line x1="213" y1="96" x2="270" y2="96" class="ld"/><circle cx="270" cy="96" r="2" class="dotf"/><text x="274" y="100" class="r">N값(심도별 SPT)</text>' +
    '<line x1="410" y1="266" x2="375" y2="290" class="ld"/><circle cx="375" cy="290" r="2" class="dotf"/><text x="371" y="294" text-anchor="end" class="s">50/관입량 → 지지층 확인</text>' +
    '<line x1="187" y1="150" x2="175" y2="128" class="ld"/><circle cx="175" cy="128" r="2" class="dotf"/><text x="171" y="132" text-anchor="end" class="s">시료채취</text>' +
    '<line x1="30" y1="152" x2="30" y2="330" class="ld"/><circle cx="30" cy="330" r="2" class="dotf"/><text x="34" y="334" class="s">심도(m)·층후</text>' +
    '<text x="426" y="16" text-anchor="end" class="s">N값 0~50</text>' +
    '<text x="450" y="24" class="b">[조사 순서]</text>' +
    '<text x="450" y="44" class="s">예비 → 본(시추·SPT) → 보완 → 특정</text>' +
    '<line x1="410" y1="260" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="444" y="72" class="k3">③ 지층 → 지지층·파일 길이</text>' +
    '<line x1="110" y1="80" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="444" y="92" class="k3">③ 지하수위 → 부력·차수공법</text>' +
    '<line x1="326" y1="208" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="444" y="112" class="k3">③ N값 → 지지력·기초설계</text>' +
    '<line x1="190" y1="220" x2="440" y2="128" class="ld"/><circle cx="440" cy="128" r="2" class="dotf"/><text x="444" y="132" class="k3">③ 시료 → 실내 토질시험</text>' +
    '<text x="446" y="152" class="k3">③ 기재: 공번·표고·심도·토질·색조</text>' +
    '<text x="446" y="172" class="k4">④ 시추공 사이 = 추정·연속성 확인</text>' +
    '<text x="446" y="192" class="k4">④ 대표값·편차 범위로 분류</text>' +
    '<text x="446" y="212" class="k4">④ 수위 계절변동·피압 재측정</text>' +
    '<text x="446" y="232" class="k4">④ 지지층 이하 시추(전석 오판)</text>' +
    '<text x="446" y="252" class="k4">④ 실제 지층 상이 → 설계변경</text>' +
    '<text x="446" y="272" class="k5">⑤ 시추간격 조밀·물리탐사</text>' +
    '<text x="446" y="292" class="k5">⑤ 지반정보 DB·3D 지반모델</text>' +
    '<text x="446" y="312" class="k5">⑤ 굴착기록 대조 피드백</text>' +
    '</svg>',
  subs: [
    { h: '확인 항목 및 활용', pts: ['지층 → [[지지층]]·파일 길이', '지하수위 → 부력·차수공법', 'N값 → 지지력·기초설계', '시료 → 실내 토질시험', '기재: 공번·표고·심도·토질·색조'] },
    { h: '조사·평가 시 유의사항', pts: ['시추공 사이 = 추정·연속성 확인', '대표값·편차 범위로 분류', '수위 계절변동·피압 재측정', '지지층 이하 시추(전석 오판)', '실제 지층 상이 → 설계변경'] },
    { h: '개선방안', pts: ['시추간격 조밀·물리탐사', '지반정보 DB·3D 지반모델', '굴착기록 대조 피드백'] }
  ],
  msg: '층·수·N·시 — 주상도 한 장이 기초·흙막이 공법을 결정한다',
  rel: ['Boring', '표준관입시험', 'N치', '지층단면도', '지하안전영향평가']
},
116: {
  tag: '시험·지반·기준',
  def: '시추 코어 중 길이 {{10cm 이상}} 조각 길이의 합을 [[총 시추길이]]로 나눈 [[백분율(%)]]로, 절리 발달 정도를 반영하여 [[암반 분류]]에 쓰는 암질지수',
  wwh: ['10cm↑ 코어 비율', '절리·암반등급 판정', '이중관 NX 코어 측정'],
  figT: 'RQD 산정 원리 및 Deere 분류',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<text x="24" y="24" class="b">[코어 1 Run = 1,000mm]</text>' +
    '<rect x="30" y="46" width="400" height="44" class="bx3"/>' +
    '<line x1="30" y1="68" x2="430" y2="68" class="ln2 dash"/>' +
    '<rect x="30" y="52" width="100" height="32" class="bx2"/><text x="80" y="42" text-anchor="middle" class="r">250</text>' +
    '<rect x="131" y="57" width="22" height="22" class="bx"/>' +
    '<rect x="154" y="52" width="72" height="32" class="bx2"/><text x="190" y="42" text-anchor="middle" class="r">180</text>' +
    '<rect x="227" y="57" width="14" height="22" class="bx"/>' +
    '<rect x="243" y="57" width="34" height="22" class="bx"/>' +
    '<rect x="278" y="52" width="80" height="32" class="bx2"/><text x="318" y="42" text-anchor="middle" class="r">200</text>' +
    '<rect x="359" y="57" width="18" height="22" class="bx"/>' +
    '<rect x="378" y="54" width="52" height="28" class="ln2 dash"/>' +
    '<line x1="80" y1="86" x2="60" y2="112" class="ld"/><circle cx="60" cy="112" r="2" class="dotf"/><text x="64" y="116" class="k3">③ 10cm 이상 코어만 합산</text>' +
    '<line x1="260" y1="79" x2="270" y2="112" class="ld"/><circle cx="270" cy="112" r="2" class="dotf"/><text x="274" y="116" class="s">10cm 미만·풍화 연약 제외</text>' +
    '<line x1="404" y1="82" x2="404" y2="132" class="ld"/><circle cx="404" cy="132" r="2" class="dotf"/><text x="400" y="136" text-anchor="end" class="s">미회수 → TCR↓</text>' +
    '<rect x="30" y="150" width="400" height="50" class="bx"/>' +
    '<text x="230" y="170" text-anchor="middle" class="b">RQD = Σ(10cm 이상) / 총 시추길이 × 100</text>' +
    '<text x="230" y="190" text-anchor="middle" class="r">= (250+180+200) / 1,000 = 63% → 보통(Fair)</text>' +
    '<rect x="30" y="228" width="100" height="20" class="bx3"/><text x="80" y="242" text-anchor="middle" class="s">매우불량</text>' +
    '<rect x="130" y="228" width="100" height="20" class="bx"/><text x="180" y="242" text-anchor="middle" class="s">불량</text>' +
    '<rect x="230" y="228" width="100" height="20" class="bx3"/><text x="280" y="242" text-anchor="middle" class="s">보통</text>' +
    '<rect x="330" y="228" width="60" height="20" class="bx"/><text x="360" y="242" text-anchor="middle" class="s">양호</text>' +
    '<rect x="390" y="228" width="40" height="20" class="bx3"/><text x="410" y="242" text-anchor="middle" class="s">매우양호</text>' +
    '<text x="30" y="262" text-anchor="middle" class="s">0</text>' +
    '<text x="130" y="262" text-anchor="middle" class="s">25</text>' +
    '<text x="230" y="262" text-anchor="middle" class="s">50</text>' +
    '<text x="330" y="262" text-anchor="middle" class="s">75</text>' +
    '<text x="390" y="262" text-anchor="middle" class="s">90</text>' +
    '<text x="430" y="262" text-anchor="middle" class="s">100</text>' +
    '<text x="24" y="218" class="k3">③ Deere 분류 25·50·75·90 경계</text>' +
    '<path d="M282,226 l-5,-8 l10,0 z" class="rf"/>' +
    '<line x1="282" y1="218" x2="300" y2="210" class="ld"/><circle cx="300" cy="210" r="2" class="dotf"/><text x="304" y="214" class="r">63% 보통</text>' +
    '<rect x="30" y="290" width="220" height="26" class="bx"/>' +
    '<rect x="40" y="296" width="200" height="14" class="bx3"/>' +
    '<path d="M250,290 L266,296 L266,310 L250,316 Z" class="conc"/>' +
    '<line x1="60" y1="316" x2="60" y2="326" class="ld"/><circle cx="60" cy="326" r="2" class="dotf"/><text x="64" y="330" class="s">외관 회전·내관 고정(이중관)</text>' +
    '<line x1="266" y1="303" x2="290" y2="300" class="ld"/><circle cx="290" cy="300" r="2" class="dotf"/><text x="294" y="304" class="s">Diamond Bit</text>' +
    '<text x="450" y="24" class="b">[RQD vs TCR]</text>' +
    '<text x="450" y="44" class="s">TCR = 회수 총길이 / 총 시추길이</text>' +
    '<text x="450" y="62" class="r">RQD ≤ TCR</text>' +
    '<line x1="420" y1="88" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="444" y="92" class="k3">③ RQD ≤ TCR(코어회수율)</text>' +
    '<line x1="250" y1="300" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="444" y="112" class="k4">④ NX(54.7mm)↑ 이중관 배럴</text>' +
    '<text x="446" y="132" class="k4">④ 기계적 파손 = 하나로 포함</text>' +
    '<line x1="230" y1="70" x2="440" y2="148" class="ld"/><circle cx="440" cy="148" r="2" class="dotf"/><text x="444" y="152" class="k4">④ 중심축 측정·풍화 연약 제외</text>' +
    '<text x="446" y="172" class="k4">④ Run·지층별 산정·TCR 병기</text>' +
    '<text x="446" y="192" class="k4">④ 단일지표 한계 → RMR·Q 보완</text>' +
    '<text x="446" y="212" class="k5">⑤ BIPS 영상·텔레뷰어 절리</text>' +
    '<text x="446" y="232" class="k5">⑤ RMR·Q-system 종합분류</text>' +
    '<text x="446" y="252" class="k5">⑤ 코어사진 DB·굴착 대비 검증</text>' +
    '</svg>',
  subs: [
    { h: 'RQD 산정 및 암질 분류', pts: ['{{10cm 이상}} 코어만 합산', 'RQD ≤ TCR(코어회수율)', '[[Deere 분류]] {{25·50·75·90}} 경계'] },
    { h: '측정 시 유의사항', pts: ['NX({{54.7mm}})↑ 이중관 배럴', '기계적 파손 = 하나로 포함', '중심축 측정·풍화 연약 제외', 'Run·지층별 산정·TCR 병기', '단일지표 한계 → RMR·Q 보완'] },
    { h: '개선방안', pts: ['BIPS 영상·텔레뷰어 절리', 'RMR·Q-system 종합분류', '코어사진 DB·굴착 대비 검증'] }
  ],
  msg: '10cm 넘는 코어만 센다 — 63%면 보통, 공법·지지층 판단의 숫자',
  rel: ['TCR', 'RMR', 'Q-system', 'Boring', 'BIPS']
},
117: {
  tag: '지반·성질·시험',
  def: '점착성 흙이 [[함수비 변화]]에 따라 고체·반고체·소성·액성으로 변하는 성질로, 그 경계 함수비를 [[Atterberg 한계]](SL·PL·LL)라 하며 [[소성지수 PI = LL − PL]]',
  wwh: ['함수비별 상태변화', '세립토 거동·분류', 'LL·PL·SL 시험'],
  figT: '함수비–체적 관계와 Atterberg 한계',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="280" x2="425" y2="280" class="ar"/>' +
    '<line x1="50" y1="280" x2="50" y2="30" class="ar"/>' +
    '<text x="56" y="36" class="s">체적 V</text>' +
    '<text x="425" y="274" text-anchor="end" class="s">함수비 w</text>' +
    '<polyline points="60,230 140,230 400,70" class="rd" fill="none"/>' +
    '<line x1="140" y1="230" x2="140" y2="280" class="ln2 dash"/>' +
    '<line x1="230" y1="175" x2="230" y2="280" class="ln2 dash"/>' +
    '<line x1="330" y1="113" x2="330" y2="280" class="ln2 dash"/>' +
    '<line x1="142" y1="262" x2="228" y2="262" class="ar"/>' +
    '<line x1="232" y1="262" x2="328" y2="262" class="ar"/>' +
    '<text x="185" y="256" text-anchor="middle" class="b">SI</text>' +
    '<text x="280" y="256" text-anchor="middle" class="b">PI</text>' +
    '<text x="140" y="296" text-anchor="middle" class="b">SL</text>' +
    '<text x="230" y="296" text-anchor="middle" class="b">PL</text>' +
    '<text x="330" y="296" text-anchor="middle" class="b">LL</text>' +
    '<rect x="50" y="304" width="90" height="22" class="bx3"/><text x="95" y="319" text-anchor="middle" class="s">고체</text>' +
    '<rect x="140" y="304" width="90" height="22" class="bx"/><text x="185" y="319" text-anchor="middle" class="s">반고체</text>' +
    '<rect x="230" y="304" width="100" height="22" class="bx3"/><text x="280" y="319" text-anchor="middle" class="s">소성</text>' +
    '<rect x="330" y="304" width="90" height="22" class="bx"/><text x="375" y="319" text-anchor="middle" class="s">액성</text>' +
    '<line x1="140" y1="230" x2="120" y2="206" class="ld"/><circle cx="120" cy="206" r="2" class="dotf"/><text x="116" y="210" text-anchor="end" class="s">SL: 체적 일정 한계</text>' +
    '<line x1="230" y1="175" x2="200" y2="140" class="ld"/><circle cx="200" cy="140" r="2" class="dotf"/><text x="196" y="144" text-anchor="end" class="r">PL: 3mm 국수 부스러짐</text>' +
    '<line x1="330" y1="113" x2="300" y2="80" class="ld"/><circle cx="300" cy="80" r="2" class="dotf"/><text x="296" y="84" text-anchor="end" class="r">LL: Casagrande 25회</text>' +
    '<line x1="390" y1="76" x2="426" y2="176" class="ld"/><circle cx="426" cy="176" r="2" class="dotf"/><text x="422" y="180" text-anchor="end" class="s">체적 ∝ 함수비</text>' +
    '<line x1="100" y1="230" x2="56" y2="250" class="ld"/><circle cx="56" cy="250" r="2" class="dotf"/><text x="60" y="254" class="s">SL 이하 체적 불변</text>' +
    '<text x="450" y="30" class="b">[연경도 지수]</text>' +
    '<line x1="280" y1="262" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="444" y="52" class="k3">③ PI = LL − PL (소성범위)</text>' +
    '<line x1="185" y1="262" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="444" y="72" class="k3">③ SI = PL − SL (반고체범위)</text>' +
    '<text x="446" y="92" class="k3">③ LI = (w−PL)/PI ≥1 액성</text>' +
    '<text x="446" y="112" class="k3">③ CI = (LL−w)/PI 클수록 안정</text>' +
    '<text x="446" y="132" class="k3">③ A = PI / 2μm 점토% (팽창성)</text>' +
    '<text x="446" y="152" class="k4">④ 425μm 통과·온습도 일정</text>' +
    '<text x="446" y="172" class="k4">④ 대표시료 선정·교란 주의</text>' +
    '<line x1="300" y1="315" x2="440" y2="188" class="ld"/><circle cx="440" cy="188" r="2" class="dotf"/><text x="444" y="192" class="k4">④ PI 大 → 성토·뒤채움 제한</text>' +
    '<text x="446" y="212" class="k4">④ LI≈1 예민·연약 → 굴착 주의</text>' +
    '<text x="446" y="232" class="k5">⑤ Fall Cone 병행 LL 재현성</text>' +
    '<text x="446" y="252" class="k5">⑤ 소성도 A선·USCS 분류</text>' +
    '<text x="446" y="272" class="k5">⑤ 압밀·전단 종합 → 개량공법</text>' +
    '</svg>',
  subs: [
    { h: '연경도 지수', pts: ['[[PI = LL − PL]] (소성범위)', 'SI = PL − SL (반고체범위)', 'LI = (w−PL)/PI {{≥1}} 액성', 'CI = (LL−w)/PI 클수록 안정', 'A = PI / 2μm 점토% (팽창성)'] },
    { h: '판단 시 유의사항', pts: ['{{425μm}} 통과·온습도 일정', '대표시료 선정·교란 주의', 'PI 大 → 성토·뒤채움 제한', 'LI≈1 예민·연약 → 굴착 주의'] },
    { h: '개선방안', pts: ['Fall Cone 병행 LL 재현성', '소성도 A선·USCS 분류', '압밀·전단 종합 → 개량공법'] }
  ],
  msg: '고·반·소·액 ↔ SL·PL·LL — PI가 크면 압축·팽창이 크다',
  rel: ['Atterberg 한계', '소성도', '통일분류법', '예민비', '압밀']
},
118: {
  tag: '지반·성질·기준',
  def: '전단응력에 의해 [[전단파괴]]가 일어날 때의 [[전단저항 최대한도]]로, [[점착력(c)]]과 내부마찰력으로 구성되며 [[Mohr-Coulomb]] 식 {{τ = c + σ′tanφ}}로 표현',
  wwh: ['c + 마찰 저항한도', '사면·지지력·토압', 'τ = c + σ′tanφ'],
  figT: 'Mohr-Coulomb 파괴포락선과 전단파괴 Mechanism',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<line x1="50" y1="250" x2="425" y2="250" class="ar"/>' +
    '<line x1="50" y1="250" x2="50" y2="26" class="ar"/>' +
    '<text x="56" y="34" class="s">τ 전단응력</text>' +
    '<line x1="50" y1="210" x2="410" y2="76.3" class="ln"/>' +
    '<line x1="50" y1="250" x2="380" y2="127.4" class="ln2 dash"/>' +
    '<line x1="50" y1="150" x2="420" y2="150" class="ln2"/>' +
    '<path d="M129.8,250 A100.2,100.2 0 0 1 330.2,250" class="ln2"/>' +
    '<circle cx="195.1" cy="156.1" r="3" class="rf"/>' +
    '<line x1="42" y1="210" x2="42" y2="250" class="ln2"/>' +
    '<text x="38" y="234" text-anchor="end" class="r">c</text>' +
    '<text x="118" y="208" class="r">φ</text>' +
    '<text x="410" y="64" text-anchor="end" class="r">① τ = c + σ′tanφ</text>' +
    '<text x="418" y="172" text-anchor="end" class="r">② 사질토 c = 0</text>' +
    '<text x="56" y="144" class="r">③ 포화점토 τ=c (φ=0)</text>' +
    '<text x="130" y="266" text-anchor="middle" class="s">σ3′</text>' +
    '<text x="330" y="266" text-anchor="middle" class="s">σ1′</text>' +
    '<text x="420" y="268" text-anchor="end" class="s">σ′ = σ − u</text>' +
    '<line x1="300" y1="178" x2="330" y2="200" class="ld"/><circle cx="330" cy="200" r="2" class="dotf"/><text x="334" y="204" class="s">Mohr 응력원</text>' +
    '<line x1="195" y1="156" x2="236" y2="104" class="ld"/><circle cx="236" cy="104" r="2" class="dotf"/><text x="232" y="108" text-anchor="end" class="s">접점 = 전단파괴</text>' +
    '<rect x="28" y="298" width="88" height="26" class="bx"/>' +
    '<text x="72" y="315" text-anchor="middle" class="s">외력·자중</text>' +
    '<line x1="117" y1="311" x2="128" y2="311" class="ar"/>' +
    '<rect x="129" y="298" width="88" height="26" class="bx"/>' +
    '<text x="173" y="315" text-anchor="middle" class="s">전단응력 τ 발생</text>' +
    '<line x1="218" y1="311" x2="229" y2="311" class="ar"/>' +
    '<rect x="230" y="298" width="88" height="26" class="bx"/>' +
    '<text x="274" y="315" text-anchor="middle" class="s">τ > 전단저항</text>' +
    '<line x1="319" y1="311" x2="330" y2="311" class="ar"/>' +
    '<rect x="331" y="298" width="88" height="26" class="bx"/>' +
    '<text x="375" y="315" text-anchor="middle" class="s">활동면 전단파괴</text>' +
    '<text x="450" y="30" class="b">[흙 종류별]</text>' +
    '<line x1="380" y1="87" x2="440" y2="48" class="ld"/><circle cx="440" cy="48" r="2" class="dotf"/><text x="444" y="52" class="k3">③ 일반흙: c + 마찰력</text>' +
    '<line x1="380" y1="127" x2="440" y2="68" class="ld"/><circle cx="440" cy="68" r="2" class="dotf"/><text x="444" y="72" class="k3">③ 사질토: φ·유효응력 지배</text>' +
    '<line x1="420" y1="150" x2="440" y2="88" class="ld"/><circle cx="440" cy="88" r="2" class="dotf"/><text x="444" y="92" class="k3">③ 포화점토: c, St = qu/qur</text>' +
    '<line x1="230" y1="250" x2="440" y2="108" class="ld"/><circle cx="440" cy="108" r="2" class="dotf"/><text x="444" y="112" class="k3">③ 실내: 직접·일축·삼축</text>' +
    '<text x="446" y="132" class="k3">③ 현장: 베인·CPT·표준관입</text>' +
    '<line x1="400" y1="250" x2="440" y2="148" class="ld"/><circle cx="440" cy="148" r="2" class="dotf"/><text x="444" y="152" class="k4">④ 수위↑ → 유효응력↓ → 강도↓</text>' +
    '<text x="446" y="172" class="k4">④ 상부 과재하·진동 금지</text>' +
    '<text x="446" y="192" class="k4">④ 예민점토 교란 → 강도 급감</text>' +
    '<text x="446" y="212" class="k4">④ UU·CU·CD 시험조건 선택</text>' +
    '<line x1="340" y1="142" x2="440" y2="228" class="ld"/><circle cx="440" cy="228" r="2" class="dotf"/><text x="444" y="232" class="k4">④ 사질토 액상화 검토</text>' +
    '<text x="446" y="252" class="k5">⑤ 탈수·다짐·고결 → c·φ↑</text>' +
    '<line x1="419" y1="311" x2="440" y2="268" class="ld"/><circle cx="440" cy="268" r="2" class="dotf"/><text x="444" y="272" class="k5">⑤ 간극수압계·경사계 계측</text>' +
    '<text x="446" y="292" class="k5">⑤ 수치해석 사면안정 검토</text>' +
    '</svg>',
  subs: [
    { h: '흙 종류별 전단강도', pts: ['일반흙: c + 마찰력', '사질토: φ·유효응력 지배', '포화점토: c, St = qu/qur', '실내: 직접·일축·삼축', '현장: 베인·CPT·표준관입'] },
    { h: '시공 시 유의사항', pts: ['수위↑ → [[유효응력]]↓ → 강도↓', '상부 과재하·진동 금지', '예민점토 교란 → 강도 급감', 'UU·CU·CD 시험조건 선택', '사질토 액상화 검토'] },
    { h: '개선방안', pts: ['탈수·다짐·고결 → c·φ↑', '간극수압계·경사계 계측', '수치해석 사면안정 검토'] }
  ],
  msg: '타우 = 씨 + 시그마 탄파이 — 유효응력을 지켜야 흙이 버틴다',
  rel: ['Mohr-Coulomb', '삼축압축시험', '예민비', '사면안정', '액상화']
},
119: {
  tag: '지반·성질·시험',
  def: '흙의 간극을 통해 물이 흐르는 정도로, [[Darcy 법칙]] v = k·i의 비례상수인 [[투수계수(k)]](cm/s)로 나타내며 {{10⁻⁸~10²}} cm/s 범위로 분포',
  wwh: ['간극 통수능력 k', '용수·Boiling 검토', 'Darcy·투수시험'],
  figT: 'Darcy 법칙과 토질별 투수계수 범위',
  svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="40" width="50" height="30" class="bx3"/>' +
    '<line x1="30" y1="46" x2="80" y2="46" class="ln"/>' +
    '<polyline points="55,70 55,135 90,135" class="ln" fill="none"/>' +
    '<rect x="90" y="120" width="90" height="30" class="soil"/>' +
    '<text x="135" y="116" text-anchor="middle" class="s">흙 시료(A)</text>' +
    '<polyline points="180,135 210,135 210,170" class="ln" fill="none"/>' +
    '<rect x="195" y="170" width="30" height="20" class="bx3"/>' +
    '<line x1="20" y1="46" x2="20" y2="170" class="ln2"/>' +
    '<line x1="16" y1="46" x2="30" y2="46" class="ln2"/>' +
    '<line x1="16" y1="170" x2="195" y2="170" class="ln2 dash"/>' +
    '<text x="24" y="112" class="r">Δh</text>' +
    '<line x1="90" y1="160" x2="180" y2="160" class="ln2"/>' +
    '<text x="135" y="174" text-anchor="middle" class="r">L</text>' +
    '<line x1="96" y1="142" x2="172" y2="142" class="ar"/>' +
    '<line x1="80" y1="55" x2="110" y2="70" class="ld"/><circle cx="110" cy="70" r="2" class="dotf"/><text x="114" y="74" class="s">상류 수위</text>' +
    '<line x1="225" y1="180" x2="240" y2="180" class="ld"/><circle cx="240" cy="180" r="2" class="dotf"/><text x="244" y="184" class="s">유출량 Q</text>' +
    '<line x1="55" y1="100" x2="80" y2="100" class="ld"/><circle cx="80" cy="100" r="2" class="dotf"/><text x="84" y="104" class="s">수두차 → 흐름</text>' +
    '<line x1="172" y1="142" x2="215" y2="150" class="ld"/><circle cx="215" cy="150" r="2" class="dotf"/><text x="219" y="154" class="s">층류 흐름</text>' +
    '<text x="262" y="60" class="r">v = k·i ,  i = Δh / L</text>' +
    '<text x="262" y="80" class="r">Q = k·i·A (층류)</text>' +
    '<text x="262" y="100" class="s">Hazen: k = C·D₁₀² (C≈100)</text>' +
    '<text x="30" y="201" class="k3">③ 토질별 k와 시험 적용 (로그눈금)</text>' +
    '<rect x="30" y="206" width="90" height="18" class="bx3"/><text x="75" y="219" text-anchor="middle" class="s">균질점토</text>' +
    '<rect x="150" y="206" width="95" height="18" class="bx3"/><text x="197.5" y="219" text-anchor="middle" class="s">균열점토</text>' +
    '<rect x="330" y="206" width="90" height="18" class="bx3"/><text x="375" y="219" text-anchor="middle" class="s">자갈</text>' +
    '<rect x="110" y="226" width="95" height="18" class="bx"/><text x="157.5" y="239" text-anchor="middle" class="s">실트</text>' +
    '<rect x="225" y="226" width="120" height="18" class="bx"/><text x="285" y="239" text-anchor="middle" class="s">모래</text>' +
    '<line x1="30" y1="252" x2="420" y2="252" class="ln"/>' +
    '<line x1="30" y1="248" x2="30" y2="256" class="ln"/><text x="30" y="268" text-anchor="middle" class="s">10⁻⁸</text>' +
    '<line x1="108" y1="248" x2="108" y2="256" class="ln"/><text x="108" y="268" text-anchor="middle" class="s">10⁻⁶</text>' +
    '<line x1="186" y1="248" x2="186" y2="256" class="ln"/><text x="186" y="268" text-anchor="middle" class="s">10⁻⁴</text>' +
    '<line x1="264" y1="248" x2="264" y2="256" class="ln"/><text x="264" y="268" text-anchor="middle" class="s">10⁻²</text>' +
    '<line x1="342" y1="248" x2="342" y2="256" class="ln"/><text x="342" y="268" text-anchor="middle" class="s">10⁰</text>' +
    '<line x1="420" y1="248" x2="420" y2="256" class="ln"/><text x="420" y="268" text-anchor="middle" class="s">10²</text>' +
    '<text x="426" y="244" text-anchor="end" class="s">k(cm/s)</text>' +
    '<rect x="30" y="276" width="110" height="18" class="bx2"/><text x="85" y="289" text-anchor="middle" class="s">압밀시험(간접)</text>' +
    '<rect x="145" y="276" width="135" height="18" class="bx2"/><text x="212.5" y="289" text-anchor="middle" class="s">변수위 투수시험</text>' +
    '<rect x="285" y="276" width="135" height="18" class="bx2"/><text x="352.5" y="289" text-anchor="middle" class="s">정수위 투수시험</text>' +
    '<text x="225" y="314" text-anchor="middle" class="s">현장: 양수·순간변위(Slug)·Lugeon</text>' +
    '<text x="450" y="30" class="b">[영향요소]</text>' +
    '<text x="446" y="52" class="k3">③ 입경 D₁₀↑ → k↑ (k ∝ D²)</text>' +
    '<text x="446" y="72" class="k3">③ 간극비·포화도↑ → k↑</text>' +
    '<text x="446" y="92" class="k3">③ 점성계수↑ → k↓ (온도↑ k↑)</text>' +
    '<text x="446" y="112" class="k3">③ 수평 k > 연직 k (층리)</text>' +
    '<line x1="420" y1="284" x2="440" y2="128" class="ld"/><circle cx="440" cy="128" r="2" class="dotf"/><text x="444" y="132" class="k3">③ 정수위 = 조립, 변수위 = 세립</text>' +
    '<text x="446" y="152" class="k4">④ 실내시료 교란 → 양수시험 보정</text>' +
    '<line x1="420" y1="214" x2="440" y2="168" class="ld"/><circle cx="440" cy="168" r="2" class="dotf"/><text x="444" y="172" class="k4">④ Boiling·Piping 검토·차수벽</text>' +
    '<text x="446" y="192" class="k4">④ 점토 압밀 장기화 → Drain</text>' +
    '<line x1="225" y1="190" x2="440" y2="208" class="ld"/><circle cx="440" cy="208" r="2" class="dotf"/><text x="444" y="212" class="k4">④ 과다양수 → 주변 지반침하</text>' +
    '<text x="446" y="232" class="k4">④ 지하안전영향평가 반영</text>' +
    '<text x="446" y="252" class="k5">⑤ 현장시험 + 지하수 수치해석</text>' +
    '<line x1="380" y1="310" x2="440" y2="268" class="ld"/><circle cx="440" cy="268" r="2" class="dotf"/><text x="444" y="272" class="k5">⑤ 그라우팅 후 Lugeon 재측정</text>' +
    '<text x="446" y="292" class="k5">⑤ 수위·간극수압 실시간 계측</text>' +
    '</svg>',
  subs: [
    { h: '영향요소 및 측정방법', pts: ['입경 D₁₀↑ → k↑ (k ∝ D²)', '간극비·포화도↑ → k↑', '[[점성계수]]↑ → k↓ (온도↑ k↑)', '수평 k > 연직 k (층리)', '정수위 = 조립, 변수위 = 세립'] },
    { h: '시공 시 유의사항', pts: ['실내시료 교란 → 양수시험 보정', 'Boiling·Piping 검토·차수벽', '점토 압밀 장기화 → Drain', '과다양수 → 주변 지반침하', '지하안전영향평가 반영'] },
    { h: '개선방안', pts: ['현장시험 + 지하수 수치해석', '그라우팅 후 Lugeon 재측정', '수위·간극수압 실시간 계측'] }
  ],
  msg: '다르시 v = k·i — 입경·간극 크면 k↑, 점성 크면 k↓',
  rel: ['Darcy 법칙', 'Boiling·Piping', 'Well Point', '양수시험', 'Lugeon Test']
},
120: {
  tag: '기초·공법·원리',
  def: '[[연약지반]]에서 굴착 흙의 [[배토중량]]과 [[건물 하중]]을 평형시켜 [[순하중(q_net)]]을 최소화하는 [[보상원리]] 기초로, 완전보상은 {{q = γ·Df}}',
  wwh: ['배토 = 건물 하중', '연약지반 침하 억제', '깊은 굴착 + 강성 Mat'],
  figT: 'Floating Foundation 보상원리',
  svg: '<svg viewBox="0 0 640 346" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="30" y="120" width="160" height="110" class="soil"/>' +
    '<rect x="220" y="120" width="210" height="110" class="soil"/>' +
    '<line x1="20" y1="120" x2="430" y2="120" class="ln"/>' +
    '<rect x="60" y="120" width="100" height="80" class="bx3"/>' +
    '<line x1="110" y1="180" x2="110" y2="64" class="ar"/>' +
    '<text x="110" y="54" text-anchor="middle" class="r">배토중량 Ws = γ·Df</text>' +
    '<text x="110" y="160" text-anchor="middle" class="s">굴착 제거토</text>' +
    '<line x1="80" y1="226" x2="80" y2="204" class="ar"/>' +
    '<line x1="140" y1="226" x2="140" y2="204" class="ar"/>' +
    '<line x1="140" y1="206" x2="170" y2="180" class="ld"/><circle cx="170" cy="180" r="2" class="dotf"/><text x="174" y="184" class="s">Heaving</text>' +
    '<rect x="270" y="30" width="110" height="90" class="bx"/>' +
    '<rect x="270" y="120" width="110" height="80" class="bx2"/>' +
    '<rect x="264" y="200" width="122" height="12" class="conc"/>' +
    '<line x1="325" y1="44" x2="325" y2="104" class="ar"/>' +
    '<text x="325" y="24" text-anchor="middle" class="r">건물하중 W (q)</text>' +
    '<line x1="256" y1="120" x2="256" y2="212" class="ln2"/>' +
    '<text x="250" y="170" text-anchor="end" class="r">Df</text>' +
    '<path d="M404,142 l12,0 l-6,8 z" class="bf"/>' +
    '<line x1="386" y1="150" x2="430" y2="150" class="ln2 dash"/>' +
    '<line x1="300" y1="228" x2="300" y2="214" class="ar"/>' +
    '<line x1="350" y1="228" x2="350" y2="214" class="ar"/>' +
    '<text x="325" y="178" text-anchor="middle" class="s">지하 박스</text>' +
    '<rect x="30" y="244" width="400" height="92" class="bx"/>' +
    '<text x="230" y="264" text-anchor="middle" class="b">q_net = q − γ·Df  (q 건물 단위하중)</text>' +
    '<text x="40" y="286" class="k3">③ 완전보상: q = γ·Df → q_net = 0</text>' +
    '<text x="40" y="306" class="k3">③ 부분보상: q_net ≤ 허용지지력</text>' +
    '<text x="40" y="326" class="k3">③ 뗏목기초: # 형태 하중 분산</text>' +
    '<text x="450" y="30" class="b">[보상원리]</text>' +
    '<text x="450" y="50" class="r">배토중량 = 건물하중</text>' +
    '<text x="450" y="68" class="s">→ 지반 추가응력·침하 ≈ 0</text>' +
    '<line x1="380" y1="140" x2="440" y2="92" class="ld"/><circle cx="440" cy="92" r="2" class="dotf"/><text x="444" y="96" class="k3">③ 장점: 말뚝 불필요·지하공간</text>' +
    '<line x1="160" y1="130" x2="440" y2="112" class="ld"/><circle cx="440" cy="112" r="2" class="dotf"/><text x="444" y="116" class="k3">③ 단점: 흙막이·배수비·융기</text>' +
    '<text x="446" y="136" class="k4">④ 단위중량·지하수위 정확 산정</text>' +
    '<line x1="380" y1="70" x2="440" y2="152" class="ld"/><circle cx="440" cy="152" r="2" class="dotf"/><text x="444" y="156" class="k4">④ 하중중심 = 기초도심</text>' +
    '<line x1="386" y1="206" x2="440" y2="172" class="ld"/><circle cx="440" cy="172" r="2" class="dotf"/><text x="444" y="176" class="k4">④ 강성 Mat·박스로 부등침하 대응</text>' +
    '<line x1="160" y1="214" x2="440" y2="192" class="ld"/><circle cx="440" cy="192" r="2" class="dotf"/><text x="444" y="196" class="k4">④ 분할굴착·즉시타설(Heaving)</text>' +
    '<line x1="410" y1="150" x2="440" y2="212" class="ld"/><circle cx="440" cy="212" r="2" class="dotf"/><text x="444" y="216" class="k4">④ 부력(양압력)·침하·융기 계측</text>' +
    '<line x1="330" y1="214" x2="440" y2="232" class="ld"/><circle cx="440" cy="232" r="2" class="dotf"/><text x="444" y="236" class="k5">⑤ Piled Raft 병용 침하제어</text>' +
    '<text x="446" y="256" class="k5">⑤ 단계별 해석·계측 피드백</text>' +
    '<text x="446" y="276" class="k5">⑤ 자중·Rock Anchor·영구배수</text>' +
    '</svg>',
  subs: [
    { h: '종류 및 특징', pts: ['완전보상: q = γ·Df → q_net = 0', '부분보상: q_net ≤ 허용지지력', '뗏목기초: # 형태 하중 분산', '장점: 말뚝 불필요·지하공간', '단점: 흙막이·배수비·융기'] },
    { h: '설계·시공 시 유의사항', pts: ['단위중량·지하수위 정확 산정', '하중중심 = 기초도심', '[[강성 Mat]]·박스로 부등침하 대응', '분할굴착·즉시타설([[Heaving]])', '부력(양압력)·침하·융기 계측'] },
    { h: '개선방안', pts: ['Piled Raft 병용 침하제어', '단계별 해석·계측 피드백', '자중·Rock Anchor·영구배수'] }
  ],
  msg: '배토 = 건물 → 뜬다 — 말뚝 없이 순하중을 0에 가깝게',
  rel: ['Mat 기초', 'Piled Raft', '부력', 'Heaving', '부등침하']
}
});
