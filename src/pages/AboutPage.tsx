import { motion } from 'framer-motion';
import { Car, Globe, Users, Code, Star, Trophy, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container-custom py-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl font-bold mb-6">About Cars.ai</h1>
        <p className="text-xl text-metal-300 max-w-3xl mx-auto">
          We're revolutionizing the way people explore and learn about automobiles through immersive 3D visualization and a passionate community.
        </p>
      </motion.div>
      
      {/* Our Mission */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-metal-300 mb-4">
              At Cars.ai, we're driven by our passion for automobiles and technology. Our mission is to create the most comprehensive and immersive platform for car enthusiasts to explore, learn about, and connect over their shared love of cars.
            </p>
            <p className="text-metal-300 mb-4">
              We believe that everyone should have access to detailed information and visualization of cars from all categories, whether you're researching your next purchase, daydreaming about supercars, or simply appreciating automotive engineering.
            </p>
            <p className="text-metal-300">
              Through cutting-edge 3D technology, comprehensive data, and a vibrant community, we're building the ultimate destination for car lovers worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team brainstorming" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-metal-300 max-w-2xl mx-auto">
            These core principles guide everything we do at Cars.ai
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="glasscard p-6"
          >
            <Star className="h-10 w-10 text-accent-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-metal-300">
              We strive for excellence in every aspect of our platform, from the accuracy of our data to the quality of our 3D models.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="glasscard p-6"
          >
            <Users className="h-10 w-10 text-racing-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-metal-300">
              We believe in the power of community and fostering meaningful connections between car enthusiasts from all walks of life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="glasscard p-6"
          >
            <Code className="h-10 w-10 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-metal-300">
              We constantly push the boundaries of what's possible with web technology to deliver the most immersive car exploration experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="glasscard p-6"
          >
            <Globe className="h-10 w-10 text-racing-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-metal-300">
              We're committed to making car information and visualization accessible to everyone, regardless of technical expertise.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-metal-300 max-w-2xl mx-auto">
            Meet the passionate individuals behind Cars.ai
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold">Manan Gupta</h3>
            <p className="text-racing-500 mb-2">Project Manager/Team Lead</p>
            <p className="text-sm text-metal-400">3D visualizaiton expert with a background in game development and AI.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold">Madhav Arora</h3>
            <p className="text-racing-500 mb-2">Backend Developer</p>
            <p className="text-sm text-metal-400">Former automotive engineer with a passion for making cars accessible to everyone.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold">Kriss Patial</h3>
            <p className="text-racing-500 mb-2">Lead Designer</p>
            <p className="text-sm text-metal-400">With a strong eye for detail and a passion for sleek, modern design, he leads the creative direction.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold">Marcus Lee</h3>
            <p className="text-racing-500 mb-2">Community Manager</p>
            <p className="text-sm text-metal-400">Award-winning UI/UX designer with a focus on creating immersive digital experiences.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-metal-300 max-w-2xl mx-auto">
            Milestones we've reached along our journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-primary-800 rounded-xl p-6 border border-primary-700"
          >
            <Trophy className="h-10 w-10 text-accent-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Tech Startup 2024</h3>
            <p className="text-metal-300">
              Recognized as one of the most innovative tech startups in the automotive space.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-primary-800 rounded-xl p-6 border border-primary-700"
          >
            <Award className="h-10 w-10 text-racing-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Excellence in 3D Visualization</h3>
            <p className="text-metal-300">
              Awarded for our groundbreaking approach to web-based 3D car visualization.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-800 rounded-xl p-6 border border-primary-700"
          >
            <Zap className="h-10 w-10 text-racing-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">1 Million+ Active Users</h3>
            <p className="text-metal-300">
              Reached the milestone of one million active monthly users on our platform.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-racing-600 to-racing-500 rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Join Us on This Journey</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're constantly evolving and improving our platform. Whether you're a car enthusiast, industry professional, or potential partner, we'd love to hear from you.
          </p>
          <a href="mailto:contact@cars.ai" className="btn bg-white text-racing-600 hover:bg-metal-100 inline-block">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;