export const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "GET_EXPERIENCES":
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};