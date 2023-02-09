import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = process.env.REACT_APP_MEMO_API_URL;
export const createGameLog = (idGamesUsers:number, idActionCard: string) => axios.post(apiUrl + '/game-logs', {
  idGamesUsers, idActionCard
});