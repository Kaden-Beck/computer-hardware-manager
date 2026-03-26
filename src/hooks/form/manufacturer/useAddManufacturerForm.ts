import { useForm } from '@tanstack/react-form';
import {
  manufacturerSchema,
  type ManufacturerFormValues,
} from '@/lib/validators/manufacturer';
export type { ManufacturerFormValues };

interface UseAddManufacturerFormOptions {
  onSubmit: (values: ManufacturerFormValues) => Promise<void>;
}

export function useAddManufacturerForm({
  onSubmit,
}: UseAddManufacturerFormOptions) {
  return useForm({
    defaultValues: {
      name: '',
      description: '',
    },
    validators: {
      onChange: manufacturerSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });
}
