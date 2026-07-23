import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/videos/hero-bg.mp4";
import heroFallback from "@/assets/images/generated/hero-fallback.jpg";

export function HomeHero() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Mobile fallback image — video is left untouched for desktop */}
      <img
        src={heroFallback}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover lg:hidden"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover hidden lg:block"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 w-full py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-paper/50">
            <span className="h-px w-10 bg-paper/30" />
            Medical travel to India
          </div>
          <h1 className="mt-6 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight text-paper text-balance">
            World-class
            <br />
            healthcare,
            <br />
            <em className="text-accent">without the wait.</em>
          </h1>
          <p className="mt-6 max-w-xl text-xl lg:text-2xl text-paper/70 leading-relaxed text-pretty">
            For you, your parent, or someone you love — we handle the hospitals, travel, and
            recovery, so your family can focus on healing.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-base font-medium text-ink hover:bg-accent transition-smooth"
            >
              Book a Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
