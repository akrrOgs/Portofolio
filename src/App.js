import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

import "../src/App.css";
import RecentWork from "./components/RecentWork";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Service />
      <RecentWork />
    </div>
  );
}

export default App;
