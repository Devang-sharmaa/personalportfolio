import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/nezz_tokyo/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          <a href="https://www.linkedin.com/in/devang-sharma-535315308/ " target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}
          <a href="https://github.com/Devang-sharmaa" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
  href="mailto:fantombrothers191@gmail.com"
  target="_blank"
  className="items"
>
  <SiGmail className="icons" />
</a>

        </div>
      </div>
    </>
  );
};

export default Contact;