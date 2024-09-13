import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";
function Footer(): JSX.Element{
    return (
        <div className="container-footer">
            <h1>Nguyen Van An</h1>
            <p>For more HTML CSS, and coding tutorial - please click on the link below to subscribe to my channel</p>
            <div className="logo">
                <FaFacebook />
                <FaDribbble />
                <IoLogoWhatsapp/>
            </div>
        </div>
    )
}

export default Footer