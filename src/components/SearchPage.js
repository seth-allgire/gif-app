import React, { useMemo, useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import useFetch from "../hooks/useFetch";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_SEARCH,
} from "../shared/rootReducer";
import GifDisplay from "./GifDisplay";

export default function SearchPage({ user, search, favorites, dispatch }) {
  const [query, setQuery] = useState("");
  const queryRef = useRef(null);
  const numBearFaves = useMemo(
    () =>
      favorites.filter((val) => val.title.toLowerCase().includes("bear"))
        .length,
    [favorites]
  );

  const { data, error, loading } = useFetch(query);

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_SEARCH, search: data });
    }
  }, [data]);

  return (
    <>
      <div>
        <h4>You have {numBearFaves} containing the word bear in the title.</h4>
        <label htmlFor="search">Search:</label>
        <input
          ref={queryRef}
          onKeyPress={(e) => {
            if (e.code === "Enter") {
              setQuery(queryRef.current.value);
            }
          }}
          id="search"
          name="search"
          placeholder="Search for a GIF"
        ></input>
      </div>
      <button onClick={() => setQuery(queryRef.current.value)}>Search</button>
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
              deleteFavorite={(id) => dispatch({ type: DELETE_FAVORITE, id })}
              addFavorite={(gif) => dispatch({ type: ADD_FAVORITE, gif })}
              url={val.url}
            />
          ))}
      </div>
    </>
  );
}
