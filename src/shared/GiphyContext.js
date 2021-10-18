import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const GiphyContext = React.createContext(null);

export function GiphyProvider(props) {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFaves() {
      const { data } = await axios.get(`/api/favorites/user/${user.id}`);
      if (!data.success) return;
      setFavorites(data.data);
    }
    if (user.id) {
      getFaves();
    }
  }, [user]);

  const addFavorite = useCallback(
    async (gif) => {
      debugger;
      const { data } = await axios.post("/api/favorites/add", {
        ...gif,
        user_id: user.id,
      });
      setFavorites((curr) => {
        return [...curr, data.data];
      });
    },
    [setFavorites, user]
  );

  const deleteFavorite = useCallback(
    async (id) => {
      const { data } = await axios.delete(`/api/favorites/delete/${id}`);
      setFavorites((curr) => {
        return curr.filter((val) => val.id !== data.data);
      });
    },
    [setFavorites]
  );

  const clearState = useCallback(() => {
    setUser({});
    setSearch([]);
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
