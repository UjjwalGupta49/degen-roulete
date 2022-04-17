import { NavAppBar } from "../components/componentIndex";
import styles from "../styles/Degen.module.css";

export default function FirstPost() {
  return (
    <div>
      {" "}
      <div className={styles.navbarPosition}>
        <NavAppBar />
      </div>
      <div className={styles.degenText}>
        <h1 >Degen</h1>
      </div>
    </div>
  );
}
