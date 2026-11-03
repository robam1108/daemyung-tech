# 대명테크 (DAEMYUNG TECH) — 기업 랜딩페이지

산업용 금속 부품·정밀 판금 제조기업(가상)의 단일 페이지 반응형 홈페이지입니다. Vite + React + CSS Modules로 만들었습니다.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/ 생성
```

## 구조

| 경로 | 역할 |
|---|---|
| `src/data/siteContent.js` | 모든 카피와 카드 데이터 (문구 수정은 여기서) |
| `src/components/sections/` | 섹션 컴포넌트: Hero, Company, Business, Capability, CtaBand, Facilities, Process, Projects, Contact |
| `src/components/layout/` | Header(모바일 드로어 포함), Footer, ScrollTopButton |
| `src/components/common/` | SectionHeader, Button, Reveal, Logo, Icons |
| `src/styles/tokens.css` | 컬러·타이포·간격 토큰 |
| `src/services/inquiryService.js` | 문의 전송 경계 (현재 미연결) |

## 문의 폼 연결

지금은 백엔드가 연결되어 있지 않아 제출해도 **"온라인 접수 준비 중 · 전송되지 않음"** 안내만 표시하고, 성공 메시지는 띄우지 않습니다.
실제로 전송하려면 `src/services/inquiryService.js`의 `INQUIRY_ENDPOINT`를 설정하거나 `submitInquiry()` 본문을 교체하면 됩니다. 서버가 접수를 확인했을 때만 `{ ok: true }`를 반환하세요.
푸터의 주소·전화·이메일은 "준비 중"으로 표시되며 `src/components/layout/Footer.jsx`에서 바꿀 수 있습니다.

## 이미지

`public/images/`의 사진은 Unsplash License 사진을 크롭하고 톤을 맞춘 것입니다(출처: `public/images/CREDITS.md`).
원본 JPG를 `.image-src/`에 두고 `npm run images`를 실행하면 WebP가 다시 만들어집니다(사이즈 설정: `scripts/optimize-images.mjs`).
