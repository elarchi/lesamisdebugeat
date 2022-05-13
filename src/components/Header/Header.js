//Importations des feuilles de style
import "./header.scss";
const Header = () => {
  return (
    <div className="header__div container">
      <div className="header-title__div">
        <h1>Les amis du pays de Bugeat</h1>
        <div className="header-logos__div">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="header-subtitle__div">
        <h2>Faire connaître et promouvoir le pays de Bugeat</h2>
      </div>
      <nav className="header__nav">
        <button className="separator__button">ACCUEIL</button>
        <button className="separator__button">QUI SOMMES-NOUS ?</button>
        <button className="separator__button">NOUS REJOINDRE</button>
        <button className="separator__button">PUBLICATIONS</button>
        <button className="separator__button">ÉVÈNEMENTS</button>
        <button>CONTACT</button>
      </nav>
    </div>
  );
};

export default Header;
