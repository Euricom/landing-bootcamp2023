import styles from "./steps.module.scss";

interface StepsProps {
  step: number;
  description: string;
}
function Steps({ step, description }: StepsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span>{step}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Steps;
