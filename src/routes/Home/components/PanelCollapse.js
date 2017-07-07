import React, { Component } from 'react'
import { Collapse, SplitButton, MenuItem } from 'react-bootstrap'

export default class PanelCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title'>{this.props.ad.title}</h4>
          <SplitButton bsStyle={'primary'} title={'Show more'} onClick={() => this.setState({ open: !this.state.open })}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </SplitButton>
        </div>
        <Collapse in={this.state.open}>
          <div>
            <div className='panel-body'>
              {this.props.ad.description}
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
