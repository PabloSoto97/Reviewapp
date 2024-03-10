import React from "react";
import styles from "./Fotter.module.css";
function Fotter() {
  return (
    <section className={styles.typemegaMenu}>
      <footer className={styles.content2}>
        <div className={styles.brandParent}>
          <div className={styles.brand}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.brandname}>MediaLens</div>
          </div>
          <div className={styles.brandname1}>Evaluate. Debate. Uncover.</div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <div className={styles.brandname}>Company</div>
            <div className={styles.listLinkItem}>About</div>
            <div className={styles.listLinkItem}>Careers</div>
            <div className={styles.listLinkItem}>Newsroom</div>
          </div>
          <div className={styles.list}>
            <div className={styles.brandname}>Key Points</div>
            <div className={styles.listLinkItem}>User-friendly</div>
            <div className={styles.listLinkItem}>Varied</div>
            <div className={styles.listLinkItem}>Improvements</div>
          </div>
          <div className={styles.list}>
            <div className={styles.brandname}>Social</div>
            <div className={styles.listLinkItem}>Twitter</div>
            <div className={styles.listLinkItem}>Instagram</div>
            <div className={styles.listLinkItem}>Threads</div>
          </div>
          <div className={styles.list}>
            <div className={styles.brandname}>Legal</div>
            <div className={styles.listLinkItem}>Terms</div>
            <div className={styles.listLinkItem}>Privacy</div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Fotter;
