import Reveal from './Reveal';
import styles from './SectionHeader.module.css';

// EN label + two-line KO title (+ optional description). `tone="dark"` for navy backgrounds.
export default function SectionHeader({ id, label, title, description, tone = 'light', align = 'left', className = '' }) {
  return (
    <Reveal className={`${styles.header} ${styles[tone]} ${styles[align]} ${className}`}>
      <p className={`${styles.label} en`}>{label}</p>
      <h2 id={id} className={styles.title}>
        {title.map((line, i) => (
          <span key={i} className={styles.line}>
            {line}
          </span>
        ))}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  );
}
