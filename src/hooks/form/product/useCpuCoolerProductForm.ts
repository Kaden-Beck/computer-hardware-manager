import { useForm } from '@tanstack/react-form';
import {
  cpuCoolerProductSchema,
  type CpuCoolerProductFormValues,
} from '@/lib/validators/product/cpuCooler';

export type { CpuCoolerProductFormValues };

interface UseCpuCoolerProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<CpuCoolerProductFormValues>;
  onSubmit: (
    values: CpuCoolerProductFormValues,
    categoryId: string
  ) => Promise<void>;
}

export function useCpuCoolerProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseCpuCoolerProductFormOptions) {
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
      coolerType: defaultValues?.coolerType ?? 'Air',
      fanSizeMM: defaultValues?.fanSizeMM ?? 0,
      maxTDP: defaultValues?.maxTDP ?? 0,
      socketCompatibility: defaultValues?.socketCompatibility ?? '',
      heightMM: defaultValues?.heightMM ?? 0,
      radiatorSizeMM: defaultValues?.radiatorSizeMM,
    },
    validators: {
      onChange: cpuCoolerProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
