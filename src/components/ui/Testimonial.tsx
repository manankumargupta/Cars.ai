import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const Testimonial = ({ quote, author, position, avatar }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glasscard p-8 relative"
    >
      <Quote className="text-racing-500 h-12 w-12 absolute top-4 right-4 opacity-50" />
      <p className="text-lg text-white mb-6 relative z-10">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-metal-400">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;