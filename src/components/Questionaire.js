import React, { Component } from 'react'
import dataSet from '../api/data';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

class Questionaire extends Component{
    constructor(){
        super();
        this.state={
            currentQuestion: 0,
            dataset: dataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false,
            isPassed: false,
            totalQuestions: dataSet.length,
            percentage: 0
        }
        this.handleClick=this.handleClick.bind(this);
    }

    checkPassed(){
        console.log(this.state.correct)
        console.log(this.state.incorrect)
        if(this.state.incorrect >= 2){
            console.log('changed')
            this.setState({ isPassed: false})
        }
        else{
            this.setState({ isPassed: true})
        }
    }

    getPercentage(){
        let per=parseFloat(this.state.correct / this.state.totalQuestions * 100).toFixed(2)
                console.log(per)
        if(per.split(".")[1] ==='00')
            per=per.split('.')[0]
        this.setState({ percentage: per})
    }

    handleClick(choice){
        if(choice===this.state.dataset[this.state.currentQuestion].correct){
            this.setState({ correct: ++this.state.correct })
        }
        else{
            this.setState({ incorrect: ++this.state.incorrect })
        }

        if(this.state.currentQuestion===this.state.dataset.length-1){
            this.setState({ isFinished: true })
        }else{
            this.setState({ currentQuestion: ++this.state.currentQuestion })
        }
        
        this.getPercentage() 

        this.checkPassed();
    }
    render(){
        return (
            <div>
                <QuizArea handleClick={this.handleClick} isFinished={this.state.isFinished} isPassed={this.state.isPassed} dataSet={this.state.dataset[this.state.currentQuestion]} current={this.state.currentQuestion} total={this.state.totalQuestions} />
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} percentage={this.state.percentage} />
            </div>
        )
    }
}

export default Questionaire
