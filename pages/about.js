import styles from "../styles/About.module.scss";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clb1xr6fr13fv01unfu2j5zhu/master"
);

// create a query
const QUERY = gql`
  {
    changeBanners {
      bannerImg {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { changeBanners } = await graphcms.request(QUERY);
  return {
    props: {
      changeBanners,
    },
    revalidate: 10, //10 seconds
  };
}
function About({ changeBanners }) {
  return (
    <div className={styles.about}>
      {/* BANNER */}
      <section className={styles.banner}>
        {changeBanners.map((changeBanner) => (
          <img src={changeBanner.bannerImg.url} alt="banner img" />
        ))}
        <h4 className={styles.banner__title}>About Us</h4>
      </section>
      {/* ABOUT CONTENT */}
      {/* WELCOME */}
      <section className={`${styles.about__welcome} ${styles.container}`}>
        <div className={styles.welcome__headline}>
          Welcome To <span>Tranquility</span>
        </div>
        <div className={styles.welcome__content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <button>
            <a href="./products">SEE ALL PRODUCTS</a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
