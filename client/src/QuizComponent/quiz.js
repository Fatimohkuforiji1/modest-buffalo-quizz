import React, {useState} from "react";

const Quiz = () => {
 

  return (
    <div>
      <h1>QUIZ</h1>
      <p>Select Module</p>
      <form className="Modules">
        <label className="modules-items">
          <select>
            <option
              value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="react">REACT</option>
            <option value="nodes">NODES</option>
            <option value="sql">SQL</option>
          </select>
        </label>
      </form>

      {/* <button>Submit</button> */}
    </div>
  );
}
export default Quiz;
