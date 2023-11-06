
// import React from 'react';
import './FooterBlock.css';
// import { Link } from 'react-router-dom';
// import { CardData } from '../data/data';

import TrademeLogo from '/trademe-logo.jpg';


import shieldedsiteLogo from '/custom-logo.png';
import facebookLogo from '/facebook-icon.svg';
import twitterLogo from '/twitter-icon.svg';



const FooterBlock= ()=>{
    return(
        <div className='footer'>
      {/* <footer> */}
        <div className='footer-content'>
          <div className='footer-content-top'>
            <ul>
              <li><img id='logo' src={TrademeLogo}/></li>
              <li>List an item</li>
              <li>Watchlist</li>
              <li>Favourites</li>
              <li>My Trademe</li>
              <li>
                <ul>
                  <li>Register</li>
                  <li>Login</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='footer-main'>
            <ul>
              <li><span style={{color: '#D93A3F'}} className='footer-list-heading'>Marketplace</span></li>
              <li>Latest deals</li>
              <li>Stores</li>
              <li>Closing soon</li>
              <li>$1 reserve</li>
            </ul>
            <ul>
              <li><span style={{color: '#F5632D'}} className='footer-list-heading'>Jobs</span></li>
              <li>Browse categories</li>
              <li>Careers advice</li>
              <li>JobSmart</li>
              <li>Advertisers advice</li>
            </ul>
            <ul>
              <li><span style={{color: '#5F6F88'}} className='footer-list-heading'>Motors</span></li>
              <li>Browse all cars</li>
              <li>Other vehicles</li>
              <li>Buying & Selling</li>
              <li>Dealer news & info</li>
            </ul>
            <ul>
              <li><span style={{color: '#29A754'}} className='footer-list-heading'>Property</span></li>
              <li>Looking to sell?</li>
              <li>News & guides</li>
              <li>Homes.co.nz</li>
              <li>OneHub for agents</li>
            </ul>
            <ul>
              <li><span style={{color: '#555555'}} className='footer-list-heading'>Services</span></li>
              <li>Trades</li>
              <li>Domestic services</li>
              <li>Events & entertainment</li>
              <li>Health & wellbeing</li>
            </ul>
            <ul>
              <li><span style={{color: '#148FE2'}} className='footer-list-heading'>Community</span></li>
              <li>Help</li>
              <li>Announcements</li>
              <li>Trust & safety</li>
              <li>Seller information</li>
            </ul>
          </div>
          
        </div>
        <div className='footer-bottom'>
            <ul>
              <li>@2023 Trade Me Limited</li>
              <ul>
                <li>Desktop site</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Advertise</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
                <li>Contact Us</li>
              </ul>
              <li><img className='footer-icon' src={shieldedsiteLogo}/></li>
              <ul>
                <li><img className='footer-icon' src={facebookLogo}/></li>
                <li><img className='footer-icon' src={twitterLogo}/></li>
              </ul>
            </ul>
          </div>
      {/* </footer> */}
      </div>
        
    );
};
export default FooterBlock

