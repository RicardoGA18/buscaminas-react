// React
import {BrowserRouter, Switch} from 'react-router-dom'
// Routes
import PublicRoute from './routes/public.routes'
// Observer
import Observer from './components/Observer'
// Context
import AppState from './context/App/AppState'
// Views
import HomeView from './views/HomeView';

function App() {
  return (
    <>
      <AppState>
        <Observer>
          <BrowserRouter>
            <Switch>
              <PublicRoute exact path="/" component={HomeView}/>
            </Switch>
          </BrowserRouter>
        </Observer>
      </AppState>
    </>
  );
}

export default App;
