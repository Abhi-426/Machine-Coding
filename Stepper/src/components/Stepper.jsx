import { useState } from "react";
import "./Stepper.css";
const Stepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepCount = steps.length;
  const allSteps = [];

  for (let i = 0; i < stepCount; i++) {
    allSteps.push(
      <div
        className={`steps ${activeStep >= i ? "active" : ""}`}
        onClick={() => setActiveStep(i)}
      >
        {i + 1}
      </div>,
    );
  }

  const progress = (100 / (stepCount - 1)) * activeStep;
  return (
    <section>
      <div className="stepper-container">
        <div className="steps-wrapper">{allSteps}</div>
        <div className="progress-wrapper">
          <div
            className="progress"
            style={{
              "--progress": `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
