import { hero } from '../../data/siteContent';
import { srcSet } from '../../utils/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.bg}
        src={hero.image.src}
        srcSet={srcSet(hero.image.src)}
        sizes="(max-width: 767px) 75vh, (max-aspect-ratio: 17/10) 170vh, 100vw"
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        fetchpriority="high"
        decoding="async"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={`${styles.label} en`}>{hero.label}</p>
        <h1 id="hero-title" className={styles.title}>
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className={styles.description}>
          {hero.description.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>

      <div className={styles.strip}>
        <ul className={`container ${styles.competencies}`} aria-label="핵심 역량">
          {hero.competencies.map((c, i) => (
            <li key={c.en} className={styles.competency}>
              <span className={`${styles.index} num`}>0{i + 1}</span>
              <span className={`${styles.compEn} en`}>{c.en}</span>
              <span className={styles.compKo}>{c.ko}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
