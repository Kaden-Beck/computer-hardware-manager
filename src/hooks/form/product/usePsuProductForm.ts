import { useForm } from '@tanstack/react-form';
import {
  psuProductSchema,
  type PsuProductFormValues,
} from '@/lib/validators/product/psu';

export type { PsuProductFormValues };

interface UsePsuProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<PsuProductFormValues>;
  onSubmit: (values: PsuProductFormValues, categoryId: string) => Promise<void>;
}

export function usePsuProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UsePsuProductFormOptions) {
  return useForm({
    defaultValues: {
      name: defaultValues?.name ?? '',
      sku: defaultValues?.sku ?? '',
      description: defaultValues?.description ?? '',
      color: defaultValues?.color ?? '',
      msrp: defaultValues?.msrp ?? 0,
      price: defaultValues?.price,
      quantity: defaultValues?.quantity ?? 0,
      manufacturerId: defaultValues?.manufacturerId ?? '',
      wattage: defaultValues?.wattage ?? 0,
      efficiencyRating: defaultValues?.efficiencyRating ?? '',
      modular: defaultValues?.modular ?? 'Full',
      formFactor: defaultValues?.formFactor ?? '',
    },
    validators: {
      onChange: psuProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
