"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Landing from "@/sections/Landing";
import Steps from "@/sections/Steps";
import BootcamperOverview from "@/sections/BootcamperOverview";
import BootcamperDetail from "@/sections/BootcamperDetail/BootcamperDetail";
import Shortlist from "@/sections/Shortlist";

type Shortlist = number[];
type Bootcamper = {
  id: number;
  name: string;
  imageUrl: string;
};
export default function Home() {
  const bootcampers: Bootcamper[] = [
    {
      id: 1,
      name: "Peter Cosemans",
      imageUrl: "/peter.jpeg",
    },
    {
      id: 2,
      name: "Stijn Menu",
      imageUrl: "/peter.jpeg",
    },
  ];
  const [shortlist, setShortlist] = useState<Shortlist>([]);

  const handleChangeShortlist = async (
    id: number,
    value: boolean,
    newShortlist: Shortlist
  ) => {
    const bootcamper = bootcampers.find(
      (bootcamper) => bootcamper.id === id
    )?.name;
    /* await axios.post("http://localhost:4000/new-record", {
      id,
      action: !!value
        ? `Klant heeft ${bootcamper} ge-shortlist`
        : `Klant heeft ${bootcamper} van zijn shortlist gehaald`,
    }); */
    setShortlist(newShortlist);
  };
  const mapShortList = (): Bootcamper[] => {
    return shortlist
      .map((item) => bootcampers.find((bootcamper) => bootcamper.id === item))
      .sort((a, b) => a!.id - b!.id) as Bootcamper[];
  };
  return (
    <main className={styles.main}>
      <Landing />
      <Steps />
      <BootcamperOverview />
      <BootcamperDetail
        shortlist={shortlist}
        onChangeShortlist={handleChangeShortlist}
      />
      <Shortlist shortlist={mapShortList()} />
    </main>
  );
}
