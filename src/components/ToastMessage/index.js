import "./ToastMessage.css";

export default function ToastMessage({
  children,
  onShowToastMessage,
  onToastMessage,
}) {
  return (
    <button
      className={`toast ${onShowToastMessage ? "" : "toast-hidden"}`}
      onClick={onToastMessage}
    >
      {children}
    </button>
  );
}
