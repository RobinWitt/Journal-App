import FavIcon from "../FavIcon";

export default function EntryCard({ title, date, text }) {
  return (
    <>
      <li>
        <p>{date}</p>
        <h3>{title}</h3>
        <FavIcon />
        <p>{text}</p>
      </li>
    </>
  );
}
