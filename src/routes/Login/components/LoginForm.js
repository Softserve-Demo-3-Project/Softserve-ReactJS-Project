import React from 'react'

import Input from "../../../components/form/Input";
import { Button } from 'react-bootstrap';
import {validated} from 'react-custom-validation';

class ShowError extends React.Component {
  render() {
    return (<p className="alert alert-danger">
              <strong>Error!</strong> {this.props.message}
            </p>
    );
  }
}

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Incorrect username or password.',
      hasFailedLogin: false,
      user: {
        username: '',
        password: ''
      }
    };
  }

  onChange = (field, value) => {
    console.log('onChange');
    this.setState({
      user: Object.assign({}, this.state.user, {[field]: value})
    });
  }

  onSubmit = () => {
    console.log('onSubmit: ', this.state.user);
    this.props.loginUser(Object.assign({}, this.state.user));
  }

  render() {
    return (
      <Form
        fields={this.state.user}
        message={this.state.message}
        hasFailedLogin={this.state.hasFailedLogin}
        onChange={this.onChange}
        onValid={this.onSubmit}
      />
    );
  }
}



class Form extends React.Component {
  render () {
      const {
      fields,
      message,
      hasFailedLogin,
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
        <form>

          <h1>Login</h1>

          <Input
            value={fields.username}
            type={"username"}
            name="username"
            placeholder="Username"
            {...properties} /> 
          
          <Input
            value={fields.password}
            type={"password"}
            name="password"
            placeholder="Password"
            {...properties}/> 
       
            <button
              className="btn btn-primary btn-lg"
              onClick={(e) => { e.preventDefault();
              this.props.$submit(onValid, onInvalid)}}
              disabled={!$validation.username.isValid || !$validation.password.isValid}
              >
              SUBMIT
            </button>  

            {(hasFailedLogin) ?
            <ShowError message={message} />
            : null}
        </form>
    );
  }
}

let isEmpty = (value) => value ? null : "This field is required";

function validationConfig(props) {
  const {
    username,
    password
  } = props.fields

  return {
    fields: [
      'username',
      'password',
    ],

    validations: {
      username: [
        [isEmpty, username]
      ],
      password: [
        [isEmpty, password]
      ]
    }
  }
}



Form = validated(validationConfig)(Form);

export default LoginForm;