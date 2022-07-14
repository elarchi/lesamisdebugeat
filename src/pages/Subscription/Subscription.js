//Importation des feuilles de style
import "./subscription.scss";
//Importation des composants react
import { Link } from "react-router-dom";
import { useState } from "react";

const Subscription = () => {
  const [paperForm, setPaperForm] = useState(0);
  //0 not downloaded
  //1 downloaded

  return (
    <div className="container subscription__div">
      <div className="quote__div ">
        <p>
          <span className="big-quote__span">« </span>L’adhésion est de{" "}
          <span>10 euros</span>.<br /> Il est d’usage j’ajouter une somme, à
          l’appréciation de chacun (90 euros est l’usage) qui sera déductible de
          vos impôts à 66% (un justificatif vous sera envoyé). <br />
          Cette somme servira à financer ou aider les projets retenus lors de
          l’AG qui se déroule en principe en août.{" "}
          <span className="big-quote__span">» </span>
        </p>
        <Link to="/who-are-we/status" className="link">
          Connaître les status de l'association
        </Link>
      </div>
      <div className="options__div">
        <Link to="/subscription/online">
          {" "}
          <button className="green__button">Adhésion en ligne</button>
        </Link>
        <span>OU</span>

        <a
          href="https://res.cloudinary.com/dfi0ky1v7/raw/upload/v1656447522/nous-rejoindre/Bulletin_d_adh%C3%A9sion_ADPDB_ositfb.docx"
          className="red__button"
          download="lesamisdupaysdebugeat-formulaire-d-adhesion"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            setPaperForm(1);
          }}
        >
          Formulaire d'inscription papier
        </a>
      </div>

      <div className="informations">
        {" "}
        <span
          className={paperForm === 1 ? "paperForm1-span" : "paperForm0-span"}
        >
          Le formulaire a été téléchargé. Vous le retrouverez dans vos
          téléchargements.
        </span>
      </div>
    </div>
  );
};

export default Subscription;
