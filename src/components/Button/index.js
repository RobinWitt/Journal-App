export default function Button({ children, type, ariaLabel }) {
  return (
    <button type={type} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
