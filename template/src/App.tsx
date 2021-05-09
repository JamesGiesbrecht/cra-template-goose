import { StyledEngineProvider, ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import PageNotFound from 'components/pages/PageNotFound'
import About from 'components/pages/About'
import Home from 'components/pages/Home'
import theme from 'styles/theme'

const App = () => (
  <BrowserRouter>
    {/* TODO v5: remove once migration to emotion is completed */}
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
)

export default App
