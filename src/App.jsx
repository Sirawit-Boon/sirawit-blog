import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { ArticleSection } from "./components/ArticleSection";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
