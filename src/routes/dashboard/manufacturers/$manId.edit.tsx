import ManufacturerEditComponent from '@/components/manufacturer/ManufacturerEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/manufacturers/$manId/edit')({
  component: ManufacturerEditComponent,
});
