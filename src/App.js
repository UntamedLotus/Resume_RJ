import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/hero";
import Skill from "./components/skills/skills";
import Certificate from "./components/certifications/caertificate";
import Project from "./components/projects/projects";
import Contact from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skill />
      <Certificate />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
