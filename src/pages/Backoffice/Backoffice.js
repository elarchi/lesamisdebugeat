import { useState } from "react";
import axios from "axios";

const Backoffice = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [urlImages, setUrlImages] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [urlProg, setUrlProg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lesamisdebugeat.herokuapp.com/backoffice",
        {
          //title:title,
          title,
          date,
          time,
          location,
          urlImages,
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

  return (
    <div className="backoffice-content">
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
          placeholder="Url des images"
          onChange={(event) => {
            setUrlImages(event.target.value);
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
        <button type="submit">Créer l'évènement</button>
      </form>
    </div>
  );
};

export default Backoffice;
