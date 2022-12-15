import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import "./EntryForm.css";

export default function EntryForm() {
  return (
    <div className="form--container">
      <h2 id="form-header">NEW ENTRY</h2>
      <form aria-labelledby="form-header">
        <Input title="Motto"></Input>
        <Textarea title="Notes"></Textarea>
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
