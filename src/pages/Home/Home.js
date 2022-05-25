//Importation des React Components (UI)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Importation Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//Importation des feuilles de style
import "./home.scss";
//Importation des components
import Last from "../../components/Last/Last";

const Home = () => {
  const events = {
    left: {
      title: "Evènement 1",
      text: "text évènement 1",
      url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503433/lesAmisDuPaysDeBugeat/L1000383_omdo8o.png",
    },
    middle: {
      title: "Evènement 2",
      text: "text évènement 2",
      url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503433/lesAmisDuPaysDeBugeat/L1000383_omdo8o.png",
    },
    right: {
      title: "Election du nouveau bureau",
      text: "Ca y est, le bureau de l'association des Amis du Pays de Bugeat est constitué pour cette nouvelle année 2022 ! Venez vite le rencontrer aux portes ouvertes samedi prochain !",
      url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503428/lesAmisDuPaysDeBugeat/L1000093_px2zuy.png",
    },
  };

  return (
    <div className="home__div container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503446/lesAmisDuPaysDeBugeat/_1033073_dt9ive.png"
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503472/lesAmisDuPaysDeBugeat/_1033043_kyy27c.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503461/lesAmisDuPaysDeBugeat/_1011838_qs1rih.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <Last
        title="Derniers évènements"
        events={events}
        span="Voir plus d'évènements"
      />

      <Last
        title="Dernières publications"
        events={events}
        span="Voir plus de publications"
      />
    </div>
  );
};

export default Home;
