import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
