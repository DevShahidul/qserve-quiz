import React from 'react'
import { BriefWrap } from './QuizBrief.elements';

export const QuizBrief = (props) => {
    return (
        <BriefWrap>
            <p>{props.info}</p>
            {props.img ? `<img src=${props.img} />` : null}
        </BriefWrap>
    )
}
