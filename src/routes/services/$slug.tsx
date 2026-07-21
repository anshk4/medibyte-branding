import { createFileRoute } from "@tanstack/react-router";
import { SPECIALITIES } from "@/lib/data";
import { PageHeader } from "@/sections/common";
import {
  ServiceOverview,
  ServiceProcedures,
  ServiceJourney,
  ServiceHospitals,
  ServiceFinalCta,
} from "@/sections/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    return SPECIALITIES.find((s) => s.slug === params.slug) ?? null;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.name} — HJ Unicare` : "Services — HJ Unicare",
      },
      {
        name: "description",
        content: loaderData?.body ?? "Speciality focus areas at HJ Unicare.",
      },
    ],
  }),
  component: ServiceSlugPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center bg-paper">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-ink">Speciality not found</h1>
        <p className="mt-4 text-muted-foreground">This service doesn't exist or has been moved.</p>
      </div>
    </div>
  ),
});

function ServiceSlugPage() {
  const speciality = Route.useLoaderData();

  if (!speciality) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-paper">
        <div className="text-center">
          <h1 className="font-serif text-5xl text-ink">Speciality not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section={`§ ${speciality.n} / 06 — Speciality Focus`}
        title={
          <>
            {speciality.name}
            <br />
            <em className="text-primary">{speciality.lead}</em>
          </>
        }
        lead={speciality.body}
      />
      <ServiceOverview speciality={speciality} />
      <ServiceProcedures speciality={speciality} />
      <ServiceJourney speciality={speciality} />
      <ServiceHospitals speciality={speciality} />
      <ServiceFinalCta speciality={speciality} />
    </div>
  );
}
