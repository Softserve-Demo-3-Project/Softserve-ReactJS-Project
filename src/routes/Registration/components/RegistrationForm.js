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

  fieldChange = (field, value) => {
    this.setState(update(this.state, {fields: {[field]: {$set: value}}}))
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
    return (<Form 
      fields={this.state.user} 
      onChange={this.onChange} 
      onValid={this.onSubmit} // eslint-disable-line no-alert
      onInvalid={() => console.log('Error!')} // eslint-disable-line no-alert
    />);
  }
}

{/* Warning messages */}
const minLengthName = (name, length) => name.length >= length ? null : 'Name must contain at least 3 letters'
const onlyLetters =(name) => onlyLetters(name) ? Number : 'Only Letters are allowed'
const minAge = (age, min) => age.min < 18 ? null : 'You have to be at least 18 yeasr old'
const isEmail = (email) => validator.isEmail(email) ? null : 'This is not a valid email'
const minLengthUsr = (username, length) => username.length >= length ? null : 'Username must contain at least 5 charachters'
const minLength = (password, length) => password.length >= length ? null : 'Password must be at least 6 charachters long'
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
        [minLengthName, name, 3], 
        [onlyLetters, name]
      ],
      age: [[minAge, age, 18]],
      username: [[minLengthUsr, username, 5]],
      email: [
        [isEmail, email]
      ],
      password: [[minLength, password, 6]],
      rePassword: {
        rules: [[areSame, password, rePassword]],
        fields: [
          ['password', 'rePassword'],
          ['rePassword']
        ]
      }
    },
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
            {
              $validation.name.show && <span>{$validation.name.error.reason}</span>
            }            
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
            {
              $validation.age.show && <span>{$validation.age.error.reason}</span>
            }
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
            {
              $validation.username.show && <span>{$validation.username.error.reason}</span>
            }
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

        <div>
            <p>
                Fields with * are required!
            </p>
        </div> 

        {/* Submit button */}
        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => {
            e.preventDefault()
            this.props.$submit(onValid, onInvalid)
          }}>CREATE ACCOUNT</button>
        </div>



      </form>
    );
  }
}

Form = validated(validationConfig)(Form)

export default RegistrationForm;
