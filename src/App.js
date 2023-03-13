import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import styled from "styled-components";

function App() {
  return (
    <Main className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Main>
  );
}

const Main = styled.main``;

export default App;
