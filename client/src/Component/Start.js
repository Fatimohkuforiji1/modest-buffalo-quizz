import React from 'react'
import "../Start.css"

const Start = ({onQuizStart}) => {
    return (
        <div className="card App">
            <div className="card-content">
                <div className="content">
                    <h1> Start the quiz</h1>
                    <p> Good luck</p>
                    <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>

                </div>

            </div>

            
        </div>
    )
}
// client / src / App.js;
// modified: client / src / Component / allRegisterFiles.js;
// deleted: client / src / Component / login.js;
// deleted: client / src / QuizComponent / questionMultipleChoice.js;
// deleted: client / src / QuizComponent / quiz.js;
// modified: client / src / index.js;
// modified: package - lock.json;
// modified: server / api.js;

export default Start;
