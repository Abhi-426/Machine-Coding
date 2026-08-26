import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}> Click Me</button>
      <Modal open={open}>
        <div
          style={{
            border: "1px solid black",
          }}
        >
          Modal is Open
        </div>
        <button
          style={{
            display: "absolute",
            border: "1px solid black",
            background: "red",
            justifySelf: "end",
            alignSelf: "end",
          }}
          onClick={() => setOpen(false)}
        >
          {" "}
          Close Me
        </button>
      </Modal>
    </div>
  );
}

export default App;
