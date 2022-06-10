//Importation des feuilles de style
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact__div container">
      <div className="image__div">
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1654858303/contact/carte-fictive_y4evnn.png"
          alt="map"
        />
      </div>
      <div className="txt__div">
        <div className="horaire__div">
          <h1>Nous sommes ouvert :</h1>
          <p>du lundi au jeudi</p>
          <p>de 10:00 à 17:00</p>
        </div>
        <div className="email__div">
          <h1>Email : </h1>
          <a href="mailto:lesamisdebugeat@gmail.com">
            lesamisdebugeat@gmail.com
          </a>
        </div>
        <div className="tel__div">
          <h1>Téléphone : </h1>
          <p>+33 1 40 55 66 98</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
