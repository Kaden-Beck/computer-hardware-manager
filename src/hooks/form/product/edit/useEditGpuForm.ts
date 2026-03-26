import { useForm } from '@tanstack/react-form';
import {
  gpuProductSchema,
  type GpuFormValues,
} from '@/lib/validators/product/gpu';

export type { GpuFormValues };

interface UseGpuProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<GpuFormValues>;
  onSubmit: (values: GpuFormValues, categoryId: string) => Promise<void>;
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
      price: defaultValues?.price ?? null,
      quantity: defaultValues?.quantity ?? 0,
      manufacturerId: defaultValues?.manufacturerId ?? '',
      chipset: defaultValues?.chipset ?? '',
      vramGB: defaultValues?.vramGB ?? 0,
      vramType: defaultValues?.vramType ?? '',
      tdp: defaultValues?.tdp ?? 0,
      coreCount: defaultValues?.coreCount ?? null,
      baseClockMHz: defaultValues?.baseClockMHz ?? null,
      boostClockMHz: defaultValues?.boostClockMHz ?? null,
      lengthMM: defaultValues?.lengthMM ?? null,
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
