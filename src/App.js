import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

import "../src/App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Service />
    </div>
  );
}

export default App;
