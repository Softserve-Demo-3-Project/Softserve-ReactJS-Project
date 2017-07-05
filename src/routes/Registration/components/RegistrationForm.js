import React from 'react';
import { validated } from 'react-custom-validation';
import validator from 'validator';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        age: '',
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
      }
    };
  }

  onChange = (propName, value) => {
    this.setState({
      user: Object.assign({}, this.state.user, { [propName]: value })
    });
  }

  onSubmit = () => {
    this.props.registerUser(Object.assign({}, this.state.user));
  }

  render() {
    return (
      <Form
        fields={this.state.user}
        onChange={this.onChange}
        onValid={this.onSubmit} // eslint-disable-line no-alert
        onInvalid={() => console.log('Error!')} // eslint-disable-line no-alert
      />
    );
  }
}

const isEmail = (email) =>
  validator.isEmail(email) ? null : 'This is not a valid email.'

function validationConfig(props) {
  const { email } = props.fields

  return {
    fields: ['email'],

    validations: {
      email: [
        [isEmail, email]
      ]
    },
  }
}

class Form extends React.Component {
  render() {
    const { fields, onChange, onValid, onInvalid, $field, $validation } = this.props

    return (
      <form>

        <h1>Registration</h1>

        <div className="form-group">
          <label className="control-label">Name</label>
          <input
            value={fields.name}
            onChange={onChange}
            type="text"
            name="name"
            id="name"
            placeholder=" * Name"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Age</label>
          <input
            value={fields.age}
            onChange={onChange}
            type="number"
            name="age"
            id="age"
            placeholder=" * Age"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">E-mail</label>
          <input
            value={fields.email}
            {...$field('email', (e) => onChange('email', e.target.value))}
            type="email"
            name="email"
            id="email"
            placeholder=" * E-mail"
            className="form-control" />
            {$validation.email.show && <span>{$validation.email.error.reason}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={fields.username}
            onChange={onChange}
            type="text"
            name="username"
            id="username"
            placeholder=" * Username"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={fields.password}
            onChange={onChange}
            type="password"
            name="password"
            id="password"
            placeholder=" * Password"
            className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Repeat Password</label>
          <input
            value={fields.repeatPassword}
            onChange={onChange}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder=" * Repeat Password"
            className="form-control" />
        </div>

        <div className="form-group">
          <button onClick={(e) => {
            e.preventDefault()
            this.props.$submit(onValid, onInvalid)
          }}>Sign up</button>
        </div>

      </form>
    );
  }
}

Form = validated(validationConfig)(Form)

export default RegistrationForm;
