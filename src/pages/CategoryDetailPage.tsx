import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CarService, CategoryService } from '../services/api';
import { Car, Category } from '../types/models';
import CarCard from '../components/car/CarCard';
import Loader from '../components/ui/Loader';

const CategoryDetailPage = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!category) return;
      
      try {
        setLoading(true);
        
        // Fetch category details
        const categoryResponse = await CategoryService.getCategoryById(category);
        if (categoryResponse) {
          setCategoryData(categoryResponse);
        }
        
        // Fetch cars in this category
        const carsResponse = await CarService.getCarsByCategory(category);
        setCars(carsResponse);
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  if (!categoryData) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-metal-300 mb-8">
          The category you are looking for does not exist.
        </p>
        <Link to="/categories" className="btn btn-primary">
          View All Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-32">
      <Link 
        to="/categories" 
        className="inline-flex items-center text-metal-300 hover:text-white mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Categories
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
          <img 
            src={categoryData.image} 
            alt={categoryData.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl font-bold text-white">{categoryData.name}</h1>
            <p className="text-metal-300">{categoryData.carCount} models available</p>
          </div>
        </div>
        
        <p className="text-lg text-metal-300">
          {categoryData.description}
        </p>
      </motion.div>
      
      <h2 className="text-2xl font-bold mb-6">Available Models</h2>
      <div className="cars-grid">
        {cars.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;