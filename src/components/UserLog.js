import React from 'react'

function UserLog(props) {
    return (
        <div>
            <h3 className="user-logs" >Thank you for attempting the quiz :)</h3>
            <br/>
            {!props.isPassed
                ? <h2 className="failed" >You failed the quiz !!</h2>
                : <h2 className="passed" >You passed the quiz !!</h2>
            }
            <br/>
            <button onClick={()=> window.location.reload()} className="re-attempt-btn" >Re-attempt quiz</button>
        </div>
    )
}

export default UserLog
