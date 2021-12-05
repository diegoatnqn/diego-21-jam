import React, { Component, useEffect, useState } from 'react';
import './App.css';
import myDeck from './components/myDeck'
import ShowCard from './components/interface'
import GameActions from './components/gameActions';
import PicDisplayer from './components/picDisplayer'
require('purecss')
const App = () => {
    let loadScore;
    const [myHand, setMyHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([])
    const [myHandResult, setMyHandResult] = useState();
    const [dealerHandResult, setDealerHandResult] = useState()
    const [currentDeck, setCurrentDeck] = useState(myDeck);
    const [currentPlayer, setCurrentPlayer] = useState("player");
    const [imageToShow, setImageToShow] = useState({});
    
    const start = () => {
        setMyHand([currentDeck[0], currentDeck[1]]);
        setDealerHand([currentDeck[2]]);
        
        currentDeck.shift();
        currentDeck.shift();
        currentDeck.shift();
    }

    const calcularMiMano = () => {
        let result = 0;
        console.log("MY HAND LENGHT", myHand.length)
        for (let i = 0; i < myHand.length; i++) {
            
            result =result + myHand[i].Weight;
        }
        console.log("result mano ", result)
        setMyHandResult(result,check())
        
        //if (myHandResult > 21)
        //    alert("DEALER")
    }
    const calcularManoDealer = () => {
        let result = 0;
        console.log("DEALER HAND LENGHT", dealerHand.length)
        for (let i = 0; i < dealerHand.length; i++) {
            
            result = result + dealerHand[i].Weight;
        }
        console.log("result mano dealer",result)
        setDealerHandResult(result,check())
        
    }

    const myNextCard = () => {
        let nextCard = currentDeck.shift();
        myHand.push(nextCard);
        calcularMiMano()
        //check()
    }
    const check = () => {
        switch (currentPlayer) {
            case "player":
                if ((myHandResult > 21)) {
                    finDelJuego("dealer")
                }; break;
            case "dealer":
                if (dealerHandResult > 21) {
                    finDelJuego("player")
                } else if (dealerHandResult > myHandResult) {
                    finDelJuego("dealer")
                }
                ; break;
        }
    }

    const finDelJuego = (winner) => {
        let nuevapartida = window.confirm("Ganó " + winner)
        if (nuevapartida) {
            setMyHand([]);
            setDealerHand([]);
            setMyHandResult();
            setDealerHandResult();
            setCurrentPlayer('player');
            start()
        }

    }

    const nextCardDealer = () => {
        let nextCard = currentDeck.shift();
        dealerHand.push(nextCard);
        calcularManoDealer()
        console.log("EVALUAR JUEGO NEXTCARDDEALER", evaluarJuego())
        if (evaluarJuego()) {
            nextCard = currentDeck.shift();
            dealerHand.push(nextCard);
            calcularManoDealer();
        }
    }

    const evaluarJuego = () => {
        let sigue = true;
        console.log("evaluar dealer,mine " + dealerHandResult + " " + myHandResult)
        if (((dealerHandResult > myHandResult) && (dealerHandResult <= 21)) || dealerHandResult > 21) {
            sigue = false;
        }
        return sigue;
    }


    const mePlanto = () => {
        setCurrentPlayer("dealer")
        nextCardDealer()
        
    }


    useEffect(() => { check() }, [myHandResult, dealerHandResult])
    useEffect(calcularMiMano, [myHand]);
    useEffect(calcularManoDealer, [dealerHand])
    useEffect(start, []);
    useEffect(() => { console.log(imageToShow.description) }, [imageToShow]);
    const dealerCardsUI =()=> dealerHand.map((card,index) => {

        return <ShowCard key={index} value={card.Value} palo={card.Suite} num={card.Weight}
            img={card.img}
            description={card.description} click={setImageToShow} />
    })


  return (
      <div className="App">
          <h2 className="titulo">Maradona 21</h2>
          
          <header className="header">
              <div className="firstRow rows">
                  <div className="dealer">
                      {dealerCardsUI()}
                  </div>
                  <div className="infoDisplayer">
                      <PicDisplayer img={imageToShow.src} description={imageToShow.description} />
                  </div>
              </div>
              <div className="secondRow rows">
                  <div className="gameActions">
                      <GameActions sigo={() => myNextCard()} mePlanto={() => mePlanto()} mySum={myHandResult} dealerSum={dealerHandResult} />
                  </div>
                  <div className="mine">
                  {myHand.map((card,index) => {
                      return (
                          <ShowCard key={index} value={card.Value} palo={card.Suit} num={card.Weight}
                              description={card.description}
                              img={card.img} click={setImageToShow} />
                          );
                  })}
                  </div>
              </div>
      </header>
    </div>
  );
}

export default App;
