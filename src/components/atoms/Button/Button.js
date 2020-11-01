import styled from 'styled-components';
//import PropTypes from 'prop-types';
//import themeProp from '../../utils/theme';
import { ButtonStyle, ButtonHoverStyle } from '../../../globalStyles';

const Button = styled.button`
    ${ButtonStyle};
    &:hover{
        background-color: ${ButtonHoverStyle}
    }
    &:hover,
    &:active,
    &:focus{
        outline: none;
    }
`;

// Button.propTypes = {
//     block: PropTypes.bool,
//     color: PropTypes.string,
//     size: PropTypes.string,
//     outline: PropTypes.bool
// };

// Button.defaultProps = {
//     block: false,
//     color: 'primary',
//     size: 'normal',
//     outline: false
// }

export default Button;
