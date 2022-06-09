//Importation des feuilles de style
import "./footer.scss";
//Importation des composants react
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__div container">
      <hr className="container" />
      <br />
      <nav className="">
        <Link to="/">
          <span>Accueil</span>
        </Link>
        <Link to="/who-are-we">
          {" "}
          <span>Qui sommes-nous ?</span>
        </Link>
        <span>Évènements</span>
        <span>Publications</span>
        <Link to="/subscription">
          <span>Devenir membre de l'association</span>
        </Link>

        <span>Contact</span>
      </nav>
      <p> © Website créé par Emilie Leury, 2022</p>
    </div>
  );
};
export default Footer;
