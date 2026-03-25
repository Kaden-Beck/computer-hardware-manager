import type React from 'react';
import { useParams } from '@tanstack/react-router';

export default function ProductEditComponent(): React.JSX.Element {
  const { prodId } = useParams({ from: '/dashboard/products/$prodId/edit' });

  return (
    <div className="border rounded-lg p-4 md:p-6">
      <p className="text-sm text-muted-foreground">
        To do: Add edit form for {prodId}.
      </p>
    </div>
  );
}
