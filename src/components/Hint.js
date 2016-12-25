import React, { Component } from 'react';
import Popover from 'material-ui/Popover';

const styles = {
  hint: {
    padding: 16,
  },
};

export default class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div
        style={{ display: 'inline' }}
        onClick={() => this.toggle()}
        ref="root"
      >
        <Popover
          style={styles.hint}
          open={this.state.open}
          anchorEl={this.refs.root}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          onRequestClose={() => this.toggle()}
          canAutoPosition
        >
          {this.props.hint}
        </Popover>
        {this.props.children}
      </div>
    );
  }
}
