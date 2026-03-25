import { useForm } from '@tanstack/react-form';
import {
  categorySchema,
  type CategoryFormValues,
} from '@/lib/validators/category';
export type { CategoryFormValues };

interface UseCategoryFormOptions {
  defaultValues?: Partial<CategoryFormValues>;
  onSubmit: (values: CategoryFormValues) => Promise<void>;
}

export function useCategoryForm({
  defaultValues,
  onSubmit,
}: UseCategoryFormOptions) {
  return useForm({
    defaultValues: {
      name: defaultValues?.name ?? '',
      description: defaultValues?.description ?? '',
      isParent: defaultValues?.isParent ?? true,
      parentId: defaultValues?.parentId ?? '',
      miscDetails: defaultValues?.miscDetails ?? '',
    },
    validators: {
      onChange: categorySchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });
}
