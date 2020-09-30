import styled, {createGlobalStyle} from 'styled-components';
import themeProp from './components/utils/teme';
import {theme} from './app/theme/default_theme';
import { transition } from './components/utils/style-util';

const {
    body,
    heading,
    inputField
} = theme;

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: ${body.font.primary};
        font-size: ${body.fontSize};
        font-weight: ${body.fontWeight};
        color: ${body.primaryLight};
    }
    
    ul{
        list-style: none;
    }
    
    a{
        text-decoration: none;
        display: inline-block;
    }

    h2{
        font-size: ${heading.h2.fontSize};
        line-height: 1.4;
        color: ${heading.color};
        font-weight: ${heading.h2.fontWeight};
    }

    h3{
        font-size: ${heading.h3.fontSize};
        line-height: 1.3;
        color: ${heading.color};
        font-weight: ${heading.h3.fontWeight};
    }

    h4{
        font-size: ${heading.h4.fontSize};
        line-height: 1.3;
        color: ${heading.color};
        font-weight: ${heading.h4.fontWeight};
    }

    h5{
        font-size: ${heading.h5.fontSize};
        line-height: 1.3;
        color: ${heading.color};
        font-weight: ${heading.h5.fontWeight};
    }

    h6{
        font-size: ${heading.h6.fontSize};
        line-height: 1.3;
        color: ${heading.color};
        font-weight: ${heading.h6.fontWeight};
    }

    input:not([type='submit']){
        padding: 8px 15px;
        font-size: ${inputField.fontSize};
        color: ${inputField.color.primaryLight};
        line-height: 1.3;
        border: 1px solid ${inputField.color.primaryLight};
        ${transition('.3')};
        &:focus{
            outline: none;
            color: ${inputField.color.primary};
            border-color: ${inputField.color.primary};
        }
    }

`;

export const Container = styled.div`
    width: 100%;
    max-width: 1270px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
    font-size: ${themeProp('fonts.size', 'xl')};
    @media only screen and (min-width: 992px){
        padding-right: 50px;
        padding-left: 50px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
    align-items: ${props => props.alignItems};
`;

export const Column = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    align-self: ${props => props.alignSelf}
`;