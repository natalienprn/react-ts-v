// import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
// import { CardData } from '../data/data';

import TrademeLogo from '/trademe-logo.jpg';



const TopBar= ()=>{
    return(

        <div className='wrapper'>
       {/* top-bar1 */}
       <div className='wrapper-topbar'>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul>
              <li>Trade Me</li>
              <li>Trade Me Insurance</li>
              <li>Holiday Houses</li>
              <li>FindSomeone</li>
              <li>MotorWeb</li>
              <li>homes.co.nz</li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>Register</li>
              <li>Log in</li>
            </ul>
          </div>    
        </div>
        </div>
        {/* top-bar2 */}
        <div className='navbar'>
          <div className='navbar-left'>
            
            <ul>
              <li><img id='logo' src={TrademeLogo}/></li>
              <li>Browse</li>
              <li><input type='text' placeholder='Search all of Trade Me'></input> </li>
            </ul>
          </div>
          <div className='navbar-right'>
            <ul>
              <li>Watchlist</li>
              <li>Favourites</li>
              <li>Start a listing</li>
              <li>My Trade Me</li>
            </ul>
          </div>    
        </div>
        {/* navbar - marketplace */}
        <div className='wrapper-navbar-mp'>
        <div className='navbar-mp'>
          <div className='navbar-left'>
            <ul>
              <li><Link className='router-link' to='/'> Browse Marketplace</Link></li>
              <li className='navbar-hidden'>Stores</li>
              <li className='navbar-hidden'>Deals</li>
              <li className='navbar-hidden'>Book a courier</li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>List an item</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        
    );
};
export default TopBar
