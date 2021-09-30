import { useState, useEffect } from "react/cjs/react.development";

export default function useFetch(search) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DCKpHj8LvPQEaZfIE6nxTBmumXwxJcEc&q=${search}&limit=25&offset=0&rating=pg&lang=en`;
    if (search.length < 3) {
      return;
    }
    async function init() {
      try {
        const response = await fetch(url);

        const json = await response.json();
        setData(() =>
          json.data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
          }))
        );
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [search]);

  return { data, error, loading };
}
