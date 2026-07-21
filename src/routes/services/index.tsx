import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/sections/common";
import { ServicesGrid } from "@/sections/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — HJ Unicare Speciality Focus Areas" },
      {
        name: "description",
        content:
          "Six speciality focus areas: Orthopedics, Cardiology, IVF & Fertility, Oncology, Pediatrics, and Wellness — each anchored by accredited hospitals and experienced consultants.",
      },
      { property: "og:title", content: "Services — HJ Unicare" },
      { property: "og:description", content: "Six disciplines, one operator across all of them." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ 02 — Speciality Focus Areas"
        title={
          <>
            Six disciplines.
            <br />
            <em>One operator</em> across all of them.
          </>
        }
        lead="Each speciality is anchored by a small network of consultants and super-speciality hospitals — selected for outcomes, not for advertising spend."
      />
      <ServicesGrid />
    </div>
  );
}
