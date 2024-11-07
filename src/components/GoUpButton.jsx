import { FaArrowUp } from 'react-icons/fa';
import { GoUpButtonStyle } from '../styles/styles';

const GoUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <GoUpButtonStyle onClick={scrollToTop}>
      <FaArrowUp size={24} />
    </GoUpButtonStyle>
  );
};

export default GoUpButton;
