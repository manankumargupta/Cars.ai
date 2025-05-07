import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../../types/models';

interface CommunityPostProps {
  post: Post;
}

const CommunityPost = ({ post }: CommunityPostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card overflow-hidden"
    >
      {post.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={post.user.avatar} 
            alt={post.user.username} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-medium text-white">{post.user.username}</p>
            <p className="text-xs text-metal-400">{formatDate(post.createdAt)}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
        <p className="text-metal-300 mb-4">{post.content.length > 150 
          ? `${post.content.substring(0, 150)}...` 
          : post.content}
        </p>
        
        <div className="flex items-center justify-between border-t border-primary-700 pt-4 mt-4">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-1 ${liked ? 'text-racing-500' : 'text-metal-400'} transition-colors hover:text-racing-500`}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-racing-500' : ''}`} />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-metal-400 hover:text-white transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-metal-400 hover:text-white transition-colors">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CommunityPost;