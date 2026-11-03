import { ctaBand } from '../../data/siteContent';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import { srcSet } from '../../utils/image';
import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <aside className={styles.band} aria-labelledby="cta-band-title">
      <img className={styles.bg} src={ctaBand.image.src} srcSet={srcSet(ctaBand.image.src)} sizes="100vw" alt="" width="1920" height="900" loading="lazy" decoding="async" />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.text}>
          <p className={`${styles.label} en`}>{ctaBand.label}</p>
          <h2 id="cta-band-title" className={styles.title}>
            {ctaBand.title}
          </h2>
          <p className={styles.desc}>{ctaBand.text}</p>
        </Reveal>
        <Reveal delay={120}>
          <Button href="#contact" arrow>
            견적 및 제작 문의
          </Button>
        </Reveal>
      </div>
    </aside>
  );
}
