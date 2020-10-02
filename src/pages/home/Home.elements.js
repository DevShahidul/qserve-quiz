import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { ButtonLink } from '../../components/atoms'
import themeProp from '../../components/utils/teme';
import { BsPlayFill } from 'react-icons/bs';

export const HomeContainer = styled(Container)`
    max-width: 1010px;
    ${Container};
`;

export const ContentWrap = styled.div`
    margin-top: 30px;
    text-align: center;
`;

export const StartBtn = styled(ButtonLink)`
    display: inline-block;
    background-color: ${themeProp('home', 'startBtnBg')};
    margin: 30px auto 0;
    ${ButtonLink};
    & > *{
        display: inline-block;
        vertical-align: middle;
    }
`;

export const PlayIcon = styled(BsPlayFill)`
    font-size: ${themeProp('home', 'playIconSize')};
`;