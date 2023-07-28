import styles from "./input.module.scss";
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
  onChange: (val: string) => void | {};
}
function Input({ type, placeholder, value, required, onChange }: InputProps) {
  return (
    <input
      className={styles.base}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
