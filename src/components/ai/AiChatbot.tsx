import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response.content }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-primary-800 rounded-xl shadow-xl border border-primary-700 overflow-hidden">
      <div className="bg-primary-900 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="h-6 w-6 text-racing-500 mr-2" />
          <h3 className="font-medium">Cars.ai Assistant</h3>
        </div>
        <button
          onClick={() => setMessages([])}
          className="text-metal-400 hover:text-white transition-colors"
        >
          Clear
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-start gap-3 ${
                message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`p-2 rounded-full ${
                message.role === 'assistant' ? 'bg-racing-500' : 'bg-accent-500'
              }`}>
                {message.role === 'assistant' ? (
                  <Bot className="h-4 w-4 text-white" />
                ) : (
                  <User className="h-4 w-4 text-white" />
                )}
              </div>
              <div className={`rounded-xl p-3 max-w-[80%] ${
                message.role === 'assistant' 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-accent-500 text-primary-900'
              }`}>
                {message.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-metal-400"
            >
              <div className="w-2 h-2 bg-racing-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-racing-500 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-racing-500 rounded-full animate-bounce delay-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-primary-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about any car..."
            className="flex-1 bg-primary-900 border border-primary-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-racing-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-racing-500 text-white p-2 rounded-lg hover:bg-racing-600 transition-colors disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};