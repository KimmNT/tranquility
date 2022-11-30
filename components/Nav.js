import styles from "../styles/Nav.module.scss";
import { FaGripLines, FaShoppingCart } from "react-icons/fa";

function Nav({ logo }) {
  return (
    <div className={styles.navbar}>
      <div className={`${styles.navbar__content} ${styles.container}`}>
        <div className={styles.navbar__item}>
          <FaGripLines />
        </div>
        <div className={styles.navbar__logo}>
          <img src={logo.url} alt="This is logo" />
        </div>
        <div className={styles.navbar__item}>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Nav;
