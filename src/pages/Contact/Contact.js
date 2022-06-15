//Importation des feuilles de style
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact__div container">
      <img
        src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1655306617/contact/photos-des-pre%CC%81sident-e-s_xhmy6m.png"
        alt="map"
      />

      <div className="txt__div">
        <div className="contact__div">
          <h1>✉️ Email</h1>
          <a href="mailto:lesamisdebugeat@gmail.com">
            lesamisdebugeat@gmail.com
          </a>
        </div>
        <div className="contact__div">
          <h1>☎️ Téléphone</h1>
          <p>+33 (0)7 82 90 48 82</p>
        </div>
        <h2>Pssst ! Merci de nous laisser vos coordonnées :)</h2>
      </div>
    </div>
  );
};

export default Contact;
