import { useForm } from '@tanstack/react-form';
import {
  manufacturerSchema,
  type ManufacturerFormValues,
} from '@/lib/validators/manufacturer';
export type { ManufacturerFormValues };

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
    validators: {
      onChange: manufacturerSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });
}
