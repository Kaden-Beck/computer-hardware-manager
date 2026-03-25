import React from 'react';
import { useParams } from '@tanstack/react-router';
import { manufacturerDetails } from '@/data/stub/manufacturerData';

export default function ManufacturerEditComponent(): React.JSX.Element {
  const { manId } = useParams({
    from: '/dashboard/manufacturers/$manId/edit',
  });
  const manufacturer = manufacturerDetails.find((m) => m.id === manId);

  if (!manufacturer) return <div>Manufacturer not found.</div>;

  return (
    <div className="border rounded-lg p-4 md:p-6">
      <p className="text-sm text-muted-foreground">To do: Add edit form.</p>
    </div>
  );
}
