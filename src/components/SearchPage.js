import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { GiphyContext } from "../shared/GiphyContext";
import GifDisplay from "./GifDisplay";

const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=DCKpHj8LvPQEaZfIE6nxTBmumXwxJcEc&limit=25&offset=0&rating=pg&lang=en&q=`;

export default function SearchPage() {
  const { favorites, addFavorite, deleteFavorite, search, setSearch } =
    useContext(GiphyContext);
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const { json, error, loading } = useAxios(query, "get");

  useEffect(() => {
    if (json) {
      setSearch(() =>
        json.data.map((gif) => ({
          gif_id: gif.id,
          title: gif.title,
          url: gif.images.original.url,
        }))
      );
    }
  }, [json, setSearch]);
  return (
    <>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(gifURL + queryInput);
            }
          }}
          id="search"
          name="search"
          placeholder="Search for a GIF"
        ></input>
      </div>
      <button onClick={() => setQuery(gifURL + queryInput)}>Search</button>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
            <GifDisplay
              isFavorite={favorites.some((fave) => fave.gif_id === val.gif_id)}
              key={val.gif_id}
              id={val.id}
              gif_id={val.gif_id}
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
