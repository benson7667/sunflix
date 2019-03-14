import {
  SET_LOADING_POPULAR,
  GET_POPULAR_MOVIES,
  LOAD_MORE_POPULAR_MOVIES
} from "../action/types";

const initialState = {
  isLoading: false,
  movies: null,
  page: 1,
  total_pages: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_POPULAR:
      return {
        ...state,
        isLoading: true
      };

    case GET_POPULAR_MOVIES:
      return {
        ...state,
        isLoading: false,
        moviesData: action.payload,
        movies: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages
      };

    case LOAD_MORE_POPULAR_MOVIES:
      return {
        ...state,
        movies: state.movies.concat(action.payload.results),
        page: action.payload.page,
        total_pages: action.payload.total_pages
      };

    default:
      return state;
  }
}
