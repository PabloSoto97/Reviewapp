import React from "react";
import styles from "../Encabezado/Encabezado.module.css";

function Encabezado() {
  return (
    <section className={styles.typemobileDownload}>
      <div className={styles.container}>
        <div className={styles.copyComponent}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Embark On Your Review Adventure</h1>
            <div className={styles.subheading}>
              Sign up on our platform to evaluate and converse about your
              preferred subjects.
            </div>
          </div>
        </div>
        <div className={styles.visualComp}>
          <div className={styles.visualCompChild} />
        </div>
      </div>
    </section>
  );
}

export default Encabezado;
