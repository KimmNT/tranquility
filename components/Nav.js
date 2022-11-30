import styles from "../styles/Nav.module.scss";
import { FaGripLines, FaShoppingCart, FaWindowClose } from "react-icons/fa";

function Nav({ logo, thumbnail }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.top__menu}>
        <div className={`${styles.top__menu__content} ${styles.container}`}>
          <div className={styles.top__menu__item}>
            <label for="navbar">
              {" "}
              <FaGripLines />
            </label>
          </div>
          <div className={styles.top__menu__logo}>
            <img src={logo.url} alt="This is logo" />
          </div>
          <div className={styles.top__menu__item}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
      <input type={"checkbox"} id="navbar" className={styles.navbar__input} />
      <div className={styles.navbar__slide}>
        <div className={styles.navbar__slide_content}>
          <div className={styles.navbar__slide_top}>
            <div className={styles.img}>
              <img src={thumbnail.url} alt="navbar logo" />
            </div>
            <label for="navbar" className={styles.close}>
              <FaWindowClose />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
