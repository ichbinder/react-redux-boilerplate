const initialState = {
  monitorLog: 'Start',
  monitoringOnOff: true,
  sysGaHide: false
};

export default function paScanInput( state = initialState, action ) {
  if ( action.type === 'UPDATE_MONITOR_LOG' ) {
    return Object.assign( {}, state, { monitorLog: action.newBusLog } );
  } else if ( action.type === 'MONITORING_ON_OFF' ) {
    return Object.assign( {}, state, { monitoringOnOff: action.onOff } );
  } else if ( action.type === 'FILTER_SYS_GA_ON_OFF' ) {
    return Object.assign( {}, state, { sysGaHide: action.onOff } );
  }
  return state;
}
