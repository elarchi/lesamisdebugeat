import "./backoffice.scss";
import { Link } from "react-router-dom";
import LoginBackoffice from "../../components/LoginBackoffice/LoginBackoffice";
import { useState } from "react";

const Backoffice = () => {
  const [loginModal, setLoginModal] = useState(true);
  const todayIs = Date();
  return (
    <div className="backoffice-page container">
      {loginModal ? (
        <LoginBackoffice
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      ) : (
        <div>
          {" "}
          <div className="titles">
            {" "}
            <h1>👋 Bienvenu.e sur le backoffice de l'association</h1>
            <h2>{todayIs}</h2>
          </div>
          <div className="buttons">
            <Link to="/backoffice/create-content" className="link-btn">
              <button>Modifier ou supprimer du contenu</button>
            </Link>
            <Link to="/backoffice/create-content" className="link-btn">
              <button>Créer du contenu</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Backoffice;
