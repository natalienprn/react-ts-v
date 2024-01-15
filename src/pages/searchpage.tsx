
import { FormEvent, useState } from 'react'
import './searchpage.css'

import cardData from '../data/data'
import TopBar from '../component/TopBar'
import FooterBlock from '../component/FooterBlock'
import CateItem from '../data/catelist'
import Carousel from '../component/Carousel'
import DealCard from '../component/DealCard'
import { Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard'




function SearchPage() {
  const [keyword, setKeyword] = useState('');

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Searching for: ${keyword}`);
  }
  const ShowingCards = cardData;


  return (
    <>
      <div className='container'>
        <TopBar />
        <div className='search-header-wrapper'>
            <div className='search-header'>
            {/* {ShowingCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <DealCard data={card} />
                    </Link>
                ))} */}
                SEARCH
                

            </div>

        </div>
        <div className='result-wrapper'>
            <div className='result-section'>
                Showing results
                <div className='result-display'>
                    {ShowingCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <ProductCard data={card} />
                    </Link>
                ))}

                </div>
                
            </div>

        </div>        
        <FooterBlock />
      </div>
    </>
  )
}
export default SearchPage