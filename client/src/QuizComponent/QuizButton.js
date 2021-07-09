import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


const QuizButton = () => {
const history = useHistory()
const [module, setModule] = useState([]);


const handleModuleBtn = (moduleType)=>{
  
    history.push(`/quizDetails/${moduleType}`);
    }
  

 useEffect(() => {
   fetch("http://localhost:3100/api/modules")
     .then((result) => result.json())
     .then((module) => {
    setModule(module);
    console.log(module);
     });
 }, []);



    return (
      <div>
        {module.map((obj, i) => {
          return (
            <button onClick={()=>handleModuleBtn(obj.module_name)} key={i}>
              {obj.module_name}
            </button>
          );
        })}
       
      </div>
    );
}

export default QuizButton;
