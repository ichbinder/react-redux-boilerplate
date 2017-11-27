import { combineReducers } from 'redux';
import paScan from './paScan';
import wsCreator from './wsCreator';
import busMonitor from './busMonitor';
import auth from './auth';

const reduce = combineReducers( {
  paScan,
  ws: wsCreator,
  busMonitor,
  auth
} );

export default reduce;
