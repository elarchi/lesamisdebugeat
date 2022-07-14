import "./publication.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//loading spinner:
import { ClipLoader } from "react-spinners";

const Publication = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // id retrivial:
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lesamisdebugeat.herokuapp.com/publication/${id}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading__div">
      <ClipLoader color={"#75913d"} size={100} />
    </div>
  ) : (
    <div className="container publication-page">
      <h1>{data.title}</h1>

      <div className="text">
        <p className="p__description">{data.description}</p>
        <div className="border-black"></div>
        <div className="green-sqr">
          <h1>Informations</h1>
          <div className="infos">
            {" "}
            <div className="info">
              <h2>Date : </h2>
              <h2>{data.date}</h2>
            </div>
            <hr />
            <div className="info">
              <h2>Lieu : </h2>
              <h2>{data.location}</h2>
            </div>
            <hr />
            <div className="info">
              <h2>Heure : </h2>
              <h2>{data.time}</h2>
            </div>
          </div>

          <h2>{data.location}</h2>
          <div className="buttons">
            <a
              href={data.URLprogrammation}
              download="lesamisdupaysdebugeat-formulaire-d-adhesion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programme
            </a>
            {/* <button>Inscription</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
