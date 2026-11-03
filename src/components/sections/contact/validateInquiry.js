export const MAX_FILE_MB = 10;
export const ACCEPTED_EXT = ['pdf', 'dwg', 'dxf', 'step', 'stp', 'jpg', 'jpeg', 'png', 'zip'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

// Returns { fieldName: message } for every invalid field (empty object when valid).
export function validateInquiry(values, file) {
  const errors = {};
  const v = (k) => (values[k] ?? '').trim();

  if (!v('company')) errors.company = '회사명을 입력해 주세요.';
  if (!v('name')) errors.name = '담당자명을 입력해 주세요.';

  if (!v('phone')) errors.phone = '연락처를 입력해 주세요.';
  else if (!PHONE_RE.test(v('phone').replace(/\s/g, ''))) errors.phone = '연락처 형식을 확인해 주세요. (예: 010-0000-0000)';

  if (!v('email')) errors.email = '이메일을 입력해 주세요.';
  else if (!EMAIL_RE.test(v('email'))) errors.email = '이메일 형식을 확인해 주세요.';

  if (!v('type')) errors.type = '문의 분야를 선택해 주세요.';

  if (!v('message')) errors.message = '문의 내용을 입력해 주세요.';
  else if (v('message').length < 10) errors.message = '문의 내용을 10자 이상 입력해 주세요.';

  if (file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) errors.attachment = '지원하지 않는 파일 형식입니다.';
    else if (file.size > MAX_FILE_MB * 1024 * 1024) errors.attachment = `파일 용량은 ${MAX_FILE_MB}MB 이하로 첨부해 주세요.`;
  }

  if (!values.agree) errors.agree = '개인정보 수집 및 이용에 동의해 주세요.';

  return errors;
}
