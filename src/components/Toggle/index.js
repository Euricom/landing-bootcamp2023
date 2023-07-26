import { useEffect, useState } from "react";
import styles from "./toggle.module.scss";
function Toggle({ id, value, onChange }) {
  const [activated, setActivated] = useState(value);
  useEffect(() => {
    setActivated(!!value);
  }, [value]);

  return (
    <div
      className={styles[activated ? "active" : "inactive"]}
      onClick={() => onChange(id, !value)}
    />
  );
}

export default Toggle;
