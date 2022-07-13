import "./event.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//carousel:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Event = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // id retrivial:
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lesamisdebugeat.herokuapp.com/event/${id}`
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
    <div>Please wait</div>
  ) : (
    <div className="container event-page">
      <h1>{data.title}</h1>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {data.URLpictures.map((URL, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={URL} alt="festival" />
            </SwiperSlide>
          );
        })}
      </Swiper>
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
              href="https://drive.google.com/file/d/161A3vFPYpwUb7JfCcrTEmWQDVcjAZcX9/view?usp=sharing"
              className="link"
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

export default Event;
