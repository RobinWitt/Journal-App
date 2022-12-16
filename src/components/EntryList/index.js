import { entries } from "../../Database/Database";
import EntryCard from "../EntryCard";

export default function EntryList({ display }) {
  return (
    <>
      <ul className="entry-list">
        {entries.map(({ date, title, text, bookmark }) => {
          return (
            <li className="entry-list__item" key={date}>
              <EntryCard
                date={date}
                title={title}
                text={text}
                bookmark={bookmark}
                display={display}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
