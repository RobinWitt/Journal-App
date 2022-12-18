import EntryCard from "../EntryCard";

export default function EntryList({ filteredEntries, onToggleBookmark }) {
  return (
    <>
      <ul className="entry-list">
        {filteredEntries.map(
          ({ id, date, title, text, bookmark: isBookmarked }) => {
            return (
              <li className="entry-list__item" key={id}>
                <EntryCard
                  id={id}
                  date={date}
                  title={title}
                  text={text}
                  isBookmarked={isBookmarked}
                  onToggleBookmark={onToggleBookmark}
                />
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
