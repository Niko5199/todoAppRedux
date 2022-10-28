import React from "react";

export const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
    </div>
  );
};
