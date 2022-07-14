import "./publications.scss";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//loading spinner:
import { ClipLoader } from "react-spinners";

const Events = () => {
  // get data all-publications
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lesamisdebugeat.herokuapp.com/all-publications"
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
      <ClipLoader color={"#75913d"} size={100} />
    </div>
  ) : (
    <div className="publications__div container">
      <h1>Publications de l'association</h1>

      <div className="publications-list">
        {data.publications.map((item, i) => {
          return (
            <Link
              to={`/publication/${item._id}`}
              key={i}
              state={{ id: item._id }}
              className="link"
            >
              <div className="publication-card" onClick={(i) => {}}>
                <span>
                  {item.title}, {item.author}
                </span>
                <span>{item.date}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
