import EntryCard from "../EntryCard";

export default function EntryList({ filteredEntries }) {
  return (
    <>
      <ul className="entry-list">
        {filteredEntries.map(({ id, date, title, text, bookmark }) => {
          return (
            <li className="entry-list__item" key={id}>
              <EntryCard
                date={date}
                title={title}
                text={text}
                bookmark={bookmark}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
