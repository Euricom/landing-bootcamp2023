import styles from "./input.module.scss";
function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className={styles.base}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
