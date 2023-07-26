"use client";
import React from "react";
import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperOverview.module.scss";
import Bootcamper from "./bootcamper";
function BootcamperOverview() {
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["overview-wrapper"]}>
          <Bootcamper jsonId="peter-cosemans" />
          <Bootcamper jsonId="stijn-menu" />
          <Bootcamper jsonId="peter-cosemans" />
          <Bootcamper jsonId="stijn-menu" />
          <Bootcamper jsonId="peter-cosemans" />
          <Bootcamper jsonId="stijn-menu" />
        </div>
      </div>
    </>
  );
}

export default BootcamperOverview;
