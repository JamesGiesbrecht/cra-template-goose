import About from 'components/pages/About'
import Home from 'components/pages/Home'
import { Home as HomeIcon, Info as InfoIcon } from '@material-ui/icons'

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
]
