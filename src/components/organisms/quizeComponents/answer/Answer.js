import React from 'react'
import { AnswerWrap } from './Answer.elements';
export const Answer = (props) => {
    let answer = Object.keys(props.answer).map((qAnswer, i) => (
        <li key={i}>
            {props.answer[qAnswer]}
        </li>
    ))
    return (
        <AnswerWrap>
            <ul>
                {answer}
            </ul>
        </AnswerWrap>
    )
}
