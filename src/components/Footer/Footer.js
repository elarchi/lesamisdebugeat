//Importation des feuilles de style
import "./footer.scss";
//Importation des composants react
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__div container">
      <br />
      <nav className="">
        <Link to="/">Accueil </Link> |{" "}
        <Link to="/who-are-we">Qui sommes-nous ?</Link> |{" "}
        <Link to="/subscription">Devenir membre</Link> |{" "}
        <Link to="/events">L'agenda</Link> |{" "}
        <Link to="/publications">Publications</Link> | Archives |{" "}
        <Link to="/contact">Contact</Link> |
        <Link to="/backoffice">Backoffice</Link>
      </nav>
      <p>
        © 2022, designed and developed by
        <a href="https://github.com/elarchi"> Emilie Leury</a>
      </p>
    </div>
  );
};
export default Footer;
