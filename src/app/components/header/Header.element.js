import styled from 'styled-components';
import { Link } from 'react-router-dom';
import themeProp from '../../../components/utils/teme';
import { Container } from '../../../globalStyles';
import { FaUserAlt } from "react-icons/fa";

// Header section
export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: ${themeProp('header', 'background')};
    color: ${themeProp('header', 'color')};
    font-size: ${themeProp('header', 'fontSize')};
`;

// Header container
export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Container}
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
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
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
    font-size: '';
`;

export const ArrowIconWrap = styled.div`
    display: flex;
    align-items: center;
    font-size: 
`;