import Button from "../Button";
import EntryList from "../EntryList";

export default function EntriesSection() {
  return (
    <>
      <Button>All Entries</Button>
      <Button>Favorites</Button>
      <EntryList></EntryList>
    </>
  );
}
