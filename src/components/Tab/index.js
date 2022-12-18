import "./Tab.css";
import EntriesCounter from "../EntriesCounter";

export default function Tab({ tabTitle, onClick, isActive, count }) {
  return (
    <button
      type="button"
      className={`tab ${isActive ? "tab-active" : ""}`}
      onClick={onClick}
    >
      {tabTitle}
      <EntriesCounter count={count} isActive={isActive} />
    </button>
  );
}
