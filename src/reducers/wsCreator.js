const initialState = {
  wsPaScan: null,
  wsMonitor: null
};

export default function wsCreator( state = initialState, action ) {
  if ( action.type === 'CREATE_WS_FOR_PA_SCAN' ) {
    return Object.assign( {}, state, { wsPaScan: action.sws } );
  } else if ( action.type === 'CREATE_WS_FOR_MONITOR' ) {
    return Object.assign( {}, state, { wsMonitor: action.mws } );
  }
  return state;
}
