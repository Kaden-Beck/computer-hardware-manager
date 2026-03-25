import { useForm } from '@tanstack/react-form';

export interface ManufacturerFormValues {
  name: string;
  description: string;
}

interface UseManufacturerFormOptions {
  defaultValues?: Partial<ManufacturerFormValues>;
  onSubmit: (values: ManufacturerFormValues) => Promise<void>;
}

export function useManufacturerForm({
  defaultValues,
  onSubmit,
}: UseManufacturerFormOptions) {
  return useForm({
    defaultValues: {
      name: defaultValues?.name ?? '',
      description: defaultValues?.description ?? '',
    },
    onSubmit: async ({ value }): Promise<void> => {
      await onSubmit(value);
    },
  });
}
