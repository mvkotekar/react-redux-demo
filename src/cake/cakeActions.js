import { BUY_CAKE, GIVE_CAKE, RESET_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const giveCake = () => {
  return {
    type: GIVE_CAKE,
  };
};

export const resetCake = () => {
  return {
    type: RESET_CAKE,
  };
};
