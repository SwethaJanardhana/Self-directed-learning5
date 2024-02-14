import "../Button/Button.css";

export default function Button({ children, onButtonClick }) {
  return (
    <button className="button filled-button" onClick={onButtonClick}>
      {children}
    </button>
  );
}
