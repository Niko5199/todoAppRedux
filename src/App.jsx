import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchingPokemon from './api';
import { Pokemon } from './pages/Pokemon';
import {
  fetchPokemonsComplete,
  fetchPokemonsStart,
} from './redux/actions/results';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [textSearch, setTextSearch] = useState('');
  const [pokemon, setPokemon] = useState({});

  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    try {
      dispatch(fetchPokemonsStart());
      setIsLoading(true);
      const pokemon = await fetchingPokemon(textSearch);
      setPokemon(pokemon);
      dispatch(fetchPokemonsComplete(pokemon));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-4 font-lato">
          Selecciona tu Pokemon
        </h1>
        <div className="text-4xl font-bold my-4 font-lato">
          <input
            type="text"
            name="pokeInput"
            id="pokeInput"
            placeholder="Pon el pokemon a buscar"
            className="text-lg p-1 border-2 rounded-sm border-slate-500 w-90 h-full font-lato mt-2"
            onChange={e => setTextSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg h-full ml-2 w-28 rounded hover:bg-blue-600 font-lato font-bold"
            onClick={handleSearchClick}
          >
            Buscar
          </button>
        </div>
      </div>
      {isLoading && <h1>Cargando...</h1>}
      {!isLoading && Object.entries(pokemon).length > 0 && (
        <Pokemon pokemon={pokemon} />
      )}
    </div>
  );
};

export default App;
