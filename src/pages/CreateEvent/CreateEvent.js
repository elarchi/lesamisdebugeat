import axios from "axios";
import "./createEvent.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import ContentWellCreated from "../../components/ContentWellCreated/ContentWellCreated";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [URLpicture, setURLpicture] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [URLprogrammation, setURLprog] = useState("");
  const [carousel, setCarousel] = useState(false);
  const [comingSoonEvent, setComingSoonEvent] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://lesamisdebugeat.herokuapp.com/backoffice/create-event`,
        {
          //title:title,
          //event
          title,
          date,
          time,
          location,
          URLpictures,
          description,
          price,
          display: {
            carousel,
            comingSoonEvent,
          },
          URLprogrammation,
        }
      );
      console.log(response.data);
      setSuccessModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [URLpictures, setURLpictures] = useState([]);

  return (
    <div className="createEvent-page container">
      {successModal ? (
        <ContentWellCreated />
      ) : (
        <div className="creation">
          <div className="titles">
            <h1>Créer un évènement</h1>
            <h2>
              <Link to="/backoffice">Accueil</Link> /{" "}
              <Link to="/backoffice/create-content">Créer du contenu</Link> /
              Créer un évènement
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-style">
              <h3>Titre</h3>
              <input
                type="text"
                id="Titre"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Date </h3>
              <input
                type="text"
                id="Date"
                placeholder="Exemple du format: Lun 24 juin 2022"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Heure</h3>
              <input
                type="text"
                id="Heure"
                placeholder="Exemple du format: 14:00 - 16:00"
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Lieu</h3>
              <input
                type="text"
                id="Lieu"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Description</h3>
              <textarea
                type="textarea"
                id="Description"
                className="description-area"
                wrap="soft"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Lien URL du programme</h3>
              <input
                type="text"
                id="Lien du programme"
                onChange={(event) => {
                  setURLprog(event.target.value);
                }}
              />
            </div>
            <div className="input-style">
              <h3>Prix</h3>{" "}
              <input
                type="text"
                id="Prix"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />{" "}
            </div>
            <div className="URLs">
              <h3>Gallerie photos de l'évènement</h3>

              {URLpictures.map((item, i) => {
                return (
                  <div className="listURLS" key={i}>
                    {item}
                  </div>
                );
              })}
              <div className="pushURL">
                <h4>Entrer ici l'URL Cloudinary d'une image : </h4>
                <input
                  type="text"
                  id="URL des images"
                  onChange={(event) => {
                    setURLpicture(event.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const newURLpictures = [...URLpictures];
                    newURLpictures.push(URLpicture);
                    setURLpictures(newURLpictures);
                    setURLpicture("");
                  }}
                >
                  Valider et envoyer l'URL
                </button>
              </div>
            </div>

            <div className="display">
              <h3>Où l'évènement doit-il apparaître ?</h3>

              <div className="checkbox-style">
                <input
                  type="checkbox"
                  id="Carousel"
                  onClick={() => {
                    if (carousel === false) {
                      setCarousel(true);
                    } else {
                      setCarousel(false);
                    }
                  }}
                />

                <label htmlFor="Carousel">Accueil/Carrousel</label>
              </div>
              <div className="chekbox-style">
                <input
                  type="checkbox"
                  id="ComingSoonEvent"
                  onClick={() => {
                    if (comingSoonEvent === false) {
                      setComingSoonEvent(true);
                    } else {
                      setComingSoonEvent(false);
                    }
                  }}
                />
                <label htmlFor="ComingSoonEvent">
                  Accueil/Évènement à venir
                </label>
              </div>
            </div>

            <button type="submit">
              Sauvegarder et publier l'évènement sur le site
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
