import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RandomComponent from './RandomComponent'
import Component26 from './Component26'
import Component297 from './Component297'
import Component617 from './Component617'
import Component647 from './Component647'
import './main.css'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={RandomComponent}></Route>
        <Route exact path='/26' component={Component26}></Route>
        <Route exact path='/297' component={Component297}></Route>
        <Route exact path='/617' component={Component617}></Route>
        <Route exact path='/647' component={Component647}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
