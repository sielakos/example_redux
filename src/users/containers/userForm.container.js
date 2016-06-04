import { connect } from 'react-redux'
import liftActionCreateToDispatch from '../../common/helpers/liftActionCreatorToDispatch.helper';
import addUser from '../actions/addUser.action';
import changeCurrentUserName from '../actions/changeCurrentUserName.action';
import UserForm from '../components/userForm.component';

export function mapStateTopProps({users: {currentUser}, groups: {groups}}) {
  return Object.assign({}, currentUser, {
    groups
  });
}

export function mapDispatchToProps(dispatch) {
  return {
    onSaveUser: liftActionCreateToDispatch(dispatch, addUser),
    onChangeUserName: liftActionCreateToDispatch(dispatch, changeCurrentUserName)
  }
}

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(UserForm);