export default function Input({ title }) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input id={title} name={title}></input>
    </>
  );
}
