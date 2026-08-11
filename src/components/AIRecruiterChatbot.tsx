import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  X,
  Sparkles,
  RefreshCw,
  User,
  Check,
  Copy,
  MessageSquare,
  Settings
} from 'lucide-react';
import { ChatMessage, ThemeMode } from '../types';
import { RECRUITER_SAMPLE_PROMPTS } from '../data/portfolioData';
import { playPopSound, playSuccessSound } from '../utils/sound';

interface AIRecruiterChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const AIRecruiterChatbot: React.FC<AIRecruiterChatbotProps> = ({
  isOpen,
  onClose,
  theme
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `Hello! I am the AI Hiring Assistant for Venkatesh Erla. I am fully knowledgeable about his software engineering projects, Java/Spring Boot microservices, ServiceNow CAD & CSA certifications, AI/ML skills, and educational background. How can I help you evaluate Venkatesh Erla for your engineering team?`,
      timestamp: new Date()
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleClearChat = () => {
    playPopSound();

    setMessages([
      {
        id: 'welcome-msg',
        role: 'assistant',
        content: `Hello! I am the AI Hiring Assistant for Venkatesh Erla. I am fully knowledgeable about his software engineering projects, Java/Spring Boot microservices, ServiceNow CAD & CSA certifications, AI/ML skills, and educational background. How can I help you evaluate Venkatesh Erla for your engineering team?`,
        timestamp: new Date()
      }
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;

    if (!text.trim() || isLoading) return;

    playPopSound();

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);

    if (!textToSend) {
      setInputMessage('');
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/recruiter-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      playSuccessSound();

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content:
          data.reply ||
          "Venkatesh Erla is a Software Engineer with expertise in Java Spring Boot, AI/ML, and ServiceNow development. Feel free to reach out to him directly at venkatesherla21@gmail.com!",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);

      const fallbackMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content:
          "Venkatesh Erla is an accomplished Software Engineer specializing in Java Spring Boot backend, AI/ML, and ServiceNow development (CAD & CSA certified). Please feel free to email him directly at venkatesherla21@gmail.com!",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    playPopSound();

    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-2xl h-[85vh] max-h-[700px] rounded-3xl border flex flex-col overflow-hidden shadow-2xl ${theme === 'dark'
          ? 'bg-zinc-950 border-zinc-800 text-zinc-100'
          : 'bg-white border-zinc-200 text-zinc-900'
          }`}
      >
        {/* Chatbot Window Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between ${theme === 'dark'
            ? 'border-zinc-800/60 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10'
            : 'border-zinc-200 bg-zinc-50'
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
              <Bot className="w-5 h-5 animate-pulse" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3
                  className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}
                >
                  AI Recruiter Assistant
                </h3>

                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-mono border border-blue-500/30">
                  AI Recruiter Active
                </span>
              </div>

              <p
                className={`text-[11px] ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
              >
                Trained on Venkatesh Erla's Resume & Achievements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearChat}
              title="Reset Conversation"
              className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                ? 'bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white'
                : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-600 hover:text-zinc-900'
                }`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark'
                ? 'bg-zinc-800/60 hover:bg-zinc-700 text-zinc-400 hover:text-white'
                : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-600 hover:text-zinc-900'
                }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`group relative max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed space-y-1 ${msg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-blue-600/20'
                  : theme === 'dark'
                    ? 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-none'
                    : 'bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-tl-none'
                  }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                <div className="flex items-center justify-between gap-2 pt-1 text-[10px] opacity-70 font-mono">
                  <span>
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>

                  <button
                    onClick={() => handleCopyMessage(msg.id, msg.content)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-300"
                    title="Copy response"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-xs text-zinc-400">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Bot className="w-4 h-4 animate-spin" />
              </div>

              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                <span className="font-mono text-[11px] text-zinc-400">
                  Analyzing candidate background...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Bar */}
        {messages.length <= 2 && (
          <div
            className={`px-6 py-2 border-t overflow-x-auto flex gap-2 no-scrollbar ${theme === 'dark'
              ? 'border-zinc-800/40 bg-zinc-950/40'
              : 'border-zinc-200 bg-zinc-50'
              }`}
          >
            {RECRUITER_SAMPLE_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className={`shrink-0 px-3 py-1.5 rounded-full border text-[11px] font-medium transition-all ${theme === 'dark'
                  ? 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500 text-blue-300 hover:text-white'
                  : 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-700 hover:bg-blue-100'
                  }`}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input Box Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className={`p-4 border-t flex items-center gap-3 ${theme === 'dark'
            ? 'border-zinc-800/60 bg-zinc-950/80'
            : 'border-zinc-200 bg-zinc-50'
            }`}
        >
          <input
            type="text"
            placeholder="Ask anything about Erla Venkatesh's skills, experience, projects..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading}
            className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-medium border outline-none transition-all ${theme === 'dark'
              ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-blue-500'
              : 'bg-zinc-100 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500'
              }`}
          />

          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white shadow-lg shadow-blue-600/30 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};