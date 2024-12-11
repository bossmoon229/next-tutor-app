import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
            expedita modi soluta laudantium voluptas architecto ratione eaque
            aperiam. Sunt cum ab totam officia dignissimos aperiam. Fugit
            dolores temporibus consectetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque dignissimos, quidem eos
            laudantium ipsam nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Rem, a sunt doloribus facilis natus distinctio
            molestiae animi neque ullam
            <br />
            <br />
            eaque possimus, voluptates reiciendis accusamus quibusdam
            repellendus est ad? Amet, aut? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Animi numquam natus, ut, placeat
            facilis doloribus pariatur neque labore deleniti, vel earum minima
            nemo obcaecati. Ratione non vel quo quam maiores!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            blanditiis tenetur ad reprehenderit consectetur voluptate
            cupiditate, numquam, saepe laborum voluptas consequatur animi
            doloremque, architecto libero iste quidem deserunt! Repudiandae,
            cumque!
          </p>
          <br />
          <br />
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
