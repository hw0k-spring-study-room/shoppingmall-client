import { connect } from 'react-redux';

import Login from '~/components/Login';
import { actions as userActions } from '~/modules/user';

const mapStateToProps = state => ({
  userData: state.user
});

const mapDispatchToProps = dispatch => ({
  loginAttempt: payload => dispatch(userActions.loginAttempt(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
