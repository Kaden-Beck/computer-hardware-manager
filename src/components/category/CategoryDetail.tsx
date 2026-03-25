import type React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { categoryDetails } from '@/data/stub/categoryData';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CategoryDetailComponent(): React.JSX.Element | null {
  const { catId } = useParams({ from: '/dashboard/categories/$catId' });
  const category = categoryDetails.find((c) => c.id === catId);

  if (!category) return <div>Category not found.</div>;

  const parent = category.parentId
    ? categoryDetails.find((c) => c.id === category.parentId)
    : null;

  const specs = [
    `ID: ${category.id}`,
    category.description,
    `Top-level: ${category.isParent ? 'Yes' : 'No'}`,
  ];

  return (
    <div
      className={cn(
        'bg-background text-foreground border rounded-lg overflow-hidden w-full p-4 md:p-6'
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-stretch">
        {/* Column 1: Details */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-foreground">
            {category.name}
          </h2>
          <ul className="space-y-2 text-sm list-none text-muted-foreground pt-2">
            {specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
            {parent && (
              <li>
                Parent:{' '}
                <Link
                  to="/dashboard/categories/$catId"
                  params={{ catId: parent.id }}
                  className="text-primary hover:underline"
                >
                  {parent.name}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Column 2: Actions */}
        <div className="flex flex-col h-full">
          <Button asChild className="mt-auto w-fit px-8">
            <Link
              to="/dashboard/categories/$catId/edit"
              params={{ catId: category.id }}
            >
              Edit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
