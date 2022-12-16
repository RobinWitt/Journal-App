import { ReactComponent as StarEmpty } from "../../resources/star.svg";
import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import "./FavIcon.css";

export default function FavIcon({ bookmarked }) {
  return (
    <button type="button" aria-label="mark as favorite" className="fav-button">
      {bookmarked ? <StarFilled /> : <StarEmpty />}
    </button>
  );
}
