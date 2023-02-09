import GameInfo from "./GameInfo";
import {useDispatch, useSelector} from "react-redux";
import {resetCardSelected, shuffleCards} from "../../app/feature/GameSlice";
import {RootState} from "../../app/store";
import Card from "./Card";
import {useEffect} from "react";
import Confetti from 'react-confetti'
import {DefaultCards, getRangeIdCards} from "../../__tests__/mocks/cards.setup";
import UseDocumentDimensions from "../../hooks/UseDocumentDimensions";

const Game = () => {
  let endGame = false;
  const cards = getRangeIdCards(0,10);
  const cardsState = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();
  const selectedCards = useSelector((state: RootState) =>  state.selected_cards);
  const { width, height } = UseDocumentDimensions();
  const turnedOffCards = cardsState.filter((card) => card.isTurnOver === false);

  useEffect(() => {
    if(cardsState.length <= 0) {
      dispatch(shuffleCards([...cards, ...cards]));
    }
  });

  if (selectedCards.length == 2) {
    if(cardsState[selectedCards[0]].id !== cardsState[selectedCards[1]].id) {
      setTimeout(() => {
        dispatch(resetCardSelected())
      }, 1300);
    }
  }

  if (turnedOffCards.length == 0) {
    endGame = true;
  }

  return (
    <div>
      {endGame ?
        (<Confetti
          width={width}
          height={height}
        />
        ) : ''
      }
      <GameInfo />
      <div className={'grid place-items-center h-screen'}>
        <div className="block align-middle max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
          <div className="md:flex">
            <div className="inline-block align-middle p-6">
              <div className={'m-4 p-4 flex flex-wrap justify-center'}>
                {cardsState.map(
                  (card, index) => {
                    return (
                      <Card key={index} index={index} image={card.image} type={card.type} isTurnOver={card.isTurnOver} />
                    );
                  }
                )}
              </div>

              <div className={'text-center'}>
                <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                        type={'button'} onClick={() => dispatch(shuffleCards([...cards, ...cards]))}>Shuffle</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Game;