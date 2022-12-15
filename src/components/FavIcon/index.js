import { ReactComponent as StarEmpty } from "../../resources/star.svg";
import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import { useState } from "react";
import "./FavIcon.css";

export default function FavIcon() {
  const [isFaved, setIsFaved] = useState(false);

  return (
    <button
      type="button"
      aria-label="mark as favorite"
      className="fav-button"
      onClick={() => {
        setIsFaved(!isFaved);
      }}
    >
      {isFaved ? <StarFilled /> : <StarEmpty />}
    </button>
  );
}
