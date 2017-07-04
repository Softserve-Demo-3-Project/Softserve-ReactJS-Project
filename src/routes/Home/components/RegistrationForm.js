import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>

        <h1>Registration</h1>

        <div className="form-group">
          <label className="control-label">Name</label>
          <input type="text" 
                 name="name"
                 id="name"
                 placeholder=" * Name" 
                 className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Age</label>
          <input type="number" 
                 name="age"
                 id="age"
                 placeholder=" * Age" 
                 className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">E-mail</label>
          <input type="email" 
                 name="email"
                 id="email"
                 placeholder=" * E-mail" 
                 className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" 
                 name="username"
                 id="username"
                 placeholder=" * Username" 
                 className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" 
                 name="password"
                 id="password"
                 placeholder=" * Password" 
                 className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Repeat Password</label>
          <input type="password" 
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