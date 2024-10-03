// components/HeaderImage.js
import Image from 'next/image';
import styles from '../styles/HeaderImage.module.css'

export default function HeaderImage() {
  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/main.png"
        alt="Header"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
