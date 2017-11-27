import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Routen from './components/Routen';
import App from './components/App';


import './styles/index.css';


const store = createStore( reducers, applyMiddleware( thunkMiddleware ) );
const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <div>
          <App />
          <Routen />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  /* eslint no-undef: "error" */
  /* eslint-env browser */
  document.getElementById( 'root' )
);
registerServiceWorker();
