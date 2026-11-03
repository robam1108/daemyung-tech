import { projects } from '../../data/siteContent';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import { srcSet } from '../../utils/image';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="project" className={`section ${styles.projects}`} aria-labelledby="project-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeader id="project-title" label={projects.label} title={projects.title} />
          <Reveal as="p" className={styles.note} delay={100}>
            {projects.note}
          </Reveal>
        </div>

        <ul className={styles.grid}>
          {projects.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 100}>
              <article className={styles.card} tabIndex={0} aria-labelledby={`project-${i}`}>
                <img src={item.image.src} srcSet={srcSet(item.image.src)} sizes="(max-width: 767px) 100vw, 630px" alt={item.image.alt} width="1200" height="900" loading="lazy" decoding="async" />
                <div className={styles.overlay}>
                  <span className={`${styles.category} en`}>
                    <span className="num">{String(i + 1).padStart(2, '0')}</span> {item.category}
                  </span>
                  <h3 id={`project-${i}`} className={styles.title}>
                    {item.title}
                  </h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
