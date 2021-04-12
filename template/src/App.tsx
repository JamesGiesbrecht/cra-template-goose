import PageNotFound from 'components/pages/PageNotFound'
import About from 'components/pages/About'
import Home from 'components/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
)

export default App
