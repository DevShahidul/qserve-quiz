import React from 'react';
import {
    Label,
    Box,
    CheckIcon,
    CheckInput
} from './Checkbox.elements';
export const Checkbox = ({
    onChange,
    checked,
    name,
    labelText
}) => {
    return (
        <Label>
            <CheckInput name={name} checked={checked} onChange={onChange} />
            <Box>
                <CheckIcon />
            </Box>
            <span>{labelText}</span>
        </Label> 
    )
}
