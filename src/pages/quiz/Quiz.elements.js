import styled from 'styled-components';
import themeProp from '../../components/utils/theme';
import { Container, Column } from '../../globalStyles';

export const QuizContainer = styled(Container)`
    margin-top: 50px;
    ${Container};
`;

export const QuizColumn = styled(Column)`
    width: 50%;
    padding: 50px 40px;
    ${Column};
`;

export const TitleBar = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    font-size: ${themeProp('fonts.size', 'xl')};
    background: ${themeProp('quiz.title', 'background')};
    color: ${themeProp('quiz.title', 'color')};
`;

export const CardWrap = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  box-shadow: ${themeProp('common', 'boxShadow')};
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: 50%;
    top: 25px;
    bottom: 25px;
    width: 1px;
    margin-left: -0.5px;
    background: ${themeProp('common', 'borderColor')};
  }
`;