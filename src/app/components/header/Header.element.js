import styled from 'styled-components';
import { Link } from 'react-router-dom';
import themeProp from '../../../components/utils/theme';
import { transition } from '../../../components/utils/style-util';
import { Container } from '../../../globalStyles';
import { FaUserAlt } from "react-icons/fa";

// Header section
export const HeaderWrap = styled.header `
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: ${themeProp('header', 'padding')};
    background-color: ${themeProp('header', 'background')};
    color: ${themeProp('header', 'color')};
    font-size: ${themeProp('header', 'fontSize')};
    position: relative;
    z-index: 999;
`;

// Header container
export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Container};
`;


// Logo link
export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 767px){
        width: 100px;
    }
`;

// Site logo
export const Logo = styled.img`
    display: block;
    max-height: 60px;
    max-width: 100%;
`;

// User options
export const User = styled.div`
    margin-left: auto;
    position: relative;
`;

// User toggler
export const UserToggler = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    cursor: pointer;
`;

// User icon 
export const UserIcon = styled(FaUserAlt)`
    margin-right: 5px;
    font-size: ${themeProp('user', 'iconSize')};
    color: ${themeProp('user.color', 'primary')};
`;

// Arrow icon wrapper 
export const ArrowIconWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: ${themeProp('user', 'arrowSize')};
    margin-left: 5px;
`;

// Dropdown wrapper
export const Dropdown = styled.ul`
    position: absolute;
    right: 0;
    min-width: ${themeProp('user.dropdownWrapper', 'minWidth')};
    background-color: ${themeProp('user.dropdownWrapper', 'background')};
    border-radius: ${themeProp('user.dropdownWrapper', 'radius')};
    box-shadow: ${themeProp('common', 'boxShadow')};
    opacity: ${({click}) => (click ? 1 : 0)};
    visibility: ${({click}) => (click ? 'visible' : 'hidden')};
    margin-top: ${themeProp('user.dropdownWrapper', 'top')};
    overflow: hidden;
    ${transition('.3')}
`;

// Dropdown item list
export const DropdownItem = styled.li`
    display: block;
    width: 100%;
    text-align: right;
    border-bottom: 1px solid ${themeProp('user.link', 'border')};
    &:last-child{
        border-bottom: 0px solid transparent;
    }
`;

// Dropdown item link
export const DropDownLink = styled(Link)`
    display: block;
    width: 100%;
    color: ${themeProp('user.color', 'primary')};
    white-space: nowrap;
    padding: ${themeProp('user.link', 'padding')};
    ${transition('.3')};
    font-size: ${themeProp('user.link', 'fontSize')};
    &:hover{
        background-color: ${themeProp('user.link', 'hoverBg')};
        color: ${themeProp('user.color', 'primaryLight')}
    }
`;

// Quiz controls Toggler
export const QzCtrlToggler = styled.div`
    align-items: center;
    justify-content: center;
    width: ${themeProp('qzcontrols', 'togglerWidth')};
    height: ${themeProp('qzcontrols', 'togglerHeight')};
    position: relative;
    margin-left: 1rem;
    cursor: pointer;
    display: none;
    @media only screen and (max-width: 767px){
        display: flex;
    }
`;

// Quiz controls Toggler icon
export const QzCtrlTogglerIcon = styled.div `
    position: relative;
    width: ${themeProp('qzcontrols', 'togglerWidth')};
    height: 2px;
    background-color: ${({ clickToggleQzCtrl }) => (clickToggleQzCtrl ? 'transparent' : 'currentColor')};;
    color: ${themeProp('qzcontrols', 'iconColor')};
    ${transition('0.6')};
    &::after,
    &::before{
       content: "";
       width: 27px;
       height: 2px;
       position: absolute;
       background-color: currentColor;
       ${transition('0.6')}; 
    };
    &::before{
        margin-top: ${({ clickToggleQzCtrl }) => (clickToggleQzCtrl ? '0' : '7px')};
        transform: rotate(${({ clickToggleQzCtrl }) => (clickToggleQzCtrl ? '-45deg' : '0deg')});
    }
    &::after{
        margin-top: ${({ clickToggleQzCtrl }) => (clickToggleQzCtrl ? '0' : '-7px')};
        transform: rotate(${({ clickToggleQzCtrl }) => (clickToggleQzCtrl ? '45deg' : '0deg')});
    }
`;
