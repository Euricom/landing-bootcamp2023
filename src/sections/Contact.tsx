import styles from "@/styles/contact.module.scss";
import { FormEventHandler, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { sendEmail } from "@/server/api";
import CustomImage from "@/components/CustomImage";
import { useSearchParams } from "next/navigation";

interface ContactProps {
  shortlist: {
    id: number;
    name: string;
  }[];
}
function Contact({ shortlist }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  let searchParams = useSearchParams();
  const clientName = searchParams.get("firstname") || "Unknown";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({
      clientName,
      companyName: name,
      phoneNumber: tel,
      email,
      shortlist: shortlist.map((item) => ({ id: item.id, name: item.name })),
    });

    try {
      setOpenModal(true);
    } catch (e) {}
  };
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["contact-wrapper"]}>
          <h2 className="h2-left">Book an interview</h2>
          <div className={styles["contact-form"]}>
            <p>
              Feel free to leave your details.
              <br />
              <br />
              We note your details and contact you as soon as possible for an interview with the bootcampers for which
              you have shown interest!
            </p>
            <form onSubmit={handleSubmit}>
              <Input type="text" value={name} onChange={setName} placeholder="Company Name" required />
              <Input type="email" value={email} onChange={setEmail} placeholder="Email address" required />
              <Input type="tel" value={tel} onChange={setTel} placeholder="Phone number" required />
              <Button type="submit" variant="green">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={styles["modal-wrapper"]} onClick={() => setOpenModal(false)}>
          <div className={styles.modal}>
            <CustomImage width={96} imageUrl={"/checkmark.svg"} alt="Checkmark Icon" />
            <h3>Booking invitation sent successfully</h3>
            <p>We will contact you as soon as possible.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
