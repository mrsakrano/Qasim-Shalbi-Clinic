import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  Send, 
  Loader2, 
  User,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'أهلاً بك! أنا أبو زيد الشلبي، متخصص في الختان الطبي (التطهير) للأطفال. كيف يمكنني مساعدتك بخصوص صحة وسلامة طفلك اليوم؟' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "أنت أبو زيد الشلبي، مختص في الختان الطبي (التطهير) للأطفال في إربد، الأردن. عيادتك تتبع إرث عائلة أبناء قاسم الشلبي الممتد منذ عام 1920. كن ودوداً، مهنياً، ومتعاطفاً مع الآباء. أجب على استفساراتهم حول المواعيد، الإجراءات، والرعاية بعد العملية. إذا سئلت عن الموقع، قل أننا في شارع عين جالوت، إربد. أرقام الهاتف هي: 0777246833، 0796590826، 0785550720. تحدث باللغة العربية بلهجة أردنية مهذبة. حافظ على إجاباتك مختصرة ومفيدة.",
        },
      });

      // We need to send the whole history for context if we want a real chat, 
      // but for simplicity and token limits, we'll just send the current message or a few previous ones.
      // The SDK's chat object handles history if we use sendMessage.
      
      const response = await chat.sendMessage({ message: userMessage });
      const aiResponse = response.text || 'عذراً، لم أستطع فهم ذلك. هل يمكنك إعادة الصياغة؟';
      
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-zinc-100 w-[320px] sm:w-[400px] h-[500px] sm:h-[600px] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">أبو زيد الشلبي</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                    <p className="text-xs text-emerald-100">متصل الآن</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none' 
                      : 'bg-white text-zinc-800 border border-zinc-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-end">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-100 shadow-sm">
                    <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-zinc-100">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 bg-zinc-100 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-all active:scale-90 disabled:opacity-50 disabled:scale-100"
                >
                  <Send size={20} className="rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-zinc-900 text-white rotate-90' : 'bg-emerald-600 text-white'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-bounce" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatAssistant;
