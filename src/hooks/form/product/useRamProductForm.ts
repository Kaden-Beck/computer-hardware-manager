import { useForm } from '@tanstack/react-form';
import {
  ramProductSchema,
  type RamProductFormValues,
} from '@/lib/validators/product/ram';

export type { RamProductFormValues };

interface UseRamProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<RamProductFormValues>;
  onSubmit: (values: RamProductFormValues, categoryId: string) => Promise<void>;
}

export function useRamProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseRamProductFormOptions) {
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
      memoryType: defaultValues?.memoryType ?? '',
      speedMHz: defaultValues?.speedMHz ?? 0,
      capacityGB: defaultValues?.capacityGB ?? 0,
      modules: defaultValues?.modules ?? 0,
      casLatency: defaultValues?.casLatency,
      voltage: defaultValues?.voltage,
    },
    validators: {
      onChange: ramProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
