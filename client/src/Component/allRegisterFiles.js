import React, {useState} from 'react';
import Header from '../landingPageComponent/Header';
import LoginForm from './Login'
// import Register from './Register'

import QuestionMultipleChoice from '../QuizComponent/QuestionMultipleChoice';
import Quiz from '../QuizComponent/quiz';

const AllRegisterFiles = () => {
    return (
      <div>
        
        <Header />
        <LoginForm/>
        {/* <Register/> */}
        {/* <RegistrationForm />
        <LoginDetails />
        <Quiz />
        <QuestionMultipleChoice /> */}
      </div>
    );
}

export default AllRegisterFiles;
