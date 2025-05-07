import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryService } from '../services/api';
import { Category } from '../types/models';
import CategoryCard from '../components/car/CategoryCard';
import Loader from '../components/ui/Loader';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-custom py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Car Categories</h1>
        <p className="text-metal-300 max-w-2xl mx-auto">
          Explore our extensive collection of cars organized by category, from everyday commuters to high-performance hypercars.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;