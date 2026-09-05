import { useState } from "react";
import StarComponent from "./components/StarComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StarComponent count={5} />
    </div>
  );
}

export default App;
