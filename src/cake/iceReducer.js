import { BUY_ICE } from "./iceTypes";
const initialIceState = {
  numberOfIce: 100,
};

export const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        numberOfIce: state.numberOfIce - 1,
      };

    default:
      return state;
  }
};
