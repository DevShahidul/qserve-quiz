import styled from 'styled-components';
import PropTypes from 'prop-types';
import themeProp from '../../utils/teme';
import { transition } from '../../utils/style-util';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    min-width: 140px;
    text-align: center;
    padding: ${themeProp('button', 'padding')};
    border-radius: ${themeProp('button', 'btnRadius')};
    background-color: ${themeProp('button', 'background')};
    color: ${themeProp('button', 'color')};
    font-size: ${themeProp('button', 'fontSize')};
    ${transition};
    &:hover{
        background-color: ${themeProp('button', 'hoverBackground')}
    }
`;

Button.propTypes = {
    block: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
    outline: PropTypes.bool
};

Button.defaultProps = {
    block: false,
    color: 'primary',
    size: 'normal',
    outline: false
}

export default Button;