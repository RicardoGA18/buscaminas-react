// React
import {BrowserRouter, Switch} from 'react-router-dom'
// Routes
import PublicRoute from './routes/public.routes'
import LogRoute from './routes/log.routes'
import PrivateRoute from './routes/private.routes'
// Observer
import Observer from './components/Observer'
// Context
import AppState from './context/App/AppState'
// Views
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import PlayView from './views/PlayView'
import OnePlayerView from './views/OnePlayerView'
import AccountView from './views/AccountView'

function App() {
  return (
    <>
      <AppState>
        <Observer>
          <BrowserRouter>
            <Switch>
              <PublicRoute exact path="/" component={HomeView}/>
              <LogRoute exact path="/iniciar-sesion" component={LoginView} />
              <LogRoute exact path="/registro" component={RegisterView} />
              <PrivateRoute exact path="/jugar" component={PlayView} />
              <PrivateRoute exact path="/jugar/un-jugador" component={OnePlayerView} />
              <PrivateRoute exact path="/perfil" component={AccountView} />
            </Switch>
          </BrowserRouter>
        </Observer>
      </AppState>
    </>
  );
}

export default App;
