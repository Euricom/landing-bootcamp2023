import GENERAL from "../styled/general.styled";
import CONTACT from "../styled/contact.styled";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
function Shortlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  return (
    <>
      <GENERAL.StyledContentWrapper>
        <CONTACT.StyledContactWrapper>
          <GENERAL.StyledH2LEFT>Boek een Interview</GENERAL.StyledH2LEFT>
          <CONTACT.StyledContactForm>
            <p>
              Laat jouw gegevens gerust achter. We noteren jouw gegevens en
              contacteren je zo snel mogelijk voor een interview met de
              bootcampers waarvoor u interesse getoont heeft!
            </p>
            <div>
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
              <Button variant="green" fullWidth>
                Verzenden
              </Button>
            </div>
          </CONTACT.StyledContactForm>
        </CONTACT.StyledContactWrapper>
      </GENERAL.StyledContentWrapper>
    </>
  );
}

export default Shortlist;
