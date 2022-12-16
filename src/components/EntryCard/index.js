import FavIcon from "../FavIcon";
import "./EntryCard.css";

export default function EntryCard({ title, date, text, bookmark, display }) {
  return (
    <>
      <article className={display || bookmark ? "" : "hidden"}>
        <p className="entry-date">{date}</p>
        <FavIcon bookmarked={bookmark} />
        <h3 className="entry-title">"{title}"</h3>
        <p>{text}</p>
      </article>
    </>
  );
}
