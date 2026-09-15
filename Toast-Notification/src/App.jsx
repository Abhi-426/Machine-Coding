import { useState } from "react";
import Notification from "./components/Notification";

function App() {
  const [errors, setErrors] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setErrors((prev) => [
            ...prev,
            {
              open: true,
              type: "error",
              position: "top-right",
              duration: 3000,
              message: "Something went wrong",
            },
          ]);
        }}
      >
        {" "}
        error{" "}
      </button>
      <button
        onClick={() => {
          setErrors((prev) => [
            ...prev,
            {
              open: true,
              type: "success",
              position: "top-right",
              duration: 3000,
              message: "Hello world",
            },
          ]);
        }}
      >
        {" "}
        Hello{" "}
      </button>
      <button
        onClick={() => {
          setErrors((prev) => [
            ...prev,
            {
              open: true,
              type: "error",
              position: "top-right",
              duration: 3000,
              message: "Hehe",
            },
          ]);
        }}
      >
        {" "}
        Hehe{" "}
      </button>
      {errors.map((error) => {
        return (
          <Notification
            open={error.open}
            type={error.type}
            position={error.position}
            duration={error.duration}
            message={error.message}
          />
        );
      })}
    </div>
  );
}

export default App;
