import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.typebubbleInverted}>
      <div className={styles.bubbleContainer}>
        <nav className={styles.navLinks}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Discover</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Sections</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Innovators</div>
          </div>
        </nav>
        <div className={styles.navLinks1}>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Data</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>@MediaAnalysis</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Connect</div>
          </div>
        </div>
        <div className={styles.brand}>
          <div className={styles.brandname}>MediaLens</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
