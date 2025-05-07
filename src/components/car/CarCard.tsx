import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Car } from '../../types/models';

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard = ({ car, index }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <img 
          src={car.images.main} 
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <p className="text-xs uppercase tracking-wider text-metal-300">
            {car.category === 'common' ? 'Common' : car.category === 'luxury' ? 'Luxury' : 'Hyper'}
          </p>
          <h3 className="text-xl font-bold text-white">
            {car.brand} {car.name}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-accent-500 font-bold">
            ${car.price.toLocaleString()}
          </p>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-xs text-metal-400">HP</p>
              <p className="font-medium">{car.horsepower}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-metal-400">0-60</p>
              <p className="font-medium">{car.acceleration}s</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-metal-400">TOP</p>
              <p className="font-medium">{car.topSpeed} mph</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-metal-300 mb-4 line-clamp-2">
          {car.description}
        </p>
        <Link 
          to={`/car/${car.id}`}
          className="flex items-center justify-between bg-primary-700 hover:bg-racing-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;