import { useForm } from '@tanstack/react-form';
import {
  caseProductSchema,
  type CaseProductFormValues,
} from '@/lib/validators/product/case';

export type { CaseProductFormValues };

interface UseCaseProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<CaseProductFormValues>;
  onSubmit: (
    values: CaseProductFormValues,
    categoryId: string
  ) => Promise<void>;
}

export function useCaseProductForm({
  categoryId,
  defaultValues,
  onSubmit,
}: UseCaseProductFormOptions) {
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
      formFactor: defaultValues?.formFactor ?? '',
      moboSupport: defaultValues?.moboSupport ?? '',
      maxGPULengthMM: defaultValues?.maxGPULengthMM,
      maxCPUCoolerHeightMM: defaultValues?.maxCPUCoolerHeightMM,
      maxPSULengthMM: defaultValues?.maxPSULengthMM,
      driveSlotsTwoHalf: defaultValues?.driveSlotsTwoHalf,
      driveSlotsThreeHalf: defaultValues?.driveSlotsThreeHalf,
      fanSlots: defaultValues?.fanSlots,
      radiatorSupport: defaultValues?.radiatorSupport ?? '',
    },
    validators: {
      onChange: caseProductSchema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value, categoryId);
    },
  });
}
