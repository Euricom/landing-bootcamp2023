"use client";
import React from "react";
import CustomImage from "@/components/CustomImage";
import styles from "../styles/landing.module.scss";

const LandingSection = () => {
  return (
    <>
      <div className="full-wrapper">
        <div className={styles.landing}>
          <a className={styles.logo} href="https://www.euri.com">
            <CustomImage
              layout="fill"
              imageUrl="/logo.svg"
              alt="Logo of Euricom"
            />
          </a>
          <h1>Meet our Bootcampers</h1>
          <h2>Scroll down to see them in action</h2>
          <div className={styles["arrow-down-icon-wrapper"]}>
            <div>
              <CustomImage
                layout="fill"
                imageUrl="/icon-down.svg"
                alt="Arrow pointing down"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
