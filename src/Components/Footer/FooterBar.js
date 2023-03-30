import React from 'react';
import '../Footer/FooterBar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { SiTwitter, SiYoutube } from 'react-icons/si';


function FooterBar() {
  return (
    <div>
      <section className="link  ">
        <div className="row">
          <div className="icondiv">
            <h1 className="icons">
              <FaFacebookSquare />
            </h1>
            <h1 className="icons">
              <BsInstagram />
            </h1>
            <h1 className="icons">
              <SiTwitter />
            </h1>
            <h1 className="icons">
              <SiYoutube />
            </h1>
          </div>
        </div>
        <div className="sub-links">
          <ul>
            <li>
              <a href="#">Audio and Subtitles</a>
            </li>
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>
      {/* END OF LINKS */}
      {/* FOOTER */}
      <footer>
        <p>© 1997-2018 Netflix @ Inc.</p>
        <p>Clone by © Albin</p>
      </footer>
    </div>
  );
};

export default FooterBar