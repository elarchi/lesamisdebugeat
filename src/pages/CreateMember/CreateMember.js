import "./createMember.scss";

const CreateMember = () => {
  return (
    <div className="container createMember-page">
      <h1>Formulaire d'inscription</h1>
      <form action="" className="form">
        <div className="inputs">
          {" "}
          <div className="input__div">
            <div className="txt">Prénom :</div>
            <input type="text" />
          </div>
          <div className="input__div">
            <div className="txt">Nom de famille :</div>
            <input type="text" />
          </div>
          <div className="input__div">
            <div className="txt">Email :</div>
            <input type="text" />
          </div>
          <div className="input__div">
            <div className="txt">Téléphone :</div>
            <input type="text" />
          </div>
          <div className="input__div">
            <div className="txt">Adresse en Corrèze :</div>
            <input type="text" />
          </div>
          <div className="input__div">
            <div className="txt">Autre Adresse :</div>
            <input type="text" />
          </div>
        </div>
        <div className="checkboxs">
          {" "}
          <div className="checkbox__div">
            <input type="checkbox" />
            <div className="txt">
              Je confirme avoir lu et accepté le règlement de l'association Les
              Amis du Pays de Bugeat.
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
          <div className="checkbox__div">
            <input type="checkbox" />
            <div className="txt">
              J'autorise l'association Les Amis du Pays de Bugeat à reproduire
              et exploiter mon image ﬁxée dans le cadre de photographies lors
              des différents évènements.
            </div>
          </div>
        </div>

        <button>J'adhère à l'association</button>
        {/* <span>{errorMessage}</span>  */}
      </form>
    </div>
  );
};

export default CreateMember;
