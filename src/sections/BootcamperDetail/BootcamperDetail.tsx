import Button from "@/components/Button";
import Toggle from "../../components/Toggle";
import CustomImage from "@/components/CustomImage";
import styles from "@/styles/bootcamperDetail.module.scss";
import Bootcamper from "./bootcamper";

type Shortlist = number[];
interface BootcamperDetailProps {
  shortlist: Shortlist;
  onChangeShortlist: (id: number, value: boolean, sl: Shortlist) => {};
}
function BootcamperDetail({
  shortlist,
  onChangeShortlist,
}: BootcamperDetailProps) {
  const addOrRemoveFromShortlist = (id: number, value: boolean): void => {
    if (shortlist.find((item) => item === id)) {
      const sl = shortlist.filter((item) => item !== id);
      onChangeShortlist(id, value, sl);
    }
    const sl = [...shortlist, id];

    onChangeShortlist(id, value, sl);
  };

  return (
    <>
      <div className="content-wrapper">
        <Bootcamper
          jsonId="peter-cosemans"
          shortlisted={!!shortlist.find((item) => item === 1)}
          onToggle={addOrRemoveFromShortlist}
        />
        <Bootcamper
          jsonId="stijn-menu"
          shortlisted={!!shortlist.find((item) => item === 1)}
          onToggle={addOrRemoveFromShortlist}
          isDark
        />
      </div>
    </>
  );
}

export default BootcamperDetail;
