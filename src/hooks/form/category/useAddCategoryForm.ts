import { useForm } from '@tanstack/react-form';
import {
  addCategorySchema,
  type AddCategoryFormValues,
} from '@/lib/validators/category';
export type { AddCategoryFormValues };

interface UseAddCategoryFormOptions {
  onSubmit: (values: AddCategoryFormValues) => Promise<void>;
}

export function useAddCategoryForm({ onSubmit }: UseAddCategoryFormOptions) {
  return useForm({
    defaultValues: {
      name: '',
      description: '',
      parentId: '',
    },
    validators: {
      onChange: addCategorySchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });
}
