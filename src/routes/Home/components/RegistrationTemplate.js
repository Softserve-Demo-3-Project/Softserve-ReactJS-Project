import React from 'react';
import RegistrationForm from './';

class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
