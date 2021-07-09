import React, { useState,useEffect } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
// import Categories from "../../Data/Category";
import { useHistory } from "react-router";
import ErrorMessage from "../../Component/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/categories')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      setCategories(data);
    })
  }, [])
  const history = useHistory();

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
            {console.log("cat in menu",categories)}
            {categories ? (categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))) : null}
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
        src="https://thumbs.dreamstime.com/z/quiz-time-quiz-online-laptop-concept-question-answer-test-survey-exam-vector-concept-quiz-time-quiz-online-133831749.jpg"
        className="banner"
        alt="quiz img"
      />
    </div>
  );
};

export default Home;
