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
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656957197/accueil/carrousel/Vue_de_Bugeat_pour_annonce_Festival_f7ak6z.jpg"
          alt="festival"
        />

        <div className="title">
          <h1>INAUGURATION DU FESTIVAL 2022</h1>{" "}
          <h2>Lun 30 juin 2022 | 14:00 - 20:00</h2>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656439185/accueil/carrousel/Inauguration_du_Festival_2021_au_Foyer_rural_uoy47h.jpg"
          alt="inauguration-1"
        />
        <div className="title">
          {" "}
          <h1>INAUGURATION DU FESTIVAL 2022</h1>{" "}
          <h2>Lun 30 juin 2022 | 14:00 - 20:00</h2>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656439185/accueil/carrousel/Inauguration_expo_aquarelles_yuzlzp.jpg"
          alt="expo"
        />
        <div className="title">
          <h1>INAUGURATION DU FESTIVAL 2022</h1>{" "}
          <h2>Lun 30 juin 2022 | 14:00 - 20:00</h2>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656439428/accueil/carrousel/Artistes_et_artisans_expo_photos_-_du_4_au_13_aout_2022_-_Au_Foyer_rural_vy6gbi.jpg"
          alt="artisan"
        />
        <div className="title">
          {" "}
          <h1>INAUGURATION DU FESTIVAL 2022</h1>{" "}
          <h2>Lun 30 juin 2022 | 14:00 - 20:00</h2>
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Caroussel;
