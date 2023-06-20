import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.sectionHome}>
      <div className={styles.container}>
        <p className={styles.welcom}>Welcome</p>
      </div>
    </div>
  );
};

export default HomePage;
