import React from "react";

export default function GifDisplay({
  id,
  title,
  url,
  isFavorite,
  addFavorite,
  deleteFavorite,
  gif_id,
}) {
  return (
    <div>
      <h3>
        {gif_id} - {title}
      </h3>
      <img src={url} alt="gif" />
      {!isFavorite && (
        <button onClick={() => addFavorite({ gif_id, title, url })}>
          Add Favorite
        </button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite(id)}>Remove Favorite</button>
      )}
    </div>
  );
}
