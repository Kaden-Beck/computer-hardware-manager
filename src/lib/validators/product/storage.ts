import { z } from 'zod';
import { optionalNumber, productBaseSchema } from './base';

export const storageProductSchema = productBaseSchema.extend({
  storageType: z.enum(['SSD', 'HDD', 'NVMe']),
  capacityGB: z.number().min(1, 'Capacity is required'),
  interface: z.string().min(1, 'Interface is required'),
  formFactor: z.string().min(1, 'Form factor is required'),
  readSpeedMBps: optionalNumber,
  writeSpeedMBps: optionalNumber,
});

export type StorageProductFormValues = z.infer<typeof storageProductSchema>;
