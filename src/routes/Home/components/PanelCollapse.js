import React, { Component } from 'react'
import { Collapse, SplitButton, MenuItem } from 'react-bootstrap'

import CollapseBody from './CollapseBody'

export default class PanelCollapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title'>{this.props.ad.title}</h4>
          <SplitButton bsStyle={'primary'} title={this.state.open ? 'Show less' : 'Show more'} onClick={() => this.setState({ open: !this.state.open })}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </SplitButton>
        </div>
        <Collapse in={this.state.open}>
          <div>
            <div className='panel-body'>
              <CollapseBody ad={this.props.ad} />
            </div>
<<<<<<< HEAD
          );
    }
=======
          </div>
        </Collapse>
      </div >
    );
  }
>>>>>>> ddd59295a6c35b773d9e3c4286299236062ac13d
}
