import styles from "../styles/Nav.module.scss";
import {
  FaGripLines,
  FaShoppingCart,
  FaWindowClose,
  FaFacebookSquare,
  FaInstagram,
  FaShopify,
} from "react-icons/fa";
import Link from "next/link";

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
            <img src="./imgs/brand/logo_dark.png" alt="This is logo" />
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
              <img src="./imgs/brand/brand_name_white.png" alt="navbar logo" />
            </div>
            <label for="navbar" className={styles.close}>
              <FaWindowClose />
            </label>
          </div>
          <div className={styles.navbar__slide_item}>
            <Link href="/" className={styles.item__link}>
              Home
            </Link>
            <Link href="/about" className={styles.item__link}>
              About
            </Link>
            <Link href="/products" className={styles.item__link}>
              Products
            </Link>
            <Link href="/collections" className={styles.item__link}>
              Collections
            </Link>
            <Link href="/contact" className={styles.item__link}>
              Contact
            </Link>
          </div>
          <div className={styles.navbar__slide_media}>
            <div className={styles.media__item}>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookSquare />
              </a>
            </div>
            <div className={styles.media__item}>
              <a href="https://facebook.com" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className={styles.media__item}>
              <a href="https://facebook.com" target="_blank">
                <FaShopify />
              </a>
            </div>
          </div>
        </div>
        <label for="navbar" className={styles.navbar__slide_close} />
      </div>
    </div>
    // <div>
    //   <Link href="/">HOME</Link>
    //   <Link href="/about">ABOUT</Link>
    //   <Link href="/contact">CONTACT US</Link>
    // </div>
  );
}

export default Nav;
