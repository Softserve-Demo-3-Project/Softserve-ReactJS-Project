import React, { Component } from 'react'
import { Collapse, SplitButton, MenuItem } from 'react-bootstrap'

import CollapseBody from './CollapseBody'
import EditField from './EditField'

export default class PanelCollapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      edit: false
    };
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title'>{this.props.ad.title}</h4>
          <SplitButton bsStyle={'primary'} id="split-btn" title={this.state.open ? 'Show less' : 'Show more'} onClick={() => this.setState({ open: !this.state.open })}>
            <MenuItem onClick={() => this.setState({ edit: !this.state.edit })}>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </SplitButton>
        </div>
        <Collapse in={this.state.open}>
          <div>
            <div className='panel-body'>
              {this.state.edit ? <EditField ad={this.props.ad} /> : <CollapseBody ad={this.props.ad} />}
            </div>
          </div>
        </Collapse>
      </div >
    );
  }
}
