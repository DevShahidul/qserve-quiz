import styled from 'styled-components';
import themeProp from '../../../utils/theme';

export const BriefWrap = styled.div`
    width: 100%;
    text-align: center;
    & > img{
        display: block;
        max-width: 100%;
        margin: 15px auto 0;
    }
    &>p{
        font-size: ${themeProp('fonts.size', 'xs')};
        color: ${themeProp('quiz', 'color')}; }
`;