import Button from "@/components/Button";
import Toggle from "@/components/Toggle";
import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperDetail.module.scss";
import bootcamperJSON from "@/app/bootcampers.json";
import { BootcamperDetailProps } from "@/sections/types";

const Bootcamper = ({
  jsonId,
  shortlisted,
  onToggle,
  isDark,
}: BootcamperDetailProps) => {
  const bootcamper = bootcamperJSON[jsonId];
  return (
    <div className={styles[`detail-wrapper-${isDark ? "dark" : "light"}`]}>
      <CustomImage
        width={260}
        imageUrl={bootcamper.imageUrl}
        alt={`Profile of ${bootcamper.name}`}
      />
      <div className={styles.intro}>
        <h3>{bootcamper.name}</h3>
        <span>{bootcamper.title}</span>
        <span>{bootcamper.education}</span>
        <Button variant={isDark ? "white" : "blue"}>Bekijk mijn CV</Button>
      </div>
      <div className={styles.description}>
        <p>{bootcamper.description}</p>
      </div>
      <div className={styles["interest-wrapper"]}>
        <span>Interesse:</span>
        <Toggle id={bootcamper.id} value={shortlisted} onChange={onToggle} />
      </div>
    </div>
  );
};

export default Bootcamper;
