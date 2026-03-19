import ManufacturerPage from '@/components/manufacturer/ManufacturerPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/manufacturers/')({
  component: ManufacturerPage,
});
