import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperOverview.module.scss";
import bootcamperJSON from "@/app/bootcampers.json";
import { BootcamperOverviewProps } from "@/sections/types";

const Bootcamper = ({ jsonId }: BootcamperOverviewProps) => {
  const bootcamper = bootcamperJSON[jsonId];
  return (
    <div className={styles["bootcamper-profile"]}>
      <CustomImage
        imageUrl={bootcamper.imageUrl}
        width={170}
        alt={`A Profile of ${bootcamper.name}`}
      />
      <h3>{bootcamper.name}</h3>
      <p>{bootcamper.overview}</p>
    </div>
  );
};

export default Bootcamper;
