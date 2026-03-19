import { useParams } from '@tanstack/react-router';

export default function ManufacturerEditComponent() {
  const { manId } = useParams({ from: '/dashboard/manufacturers/$manId/edit' });
  return <div>Edit manufacturer {manId}</div>;
}
