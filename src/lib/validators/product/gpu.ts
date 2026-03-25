import { z } from 'zod';
import { optionalNumber, productBaseSchema } from './base';

export const gpuProductSchema = productBaseSchema.extend({
  chipset: z.string().min(1, 'Chipset is required'),
  vramGB: z.number().min(1, 'VRAM is required'),
  vramType: z.string().min(1, 'VRAM type is required'),
  tdp: z.number().min(1, 'TDP is required'),
  coreCount: optionalNumber,
  baseClockMHz: optionalNumber,
  boostClockMHz: optionalNumber,
  lengthMM: optionalNumber,
  powerConnectors: z.string(),
});

export type GpuProductFormValues = z.infer<typeof gpuProductSchema>;
