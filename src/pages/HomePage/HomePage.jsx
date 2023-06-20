import { Link } from 'react-router-dom';

import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.sectionHome}>
      <div className={styles.container}>
        <p className={styles.welcom}>Welcome</p>
        <h1 className={styles.name}>FOODI</h1>
        <Link to="/shop/kfc" className={styles.contacts}>
          Go to shop
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
