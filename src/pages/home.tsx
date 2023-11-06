
import { FormEvent, useState } from 'react'
import './info.css'
import'./home.css'
import {Link} from "react-router-dom"

import DealCard from '../component/DealCard'
import cardData from '../data/data'


import TrademeLogo from '/trademe-logo.jpg';








function Home() {
  const [keyword, setKeyword] = useState('');

  function handleSearch(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(`Searching for: ${keyword}`);
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
        <div className='banner-top'>
            Shop new & used items
            <br/>
            for sale
        </div>
        <div className='search-section'>
          <div className='search-block'>
            <form onSubmit={handleSearch}>
              <div className='search-by-kw'>
                <label className='search-heading'>
                  Search by keyword  
                  <span className='search-optional'>
                        (Optional)
                  </span>
                </label>
                <input type='text' 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search by keyword'></input>
              </div>
              <div className='search-by-cate'>
                <label className='search-heading'>
                  Category
                  <span className='search-optional'>
                    (Optional)
                  </span>
                </label>
              <select name='category' id='category'>
                <option value={0}>All Categories</option>
                <option value={0}>Home & Living</option>
              </select>

              </div>
              <button className='search-mp'>
                Search Marketplace
              </button>
            </form>
          </div>
          <div className='search-section-footer'>
            <a href='#' className='get-app'>Get the Trade Me iOS app  </a>
            <a href='#' className='get-app'>Get the Trade Me Android app</a>
          </div>
        </div>
        <div className='categories'>
          <div className='cate-list'>
            <ul>
              <li>Antiques & collectables</li>
              <li>Baby gear</li>
              <li>Books</li>
              <li>Building & renovation</li>
              <li>Business, farming & industry</li>
              <li>Clothing & Fashion</li>
              <li>Computers</li>
              <li>Electronics & photography</li>
              <li>Gaming</li>
              <li>Health & beauty</li>
              <li>Home & living</li>
              <li>Jewellery & watches</li>
              <li>Mobile phones</li>
              <li>Music & instruments</li>
              <li>Pets & animals</li>
              <li>Sports</li>
              <li>Toys & models</li>

            </ul>
          </div>
        </div>
        
          <div className='deals-section' >
          <div className='deal-heading'>
            <div className='topic'>Deals</div>
            <div className='deal-view-all'>View all(32,000)</div>
          </div>
          <div className='deals-list'>
            
            {cardData.map((item, index)=>(
              <DealCard key={index} data={item}/>
            ))}
   
          </div>
          
        </div>
        
        <div className='popular-search'>
       
        </div>
        <div className='footer'>

          </div>
      </div>
        </>
  )
}
export default Home