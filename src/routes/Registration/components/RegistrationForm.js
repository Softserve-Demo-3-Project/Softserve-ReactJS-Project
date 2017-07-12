import React from 'react';
import {validated} from 'react-custom-validation';
import './regFormStyles.scss'
import {
  minLengthName,
  noNum,
  minAge,
  isEmail,
  minLengthUsr,
  minLength,
  areSame,
  isUserTaken
} from '../../../utils/inputValidations.js'

import Input from "../../../components/form/Input";
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
    return (
      <Form
        fields={this.state.user}
        onChange={this.onChange}
        onValid={this.onSubmit}
        onKeyPress={this.isUserTaken}
      />);
  }
}

{/* --- Validations --- */}
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
        [
          noNum, name
        ],
        [minLengthName, name, 3]
      ],
      age: [
        [minAge, age, 18]
      ],
      username: [
        [isUserTaken],
        [minLengthUsr, username, 5]
      ],
      email: [
        [isEmail, email]
      ],
      password: [
        [minLength, password, 6]
      ],
      rePassword: {
        rules: [
          [areSame, password, rePassword]
        ],
        fields: [
          [
            'password', 'rePassword'
          ],
          ['rePassword']
        ]
      }
    }
  }
}

{/* --- Registration Form --- */}
class Form extends React.Component {
  render() {
    const {
      fields,
      onChange,
      onValid,
      onInvalid,
      $field,
      $validation
    } = this.props;

    const properties = {
      $field,
      $validation,
      onChange
    };

    return (
      <form className="regForm">

        <h1>Registration</h1>

        {/* --- Name --- */}
        <Input
          value={fields.name}
          type={"text"}
          name="name"
          placeholder="* Name"
          {...properties}/>

        {/* --- Age --- */}
        <Input
          value={fields.age}
          type={"number"}
          name="age"
          min="18"
          placeholder="* Age"
          {...properties}/>

        {/* --- E-mail --- */}
        <Input
          value={fields.email}
          type={"email"}
          name="email"
          placeholder="* Email"
          {...properties}/>

        {/* --- Username --- */}
        <Input
          value={fields.username}
          type={"username"}
          name="username"
          placeholder="* Username"
          isUserTaken
          {...properties}/>

        {/* --- Password --- */}
        <Input
          value={fields.password}
          type={"password"}
          name="password"
          placeholder="* Password"
          {...properties}/>

        {/* --- Password repeat --- */}
        <Input
          value={fields.rePassword}
          type={"password"}
          name="rePassword"
          placeholder="* Repeat Password"
          {...properties}/>

        <div>
          <p className="text-info">
            Fields with <span>*</span> are required!
          </p>
        </div>

        {/* Submit button */}
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => { e.preventDefault();
            this.props.$submit(onValid)}}>
            CREATE ACCOUNT
          </button>

      </form>
    );
  }
}

Form = validated(validationConfig)(Form)

export default RegistrationForm;
