import "./comingsoon.scss";

import { useState, useEffect } from "react";
import axios from "axios";

//loading spinner:
import { ClipLoader } from "react-spinners";

const ComingSoon = () => {
  // get data all-events
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lesamisdebugeat.herokuapp.com/all-events"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="green-sqr">
      <h1>ÉVÈNEMENTS À VENIR</h1>
      {isLoading ? (
        <ClipLoader color={"#75913d"} size={100} />
      ) : (
        <div className="events">
          {data.events.map((event, i) => {
            if (event.display.comingSoonEvent === true) {
              return (
                <div key={i} className="event-card">
                  <h2>{event.title}</h2>
                  <h3>{event.date}</h3>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default ComingSoon;
