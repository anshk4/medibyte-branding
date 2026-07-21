import { ArrowRight, Upload } from "lucide-react";
import { SPECIALITIES } from "@/lib/data";
import { FormField, FormSelect, FormTextarea } from "@/fragments";

export type ConsultForm = {
  name: string;
  email: string;
  phone: string;
  country: string;
  speciality: string;
  message: string;
};

export type ReportsForm = {
  name: string;
  email: string;
  phone: string;
  country: string;
  condition: string;
  message: string;
};

export function ContactForms({
  mode,
  onModeChange,
  consultForm,
  onConsultFormChange,
  reportsForm,
  onReportsFormChange,
  sent,
  onSubmit,
}: {
  mode: "consult" | "reports";
  onModeChange: (mode: "consult" | "reports") => void;
  consultForm: ConsultForm;
  onConsultFormChange: (form: ConsultForm) => void;
  reportsForm: ReportsForm;
  onReportsFormChange: (form: ReportsForm) => void;
  sent: boolean;
  onSubmit: () => void;
}) {
  return (
    <div className="lg:col-span-6 lg:col-start-7">
      {/* tab toggle */}
      <div className="flex gap-1 mb-0 border border-ink/15 bg-paper">
        <button
          onClick={() => {
            onModeChange("consult");
          }}
          className={`flex-1 px-6 py-4 text-sm font-medium transition-smooth ${mode === "consult" ? "bg-ink text-paper" : "text-muted-foreground hover:text-ink"}`}
        >
          Book Consultation
        </button>
        <button
          onClick={() => {
            onModeChange("reports");
          }}
          className={`flex-1 px-6 py-4 text-sm font-medium transition-smooth ${mode === "reports" ? "bg-ink text-paper" : "text-muted-foreground hover:text-ink"}`}
        >
          Send Reports
        </button>
      </div>

      {mode === "consult" && (
        <ConsultationForm
          form={consultForm}
          onChange={onConsultFormChange}
          sent={sent}
          onSubmit={onSubmit}
        />
      )}

      {mode === "reports" && (
        <ReportsForm
          form={reportsForm}
          onChange={onReportsFormChange}
          sent={sent}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

function ConsultationForm({
  form,
  onChange,
  sent,
  onSubmit,
}: {
  form: ConsultForm;
  onChange: (form: ConsultForm) => void;
  sent: boolean;
  onSubmit: () => void;
}) {
  const update = (key: keyof ConsultForm, value: string) => {
    onChange({ ...form, [key]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="bg-paper border border-t-0 border-ink/15 p-8 lg:p-10 shadow-paper"
    >
      <div className="flex items-center justify-between pb-6 border-b border-ink/10">
        <div className="font-serif text-2xl text-ink">Patient Query</div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Confidential
        </span>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <FormField
          label="Full name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <FormField label="Country" value={form.country} onChange={(v) => update("country", v)} />
        <FormField
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          required
        />
        <FormField
          label="Phone / WhatsApp"
          value={form.phone}
          onChange={(v) => update("phone", v)}
        />
        <div className="sm:col-span-2">
          <FormSelect
            label="Speciality of interest"
            value={form.speciality}
            onChange={(v) => update("speciality", v)}
          >
            <option value="">Select a speciality...</option>
            {SPECIALITIES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </FormSelect>
        </div>
        <div className="sm:col-span-2">
          <FormTextarea
            label="Brief about the case"
            value={form.message}
            onChange={(v) => update("message", v)}
            required
            rows={4}
          />
        </div>
      </div>

      <SubmitButton sent={sent} sentText="Thank you — we'll be in touch within 24 hours">
        Submit query
      </SubmitButton>
    </form>
  );
}

function ReportsForm({
  form,
  onChange,
  sent,
  onSubmit,
}: {
  form: ReportsForm;
  onChange: (form: ReportsForm) => void;
  sent: boolean;
  onSubmit: () => void;
}) {
  const update = (key: keyof ReportsForm, value: string) => {
    onChange({ ...form, [key]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="bg-paper border border-t-0 border-ink/15 p-8 lg:p-10 shadow-paper"
    >
      <div className="flex items-center justify-between pb-6 border-b border-ink/10">
        <div className="font-serif text-2xl text-ink">Share Medical Reports</div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Secure
        </span>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <FormField
          label="Full name"
          value={form.name}
          onChange={(v) => update("name", v)}
          required
        />
        <FormField label="Country" value={form.country} onChange={(v) => update("country", v)} />
        <FormField
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          required
        />
        <FormField
          label="Phone / WhatsApp"
          value={form.phone}
          onChange={(v) => update("phone", v)}
        />
        <div className="sm:col-span-2">
          <FormField
            label="Condition / diagnosis"
            value={form.condition}
            onChange={(v) => update("condition", v)}
            placeholder="e.g. Coronary artery disease, L4-L5 herniation"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Upload medical reports
          </label>
          <div className="border-2 border-dashed border-ink/20 hover:border-ink/40 transition-smooth rounded-sm p-10 text-center cursor-pointer">
            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
            <div className="text-sm text-ink">Click to upload or drag files here</div>
            <div className="text-xs text-muted-foreground mt-1">
              PDF, JPG, PNG, DICOM — up to 50MB
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {["Reports", "Scans", "Lab results", "Prescriptions"].map((f) => (
                <span
                  key={f}
                  className="text-[10px] font-mono tracking-[0.1em] uppercase bg-cream border border-ink/10 px-2.5 py-1 text-muted-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <FormTextarea
            label="Additional notes"
            value={form.message}
            onChange={(v) => update("message", v)}
            placeholder="Current symptoms, medications, previous treatments..."
            rows={3}
          />
        </div>
      </div>

      <SubmitButton
        sent={sent}
        sentText="Reports received — our clinical team will review within 24 hours"
      >
        Send reports securely
      </SubmitButton>
    </form>
  );
}

function SubmitButton({
  children,
  sent,
  sentText,
}: {
  children: React.ReactNode;
  sent: boolean;
  sentText: string;
}) {
  return (
    <button
      type="submit"
      className="mt-10 w-full group inline-flex items-center justify-between bg-ink px-6 py-5 text-sm font-medium text-paper hover:bg-primary transition-smooth"
    >
      <span>{sent ? sentText : children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
