import { useState } from "react";
import { nanoid } from "nanoid";
import { initialEntries } from "../../Database/Database";
import EntriesSection from "../EntriesSection";
import EntryForm from "../EntryForm";
import "./Main.css";
import ToastMessage from "../ToastMessage";

export default function Main() {
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");
  const [showToastMessage, setShowToastMessage] = useState(false);
  const [contentToastMessage, setContentToastMessage] = useState("");
  const favoriteEntries = entries.filter((entry) => entry.bookmark);

  function handleAddEntry(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setEntries([...entries, { id: nanoid(), ...data, bookmark: false }]);

    setContentToastMessage("New entry added.");
    setShowToastMessage(!showToastMessage);
    event.target.reset();
    event.target.title.focus();
  }

  function handleToggleBookmark(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, bookmark: !entry.bookmark } : entry
      )
    );
    console.log(`Changed bookmark status on entry nr. ${id}`);

    setContentToastMessage("Favorite added.");
    setShowToastMessage(!showToastMessage);
  }

  function handleShowFavoriteEntries() {
    setFilter("favorite");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleToastMessage() {
    setShowToastMessage(!showToastMessage);
    console.log(showToastMessage);
  }

  return (
    <main>
      <EntryForm onSubmit={handleAddEntry} entries={entries}></EntryForm>
      <EntriesSection
        onShowFavoriteEntries={handleShowFavoriteEntries}
        onShowAllEntries={handleShowAllEntries}
        displayedEntries={filter === "all" ? entries : favoriteEntries}
        entries={entries}
        favoriteEntries={favoriteEntries}
        filter={filter}
        onToggleBookmark={handleToggleBookmark}
      ></EntriesSection>
      <ToastMessage
        onToastMessage={handleToastMessage}
        onShowToastMessage={showToastMessage}
      >
        {contentToastMessage}
      </ToastMessage>
    </main>
  );
}
