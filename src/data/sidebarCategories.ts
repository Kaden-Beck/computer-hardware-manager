const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Browse Inventory',
      url: '#',
      items: [
        {
          title: 'Browse All',
          url: '/browse',
        },
        {
          title: 'Browse by Category',
          url: '/browse/category?cat=default',
        },
        {
          title: 'Browse by Manufacturer',
          url: '/browse/manufacturer?man=default',
        },
      ],
    },
    {
      title: 'Manage Inventory',
      url: '#',
      items: [
        { title: 'Products', url: '/manageProducts' },
        { title: 'Categories', url: '/manageCategories' },
        { title: 'Manufacturers', url: '/manageManufacturers' },
      ],
    },
    {
      title: 'Manage Account',
      url: '#',
      items: [{ title: 'User Management', url: '/manageUsers' }],
    },
  ],
};

export { data };
