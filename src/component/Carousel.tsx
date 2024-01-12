import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import './Carousel.css';

import ArrowLeft from '/icon/arrow-left.png';
import ArrowRight from '/icon/arrow-right.png'
import { Link } from "react-router-dom";
import { CardData } from "../data/data";


interface CarouselProps {
    cardData: CardData[];

}

const Carousel: React.FC<CarouselProps> = ({ cardData }) => {
    // const CardPerDeck = 4;
    // const [currentDeck, setCurrentDeck] = useState(0);

    // const TotalCard = cardData.length;
    // const TotalDecks = Math.ceil(TotalCard / CardPerDeck);
    // const calCardWidth = () => {
    //     const screenWidth = window.innerWidth;
    //     if (screenWidth > 1280) {
    //         return 289.6;
    //     } else if (screenWidth > 768) {
    //         return 256;
    //     } else {
    //         return 264;
    //     }
    // };


    const calCardPerDeck = () => {
        const screenWidth = window.innerWidth;
      
        if (screenWidth >= 980) {
          return 4;
        } else if (screenWidth >= 700 && screenWidth < 980) {
          return 3;
        } else if (screenWidth > 445 && screenWidth < 700) {
          return 2;
        } else {
          return 1;
        }
      };
      
    //   const calCardToShow = () => {
    //     const screenWidth = window.innerWidth;
      
    //     if (screenWidth > 1280) {
    //       return 4;
    //     } else {
    //       return 5;
    //     }
    //   };

    // const [cardWidth, setCardWidth] = useState(calCardWidth);
    const [cardsPerDeck, setCardsPerDeck] = useState(calCardPerDeck());
    // const [cardsToShow, setCardsToShow] = useState(calCardToShow())
    const [currentDeck, setCurrentDeck] = useState(0);
    const cardsToShow = 4;

    const TotalCard = cardData.length;
    const TotalDecks = Math.ceil(TotalCard / cardsPerDeck);
    const handlePrevDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck > 0 ? prevDeck - 1 : TotalDecks - 1));

    };

    const handleNextDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck < TotalDecks - 1 ? prevDeck + 1 : 0));

    };

    const StartCardIndex = currentDeck * cardsPerDeck;
    const EndCardIndex = StartCardIndex + cardsToShow;
    const ShowingCards = cardData.slice(StartCardIndex, EndCardIndex);

    // const updateCardsPerDeck = () => {
    //     const newCardWidth = calCardWidth();
    //     setCardWidth(newCardWidth);

    //     const newCardsPerDeck = Math.floor(window.innerWidth / newCardWidth);
    //     setCardsPerDeck(newCardsPerDeck);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', updateCardsPerDeck);
    //     return () => {
    //         window.removeEventListener('resize', updateCardsPerDeck);
    //     };
    // }, [cardsPerDeck, cardWidth]);

    const updateCardsPerDeck = () => {
        const newCardsPerDeck = calCardPerDeck();
        setCardsPerDeck(newCardsPerDeck);
      };
    
      useEffect(() => {
        window.addEventListener('resize', updateCardsPerDeck);
        return () => {
          window.removeEventListener('resize', updateCardsPerDeck);
        };
      }, []);

    return (
        
        <div className="carousel-wrapper">
            <div className="carousel">

                {ShowingCards.map((card, index) => (
                    // <DealCard key={index} data={card}/>
                    <Link to={`/product/${card.id}`} key={index}>
                        <DealCard data={card} />
                    </Link>
                ))}
            </div>
            <div className="arrows-inside">
                <button className="arrow-left" onClick={handlePrevDeck}>
                    <img src={ArrowLeft} />
                </button>
                <button className="arrow-right" onClick={handleNextDeck}>
                    <img src={ArrowRight} />
                </button>
            </div>
            
        </div>
    );
};
export default Carousel;

