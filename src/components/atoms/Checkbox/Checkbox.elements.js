import themeProp from '../../utils/teme';
import styled from 'styled-components';
import { GoCheck } from "react-icons/go";
import {transition, boxShadow} from '../../utils/style-util';

export const Label = styled.label`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
    position: relative;
    color: ${themeProp('check', 'color')};
    font-size: ${themeProp('check', 'fontSize')};
    cursor: pointer;
    &:hover{
        & > div{
            ${boxShadow('0 0px 5px 0 rgba(0, 0, 0, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.1)')}
        }
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${themeProp('check', 'size')};
    height: ${themeProp('check', 'size')};
    border-radius: 4px;
    border: 2px solid ${themeProp('check', 'defaultBorder')};
    z-index: 5;
    pointer-events: none;
    background-color: #ffffff;
    margin-right: .5rem;
    ${transition('.3')};
`;

export const CheckIcon = styled(GoCheck)`
    font-size: ${themeProp('check', 'iconSize')};
    opacity: 0;
    ${transition('.3')};
`;

export const CheckInput = styled.input.attrs({
    type: 'checkbox'
})`
    position: absolute;
    left: 0;
    opacity: 0;
    &:checked ~ div{
        border-color: ${themeProp('check', 'hoverBorder')};
        & > svg{
            opacity: 1;
        }
    }
`;