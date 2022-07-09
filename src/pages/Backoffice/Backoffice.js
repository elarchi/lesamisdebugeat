import { useState } from "react";
import CreateContentForm from "../../components/CreateContentForm/CreateContentForm";

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
      {formOpened ? <CreateContentForm createEvent={createEvent} /> : null}
    </div>
  );
};

export default Backoffice;
