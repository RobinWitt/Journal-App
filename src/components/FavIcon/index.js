import { ReactComponent as StarEmpty } from "../../resources/star.svg";
import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import "./FavIcon.css";

export default function FavIcon() {
  return (
    <button type="button" aria-label="mark as favorite" className="fav-button">
      {<StarEmpty />}
    </button>
  );
}
