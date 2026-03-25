// Maps a categoryId to the product spec type used for form selection.
// Multiple category IDs can share the same spec type (e.g. all storage
// sub-categories use the Storage form).

export type ProductSpecType =
  | 'gpu'
  | 'cpu'
  | 'motherboard'
  | 'ram'
  | 'storage'
  | 'psu'
  | 'case'
  | 'cpuCooler';

const categoryToSpecType: Record<string, ProductSpecType> = {
  cat00001: 'gpu', // GPU
  cat00106: 'gpu', // Workstation GPU
  cat00002: 'cpu', // CPU
  cat00003: 'motherboard', // Motherboard
  cat00004: 'ram', // RAM
  cat00005: 'storage', // Storage
  cat00101: 'storage', // NVMe SSD
  cat00102: 'storage', // SATA SSD
  cat00103: 'storage', // HDD
  cat00006: 'psu', // PSU
  cat00007: 'case', // Case
  cat00008: 'cpuCooler', // Cooling
  cat00104: 'cpuCooler', // Air Cooling
  cat00105: 'cpuCooler', // AIO Liquid Cooling
};

export function getProductSpecType(
  categoryId: string
): ProductSpecType | undefined {
  return categoryToSpecType[categoryId];
}
