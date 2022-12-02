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
import {
  FaAngleRight,
  FaHandsWash,
  FaSoap,
  FaSun,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clb1xr6fr13fv01unfu2j5zhu/master"
);

// create a query
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
    products {
      id
      name
      describe {
        html
      }
      image {
        url
      }
      price
    }
    sales {
      name
      describe {
        html
      }
      image {
        url
      }
      beforeDiscount
      afterDiscount
    }
    feedbacks {
      name
      clientImg {
        url
      }
      content {
        html
      }
      job
    }
  }
`;
export async function getStaticProps() {
  const { products } = await graphcms.request(QUERY);
  const { collections } = await graphcms.request(QUERY);
  const { sales } = await graphcms.request(QUERY);
  const { feedbacks } = await graphcms.request(QUERY);

  return {
    props: {
      collections,
      products,
      sales,
      feedbacks,
    },
    revalidate: 10, //10 seconds
  };
}

export default function Home({ collections, products, sales, feedbacks }) {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <main className={styles.main}>
        {/* Thumbnail */}
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
            <h1 className={styles.headline}>JUST ARRIVED</h1>
            <a href="/collections" className={styles.btn}>
              VIEW MORE
            </a>
          </div>
          <Swiper
            //space between items
            spaceBetween={50}
            //number of slides show up
            slidesPerView={3}
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
        <section className={styles.about}>
          <div className={styles.about__header}>
            <div className={styles.about__header_content}>
              <p className={styles.title}>WEAR AND FEEL</p>
              <a href="/about" className={styles.btn}>
                READ MORE
              </a>
            </div>
          </div>
          <div className={`${styles.about__content} ${styles.container}`}>
            <div className={styles.image}>
              <img src="./imgs/brand/clothes_tag.jpg" alt="about img" />
            </div>
            <div className={styles.detail}>
              <h1 className={styles.headline}>OUR VALUE</h1>
              <p className={styles.title}>What We Will Give For You</p>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div className={styles.detail__item}>
                <div className={styles.item}>
                  <div className={styles.item__icon}>
                    <FaHandsWash />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className={styles.item}>
                  <div className={styles.item__icon}>
                    {" "}
                    <FaSoap />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className={styles.item}>
                  <div className={styles.item__icon}>
                    <FaSun />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Products */}
        <section className={`${styles.product} ${styles.container}`}>
          <div className={styles.header}>
            <h1 className={styles.headline}>EXPLORE OUR PRODUCTS</h1>
            <a href="/products" className={styles.btn}>
              VIEW MORE
            </a>
          </div>
          <div className={styles.product__content}>
            <div className={styles.list__item}>
              <Swiper
                //space between items
                spaceBetween={50}
                //number of slides show up
                slidesPerView={4}
                //autoplay
                autoplay={{
                  delay: 2000,
                }}
                className={styles.product__list}
              >
                {products.map((product) => (
                  <SwiperSlide className={styles.item}>
                    <img src={product.image.url} alt="collection img" />
                    <p className={styles.item__detail}>{product.name}</p>
                    <p className={styles.item__detail}>{product.price} VND</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        {/* Sale off */}
        <section className={`${styles.sale} ${styles.container}`}>
          <div className={styles.header}>
            <h1 className={styles.headline}>BIG SALE</h1>
            <a href="/products" className={styles.btn}>
              VIEW MORE
            </a>
          </div>
          <div className={styles.sale__list}>
            {sales.map((sale) => (
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src={sale.image.url} alt="sale img" />
                </div>
                <div className={styles.detail}>
                  <p className={styles.name}>{sale.name}</p>
                  <div className={styles.discount__price}>
                    <p className={`${styles.price}  ${styles.discount}`}>
                      {sale.beforeDiscount} VND
                    </p>
                    <p className={`${styles.price}`}>
                      {sale.afterDiscount} VND
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Feedback */}
        <section className={`${styles.feedback} ${styles.container}`}>
          <div className={styles.feedback__header}>
            <h1 className={styles.headline}>WHAT OUR CLIENTS SAY</h1>
          </div>
          <div className={styles.feedback__content}>
            <Swiper
              //space between items
              spaceBetween={50}
              //number of slides show up
              slidesPerView={2}
              //autoplay
              autoplay={{
                delay: 2000,
              }}
              className={styles.feedback__list}
            >
              {feedbacks.map((feedback) => (
                <SwiperSlide className={styles.item}>
                  <div className={styles.item__content}>
                    <div className={styles.item__content_icon}>
                      <FaQuoteLeft />
                    </div>
                    <div
                      className={styles.item__content_text}
                      dangerouslySetInnerHTML={{
                        __html: feedback.content.html,
                      }}
                    ></div>{" "}
                    <p className={styles.item__content_name}>
                      - {feedback.name}{" "}
                      <span className={styles.item__content_job}>
                        {feedback.job}
                      </span>
                    </p>
                  </div>

                  <div className={styles.item__user}>
                    <img src={feedback.clientImg.url} alt="feedback img" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* Member */}
        <section className={styles.member}>
          <div className={styles.member__content}>
            <div className={styles.detail}>
              <h1>10% Discount For The First Order</h1>
              <a href="/products" className={styles.btn}>
                SHOP NOW
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
