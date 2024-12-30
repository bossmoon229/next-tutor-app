import React from "react";
import styles from "./page.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Wotks</h1>
      {children}
    </div>
  );
}
