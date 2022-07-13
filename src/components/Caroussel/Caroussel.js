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
        delay: 3500,
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
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656957197/EVENEMENT/Festival%20de%20Bugeat/photo%20principale/Vue_de_Bugeat_pour_annonce_Festival_f7ak6z.jpg"
          alt="festival"
        />

        <div className="title">
          <h1>
            FESTIVAL DE BUGEAT <br />
            ÉDITION 2022 !
          </h1>{" "}
          <h2>Du 1er au 13 août 2022 | Places limitées</h2>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1656439428/accueil/carrousel/Artistes_et_artisans_expo_photos_-_du_4_au_13_aout_2022_-_Au_Foyer_rural_vy6gbi.jpg"
          alt="inauguration-1"
        />
        <div className="title">
          {" "}
          <h1>
            INAUGURATION <br />
            DU FESTIVAL
          </h1>{" "}
          <h2>
            {" "}
            Avec l'exposition « Artistes et artisans de la pierre à Bugeat »
          </h2>
          <h2>Jeu 04 août 2022 | Sous le préau derrière la mairie</h2>
        </div>{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Caroussel;
