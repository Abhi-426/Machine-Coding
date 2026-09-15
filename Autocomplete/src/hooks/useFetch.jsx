import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

function useFetch({ query }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (controller) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${query}`,
        {
          signal: controller.signal,
        },
      );

      const returnedData = await res.json();

      setData(returnedData.items || []);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    fetchData(controller);

    return () => {
      controller.abort();
    };
  }, [query]);

  return { data, loading };
}

export default useFetch;
