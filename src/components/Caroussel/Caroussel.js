//swiper:
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//loading spinner:
import { ClipLoader } from "react-spinners";

import "./caroussel.scss";

import { useState, useEffect } from "react";
import axios from "axios";

const Caroussel = () => {
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

  return isLoading ? (
    <ClipLoader color={"#75913d"} size={100} />
  ) : (
    <div className="carousel container">
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
        {data.events.map((event, i) => {
          if (event.display.carousel === true) {
            return (
              <SwiperSlide key={i}>
                <img src={event.URLpictures[0]} alt="festival" />

                <div className="title">
                  <h1>
                    FESTIVAL DE BUGEAT <br />
                    ÉDITION 2022 !
                  </h1>{" "}
                  <h2>Du 1er au 13 août 2022 | Places limitées</h2>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default Caroussel;

// return (
//   <Swiper
//     pagination={{
//       clickable: true,
//     }}
//     modules={[Autoplay, Pagination]}
//     loop={true}
//     autoplay={{
//       delay: 3500,
//       disableOnInteraction: false,
//     }}
//     className="mySwiper"
//     style={{
//       "--swiper-navigation-color": "#fff",
//       "--swiper-pagination-color": "#fff",
//     }}
//     key={i}
//   >
//     <SwiperSlide>
//       <img src={event.URLpictures} alt="festival" />

//       <div className="title">
//         <h1>
//           FESTIVAL DE BUGEAT <br />
//           ÉDITION 2022 !
//         </h1>{" "}
//         <h2>Du 1er au 13 août 2022 | Places limitées</h2>
//       </div>
//     </SwiperSlide>
//   </Swiper>
// );
