import React from "react";
import TestimonialContainer from "../TestimonialContainer";
import styles from "./Opiniones.module.css";
function Opiniones() {
  return (
    <section className={styles.property1horizontalCards}>
      <div className={styles.content1}>
        <h1 className={styles.heading4}>Member Opinions</h1>
        <div className={styles.cards}>
          <TestimonialContainer
            userProfileImage="/avatar-lummiavatars@2x.png"
            userDescription="Jordan Smith, Cinema Enthusiast"
            reviewQuoteText="“An amazing platform for critique enthusiasts!”"
          />
          <TestimonialContainer
            userProfileImage="/avatar-lummiavatars@2x.png"
            userDescription="Alicia Clark, Bibliophile"
            reviewQuoteText="“The perceptions I gained here are unparalleled. Absolutely adore it!”"
          />
        </div>
      </div>
    </section>
  );
}

export default Opiniones;
