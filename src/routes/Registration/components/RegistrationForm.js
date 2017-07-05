import React from 'react';
import reactCustomValidation from '.../node-modules/reactCustomValidation';

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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

}

onChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

onSubmit(event) {
  event.preventDefault();
  console.log(this.state);
}

render() {
  return (
    <form onSubmit={this.onSubmit}>

      <h1>Registration</h1>

      // Name
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

      // Age
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

      // E-mail
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

      // Username
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

      // Password
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

      // Repeat Password
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

      // Submit Button
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