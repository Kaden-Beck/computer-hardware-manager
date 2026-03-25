import { z } from 'zod';

// Use instead of z.number().optional() for form fields.
// z.number().optional() makes the key optional in the object (price?: number),
// but TanStack Form always includes every key in defaultValues, so the form
// type expects a required key (price: number | undefined). This union matches that.
export const optionalNumber = z.union([z.number(), z.undefined()]);

export const productBaseSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  sku: z.string().min(1, 'SKU is required'),
  description: z.string().min(1, 'Description is required'),
  color: z.string(),
  msrp: z
    .number()
    .min(0, 'MSRP must be a positive number')
    .multipleOf(0.01, 'Max 2 decimal places'),
  price: optionalNumber,
  quantity: z.number().int().min(0, 'Quantity must be 0 or more'),
  manufacturerId: z.string().min(1, 'Manufacturer is required'),
});

export type ProductBaseFormValues = z.infer<typeof productBaseSchema>;
