import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img
            src="./../../images/thebulletins.png"
            alt="thebulletins"
            className="header-logo cur-po"
          />

          <p className="footer-links">
            <Link to={"/"} className="link-1">
              Home
            </Link>

            <a href="#about">About</a>
          </p>

          <p className="footer-company-name">thebulletins.in © 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span></span> India
            </p>
          </div>

          <div>
            <i className="fa fa-newspaper"></i>
            <a href="/"><p >
            Latest Trending
            </p></a>
          </div>

          {/* <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div> */}

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:thebulletins45@gmail.com">
                thebulletins45@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about" id="about">
            <span>About the company</span>
            Through the bulletins.in you will continue get the latest news from
            the country to abroad, along with important stories and political
            analysis about politics things related to sports, social media and
            many more.
          </p>

          <div className="footer-icons">
            <a href="#about">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/thebulletins_">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#about">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/thebulletins_/">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <hr style={{ width: "90%" }} />
        <div className="name">
          Made with ❤️ by&nbsp;
          <a
            className="name-tag"
            href="https://www.linkedin.com/in/divyanshu-shukla-15a01a17b/"
            target="__blank"
          >
            Divyanshu shukla
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
