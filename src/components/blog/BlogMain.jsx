import BlogItem from "./BlogItem";
import styles from "./BlogMain.module.css";
import blogitems from "../data/data.jsx";

function BlogMain() {
  return (
    <div className={styles.size}>
      <div className={styles.padding}>
        <h1 className={styles.h1style}>Blog</h1>
        {blogitems.map((item) => (
          <BlogItem {...item} key={item.description} />
        ))}
      </div>
    </div>
  );
}

export default BlogMain;
