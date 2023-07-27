import styles from "./input.module.scss";
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void | {};
}
function Input({ type, placeholder, value, onChange }: InputProps) {
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
