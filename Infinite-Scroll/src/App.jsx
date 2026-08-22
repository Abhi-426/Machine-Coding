import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "./component/InfiniteScroll";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setData((prev) => [...prev, ...json]);
    setLoading(false);
    return json;
  }, []);

  useEffect(() => {
    let run = async () => {
      let response = await fetchData();
      console.log(response);
    };
    run();
    console.log(data);
  }, []);

  return (
    <>
      <h1>test</h1>
      <InfiniteScroll data={data} fetchData={fetchData} />
      {loading && <h2>LOADING</h2>}
    </>
  );
}

export default App;
