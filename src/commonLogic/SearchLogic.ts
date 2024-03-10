
import cardData, { CardData } from '../data/data';

export function searchProducts(products: CardData[], keyword: string, category: number): CardData[] {


    const filteredProducts = products.filter((product) => {
        
        return (
            product.productName.toLowerCase().includes(keyword.toLowerCase()) &&
            (category === 1 || product.categoryID === category) 
            ||
            (  
                console.log('search function keyword: ', keyword),
                console.log('search function category2: ', category),
                console.log('search function data2: ', products),
                console.log('productName check2: ', product.productName.toLowerCase().includes(keyword.toLowerCase())),
                console.log('category check2: ', category === 1 || product.categoryID === category)
            )
                    
        );
    });

  
    console.log('search function result: ', filteredProducts);
    return filteredProducts;
}
