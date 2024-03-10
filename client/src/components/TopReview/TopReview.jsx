import React from "react";
import styles from "./TopReview.module.css";
function TopReview() {
  return (
    <section className={styles.typebigCards}>
      <div className={styles.content}>
        <div className={styles.featureLummi}>
          <div className={styles.heading1}>
            <h1 className={styles.featureTitle}>Newest Critiques</h1>
          </div>
          <div className={styles.featureDescription}>
            Find out the latest assessments from our members.
          </div>
        </div>
        <div className={styles.featureGrid}>
          <div className={styles.cardsLummi}>
            <div className={styles.heading1}>
              <div className={styles.featureTitle1}>Best Scores</div>
            </div>
            <div className={styles.featureDescription1}>
              Check out what's popular in films, tunes, and literature.
            </div>
          </div>
          <div className={styles.featureLummi1}>
            <div className={styles.heading1}>
              <h1 className={styles.featureTitle}>Chief's Choices</h1>
            </div>
            <div className={styles.featureDescription}>
              Handpicked choices by our professional critique squad.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopReview;
