
import { FormEvent, useState } from 'react'
import './info.css'
import './home.css'

import cardData from '../data/data'
import TopBar from '../component/TopBar'
import FooterBlock from '../component/FooterBlock'
import CateItem from '../data/catelist'
import Carousel from '../component/Carousel'
// import SearchPage from './searchpage'
// import { Link } from 'react-router-dom'
// import { createHashHistory } from 'history'
import { useNavigate, createSearchParams } from 'react-router-dom'




function Home() {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  // const history = createHashHistory();
  const navigate = useNavigate();

  // function handleSearch(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   console.log(`Searching for: ${keyword}`);
  //   // history.push(`/result`, { categoryId: selectedCategory });
  //   history.push(`/result/${selectedCategory}`);


  // }
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    console.log('handleSearch triggered');
    event.preventDefault();
    console.log(`Searching for: ${keyword}`);
    console.log('Selected Category:', selectedCategory);
    if (selectedCategory){
      //  history.push(`/result/${selectedCategory}`);
      navigate({
        pathname: `/result/${selectedCategory}`,
        search: createSearchParams({keyword}).toString()
      });
      console.log('it is push this id: ', selectedCategory);
      }
   
  }
  

  return (
    <>
      <div className='container'>
        <TopBar />

        <div className='banner-top'>
          <div className='banner-top-message'>
            Shop new & used items
            <br />
            for sale</div>
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

                <input className='input' type='text'
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
                <select name='category' 
                id='category'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value=''>Select a category</option>
                  {CateItem.map((item) => (
                    <option key={item.id} value={item.id}>{item.item}</option>
                  ))}

                </select>

              </div>
              <button className='search-mp' type='submit'
              onClick={() => {
                // history.push(`/result/${selectedCategory}`);
                handleSearch
              }}
              >
                  Search Marketplace     
              </button>
            </form>
          </div>
          <div className='search-section-footer'>
            <a href='https://apps.apple.com/nz/app/trade-me-buy-sell/id392567559' target="_blank" className='get-app'>Get the Trade Me iOS app  </a>
            <a href='https://play.google.com/store/apps/details?id=nz.co.trademe.trademe&referrer=utm_source%3Dtm%26utm_medium%3Dnewtm&pli=1' target='_blank' className='get-app'>Get the Trade Me Android app</a>
          </div>
        </div>
        <div className='categories'>
          <div className='cate-list'>
            <ul>

              {CateItem.slice(1).map((item) => (
                <li key={item.id}>{item.item}</li>
              ))}

            </ul>
          </div>
        </div>

        <div className='deals-section' >
          <div className='deals-section-wrapper'>
            <div className='deal-heading'>
              <div className='topic'>Deals</div>
              <div className='deal-view-all'>View all(32,000)</div>
            </div>
            <div className='deals-list'>

          
              <Carousel cardData={cardData} />
            </div>
          </div>


        </div>

        <div className='popular-search'>
          <div className='topic'>Popular Searches</div>
          <div className='col-lists'>
            <div className='half-col-list'>
              {/* first col */}
              <div className='popular-col'>
                <div className='popular-col-title'>Pets and animals</div>
                <div className='popular-list'>Dogs for sale</div>
                <div className='popular-list'>Puppies for sale</div>
                <div className='popular-list'>LiveStock</div>
              </div>
              {/* second col */}
              <div className='popular-col'>
                <div className='popular-col-title'>Home and outdoors</div>
                <div className='popular-list'>Furniture</div>
                <div className='popular-list'>Outdoor furniture</div>
                <div className='popular-list'>Fence posts & timber</div>
              </div>
            </div>
            <div className='half-col-list'>
              {/* third col */}
              <div className='popular-col'>
                <div className='popular-col-title'>Tech and leisure</div>
                <div className='popular-list'>iPhone</div>
                <div className='popular-list'>Mountain bike</div>
                <div className='popular-list'>Nintendo switch</div>
                <div className='popular-list'>Women's shoes</div>
              </div>
              {/* last col */}
              <div className='popular-col'>
                <div className='popular-col-title'>Other</div>
                <div className='popular-list'>Flatmates wanted</div>
                <div className='popular-list'>Car parts & accessories</div>
              </div>
            </div>
          </div>



        </div>
        <FooterBlock />
      </div>
    </>
  )
}
export default Home