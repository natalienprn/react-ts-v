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
    const calCardWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1280) {
            return 289.6;
        } else if (screenWidth > 768) {
            return 256;
        } else {
            return 264;
        }
    };
    const [cardWidth, setCardWidth] = useState(calCardWidth);
    const [cardsPerDeck, setCardsPerDeck] = useState(Math.floor(window.innerWidth / cardWidth));
    const [currentDeck, setCurrentDeck] = useState(0);

    const TotalCard = cardData.length;
    const TotalDecks = Math.ceil(TotalCard / cardsPerDeck);
    const handlePrevDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck > 0 ? prevDeck - 1 : TotalDecks - 1));

    };

    const handleNextDeck = () => {
        setCurrentDeck((prevDeck) => (prevDeck < TotalDecks - 1 ? prevDeck + 1 : 0));

    };

    const StartCardIndex = currentDeck * cardsPerDeck;
    const ShowingCards = cardData.slice(StartCardIndex, StartCardIndex + cardsPerDeck);

    const updateCardsPerDeck = () => {
        const newCardWidth = calCardWidth();
        setCardWidth(newCardWidth);

        const newCardsPerDeck = Math.floor(window.innerWidth / newCardWidth);
        setCardsPerDeck(newCardsPerDeck);
    };

    useEffect(() => {
        window.addEventListener('resize', updateCardsPerDeck);
        return () => {
            window.removeEventListener('resize', updateCardsPerDeck);
        };
    }, [cardsPerDeck, cardWidth]);

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
            <button className="arrow-left" onClick={handlePrevDeck}>
                <img src={ArrowLeft} />
            </button>
            <button className="arrow-right" onClick={handleNextDeck}>
                <img src={ArrowRight} />
            </button>
        </div>
    );
};
export default Carousel;

