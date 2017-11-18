const initialState = {
  phyAddress: '',
  paStartScanResolve: '',
  paScanLog: 'Start'
};

export default function paScanInput( state = initialState, action ) {
  if ( action.type === 'PA_INPUT' ) {
    return Object.assign( {}, state, { phyAddress: action.paString } );
  } else if ( action.type === 'UPDATE_PA_SCAN_LOG' ) {
    return Object.assign( {}, state, { paScanLog: action.newLog } );
  } else if ( action.type === 'START_PA_SCAN' ) {
    return Object.assign( {}, state, { paStartScanResolve: action.psStartScanResolve } );
  }
  return state;
}
