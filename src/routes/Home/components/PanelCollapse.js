import React, { Component } from 'react'
import { Collapse, SplitButton, MenuItem } from 'react-bootstrap'

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
                    <h4 className='panel-title'>This is an ad</h4>
                    <SplitButton bsStyle={'primary'} title={'test'} onClick={() => this.setState({open: !this.state.open})}>
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </SplitButton>
                </div>
                <Collapse in={this.state.open}>
                    <div>
                        <div className='panel-body'>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}
