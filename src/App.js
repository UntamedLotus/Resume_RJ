import "./App.scss";
import Hero from "./components/Hero/hero";
import Skills from "./components/skills/skills";
import Project from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
