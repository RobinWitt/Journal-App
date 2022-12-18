import EntryCard from "../EntryCard";
import Tab from "../Tab";
import Tabs from "../Tabs";
import "./EntriesSection.css";

export default function EntriesSection({
  entries,
  favoriteEntries,
  displayedEntries,
  filter,
  onToggleBookmark,
  onShowAllEntries,
  onShowFavoriteEntries,
}) {
  return (
    <section className="entries-section--container">
      <Tabs>
        <Tab
          tabTitle={"All Entries"}
          count={entries.length}
          onClick={onShowAllEntries}
          isActive={filter === "all" ? true : false}
        />
        <Tab
          tabTitle={"Favorites"}
          count={favoriteEntries.length}
          onClick={onShowFavoriteEntries}
          isActive={filter === "favorite" ? true : false}
        />
      </Tabs>
      <div>
        {displayedEntries.map(
          ({ id, date, title, text, bookmark: isBookmarked }) => {
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
          }
        )}
      </div>
    </section>
  );
}
