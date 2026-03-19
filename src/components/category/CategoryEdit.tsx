import { useParams } from '@tanstack/react-router';

export default function CategoryEditComponent() {
  const { catId } = useParams({ from: '/dashboard/categories/$catId/edit' });
  return <div>Edit category {catId}</div>;
}
