import styled from 'styled-components';
import themeProp from '../../utils/theme';

export const TimerWrap = styled.div`
    display: inline-block;
    color: ${themeProp('timer', 'color')};
    padding: ${themeProp('timer', 'padding')};
    font-size: ${themeProp('fonts.size', 'xl')};
    font-weight: 700;
    text-align: center;
    background: ${themeProp('timer', 'background')};
    border: 1px solid ${themeProp('timer', 'border')};
`;


