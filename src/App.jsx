import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import blogLogo from "./img/logo.png";
import heroImg from "./img/hero.png"

function Navbar() {
  return (
    <nav className="bg-[#F9F8F6] flex justify-between w-full h-[80px] items-center px-24 border-b-[1px]">
      <a href="#">
        <img src={blogLogo} alt="Web Logo" />
      </a>
      <div className="card-button gap-[8px] h-[48px] w-[276px] flex justify-between">
        <button className="bg-white rounded-[999px] border-[1px] border-black p-2 text-center w-[127px]">
          Log in
        </button>
        <button className="bg-black text-white rounded-[999px] border-[1px] p-2 text-center w-[141px]">
          Sign up
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="section-hero h-5/6 gap-[80px] bg-[#F9F8F6] mt-14 flex justify-center">
      <main className="flex flex-row w-[1200px] h-[529px] gap-[60px] items-center">
        <div className="content-left gap-[24px] flex flex-col max-w-[347px]">
          <p className="content-left-head text-[52px] text-right leading-[60px] font-semibold">Stay <br />Informed,<br /> Stay Inspired</p>
          <p className="content-left-detail leading-[24px] text-right">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="content-img">
          <img className="h-auto" src={heroImg} alt="" />
        </div>
        <div className="content-right gap-[12px] flex flex-col items-start max-w-[347px]">
          <p className="content-right-semi-head text-[12px]">-Author</p>
          <p className="content-right-head text-[24px] font-semibold">Thompson P.</p>
          <p className="content-right-detail text-left leading-[24px]">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness. <br /><br />
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </main>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />

    </>
  );
}

export default App;
