import styled from 'styled-components';
import themeProp from '../../../components/utils/teme';

export const Heading = styled.h1 `
    margin-top: 50px;
    padding-bottom: 15px;
    text-align: center;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        left: 20%;
        right: 20%;
        bottom: 0;
        height: 1px;
        background-color: ${themeProp('common', 'borderColor')}
    }
`;