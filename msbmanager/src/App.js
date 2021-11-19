import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from "./services/Firebase"
import Login from './views/Login'
import Home from './views/Home'
import Obras from './views/Obras'
import ObrasLista from './views/ObrasLista'
import Menu from './components/Menu'

function App() {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <>
          <Menu />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{pathname:"/", state: {from: props.location}}} />
      )
      }
    />
  }
  
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/obras" component={Obras}/>
          <PrivateRoute path="/obraslista" component={ObrasLista}/>
          <Route path="*" component={Login}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
