import React from 'react'

function Question(props) {
    return (
        <div>
            <h5 className="question">{props.dataSet.question}</h5>
        </div>
    )
}

export default Question
