import React, { Component, useEffect, useState } from 'react';
import './App.css';
import myDeck from './components/myDeck'
import ShowCard from './components/interface'
import GameActions from './components/gameActions';
import PicDisplayer from './components/picDisplayer';
require('purecss')

const App = () => {
    
    const [myHand, setMyHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([])
    const [myHandResult, setMyHandResult] = useState();
    const [dealerHandResult, setDealerHandResult] = useState()
    const [currentDeck, setCurrentDeck] = useState(myDeck);
    const [currentPlayer, setCurrentPlayer] = useState("player");
    const [imageToShow, setImageToShow] = useState({});
    //MicroModal.init();
    const start = () => {
        setMyHand([currentDeck[0], currentDeck[1]]);
        setDealerHand([currentDeck[2]]);
        
        currentDeck.shift();
        currentDeck.shift();
        currentDeck.shift();
    }

    const calcularMiMano = () => {
        let result = 0;
        
        for (let i = 0; i < myHand.length; i++) {
            
            result =result + myHand[i].Weight;
        }
        
        setMyHandResult(result);
        
    }

    const calcularManoDealer = () => {
        let result = 0;
        
        for (let i = 0; i < dealerHand.length; i++) {
            
            result = result + dealerHand[i].Weight;
        }
        setDealerHandResult(result);
    }

    const myNextCard = () => {
        let nextCard = currentDeck.shift();
        setMyHand([...myHand,nextCard]);
        calcularMiMano()        
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
                } else {
                    nextCardDealer(); break;
                }; break;
            default:
                console.log("Default")
                nextCardDealer(); break;
        }
    }

    const finDelJuego = (winner) => {
        let nuevapartida = window.confirm("Ganador " + winner)
        
            setMyHand([]);
            setDealerHand([]);
            setMyHandResult();
            setDealerHandResult();
            setCurrentPlayer('player');
            setImageToShow('')
            start()
        

    }

    const nextCardDealer = () => {
        let nextCard = currentDeck.shift();
        setDealerHand([...dealerHand,nextCard]);
    }

    const mePlanto = () => {
        setCurrentPlayer("dealer")
        nextCardDealer()   
    }
    useEffect(() => {
        
        calcularManoDealer()
    },[dealerHand])

    useEffect(() => {
        setTimeout(()=>(myHandResult && dealerHandResult > 1) && check(),650)
        
    }, [myHandResult, dealerHandResult]); //En cada cambio de resultado, ejecuto check()

    useEffect(calcularMiMano, [myHand]);        //este y el de abajo es para tener un resultado apenas carga la pagina
    

    useEffect(start, []);

  return (
      <div className="App">
          <nav className="pure-menu pure-menu-horizontal">
              <h2 className="titulo">Maradona 21</h2>
              <ul class="reglas pure-menu-list">
                  
                  <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                      <a href="#" id="menuLink1" class="pure-menu-link">Reglas</a>
                      <ul class="pure-menu-children">
                          <li class="pure-menu-item">
                              <div className="inside-reglas"                              >
                                   Mira tus cartas, juega hasta acercarte a 21. Si lo pasas, pierdes.<hr />
                                  
                                   Cuando termines, plantate y el juego tratara de superarte.<hr />
                                  
                                   Puedes visualizar cada tarjeta y ver la descripcion. <br />Tambien en presentacion (click a la foto)
                                  
                              </div>
                          </li>
                      </ul>
                  </li>
            </ul>
          </nav>
          
          
          <header className="header">
              <div className="firstRow rows">
                  <div className="dealer">
                      {dealerHand.map((card, index) => {

                          return (<ShowCard key={index} value={card.Value} palo={card.Suit} num={card.Weight}
                              img={card.img}
                              description={card.description} click={setImageToShow} />);
                      })}
                  </div>
                  <div className="infoDisplayer">
                      {imageToShow.src ?
                          <PicDisplayer img={imageToShow.src} description={imageToShow.description} /> : false
                      }
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
