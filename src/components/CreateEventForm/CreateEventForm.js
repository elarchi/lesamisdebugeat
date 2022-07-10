import axios from "axios";
import { useState } from "react";

import "./createEventForm.scss";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [URLpictures, setURLpictures] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [URLprogrammation, setURLprog] = useState("");
  const [carousel, setCarousel] = useState(false);
  const [comingSoonEvent, setComingSoonEvent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(2);
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
      console.log(4);
      console.log(response.data);
    } catch (error) {
      console.log("erreur catch");
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor="ComingSoonEvent">Accueil/Évènement à venir</label>
      <input type="submit" value="Créer" />
    </form>
  );
};

export default CreateEventForm;
