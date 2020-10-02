import React from 'react'

function Answer(props) {
    return (
        <div>
            <button type="button" className="btn-answer" onClick={()=>props.handleClick(props.choice)} >{props.answer}</button>
        </div>
    )
}

export default Answer
