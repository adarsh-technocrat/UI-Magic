export const listOfDynamicComponent = [
  {
    component: 'Top Bar',
    title: 'Stock Trading App',
    back: false,
    buttons: [],
  },
  {
    component: 'Section Title',
    title: 'Recent Reviews',
  },
  {
    component: 'Product Cards',
    products: [
      {
        imageDescription: 'Apple Inc.',
        productName: 'AAPL',
        data: '$135.00',
        label: '3.5%',
      },
      {
        imageDescription: 'Amazon.com',
        productName: 'AMZN',
        data: '$3125.00',
        label: '-2.1%',
      },
      {
        imageDescription: 'Tesla Inc.',
        productName: 'TSLA',
        data: '$695.23',
        label: '1.8%',
      },
    ],
  },
  {
    component: 'Bottom Navigation',
    elements: [
      {
        icon: '🏠',
        title: 'Home',
      },
      {
        icon: '📈',
        title: 'Stocks',
      },
      {
        icon: '📊',
        title: 'Charts',
      },
      {
        icon: '👤',
        title: 'Profile',
      },
    ],
  },
];
