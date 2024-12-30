import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button text='See more' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image src='' alt="" fill={true}/>
        </div>
      </div>
    </div>
  );
}
