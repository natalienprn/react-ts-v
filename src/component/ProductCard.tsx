import React from 'react';
import './ProductCard.css';
import { CardData } from '../data/data';

import shippingIcon from '/icon/shipping-96.png';

interface ProductCardProps{
    data: CardData;
}

const ProductCard: React.FC<ProductCardProps> = ({data})=>{
    return(
        // <Link to={data.link}>
          <div className='product-card-container'>
            <div className='product-card'>
              <div className='product-thumbnail'>
                <img src={data.productImg[0]}/> 
              </div>
              <div className='product-card-info'>
                <div className='top-info'>
                  <div className='city'>
                    {data.city}
                  </div>
                  <div className='date'>
                    Closes: {data.closeDate}
                  </div>
                </div>
                <div className='prod-name'>
                {data.productName}
                </div>
                <div className='prod-description'>
                  {data.description}
                </div>
                {data.shippingInfo && (
                  <div className='prod-ship-info'>
                    <img src={shippingIcon}/>
                  {data.shippingInfo}
                </div>
                )}
                
                <div className='price-section'>
                  <div className='promotion-status'>
                    {data.proStatus}
                  </div>
                  <div className='price'>
                    <span className='old-price'>{data.oldPrice}</span>
                    {data.currentPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
            // </Link>
    );
};
export default ProductCard
