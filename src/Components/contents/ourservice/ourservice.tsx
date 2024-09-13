import React from "react";
import "./ourservice.css";
import { IoMenu } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

function OurService(): JSX.Element {
  let services = [
    {
      icon: <IoMenu />,
      service: "Web Development",
      content:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible",
      button: "Read More",
    },
    {
      icon: <IoPerson />,
      service: "Web Development",
      content:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible",
      button: "Read More",
    },
    {
      icon: <FaBell />,
      service: "Web Development",
      content:
        "Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible",
      button: "Read More",
    },
  ];
  return (
    <div className="container-service">
      <h1>My Services</h1>
      <div className="list-card">
        {services.map((element, index) => {
          return (
            <div key={index} className="card-service">
              {element.icon}
              <h3>{element.service}</h3>
              <p>{element.content}</p>
              <button>{element.button}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurService;
