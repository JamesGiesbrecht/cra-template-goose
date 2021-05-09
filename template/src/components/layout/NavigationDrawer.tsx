import { FC } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  DrawerProps as DrawerPropTypes,
  useTheme,
  useMediaQuery,
  makeStyles,
  Toolbar,
} from '@material-ui/core'
import { Inbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons'
import clsx from 'clsx'

interface Props {
  DrawerProps: DrawerPropTypes
}

const useStyles = makeStyles((theme) => ({
  drawerWidth: {
    width: theme.mixins.drawer.width,
    maxWidth: '90vw',
  },
  drawer: {
    flexShrink: 0,
  },
  paper: {
    boxSizing: 'border-box',
  },
}))

const NavigationDrawer: FC<Props> = ({ DrawerProps }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.mixins.drawer.visibleBreakpoint)

  return (
    <Drawer
      {...DrawerProps}
      variant={isDesktop ? 'permanent' : 'temporary'}
      classes={{
        root: clsx(classes.drawer, classes.drawerWidth),
        paper: clsx(classes.paper, classes.drawerWidth),
      }}>
      {isDesktop && <Toolbar />}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default NavigationDrawer
