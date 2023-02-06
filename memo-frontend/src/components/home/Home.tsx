import HomeRegisterForm from "./HomeRegisterForm";
import HomeJoinForm from "./HomeJoinForm";
import {getLocal} from "../../services/LocalStoreService";
import {useDispatch} from "react-redux";
import {resetGame} from "../../app/feature/GameSlice";
import {initialState} from "../../models/GameState";

const Home = () => {
  let user = getLocal(process.env.REACT_APP_STORE_USER_KEY, true) || null;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetGame());
    window.location.reload();
  }
console.log(!Object(user).hasOwnProperty('email') && !Object(user).email)
  return (
    <div className={'xl:m-10 md:m-5 sm:m-0 xs:m-0 h-screen'}>
      <div className="block align-middle max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-max">
        <div className="md:flex">
          <div className="align-middle p-6">
            <div className={'m-4 p-4 flex flex-wrap justify-center'}>
              <b className={'text-2xl sm:text-7xl md:text-8xl pt-8 mt-8 mb-2 pb-2 font-mono'}>Memorize </b>
              Is a classic matching game also known as Concentration. It is usually played with a deck of cards
              with images or numbers on one side and a uniform back on the other. The objective of the game is to find
              pairs of matching cards in as few moves as possible.
              Here are the rules for playing Memory:
              <ul className={'list-decimal md:p-2 md:m-2'}>
                <li className={'ml-4 p-2'}>Set up: Shuffle the deck of cards and place them face down in
                  a grid pattern.</li>
                <li className={'ml-4 p-2'}>Game play: Each turn, a player chooses two cards to flip over.
                  If the two cards match, the player keeps the pair and takes another turn.
                  If the two cards do not match, the player turns them back over and the next player takes a turn.</li>
                <li className={'ml-4 p-2'}>Winning the game:
                  The game ends when all pairs have been found and collected.
                  The player with the most pairs at the end of the game is the winner.</li>
              </ul>
              <div className={'flex justify-center align-middle m-1 p-1 text-center'}>
                <div className={''}>
                  { !Object(user).hasOwnProperty('email') && !Object(user).email ?
                    (<HomeRegisterForm />)
                    :
                    <div className={'w-full text-center'}>
                      <p>Current user: {user?.name} <b>({user?.email})</b></p>
                      <button
                        onClick={() => handleClick()}
                        className="w-[200px] bg-blue-500 text-white py-2 px-4 rounded
                         mt-2 bg-blue-600 hover:bg-blue-700"
                        type="button"
                      >Change user</button>
                    </div>
                  }
                  <HomeJoinForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;