import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { GraphQLClient, gql } from "graphql-request";
import Nav from "../components/Nav";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
//icon
import { FaAngleRight } from "react-icons/fa";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clb1xr6fr13fv01unfu2j5zhu/master"
);

const QUERY = gql`
  {
    collections {
      id
      title
      describe {
        html
      }
      image {
        url
      }
    }
  }
`;
export async function getStaticProps() {
  const { changings } = await graphcms.request(QUERY);
  const { collections } = await graphcms.request(QUERY);

  return {
    props: {
      collections,
    },
    revalidate: 10, //10 seconds
  };
}

export default function Home({ collections }) {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.thumbnail}>
          {/* <video autoplay loop muted>
            <source src="./video/Rá»«ng - 111101.mp4" type="video/mp4" />
          </video> */}
          <video src="./videos/dear_video.mp4" autoPlay muted loop></video>
          <div className={styles.thumbnail__btn}>
            <a href="/about">SHOP NOW</a>
          </div>
        </section>
        {/* Collection */}
        <section className={`${styles.collection} ${styles.container}`}>
          <div className={styles.header}>
            <h1 className={styles.headline}>Just Arrived</h1>
            <a href="/collections" className={styles.btn}>
              View More
            </a>
          </div>
          <Swiper
            //space between items
            spaceBetween={50}
            //number of slides show up
            slidesPerView={4}
            //autoplay
            autoplay={{
              delay: 2000,
            }}
            className={styles.collection__list}
          >
            {collections.map((collection) => (
              <SwiperSlide className={styles.item}>
                <img src={collection.image.url} alt="collection img" />
                <p className={styles.item__name}>{collection.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* About us */}
        <section className={`${styles.about}`}>
          <div className={`${styles.header}  ${styles.container}`}>
            <h1 className={styles.headline}>About Us</h1>
          </div>
          <div className={styles.about__content}>
            <div className={styles.card}>
              <div className={styles.card__content}>
                <p className={styles.slogan}>Wear and Feel</p>
                <a href="/about" className={styles.btn}>
                  Read More
                </a>
              </div>
            </div>
            <div className={`${styles.inspiration} ${styles.container}`}>
              <div className={styles.headline}>
                <p>INSPIRATION</p>
                <div className={styles.headline__img}>
                  <img src="./imgs/brand/logo_dark.png" alt="about logo" />
                </div>
              </div>
              <div className={styles.content}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <a href="/about" className={styles.content__btn}>
                  Read More <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
