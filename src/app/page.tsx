"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Landing from "@/sections/Landing";
import Steps from "@/sections/Steps";
import BootcamperOverview from "@/sections/BootcamperOverview";
import BootcamperDetail from "@/sections/BootcamperDetail/BootcamperDetail";
import Shortlist from "@/sections/Shortlist";
import Contact from "@/sections/Contact";
import BootcampersJSON from "@/app/bootcampers.json";
import { addRecord } from "@/server/api";
import { useSearchParams } from "next/navigation";

type Shortlist = number[];
type Bootcamper = {
  id: number;
  imageUrl: string;
  name: string;
};

export default function Home() {
  let searchParams = useSearchParams();
  const clientName = searchParams.get("firstname") || "Unknown";

  const bootcampers: Bootcamper[] = [
    {
      id: BootcampersJSON["bjorn-felix"].id,
      imageUrl: BootcampersJSON["bjorn-felix"].imageUrl,
      name: BootcampersJSON["bjorn-felix"].name,
    },
    {
      id: BootcampersJSON["kobe-brants"].id,
      imageUrl: BootcampersJSON["kobe-brants"].imageUrl,
      name: BootcampersJSON["kobe-brants"].name,
    },
    {
      id: BootcampersJSON["kobe-dehandschutter"].id,
      imageUrl: BootcampersJSON["kobe-dehandschutter"].imageUrl,
      name: BootcampersJSON["kobe-dehandschutter"].name,
    },
    {
      id: BootcampersJSON["liese-cordeyn"].id,
      imageUrl: BootcampersJSON["liese-cordeyn"].imageUrl,
      name: BootcampersJSON["liese-cordeyn"].name,
    },
    {
      id: BootcampersJSON["maarten-salien"].id,
      imageUrl: BootcampersJSON["maarten-salien"].imageUrl,
      name: BootcampersJSON["maarten-salien"].name,
    },
    {
      id: BootcampersJSON["toon-van-hoye"].id,
      imageUrl: BootcampersJSON["toon-van-hoye"].imageUrl,
      name: BootcampersJSON["toon-van-hoye"].name,
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
    setShortlist(newShortlist);

    await addRecord({
      id,
      clientName,
      action: !!value
        ? `${clientName} heeft ${bootcamper} ge-shortlist`
        : `${clientName} heeft ${bootcamper} van zijn shortlist gehaald`,
    });
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
      <Contact shortlist={mapShortList()} />
    </main>
  );
}
