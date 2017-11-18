import React, { Component } from 'react';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import {
  paScanInput,
  startPaScan,
  createWsForPaScan,
  updatePaScanLog
} from '../actions/index';
import Logger from './Logger';
import '../styles/ScanKNX.css';


class ScanKNX extends Component {
  constructor( props ) {
    super( props );
    props.createWsForPaScan();
  }

  componentWillUnmount() {
    this.props.ws.close();
  }

  render() {
    if ( this.props.ws !== null ) {
      console.log( this.props.paScan.paScanLog );
      console.log( this.props.ws );
      this.props.ws.onmessage = ( value ) => {
        this.props.updatePaScanLog( `${this.props.paScan.paScanLog}\n ${value.data}` );
      };
    }
    return (
      <div className="ScanKNX">
        <h2>KNX-Bus Scannen</h2>
        <div className="ScanKNX-menu">
          <div>
                Bitte geben Sie eine oder mehrere phykalische Adresse ein:
          </div>
          <Input
            placeholder="z.B. 1.1.1 1.1.2 1.1.3-1.1.10"
            inputProps={{
                  'aria-label': 'Description',
                }}
            className="ScanKNX-input"
            onChange={( event ) => { this.props.paScanInput( event.target.value ); }}
            value={this.props.phyAddress}
          />
          <Button
            raised
            color="primary"
            onClick={() => { this.props.startPaScan( this.props.phyAddress ); }}
          >
            Start Scan
          </Button>
          <Logger css="ScanKNX-logger" output={this.props.paScan.paScanLog} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ( {
  phyAddress: state.paScan.phyAddress,
  paScan: state.paScan,
  ws: state.ws.wsPaScan
} );

const mapDispatchToProps = {
  paScanInput,
  startPaScan,
  createWsForPaScan,
  updatePaScanLog,
};

const ScanKNXContainer = connect( mapStateToProps, mapDispatchToProps )( ScanKNX );

export default ScanKNXContainer;
