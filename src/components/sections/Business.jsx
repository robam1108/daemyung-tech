import { business } from '../../data/siteContent';
import { ArrowIcon } from '../common/Icons';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import { srcSet } from '../../utils/image';
import styles from './Business.module.css';

export default function Business() {
  return (
    <section id="business" className={`section ${styles.business}`} aria-labelledby="business-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeader id="business-title" label={business.label} title={business.title} />
          <Reveal as="p" className={styles.lead} delay={100}>
            {business.description}
          </Reveal>
        </div>

        <ul className={styles.cards}>
          {business.items.map((item, i) => (
            <Reveal as="li" key={item.en} delay={i * 100}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <img src={item.image.src} srcSet={srcSet(item.image.src)} sizes="(max-width: 679px) 100vw, (max-width: 1023px) 42vw, 410px" alt={item.image.alt} width="1200" height="900" loading="lazy" decoding="async" />
                  <span className={`${styles.no} num`}>{item.no}</span>
                </div>
                <div className={styles.body}>
                  <p className={`${styles.en} en`}>{item.en}</p>
                  <h3 className={styles.title}>{item.ko}</h3>
                  <p className={styles.text}>{item.text}</p>
                  <a href={item.detail} className={`${styles.more} en`}>
                    VIEW DETAILS
                    <span className="visually-hidden"> — {item.ko} 관련 설비 보기</span>
                    <ArrowIcon className={styles.arrow} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
