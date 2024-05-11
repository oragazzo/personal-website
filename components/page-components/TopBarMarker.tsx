import { motion } from "framer-motion";
import styles from "../../styles/TopBar.module.scss";

type Props = {
  xPos: number;
};

const TopBarMarker: React.FC<Props> = ({ xPos }) => {
  console.log(xPos);
  return (
    <motion.div
      className={styles.topBarMarker}
      animate={{
        x: xPos - 3,
        rotate: 0,
        opacity: 1,
      }}
    />
  );
};

export default TopBarMarker;
