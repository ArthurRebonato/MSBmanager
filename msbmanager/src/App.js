import React from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from "./services/Firebase"
import Login from './views/Login'
import Home from './views/Home'
import ObrasCadastro from './views/ObrasCadastro'
import ObrasLista from './views/ObrasLista'
import AllObras from './views/AllObras'
import Contato from './views/Contato'
import Recado from './views/Recado'
import Inicio from './views/Inicio'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <>
          <Banner />
          <Header />
          <Component {...props} />
          <Footer />
        </>
      ) : (
        <Redirect to={{pathname:"/", state: {from: props.location}}} />
      )
      }
    />
  }
  
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Inicio}/>
          <Route path="/login" component={Login}/>
          <Route path="/allobras" component={AllObras}/>
          <Route path="/contato" component={Contato}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/obrascadastro" component={ObrasCadastro}/>
          <PrivateRoute path="/obraslista" component={ObrasLista}/>
          <PrivateRoute path="/recados" component={Recado}/>
          <Route path="*" component={Inicio}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
