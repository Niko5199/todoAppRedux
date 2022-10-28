export default async function fetchingPokemon(textSearch) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${textSearch}`
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
