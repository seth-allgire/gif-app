import React, { useContext } from "react";
import { GiphyContext } from "../shared/GiphyContext";
import GifDisplay from "./GifDisplay";

export default function FavoritesPage() {
  const { user, favorites, deleteFavorite } = useContext(GiphyContext);
  return (
    <div>
      <h2>Favorites for {user.username}</h2>
      {favorites.map((val) => (
        <GifDisplay
          isFavorite={true}
          key={val.id}
          id={val.id}
          gif_id={val.gif_id}
          title={val.title}
          deleteFavorite={deleteFavorite}
          url={val.url}
        />
      ))}
    </div>
  );
}
