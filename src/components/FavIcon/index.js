import { ReactComponent as StarEmpty } from "../../resources/star.svg";
import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import Button from "../Button";

export default function FavIcon(isFaved) {
  return (
    <Button type="button" ariaLabel="mark as favorite">
      {isFaved ? <StarFilled /> : <StarEmpty />}
    </Button>
  );
}
