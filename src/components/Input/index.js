import "./Input.css";

export default function Input({ id, title, name, type }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type={type} required></input>
    </>
  );
}
