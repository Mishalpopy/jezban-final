const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Home',
    link: '/',
    submenus: [
      { title: 'Home Style 1', link: '/' },
      { title: 'Home Style 2', link: '/home-2' },
      { title: 'Home Style 3', link: '/home-3' },
    ]
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    hasDropdown: true,
    title: 'Services',
      submenus: [
      { title: 'Mosquito Control', link: '/mosquito-control' },
      { title: 'Cockroach Control', link: '/cockroach-control' },
      { title: 'Ants Control', link: '/ants-control' },
      { title: 'Bedbugs Control', link: '/bug-control' },
      { title: 'TERMITE CONTROL', link: '/ter-control' },
      { title: 'RODENT CONTROL ', link: '/ro-control' },
      { title: 'SNAKE CONTROL', link: '/sna-control' },
      { title: 'TYPES OF FLIES & CONTROL', link: '/type-control' },

    ]
  },
  {
    id: 4,
    hasDropdown: false,
    title: 'Cleaning Services',
    link: '/cleaning-service',
    submenus: [
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Portfolio Details', link: '/portfolio-details' },
    ]
  },
  {
    id: 5,
    hasDropdown: false,
    title: 'Contact',
    link: '/contact',
    submenus: [
      { title: 'Blog', link: '/blog' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
]

export default menu_data;
