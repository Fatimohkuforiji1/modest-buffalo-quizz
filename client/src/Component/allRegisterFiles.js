import React from 'react';
import Header from './header';
import Login from './login';
import QuestionMultipleChoice from '../QuizComponent/questionMultipleChoice';
import Quiz from '../QuizComponent/quiz';

const AllRegisterFiles = () => {
    return (
      <div>
        <h1>Hello</h1>
        <Header />
        <Login />
        <Quiz />
        <QuestionMultipleChoice />
    
      </div>
    );
}

export default AllRegisterFiles;
