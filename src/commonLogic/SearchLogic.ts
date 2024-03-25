import cardData, { CardData } from "../data/data";

export function searchProducts(
  keyword: string,
  category: number
): Promise<CardData[]> {
  const filteredProducts = cardData.filter((product) => {
    console.log(`Keyword Match: ${keyword}, Category Match: ${category}`);

    return (
      product.productName.toLowerCase().includes(keyword.toLowerCase()) &&
      (category === 1 || product.categoryID === category)
    );
  });

  console.log("search function result: ", filteredProducts);
  return Promise.resolve(filteredProducts);
}
// export function browseCategory(
//   category: number
//   ):Promise<CardData[]>{
//     const 
//   }
// )
