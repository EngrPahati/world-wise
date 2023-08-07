import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles.primary}`}
    >
      {children}
    </button>
  );
}

export default Button;
