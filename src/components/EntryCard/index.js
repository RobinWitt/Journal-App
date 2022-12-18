import FavIcon from "../FavIcon";
import "./EntryCard.css";

export default function EntryCard({
  id,
  title,
  date,
  text,
  isBookmarked,
  onToggleBookmark,
}) {
  return (
    <>
      <article>
        <p className="entry-date">{date}</p>
        <FavIcon
          id={id}
          isBookmarked={isBookmarked}
          onToggleBookmark={onToggleBookmark}
        />
        <h3 className="entry-title">"{title}"</h3>
        <p>{text}</p>
      </article>
    </>
  );
}
