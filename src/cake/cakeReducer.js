import { BUY_CAKE, GIVE_CAKE, RESET_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case GIVE_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };
    case RESET_CAKE:
      return {
        ...state,
        numberOfCakes: initialState.numberOfCakes,
      };

    default:
      return state;
  }
};
