import * as React from "react";
import { styles } from "./Loops.css";

export const Loops = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.loopContainer}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
        <div className={styles.line4}></div>
        <div className={styles.line5}></div>
      </div>
    </div>
  );
};

export default Loops;
