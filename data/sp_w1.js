// 간단 요약(한눈에·따라 그리기) — 이번주 No.110~132 / 형식: data/SCHEMA_SP.md
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.w, {
110: {
  one: '[[인공위성]] {{4개 이상}}의 전파 [[도달시간(ΔT)]]으로 거리를 구해 좌표를 정하고, [[RTK]] 보정으로 {{cm급}} 정밀도 확보',
  flow: ['위성 4개↑ 수신', '거리=속도×ΔT', '기준국 보정', '이동국 좌표'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<circle cx="70" cy="50" r="10" class="bf"/><circle cx="170" cy="30" r="10" class="bf"/><circle cx="310" cy="30" r="10" class="bf"/><circle cx="410" cy="50" r="10" class="bf"/>' +
    '<text x="240" y="36" text-anchor="middle" class="t">위성 4개↑</text>' +
    '<line x1="70" y1="60" x2="110" y2="190" class="ln2 dash"/><line x1="170" y1="40" x2="110" y2="190" class="ln2 dash"/>' +
    '<line x1="310" y1="40" x2="360" y2="190" class="ln2 dash"/><line x1="410" y1="60" x2="360" y2="190" class="ln2 dash"/>' +
    '<text x="240" y="120" text-anchor="middle" class="r">거리 = 속도 × ΔT</text>' +
    '<line x1="40" y1="240" x2="460" y2="240" class="ln"/>' +
    '<line x1="110" y1="240" x2="110" y2="205" class="ln"/><path d="M98,205 l24,0 l-12,-14 z" class="bx2"/>' +
    '<line x1="360" y1="240" x2="360" y2="205" class="ln"/><path d="M348,205 l24,0 l-12,-14 z" class="bx2"/>' +
    '<line x1="135" y1="210" x2="330" y2="210" class="ar"/><text x="232" y="200" text-anchor="middle" class="bl">보정신호 (실시간)</text>' +
    '<text x="110" y="262" text-anchor="middle">기준국</text><text x="360" y="262" text-anchor="middle">이동국</text>' +
    '<text x="470" y="228" text-anchor="end" class="r">cm급 정밀도</text>' +
    '</svg>',
  heads: [
    { h: '측량원리', k: ['위성 [[4개↑]] 동시수신', '거리 = 속도 × ΔT', '[[RTK]] 실시간 보정'] },
    { h: '유의사항', k: ['상공 시야 확보', '[[다중경로 오차]]', 'DOP 불량시간 회피'] },
    { h: '개선방안', k: ['MG·MC 장비 연계', 'TS 병행 음영보완'] }
  ],
  code: '위성 4개·ΔT·RTK 보정 → “사·티·보” / 활용 “경·파·토”'
},
111: {
  one: '[[자본회수비]](↓)와 [[운영·유지비]](↑)를 이자로 환산한 [[연간 등가비용]]이 {{최소}}가 되는 사용기간',
  flow: ['초기 투자', '자본회수비 ↓', '운영유지비 ↑', '합계 최소', '교체'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="30" x2="60" y2="240" class="ln"/><line x1="60" y1="240" x2="455" y2="240" class="ln"/>' +
    '<text x="66" y="26" class="s2">비용</text><text x="452" y="262" text-anchor="end" class="s2">연수 n →</text>' +
    '<path d="M85,70 Q160,215 440,215" class="bl"/>' +
    '<path d="M85,228 Q300,215 440,140" class="gr"/>' +
    '<path d="M85,40 Q260,250 440,30" class="rd"/>' +
    '<text x="110" y="40" class="b">총 등가비용</text>' +
    '<text x="440" y="200" text-anchor="end" class="bl">자본회수비 ↓</text>' +
    '<text x="445" y="130" text-anchor="end" class="g">운영유지비 ↑</text>' +
    '<circle cx="261" cy="143" r="5" class="rf"/><line x1="261" y1="148" x2="261" y2="240" class="ln2 dash"/>' +
    '<text x="272" y="128" class="r">최소점</text>' +
    '<text x="261" y="262" text-anchor="middle" class="r">경제수명</text>' +
    '</svg>',
  heads: [
    { h: '수명 구분', k: ['물리적·기술적', '[[경제적]] = 교체기준', '법정(내용연수)'] },
    { h: '유의사항', k: ['정비이력 기록', '대체분석 후 교체', '가혹작업 → 단축'] },
    { h: '개선방안', k: ['[[예방정비]]', 'IoT 고장 예지', 'Fleet 관리'] }
  ],
  code: '“자운최” 자본회수↓ + 운영유지↑ = 최소점 → 교체'
},
112: {
  one: '[[Telescoping Cage]]의 [[유압 Cylinder]]로 상부를 들어 생긴 {{Mast 1단}} 공간에 Mast를 끼워 크레인 상승',
  flow: ['Mast 운반', '균형 확인', 'Cage 상승', 'Mast 삽입', '핀 체결'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="70" y1="62" x2="440" y2="62" class="ln"/><rect x="80" y="62" width="30" height="20" class="bx3"/>' +
    '<text x="440" y="50" text-anchor="end" class="bl">균형 유지</text>' +
    '<rect x="200" y="70" width="40" height="40" class="bx"/>' +
    '<rect x="200" y="110" width="40" height="40" fill="none" class="rd dash"/>' +
    '<rect x="200" y="150" width="40" height="110" class="bx"/>' +
    '<rect x="186" y="66" width="68" height="94" fill="none" class="ln2"/>' +
    '<rect x="282" y="112" width="40" height="36" class="bx2"/><line x1="280" y1="130" x2="246" y2="130" class="ar"/>' +
    '<text x="330" y="136" class="r">Mast 삽입</text>' +
    '<line x1="176" y1="150" x2="176" y2="112" class="ar"/><text x="170" y="136" text-anchor="end" class="bl">유압 상승</text>' +
    '<text x="258" y="182" class="b">Telescoping Cage</text>' +
    '<line x1="60" y1="260" x2="420" y2="260" class="ln"/>' +
    '<text x="300" y="236" class="r">풍속 10m/s↑ 중지</text>' +
    '</svg>',
  heads: [
    { h: '준비작업', k: ['Jib 방향 [[균형]]', '유압·오일 점검', '신호·출입통제'] },
    { h: '유의사항', k: ['풍속 {{10m/s↑}} 중지', '[[선회 금지]]·트롤리 금지', '핀·볼트 체결 확인'] },
    { h: '개선방안', k: ['실시간 모니터링', 'Self-Telescoping', 'BIM 양중계획'] }
  ],
  code: '“인·상·삽” 인양 → 상승 → 삽입 / 금지 “풍(10)·선·핀”'
},
113: {
  one: '달기 와이어는 [[이음매]]·소선 {{10%}} 단선·지름 {{7%}} 감소 없이 [[안전계수 10↑]], 별도 [[구명줄]]에 안전대',
  flow: ['반입검사', '상부 고정', '와이어 점검', '구명줄 설치', '안전대 체결'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="40" width="110" height="220" class="conc"/>' +
    '<line x1="70" y1="34" x2="230" y2="34" class="ln"/><rect x="70" y="16" width="30" height="18" class="bx3"/>' +
    '<text x="125" y="12" text-anchor="middle" class="s2">카운터웨이트</text>' +
    '<line x1="225" y1="34" x2="225" y2="200" class="ln"/>' +
    '<text x="240" y="100" class="b">주 와이어</text><text x="240" y="122" class="r">안전계수 10↑</text>' +
    '<polyline points="110,40 165,48 165,262" fill="none" class="rd"/>' +
    '<rect x="170" y="200" width="90" height="30" class="bx2"/><text x="215" y="220" text-anchor="middle" class="s2">곤돌라</text>' +
    '<text x="270" y="250" class="s2">안전대 체결</text>' +
    '<text x="175" y="272" class="r">구명줄 별도</text>' +
    '<text x="300" y="160" class="r">소선 10%↑ 단선 X</text><text x="300" y="182" class="r">지름 7% 초과감소 X</text>' +
    '</svg>',
  heads: [
    { h: '사용금지 기준', k: ['[[이음매]]·꼬임·부식', '소선 {{10%↑}} 단선', '지름 {{7%}} 초과 감소'] },
    { h: '유의사항', k: ['[[구명줄]] 고정점 분리', '모서리 보호대', '강풍 {{10m/s↑}} 중지'] },
    { h: '개선방안', k: ['MFL 비파괴 검사', '하중·풍속 센서', '특별안전교육'] }
  ],
  code: '사용금지 “이·10·7·꼬·변·부” / 안전계수 10 / 구명줄 별도'
},
114: {
  one: '[[표준관입시험]]에서 {{63.5kg}} 해머를 {{76cm}} 낙하시켜 샘플러를 [[30cm 관입]]시키는 [[타격횟수]]',
  flow: ['시추', 'Sampler 설치', '예비 15cm', '본타격 30cm', 'N치 기록'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="148" y="10" width="44" height="26" class="bx3"/><text x="200" y="28" class="b">63.5kg 해머</text>' +
    '<line x1="136" y1="38" x2="136" y2="62" class="ar"/><text x="200" y="56" class="r">76cm 낙하</text>' +
    '<rect x="160" y="62" width="20" height="8" class="bx"/><line x1="170" y1="70" x2="170" y2="180" class="ln"/>' +
    '<rect x="40" y="90" width="260" height="170" class="soil"/><line x1="40" y1="90" x2="300" y2="90" class="ln"/>' +
    '<text x="46" y="84" class="s2">GL</text>' +
    '<rect x="162" y="180" width="16" height="70" class="bx"/><line x1="154" y1="200" x2="186" y2="200" class="rd"/>' +
    '<text x="150" y="196" text-anchor="end" class="s2">예비 15cm</text>' +
    '<text x="190" y="230" class="r">본타격 30cm</text>' +
    '<text x="315" y="110" class="bl">N = 30cm 타격횟수</text>' +
    '<text x="315" y="140" class="s2">50회 초과: 50/관입량</text>' +
    '</svg>',
  heads: [
    { h: '판정 활용', k: ['사질토 [[상대밀도]]', '점성토 연경도', '지지층 판단'] },
    { h: '유의사항', k: ['예비 15cm 제외', '{{50회}} 초과 50/관입량', '슬라임 제거·자유낙하'] },
    { h: '개선방안', k: ['Auto-trip 해머', 'CPT 병행', '지반정보 DB'] }
  ],
  code: '“육삼오·칠육·삼십” (63.5kg·76cm·30cm) / 예비 15 제외 / 상한 50'
},
115: {
  one: '[[Boring]]·[[SPT]] 결과로 [[지층 구성]]·[[지하수위]]·N값·시료상태를 깊이별로 그린 지반조사 도서',
  flow: ['시추(Boring)', 'SPT·시료채취', '지하수위 측정', '주상도 작성'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="80" y="40" width="80" height="40" class="bx2"/><text x="120" y="65" text-anchor="middle" class="s2">매립토</text>' +
    '<rect x="80" y="80" width="80" height="60" class="soil"/><text x="120" y="125" text-anchor="middle" class="s2">점토</text>' +
    '<rect x="80" y="140" width="80" height="60" class="bx2"/><text x="120" y="175" text-anchor="middle" class="s2">모래</text>' +
    '<rect x="80" y="200" width="80" height="50" class="bx3"/><text x="120" y="230" text-anchor="middle" class="s2">풍화암</text>' +
    '<line x1="50" y1="100" x2="165" y2="100" class="bl dash"/><path d="M54,92 l12,0 l-6,8 z" class="bx2"/>' +
    '<text x="170" y="94" class="bl">지하수위</text>' +
    '<line x1="260" y1="40" x2="450" y2="40" class="ln"/><line x1="260" y1="40" x2="260" y2="250" class="ln"/>' +
    '<text x="355" y="30" text-anchor="middle" class="s2">N값 0 → 50</text>' +
    '<polyline points="268,60 275,100 280,140 320,170 380,210 440,240" fill="none" class="rd"/>' +
    '<text x="290" y="264" class="r">지지층 (N≥50)</text>' +
    '</svg>',
  heads: [
    { h: '확인항목', k: ['[[지층 구성]]·지지층', '[[지하수위]]·부력', 'N값·지지력'] },
    { h: '유의사항', k: ['시추공 사이는 추정', '우기 수위 재측정', '지지층 이하 시추'] },
    { h: '개선방안', k: ['물리탐사 병행', '3D 지반모델', '굴착 중 대조'] }
  ],
  code: '주상도 4확인 “층·수·N·시” (지층·지하수위·N값·시료)'
},
116: {
  one: '시추 코어 중 {{10cm 이상}} 조각 길이 합을 [[총 시추길이]]로 나눈 [[백분율]] — 절리 정도로 [[암반 분류]]',
  flow: ['NX 코어 시추', '10cm↑ 측정', '길이 합산', 'RQD 산정', '등급 판정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="100" width="80" height="30" class="bx"/><rect x="122" y="100" width="26" height="30" class="bx3"/><rect x="150" y="100" width="18" height="30" class="bx3"/>' +
    '<rect x="170" y="100" width="118" height="30" class="bx"/><rect x="290" y="100" width="28" height="30" class="bx3"/><rect x="320" y="100" width="120" height="30" class="bx"/>' +
    '<line x1="230" y1="98" x2="230" y2="84" class="ld"/><text x="230" y="76" text-anchor="middle" class="bl">10cm↑ 조각 합산</text>' +
    '<line x1="140" y1="132" x2="140" y2="146" class="ld"/><text x="140" y="160" text-anchor="middle" class="s2">짧은 조각 제외</text>' +
    '<text x="440" y="90" text-anchor="end" class="s2">NX 코어</text>' +
    '<line x1="40" y1="180" x2="440" y2="180" class="ln"/><line x1="40" y1="172" x2="40" y2="188" class="ln"/><line x1="440" y1="172" x2="440" y2="188" class="ln"/>' +
    '<text x="300" y="200" text-anchor="middle">총 시추길이 L</text>' +
    '<text x="240" y="232" text-anchor="middle" class="r">RQD = Σ(10cm↑) / L × 100</text>' +
    '<text x="240" y="262" text-anchor="middle" class="s2">75~90 양호 · 90↑ 매우양호</text>' +
    '</svg>',
  heads: [
    { h: '등급(Deere)', k: ['{{25·50·75·90}} 경계', '90↑ 매우 양호', '25↓ 매우 불량'] },
    { h: '유의사항', k: ['[[이중관]] NX 코어', '기계적 파손 포함', '연약 코어 제외'] },
    { h: '개선방안', k: ['BIPS 영상촬영', 'RMR·Q-system'] }
  ],
  code: 'RQD = 10cm↑ 합 / 총길이 · 등급 “이오·오공·칠오·구공”'
},
117: {
  one: '점성토가 [[함수비]]에 따라 고체 → 반고체 → 소성 → 액성으로 변하는 성질, 경계가 [[Atterberg 한계]]',
  flow: ['고체', '반고체', '소성', '액성'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="30" x2="60" y2="230" class="ln"/><line x1="60" y1="230" x2="455" y2="230" class="ln"/>' +
    '<line x1="150" y1="50" x2="150" y2="230" class="ln2 dash"/><line x1="250" y1="50" x2="250" y2="230" class="ln2 dash"/><line x1="360" y1="50" x2="360" y2="230" class="ln2 dash"/>' +
    '<polyline points="80,190 150,190 420,70" fill="none" class="bl"/>' +
    '<text x="105" y="40" text-anchor="middle">고체</text><text x="200" y="40" text-anchor="middle">반고체</text>' +
    '<text x="305" y="40" text-anchor="middle">소성</text><text x="410" y="40" text-anchor="middle">액성</text>' +
    '<text x="150" y="250" text-anchor="middle" class="r">SL</text><text x="250" y="250" text-anchor="middle" class="r">PL</text><text x="360" y="250" text-anchor="middle" class="r">LL</text>' +
    '<text x="305" y="272" text-anchor="middle" class="r">PI = LL − PL</text>' +
    '</svg>',
  heads: [
    { h: '연경도 지수', k: ['[[PI = LL − PL]]', 'SI = PL − SL', 'LI = (w−PL)/PI'] },
    { h: '유의사항', k: ['대표시료·교란 주의', 'PI 大 성토재 제한', 'LI≈1 예민 주의'] },
    { h: '개선방안', k: ['Fall Cone 병행', '소성도 USCS 분류', '압밀·전단 종합평가'] }
  ],
  code: '고·반·소·액 ↔ SL·PL·LL / “PI = 엘엘 − 피엘”'
},
118: {
  one: '흙이 [[전단파괴]]될 때의 최대 저항 = [[점착력(c)]] + 내부마찰(φ), [[Mohr-Coulomb]] {{τ = c + σ′tanφ}}',
  flow: ['외력', '전단응력 증가', '응력 > 저항', '전단파괴'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="30" x2="60" y2="240" class="ln"/><line x1="60" y1="240" x2="455" y2="240" class="ln"/>' +
    '<text x="48" y="36" text-anchor="end" class="s2">τ</text><text x="452" y="262" text-anchor="end" class="s2">σ′ (유효응력)</text>' +
    '<line x1="60" y1="180" x2="440" y2="50" class="rd"/>' +
    '<line x1="60" y1="180" x2="200" y2="180" class="ln2 dash"/><path d="M150,180 A90,90 0 0 0 146,151" fill="none" class="ln"/>' +
    '<text x="160" y="174" class="r">φ</text>' +
    '<text x="52" y="186" text-anchor="end" class="bl">c</text>' +
    '<path d="M132,240 A118,118 0 0 1 368,240" fill="none" class="ln"/>' +
    '<text x="250" y="225" text-anchor="middle" class="s2">Mohr 원 (파괴 시)</text>' +
    '<text x="300" y="40" class="r">τ = c + σ′tanφ</text>' +
    '<text x="330" y="118" class="s2">파괴포락선</text>' +
    '</svg>',
  heads: [
    { h: '흙 종류별', k: ['사질토 c = 0', '포화점토 φ = 0', '일반흙 c + φ'] },
    { h: '유의사항', k: ['수위↑ [[유효응력]]↓', '과재하·진동 금지', '교란 시 강도저하'] },
    { h: '개선방안', k: ['지반개량 c·φ↑', '간극수압·경사계', '사면안정 해석'] }
  ],
  code: '“타우 = 씨 + 시그마 탄파이” / 모래 c=0, 포화점토 φ=0'
},
119: {
  one: '흙 간극으로 물이 흐르는 정도, [[Darcy 법칙]] {{v = k·i}}의 비례상수 [[투수계수(k)]]로 표시',
  flow: ['수두차 Δh', '동수경사 i', '유속 v = k·i', '유량 Q = k·i·A'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="40" y="30" class="s2">k: 모래 大 · 점토 小</text>' +
    '<rect x="120" y="50" width="16" height="90" class="bx2"/><rect x="330" y="110" width="16" height="30" class="bx2"/>' +
    '<line x1="60" y1="140" x2="420" y2="140" class="ln"/><line x1="60" y1="190" x2="420" y2="190" class="ln"/>' +
    '<rect x="170" y="140" width="140" height="50" class="soil"/><text x="240" y="172" text-anchor="middle" class="t">흙 시료</text>' +
    '<line x1="136" y1="50" x2="400" y2="50" class="ln2 dash"/><line x1="346" y1="110" x2="400" y2="110" class="ln2 dash"/>' +
    '<line x1="390" y1="54" x2="390" y2="106" class="ar"/><text x="400" y="86" class="r">Δh</text>' +
    '<line x1="70" y1="165" x2="160" y2="165" class="ar"/><text x="70" y="215" class="bl">흐름 v</text>' +
    '<text x="240" y="222" text-anchor="middle" class="s2">시료 길이 L</text>' +
    '<text x="240" y="262" text-anchor="middle" class="r">v = k·i ,  i = Δh / L</text>' +
    '</svg>',
  heads: [
    { h: '영향요소', k: ['입경·간극비↑ → k↑', '점성↓(온도↑) → k↑', '수평 k > 연직 k'] },
    { h: '유의사항', k: ['현장 양수시험 보정', 'Boiling·Piping 검토', '과다양수 → 침하'] },
    { h: '개선방안', k: ['지하수 수치해석', 'Lugeon 재측정', '수위 실시간 계측'] }
  ],
  code: '“다르시 v = k·i” / k↑ = 입·간·포·밀↑, 점성↓ / 정수위 = 모래'
},
120: {
  one: '[[연약지반]]을 깊이 파낸 [[배토중량]]과 [[건물 하중]]을 평형시켜 [[순하중]]을 줄이는 보상기초 ({{q = γ·Df}})',
  flow: ['깊은 굴착', '배토중량 산정', '강성 Mat 타설', '하중 평형'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="30" y="90" width="420" height="170" class="soil"/><line x1="30" y1="90" x2="450" y2="90" class="ln"/>' +
    '<rect x="170" y="20" width="120" height="70" class="bx"/>' +
    '<rect x="160" y="90" width="140" height="80" class="bx2"/><text x="230" y="136" text-anchor="middle" class="t">지하층</text>' +
    '<rect x="155" y="170" width="150" height="12" class="conc"/>' +
    '<text x="40" y="50" class="b">건물 하중 q ↓</text>' +
    '<text x="40" y="130" class="bl">배토중량 γ·Df</text>' +
    '<line x1="330" y1="92" x2="330" y2="180" class="ar"/><text x="340" y="140" class="s2">Df (굴착깊이)</text>' +
    '<text x="315" y="198" class="s2">강성 Mat</text>' +
    '<text x="240" y="232" text-anchor="middle" class="r">q = γ·Df → 순하중 0</text>' +
    '<text x="440" y="250" text-anchor="end" class="s2">연약지반</text>' +
    '</svg>',
  heads: [
    { h: '종류', k: ['완전보상 q = γDf', '부분보상 q > γDf', '뗏목(Raft)기초'] },
    { h: '유의사항', k: ['단위중량·수위 정확히', '하중·도심 일치', 'Heaving·부력 검토'] },
    { h: '개선방안', k: ['Piled Raft 병용', '단계별 계측', 'Rock Anchor 부력대응'] }
  ],
  code: '“배토 = 건물 → 뜬다” / q_net = q − γDf / 완전·부분·뗏목'
},
121: {
  one: '거푸집·동바리에 작용하는 [[연직하중]](고정+작업 {{5.0kN/㎡↑}}), [[수평하중]], 콘크리트 [[측압]](W·H)',
  flow: ['하중 계산', '응력 계산', '단면·간격 결정', '안전성 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="40" y="30" class="r">연직 5.0kN/㎡↑</text>' +
    '<line x1="80" y1="40" x2="80" y2="86" class="ar"/><line x1="140" y1="40" x2="140" y2="86" class="ar"/><line x1="200" y1="40" x2="200" y2="86" class="ar"/>' +
    '<rect x="40" y="90" width="200" height="20" class="conc"/>' +
    '<text x="250" y="104" class="s2">고정 + 작업하중</text>' +
    '<line x1="70" y1="110" x2="70" y2="240" class="ln"/><line x1="140" y1="110" x2="140" y2="240" class="ln"/><line x1="210" y1="110" x2="210" y2="240" class="ln"/>' +
    '<text x="105" y="180" text-anchor="middle" class="s2">동바리</text>' +
    '<line x1="20" y1="170" x2="66" y2="170" class="ar"/><text x="20" y="160" class="bl">수평</text>' +
    '<line x1="30" y1="240" x2="460" y2="240" class="ln"/>' +
    '<rect x="380" y="60" width="40" height="180" class="conc"/>' +
    '<path d="M420,60 L470,240 L420,240 z" class="bx2"/>' +
    '<text x="470" y="48" text-anchor="end" class="r">측압 p = W·H</text>' +
    '<text x="400" y="262" text-anchor="middle" class="s2">벽 거푸집</text>' +
    '</svg>',
  heads: [
    { h: '하중 기준', k: ['고정 RC {{24kN/㎥}}', '작업 {{2.5kN/㎡}}↑', '측압 p = W·H'] },
    { h: '유의사항', k: ['편심·몰림 타설 금지', '수평연결재·가새', '5m↑ 구조검토'] },
    { h: '개선방안', k: ['System Support', 'BIM 가설구조', '타설 중 변위계측'] }
  ],
  code: '고(24·0.4)+작(2.5)=연직 5.0 / 측압 WH → “부슬타다 습기 응수철”'
},
122: {
  one: '보·Slab의 [[처짐]]을 예상해 미리 위로 치켜올리는 [[상향 솟음]], 크기는 Span의 {{l/300~l/500}}',
  flow: ['처짐 예측', '역방향 솟음', '타설·재하', '설계 Level'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="240" y="46" text-anchor="middle" class="b">자중 + 타설하중</text>' +
    '<line x1="150" y1="60" x2="150" y2="146" class="ar"/><line x1="240" y1="60" x2="240" y2="138" class="ar"/><line x1="330" y1="60" x2="330" y2="146" class="ar"/>' +
    '<path d="M60,180 Q240,110 420,180" fill="none" class="bl"/>' +
    '<line x1="60" y1="180" x2="420" y2="180" class="ln2 dash"/>' +
    '<path d="M60,180 l-12,16 l24,0 z" class="bx2"/><path d="M420,180 l-12,16 l24,0 z" class="bx2"/>' +
    '<text x="250" y="168" class="r">솟음</text>' +
    '<text x="420" y="212" text-anchor="end" class="s2">타설 후 = 설계 Level</text>' +
    '<text x="240" y="234" text-anchor="middle" class="s2">Span l</text>' +
    '<text x="240" y="262" text-anchor="middle" class="r">Camber = l/300 ~ l/500</text>' +
    '</svg>',
  heads: [
    { h: '제작방법', k: ['강재 [[냉간가공]]', '강재 열간가공', 'RC Support 높이조절'] },
    { h: '유의사항', k: ['Creep 장기처짐', '이음위치 고려', '과다 시 두께부족'] },
    { h: '개선방안', k: ['BIM 처짐 예측', '공장 가공 검측', 'Level 계측 피드백'] }
  ],
  code: '처짐 반대로 “솟음” / l/300~500 / 냉·열·서(Support)'
},
123: {
  one: '콘크리트가 소요강도에 이를 때까지 거푸집을 두는 기간 — [[측면]] {{5MPa}}↑, [[밑면]] 2/3 fck·{{14MPa}}↑',
  flow: ['강도 확인', '측면 해체', '밑면 해체', '동바리 해체'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="60" y1="30" x2="60" y2="240" class="ln"/><line x1="60" y1="240" x2="455" y2="240" class="ln"/>' +
    '<text x="66" y="26" class="s2">강도</text><text x="452" y="262" text-anchor="end" class="s2">재령 →</text>' +
    '<line x1="60" y1="200" x2="450" y2="200" class="ln2 dash"/><line x1="60" y1="110" x2="450" y2="110" class="ln2 dash"/>' +
    '<path d="M60,240 C120,120 220,70 440,50" fill="none" class="bl"/>' +
    '<circle cx="84" cy="200" r="5" class="rf"/><circle cx="186" cy="110" r="5" class="rf"/>' +
    '<text x="450" y="194" text-anchor="end" class="r">측면 5MPa</text>' +
    '<text x="450" y="130" text-anchor="end" class="r">밑면 2/3 fck (14MPa↑)</text>' +
    '<text x="150" y="262" text-anchor="middle" class="bl">측면 → 밑면 → 동바리</text>' +
    '</svg>',
  heads: [
    { h: '해체 기준', k: ['측면 {{5MPa↑}}', '밑면 {{2/3 fck}}', '최소 {{14MPa}}'] },
    { h: '유의사항', k: ['[[설치 역순]] 해체', '진동·충격 금지', '직상층 과적재 금지'] },
    { h: '개선방안', k: ['Maturity 강도추정', 'Drop Head 조기전용', '조강·고온 양생'] }
  ],
  code: '“부재측면 5MPa, 밑면은 2/3 다만 14”'
},
124: {
  one: '[[Filler 처리]]는 동바리를 남기고 판넬만 해체, [[Reshoring]]은 해체 후 재설치 — 원칙 금지·감독자 승인',
  flow: ['감독자 승인', '1구획씩 해체', '동일위치 재설치', '밀착·연직 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="125" y="40" text-anchor="middle" class="g">Filler: 동바리 존치</text>' +
    '<rect x="30" y="60" width="190" height="16" class="conc"/>' +
    '<line x1="60" y1="76" x2="60" y2="215" class="ln"/><line x1="125" y1="86" x2="125" y2="215" class="ln"/><line x1="190" y1="76" x2="190" y2="215" class="ln"/>' +
    '<rect x="117" y="76" width="16" height="10" class="bx3"/>' +
    '<text x="240" y="150" text-anchor="middle" class="t">VS</text>' +
    '<text x="355" y="40" text-anchor="middle" class="r">Reshoring (원칙 금지)</text>' +
    '<rect x="260" y="60" width="190" height="16" class="conc"/>' +
    '<rect x="280" y="76" width="20" height="6" class="bx3"/><rect x="345" y="76" width="20" height="6" class="bx3"/><rect x="410" y="76" width="20" height="6" class="bx3"/>' +
    '<line x1="290" y1="82" x2="290" y2="215" class="rd"/><line x1="355" y1="82" x2="355" y2="215" class="rd"/><line x1="420" y1="82" x2="420" y2="215" class="rd"/>' +
    '<line x1="20" y1="215" x2="460" y2="215" class="ln"/>' +
    '<text x="125" y="240" text-anchor="middle" class="s2">판넬만 해체</text><text x="125" y="262" text-anchor="middle" class="s2">조기 전용·안전</text>' +
    '<text x="355" y="240" text-anchor="middle" class="s2">해체 → 재설치 · 동일위치</text><text x="355" y="262" text-anchor="middle" class="s2">3개층↑ 지지</text>' +
    '</svg>',
  heads: [
    { h: '바꾸어 세우기 기준', k: ['강도 {{2/3 fck}}↑ 후', '받침판 {{300mm↑}}', '큰 보 금지'] },
    { h: '유의사항', k: ['[[최소 3개층]] 지지', '상·하층 동일위치', '순차 해체'] },
    { h: '개선방안', k: ['Drop Head System', 'Filler 처리 우선'] }
  ],
  code: 'Reshoring “원칙X·승인·큰보X·300·3개층·동일” / Filler = 남기고 판넬만'
},
125: {
  one: '[[건조수축]]·[[온도변화]] 균열을 분산하려고 [[1방향 슬래브]]의 [[주근 직각방향]]으로 넣는 보조철근',
  flow: ['수축·온도변화', '구속 인장응력', '균열 발생', '철근이 분산'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="60" y="34" class="b">주근 (단변방향)</text><text x="420" y="34" text-anchor="end" class="bl">수축·온도철근 ⊥</text>' +
    '<rect x="60" y="50" width="360" height="180" class="bx"/>' +
    '<line x1="90" y1="55" x2="90" y2="225" class="ln"/><line x1="130" y1="55" x2="130" y2="225" class="ln"/><line x1="170" y1="55" x2="170" y2="225" class="ln"/><line x1="210" y1="55" x2="210" y2="225" class="ln"/>' +
    '<line x1="250" y1="55" x2="250" y2="225" class="ln"/><line x1="290" y1="55" x2="290" y2="225" class="ln"/><line x1="330" y1="55" x2="330" y2="225" class="ln"/><line x1="370" y1="55" x2="370" y2="225" class="ln"/>' +
    '<line x1="65" y1="90" x2="415" y2="90" class="bl"/><line x1="65" y1="140" x2="415" y2="140" class="bl"/><line x1="65" y1="190" x2="415" y2="190" class="bl"/>' +
    '<text x="60" y="255" class="r">ρ ≥ 0.0020</text><text x="420" y="255" text-anchor="end" class="r">간격 5h · 450mm 이하</text>' +
    '<text x="240" y="272" text-anchor="middle" class="s2">1방향 슬래브</text>' +
    '</svg>',
  heads: [
    { h: '배근기준', k: ['철근비 {{0.0020}}↑', '간격 {{5h·450mm}}↓', '상한 1,800㎟/m'] },
    { h: '유의사항', k: ['간격·피복 유지', '이음 엇갈림', '습윤양생'] },
    { h: '개선방안', k: ['균열유발줄눈', '섬유보강', '저수축 배합'] }
  ],
  code: '수·온 = 주근 ⊥ / 0.0020 / 5h·450 / 1,800㎟'
},
126: {
  one: 'Mat기초 [[시공이음]]에 묻는 [[원형강봉]] — 한쪽 고정·한쪽 [[부착방지 도포]]로 신축 허용, [[전단력 전달]]',
  flow: ['1차측 고정', '관통부 막음', '1차 타설', '도포·Cap', '2차 타설'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="135" y="60" text-anchor="middle" class="b">1차 타설 (고정)</text><text x="340" y="60" text-anchor="middle" class="b">2차 타설 (도포)</text>' +
    '<rect x="40" y="80" width="195" height="110" class="conc"/><rect x="235" y="80" width="205" height="110" class="conc"/>' +
    '<line x1="235" y1="70" x2="235" y2="200" class="rd dash"/>' +
    '<rect x="120" y="130" width="115" height="10" class="bx3"/><rect x="235" y="130" width="115" height="10" class="bx2"/>' +
    '<rect x="350" y="126" width="20" height="18" class="bx"/>' +
    '<text x="290" y="118" text-anchor="middle" class="bl">Grease 도포</text>' +
    '<text x="375" y="162" class="s2">Dowel Cap</text>' +
    '<text x="380" y="214" text-anchor="middle" class="s2">Dowel bar (원형강봉)</text>' +
    '<text x="40" y="252" class="g">수평·직각 고정</text>' +
    '<text x="235" y="222" text-anchor="middle" class="r">시공이음</text>' +
    '</svg>',
  heads: [
    { h: '역할', k: ['[[전단력 전달]]', '지압파괴 방지', '[[부등침하 단차]] 방지'] },
    { h: '유의사항', k: ['수평·직각 고정', '관통부 막음', '도포 상태 검사'] },
    { h: '개선방안', k: ['Dowel Basket', '에폭시·스테인리스', 'Template 위치고정'] }
  ],
  code: '“고정·막음·도포·수평” — 한쪽 고정, 한쪽 미끄럼(도포+Cap)'
},
127: {
  one: '[[탄산화]]·[[염화물]]로 [[부동태막]]이 깨져 녹이 생기고 약 {{2.5배}} 팽창 → 균열·박리, [[가벼운 녹]]만 허용',
  flow: ['CO₂·Cl⁻ 침투', '부동태막 파괴', '녹 생성', '체적팽창', '균열·박리'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="140" y="22" text-anchor="middle" class="bl">CO₂ · Cl⁻ 침투</text>' +
    '<line x1="110" y1="30" x2="110" y2="90" class="ar"/><line x1="170" y1="30" x2="170" y2="90" class="ar"/>' +
    '<rect x="40" y="60" width="400" height="160" class="conc"/>' +
    '<circle cx="150" cy="110" r="14" class="bf"/>' +
    '<line x1="200" y1="62" x2="200" y2="94" class="ar"/><text x="208" y="84" class="s2">피복두께</text>' +
    '<text x="150" y="150" text-anchor="middle" class="bl">부동태막 파괴</text>' +
    '<circle cx="330" cy="110" r="18" class="rf"/><polyline points="330,92 322,76 334,60" fill="none" class="rd"/>' +
    '<text x="370" y="44" class="r">균열·박리</text>' +
    '<text x="330" y="160" text-anchor="middle" class="r">녹 체적팽창 2.5배</text>' +
    '<text x="240" y="250" text-anchor="middle" class="r">염화물 0.30kg/㎥ 이하</text>' +
    '<text x="240" y="272" text-anchor="middle" class="g">가벼운 녹 O · 들뜬 녹 X</text>' +
    '</svg>',
  heads: [
    { h: '허용치', k: ['[[가벼운 녹]] O', '[[들뜬 녹]] X·제거', '염화물 {{0.30kg/㎥}}↓'] },
    { h: '방지대책', k: ['[[피복두께]] 확보', 'W/B↓ 밀실다짐', '보관 고임재·덮개'] },
    { h: '유지관리', k: ['탄산화 깊이 측정', '염해환경 피복상향', 'FRP·스테인리스근'] }
  ],
  code: '허용 “가벼운 녹 O · 들뜬 녹 X” / 염 0.30 / 대책 “설·시·방”'
},
128: {
  one: '철근과 콘크리트 경계에서 [[미끄러짐]]에 저항해 일체로 거동하게 하는 성능 — [[교착]]·[[마찰]]·[[맞물림]]',
  flow: ['교착(초기)', '마찰', '마디 맞물림', '일체 거동'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="120" y="70" width="180" height="140" class="conc"/>' +
    '<text x="210" y="95" text-anchor="middle" class="s2">콘크리트</text>' +
    '<rect x="150" y="132" width="250" height="16" class="bx3"/>' +
    '<line x1="170" y1="128" x2="170" y2="152" class="ln"/><line x1="200" y1="128" x2="200" y2="152" class="ln"/><line x1="230" y1="128" x2="230" y2="152" class="ln"/><line x1="260" y1="128" x2="260" y2="152" class="ln"/>' +
    '<line x1="400" y1="140" x2="460" y2="140" class="ar"/><text x="460" y="126" text-anchor="end" class="r">인발 P</text>' +
    '<line x1="285" y1="128" x2="310" y2="105" class="ld"/><text x="310" y="100" class="r">이형 마디 = 맞물림</text>' +
    '<text x="225" y="196" text-anchor="middle" class="s2">정착길이</text>' +
    '<text x="210" y="240" text-anchor="middle" class="bl">교착 → 마찰 → 맞물림</text>' +
    '<text x="210" y="266" text-anchor="middle" class="g">피복두께↑ · fck↑</text>' +
    '</svg>',
  heads: [
    { h: '영향요인', k: ['fck↑·W/B↓', '[[이형철근]]·가벼운 녹', '피복·순간격 확보'] },
    { h: '유의사항', k: ['들뜬녹·기름 제거', '진동다짐 철저', '블리딩 저감'] },
    { h: '개선방안', k: ['에폭시철근 정착할증', 'Head bar 기계정착'] }
  ],
  code: '“교·마·기” / 재료 “강·표·경” · 시공 “피·정·다”'
},
129: {
  one: '[[최외측 철근]](늑근) 표면에서 콘크리트 표면까지의 최단거리 — [[부착]]·[[내구성]]·[[내화성]] 확보',
  flow: ['노출환경 확인', '최소 피복 결정', '간격재 설치', '타설 전 검측'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="240" y="26" text-anchor="middle" class="g">부착 · 내구 · 내화</text>' +
    '<rect x="140" y="40" width="200" height="200" class="conc"/>' +
    '<rect x="170" y="70" width="140" height="140" fill="none" class="ln"/>' +
    '<circle cx="186" cy="194" r="9" class="bf"/><circle cx="240" cy="194" r="9" class="bf"/><circle cx="294" cy="194" r="9" class="bf"/>' +
    '<circle cx="186" cy="86" r="9" class="bf"/><circle cx="294" cy="86" r="9" class="bf"/>' +
    '<text x="240" y="178" text-anchor="middle" class="s2">주근</text>' +
    '<line x1="310" y1="210" x2="362" y2="210" class="ln2 dash"/><line x1="340" y1="240" x2="362" y2="240" class="ln2"/>' +
    '<line x1="355" y1="210" x2="355" y2="240" class="rd"/><text x="366" y="230" class="r">피복두께</text>' +
    '<line x1="170" y1="140" x2="120" y2="140" class="ld"/><text x="115" y="145" text-anchor="end" class="bl">늑근 기준</text>' +
    '<text x="40" y="264" class="s2">수중 100 · 흙 75</text><text x="440" y="264" text-anchor="end" class="s2">실내 슬래브 20</text>' +
    '</svg>',
  heads: [
    { h: '최소 피복(mm)', k: ['수중 {{100}}·흙 {{75}}', '노출 D19↑ 50·D16↓ 40', '실내 슬래브 {{20}}'] },
    { h: '유의사항', k: ['간격재(Spacer) 규격품', '최외측 철근 기준', '허용오차 ±10·±13mm'] },
    { h: '개선방안', k: ['노출등급 피복할증', '철근탐사기 검측', 'BIM 배근상세'] }
  ],
  code: '수중100·흙지75 / “노출 19세↑50·16세↓40” / 실내 20'
},
130: {
  one: '시멘트 입자의 고운 정도를 [[비표면적]](cm²/g)으로 표시 — 클수록 [[조기강도]]↑, [[수화열]]·[[건조수축]]↑',
  flow: ['시료 충전', '공기 흡인', '하강시간 T', '비표면적 산정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="185" y="30" width="30" height="40" class="bx3"/>' +
    '<text x="175" y="50" text-anchor="end" class="b">시멘트 시료 (셀)</text>' +
    '<path d="M200,70 L200,220 Q220,245 240,220 L240,90" fill="none" class="ln"/>' +
    '<line x1="232" y1="130" x2="248" y2="130" class="rd"/><line x1="232" y1="180" x2="248" y2="180" class="rd"/>' +
    '<text x="175" y="110" text-anchor="end" class="bl">공기 투과</text>' +
    '<text x="260" y="158" class="r">액면 하강시간 T</text>' +
    '<text x="290" y="60" class="t">비표면적 cm²/g</text>' +
    '<text x="290" y="100" class="g">분말도↑ → 수화열·수축↑</text>' +
    '<text x="240" y="262" text-anchor="middle" class="r">보통 2,800↑ · 조강 3,300↑</text>' +
    '</svg>',
  heads: [
    { h: '분말도 大', k: ['[[조기강도]]↑', '수화열·건조수축↑', '[[풍화]] 쉬움'] },
    { h: '품질관리', k: ['방습저장 {{13포대}}↓', '3개월↑ 재시험', '매스콘 중용열 선정'] },
    { h: '개선방안', k: ['분급기 입도관리', 'FA·슬래그 치환', '레이저 입도분석'] }
  ],
  code: '분大 → 수·조·열·축·풍↑ “수조 열축풍” / 보통 2800 · 조강 3300'
},
131: {
  one: '시멘트를 {{975±25℃}}로 [[15분 강열]]해 [[항량]]일 때 줄어든 질량 % — [[풍화]] 정도 판단 지표',
  flow: ['시료 1g 칭량', '975℃ 15분 강열', '데시케이터 냉각', '항량까지 반복', '감량률 산정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<path d="M390,100 Q250,30 100,75" fill="none" class="bl dash"/>' +
    '<text x="245" y="40" text-anchor="middle" class="bl">항량까지 반복 (0.5mg↓)</text>' +
    '<rect x="30" y="80" width="120" height="110" class="bx"/><text x="90" y="110" text-anchor="middle" class="t">전기로</text>' +
    '<path d="M70,150 l40,0 l-6,24 l-28,0 z" class="bx3"/>' +
    '<line x1="155" y1="135" x2="195" y2="135" class="ar"/>' +
    '<rect x="200" y="100" width="90" height="90" class="bx2"/>' +
    '<line x1="295" y1="135" x2="335" y2="135" class="ar"/>' +
    '<line x1="360" y1="140" x2="420" y2="140" class="ln"/><rect x="340" y="150" width="100" height="40" class="bx"/>' +
    '<text x="90" y="210" text-anchor="middle" class="r">975±25℃</text><text x="90" y="232" text-anchor="middle" class="s2">15분 강열</text>' +
    '<text x="245" y="210" text-anchor="middle" class="s2">데시케이터 냉각</text>' +
    '<text x="390" y="210" text-anchor="middle" class="s2">질량 측정</text>' +
    '<text x="240" y="262" text-anchor="middle" class="r">(W1 − W2) / W1 × 100 [%]</text>' +
    '</svg>',
  heads: [
    { h: '기준', k: ['포틀랜드 {{5.0%↓}}', '고로슬래그 3%↓', '플라이애시 3·5%↓'] },
    { h: '유의사항', k: ['0.1mg 정확 칭량', '[[데시케이터]] 냉각', '초과 시 사용금지'] },
    { h: '개선방안', k: ['Silo 밀폐 저장', 'Lot별 성적서', '장기저장 정기시험'] }
  ],
  code: '구·칠·오(975) 십오분 반복 → 항량 / 포틀랜드 5%↓'
},
132: {
  one: '구조설계 [[fck]] → 내구성 비교 [[fcq]] → 기온보정 더한 주문강도 [[fcn]] → 편차 할증한 목표 [[fcr]]',
  flow: ['fck·fcd', 'fcq = max', 'fcn = fcq+Tn', 'fcr = fcn+할증'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="40" y1="240" x2="450" y2="240" class="ln"/>' +
    '<rect x="60" y="170" width="70" height="70" class="bx2"/><rect x="160" y="160" width="70" height="80" class="bx2"/>' +
    '<rect x="260" y="130" width="70" height="110" class="bx"/><rect x="360" y="80" width="70" height="160" class="bx3"/>' +
    '<text x="195" y="150" text-anchor="middle" class="s2">max(fck,fcd)</text>' +
    '<text x="295" y="120" text-anchor="middle" class="bl">+ Tn (기온)</text>' +
    '<text x="395" y="70" text-anchor="middle" class="r">+ 1.34s / 2.33s</text>' +
    '<text x="95" y="262" text-anchor="middle" class="s2">설계 fck</text><text x="195" y="262" text-anchor="middle" class="s2">품질 fcq</text>' +
    '<text x="295" y="262" text-anchor="middle" class="s2">호칭 fcn</text><text x="395" y="262" text-anchor="middle" class="s2">배합 fcr</text>' +
    '</svg>',
  heads: [
    { h: '산정식', k: ['fcq = max(fck,fcd)', 'fcn = fcq + Tn', 'fcr = fcn + {{1.34s}}'] },
    { h: '관리기준', k: ['재령 {{28일}} 표준양생', '{{120m³}}마다 1회', '3개 평균 판정'] },
    { h: '유의·개선', k: ['동절기 Tn 반영', '표준편차 실적관리', '적산온도 강도예측'] }
  ],
  code: '설(fck)·내(fcd) → 품(fcq) → 호(+Tn) → 배(+1.34s/2.33s) “설내품호배”'
}
});
