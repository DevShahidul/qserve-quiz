import styled from 'styled-components';
import themeProp from '../../../utils/theme';

export const AnswerWrap = styled.div`
    width: 100%;
    font-size: ${themeProp('fonts.size', 'sm')};
    color: ${themeProp('quiz', 'color')};
    display: flex;
    align-items: flex-start;
    & > p{
        font-weight: 700;
        padding: 12px 0;
        margin-right: 10px;
    }
    &>ul{
        width: 100%;
        list-style: none;
        &>li{
            width: 100%;
            margin: 15px 0 0;
            /* padding-left: 20px; */
            font-size: ${themeProp('fonts.size', 'sm')};
            color: ${themeProp('quiz', 'color')};
            position: relative;
            /* &::before{
                content: "";
                position: absolute;
                left: 0; 
                top: 50%;
                transform: translateY(-50%);
                width: 12px;
                height: 12px;
                border-radius: 50px;
                border: 1px solid ${themeProp('quiz', 'color')}
            } */
            &>input{
                color: ${themeProp('quiz', 'color')};
                font-size: ${themeProp('fonts.size', 'sm')};
            }
        }
    }
`;