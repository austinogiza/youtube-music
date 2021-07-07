import React from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './container/Layout'

import Explore from './pages/Explore'
import Home from './pages/Home'
import Library from './pages/Library'
import Search from './pages/Search'


const App = () => {
  return (
    <React.Fragment>
<Router>

<Layout>

<Switch>

  <Route exact={true} component={Home} path='/'/>
  <Route exact={true} component={Explore} path='/explore'/>
  <Route exact={true} component={Search} path='/search/:query'/>
  <Route exact={true} component={Library} path='/library/playlists'/>
</Switch>
</Layout>
</Router>

 </React.Fragment>
  )
}

export default App







