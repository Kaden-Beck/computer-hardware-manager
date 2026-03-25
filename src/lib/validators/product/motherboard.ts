import { z } from 'zod';
import { optionalNumber, productBaseSchema } from './base';

export const motherboardProductSchema = productBaseSchema.extend({
  socketType: z.string().min(1, 'Socket type is required'),
  chipset: z.string().min(1, 'Chipset is required'),
  formFactor: z.string().min(1, 'Form factor is required'),
  memoryType: z.string().min(1, 'Memory type is required'),
  memorySlots: z.number().min(1, 'Memory slots is required'),
  maxMemoryGB: z.number().min(1, 'Max memory is required'),
  m2Slots: optionalNumber,
  sataSlots: optionalNumber,
  pciSlots: optionalNumber,
});

export type MotherboardProductFormValues = z.infer<
  typeof motherboardProductSchema
>;
