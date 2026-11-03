import { process } from '../../data/siteContent';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`} aria-labelledby="process-title">
      <div className="container">
        <SectionHeader id="process-title" label={process.label} title={process.title} align="center" />

        <ol className={styles.steps}>
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.en} className={styles.step} delay={i * 110}>
              <span className={styles.node} aria-hidden="true" />
              <p className={`${styles.no} num`}>
                <span className={styles.stepWord}>STEP</span> {step.no}
              </p>
              <div className={styles.body}>
                <p className={`${styles.en} en`}>{step.en}</p>
                <h3 className={styles.title}>{step.ko}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
