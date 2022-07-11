import "./createContent.scss";
import { useState } from "react";
import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";
import CreatePublicationForm from "../../components/CreatePublicationForm/CreatePublicationForm";
import { Link } from "react-router-dom";

const CreateContent = () => {
  const [createEvent, setCreateEvent] = useState(true);
  //true: evenement
  //false: publication
  const [formOpened, setFormOpened] = useState(false);

  return (
    <div className="createContent-page container">
      <div className="titles">
        <h1>Créer du contenu</h1>
        <h2>
          <Link to="/backoffice">Accueil</Link> / Créer du contenu
        </h2>
      </div>
      <div className="buttons">
        {" "}
        <Link to="/" className="link-btn">
          {" "}
          <button>Créer un nouveau membre</button>
        </Link>
        <Link to="/backoffice/create-content/event" className="link-btn">
          <button
            onClick={() => {
              setCreateEvent(true);
              setFormOpened(true);
            }}
          >
            Créer un évènement
          </button>
        </Link>
        <Link to="/" className="link-btn">
          {" "}
          <button
            onClick={() => {
              setCreateEvent(false);
              setFormOpened(true);
            }}
          >
            Créer une publication
          </button>
        </Link>
      </div>

      {formOpened ? (
        createEvent ? (
          <CreateEventForm />
        ) : (
          <CreatePublicationForm />
        )
      ) : null}
    </div>
  );
};

export default CreateContent;
