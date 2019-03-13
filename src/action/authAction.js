import { LOGGED_IN, LOGGED_OUT, LOGGING_IN } from "./types";

export const loggingIn = () => ({
  type: LOGGING_IN
});

export const userLogin = () => async dispatch => {
  dispatch(loggingIn());
  dispatch({
    type: LOGGED_IN,
    payload: "124512318230172837917293718927398172937917237127397"
  });
};
