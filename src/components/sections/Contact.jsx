import { contact } from '../../data/siteContent';
import Reveal from '../common/Reveal';
import ContactForm from './contact/ContactForm';
import { srcSet } from '../../utils/image';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <img className={styles.bg} src={contact.image.src} srcSet={srcSet(contact.image.src)} sizes="100vw" alt="" width="1920" height="1200" loading="lazy" decoding="async" />

      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.intro}>
          <p className={`${styles.label} en`}>{contact.label}</p>
          <h2 id="contact-title" className={styles.title}>
            {contact.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className={styles.desc}>
            {contact.description.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </p>

          <div className={styles.checklist}>
            <p className={`${styles.checklistTitle} en`}>BEFORE YOU SEND</p>
            <ul>
              {contact.checklist.map((item, i) => (
                <li key={item}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.checklistNote}>도면이 없어도 제작 목적과 참고 이미지로 상담을 시작할 수 있습니다.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
