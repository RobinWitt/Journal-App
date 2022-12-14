export default function Textarea({ title }) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <textarea id={title} name={title}></textarea>
    </>
  );
}
