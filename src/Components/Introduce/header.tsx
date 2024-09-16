import React, { useEffect, useState } from "react";
import "./header.css";

const TypingEffect = ({ text }: { text: string }): JSX.Element => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const interval = 70; // Khoảng thời gian giữa các ký tự (0.5 giây)
  const repeatInterval = 5000; // Thời gian lặp lại (5 giây)

  useEffect(() => {
    const typing = () => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, interval);

        return () => clearTimeout(timer);
      }
    };

    typing();

    const repeatTimer = setInterval(() => {
      setIndex(0);
      setDisplayedText("");
    }, repeatInterval);

    return () => clearInterval(repeatTimer); // Dọn dẹp repeatTimer khi component unmount
  }, [index, text, interval, repeatInterval]);

  return <div>{displayedText}</div>;
};
export const HeaderWeb = (): JSX.Element => {
  const header = ["Home", "About Me", "Services", "Skills", "Contact Me"];
  const name = "NGUYEN VAN AN...";
  return (
    <div className="container-intro">
      <header>
        <ul className="list-header">
          <li className="logo">MyProfile</li>
          <ul className="listInfor">
            {header.map((value, index) => {
              return <a href="#" key={index}>{value}</a>;
            })}
          </ul>
          <li>
            <button className="button-Sub">Subscribe</button>
          </li>
        </ul>
      </header>
      <main>
        <div className="introduce">
          <p>Hello, my name is</p>
          <h1>
            <TypingEffect text={name} />
          </h1>
          <p>I'm a Web Developer</p>
          <div className="enter-email">
            <input type="email" placeholder="Enter Your Email"/>
            <button>Let's start</button>
          </div>
        </div>
        <img src="../images/1a.jpg" alt="img in hear" />
      </main>
    </div>
  );
};
