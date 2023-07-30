import styles from "@/styles/contact.module.scss";
import { FormEventHandler, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { sendEmail } from "@/server/api";
import CustomImage from "@/components/CustomImage";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({
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
          <h2 className="h2-left">Boek een Interview</h2>
          <div className={styles["contact-form"]}>
            <p>
              Laat jouw gegevens gerust achter.
              <br />
              <br />
              We noteren jouw gegevens en contacteren je zo snel mogelijk voor
              een interview met de bootcampers waarvoor u interesse getoont
              heeft!
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={name}
                onChange={setName}
                placeholder="Bedrijfsnaam"
                required
              />
              <Input
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="E-mail"
                required
              />
              <Input
                type="tel"
                value={tel}
                onChange={setTel}
                placeholder="Telefoon"
                required
              />
              <Button type="submit" variant="green">
                Verzenden
              </Button>
            </form>
          </div>
        </div>
      </div>
      {openModal && (
        <div
          className={styles["modal-wrapper"]}
          onClick={() => setOpenModal(false)}
        >
          <div className={styles.modal}>
            <CustomImage
              width={96}
              imageUrl={"/checkmark.svg"}
              alt="Checkmark Icon"
            />
            <h3>Goed Verzonden</h3>
            <p>
              We hebben je aanvraag succesvol ontvangen!
              <br />
              We nemen zo snel mogelijk contact met je op.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
