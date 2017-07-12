import {connect} from 'react-redux'
import {isUserTaken} from '../modules/register';
import {registerUser} from '../modules/register';
import RegistrationForm from '../components/RegistrationForm';

const mapActionsToProps = {
  registerUser,
  isUserTaken
};

const mapStateToProps = (state) => ({
  user: state.user,
  username: state.username
})

export default connect(mapStateToProps, mapActionsToProps)(RegistrationForm)
