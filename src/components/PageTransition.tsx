import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname} // Triggers animation on route change
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
