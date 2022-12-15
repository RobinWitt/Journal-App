import FavIcon from "../FavIcon";

export default function EntryCard({ title, date, text, isFaved }) {
  return (
    <>
      <li>
        <p>{date}</p>
        <h3>{title}</h3>
        <FavIcon isFaved={isFaved} />
        <p>{text}</p>
      </li>
    </>
  );
}
