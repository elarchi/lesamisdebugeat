//Importations des feuilles de style
import "./header.scss";
//Importation des composants react
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__div container">
      <div className="header-title__div">
        <h1>Les amis du pays de Bugeat</h1>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654802361/header/logo_vwogsf.png"
            alt="logo-association"
          />
        </Link>
      </div>
      <div className="header-subtitle__div">
        <h2>Faire connaître et promouvoir le pays de Bugeat</h2>
        <div className="header-logos__div">
          {/* <img
            className="in-construction__img"
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653493909/lesAmisDuPaysDeBugeat/facebook_wbxkzo.png"
            alt="facebook-logo"
          /> */}

          <a href="https://www.instagram.com/lesamisdupaysdebugeat/">
            <img
              src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653493317/lesAmisDuPaysDeBugeat/instagram_xb6kue.png"
              alt="instagram-logo"
            />
          </a>
        </div>
      </div>
      <nav className="header__nav">
        <Link to="/" className="link">
          <button>ACCUEIL</button>
        </Link>
        <Link to="/who-are-we" className="link">
          <button>QUI SOMMES-NOUS ?</button>
        </Link>
        <Link to="/subscription" className="link">
          <button>DEVENIR MEMBRE</button>
        </Link>
        <Link to="/events" className="link">
          {" "}
          <button>L'AGENDA</button>
        </Link>
        <Link to="/publications" className="link">
          {" "}
          <button>PUBLICATIONS</button>
        </Link>
        <button className="tooltip__button">
          ARCHIVE
          <span className="tooltip-txt__span">Page en construction</span>
        </button>

        <Link to="/contact" className="link">
          {" "}
          <button>CONTACT</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
