import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
