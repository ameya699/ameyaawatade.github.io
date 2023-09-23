import "./App.css";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
