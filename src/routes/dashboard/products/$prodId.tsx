import ProductDetailComponent from '@/components/product/ProductDetail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/products/$prodId')({
  component: ProductDetailComponent,
});
