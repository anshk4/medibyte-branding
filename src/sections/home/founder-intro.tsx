import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/data";

export function HomeFounderIntro() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full rounded-sm overflow-hidden bg-cream border border-ink/10 shadow-portrait relative">
              <img
                src={ASSETS.gurvinder}
                alt="Gurvinder Jit Singh"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent mb-4">
              § Your Partner in Medical Travel
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-ink leading-[0.95]">
              Healthcare journeys,
              <br />
              <em className="text-primary">made human.</em>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              I am Gurvinder Jit Singh, Co-Founder of HJ Unicare. For over a decade, I have helped
              families cross borders for care they can trust. Accredited hospitals. Transparent
              pricing. One steady hand from first call to follow-up.
            </p>
            <p className="mt-4 text-lg text-ink/80 leading-relaxed text-pretty max-w-2xl">
              When someone you love needs treatment, you do not need more choices. You need the right
              one. That is what we build, every single day.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper hover:bg-primary transition-smooth"
              >
                Meet Gurvinder
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
