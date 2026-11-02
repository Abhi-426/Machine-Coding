import { useState } from "react";
import Stepper from "./components/Stepper";

const Example1 = () => {
  return <div>Hello 1</div>;
};

const Example2 = () => {
  return <div>Hello 1</div>;
};

const Example3 = () => {
  return <div>Hello 1</div>;
};

const Example4 = () => {
  return <div>Hello 1</div>;
};

function App() {
  const [steps, setSteps] = useState([
    <Example1 />,
    <Example2 />,
    <Example3 />,
    <Example4 />,
  ]);

  return (
    <div>
      <Stepper steps={steps} />
    </div>
  );
}

export default App;
