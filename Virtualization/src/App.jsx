import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / 30);
  const endIndex = Math.floor((scrollTop + 300) / 30);

  const generateRows = () => {
    const virtualizedData = [];
    for (let i = startIndex; i <= endIndex; i++) {
      if (!data[i]) continue;
      virtualizedData.push(
        <li
          style={{
            height: "30px",
            position: "absolute",
            top: `${i * 30}px`,
          }}
        >
          {data[i].id}
        </li>,
      );
    }
    return virtualizedData;
  };

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    let run = async () => {
      const response = await fetchData();
      console.log(response);
      setData(response);
    };
    run();
  }, []);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };

  return (
    <div
      style={{
        height: `300px`,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${30 * 100}px` }}>{generateRows()}</div>
    </div>
  );
}

export default App;
