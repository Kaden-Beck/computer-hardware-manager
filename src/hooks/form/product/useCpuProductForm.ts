import { useForm } from '@tanstack/react-form';
import {
  cpuProductSchema,
  type CpuProductFormValues,
} from '@/lib/validators/product/cpu';

export type { CpuProductFormValues };

interface UseCpuProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<CpuProductFormValues>;
  onSubmit: (values: CpuProductFormValues, categoryId: string) => Promise<void>;
}

export function useCpuProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseCpuProductFormOptions) {
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
      cores: defaultValues?.cores ?? 0,
      threads: defaultValues?.threads ?? 0,
      baseClockGHz: defaultValues?.baseClockGHz ?? 0,
      tdp: defaultValues?.tdp ?? 0,
      socketType: defaultValues?.socketType ?? '',
      integratedGraphics: defaultValues?.integratedGraphics ?? false,
      boostClockGHz: defaultValues?.boostClockGHz,
      cacheMB: defaultValues?.cacheMB,
    },
    validators: {
      onChange: cpuProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
