import type { Category } from '@/schema/Category';

export const categoryDetails: Category[] = [
  {
    id: 'cat00001',
    name: 'GPU',
    description:
      'Graphics processing units for rendering and compute workloads.',
    isParent: true,
  },
  {
    id: 'cat00002',
    name: 'CPU',
    description:
      'Central processing units, the primary compute component of a system.',
    isParent: true,
  },
  {
    id: 'cat00003',
    name: 'Motherboard',
    description: 'Main circuit boards that connect all components in a system.',
    isParent: true,
  },
  {
    id: 'cat00004',
    name: 'RAM',
    description: 'Random access memory modules for system memory.',
    isParent: true,
  },
  {
    id: 'cat00005',
    name: 'Storage',
    description: 'HDDs, SSDs, and NVMe drives for data storage.',
    isParent: true,
  },
  {
    id: 'cat00006',
    name: 'PSU',
    description:
      'Power supply units that provide regulated power to system components.',
    isParent: true,
  },
  {
    id: 'cat00007',
    name: 'Case',
    description: 'PC chassis and enclosures that house system components.',
    isParent: true,
  },
  {
    id: 'cat00008',
    name: 'Cooling',
    description: 'CPU coolers, case fans, and liquid cooling solutions.',
    isParent: true,
  },
];
