import EntriesCounter from "../EntriesCounter";
import EntryCard from "../EntryCard";
import "./EntriesSection.css";

export default function EntriesSection({
  entries,
  bookmarkedEntries,
  onToggleBookmark,
}) {
  return (
    <div className="entries-section--container">
      <button
        type="button"
        className="entries-button active-tab"
        onClick={() => {}}
      >
        All Entries
        <EntriesCounter count={entries.length} />
      </button>
      <button type="button" className="entries-button" onClick={() => {}}>
        Favorites
        <EntriesCounter count={bookmarkedEntries.length} />
      </button>
      <div>
        {entries.map(({ id, date, title, text, bookmark: isBookmarked }) => {
          return (
            <div className="entry-list__item" key={id}>
              <EntryCard
                id={id}
                date={date}
                title={title}
                text={text}
                isBookmarked={isBookmarked}
                onToggleBookmark={onToggleBookmark}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
