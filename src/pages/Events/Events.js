import "./events.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//loading spinner:
import { ClipLoader } from "react-spinners";

const Events = () => {
  // get data all-events
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lesamisdebugeat.herokuapp.com/all-events"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading__div">
      {" "}
      <ClipLoader color={"#75913d"} size={"100"} />
    </div>
  ) : (
    <div className="events__div container">
      <h1>L'agenda</h1>
      {data.count} évènements sont programmés cette saison ! Parcourez l'agenda
      pour les découvrir.
      <div className="events-list">
        {data.events.map((item, i) => {
          return (
            <Link to={`/event/${item._id}`} key={i} state={{ id: item._id }}>
              <div className="event-card" onClick={(i) => {}}>
                <img src={item.URLpictures[0]} alt="" />
                <div className="event-info">
                  <h1>{item.title}</h1>
                  <h2>{item.date}</h2>
                  <h2>{item.time}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
