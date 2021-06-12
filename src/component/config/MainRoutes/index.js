import {BrowserRouter as Router, Route,Switch, } from 'react-router-dom'
import Home from '../../pages/Home/index'
import Store from '../../pages/Store/index'
import Map from '../../pages/Map/'

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path='/map' component={Map} />
        <Route path='/store/:id' component={Store} />
        <Route path='/home' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default Routers;
