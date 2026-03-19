import CategoryEditComponent from '@/components/category/CategoryEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/categories/$catId/edit')({
  component: CategoryEditComponent,
});
