import HeadeRight from "./HeadeRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLogo from "./headerLogo";
import styles from "./HeaderMain.module.css";
function HeaderMain() {
  return (
    <div className={styles.flex}>
      <HeaderLogo />
      <HeaderCenter />
      <HeadeRight />
    </div>
  );
}

export default HeaderMain;
