import styled from 'styled-components';

import { theme } from './theme';
import { SecondaryContainer, BaseContainer } from './commonsStyles';

export const AboutContainer = styled(BaseContainer)`
  background-color: ${theme.primaryBackgroundColor};
  min-height: ${theme.pageHeight};
  padding: 5em 0;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AboutSecondaryContainer = styled(SecondaryContainer)`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  justify-items: center;
  line-height: 1.6;
  font-size: ${theme.fontSize};

  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  img {
    width: 200px;
    border-radius: 38px;
    @media (max-width: 768px) {
      width: 150px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  span {
    display: block;
  }
`;
