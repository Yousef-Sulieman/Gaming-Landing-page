import React from "react";
import Navbar from "./components/Nav/Navbar";
import Header from "./components/header/Header";
import Services from "./components/Services/Services";
import GameCards from "./components/GameCards/GameCards";
import Marquee from "./components/Marquee/Marquee";
import VideoBg from "./components/VideoBg/VideoBg";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Insta from "./components/Insta/insta";
import Footer from "./components/Footer/Footer";
import Copright from "./components/Copright/Copright";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Services />
      <Marquee />
      <GameCards />
      <VideoBg />
      <Mission />
      <Team />
      <Works />
      <Testimonials />
      <Contact />
      <Insta />
      <Footer />
      <Copright />
    </main>
  );
}

export default App;
