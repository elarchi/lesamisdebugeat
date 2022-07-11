import "./contentWellCreated.scss";
import { Link } from "react-router-dom";

const ContentWellCreated = () => {
  return (
    <div className="ContentWellCreated-page ">
      <h1>🙌 Contenu créé avec succès ! 🙌</h1>
      <nav>
        <div className="option-nav">
          <span className="cursor-lateral">
            {" "}
            <span>👉</span>{" "}
          </span>
          <Link to="/backoffice">
            <h3>Retourner sur l'accueil du backoffice</h3>
          </Link>
        </div>
        <div className="option-nav">
          <span className="cursor-lateral">
            {" "}
            <span>👉</span>{" "}
          </span>{" "}
          <Link to="/backoffice/create-content">
            {" "}
            <h3>Créer un autre contenu</h3>
          </Link>
        </div>
        <div className="option-nav">
          <span className="cursor-lateral">
            {" "}
            <span>👉</span>{" "}
          </span>{" "}
          <h3>Modifier ou supprimer un contenu</h3>
        </div>
      </nav>
    </div>
  );
};

export default ContentWellCreated;
