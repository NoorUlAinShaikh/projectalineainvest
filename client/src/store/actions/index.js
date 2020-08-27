import { SIGN_IN, SIGN_OUT, SET_SMALL_WINDOW } from "../actions/types";

export const signIn = userId => ({ type: SIGN_IN, payload: userId });
export const signOut = () => ({ type: SIGN_OUT });
export const setSmallWindow = smallWindow => ({ type: SET_SMALL_WINDOW, payload: smallWindow });
