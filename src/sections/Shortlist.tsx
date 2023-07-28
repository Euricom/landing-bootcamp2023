"use client";
import CustomImage from "@/components/CustomImage";
import styles from "@/styles/shortlist.module.scss";

interface ShortlistProps {
  shortlist: {
    id: number;
    imageUrl: string;
    name: string;
  }[];
}
function Shortlist({ shortlist }: ShortlistProps) {
  const renderShortlistItem = () => {
    if (shortlist)
      return shortlist.map((item) => (
        <div className={styles["shortlist-item"]} key={item.id}>
          <div>
            <CustomImage
              layout="fill"
              imageUrl={item.imageUrl}
              alt={`Profile of ${item.name}`}
            />
          </div>

          <span>{item.name}</span>
        </div>
      ));
  };
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["shortlist-wrapper"]}>
          <h2 className="h2-left">Uw Shortlist</h2>
          <div className={styles.shortlist}>{renderShortlistItem()}</div>
        </div>
      </div>
    </>
  );
}

export default Shortlist;
