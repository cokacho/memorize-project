/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_HASH: string;
    REACT_APP_API_URI: string;
    REACT_APP_WS_URI: string;
    REACT_APP_MEMO_API_URL: string;
    REACT_APP_PLAYER_TYPE: string;
    REACT_APP_PLAYER_FRIEND_TYPE: string;
    REACT_APP_STORE_CARDS_KEY:string;
    REACT_APP_STORE_SELECTED_CARDS_KEY:string;
    REACT_APP_STORE_USER_KEY:string;
  }
}
interface Window {
  Stripe: any
}