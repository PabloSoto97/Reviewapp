import styles from "./TestimonialContainer.module.css";

const TestimonialContainer = ({
  userProfileImage,
  userDescription,
  reviewQuoteText,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.avatarLummiavatarsParent}>
        <img
          className={styles.avatarLummiavatarsIcon}
          alt=""
          src={userProfileImage}
        />
        <div className={styles.name}>{userDescription}</div>
      </div>
      <div className={styles.shortTestimonial}>{reviewQuoteText}</div>
    </div>
  );
};

export default TestimonialContainer;
