'ues client';
// components/HeaderImage.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/HeaderImage.module.css';

export default function HeaderImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away so state gets updated with initial window.scrollY
    handleScroll();

    return () => {
      // Clean up by removing the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayOpacity = Math.min(scrollY / 500, 0.8);

  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/main.png"
        alt="Header"
        layout="fill"
        objectFit="cover"
        priority 
        quality={100} 
      />
      <div 
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      ></div>
    </div>
  );
}