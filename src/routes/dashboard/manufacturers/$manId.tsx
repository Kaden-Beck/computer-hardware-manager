import { createFileRoute } from '@tanstack/react-router';
import ManufacturerDetailComponent from '@/components/manufacturer/ManufacturerDetail';

export const Route = createFileRoute('/dashboard/manufacturers/$manId')({
  component: ManufacturerDetailComponent,
});
