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
          <div className="row">
            <Bootcamper jsonId="bjorn-felix" />
            <Bootcamper jsonId="kobe-brants" />
            <Bootcamper jsonId="kobe-dehandschutter" />
          </div>
          <div className="row">
            <Bootcamper jsonId="liese-cordeyn" />
            <Bootcamper jsonId="maarten-salien" />
            <Bootcamper jsonId="toon-van-hoye" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BootcamperOverview;
