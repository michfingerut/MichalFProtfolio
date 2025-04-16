import styled from 'styled-components';

import { theme } from './theme';
import { borders } from './commonsStyles';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  min-height: ${theme.pageHeight};
  background-color: ${theme.secondaryBackgroundColor};
  flex-direction: column;
  align-items: center;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.primaryBackgroundColor};
  ${borders}
  padding: 20px;
  flex-direction: column;
  gap: 20px;
`;

const ProjectContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { ProjectsContainer, ProjectCardContainer, ProjectContentContainer };
