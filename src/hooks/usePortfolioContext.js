import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    console.log(
      "usePortfolioContext must be inside the PortfolioContextProvider"
    );
  }

  return context;
};
