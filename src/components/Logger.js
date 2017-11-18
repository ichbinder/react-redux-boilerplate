import React from 'react';

export default class Logger extends React.Component {
  componentDidUpdate() {
    this.ref.scrollTop = this.ref.scrollHeight;
  }

  render() {
    return (
      <div className={this.props.css} ref={( node ) => { this.ref = node; }}>
        {this.props.output}
      </div>
    );
  }
}
