
import {useState, useEffect} from 'react'
import './searchpage.css'

// import cardData from '../data/data'
import cardData, { CardData } from '../data/data';
import CateItem from '../data/cateList'
import { searchProducts } from '../commonLogic/SearchLogic';
import { ParamParseKey } from 'react-router-dom';
import { parseSearchParams } from '../commonLogic/Utils';


import TopBar from '../component/TopBar'
import FooterBlock from '../component/FooterBlock'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import { extractParamsFromUrl } from '../commonLogic/FindParam';

// interface SearchPageProps {
//   cardData: CardData[]; // Specify the type for cardData
// }


function SearchPage() {
    // const { id } = useParams();
    
    const { id, keywordURL } = extractParamsFromUrl();
console.log('Category ID from URL:', id);
    

  const ShowingCards = cardData;
  const [keyword, setKeyword] = useState('');
  const location = useLocation();
  const [searchResults, setSearchResults ] = useState<CardData[]>([]);
  // const [searchResults, setSearchResults] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryId = location.state?.categoryId;
  console.log('Received Category ID:', categoryId);
  const searchParams = new URLSearchParams(location.search);

  const [currentCategory, setCurrentCategory] = useState<string>('');

const [categoryDescription, setCategoryDescription] = useState<string>('');
  // useEffect(() => {
  //   // Find the category details based on the category ID
  //   // const selectedCategory = CateItem.find((category) => category.id === categoryId);
  //   // const selectedCategory = CateItem.find((category) => category.id === parseInt(id, 10));
  //   const selectedCategory = CateItem.find((category) => category.id === Number(id));



  //   // Set the current category in the state
  //   setCurrentCategory(selectedCategory || null);
  // }, [id]);


//   useEffect(() => {
//     // const searchParams = new URLSearchParams(location.search);
//         // const keyword = searchParams.get('keyword');
//         // const category = searchParams.get('category');
        
//     const params = parseSearchParams(location.search); 
//     console.log('params.cate = ', params);
//     const keyword = params.keyword || '';
//     const category = params.category || '';
//     // const category = parseInt(params.category); 
//     console.log('Keyword:', keyword);
//         console.log('Category:', category);
//         setCurrentCategory(category);



//     // Perform the search based on keyword and category
//     // const results = searchProducts(keyword, category);

    
//     const results= searchProducts([],keyword, category)
//     setSearchResults(results);
//     setLoading(false);
// }, [location.search]);



useEffect(() => {
  const params = parseSearchParams(location.search);
  const keyword = params.keyword || '';
  const categoryId = Number(params.category);

  // Find the category name based on the category ID
  const category = CateItem.find(category => category.id === categoryId);
  const categoryName = category ? category.item : 'Unknown Category';
  const categoryDetail = category ? category.description : 'No deails';

  setCurrentCategory(categoryName);
  setCategoryDescription(categoryDetail);

  const results = searchProducts([],keyword, categoryId);

  setSearchResults(results);
  setLoading(false);
}, [location.search]);

  // if (!currentCategory) {
  //   return (
  //     <>
  //       <div className='container'>
  //         <p>Category not found.</p>
  //       </div>
  //     </>
  //   );
  // }
  // console.log('category: ', currentCategory.item);



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
                {/* <div className='cate-topic'>{currentCategory.item}</div> */}
                <div className='cate-topic'>{currentCategory}</div>
                <div className='cate-description'>
                {categoryDescription}
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
                    {/* {ShowingCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <ProductCard data={card} />
                    </Link> */}
                    {searchResults.map((card, index) => (
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