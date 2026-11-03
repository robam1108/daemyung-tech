import { ArrowIcon } from './Icons';
import styles from './Button.module.css';

// variant: primary (orange) | outline-light (on dark) | outline-dark (on light)
export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const cls = `${styles.button} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon className={styles.arrow} />}
    </>
  );

  return href ? (
    <a href={href} className={cls} {...rest}>
      {content}
    </a>
  ) : (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
