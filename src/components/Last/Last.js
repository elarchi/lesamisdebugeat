//Importation des feuilles de style
import "./last.scss";

const Last = ({ title, events, span }) => {
  return (
    <div className="last__div container">
      <h1>{title}</h1>
      <div className="cards__div">
        <div className="card__div">
          <hr />
          <img src={events.left.url} alt="even-left" />
          <h2>{events.left.title}</h2>
          <p>{events.left.text}</p>
        </div>

        <div className="card__div">
          <hr />
          <img src={events.middle.url} alt="even-middle" />
          <h2>{events.middle.title}</h2>
          <p>{events.middle.text}</p>
        </div>

        <div className="card__div">
          <hr />
          <img src={events.right.url} alt="even-right" />
          <h2>{events.right.title}</h2>
          <p>{events.right.text}</p>
        </div>
      </div>
      <div className="more-infos__div">
        {" "}
        <span>{span}</span>
      </div>
    </div>
  );
};

export default Last;
