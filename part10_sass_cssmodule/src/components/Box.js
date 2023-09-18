import Reactq from "react";
import styles from './style/CssBox.module.css';
import firstStyle from './style/First.module.css';
import secondStyle from './style/Second.module.css';

function Box() {
  return (
    <div>
      <div className={styles.Box}>{styles.Box}</div>
    </div>
  )
}

export default Box;