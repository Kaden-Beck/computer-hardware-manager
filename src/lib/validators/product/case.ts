import { z } from 'zod';
import { optionalNumber, productBaseSchema } from './base';

export const caseProductSchema = productBaseSchema.extend({
  formFactor: z.string().min(1, 'Form factor is required'),
  moboSupport: z.string().min(1, 'Motherboard support is required'),
  maxGPULengthMM: optionalNumber,
  maxCPUCoolerHeightMM: optionalNumber,
  maxPSULengthMM: optionalNumber,
  driveSlotsTwoHalf: optionalNumber,
  driveSlotsThreeHalf: optionalNumber,
  fanSlots: optionalNumber,
  radiatorSupport: z.string(),
});

export type CaseProductFormValues = z.infer<typeof caseProductSchema>;
