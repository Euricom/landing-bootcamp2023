import Step from "@/components/Steps";
import styles from "@/styles/steps.module.scss";

function StepsSection() {
  const stepsArr = [
    {
      count: 1,
      description: `6 Junior Developers get an 8 week crash course given by our in-house experts`,
    },
    {
      count: 2,
      description: `During the course of the next weeks, they take part in a use-case with company value. Honing their skills`,
    },
    {
      count: 3,
      description: `We find the ideal match between your company and our bootcampers`,
    },
  ];
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["steps-wrapper"]}>
          <h2 className="h2-center">How Does it Work?</h2>
          <div className={styles["steps-container"]}>
            {stepsArr.map((step) => (
              <Step
                key={step.count}
                step={step.count}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StepsSection;
