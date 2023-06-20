import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
      <li className={styles.sidebarItem}>
        <Link className={styles.sidebarItem__btn} name="kfc" to="/shop/kfc">
          KFS
        </Link>
      </li>
      <li className={styles.sidebarItem}>
        <Link
          className={styles.sidebarItem__btn}
          name="mcdonny"
          to="/shop/mcdonny"
        >
          Mc Donny
        </Link>
      </li>
      <li className={styles.sidebarItem}>
        <Link
          className={styles.sidebarItem__btn}
          name="sabway"
          to="/shop/sabway"
        >
          Subway
        </Link>
      </li>
      <li className={styles.sidebarItem}>
        <Link
          className={styles.sidebarItem__btn}
          name="pizzahut"
          to="/shop/pizzahut"
        >
          Pizza Hut
        </Link>
      </li>
      <li className={styles.sidebarItem}>
        <Link
          className={styles.sidebarItem__btn}
          name="burgerking"
          to="/shop/burgerking"
        >
          Burger King
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
