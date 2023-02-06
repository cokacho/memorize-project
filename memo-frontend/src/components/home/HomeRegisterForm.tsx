import React, { useState } from 'react';
import {registerUser} from '../../services/UserService';
import {AxiosResponse} from "axios";
import {useDispatch} from "react-redux";
import {setChannel, setGameUser, setPlayer, setPlayerType, shuffleCards} from "../../app/feature/GameSlice";
import {createGame} from "../../services/GameService";
import {useNavigate} from "react-router-dom";
import {createGameUser} from "../../services/GameUserService";

const HomeRegisterForm = () => {
  const normalBorder = 'border-blue-400';
  const errorBorder = 'border-red-500';
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const [border, setBorder] = useState(normalBorder);
  const dispatcher = useDispatch();
  let navigate = useNavigate();
  const resetForm = () => {
    setEmail('');
    setFirstName('');
    setError('');
    setBorder(normalBorder);
  };
  const registerGameUser = async (idGame: number, idUser: number) => {
    try {
      await createGameUser(idUser, idGame)
        .then((response: AxiosResponse<any>) => {
            if(response?.data?.id) {
              dispatcher(setGameUser(response.data.id));
              navigate('/game');
            }
      });
    } catch (err) {
      console.error(err)
    }
  }
  const registerNewGame = async (idUser:number) => {
    try {
      await createGame()
        .then((response:AxiosResponse<any>) => {
          if (response?.data?.channel) {
            dispatcher(setChannel({id:response.data.id, channel: response.data.channel}));
            registerGameUser(response.data.id, idUser);
          }
        });
    } catch (err) {
      console.error(err)
    }
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    /**
     * Regex Email validator
     */
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Invalid email');
      setBorder(errorBorder);
    } else {
      try {
        await registerUser(email, firstName)
          .then((response: AxiosResponse<any>) => {
            if(response?.data?.id) {
              // User id
              registerNewGame(response.data.id);
              dispatcher(setPlayer(response.data));
              dispatcher(setPlayerType(process.env.REACT_APP_PLAYER_TYPE));
              resetForm();
            }
          })
          .catch((error: any) => {
            const errorData = error.response?.data;
            setError(errorData.message.join(' '));
            setBorder(errorBorder);
            // TODO: clear setTimeout on each click
            setTimeout(() => {
              resetForm();
            }, 10000);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form className="mx-auto p-10" onSubmit={handleSubmit}>
      <div className={'relative'}>
        <div className={'block'}>
          <div className={'inline-block xs:block'}>
            <input
              className={`p-2 m-2 rounded  border-2 w-fit ${border}`}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />

          </div>

          <div className={'inline-block xs:block'}>
            <input
              className={`p-2 m-2 rounded  border-2 w-fit ${border}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

          </div>

          <div className={'inline-block'}>
            <button
              className="w-[200px] bg-blue-500 text-white py-2 px-4 rounded mt-2 bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Start a new game
            </button>
          </div>
        </div>
        <div className={'block text-center'}>
          {error && (
            <p className="text-red-500 text-xs mt-2">{error}</p>
          )}
        </div>

      </div>

    </form>
  );
};

export default HomeRegisterForm;