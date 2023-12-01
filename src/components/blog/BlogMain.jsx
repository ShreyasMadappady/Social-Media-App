import BlogItem from "./BlogItem";
import styles from "./BlogMain.module.css";

const blogitems = [
  {
    src: "https://online-communities.demos.buddyboss.com/wp-content/sandbox251653-uploads/2019/05/shutterstock_571220725.jpg",
    description: "Tackle Your closest Spring cleaning",
  },
];

function BlogMain() {
  return (
    <div className={styles.size}>
      <div className={styles.padding}>
        <h1 className={styles.h1style}>Blog</h1>
        {blogitems.map((item) => (
          <BlogItem blogitem={item} key={item.description} />
        ))}
      </div>
    </div>
  );
}

export default BlogMain;
