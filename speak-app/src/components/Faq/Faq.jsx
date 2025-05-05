import React, { useState } from 'react';
import './Faq.css';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState); 
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggleAnswer}>
        {question}
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default Faq;
