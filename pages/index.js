import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { GraphQLClient, gql } from "graphql-request";
// import ReactPlayer from "react-player";
// import videoSrc from "./videos/video.mp4";
import Nav from "../components/Nav";
import Link from "next/link";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/clb1xr6fr13fv01unfu2j5zhu/master"
);

const QUERY = gql`
  {
    collections {
      title
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

export default function Home({}) {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.thumbnail}>
          {/* <video autoplay loop muted>
            <source src="./video/Rá»«ng - 111101.mp4" type="video/mp4" />
          </video> */}
          <video src="./videos/dear_video.mp4" autoPlay muted loop></video>
        </section>
      </main>
    </div>
  );
}
