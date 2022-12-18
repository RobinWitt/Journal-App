import "./EntriesCounter.css";

export default function EntriesCounter({ count, isActive }) {
  return (
    <span className={`span ${isActive ? "span-active" : ""}`}>{count}</span>
  );
}
