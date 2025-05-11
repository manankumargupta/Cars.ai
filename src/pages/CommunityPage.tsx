import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Share2, Search } from 'lucide-react';
import { CommunityService } from '../services/api';
import { Post } from '../types/models';
import CommunityPost from '../components/community/CommunityPost';
import Loader from '../components/ui/Loader';

const CommunityPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await CommunityService.getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = searchTerm
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-custom py-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Cars.ai Community</h1>
        <p className="text-xl text-metal-300 max-w-3xl mx-auto mb-10">
          Connect with fellow car enthusiasts, share your experiences, ask questions, and discover insights from our passionate community.
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex items-center bg-primary-800 rounded-full px-6 py-2 border border-primary-700">
            <Users className="h-5 w-5 text-racing-500 mr-2" />
            <span className="text-metal-300">12,458 Members</span>
          </div>
          
          <div className="flex items-center bg-primary-800 rounded-full px-6 py-2 border border-primary-700">
            <MessageSquare className="h-5 w-5 text-accent-500 mr-2" />
            <span className="text-metal-300">5,723 Discussions</span>
          </div>
          
          <div className="flex items-center bg-primary-800 rounded-full px-6 py-2 border border-primary-700">
            <Share2 className="h-5 w-5 text-primary-500 mr-2" />
            <span className="text-metal-300">Active Daily</span>
          </div>
        </div>
      </motion.div>
      
      {/* Community Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-metal-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-primary-800 border border-primary-700 rounded-lg py-2 pl-10 pr-4 w-full md:w-80 text-white focus:outline-none focus:ring-2 focus:ring-racing-500"
          />
        </div>

      </div>
      
      {/* Topics & Posts */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-primary-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Community Rules</h3>
            <ul className="space-y-2 text-sm text-metal-300">
              <li>1. Be respectful to all members</li>
              <li>2. No spam or self-promotion</li>
              <li>3. Stay on topic in discussions</li>
              <li>4. No hate speech or bullying</li>
              <li>5. Verify information before posting</li>
              <li>6. Give credit for others' content</li>
              <li>7. Have fun and share your passion!</li>
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          
          {filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-primary-800 rounded-xl">
              <MessageSquare className="h-12 w-12 text-metal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No discussions found</h3>
              <p className="text-metal-400">
                {searchTerm 
                  ? `No discussions match your search for "${searchTerm}"`
                  : 'There are no discussions yet. Be the first to start one!'}
              </p>
            </div>
          )}
          
          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-10">
              <button className="btn btn-outline">
                Load More Discussions
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Join CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-10 text-center mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="text-metal-300 mb-8 max-w-2xl mx-auto">
          Be part of our passionate community of car enthusiasts. Share your knowledge, ask questions, and connect with fellow automotive fans from around the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary">Create an Account</button>
          <button className="btn btn-outline">Sign In</button>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityPage;