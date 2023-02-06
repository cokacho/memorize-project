import { configureStore } from '@reduxjs/toolkit';
import gameReducer from "./feature/GameSlice";
import {
  storeListenerShuffleMiddleware,
  storeListenerCardTurnOverMiddleware,
  storePlayerTypeMiddleware,
  storePlayerInfoMiddleware,
  storeChannelMiddleware,
  storeGameUserMiddleware
} from "./storeMiddleware";
export const store = configureStore({
  reducer: gameReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(storeListenerShuffleMiddleware.middleware)
    .concat(storeListenerCardTurnOverMiddleware.middleware)
    .concat(storePlayerTypeMiddleware.middleware)
    .concat(storePlayerInfoMiddleware.middleware)
    .concat(storeChannelMiddleware.middleware)
    .concat(storeGameUserMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
