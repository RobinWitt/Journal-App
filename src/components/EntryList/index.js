import EntryCard from "../EntryCard";

export default function EntryList() {
  return (
    <>
      <ul className="entry-list">
        <EntryCard
          title="Card 1 Title"
          date="15-12-2022"
          text="Card 1 Text Test"
          isFaved
        ></EntryCard>
        <EntryCard
          title="Card 2 Title"
          date="03-10-1992"
          text="Card 2 Text Test"
          faved
        ></EntryCard>
        <EntryCard
          title="Card 3 Title"
          date="26-05-1985"
          text="Card 3 Text Test"
        ></EntryCard>
      </ul>
    </>
  );
}
