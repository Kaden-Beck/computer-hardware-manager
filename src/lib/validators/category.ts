import { z } from 'zod';

export const categorySchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    isParent: z.boolean(),
    parentId: z.string(),
    miscDetails: z.string(),
  })
  .superRefine((data, ctx) => {
    if (!data.isParent && !data.parentId) {
      ctx.addIssue({
        code: 'custom',
        path: ['parentId'],
        message: 'Parent category is required for child categories',
      });
    }
  });

export type CategoryFormValues = z.infer<typeof categorySchema>;
