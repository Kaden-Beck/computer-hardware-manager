import { useForm } from '@tanstack/react-form';
import {
  ramProductSchema,
  type RamFormValues,
} from '@/lib/validators/product/ram';

export type { RamFormValues };

interface UseRamProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<RamFormValues>;
  onSubmit: (values: RamFormValues, categoryId: string) => Promise<void>;
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
      price: defaultValues?.price ?? null,
      quantity: defaultValues?.quantity ?? 0,
      manufacturerId: defaultValues?.manufacturerId ?? '',
      memoryType: defaultValues?.memoryType ?? '',
      speedMHz: defaultValues?.speedMHz ?? 0,
      capacityGB: defaultValues?.capacityGB ?? 0,
      modules: defaultValues?.modules ?? 0,
      casLatency: defaultValues?.casLatency ?? null,
      voltage: defaultValues?.voltage ?? null,
    },
    validators: {
      onChange: ramProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
