import React from 'react';
import { QuestionWrap } from './Question.elements';

export const Question = (props) => {
    return (
        <QuestionWrap>Q. {props.title}</QuestionWrap>
    )
}
