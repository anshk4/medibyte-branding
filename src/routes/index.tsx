import { createFileRoute } from "@tanstack/react-router";
import { ASSETS } from "@/lib/data";
import {
  HomeHero,
  HomeSpecialityHighlights,
  HomePatientReviews,
  HomePatientJourney,
  HomePricingComparison,
  HomeAftercareSpotlight,
  HomeInsurance,
  HomePartnerMarquee,
  HomeFeaturedIn,
  HomeTestimonials,
  HomeBlogGrid,
  HomeFinalCta,
} from "@/sections/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurvinder Jit Singh — Co-Founder & COO, HJ Unicare" },
      {
        name: "description",
        content:
          "A medical travel partner bringing the world's patients to India's finest hospitals. Co-Founder & COO, HJ Unicare.",
      },
      { property: "og:title", content: "Gurvinder Jit Singh — HJ Unicare" },
      {
        property: "og:description",
        content:
          "Home to Home medical travel — orthopedics, cardiology, IVF, oncology, pediatrics, wellness.",
      },
      { property: "og:image", content: ASSETS.gurvinder },
      { name: "twitter:image", content: ASSETS.gurvinder },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-background text-foreground">
      <HomeHero />
      <HomeSpecialityHighlights />
      <HomePatientReviews />
      <HomePatientJourney />
      <HomePricingComparison />
      <HomeAftercareSpotlight />
      <HomeInsurance />
      <HomePartnerMarquee />
      <HomeFeaturedIn />
      <HomeTestimonials />
      <HomeBlogGrid />
      <HomeFinalCta />
    </div>
  );
}
