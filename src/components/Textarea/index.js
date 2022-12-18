export default function Textarea({ title, name }) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <textarea id={title} name={name} required></textarea>
    </>
  );
}
