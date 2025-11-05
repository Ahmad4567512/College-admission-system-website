
import { motion } from "framer-motion";

const Animate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      {children}
    </motion.div>
  );
};

export default Animate;
