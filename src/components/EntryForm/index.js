import Input from "../Input";
import Textarea from "../Textarea";
import "./EntryForm.css";

export default function EntryForm({ onSubmit }) {
  return (
    <div className="form--container">
      <h2 id="form-header">NEW ENTRY</h2>
      <form aria-labelledby="form-header" onSubmit={onSubmit}>
        <Input id="motto" title="Motto" name="title" type="text"></Input>
        <Input id="date" title="Date" name="date" type="date"></Input>
        <Textarea title="Notes" name="text"></Textarea>
        <button
          className="submit-button"
          type="submit"
          aria-label="submit new entry"
        >
          Create
        </button>
      </form>
    </div>
  );
}
