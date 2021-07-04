import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import "./Home.css";
import logo from "./logo.svg";

export function MainHome() {
	const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
    <main role="main">
      <div>
        {/* <img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
				<h1 className="message" data-qa="message">{message}</h1> */}
        {/* <Link to="/about/this/site">About</Link> */}

	
        <div className="main">
          <div className="welcome-text">
            <p>Welcome to the Quiz</p>
            <p>
              At CodeYourFuture, our students gain a vast amount of knowledge
              and skills, which will result in them being able to call
              themselves a programmer. It’s important that we can track a
              student's progress over the course to make sure that they are
              keeping up with the class and developing their understanding of
              our material.
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}

export default MainHome;
