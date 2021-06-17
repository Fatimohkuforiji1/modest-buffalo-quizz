import React from 'react';
import Header from './header';
import Login from './login';
import QuestionMultipleChoice from './questionMultipleChoice';
import Quiz from './quiz';
import RegistrationForm from './registrationForm';
const AllRegisterFiles = () => {
    return (
        <div>
           <h1>Hello</h1> 
           <Header />
           <RegistrationForm />
           <Login />
           <QuestionMultipleChoice />
           <Quiz />
        </div>
    )
}

export default AllRegisterFiles;
