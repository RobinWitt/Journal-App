import EntriesCounter from "../EntriesCounter";
import EntryList from "../EntryList";
import { entries } from "../../Database/Database.js";
import "./EntriesSection.css";

export default function EntriesSection() {
  const bookmarkedEntries = entries
    .map(({ bookmark }) => {
      return bookmark;
    })
    .filter(Boolean).length;

  return (
    <div className="entries-section--container">
      <button type="button" className="entries-button active-tab">
        All Entries
        <EntriesCounter count={entries.length} />
      </button>
      <button type="button" className="entries-button">
        Favorites
        <EntriesCounter count={bookmarkedEntries} />
      </button>
      <EntryList></EntryList>
    </div>
  );
}
