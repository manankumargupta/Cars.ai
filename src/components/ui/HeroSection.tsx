import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SceneCar } from '../3d/SceneCar';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div className="relative h-full w-full">
          <SceneCar position={[0, 0, 5]} fov={50} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 to-primary-900/70 z-10"></div>
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-metal-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/categories"
              className="btn btn-primary"
            >
              Explore Cars
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8"
        >
          <button
            onClick={scrollToContent}
            className="text-white animate-bounce p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;