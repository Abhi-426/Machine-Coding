import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import "./StarComponent.css";

function StarComponent({ count }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-container">
      {[...new Array(count)].map((_, index) => {
        const starNumber = index + 1;
        const isActive = starNumber <= (hover || rating);
        return (
          <label key={starNumber} className="star-label">
            <input
              className="rating-input"
              type="radio"
              name="rating"
              value={starNumber}
              onChange={() => setRating(starNumber)}
            />

            {isActive ? (
              <FaStar
                className="star active"
                onMouseEnter={() => setHover(starNumber)}
                onMouseLeave={() => setHover(0)}
              />
            ) : (
              <CiStar
                className="star"
                onMouseEnter={() => setHover(starNumber)}
                onMouseLeave={() => setHover(0)}
              />
            )}
          </label>
        );
      })}
    </div>
  );
}

export default StarComponent;
