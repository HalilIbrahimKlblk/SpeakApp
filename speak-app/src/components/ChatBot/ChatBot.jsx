// ChatBot.jsx
import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Merhaba! Size nasıl yardımcı olabilirim?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    const botReply = { from: 'bot', text: generateBotReply(input) };
    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  const generateBotReply = (msg) => {
    if (msg.toLowerCase().includes('randevu')) return 'Randevu için iletişim sayfamızı ziyaret edin.';
    if (msg.toLowerCase().includes('terapi')) return 'Terapiler hakkında bilgi almak ister misiniz?';
    return 'Daha iyi yardımcı olabilmem için biraz daha açık yazar mısınız?';
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Canlı Destek</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Mesaj yazın..."
            />
            <button onClick={sendMessage}>Gönder</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  );
};

export default ChatBot;
