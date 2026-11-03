import { capability } from '../../data/siteContent';
import { CapabilityIcon } from '../common/Icons';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import { srcSet } from '../../utils/image';
import styles from './Capability.module.css';

export default function Capability() {
  return (
    <section id="capability" className={`section ${styles.capability}`} aria-labelledby="capability-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <img
            src={capability.image.src}
            srcSet={srcSet(capability.image.src)}
            sizes="(max-width: 1023px) 100vw, 600px"
            alt={capability.image.alt}
            width={capability.image.width}
            height={capability.image.height}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className={styles.content}>
          <SectionHeader
            id="capability-title"
            label={capability.label}
            title={capability.title}
            description={capability.description}
            tone="dark"
          />

          <ol className={styles.list}>
            {capability.items.map((item, i) => (
              <Reveal as="li" key={item.title} className={styles.item} delay={i * 80}>
                <span className={styles.icon}>
                  <CapabilityIcon name={item.icon} />
                </span>
                <div>
                  <h3 className={styles.itemTitle}>
                    <span className={`${styles.itemNo} num`}>{String(i + 1).padStart(2, '0')}</span>
                    {item.title}
                  </h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
