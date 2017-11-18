import React from 'react';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';


const Navigation = () => (
  <div className="Navigation">
    <Button
      raised
      color="primary"
      component={NavLink}
      to="/"
      className="Navigation-button"
    >
        Scan KNX
    </Button>
    <Button
      raised
      color="primary"
      component={NavLink}
      to="/GroupAddressEditor"
      className="Navigation-button"
    >
        Group Editor
    </Button>
    <Button
      raised
      color="primary"
      component={NavLink}
      to="/BusMonitor"
      className="Navigation-button"
    >
        Bus Monitor
    </Button>
  </div>
);

export default Navigation;
