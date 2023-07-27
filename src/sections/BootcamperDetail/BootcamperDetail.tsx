import Bootcamper from "./bootcamper";

type Shortlist = number[];
interface BootcamperDetailProps {
  shortlist: Shortlist;
  onChangeShortlist: (id: number, value: boolean, sl: Shortlist) => void;
}
function BootcamperDetail({
  shortlist,
  onChangeShortlist,
}: BootcamperDetailProps) {
  const addOrRemoveFromShortlist = (id: number, value: boolean): void => {
    if (shortlist.find((item) => item === id)) {
      const sl = shortlist.filter((item) => item !== id);
      return onChangeShortlist(id, value, sl);
    }
    const sl = [...shortlist, id];

    return onChangeShortlist(id, value, sl);
  };

  return (
    <>
      <div className="content-wrapper">
        <Bootcamper
          jsonId="bjorn-felix"
          shortlisted={!!shortlist.find((item) => item === 1)}
          onToggle={addOrRemoveFromShortlist}
        />
        <Bootcamper
          jsonId="kobe-brants"
          shortlisted={!!shortlist.find((item) => item === 2)}
          onToggle={addOrRemoveFromShortlist}
          isDark
        />
        <Bootcamper
          jsonId="kobe-dehandschutter"
          shortlisted={!!shortlist.find((item) => item === 3)}
          onToggle={addOrRemoveFromShortlist}
        />
        <Bootcamper
          jsonId="liese-cordeyn"
          shortlisted={!!shortlist.find((item) => item === 4)}
          onToggle={addOrRemoveFromShortlist}
          isDark
        />
        <Bootcamper
          jsonId="maarten-salien"
          shortlisted={!!shortlist.find((item) => item === 5)}
          onToggle={addOrRemoveFromShortlist}
        />
        <Bootcamper
          jsonId="toon-van-hoye"
          shortlisted={!!shortlist.find((item) => item === 6)}
          onToggle={addOrRemoveFromShortlist}
          isDark
        />
      </div>
    </>
  );
}

export default BootcamperDetail;
