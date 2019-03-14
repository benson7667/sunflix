import {
  GET_POPULAR_MOVIES,
  LOAD_MORE_POPULAR_MOVIES,
  SET_LOADING_POPULAR
} from "./types";
import axios from "axios";
import Config from "../config/Constant";

export const setLoading = () => ({
  type: SET_LOADING_POPULAR
});

//   component mounted, always call the apis with page=1 parameter
export const loadPopularMovies = () => async dispatch => {
  dispatch(setLoading());

  try {
    const res = await axios.get(
      `${Config.apis_domain}movie/popular?api_key=${
        Config.apis_key
      }&language=en-US&page=1`
    );

    if (res.data)
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data
      });
  } catch (err) {
    console.log(err);
  }
};

export const fetchMorePopularMovies = pageNumberToFetch => async dispatch => {
  try {
    const res = await axios.get(
      `${Config.apis_domain}movie/popular?api_key=${
        Config.apis_key
      }&language=en-US&page=${pageNumberToFetch}`
    );

    if (res.data) {
      dispatch({
        type: LOAD_MORE_POPULAR_MOVIES,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
