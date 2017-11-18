import { combineReducers } from 'redux';
import paScan from './paScan';
import wsCreator from './wsCreator';
import busMonitor from './busMonitor';

const reduce = combineReducers( {
  paScan,
  ws: wsCreator,
  busMonitor
} );

export default reduce;
