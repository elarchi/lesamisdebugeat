//Importation des feuilles de style
import "./App.scss";
//Importation des packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Importation des composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import WhoAreWe from "./pages/WhoAreWe/WhoAreWe";
import Subscription from "./pages/Subscription/Subscription";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Publications from "./pages/Publications/Publications";
import Status from "./pages/Status/Status";
import Backoffice from "./pages/Backoffice/Backoffice";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/who-are-we/status" element={<Status />} />
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
