//Importation des React Components (UI)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Importation Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//Importation des feuilles de style
import "./caroussel.scss";

const Caroussel = () => {
  // faire un caroussel dynamique, qui s'adapte au nombre de photos
  // inscrire dans une boucle, un ajout de "swiperSlide" à chaque tour
  // le nbr de tour est envoyé en props dans le composant Caroussel
  return (
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
  );
};

export default Caroussel;
