import { motion } from "framer-motion";
import styles from "../../styles/TopBar.module.scss";

type Props = {
  xPos: number;
};

const TopBarMarker: React.FC<Props> = ({ xPos }) => {
  const calculateDuration = (x: number) => {
    // Exemplo: duração mínima de 0.5 segundos e máxima de 1 segundo, ajustada pela posição x
    return Math.min(0.1 + Math.abs(x) / 1000, 0.2);
  };

  return (
    <motion.div
      className={styles.topBarMarker}
      animate={{
        x: xPos - 3,
        rotate: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.1,
        duration: calculateDuration(xPos),
      }}
    />
  );
};

export default TopBarMarker;
