
import {useState, useEffect} from 'react'
import './searchpage.css'

// import cardData from '../data/data'
import cardData, { CardData } from '../data/data';
import CateItem from '../data/catelist'

import TopBar from '../component/TopBar'
import FooterBlock from '../component/FooterBlock'
import { Link, useLocation, useParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'

interface SearchPageProps {
  cardData: CardData[]; // Specify the type for cardData
}


function SearchPage() {
    const { id } = useParams();
    console.log('Category ID from URL:', id);
    
//   const [keyword, setKeyword] = useState('');

//   function handleSearch(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log(`Searching for: ${keyword}`);
//   }
  const ShowingCards = cardData;
  const [keyword, setKeyword] = useState('');
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  // console.log('Received Category ID:', categoryId);
  console.log('Received Category ID:', categoryId);

  const [currentCategory, setCurrentCategory] = useState<CateItem | null>(null);

  useEffect(() => {
    // Find the category details based on the category ID
    // const selectedCategory = CateItem.find((category) => category.id === categoryId);
    // const selectedCategory = CateItem.find((category) => category.id === parseInt(id, 10));
    const selectedCategory = CateItem.find((category) => category.id === Number(id));


    // Set the current category in the state
    setCurrentCategory(selectedCategory || null);
  }, [id]);

  if (!currentCategory) {
    return (
      <>
        <div className='container'>
          <p>Category not found.</p>
        </div>
      </>
    );
  }
  console.log('category: ', currentCategory.item);



  return (
    <>
      <div className='container'>
        <TopBar /> 
        <div className='breadcrump'>
        <p>Home / Marketplace / Home & Living / Lounge, dining & hall / Lounge suites / Suites
            </p>
        </div>
        <div className='search-header-wrapper'>
            <div className='search-header'>
            {/* {ShowingCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <DealCard data={card} />
                    </Link>
                ))} */}
                <div className='cate-topic'>{currentCategory.item}</div>
                <div className='cate-description'>
                {currentCategory.description}
                </div>
                <div className='search-keyword-result-page'>
                    <input className='input' type='text'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder='Search by keyword'></input>
                  <button className='search-button'>
                    Search                        
                    </button>
                </div>
                
                

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