import "./createPublication.scss";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreatePublication = () => {
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
    <div className="createPublication-page container">
      <div className="titles">
        <h1>Créer une publication</h1>
        <h2>
          <Link to="/backoffice">Accueil</Link> /{" "}
          <Link to="/backoffice/create-content">Créer du contenu</Link> / Créer
          une publication
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
          <h3>Date</h3>
          <input
            type="text"
            id="Date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div className="input-style">
          <h3>Autrice/Auteur</h3>
          <input
            type="text"
            id="Autrice/Auteur"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </div>
        <div className="input-style">
          <h3>Édition</h3>{" "}
          <input
            type="text"
            id="Édition"
            onChange={(event) => {
              setEdition(event.target.value);
            }}
          />
        </div>
        <div className="input-style">
          <h3>Description</h3>{" "}
          <textarea
            type="text"
            id="Description"
            className="description-area"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="input-style">
          <h3>URL de l'image de couverture</h3>
          <input
            type="text"
            id="URL de la couverture"
            onChange={(event) => {
              setURLpicture(event.target.value);
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

        <button type="submit">
          Sauvegarder et publier l'évènement sur le site
        </button>
      </form>
    </div>
  );
};

export default CreatePublication;
