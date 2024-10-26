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
        width={1200}
        height={600}
        priority
        quality={100}
      />
      <div className={styles.overlay}></div>
    </div>
  );
}
