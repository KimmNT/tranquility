import styles from "../styles/Footer.module.scss";
//icon
import { FaFacebookF, FaInstagram, FaShopify } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__content} ${styles.container}`}>
        <div className={styles.footer__top}>
          <div className={`${styles.logo} ${styles.item}`}>
            <img src="./imgs/brand/brand_name_white.png" alt="footer img" />
          </div>
          <div className={`${styles.navigation} ${styles.item}`}>
            <div className={styles.navigation__item}>
              <a href="/about">ABOUT</a>
            </div>
            <div className={styles.navigation__item}>
              <a href="/products">PRODUCTS</a>
            </div>
            <div className={styles.navigation__item}>
              <a href="/collections">COLLECTIONS</a>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={`${styles.content}`}>
            <p>Copyright 2022 All rights reserved - Designed by KimJose</p>
            <div className={`${styles.media}`}>
              <a href="https:/facebook.com/" className={styles.media__item}>
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/" className={styles.media__item}>
                <FaInstagram />
              </a>
              <a href="https://shopee.vn/" className={styles.media__item}>
                <FaShopify />
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
