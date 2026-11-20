# 대명테크 (DAEMYUNG TECH) — 정밀 판금 제조기업 랜딩페이지

> 산업용 금속 부품·정밀 판금 제조기업(가상)을 위한 반응형 원페이지 기업 홈페이지

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

**🔗 Live Demo — https://daemyung-tech.vercel.app/**

<br />

## 프로젝트 개요

레이저 절단·정밀 절곡·정밀 용접을 하는 B2B 금속 제조기업의 홈페이지를 기획부터 퍼블리싱·배포까지 만든 포트폴리오 프로젝트입니다.

- **목표**: 제조업체다운 신뢰감 있는 기업 이미지 전달, 그리고 **도면 기반 견적 문의**로 자연스럽게 이어지는 흐름
- **범위**: 정보 구조 설계, UI 디자인 시스템(토큰), 반응형 구현, 웹 접근성, 이미지·폰트 성능 최적화, SEO, Vercel 배포
- **설정**: 회사는 가상입니다. 연혁·인증·고객사·장비 모델·생산 능력 같은 정보는 사실처럼 쓰지 않았습니다.

## 화면 구성

| 섹션 | 내용 |
|---|---|
| Hero | 레이저 절단 전경 + 핵심 역량 3가지 |
| Company | 회사 소개와 핵심 가치 |
| Business | 레이저 절단 · 절곡 · 용접 사업 분야 카드 |
| Capability | 생산 역량 |
| Facilities | 보유 설비 소개 |
| CTA Band | 견적 문의 유도 배너 |
| Process | 제작 상담 → 도면 검토 → 정밀 가공 → 품질 확인 → 납품 5단계 |
| Projects | 제작 사례 |
| Contact | 견적·제작 문의 폼 (도면 파일 첨부) |

공통 UI: 현재 섹션을 표시하는 고정 헤더(스크롤 스파이), 모바일 드로어 메뉴, 맨 위로 버튼, 스크롤 진입 애니메이션

<br />

## 기술적 포인트

### 1. 콘텐츠와 표현의 분리
페이지의 모든 문구와 카드 데이터를 [`src/data/siteContent.js`](src/data/siteContent.js) 한 곳에 모았습니다. 섹션 컴포넌트는 표시만 맡기 때문에, **클라이언트가 문구를 바꿀 때 컴포넌트를 건드릴 필요가 없습니다.**

### 2. 디자인 토큰 기반 스타일링
[`src/styles/tokens.css`](src/styles/tokens.css)에 컬러·타이포그래피·간격·레이아웃 값을 CSS 변수로 정의하고, 컴포넌트마다 CSS Modules로 스타일을 격리했습니다.
- `clamp()`를 쓴 유동 타이포그래피와 섹션 간격으로 브레이크포인트 사이에서도 자연스럽게 크기가 바뀝니다.
- 포인트 컬러(Safety Orange)는 흰 글자와 대비가 부족해서, **WCAG AA(4.5:1)** 를 만족하는 진한 색(`--orange-ink`)을 따로 두어 버튼과 작은 글씨에 썼습니다.

### 3. 웹 접근성
- 본문 바로가기(스킵 링크), 랜드마크와 `aria-labelledby`로 섹션 구조화
- 모바일 메뉴: **포커스 트랩**, ESC로 닫기, 열린 동안 배경 스크롤 잠금, `aria-expanded` / `aria-controls` ([`Header.jsx`](src/components/layout/Header.jsx))
- 내비게이션 현재 위치를 `aria-current`로 표시
- 문의 폼: `aria-invalid` / `aria-describedby`로 오류 메시지 연결, 제출 시 **첫 번째 오류 필드로 포커스 이동** ([`ContactForm.jsx`](src/components/sections/contact/ContactForm.jsx))
- `prefers-reduced-motion` 설정을 존중해 애니메이션과 부드러운 스크롤을 줄임

### 4. 이미지 성능 파이프라인
- [`scripts/optimize-images.mjs`](scripts/optimize-images.mjs) (sharp): 원본 사진을 **크롭 → 색감 통일 → WebP 변환 → 여러 너비로 생성**까지 한 번에 처리합니다 (`npm run images`).
- 이미지 크기 설정([`src/data/imageSizes.js`](src/data/imageSizes.js))을 **빌드 스크립트와 런타임 `srcSet()`** ([`src/utils/image.js`](src/utils/image.js))이 같이 써서, 생성된 파일과 `srcset`이 어긋나지 않습니다.
- 첫 화면(LCP) 이미지는 `preload` + `fetchpriority="high"`로 먼저 불러옵니다.

### 5. 폰트 로딩 최적화
Pretendard·Inter 웹폰트를 `media="print"` → `onload` 방식으로 **렌더링을 막지 않고** 불러옵니다. 폰트가 오기 전에는 시스템 폰트로 먼저 그리고, `<noscript>` 대체 경로도 넣었습니다.

### 6. 라이브러리 없는 가벼운 인터랙션
런타임 의존성은 `react`, `react-dom` 두 개뿐입니다.
- [`useReveal`](src/hooks/useReveal.js): IntersectionObserver로 스크롤 진입 애니메이션을 한 번만 실행 (미지원 브라우저는 바로 표시)
- [`useScrollSpy`](src/hooks/useScrollSpy.js): `requestAnimationFrame`으로 스크롤 이벤트를 묶어 처리하고, 페이지 끝에서는 마지막 섹션을 활성화

### 7. 신뢰할 수 있는 문의 폼
- [`validateInquiry.js`](src/components/sections/contact/validateInquiry.js): 필수값, 전화번호·이메일 형식, 첨부 파일 확장자(PDF·DWG·DXF·STEP 등)와 10MB 제한, 개인정보 동의 검증
- 전송 로직을 [`src/services/inquiryService.js`](src/services/inquiryService.js)로 분리했습니다. 백엔드가 아직 연결되지 않았으므로 **가짜 성공 메시지를 띄우지 않고** "온라인 접수 준비 중"을 안내합니다.

### 8. SEO · 공유
meta description, Open Graph / Twitter Card(절대 URL), canonical, JSON-LD `Organization` 구조화 데이터 ([`index.html`](index.html))

<br />

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| UI | React 18 |
| 빌드 | Vite 6 |
| 스타일 | CSS Modules, CSS Custom Properties(디자인 토큰) |
| 이미지 처리 | sharp (Node 스크립트) |
| 폰트 | Pretendard, Inter |
| 배포 | Vercel |

## 프로젝트 구조

```
src/
├─ data/
│  ├─ siteContent.js      # 모든 카피·카드 데이터
│  └─ imageSizes.js       # 이미지 크기·변형 설정 (스크립트와 런타임 공용)
├─ components/
│  ├─ sections/           # Hero, Company, Business, Capability, Facilities,
│  │  │                   # CtaBand, Process, Projects, Contact
│  │  └─ contact/         # ContactForm, validateInquiry
│  ├─ layout/             # Header(모바일 드로어), Footer, ScrollTopButton
│  └─ common/             # SectionHeader, Button, Reveal, Logo, Icons
├─ hooks/                 # useReveal, useScrollSpy
├─ services/              # inquiryService (문의 전송 경계)
├─ utils/                 # image.js (srcSet 생성)
└─ styles/                # tokens.css, global.css
scripts/
└─ optimize-images.mjs    # 이미지 최적화 파이프라인
```

## 로컬 실행

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/ 생성
npm run preview   # 빌드 결과 미리보기
npm run images    # .image-src/의 원본 JPG → public/images/ WebP 재생성
```

<br />

## 실제 운영으로 전환하기

이 템플릿을 실제 회사 사이트로 쓸 때 바꿔야 할 곳입니다.

| 작업 | 위치 |
|---|---|
| 회사명·문구·카드 내용 수정 | [`src/data/siteContent.js`](src/data/siteContent.js) |
| 브랜드 컬러·폰트 변경 | [`src/styles/tokens.css`](src/styles/tokens.css) |
| 주소·전화·이메일 (현재 "준비 중") | [`src/components/layout/Footer.jsx`](src/components/layout/Footer.jsx) |
| 문의 폼 백엔드 연결 | [`src/services/inquiryService.js`](src/services/inquiryService.js) |
| 사진 교체 | `.image-src/`에 원본 JPG를 넣고 `npm run images` |
| 도메인·OG 이미지 URL | [`index.html`](index.html) |

**문의 폼 연결**: `inquiryService.js`의 `INQUIRY_ENDPOINT`에 API 주소를 넣거나 `submitInquiry()` 본문을 이메일·폼 서비스 호출로 바꾸면 됩니다. 서버가 접수를 확인했을 때만 `{ ok: true }`를 반환하세요.

## 이미지 출처

모든 사진은 [Unsplash License](https://unsplash.com/license)를 따르는 사진을 크롭하고 색감을 맞춘 것입니다. 원본 목록은 [`public/images/CREDITS.md`](public/images/CREDITS.md)에 있습니다.
