//Importations des feuilles de style
import "./header.scss";
//Importation des composants react
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__div container">
      <div className="header-title__div">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654802361/header/logo_vwogsf.png"
            alt="logo-association"
          />
        </Link>

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
          <button>ACCUEIL</button>
        </Link>
        <Link to="/who-are-we" className="link">
          <button>QUI SOMMES-NOUS ?</button>
        </Link>
        <Link to="/events" className="link">
          {" "}
          <button>ÉVÈNEMENTS</button>
        </Link>
        <Link to="/publications" className="link">
          {" "}
          <button>PUBLICATIONS</button>
        </Link>
        <Link to="/subscription" className="link">
          <button>DEVENIR MEMBRE</button>
        </Link>

        <Link to="/contact" className="link">
          {" "}
          <button>CONTACT</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
