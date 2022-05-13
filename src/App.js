//Importation des feuilles de style
import "./App.scss";
//Importation des packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Importation des composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
