import styled, {createGlobalStyle} from 'styled-components';
import themeProp from './components/utils/theme';
import { theme } from './app/theme/default_theme';
import { transition } from './components/utils/style-util';

const {
    body,
    heading,
    inputField,
    button
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
        letter-spacing: .2px;
    }
    
    ul{
        list-style: none;
    }
    
    a{
        text-decoration: none;
        display: inline-block;
    }

    h1,h2,h3,h4,h5,h6{
        color: ${heading.color};
        line-height: 1.3;
        font-weight: ${heading.fontWeight};
    }

    h1{
        font-size: ${heading.h1.fontSize};
        line-height: 1.4;
    }

    h2{
        font-size: ${heading.h2.fontSize};
        font-weight: ${heading.h2.fontWeight};
    }

    h3{
        font-size: ${heading.h3.fontSize};
        font-weight: ${heading.h3.fontWeight};
    }

    h4{
        font-size: ${heading.h4.fontSize};
        font-weight: ${heading.h4.fontWeight};
    }

    h5{
        font-size: ${heading.h5.fontSize};
        font-weight: ${heading.h5.fontWeight};
    }

    h6{
        font-size: ${heading.h6.fontSize};
        font-weight: ${heading.h6.fontWeight};
    }

    input:not([type='submit']){
        padding: 8px 15px;
        font-size: ${inputField.fontSize};
        color: ${inputField.color.primaryLight};
        line-height: 1.3;
        border: 1px solid ${inputField.color.primaryLight};
        ${transition('all', '.3')};
        &:focus{
            outline: none;
            color: ${inputField.color.primary};
            border-color: ${inputField.color.primary};
        }
    }

`;

const Transition = transition('all', '.3');

export const ButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45px',
    minWidth: '80px',
    textAlign: 'center',
    padding: `${button.padding}`,
    border: 0,
    borderRadius: `${button.btnRadius}`,
    backgroundColor: `${button.background}`,
    color: `${button.color}`,
    fontSize: `${button.fontSize}`,
    cursor: 'pointer',
    Transition
}

export const ButtonHoverStyle = {
    backgroundColor: `${button.hoverBackground}`
}

export const Container = styled.div`
    width: 100%;
    max-width: ${themeProp('common', 'containerWidth')};
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media only screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
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