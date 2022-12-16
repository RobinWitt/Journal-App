import { useState } from "react";
import { nanoid } from "nanoid";
import { initialEntries } from "../../Database/Database";
import EntriesSection from "../EntriesSection";
import EntryForm from "../EntryForm";
import "./Main.css";

export default function Main() {
  const [entries, setEntries] = useState(initialEntries);
  const bookmarkedEntries = entries.filter((entry) => entry.bookmark);

  function handleOnSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setEntries([...entries, { id: nanoid(), ...data, bookmark: false }]);

    //event.target.reset()
    //event.target.name.focus()
  }
  // function handleBookmarkEntry(){entries.map}

  return (
    <main>
      <EntryForm onSubmit={handleOnSubmit} entries={entries}></EntryForm>
      <EntriesSection
        entries={entries}
        bookmarkedEntries={bookmarkedEntries}
      ></EntriesSection>
    </main>
  );
}
