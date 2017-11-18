import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import { connect } from 'react-redux';
import {
  createWsForMonitor,
  updateBusMonitorLog,
  monitoringSwitchOnOff,
  filterSysGASwitchOnOff
} from '../actions/index';
import Logger from './Logger';
import '../styles/BusMonitor.css';

/**
  * Dies bildet die Webseite Bus-Monitor dort kann man den angeschlossenden
  * KNXBus beomachten, also die Telegramme die gesendet werden.
* */
class BusMonitor extends PureComponent {
  constructor( props ) {
    super( props );

    props.createWsForMonitor();

    this._handleMonOnOffChange = this._handleMonOnOffChange.bind( this );
  }

  componentWillMount() {
    this.props.monitoringSwitchOnOff( true );
  }

  componentWillUnmount() {
    this.props.monitoringSwitchOnOff( false );
    this.props.ws.close();
  }

  _handleMonOnOffChange() {
    if ( this.props.monitoringOnOff )
      this.props.monitoringSwitchOnOff( false );
    else
      this.props.monitoringSwitchOnOff( true );
  }

  render() {
    if ( this.props.ws !== null ) {
      this.props.ws.onmessage = ( value ) => {
        console.log( value.data );
        if ( this.props.monitoringOnOff ) {
          if ( this.props.sysGaHide ) {
            if ( value.data.search( /dest: 0\/*/i ) === -1 )
              this.props.updateBusMonitorLog( `${this.props.log}\n ${value.data}` );
          } else {
            this.props.updateBusMonitorLog( `${this.props.log}\n ${value.data}` );
          }
        }
      };
    }

    const buttonValue = { name: 'An' };
    if ( !this.props.monitoringOnOff ) {
      buttonValue.name = 'Aus';
    }
    return (
      <div className="BusMonitor">
        <h2>KNX-Bus Monitor</h2>
        <div className="BusMonitor-head">
          <p>System GA nicht anzeigen: </p>
          <Switch
            checked={this.props.sysGaHide}
            onChange={( event ) => { this.props.filterSysGASwitchOnOff( event.target.checked ); }}
            aria-label="checkedB"
          />
          <Button
            raised
            color="primary"
            onClick={this._handleMonOnOffChange}
          >
              Monitor {buttonValue.name}
          </Button>
        </div>
        <Logger css="BusMonitor-logger" output={this.props.log} />
      </div>
    );
  }
}

const mapStateToProps = state => ( {
  ws: state.ws.wsMonitor,
  log: state.busMonitor.monitorLog,
  monitoringOnOff: state.busMonitor.monitoringOnOff,
  sysGaHide: state.busMonitor.sysGaHide
} );

const mapDispatchToProps = {
  createWsForMonitor,
  updateBusMonitorLog,
  monitoringSwitchOnOff,
  filterSysGASwitchOnOff
};

const BusMonitorContainer = connect( mapStateToProps, mapDispatchToProps )( BusMonitor );

export default BusMonitorContainer;
