import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";
import Skill from "./Component/Skill";
import SocialLinks from "./Component/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
