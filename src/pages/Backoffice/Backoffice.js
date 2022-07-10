import { useState } from "react";
import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";
import CreatePublicationForm from "../../components/CreatePublicationForm/CreatePublicationForm";

const Backoffice = () => {
  const [createEvent, setCreateEvent] = useState(true);
  //true: evenement
  //false: publication
  const [formOpened, setFormOpened] = useState(false);

  return (
    <div className="backoffice-content">
      <button
        onClick={() => {
          setCreateEvent(true);
          setFormOpened(true);
        }}
      >
        Je veux créer un évènement
      </button>
      <button
        onClick={() => {
          setCreateEvent(false);
          setFormOpened(true);
        }}
      >
        Je veux créer une publication
      </button>
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

export default Backoffice;
