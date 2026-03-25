import CategoryPage from '@/components/category/CategoryPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/categories/')({
  component: CategoryPage,
});
