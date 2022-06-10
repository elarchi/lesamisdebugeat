//Importation des feuilles de style
import "./events.scss";
//Importation des components
import Archive from "../../components/Archives/Archives";
import Caroussel from "../../components/Caroussel/Caroussel";

const Events = () => {
  return (
    <div className="events__div container">
      <h1>Évènements à venir</h1>
      <Caroussel />
      <Archive />
    </div>
  );
};

export default Events;
