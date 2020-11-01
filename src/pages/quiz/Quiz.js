import React, { Component } from 'react';
import { QuizContainer, QuizColumn, TitleBar, CardWrap } from './Quiz.elements';
import { QuizBrief, Question, Answer } from '../../components/organisms';
import { QuestionNav, QuizNav } from '../../app/components'
//import { Checkbox } from '../../components/atoms/'
import { QuizContext } from '../../contex';

export default class Quiz extends Component {
    static contextType = QuizContext;

    constructor(props){
        super(props)
        this.state = {
            ans_one: false,
            questions: {
                1: 'First Question will here',
                2: 'Second Question will here',
                3: 'Third Question will here',
            },
            answers: {
                1: {
                    1: 'First anwer',
                    2: 'Second anwer',
                    3: 'Third anwer',
                    4: 'Fourth anwer',
                },
                2: {
                    1: 'First anwer',
                    2: 'Second anwer',
                    3: 'Third anwer',
                },
                3: {
                    1: 'First anwer',
                    2: 'Second anwer',
                    3: 'Third anwer',
                    4: 'Fourth anwer',
                },
            },
            currectAnswers: {
                1: '3',
                2: '1',
                3: '4',
            },
            currectAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0
        }
    }

    handleOnchange = (e) => {
        if(e.target.type === "checkbox"){
            this.setState({
                [e.target.name]: e.target.checked
            })
        }else{
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    render() {
        //const value = this.context;

        const {questions, answers,  step} = this.state;
        
        return (
            <>
            <QuestionNav />
            <QuizNav />
            <QuizContainer>
                <TitleBar>Question 1 of 10</TitleBar>
                <CardWrap>
                    <QuizColumn>
                        <QuizBrief info="Your answer: offer to order the book for the customers and elt theme know how long this will take." />
                    </QuizColumn>
                    <QuizColumn>
                        <Question title={questions[step]} />
                        <Answer answer={answers[step]} step={step} />
                        {/* <Checkbox  
                            onChange={this.handleOnchange}
                            checked={this.state.checked}
                            name="ans_one"
                            labelText="Answer one"
                        /> */}
                    </QuizColumn>
                </CardWrap>
            </QuizContainer>
            </>
        );
    }
}
