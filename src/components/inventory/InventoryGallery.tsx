import type React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ProductCard from './ProductCard';
import { productDetails } from '@/data/stub/productData';
import { categoryDetails } from '@/data/stub/categoryData';
import { manufacturerDetails } from '@/data/stub/manufacturerData';

// Need to make this dynamic or an option
const PAGE_SIZE = 12;

export function InventoryGallery(): React.JSX.Element {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');
  const [stockStatus, setStockStatus] = useState<
    'all' | 'instock' | 'outofstock'
  >('all');

  // Get unique categories and manufacturers from products
  const uniqueCategories = Array.from(
    new Set(productDetails.map((p) => p.categoryId))
  )
    .map((catId) => categoryDetails.find((c) => c.id === catId))
    .filter((cat) => cat !== undefined)
    .sort((a, b) => a!.name.localeCompare(b!.name));

  const uniqueManufacturers = Array.from(
    new Set(productDetails.map((p) => p.manufacturerId))
  )
    .map((mfgId) => manufacturerDetails.find((m) => m.id === mfgId))
    .filter((mfg) => mfg !== undefined)
    .sort((a, b) => a!.name.localeCompare(b!.name));

  const filtered = productDetails.filter((product) => {
    // Text search filter
    const matchesSearch =
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.sku.toLowerCase().includes(filter.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategory === 'all' || product.categoryId === selectedCategory;

    // Manufacturer filter
    const matchesManufacturer =
      selectedManufacturer === 'all' ||
      product.manufacturerId === selectedManufacturer;

    // Stock status filter
    const matchesStock =
      stockStatus === 'all' ||
      (stockStatus === 'instock' && product.quantity > 0) ||
      (stockStatus === 'outofstock' && product.quantity === 0);

    return (
      matchesSearch && matchesCategory && matchesManufacturer && matchesStock
    );
  });

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(0, pageCount - 1));
  const paged = filtered.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFilter(e.target.value);
    setPage(0);
  }

  function handleCategoryChange(value: string): void {
    setSelectedCategory(value);
    setPage(0);
  }

  function handleManufacturerChange(value: string): void {
    setSelectedManufacturer(value);
    setPage(0);
  }

  function handleStockStatusChange(value: string): void {
    setStockStatus(value as 'all' | 'instock' | 'outofstock');
    setPage(0);
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search products..."
          value={filter}
          onChange={handleFilterChange}
          className="max-w-sm flex-shrink-0"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category!.id} value={category!.id}>
                  {category!.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedManufacturer}
            onValueChange={handleManufacturerChange}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Manufacturer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Manufacturers</SelectItem>
              {uniqueManufacturers.map((manufacturer) => (
                <SelectItem key={manufacturer!.id} value={manufacturer!.id}>
                  {manufacturer!.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={stockStatus} onValueChange={handleStockStatusChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Stock Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stock</SelectItem>
              <SelectItem value="instock">In Stock</SelectItem>
              <SelectItem value="outofstock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {paged.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {paged.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-muted-foreground">
            No products found.
          </p>
        )}
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((page) => Math.max(0, page - 1))}
              aria-disabled={currentPage === 0}
              className={cn(
                currentPage === 0 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 text-sm">
              Page {pageCount === 0 ? 0 : currentPage + 1} of {pageCount}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setPage((page) => Math.min(pageCount - 1, page + 1))
              }
              aria-disabled={currentPage >= pageCount - 1}
              className={cn(
                currentPage >= pageCount - 1 && 'pointer-events-none opacity-50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
