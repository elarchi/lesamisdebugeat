import axios from "axios";
import { useState } from "react";

import "./createPublicationForm.scss";

const CreatePublicationForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [URLpicture, setURLpicture] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(2);
      const response = await axios.post(
        `https://lesamisdebugeat.herokuapp.com/backoffice/create-publication`,
        {
          //title:title,
          title,
          date,
          description,
          price,
          author,
          edition,
          URLpicture,
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
        placeholder="URL de la couverture"
        onChange={(event) => {
          setURLpicture(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Prix"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />{" "}
      <input type="submit" value="Créer" />
    </form>
  );
};

export default CreatePublicationForm;
