import styled from 'styled-components';
import { Link } from 'react-router-dom';
import themeProp from '../../../components/utils/theme';
import { transition } from '../../../components/utils/style-util';

export const QuizCtrlWrap = styled.div`
    position: fixed;
    top: 80px;
    right: 0;
    width: ${({qzctrlshow}) => (qzctrlshow ? '280px' : '80px')};
    height: calc(100vh - 80px);
    background-color: ${themeProp('qzcontrols', 'background')};
    box-shadow: ${themeProp('common', 'boxShadow')};
    padding: 20px 20px;
    ${transition('width', '.6')};
    z-index: 99;
`;

export const QzCtrlToggler = styled.div`
    padding: 10px;
    width: 40px;
    height: 40px;
    color: ${themeProp('qzcontrols', 'togglerColor')};
    background: ${themeProp('qzcontrols', 'togglerBg')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const QzCtrlNav = styled.ul`
    width: 100%;
    text-align: left;
`;

export const QzCtrlNavItem = styled.li`
    width: 100%;
    margin-top: 10px;
    &:first-child{
        margin-top: 20px;
    }
`;

export const QzCtrilNavItemLink = styled(Link)`
    display: flex;
    align-items: center;
    color: ${themeProp('qzcontrols.link', 'color')};
    white-space: nowrap;
    padding: 5px 0;
    ${transition('all', '.3')};
    &:hover{
        background-color: ${themeProp('qzcontrols.link', 'hoverBackground')};
        & > div{
            background-color: ${themeProp('qzcontrols.link', 'hoverBackground')};
        }
    }
`;

export const QzCtrlNavIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({qzctrlshow}) => (qzctrlshow ? '30px' : '40px')};
    height: ${({qzctrlshow}) => (qzctrlshow ? '30px' : '40px')};
    ${transition('all', '.3')};
    background-color: ${themeProp('qzcontrols.icon', 'background')};
    font-size: ${({qzctrlshow}) => (qzctrlshow ? themeProp('qzcontrols.icon', 'expandSize') : themeProp('qzcontrols.icon', 'defaultSize'))};
    margin-right: ${({qzctrlshow}) => (qzctrlshow ? '15px' : '0px')};
`;

export const QzCtrlNavText = styled.span`
    display: inline-block;
    font-size: ${themeProp('qzcontrols.link', 'fontSize')};
    transform: ${({qzctrlshow}) => (qzctrlshow ? 'translateX(0%)' : 'translateX(100%)')};
    opacity: ${({qzctrlshow}) => (qzctrlshow ? 1 : 0)};
    width: ${({qzctrlshow}) => (qzctrlshow ? 'auto' : '0px')};
    ${transition('all', '.3')};
`;