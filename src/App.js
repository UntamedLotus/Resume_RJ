import "./App.scss";
import Hero from "./components/Hero/hero";
import Skill from "./components/skills/skills";
import Certificate from "./components/certifications/caertificate";
import Project from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <Skill />
      <Certificate />
      <Project />
    </div>
  );
}

export default App;
