//Importation des feuilles de style
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact__div container">
      <div className="image__div">
        <img
          src="https://res.cloudinary.com/dfi0ky1v7/image/upload/v1655210180/contact/sapins_srgjjd.svg"
          alt="map"
        />
      </div>
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
        <h2>Psssit ! Merci de nous laisser vos coordonnées :)</h2>
      </div>
    </div>
  );
};

export default Contact;
