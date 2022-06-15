//Importation des feuilles de style
import "./subscription.scss";
//Importation des composants react
import { Link } from "react-router-dom";
// import { useState } from "react";

const Subscription = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  //"Ce membre est déjà inscrit"
  //"Merci d'entrer votre prénom, nom et adresse email"
  //"Merci d'accepter le règlement"

  return (
    <div className="subscription__div container">
      <div className="quote__div">
        <hr />
        <p>
          “L’adhésion est de <span>10 euros</span>. Il est d’usage j’ajouter une
          somme, à l’appréciation de chacun (90 euros est l’usage) qui sera
          déductible de vos impôts à 66% (un justificatif vous sera envoyé).
          Cette somme servira à financer ou aider les projets retenus lors de
          l’AG qui se déroule en principe en août.”
        </p>
        <hr />
      </div>
      <div className="rules__div">
        <Link to="/who-are-we/status" className="link">
          Connaître les status de l'association
        </Link>
        <a
          href="https://drive.google.com/file/d/15Kn1F8rVXSGfUouCEOTo_CUCHyKwXxm-/view?usp=sharing"
          className="link"
          download="lesamisdupaysdebugeat-formulaire-d-adhesion"
        >
          Télécharger le bulletin d'adhésion papier
        </a>
      </div>
      <form action="" className="form">
        <div className="col__div">
          <div className="txt">Prénom</div>
          <input type="text" />
        </div>
        <div className="col__div">
          <div className="txt">Nom de famille</div>
          <input type="text" />
        </div>
        <div className="col__div">
          <div className="txt">Email</div>
          <input type="text" />
        </div>
        <div className="row__div">
          <div className="txt">
            {" "}
            Photo d'identité <span>(facultatif)</span> :
          </div>
          <button className="updload__button">
            Sélectionnez une photo depuis votre ordinateur
          </button>
        </div>
        <div className="row__div">
          <input type="checkbox" />
          <div className="txt">
            Je confirme avoir lu et accepté le règlement de l'association Les
            Amis du Pays de Bugeat.
          </div>
        </div>
        <div className="row__div">
          <input type="checkbox" />
          <div className="txt">
            J'autorise l'association Les Amis du Pays de Bugeat à reproduire et
            exploiter mon image ﬁxée dans le cadre de photographies lors des
            différents évènements.
          </div>
        </div>
        <button>J'adhère à l'association</button>
        {/* <span>{errorMessage}</span> */}
      </form>
    </div>
  );
};

export default Subscription;
