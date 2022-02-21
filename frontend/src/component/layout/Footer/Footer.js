import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from "react-router-dom";





const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col col-1">
          <h4>company</h4>
          <ul>
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/Products">Products</NavLink></li>
            <li><NavLink to ="/about">About</NavLink></li>
            <li><NavLink to ="/Contact">Contact</NavLink></li>
           
          </ul>
        </div>
        <div className="footer-col col-2">
          <h4>Quick</h4>
          <ul>
          <li><NavLink to ="/login">Login</NavLink></li>
          <li><NavLink to ="/login">Register</NavLink></li>
          <li><NavLink to ="/cart">cart</NavLink></li>
       

          </ul>
        </div>
        <div className="footer-col col-3">
          <h4>online shop</h4>
          <ul>
          <li><NavLink to ="/Products">Laptop</NavLink></li>
          <li><NavLink to ="/Products">Camera</NavLink></li>
          <li><NavLink to ="/Products">Footwear</NavLink></li>
          <li><NavLink to ="/Products">SmartPhones</NavLink></li>

          </ul>
        </div>
        <div className="footer-col col-4">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://github.com/mayank287"  target = "_blank"><GitHubIcon className="s-i"/></a>
            <a href ="https://www.linkedin.com/in/mayank-arora-979a83211/" target= "_blank"> <LinkedInIcon className ="s-i"/></a>
            <a href="https://www.instagram.com/mayankarora2707/" target="_blank"> <InstagramIcon className="s-i" /></a>
            </div>
        </div>
      </div>
    </div>
 </footer>


  );
};

export default Footer;
