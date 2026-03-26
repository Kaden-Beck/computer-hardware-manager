import { useForm } from '@tanstack/react-form';
import {
  motherboardProductSchema,
  type MotherboardFormValues,
} from '@/lib/validators/product/motherboard';

export type { MotherboardFormValues };

interface UseMotherboardProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<MotherboardFormValues>;
  onSubmit: (
    values: MotherboardFormValues,
    categoryId: string
  ) => Promise<void>;
}

export function useMotherboardProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseMotherboardProductFormOptions) {
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
      socketType: defaultValues?.socketType ?? '',
      chipset: defaultValues?.chipset ?? '',
      formFactor: defaultValues?.formFactor ?? '',
      memoryType: defaultValues?.memoryType ?? '',
      memorySlots: defaultValues?.memorySlots ?? 0,
      maxMemoryGB: defaultValues?.maxMemoryGB ?? 0,
      m2Slots: defaultValues?.m2Slots ?? null,
      sataSlots: defaultValues?.sataSlots ?? null,
      pciSlots: defaultValues?.pciSlots ?? null,
    },
    validators: {
      onChange: motherboardProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
