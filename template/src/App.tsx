import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import getTheme from 'styles/theme'
import routes from 'constants/routes'
import { useColorScheme } from 'context/Theme'

const App = () => {
  const { colorScheme } = useColorScheme()
  const appRoutes = Object.keys(routes).map((routeName) => {
    const route = routes[routeName]
    const { Component, path, props } = route
    return <Route key={path} path={path} element={<Component />} {...props} />
  })

  const theme = getTheme(colorScheme)

  return (
    <BrowserRouter>
      {/* TODO v5: remove once migration to emotion is completed */}
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>{appRoutes}</Routes>
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  )
}

export default App
