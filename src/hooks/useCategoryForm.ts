import { useForm } from '@tanstack/react-form';

export interface CategoryFormValues {
  name: string;
  description: string;
  isParent: boolean;
  parentId: string;
}

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
    },
    onSubmit: async ({ value }): Promise<void> => {
      await onSubmit(value);
    },
  });
}
