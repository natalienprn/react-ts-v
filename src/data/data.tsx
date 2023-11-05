
export interface CardData {
    productName: string;
    productImg: string;
    description: string;
    city: string;
    closeDate: string;
    shippingInfo: string;
    proStatus: string;
    oldPrice: string;
    currentPrice: string;
    link: string;
  }
const cardData = [
    {
        productName: 'Brand New Currumbin Velvet Fabric Corner Lounge Suite',
        productImg: 'https://trademe.tmcdn.co.nz/photoserver/plus/2066301121.jpg',
        description: 'Viewing across locations - Auckland & Hamilton',
        city:'Canterbury',
        closeDate:'Sat, 16 Sep',
        shippingInfo: 'Free shipping',
        proStatus: 'Buy Now',
        oldPrice: '$4,989',
        currentPrice: '$3,899',
        link: '/info',

    },
    {
        productName: 'Brand New Rex Corner Lounge Suite with Ottoman',
        productImg: 'https://trademe.tmcdn.co.nz/photoserver/plus/2074338951.jpg',
        description: 'Free Shipping to Auckland & Hamilton (Non Rural)',
        city:'Auckland',
        closeDate:'Thu, 9 Nov',
        shippingInfo: 'Free shipping',
        proStatus: 'Buy Now',
        oldPrice: '$2,990',
        currentPrice: '$1,989',
        link: '/info',
        

    },
    {
        productName: 'Brand New Dublin Manual Recliner Corner Lounge Suite',
        productImg: 'https://trademe.tmcdn.co.nz/photoserver/plus/2066302782.jpg',
        description: 'Free Shipping to Auckland and Hamilton (Non-Rural)',
        city:'Auckland',
        closeDate:'Wed, 8 Nov',
        shippingInfo: ' ',
        proStatus: 'Buy Now',
        oldPrice: '$3,990',
        currentPrice: '$2,990',
        link: '/info',

    },
    {
        productName: 'Brand New Webber 3+2 Seater Lounge Suite',
        productImg: 'https://trademe.tmcdn.co.nz/photoserver/plus/2066934770.jpg',
        description: '3 seater and 2 seater fabric lounge suite',
        city:'Auckland',
        closeDate:'Fri, 10 Nov',
        shippingInfo: ' ',
        proStatus: 'Buy Now',
        oldPrice: '',
        currentPrice: '$2,990',
        link: '/info',

    },

];
export default cardData;
