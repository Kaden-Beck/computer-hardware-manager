import { useParams } from '@tanstack/react-router';

export default function ProductEditComponent() {
  const { prodId } = useParams({ from: '/dashboard/products/$prodId/edit' });
  return <div>Edit product {prodId}</div>;
}
