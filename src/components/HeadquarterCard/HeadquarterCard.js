//Importation des feuilles de style
import "./headquartercard.scss";

const HeadquarterCard = ({ title, name, telephone, email, urlImage }) => {
  return (
    <div className="heardquarterCard__div">
      <img src={urlImage} alt="membre-du-bureau" />
      <h2>{title}</h2>
      <h1>{name}</h1>
      <p>Tél : {telephone}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default HeadquarterCard;
