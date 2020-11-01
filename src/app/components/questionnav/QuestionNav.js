import React, { useState, useContext } from 'react'
import {
    QuestionNavWrap,
    QuestionNavToggler,
    QuestionNavTogglerBg,
    QuestionNavTogglerIcon,
    QuestionNavInner,
    ChapterRow,
    ChapterRowHeading,
    QuestionLinkWrap,
    QuestionNavLink,
} from './QuestionNav.elements';
import {
    FaChevronRight,
    FaChevronLeft
} from "react-icons/fa";

import { QuizContext } from '../../../contex';

export const QuestionNav = () => {
    const value = useContext(QuizContext); // Get data from context   

    const [navToggleClick, setnavToggleClick] = useState(false);
    const handleQuestionNavToggle = () => {
        setnavToggleClick(!navToggleClick);
    }


    const SvgShape = require('../../../components/images/toggleShape.svg');
    return (
        <>
            <QuestionNavWrap navToggleClick={navToggleClick}>
                <QuestionNavToggler onClick={handleQuestionNavToggle}>
                    <QuestionNavTogglerBg src={SvgShape} alt="bgshape" />
                    <QuestionNavTogglerIcon>
                        {navToggleClick ? <FaChevronLeft /> : <FaChevronRight />}
                    </QuestionNavTogglerIcon>
                </QuestionNavToggler>
                <QuestionNavInner>
                {
                    value.allData.map((data, index) => {
                        const { lesson, quizItem } = data;
                        //console.log(chapter.info)
                        return (
                            <ChapterRow key={index}>
                                <ChapterRowHeading>
                                    Lesson: <span>{lesson}</span>
                                </ChapterRowHeading>
                                <QuestionLinkWrap>
                                    {quizItem.map((item) => {
                                        const { id, slug } = item;
                                        return (
                                            <QuestionNavLink  key={id} to={slug}>{id}</QuestionNavLink>
                                        )
                                    })}
                                </QuestionLinkWrap>
                            </ChapterRow>
                        )
                    })
                }
                </QuestionNavInner>
            </QuestionNavWrap>
        </>
    )
}
