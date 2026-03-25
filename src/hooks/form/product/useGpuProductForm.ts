import { useForm } from '@tanstack/react-form';
import {
  gpuProductSchema,
  type GpuProductFormValues,
} from '@/lib/validators/product/gpu';

export type { GpuProductFormValues };

interface UseGpuProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<GpuProductFormValues>;
  onSubmit: (values: GpuProductFormValues, categoryId: string) => Promise<void>;
}

export function useGpuProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseGpuProductFormOptions) {
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
      chipset: defaultValues?.chipset ?? '',
      vramGB: defaultValues?.vramGB ?? 0,
      vramType: defaultValues?.vramType ?? '',
      tdp: defaultValues?.tdp ?? 0,
      coreCount: defaultValues?.coreCount,
      baseClockMHz: defaultValues?.baseClockMHz,
      boostClockMHz: defaultValues?.boostClockMHz,
      lengthMM: defaultValues?.lengthMM,
      powerConnectors: defaultValues?.powerConnectors ?? '',
    },
    validators: {
      onChange: gpuProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
