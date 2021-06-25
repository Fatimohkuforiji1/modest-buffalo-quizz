import React, {useState} from 'react';
import Header from '../landingPageComponent/Header';
import Login from './Login'
import Register from './Register'
// import LoginDetails from "./loginDetails";
import QuestionMultipleChoice from '../QuizComponent/QuestionMultipleChoice';
import Quiz from '../QuizComponent/quiz';
// import RegistrationForm from "../Component/registrationForm";

// const [landing, setLanding] = useState();


const AllRegisterFiles = () => {
    return (
      <div>
        
        <Header />
        <Login/>
        <Register/>
        {/* <RegistrationForm />
        <LoginDetails />
        <Quiz />
        <QuestionMultipleChoice /> */}
      </div>
    );
}

export default AllRegisterFiles;
