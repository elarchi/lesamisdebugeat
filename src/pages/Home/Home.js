//Importation des feuilles de style
import "./home.scss";
//Importation des components
import Caroussel from "../../components/Caroussel/Caroussel";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Home = () => {
  return (
    <div className="home__div container">
      <div className="headband">
        <Caroussel />
        <div className="vertical-separator"></div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default Home;
