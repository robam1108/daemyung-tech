// All page copy and repeated card data live here so sections stay presentational.
// Note: this is portfolio content for a fictional company — no history, certifications,
// client names, equipment models, or capacity figures are stated as fact.

const img = (name) => `/images/${name}.webp`;

export const company = {
  nameKo: '대명테크',
  nameEn: 'DAEMYUNG TECH',
  business: '산업용 금속 부품 및 정밀 판금 제조',
  pending: '사업장 정보 준비 중',
};

export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'company', label: 'COMPANY' },
  { id: 'business', label: 'BUSINESS' },
  { id: 'facilities', label: 'FACILITIES' },
  { id: 'process', label: 'PROCESS' },
  { id: 'project', label: 'PROJECT' },
  { id: 'contact', label: 'CONTACT' },
];

export const hero = {
  label: 'PRECISION METAL FABRICATION',
  title: ['정밀함으로 완성하는', '산업 제조의 기준'],
  description: [
    '정확한 가공 기술과 안정적인 생산 시스템으로',
    '산업 현장이 요구하는 최적의 금속 제조 솔루션을 제공합니다.',
  ],
  image: {
    src: img('hero-laser-cutting'),
    alt: '어두운 공장 안에서 대형 레이저 절단기가 금속 판재를 절단하는 모습',
    width: 2200,
    height: 1300,
  },
  competencies: [
    { en: 'LASER CUTTING', ko: '레이저 절단' },
    { en: 'METAL BENDING', ko: '정밀 절곡' },
    { en: 'PRECISION WELDING', ko: '정밀 용접' },
  ],
};

export const about = {
  label: 'ABOUT DAEMYUNG TECH',
  title: ['작은 오차까지 고려하는', '정밀 제조의 파트너'],
  paragraphs: [
    '대명테크는 산업용 금속 부품 및 정밀 판금 제조를 전문으로 하는 기업입니다.',
    '다양한 산업 현장의 요구에 맞춘 금속 가공 기술과 체계적인 생산 공정을 바탕으로, 고객이 원하는 품질과 규격의 제품을 제작합니다.',
    '정확한 작업과 책임 있는 생산으로 고객의 제조 경쟁력을 함께 만들어 갑니다.',
  ],
  image: {
    src: img('company-factory'),
    alt: '금속 자재와 작업대가 정돈된 밝은 제조 공장 내부 전경',
    width: 1100,
    height: 1320,
  },
  values: [
    {
      no: '01',
      en: 'PRECISION',
      ko: '정밀한 가공 기술',
      text: '도면과 규격을 기준으로 소재와 형상에 맞는 가공 방식을 선택해 정확하게 작업합니다.',
    },
    {
      no: '02',
      en: 'QUALITY',
      ko: '일관된 품질 관리',
      text: '공정 단계마다 외관과 치수를 확인하여 제품마다 고른 품질을 유지합니다.',
    },
    {
      no: '03',
      en: 'PARTNERSHIP',
      ko: '고객 중심의 협력',
      text: '제작 목적과 일정을 함께 검토하며, 고객의 생산 현장에 맞는 해법을 찾아갑니다.',
    },
  ],
};

export const business = {
  label: 'OUR BUSINESS',
  title: ['다양한 산업을 위한', '금속 제조 솔루션'],
  description: '공장 설비, 산업기계, 건설·설비 분야에 필요한 금속 부품과 구조물을 도면에 맞춰 제작합니다.',
  items: [
    {
      no: '01',
      en: 'LASER CUTTING',
      ko: '레이저 절단',
      text: '고정밀 레이저 가공 기술을 바탕으로 다양한 금속 소재를 원하는 규격과 형태로 정밀하게 절단합니다.',
      detail: '#facility-laser',
      image: { src: img('biz-laser'), alt: '레이저 절단 헤드가 금속 판재를 절단하며 불꽃이 튀는 장면' },
    },
    {
      no: '02',
      en: 'METAL BENDING',
      ko: '정밀 절곡',
      text: '소재와 두께에 적합한 가공 방식을 통해 설계에 맞는 정확한 각도와 형태를 구현합니다.',
      detail: '#facility-bending',
      image: { src: img('biz-bending'), alt: '작업자가 장갑을 끼고 절곡기에 금속 판재를 맞추는 모습' },
    },
    {
      no: '03',
      en: 'PRECISION WELDING',
      ko: '정밀 용접',
      text: '다양한 금속 부품과 구조물을 안정적으로 접합하여 완성도 높은 제품을 제작합니다.',
      detail: '#facility-welding',
      image: { src: img('biz-welding'), alt: '용접 마스크를 쓴 작업자가 금속 부품을 용접하는 모습' },
    },
  ],
};

export const capability = {
  label: 'MANUFACTURING CAPABILITY',
  title: ['요구되는 규격에 맞춰', '정밀하게, 안정적으로'],
  description:
    '절단부터 절곡, 용접, 조립까지 한 흐름으로 이어지는 공정을 통해 도면 속 설계를 실제 제품으로 구현합니다.',
  image: {
    src: img('capability-floor'),
    alt: '여러 설비가 배치된 금속 가공 공장에서 작업자가 용접 작업을 하는 모습',
    width: 1100,
    height: 1320,
  },
  items: [
    {
      icon: 'layers',
      title: '다양한 금속 소재 대응',
      text: '철, 스테인리스, 알루미늄 등 제품 용도에 맞는 금속 소재의 가공을 검토합니다.',
    },
    {
      icon: 'blueprint',
      title: '도면 기반 주문 제작',
      text: '고객이 전달한 도면과 사양을 기준으로 소량부터 반복 생산까지 주문형으로 제작합니다.',
    },
    {
      icon: 'cut',
      title: '정밀 절단 및 절곡 가공',
      text: '형상과 두께에 맞는 절단·절곡 방식을 적용해 설계 의도에 맞는 형태를 만듭니다.',
    },
    {
      icon: 'weld',
      title: '맞춤형 용접 및 조립',
      text: '부품 간 접합과 조립까지 진행하여 바로 사용할 수 있는 상태로 완성합니다.',
    },
    {
      icon: 'check',
      title: '생산 공정별 품질 확인',
      text: '가공 단계마다 외관과 규격을 확인하여 다음 공정으로 넘어가기 전 품질을 점검합니다.',
    },
  ],
};

export const ctaBand = {
  label: 'DRAWING REVIEW',
  title: '도면만 준비되어 있다면, 제작 검토를 시작할 수 있습니다.',
  text: '제작하려는 제품의 도면이나 참고 자료를 보내주시면 가공 가능 여부부터 함께 확인합니다.',
  image: { src: img('cta-grinding'), alt: '' },
};

export const facilities = {
  label: 'PRODUCTION FACILITIES',
  title: ['정밀한 결과를 만드는', '생산 설비와 기술'],
  description: '절단, 절곡, 용접, 측정까지 제작의 각 단계에 필요한 설비를 갖추고 작업합니다.',
  items: [
    {
      en: 'Fiber Laser Cutting Machine',
      ko: '파이버 레이저 절단기',
      text: '금속 판재를 도면 형상대로 깔끔하게 절단하는 레이저 가공 설비입니다.',
      id: 'facility-laser',
      image: { src: img('fac-fiber-laser'), alt: '파이버 레이저 절단 헤드가 금속 판재 위에서 불꽃을 내며 절단하는 모습' },
    },
    {
      en: 'CNC Press Brake',
      ko: 'CNC 절곡기',
      text: '수치 제어를 통해 판재를 설계된 각도와 형태로 반복 절곡하는 설비입니다.',
      id: 'facility-bending',
      image: { src: img('fac-press-brake'), alt: 'CNC 절곡기의 조작 패널과 금속 판재 지지대' },
    },
    {
      en: 'Industrial Welding Equipment',
      ko: '산업용 용접 장비',
      text: '부품과 구조물의 형태와 소재에 맞는 방식으로 금속을 접합하는 장비입니다.',
      id: 'facility-welding',
      image: { src: img('fac-welding'), alt: '보호 장비를 착용한 작업자가 산업용 용접 장비로 작업하는 모습' },
    },
    {
      en: 'Precision Measuring Equipment',
      ko: '정밀 측정 장비',
      text: '가공된 제품의 치수와 형상을 확인하여 규격 일치 여부를 점검하는 장비입니다.',
      id: 'facility-measuring',
      image: { src: img('fac-measuring'), alt: '디지털 캘리퍼로 금속 부품의 치수를 측정하는 손' },
    },
  ],
};

export const process = {
  label: 'WORKING PROCESS',
  title: ['상담부터 완성까지,', '체계적인 제작 프로세스'],
  steps: [
    { no: '01', en: 'CONSULTATION', ko: '제작 상담', text: '고객의 요구 사항과 제작 목적을 확인합니다.' },
    { no: '02', en: 'DESIGN REVIEW', ko: '도면 검토', text: '도면과 규격을 검토하고 가공 가능 여부를 확인합니다.' },
    { no: '03', en: 'FABRICATION', ko: '정밀 가공', text: '소재와 작업 조건에 맞춰 절단, 절곡, 용접을 진행합니다.' },
    { no: '04', en: 'QUALITY CHECK', ko: '품질 확인', text: '제작된 제품의 외관과 규격 등을 확인합니다.' },
    { no: '05', en: 'DELIVERY', ko: '납품 및 완료', text: '최종 확인을 거쳐 완성된 제품을 납품합니다.' },
  ],
};

export const projects = {
  label: 'OUR PROJECT',
  title: ['다양한 산업 현장에서', '완성한 제조 결과물'],
  note: '아래 이미지는 제작 유형을 소개하기 위한 예시입니다.',
  items: [
    {
      category: 'FRAME',
      title: '산업용 금속 프레임 제작',
      text: '각관과 형강을 절단·용접하여 설비를 지지하는 금속 프레임을 제작합니다.',
      image: { src: img('proj-frame'), alt: '각관 금속 프레임을 용접하며 불꽃이 튀는 제작 현장' },
    },
    {
      category: 'SHEET METAL',
      title: '정밀 판금 커버 가공',
      text: '설비 외장과 보호용 커버를 도면 치수에 맞춰 절단·절곡해 가공합니다.',
      image: { src: img('proj-cover'), alt: '정밀하게 가공된 은색 금속 하우징 부품' },
    },
    {
      category: 'BRACKET',
      title: '산업 설비용 브라켓 제작',
      text: '설비 부품 고정용 브라켓을 도면 기준 형상과 홀 위치에 맞춰 제작합니다.',
      image: { src: img('proj-bracket'), alt: '설계 도면 위에 놓인 금속 브라켓 부품' },
    },
    {
      category: 'STRUCTURE',
      title: '금속 구조물 주문 제작',
      text: '현장 조건과 용도에 맞춘 철골·금속 구조물을 주문형으로 제작합니다.',
      image: { src: img('proj-structure'), alt: '청색 도장 철골 기둥과 보로 이루어진 금속 구조물' },
    },
  ],
};

export const contact = {
  label: 'CONTACT US',
  title: ['새로운 제작 프로젝트,', '대명테크와 함께 시작하세요.'],
  description: ['제작하고자 하는 제품과 도면을 전달해 주시면', '검토 후 상담을 도와드립니다.'],
  image: { src: img('contact-workshop'), alt: '' },
  checklist: ['제작 품목과 용도', '도면 또는 참고 이미지', '희망 수량과 일정'],
  inquiryTypes: ['레이저 절단', '정밀 절곡', '정밀 용접', '금속 부품 제작', '기타 문의'],
};
