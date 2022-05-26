//Importation des feuilles de style
import "./whoarewe.scss";
//Importation des components
import HeadquarterCard from "../../components/HeadquarterCard/HeadquarterCard";
import { Link } from "react-router-dom";
// import { useState } from "react";
//Importation des composants UI
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const WhoAreWe = () => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  // const [indexName, setIndexName] = useState();
  const handleClickOpen = (i) => {
    // setIndexName(i);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let members = [
    "AUGRIS Baptiste",
    "AUPRETRE Daniel",
    " BEAUFORT Arnaud",
    "BERGAL-BUFFERINI Laurence",
    "BESSETTE Jean",
    "BLANC Danielle",
    "BORZEIX Jean-Marie",
    "BOURRE Jean-Marie",
    " BOURRE Marie-Laure",
    "BRUNOT Clarisse",
    "CASSANAS Didier",
    "CHAMPEAUX Jean-Louis",
    "CHASTAGNOL Claude",
    "CHAZALMARTIN Pierre-Marie",
    "COUDERT Régis",
    "EURL HEIJBOER (coiffure)",
    "FADDA Anne-Marie",
    "FAUCHER Jean-Pierre",
    "FOURNET Pierre",
    "FIANDRIN Bruno",
    "GANDOIS Josiane",
    "GANDOIS Pierre",
    "GARNIER Philippe",
    "GAYREAU Daniele",
    "GAYREAU  Noël",
    "GAZEAU Patrick",
    "GIBRAT Brigitte",
    "GODET-CHENEVAL Chantal",
    "GUILLAUME Jean-Claude",
    "HOARAU Henri",
    "JAMILLOUX Bernard",
    "LACHAUD Suzanne",
    "LAGARDE Jean-Marie",
    "LASSIAILLE Roger",
    "LAVAL Patrick",
    "LAVAL Annie",
    "LESUEUR Marielle",
    "LOUVRIERE-GONZALEZ Chantal",
    "GONZALEZ-ALONSO Alain",
    "MOURIERAS Jean-Pierre",
    "MUHLENS Monique",
    "NONY Antoine",
    "NONY Caroline",
    "NONY Gérard",
    "NONY	Jean-Christophe",
    "NONY	Paul",
    "ORLIANGES  Yves",
    "PANKER Georges",
    "PAULY Bernard",
    "PAUTY Pierre",
    "PEREL Alain",
    "PEREL Clémence",
    "PEREL Yves",
    "PETER Dominique",
    "PETIT Christophe",
    "PEYRAT Bernadette",
    "PEYRAT François",
    "PEYRUCHAUD Sylvie",
    "PEYRUCHAUT Danielle",
    "PEYRUCHAUD  Jean-Louis",
    "PEYRUCHAUD Julien",
    "PEYRUCHAUD Marie",
    "PEYRUCHAUD Matthieu",
    "POZZO DI BORGO Alexandra",
  ];

  return (
    <div className="whoarewe__div container">
      <div className="quote__div">
        <hr />
        <p>
          "Les amis du pays du Bugeat est une association qui soutient des{" "}
          <span>projets locaux</span>, organise des{" "}
          <span>évènements culturels</span> sous forme de conférences,
          d'expositions, de soirées contes ou d'éditions de livre sur notre
          village."
        </p>
        <hr />
      </div>
      <div className="headquarter__div">
        <h1>Bureau</h1>
        <div className="cards__div ">
          <HeadquarterCard
            title={"Présidente"}
            name={"Sophie Van Roekeghem"}
            telephone={"06-80-47-21-90"}
            email={"svanroek@gmail.com"}
            urlImage={
              "https://res.cloudinary.com/dn7zdnm89/image/upload/v1653574651/lesAmisDuPaysDeBugeat/Sophie_identite%CC%81_dagbz3.png"
            }
          />

          <HeadquarterCard
            title={"Vice - président"}
            name={"Yves Pérel"}
            telephone={"06-79-97-83-12"}
            email={"perel.yves@wanadoo.fr"}
            urlImage={
              "https://res.cloudinary.com/dn7zdnm89/image/upload/v1652461008/lesAmisDuPaysDeBugeat/istockphoto-685132245-612x612_d1wtib.jpg"
            }
          />

          <HeadquarterCard
            title={"Trésorier"}
            name={"Jean-Christophe Nony"}
            telephone={"06-72-07-92-92"}
            email={"jc.nony@orange.fr"}
            urlImage={
              "https://res.cloudinary.com/dn7zdnm89/image/upload/v1652461006/lesAmisDuPaysDeBugeat/159930_w9dxyh.jpg"
            }
          />

          <HeadquarterCard
            title={"Secrétaire"}
            name={"John Doe"}
            telephone={"06-07-08-09-10"}
            email={"jd@mail.fr"}
            urlImage={
              "https://res.cloudinary.com/dn7zdnm89/image/upload/v1652461008/lesAmisDuPaysDeBugeat/photo-1507003211169-0a1dd7228f2d_xevcss.jpg"
            }
          />
        </div>
      </div>
      <div className="members__div">
        <h1>Membres</h1>

        <div className="membersList__div">
          {" "}
          {members.map((name, index) => {
            return (
              <span
                key={index}
                // onClick={() => {
                //   handleClickOpen(index);
                // }}
                onClick={handleClickOpen}
              >
                {name} <br />
              </span>
            );
          })}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Nom du contact"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <br />
          <Link to="/subscription">
            <button>Nous rejoindre</button>
          </Link>
        </div>
        {/* <div className="button__div"></div> */}
      </div>
    </div>
  );
};

export default WhoAreWe;
