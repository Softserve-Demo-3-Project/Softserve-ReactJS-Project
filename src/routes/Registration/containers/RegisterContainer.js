import {connect} from 'react-redux';
import {registerUser} from '../modules/register';
import RegistrationForm from '../components/RegistrationForm';

const mapActionsToProps = {
  registerUser
};

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapActionsToProps)(RegistrationForm)
