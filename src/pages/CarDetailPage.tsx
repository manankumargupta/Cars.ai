import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Wine as Engine, Gauge, Zap, PaintBucket, Check } from 'lucide-react';
import { SceneCar } from '../components/3d/SceneCar';
import { CarService, CommunityService } from '../services/api';
import { Car, Comment } from '../types/models';
import Loader from '../components/ui/Loader';

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        
        // Fetch car details
        const carResponse = await CarService.getCarById(id);
        if (carResponse) {
          setCar(carResponse);
          setActiveImage(carResponse.images.main);
        }
        
        // Fetch comments for this car
        const commentsResponse = await CommunityService.getCommentsForCar(id);
        setComments(commentsResponse);
      } catch (error) {
        console.error('Error fetching car data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the comment to the API
    alert('Comment feature would be implemented in a real app!');
    setCommentText('');
  };

  if (loading) {
    return <Loader />;
  }

  if (!car) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p className="text-metal-300 mb-8">
          The car you are looking for does not exist.
        </p>
        <Link to="/categories" className="btn btn-primary">
          Browse Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-32">
      <Link 
        to={`/categories/${car.category}`} 
        className="inline-flex items-center text-metal-300 hover:text-white mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to {car.category === 'common' ? 'Common' : car.category === 'luxury' ? 'Luxury' : 'Hyper'} Cars
      </Link>
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <div className="mb-2 inline-block px-3 py-1 bg-primary-700 text-sm font-medium rounded-full">
            {car.category === 'common' ? 'Common' : car.category === 'luxury' ? 'Luxury' : 'Hyper'} Car
          </div>
          <h1 className="text-4xl font-bold mb-2">{car.brand} {car.name}</h1>
          <p className="text-2xl text-accent-500 font-bold mb-6">${car.price.toLocaleString()}</p>
          <p className="text-lg text-metal-300 mb-8">{car.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-primary-800 p-4 rounded-xl">
              <Engine className="h-6 w-6 text-racing-500 mb-2" />
              <p className="text-sm text-metal-400">Horsepower</p>
              <p className="text-xl font-bold">{car.horsepower} HP</p>
            </div>
            <div className="bg-primary-800 p-4 rounded-xl">
              <Gauge className="h-6 w-6 text-accent-500 mb-2" />
              <p className="text-sm text-metal-400">Top Speed</p>
              <p className="text-xl font-bold">{car.topSpeed} mph</p>
            </div>
            <div className="bg-primary-800 p-4 rounded-xl">
              <Zap className="h-6 w-6 text-racing-300 mb-2" />
              <p className="text-sm text-metal-400">0-60 mph</p>
              <p className="text-xl font-bold">{car.acceleration}s</p>
            </div>
            <div className="bg-primary-800 p-4 rounded-xl">
              <PaintBucket className="h-6 w-6 text-primary-500 mb-2" />
              <p className="text-sm text-metal-400">Colors</p>
              <p className="text-xl font-bold">{car.colors.length}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Available Colors</h3>
            <div className="flex flex-wrap gap-2">
              {car.colors.map((color, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-primary-800 rounded-full text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" />
                  <span className="text-metal-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 h-[500px] bg-primary-800 rounded-2xl overflow-hidden"
        >
          <div className="h-full relative">
            <SceneCar />
          </div>
        </motion.div>
      </div>
      
      {/* Gallery */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="aspect-video bg-primary-800 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setActiveImage(car.images.main)}
          >
            <img
              src={car.images.main}
              alt={`${car.brand} ${car.name}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {car.images.gallery.map((image, index) => (
            <div
              key={index}
              className="aspect-video bg-primary-800 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image}
                alt={`${car.brand} ${car.name} gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Comments */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Community Comments</h2>
        
        {comments.length > 0 ? (
          <div className="space-y-4 mb-8">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-primary-800 rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src={comment.user.avatar} 
                    alt={comment.user.username} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{comment.user.username}</p>
                    <p className="text-xs text-metal-400">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-metal-300">{comment.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-metal-400 mb-8">No comments yet. Be the first to comment!</p>
        )}
        
        <form onSubmit={handleSubmitComment}>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Add a comment
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full bg-primary-800 border border-primary-700 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-racing-500"
              placeholder="Share your thoughts about this car..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarDetailPage;