'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

export default function Chatbot() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Don't render on Studio pages
    if (pathname?.startsWith('/studio')) return null;
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            text: "Hello! I'm the UIT University assistant. Ask me about programs, fees, scholarships, or admissions.",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const WEBHOOK_URL = "https://rex1280.app.n8n.cloud/webhook/ff5b65c4-ece4-4282-a58d-eaf04ade66b6";

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText('');
        setIsLoading(true);

        try {
            const res = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.text }),
            });

            if (!res.ok) throw new Error('Failed to fetch response');

            const data = await res.json();

            // Extract answer logic based on n8n response patterns
            let answer = "I couldn't understand that.";
            if (typeof data === 'string') answer = data;
            else if (data.answer) answer = data.answer;
            else if (data.text) answer = data.text;
            else if (data.output) answer = data.output;
            else if (data.generated_text) answer = data.generated_text;
            else if (Array.isArray(data) && data[0]?.output) answer = data[0].output;

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: answer,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Toggle Button - Sharp Corners */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 bg-primary-blue text-white shadow-lg hover:bg-primary-red transition-colors duration-300 cursor-pointer ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window - Sharp Corners */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-white shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-10 fade-in duration-300">

                    {/* Header */}
                    <div className="bg-primary-blue p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-white font-bold text-lg">
                            UI
                        </div>
                        <div>
                            <h3 className="text-white font-bold leading-tight">UIT Assistant</h3>
                            <p className="text-blue-100 text-xs">Ask about admissions & fees</p>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 text-sm ${msg.sender === 'user'
                                        ? 'bg-primary-blue text-white'
                                        : 'bg-white text-gray-800 border border-gray-100 shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 border border-gray-100 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-0" />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question..."
                                className="flex-1 p-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-blue text-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !inputText.trim()}
                                className="p-3 bg-primary-blue text-white hover:bg-primary-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                                Powered by UIT University AI
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
