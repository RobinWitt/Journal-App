import FavIcon from "../FavIcon";
import "./EntryCard.css";

export default function EntryCard({ title, date, text }) {
  return (
    <>
      <article>
        <p className="entry-date">{date}</p>
        <FavIcon />
        <h3 className="entry-title">"{title}"</h3>
        <p>{text}</p>
      </article>
    </>
  );
}
