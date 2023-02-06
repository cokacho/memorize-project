import {AnyAction, createListenerMiddleware, ListenerEffectAPI, ThunkDispatch} from "@reduxjs/toolkit";
import {cardTurnOver, setChannel, setGameUser, setPlayer, setPlayerType, shuffleCards} from "./feature/GameSlice";
import {saveLocal} from "../services/LocalStoreService";

const saveCardsState =
  (listenerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>, unknown>) => {
    const state = listenerApi.getState();
    if (Object(state).hasOwnProperty(process.env.REACT_APP_STORE_CARDS_KEY)) {
      saveLocal(process.env.REACT_APP_STORE_CARDS_KEY,
        JSON.stringify(Object(state)[process.env.REACT_APP_STORE_CARDS_KEY]));
    }
  }
const saveUserState =
  (listenerApi: ListenerEffectAPI<unknown, ThunkDispatch<unknown, unknown, AnyAction>, unknown>) => {
    const state = listenerApi.getState();
    console.log(state)
    if (Object(state).hasOwnProperty('player')) {
      saveLocal(process.env.REACT_APP_STORE_USER_KEY,
        JSON.stringify(Object(state)[process.env.REACT_APP_STORE_USER_KEY]));
    }
  }

export const storePlayerTypeMiddleware = createListenerMiddleware();
storePlayerTypeMiddleware.startListening({
  actionCreator: setChannel,
  effect: (action,  listenerApi) => {
    saveUserState(listenerApi);
  }
});

export const storeListenerCardTurnOverMiddleware = createListenerMiddleware();
storeListenerCardTurnOverMiddleware.startListening({
  actionCreator: cardTurnOver,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    // const index = action.payload.index;
    // const cardId = state.cards[index].id
    // const idGamesUsers = state.player.game_user_id
    // console.log(index)
    saveCardsState(listenerApi);
    saveUserState(listenerApi);
    // createGameUser(idGamesUsers, index + ':' + cardId)
    // TODO send log to db
  }
});


export const storeListenerShuffleMiddleware = createListenerMiddleware();
storeListenerShuffleMiddleware.startListening({
  actionCreator: shuffleCards,
  effect: (action, listenerApi) => {
    saveCardsState(listenerApi);
  }
});

export const storePlayerInfoMiddleware = createListenerMiddleware();
storePlayerInfoMiddleware.startListening({
  actionCreator: setPlayer,
  effect: (action, listenerApi) => {
    saveUserState(listenerApi);
  }
});

export const storeChannelMiddleware = createListenerMiddleware();
storeChannelMiddleware.startListening({
  actionCreator: setPlayerType,
  effect: (action,  listenerApi) => {
    saveUserState(listenerApi);
  }
});

export const storeGameUserMiddleware = createListenerMiddleware();
storeGameUserMiddleware.startListening({
  actionCreator: setGameUser,
  effect: (action,  listenerApi) => {
    saveUserState(listenerApi);
  }
});

export const storePlayerScoreMiddleware = createListenerMiddleware();
export const storePlayerSelectedCardsMiddleware = createListenerMiddleware();
