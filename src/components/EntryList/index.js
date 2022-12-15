import { entries } from "../../Database/Database";
import EntryCard from "../EntryCard";

export default function EntryList() {
  return (
    <>
      <ul className="entry-list">
        {entries.map(({ date, title, text }) => {
          return (
            <li key={date}>
              <EntryCard date={date} title={title} text={text} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
