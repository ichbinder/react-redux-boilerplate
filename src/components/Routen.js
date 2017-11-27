import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupAddressEditor from './GroupAddressEditor';
import ScanKNX from './ScanKNX';
import BusMonitor from './BusMonitor';
import Login from './Login';
// import '../styles/Routen.css';

class Routen extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const loggedIn = this.props.token;
    return (
      <HashRouter>
        <div>
          <Route
            exect
            path="/"
            render={() => ( <Redirect to="ScanKNX" /> )}
          />
          <Route
            path="/ScanKNX"
            render={() => (
              loggedIn ? (
                <ScanKNX />
              ) : (
                <Redirect to="Login" />
              )
            )}
          />
          <Route
            path="/GroupAddressEditor"
            render={() => (
              loggedIn ? (
                <GroupAddressEditor />
              ) : (
                <Redirect to="Login" />
              )
            )}
          />
          <Route
            path="/BusMonitor"
            render={() => (
              loggedIn ? (
                <BusMonitor />
              ) : (
                <Redirect to="Login" />
              )
            )}
          />
          <Route
            path="/Login"
            render={() => (
              loggedIn ? (
                <ScanKNX />
              ) : (
                <Login />
              )
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = state => ( {
  token: state.auth.token
} );

const mapDispatchToProps = {
};

const RoutenContainer = connect( mapStateToProps, mapDispatchToProps )( Routen );

export default RoutenContainer;
