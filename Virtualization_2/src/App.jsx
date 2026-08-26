import { useEffect, useState } from "react";

const itemHeight = 30;
const contentHeight = 300;

function App() {
  const [data, setData] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);

  const overscan = 5;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);

  const endIndex = Math.min(
    data.length,
    Math.ceil((scrollTop + contentHeight) / itemHeight) + overscan,
  );

  const getVirtualizedData = () => {
    console.log(data);
    let virtualizedData = [];
    for (let i = startIndex; i < endIndex; i++) {
      virtualizedData.push(
        <li
          style={{
            height: `${itemHeight}px`,
          }}
        >
          {data[i].id}
        </li>,
      );
    }
    return virtualizedData;
  };

  useEffect(() => {
    let run = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let jsonRes = await res.json();
      setData(jsonRes);
    };
    run();
  }, []);

  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };

  return (
    <div
      style={{ height: `${contentHeight}px`, overflow: "auto" }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: data.length * itemHeight,
        }}
      >
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {getVirtualizedData()}
        </div>
      </div>
    </div>
  );
}

export default App;
