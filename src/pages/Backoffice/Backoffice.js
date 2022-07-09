import { useState } from "react";
import axios from "axios";

const Backoffice = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [URLpictures, setURLpictures] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [urlProg, setUrlProg] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [URLreservation, setURLreservation] = useState("");

  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lesamisdebugeat.herokuapp.com/backoffice/create-event",
        {
          //title:title,
          title,
          date,
          time,
          location,
          URLpictures,
          description,
          price,
          urlProg,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitPublication = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lesamisdebugeat.herokuapp.com/backoffice/create-publication",
        {
          //title:title,
          title,
          author,
          edition,
          URLpictures,
          description,
          price,
          URLreservation,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="backoffice-content">
      <form onSubmit={handleSubmitEvent}>
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
          placeholder="Prix"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Lien du programme"
          onChange={(event) => {
            setUrlProg(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Url des images"
          onChange={(event) => {
            setURLpictures(event.target.value);
          }}
        />

        <input type="submit" value="Créer l'évènement" />
      </form>
      <form onSubmit={handleSubmitPublication}>
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
        />
        <input
          type="text"
          placeholder="Url de la réservation"
          onChange={(event) => {
            setURLreservation(event.target.value);
          }}
        />
        <input type="submit" value="Créer la publication" />
      </form>
    </div>
  );
};

export default Backoffice;
