import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { PortfolioReducer } from "../reducers/PortfolioReducer";

export const PortfolioContext = createContext();

const initialState = {
  projects: [],
  experiences: [], // Initialize projects as an empty array
  // other state fields (if any)
};

export const PortfolioContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PortfolioReducer, initialState);
  return (
    <PortfolioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  );
};

PortfolioContextProvider.propTypes = {
  children: PropTypes.object,
};
