import styles from "@/styles/contact.module.scss";
import { FormEventHandler, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { sendEmail } from "@/server/api";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail({
      companyName: name,
      phoneNumber: tel,
      email,
      shortlist: shortlist.map((item) => ({ id: item.id, name: item.name })),
    });
  };
  return (
    <>
      <div className="content-wrapper">
        <div className={styles["contact-wrapper"]}>
          <h2 className="h2-left">Boek een Interview</h2>
          <div className={styles["contact-form"]}>
            <p>
              Laat jouw gegevens gerust achter. We noteren jouw gegevens en
              contacteren je zo snel mogelijk voor een interview met de
              bootcampers waarvoor u interesse getoont heeft!
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={name}
                onChange={setName}
                placeholder="Bedrijfsnaam"
              />
              <Input
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="E-mail"
              />
              <Input
                type="tel"
                value={tel}
                onChange={setTel}
                placeholder="Telefoon"
              />
              <Button type="submit" variant="green">
                Verzenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
