import React from "react";
import { useState } from "react/cjs/react.development";
import useFetch from "../hooks/useFetch";
import GifDisplay from "./GifDisplay";

export default function SearchPage({
  activeUser,
  favorites,
  addFavorite,
  deleteFavorite,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, loading } = useFetch(search);

  return (
    <>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setSearch(searchInput);
            }
          }}
          id="search"
          name="search"
          placeholder="Search for a GIF"
        ></input>
      </div>
      <button onClick={() => setSearch(searchInput)}>Search</button>
      <div>
        {loading && <div>LOADING</div>}
        {error && !loading && <div>{error}</div>}
        {data &&
          data.map((val) => (
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
