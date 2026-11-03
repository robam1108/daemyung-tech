import { useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/siteContent';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Logo from '../common/Logo';
import { CloseIcon, MenuIcon } from '../common/Icons';
import styles from './Header.module.css';

const ids = navItems.map((item) => item.id);

export default function Header() {
  const { activeId, scrollY } = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);
  const scrolled = scrollY > 24;

  // Lock body scroll, close on ESC, and keep focus inside the drawer while open.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('is-locked');
    const drawer = drawerRef.current;
    const focusables = drawer.querySelectorAll('a, button');
    focusables[0]?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      } else if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close the drawer if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} onClick={close}>
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="주요 메뉴">
          <ul className={styles.menu}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.link} en ${activeId === item.id ? styles.active : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.cta}>
          견적 문의
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
        inert={open ? undefined : ''}
      >
        <nav aria-label="모바일 메뉴" className="container">
          <ul className={styles.drawerMenu}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.drawerLink} ${activeId === item.id ? styles.active : ''}`}
                  onClick={close}
                >
                  <span className="en">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.drawerCta} onClick={close}>
            견적 및 제작 문의
          </a>
        </nav>
      </div>
    </header>
  );
}
