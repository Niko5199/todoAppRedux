export const FETCH_POKEMONS_START = "FETCH_POKEMONS_START";
export const FETCH_POKEMONS_COMPLETE = "FETCH_POKEMONS_COMPLETE";
export const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";

export const fetchPokemonsStart = () => ({
  type: FETCH_POKEMONS_START,
});

export const fetchPokemonsComplete = (payload) => ({
  type: FETCH_POKEMONS_COMPLETE,
  payload,
});

export const fetchPokemonError = (error) => ({
  type: FETCH_POKEMONS_ERROR,
  error,
});
