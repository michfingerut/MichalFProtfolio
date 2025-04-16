// External modules
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

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
      <MdOutlineKeyboardDoubleArrowUp size={40} />
    </GoUpButtonStyle>
  );
};

export default GoUpButton;
