import { useState, useEffect } from "react";
import "./searchpage.css";

import cardData, { CardData } from "../data/data";
import CateItem from "../data/cateList";
import { searchProducts } from "../commonLogic/SearchLogic";

import TopBar from "../component/TopBar";
import FooterBlock from "../component/FooterBlock";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ProductCard from "../component/ProductCard";
import { extractParamsFromUrl } from "../commonLogic/FindParam";

function SearchPage() {
  const { id } = useParams();
  const query = extractParamsFromUrl().keyword;
  const [keyword, setKeyword] = useState("");

  const location = useLocation();
  const [searchResults, setSearchResults] = useState<CardData[]>([]);

  // const [loading, setLoading] = useState(true);
  const categoryId: number = +(id ?? -1);
  console.log("Received Category ID:", categoryId);

  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [categoryDescription, setCategoryDescription] = useState<string>("");

  useEffect(() => {
    const category = CateItem.find((category) => category.id === categoryId);
    const categoryName = category ? category.item : "Unknown Category";
    const categoryDetail = category ? category.description : "No deails";

    setCurrentCategory(categoryName);
    setCategoryDescription(categoryDetail);
    searchProducts(query, categoryId).then((results) => {
      setSearchResults(results);
      // setLoading(false);
    });
  }, [location.search]);

  return (
    <>
      <div className="container">
        <TopBar />
        <div className="breadcrump">
          <p>
            Home / Marketplace / Home & Living / Lounge, dining & hall / Lounge
            suites / Suites
          </p>
        </div>
        <div className="search-header-wrapper">
          <div className="search-header">
            {/* <div className='cate-topic'>{currentCategory.item}</div> */}
            <div className="cate-topic">{currentCategory}</div>
            <div className="cate-description">{categoryDescription}</div>
            <div className="search-keyword-result-page">
              <input
                className="input"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search by keyword"
              ></input>
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
        <div className="result-wrapper">
          <div className="result-section">
            Showing results
            <div className="result-display">
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
  );
}
export default SearchPage;
