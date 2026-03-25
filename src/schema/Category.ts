export type Category = {
  id: string;
  name: string;
  description: string;
  isParent: boolean;
  parentId?: string; // references another Category id
  miscDetails?: string; // free-text field for custom parent categories
};
