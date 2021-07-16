import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { TextField, MenuItem, Button } from "@material-ui/core";
import Categories from "../../Data/Category";
import { useHistory } from "react-router";
import ErrorMessage from "../../Component/ErrorMessage/ErrorMessage";
import quiz from "../../Component/img/quiz.png";
import "./Home.css"

const Home = ({ name, setName, fetchQuestions }) => {
const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  setName(user.firstName)
  
  const handleSubmit = () => {
    if (!category || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category);
      history.push("/quiz");
    }
  };
console.log(setName)
  return (
    
    <div className="content">
      <button onClick={()=>history.push("/dashboard/student")}>dashboard:</button>
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Modules</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please select a category</ErrorMessage>}
          
          <TextField
            label = "Enter Your Full Name"
            variant = "outlined"
            style ={{ marginBottom: 25 }}
            onChange = {(e) => setName(e.target.value)}
            >

          </TextField>

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button> 
        </div>
      </div>
      <img
        src={quiz}
        className="quiz-img"
        alt="quiz-img"
      />
    </div>
  );
};

export default Home;
