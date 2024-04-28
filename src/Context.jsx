import { createContext, useReducer } from "react";

const AstronomyContext = createContext();
const initialState = { AsteroidsNum: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "SET_ASTEROIDS_NUM":
      return { ...state, AsteroidsNum: action.payload };
    default:
      return state;
  }
}

function AstronomyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AstronomyContext.Provider value={{ state, dispatch }}>
      {children}
    </AstronomyContext.Provider>
  );
}

export { AstronomyContextProvider, AstronomyContext };
