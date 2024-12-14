'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Logos.module.css";

const Logos: React.FC = () => {
const [logos, setLogos] = useState<string[]>([]);

useEffect(() => {
const logoFiles: string[] = [
    "company1.png",
    "company2.png",
    "company3.png",
    "company5.png",
    "company6.png",
    "company7.svg",
    "company8.svg",
    "company9.svg",
];
setLogos(logoFiles);
}, []);
const duplicatedLogos = [...logos, ...logos,...logos,...logos,...logos];
return (
<div className={styles.logosContainer}>
    <div className={styles.scrollWrapper}>
    {duplicatedLogos.map((logo: string, index: number) => (
        <div key={index} className={styles.logoWrapper}>
        <Image
            src={`/logo/${logo}`}
            alt={`Logo of ${logo.replace(/\.[^/.]+$/, "")}`}
            width={100}
            height={100}
            className={styles.logoImage}
            loading="lazy"
        />
        </div>
    ))}
    </div>
</div>
);
};

export default Logos;
