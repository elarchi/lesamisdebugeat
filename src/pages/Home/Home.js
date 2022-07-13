//Importation des feuilles de style
import "./home.scss";
//Importation des components
import Caroussel from "../../components/Caroussel/Caroussel";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
// import { useState } from "react";
// import axios from "axios";

const Home = () => {
  // Pour modifier un évènement, l'URL de son image, son titre, son texte : c'est ici.

  // const events = {
  //   left: {
  //     title: "Spectacle de clown",
  //     date: "Le 10-03-2022, de 20:00 à 22:30",
  //     text: "La plus petite troupe du monde s'invite sur les plateaux de l'association des Amis du Pays de Bugeat. Une bonne soirée en perspective ! Rejoignez-nous vendredi à 20:00 à la salle mauve.",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503471/lesAmisDuPaysDeBugeat/L1000242_md0k0l.png",
  //   },
  //   middle: {
  //     title: "Atelier peinture",
  //     date: "Le 25-04-2022, de 14:30 à 17:15",
  //     text: "Ce mercredi l'association des Amis du Pays de Bugeat vous propose de vous mettre à la peinture, de quoi mettre de la couleur dans votre quotidien. L'inscription se fait via le lien de l'évènement.",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503433/lesAmisDuPaysDeBugeat/L1000383_omdo8o.png",
  //   },
  //   right: {
  //     title: "Fête de la musique",
  //     date: "Du 21-06-2022 au 22-06-2022",
  //     text: "Comme chaque année Bugeat laisse ses rues aux mains des artistes. N'hésitez pas à ramener votre propres instruments et à offrir vos talents pour les oreilles du grand public.",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503446/lesAmisDuPaysDeBugeat/_1033073_dt9ive.png",
  //   },
  // };

  // // Pour modifier une publication, l'URL de son image, son titre, son texte : c'est ici.

  // const publications = {
  //   left: {
  //     title: "Festival 2022, le programme",
  //     date: "Publié le : 03-03-2022",
  //     text: "Le programme du festival est arrivé ! Les réservations se font directement sur le site ou par courrier à l'adresse de l'association. Il est également possible de payer à la porte des spectacles, mais cela n'est pas recommandé — risque de sold out ! ",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653562048/lesAmisDuPaysDeBugeat/affiche-festival_yugxq2.png",
  //   },
  //   middle: {
  //     title: "Portrait de J-P Mabille",
  //     date: "Publié le : 17-10-2022",
  //     text: "Ce mercredi l'association des Amis du Pays de Bugeat a interviwé le photographe Jean-Pierre Mabille pour découvrir son travail. Il y parle de ses débuts et partage quelques conseils pour celles et ceux qui aimeraient se lancer dans la photo.",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503459/lesAmisDuPaysDeBugeat/L1000389_eegkuy.png",
  //   },
  //   right: {
  //     title: "Election du nouveau bureau",
  //     date: "Publié le : 05-08-2022",
  //     text: "Ca y est, le bureau de l'association des Amis du Pays de Bugeat est constitué pour cette nouvelle année 2022. Venez vite le rencontrer aux portes ouvertes samedi 26 mai !",
  //     url: "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653503428/lesAmisDuPaysDeBugeat/L1000093_px2zuy.png",
  //   },
  // };

  //get data all-events

  // const [allEvents, setAllEvents] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://lesamisdebugeat.herokuapp.com/all-events"
  //       );
  //       setAllEvents(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (response.data.events); //condition pour le carousel/comingsoonevent
  // const [carouselEvents, setCarouselEvents] = useState([]); // stockage des events qui vont dans le carrousel

  return (
    <div className="home__div container">
      {/* Mise en place du carousel de la page 
      pour changer les images du carousel, c'est ici, en modifiant leur URL*/}

      {/* Pour ajouter une image au carousel, copier-coller un composant 'SwiperSLide'déjà présent, et modifier l'URL avec l'URL de la nouvelle image. */}

      {/* Pour supprimer une image du carousel, sélectionner le composant où se trouve l'URL de l'image et supprimez le. */}
      <div className="headband">
        <Caroussel />
        <div className="vertical-separator"></div>
        <ComingSoon />
      </div>
    </div>
  );
};

export default Home;
