import "./loginBackoffice.scss";
import { useState } from "react";

const LoginBackoffice = ({ setLoginModal, loginModal }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState();

  const mdp = "bugeat-backoffice";

  const handleClick = (event) => {
    if (mdp === password) {
      setLoginModal(false);
    } else {
      setErrorMessage("Accès refusé");
    }
  };

  return (
    <div className="loginBackoffice-component ">
      <h1>🔐 Accés réservé aux admins</h1>
      <div className="green-sqr">
        <input
          type="password"
          placeholder="**********"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={handleClick}>Entrer</button>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default LoginBackoffice;
