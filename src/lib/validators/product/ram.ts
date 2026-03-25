import { z } from 'zod';
import { optionalNumber, productBaseSchema } from './base';

export const ramProductSchema = productBaseSchema.extend({
  memoryType: z.string().min(1, 'Memory type is required'),
  speedMHz: z.number().min(1, 'Speed is required'),
  capacityGB: z.number().min(1, 'Capacity is required'),
  modules: z.number().min(1, 'Module count is required'),
  casLatency: optionalNumber,
  voltage: optionalNumber,
});

export type RamProductFormValues = z.infer<typeof ramProductSchema>;
