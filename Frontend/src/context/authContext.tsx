import { createContext, useContext, useReducer } from "react";
import { UserProperty } from "../types/type";

export type stateType = {
  user: UserProperty | null;
  isLoading: boolean;
  isLoggedIn: boolean;
};

export type methodType = {
  handleUserData: (data: any) => void;
};

const initialState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
};

const AuthContext = createContext<stateType | methodType>(initialState);

function reducer(state: stateType, action: any) {
  if (action.type === "USER-LOGIN") {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
}

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const methods: methodType = {
    handleUserData: (data: UserProperty) => {
      dispatch({ type: "USER-LOGIN", payload: data });
    },
  };

  return (
    <AuthContext.Provider value={{ ...state, ...dispatch, ...methods }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
