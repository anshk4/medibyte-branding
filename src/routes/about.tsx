import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/sections/common";
import {
  AboutFounderIntro,
  AboutCareerTimeline,
  AboutOperatingPhilosophy,
  AboutOperationsRoles,
  AboutDiplomaticEngagements,
  AboutLicensesCredentials,
  AboutFinalCta,
} from "@/sections/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gurvinder Jit Singh, Co-Founder & COO, HJ Unicare" },
      {
        name: "description",
        content:
          "The founder story, career timeline, and operating philosophy behind HJ Unicare — building the calm infrastructure of medical travel.",
      },
      { property: "og:title", content: "About — Gurvinder Jit Singh" },
      {
        property: "og:description",
        content: "Founder story, career timeline, and philosophy of HJ Unicare's Co-Founder & COO.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ About — The Founder"
        title={
          <>
            A quiet hand,
            <br />
            <em>at the loudest moment</em> of a family's life.
          </>
        }
        lead="The story, timeline, and operating philosophy behind Gurvinder Jit Singh — Co-Founder and COO of HJ Unicare."
      />
      <AboutFounderIntro />
      <AboutCareerTimeline />
      <AboutOperatingPhilosophy />
      <AboutOperationsRoles />
      <AboutDiplomaticEngagements />
      <AboutLicensesCredentials />
      <AboutFinalCta />
    </div>
  );
}
