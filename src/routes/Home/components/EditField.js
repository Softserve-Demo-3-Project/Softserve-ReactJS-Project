import React from 'react'

class EditField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ad: this.props.ad
    }
  }

  render() {

    return (
      <div className='container'>
        <form id="form-edit">
          <div className="input-group">
            <label>Contacts</label>
            <input type="text" className="form-control" value={this.state.ad.contacts} required />
          </div>

          <div className="input-group">
            <label>Type</label>
            <select className="form-control" required>
              <option value="1 Room">1 Room</option>
              <option value="2 Room">2 Room</option>
              <option value="3 Room">3 Room</option>
              <option value="House">House</option>
            </select>
          </div>

          <div className="input-group">
            <label>Price</label>
            <input type="number" className="form-control" value={this.state.ad.price} required />
          </div>

          <div className="input-group">
            <label>Description</label>
            <input type="text" className="form-control" value={this.state.ad.description} required />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input type="text" className="form-control" value={this.state.ad.address} required />
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
