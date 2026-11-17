// 간단 요약(SP) — 디테일원 용어250 그룹 k (228~250), 근거: data/dw_k.js
window.SP = window.SP || { w: {}, d: {} };
Object.assign(window.SP.d, {
228: {
  one: '[[공사수행능력]]·[[입찰금액]]·[[사회적 책임]]을 종합 심사해 최고점자를 낙찰 (추정가격 {{100억원↑}})',
  flow: ['입찰공고', '종합심사', '가점·감점', '최고점 낙찰'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="40" width="140" height="60" class="bx"/><text x="90" y="66" text-anchor="middle" class="b">공사수행능력</text><text x="90" y="88" text-anchor="middle" class="r">40~50점</text>' +
    '<rect x="170" y="40" width="140" height="60" class="bx2"/><text x="240" y="66" text-anchor="middle" class="b">입찰금액</text><text x="240" y="88" text-anchor="middle" class="r">50~60점</text>' +
    '<rect x="320" y="40" width="140" height="60" class="bx3"/><text x="390" y="66" text-anchor="middle" class="b">사회적 책임</text><text x="390" y="88" text-anchor="middle" class="s2">가점·감점</text>' +
    '<line x1="90" y1="100" x2="190" y2="148" class="ar"/><line x1="240" y1="100" x2="240" y2="148" class="ar"/><line x1="390" y1="100" x2="290" y2="148" class="ar"/>' +
    '<rect x="130" y="150" width="220" height="50" class="bx2"/><text x="240" y="181" text-anchor="middle" class="t">종합점수 최고점 낙찰</text>' +
    '<text x="240" y="245" text-anchor="middle" class="r">대상 : 추정가격 100억원↑ 공공공사</text>' +
    '</svg>',
  heads: [
    { h: '심사항목', k: ['수행능력 {{40~50점}}', '입찰금액 {{50~60점}}', '사회적책임 가점'] },
    { h: '문제점(유의사항)', k: ['[[단가심사]] 덤핑 차단', '변별력 부족·운찰제', '실적 위주 신규 불리'] },
    { h: '개선방안', k: ['기술변별력 강화', '적정공사비 보장', '공종별 심사 세분화'] }
  ],
  code: '종심 = 수·금·사 (수행능력·입찰금액·사회책임) / 100억↑'
},
229: {
  one: '업체의 [[공사실적]]·[[경영]]·[[기술능력]]·[[신인도]]를 금액으로 평가해 매년 {{7월 31일}} 공시',
  flow: ['자료 신고', '4항목 평가', '합산', '7.31 공시'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="140" y="24" width="200" height="40" class="bx2"/><text x="240" y="50" text-anchor="middle" class="t">시공능력평가액</text>' +
    '<line x1="240" y1="64" x2="240" y2="84" class="ln2"/><line x1="67" y1="84" x2="412" y2="84" class="ln2"/>' +
    '<line x1="67" y1="84" x2="67" y2="100" class="ln2"/><line x1="182" y1="84" x2="182" y2="100" class="ln2"/><line x1="297" y1="84" x2="297" y2="100" class="ln2"/><line x1="412" y1="84" x2="412" y2="100" class="ln2"/>' +
    '<rect x="15" y="100" width="105" height="60" class="bx"/><text x="67" y="126" text-anchor="middle" class="b">공사실적</text><text x="67" y="148" text-anchor="middle" class="s2">최근 3년</text>' +
    '<rect x="130" y="100" width="105" height="60" class="bx"/><text x="182" y="126" text-anchor="middle" class="b">경영</text>' +
    '<rect x="245" y="100" width="105" height="60" class="bx"/><text x="297" y="126" text-anchor="middle" class="b">기술능력</text>' +
    '<rect x="360" y="100" width="105" height="60" class="bx"/><text x="412" y="126" text-anchor="middle" class="b">신인도</text>' +
    '<line x1="30" y1="215" x2="455" y2="215" class="ar"/><line x1="240" y1="208" x2="240" y2="222" class="ln2"/>' +
    '<text x="240" y="200" text-anchor="middle" class="r">매년 7.31 공시</text>' +
    '<text x="240" y="252" text-anchor="middle" class="bl">도급하한·PQ·입찰자격</text>' +
    '</svg>',
  heads: [
    { h: '평가항목', k: ['[[공사실적]] 3년 평균', '[[경영평가]]', '[[기술능력]]·[[신인도]]'] },
    { h: '문제점(유의사항)', k: ['실적 허위신고 방지', '대형사 편중', '안전·품질 반영 미흡'] },
    { h: '개선방안', k: ['기술·안전 비중↑', '공종별 세분 평가', '페이퍼컴퍼니 단속'] }
  ],
  code: '시평 = 실·경·기·신 / 7.31 공시 → 도급하한·PQ'
},
230: {
  one: '착공 전 [[설계도서]]·[[입지]]·[[지반]]·공해·기상·법규를 조사해 [[공법선정]]·시공계획에 반영',
  flow: ['도서·계약 검토', '현장답사', '지반조사', '법규·기상', '계획 반영'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="30" y="40" class="b">기상·공해·법규</text>' +
    '<rect x="330" y="26" width="130" height="40" class="bx2"/><text x="395" y="51" text-anchor="middle" class="b">설계도서·계약</text>' +
    '<rect x="30" y="90" width="70" height="90" class="bx"/><text x="65" y="80" text-anchor="middle" class="b">인접건물</text>' +
    '<rect x="140" y="110" width="170" height="70" class="bx3 dash"/><text x="225" y="150" text-anchor="middle" class="t">신축 부지</text>' +
    '<line x1="20" y1="180" x2="460" y2="180" class="ln"/><rect x="20" y="180" width="440" height="90" class="soil"/>' +
    '<line x1="225" y1="180" x2="225" y2="262" class="rd dash"/><text x="232" y="250" class="r">시추(지반)</text>' +
    '<line x1="20" y1="215" x2="300" y2="215" class="bl dash"/><text x="30" y="208" class="bl">▽ 지하수위</text>' +
    '<circle cx="370" cy="205" r="8" class="ln"/><circle cx="395" cy="205" r="8" class="ln"/><text x="410" y="210" class="b">매설물</text>' +
    '</svg>',
  heads: [
    { h: '조사항목', k: ['[[설계도서]]·[[계약조건]]', '[[입지]]·[[지반조사]]', '공해·기상·법규'] },
    { h: '유의사항', k: ['인접건물 사진 기록', '지하매설물 확인', '지하수위·투수 확인'] },
    { h: '개선방안', k: ['드론·3D 스캔', 'GIS·지하정보 연계'] }
  ],
  code: '설계입지는 공기관에서 조사 (설·계·입·지·공·기·관)'
},
231: {
  one: '[[준비]]+[[작업일수]]+[[비작업일수]]+[[정리기간]]으로 공기를 산정하고 [[공사가동률]] 적용',
  flow: ['WBS 작성', '작업일수', '비작업일 반영', '가동률 적용', '공기 확정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="240" y="36" text-anchor="middle" class="t">공사기간</text>' +
    '<rect x="20" y="50" width="70" height="44" class="bx3"/><text x="55" y="78" text-anchor="middle" class="b">준비</text>' +
    '<rect x="90" y="50" width="220" height="44" class="bx"/><text x="200" y="78" text-anchor="middle" class="b">작업일수</text>' +
    '<rect x="310" y="50" width="90" height="44" class="bx2"/><text x="355" y="78" text-anchor="middle" class="b">비작업일</text>' +
    '<rect x="400" y="50" width="60" height="44" class="bx3"/><text x="430" y="78" text-anchor="middle" class="b">정리</text>' +
    '<rect x="40" y="130" width="400" height="56" class="bx2"/><text x="240" y="164" text-anchor="middle" class="t">가동률 = 작업가능일 / 역일수</text>' +
    '<text x="240" y="222" text-anchor="middle" class="b">비작업일 = 휴일 + 기상 − 중복</text>' +
    '<text x="240" y="256" text-anchor="middle" class="r">소요공기 = 작업일수 ÷ 가동률</text>' +
    '</svg>',
  heads: [
    { h: '산정기준', k: ['준비·정리기간 반영', '비작업일=휴일+기상', '[[공사가동률]]=작업일/역일'] },
    { h: '유의사항', k: ['동절기·장마 반영', '[[중복일 제외]]', '돌관 → 품질 저하'] },
    { h: '개선방안', k: ['기상 빅데이터', '공기 산정기준 준수'] }
  ],
  code: '준·작·비·정 + 가동률(작업일/역일)'
},
232: {
  one: '[[반복작업]]을 층-시간 도표에 직선으로 그려 [[생산속도(기울기)]]·[[Buffer]]로 간섭 관리',
  flow: ['반복단위 설정', '생산속도 산정', '선 작도', 'Buffer 확보', '기울기 조정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="250" x2="50" y2="20" class="ar"/><line x1="50" y1="250" x2="460" y2="250" class="ar"/>' +
    '<text x="58" y="28" class="s2">층</text><text x="455" y="272" text-anchor="end" class="s2">시간</text>' +
    '<line x1="60" y1="250" x2="200" y2="40" class="bl"/><text x="206" y="44" class="b">골조</text>' +
    '<line x1="120" y1="250" x2="270" y2="40" class="rd"/><text x="276" y="44" class="b">설비</text>' +
    '<line x1="200" y1="250" x2="400" y2="70" class="gr"/><text x="406" y="74" class="b">마감</text>' +
    '<line x1="127" y1="150" x2="191" y2="150" class="ln2"/><circle cx="127" cy="150" r="3" class="dotf"/><circle cx="191" cy="150" r="3" class="dotf"/>' +
    '<text x="159" y="172" text-anchor="middle" class="r">Buffer</text>' +
    '<text x="250" y="232" class="r">기울기 = 생산속도</text>' +
    '<text x="330" y="190" class="bl">선 교차 = 간섭</text>' +
    '</svg>',
  heads: [
    { h: '구성요소', k: ['기울기=[[생산속도]]', '[[Buffer]] 간섭 방지', 'LSM 위치-시간'] },
    { h: '유의사항', k: ['선행지연 → 후속 전파', '선 교차 = [[작업간섭]]', '작업조 대기·유휴'] },
    { h: '개선방안', k: ['기울기 평준화', 'Tact·BIM 4D 연계'] }
  ],
  code: 'LOB = 기울기·Buffer·간섭 / LSM = 위치(km)-시간'
},
235: {
  one: '[[CP 작업]] 중 [[비용구배]] 최소 작업부터 단축해 [[총공사비 최소]]의 [[최적공기]]를 찾는 기법',
  flow: ['표준·특급 산정', '비용구배 계산', '최소구배 단축', '새 CP 확인', '반복'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="240" x2="50" y2="20" class="ar"/><line x1="50" y1="240" x2="460" y2="240" class="ar"/>' +
    '<text x="58" y="30" class="s2">비용</text><text x="455" y="262" text-anchor="end" class="s2">공기</text>' +
    '<path d="M80,40 Q240,280 430,60" fill="none" class="rd"/><text x="300" y="60" class="r">총공사비</text>' +
    '<path d="M80,60 Q150,210 430,225" fill="none" class="bl"/><text x="380" y="210" class="bl">직접비</text>' +
    '<line x1="80" y1="230" x2="430" y2="120" class="gr"/><text x="400" y="152" class="g">간접비</text>' +
    '<circle cx="248" cy="165" r="5" class="rf"/><line x1="248" y1="165" x2="248" y2="240" class="ln2 dash"/><text x="248" y="258" text-anchor="middle" class="r">최적공기</text>' +
    '<circle cx="80" cy="60" r="4" class="bf"/><text x="90" y="56" class="s2">특급점</text>' +
    '</svg>',
  heads: [
    { h: '원리', k: ['총공사비 최소=[[최적공기]]', '[[비용구배]] 최소부터', '[[CP 작업]]만 단축'] },
    { h: '유의사항', k: ['[[특급점]] 이상 불가', '새 CP 발생 확인', '간접비 증가 검토'] },
    { h: '개선방안', k: ['반복 단축→최적점', '공정 S/W·EVMS'] }
  ],
  code: 'MCX = C·구·반 (CP·구배최소·반복)'
},
236: {
  one: '설계변경·부지인도 지연 등 [[발주자 귀책]]으로 [[공기연장]]과 [[비용보상]]이 모두 인정되는 지연',
  flow: ['지연 발생', '서면 통지', 'CP 영향 분석', '연장·비용 청구'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="170" y="18" width="140" height="34" class="bx"/><text x="240" y="41" text-anchor="middle" class="t">공기지연</text>' +
    '<line x1="240" y1="52" x2="240" y2="70" class="ln2"/><line x1="130" y1="70" x2="375" y2="70" class="ln2"/><line x1="130" y1="70" x2="130" y2="90" class="ln2"/><line x1="375" y1="70" x2="375" y2="90" class="ln2"/>' +
    '<rect x="40" y="90" width="180" height="36" class="bx"/><text x="130" y="114" text-anchor="middle" class="b">수용가능지연</text>' +
    '<rect x="290" y="90" width="170" height="36" class="bx3"/><text x="375" y="114" text-anchor="middle" class="b">수용불가지연</text>' +
    '<text x="375" y="150" text-anchor="middle" class="s2">시공자 귀책 → 지체상금</text>' +
    '<line x1="130" y1="126" x2="130" y2="160" class="ln2"/><line x1="80" y1="160" x2="220" y2="160" class="ln2"/><line x1="80" y1="160" x2="80" y2="180" class="ln2"/><line x1="220" y1="160" x2="220" y2="180" class="ln2"/>' +
    '<rect x="15" y="180" width="130" height="50" class="bx2"/><text x="80" y="201" text-anchor="middle" class="b">보상가능</text><text x="80" y="222" text-anchor="middle" class="r">시간+돈</text>' +
    '<rect x="160" y="180" width="120" height="50" class="bx"/><text x="220" y="201" text-anchor="middle" class="b">보상불가</text><text x="220" y="222" text-anchor="middle" class="s2">시간만</text>' +
    '<text x="20" y="262" class="bl">발주자 귀책 · CP 영향 입증</text>' +
    '</svg>',
  heads: [
    { h: '특징(분류)', k: ['[[발주자 귀책]]', '[[공기연장]]+[[비용보상]]', '[[CP 영향]] 입증'] },
    { h: '유의사항', k: ['기한 내 서면 통지', '작업일보·사진 기록', '동시지연 구분'] },
    { h: '개선방안', k: ['TIA·Windows 분석', 'Baseline 공정표 합의'] }
  ],
  code: '보상가능 = 시간+돈 / 보상불가 = 시간 / 수용불가 = 지체상금'
},
237: {
  one: '[[발주자·시공자 귀책]] 등 둘 이상 지연사유가 [[중복 기간]]에 발생 → [[공기연장]]만 인정',
  flow: ['사유별 기간 확인', '중복구간 산정', 'CP 영향 판단', '연장·보상 결정'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="250" y="48" text-anchor="middle" class="r">동시지연 구간</text>' +
    '<rect x="80" y="70" width="220" height="34" class="bx2"/><text x="140" y="92" text-anchor="middle" class="b">발주자 지연</text>' +
    '<rect x="200" y="130" width="220" height="34" class="bx3"/><text x="360" y="152" text-anchor="middle" class="b">시공자 지연</text>' +
    '<rect x="200" y="60" width="100" height="114" fill="none" class="rd dash"/>' +
    '<text x="40" y="200" class="bl">CP 영향 구간만 산정</text>' +
    '<line x1="40" y1="220" x2="460" y2="220" class="ar"/><text x="455" y="242" text-anchor="end" class="s2">시간</text>' +
    '<text x="240" y="268" text-anchor="middle" class="r">연장 ○ · 보상 × · 지체상금 ×</text>' +
    '</svg>',
  heads: [
    { h: '처리원칙', k: ['둘 이상 사유 [[중복]]', '[[CP 영향]] 구간만', '연장○·보상×'] },
    { h: '문제점(유의사항)', k: ['귀책 입증 곤란', '책임배분 분쟁', '일일 공정기록'] },
    { h: '개선방안', k: ['[[Windows 분석]]·TIA', '계약서 처리기준 명시'] }
  ],
  code: '동시지연 = 연장○ 보상× 지체상금×'
},
238: {
  one: '[[예방(P)]]·[[평가(A)]]·[[실패(F)]] 비용의 합이 최소인 [[최적품질수준]]으로 관리하는 비용',
  flow: ['P·A·F 분류', '공종별 집계', '원인 분석', '예방 재배분'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<line x1="50" y1="240" x2="50" y2="20" class="ar"/><line x1="50" y1="240" x2="460" y2="240" class="ar"/>' +
    '<text x="58" y="30" class="s2">비용</text><text x="455" y="262" text-anchor="end" class="s2">품질수준</text>' +
    '<path d="M80,230 Q300,220 430,50" fill="none" class="bl"/><text x="420" y="40" text-anchor="end" class="bl">예방+평가</text>' +
    '<path d="M80,50 Q120,220 430,230" fill="none" class="gr"/><text x="90" y="44" class="g">실패비용</text>' +
    '<path d="M80,30 Q250,300 430,30" fill="none" class="rd"/><text x="250" y="30" text-anchor="middle" class="r">총품질비용</text>' +
    '<circle cx="252" cy="165" r="5" class="rf"/><line x1="252" y1="165" x2="252" y2="240" class="ln2 dash"/><text x="252" y="258" text-anchor="middle" class="r">최적품질수준</text>' +
    '<text x="55" y="272" class="b">1 : 10 : 100</text>' +
    '</svg>',
  heads: [
    { h: '구성(분류)', k: ['[[예방비용(P)]]', '[[평가비용(A)]]', '[[실패비용(F)]]'] },
    { h: '유의사항', k: ['실패 → 재시공·하자', '과다검사 원가↑', '집계체계 미흡'] },
    { h: '개선방안', k: ['예방 중심 {{1:10:100}}', 'COQ 축적·PDCA'] }
  ],
  code: 'P·A·F + 1:10:100 (예방이 제일 싸다)'
},
240: {
  one: '기 수행 공사의 [[계약·입찰·시공단가]]를 [[보정]]해 [[공종별 단가]]로 [[예정가격]]에 적용 (구 실적공사비)',
  flow: ['단가 수집', '보정', '공표', '예가 작성', '환류'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="20" y="40" width="150" height="54" class="bx"/><text x="95" y="63" text-anchor="middle" class="t">단가 DB</text><text x="95" y="84" text-anchor="middle" class="s2">계약·입찰·시공</text>' +
    '<line x1="170" y1="67" x2="300" y2="67" class="ar"/>' +
    '<rect x="300" y="40" width="150" height="54" class="bx2"/><text x="375" y="63" text-anchor="middle" class="t">보정</text><text x="375" y="84" text-anchor="middle" class="s2">물가·지역·규모</text>' +
    '<line x1="375" y1="94" x2="375" y2="150" class="ar"/>' +
    '<rect x="300" y="150" width="150" height="50" class="bx"/><text x="375" y="181" text-anchor="middle" class="t">단가 공표</text>' +
    '<line x1="300" y1="175" x2="170" y2="175" class="ar"/>' +
    '<rect x="20" y="150" width="150" height="50" class="bx3"/><text x="95" y="181" text-anchor="middle" class="t">예정가격</text>' +
    '<line x1="95" y1="150" x2="95" y2="94" class="ar"/><text x="105" y="127" class="bl">환류</text>' +
    '<text x="240" y="250" text-anchor="middle" class="r">추정가격 100억 미만 공사 적용 제외</text>' +
    '</svg>',
  heads: [
    { h: '산정구조', k: ['계약·입찰·시공 단가', '물가·지역·규모 보정', '[[공종별 단가]]'] },
    { h: '문제점(유의사항)', k: ['낙찰률 누적 → 단가↓', '[[적정공사비]] 미확보', '{{100억원 미만}} 제외'] },
    { h: '개선방안', k: ['실제 시공단가 반영', '[[표준품셈]] 병행'] }
  ],
  code: '계·입·시 단가 → 보정 → 공표 → 예가 → 환류'
},
241: {
  one: '사업주가 근로자와 함께 [[유해·위험요인]] 파악 → [[위험성 결정]] → [[감소대책]] 실행하는 자율 재해예방',
  flow: ['사전준비', '위험요인 파악', '위험성 결정', '감소대책', '공유·기록'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="180" height="180" class="bx"/><rect x="180" y="40" width="60" height="60" class="bx3"/>' +
    '<line x1="120" y1="40" x2="120" y2="220" class="ln"/><line x1="180" y1="40" x2="180" y2="220" class="ln"/><line x1="60" y1="100" x2="240" y2="100" class="ln"/><line x1="60" y1="160" x2="240" y2="160" class="ln"/>' +
    '<text x="20" y="135" class="b">빈도</text><text x="150" y="245" text-anchor="middle" class="b">강도</text>' +
    '<text x="210" y="75" text-anchor="middle" class="s2">허용불가</text><text x="90" y="195" text-anchor="middle" class="s2">허용</text>' +
    '<text x="360" y="60" text-anchor="middle" class="r">위험성 = 빈도×강도</text>' +
    '<rect x="290" y="80" width="140" height="32" class="bx"/><text x="360" y="101" text-anchor="middle">유해·위험 파악</text>' +
    '<line x1="360" y1="112" x2="360" y2="130" class="ar"/>' +
    '<rect x="290" y="130" width="140" height="32" class="bx2"/><text x="360" y="151" text-anchor="middle">위험성 결정</text>' +
    '<line x1="360" y1="162" x2="360" y2="180" class="ar"/>' +
    '<rect x="290" y="180" width="140" height="32" class="bx"/><text x="360" y="201" text-anchor="middle">감소대책 실행</text>' +
    '<text x="360" y="252" text-anchor="middle" class="r">기록 3년 보존</text>' +
    '</svg>',
  heads: [
    { h: '평가기준', k: ['위험성 = [[빈도×강도]]', '[[근로자 참여]] 의무', '기록 {{3년}} 보존'] },
    { h: '유의사항', k: ['형식적 서류 지양', '공법변경 시 수시평가', '협력업체 공유'] },
    { h: '개선방안', k: ['TBM 연계 상시평가', '위험요인 DB·스마트'] }
  ],
  code: '준·파·결·감·공 / 최초·정기·수시·상시 (최·정·수·상)'
},
242: {
  one: '[[지상 31m↑]]·[[굴착 10m↑]] 등 대상공사 사업주가 [[착공 전일]]까지 공단에 제출·심사받는 계획서',
  flow: ['대상 확인', '계획서 작성', '착공 전일 제출', '15일 심사', '6개월 확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="60" y="40" width="90" height="130" class="bx"/><text x="105" y="110" text-anchor="middle" class="t">건축물</text>' +
    '<line x1="170" y1="40" x2="170" y2="170" class="ln2"/><text x="178" y="110" class="r">31m↑</text>' +
    '<rect x="20" y="170" width="220" height="90" class="soil"/><rect x="360" y="170" width="100" height="90" class="soil"/>' +
    '<line x1="20" y1="170" x2="460" y2="170" class="ln"/><path d="M240,170 l0,80 l120,0 l0,-80" fill="none" class="ln2"/>' +
    '<text x="300" y="215" text-anchor="middle" class="r">10m↑</text><text x="300" y="240" text-anchor="middle" class="s2">굴착깊이</text>' +
    '<text x="240" y="50" class="b">착공 전일 제출</text>' +
    '<text x="240" y="80" class="b">공단 15일 심사</text>' +
    '<text x="240" y="110" class="b">6개월마다 확인</text>' +
    '<text x="240" y="140" class="s2">연면적 3만㎡↑·5천㎡ 다중</text>' +
    '</svg>',
  heads: [
    { h: '대상(기준)', k: ['[[지상 31m↑]]·3만㎡↑', '[[굴착 10m↑]]', '지간 50m↑ 교량·터널'] },
    { h: '제출·심사', k: ['[[착공 전일]] 제출', '{{15일}} 이내 심사', '[[6개월마다]] 확인'] },
    { h: '개선방안', k: ['위험성평가 연계', '스마트 계측·CCTV'] }
  ],
  code: '31·3만·5천·10·50 / 전일·15일·6개월'
},
243: {
  one: '[[건설기술진흥법]]에 따라 발주자가 [[안전관리계획]]·[[안전점검]]·주변 피해방지 비용을 공사비에 계상',
  flow: ['발주자 계상', '사용계획', '집행·증빙', '감리 확인', '정산'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="170" y="110" width="140" height="50" class="bx2"/><text x="240" y="141" text-anchor="middle" class="t">안전관리비</text>' +
    '<line x1="190" y1="110" x2="100" y2="48" class="ld"/><line x1="240" y1="110" x2="240" y2="48" class="ld"/><line x1="290" y1="110" x2="390" y2="48" class="ld"/>' +
    '<line x1="170" y1="135" x2="150" y2="135" class="ld"/><line x1="310" y1="135" x2="360" y2="135" class="ld"/>' +
    '<line x1="190" y1="160" x2="100" y2="215" class="ld"/><line x1="290" y1="160" x2="390" y2="215" class="ld"/>' +
    '<text x="20" y="40" class="b">계획 작성·검토</text>' +
    '<text x="240" y="40" text-anchor="middle" class="b">안전점검</text>' +
    '<text x="460" y="40" text-anchor="end" class="b">주변 피해방지</text>' +
    '<text x="20" y="140" class="b">통행·교통소통</text>' +
    '<text x="460" y="140" text-anchor="end" class="b">모니터링 장치</text>' +
    '<text x="20" y="230" class="b">가설구조 안전확인</text>' +
    '<text x="460" y="230" text-anchor="end" class="b">스마트 안전장비</text>' +
    '<text x="240" y="268" text-anchor="middle" class="r">※ 산업안전보건관리비와 구분</text>' +
    '</svg>',
  heads: [
    { h: '계상항목', k: ['안전관리계획 작성·검토', '안전점검·주변 피해방지', '모니터링·가설구조 확인'] },
    { h: '유의사항', k: ['[[산안비와 구분]]·중복 금지', '목적 외 사용 금지', '증빙·정산 철저'] },
    { h: '개선방안', k: ['스마트 장비 반영', '설계변경 시 증액'] }
  ],
  code: '계·점·주·통·모·가·스 (7항목) / 산안비와 별개'
},
244: {
  one: '[[1·2종 시설물]]·[[10~16층]]·[[지하 10m↑ 굴착]] 등 공사의 시공자가 착공 전 수립·승인받는 계획',
  flow: ['대상 확인', '시공자 수립', '감리 검토', '발주청 승인', '착공·이행'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="50" width="90" height="140" class="bx"/><text x="85" y="125" text-anchor="middle" class="r">10~16층</text>' +
    '<line x1="140" y1="50" x2="140" y2="190" class="ln2 dash"/><text x="150" y="40" text-anchor="middle" class="b">비계 31m↑</text>' +
    '<line x1="230" y1="190" x2="230" y2="45" class="ln"/><line x1="200" y1="45" x2="330" y2="45" class="ln"/><text x="290" y="30" text-anchor="middle" class="b">T/C·항타기</text>' +
    '<rect x="270" y="110" width="100" height="10" class="conc"/><line x1="290" y1="120" x2="290" y2="190" class="ln2"/><line x1="320" y1="120" x2="320" y2="190" class="ln2"/><line x1="350" y1="120" x2="350" y2="190" class="ln2"/>' +
    '<text x="320" y="100" text-anchor="middle" class="s2">동바리 5m↑</text>' +
    '<text x="460" y="80" text-anchor="end" class="bl">착공 전 승인</text>' +
    '<rect x="20" y="190" width="440" height="80" class="soil"/><line x1="20" y1="190" x2="460" y2="190" class="ln"/><path d="M380,190 l0,60 l70,0 l0,-60" fill="none" class="ln2"/>' +
    '<text x="415" y="180" text-anchor="middle" class="r">굴착 10m↑</text>' +
    '<text x="40" y="255" class="b">1·2종 시설물</text>' +
    '</svg>',
  heads: [
    { h: '수립대상', k: ['1·2종·10~16층', '지하 {{10m↑}} 굴착', '비계31·동바리5·T/C'] },
    { h: '유의사항', k: ['[[착공 전 승인]]', '정기·초기 안전점검', '공법변경 시 변경승인'] },
    { h: '개선방안', k: ['CSI 등록', 'IoT 계측·CCTV'] }
  ],
  code: '1·2종 / 10~16층 / 굴착10 / 비계31 / 동바리5 / T/C'
},
245: {
  one: '[[굴착 20m↑]] 사업의 [[지반·지질]]·[[지하수 변화]]·[[지반 안전성]]을 사업 승인 전 평가',
  flow: ['현황조사', '안전성 해석', '평가·협의', '대책 시공', '착공후 조사'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="20" y="40" class="b">착공 전 평가 → 착공 후 조사</text>' +
    '<rect x="340" y="30" width="80" height="50" class="bx"/><text x="380" y="60" text-anchor="middle" class="s2">인접건물</text>' +
    '<rect x="20" y="80" width="160" height="180" class="soil"/><rect x="300" y="80" width="160" height="180" class="soil"/><rect x="180" y="230" width="120" height="30" class="soil"/>' +
    '<line x1="20" y1="80" x2="460" y2="80" class="ln"/>' +
    '<line x1="180" y1="80" x2="180" y2="230" class="rd"/><line x1="300" y1="80" x2="300" y2="230" class="rd"/><text x="190" y="100" class="s2">흙막이</text>' +
    '<path d="M20,120 Q150,125 180,180" fill="none" class="bl dash"/><text x="25" y="112" class="bl">▽ 지하수위 저하</text>' +
    '<text x="380" y="110" text-anchor="middle" class="r">지반침하</text>' +
    '<text x="240" y="160" text-anchor="middle" class="r">굴착 20m↑ 평가</text>' +
    '<text x="240" y="185" text-anchor="middle" class="s2">10~20m 소규모</text>' +
    '</svg>',
  heads: [
    { h: '평가항목', k: ['[[지반·지질]] 조사', '[[지하수 변화]] 영향', '[[지반 안전성]] 해석'] },
    { h: '대상·유의사항', k: ['{{20m↑}} 평가·10~20m 소규모', '[[착공후 지하안전조사]]', '지하수위·침하 계측'] },
    { h: '개선방안', k: ['자동화 계측', '지하안전정보 연계'] }
  ],
  code: '지반·지하수·안전성 / 20m 평가·10m 소규모'
},
246: {
  one: '설계자가 시공·유지관리 [[위험요소]]를 도출·[[평가]]해 [[저감대책]]을 설계에 반영하는 제도',
  flow: ['위험요소 도출', '위험성 평가', '저감대책 반영', '관리원 검토', '시공자 전달'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="15" y="40" width="95" height="44" class="bx"/><text x="62" y="68" text-anchor="middle" class="t">도출</text>' +
    '<rect x="130" y="40" width="95" height="44" class="bx"/><text x="177" y="68" text-anchor="middle" class="t">평가</text>' +
    '<rect x="245" y="40" width="95" height="44" class="bx2"/><text x="292" y="68" text-anchor="middle" class="t">저감</text>' +
    '<rect x="360" y="40" width="95" height="44" class="bx"/><text x="407" y="68" text-anchor="middle" class="t">전달</text>' +
    '<line x1="110" y1="62" x2="130" y2="62" class="ar"/><line x1="225" y1="62" x2="245" y2="62" class="ar"/><line x1="340" y1="62" x2="360" y2="62" class="ar"/>' +
    '<text x="62" y="108" text-anchor="middle" class="s2">위험요소</text>' +
    '<text x="177" y="108" text-anchor="middle" class="s2">빈도×강도</text>' +
    '<text x="292" y="108" text-anchor="middle" class="s2">제거→대체</text>' +
    '<text x="407" y="108" text-anchor="middle" class="s2">프로파일</text>' +
    '<text x="240" y="170" text-anchor="middle" class="b">설계자 → 국토안전관리원 검토 → 시공자</text>' +
    '<text x="240" y="240" text-anchor="middle" class="r">설계단계 위험 제거가 가장 효과적</text>' +
    '</svg>',
  heads: [
    { h: '원리(절차)', k: ['[[위험요소 도출]]', '[[위험성 평가]]', '[[저감대책]] 제거→대체'] },
    { h: '문제점(유의사항)', k: ['시공 위험 이해 부족', '형식적 보고서 지양', '시공자에 정보 전달'] },
    { h: '개선방안', k: ['BIM 위험 시각화', 'ECI·CSI 정보공유'] }
  ],
  code: 'DFS = 도·평·저·전 (도출·평가·저감·전달)'
},
247: {
  one: '[[비계 31m↑]]·[[동바리 5m↑]]·[[흙막이 2m↑]] 등 가설구조물을 [[관계전문가]]가 구조 안전성 확인',
  flow: ['대상 확인', '구조계산서', '기술사 확인', '감리 제출', '설치·점검'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="40" y="30" width="30" height="190" class="bx"/><line x1="40" y1="70" x2="70" y2="70" class="ln"/><line x1="40" y1="110" x2="70" y2="110" class="ln"/><line x1="40" y1="150" x2="70" y2="150" class="ln"/><line x1="40" y1="190" x2="70" y2="190" class="ln"/>' +
    '<text x="80" y="44" class="r">비계 31m↑</text>' +
    '<text x="300" y="30" text-anchor="middle" class="b">관계전문가(기술사) 확인</text>' +
    '<text x="300" y="55" text-anchor="middle" class="s2">구조계산서 → 감리 제출</text>' +
    '<rect x="170" y="110" width="120" height="12" class="conc"/><line x1="190" y1="122" x2="190" y2="220" class="ln2"/><line x1="230" y1="122" x2="230" y2="220" class="ln2"/><line x1="270" y1="122" x2="270" y2="220" class="ln2"/>' +
    '<text x="230" y="100" text-anchor="middle" class="r">동바리 5m↑</text>' +
    '<line x1="20" y1="220" x2="320" y2="220" class="ln"/>' +
    '<rect x="380" y="150" width="80" height="120" class="soil"/><line x1="380" y1="150" x2="380" y2="270" class="rd"/><line x1="380" y1="150" x2="460" y2="150" class="ln"/><line x1="330" y1="190" x2="380" y2="190" class="ln2"/>' +
    '<text x="420" y="140" text-anchor="middle" class="r">흙막이 2m↑</text>' +
    '<text x="20" y="255" class="s2">+ 일체형 거푸집 · 동력 이용 가설구조물</text>' +
    '</svg>',
  heads: [
    { h: '확인대상', k: ['비계 {{31m↑}}·브라켓', '일체형 거푸집·동바리5m', '흙막이 {{2m↑}}·동력 이용'] },
    { h: '유의사항', k: ['[[관계전문가]] 확인', '구조계산서 감리 제출', '변경 시 재확인'] },
    { h: '개선방안', k: ['3D·BIM 가설 설계', 'IoT 하중·변위 계측'] }
  ],
  code: '비31·일체형·동5·흙2·동력'
},
248: {
  one: '[[중대산업재해]] 시 [[안전보건관리체계]] 의무를 위반한 [[경영책임자]]·법인을 처벌 ({{2022.1.27}} 시행)',
  flow: ['목표·방침', '조직·예산', '위험성평가', '의견청취', '반기 점검'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="120" y="34" text-anchor="middle" class="t">중대산업재해</text>' +
    '<rect x="20" y="50" width="200" height="50" class="bx"/><text x="120" y="80" text-anchor="middle" class="r">사망 1명↑</text>' +
    '<rect x="20" y="110" width="200" height="50" class="bx"/><text x="120" y="140" text-anchor="middle" class="b">6개월↑ 부상 2명↑</text>' +
    '<rect x="20" y="170" width="200" height="50" class="bx"/><text x="120" y="200" text-anchor="middle" class="b">질병 1년내 3명↑</text>' +
    '<line x1="220" y1="135" x2="270" y2="135" class="ar"/>' +
    '<rect x="270" y="50" width="190" height="170" class="bx2"/><text x="365" y="85" text-anchor="middle" class="t">경영책임자</text>' +
    '<text x="365" y="120" text-anchor="middle" class="r">징역 1년↑·10억↓</text>' +
    '<text x="365" y="155" text-anchor="middle" class="b">법인 50억↓</text>' +
    '<text x="365" y="190" text-anchor="middle" class="b">손해배상 5배</text>' +
    '<text x="240" y="255" text-anchor="middle" class="bl">안전보건관리체계 구축 의무</text>' +
    '</svg>',
  heads: [
    { h: '중대산업재해', k: ['사망 {{1명↑}}', '부상 6개월↑ 2명↑', '직업성 질병 3명↑'] },
    { h: '처벌·유의사항', k: ['징역 1년↑·10억↓', '법인 {{50억↓}}', '징벌적 배상 5배'] },
    { h: '대응방안', k: ['[[안전보건관리체계]]', '위험성평가·TBM', '반기 1회 점검'] }
  ],
  code: '사1·부2·질3 / 1년·10억·50억·5배'
},
249: {
  one: '[[작업 전 10분]] 반장 주관 [[5~7명]]이 당일 위험요인·대책을 [[4R 기법]]으로 공유하는 회의',
  flow: ['건강·보호구', '작업 설명', '위험 도출', '대책·목표', '지적확인'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<text x="130" y="40" text-anchor="middle" class="b">작업 전 10분</text>' +
    '<circle cx="130" cy="135" r="80" fill="none" class="ln dash"/>' +
    '<circle cx="130" cy="130" r="14" class="rf"/><text x="130" y="165" text-anchor="middle" class="s2">반장</text>' +
    '<circle cx="70" cy="100" r="10" class="bf"/><circle cx="190" cy="100" r="10" class="bf"/><circle cx="65" cy="170" r="10" class="bf"/><circle cx="195" cy="170" r="10" class="bf"/><circle cx="130" cy="200" r="10" class="bf"/>' +
    '<text x="130" y="255" text-anchor="middle" class="r">5~7명</text>' +
    '<rect x="270" y="40" width="180" height="40" class="bx"/><text x="360" y="66" text-anchor="middle">1R 현상파악</text>' +
    '<line x1="360" y1="80" x2="360" y2="95" class="ar"/>' +
    '<rect x="270" y="95" width="180" height="40" class="bx"/><text x="360" y="121" text-anchor="middle">2R 본질추구</text>' +
    '<line x1="360" y1="135" x2="360" y2="150" class="ar"/>' +
    '<rect x="270" y="150" width="180" height="40" class="bx2"/><text x="360" y="176" text-anchor="middle">3R 대책수립</text>' +
    '<line x1="360" y1="190" x2="360" y2="205" class="ar"/>' +
    '<rect x="270" y="205" width="180" height="40" class="bx"/><text x="360" y="231" text-anchor="middle">4R 목표설정</text>' +
    '</svg>',
  heads: [
    { h: '진행방법', k: ['작업 전 {{10분}}', '반장 주관 {{5~7명}}', '[[4R 기법]]'] },
    { h: '유의사항', k: ['형식적 낭독 지양', '외국인 이해 확인', '기록·후속조 공유'] },
    { h: '개선방안', k: ['위험성평가 연계', '스마트 TBM 다국어'] }
  ],
  code: '10분·5명·4R (현·본·대·목)'
},
250: {
  one: '[[IoT 센서]]·[[AI CCTV]]·[[웨어러블]] 데이터를 [[통합관제센터]]가 분석해 [[실시간 경보]]',
  flow: ['데이터 수집', '통신 전송', 'AI 분석', '실시간 경보', '조치·DB'],
  svg: '<svg viewBox="0 0 480 280">' +
    '<rect x="170" y="100" width="140" height="60" class="bx2"/><text x="240" y="136" text-anchor="middle" class="t">통합관제센터</text>' +
    '<text x="20" y="50" class="b">IoT 센서</text><text x="20" y="130" class="b">AI CCTV</text><text x="20" y="210" class="b">스마트 안전모</text>' +
    '<line x1="90" y1="50" x2="170" y2="108" class="ar"/><line x1="95" y1="126" x2="170" y2="128" class="ar"/><line x1="120" y1="200" x2="170" y2="152" class="ar"/>' +
    '<line x1="310" y1="120" x2="375" y2="108" class="ar"/><text x="460" y="110" text-anchor="end" class="r">실시간 경보</text>' +
    '<line x1="310" y1="145" x2="360" y2="165" class="ar"/><text x="460" y="175" text-anchor="end" class="b">작업중지·조치</text>' +
    '<line x1="240" y1="160" x2="240" y2="230" class="ar"/><text x="240" y="255" text-anchor="middle" class="bl">BIM·디지털 트윈 → 예측</text>' +
    '</svg>',
  heads: [
    { h: '구성(기능)', k: ['[[IoT 센서]]·웨어러블', '[[AI 영상분석]]', '[[통합관제]]→[[실시간 경보]]'] },
    { h: '유의사항', k: ['통신 음영지역 해소', '오경보·개인정보', '장비 착용·배터리'] },
    { h: '개선방안', k: ['디지털 트윈·BIM', '안전관리비 계상'] }
  ],
  code: '모·캠·근·가·계 → 관제 → 경보'
}
});
