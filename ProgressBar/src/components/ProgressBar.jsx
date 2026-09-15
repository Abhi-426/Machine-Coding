import "./ProgressBar.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-status"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
