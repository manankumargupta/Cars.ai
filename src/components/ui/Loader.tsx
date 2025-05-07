import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-4 border-racing-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loader;