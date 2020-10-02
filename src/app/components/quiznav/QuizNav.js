import React, {useState} from 'react'
import {
    QuizCtrlWrap,
    QzCtrlToggler,
    QzCtrlNav,
    QzCtrlNavItem,
    QzCtrilNavItemLink,
    QzCtrlNavIcon,
    QzCtrlNavText
} from './QuizNav.elements';
import { FaChevronLeft, FaChevronRight, FaListUl } from 'react-icons/fa';
import { BsListCheck, BsCheckAll } from 'react-icons/bs';
import { VscReport } from 'react-icons/vsc';

export const QuizNav = () => {
    const [qzctrlShow, setqzctrlShow] = useState(false);
    const handleQzctrl = () => {
        setqzctrlShow(!qzctrlShow);
    }
    return (
        <QuizCtrlWrap qzctrlshow={qzctrlShow}>
            <QzCtrlToggler onClick={handleQzctrl}>
                {qzctrlShow ? <FaChevronRight /> : <FaChevronLeft />}
            </QzCtrlToggler>
            <QzCtrlNav>
                <QzCtrlNavItem>
                    <QzCtrilNavItemLink to="/total-question">
                        <QzCtrlNavIcon qzctrlshow={qzctrlShow}>
                            <FaListUl />
                        </QzCtrlNavIcon>
                        <QzCtrlNavText qzctrlshow={qzctrlShow}>Total question</QzCtrlNavText>
                    </QzCtrilNavItemLink>
                </QzCtrlNavItem>
                <QzCtrlNavItem>
                    <QzCtrilNavItemLink to="/marked-question">
                        <QzCtrlNavIcon qzctrlshow={qzctrlShow}>
                            <BsListCheck />
                        </QzCtrlNavIcon>
                        <QzCtrlNavText qzctrlshow={qzctrlShow}>Marked questions</QzCtrlNavText>
                    </QzCtrilNavItemLink>
                </QzCtrlNavItem>
                <QzCtrlNavItem>
                    <QzCtrilNavItemLink to="/answered-question">
                        <QzCtrlNavIcon qzctrlshow={qzctrlShow}>
                            <BsCheckAll />
                        </QzCtrlNavIcon>
                        <QzCtrlNavText qzctrlshow={qzctrlShow}>Answered questions</QzCtrlNavText>
                    </QzCtrilNavItemLink>
                </QzCtrlNavItem>
                <QzCtrlNavItem>
                    <QzCtrilNavItemLink to="/empty-question">
                        <QzCtrlNavIcon qzctrlshow={qzctrlShow}>
                            <VscReport />
                        </QzCtrlNavIcon>
                        <QzCtrlNavText qzctrlshow={qzctrlShow}>Empty questions</QzCtrlNavText>
                    </QzCtrilNavItemLink>
                </QzCtrlNavItem>
            </QzCtrlNav>
        </QuizCtrlWrap>
    )
}
