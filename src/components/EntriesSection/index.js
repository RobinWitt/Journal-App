import EntriesCounter from "../EntriesCounter";
import EntryList from "../EntryList";
import { entries } from "../../Database/Database.js";
import "./EntriesSection.css";
import { useState } from "react";

const bookmarkedEntries = entries
  .map(({ bookmark }) => {
    return bookmark;
  })
  .filter(Boolean).length;

export default function EntriesSection() {
  const [active, setActive] = useState(true);

  return (
    <div className="entries-section--container">
      <button
        type="button"
        className={`entries-button ${active ? "active-tab" : ""}`}
        onClick={() => {
          setActive(true);
        }}
      >
        All Entries
        <EntriesCounter count={entries.length} />
      </button>
      <button
        type="button"
        className={`entries-button ${!active ? "active-tab" : ""}`}
        onClick={() => {
          setActive(false);
        }}
      >
        Favorites
        <EntriesCounter count={bookmarkedEntries} />
      </button>
      <EntryList display={active}></EntryList>
    </div>
  );
}
