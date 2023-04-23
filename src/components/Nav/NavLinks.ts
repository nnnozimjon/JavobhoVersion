import INav from './interface'

const NavLinks: INav.nav[] = [
  {
    icon: 'home',
    label: 'Home',
    activeIcon: 'homeFilled',
    path: '/',
  },
  {
    icon: 'explore',
    label: 'Explore',
    activeIcon: 'exploreFilled',
    path: '/explore',
  },
  {
    icon: 'note',
    label: 'Notifications',
    activeIcon: 'noteFilled',
    path: '/notifications',
  },
  {
    icon: 'message',
    label: 'Messages',
    activeIcon: 'messageFilled',
    path: '/messages',
  },
  {
    icon: 'bookmarks',
    label: 'Bookmarks',
    activeIcon: 'bookmarksFilled',
    path: '/bookmarks',
  },
  // {
  //   icon: 'lists',
  //   label: 'Lists',
  //   activeIcon: 'listsFilled',
  //   path: '/lists',
  // },
  // {
  //   icon: 'profile',
  //   label: 'Profile',
  //   activeIcon: 'profileFilled',
  //   path: `/profile`,
  // },
]

export default NavLinks
