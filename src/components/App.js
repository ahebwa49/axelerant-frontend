import React from "react";
import Hero from "./Hero";
import { Map } from "./Map";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";
import "../static/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Hero />
      <Map />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
