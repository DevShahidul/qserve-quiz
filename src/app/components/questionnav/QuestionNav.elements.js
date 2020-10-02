import styled from 'styled-components';
import { Link } from 'react-router-dom';
import themeProp from '../../../components/utils/teme';
import { transition } from '../../../components/utils/style-util';

export const QuestionNavWrap = styled.div`
  position: fixed;
  top: 0;
  left: ${({ navToggleClick }) => (navToggleClick ? "0" : "-320px")};
  width: ${themeProp('questionnav', 'width')};
  height: 100vh;
  background-color: ${themeProp('questionnav', 'background')};
  box-shadow: ${themeProp('common', 'boxShadow')};
  padding: 80px 0 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  z-index: 95;
  ${transition('0.6')};
  @media only screen and (max-width: 767px){
      padding: 2.9375rem 0;
  }
`;

export const QuestionNavToggler = styled.div`
    width: 30px;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    z-index: 10;
    right: -30px;
    top: calc(50% + 40px);
    transform: translateY(-50%);
    cursor: pointer;
`;

export const QuestionNavTogglerBg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

export const QuestionNavTogglerIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`;

export const QuestionNavInner = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

export const ChapterRow = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ChapterRowHeading = styled.h3`
    width: 100%;
    padding: 15px 24px;
    text-align: left;
    background-color: ${themeProp('questionnav.heading', 'background')};
    color: ${themeProp('questionnav.heading', 'color')};
    font-size: ${themeProp('questionnav.heading', 'fontSize')};;
`;

export const QuestionLinkWrap = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding: 20px 20px 50px;
`;

export const QuestionNavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${themeProp('questionnav.link', 'size')};
    height: ${themeProp('questionnav.link', 'size')};
    padding: 4px;
    margin: 4px;
    border-radius: 4px;
    overflow: hidden;
    color: ${themeProp('questionnav.link', 'color')};
    background-color: ${themeProp('questionnav.link', 'background')};
    &:hover{
        background-color: ${themeProp('questionnav.link', 'hoverBackground')};
    }
`;
