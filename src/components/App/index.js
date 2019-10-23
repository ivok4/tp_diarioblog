import React from 'react';
import '../../index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Search from '../../pages/Search';
import Menu from '../Menu'

const App = () => {
  return(
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/category/:slug" component={Category}></Route>
        <Route path="/Search/:slug" component={Search}></Route>
      </Switch>
    </Router>
  )

}

export default App