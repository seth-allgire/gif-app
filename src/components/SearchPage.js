import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GiphyContext } from "../shared/GiphyContext";
import GifDisplay from "./GifDisplay";

export default function SearchPage() {
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, error, loading } = useFetch(query);
  const { user, favorites, addFavorite, deleteFavorite, search, setSearch } =
    useContext(GiphyContext);
  useEffect(() => {
    if (data) {
      setSearch(data);
    }
  }, [data, setSearch]);
  return (
    <>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(queryInput);
            }
          }}
          id="search"
          name="search"
          placeholder="Search for a GIF"
        ></input>
      </div>
      <button onClick={() => setQuery(queryInput)}>Search</button>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {search &&
          !loading &&
          search.map((val) => (
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
