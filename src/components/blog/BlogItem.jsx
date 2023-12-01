import styles from "./BlogItem.module.css";

function BlogItem({ src, description }) {
  console.log(src)
  return (
    <div className={styles.flex}>
      <img className={styles.img} src={src}></img>
      <div className={styles.flex2}>
        <h1>{description}</h1>
        <h2 className={styles.h2}>May 13, 2000</h2>
      </div>
    </div>
  );
}

export default BlogItem;
