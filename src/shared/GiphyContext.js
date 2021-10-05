import React, { useCallback, useState } from "react";

export const GiphyContext = React.createContext(null);

export function GiphyProvider(props) {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback(
    (gif) => {
      setFavorites((curr) => [...curr, gif]);
    },
    [setFavorites]
  );

  const deleteFavorite = useCallback(
    (id) => {
      setFavorites((curr) => curr.filter((val) => id !== val.id));
    },
    [setFavorites]
  );

  const clearState = useCallback(() => {
    setUser("");
    setSearch("");
    setFavorites([]);
  }, [setFavorites, setSearch, setUser]);

  return (
    <GiphyContext.Provider
      value={{
        user,
        search,
        favorites,
        addFavorite,
        deleteFavorite,
        clearState,
        setUser,
        setSearch,
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
}
