import { createContext, useReducer } from "react";

export const ModalContext = createContext();

const initialState = {
   signin: false,
   signup: false,
   OTP: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        signin: true,
      };
    case "SIGNUP":
      return {
        ...state,
        signup: true,
      };
    case "OTP":
      return {
        ...state,
        OTP: true,
      };
    case "CLOSE_SIGNIN_SIGNUP":
      return {
        ...state,
        signin: false,
        signup: false,
      };
    case "CLOSE_MODAL":
       return {
          ...state,
          signin: false,
          signup: false,
          OTP: false,
       };
    default:
      throw new Error();
  }
};

export const ModalContextProvider = ({ children }) => {
  const [stateModal, dispatchModal] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={[stateModal, dispatchModal]}>
      {children}
    </ModalContext.Provider>
  );
};
