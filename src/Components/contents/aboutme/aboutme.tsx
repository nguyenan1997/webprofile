import React from "react";
import "./aboutme.css";

function AboutMe(): JSX.Element {
  return (
    <div className="container-Aboutme">
      <img src="../images/2a.jpg" alt="Imgaes2" />
      <div className="infor-Aboutme">
        <h1>About Me</h1>
        <h4>Developer <span>& Designer</span></h4>
        <p>
          Introduction I am a Fullstack Developer with a passion for building
          robust and innovative web applications from front-end to back-end.
          With a solid foundation in both client-side and server-side
          development, I am able to participate in all phases of the software
          development process, from concept and design to deployment and
          maintenance. I am proficient in technologies such as HTML, CSS,
          JavaScript (and frameworks like React), as well as
          backend languages like Node.js, Python, PHP, along with databases such
          as MySQL, MongoDB. I have the ability to create visually appealing
          interfaces while optimizing performance and security on the backend.
          With strong problem-solving skills and a logical mindset, I constantly
          seek to streamline development processes and ensure the highest
          quality of code. My goal is to create seamless user experiences and
          powerful backend systems that meet the diverse needs of businesses and
          users alike.
        </p>
        <button className="button-talk">Let's Talk</button>
      </div>
    </div>
  );
}

export default AboutMe;
