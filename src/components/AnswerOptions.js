import React from 'react'
import Answer from './Answer'

function AnswerOptions(props) {
    const option=[];
    for(let i=0; i<props.dataSet.options.length; i++){
        option.push(<Answer handleClick={props.handleClick} choice={i} key={i} answer={props.dataSet.options[i]} />);
    }
    return (
        <div>
            {option}  
        </div>
    )
}

export default AnswerOptions
