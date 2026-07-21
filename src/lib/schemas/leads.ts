import { z } from "zod";

export const consultationLeadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email required").max(320),
  phone: z.string().trim().max(50).optional(),
  country: z.string().trim().max(100).optional(),
  speciality: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(10000),
});

export const reportsLeadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email required").max(320),
  phone: z.string().trim().max(50).optional(),
  country: z.string().trim().max(100).optional(),
  condition: z.string().trim().max(500).optional(),
  message: z.string().trim().max(10000).optional(),
  files: z
    .array(
      z.object({
        fileName: z.string().min(1).max(255),
        mimeType: z.string().min(1).max(100),
        sizeBytes: z.number().int().positive().max(52_428_800),
      }),
    )
    .max(10)
    .optional(),
});

export const confirmAttachmentsSchema = z.object({
  leadId: z.string().uuid(),
  attachments: z.array(
    z.object({
      fileName: z.string().min(1).max(255),
      storagePath: z.string().min(1).max(500),
      mimeType: z.string().min(1).max(100),
      sizeBytes: z.number().int().positive(),
    }),
  ),
});

export const updateLeadStatusSchema = z.object({
  leadId: z.string().uuid(),
  status: z.enum(["new", "reviewing", "contacted", "closed"]),
  accessToken: z.string().min(1),
});
