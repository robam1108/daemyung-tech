import { useRef, useState } from 'react';
import { contact } from '../../../data/siteContent';
import { submitInquiry } from '../../../services/inquiryService';
import { ArrowIcon, CloseIcon, FileIcon } from '../../common/Icons';
import { ACCEPTED_EXT, MAX_FILE_MB, validateInquiry } from './validateInquiry';
import styles from './ContactForm.module.css';

const initial = { company: '', name: '', phone: '', email: '', type: '', message: '', agree: false };

const FIELD_ORDER = ['company', 'name', 'phone', 'email', 'type', 'message', 'attachment', 'agree'];

const NOTICES = {
  NOT_CONNECTED: {
    tone: 'info',
    title: '현재 온라인 접수 기능은 준비 중입니다.',
    text: '입력하신 내용은 전송되지 않았습니다. 작성하신 내용은 화면에 그대로 유지됩니다.',
  },
  NETWORK_ERROR: {
    tone: 'error',
    title: '문의를 전송하지 못했습니다.',
    text: '잠시 후 다시 시도해 주세요. 입력하신 내용은 그대로 유지됩니다.',
  },
  SUCCESS: {
    tone: 'success',
    title: '문의가 접수되었습니다.',
    text: '검토 후 담당자가 연락드리겠습니다.',
  },
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting
  const [notice, setNotice] = useState(null);
  const formRef = useRef(null);
  const fileRef = useRef(null);

  const update = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    setNotice(null);
    if (touched[name]) setErrors(validateInquiry(next, file));
  };

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    update(name, type === 'checkbox' ? checked : value);
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validateInquiry(values, file));
  };

  const onFile = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    setNotice(null);
    setTouched((t) => ({ ...t, attachment: true }));
    setErrors(validateInquiry(values, f));
  };

  const clearFile = () => {
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
    setErrors(validateInquiry(values, null));
    fileRef.current?.focus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validateInquiry(values, file);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((k) => [k, true])));

    const firstInvalid = FIELD_ORDER.find((k) => found[k]);
    if (firstInvalid) {
      setNotice(null);
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    const data = new FormData(formRef.current);
    const result = await submitInquiry(data);
    setStatus('idle');

    if (result.ok) {
      setNotice(NOTICES.SUCCESS);
      setValues(initial);
      clearFile();
      setTouched({});
    } else {
      setNotice(NOTICES[result.reason] ?? NOTICES.NETWORK_ERROR);
    }
  };

  const fieldProps = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] && touched[name] ? true : undefined,
    'aria-describedby': errors[name] && touched[name] ? `e-${name}` : undefined,
  });

  const FieldError = ({ name }) =>
    errors[name] && touched[name] ? (
      <p id={`e-${name}`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate aria-label="견적 및 제작 문의 양식">
      <p className={styles.required}>
        <span aria-hidden="true">*</span> 표시는 필수 입력 항목입니다.
      </p>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="f-company">
            회사명 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="organization" required {...fieldProps('company')} />
          <FieldError name="company" />
        </div>

        <div className={styles.field}>
          <label htmlFor="f-name">
            담당자명 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          <FieldError name="name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="f-phone">
            연락처 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <input type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" required {...fieldProps('phone')} />
          <FieldError name="phone" />
        </div>

        <div className={styles.field}>
          <label htmlFor="f-email">
            이메일 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" placeholder="name@company.com" required {...fieldProps('email')} />
          <FieldError name="email" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="f-type">
            문의 분야 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <div className={styles.selectWrap}>
            <select required {...fieldProps('type')}>
              <option value="" disabled>
                문의 분야를 선택해 주세요
              </option>
              {contact.inquiryTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <FieldError name="type" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="f-message">
            문의 내용 <span className={styles.req} aria-hidden="true">*</span>
          </label>
          <textarea
            rows={6}
            required
            placeholder="제작 품목, 소재, 수량, 희망 일정 등을 적어주시면 검토에 도움이 됩니다."
            {...fieldProps('message')}
          />
          <FieldError name="message" />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <span className={styles.labelText} id="l-attachment">
            도면 및 참고 파일 첨부 <span className={styles.optional}>(선택)</span>
          </span>
          <div className={styles.file}>
            <input
              ref={fileRef}
              id="f-attachment"
              name="attachment"
              type="file"
              className="visually-hidden"
              accept={ACCEPTED_EXT.map((e) => `.${e}`).join(',')}
              onChange={onFile}
              aria-labelledby="l-attachment"
              aria-invalid={errors.attachment ? true : undefined}
              aria-describedby={errors.attachment ? 'e-attachment' : 'h-attachment'}
            />
            <label htmlFor="f-attachment" id="f-attachment-btn" className={styles.fileButton}>
              <FileIcon /> 파일 선택
            </label>
            {file ? (
              <span className={styles.fileName}>
                <span>{file.name}</span>
                <button type="button" className={styles.fileClear} onClick={clearFile} aria-label="첨부 파일 삭제">
                  <CloseIcon />
                </button>
              </span>
            ) : (
              <span className={styles.fileHint} id="h-attachment">
                {ACCEPTED_EXT.slice(0, 6).join(', ').toUpperCase()} 등 · 최대 {MAX_FILE_MB}MB
              </span>
            )}
          </div>
          {errors.attachment && (
            <p id="e-attachment" className={styles.error}>
              {errors.attachment}
            </p>
          )}
        </div>
      </div>

      <div className={styles.agree}>
        <label className={styles.check}>
          <input
            type="checkbox"
            name="agree"
            checked={values.agree}
            onChange={onChange}
            aria-invalid={errors.agree && touched.agree ? true : undefined}
            aria-describedby={errors.agree && touched.agree ? 'e-agree' : 'd-agree'}
          />
          <span>
            개인정보 수집 및 이용에 동의합니다. <span className={styles.req} aria-hidden="true">*</span>
          </span>
        </label>
        <p id="d-agree" className={styles.agreeDesc}>
          수집 항목: 회사명, 담당자명, 연락처, 이메일 · 이용 목적: 견적 및 제작 상담 회신
        </p>
        <FieldError name="agree" />
      </div>

      <div className={styles.footer}>
        <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
          <span>{status === 'submitting' ? '확인 중…' : '제작 문의하기'}</span>
          <ArrowIcon />
        </button>
      </div>

      <div aria-live="polite" role="status">
        {notice && (
          <div className={`${styles.notice} ${styles[notice.tone]}`}>
            <strong>{notice.title}</strong>
            <p>{notice.text}</p>
          </div>
        )}
      </div>
    </form>
  );
}
