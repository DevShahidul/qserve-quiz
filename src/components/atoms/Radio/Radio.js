import React from 'react';
import { Label, CheckInput, Box} from './Radio.elements';

export const Radio = (props) => {
    return (
        <Label>
            <CheckInput name={props.name} onChange={props.onChange} value={props.value} />
            <Box />
            <span>{props.labelText}</span>
        </Label>
    )
}
