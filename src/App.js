import About from "./Component/About";
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
    </div>
  );
}

export default App;
