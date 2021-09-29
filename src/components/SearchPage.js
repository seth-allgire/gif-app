import React from "react";
import { useState } from "react/cjs/react.development";
import GifDisplay from "./GifDisplay";

export default function SearchPage({
  activeUser,
  favorites,
  addFavorite,
  deleteFavorite,
}) {
  const [search, setSearch] = useState("");
  //   const [responseData, setResponseData] = useState
  const [gifs, setGifs] = useState([]);

  async function callAPI() {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=DCKpHj8LvPQEaZfIE6nxTBmumXwxJcEc&q=${search}&limit=25&offset=0&rating=pg&lang=en`;

      const response = await fetch(url);
      const { data } = await response.json();
      setGifs(
        () =>
          data.map((gif) => ({
            // isFavorite: false,
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
          }))
        // console.log(data);
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>
        <label htmlFor="search">Find a GIF:</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          placeholder=""
        ></input>
      </div>
      <button onClick={callAPI}>Search</button>
      <div>
        {gifs.map((val) => (
          <GifDisplay
            isFavorite={favorites.some((fave) => fave.id === val.id)}
            key={val.id}
            id={val.id}
            title={val.title}
            deleteFavorite={deleteFavorite}
            addFavorite={addFavorite}
            url={val.url}
          />
        ))}
      </div>
    </>
  );
}
