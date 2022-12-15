import React from "react";
import styles from "./AppOnly.module.css";

const AppOnlyP = ({ id }) => {
  return (
    <div className={styles.AppOnlyP}>
      <section className={styles.AppOnlySection}>
        <div>
          <img className={styles.AppOnlyproductImage} src={id.image} alt="" />
          <p className={styles.titleAppOnly}>{id.title}</p>
          <p>${id.price}</p>
          <p className={styles.AppOnlyFsale}>Flash Sale</p>
        </div>
      </section>
    </div>
  );
};

export default AppOnlyP;
