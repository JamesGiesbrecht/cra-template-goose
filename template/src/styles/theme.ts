import { createMuiTheme } from '@material-ui/core/styles'
import { red, pink, teal } from '@material-ui/core/colors'

const white = '#FFF'

const defaultTheme = createMuiTheme()

// A custom theme for this app
const theme = createMuiTheme({
  mixins: {
    header: {
      height: 50,
    },
    drawer: {
      width: 250,
      hidden: { mdDown: true },
      hiddenBreakpoint: defaultTheme.breakpoints.down('md'),
      visibleBreakpoint: defaultTheme.breakpoints.up('md'),
    },
  },
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: pink[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: white,
    },
  },
})

export default theme
