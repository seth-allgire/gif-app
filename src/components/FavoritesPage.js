import React from "react";
import GifDisplay from "./GifDisplay";
import { DELETE_FAVORITE } from "../shared/rootReducer";

export default function FavoritesPage({ user, favorites, dispatch }) {
  return (
    <div>
      <h2>Favorites for {user}</h2>
      {favorites.map((val) => (
        <GifDisplay
          isFavorite={true}
          key={val.id}
          id={val.id}
          title={val.title}
          deleteFavorite={(id) => dispatch({ type: DELETE_FAVORITE, id })}
          url={val.url}
        />
      ))}
    </div>
  );
}
