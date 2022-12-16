import EntriesCounter from "../EntriesCounter";
import EntryList from "../EntryList";
import "./EntriesSection.css";

export default function EntriesSection({ entries, bookmarkedEntries }) {
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
      <EntryList filteredEntries={entries}></EntryList>
    </div>
  );
}
