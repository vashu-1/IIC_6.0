import About from "./Components/About.jsx";
import Initiatives from "./Components/Initiatives/Initiatives.jsx";
import "./App.css";
import Talk from "./Components/Series Of talks/Talk.jsx";
import Achievement from "./Components/Achievements/Achievement.jsx";
import Glimpse from "./Components/Glimpse/Glimpse.jsx";
import Skill from "./Components/Skills/Skill.jsx";
import Patronage from "./Components/Patronage/Patronage.jsx";
import Team from "./Components/Team/Team.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/header/Header.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <Initiatives />
        <Talk />
        <Achievement />
        <Glimpse />
        <Skill />
        <Patronage />
        <Team />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
