import { useState } from "react";
import { Calendar, FileText, ArrowRight, Check, Upload } from "lucide-react";
import { SPECIALITIES } from "@/lib/data";
import { FormField, FormSelect, FormTextarea } from "@/fragments";

export function HomeContactBoxes() {
  const [consultSent, setConsultSent] = useState(false);
  const [reportsSent, setReportsSent] = useState(false);

  return (
    <section className="bg-cream py-16 lg:py-20 border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent">
            § Start Here
          </div>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-ink leading-[0.95]">
            Tell us about the patient. We reply in 24 hours.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* CONSULTATION BOX */}
          <div className="bg-paper border border-ink/10 p-8 lg:p-10 shadow-paper">
            <div className="flex items-start gap-4 mb-8">
              <div className="h-14 w-14 rounded-full bg-ink text-paper flex items-center justify-center shrink-0">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink">Book a Free Consultation</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A 30-minute call to understand the case and outline hospital options.
                </p>
              </div>
            </div>
            <ConsultationForm sent={consultSent} onSent={() => setConsultSent(true)} />
          </div>

          {/* REPORTS BOX */}
          <div className="bg-paper border border-ink/10 p-8 lg:p-10 shadow-paper">
            <div className="flex items-start gap-4 mb-8">
              <div className="h-14 w-14 rounded-full bg-ink text-paper flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink">Submit Medical Reports</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upload scans and records for a clinical review and treatment plan.
                </p>
              </div>
            </div>
            <ReportsForm sent={reportsSent} onSent={() => setReportsSent(true)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationForm({ sent, onSent }: { sent: boolean; onSent: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    speciality: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSent();
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Full name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <FormField
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          required
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Phone / WhatsApp"
          value={form.phone}
          onChange={(v) => update("phone", v)}
        />
        <FormField label="Country" value={form.country} onChange={(v) => update("country", v)} />
      </div>
      <FormSelect
        label="Treatment needed"
        value={form.speciality}
        onChange={(v) => update("speciality", v)}
      >
        <option value="">Select a treatment...</option>
        {SPECIALITIES.map((s) => (
          <option key={s.slug} value={s.name}>
            {s.name}
          </option>
        ))}
        <option value="Other">Other / Not sure</option>
      </FormSelect>
      <FormTextarea
        label="Brief about the patient"
        value={form.message}
        onChange={(v) => update("message", v)}
        required
        rows={3}
      />
      <button
        type="submit"
        className="w-full group inline-flex items-center justify-between bg-ink px-6 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth"
      >
        <span>
          {sent ? "Request received — we will call you within 24 hours" : "Book Free Consultation"}
        </span>
        {sent ? (
          <Check className="h-4 w-4" />
        ) : (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}

function ReportsForm({ sent, onSent }: { sent: boolean; onSent: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSent();
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Full name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <FormField
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          required
        />
      </div>
      <FormField label="Phone / WhatsApp" value={form.phone} onChange={(v) => update("phone", v)} />
      <FormField
        label="Condition / diagnosis"
        value={form.condition}
        onChange={(v) => update("condition", v)}
        placeholder="e.g. coronary artery disease, hip arthritis"
      />
      <div>
        <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
          Upload reports
        </label>
        <div className="border-2 border-dashed border-ink/20 hover:border-ink/40 transition-smooth rounded-sm p-6 text-center cursor-pointer">
          <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
          <div className="text-sm text-ink">Click to upload or drag files here</div>
          <div className="text-xs text-muted-foreground mt-1">PDF, JPG, DICOM — up to 50MB</div>
        </div>
      </div>
      <FormTextarea
        label="Additional notes"
        value={form.message}
        onChange={(v) => update("message", v)}
        placeholder="Current symptoms, medications, previous treatments..."
        rows={2}
      />
      <button
        type="submit"
        className="w-full group inline-flex items-center justify-between bg-ink px-6 py-4 text-sm font-medium text-paper hover:bg-primary transition-smooth"
      >
        <span>
          {sent ? "Reports received — clinical review within 24 hours" : "Send Reports Securely"}
        </span>
        {sent ? (
          <Check className="h-4 w-4" />
        ) : (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
