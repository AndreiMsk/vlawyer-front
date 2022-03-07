import "assets/styles/main.scss";
import { createContext, useReducer } from "react";

/* instantiate context */
export const StoreContext = createContext();

/* instantiate context provider */
const StoreProvider = ({ children }) => {
  /* instantiate initial state */
  const initialState = {
    messages: [],
    channel: null,
  };

  /* instantiate reducer and state */
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

/* action Types */
export const ACTION_TYPES = {
  SET_CHANNEL: "SET_CHANNEL",
  ADD_MESSAGE_TO_MESSAGE_BAG: "ADD_MESSAGE_TO_MESSAGE_BAG",
};

/* create reducer for store's context */
const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CHANNEL:
      return { ...state, channel: action.payload};

    case ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG:
      return { ...state, messages: [...state.messages, action.payload] };

    default:
      throw new Error(`Unhandled action type - ${action.type}`);
  }
};

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
  );
}
