import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Header'
import Home from './Component/Home'
import PageNotFound from './PageNotFound'
import Admin from './Component/admin/Admin'
import Article from './Article'
import Group from './Group';
function App(props) {
  const pathname = window.location.pathname
  const pathnamee = pathname.substring(0,6)
  var component = null;
  if (pathnamee != "/admin") {
    component = <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/admin" component={Admin}></Route>
        <Route exact={true} path="/" component={Home}></Route>
        <Route path="/article/:id" component={Article}></Route>
        <Route path="/group/:group" component={Group}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  } else {
    component = <Admin/>
  }
  return (
    <div>
      {component}
    </div>
  );
}

export default App;
