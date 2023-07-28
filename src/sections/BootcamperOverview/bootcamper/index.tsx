import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperOverview.module.scss";
import bootcamperJSON from "@/app/bootcampers.json";
import { BootcamperOverviewProps } from "@/sections/types";

const Bootcamper = ({ jsonId }: BootcamperOverviewProps) => {
  const bootcamper = bootcamperJSON[jsonId];
  return (
    <div className={styles["bootcamper-profile"]}>
      <div>
        <CustomImage
          imageUrl={bootcamper.imageUrl}
          layout="fill"
          alt={`A Profile of ${bootcamper.name}`}
        />
      </div>
      <h3>{bootcamper.name}</h3>
      <p>{bootcamper.overview}</p>
    </div>
  );
};

export default Bootcamper;
