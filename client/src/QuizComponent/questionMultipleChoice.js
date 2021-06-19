import React from "react";

const QuestionMultipleChoice = () => {
  return (
    <div>
      <h1>What is the capital city of Togo</h1>

      <form action="" className="multiple-choice">
        <p>Please select the correct answer</p>
        <label>India</label>
        <input type="radio" name="india" value="india" />
        <label>Togo</label>
        <input type="radio" name="togo" value="togo" />
        <label>Berlin</label>
        <input type="radio" name="berlin" value="berlin" />
        <label>Abidjan</label>
        <input type="radio" name="abidjan" value="abidjan" />
      </form>

      <h1>Who is allergic to chicken</h1>

      <form action="" className="multiple-choice">
        <p>Please select the correct answer</p>
        <label>Trump</label>
        <input type="radio" name="trump" value="trump" />
        <label>Togo</label>
        <input type="radio" name="togo" value="togo" />
        <label>Berlin</label>
        <input type="radio" name="berlin" value="berlin" />
        <label>Abidjan</label>
        <input type="radio" name="abidjan" value="abidjan" />
      </form>
    </div>
  );
}

export default QuestionMultipleChoice;
