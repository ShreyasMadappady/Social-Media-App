import ActivityFeedMain from "../components/activityfeed/ActivityFeedMain";
import BlogMain from "../components/blog/BlogMain";
import HeaderMain from "../components/header/HeaderMain";
import LeftSideMain from "../components/leftsidepanel/LeftSideMain";
import RightSideMain from "../components/rightsidepanel/RightSideMain";
import styles from "./Layout.module.css";
function Layout() {
  return (
    <div className={styles.grid}>
      <LeftSideMain />
      <HeaderMain />
      <div className={styles.flex}>
        <BlogMain />
        <ActivityFeedMain />
        <RightSideMain />
      </div>
    </div>
  );
}

export default Layout;
