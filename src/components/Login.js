import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import {
  getAccessToken
} from '../actions/index';
import '../styles/Login.css';

class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = { password: '' };
    this._handlePasswordChange = this._handlePasswordChange.bind( this );
  }

  _handlePasswordChange( event ) {
    this.setState( { password: event.target.value } );
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-form">
          <h2>Login</h2>
          {this.props.token}
          <form>
            <Input
              type="password"
              placeholder="Passwort"
              inputProps={{
                    'aria-label': 'Description',
                  }}
              className="ScanKNX-input"
              onChange={this._handlePasswordChange}
              value={this.state.password}
            />
            <Button
              raised
              color="primary"
              onClick={() => { this.props.getToken( this.state.password ); }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ( {
  token: state.auth.token
} );

const mapDispatchToProps = {
  getToken: getAccessToken
};

const LoginContainer = connect( mapStateToProps, mapDispatchToProps )( Login );

export default LoginContainer;
