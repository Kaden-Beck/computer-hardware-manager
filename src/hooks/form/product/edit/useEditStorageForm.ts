import { useForm } from '@tanstack/react-form';
import {
  storageProductSchema,
  type StorageFormValues,
} from '@/lib/validators/product/storage';

export type { StorageFormValues };

interface UseStorageProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<StorageFormValues>;
  onSubmit: (values: StorageFormValues, categoryId: string) => Promise<void>;
}

export function useStorageProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseStorageProductFormOptions) {
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
      storageType: defaultValues?.storageType ?? 'SSD',
      capacityGB: defaultValues?.capacityGB ?? 0,
      interface: defaultValues?.interface ?? '',
      formFactor: defaultValues?.formFactor ?? '',
      readSpeedMBps: defaultValues?.readSpeedMBps ?? null,
      writeSpeedMBps: defaultValues?.writeSpeedMBps ?? null,
    },
    validators: {
      onChange: storageProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
