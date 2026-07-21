import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/sections/common";
import {
  ContactChannels,
  ContactForms,
  ContactNextSteps,
  type ConsultForm,
  type ReportsForm,
} from "@/sections/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HJ Unicare" },
      {
        name: "description",
        content:
          "Tell us about the patient. Book a consultation or send reports — we respond within 24 hours with a personalised plan, hospital options and an indicative estimate.",
      },
      { property: "og:title", content: "Contact — HJ Unicare" },
      {
        property: "og:description",
        content: "Book a consultation or send reports. Home to Home medical travel.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [mode, setMode] = useState<"consult" | "reports">("consult");
  const [sent, setSent] = useState(false);
  const [consultForm, setConsultForm] = useState<ConsultForm>({
    name: "",
    email: "",
    phone: "",
    country: "",
    speciality: "",
    message: "",
  });
  const [reportsForm, setReportsForm] = useState<ReportsForm>({
    name: "",
    email: "",
    phone: "",
    country: "",
    condition: "",
    message: "",
  });

  const handleModeChange = (newMode: "consult" | "reports") => {
    setMode(newMode);
    setSent(false);
  };

  return (
    <div className="bg-background text-foreground">
      <PageHeader
        section="§ 06 — Contact"
        title={
          <>
            Tell us about
            <br />
            <em>the patient.</em>
          </>
        }
        lead="We respond within 24 hours with a personalised plan, hospital options and an indicative estimate — no obligation, no funnels."
      />

      <section className="bg-cream py-20 lg:py-28 border-t border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ContactChannels mode={mode} onModeChange={handleModeChange} />
          <ContactForms
            mode={mode}
            onModeChange={handleModeChange}
            consultForm={consultForm}
            onConsultFormChange={setConsultForm}
            reportsForm={reportsForm}
            onReportsFormChange={setReportsForm}
            sent={sent}
            onSubmit={() => setSent(true)}
          />
        </div>
      </section>

      <ContactNextSteps />
    </div>
  );
}
