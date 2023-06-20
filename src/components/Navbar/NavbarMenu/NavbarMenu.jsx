import { NavLink } from 'react-router-dom';

import items from './items';

import styles from './navbarMenu.module.scss';

const NavbarMenu = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
