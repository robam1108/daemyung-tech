import { facilities } from '../../data/siteContent';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import { srcSet } from '../../utils/image';
import styles from './Facilities.module.css';

export default function Facilities() {
  return (
    <section id="facilities" className={`section ${styles.facilities}`} aria-labelledby="facilities-title">
      <div className="container">
        <SectionHeader
          id="facilities-title"
          label={facilities.label}
          title={facilities.title}
          description={facilities.description}
        />

        <ul className={styles.grid}>
          {facilities.items.map((item, i) => (
            <Reveal as="li" key={item.en} id={item.id} className={styles.card} delay={i * 90}>
              <div className={styles.media}>
                <img src={item.image.src} srcSet={srcSet(item.image.src)} sizes="(max-width: 559px) 112px, (max-width: 1023px) 50vw, 310px" alt={item.image.alt} width="1200" height="900" loading="lazy" decoding="async" />
              </div>
              <div className={styles.body}>
                <span className={`${styles.no} num`} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className={`${styles.en} en`}>{item.en}</h3>
                <p className={styles.ko}>{item.ko}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
