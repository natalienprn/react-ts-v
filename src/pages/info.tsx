// import { useState } from 'react'
import './info.css'
import {Link} from "react-router-dom"

import TrademeLogo from './trademe-logo.jpg';
import Shoplogo from '/logo-shop.png';
import Product1 from '/couch1.jpg';
import shieldedsiteLogo from '/custom-logo.png';
import facebookLogo from '/facebook-icon.svg';
import twitterLogo from '/twitter-icon.svg';






function Info() {
  // const [count, setCount] = useState(0)

  const handleWatchlist = ()=> {
    alert("Added!")
  }

  return (
    <>
      <div className='container'>
        {/* top-bar1 */}
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
        {/* top-bar2 */}
        <div className='navbar'>
          <div className='top-bar-left'>
            
            <ul>
              <li><img id='logo' src={TrademeLogo}/></li>
              <li>Browse</li>
              <li><input type='text' placeholder='Search all of Trade Me'></input> </li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>Watchlist</li>
              <li>Favourites</li>
              <li>Start a listing</li>
              <li>My Trade Me</li>
            </ul>
          </div>    
        </div>
        {/* navbar - marketplace */}
        <div className='navbar-mp'>
          <div className='top-bar-left'>
            <ul>
              <li><Link className='router-link' to='/'> Browse Marketplace</Link></li>
              <li>Stores</li>
              <li>Deals</li>
              <li>Book a courier</li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul>
              <li>List an item</li>
            </ul>
          </div>
        </div>
        <div className='breadcrump'>
          <p>Home / Marketplace / Home & Living / Lounge, dining & hall / Lounge suites / Suites
            </p>
        </div>
        <div className='main-content'>
          <div className='product-info'>
            <div className='photo-screen'>
              <img src='https://trademe.tmcdn.co.nz/photoserver/plus/2066301121.jpg'/>
            </div>
            <div className='photo-list'>
              <div className='photo-single'>
                <img src='https://trademe.tmcdn.co.nz/photoserver/plus/2066301121.jpg'/>
              </div> 
            </div>
            <div className='info-body'>
              <table>
                <tr>
                  <td>Details</td>
                  <td>Condition:New</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    At Furniture Clearance Outlet, you will get BRAND NEW products at prices that don't break the bank.
                    <br/>
                    <br/>
                    Experience modern luxury with the Currumbin Corner Lounge Suite by John Young Furniture. 
                    <br/>
                    <br/>
                    This exquisite 5-seat modular lounge suite is designed to elevate your living space with its sleek and contemporary style. The suite includes 3 scatter cushions, adding a touch of elegance to the overall design. 
                    <br/>
                    <br/>
                    The Currumbin Lounge Suite features a unique t-cushion design with vertical stitching, creating a visually appealing look on the suite back, sides, and base. The plush feather and foam seating provides exceptional comfort, allowing you to relax and unwind in style. 
                    <br/>
                    <br/>
                    Upholstered in silky velvet fabric, the Currumbin Lounge Suite is available in the sophisticated Shadow color, adding a touch of sophistication to any room. Upgrade your living room with the Currumbin Corner Lounge Suite and indulge in the perfect blend of comfort and style.
                    <br/>
                    <br/>
                    Dimensions (mm):<br/>
                    2.5/S LHF - 1900 x 1010 x 900<br/>
                    CNR/W - 1030 x 1030 x 900<br/>
                    2.5/S RHF - 1900 x 1010 x 900<br/>
                    <br/>
                    <br/>
                    Warranty:<br/>
                    1 year fabric<br/>
                    3 year mechanism<br/>
                    5 year frame<br/>
                    <br/>
                    <br/>
                    Grab yours now: LIMITED STOCK!!
                    <br/>
                    <br/>
                    As these are fast sellers and we sell these through other trading platforms, we do run out at times and there is a wait before our next shipment arrives. We will do our best to let you know whenever this is the case. At the time of listing this we have stock available.
                    <br/>
                    <br/>
                    Viewings available at multiple locations around Auckland and Hamilton all 7 days. Pick ups can be arranged but only by Prior arrangement. 
                    <br/>
                    <br/>
                    DELIVERY:<br/>
                    We deliver anywhere in AUCKLAND. We can also arrange very reasonable freight to most areas in the North & South Island. Please contact us for pricing.
                    <br/>
                    <br/>
                    We are a Trade Me Store and New Zealand Registered Company. Please Google: Furniture Clearance Outlet Manurewa.
                    <br/>
                    <br/>
                    Payment option: 
                    Qcard/Gem Visa/Eftpos/WINZ Quotes/Finance Now/Zip/Afterpay/Cash/Bank Transfer
                    <br/>
                    <br/>
                    Opening Hours:<br/>
                    Mon - Fri: 9am to 5:30pm<br/>
                    Sat - Sun: 10am to 4pm<br/>
                  </td>
                </tr>
                <tr>
                  <td>Shipping & pick-up options</td>
                  <td>
                    <div className='sub-table'>
                    <table >
                    <tr>
                      <th>Destination & description</th>
                      <th>Price per item</th>
                    </tr>
                    <tr>
                      <td>
                        Non-rural - Auckland/Hamilton (free)
                      </td>
                      <td>
                        $0.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Non-rural - Bay of Plenty/Whanganui/Gisborne                      </td>
                      <td>
                        $199.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Non-rural - Napier/New Plymouth
                      </td>
                      <td>
                        $199.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Non-rural - Palmerston North/Wellington 
                      </td>
                      <td>
                        $199.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Non-rural - Northland/Waikato
                      </td>
                      <td>
                        $199.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Rural - Ask us for shipping quote
                      </td>
                      <td>
                        $0.00
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Pick-up available from Manukau, Auckland
                      </td>
                      <td>
                        Free 
                      </td>
                    </tr>
                    
                    </table>
                    <div className='shipping-noted'>Estimated delivery times in business days</div>
                    </div>
                    <tr>
                      <div className='shipping-learn-more'>
                        <a href='https://help.trademe.co.nz/hc/en-us/articles/360007263551?_gl=1*1ixtcvh*_ga*MTk1Mjk3NjM2My4xNjY5OTQwODY2*_ga_JJTLVXMBWX*MTY5NTI2MzM4Ni4yOC4wLjE2OTUyNjMzODYuNjAuMC4w'>Learn more about shipping & delivery options.</a>
                      </div>
                    </tr>
                  
                  </td>
                </tr>
                <tr>
                    <td>
                      Payment Options
                    </td>
                    <td>
                      <div className='payment-table'>
                        <table>
                          <tr>
                            <td>
                              <img src='./ping.png'/><br/>
                              Pay instantly by card, Ping balance or saved bank account.<br/>
                              <a>What's Ping?</a>
                            </td>
                            <td>
                              <img src='./AfterPay_logo.png'/><br/>
                              Four fortnightly interest-free payments.
                              <br/>
                              <a>What's Afterpay</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span style={{fontWeight: 'bold'}}>Other options</span><br/>
                              Cash, NZ Bank Deposit, Hire/Purchase
                            </td>
                          </tr>
                        </table>
                      </div>
        
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Questions & Answers
                    </td>
                    <td>
                      <button className='btn-ask'>Ask a question</button>
                      <br/>
                      No questions have been asked!
                    </td>
                  </tr>
                  <tr>
                    <td>
                      About the store
                    </td>
                    <td>
                      <div className='about-store'>
                        <div className='shop-logo'>
                          <img src={Shoplogo}/>  
                        </div>     
                        <div className='about-store-info'>
                          <h3>furniturestore1</h3>
                          <span className='about-store-feedback'>
                          100% positive feedback(4)
                          </span>
                        </div> 
                        <div className='trader-status'>
                          <span className='trader-status-flag'>
                            IN TRADE
                          </span>
                        </div> 
                        <div className='sub-table'>
                          <table>
                            <tr>
                              <td>Location</td>
                              <td>Manukau</td>
                            </tr>
                            <tr>
                              <td>Member since</td>
                              <td>Monday, 28 August 2023</td>
                            </tr>
                          </table>  
                        </div>
                        <button className='btn-favourite-seller'>
                          Add to Favourite Sellers
                        </button>
                        <div className='help-link'>
                          <a href='https://help.trademe.co.nz/hc/en-us/articles/360007275072?popup=true'>
                            Read our safe buying advice
                          </a>
                        </div>
                                       
                      </div>
                      
                    </td>
                  </tr>

                <tr>
       
                </tr>
              </table>
            </div>
          </div>


          <div className='product-buyer-option'>
            <div className='shop-logo'>
              <img src={Shoplogo}/>
            </div>
            
            <div className='product-name'>
            Brand New Currumbin Velvet Fabric Corner Lounge Suite
            </div>
            <div className='shipping-info'>
            Free Shipping to Auckland and Hamilton (Non-Rural)
            </div>
            <div className='closing-time'>
              <div className='closing-info'>
                 <div className='closing-date'>
                  Closes: Thu 21st Sep, 7:15pm
                  </div>
                  <div className='closing-duration'>
                  4 days, 22 hours, 7 minutes
                  </div>
              </div>
             
            </div>
           <button onClick={handleWatchlist} className='btn-add-watchlist'>Add to Watchlist</button>
            <div className='watchlist-num'>
            <strong>8</strong> others watchlisted
            </div>
            <div className='buy-section'>
              <p>Buy Now</p>
              <div className='product-price'>
                <span className='price'>
                  $3,899
                </span>
                each
              </div>
              <div className='afterpay'>
               <p>Or four interest-free payments of <strong>$974.75</strong> (plus shipping) with 
              </p>
              <a href='https://help.trademe.co.nz/hc/en-us/articles/360007264491-Afterpay?_gl=1*eftq4q*_ga*MTk1Mjk3NjM2My4xNjY5OTQwODY2*_ga_JJTLVXMBWX*MTY5NDg1NTI1MC4yMS4xLjE2OTQ4NTY4MTIuNTUuMC4w'>
              What's Afterpay?
              </a>
              </div>
              <button className='btn-buynow'>Buy now</button>
              <button className='btn-addtocart'>Add to cart</button>
            </div>

          </div>
      </div>
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
        </div>
      {/* </footer> */}
        
      </div>
      </div>
        
    </>
  )
}

export default Info
