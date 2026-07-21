import { Calendar, Mail, Phone, Clock, Shield, FileText } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import { ContactChannel, IconCard, PathCard } from "@/fragments";

export function ContactChannels({
  mode,
  onModeChange,
}: {
  mode: "consult" | "reports";
  onModeChange: (mode: "consult" | "reports") => void;
}) {
  return (
    <div className="lg:col-span-5">
      {/* two CTA path cards */}
      <div className="space-y-4 mb-12">
        <PathCard
          icon={Calendar}
          title="Book a consultation"
          description="Schedule a 30-minute private call. Tell us about the patient's condition and we will return hospital options and an indicative estimate."
          active={mode === "consult"}
          onClick={() => onModeChange("consult")}
        />
        <PathCard
          icon={FileText}
          title="Send reports"
          description="Already have medical reports or scans? Share them securely and our clinical team will review and recommend a treatment pathway."
          active={mode === "reports"}
          onClick={() => onModeChange("reports")}
        />
      </div>

      {/* direct contact channels */}
      <div className="space-y-5 text-sm">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Or reach us directly
        </div>
        <ContactChannel
          icon={Calendar}
          label="Calendly"
          value="Book a 30-minute private consultation"
          href={CONTACT_INFO.calendly}
        />
        <ContactChannel
          icon={Mail}
          label="Email"
          value={CONTACT_INFO.email}
          href={`mailto:${CONTACT_INFO.email}`}
        />
        <ContactChannel
          icon={Phone}
          label="Phone / WhatsApp"
          value={CONTACT_INFO.phone}
          href={CONTACT_INFO.phoneHref}
        />
      </div>

      {/* trust badges */}
      <div className="mt-12 pt-8 border-t border-ink/10">
        <div className="grid grid-cols-3 gap-4">
          <IconCard icon={Clock} label="24-hour response" />
          <IconCard icon={Shield} label="Confidential & secure" />
          <IconCard icon={FileText} label="No obligation" />
        </div>
      </div>
    </div>
  );
}
