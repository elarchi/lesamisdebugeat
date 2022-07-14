import "./whoarewe.scss";

import HeadquarterCard from "../../components/HeadquarterCard/HeadquarterCard";
import { Link } from "react-router-dom";

import Timeline from "../../components/Timeline/Timeline";

const WhoAreWe = () => {
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
      <div className="introduction">
        <div className="quote__div">
          <h1>L'association, en bref</h1>
          {/* <p>
            Nous sommes une association d'intérêt général qui :
            <ul>
              <li>
                {" "}
                soutient des <span>projets locaux</span>,
              </li>
              <li>
                des organise des <span>évènements culturels,</span>
              </li>
              <li>des ateliers artistiques, </li>
              <li>des conférences et expositions, </li>
              <li>des soirées contes, </li>
              <li>et édite des livres</li>
            </ul>
            Chacun de ces évènements est en lien avec notre patrimoine. <br />
          </p>
          <p>
            Nous nous sommes fixé l’objectif :
            <ul>
              <li>
                de <span>faire connaître et promouvoir le Pays de Bugeat</span>,
              </li>
              <li>
                {" "}
                contribuer à la mise en place d’
                <span>actions sociales, éducatives, et solidaires</span>{" "}
                d’utilité civique, au service du vivre ensemble
                intergénérationnel.
              </li>
            </ul>
          </p> */}
          <p>
            "Les amis du pays du Bugeat est une association d'intérêt général
            qui <span>soutient des projets locaux</span>,{" "}
            <span>organise des évènements culturels</span> , ateliers
            artistiques, conférences, expositions, soirées contes, édite des
            livres <span>en lien avec notre patrimoine</span> . <br />
            <br /> Elle s’est fixé l’objectif de{" "}
            <span>faire connaître et promouvoir le Pays de Bugeat</span>,
            contribuer à la mise en place d’actions sociales, éducatives, et
            solidaires d’utilité civique, au service du vivre ensemble
            intergénérationnel."
          </p>
        </div>
        <div className="video">
          <video controls>
            <source
              src="https://res.cloudinary.com/dfi0ky1v7/video/upload/v1656443864/qui-sommes-nous/video/balade-memorielle_lp3cir.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="timeline">
        <Timeline />
      </div>
      <div className="headquarter__div">
        <h1>Notre bureau</h1>

        <div className="cards__div ">
          <HeadquarterCard
            title={"Président fondateur"}
            name={"Jean-Marie Bourre"}
            telephone={"-"}
            email={"-"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1657809889/qui-sommes-nous/bureau/Jean-Marie_Bourre_Pre%CC%81sident_fondateur_de_l_Association_des_ADPDB_j7uqk3.png"
            }
          />

          <HeadquarterCard
            title={"Président d'honneur"}
            name={"Jean-Marie Borzeix"}
            telephone={"-"}
            email={"-"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1657809890/qui-sommes-nous/bureau/Jean-Marie_Borzeix_President_d_honneur_des_ADPDB_ctcxfv.png"
            }
          />

          <HeadquarterCard
            title={"Président d'honneur, v-président"}
            name={"Yves Pérel"}
            telephone={"06-79-97-83-12"}
            email={"perel.yves@wanadoo.fr"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654622510/qui-sommes-nous/bureau/yves-perel_vice-president_1_znlnjj.jpg"
            }
          />

          <HeadquarterCard
            title={"Présidente"}
            name={"Sophie Van Roekeghem"}
            telephone={"06-80-47-21-90"}
            email={"svanroek@gmail.com"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1657809889/qui-sommes-nous/bureau/Sophie_vR_Pre%CC%81sidente_des_ADPDB_arsiz0.jpg"
            }
          />

          <HeadquarterCard
            title={"Secrétaire"}
            name={"Danièle Thomé"}
            telephone={"06-71-26-83-77"}
            email={"d.thome@free.fr"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654622510/qui-sommes-nous/bureau/daniele-thome_secretaire_zxqux0.jpg"
            }
          />

          <HeadquarterCard
            title={"Secrétaire adjoint"}
            name={"Jean-Pierre Mourieras"}
            telephone={"-"}
            email={"-"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654618477/sample.jpg"
            }
          />

          <HeadquarterCard
            title={"Trésorier & Resp. informatique"}
            name={"Jean-Christophe Nony"}
            telephone={"06-72-07-92-92"}
            email={"jc.nony@orange.fr"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654622744/qui-sommes-nous/bureau/jean-christophe-nony_tresorier_vb3khn.jpg"
            }
          />

          <HeadquarterCard
            title={"Trésorier adjoint"}
            name={"Bernard Jamilloux"}
            telephone={"-"}
            email={" jamillouxb@gmail.com"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654622510/qui-sommes-nous/bureau/bernard-jamilloux_tresorier-adjoint_fqbcne.jpg"
            }
          />

          <HeadquarterCard
            title={"Ingénieur Son & Lumière"}
            name={"Patrick Gazeau"}
            telephone={"06-76-96-17-46"}
            email={"pgazeau33@gmail.com"}
            urlImage={
              "https://res.cloudinary.com/dfi0ky1v7/image/upload/v1655762154/qui-sommes-nous/bureau/Patrick-Gazeau_Ingenieur-son-et-lumieres_gd3qxm.jpg"
            }
          />
        </div>
      </div>
      <div className="members__div">
        <h1>Nos membres</h1>

        <div className="membersList__div">
          {" "}
          {members.map((name, index) => {
            return (
              <span>
                {name} <br />
              </span>
            );
          })}
          <br />
        </div>
        <Link to="/subscription">
          <button>Devenir membre</button>
        </Link>
      </div>
    </div>
  );
};

export default WhoAreWe;
