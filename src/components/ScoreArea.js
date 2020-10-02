import React from 'react'
import PercentageCorrect from './PercentageCorrect'
import TotalCorrect from './TotalCorrect'
import TotalIncorrect from './TotalIncorrect'

function ScoreArea(props) {
    return (
        <div className="score-wrapper">
            <TotalIncorrect incorrect={props.incorrect} />
            <PercentageCorrect percentage={props.percentage} />
            <TotalCorrect correct={props.correct} />
        </div>
    )
}

export default ScoreArea
