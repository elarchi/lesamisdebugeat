//Importation des feuilles de style
import "./publications.scss";
//Importation des components
import Archive from "../../components/Archives/Archives";
import Caroussel from "../../components/Caroussel/Caroussel";

const Events = () => {
  return (
    <div className="publications__div container">
      <h1>Publications à l'honneur</h1>
      <Caroussel />
      <Archive />
    </div>
  );
};

export default Events;
