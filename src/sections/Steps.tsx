import Step from "@/components/Steps";
import styles from "@/styles/steps.module.scss";

function StepsSection() {
  const stepsArr = [
    {
      count: 1,
      description: `6 young potentials get an 8 week crash course given by our Euricom experts`,
    },
    {
      count: 2,
      description: `During the bootcamp, they take part in a use-case with company value.`,
    },
    {
      count: 3,
      description: `At the end of the bootcamp, they are ready to bring added value in your development team`,
    },
  ];
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["steps-wrapper"]}>
          <h2 className="h2-center">How does it work?</h2>
          <div className={styles["steps-container"]}>
            {stepsArr.map((step) => (
              <Step key={step.count} step={step.count} description={step.description} />
            ))}
          </div>
          <a href="https://www.euri.com/bootcamp" target="_blank">
            Read more!
          </a>
        </div>
      </div>
    </>
  );
}

export default StepsSection;
