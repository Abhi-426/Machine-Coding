function Modal({ open, children }) {
  return (
    <div
      style={{
        display: !open ? "none" : "",
        position: "fixed",
        top: "30%",
        width: "60vw",
        height: "50vh",
        border: "1px solid black",
        background: "olivegreen",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
