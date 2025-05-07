import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Car className="h-20 w-20 text-racing-500 mx-auto mb-6" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-medium mb-6">Page Not Found</h2>
        <p className="text-metal-300 mb-8 max-w-lg mx-auto">
          The page you're looking for seems to have taken a wrong turn. Let's get you back on the road.
        </p>
        <Link to="/" className="inline-flex items-center btn btn-primary">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;