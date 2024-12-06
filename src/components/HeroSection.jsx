import heroImg from "../img/hero.png";
import { ArticleSection } from "./ArticleSection";

export function HeroSection() {
  return (
    <section className="section-hero gap-[80px] bg-[#F9F8F6] flex justify-center pb-24 pt-16">
      <main className="flex flex-col max-w-[1200px] gap-[80px] items-center">
        <div className="hero-content flex items-center gap-[80px]">
          <div className="content-left gap-[24px] flex flex-col max-w-[347px]">
            <p className="content-left-head text-[52px] text-right leading-[60px] font-semibold">
              Stay <br />
              Informed,
              <br /> Stay Inspired
            </p>
            <p className="content-left-detail leading-[24px] text-right">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose
              of Inspiration and Information.
            </p>
          </div>
          <div className="content-img">
            <img className="h-auto" src={heroImg} alt="" />
          </div>
          <div className="content-right gap-[12px] flex flex-col items-start max-w-[347px]">
            <p className="content-right-semi-head text-[12px]">-Author</p>
            <p className="content-right-head text-[24px] font-semibold">
              Thompson P.
            </p>
            <p className="content-right-detail text-left leading-[24px]">
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness. <br />
              <br />
              When i’m not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
        <ArticleSection />

      </main>
    </section>
  );
}
