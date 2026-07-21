import { BadgeCheck } from "lucide-react";
import { LICENSES } from "@/lib/data";
import { SectionLabel, SectionTitle } from "@/fragments";

export function AboutLicensesCredentials() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12">
          <SectionLabel>§ Licensing &amp; Credentials</SectionLabel>
          <SectionTitle className="mt-6">
            Registered, audited,
            <br />
            <em>accountable.</em>
          </SectionTitle>
        </div>

        <div className="flex flex-wrap gap-4">
          {LICENSES.map((l) => (
            <div
              key={l}
              className="flex items-center gap-3 rounded-full border border-ink/15 bg-cream px-5 py-3"
            >
              <BadgeCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-ink">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
