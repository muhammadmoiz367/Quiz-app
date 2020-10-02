import React from 'react'
import AnswerOptions from './AnswerOptions'
import Question from './Question'
import UserLog from './UserLog'

function QuizArea(props) {
    return (
        <div>
            {props.isFinished 
                ? <UserLog isPassed={props.isPassed} />
                : (
                    <>
                        <h4>Question {props.current+1} of {props.total}</h4>
                        <Question dataSet={props.dataSet} />
                        <AnswerOptions handleClick={props.handleClick} dataSet={props.dataSet} />
                    </>
                )
            }
        </div>
    )
}

export default QuizArea
