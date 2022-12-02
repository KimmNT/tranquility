import styles from "../styles/Collection.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { GraphQLClient, gql } from "graphql-request";

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
  const { collections } = await graphcms.request(QUERY);
  return {
    props: {
      collections,
    },
    revalidate: 10, //10 seconds
  };
}

function collections({ collections }) {
  return (
    <div className={`${styles.collection} ${styles.container}`}>
      <div className={styles.collection__header}>
        <h1 className={styles.headline}>Just Arrived</h1>
        <div className={styles.btn}>View More</div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className={styles.collection__list}
      >
        {collections.map((collection) => (
          <SwiperSlide className={styles.item}>
            <img src={collection.image.url} alt="collection img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default collections;
