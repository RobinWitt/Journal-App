import { ReactComponent as Logo } from "../../resources/star.svg";

export default function EntryCard({ title, date, text, fav }) {
  return (
    <>
      <li>
        <p>{date}</p>
        <h3>{title}</h3>
        <Logo />
        <p>{text}</p>
      </li>
    </>
  );
}
