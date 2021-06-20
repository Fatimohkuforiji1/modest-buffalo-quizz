import React from 'react';
import Header from './header';
import Login from './login';
import QuestionMultipleChoice from '../QuizComponent/questionMultipleChoice';
import Quiz from '../QuizComponent/quiz';
import RegistrationForm from './registrationForm';

const AllRegisterFiles = () => {
    return (
      <div>
        <h1>Hello</h1>
        <Header />
        <RegistrationForm />
        <Login />
        <Quiz />
        <QuestionMultipleChoice />
       
      </div>
    );
}

export default AllRegisterFiles;
