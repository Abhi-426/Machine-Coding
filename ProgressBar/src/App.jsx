import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import { useRef } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const timeMs = 15 * 1000;
  const interval = 1 * 1000;
  const totalCycle = timeMs / interval;

  const timer = useRef();
  const cycles = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      let percentage = (cycles.current / totalCycle) * 100;
      cycles.current += 1;
      setProgress(percentage);
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
