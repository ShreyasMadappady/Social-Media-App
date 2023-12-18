import styles from "./RightSideMain.module.css";
const lastestUpdateData = [
  {
    src: "https://online-communities.demos.buddyboss.com/wp-content/sandbox252387-uploads/avatars/2/621e2ce4392dd-bpthumb.png",
    content: "John posted an update",
    year: 2,
  },
];
function RightSideMain() {
  return (
    <div>
      <h1 className={styles.title}>Latest Update</h1>
      <div className={styles.flex1}>
        <img
          src="https://online-communities.demos.buddyboss.com/wp-content/sandbox252387-uploads/avatars/2/621e2ce4392dd-bpthumb.png"
          alt=""
          className={styles.img}
        />
        <div>
          <h1 className={styles.h1style}>John posted an update</h1>
          <h2 className={styles.h2style}>2 years ago</h2>
        </div>
      </div>
    </div>
  );
}

export default RightSideMain;
