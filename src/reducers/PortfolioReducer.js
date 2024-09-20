export const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      console.log(action.payload)
      return {
        ...state,
        projects: action.payload,
      };
    case "GET_EXPERIENCES":
      console.log(action.payload)
      return {
        ...state,
        experiences: action.payload,
      }
    default:
      return state;
  }
};
