export type LeadType = "consultation" | "reports";

export type LeadStatus = "new" | "reviewing" | "contacted" | "closed";

export type Lead = {
  id: string;
  type: LeadType;
  name: string;
  email: string;
  phone: string | null;
  country: string | null;
  speciality: string | null;
  condition: string | null;
  message: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
};

export type LeadAttachment = {
  id: string;
  leadId: string;
  fileName: string;
  storagePath: string;
  mimeType: string;
  sizeBytes: number;
  createdAt: string;
};

export type UploadSlot = {
  fileName: string;
  storagePath: string;
  signedUrl: string;
  mimeType: string;
  sizeBytes: number;
};
