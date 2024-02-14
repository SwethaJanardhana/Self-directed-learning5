import "../Button/Button.css";

export default function Button({ children, onButtonClick, isActive }) {
  return (
    <button
      className={isActive ? "button button--active" : "button filled-button"}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}
