import { useState, useRef } from "react";
import PopOver from "./components/PopOver";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handlePopOver = (event) => {
    setIsOpen(true);
    anchorRef.current = event.target;
  };

  const handlePopOverClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handlePopOver}>Click me</button>
      <button onClick={handlePopOver}>Click me</button>
      <PopOver
        isOpen={isOpen}
        onClose={handlePopOverClose}
        anchorRef={anchorRef}
        placement="bottom-right"
      >
        <div>
          <h1>Hello World</h1>
        </div>
      </PopOver>
    </>
  );
}

export default App;
