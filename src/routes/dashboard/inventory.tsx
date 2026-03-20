import RouteComponent from '@/components/inventory/InventoryComponent';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/inventory')({
  component: RouteComponent,
});
