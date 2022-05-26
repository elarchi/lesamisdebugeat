//Importation des feuilles de style
import "./headquartercard.scss";

const HeadquarterCard = ({ title, name, telephone, email, urlImage }) => {
  return (
    <div className="heardquarterCard__div">
      <img src={urlImage} alt="membre-du-bureau" />
      <h3>{title} :</h3>
      <h2>{name}</h2>
      <p>Tél : {telephone}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default HeadquarterCard;
