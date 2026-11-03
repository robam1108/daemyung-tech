import { company, navItems } from '../../data/siteContent';
import Logo from '../common/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const info = [
    { term: '회사명', value: company.nameKo },
    { term: '사업 분야', value: company.business },
    { term: '주소', value: company.pending },
    { term: '전화', value: '준비 중' },
    { term: '이메일', value: '준비 중' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>정밀함으로 완성하는 산업 제조의 기준</p>
        </div>

        <dl className={styles.info}>
          {info.map((row) => (
            <div key={row.term} className={styles.row}>
              <dt>{row.term}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <nav aria-label="하단 메뉴">
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="en">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className="en">COPYRIGHT © DAEMYUNG TECH. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
