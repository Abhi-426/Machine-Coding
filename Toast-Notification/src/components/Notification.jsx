import { useEffect, useState } from "react";
import "./Notification.css";

function Notification({ type, position, duration, message, open }) {
  const [close, setClose] = useState(false);
  useEffect(() => {
    setClose(!open);
    setTimeout(() => {
      setClose(open);
    }, duration);
  }, [open]);
  return !close ? (
    <div className={`snackbar ${type} ${position}`}>{message}</div>
  ) : (
    <></>
  );
}

export default Notification;
