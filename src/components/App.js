import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import '../styles/App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const loggedIn = this.props.token;
    return (
      <div className="App">
        <div className="App-header">
          <h1>KNX Analyse</h1>
        </div>
        {
          loggedIn ? (
            <Navigation />
          ) : (
            null
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ( {
  token: state.auth.token
} );

const mapDispatchToProps = {
};

const AppContainer = connect( mapStateToProps, mapDispatchToProps )( App );

export default AppContainer;
