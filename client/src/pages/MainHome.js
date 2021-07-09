import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
              Code Your Future is a non governmental organization that supports
              the educational development of hundreds of students worldwide each
              year. As such, throughout the duration of eight month programme our 
              teachers use a variety of online learning tools to test the 
              understanding of our students. Hence having a quiz
              app which would allow our teachers track the success of our
              students is paramount. Also because a lot of courses are covered,
              this app will help our students have a better idea of how well they are
              grasping the material and hopefully motivating them to studying
              more thereby focusing on the information that still needs more
              practice.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHome;
