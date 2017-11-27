import axios from 'axios';


export function paScanInput( paString ) {
  return { type: 'PA_INPUT', paString };
}

export function startPaScan( phyAddress, token ) {
  return ( dispatch ) => {
    axios.defaults.baseURL = 'http://playground.cm.htw-berlin.de:8020/';
    // axios.defaults.baseURL = 'http://localhost:8020/';
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.post( '/api/scanKnx', { phyAddress } )
      .then( ( response ) => {
        console.log( 'testtest:', response );
        dispatch( { type: 'START_PA_SCAN', psStartScanResolve: response.data } );
      } )
      .catch( ( error ) => {
        console.log( error );
        dispatch( { type: 'START_PA_SCAN', psStartScanResolve: 'error' } );
      } );
  };
}

export function createWsForPaScan( token ) {
  return ( dispatch ) => {
    // öffnet ein Websocket zum Backend um so die erscanten ergebnisse von PA
    // in die Webseite zu hollen
    /* eslint no-undef: "error" */
    /* eslint-env browser */
    const scanWs = new WebSocket( `ws://${token}@playground.cm.htw-berlin.de:8020/api/getScanResoult`, token );
    // const scanWs = new WebSocket( `ws://${token}@localhost:8020/api/getScanResoult`, token );
    // const scanWs = new WebSocket( 'ws://localhost:8020/api/getScanResoult' );
    scanWs.onopen = () => {
      scanWs.send( 'Connectet' ); // Send the message 'Ping' to the server
      dispatch( { type: 'CREATE_WS_FOR_PA_SCAN', sws: scanWs } );
    };
  };
}

export function createWsForMonitor( token ) {
  return ( dispatch ) => {
    /* eslint no-undef: "error" */
    /* eslint-env browser */
    // die URL zum WebSocket. Er dient zum stream für den BusMonitor.
    const monitorWs = new WebSocket( `ws://${token}@playground.cm.htw-berlin.de:8020/api/busMonitor`, token );
    // const monitorWs = new WebSocket( `ws://${token}@localhost:8020/api/busMonitor`, token );
    monitorWs.onopen = () => {
      monitorWs.send( 'Connectet' ); // Send the message 'Ping' to the server
      dispatch( { type: 'CREATE_WS_FOR_MONITOR', mws: monitorWs } );
    };
  };
}

export function updatePaScanLog( newLog ) {
  return { type: 'UPDATE_PA_SCAN_LOG', newLog };
}

export function updateBusMonitorLog( newBusLog ) {
  return { type: 'UPDATE_MONITOR_LOG', newBusLog };
}

export function monitoringSwitchOnOff( onOff ) {
  return { type: 'MONITORING_ON_OFF', onOff };
}

export function filterSysGASwitchOnOff( onOff ) {
  return { type: 'FILTER_SYS_GA_ON_OFF', onOff };
}

export function getAccessToken( secret ) {
  return ( dispatch ) => {
    axios.defaults.baseURL = 'http://playground.cm.htw-berlin.de:8020/';
    // axios.defaults.baseURL = 'http://localhost:8020/';
    axios.post( '/web/login', { pw: `${encodeURIComponent( secret )}` } )
      .then( ( response ) => {
        console.log( 'testtest:', response );
        dispatch( { type: 'GET_TOKEN', token: response.data.token } );
      } )
      .catch( ( error ) => {
        console.log( error );
        dispatch( { type: 'GET_TOKEN', token: 'error' } );
      } );
  };
}
