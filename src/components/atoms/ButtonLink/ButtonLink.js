import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonStyle, ButtonHoverStyle } from '../../../globalStyles';
export const ButtonLink = styled(Link)`
    ${ButtonStyle};
    &:hover{
        ${ButtonHoverStyle}
    }
`;