import React, { useState } from 'react'
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
import data from './data';
import {
    FaChevronRight,
    FaChevronLeft
} from "react-icons/fa";

export const QuestionNav = () => {
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
                    data.map((chapter, index) => {
                        const { id, info } = chapter;
                        //console.log(chapter.info)
                        return (
                            <ChapterRow key={index}>
                                <ChapterRowHeading>
                                    Chapter: <span>{id}</span>
                                </ChapterRowHeading>
                                <QuestionLinkWrap>
                                    {info.map((item) => {
                                        const { questionId, path } = item;
                                        return (
                                            <QuestionNavLink  key={questionId} to={path}>{questionId}</QuestionNavLink>
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
