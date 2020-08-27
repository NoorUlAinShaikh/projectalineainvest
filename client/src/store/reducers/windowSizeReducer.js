import { SET_SMALL_WINDOW } from "../actions/types";

const INITIAL_STATE = { smallWindow: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SMALL_WINDOW:
      return { ...state, smallWindow: action.payload };
    default:
      return state;
  }
};
