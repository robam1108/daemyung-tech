import { about } from '../../data/siteContent';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import { srcSet } from '../../utils/image';
import styles from './Company.module.css';

export default function Company() {
  return (
    <section id="company" className={`section ${styles.company}`} aria-labelledby="company-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.text}>
            <SectionHeader id="company-title" label={about.label} title={about.title} />
            <Reveal className={styles.body} delay={100}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>

          <Reveal className={styles.media} delay={150}>
            <img
              src={about.image.src}
              srcSet={srcSet(about.image.src)}
              sizes="(max-width: 1023px) min(100vw, 560px), 560px"
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
            />
            <span className={`${styles.caption} en`} aria-hidden="true">
              PRECISION SHEET METAL
            </span>
          </Reveal>
        </div>

        <ul className={styles.values}>
          {about.values.map((v, i) => (
            <Reveal as="li" key={v.en} className={styles.value} delay={i * 100}>
              <span className={`${styles.no} num`}>{v.no}</span>
              <h3 className={styles.valueTitle}>
                <span className={`${styles.valueEn} en`}>{v.en}</span>
                {v.ko}
              </h3>
              <p className={styles.valueText}>{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
