import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Food from "./components/Food";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Food />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
