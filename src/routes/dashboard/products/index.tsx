import ProductPage from '@/components/product/ProductPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/products/')({
  component: ProductPage,
});
