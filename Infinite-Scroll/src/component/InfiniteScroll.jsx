import { useCallback, useRef } from "react";

export default function InfiniteScroll({ data, fetchData }) {
  let observer = useRef();

  let lastElementObserver = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchData],
  );
  return (
    <div>
      {data.map((posts, index) => {
        if (index === data.length - 1)
          return (
            <h1 key={index} ref={lastElementObserver}>
              {posts.title}
            </h1>
          );
        return <h1 key={index}>{posts.title}</h1>;
      })}
    </div>
  );
}
