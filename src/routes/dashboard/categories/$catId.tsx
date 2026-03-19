import CategoryDetailComponent from '@/components/category/CategoryDetail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/categories/$catId')({
  component: CategoryDetailComponent,
});
