// External modules
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Internal modules
import { GoUpButtonStyle } from '../styles/commonsStyles';

const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <GoUpButtonStyle onClick={scrollToTop} $isVisible={isVisible}>
      <FaArrowUp size={24} />
    </GoUpButtonStyle>
  );
};

export default GoUpButton;
