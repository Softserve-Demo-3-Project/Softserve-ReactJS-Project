import React from 'react';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: ''
    }

    this.onChange = this
      .onChange
      .bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>

        <h1>Registration</h1>

        <div className="form-group">
          <label className="control-label">Name</label>
          <input
            value={this.state.name}
            onChange={this.onChange}
            type="text"
            name="name"
            id="name"
            placeholder=" * Name"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Age</label>
          <input
            value={this.state.age}
            onChange={this.onChange}
            type="number"
            name="age"
            id="age"
            placeholder=" * Age"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">E-mail</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="email"
            name="email"
            id="email"
            placeholder=" * E-mail"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            id="username"
            placeholder=" * Username"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            id="password"
            placeholder=" * Password"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Repeat Password</label>
          <input
            value={this.state.repeatPassword}
            onChange={this.onChange}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder=" * Repeat Password"
            className="form-control"/>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Create account
          </button>
        </div>

      </form>
    );
  }
}

export default RegistrationForm;