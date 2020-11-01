import React, { Component } from 'react';
import items from './data';

const QuizContext = React.createContext();

class QuizProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            allData: [],
            quizItems: [],
            questionNumber: '',
            totalQuestion: '',
            loading: true
        }
    }

    // getData
    componentDidMount(){
        let dataArray = this.formateData(items);
        let quizItems = dataArray.map(quizItem => quizItem)
        
        //console.log(itemsToRender.quizItem)
        this.setState({
            allData: dataArray,
            quizItems
        })
        //console.log(dataArray)
    }

    formateData(items){
        let itemTemp = items.map(item => {
            let lesson = item.lesson;
            let quizItem = item.quizItems;

            let getData = { lesson, quizItem};
            return getData;
        });
        return itemTemp;
    }


    render() {
        //console.log(this.state.lessons)
        return (
            <QuizContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </QuizContext.Provider>
        )
    }
}

const QuizConsumer = QuizContext.Consumer;

export { QuizProvider, QuizContext, QuizConsumer }