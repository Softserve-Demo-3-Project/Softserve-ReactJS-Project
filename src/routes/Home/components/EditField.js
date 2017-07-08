import React, { Component } from 'react'

class EditField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ad: this.props.ad
    }
  }

  handleChange = (event) => {
    let target = event.target
    this.setState({
      ad: Object.assign({}, this.state.ad, { [target.name]: target.value })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateAd(this.state.ad)
  }

  render() {
    return (
      <div className='container'>
        <form id="form-edit" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" onChange={this.handleChange} defaultValue={this.state.ad.title} required />
          </div>

          <div className="input-group">
            <label>Contacts</label>
            <input type="text" name="contacts" className="form-control" onChange={this.handleChange} defaultValue={this.state.ad.contacts} required />
          </div>

          <div className="input-group">
            <label>Type</label>
            <select className="form-control" name="type" onChange={this.handleChange} required>
              <option value="1 Room">1 Room</option>
              <option value="2 Room">2 Room</option>
              <option value="3 Room">3 Room</option>
              <option value="House">House</option>
            </select>
          </div>

          <div className="input-group">
            <label>Price</label>
            <input type="number" name="price" className="form-control" onChange={this.handleChange} defaultValue={this.state.ad.price} required />
          </div>

          <div className="input-group">
            <label>Description</label>
            <input type="text" name="description" className="form-control" onChange={this.handleChange} defaultValue={this.state.ad.description} required />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" onChange={this.handleChange} defaultValue={this.state.ad.address} required />
          </div>

          <br />

          <div className="input-group">
            <input type="submit" className="form-control btn btn-primary" value="Save" />
          </div>
        </form>
      </div>)
  }
}

export default EditField
