import React from "react";
import styles from './footer.module.css';
import Image from "next/image";

export default function Footer() {
  console.log('Hello');
  return (
    <div className={styles.container}>
      <div>@2024 Some Dev. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt="Some Dev FaceBook"/>
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt="Some Dev Instagram"/>
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt="Some Dev Twitter"/>
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt="Some Dev YouTube"/>
      </div>
    </div>
  )
}
