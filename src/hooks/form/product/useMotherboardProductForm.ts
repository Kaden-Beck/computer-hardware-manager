import { useForm } from '@tanstack/react-form';
import {
  motherboardProductSchema,
  type MotherboardProductFormValues,
} from '@/lib/validators/product/motherboard';

export type { MotherboardProductFormValues };

interface UseMotherboardProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<MotherboardProductFormValues>;
  onSubmit: (
    values: MotherboardProductFormValues,
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
      price: defaultValues?.price,
      quantity: defaultValues?.quantity ?? 0,
      manufacturerId: defaultValues?.manufacturerId ?? '',
      socketType: defaultValues?.socketType ?? '',
      chipset: defaultValues?.chipset ?? '',
      formFactor: defaultValues?.formFactor ?? '',
      memoryType: defaultValues?.memoryType ?? '',
      memorySlots: defaultValues?.memorySlots ?? 0,
      maxMemoryGB: defaultValues?.maxMemoryGB ?? 0,
      m2Slots: defaultValues?.m2Slots,
      sataSlots: defaultValues?.sataSlots,
      pciSlots: defaultValues?.pciSlots,
    },
    validators: {
      onChange: motherboardProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
