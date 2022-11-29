import styles from "../styles/Collection.module.css";

function Collection({ title, image }) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <img src={image.url} alt="" />
    </div>
  );
}

export default Collection;
