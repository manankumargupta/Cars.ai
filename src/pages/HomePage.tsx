import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, BarChart, Zap } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Testimonial from '../components/ui/Testimonial';
import CarCard from '../components/car/CarCard';
import { CarService, CategoryService } from '../services/api';
import { Car, Category } from '../types/models';

const HomePage = () => {
	const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const allCars = await CarService.getAllCars();
				// Get one car from each category for featured section
				const featured = allCars.filter((car, index, self) =>
					index === self.findIndex(c => c.category === car.category)
				);
				setFeaturedCars(featured);

				const allCategories = await CategoryService.getAllCategories();
				setCategories(allCategories);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<HeroSection
				title="Experience Cars in 3D"
				subtitle="Explore our extensive collection of cars in immersive 3D visualization. From everyday vehicles to hypercars, discover automotive excellence."
			/>

			{/* Featured Cars Section */}
			<section className="container-custom py-20">
				<div className="flex justify-between items-end mb-10">
					<div>
						<h2 className="text-3xl font-bold mb-2">Featured Cars</h2>
						<p className="text-metal-400">Explore our hand-picked selection from each category</p>
					</div>
					<Link to="/categories" className="flex items-center text-racing-500 hover:text-racing-600 font-medium">
						View All <ChevronRight className="h-5 w-5 ml-1" />
					</Link>
				</div>

				<div className="cars-grid">
					{featuredCars.map((car, index) => (
						<CarCard key={car.id} car={car} index={index} />
					))}
				</div>
			</section>

			{/* Categories Section */}
			<section className="bg-primary-800/50 py-20">
				<div className="container-custom">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold mb-2">Car Categories</h2>
						<p className="text-metal-400 max-w-2xl mx-auto">
							Explore our comprehensive catalog of vehicles organized by category, from everyday commuters to exotic hypercars
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{categories.map((category, index) => (
							<motion.div
								key={category.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative overflow-hidden rounded-2xl h-64 bg-primary-900 group"
							>
								<div className="absolute inset-0 z-0">
									<img
										src={category.image}
										alt={category.name}
										className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent"></div>
								</div>

								<div className="relative z-10 h-full flex flex-col justify-end p-6">
									<h3 className="text-2xl font-bold mb-1">{category.name}</h3>
									<p className="text-sm text-metal-300 mb-4">{category.carCount} models</p>

									<Link
										to={`/categories/${category.id}`}
										className="btn btn-primary inline-block w-full sm:w-auto text-center"
									>
										Explore Collection
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="container-custom py-20">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4">Why Choose Cars.ai</h2>
					<p className="text-metal-400 max-w-2xl mx-auto">
						Our platform offers an immersive 3D experience that brings automobiles to life in your browser
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="glasscard p-6"
					>
						<div className="bg-racing-500/20 p-3 rounded-xl w-fit mb-4">
							<Award className="h-8 w-8 text-racing-500" />
						</div>
						<h3 className="text-xl font-bold mb-2">Detailed Models</h3>
						<p className="text-metal-300">
							Explore highly detailed 3D models that showcase every aspect of each vehicle's design
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="glasscard p-6"
					>
						<div className="bg-accent-500/20 p-3 rounded-xl w-fit mb-4">
							<BarChart className="h-8 w-8 text-accent-500" />
						</div>
						<h3 className="text-xl font-bold mb-2">Full Specifications</h3>
						<p className="text-metal-300">
							Get comprehensive technical details and performance metrics for every car in our database
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
						className="glasscard p-6"
					>
						<div className="bg-primary-500/20 p-3 rounded-xl w-fit mb-4">
							<Users className="h-8 w-8 text-primary-500" />
						</div>
						<h3 className="text-xl font-bold mb-2">Active Community</h3>
						<p className="text-metal-300">
							Connect with fellow car enthusiasts, share insights, and discuss your favorite vehicles
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className="glasscard p-6"
					>
						<div className="bg-racing-300/20 p-3 rounded-xl w-fit mb-4">
							<Zap className="h-8 w-8 text-racing-300" />
						</div>
						<h3 className="text-xl font-bold mb-2">Immersive Experience</h3>
						<p className="text-metal-300">
							Interact with vehicles in a dynamic 3D environment that feels like a virtual showroom
						</p>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container-custom py-20">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="bg-gradient-radial from-racing-500 to-racing-700 rounded-3xl p-10 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Explore in 3D?</h2>
					<p className="text-white/80 mb-8 max-w-xl mx-auto">
						Dive into our extensive collection of detailed 3D car models and join our community of automotive enthusiasts.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link to="/categories" className="btn bg-white text-racing-700 hover:bg-metal-100">
							Browse Categories
						</Link>
						<Link to="/community" className="btn border-2 border-white text-white hover:bg-white/20">
							Join Community
						</Link>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default HomePage;