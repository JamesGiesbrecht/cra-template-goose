import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material'
import About from 'components/pages/About'
import Home from 'components/pages/Home'
import PageNotFound from 'components/pages/PageNotFound'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    nav: {
      label: 'Home',
      icon: HomeIcon,
    },
  },
  {
    path: '/about',
    component: About,
    nav: {
      label: 'About',
      icon: InfoIcon,
    },
  },
  // 404 route, must be last
  {
    path: '*',
    component: PageNotFound
  }
]
