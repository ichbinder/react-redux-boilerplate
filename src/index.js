import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import GroupAddressEditor from './components/GroupAddressEditor';
import ScanKNX from './components/ScanKNX';
import BusMonitor from './components/BusMonitor';

import './styles/index.css';


const store = createStore( reducers, applyMiddleware( thunkMiddleware ) );
const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <div>
          <App />
          <Route exact path="/" component={ScanKNX} />
          <Route path="/GroupAddressEditor" component={GroupAddressEditor} />
          <Route path="/BusMonitor" component={BusMonitor} />
        </div>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  /* eslint no-undef: "error" */
  /* eslint-env browser */
  document.getElementById( 'root' )
);
registerServiceWorker();
