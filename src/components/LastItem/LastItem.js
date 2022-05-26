//Importation des feuilles de style
import "./lastitem.scss";

const LastItem = ({ title, items, span }) => {
  return (
    <div className="last__div container">
      <h1>{title}</h1>
      <div className="cards__div">
        <div className="card__div">
          <hr />
          <img src={items.left.url} alt="even-left" />
          <div className="card-titles__div">
            <h2>{items.left.title}</h2>
            <h3>{items.left.date}</h3>
          </div>
          <p>{items.left.text}</p>
        </div>

        <div className="card__div">
          <hr />
          <img src={items.middle.url} alt="even-middle" />
          <div className="card-titles__div">
            <h2>{items.middle.title}</h2>
            <h3>{items.middle.date}</h3>
          </div>
          <p>{items.middle.text}</p>
        </div>

        <div className="card__div">
          <hr />
          <img src={items.right.url} alt="even-right" />
          <div className="card-titles__div">
            {" "}
            <h2>{items.right.title}</h2>
            <h3>{items.right.date}</h3>
          </div>
          <p>{items.right.text}</p>
        </div>
      </div>
      <div className="more-infos__div">
        {" "}
        <span>{span}</span>
      </div>
    </div>
  );
};

export default LastItem;
