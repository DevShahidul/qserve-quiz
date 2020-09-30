import React, { useState } from 'react';
import LogoImg from '../../../components/images/logo.png';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {
    HeaderWrap,
    HeaderContainer,
    LogoLink,
    Logo,
    User,
    UserToggler,
    UserIcon,
    ArrowIconWrap,
    Dropdown,
    DropdownItem,
    DropDownLink
} from './Header.element';

export const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <HeaderWrap>
            <HeaderContainer>
                <LogoLink to="/">
                    <Logo src={LogoImg} />
                </LogoLink>
                <User>
                    <UserToggler onClick={handleClick}>
                        <UserIcon />
                        <ArrowIconWrap>
                            {click ? <FaChevronUp/> : <FaChevronDown/>}
                        </ArrowIconWrap>
                    </UserToggler>
                    <Dropdown click={click}>
                        <DropdownItem>
                            <DropDownLink to="/log-in">Log in</DropDownLink>
                        </DropdownItem>
                        <DropdownItem>
                            <DropDownLink to="/sign-up">Sign up</DropDownLink>
                        </DropdownItem>
                    </Dropdown>
                </User>
            </HeaderContainer>
        </HeaderWrap>
    )
}
