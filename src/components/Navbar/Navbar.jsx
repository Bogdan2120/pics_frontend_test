import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarMenu from './NavbarMenu/NavbarMenu';

import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <NavbarLogo />
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
