import React from 'react';
import validator from 'validator';
import {validated} from 'react-custom-validation';

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
        rePassword: ''
      }
    };
  }

  onChange = (propName, value) => {
    this.setState({
      user: Object.assign({}, this.state.user, {[propName]: value})
    });
  }

  onSubmit = () => {
    this.props.registerUser(Object.assign({}, this.state.user));
  }

  render() {
    return (<Form fields={this.state.user} onChange={this.onChange} onValid={this.onSubmit} // eslint-disable-line no-alert
  onInvalid={() => console.log('Error!')} // eslint-disable-line no-alert
/>);
  }
}

{/* Warning messages */}
const isName = (name) => validator.isName(name) ? null : 'This is not a valid name.'
const isAge = (age) => validator.isAge(age) ? null : 'This is not a valid age.'
const isEmail = (email) => validator.isEmail(email) ? null : 'This is not a valid email.'
const isUsername = (username) => validator.isUsername(username) ? null : 'This is not a valid username.'
const isPassword = (password) => validator.isPassword(password) ? null : 'This is not a valid password.'
const minLength = (password, length) => password.length >= length ? null : 'Password is too short.'
const isRePassword = (rePassword) => validator.isRePassword(rePassword) ? null : 'This is not a valid email.'
const areSame = (password, rePassword) => password === rePassword ? null : 'Passwords do not match.'

function validationConfig(props) {
  const {
    name,
    age,
    email,
    username,
    password,
    rePassword
  } = props.fields

  return {
    fields: [
      'name',
      'age',
      'email',
      'username',
      'password',
      'rePassword'
    ],

    validations: {
      name: [
        [isName, name]
      ],
      age: [
        [isAge, age]
      ],
      email: [
        [isEmail, email]
      ],
      username: [
        [isUsername, username]
      ],
      password: [[minLength, password, 6]],
      rePassword: {
        rules: [[areSame, password, rePassword]],
        fields: [
          ['password', 'rePassword'],
          ['rePassword']
        ]
      }
    }
  }
  
}

class Form extends React.Component {
  render() {
    const {
      fields,
      onChange,
      onValid,
      onInvalid,
      $field,
      $validation
    } = this.props

    return (
      <form>

        <h1>Registration</h1>

        {/* Name */}
        <div className="form-group">
          <input
            value={fields.name}
            {...$field('name', (e) => onChange('name', e.target.value))}
            onChange={onChange}
            type="text"
            name="name"
            id="name"
            placeholder="* Name"
            className="form-control"/>
            {$validation.name.show && <span>{$validation.name.error.reason}</span>}
        </div>

        {/* Age */}
        <div className="form-group">
          <input
            value={fields.age}
            {...$field('age', (e) => onChange('age', e.target.value))}
            onChange={onChange}
            type="number"
            name="age"
            id="age"
            placeholder="* Age"
            className="form-control"/>
            {$validation.age.show && <span>{$validation.age.error.reason}</span>}
        </div>

        {/* E-mail */}
        <div className="form-group">
          <input
            value={fields.email}
            {...$field('email', (e) => onChange('email', e.target.value))}
            type="email"
            name="email"
            id="email"
            placeholder="* E-mail"
            className="form-control"/>
            {$validation.email.show && <span>{$validation.email.error.reason}</span>}
        </div>

        {/* Username */}
        <div className="form-group">
          <input
            value={fields.username}
            {...$field('username', (e) => onChange('username', e.target.value))}
            onChange={onChange}
            type="text"
            name="username"
            id="username"
            placeholder="* Username"
            className="form-control"/>
            {$validation.username.show && <span>{$validation.username.error.reason}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            value={fields.password}
            {...$field('password', (e) => onChange('password', e.target.value))}
            onChange={onChange}
            type="password"
            name="password"
            id="password"
            placeholder="* Password"
            className="form-control"/>
            {$validation.password.show && <span>{$validation.password.error.reason}</span>}
        </div>

        {/* Password repeat */}
        <div className="form-group">
          <input
            value={fields.rePassword}
            {...$field('rePassword', (e) => onChange('rePassword', e.target.value))}
            onChange={onChange}
            type="password"
            name="rePassword"
            id="rePassword"
            placeholder="* Repeat Password"
            className="form-control"/>
            {$validation.rePassword.show && <span>{$validation.rePassword.error.reason}</span>}
        </div>

        {/* Submit button */}
        <div className="form-group">
          <button
            onClick={(e) => {
            e.preventDefault()
            this.props.$submit(onValid, onInvalid)
          }}>Create account</button>
        </div>

      </form>
    );
  }
}

Form = validated(validationConfig)(Form)

export default RegistrationForm;
