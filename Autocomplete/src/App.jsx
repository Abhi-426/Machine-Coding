import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Autocomplete from "./components/Autocomplete";

function App() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // useEffect(() => {
  //   const timer = setTimeout(() => setDebouncedQuery(query), 300);
  //   return () => clearTimeout(timer);
  // }, [query]);

  const { data, loading } = useFetch({ query });

  const handleInputChange = (event) => {
    console.log(event);
    setQuery(event.target.value);
  };

  return (
    <div>
      <Autocomplete
        data={data}
        loading={loading}
        onChange={handleInputChange}
        wait={300}
      />
    </div>
  );
}

export default App;
