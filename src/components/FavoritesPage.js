import React from "react";
import GifDisplay from "./GifDisplay";

export default function FavoritesPage({
  activeUser,
  favorites,
  deleteFavorite,
}) {
  return (
    <div>
      <h2>Favorites for {activeUser}</h2>
      {favorites.map((val) => (
        <GifDisplay
          isFavorite={true}
          key={val.id}
          id={val.id}
          title={val.title}
          deleteFavorite={deleteFavorite}
          url={val.url}
        />
      ))}
    </div>
  );
}
