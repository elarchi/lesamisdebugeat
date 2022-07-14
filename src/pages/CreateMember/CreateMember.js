import "./createMember.scss";

import axios from "axios";
import { useState } from "react";

const CreateMember = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [localAdresse, setLocalAdresse] = useState("");
  const [otherAdresse, setOtherAdresse] = useState("");
  const [photographyPermission, setPhotographyPermission] = useState(false);

  const [sucessModal, setSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://lesamisdebugeat.herokuapp.com/members/subscription`,
        {
          //firstname:firstname,
          firstname,
          lastname,
          email,
          telephone,
          localAdresse,
          otherAdresse,
          photographyPermission,
        }
      );
      console.log(response.data);
      setSuccessModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container createMember-page">
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          {" "}
          <div className="input__div">
            <div className="txt">Prénom :</div>
            <input
              type="text"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
          </div>
          <div className="input__div">
            <div className="txt">Nom de famille :</div>
            <input
              type="text"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </div>
          <div className="input__div">
            <div className="txt">Email :</div>
            <input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="input__div">
            <div className="txt">Téléphone :</div>
            <input
              type="text"
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
            />
          </div>
          <div className="input__div">
            <div className="txt">Adresse en Corrèze :</div>
            <input
              type="text"
              onChange={(event) => {
                setLocalAdresse(event.target.value);
              }}
            />
          </div>
          <div className="input__div">
            <div className="txt">Autre Adresse :</div>
            <input
              type="text"
              onChange={(event) => {
                setOtherAdresse(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="checkboxs">
          <div className="checkbox__div">
            <input
              type="checkbox"
              onClick={() => {
                if (photographyPermission === false) {
                  setPhotographyPermission(true);
                } else {
                  setPhotographyPermission(false);
                }
              }}
            />
            <div className="txt">
              J'autorise l'association Les Amis du Pays de Bugeat à reproduire
              et exploiter mon image ﬁxée dans le cadre de photographies lors
              des différents évènements.
            </div>
          </div>
          <div className="checkbox__div">
            <input type="checkbox" />
            <div className="txt">
              Je certifie sur l'honneur envoyer mon règlement d'inscription sous
              5 jours à l'adresse suivante : Jean-Christophe NONY, trésorier de
              l’association des Amis du Pays de Bugeat 92, avenue des Ternes
              75017 PARIS.
            </div>
          </div>
        </div>

        <button type="submit">J'adhère à l'association</button>
        {/* <span>{errorMessage}</span>  */}
      </form>
    </div>
  );
};

export default CreateMember;
