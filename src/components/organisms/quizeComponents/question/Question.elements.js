import styled from 'styled-components';
import themeProp from '../../../utils/theme';

export const QuestionWrap = styled.h5`
  font-size: ${themeProp('fonts.size', 'sm')};
  color: ${themeProp('quiz', 'color')};
`;
