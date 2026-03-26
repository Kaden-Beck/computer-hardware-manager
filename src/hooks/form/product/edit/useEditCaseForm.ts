import { useForm } from '@tanstack/react-form';
import {
  caseProductSchema,
  type CaseFormValues,
} from '@/lib/validators/product/case';

export type { CaseFormValues };

interface UseCaseProductFormOptions {
  categoryId: string;
  defaultValues?: Partial<CaseFormValues>;
  onSubmit: (values: CaseFormValues, categoryId: string) => Promise<void>;
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
      price: defaultValues?.price ?? null,
      quantity: defaultValues?.quantity ?? 0,
      manufacturerId: defaultValues?.manufacturerId ?? '',
      formFactor: defaultValues?.formFactor ?? '',
      moboSupport: defaultValues?.moboSupport ?? '',
      maxGPULengthMM: defaultValues?.maxGPULengthMM ?? null,
      maxCPUCoolerHeightMM: defaultValues?.maxCPUCoolerHeightMM ?? null,
      maxPSULengthMM: defaultValues?.maxPSULengthMM ?? null,
      driveSlotsTwoHalf: defaultValues?.driveSlotsTwoHalf ?? null,
      driveSlotsThreeHalf: defaultValues?.driveSlotsThreeHalf ?? null,
      fanSlots: defaultValues?.fanSlots ?? null,
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
