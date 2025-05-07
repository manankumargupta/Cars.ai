import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Category } from '../../types/models';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-80 rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
            <p className="text-sm text-metal-300 mb-4 max-w-xs">
              {category.description}
            </p>
            <p className="text-xs text-metal-400">{category.carCount} models available</p>
          </div>
          
          <Link
            to={`/categories/${category.id}`}
            className="bg-racing-500 hover:bg-racing-600 text-white p-3 rounded-full transform transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;