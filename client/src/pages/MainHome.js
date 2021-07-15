import { useEffect, useState } from "react";
import cubic from "../Component/img/cubic.png"
import Footer from "../landingPageComponent/Footer";


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
      
        {/* <img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
				<h1 className="message" data-qa="message">{message}</h1> */}
        {/* <Link to="/about/this/site">About</Link> */}

        {/* <div className="main"> */}
          <div className="welcome-text">
            <h2>Welcome to the Quiz Page</h2>
            <div className="welcome-wrapper">
              <p>
                Code Your Future is a non governmental organization that
                supports the educational development of hundreds of students
                worldwide each year. As such, throughout the duration of eight
                month programme teachers use a variety of online learning
                tools to test the understanding of the students. Hence having a
                quiz app which would allow our teachers track the success of the
                students is paramount. Also because a lot of courses are
                covered, this app will help the students have a better idea of
                how well they are grasping the material and hopefully motivating
                them to studying more, focusing on the area that needs more practice.
              </p>
              <img src={cubic} alt="An image of a cubic" />
            </div>
          </div>
          <div className="footer-wrapper">
            <Footer />
          </div>
        {/* </div> */}
     
    </main>
  );
}

export default MainHome;
