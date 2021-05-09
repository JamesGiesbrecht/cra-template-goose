import { useState } from 'react'
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Theme } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NavigationDrawer from 'components/layout/NavigationDrawer'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.mixins.drawer.visibleBreakpoint]: {
      display: 'none',
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        DrawerProps={{
          open: isDrawerOpen,
          onClose: () => setIsDrawerOpen(false),
        }}
      />
    </>
  )
}

export default Header
