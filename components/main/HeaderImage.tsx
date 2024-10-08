'use client';
// components/HeaderImage.tsx
import Image from 'next/image';
import styles from '../styles/HeaderImage.module.css';

export default function HeaderImage() {
  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/main.png"
        alt="Header"
        layout="responsive" // Change to responsive
        width={1200} // Specify your desired width
        height={600} // Specify your desired height
        priority
        quality={100}
      />
      <div className={styles.overlay}></div>
    </div>
  );
}
