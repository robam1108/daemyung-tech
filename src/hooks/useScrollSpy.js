import { useEffect, useState } from 'react';

// Returns the id of the section currently under the header and whether the page has scrolled.
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrollY(y);

      // A section counts as active once its top passes ~35% of the viewport.
      const offset = Math.min(window.innerHeight * 0.35, 320);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      // Last section may be too short to reach the top; treat page bottom as last section.
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return { activeId, scrollY };
}
