import {GameCardState} from "./GameCardState";
import {getLocal} from "../services/LocalStoreService";

interface GameState {
  time: number;
  turn_blocked: boolean;
  selected_cards: Array<number>;
  player: {
    id: number;
    name: string;
    email: string;
    type: string;
    game_id: number;
    channel: string;
    score: number;
    game_user_id: number;
  };
  cards: GameCardState[]
}
export const gameEmptyState = {
  time: 0,
  turn_blocked: false,
  selected_cards: [],
  player: {
    id: 0,
    name: '',
    email: '',
    type: 'player', // 2 types 'player' and 'observer'
    game_id: 0,
    channel: '',
    score: 0,
    game_user_id: 0
  },
  cards: []
};

const initialCardsState = getLocal(process.env.REACT_APP_STORE_CARDS_KEY, true) || [];
const initialPlayerState = getLocal(
  process.env.REACT_APP_STORE_USER_KEY, true
) || gameEmptyState.player;

export const initialState: GameState = {
  time: 0,
  /**
   * TODO: Resolve the logic for two players in the same machine
   * Maybe with a 'versus' object with the same attributes as 'player'
   */
  turn_blocked: false,
  selected_cards: [],
  player: initialPlayerState,
  cards: initialCardsState
}

export default GameState;