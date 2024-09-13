import React from "react";
import "./App.css";
import { HeaderWeb } from "./Components/Introduce/header";
import AboutMe from "./Components/contents/aboutme/aboutme";
import OurService from "./Components/contents/ourservice/ourservice";
import Contact from "./Components/contents/contact/contact";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <>
        <HeaderWeb />
        <AboutMe />
        <OurService />
        <Contact/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
