'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const revealContent = () => {
      // Remover la clase hidden del main-content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.classList.remove('hidden');
      }

      setIsFading(true);

      setTimeout(() => {
        setIsVisible(false);
        // Remover los event listeners después de ocultar
        window.removeEventListener('scroll', revealContent);
        window.removeEventListener('mousemove', revealContent);
        window.removeEventListener('touchstart', revealContent);
        window.removeEventListener('wheel', revealContent);
      }, 500);
    };

    // Agregar event listeners
    window.addEventListener('scroll', revealContent, { passive: true });
    window.addEventListener('mousemove', revealContent, { once: true });
    window.addEventListener('touchstart', revealContent, { once: true });
    window.addEventListener('wheel', revealContent, { once: true, passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', revealContent);
      window.removeEventListener('mousemove', revealContent);
      window.removeEventListener('touchstart', revealContent);
      window.removeEventListener('wheel', revealContent);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div id="preloader" className={`preloader ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <Image
            src="/svgs/logo.svg"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <div className="preloader-scroll-indicator">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scroll-arrow"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
