import { useState, useEffect } from 'react';

import Button from "@/components/Button";
import Toggle from "@/components/Toggle";
import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperDetail.module.scss";
import bootcamperJSON from "@/app/bootcampers.json";
import { BootcamperDetailProps } from "@/sections/types";
import { addRecord } from "@/server/api";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from '@/hooks/useMedia';

const Bootcamper = ({ jsonId, shortlisted, onToggle, isDark }: BootcamperDetailProps) => {
  const searchParams = useSearchParams();
  const clientName = searchParams.get("firstname") || "Unknown";
  const bootcamper = bootcamperJSON[jsonId];

  const showDescriptionToggle = useMediaQuery('(max-width: 1000px)')
  const [showDescription, setShowDescription] = useState(!showDescriptionToggle);

  useEffect(() => {
    setShowDescription(!showDescriptionToggle);
  }, [showDescriptionToggle]);

  const handleClick = async () => {
    window.open(bootcamper.vitarum, "_blank");
    await addRecord({
      id: bootcamper.id,
      clientName,
      action: `${clientName} heeft de CV van ${bootcamper.name} opgevraagd`,
    });
  };


  return (
    <div className={styles[`detail-wrapper-${isDark ? "dark" : "light"}`]}>
      <div className={styles.container}>
        <CustomImage
          className={styles.profilePic}
          width={260}
          imageUrl={bootcamper.imageUrl}
          alt={`Profile of ${bootcamper.name}`}
        />

        <div className={styles.intro}>
          <h3>{bootcamper.name}</h3>
          <span>{bootcamper.title}</span>
          <span>{bootcamper.education}</span>
          <Button variant={isDark ? "white" : "blue"} onClick={handleClick}>
            <CustomImage imageUrl="/vitarum.svg" width={26} alt="Logo of Vitarum" />
            View resume
          </Button>
        </div>

        <div className={styles.description}>
          { showDescription && (
            <p>{bootcamper.description}</p>
          )}

          { showDescriptionToggle && (
            <span className={styles.toggleResume} onClick={() => setShowDescription(!showDescription)}>
              { showDescription ? 'hide description' : 'show description' }
            </span>
          )}
        </div>


        <div className={styles["interest-wrapper"]}>
          <span>add to shortlist:</span>
          <Toggle id={bootcamper.id} value={shortlisted} onChange={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default Bootcamper;
