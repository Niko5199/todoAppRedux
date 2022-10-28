import {
  FETCH_POKEMONS_COMPLETE,
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_START,
} from "../actions/results";

const initialState = {
  error: {},
  isLoading: false,
  pokemon: {},
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_START:
      return { ...state, isLoading: true };

    case FETCH_POKEMONS_COMPLETE:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_POKEMONS_ERROR:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
};

export default resultReducer;
