import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = process.env.REACT_APP_MEMO_API_URL;
export const createGame = () => axios.post(apiUrl + '/games', { channel: uuidv4() });