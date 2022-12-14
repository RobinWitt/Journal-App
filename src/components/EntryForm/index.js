import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

export default function EntryForm() {
  return (
    <>
      <h2 id="form-header">NEW ENTRY</h2>
      <form aria-labelledby="form-header">
        <Input title="Motto"></Input>
        <Textarea title="Notes"></Textarea>
        <Button type="submit" ariaLabel="submit new entry">
          Create
        </Button>
      </form>
    </>
  );
}
