import { useState } from "react";
import axios from "axios";
import "./createContentForm.scss";

const CreateContentForm = ({ createEvent }) => {
  let content = "";
  if (createEvent === true) {
    content = "event";
  } else {
    content = "publication";
  }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [URLpictures, setURLpictures] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [URLprogrammation, setURLprog] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [URLreservation, setURLreservation] = useState("");
  const [carousel, setCarousel] = useState(false);
  const [comingSoonEvent, setComingSoonEvent] = useState(false);
  const [URLpicture, setURLpicture] = useState("");

  const handleSubmit = async (event, content) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://lesamisdebugeat.herokuapp.com/backoffice/create-${content}`,
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
          //publication
          author,
          edition,
          URLpicture,
          URLreservation,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(content)}>
      {createEvent ? (
        <div>
          {/* Event form */}
          <input
            type="text"
            placeholder="Titre"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Heure"
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Lieu"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Lien du programme"
            onChange={(event) => {
              setURLprog(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Prix"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />{" "}
          <input
            type="text"
            placeholder="URL des images"
            onChange={(event) => {
              setURLpictures(event.target.value);
            }}
          />
          <input type="checkbox" id="Carousel" />
          <label htmlFor="Carousel">Accueil/Carrousel</label>
          <input type="checkbox" id="ComingSoonEvent" />
          <label htmlFor="ComingSoonEvent">Accueil/Évènement à venir</label>
          <input
            type="text"
            placeholder="URL de la réservation"
            onChange={(event) => {
              setURLreservation(event.target.value);
            }}
          />
          <input type="submit" value="Créer" />
        </div>
      ) : (
        <div>
          {/* Publication form */}
          <input
            type="text"
            placeholder="Titre"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Autrice/Auteur"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Édition"
            onChange={(event) => {
              setEdition(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Prix"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />{" "}
          <input
            type="text"
            placeholder="URL de la réservation"
            onChange={(event) => {
              setURLreservation(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="URL de l'image"
            onChange={(event) => {
              setURLpicture(event.target.value);
            }}
          />
          <input type="submit" value="Créer" />
        </div>
      )}
    </form>
  );
};

export default CreateContentForm;
