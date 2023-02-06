import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {GameCardState} from "../../models/GameCardState";
import {UserState} from "../../models/User";
import {initialState} from "../../models/GameState";
import {resetLocal} from "../../services/LocalStoreService";



const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    /**
     * Use to set the current player by default is 'player'
     *
     * @param state
     * @param action
     */
    setPlayerType: (state, action: PayloadAction<string>) => {
      state.player.type = action.payload;
    },
    /**
     * Used for grab the card actions
     *
     * @param state
     * @param action
     */
    cardTurnOver: (state, action:PayloadAction<{index: number, isTurnOver: boolean}>)  => {
      // When a player move a card
      const index = action.payload.index;
      const isTurnOver = action.payload.isTurnOver;

      if (state.selected_cards.length >= 2 || state.selected_cards.includes(index) || !isTurnOver) {
        return;
      }

      state.selected_cards = [...state.selected_cards, index];
      state.cards[index].isTurnOver = isTurnOver;
      if (state.selected_cards.length === 2) {
        if(state.cards[state.selected_cards[0]].id === state.cards[state.selected_cards[1]].id) {
          state.player.score += 10;
          state.selected_cards = [];
        }
      }
    },
    /**
     * Revert the selected_cards changes
     *
     * @param state
     */
    resetCardSelected: (state) => {
      if (state.selected_cards.length >= 2) {
        if (Object(state.cards[state.selected_cards[0]]).hasOwnProperty('isTurnOver')) {
          state.cards[state.selected_cards[0]].isTurnOver = false;
          state.cards[state.selected_cards[1]].isTurnOver = false;
          state.selected_cards = [];
        }
      }
    },
    /**
     * Set to set the 'username' mostly means the email
     *
     * @param state
     * @param action
     */
    setPlayer: (state, action: PayloadAction<UserState>) => {
      state.player.email = action.payload.email;
      state.player.name = action.payload.firstName;
      state.player.id = action.payload.id;
    },
    /**
     * Channel definition for the websocket logic
     *
     * @param state
     * @param action
     */
    setChannel: (state, action: PayloadAction<{id:number, channel:string}>) => {
      state.player.game_id = action.payload.id;
      state.player.channel = action.payload.channel;
    },
    /**
     * If the player select two same cards the score will be incremented
     *
     * @param state
     * @param action
     */
    setCards: (state, action: PayloadAction<GameCardState[]>) => {
      state.cards = action.payload;
    },
    /**
     * Use to reorder the cards
     *
     * @param state
     * @param action
     */
    shuffleCards: (state, action:PayloadAction<GameCardState[]>) => {
      let cardsArray = action.payload;
      let newCardsArray = [];
      newCardsArray = cardsArray
        .map(card => ({card, sort:Math.random()}))
        .sort((currentCard, nextCard) => currentCard.sort - nextCard.sort)
        .map(({card}) => card)
      state.cards = newCardsArray;
    },
    /**
     * Table id between game and users to avoid the "many to many" relationship
     *
     * @param state
     * @param action
     */
    setGameUser: (state, action:PayloadAction<number>) => {
      state.player.game_user_id = action.payload;
    },
    resetGame: (state) => {
      resetLocal();
      state.player = initialState.player;
      state.cards = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setPlayerType,
  cardTurnOver,
  resetCardSelected,
  setPlayer,
  setChannel,
  setCards,
  shuffleCards,
  setGameUser,
  resetGame
} = gameSlice.actions;
export default gameSlice.reducer;

