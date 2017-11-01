import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './styles/index.css';
import App from './components/App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);
const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <div>
          <Route exact={true} path="/" component={App} />
        </div>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
