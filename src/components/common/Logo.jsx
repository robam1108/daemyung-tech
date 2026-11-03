import styles from './Logo.module.css';

export default function Logo({ className = '' }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M6 6h11a10 10 0 0 1 0 20H6z" fill="none" stroke="currentColor" strokeWidth="3.2" />
        <rect x="21" y="21" width="6" height="6" fill="var(--orange)" />
      </svg>
      <span className={styles.text}>
        <span className={`${styles.en} en`}>DAEMYUNG TECH</span>
        <span className={styles.ko}>대명테크</span>
      </span>
    </span>
  );
}
