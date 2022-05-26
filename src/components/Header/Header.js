//Importations des feuilles de style
import "./header.scss";
//Importation des composants react
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__div container">
      <div className="header-title__div">
        <h1>Les amis du pays de Bugeat</h1>
        <div className="header-logos__div">
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653493909/lesAmisDuPaysDeBugeat/facebook_wbxkzo.png"
            alt="facebook-logo"
          />
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653493317/lesAmisDuPaysDeBugeat/instagram_xb6kue.png"
            alt="instagram-logo"
          />
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653493317/lesAmisDuPaysDeBugeat/youtube_boivug.png"
            alt="youtube-logo"
          />
        </div>
      </div>
      <div className="header-subtitle__div">
        <h2>Faire connaître et promouvoir le pays de Bugeat</h2>
      </div>
      <nav className="header__nav">
        <Link to="/" className="link">
          <button className="separator__button">ACCUEIL</button>
        </Link>
        <Link to="/who-are-we" className="link">
          <button className="separator__button">QUI SOMMES-NOUS ?</button>
        </Link>
        <button className="separator__button">NOUS REJOINDRE</button>
        <button className="separator__button">PUBLICATIONS</button>
        <button className="separator__button">ÉVÈNEMENTS</button>

        <button>CONTACT</button>
      </nav>
    </div>
  );
};

export default Header;
