import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = process.env.REACT_APP_MEMO_API_URL;
export const createGameUser = (idUser: number, idGame: number) => axios.post(apiUrl + '/games-users', {
  idUser, idGame
});